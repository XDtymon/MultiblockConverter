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

function encodeGT(keys, multiblock_code) {
    new_keys = []
    new_multiblock_code = []
    size = []
    
    for (int a = 0; a < multiblock_code.length; a++) {
        
    }


}

function decodeGT(keys, multiblock_code) {
    new_keys = []
    new_multiblock_code = []
    size = []
    
    for (int a = 0; a < multiblock_code.length; a++) {
        
    }


}

function decodeCM(input) {
    key = []
    multiblock = []
    size = []
    
    if (input != null) {
        for (int a = 0; a < multiblock.length; a++) {
            for (int b = 0; b < multiblock[a].length; b++) {
                
            }
        }

        
    } else {
        return "Error during decoding"
    }





    return [key, multiblock]
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
