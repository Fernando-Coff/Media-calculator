const form = document.getElementById("form")
const matter = document.getElementById("matter")
const note = document.getElementById("note")
var soma = 0
var media = 0
var contador = 1

form.addEventListener("submit", e =>{

    e.preventDefault()

    if(contador < 6){
        checkInputs()
        result()
        addMatterList()
    }else{
        alert("Limite máximo atingido, recarregue a página para inserir mais dados")
    }
})

function checkInputs(){
    const matterValue = matter.value
    const noteValue = note.value

    if(noteValue === ""){
        setErroFor(note, "Este campo é obrigatório")
    }else if(noteValue < 0 || noteValue >10){
        setErroFor(note, "Insira números de 0 a 10")
    }else{
        setSuccessFor(note)
    }

    if(matterValue === ""){
        setErroFor(matter, "Este campo é obrigatório")
    }else{
        setSuccessFor(matter)
    }
}

function setErroFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    small.innerText = message

    formControl.className = "form-item error"
}

function setSuccessFor(input){
    const formControl = input.parentElement
    formControl.className = "form-item success"
}




function addMatterList(){
    const matterValue = matter.value
    const noteValue = note.value
    const situationValue = setAprovedFor()
    const matterControl = matter.parentElement
    const noteControl = note.parentElement
    
    if(matterControl.className === "form-item success" && noteControl.className === "form-item success"){

        const tableRow = document.createElement("tr")
        const tbody = document.querySelector("tbody")
        tbody.appendChild(tableRow)

        const line1 = document.createElement("td")
        const line2 = document.createElement("td")
        const line3 = document.createElement("td")

        const line1Text = document.createTextNode(matterValue)
        line1.appendChild(line1Text)
        const line2Text = document.createTextNode(noteValue)
        line2.appendChild(line2Text)
        const line3Text = document.createTextNode(situationValue)
        line3.appendChild(line3Text)

        tableRow.appendChild(line1)
        tableRow.appendChild(line2)
        tableRow.appendChild(line3)

        if(noteValue <= 5.9){
            line3.style = "color: rgb(238, 95, 95);"
        }else{
            line3.style = "color: rgb(33, 197, 33);"
        }
        
        matterControl.className = "form-item"
        noteControl.className = "form-item"
        
        note.value = ""
        matter.value = ""
    }

}

function setAprovedFor(input) {

    const noteValue = note.value
    if(noteValue <= 5.9){
        return "Reprovado"
    }else{
        return "Aprovado"
    }
}

function result(){

    const matterControl = matter.parentElement
    const noteControl = note.parentElement
    
    if(matterControl.className === "form-item success" && noteControl.className === "form-item success"){
        soma += Number(note.value)

        media = soma/contador

        media = media.toFixed(1)

        let result = document.getElementById('final-number')
        const textResult = document.getElementById('result-text')
        const resultClass = document.getElementById('result') 

        resultClass.style = "visibility: visible"

        if(media < 5.9){
            result.innerText = media
            result.style = "color: rgb(238, 95, 95);"
            textResult.innerText = "Reprovado"
            textResult.style = "color: rgb(238,95,95);"
        }else{
            result.innerText = media
            result.style = "color:  rgb(33, 197, 33);"
            textResult.innerText = "Aprovado"
            textResult.style = "color:  rgb(33, 197, 33);"
        }
        
        contador++
    }
}