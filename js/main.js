/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

// function findWords(){
    //Your code goes here
}

// //Call method here with parameters

    let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
    let dog_names = ["Max","HAS","PuRple","dog"]

    function findWords(){
        for(let i = 0; i < dog_names.length; i++){
            if(dog_string[0].search)
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