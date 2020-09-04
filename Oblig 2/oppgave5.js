
"use strict"

//const index = document.implementation.createHTMLDocument('index.html'); 
const head_tag = document.createElement('head'); 
const main_tag = document.createElement("main");
const ul_tag = document.createElement("ul")

//window.onload = start(); 

     
document.body.append(main_tag); 

const p_tag = document.createElement("p"); 
main_tag.appendChild(p_tag); 
main_tag.setAttribute("id", "p_tag"); 

const trener_js = document.createElement("p"); 
trener_js.classList.add = "trener_JS"; 
trener_js.setAttribute("id", "trener_JS"); 
trener_js.innerHTML = "Jeg trener på JavaScript"; 

main_tag.appendChild(trener_js); 

const select_box = document.createElement("select"); 

select_box.style.maxWidth = "500px"; 
select_box.style.marginLeft = "auto";
select_box.style.marginRight = "auto";  
main_tag.appendChild(select_box); 

const test_btn = document.createElement("button"); 
test_btn.setAttribute("id", "test_btn"); 
test_btn.innerHTML = "test"; 
main_tag.appendChild(test_btn); 

const reset_btn = document.createElement("button"); 
reset_btn.setAttribute("id", "reset_btn"); 
reset_btn.innerHTML = "reset"; 
main_tag.appendChild(reset_btn); 
    

document.getElementById("reset_btn").onclick = reset_fun; 
document.getElementById("test_btn").onclick = test_func; 
 

main_tag.appendChild(ul_tag); 
create_list_elements(); 

//alert(document.body.innerHTML); 
//alert(document.innerHTML); 

//var new_window = window.open("index.html", "newWindow", "width=500 height=700"); 




function create_list_elements(){

    for(let i = 0; i<4; i++){

        var li = document.createElement("li"); 
        var delete_btn = document.createElement("button"); 

        delete_btn.classList.add("delete_btn");
        delete_btn.innerHTML = "delete"; 
        delete_btn.addEventListener('click', delete_func); 

        li.appendChild(delete_btn); 
        ul_tag.appendChild(li);
        
    }

}

function test_func(){

    let word = document.getElementById("trener_JS").innerText; 
    let word_array = word.split(" "); 

    let p = "";  


    for(let i = word_array.length - 1; i>=0; i--){
            p += word_array[i].substring(1) + " "; 
    }

    document.getElementById("p_tag").innerHTML = p;  


}

function reset_fun(){
    //alert(this.ul_tag.innerHTML); 
   // alert(document.querySelector("ul").innerHTML); 

   let mainList = document.querySelector("ul");

   while(mainList.hasChildNodes()){
       mainList.lastChild.remove(); 
   }

   
   /*
   while(mainList.childElementCount){
       mainList.firstChild.remove();
   }
   */
   

    create_list_elements(); 

}

function delete_func(){

    this.parentNode.remove();

}
   