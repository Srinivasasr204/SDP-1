function vote(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var Answer=document.getElementById("Answer");
    var nationality=document.getElementById("nationality").value;
    if(age>=18 && nationality==="Indian"){
        Answer.innerHTML=name+",🤩 you are eligible to vote";
    }
    else{
        Answer.innerHTML=name+", 😔 you are not eligible to vote";
    }
}