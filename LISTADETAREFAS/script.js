const btnAdicionar = document.querySelector("#btnAdicionar")

btnAdicionar.addEventListener("click", function () {
    const item = document.createElement('li')
    const caixaValor = document.querySelector('#minhaCaixa').value 
    const novaTarefa = document.createTextNode(caixaValor)
    item.appendChild(novaTarefa)

    if (caixaValor === ""){
        alert("Voçê necessita informar uma tarefa!")
    } else {
        document.getElementById("itens").appendChild(item)
    }
    document.querySelector("#minhaCaixa").value =""

    const span = document.createElement("span")
    const icon = document.createTextNode("X")
    span.className = "fechar"
    span.appendChild(icon)
    item.appendChild(span)

    const close = document.querySelectorAll(".fechar")

    for (let i=0; i < close.length; i++){
        close[i].addEventListener("click", function(){
            const item = this.parentElement
            item.style.display = 'none'
        })
    }
})

const list = document.querySelector("ul")

list.addEventListener("click", function(ev){
    if (ev.target.nodeName === "LI"){
       ev.target.classList.toggle("checado")

    }
})