const input = require('./input.js')

const lines = input.split('\n')

// let fuelRequirement = null

function getFuelRequirementForModule(number) {
    return Math.max(0, Math.floor(number / 3) - 2)
}
// while(fuelRequirement == null || fuelRequirement > 0) {
    let sum = 0

    lines.forEach(line => {
        const number = +line
        let nextFuelRequirement = getFuelRequirementForModule(number)
        sum += nextFuelRequirement
        while(nextFuelRequirement > 0){
            nextFuelRequirement = getFuelRequirementForModule(nextFuelRequirement)
            sum += nextFuelRequirement 
        }
    })

    // fuelRequirement = getFuelRequirementForModule(sum)
    console.log(sum)
    // if (fuelRequirement > 0) {
    //     lines.push(fuelRequirement)
    // }
// }