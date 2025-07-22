import chalk from "chalk";



const promptQRcode = [
    {
        name:"link",
        description: chalk.yellow("Digite o link para gerar o QRcode")
    },
    {
        name: "type",
        description: chalk.yellow(
            "Escolha entre o tipo de QRcode (1- NORMAL ou 2- TERMINAl"
        ),

        pattern: /^[1-2]+$/,// Garante que o usuário digite somente os números 1 ou 2
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    }
]

export default promptQRcode 