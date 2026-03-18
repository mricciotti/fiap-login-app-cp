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
- <img width="416" height="78" alt="image" src="https://github.com/user-attachments/assets/ba79d6c1-2948-425d-bc87-4226286fc981" />


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

<img width="339" height="711" alt="image" src="https://github.com/user-attachments/assets/b4903a74-a127-4dc1-bc8d-0ec0f6fe7c1e" />
<img width="339" height="720" alt="image" src="https://github.com/user-attachments/assets/247e77a7-d0a1-41af-a01c-6a091ea1cf77" />


## Requisitos Funcionais

### Usuário ou senha não preenchidos
<img width="330" height="427" alt="image" src="https://github.com/user-attachments/assets/abcbf99e-7093-4f34-b84a-95b31b14d620" />

### Login Efetuado 

<img width="325" height="313" alt="image" src="https://github.com/user-attachments/assets/47afb138-268c-4469-ae2d-2921e8878c0b" />

### Botão "Manter Conectado"

<img width="190" height="48" alt="image" src="https://github.com/user-attachments/assets/07baa161-4129-440f-b2f9-3cfd0c45fc25" />
<img width="166" height="37" alt="image" src="https://github.com/user-attachments/assets/61243f6c-4adc-4f0e-b780-07e4ff43b692" />

### Toogle de dark mode
<img width="123" height="46" alt="image" src="https://github.com/user-attachments/assets/77099c6d-482c-4b3b-9fe9-5da09a65da72" />



