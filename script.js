document.addEventListener("DOMContentLoaded",function (){

        const unordered_list = document.getElementById("ul");
        const input_list = document.getElementById("list");
        const button = document.getElementById("button");
      

        button.addEventListener("click",function(){
            if(input_list.value.trim()!=""){
           let input_text = input_list.value.trim();
             let todo_list =document.createElement("li");
             todo_list.innerText=input_text;
             unordered_list.appendChild(todo_list);
             input_list.value="";
            }


          

        });






});