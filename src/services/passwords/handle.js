

async function handle () {

    let characters = [];
    let password= "";

    const passwordLength = process.env.PASSWORD_LENGHT

    if(process.env.UPPERCASE_LATTERS === "true"){
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if(process.env.LOWERCASE_LETTERS === "true"){
        characters.push(..."abcdefghijklmnopqrstuvwxyz");
        //... serve para adicionar e nao substituir
    }

    if(process.env.NUMBERS === "true"){
        characters.push(..."0123456789");
    }

    if(process.env.SPECIAL_CHARACTERES === "true"){
        characters.push(..."!@#$%^&*()_+-=|,.<>?/~");
    }

    for(let i=0; i< passwordLength; i++){
        const index = Math.floor(Math.random()* characters.length)
        password += characters[index];
    }

    return password;
}

export default handle;