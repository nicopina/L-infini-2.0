import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {createDishRequest} from '../api/dishes.api';

import "./FormDish.css";

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
			/*Para resetear formulario*/
				initialValues={{
					name: '',
					photo_url: '',
					value:"",
					description:"",
					category:1,
					is_active:1,
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if((valores.name).length >21) {
						errores.name = 'El nombre debe tener menos de 20 caracteres';
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
						errores.name = 'El nombre solo puede contener letras y espacios'
					}

					// validacion precio
					if((valores.value).length > 6) {
						errores.value = 'El precio debe ser inferior a $100.000';
					}else if (!/^[0-9]+$/.test(valores.value)) {
						errores.value = 'El precio solo puede contener numeros';
					}
					//casteo a int
					valores.is_active = parseInt(valores.is_active);
					valores.category = parseInt(valores.category);
					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					console.log(valores);
					createDishRequest(valores);
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
						<div>
							<label htmlFor="Dish">Plato</label>
							<Field className="Text-Box"
								type="text"
								id="name" 
								name="name" 
								maxlength="20"
							/>
							<ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
						</div>
						<div>
							<label htmlFor="photo_url">URL Imagen</label>
							<Field className="Text-Box"
								type="text" 
								id="photo_url" 
								name="photo_url" 
								placeholder="" 
							/>
			
						</div>

						<div>
                            <label htmlFor="category">Categoria</label>
							<Field className="Lista" name="category" as="select">
								<option value="1">Colacion</option>
								<option value="2">Comida Rapida</option>
								<option value="3">Bebidas</option>
							</Field>
						</div>

						

						<div>
                            <label htmlFor="Disponibilidad">Disponibilidad</label>
							<Field className="Lista" name="is_active" as="select">
								<option value='1'>Disponible</option>
								<option value='0'>No Disponible Rapida</option>
							</Field>
						</div>

						<div>
							<Field name="description" as="textarea" placeholder="Descripcion" maxlength="50" />
						</div>

						<div>
							<label htmlFor="value">Precio</label>
							<Field className="Text-Box"
								type="text" 
								id="value" 
								name="value"
								placeholder="2000" 
							/>
							<ErrorMessage name="value" component={() => (<div className="error">{errors.value}</div>)} />
			
						</div>

						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}


				{/* {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
					<form className="formulario" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="nombre">Nombre</label>
							<input 
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="John Doe" 
								value={values.nombre}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<input 
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
								value={values.correo}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
						</div>
						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</form>
				)} */}
			</Formik>
		</>
	);
}
 
export default Formulario;