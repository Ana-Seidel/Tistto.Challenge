const button = document.querySelector("#add-task")
const input = document.querySelector("#taskbar")
const allList = document.querySelector(".list-task")
const logoutButton = document.querySelector("#logout-button")
const API_URL = 'http://localhost:8000/api'

let itensNaLista = []

// Função para adicionar tarefas
async function addTarefa() {
    const tarefa = input.value;
    const username = JSON.parse(localStorage.getItem('username')); // Obter o username do localStorage
    console.log("username",username)

    try {
        const response = await fetch(`${API_URL}/tasks/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tarefa, username }) // Enviar o username com a tarefa
        });

        //if (response.ok) {
            itensNaLista.push({
                tarefa: input.value,
                concluida: false
            });

            input.value = "";
            mostrarTarefa();
        //} else {
            alert('Erro ao adicionar tarefa.');
    //    }
    } catch (error) {
        alert('Erro de conexão.');
    }
}

// Função para mostrar tarefas
function mostrarTarefa(){
    let novaLi = ""

    itensNaLista.forEach( (item, index) => {
        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
            <img src="./assets/check-circle.png" onclick="checkTask(${index})">
            <p>${item.tarefa}</p>
            <img src="./assets/pencil.png" onclick="editItem(${index})">
            <img src="./assets/trash3-fill.png" onclick="deleteItem(${index})">
        </li>
        `
 })

 allList.innerHTML = novaLi

}

// Função para marcar a tarefa como concluída
function checkTask(index){
    itensNaLista[index].concluida = !itensNaLista[index].concluida

    mostrarTarefa()
}

// Função para deletar tarefa
function deleteItem(index){

    itensNaLista.splice(index, 1)

    mostrarTarefa()

}

// Função para editar tarefa
function editItem(index) {
    // Preenche o campo de entrada com o texto atual da tarefa
    input.value = itensNaLista[index].tarefa;

    // Remove a tarefa atual da lista (para substituí-la após edição)
    itensNaLista.splice(index, 1);
    mostrarTarefa();
}

function logout() {


    localStorage.removeItem('userSession');
    sessionStorage.removeItem('userSession');
    window.location.href = 'http://127.0.0.1:5500/login.html';
}

button.addEventListener("click", addTarefa) // Botão criar tarefa
logoutButton.addEventListener("click", logout); // Botão logout