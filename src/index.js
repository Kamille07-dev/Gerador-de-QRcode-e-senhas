import prompt from 'prompt';
import mainPrompt from "./prompts/prompt-main.js"
import createQRCode from "./services/qr-code/create.js";
import createPassword from './services/passwords/create.js';

async function main() {
    
    prompt.get(mainPrompt, async (err,choose)=>{
        if(choose.select == 1 ) {
            console.log("Escolheu QRcode")
            await createQRCode();  // chama a função que continua o fluxo
        }

        if(choose.select == 2 ) {
            console.log("Escolheu password")
            await createPassword();
        }
    });
    prompt.start();
}

main();