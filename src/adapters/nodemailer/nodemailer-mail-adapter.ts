import { MailAdapter, sendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ab6fa14516c425",
    pass: "29f3443b011f36",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Gustavo Aragão <gustavo.kjr@gmail.com>",
      subject,
      html: body,
    });
  }
}
