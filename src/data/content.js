/* ===================================================================
   CONTEÚDO DO SITE — edite apenas este arquivo para atualizar o texto.
   Nenhum componente contém conteúdo fixo.

   Itens marcados com "TODO" ainda precisam ser preenchidos ou revisados.
=================================================================== */

export const profile = {
  greeting: 'Olá, meu nome é',
  firstName: 'Andressa',
  fullName: 'Andressa Braga',
  role: 'Estrategista de Marketing e Comunicação',
  subtitle: 'Fundadora da Milew Agency',
  location: 'Fortaleza, Ceará',
  // TODO: revisar a biografia com as palavras da própria Andressa.
  bioTitle: 'Um pouco sobre mim',
  bio: [
    'Fundei a Milew Agency para fazer o que mais gosto: dar presença digital a marcas que têm algo real a dizer. À frente da agência, cuido de estratégia, conteúdo e construção de marca de ponta a ponta.',
    'Já trabalhei com food service, beleza, e-commerce e grandes eventos de cultura pop — da hamburgueria ao festival, do estúdio de estética à feira nacional. Gosto de marca com personalidade, comunicação clara e presença digital que aproxima o público de verdade.',
    'Em paralelo, curso Publicidade e Propaganda, o que mantém a teoria sempre colada na prática do dia a dia dos projetos.',
  ],
  photo: '/images/andressa.jpg',
  photoAlt: 'Retrato de Andressa Braga',
  photoTone: ['#3a2530', '#8b5f4e'],
}

/* -------------------------------------------------------------------
   CONTATO
   Enquanto "value" for null, o site mostra o campo em estado
   "a definir" — o lugar existe no layout, sem dado inventado.
   Para ativar: preencha "value" e "href".

   Exemplos de href:
     email     -> 'mailto:andressa@exemplo.com'
     phone     -> 'tel:+5585900000000'
     whatsapp  -> 'https://wa.me/5585900000000'
     linkedin  -> 'https://www.linkedin.com/in/usuario'
     instagram -> 'https://www.instagram.com/usuario'
------------------------------------------------------------------- */
export const contact = {
  headline: 'Vamos conversar sobre a sua marca?',
  description:
    'Aberta a projetos de social media, branding e cobertura de eventos — em Fortaleza ou remoto.',
  channels: [
    { id: 'email', label: 'E-mail', icon: 'Mail', value: null, href: null }, // TODO
    { id: 'phone', label: 'Telefone', icon: 'Phone', value: null, href: null }, // TODO
    { id: 'whatsapp', label: 'WhatsApp', icon: 'MessageCircle', value: null, href: null }, // TODO
    { id: 'linkedin', label: 'LinkedIn', icon: 'Linkedin', value: null, href: null }, // TODO
    { id: 'instagram', label: 'Instagram', icon: 'Instagram', value: null, href: null }, // TODO
  ],
}

/* -------------------------------------------------------------------
   PROJETOS — a Milew abre o grid por ser o case de maior peso.
   TODO: revisar/expandir as descrições e conferir os anos.
------------------------------------------------------------------- */
export const projects = [
  {
    id: 'milew',
    title: 'Milew Agency',
    client: 'Projeto próprio',
    tag: 'Branding · Agência',
    year: null,
    description:
      'Fundação e direção da agência: identidade visual, posicionamento e atendimento às marcas parceiras.',
    image: '/images/milew-logo.png',
    imageFit: 'contain',
    tone: ['#160e2e', '#6d4bb5'],
  },
  {
    id: 'geek-burger',
    title: 'Geek Bunker Burger',
    client: 'Food service',
    tag: 'Social Media',
    year: null,
    description:
      'Gestão de redes sociais e conteúdo para hamburgueria temática, com foco em público geek e movimento na casa.',
    image: '/images/geek-burger.jpg',
    tone: ['#0d1311', '#2b3a30'],
  },
  {
    id: 'expo-ecomm',
    title: 'Expo Ecomm 2026',
    client: 'Cobertura de evento',
    tag: 'Eventos',
    year: '2026',
    description:
      'Presença e cobertura na maior feira de e-commerce do Brasil, gerando conteúdo e conexões para as marcas atendidas.',
    image: '/images/expo-ecomm.jpg',
    tone: ['#0a3a6b', '#2f9ad4'],
  },
  {
    id: 'sana',
    title: 'SANA 2026',
    client: 'Cultura pop',
    tag: 'Eventos',
    year: '2026',
    description:
      'Cobertura do maior evento de cultura pop do Norte e Nordeste, com produção de conteúdo em tempo real.',
    image: '/images/sana.jpg',
    tone: ['#c2601c', '#f0a54a'],
  },
  {
    id: 'cilios-deluxe',
    title: 'Cílios Deluxe',
    client: 'Beleza e estética',
    tag: 'Social Media',
    year: null,
    description:
      'Comunicação e conteúdo para estúdio de beleza, valorizando o antes e depois e a autoridade técnica da marca.',
    image: '/images/cilios-deluxe.jpg',
  },
]

