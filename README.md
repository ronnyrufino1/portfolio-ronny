# portfolio-ronny

# Portfólio Web - Ronny Rufino

## Sobre

Este projeto é um site de portfólio pessoal desenvolvido para demonstrar minhas habilidades em **Desenvolvimento Full Stack**. O site apresenta uma interface moderna e responsiva, com funcionalidades avançadas como modo escuro (dark mode), validação de formulários, navegação dinâmica e animações sutis.

O objetivo deste repositório é fornecer a um futuro empregador ou cliente uma visão clara das minhas capacidades técnicas e do trabalho prático que já realizei.

## Funcionalidades Implementadas

| Funcionalidade              | Descrição                                                                  |
| --------------------------- | -------------------------------------------------------------------------- |
| **Responsividade**          | Menu de navegação adaptável para desktop e mobile (hambúrguer).            |
| **Dark/Light Mode**         | Alternância entre temas com persistência no `localStorage`.                |
| **Validação de Formulário** | Validação em tempo real com feedback visual sem recarregar a página.       |
| **Efeitos Dinâmicos**       | Animações de digitação (typewriter) nos títulos principais.                |
| **Performance**             | Código otimizado, sem dependências externas pesadas e carregamento rápido. |

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível.
- **CSS3** - Flexbox, Grid, Variáveis de Tema (`Custom Properties`) e Media Queries.
- **JavaScript (Vanilla)** - Manipulação do DOM, `Event Listeners`, `localStorage` e lógica de animações.
- **Acessibilidade** - Uso correto de atributos `aria-label`, `alt`, foco programático e leitores de tela.

## Requisitos para Execução Local

Este projeto é **100% estático** e não requer um servidor backend ou instalação complexa para ser visualizado. Siga os passos abaixo para abrir localmente:

1.  **Certifique-se de ter o [Git](https://git-scm.com/)** instalado em sua máquina.
2.  **Clone o repositório:**
    ```bash
    git clone https://github.com/ronnyrufino/portfolio.git
    cd portfolio
    ```
3.  **Abra no Browser** qualquer arquivo `.html` diretamente ou inicie um servidor local:

### Opção A: Servidor Local (Recomendado)

Use o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do VSCode para ver as alterações em tempo real.

```bash
# No terminal, vá até a pasta e execute (exemplo com Python no Mac/Linux)
python -m http.server 8000
```

Acesse: `http://localhost:8000`

### Opção B: Abrir Diretamente

Basta abrir qualquer arquivo `.html` na raiz do projeto diretamente pelo seu navegador (Chrome, Firefox, etc.).

## 📁 Estrutura de Pastas

```text
portfolio/
├── index.html           # Página inicial / Hero section
├── about.html           # Página "Sobre Mim"
├── skills.html          # Página de Habilidades e Tech Stack
├── courses.html         # Página com Lista de Cursos
├── contact.html         # Página de Contato (Formulário)
├── style.css            # Estilos globais e responsivos
├── script.js            # Lógica do site (Dark Mode, Typewriter, etc.)
├── assets/              # Imagens e recursos estáticos
└── README.md            # Este arquivo
```

## 🔌 Links Úteis

- [GitHub Profile](https://github.com/ronnyrufino1)
- [Linkedin](https://www.linkedin.com/in/ronny-rufino-a6898076/)
- [Email](ronny.rufino1@gmail.com)
