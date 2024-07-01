import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormTodo(props) {

  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());

            props.registerOrUpdateTodoInList(formJson);
            props.handleClose();
          },
        }}
      >
        <DialogTitle>Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingresa los datos para {props.action == "add" ? "Agregar" : "Actualizar"} el ToDo.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Nombre ToDo"
            type="text"
            fullWidth
            variant="outlined"
            defaultValue={props.todo ? props.todo.name : ""}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancelar</Button>
          <Button type="submit">{props.action == "add" ? "Agregar" : "Actualizar"}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
