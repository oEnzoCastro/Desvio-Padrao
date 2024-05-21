
/*document.getElementById("darkMode_btn_container").innerHTML += `


<button id="darkMode_btn" type="button">
    <ion-icon name="moon"></ion-icon>
</button>

`
*/
var btn_desvio_padrao = document.getElementById("btn_desvio_padrao")

var elementos = document.getElementById("elementos")
var txtNumElementos = document.getElementById("txtNumElementos")

function getElementos(){

    btn_desvio_padrao.remove()
    elementos.remove()

    txtNumElementos.remove()
    
    num = parseFloat(elementos.value)

    parseFloat(num)

    document.getElementById("numElementosAlert").innerHTML += `
        
    <p class="result_top_title">Valor dos Elementos:</p>
    
    `
    
    for(i = 0; i < num; i++){
        
        document.getElementById("numElementos").innerHTML += `
        
        <input type="number" title="Insira o ` + (i + 1) + `° Elemento" class="x" id="` + i + `">
        
        `
    }
    
    document.getElementById("form").innerHTML += `
    
    <button type="button" id="btnsend" onclick="desvioPadrao()">
    <p class="btntxt">Send</p>
    </button>

    <button type="button" id="return" onclick="window.location.reload();">
    <p class="btntxt">Return</p>
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

    document.getElementById("form").innerHTML += `

    <div id="result_container_desvioPadrao">
        <div class="result_desvioPadrao">
            <p class="resultTitle">Desvio Padrão</p>
            <p class="result">` + soma + `</p>
        </div>
        <div class="result_desvioPadrao">
            <p class="resultTitle">Media</p>
            <p class="result">` + media + `</p>
        </div>
    </div>

    `

}
