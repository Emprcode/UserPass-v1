import nodemailer from "nodemailer";

const emailProcessing = async (emailInfo) => {
  try {
    //config
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    //SEND EMAIL

    const info = await transporter.sendMail(emailInfo);

    console.log("preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log(error);
  }
};

//EMAIL TEMPLETING
