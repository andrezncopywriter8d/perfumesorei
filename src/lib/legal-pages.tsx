import { Link } from "@tanstack/react-router";
import { CinematicFooter } from "@/components/ui/motion-footer";

type LegalSection = {
  title: string;
  body: string[];
  list?: string[];
};

export type LegalPageData = {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

const SITE_URL = "https://oreidoimportado.site/";
const CONTACT_EMAIL = "andrluis86@gmail.com";
const APP_NAME = "APIOFICIAL CELLSHOP";
const UPDATED_AT = "30/05/2026";

export const privacyPolicyData: LegalPageData = {
  eyebrow: "Ultima atualizacao: 30/05/2026",
  title: "Politica de Privacidade — APIOFICIAL CELLSHOP",
  description:
    "Esta Politica de Privacidade descreve como o APIOFICIAL CELLSHOP, vinculado ao site O Rei do Importado, coleta, utiliza, armazena, compartilha e protege informacoes dos usuarios.",
  sections: [
    {
      title: "1. Quem somos",
      body: [
        `O ${APP_NAME} e utilizado para comunicacao, atendimento, automacao, integracao e relacionamento com clientes por meio de canais digitais, incluindo recursos relacionados a API oficial da Meta, WhatsApp Business Platform, Facebook, Instagram e Messenger, quando aplicavel.`,
        `Site oficial: ${SITE_URL}`,
        `E-mail de contato: ${CONTACT_EMAIL}`,
      ],
    },
    {
      title: "2. Dados que podemos coletar",
      body: [
        "Podemos coletar dados fornecidos diretamente pelo usuario, como nome, telefone, e-mail, mensagens enviadas, pedidos, duvidas, solicitacoes de atendimento e demais informacoes necessarias para suporte, venda, pos-venda ou comunicacao.",
        "Tambem podemos coletar dados recebidos por integracoes com plataformas da Meta, quando autorizados pelo usuario ou pela empresa responsavel pela conta, como identificadores de conta, numero de telefone do WhatsApp, nome de perfil, mensagens recebidas, status de mensagens, dados de conversas, informacoes de paginas, contas comerciais, permissoes concedidas e outros dados necessarios para funcionamento da integracao.",
        "Podemos ainda coletar dados tecnicos, como endereco IP, tipo de navegador, dispositivo, data e hora de acesso, registros de uso, logs de sistema, cookies e informacoes necessarias para seguranca, prevencao de fraude e funcionamento do servico.",
      ],
    },
    {
      title: "3. Como usamos os dados",
      body: [
        "Utilizamos os dados para prestar atendimento ao cliente, enviar e receber mensagens, processar solicitacoes, responder duvidas, operar integracoes com WhatsApp Business Platform, Facebook, Instagram, Messenger ou outros servicos da Meta, gerenciar contatos, conversas, pedidos, notificacoes e comunicacoes comerciais.",
        "Tambem usamos dados para melhorar a seguranca, estabilidade e funcionamento do sistema, cumprir obrigacoes legais, regulatorias ou contratuais, prevenir fraudes, abusos, acessos nao autorizados ou uso indevido da plataforma, alem de melhorar nossos servicos e a experiencia do usuario.",
      ],
    },
    {
      title: "4. Base legal para tratamento dos dados",
      body: [
        "Tratamos dados pessoais conforme a legislacao aplicavel, incluindo a Lei Geral de Protecao de Dados Pessoais — LGPD.",
        "As bases legais podem incluir consentimento do usuario, execucao de contrato ou procedimentos preliminares, cumprimento de obrigacao legal ou regulatoria, legitimo interesse, respeitados os direitos e liberdades fundamentais do titular, e exercicio regular de direitos em processos judiciais, administrativos ou arbitrais.",
      ],
    },
    {
      title: "5. Compartilhamento de dados",
      body: [
        "Podemos compartilhar dados somente quando necessario para a prestacao dos servicos, funcionamento das integracoes, cumprimento legal ou protecao de direitos.",
        "Os dados podem ser compartilhados com Meta Platforms, Inc. e empresas relacionadas, provedores de hospedagem, banco de dados, seguranca, e-mail, suporte tecnico e infraestrutura, prestadores de servico, autoridades publicas quando houver obrigacao legal ou ordem valida, e parceiros comerciais somente quando necessario para execucao do servico contratado ou autorizado pelo usuario.",
        "Nao vendemos dados pessoais dos usuarios.",
      ],
    },
    {
      title: "6. Integracoes com Meta, Facebook, Instagram e WhatsApp",
      body: [
        "Quando o usuario utiliza recursos relacionados a Meta, como WhatsApp Business Platform, Facebook Login, Instagram ou Messenger, determinados dados podem ser processados para permitir autenticacao, envio e recebimento de mensagens, gerenciamento de contas, paginas, permissoes, contatos e comunicacoes.",
        "O uso dessas integracoes tambem esta sujeito as politicas, termos e regras da Meta.",
        `O ${APP_NAME} utiliza os dados recebidos dessas plataformas apenas para fornecer as funcionalidades autorizadas, operar o servico e cumprir as finalidades descritas nesta Politica.`,
      ],
    },
    {
      title: "7. Armazenamento e retencao dos dados",
      body: [
        "Os dados sao armazenados pelo tempo necessario para cumprir as finalidades descritas nesta Politica, obrigacoes legais, contratuais, regulatorias ou para resguardar direitos.",
        "Quando os dados nao forem mais necessarios, poderao ser excluidos, anonimizados ou mantidos apenas quando houver base legal aplicavel.",
      ],
    },
    {
      title: "8. Seguranca dos dados",
      body: [
        "Adotamos medidas tecnicas e administrativas razoaveis para proteger os dados contra acesso nao autorizado, perda, alteracao, divulgacao indevida ou destruicao.",
        "Apesar dos esforcos de seguranca, nenhum sistema e totalmente imune a riscos. O usuario tambem deve proteger suas credenciais, dispositivos e contas vinculadas.",
      ],
    },
    {
      title: "9. Cookies e tecnologias semelhantes",
      body: [
        "Nosso site pode utilizar cookies e tecnologias semelhantes para funcionamento, seguranca, analise de uso, melhoria de desempenho e personalizacao da experiencia.",
        "O usuario pode configurar seu navegador para bloquear cookies, mas algumas funcionalidades podem nao funcionar corretamente.",
      ],
    },
    {
      title: "10. Direitos do titular dos dados",
      body: [
        `O usuario pode solicitar confirmacao da existencia de tratamento, acesso aos dados, correcao, anonimizacao, bloqueio ou eliminacao de dados, portabilidade, informacao sobre compartilhamento, revogacao do consentimento e exclusao de dados pessoais, quando aplicavel. As solicitacoes podem ser enviadas para ${CONTACT_EMAIL}.`,
      ],
    },
    {
      title: "11. Exclusao de dados",
      body: [
        `O usuario pode solicitar a exclusao de seus dados pessoais entrando em contato pelo e-mail ${CONTACT_EMAIL} ou acessando a pagina ${SITE_URL}exclusao-de-dados.`,
        "Apos a solicitacao, analisaremos o pedido e realizaremos a exclusao dos dados aplicaveis, salvo quando a retencao for necessaria para cumprimento de obrigacao legal, regulatoria, contratual, prevencao de fraude ou exercicio regular de direitos.",
      ],
    },
    {
      title: "12. Dados de menores de idade",
      body: [
        "Nossos servicos nao sao direcionados a menores de idade sem autorizacao dos pais ou responsaveis legais. Caso identifiquemos tratamento indevido de dados de menores, poderemos excluir as informacoes mediante solicitacao.",
      ],
    },
    {
      title: "13. Alteracoes nesta Politica",
      body: [
        "Esta Politica de Privacidade pode ser atualizada a qualquer momento para refletir mudancas legais, tecnicas ou operacionais. A versao mais recente estara sempre disponivel em nosso site.",
      ],
    },
    {
      title: "14. Contato",
      body: [`${APP_NAME}`, `Site: ${SITE_URL}`, `E-mail: ${CONTACT_EMAIL}`],
    },
  ],
};

export const termsData: LegalPageData = {
  eyebrow: `Ultima atualizacao: ${UPDATED_AT}`,
  title: "Termos de Servico — APIOFICIAL CELLSHOP",
  description:
    "Estes Termos de Servico regulam o acesso e uso do APIOFICIAL CELLSHOP, vinculado ao site O Rei do Importado.",
  sections: [
    {
      title: "1. Definicoes",
      body: [
        `${APP_NAME}: servico, sistema ou aplicacao utilizado para comunicacao, atendimento, automacao e integracao com canais digitais.`,
        "Usuario: pessoa fisica ou juridica que acessa ou utiliza nossos servicos.",
        "Plataformas de terceiros: servicos externos integrados, incluindo Meta, WhatsApp, Facebook, Instagram, Messenger, provedores de hospedagem, pagamento, atendimento ou infraestrutura.",
      ],
    },
    {
      title: "2. Uso do servico",
      body: [
        "O usuario concorda em utilizar o servico apenas para finalidades licitas, legitimas e de acordo com estes Termos, com a legislacao aplicavel e com as politicas das plataformas integradas.",
        "O servico pode permitir envio e recebimento de mensagens, atendimento ao cliente, automacao de conversas, integracao com WhatsApp Business Platform, gerenciamento de contatos e comunicacoes, notificacoes, suporte, relacionamento comercial e integracao com paginas, contas comerciais ou canais autorizados.",
      ],
    },
    {
      title: "3. Responsabilidades do usuario",
      body: [
        "O usuario e responsavel por fornecer informacoes corretas e atualizadas, manter a seguranca de suas contas, senhas, tokens e credenciais, obter autorizacoes e consentimentos necessarios de seus clientes ou contatos, utilizar o servico em conformidade com a legislacao aplicavel e respeitar as politicas da Meta, WhatsApp, Facebook, Instagram e demais plataformas.",
        "O usuario nao deve utilizar o servico para spam, fraude, conteudo ilegal, abusivo, enganoso ou nao autorizado.",
      ],
    },
    {
      title: "4. Regras sobre mensagens e comunicacao",
      body: [
        "O usuario deve enviar mensagens apenas para pessoas que autorizaram ou esperam receber comunicacao, respeitando regras de opt-in, privacidade, protecao de dados, politicas de mensagens e normas aplicaveis.",
        "E proibido utilizar o servico para enviar spam ou mensagens em massa nao autorizadas, praticar golpes, phishing, fraude ou engenharia social, enviar conteudo ilegal, discriminatorio, ofensivo ou enganoso, violar direitos de terceiros, coletar dados sem autorizacao ou tentar burlar limitacoes, politicas ou sistemas de seguranca.",
      ],
    },
    {
      title: "5. Integracoes com plataformas da Meta",
      body: [
        "O uso de funcionalidades relacionadas a Meta, WhatsApp, Facebook, Instagram ou Messenger depende das permissoes concedidas pelo usuario e da disponibilidade das APIs correspondentes.",
        "O usuario reconhece que essas plataformas possuem seus proprios termos, politicas, regras tecnicas, limites, revisoes, cobrancas e restricoes.",
        `O ${APP_NAME} nao se responsabiliza por bloqueios, suspensoes, alteracoes de API, reprovacoes, indisponibilidade, restricoes ou penalidades aplicadas por plataformas de terceiros em razao de uso indevido, violacao de politicas ou decisoes dessas plataformas.`,
      ],
    },
    {
      title: "6. Disponibilidade do servico",
      body: [
        "Buscamos manter o servico disponivel e funcional, mas nao garantimos funcionamento ininterrupto, livre de erros ou imune a falhas.",
        "O servico pode ficar indisponivel por manutencao, atualizacoes, problemas tecnicos, falhas de terceiros, instabilidade de internet, alteracoes de APIs ou eventos fora do nosso controle.",
      ],
    },
    {
      title: "7. Planos, pagamentos e cancelamento",
      body: [
        "Caso existam planos pagos, valores, formas de pagamento, periodos de cobranca, cancelamentos e reembolsos serao informados no momento da contratacao ou em proposta comercial especifica.",
        "O nao pagamento podera resultar em suspensao ou cancelamento do acesso ao servico.",
      ],
    },
    {
      title: "8. Propriedade intelectual",
      body: [
        `Todos os direitos sobre marca, sistema, layout, codigo, funcionalidades, textos, imagens, materiais, documentacao e demais elementos do ${APP_NAME} pertencem aos seus respectivos titulares.`,
        "O usuario nao recebe qualquer direito de propriedade sobre o sistema, exceto o direito limitado de uso conforme estes Termos.",
      ],
    },
    {
      title: "9. Dados e privacidade",
      body: [
        `O tratamento de dados pessoais e regulado pela nossa Politica de Privacidade, disponivel em ${SITE_URL}politica-de-privacidade.`,
        "Ao utilizar o servico, o usuario declara estar ciente da forma como os dados sao coletados, utilizados, armazenados e protegidos.",
      ],
    },
    {
      title: "10. Suspensao ou encerramento do acesso",
      body: [
        "Podemos suspender ou encerrar o acesso do usuario em caso de violacao destes Termos, uso indevido do servico, suspeita de fraude, spam ou atividade ilegal, descumprimento de politicas de plataformas integradas, risco a seguranca do sistema, de terceiros ou de outros usuarios, ou determinacao legal, judicial ou regulatoria.",
      ],
    },
    {
      title: "11. Limitacao de responsabilidade",
      body: [
        `Na maxima extensao permitida pela lei, o ${APP_NAME} nao sera responsavel por danos indiretos, lucros cessantes, perda de dados, interrupcoes, falhas de terceiros, bloqueios de contas, alteracoes de API ou prejuizos decorrentes de uso inadequado do servico.`,
      ],
    },
    {
      title: "12. Alteracoes nos Termos",
      body: [
        "Podemos atualizar estes Termos a qualquer momento para refletir mudancas legais, tecnicas, comerciais ou operacionais. A versao mais recente estara sempre disponivel em nosso site.",
      ],
    },
    { title: "13. Legislacao aplicavel", body: ["Estes Termos sao regidos pelas leis da Republica Federativa do Brasil."] },
    { title: "14. Contato", body: [`${APP_NAME}`, `Site: ${SITE_URL}`, `E-mail: ${CONTACT_EMAIL}`] },
  ],
};

export const dataDeletionData: LegalPageData = {
  eyebrow: `Ultima atualizacao: ${UPDATED_AT}`,
  title: "Solicitacao de Exclusao de Dados — APIOFICIAL CELLSHOP",
  description:
    "Esta pagina explica como solicitar a exclusao de dados pessoais tratados pelo APIOFICIAL CELLSHOP.",
  sections: [
    {
      title: "Como solicitar a exclusao",
      body: [
        `Para solicitar a exclusao dos seus dados, envie um e-mail para ${CONTACT_EMAIL} com o assunto: Solicitacao de exclusao de dados — ${APP_NAME}.`,
        "No corpo do e-mail, informe os dados abaixo:",
      ],
      list: [
        "Nome completo;",
        "E-mail ou telefone utilizado no atendimento;",
        "Canal utilizado, como WhatsApp, Facebook, Instagram ou site;",
        "Descricao da solicitacao.",
      ],
    },
    {
      title: "Prazo de atendimento",
      body: [
        "Apos o recebimento da solicitacao, analisaremos o pedido e tomaremos as providencias necessarias em prazo razoavel, conforme a legislacao aplicavel.",
      ],
    },
    {
      title: "Dados que podem ser excluidos",
      body: [
        "Poderao ser excluidos dados pessoais relacionados a cadastro, contato, mensagens, identificadores, historico de atendimento e outras informacoes vinculadas ao usuario, quando aplicavel.",
      ],
    },
    {
      title: "Dados que podem ser mantidos",
      body: [
        "Alguns dados poderao ser mantidos quando necessario para cumprimento de obrigacao legal ou regulatoria, prevencao de fraude, seguranca do sistema, exercicio regular de direitos, cumprimento de contrato ou registros obrigatorios exigidos por lei.",
      ],
    },
    {
      title: "Remocao de permissoes em plataformas da Meta",
      body: [
        "Caso o usuario tenha concedido permissoes por meio de Facebook, Instagram, Messenger ou WhatsApp, tambem podera revisar ou remover permissoes diretamente nas configuracoes da respectiva plataforma, quando essa opcao estiver disponivel.",
        `A remocao da integracao na plataforma da Meta nao substitui necessariamente a solicitacao de exclusao de dados ja tratados pelo ${APP_NAME}. Para solicitar a exclusao completa dos dados aplicaveis, envie o pedido para ${CONTACT_EMAIL}.`,
      ],
    },
    {
      title: "Confirmacao",
      body: [
        "Apos a analise e conclusao do processo, poderemos enviar uma confirmacao ao usuario pelo e-mail informado na solicitacao.",
      ],
    },
    { title: "Contato", body: [`${APP_NAME}`, `Site: ${SITE_URL}`, `E-mail: ${CONTACT_EMAIL}`] },
  ],
};

export function LegalPage({ data }: { data: LegalPageData }) {
  return (
    <main className="min-h-screen bg-[#050302] text-[#f8f3ea]">
      <header className="border-b border-amber-300/15 bg-black/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5 sm:px-8">
          <Link to="/" className="flex items-center gap-3 text-decoration-none">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-amber-300/45 bg-amber-300/5 font-serif text-2xl italic text-amber-200 shadow-[0_0_24px_rgba(245,197,66,0.12)]">
              O
            </span>
            <span className="leading-none">
              <strong className="block font-serif text-2xl tracking-wide text-white">O REI</strong>
              <span className="block pt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300">
                Importado Perfumes
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-5 text-[13px] font-semibold text-white/70 sm:flex">
            <Link to="/" className="hover:text-amber-200">Inicio</Link>
            <Link to="/politica-de-privacidade" className="hover:text-amber-200">Privacidade</Link>
            <Link to="/termos-de-servico" className="hover:text-amber-200">Termos</Link>
            <Link to="/exclusao-de-dados" className="hover:text-amber-200">Exclusao de dados</Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-amber-300/10 px-5 py-16 sm:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_12%,rgba(215,169,40,0.18),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.46))]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.28em] text-amber-300">
            {data.eyebrow}
          </p>
          <h1 className="font-[Montserrat,Poppins,system-ui,sans-serif] text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-6xl">
            {data.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
            {data.description}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="rounded-3xl border border-amber-300/14 bg-[#100b07]/82 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-9">
          <div className="space-y-9">
            {data.sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-3 text-xl font-extrabold tracking-[-0.02em] text-amber-100">
                  {section.title}
                </h2>
                <div className="space-y-3 text-[15px] leading-8 text-white/70">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3 border-t border-amber-300/12 pt-7">
            <Link to="/politica-de-privacidade" className="rounded-full border border-amber-300/35 px-4 py-2 text-[13px] font-bold text-amber-200 hover:bg-amber-300 hover:text-black">
              Politica de Privacidade
            </Link>
            <Link to="/termos-de-servico" className="rounded-full border border-amber-300/35 px-4 py-2 text-[13px] font-bold text-amber-200 hover:bg-amber-300 hover:text-black">
              Termos de Servico
            </Link>
            <Link to="/exclusao-de-dados" className="rounded-full border border-amber-300/35 px-4 py-2 text-[13px] font-bold text-amber-200 hover:bg-amber-300 hover:text-black">
              Exclusao de Dados
            </Link>
          </div>
        </div>
      </article>

      <CinematicFooter
        links={[
          { label: "Inicio", href: "/" },
          { label: "Privacidade", href: "/politica-de-privacidade" },
          { label: "Termos", href: "/termos-de-servico" },
          { label: "Exclusao de Dados", href: "/exclusao-de-dados" },
          { label: "Instagram", href: "https://www.instagram.com/oreidoimportadoperfumes/" },
        ]}
      />
    </main>
  );
}
