import React, { useState } from "react";

export const TodoItem = ({text, key, id, isComplete}) => {

  return (
    <>
       <div className="flex justify-between items-center gap-2">
            <label className={`hover:bg-slate-100 flex-1 px-3 py-4 rounded-md coursor-pointer ${isComplete?"line-through":""}`} >{text}</label>
          
            <div className="hover:bg-red-900 coursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </div>
        </div>
    </>
  );
};
