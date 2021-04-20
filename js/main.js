/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]


    let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
    let dog_names = ["Max","HAS","PuRple","dog"]

    let findWords = (dog_string, dog_list) => {
        let d_string = thestring.toLowerCase().split(/[ ,]+/)
        let d_names = thelist.map(i => i.toLowerCase())
        let match = []

        for(let i = 0; i < d_names.length; i++) {
            if (d_string.includes(d_names[i] )) {
                matches.push(d_names[i])
            }
        }

        if (match.length == 0 ) {
            console.log('No Matches')
        }else {
            console.log('Matched d_names')
            console.log(match)
        }
}




// ========Exercise 2
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i, 1, 'even index')
        }
    }
    return arr
}

console.log(replaceEvens(arr))