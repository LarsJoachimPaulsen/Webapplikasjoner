
"use strict"

const main_tag = document.createElement("main");
const ul_tag = document.createElement("ul")



document.body.append(main_tag); 

let p_tag = document.createElement("p"); 
main_tag.appendChild(p_tag); 
p_tag.id = "p_tag"; 

const trener_js = document.createElement("p"); 
trener_js.class = "trener_JS"; 
trener_js.id = "trener_JS"; 
trener_js.innerHTML = "Jeg trener på JavaScript"; 

main_tag.appendChild(trener_js); 

const select_box = document.createElement("select"); 

const div = document.createElement("div"); 

select_box.style.maxWidth = "500px"; 
select_box.style.marginLeft = "50%"; 

main_tag.appendChild(div)
div.appendChild(select_box); 

const select_objects = [{id: "option_1", option:"object1"}, {id:"option_2", option:"object2"}, {id:"option_3", option:"opject 3"}]; 

for(let i = 0; i<select_objects.length; i++){
    var option = document.createElement("option"); 
    option.id = select_objects[i].id; 
    option.innerHTML = select_objects[i].option; 

    select_box.appendChild(option);
}

const test_btn = document.createElement("button"); 
test_btn.id = "test_btn"; 
test_btn.innerHTML = "test"; 
main_tag.appendChild(test_btn); 

const reset_btn = document.createElement("button"); 
reset_btn.id = "reset_btn"; 
reset_btn.innerHTML = "reset"; 
main_tag.appendChild(reset_btn); 
    

document.getElementById("reset_btn").onclick = reset_fun; 
document.getElementById("test_btn").onclick = test_func; 
 

main_tag.appendChild(ul_tag); 
create_list_elements(); 



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

    console.log(word)

    let word_array = word.split(" "); 

    console.log(word_array.length);

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

    create_list_elements(); 

}

function delete_func(){

    this.parentNode.remove();

}
   