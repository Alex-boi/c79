child=[];

function submit(){
var child1=document.getElementById("c1").Value;
var child2=document.getElementById("c2").Value;
var child3=document.getElementById("c3").Value;
var child4=document.getElementById("c4").Value;
child.push(child1);
child.push(child2);
child.push(child3);
child.push(child4);
console.log(child);
document.getElementById("children").innerHTML=child;
document.getElementById("buttons").style.display="none";
document.getElementById("buttonsort").style.display="inline-block";
}

function sorting(){
    child.sort();
    console.log(child);
    document.getElementById("children").innerHTML=child;
}