
# React Testing Library 🧪🔍

Projeto de estudo desenvolvido durante a formação em **Desenvolvimento Web da Trybe**.  
O foco é **testar aplicações React** usando **React Testing Library** e **Jest**, garantindo que os componentes funcionam e respondem corretamente às interações.

---

## 💡 Visão geral

Este repositório contém uma aplicação React acompanhada de testes que verificam:

✔️ Se os componentes renderizam conforme o esperado  
✔️ Se elementos aparecem na tela com texto/atributos corretos  
✔️ Se eventos (clique, digitar, navegação) funcionam  
✔️ Se fluxos de UI respondem conforme a necessidade

A ideia é simular a experiência do usuário e testar a interface como ela **realmente é utilizada**, em vez de testar implementações internas.

---

## 🛠 Tecnologias utilizadas

- **React**
- **JavaScript / JSX**
- **Jest**
- **React Testing Library**
- **ESLint / Prettier** (configurações de estilo, se estiverem incluídas)

---

## 🚀 Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/Thaisvc/Project-React-Testing-Library.git
cd Project-React-Testing-Library
````

### 2. Instale as dependências

```bash
npm install
```

ou

```bash
yarn install
```

---

## 🧪 Testes automatizados

Todos os testes foram escritos com **React Testing Library + Jest**.

Para rodar todos os testes:

```bash
npm test
```

ou

```bash
yarn test
```

Isso abre o watcher de testes, e você verá:

✔️ Testes passando <br>
❌ Falhas com mensagens de erro descritivas <br>
📌 Cobertura de casos de UI importantes <br>

---

## 📌 O que está sendo testado

Exemplos de testes comuns no projeto:

### 🔹 Renderização

Verificar se um botão aparece na tela com label correto:

```js
expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
```

---

### 🔹 Interação

Testar se o botão muda de estado ao clicar:

```js
userEvent.click(myButton);
expect(myButton).toBeDisabled();
```

---

### 🔹 Inputs

Verificar se o campo de texto aceita entrada e mantém o valor:

```js
userEvent.type(input, 'texto');
expect(input).toHaveValue('texto');
```

---

## 📁 Estrutura do projeto

```
Project-React-Testing-Library/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── tests/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---

## 📚 Aprendizado

Com esse projeto consolidou:

✔️ Testar componentes React como usuário real <br>
✔️ Usar queries acessíveis (`getByRole`, `getByText`) <br>
✔️ Simular interações com `userEvent` <br>
✔️ Verificar mudanças da UI pós-interação <br>
✔️ Estruturar testes legíveis e confiáveis <br>

---
