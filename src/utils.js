

export function formatarEmail(str) {
    const i = str.indexOf('@');
    
    if (i == -1) {
        console.log("Erro ao traduzir email: " + str) ;
        return str
    }

    return "@" + str.slice(0, i);
}