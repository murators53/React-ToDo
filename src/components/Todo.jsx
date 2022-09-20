import React, { useState } from "react";
import clsx from 'clsx';
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import { useTodoLayerValue } from "../contex/TodoContext";
const Todo = ({ todo }) => {
    const [{ }, dispatch] = useTodoLayerValue();
    const [editable, setEditable] = useState(false);
    const [content, setContent] = useState(todo.content);

    const completeTodo = (todoId) => {
        dispatch({
            type: 'COMPLETE_TODO',
            payload: todoId,
        });
    };
    const removeTodo = (todoId) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: todoId,
        });
    };

    const updateTodo = ({ todoId, newValue }) => {
        dispatch({
            type: 'UPDATE_TODO',
            payload: {
                todoId,
                newValue,
            },
        });
    };

    const todoStyle = clsx({
        ['todo-row']: true,
        ['completed']: todo.isCompleted,
    });
    return (
        <div className={todoStyle}>
            <div onClick={() => (editable ? '' : completeTodo(todo.id))}>
                {editable ? (
                    <input
                        type="text"
                        value={content}
                        className="todo-input-edit"
                        onChange={(event) => setContent(event.target.value)}
                    />
                ) : (
                    todo.content
                )
                }
            </div>

            <div className="todo-icons">
                <FaTrash className="todo-icon" onClick={() => removeTodo(todo.id)} />
                {
                    editable ? (
                        <FaCheck className="todo-icon" onClick={() => {
                            updateTodo({
                                todoId: todo.id,
                                newValue: content
                            })

                            setContent("");
                            setEditable(false);
                        }} />
                    ) : (
                        <FaEdit className="todo-icon" onClick={() => setEditable(true)} />

                    )
                }

            </div>
        </div>
    );
};

export default Todo;
