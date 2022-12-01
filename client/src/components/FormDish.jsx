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
					Dish_name: '',
					ImageUrl: '',
					price:"",
					description:"",
					Categoria:"",
					Disponible:""
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if((valores.Dish_name).length >21) {
						errores.Dish_name = 'El nombre debe tener menos de 20 caracteres';
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.Dish_name)) {
						errores.Dish_name = 'El nombre solo puede contener letras y espacios'
					}

					// validacion precio
					if((valores.price).length > 6) {
						errores.price = 'El precio debe ser inferior a $100.000';
					}else if (!/^[0-9]+$/.test(valores.price)) {
						errores.price = 'El precio solo puede contener numeros';
					}
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
								id="Dish_name" 
								name="Dish_name" 
								placeholder="Hamburguesa"
								maxlength="20"
							/>
							<ErrorMessage name="Dish_name" component={() => (<div className="error">{errors.Dish_name}</div>)} />
						</div>
						<div>
							<label htmlFor="ImageUrl">URL Imagen</label>
							<Field className="Text-Box"
								type="text" 
								id="imageUrl" 
								name="ImageUrl" 
								placeholder="" 
							/>
			
						</div>

						<div>
                            <label htmlFor="Categoria">Categoria</label>
							<Field className="Lista" name="Categoria" as="select">
								<option value="Colacion">Colacion</option>
								<option value="Comida Rapida">Comida Rapida</option>
								<option value="Bebidas">Bebidas</option>
							</Field>
						</div>

						

						<div>
                            <label htmlFor="Disponibilidad">Disponibilidad</label>
							<Field className="Lista" name="Disponible" as="select">
								<option value="Disponible">Disponible</option>
								<option value="No Disponible">No Disponible Rapida</option>
							</Field>
						</div>

						<div>
							<Field name="description" as="textarea" placeholder="Descripcion" maxlength="50" />
						</div>

						<div>
							<label htmlFor="Price">Precio</label>
							<Field className="Text-Box"
								type="text" 
								id="price" 
								name="price" 
								placeholder="2000" 
							/>
							<ErrorMessage name="price" component={() => (<div className="error">{errors.price}</div>)} />
			
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