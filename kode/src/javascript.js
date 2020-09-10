'use strict'

document.getElementById("to_do_btn").onclick = show_pop_up;  
document.getElementById("x-btn").onclick = close_pop_up;
document.getElementById("create_btn").onclick = add_to_do_card; 




function show_pop_up(){
    var pop_up_box = document.getElementById("blur-box");

    pop_up_box.style.display = "block"; 
    //pop_up_box.style.backdrop-filter = "blur(10px)"; 


    

}

function close_pop_up(){
    var pop_up_box = document.getElementById("blur-box"); 

    pop_up_box.style.display = "none";

}

function add_to_do_card(){
    
    var title = document.getElementById("title").value;
    var descripion = document.getElementById("description").value;  
    var author = document.getElementById("author").value; 

    if(title === "" || descripion === "" || author === ""){
        alert("No fields can be empty"); 
    }

    else{
        var outer_box = document.getElementById('flex-box'); 
        var container = document.createElement('div'); 

        // header creation
        var header = document.createElement('h3'); 
        header.innerHTML = "To Do";

        // p-tag creation
        var titleNode = document.createElement('p'); 
        titleNode.classList.add('title');
        //titleNode.setAttribute("id", "title");
        var descriptionNode = document.createElement('p'); 
        var authorNode = document.createElement('p'); 

        // button creation
        var finish_task_button = document.createElement('button'); 
        var delete_task_button = document.createElement('button'); 


        finish_task_button.classList.add("finish_btn");
        finish_task_button.innerHTML = "finish task";

        delete_task_button.classList.add("delete_btn");  
        delete_task_button.innerHTML= "delete task"; 

        titleNode.innerHTML = title;
        //titleNode.value = document.getElementById("title").value;
        descriptionNode.innerHTML = descripion; 
        authorNode.innerHTML = author; 
        

        container.appendChild(header);
        container.appendChild(titleNode); 
        container.appendChild(descriptionNode); 
        container.appendChild(authorNode); 
        container.appendChild(finish_task_button); 
        container.appendChild(delete_task_button); 
        container.classList.add("card"); 

        outer_box.appendChild(container); 

        finish_task_button.addEventListener('click', finish_task);
        delete_task_button.addEventListener('click', delete_task); 


        close_pop_up(); 
    }
  
}

function add_to_table(title, description, author, time_of_completion){

    
    var table = document.getElementById('completion_table');
    var tr  = document.createElement('tr'); 
    var tb_title = document.createElement('td');
    var tb_author = document.createElement('td');
    var tb_description = document.createElement('td'); 
    var tb_date = document.createElement('td'); 

    tb_title.innerHTML = title;
    tb_author.innerHTML =  author; 
    tb_description.innerHTML = description; 
    tb_date.innerHTML = time_of_completion; 

    tr.appendChild(tb_title); 
    tr.appendChild(tb_author); 
    tr.appendChild(tb_description); 
    tr.appendChild(tb_date); 
    table.appendChild(tr); 

} 

function finish_task(){

    //alert(this.querySelectorAll(".finish_btn").parentNode.parentNode.firstChild.innerHTML);
    alert(this.parentNode.querySelector(".finish_btn").parentNode.innerHTML); 
    
    var informasjon = this.parentNode.querySelector(".finish_btn").parentNode.childNodes;

      //this.querySelector(".finish_btn").parentNode.remove(); 

    
   // console.log(informasjon.length)
   // console.log(informasjon[2]); 
   var title = informasjon[1].textContent; 
   var description = informasjon[2].textContent; 
   var author = informasjon[3].textContent; 
   var date = new Date(); 
   var completion_date = date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
   //console.log(title + " " + description + " " + author); 
  
   add_to_table(title, description, author, completion_date); 
   
   this.parentNode.remove(); 
    
}

function delete_task(){
   // alert(this.parentNode.querySelector(".delete_btn").parentNode.innerHTML); 
    this.parentNode.remove(); 


}


