const readline = require('readline');

function calculadorRank(vitorias, derrotas) {
    return vitorias - derrotas;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solicitarDados() {
    rl.question('Digite a quantidade de vitórias: ', (vitoriaInput) => {
        const vitorias = parseInt(vitoriaInput);

        rl.question('Digite a quantidade de derrotas: ', (derrotaInput) => {
            const derrotas = parseInt(derrotaInput);
            const saldoVitorias = calculadorRank(vitorias, derrotas);
            let nivel;

            if (saldoVitorias <= 10) {
                nivel = "Ferro";
            } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
                nivel = "Bronze";
            } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
                nivel = "Prata";
            } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
                nivel = "Ouro";
            } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
                nivel = "Diamante";
            } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
                nivel = "Lendário";
            } else {
                nivel = "Imortal";
            }

            const mensagem = "O herói tem saldo de " + saldoVitorias + " vitórias e está no nível ";
            console.log(mensagem + nivel);

            rl.close();
        });
    });
}

solicitarDados();