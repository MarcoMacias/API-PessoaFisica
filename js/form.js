const input = document.querySelector(".input-documento")
const botao_procurar = document.querySelector(".pesquisa-btn")
const msn_erro = document.querySelector(".erro")

var pessoa = [
    {
        "nome": "Arthur",
        "cpf": "56513896878",
        "rg": "545823559"
    },
    {
        "nome": "davi",
        "cpf": "12345678910",
        "rg": "456878945"
    },
    {
        "nome": "Gabi",
        "cpf": "98163141234",
        "rg": "548687564"
    },
    {
        "nome": "Daniel",
        "cpf": "56513896878",
        "rg": "548945215"
    },
    {
        "nome": "Fabricio",
        "cpf": "12343576981",
        "rg": "564873215"
    }
]

console.log(pessoa)

botao_procurar.addEventListener('click', procurar) 

document.addEventListener('keypress', (e) => {
    if(e.code == "Enter"){
        procurar()
    }
})

function procurar(){
    let valor_input = parseInt(input.value)

    for(let i = 0; i < pessoa.length; i++){
        if(valor_input == pessoa[i].cpf) {
            console.log("cpf")
            msn_erro.innerHTML = `Cpf <br> ${pessoa[i].nome}`
            break; 
        }else if (valor_input == pessoa[i].rg) {
            console.log("rg")
            msn_erro.innerHTML = `Rg <br> ${pessoa[i].nome}` 
            break;
        }else {
            msn_erro.innerText = "valor invalido !"
        }
    }

}