# ToDo List Application

## Descrição
Esta é uma aplicação de lista de tarefas simples que permite aos usuários adicionar, marcar como concluída, editar e excluir tarefas. A aplicação também inclui funcionalidades de login e registro de usuários. A comunicação com o backend é feita por meio de uma API RESTful.

## Estrutura do Projeto

- **toDoList.html**: Página principal da aplicação onde os usuários podem adicionar e gerenciar suas tarefas.
- **login.html**: Página de login onde os usuários podem entrar na aplicação.
- **criarLogin.html**: Página de registro onde novos usuários podem criar uma conta.
- **toDoList.js**: Script JavaScript responsável pela funcionalidade da lista de tarefas.
- **forwardToTask.js**: Script JavaScript para lidar com login e registro.
- **toDoList.css**: Folha de estilos para a página principal da lista de tarefas.
- **login.css**: Folha de estilos para a página de login.
- **criarLogin.css**: Folha de estilos para a página de registro.

## Funcionalidades

- **Adicionar Tarefa**: Adiciona uma nova tarefa à lista.
- **Marcar como Concluída**: Marca uma tarefa como concluída ou não concluída.
- **Editar Tarefa**: Permite editar o texto de uma tarefa existente.
- **Excluir Tarefa**: Remove uma tarefa da lista.
- **Login**: Permite que os usuários façam login na aplicação.
- **Registro**: Permite que novos usuários criem uma conta na aplicação.

## Configuração

### Configuração do Backend
Certifique-se de que o backend está rodando em `http://localhost:8000/api`. O backend deve ter os seguintes endpoints:
- `/tasks/`
- `/register/`
- `/login/`

## Instalação

1. Clone o repositório.
2. Abra o arquivo `toDoList.html` no navegador para acessar a aplicação.
