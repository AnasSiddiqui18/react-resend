import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["anassiddiqui0910@gmail.com"],
      subject: "Hello world",
      text: "Hi John,\nWelcome to Acme!",
      react: EmailTemplate({ firstName: "Anas Siddiqui" }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
