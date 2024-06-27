import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <AppBar color="primary" position="absolute" sx={{ p: 2 }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            EasyTask
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>
            New ToDo
          </Button>
        </Toolbar>
      </AppBar>
      <NewTodoForm open={open} onClose={handleClose} />
    </>
  );
}

type NewTodoFormProps = {
  open: boolean;
  onClose: () => void;
};

function NewTodoForm({ open, onClose }: NewTodoFormProps) {
  const { addTodo } = useTodos();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const description = formJson.description;
    addTodo(description);
    onClose();
  }
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle>New Todo</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          required
          multiline
          id="description"
          name="description"
          label="Description"
          variant="standard"
          helperText="Please provide the description of your todo"
        />
      </DialogContent>
      <DialogActions>
        <Button color="warning" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
