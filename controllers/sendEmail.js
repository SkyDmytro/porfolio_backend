import {emailSchema} from "../schemas/emailSchema.js";
import nodemailer from "nodemailer";
import { ValidationError } from "yup";
import {emailHtml } from "../helpers/functions.js";
export const sendEmail = async (req, res) => {
  
  try {
    const validatedBody = await emailSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const {
      email: senderEmail,
      name: senderName,
      message: emailMessage,
    } = validatedBody;

    const emailText = `Email: ${senderEmail}\nName: ${senderName}\nMessage: ${emailMessage}`;
    const emailHtmlText = emailHtml(senderName, senderEmail, emailMessage);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER_TO,
      subject: senderName,
      text: emailText,
      html: emailHtmlText,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("ValidationError:", error.errors);
      res.status(400).send(error.errors);
    } else {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    }
  }
}
