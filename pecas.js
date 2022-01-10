let peso = 80;

if (peso >= 100) {
    console.log("A peça possui um peso adequado, pode ser cadastrada!")
} else {
    console.log("A peça não pode ser cadastrada, não possui o peso mínimo")
}

let listaPecas = ["Pivo", "Terminal", "Cruzeta", "Automático", "Bieleta", "Coxim", "Condensador", "Garfo", "Regulador", "Induzido"]

if (listaPecas.length < 10) {
    console.log("A lista ainda possui espaço para mais peças.")
} else {
    console.log("Não há espaço disponível na lista, a capadidade máxima foi atingida")

    let nomePeca = listaPecas[0];

    if (nomePeca.length > 3) {
        console.log("Nome da peça é válido, pode seguir com o cadastro");
    } else {
        console.log("Nome da peça é inválildo, o nome deve ter mais de 3 caracteres")
    }

}


