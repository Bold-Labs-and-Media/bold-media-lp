export const languages = {
  en: "English",
  pt: "Português",
};

export const defaultLang = "pt";

type UI = Record<keyof typeof languages, Record<string, string>>;

export const ui: UI = {
  pt: {
    // SEO
    "seo.title": "Bold Media",
    "seo.description":
      "Grupo de media que transforma narrativas africanas com tecnologias, dados, criatividade, notícias premium, branding e eventos transformadores.",
    "seo.keywords":
      "Bold Media, media africana, narrativas africanas, tecnologia, dados, criatividade, notícias premium, branding, eventos transformadores, comunicação digital, storytelling africano, inovação em media, cultura africana, agência de media, eventos africanos, marketing africano, transformação digital",
    // Header
    "header.nav1": "Sobre",
    "header.nav2": "Áreas de Atuação",
    "header.nav3": "Estratégias",
    "header.nav4": "Contacto",
    "header.nav5": "Junte-se a Nós",
    // Hero
    "hero.title": "Amplifique a sua voz em África",
    "hero.subtitle":
      "Junte-se à revolução da comunicação africana e faça parte da nova narrativa que está a transformar o continente.",
    "hero.cta": "Conheça-nos",
    // About
    "about.title1": "Sobre",
    "about.title2": "Nós",
    "about.subtitle":
      "A BOLD MEDIA é um grupo de comunicação angolano que está a transformar a narrativa africana através da inovação e da criatividade.",
    "about.mission-title": "Missão",
    "about.mission-subtitle":
      "Reescrever a narrativa africana por meio de uma media inovadora, conectada e focada na transformação de mercados e pessoas.",
    "about.vision-title": "Visão",
    "about.vision-subtitle":
      "Ser uma agência de comunicação que conecta e transforma a narrativa africana.",
    // Values
    "values.title": "Nossos Valores",
    "values.value1-title": "Inovação e Criatividade",
    "values.value1-subtitle":
      "Buscamos constantemente novas formas de contar histórias e transmitir informações.",
    "values.value2-title": "Transparência e Integridade",
    "values.value2-subtitle":
      "Comprometemo-nos com a verdade e a ética em todas as nossas ações.",
    "values.value3-title": "Compromisso com o Futuro de África",
    "values.value3-subtitle":
      "Trabalhamos para construir um legado positivo para as próximas gerações africanas",
    "values.value4-title": "Sustentabilidade e Inclusão",
    "values.value4-subtitle":
      "Promovemos práticas sustentáveis e representatividade em tudo o que fazemos.",
    "values.market-title": "Oportunidade no Mercado",
    "values.market-subtitle1":
      "África está a emergir como um dos continentes com maior potencial de crescimento economico e social. Há uma demanda crescente por narrativas locais, autênticas e positivas.",
    "values.market-subtitle2":
      "Angola, em especial, se destaca como um mercado estratégico para a expansão da comunicação em África.",
    // Areas
    "areas.see-more": "Ver Mais",
    "areas.title1": "Áreas de",
    "areas.title2": "Atuação",
    "areas.subtitle":
      "Desenvolvemos diversas iniciativas para amplificar as narrativas africanas e transformar o mercado de comunicação em Angola e em todo o continente.",
    "areas.value1-title": "Angola Today",
    "areas.value1-subtitle":
      "Portal digital de notícias com foco em economia, desporto, empreendedorismo, inovação e cultura africana.",
    "areas.value2-title": "Bold Labs",
    "areas.value2-subtitle":
      "Agência de inovação, consultoria,comunicação e assessoria para marcas que desejam se posicionar no mercado africano.",
    "areas.value3-title": "Bold Events",
    "areas.value3-subtitle":
      "Organização de eventos disruptivos que conectam empreendedores, inovadores e líderes africanos ao mundo.",
    "areas.value4-title": "Labuta",
    "areas.value4-subtitle":
      "Marketplace angolano que conecta clientes a profissionais qualificados para a realização de trabalhos freelancers sob demanda.",
    "areas.labuta-title": "Destaque: Labuta",
    "areas.labuta-subtitle":
      " Labuta é um marketplace angolano que conecta clientes a profissionais qualificados para a realização de trabalhos freelancers sob demanda. Por meio da plataforma, freelancers e empresas podem se cadastrar, oferecer seus serviços e gerar receita ao atender às necessidades dos clientes.",
    "areas.labuta-feature1-title": "Para Freelancers",
    "areas.labuta-feature1-subtitle":
      "Cadastre suas habilidades e encontre oportunidades de trabalho.",
    "areas.labuta-feature2-title": "Para Empresas",
    "areas.labuta-feature2-subtitle":
      "Encontre talentos qualificados para os seus projetos sob demanda.",
    "areas.labuta-feature3-title": "Para o Mercado",
    "areas.labuta-feature3-subtitle":
      "Fortalecimento da economia local e geração de oportunidades.",
    // Strategies
    "strategies.title1": "Estratégias",
    "strategies.title2": "de Posicionamento",
    "strategies.subtitle":
      "Nossas estratégias inovadoras nos posicionam na vanguarda da comunicação em África, combinando tecnologia, conteúdo autêntico e compromisso social.",
    "strategies.tab1": "Adoção",
    "strategies.tab2": "Produção",
    "strategies.tab3": "Dados",
    "strategies.tab4": "Empoderamento",
    "strategies.tab5": "Advocacia",
    "strategies.value1-title": "Adoção de Tecnologia de Ponta",
    "strategies.value1-point1":
      "Investimento em Inteligência Artificial (IA) para personalização de conteúdo e análise de dados do público.",
    "strategies.value1-point2":
      "Uso de Blockchain para autenticação e proteção de informações.",
    "strategies.value1-point3":
      "Desenvolvimento de plataformas interativas que combinam vídeo, áudio e realidade aumentada.",
    "strategies.bold-labs-title": "Diferencial Competitivo: Bold Labs",
    "strategies.bold-labs-subtitle":
      "Nosso laboratório de ideias atua como um hub para testar e lançar novos formatos de media, estabelecendo parcerias com universidades e startups tecnológicas para fomentar pesquisa e desenvolvimento.",
    "strategies.bold-labs-point1-title": "Pesquisa",
    "strategies.bold-labs-point1-subtitle":
      "Investigamos tendências e comportamentos do mercado africano.",
    "strategies.bold-labs-point2-title": "Inovação",
    "strategies.bold-labs-point2-subtitle":
      "Desenvolvemos soluções tecnológicas para desafios de comunicação.",
    "strategies.bold-labs-point3-title": "Colaboração",
    "strategies.bold-labs-point3-subtitle":
      "Criamos parcerias estratégicas com talentos e instituições locais.",
    // Contact
    "contact.title1": "Junte-se",
    "contact.title2": "a Nós",
    "contact.subtitle":
      "Vamos juntos construir o futuro das narrativas africanas. Entre em contato connosco para saber mais sobre como podemos colaborar.",
    "contact.form-title": "Envie-nos uma mensagem",
    "contact.form-name": "Nome",
    "contact.form-name-placeholder": "Seu nome",
    "contact.form-email": "E-mail",
    "contact.form-email-placeholder": "email@exemplo.com",
    "contact.form-message": "Mensagem",
    "contact.form-message-placeholder": "Como podemos ajudar?",
    "contact.form-submit": "Enviar mensagem",
    "contact.email-title": "Contacto Direto",
    "contact.email-subtitle":
      "Tem alguma pergunta ou quer saber mais sobre nossas iniciativas? Entre em contato connosco diretamente.",
    "contact.why-us-title": "Por que se juntar a nós?",
    "contact.why-us-point1":
      "Faça parte da transformação das narrativas africanas",
    "contact.why-us-point2": "Conecte-se com uma rede de inovadores e líderes",
    "contact.why-us-point3":
      "Contribua para o crescimento e desenvolvimento de África",
    // Footer
    "footer.description":
      "Um grupo de comunicação angolano comprometido em amplificar as narrativas africanas e reposicionar a imagem de África no mundo.",
    "footer.areas": "Áreas de Atuação",
    "footer.area1": "Angola Today",
    "footer.area2": "Bold Labs",
    "footer.area3": "Bold Events",
    "footer.area4": "Labuta",
    "footer.contact": "Contacto",
    "footer.copyright": "Todos os direitos reservados",
    "footer.back-to-top": "Voltar ao topo",
  },

  en: {
    // SEO
    "seo.title": "Bold Media",
    "seo.description":
      "Media group that transforms African narratives through technology, data, creativity, premium news, branding, and transformative events.",
    "seo.keywords":
      "Bold Media, African media, African narratives, technology, data, creativity, premium news, branding, transformative events, digital communication, African storytelling, media innovation, African culture, media agency, African events, African marketing, digital transformation",
    // About
    "header.nav1": "About",
    "header.nav2": "Areas of Expertise",
    "header.nav3": "Strategies",
    "header.nav4": "Contact",
    "header.nav5": "Join Us",
    // Hero
    "hero.title": "Amplify your voice in Africa",
    "hero.subtitle":
      "Join the African communication revolution and be part of the new narrative transforming the continent.",
    "hero.cta": "Get to Know Us",
    // About
    "about.title1": "About",
    "about.title2": "Us",
    "about.subtitle":
      "BOLD MEDIA is an Angolan media group transforming the African narrative through innovation and creativity.",
    "about.mission-title": "Mission",
    "about.mission-subtitle":
      "Rewrite the African narrative through innovative, connected media focused on transforming markets and people.",
    "about.vision-title": "Vision",
    "about.vision-subtitle":
      "To be a communication agency that connects and transforms the African narrative.",
    // Values
    "values.title": "Our Values",
    "values.value1-title": "Innovation and Creativity",
    "values.value1-subtitle":
      "We constantly seek new ways to tell stories and convey information.",
    "values.value2-title": "Transparency and Integrity",
    "values.value2-subtitle":
      "We are committed to truth and ethics in all our actions.",
    "values.value3-title": "Commitment to Africa’s Future",
    "values.value3-subtitle":
      "We work to build a positive legacy for future African generations.",
    "values.value4-title": "Sustainability and Inclusion",
    "values.value4-subtitle":
      "We promote sustainable practices and representation in everything we do.",
    "values.market-title": "Market Opportunity",
    "values.market-subtitle1":
      "Africa is emerging as one of the continents with the greatest economic and social growth potential. There is a growing demand for local, authentic, and positive narratives.",
    "values.market-subtitle2":
      "Angola, in particular, stands out as a strategic market for the expansion of communication in Africa.",
    // Areas
    "areas.see-more": "See More",
    "areas.title1": "Areas of",
    "areas.title2": "Expertise",
    "areas.subtitle":
      "We develop various initiatives to amplify African narratives and transform the communication market in Angola and across the continent.",
    "areas.value1-title": "Angola Today",
    "areas.value1-subtitle":
      "A digital news portal focused on economy, sports, entrepreneurship, innovation, and African culture.",

    "areas.value2-title": "Bold Labs",
    "areas.value2-subtitle":
      "An innovation agency offering consulting, communication, and advisory services for brands looking to position themselves in the African market.",

    "areas.value3-title": "Bold Events",
    "areas.value3-subtitle":
      "Organizer of disruptive events that connect African entrepreneurs, innovators, and leaders with the world.",
    "areas.value4-title": "Labuta",
    "areas.value4-subtitle":
      "An Angolan marketplace that connects clients with qualified professionals for on-demand freelance work.",
    "areas.labuta-title": "Highlight: Labuta",
    "areas.labuta-subtitle":
      "Labuta is an Angolan marketplace that connects clients with qualified professionals for on-demand freelance work. Through the platform, freelancers and companies can register, offer their services, and generate income by meeting client needs.",
    "areas.labuta-feature1-title": "For Freelancers",
    "areas.labuta-feature1-subtitle":
      "Register your skills and find job opportunities.",
    "areas.labuta-feature2-title": "For Companies",
    "areas.labuta-feature2-subtitle":
      "Find qualified talent for your on-demand projects.",
    "areas.labuta-feature3-title": "For the Market",
    "areas.labuta-feature3-subtitle":
      "Strengthening the local economy and generating opportunities.",
    // Strategies
    "strategies.title1": "Positioning",
    "strategies.title2": "Strategies",
    "strategies.subtitle":
      "Our innovative strategies place us at the forefront of communication in Africa, combining technology, authentic content, and social commitment.",
    "strategies.tab1": "Adoption",
    "strategies.tab2": "Production",
    "strategies.tab3": "Data",
    "strategies.tab4": "Empowerment",
    "strategies.tab5": "Advocacy",
    "strategies.value1-title": "Adoption of Cutting-Edge Technology",
    "strategies.value1-point1":
      "Investment in Artificial Intelligence (AI) for content personalization and audience data analysis.",
    "strategies.value1-point2":
      "Use of Blockchain for authentication and information protection.",
    "strategies.value1-point3":
      "Development of interactive platforms combining video, audio, and augmented reality.",
    "strategies.bold-labs-title": "Competitive Edge: Bold Labs",
    "strategies.bold-labs-subtitle":
      "Our ideas lab acts as a hub for testing and launching new media formats, partnering with universities and tech startups to foster research and development.",
    "strategies.bold-labs-point1-title": "Research",
    "strategies.bold-labs-point1-subtitle":
      "We explore trends and behaviors in the African market.",
    "strategies.bold-labs-point2-title": "Innovation",
    "strategies.bold-labs-point2-subtitle":
      "We develop technological solutions for communication challenges.",
    "strategies.bold-labs-point3-title": "Collaboration",
    "strategies.bold-labs-point3-subtitle":
      "We establish strategic partnerships with local talent and institutions.",
    // Contact
    "contact.title1": "Join",
    "contact.title2": "Us",
    "contact.subtitle":
      "Let’s build the future of African narratives together. Get in touch to learn more about how we can collaborate.",
    "contact.form-title": "Send Us a Message",
    "contact.form-name": "Name",
    "contact.form-name-placeholder": "Your name",
    "contact.form-email": "Email",
    "contact.form-email-placeholder": "email@example.com",
    "contact.form-message": "Message",
    "contact.form-message-placeholder": "How can we help?",
    "contact.form-submit": "Send Message",
    "contact.email-title": "Direct Contact",
    "contact.email-subtitle":
      "Have a question or want to learn more about our initiatives? Reach out to us directly.",
    "contact.why-us-title": "Why Join Us?",
    "contact.why-us-point1": "Be part of transforming African narratives",
    "contact.why-us-point2": "Connect with a network of innovators and leaders",
    "contact.why-us-point3": "Contribute to Africa’s growth and development",
    // Footer
    "footer.description":
      "An Angolan media group committed to amplifying African narratives and repositioning Africa’s image in the world.",
    "footer.areas": "Areas of Expertise",
    "footer.area1": "Angola Today",
    "footer.area2": "Bold Labs",
    "footer.area3": "Bold Events",
    "footer.area4": "Labuta",
    "footer.contact": "Contact",
    "footer.copyright": "All rights reserved",
    "footer.back-to-top": "Back to top",
  },
} as const;