/* -------------------------------------------------------------------
   GALERIA — bastidores. Basta acrescentar itens à lista.
------------------------------------------------------------------- */
export const gallery = {
  title: 'Bastidores',
  description: 'Eventos, marcas e o dia a dia por trás dos projetos.',
  items: [
    {
      id: 'g-sana',
      image: '/images/sana.jpg',
      caption: 'SANA 2026',
      tone: ['#c2601c', '#f0a54a'],
    },
    {
      id: 'g-expo',
      image: '/images/expo-ecomm.jpg',
      caption: 'Expo Ecomm 2026',
      tone: ['#0a3a6b', '#2f9ad4'],
    },
    {
      id: 'g-burger',
      image: '/images/geek-burger.jpg',
      caption: 'Geek Bunker Burger',
      tone: ['#0d1311', '#2b3a30'],
    },
    {
      id: 'g-milew',
      image: '/images/milew-logo.png',
      caption: 'Milew Agency',
      tone: ['#160e2e', '#6d4bb5'],
    },
    // TODO: acrescente novas fotos de bastidores aqui
    { id: 'g-extra', image: '/images/bastidores-01.jpg', caption: null },
  ],
}

/* -------------------------------------------------------------------
   COMPETÊNCIAS
   TODO: revisar — esta lista foi montada a partir dos trabalhos
   citados. Remova o que não se aplica e acrescente o que faltar.
------------------------------------------------------------------- */
export const skills = {
  title: 'Competências',
  description: 'As frentes em que atuo no dia a dia dos projetos.',
  groups: [
    {
      id: 'social',
      icon: 'Sparkles',
      title: 'Social Media & Conteúdo',
      items: ['Gestão de perfis', 'Calendário editorial', 'Reels e Stories', 'Copywriting'],
    },
    {
      id: 'branding',
      icon: 'Palette',
      title: 'Branding & Direção de Arte',
      items: ['Identidade de marca', 'Direção criativa', 'Figma', 'Canva'],
    },
    {
      id: 'eventos',
      icon: 'Users',
      title: 'Eventos & Comunicação',
      items: ['Cobertura de eventos', 'Presença de marca', 'Networking', 'Relacionamento'],
    },
    {
      id: 'digital',
      icon: 'TrendingUp',
      title: 'Marketing Digital',
      items: ['Tráfego pago (Meta Ads)', 'Meta Business Suite', 'Métricas e relatórios', 'WhatsApp Business'],
    },
  ],
}

/* -------------------------------------------------------------------
   FORMAÇÃO
------------------------------------------------------------------- */
export const education = {
  title: 'Formação',
  items: [
    {
      id: 'publicidade',
      course: 'Publicidade e Propaganda',
      institution: null, // TODO: nome da instituição
      status: '2º semestre · em andamento',
      description:
        'Graduação em curso, com foco em comunicação de marca, comportamento do consumidor e mídias digitais.',
    },
  ],
}

/* -------------------------------------------------------------------
   NAVEGAÇÃO — cada href aponta para o id de uma seção
------------------------------------------------------------------- */
export const navigation = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'bastidores', label: 'Bastidores' },
  { id: 'competencias', label: 'Competências' },
  { id: 'contato', label: 'Contato' },
]
