# 🏥 Paciente API

API REST para gerenciamento de pacientes, desenvolvida com **NestJS** e **TypeScript** como projeto de aprendizado de back-end.

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/) — framework Node.js progressivo
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática
- [Node.js](https://nodejs.org/)

## 📁 Estrutura

```
src/
├── pacientes/
│   ├── pacientes.controller.ts   # Rotas HTTP
│   ├── pacientes.service.ts      # Regras de negócio
│   └── pacientes.module.ts       # Módulo NestJS
└── main.ts
```

A aplicação segue a arquitetura em três camadas do NestJS: **Controller → Service → Model**.

## ⚙️ Como rodar

```bash
# Instalar dependências
npm install

# Modo desenvolvimento (com hot reload)
npm run start:dev

# Modo produção
npm run start:prod
```

A API estará disponível em `http://localhost:3000`.

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura
npm run test:cov
```

## 👨‍💻 Autor

**Pablo Jorge** — [github.com/PabloJDev](https://github.com/PabloJDev) · [linkedin.com/in/pablo-jorge07](https://linkedin.com/in/pablo-jorge07)
