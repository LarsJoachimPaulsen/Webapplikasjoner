"use strict"

document.getElementById("to_do_btn").onclick = show_pop_up;  
document.getElementById("x-btn").onclick = close_pop_up;
document.getElementById("create_btn").onclick = add_to_do_card; 
document.getElementById("description").onkeydown = check_description_length; 


var checkbox = document.querySelector("input[name = sort]"); 

checkbox.addEventListener('change', sort_array); 

let finished_tasks_array = []; 
let finished_task_array_unsorted = []; 
let current_task_array_index = 0; 


function show_pop_up(){

    let pop_up_box = document.getElementById("blur-box");
    pop_up_box.style.display = "block"; 

}

function close_pop_up(){
    let pop_up_box = document.getElementById("blur-box"); 

    pop_up_box.style.display = "none";

}

function add_to_do_card(){
    
    let title = document.getElementById("title").value;
    let descripion = document.getElementById("description").value;  
    let author = document.getElementById("author").value; 

    if(title === "" || descripion === "" || author === ""){
        alert("No fields can be empty"); 
    }

    else{
        let outer_box = document.getElementById('flex-box'); 
        let container = document.createElement('div'); 

        // header creation
        let header = document.createElement('h3'); 
        header.innerHTML = "To Do";

        // p-tag creation
        let titleNode = document.createElement('p'); 
        titleNode.classList.add('title');
        //titleNode.setAttribute("id", "title");
        let descriptionNode = document.createElement('p'); 
        let authorNode = document.createElement('p'); 

        // button creation
        let finish_task_button = document.createElement('button'); 
        let delete_task_button = document.createElement('button'); 


        finish_task_button.classList.add("finish_btn");
        finish_task_button.innerHTML = "finish task";

        delete_task_button.classList.add("delete_btn");  
        delete_task_button.innerHTML= "delete task"; 

        titleNode.innerHTML = title;
        descriptionNode.innerHTML = descripion; 
        authorNode.innerHTML = author; 
        

        container.appendChild(header);
        container.appendChild(titleNode); 
        container.appendChild(descriptionNode); 
        container.appendChild(authorNode); 
        container.appendChild(finish_task_button); 
        container.appendChild(delete_task_button); 
        container.class = card; 

        outer_box.appendChild(container); 

        finish_task_button.addEventListener('click', finish_task);
        delete_task_button.addEventListener('click', function delete_task(){
            this.parentNode.remove(); 
        }); 


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
    //alert(this.parentNode.querySelector(".finish_btn").parentNode.innerHTML); 
    
    let informasjon = this.parentNode.querySelector(".finish_btn").parentNode.childNodes;

      //this.querySelector(".finish_btn").parentNode.remove(); 

    
   // console.log(informasjon.length)
   // console.log(informasjon[2]); 
   let title = informasjon[1].textContent; 
   let description = informasjon[2].textContent; 
   let author = informasjon[3].textContent; 
   let date = new Date(); 
   let completion_date = date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
   //console.log(title + " " + description + " " + author); 
  
   add_to_table(title, description, author, completion_date); 

    finished_tasks_array[current_task_array_index]=[title, description, author, date];  
    finished_task_array_unsorted[current_task_array_index] = [title, description, author, date]; 
    
    //alert(date.getTime()); 

    current_task_array_index++; 

    //console.log(finished_tasks_array)

   /* for(let i = 0; i < finished_tasks_array.length; i++){
        for(let j = 0; j < finished_tasks_array[i].length; j++){
            
            console.log(finished_tasks_array[i][j])
        }
    }
    */
   this.parentNode.remove(); 
    
}

function check_description_length(e){

    if(e.key != "ArrowLeft" || e.key != "ArrowUp" || e.key != "ArrowRigth" || e.key != "ArrowDown" || e.key != "Backspace"){
        let new_description = document.getElementById('description'); 
        let characters = new_description.value; 

        

        let number_of_characters = characters.length; 

        let number_of_characters_left = 30 - number_of_characters;

    
        if(number_of_characters_left < 1){
            new_description.innerHTML = new_description; 
            alert("description is to long"); 
            
        }
        else{
            new_description += e.key; 
            document.getElementById("counter").innerHTML = "( " + number_of_characters_left +" characters left)";  
        }
        
    }    

   
}


function sort_array(){
   
   
   if(this.checked){

    // insertion sort based on the time of which task was completed.
        for(let i = 1; i < finished_tasks_array.length; i++){
            let j = i -1; 
            let temp = finished_tasks_array[i];
            let comparator = temp[3].getTime();  

            while( j >= 0 && finished_tasks_array[j][3].getTime() < comparator){
                finished_tasks_array[j + 1] = finished_tasks_array[j]; 
                j--; 
            }
            finished_tasks_array[j+1] = temp; 
        }

        finish_sorting(finished_tasks_array); 
    }   
    else{
        // sends in a the unsorted array to reset positions when unchecked.
        finish_sorting(finished_task_array_unsorted);
    } 

    
}

function finish_sorting(array){

    let mainParent = document.getElementById('completion_table'); 

  while(mainParent.rows[1]){
      mainParent.rows[1].remove(); 
  }

    for(let i = 0; i< array.length; i++){

        let new_tr = document.createElement('tr');
        let td_title = document.createElement('td');
        let td_author = document.createElement('td');
        let td_description = document.createElement('td'); 
        let td_date = document.createElement('td'); 
        
        td_title.innerHTML = array[i][0];
        td_author.innerHTML = array[i][1]; 
        td_description.innerHTML = array[i][2]; 
        
        let date = array[i][3]; 
        td_date.innerHTML = date.getDay() +"." +date.getMonth() + "." + date.getFullYear(); 

        mainParent.appendChild(new_tr); 
        new_tr.appendChild(td_title); 
        new_tr.appendChild(td_description); 
        new_tr.appendChild(td_author); 
        new_tr.appendChild(td_date); 
        mainParent.appendChild(new_tr); 
        

    }

}


