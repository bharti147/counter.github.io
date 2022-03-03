console.log("happy coding");
const minus=document.getElementById('minus');
const reset=document.getElementById('reset');
const plus=document.getElementById('plus');
const bigtext=document.getElementById('bigtext');
let count=0;
function check(n){
    if(n%2==0){
    document.getElementById('bigtext').style.color="white";
    document.body.style.backgroundColor = "rgb(111, 189, 199)";

    }
    else{
        document.getElementById('bigtext').style.color="red";  
        document.body.style.backgroundColor = "rgb(66, 65, 65)";
    }
}
 


minus.addEventListener('click',function(){
   
    if(count<=10 && count>0){
--count;
check(count);
bigtext.innerHTML=count;
}

})

reset.addEventListener('click',function(){
    count=0;
    bigtext.innerHTML=count;

    
})

plus.addEventListener('click',function(){
    if(count<10 && count>=0){
   ++count;
   check(count);
   bigtext.innerHTML=count;
   
    }
})



