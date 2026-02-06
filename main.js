//{"keys":{"a":"gtceu:bronze_brick_casing","b":"gtceu:steam_machine_casing"},"pattern":[["aaa       ","a a       ","aaa       ","a a       ","aaa       ","         a"],["bbb       ","b b       ","b b       ","b b       ","bmb       ","          "]]}


const main_menu = [
    "Menu",
    "1 - Converter",
    ""
]

const mods = [
    "To universal from",
    "1 - Custom Machinery",
    "2 - GT",
    "To universal to",
    "3 - Custom Machinery",
    "4 - GT"
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
    
    for (let a = 0; a < multiblock_code.length; a++) {
        
    }


}

function decodeGT(keys, multiblock_code) {
    new_keys = []
    new_multiblock_code = []
    size = []
    
    for (let a = 0; a < multiblock_code.length; a++) {
        
    }


}

function decodeCM(input) {
    let newInput = new Object({input})
    let key = newInput.input.keys
    let multiblock = []
    let size = []
    
    if (input != null) {
        console.log(newInput)    
        console.log(key)
        /*for (let a = 0; a < multiblock.length; a++) {
            for (let b = 0; b < multiblock[a].length; b++) {
                console.log(b)
            }
        }*/

        
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
        
        let inputCM = prompt("Input |")
        decodeCM(inputCM)
    } else if (inputMainMenuChoice == 2) {
        
        console.log("!!! Warning !!!")
        console.log("Input .aisle`s and .with, without .start() nor .build()")
        console.log("")
        
        let inputGTChoice = prompt("Input |")
    } else {
        console.error("Choice Error, enter 1 or 2!")
    }
} else if (inputMainMenuChoice == 2) {

} else {
    console.error("Choice Error, enter 1 or 2!")
}
