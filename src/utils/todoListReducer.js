import { createSlice } from '@reduxjs/toolkit';

const uuid = () => {
  return new Date().getTime() + Math.floor(Math.random() * 100);
};

const todoList = createSlice({
  name: 'todolist',
  initialState: JSON.parse(localStorage.getItem('todo-list')) || [],
  reducers: {
    add: (state, action) => {
      const newTodoList = [
        ...state, {
          task: action.payload,
          completed: action.payload.completed || false,
          id: uuid()
        }
      ];
      localStorage.setItem('todo-list',JSON.stringify(newTodoList));
      return newTodoList;
    },
    update: (state, action) => {
      const newTodoList = state.map(item => {
        if(item.id == action.payload.newItem.id){
          item = action.payload.newItem;
        }
        return item;
      });
      localStorage.setItem('todo-list',JSON.stringify(newTodoList));
      return newTodoList;
    },
    del: (state, action) => {
      const newTodoList = state.map(item=>{return item.id!=action.payload?item:null}).filter(item=>item);
      localStorage.setItem('todo-list',JSON.stringify(newTodoList));
      return newTodoList;
    },
    toggle: (state, action) => {
      const newTodoList = state.map(item => {
        let newItem;
        if(item.id == action.payload.id){
          newItem = {...item};
          newItem.completed = !action.payload.completed;
          return newItem;
        }
        return item;
      });
      localStorage.setItem('todo-list',JSON.stringify(newTodoList));
      return newTodoList;
    },
    filter: (state, action) => {
      const typeFilter = action.payload == 'true' ?  true : false;
      const localList = JSON.parse(localStorage.getItem('todo-list'));
      const newTodoList = localList.map(item=>{return item.completed==typeFilter?item:null}).filter(item=>item);
      return action.payload.length>0?newTodoList:localList;
    }
  },
});

export const { add, del, update, toggle, filter } = todoList.actions;
export default todoList.reducer;