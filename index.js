// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr,s){
    return arr.filter(function (x) {
        return x.toLowerCase() === s.toLowerCase();
    })
}


console.log(findMatching(drivers,'Bobby'))

// function fuzzyMatch(arr,s) {
//     return arr.filter(
//         function (x) {
//             return  x.toLowerCase()[0] === s.toLowerCase()
//         }
//     )
// }

function fuzzyMatch(arr,s) {
    return arr.filter(
        function (x) {
            return  x.toLowerCase().substring(0,s.length) === s.toLowerCase()
        }
    )
}

console.log(fuzzyMatch(drivers,'y'))

function matchName(arr,s){
    return arr.filter(
        function (x) {
            return x.name === s
        }
    )

}


// let y = drivers.filter(function (x) {
//     return x === 'Bobby';})

//     console.log(y)