const form = document.querySelector("#form1");
const form1 = document.querySelector("#form");
const resume = document.querySelector("#resume");
let copyForm = form1.cloneNode(true);
const copyResume = resume.cloneNode(true);

function load() {
    let data = localStorage.getItem("formDetails");
    data = JSON.parse(data);
    const keys  = Object.keys(data);
    for (const key of keys) {
        const div =  document.querySelector(`#${key}`);
        if(!div) {
            if (!isNaN(key[key.length-1])) {
                const newKey = key.slice(0,-1);
                const div = document.querySelector(`#${newKey}`);
                if(['language', 'strength', 'tech-skills'].includes(newKey)){
                    const newDiv = div.cloneNode(true);
                    if(newDiv.id){
                        newDiv.id = newDiv.id + key.slice(-1);
                        newDiv.innerText = data[key];
                    }
                    div.parentElement.append(newDiv);
                }else {
                    const parent = div.parentElement.cloneNode(true);
                     const children = parent.children;
                    for (const child of children) {
                        if(child.id){
                            child.id = child.id + key.slice(-1);
                            child.innerText = data[key];
                        }
                    }
                    div.parentElement.parentElement.append(parent);
                }   
            }
        }
        else if(data[key]==="") {//console.log("here2",div);
        div.parentElement.remove();}
        else {console.log("here",div);
            div.textContent = data[key];}
    }
    document.querySelector("#back").onclick=()=>{
        document.querySelector("#resume").remove();
        document.querySelector("body").appendChild(copyForm);
        document.querySelector("#form").addEventListener("submit",fromSubmit);
    }
    
}
// load();