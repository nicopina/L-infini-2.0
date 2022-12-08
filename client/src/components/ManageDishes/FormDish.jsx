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
		<div className="FormDish__container">
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

					// Validacion description
					if((valores.description).length > 255) {
						errores.name = 'La descripción debe tener menos de 255 caracteres';
					}else if(!/^[a-zA-ZÀ-ÿ\s]{1,255}$/.test(valores.description)){
						errores.description = 'La descripción solo puede contener letras y espacios';
					}
					// Validacion name
					if((valores.name).length >100) {
						errores.name = 'El nombre debe tener menos de 100 caracteres';
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,100}$/.test(valores.name)) {
						errores.name = 'El nombre solo puede contener letras y espacios'
					}
					//validacion phot_url
					if((valores.photo_url).length >255) {
						errores.photo_url = 'El URL de la imagen no debe sobrepasar los 255 caracteres';
					} else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.photo_url)) {
						errores.photo_url = 'El URL de la imagen no es valido';

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
							<h2>Ingrese la información del plato</h2>
						</div>
						<div>
							<label htmlFor="Dish">Plato</label>
							<Field className="Text-Box"
								type="text"
								id="name" 
								name="name" 
								maxLength="100"
								placeholder="Porotos con rienda"
							/>
							<ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
						</div>
						<div>
							<label htmlFor="photo_url">URL Imagen</label>
							<Field className="Text-Box"
								type="text" 
								id="photo_url" 
								name="photo_url" 
								placeholder="http://www.ejemplo.com/imagen.jpg" 
								maxLength="255"
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
							<Field name="description" as="textarea" placeholder="Ingrese una descripción sobre el contenido según su categoría" maxLength="255" />
							<ErrorMessage name="description" component={() => (<div className="error">{errors.description}</div>)} />
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
						{formularioEnviado && <p className="exito">Plato agregado con éxito!</p>}
					</Form>
				)}


			
			</Formik>
		</div>
	);
}
 
export default Formulario;