# FIAP Login App 📱

## Descrição do Projeto

Aplicativo mobile desenvolvido em **React Native** com **Expo**, utilizando **NativeWind** para estilização com classes Tailwind CSS.

### Ideia Principal

O projeto consiste em uma tela de login do **Portal do Aluno FIAP**, permitindo que o aluno acesse sua conta institucional através de e-mail e senha. A interface segue a identidade visual da FIAP, com destaque para as cores vermelho e branco, oferecendo uma experiência simples, moderna e intuitiva.

### Requisitos

- O aluno deve conseguir inserir seu **e-mail institucional**
- O aluno deve conseguir inserir sua **senha**, com opção de mostrar/ocultar
- O aluno deve conseguir **manter a sessão ativa** via Switch
- O aluno deve conseguir acessar o link de **"Esqueceu a senha?"**
- O aluno deve conseguir navegar para a tela de **cadastro**
- O sistema deve exibir um **alerta** caso os campos estejam vazios ao tentar logar
- A tela deve conter um **botão de login com Google** como alternativa de acesso
- A interface deve utilizar **componentes personalizados** reutilizáveis (`InputField` e `Button`)
- A estilização deve seguir o padrão do projeto com **NativeWind**

---

## Componentes Personalizados

- **`InputField`** — campo de texto reutilizável com label, placeholder e suporte a modo senha com ícone para alternar visibilidade
- **`Button`** — botão reutilizável com variantes `primary` (vermelho FIAP) e `outline` (borda cinza, fundo branco)

---

## Estrutura do Projeto

```
├── App.tsx
├── screens/
│   └── LoginScreen.tsx
├── components/
│   ├── InputField.tsx
│   └── Button.tsx
├── styles/
│   ├── colors.ts
│   ├── fontFamily.ts
│   └── global.css
└── assets/
```

---

## Como Rodar

```bash
npm install
npx expo start
```

---

## Integrantes

| Nome | RM |
|------|----|
| Seu Nome Aqui | RM000000 |

---

## Screenshot

> Adicionar print da tela após rodar o projeto no simulador ou dispositivo físico.
