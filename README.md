# FIAP Login App 📱

## Descrição do Projeto

Aplicativo mobile desenvolvido em **React Native** com **Expo** e estilização via **NativeWind** (Tailwind CSS para React Native).

### Ideia Principal
Tela de login do Portal do Aluno FIAP, com autenticação via e-mail institucional e senha, seguindo a identidade visual da FIAP (vermelho e branco).

### Requisitos
- [x] Tela de Login completa
- [x] Campo de e-mail 
- [x] Campo de senha com toggle de visibilidade 
- [x] Botão de Login (componente personalizado `Button`)
- [x] Switch "Manter conectado"
- [x] Link "Esqueceu a senha?"
- [x] Link "Cadastre-se"
- [x] Componente personalizado `InputField` com suporte a label e senha
- [x] Estilização com NativeWind 
- [x] Identidade visual FIAP

## Componentes Personalizados dentro do COmponents

- **`InputField`** — campo de texto reutilizável com label, placeholder e suporte a modo senha com ícone de olho para alternar visibilidade.
- **`Button`** — botão reutilizável com variantes `primary` (vermelho FIAP) e `outline` (borda cinza, fundo branco).



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

## Como Rodar

```bash
npm i react-native-safe-area-context
npx expo install react-dom react-native-web
npx expo install expo-asset

npm start
press A: para abrir no emulador android
press W: para abrir na web
```
### PARA RODAR NO WEB RODE
```bash
npx expo install @expo/metro-runtime
```
## Integrantes

| Nome | RM |
|------|----|
| Matheus Ricciotti | RM556930 |
| Matheus Bortolotto | RM555189 |
| Luan Ramos | RM558537 |
| Luiza Macena | RM556237 |
| Fernanda Rocha | RM554673 |

## Tela Desenvolvida
![Tela1](/assets/lighMode.png)
![Tela2](/assets/darkMode.png)


## Requisitos Funcionais

### Usuário ou senha não preenchidos
![Login1](/assets/sem_email.png)
![Login2](/assets/sem_senha.png)
### Login Efetuado 
![Login3](/assets/logado.png)

### Switch's
![Switch1](/assets/darkLight.png)
![]
![Switch2](/assets/usuario.png)

