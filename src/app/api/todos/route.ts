import { HttpStatusCode } from "axios";
import connectMongo from "@/utils/connect-mongo";
import Todo from "@/models/todo";
import { NextRequest, NextResponse } from "next/server";
import { CreateTodoDto } from "@/dto/create-todo.dto";

export async function POST(req: NextRequest) {
    try {
        await connectMongo();
        const body: CreateTodoDto = await req.json();
        if (body.name) {
            const todo = await Todo.create(body);
            return NextResponse.json(
                { todo, message: "Your Todo has been Created" },
                { status: HttpStatusCode.Created },
            );
        }
        return NextResponse.json({ message: 'Product Name is Required' }, { status: HttpStatusCode.BadRequest });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: HttpStatusCode.BadRequest });
        }
        return NextResponse.json({ message: 'An unknown error occurred' }, { status: HttpStatusCode.BadRequest });
    }
}

export async function GET(req: NextRequest) {
    try {
        await connectMongo();
        
        const { searchParams } = new URL(req.url);
        const status = searchParams.get('status');

        let todos;
        if (status) {
            todos = await Todo.find({ status });
        } else {
            todos = await Todo.find();
        }

        return NextResponse.json({ data: todos });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error.message }, { status: HttpStatusCode.BadRequest });
        }
        return NextResponse.json({ message: 'An unknown error occurred' }, { status: HttpStatusCode.BadRequest });
    }
}
