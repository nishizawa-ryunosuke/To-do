import React from 'react';

type TodoItemProps = {
    task: string;
    toggleCompletion: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ task, toggleCompletion }) => {
    return (
        <div className="flex justify-between p-2 border-b bg-white mb-5">
            <span className="flex-1">{task}</span>
            <button onClick={toggleCompletion} className="text-xl">
                ✗
            </button>
        </div>
    );
};

export default TodoItem;