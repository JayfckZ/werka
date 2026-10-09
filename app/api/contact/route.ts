
import { NextResponse } from "next/server"
import { Resend } from "resend"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const runtime = "nodejs"

const valid = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const clean = (value: unknown, max: number) =>
  String(value ?? "").trim().slice(0, max)

const escapeHtml = (value: string) => {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }

  return value.replace(/[&<>"']/g, (char) => entities[char]!)
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)

  const name = clean(body?.name, 120)
  const email = clean(body?.email, 160)
  const company = clean(body?.company, 160)
  const plan = clean(body?.plan, 120)
  const message = clean(body?.message, 5000)

  if (!name || !valid(email) || !plan || !message) {
    return NextResponse.json(
      { error: "Preencha nome, e-mail, plano e mensagem." },
      { status: 400 }
    )
  }

  const {
    RESEND_API_KEY,
    CONTACT_FROM,
    CONTACT_TO,
  } = process.env

  if (!RESEND_API_KEY || !CONTACT_FROM || !CONTACT_TO) {
    console.error(
      "[contact] Variáveis de ambiente de e-mail não configuradas"
    )

    return NextResponse.json(
      { error: "Envio indisponível no momento." },
      { status: 500 }
    )
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    company: escapeHtml(company || "Não informado"),
    plan: escapeHtml(plan),
    message: escapeHtml(message),
  }

  const html = `
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Novo contato | WERKA</title>

    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Schibsted+Grotesk:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    >

    <style>
      body, p, h1, td, a {
        font-family: 'Schibsted Grotesk', Arial, Helvetica, sans-serif;
      }

      .mono {
        font-family: 'JetBrains Mono', 'Courier New', monospace;
      }

      @media screen and (max-width: 480px) {
        .email-container {
          padding-left: 8px !important;
          padding-right: 8px !important;
        }

        .email-title {
          font-size: 30px !important;
          letter-spacing: -1px !important;
        }
      }
    </style>
  </head>

  <body style="
    margin: 0;
    padding: 0;
    background: #ffffff;
    color: #171717;
    font-family: 'Schibsted Grotesk', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  ">
    <table
      role="presentation"
      width="100%"
      cellspacing="0"
      cellpadding="0"
      border="0"
      style="width:100%;background:#ffffff;"
    >
      <tr>
        <td align="center" style="padding:24px 16px 40px;">
          <table
            role="presentation"
            width="640"
            cellspacing="0"
            cellpadding="0"
            border="0"
            class="email-container"
            style="width:100%;max-width:640px;"
          >

            <!-- Cabeçalho com o logo original -->
            <tr>
              <td style="
                padding:12px 0 20px;
                border-bottom:1px solid #262626;
              ">
                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                >
                  <tr>
                    <td align="left" valign="middle">
                      <img
                        src="cid:werka-logo"
                        alt="WERKA"
                        width="120"
                        style="
                          display:block;
                          width:120px;
                          max-width:100%;
                          height:auto;
                          border:0;
                          outline:none;
                          text-decoration:none;
                        "
                      >
                    </td>

                    <td
                      align="right"
                      valign="middle"
                      style="
                        font-family:'JetBrains Mono','Courier New',monospace;
                        font-size:10px;
                        letter-spacing:1px;
                        color:#777777;
                      "
                    >
                      NOVO CONTATO
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Apresentação -->
            <tr>
              <td style="padding:36px 0 32px;">
                <p style="
                  margin:0 0 18px;
                  font-family:'JetBrains Mono','Courier New',monospace;
                  font-size:10px;
                  letter-spacing:2px;
                  color:#777777;
                  text-transform:uppercase;
                ">
                  FORMULÁRIO DO SITE / 01
                </p>

                <h1 class="email-title" style="
                  margin:0;
                  font-family:'Schibsted Grotesk',Arial,Helvetica,sans-serif;
                  font-size:38px;
                  line-height:1.13;
                  letter-spacing:-1.5px;
                  font-weight:700;
                  color:#171717;
                ">
                  Chegou uma nova proposta
                </h1>

                <p style="
                  margin:18px 0 0;
                  font-family:'Schibsted Grotesk',Arial,Helvetica,sans-serif;
                  font-size:15px;
                  line-height:1.8;
                  color:#666666;
                ">
                  Uma pessoa preencheu o formulário de contato
                  da WERKA. Confira os dados e entre em contato.
                </p>
              </td>
            </tr>

            <!-- Dados do contato -->
            <tr>
              <td style="
                padding:20px 0 24px;
                border-top:1px solid #262626;
              ">
                <p style="
                  margin:0;
                  font-family:'JetBrains Mono','Courier New',monospace;
                  font-size:11px;
                  letter-spacing:1.5px;
                  color:#777777;
                  text-transform:uppercase;
                ">
                  Dados do contato
                </p>
              </td>
            </tr>

            <!-- Nome -->
            <tr>
              <td style="padding:0 0 18px;border-bottom:1px solid #dedede;">
                <p style="
                  margin:0 0 8px;
                  font-family:'JetBrains Mono','Courier New',monospace;
                  font-size:10px;
                  letter-spacing:1.5px;
                  color:#777777;
                  text-transform:uppercase;
                ">
                  Nome
                </p>

                <p style="
                  margin:0;
                  font-family:'Schibsted Grotesk',Arial,Helvetica,sans-serif;
                  font-size:16px;
                  line-height:1.6;
                  font-weight:600;
                  color:#171717;
                  overflow-wrap:anywhere;
                ">
                  ${safe.name}
                </p>
              </td>
            </tr>

            <!-- E-mail -->
            <tr>
              <td style="padding:18px 0;border-bottom:1px solid #dedede;">
                <p style="
                  margin:0 0 8px;
                  font-family:'JetBrains Mono','Courier New',monospace;
                  font-size:10px;
                  letter-spacing:1.5px;
                  color:#777777;
                  text-transform:uppercase;
                ">
                  E-mail
                </p>

                <p style="
                  margin:0;
                  font-size:15px;
                  line-height:1.6;
                  overflow-wrap:anywhere;
                ">
                  <a
                    href="mailto:${safe.email}"
                    style="
                      font-family:'Schibsted Grotesk',Arial,Helvetica,sans-serif;
                      color:#171717;
                      text-decoration:underline;
                      text-decoration-color:#a855f7;
                    "
                  >${safe.email}</a>
                </p>
              </td>
            </tr>

            <!-- Empresa -->
            <tr>
              <td style="padding:18px 0;border-bottom:1px solid #dedede;">
                <p style="
                  margin:0 0 8px;
                  font-family:'JetBrains Mono','Courier New',monospace;
                  font-size:10px;
                  letter-spacing:1.5px;
                  color:#777777;
                  text-transform:uppercase;
                ">
                  Empresa
                </p>

                <p style="
                  margin:0;
                  font-family:'Schibsted Grotesk',Arial,Helvetica,sans-serif;
                  font-size:15px;
                  line-height:1.6;
                  color:#171717;
                  overflow-wrap:anywhere;
                ">
                  ${safe.company}
                </p>
              </td>
            </tr>

            <!-- Plano -->
            <tr>
              <td style="padding:18px 0 24px;border-bottom:1px solid #262626;">
                <p style="
                  margin:0 0 8px;
                  font-family:'JetBrains Mono','Courier New',monospace;
                  font-size:10px;
                  letter-spacing:1.5px;
                  color:#777777;
                  text-transform:uppercase;
                ">
                  Plano de interesse
                </p>

                <p style="
                  margin:0;
                  font-family:'Schibsted Grotesk',Arial,Helvetica,sans-serif;
                  font-size:15px;
                  line-height:1.6;
                  font-weight:600;
                  color:#171717;
                  overflow-wrap:anywhere;
                ">
                  ${safe.plan}
                </p>
              </td>
            </tr>

            <!-- Mensagem -->
            <tr>
              <td style="padding:32px 0 36px;">
                <p style="
                  margin:0 0 18px;
                  font-family:'JetBrains Mono','Courier New',monospace;
                  font-size:11px;
                  letter-spacing:1.5px;
                  color:#777777;
                  text-transform:uppercase;
                ">
                  Mensagem / 02
                </p>

                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                >
                  <tr>
                    <td
                      width="3"
                      style="width:3px;background:#0652DD;font-size:0;"
                    >&nbsp;</td>

                    <td style="
                      padding:0 0 0 18px;
                      font-family:'Schibsted Grotesk',Arial,Helvetica,sans-serif;
                      font-size:15px;
                      line-height:1.9;
                      color:#333333;
                      white-space:pre-wrap;
                      overflow-wrap:anywhere;
                    ">${safe.message}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Rodapé -->
            <tr>
              <td style="padding:20px 0 0;border-top:1px solid #262626;">
                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                >
                  <tr>
                    <td style="
                      font-family:'JetBrains Mono','Courier New',monospace;
                      font-size:11px;
                      font-weight:700;
                      letter-spacing:2px;
                      color:#171717;
                    ">
                      <img
                        src="cid:werka-logo"
                        alt="WERKA"
                        width="120"
                        style="
                          display:block;
                          width:120px;
                          max-width:100%;
                          height:auto;
                          border:0;
                          outline:none;
                          text-decoration:none;
                        "
                      >
                    </td>

                    <td align="right" style="
                      font-family:'Schibsted Grotesk',Arial,Helvetica,sans-serif;
                      font-size:11px;
                      line-height:1.6;
                      color:#888888;
                    ">
                      Contato recebido pelo site
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`

  const text = [
    "WERKA — NOVO CONTATO",
    "",
    `Nome: ${name}`,
    `E-mail: ${email}`,
    `Empresa: ${company || "Não informado"}`,
    `Plano: ${plan}`,
    "",
    "MENSAGEM",
    message,
  ].join("\n")

  try {
    const logoPath = join(
      process.cwd(),
      "public",
      "werka-cropped-logo.png"
    )

    const logo = await readFile(logoPath)
    const resend = new Resend(RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Novo contato pelo site!`,
      html,
      text,
      attachments: [
        {
          content: logo.toString("base64"),
          filename: "werka-cropped-logo.png",
          contentId: "werka-logo",
        },
      ],
    })

    if (error) {
      console.error("[contact]", error)

      return NextResponse.json(
        { error: "Não foi possível enviar." },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[contact] Erro inesperado:", error)

    return NextResponse.json(
      { error: "Não foi possível enviar." },
      { status: 500 }
    )
  }
}
