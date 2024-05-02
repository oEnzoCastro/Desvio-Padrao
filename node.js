
var btn = document.getElementById("btn")

var elementos = document.getElementById("elementos")

function getElementos(){

    btn.remove()
    
    num = parseFloat(elementos.value)

    parseFloat(num)

    document.getElementById("numElementosAlert").innerHTML += `
        
    <p class="result">Valor dos Elementos:</p>
    
    `
    
    for(i = 0; i < num; i++){
        
        document.getElementById("numElementos").innerHTML += `
        
        <input type="number" class="x" id="` + i + `" required="">
        
        `
    }
    
    document.getElementById("form").innerHTML += `
    
    <button type="button" id="btnsend" onclick="desvioPadrao()">
    <p class="btntxt">Send</p>
    </button>
    
    `
}

    var btnsend = document.getElementById("btnsend")

function desvioPadrao(){

    num = parseFloat(elementos.value)

    var media = 0

    for(i = 0; i < num; i++){
        
        media += parseFloat(document.getElementById(`${i}`).value)
        
    }

    media = media/num

    var soma = 0

    for(i = 0; i < num; i++){
        
        soma += Math.pow((parseFloat(document.getElementById(`${i}`).value) - media), 2)
        
    }

    soma = Math.sqrt(soma/(num-1))

    console.log(soma)

    document.getElementById("form").innerHTML += `
    
    <p class="resultTitle">Result:</p>
    <p class="result">` + soma + `</p>

    
    `

}
