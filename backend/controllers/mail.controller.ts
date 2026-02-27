import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const sendMail = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, message, formId } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      // tls: {
      //   rejectUnauthorized: false,
      // },
    });
    await transporter.sendMail({
      from: `"New Inquiry"`,
      // to: ["anuj@adaired.org"],
      to: ["dheeraj@adaired.com", "sahil@adaired.com", "ratanjyot@adaired.org"],

      subject: `New Inquiry`,

      html: `
  <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px">
  <tr><td align="center">

  <table width="700" cellpadding="0" cellspacing="0"
  style="background:linear-gradient(135deg,#F28F17 0%,#FFFAF4 50%,#66B5FF 100%);
  border-radius:12px;padding:30px">

<tr>
  <td 
    align="left" 
    style="padding-bottom:20px;
           font-size:22px;
           font-weight:bold;
           color:#ffffff;
           line-height:1.6;">
    
    <div>New Inquiry Received</div>
    <div style="font-size:14px;font-weight:normal;">
      ${new Date().toLocaleString()}
    </div>

  </td>
</tr>

  <tr><td>
  <table width="100%" style="background:#ffffff;border-radius:12px">
  <tr><td style="padding:30px">

  <table width="100%" cellpadding="8" cellspacing="0">

  <tr>
  <td width="160"><b>Name:</b></td>
  <td>${name}</td>
  </tr>

  <tr>
  <td><b>Email:</b></td>
  <td>${email}</td>
  </tr>

  <tr>
  <td><b>Phone:</b></td>
  <td>${phone}</td>
  </tr>

  <tr>
  <td valign="top"><b>Message:</b></td>
  <td style="line-height:1.6">${message}</td>
  </tr>
  </td></tr>
  </table>
  </body>
  `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};
