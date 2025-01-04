import React, { useRef } from "react";
import { TodoItem } from "./TodoItem";
import { useState } from "react";

export const Todo = () => {
  const [todoList, SetTodoList] = useState([
    {
      id: 123,
      text: "read books",
      isComplete: true,
    },
    {
      id: 124,
      text: "Upload Videos in youtube",
      isComplete: true,
    },
  ]);
    const inputRef= useRef()
// add task
    const addTask = () => {
      const inputText = inputRef.current.value.trim();
      if (inputText === "") 
       {
        return null;
       }
       const newTask = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
       }
        SetTodoList([...todoList, newTask]);
        inputRef.current.value="";
    };

    const completeStatus = (id) => {
      SetTodoList((prev)=> {
        return prev.map((todo) => {
          if (todo.id === id) {
            return { ...todo, isComplete: !todo.isComplete };
          }
          return todo;
        });
      });
    };

    const removeElement = (id) => {
      SetTodoList((prev) => {
        return prev.filter((todo) => todo.id !== id);
      });
    };

  return (
    <>
      <div className="w-[30-rem]">
        <h1 className="text-lg my-2 font-medium text-amber-500">To-do List</h1>
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              type="text"
              name=""
              id=""
              placeholder="Add Your Task"
              ref={inputRef}
              className="px-3 py-4 w-full text-sm border focus:outline-none focus:border-blue-400"
            />
          </div>
          <button onClick={addTask} className="py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-sm border-none ">
            Add Task
          </button>
        </div>
        <p className="my-3 text-sm text-zinc-400 px-1">My life is Happy</p>
      </div>
      <div className="w-[30-rem] bg-white shadow py-6 px-4">
        <fieldset>
          <legend className="text-green-500 font-medium">List of task</legend>
          {todoList.length !== 0 ? (
            todoList.map(( todo,  index ) =>{
              return (
                <TodoItem
                  text={todo.text}
                  key={index}
                  id={todo.id}
                  isComplete={todo.isComplete}
                  completeStatus={completeStatus}
                  removeElement={removeElement}
                />
              );
            })
          ) : (
            <p>No task found</p>
          )}
        </fieldset>
      </div>
    </>
  );
};





    