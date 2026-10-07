export const nav = [
  { href: "#inicio", label: "Início" }, { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" }, { href: "#projetos", label: "Projetos" },
  { label: "Planos", href: "#planos" }, { href: "#contato", label: "Contato" },
];
export const areas = [
  {
    n: "01",
    t: "Desenvolvimento",
    d: "Produtos digitais construídos para resolver problemas reais."
  },
  {
    n: "02",
    t: "Web",
    d: "Sites, landing pages e aplicações web rápidas e responsivas."
  },
  {
    n: "03",
    t: "Sistemas",
    d: "Soluções personalizadas para processos, operações e negócios."
  },
  {
    n: "04",
    t: "Integrações",
    d: "APIs e integrações que conectam sistemas e dados."
  }
]

export const services = [
  {
    t: "Desenvolvimento web",
    d: "Sites institucionais, landing pages e aplicações web."
  },
  {
    t: "Sistemas personalizados",
    d: "Plataformas e sistemas desenvolvidos de acordo com a necessidade do negócio."
  },
  {
    t: "APIs & integrações",
    d: "APIs robustas e integrações entre sistemas, serviços e dados."
  },
  {
    t: "Produtos digitais",
    d: "Do conceito à implementação de produtos digitais sob medida."
  }
]
export const steps = [
  { t: "Entender", flow: "Problema", d: "Entendemos o problema, o negócio e os objetivos." },
  { t: "Planejar", flow: "Estratégia", d: "Definimos a solução, escopo e prioridades." },
  { t: "Desenvolver", flow: "Desenvolvimento", d: "Construímos, testamos e refinamos o produto." },
  { t: "Entregar", flow: "Produto", d: "Colocamos a solução para funcionar." },
];
export type Project = {
  slug: string; name: string; category: string; summary: string;
  problem: string; solution: string; result: string;
  stack: string[]; accent: string; image?: string; // ex.: "/projects/sigami.png"
};
// Para adicionar um projeto: inclua um objeto aqui e a imagem em /public/projects.
export const projects: Project[] = [
  {
    slug: "sigami", name: "SIGAMI", category: "Gestão pública · Sistemas", accent: "#a855f7",
    summary: "Sistema desenvolvido para gerenciamento de solicitações e processos municipais.",
    problem: "Solicitações e processos espalhados entre papel, planilhas e mensagens.",
    solution: "Um sistema único para registrar, encaminhar e acompanhar cada solicitação.",
    result: "O andamento de cada processo passa a estar em um só lugar.",
    stack: ["Django", "React", "PostgreSQL"],
  },
  {
    slug: "codefit", name: "CODEFIT", category: "Gestão · Academia", accent: "#22d3ee",
    summary: "Sistema para gerenciamento de alunos, planos, pagamentos e matrículas.",
    problem: "Alunos, planos e pagamentos controlados à mão, com cobranças desencontradas.",
    solution: "Cadastro, matrículas e pagamentos reunidos em um único sistema.",
    result: "A academia sabe quem está em dia e quem precisa de contato.",
    stack: ["Next.js", "Fastify", "PostgreSQL"],
    image: "/projects/codefit.png"
  },
];
export const contact = {
  whatsapp: { display: "+55 XX XXXXX-XXXX", url: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? "5500000000000"}` },
  email: "fluxy.agenciadigital@gmail.com",
  socials: [
    { label: "WhatsApp", href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? "5500000000000"}` },
    { label: "Instagram", href: "https://instagram.com/werka.dev" },
    // { label: "LinkedIn", href: "https://linkedin.com/company/fluxy" },
  ],
};
export type Plan = {
  n: string;
  t: string;
  para: string;
  items: string[];
  price?: string; // ex.: "A partir de R$ 3.000". Se omitido, exibe "Sob consulta".
};

export const plans: Plan[] = [
  {
    n: "01",
    t: "Site & landing page",
    para: "Para empresas que precisam de presença digital clara e rápida.",
    items: [
      "Sites institucionais e landing pages",
      "Layout responsivo, rápido e acessível",
      "Formulário de contato funcionando",
      "Publicação e ajustes finais",
    ],
    price: "A partir de R$200,00"
  },
  {
    n: "02",
    t: "Sistema personalizado",
    para: "Para operações que precisam de um sistema feito sob medida.",
    items: [
      "Plataforma desenvolvida conforme o seu processo",
      "APIs e integrações com outros sistemas",
      "Testes e refinamento com a sua equipe",
      "Acompanhamento até a entrada em produção",
    ],
    price: "A partir de R$400,00"
  },
  {
    n: "03",
    t: "Produto digital",
    para: "Para quem tem uma ideia e precisa tirar do papel.",
    items: [
      "Do conceito à implementação",
      "Definição de escopo e prioridades",
      "Desenvolvimento por etapas",
      "Produto em produção",
    ],
  },
];

