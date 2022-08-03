function writeCards(names,event){

    let newNames=[]

    for(let counter=0;counter<names.length;counter++){

    let x=`Thank you, ${names[counter]}, for the wonderful ${event} gift!`

    newNames.push(x)
    }
return newNames;
}

function countDown(num){
 while(num>=0){
    console.log(num)
    num--;
 }


}