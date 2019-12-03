const {input, tests} = require('./input.js')

const doTests = false

const data = doTests ? tests : [input]

function processCode(code) {
    const tokens = code.split(',')
    tokens[1] = 12
    tokens[2] = 2
    console.log(tokens)
    let opcodeIndex = 0;
    let executing = true;
    while(executing) {
        const op = +tokens[opcodeIndex]
        if (op === 1) {
            const o1 = +tokens[opcodeIndex + 1]
            const o2 = +tokens[opcodeIndex + 2]
            const o3 = +tokens[opcodeIndex + 3]
            tokens[o3] = +tokens[o1] + +tokens[o2]
            opcodeIndex += 4
        } else if (op === 2) {
            const o1 = +tokens[opcodeIndex + 1]
            const o2 = +tokens[opcodeIndex + 2]
            const o3 = +tokens[opcodeIndex + 3]
            tokens[o3] = +tokens[o1] * +tokens[o2]
            opcodeIndex += 4
        } else if (op === 99) {
            executing = false
            continue
        }
    }
    console.log(tokens)
}

data.forEach(processCode)