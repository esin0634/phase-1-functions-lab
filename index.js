// Code your solution in this file!
let distance = 50
function distanceFromHqInBlocks(distance){
    return Math.abs(distance - 42)
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance)*264
}

function distanceTravelledInFeet(a,b){
    return Math.abs(a - b)*264
}

function calculatesFarePrice(start, destination){
    let distance = (Math.abs(start - destination))*264
    let cost = 0
    if (distance < 400){
        return 0
    } else if (distance >= 400 && distance <= 2000){
        cost = ((distance-400)*2/100)
        return cost
    } else if (distance > 2000 && distance <= 2500){
        return 25
    } else {
        return 'cannot travel that far'

    } 
}