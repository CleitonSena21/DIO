const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para classificar o nível do herói com base na experiência
function classificarHeroi(nome, experiencia) {
    let nivel;

    if (experiencia < 1000) nivel = "Ferro";
    else if (experiencia <= 2000) nivel = "Bronze";
    else if (experiencia <= 5000) nivel = "Prata";
    else if (experiencia <= 7000) nivel = "Ouro";
    else if (experiencia <= 8000) nivel = "Platina";
    else if (experiencia <= 9000) nivel = "Ascendente";
    else if (experiencia <= 10000) nivel = "Imortal";
    else nivel = "Radiante";

    return `O Herói de nome ${nome} está no nível de ${nivel}`;
}

// Leitura dos dados do usuário
rl.question("Digite o nome do herói: ", (nomeHeroi) => {
    rl.question("Digite a experiência do herói: ", (experienciaInput) => {
        const experienciaHeroi = parseInt(experienciaInput);
        console.log(isNaN(experienciaHeroi) 
            ? "Por favor, insira um número válido para a experiência." 
            : classificarHeroi(nomeHeroi, experienciaHeroi));
        
        rl.close();
    });
});