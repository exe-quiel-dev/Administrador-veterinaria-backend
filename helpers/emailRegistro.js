import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
    
    const { email, nombre, token } = datos; 
      //  Enviar el Email
      
      const info = await transporter.sendMail({
        from: "APV - Administrador de Pacientes Veterinaria",
        to: email,
        subject: 'Comprueba tu cuenta en APV',
        text: 'Comprueba tu cuenta en APV',
        html: `<p>Hola ${nombre}, verifica tu cuenta en APV.</p>
            <p>Para asegurarnos de que seas el propietario accede al siguiente enlace para terminar con la confirmacion de tu cuenta: <a href="${process.env.FRONTEND_URL}/confirmar/${token}"> Comprobar Cuenta</a> </p>
            <p>Si tu no creaste esta cuenta puedes Ignorar este mensaje</p>
        `
      });

      console.log("mensaje enviado: %s", info.messageId);
};

export default emailRegistro;