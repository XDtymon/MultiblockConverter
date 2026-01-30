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

function clear() {
    console.clear()
}

function printList (list) {
    clear()
    if (list.length != null) {
        for (let i = 0; i < list.length; i++) {
            console.log(list[i])   
        }
    }
}




printList(main_menu)
let inputMainMenuChoice = prompt("Choice | ")
if (inputMainMenuChoice == 1) {
    
    printList(mods)
    inputMainMenuChoice = prompt("Choice | ")
    if (inputMainMenuChoice == 1) {
        
        let inputCMChoice = prompt("Input |")
    } else if (inputMainMenuChoice == 2) {
        
        console.log("!!! Warning !!!")
        console.log("Input .aisle`s and .with, without .start() nor .build()")
        console.log("")
        
        let inputGTChoice = prompt("Input |")
    } else {
        console.error("Choice Error, enter 1 or 2!")
    }
        
    
} else {
    console.error("Choice Error, enter 1 or 2!")
}
