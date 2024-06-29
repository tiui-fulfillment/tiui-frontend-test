import connectMongo from "@/utils/connect-mongo";
import { NextRequest, NextResponse } from "next/server";
import Todo from "@/models/todo";
import { HttpStatusCode } from "axios";
import { UpdateTodoDto } from "@/dto/update-todo.dto";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectMongo();
        const todo = await Todo.findById(params.id);
        if (todo) {
            return NextResponse.json({ todo });
        }
        return NextResponse.json({ message: `Todo ${params.id} not found` }, { status: HttpStatusCode.BadRequest });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: HttpStatusCode.BadRequest });
        }
        return NextResponse.json({ message: 'An unknown error occurred' }, { status: HttpStatusCode.BadRequest });
    }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectMongo();
        const todo = await Todo.findById(params.id);
        if (todo) {
            const body: UpdateTodoDto = await req.json();
            if (body.name) {
                todo.name = body.name;
            }
            if (body.description) {
                todo.description = body.description;
            }
            if (body.status) {
                todo.status = body.status; // Actualiza el estado del todo
            }
            await todo.save(); // Guarda los cambios en el todo

            return NextResponse.json({ message: `Todo ${params.id} updated`, todo });
        }
        return NextResponse.json({ message: `Todo ${params.id} not found` }, { status: HttpStatusCode.NotFound });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: HttpStatusCode.BadRequest });
        }
        return NextResponse.json({ message: 'An unknown error occurred' }, { status: HttpStatusCode.BadRequest });
    }
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectMongo();
        const todo = await Todo.findById(params.id);
        if (todo) {
            await Todo.findByIdAndDelete(todo._id);
            return NextResponse.json({ message: `Todo ${params.id} deleted` });
        }
        return NextResponse.json({ message: `Todo ${params.id} not found` }, { status: HttpStatusCode.NotFound });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: HttpStatusCode.BadRequest });
        }
        return NextResponse.json({ message: 'An unknown error occurred' }, { status: HttpStatusCode.BadRequest });
    }
}
