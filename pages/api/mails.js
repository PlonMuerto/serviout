import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host:"serviout.com",
  port:465,
  secure:true,
  auth:{
    user: 'web@serviout.com',
    pass:"_daniel_"
  }

});

export default function handler(req, res) {
  transporter.sendMail({
    from:"'Servi Out Messages' <web@serviout.com> ",
    to:"administracion@serviout.com",
    subject:'website contact form',
    text:"text"
  })
  res.status(200).json({ name: 'John Doe' })
}
