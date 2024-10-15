
/*let divisiblecount = 0;
let i,j
for(j=2; j<101; j++){
for(i=2; j<101; j++)

    if(j % i==0){
    divisiblecount += 1
    break
    }
    else if(divisiblecount > 0){
    console.log(i);
}
}
*/

for(let i = 2; i <= 100; i++){
    let num = i;
    let divcount = 0;

 for(let j = 2; j < num; j++){
    if(num % j == 0){
        divcount += 1;
        break
    }
 }   
 if(divcount == 0){
    console.log(num);
 }
}