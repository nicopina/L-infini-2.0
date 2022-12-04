import nodemailer from 'nodemailer';

//Credenciales del correo
const user = 'fixumsoftware@gmail.com'
const pass = 'gieylweagkojjxyk'

//Creamos el objeto de transporte
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: user, // generated ethereal user
    pass: pass, // generated ethereal password
  },
});