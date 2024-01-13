
// To Add An Extra Academic Qualification Field
function addNewaqField(){
    let newField=document.createElement("textarea");
    newField.classList.add('form-control')
    newField.classList.add('aqField')
    newField.classList.add('mt-2')
    // newField.setAttribute("row",3)
    // newField.setAttribute("placeholder","Enter here")
    let insertp=document.getElementById('aq');
    let insertB=document.getElementById('aqAddButton')
    insertp.insertBefore(newField,insertB);
}// To Add An Extra Work Experience Field
function addNewWEField(){
    // alert("Adding New field")
    let newField1=document.createElement("textarea");
    newField1.classList.add('form-control')
    newField1.classList.add('weField')
    newField1.classList.add('mt-2')
    // newField.setAttribute("row",3)
    // newField.setAttribute("placeholder","Enter here")
    let insertp1=document.getElementById('we');
    let insertB1=document.getElementById('weAddButton')
    insertp1.insertBefore(newField1,insertB1);
}
// To add an Extry Referance field
function addNewreField(){
    // alert("Adding New field")
    let newField2=document.createElement("textarea");
    newField2.classList.add('form-control')
    newField2.classList.add('reField')
    newField2.classList.add('mt-2')
    // newField.setAttribute("row",3)
    // newField.setAttribute("placeholder","Enter here")
    let insertp2=document.getElementById('Referance');
    let insertB2=document.getElementById('reAddButton')
    insertp2.insertBefore(newField2,insertB2);
}
// Generating Resume 
function generateResume(){
    // alert("hello")
    let name=document.getElementById('NameField').value;
    let nameTOset1=document.getElementById('name-t1');
    //setting the value on the personal info
    nameTOset1.innerHTML=name;
    let nameTOset2=document.getElementById('name-t2');
    //setting the value on the professional datafield
    nameTOset2.innerHTML=name;
    //setting the number/ contact
    let contact=document.getElementById('phoneField').value;
    let contactToset=document.getElementById('contact-t');
    contactToset.innerHTML=contact;
    // //setting Gmail
    let Gmail=document.getElementById('GmailField').value;
    let GmailToset=document.getElementById('gmail-t');
    GmailToset.innerHTML=Gmail
    //setting the address
    let address=document.getElementById('addressField').value;
    let addressToset=document.getElementById('address-t')
    addressToset.innerHTML=address;
    // setting image
    let img=document.getElementById('imgField').files[0]
    let reader=new FileReader();
    reader.readAsDataURL(img);

    reader.onloadend=function (){
        document.getElementById('img-t').src=reader.result;
    }
    //setting links
    // fb link
    let fb=document.getElementById('fbField').value
    let fbToset=document.getElementById('fb-t')
    fbToset.setAttribute('href',fb)
    fbToset.innerHTML=fb
    // Instagram link
    let insta=document.getElementById('instaField').value
    let instaToset=document.getElementById('insta-t')
    instaToset.setAttribute('href',insta)
    instaToset.innerHTML=insta
    // Linkedin link

    let linkedin=document.getElementById('linkedinField').value
    let linkedinToset=document.getElementById('linkedin-t')
    linkedinToset.setAttribute('href',linkedin)
    linkedinToset.innerHTML=linkedin
    //setting objective

    let objective=document.getElementById('objectiveField').value
    let objectiveToset=document.getElementById('obj-t')
    objectiveToset.innerHTML=objective
    
    // Academic Qualification
    let academicQualification=document.getElementsByClassName("aqField")
    let str="";
    for ( let e1 of academicQualification){
        str=str+`<li>${e1.value}</li>`;
    }
    document.getElementById('aq-t').innerHTML=str;

    //setting work experience
    let workExperience=document.getElementsByClassName("weField");
    let str1="";
    for( let e2 of workExperience){
        str1=str1+`<li>${e2.value}</li>`;
    }
    document.getElementById('we-t').innerHTML=str1;
    

//setting Referance
let Referance=document.getElementsByClassName("reField");
let str3="";
for( let e3 of Referance){
    str3=str3+`<li>${e3.value}</li>`;
}
document.getElementById('re-t').innerHTML=str3;
document.getElementById('resume-Template').classList.remove("resume");
document.getElementById('resume').classList.add("resume");
}
function printResume(){
    window.print();
}
function dark(){
    let i=0;
    let a=document.getElementById('Dark')
    a.classList.toggle('dark')
}