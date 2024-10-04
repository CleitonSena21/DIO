const readline = require('readline');

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usando magia';
                break;
            case 'guerreiro':
                ataque = 'usando espada';
                break;
            case 'monge':
                ataque = 'usando artes marciais';
                break;
            case 'ninja':
                ataque = 'usando shuriken';
                break;
            default:
                ataque = 'não tem ataque conhecido';
                break;
        }

        console.log(`O ${this.tipo} atacou ${ataque}`);
    }
}

const herois = [
    new Heroi('Gandalf', 100, 'Mago'),
    new Heroi('Conan', 30, 'Guerreiro'),
    new Heroi('Liang', 25, 'Monge'),
    new Heroi('Shinobi', 20, 'Ninja')
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function selecionarHeroi() {
    console.log("\nSelecione um herói:");
    herois.forEach((heroi, index) => {
        console.log(`${index + 1}: ${heroi.nome} (${heroi.tipo}, Idade: ${heroi.idade})`);
    });
    console.log(`${herois.length + 1}: Sair`);

    rl.question("Digite o número do herói que deseja escolher: ", (resposta) => {
        const index = parseInt(resposta) - 1;

        if (index >= 0 && index < herois.length) {
            herois[index].atacar();
            selecionarHeroi();
        } else if (index === herois.length) {
            console.log("Saindo do jogo. Até mais!");
            rl.close();
        } else {
            console.log("Escolha inválida. Tente novamente.");
            selecionarHeroi();
        }
    });
}

selecionarHeroi();