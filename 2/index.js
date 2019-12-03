const {input, tests} = require('./input.js')

const doTests = false

const data = doTests ? tests : [input]

function processCode(code, noun, verb) {
    const tokens = code.split(',')
    tokens[1] = noun
    tokens[2] = verb
    // console.log(tokens)
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
    // console.log(tokens)
    return tokens[0]
}

let target = 19690720

for (let n = 0; n < 99; n++) {
    for (let v = 0; v < 99; v++) {
        const res = processCode(input, n, v)
        if (res === target) {
            console.log(n, v)
        }
    }
}