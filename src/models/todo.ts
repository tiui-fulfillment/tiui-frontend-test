import { model,models,Schema } from "mongoose";

export interface ITodo{
    name:string;
    description: string;
    status: string;
}

const TodoSchema = new Schema<ITodo>(
    {
        name:String,
        description:String,
        status:String,
    },
    {
        timestamps:true,
        toJSON:{
            versionKey:false,
            virtuals: true,
            transform: (_, ret) =>{
                delete ret._id;
            },
        },
    },
);

const Todo = models.Todo || model('Todo', TodoSchema);

export default Todo;