import { useEffect, useState } from "react"
import { Card, CardContent, Typography } from "@mui/material"
import AddTask from "./components/AddTask";
import TaskList from "./sections/TaskList"
import Header from "./sections/Header";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const editTask = (id, text) => setTasks(tasks.map((task) => task.id === id ? { ...task, text } : task));

  const toggleCompleted = (id) => setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        To Do List
      </Typography>
      <Card sx={{ width: { xs: "100%", sm: 600 } }}>
        <CardContent>
          <Header setFilter={setFilter} />
          <AddTask addTask={addTask} />
          <TaskList tasks={filteredTasks} deleteTask={deleteTask} editTask={editTask} toggleCompleted={toggleCompleted} />
        </CardContent>
      </Card>
    </>
  )
}

export default App
