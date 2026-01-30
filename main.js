const main_menu = [
    "Menu",
    "1 - Converter",
    ""
]

const mods = [
    "To universal from",
    "1 - Custom Machinery",
    "2 - GT"
    
]

for (let i = 0; i < main_menu.length; i++) {
    console.log(main_menu[i])
}
var inputMainMenuChoice = prompt("Choice | ")
switch (inputMainMenuChocie) {
    case 1:
        for (let i = 0; i < mods.length; i++) {
            console.log(mods[i])
        }
        var inputMainMenuChoice = prompt("Choice | ")
        switch (inputMainMenuChoice) {
            case 1: 
                var inputCMChoice = prompt("Input |")
            case 2:
                console.log("!!! Warning !!!")
                console.log("Input .aisle`s and .with, without .start() nor .build()")
                console.log("")
                var inputGTChoice = prompt("Input |")
            deafult:
                console.log("Choice Error, enter 1 or 2!")
        }
    case 2:
        console.log("WIP")
    deafult:
        console.log("Choice Error, enter 1 or 2!")
        
    
}
