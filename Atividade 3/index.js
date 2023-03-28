const accordion = document.querySelector("#accordionExample")

const listaObjetos = [
    {
        id: 1,
        nome: "Peterson",
        detalhamento: "Qualquer coisa"
    },

    {
        id: 2,
        nome: "Peterson",
        detalhamento: "Qualquer coisa"
    },

    {
        id: 3,
        nome: "Peterson",
        detalhamento: "Qualquer coisa"
    }
]

for(const tarefa of listaObjetos) {
    criarAccordion(tarefa)
}

function criarAccordion (tarefa) {
    const divItem = document.createElement("div")
    divItem.setAttribute("class", "accordion-item")

    accordion.appendChild(divItem)

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "accordion-header")
    h2.setAttribute("id", "headingOne")

    divItem.appendChild(h2)

    const button = document.createElement("button")
    button.setAttribute("class", "accordion-button")
    button.setAttribute("type", "button")
    button.setAttribute("data-bs-toggle", "collapse")
    button.setAttribute("data-bs-target", `#${tarefa.id}`)
    button.setAttribute("aria-expanded", "true")
    button.setAttribute("aria-controls", tarefa.id)
    button.innerText = tarefa.nome

    h2.appendChild(button)

    const divId = document.createElement("div")
    divId.setAttribute("id", tarefa.id)
    divId.setAttribute("class", "accordion-collapse collapse show")
    divId.setAttribute("aria-labelledby", "headingOne")
    divId.setAttribute("data-bs-parent", "#accordionExample")

    divItem.appendChild(divId)

    const divBody = document.createElement("div")
    divBody.setAttribute("class", "accordion-body")
    divBody.innerText = tarefa.detalhamento

    divId.appendChild(divBody)

}

{/* <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
        </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
    </div>  */}

