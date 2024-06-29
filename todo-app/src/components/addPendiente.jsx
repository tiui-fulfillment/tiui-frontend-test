import React from "react";
import { useForm } from "../hooks/useForm";

export const AddPendiente = ({ handleNewTodo }) => {
	const { descripcion, onInputChange, onResetForm } = useForm({
		descripcion: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (descripcion.length <= 1) return;

		let newTodo = {
			id: new Date().getTime(),
			descripcion: descripcion,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='addPendiente'
				name='descripcion'
				value={descripcion}
				onChange={onInputChange}
				placeholder='¿Qué Pendientes tiene hoy?'
			/>

			<button className='btn btn-success' type='submit'>Añadir</button>
		</form>
	);
};

