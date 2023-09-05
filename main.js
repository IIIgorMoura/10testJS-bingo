window.onload = comecar;

function comecar() {
    novaCartela();
    document.getElementById('recarregar').onclick = outraCartela;
}

function novaCartela() {
    for (let i = 0; i < 24; i++) {
        numeros(i);
    }
}

let uNumeros = new Array(76)

let coluna = new Array(
    0, 0, 0, 0, 0,  //b
    1, 1, 1, 1, 1,  //i
    2, 2, 2, 2,     //n
    3, 3, 3, 3, 3,  //g
    4, 4, 4, 4, 4,  //o
)

function numeros(thisNumero) {
    let pNumero = "quadrado" + thisNumero;
    // pNum recebe o id no HTML

    let baseColuna = coluna[thisNumero] * 15;
    // coluna gera números em intervalos de 15

    let novoNumero;

    do {
        novoNumero = baseColuna + getNovoNumero() + 1;
    } while (uNumeros[novoNumero]);

    uNumeros[novoNumero] = true;

    document.getElementById(pNumero).innerHTML = novoNumero;
    document.getElementById(pNumero).className = "";
    document.getElementById(pNumero).onmousedown = trocaCor;
}

function getNovoNumero() {
    return Math.floor(Math.random() * 15);
}

function outraCartela() {
    for (let i = 1; i < uNumeros.length; i++) {
        uNumeros[i] = false;
    }

    novaCartela();
    return false;
}

function trocaCor(evt) {
    if (evt) {
        thisNumero = evt.target;
    }

    if (thisNumero.className == "") {
        thisNumero.className = "trocaCor";
    } else {
        thisNumero.className = "";
    }
}