function verificaHabilidade(habilidades) {
    return habilidades.includes("Javascript");
}

// Testando a função
let habilidades = ["HTML", "CSS", "Javascript"];
console.log(verificaHabilidade(habilidades)); // true

habilidades = ["HTML", "CSS"];
console.log(verificaHabilidade(habilidades)); // false
