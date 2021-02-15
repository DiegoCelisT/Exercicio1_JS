let cor= prompt ("Escreva uma cor")
let marca = prompt ("Escreva uma marca de carro ou moto que você goste")
let número = prompt ("Escreva um número qualquer")
let gênero = prompt ("Por último, escreva \"h\" se você é Homem, ou \"m\" se é Mulher")
Number(número)
let baterias = número/7
let capacitor = número/3
número = número*210
if (gênero=="m"){
    console.log ("É o Ano 2077. A humanidade está em guerra com as máquinas.\n\nA sua missão, caso decida aceitar, será infiltrar-se na base andróide do MK ULTRA 9600, fingir ser uma robô e coletar informações.\n\nSeu novo nome como espiã robótica será:\n\n","A", "poderosa", marca, Number(2077),"-",número, "do chassis", cor,)
    console.log ("")
    console.log ("As suas especificações técnicas são as seguintes:")
    console.table (
        {
            "Marca": marca,
            "Modelo": `2077-${número}`,
            "Gênero": "feminino",
            "Cor de chassis": cor,
            "Baterias": `${baterias.toFixed(2)} gigawatts`,
            "Capacitor de Fluxo": `Urânio ${capacitor.toFixed(1)}`
        }
    )
}
else{
    console.log ("É o Ano 2077. A humanidade está em guerra com as máquinas.\n\nSua missão, caso queira aceitar, será infiltrar-se na base andróide do MK ULTRA 9600, fingir ser um robô e coletar informações.\n\nSeu novo nome como espião robótico será:\n\n","O", "poderoso", marca, Number(2077),"-",número, "do chassis", cor,)
    console.log ("")
    console.log ("As suas especificações técnicas são as seguintes:")
    console.table (
        {
            "Marca": marca,
            "Modelo": `2077-${número}`,
            "Gênero": "masculino",
            "Cor de chassis": cor,
            "Baterias": `${baterias.toFixed(2)} gigawatts`,
            "Capacitor de Fluxo": `Urânio ${capacitor.toFixed(1)}`
        }
    )
}
