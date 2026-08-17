# Portfólio — Andressa Braga

Portfólio profissional de página única para **Andressa Braga**, publicitária em
formação e fundadora da Milew Agency (Fortaleza, Ceará).

Visual minimalista e corporativo, tema claro fixo, paleta *Blush Minimalista*.

## Stack

React 19 · Vite 6 · TailwindCSS 4 · Motion (Framer Motion) · Lucide React

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # build de produção na pasta dist/
npm run preview  # visualiza o build de produção
```

## Como editar o conteúdo

**Todo o texto do site está em um único arquivo: [`src/data/content.js`](src/data/content.js).**
Não é preciso mexer em nenhum componente para atualizar o conteúdo.

Os itens marcados com `TODO` são os que ainda faltam preencher:

| O que | Onde |
|---|---|
| E-mail, telefone, WhatsApp, LinkedIn, Instagram | `contact.channels` |
| Biografia | `profile.bio` |
| Descrições dos projetos e anos | `projects` |
| Competências (foram inferidas dos trabalhos) | `skills.groups` |
| Nome da instituição de ensino | `education.items[0].institution` |

### Ativando os contatos

Enquanto `value` for `null`, o card aparece no layout em estado neutro
("a definir"). Para ativar, preencha `value` e `href`:

```js
{ id: 'whatsapp', label: 'WhatsApp', icon: 'MessageCircle',
  value: '(85) 90000-0000',
  href: 'https://wa.me/5585900000000' },
```

### Imagens

Salve os arquivos em `public/images/` com os nomes listados em
[`public/images/README.md`](public/images/README.md). Enquanto um arquivo não
existir, o site mostra um placeholder em rosa quartzo com a mesma proporção —
o layout não quebra e não há deslocamento de conteúdo.

## Estrutura

```
src/
├── data/content.js          todo o conteúdo do site
├── index.css                design tokens (@theme) e utilitários
├── hooks/useScrollSpy.js    seção ativa na navbar
└── components/
    ├── Navbar · Hero · About · Projects · ProjectCard
    ├── Gallery · Skills · Education · Contact · Footer
    └── ui/
        ├── Section.jsx              moldura padrão das seções
        ├── Reveal.jsx               animação de entrada no scroll
        └── ImageWithFallback.jsx    imagem com placeholder
```

Seções na ordem: Início → Sobre → Projetos → Bastidores → Competências →
Formação → Contato.

## Design

Paleta definida como tokens em `src/index.css` (bloco `@theme`):

| Token | Cor | Uso |
|---|---|---|
| `base` | `#FFFFFF` | fundo puro |
| `offwhite` | `#FDF8F9` | fundo de seção alternada |
| `mist` | `#FAFAFC` | fundo neutro frio |
| `quartz` | `#F7E6EB` | cards, tags, gradientes |
| `dusty` | `#D89BAE` | bordas e ícones decorativos |
| `rosegold` | `#A85B73` | botões e CTAs |
| `rosegold-ink` | `#8E4A61` | texto rosé sobre fundo claro |
| `graphite` | `#1E2229` | texto principal |
| `slate` | `#4A5058` | texto secundário |
| `hairline` | `rgba(216,155,174,.2)` | bordas e efeito de vidro |

**Contraste (WCAG AA):** `rosegold` sobre branco atinge 4.76:1 — aprovado para
texto normal e para botão com texto branco. O tom `dusty` **não** deve ser usado
como cor de texto sobre fundo claro (reprova AA); ele fica restrito a bordas,
ícones decorativos e fundos.

**Tema:** claro fixo, sem alternância. O `color-scheme: light` evita que
extensões de modo escuro reinterpretem a paleta.

**Acessibilidade:** link "pular para o conteúdo", foco visível em todos os
elementos interativos, `aria-current` no item ativo da navbar, hierarquia de
títulos com um único `h1` e suporte a `prefers-reduced-motion` (que reduz as
animações a um fade simples).

## Tipografia

Carregada do Google Fonts em `index.html`:

- **Playfair Display** — apenas no nome do hero e em detalhes editoriais
- **Poppins** — títulos e interface
- **Inter** — corpo de texto

Se as fontes não carregarem, o site cai para Georgia e a fonte do sistema sem
quebrar o layout.
