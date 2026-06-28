# Frontend - Agenda

## Sobre o projeto

O Frontend da Agenda de Contatos é uma aplicação web desenvolvida em **React**, responsável pela interface gráfica do sistema.

A aplicação permite que o usuário realize login, visualize seus contatos cadastrados, pesquise contatos, cadastre novos registros, edite informações existentes e realize a desativação de contatos.

Toda comunicação é realizada através de uma API REST desenvolvida em Spring Boot.

---

## Tecnologias utilizadas

* React
* React Router DOM
* Axios
* Bootstrap
* Bootstrap Icons
* CSS3

---

## Funcionalidades

* Login de usuário
* Listagem de contatos
* Pesquisa em tempo real
* Cadastro de contatos
* Edição de contatos
* Desativação lógica
* Integração com WhatsApp
* Interface responsiva

---

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/rafa8641/Frontend-Agenda.git
```

---

### 2. Acesse a pasta

```bash
cd Frontend-Agenda
```

---

### 3. Instale as dependências

```bash
npm install
```

---

### 4. Configure a URL da API

No arquivo:

```
src/services/api.js
```

Configure a URL da API:

```javascript
baseURL: "http://localhost:8080"
```

---

### 5. Execute a aplicação

```bash
npm start
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---

## Requisitos

Antes de executar o frontend, o backend deve estar em execução na porta:

```
http://localhost:8080
```

---

## Autor

Desenvolvido por **Rafaela Margutte**.
