import React, {useState} from 'react';
import { Formik } from 'formik';
import axios from 'axios';

const Formulario = () => {

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

	return (
		<>
            <Formik 
                initialValues={{
                    nombre: '',
                    email: '',
                    tel: '',
                    provincia: '',
                    horario: '',
                    consulta: ''
                }}

                validate={(valores) => {
                    let errores = {};

                    if(!valores.nombre){
                        errores.nombre = "Por favor ingresa un nombre";
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                        errores.nombre = "El nombre solo puede contener letras y espacios";
                    }

                    if(!valores.email){
                        errores.email = "Por favor ingresa un email";
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                        errores.email = "El email ingresado no es válido";
                    }

                    if(!valores.tel){
                        errores.tel = "Por favor ingresa un teléfono";
                    } else if (!/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/.test(valores.tel)){
                        errores.tel = "El número ingresado no es válido";
                    }

                    if(!valores.provincia){
                        errores.provincia = "Por favor selecciona tu Provincia";
                    }

                    if(!valores.horario){
                        errores.horario = "Por favor seleccione una franja horaria";
                    }

                    if(!valores.consulta){
                        errores.consulta = "Por favor ingrese su consulta";
                    }

                    return errores;
                }}

                onSubmit={(valores, {resetForm}) => {

                    axios({
                        method:'POST',
                        url:'https://sistemacaliva.com/api/front-test',
                        mode: 'cors', 'Cache-Control': 'no-cache',
                    
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                            'X-Requested-With': 'XMLHttpRequest',
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZGV2ZWxvcGVyIiwiSXNzdWVyI-joiSXNzdWVyIiwiVXNlcm5hbWUiOiJGcm9udERldiIsImV4cCI6MTYyODY5NTg3NiwiaWF0IjoxNjI4Njk1ODc2fQ.CDRPz6Eta78BzmuNTNZsnzzDU2TRgvEtMs-_aZlWCZQ',
                        },

                        data:{
                            nombre:valores.nombre,
                            email:valores.email,
                            tel:valores.tel,
                            provincia:valores.provincia,
                            horario:valores.horario,
                            consulta:valores.consulta,
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });

                    resetForm();
                    console.log(valores);
                    console.log("enviado");
                    cambiarFormularioEnviado(true);
                    setTimeout(() => cambiarFormularioEnviado(false), 5000);

                }}

                >
                {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
                    <form onSubmit={handleSubmit} className='form'>
                    <div className='form-content'>
                        <div className='form_col01'>
                            <label htmlFor='nombre'>Nombre</label>
                            <input 
                                type='text' 
                                id='nombre' 
                                name='nombre' 
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <hr />
                            {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}

                            <label htmlFor='email'>E-mail</label>
                            <input 
                                type='email' 
                                id='email' 
                                name='email' 
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <hr />
                            {touched.email && errors.email && <div className="error">{errors.email}</div>}

                            <label htmlFor='tel'>Teléfono</label>
                            <input 
                                type='number' 
                                id='tel' 
                                name='tel' 
                                value={values.tel}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <hr />
                            {touched.tel && errors.tel && <div className="error">{errors.tel}</div>}

                        </div>

                        <div className='form_col02'>

                            <label htmlFor='provincia'>Provincia</label>
                            <select  
                                id='provincia' 
                                name='provincia' 
                                value={values.provincia}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            <option></option>
                            <option>Buenos Aires</option>
                            <option>Cordoba</option>
                            </select>
                            <hr />
                            {touched.provincia && errors.provincia && <div className="error">{errors.provincia}</div>}

                            <label htmlFor='horario'>Horario de contacto</label>
                            <select  
                                id='horario' 
                                name='horario' 
                                value={values.horario}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                            <option></option>
                            <option>9hs - 12hs</option>
                            <option>12hs - 15hs</option>
                            <option>15hs - 18hs</option>
                            </select>
                            <hr />
                            {touched.horario && errors.horario && <div className="error">{errors.horario}</div>}

                            <label htmlFor='consulta'>Consulta</label>
                            <input 
                                type='text' 
                                id='consulta' 
                                name='consulta' 
                                value={values.consulta}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <hr />
                            {touched.consulta && errors.consulta && <div className="error">{errors.consulta}</div>}

                        </div>
                    </div>
                    <div className='submit'>
                        <button type='submit' className='submit-btn'>ENVIAR</button>
                    </div>
                    {formularioEnviado && <p className='exito'>{values.nombre}El formulario fue enviado con éxito!</p>}
                </form>
                )}
            </Formik>
		</>
	);
}
 
export default Formulario;