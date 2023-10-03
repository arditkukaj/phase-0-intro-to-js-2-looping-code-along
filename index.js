
function writeCards(array, string){
    const gifts = []
    for(let i = 0 ; i < array.length; i++){
    gifts.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return gifts;
}


function countDown(){

const countdown=function(i) {
    console.log(i);
    i>0 && countdown(i-1);
}
    countdown(10);
}