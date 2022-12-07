import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {createDishCategoryRequest} from '../../api/dishesCategories.api';


import "./FormDishCategory.css";

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	
	
	return (
		<>
			<Formik
			
			/*Para resetear formulario*/
				initialValues={{
					name: '',
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if((valores.name).length >30) {
						errores.name = 'El nombre debe tener menos de 20 caracteres';
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
						errores.name= 'El nombre solo puede contener letras y espacios'
					}
					return errores;

					
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					createDishCategoryRequest(valores);
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
						<h2 style={{color:'black',textAlign:'center'}}>Ingresar categoria de plato</h2>
						<div>
							<label htmlFor="Dishcategory">Categoria de Plato</label>
							<Field className="Text-Box"
								type="text"
								id="name" 
								name="name" 
								maxlength="20"
							/>
							<ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
						</div>
						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}


			
			</Formik>
		</>
	);
}
 
export default Formulario;