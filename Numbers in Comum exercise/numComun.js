let arrayA = [13,20,10,22,24,20,27,17,19,14];
let arrayB = [24,22,23,10,15,17,29,14,16,21];
function compare(array1,array2){
    let index = []
    let equalArray = []
    
    for(let i = 0; i < 10 ;i++){

    for(let j = 0; j < 10; j++ ){
        if(array1[i] === array2[j]){
            index.push(j)
        }    
     } }

  for(let i = 0; i < index.length -1 ; i++){
        equalArray.push(array2[index[i]]);
    }

    return equalArray
}
console.log(compare(arrayA,arrayB))