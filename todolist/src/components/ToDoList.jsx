import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, FormControl, Row, Button, InputGroup, ButtonGroup, ListGroup } from 'react-bootstrap';

//DECLARAMOS LOS ESTADOS
const ToDoList = () => {
    const [toDos, setToDos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [edit, setEdit] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [filter, setFilter] = useState("all");

    //FUNCIONES PARA MANEJAR LOS ESTADOS
    function handleChange(e){
        setInputValue(e.target.value);
    }

    const handleDelete = (index) => {
        const newToDos = [...toDos];
        newToDos.splice(index, 1);
        setToDos(newToDos);
    };

    const handleEdit = (index) => {
        setInputValue(toDos[index].text);
        setEdit(true);
        setCurrentIndex(index);
        //setInputValue(toDos[index].text);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(edit){
            const newToDos = [...toDos];
            newToDos[currentIndex] = {...newToDos[currentIndex], text: inputValue };
            setToDos(newToDos);
            setEdit(false);
            setCurrentIndex(null);
        }
        else
            setToDos([...toDos, { text: inputValue, completed: false }]);
        setInputValue("");
    }

    const toggleComplete = (index) => {
        const newToDos = [...toDos];
        newToDos[index].completed = !newToDos[index].completed;
        setToDos(newToDos)
    }

    const filterToDos = toDos.filter(toDo => {
        if(filter === "completed")
            return toDo.completed;
        else if (filter === "notCompleted")
            return !toDo.completed;
        else
            return true;
    });

    //COMPONENTE        
    return(
        <>
            <Container>
                <Row 
                    className="justify-content-center align-items-center"
                    style={{ fontSize: "3rem", fontWeight: "bolder" }} 
                > 
                    Lista de Tareas
                </Row> 
                <Form onSubmit = { handleSubmit } className = "w-75 mx-auto">
                    <InputGroup className = "mb-3">
                        <FormControl
                            type="text" 
                            value={inputValue} 
                            onChange={handleChange} 
                            placeholder="Ingrese una tarea"
                        />
                        <Button type = "submit">
                        { edit ? "Actualizar Tarea" : "Nueva Tarea"}
                        </Button>
                    </InputGroup>
                </Form> 
                <Row className="justify-content-center align-items-center" >
                    <ButtonGroup className = "w-75">
                        <Button variant = "outline-primary" onClick = { () => setFilter("all") }>Todas</Button>
                        <Button variant = "outline-success" onClick = { () => setFilter("completed") }>Completadas</Button>
                        <Button variant = "outline-warning" onClick = { () => setFilter("notCompleted") }>No completadas</Button>
                    </ButtonGroup>
                </Row>
                <hr />
                <Row className = "justify-content-center">
                    <ListGroup as = "ol" numbered style = {{ width: "75%" }}>
                        {filterToDos.map((toDo, index) => ( 
                            <ListGroup.Item as = "li" key = { index } className = "d-flex justify-content-between align-items-center custom-list-item">
                                <div>
                                    <input
                                        type = "checkbox"
                                        checked = { toDo.completed }
                                        onChange = { ()=> toggleComplete(index) }
                                    />
                                    <span
                                        onClick = { () => toggleComplete(index) }
                                        className = "ml-2"
                                        style = {{ 
                                            textDecoration: toDo.completed ? "line-through" : "none",
                                            cursor: "pointer",
                                            marginLeft: "10px"
                                        }}
                                    >
                                        { toDo.text }
                                    </span>
                                </div>
                                <div>
                                    <Button variant = "warning" size = "sm" onClick = { () => handleEdit(index) }>Editar</Button>
                                    &nbsp;
                                    <Button variant = "danger" size = "sm" onClick = { () => handleDelete(index) }>Borrar</Button>
                                </div>
                            </ListGroup.Item>    
                        ))}
                    </ListGroup>                    
                </Row>
            </Container>
        </>
    );
};

export default ToDoList;