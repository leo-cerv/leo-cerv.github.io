import React from 'react'
import * as S from "./Contacts.styles";
import { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";

const Contacts = () => {
    
// state para actualizar los datos del formulario
const [contactDates, setContactDates] = useState({
        name:"",
        email:"",
        message:"",
        chekedTerms: false

    });


const [emptyImputs, setEmptyInputs] = useState(false);
const [successSendForm, setSuccessSendForm] = useState(false);
const [errorSendForm, setErrorSendForm] = useState(false);

// funciones para enviar fomulario
const form = useRef();



const onSubmit = (e) => {
    
    //evitrmos el recargo de la pagina
    e.preventDefault();

    // validar formulario
    if(contactDates.name === "" || contactDates.email === "" || contactDates.message === "" || contactDates.chekedTerms === false){
       
        setEmptyInputs(true);
        
    } else {
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_USER_ID
        )
        .then(
            (result) => {
                setSuccessSendForm(true)

            },
            (error) => {
                setErrorSendForm(true);
            }
            
            
            );
            
        }

    };

    //enviar formulario








  return (
    <S.ContainerContact>
        <S.Title> Contáctame </S.Title>


        <S.ContainerForm>

        {successSendForm ? (

            <S.SucessMessage>El mensaje se ha enviado correctamente</S.SucessMessage>

        ): (




           
            <S.Form onSubmit={onSubmit} ref={form}>
                <S.InputForm placeholder='Nombre' type="text" name="name" onChange={(e) => setContactDates({...contactDates, name: e.target.value}) } value={contactDates.name}></S.InputForm> {/*el"...contactDates , los "..." son para que me haga una copia de lo que ya habia, para que quede intacto lo de antes*/}
                <S.InputForm placeholder='E-mail' type="email" name="email" onChange={(e) => setContactDates({...contactDates, email: e.target.value}) } value={contactDates.email}></S.InputForm>
                <S.TextArea placeholder='Escribe el mensaje' name='message'onChange={(e) => setContactDates({...contactDates, message: e.target.value}) } value={contactDates.message}></S.TextArea>
                
                <S.ContainerConditions>
                    <input type="checkbox" onChange={(e) => setContactDates({...contactDates, chekedTerms: e.target.checked})}></input>
                    <span> Acepto los terminos y condiciones</span>
                
                </S.ContainerConditions>


                <S.Button type="submit">Enviar</S.Button>

            </S.Form>

            ) }

             {emptyImputs && (
               <p> Por favor, complete todos los campos y acepte los terminos</p>
               )}

            {errorSendForm && (
                    <S.TextError>Ha ocurrido un error. Intena más tarde o me puedes escribir directamente a: <b> restodata.chile@gmail.com </b></S.TextError>
                )}
        </S.ContainerForm>
                
               

    




       
  


    </S.ContainerContact>
  )
}

export default Contacts