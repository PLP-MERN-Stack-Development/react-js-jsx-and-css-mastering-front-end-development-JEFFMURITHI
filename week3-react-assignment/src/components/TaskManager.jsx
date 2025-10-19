import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "./Button";
import Card from "./Card";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  // Add a new task
  const addTask = () => {
    if (!newTask.trim()) return;
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Toggle complete / undo
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Filter tasks
  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <Card title="Task Manager">
      {/* Input section */}
      <div className="flex mb-4">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="border border-gray-300 dark:border-gray-700 rounded-l-md px-3 py-2 w-full focus:outline-none"
        />
        <Button onClick={addTask} variant="primary">
          Add
        </Button>
      </div>

      {/* Filter buttons */}
      <div className="flex space-x-2 mb-4">
        <Button
          variant={filter === "all" ? "primary" : "secondary"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "primary" : "secondary"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "primary" : "secondary"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>

      {/* Task list */}
      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center px-3 py-2 rounded-md shadow-sm ${
              task.completed
                ? "bg-green-100 dark:bg-green-800"
                : "bg-gray-100 dark:bg-gray-800"
            }`}
          >
            <span
              className={`flex-1 ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.text}
            </span>
            <div className="flex space-x-2">
              <Button
                variant={task.completed ? "secondary" : "success"}
                onClick={() => toggleTask(task.id)}
              >
                {task.completed ? "Undo" : "Complete"}
              </Button>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {/* Empty state */}
      {filteredTasks.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No tasks available</p>
      )}
    </Card>
  );
};

export default TaskManager;
