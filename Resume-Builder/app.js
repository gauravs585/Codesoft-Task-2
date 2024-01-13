const fromSubmit = (e) => {
    e.preventDefault();
    copyForm = form1.cloneNode(true);
    const data = new FormData(form); // creates instance of form data
    let obj = {};
    for(const [name, value] of data) {
        if([name] == "percentage"){
            if (isNaN(value) || value < 0 || value > 100) {
                alert("enter valid percentage");
              } 
        }
        // if([name] == "profile-photo"){
            
        //     const imgPath = document.querySelector('input[type=file]').files[0];
        //     console.log(imgPath);
        //     const reader = new FileReader();

        //     reader.addEventListener("load", function () {
        //         // convert image file to base64 string and save to localStorage
        //         localStorage.setItem("formDetails", reader.result);
        //         });

        //         if (imgPath) {
        //              reader.readAsDataURL(imgPath);
                     
        //         }
        // }else
       
        obj[name] = value;//creating object with respective name - value pair
    
    }
    
    
    console.log(obj["profile-photo"]);
    obj = JSON.stringify(obj);
    localStorage.setItem("formDetails", obj);

    // const loc = window.location.href.split("/"); // redirect
    // loc[loc.length - 1] = "resume1.html";
    // window.location.href = loc.join("/");

    document.querySelector("#form").remove();
    console.log(document.querySelector("#resume"));
    !document.querySelector("#resume")&&document.querySelector("body").appendChild(copyResume);
    load();
    document.querySelector("#resume").style.display = ""
}
form.addEventListener("submit",fromSubmit )

const btns = document.querySelectorAll(".add"); //all btns with  add class
for (const btn of btns) {
    const addBtn = function (e) {
        const parent = this.parentElement.cloneNode(true);
        const children = parent.children;
        for (const child of children) {
            for (const par of ["id", "name", "htmlFor", "textContent"]) {
                if (child[par]) {
                    if (par == "name") child.value = "";
                    if (child[par] === "+ add more") child.addEventListener("click", addBtn)
                    else if (!isNaN(child[par][child[par].length - 1])) {
                        child[par] = `${child[par].slice(0, -1)}${parseInt(child[par].slice(-1)) + 1}`;
                    } else {
                        child[par] += "1";
                    }
                }
            }
        }

        this.parentElement.append(parent);
        this.remove();
    }
    btn.addEventListener("click", addBtn)
}
