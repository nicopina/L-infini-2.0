import React, {useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {createDishRequest} from '../../api/dishes.api';
import {getDishesCategoriesRequest} from '../../api/dishesCategories.api';


import "./FormDish.css";

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	const [dishCategory, setDishCategory] = useState([]);
	/* obtengo valores de categorias y tipos de platos */
	useEffect(() => {
		getDishesCategoriesRequest().then((response) => {
		setDishCategory(response.data);
			});
		}, []);

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
					//validacion phot_url
					if((valores.photo_url).length >255) {
						errores.photo_url = 'El URL de la imagen no debe sobrepasar los 255 caracteres';
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
								maxlength="255"
							/>
							<ErrorMessage name="photo_url" component={() => (<div className="error">{errors.photo_url}</div>)} />
			
						</div>

						<div>
                            <label htmlFor="category">Categoria</label>
							<Field className="Lista" name="category" as="select">
								{dishCategory.map((category) => (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								))}
								
							</Field>
						</div>

						

						<div>
                            <label htmlFor="Disponibilidad">Disponibilidad</label>
							<Field className="Lista" name="is_active" as="select">
								<option value='1'>Disponible</option>
								<option value='0'>No Disponible</option>
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


			
			</Formik>
		</>
	);
}
 
export default Formulario;