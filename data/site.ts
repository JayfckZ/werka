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

// t = título · d = resumo (linha fechada) · o = explicação · q = quando faz sentido
// plan = nome do plano a pré-selecionar no contato (precisa ser igual ao `t` de um item de `plans`)

export type Service = { t: string; d: string; o: string; q: string; plan: string };

export const services: Service[] = [
  {
    t: "Landing page",
    d: "Uma página, um objetivo.",
    o: "Uma página única, pensada para uma ação só: apresentar uma oferta, captar contatos ou divulgar um lançamento. Texto direto, carregamento rápido e um caminho claro até o clique que importa.",
    q: "Você quer divulgar um produto, campanha ou serviço específico e acompanhar quantas pessoas respondem.",
    plan: "Site & landing page",
  },
  {
    t: "Site institucional",
    d: "O endereço oficial da sua empresa.",
    o: "O lugar onde as pessoas descobrem quem você é, o que faz e como falar com você. Várias páginas, organizadas para quem chega pelo Google, por uma indicação ou pelo cartão de visitas.",
    q: "Você precisa passar credibilidade, ser encontrado na internet ou ainda não tem presença online.",
    plan: "Site & landing page",
  },
  {
    t: "Sistema personalizado",
    d: "Um programa feito para o seu jeito de trabalhar.",
    o: "Um sistema sob medida para o funcionamento do seu negócio: cadastros, pedidos, agendamentos, pagamentos, relatórios. Acessado pelo navegador, com login e permissões para cada pessoa da equipe.",
    q: "Hoje você controla tudo em planilhas, papel ou em ferramentas que não se encaixam no seu processo.",
    plan: "Sistema personalizado",
  },
  {
    t: "APIs & integrações",
    d: "Sistemas conversando entre si.",
    o: "Conexões que fazem os sistemas trocarem dados sozinhos, para ninguém precisar digitar a mesma informação duas vezes. Pode ser ligar o seu sistema a um meio de pagamento, a um ERP ou a outro serviço que você já usa.",
    q: "Sua equipe copia informações de um lugar para outro, ou as ferramentas que você usa não se comunicam.",
    plan: "Sistema personalizado",
  },
  {
    t: "Produto digital",
    d: "Da ideia à primeira versão no ar.",
    o: "Quando a ideia é um produto seu: um aplicativo, uma plataforma ou um serviço online. Acompanhamos do conceito à primeira versão em produção, definindo o essencial antes de construir o resto.",
    q: "Você tem uma ideia e precisa validá-la ou colocá-la para funcionar.",
    plan: "Produto digital",
  },
];
export const steps = [
  { t: "Entender", flow: "Problema", d: "Entendemos o problema, o negócio e os objetivos." },
  { t: "Planejar", flow: "Estratégia", d: "Definimos a solução, escopo e prioridades." },
  { t: "Desenvolver", flow: "Desenvolvimento", d: "Construímos, testamos e refinamos o produto." },
  { t: "Entregar", flow: "Produto", d: "Colocamos a solução para funcionar." },
];
export type Project = {
  slug: string; name: string; category: string; summary: string;
  problem: string; solution: string; result: string;
  stack?: string[]; accent: string; image?: string; // ex.: "/projects/sigami.png"
};
// Para adicionar um projeto: inclua um objeto aqui e a imagem em /public/projects.
export const projects: Project[] = [
  {
    slug: "codefit", name: "CODEFIT", category: "Gestão · Academia", accent: "#22d3ee",
    summary: "Sistema para gerenciamento de alunos, planos, pagamentos e matrículas.",
    problem: "Alunos, planos e pagamentos controlados à mão, com cobranças desencontradas.",
    solution: "Cadastro, matrículas e pagamentos reunidos em um único sistema.",
    result: "A academia sabe quem está em dia e quem precisa de contato.",
    image: "/projects/codefit.png"
  },
];
export const contact = {
  whatsapp: { display: "+55 21 96698-9636", url: "https://wa.me/+5521966989636" },
  email: "werka.code@gmail.com",
  socials: [
    { label: "WhatsApp", href: "https://wa.me/+5521966989636" },
    { label: "Instagram", href: "https://instagram.com/werka.dev" },
    // { label: "LinkedIn", href: "https://linkedin.com/company/" },
  ],
};

// Item simples (texto) ou item com nota de rodapé numerada: { t, note }.
export type PlanItem = string | { t: string; note: string };

export type Plan = {
  n: string;
  t: string;
  para: string;
  items: PlanItem[];
  price?: string;       // ex.: "R$ 249,99". Se omitido, exibe "Sob consulta".
  priceExact?: boolean; // true => valor fixo: esconde o "a partir de" (por padrão ele sempre aparece)
  priceUnit?: string;   // ex.: "/ projeto" ou "/ mês"
  highlight?: boolean;  // true => coluna com fundo escuro (destaque)
  tag?: string;         // etiqueta pequena ao lado do número, ex.: "Mais completo"
};

export const plans: Plan[] = [
  {
    n: "01",
    t: "Site & landing page",
    para: "Para empresas que precisam de presença digital clara e rápida.",
    price: "R$ 249,99",
    items: [
      "Sites institucionais e landing pages",
      "Layout responsivo, rápido e acessível",
      "Formulário de contato funcionando",
      { t: "Hospedagem inclusa", note: "Por 12 meses. Depois, valor anual como assinatura." },
    ],
  },
  {
    n: "02",
    t: "Sistema personalizado",
    para: "Para operações que precisam de um sistema feito sob medida.",
    price: "R$ 449,99",
    items: [
      "Plataforma desenvolvida conforme o seu processo",
      "APIs e integrações com outros sistemas",
      "Testes e refinamento com a sua equipe",
      { t: "Hospedagem inclusa", note: "Por 12 meses. Depois, valor anual como assinatura." },
      { t: "Suporte pós-entrega", note: "Por 6 meses após a entrada em produção." }, 
    ],
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
      { t: "Hospedagem inclusa", note: "Por 12 meses. Depois, valor anual como assinatura." },
      { t: "Suporte pós-entrega", note: "Sob consulta." }, 
    ],
  },
];
