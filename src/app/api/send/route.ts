import { EmailTemplate } from "@/components/email-template";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const filePath =
    "https://drive.google.com/file/d/1nFpVJ5OaC6MLV2eTk83FazcrVLpX2fNS/view?usp=sharing";

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "anassiddiqui0910@gmail.com",
      bcc: ["ayangfx.com@gmail.com", "farahkhurram43@gmail.com"],
      subject: "Hello world",
      text: "Hi John,\nWelcome to Acme!",
      react: EmailTemplate({ firstName: "Anas Siddiqui" }),

      attachments: [
        {
          content: "This is a vercel logo",
          filename: "vercel.svg",
          path: filePath,
        },
      ],
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
