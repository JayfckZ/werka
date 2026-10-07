import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b?.name || !b?.email || !b?.message)
    return NextResponse.json({ error: "Preencha nome, e-mail e mensagem." }, { status: 400 });
  // TODO: enviar o e-mail aqui (Resend, Postmark, SES...) com chaves em process.env
  return NextResponse.json({ ok: true });
}
