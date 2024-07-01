import "./App.css";
import { Alert, Box, Grid, Snackbar } from "@mui/material";
import InputAddTodo from "./components/add-todo-input";
import { useTodo } from "./hooks/useTodo";
import { FilterSelector } from "./components/filter-selector";
import { TodoList } from "./components/todo-list";

function App() {
  const {
    addTodo,
    todos,
    updTodoCheck,
    countTodos,
    updateTodo,
    applyFilter,
    deleteTodo,
    alert,
    alertMsg,
    showAlertStatus
  } = useTodo();

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    showAlertStatus(false);
  };

  return (
    <Grid
      container
      width={"100%"}
      sx={{ display: "flex", justifyContent: "center", padding: 0 }}
    >
      <Grid item xs={12} sm={12} md={8} p={0}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"100vh"}
          width={"100%"}
          sx={{ bgcolor: "lightgray", borderRadius: "10px" }}
        >
          <Box
            padding={2}
            sx={{ bgcolor: "#286480", borderRadius: "8px 8px 2px 2px" }}
          >
            <InputAddTodo addTodo={addTodo} showAlertStatus={showAlertStatus} />
          </Box>

          <Box
            padding={1}
            m={1}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <FilterSelector applyFilter={applyFilter} countTodos={countTodos} />
          </Box>
          <TodoList
            todos={todos}
            updTodoCheck={updTodoCheck}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            showAlertStatus={showAlertStatus}
          />
        </Box>
      </Grid>
      {alert && <Snackbar open={alert} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={2000} onClose={handleCloseAlert}>
                  <Alert
                    severity="warning"
                    variant="filled"
                  >
                    {alertMsg}
                  </Alert>
                </Snackbar>}
    </Grid>
  );
}

export default App;
