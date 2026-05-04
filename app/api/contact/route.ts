import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, business, message } = await req.json();

  await resend.emails.send({
    from: "onboarding@resend.dev", // o tu dominio verificado
    to: "atencionsystempos@gmail.com",
    subject: `Nuevo solicitud: ${name}`,
    html: `<p><b>Nombre:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Negocio:</b> ${business}</p>
           <p><b>Mensaje:</b> ${message}</p>`,
  });

  return Response.json({ ok: true });
}
