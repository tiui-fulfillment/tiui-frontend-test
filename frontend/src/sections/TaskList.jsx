import { Box, List } from "@mui/material";
import TaskItem from "../components/TaskItem";

export default function TaskList({ tasks, deleteTask, editTask, toggleCompleted }) {

  return (
    <>
      {tasks.length > 0 ? (
        <>
          <List>
            {tasks.map(task => (
              <TaskItem key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} toggleCompleted={toggleCompleted} />
            ))}
          </List>
        </>
      ) : (
        <Box sx={{ textAlign: "center", marginTop: 3 }}>
          <p>No hay tareas</p>
        </Box>
      )}
    </>
  )
}
