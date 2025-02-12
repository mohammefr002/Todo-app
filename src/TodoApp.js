import React, { useState } from "react";

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask("");
        }
    };

    const toggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        {task.text}
                        <button onClick={() => toggleComplete(index)}>✔</button>
                        <button onClick={() => deleteTask(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
