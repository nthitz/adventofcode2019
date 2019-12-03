const {input, tests} = require('./input.js')

const doTests = true

const data = [...tests, input]

function processInput(_input, _i) {
    const lines = _input.split('\n')
    const startingPosition = [0, 0]
    const allLinePositions = []
    lines.forEach((line, lineIndex) => {
        let position = startingPosition
        let positions = []
        const tokens = line.split(',')
        tokens.forEach(token => {
            const direction = token[0]
            const amount = +token.substr(1)
            let vector = null
            switch (direction) {
                case 'R':
                    vector = [1, 0]
                break;
                case 'D':
                    vector = [0, 1];
                break;
                case 'L':
                    vector = [-1, 0];
                break;
                case 'U':
                    vector = [0, -1]
                break;
                default:
                    console.warn('unknown direction', direction)
                break
            }
            for (let i = 0; i < amount; i++) {
                position = [
                    position[0] + vector[0],
                    position[1] + vector[1],
                ]
                positions.push(position)
            }
        })
        allLinePositions.push(positions)
    })
    const matches = {}
    allLinePositions.forEach(set => {
        const setMatches = {}
        set.forEach(position => {
            const hash = `${+position[0]},${+position[1]}`
            if (!setMatches[hash]) {
                setMatches[hash] = 0
            }
            setMatches[hash] ++
        })
        Object.keys(setMatches).forEach(match => {
            if (!matches[match]) {
                matches[match] = 0
            }
            matches[match] ++
        })
    })
    let smallestMatchDistance = Number.MAX_SAFE_INTEGER
    let smallestMatch = null
    Object.keys(matches).forEach(match => {
        const value = matches[match];
        if (value !== allLinePositions.length) {
            return
        }
        const [x, y] = match.split(',')
        // const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
        const distance = Math.abs(+x) + Math.abs(+y)
        console.log(match, distance)
        if (distance < smallestMatchDistance) {
            smallestMatchDistance = distance
            smallestMatch = match
        }
    })
    console.log(_i, smallestMatch, smallestMatchDistance)
}

data.forEach(processInput)