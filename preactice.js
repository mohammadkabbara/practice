'use strict';

Form.allForm=[];
let headerArray=['name','email' ,'password'];
let parent = document.getElementById('parent');
let table =document.createElement('table');
parent.appendChild(table);
function header (){
    let tr1 =document.createElement('tr')
    table.appendChild(tr1);
    for (let i = 0; i< headerArray.length; i++) {
        let th1 =document.createElement('th');
        tr1.appendChild(th1);
        th1.textContent=headerArray[i]
        
        
    }
}
header ();


function Form(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password;
    Form.allForm.push(this);

}






let form =document.getElementById('form');
form.addEventListener('submit',handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    let userName =event.target.name.value;
   
    let userpassword =event.target.password.value;
    
    let useremail =event.target.email.value;

    let newStudent= new Form (userName,userpassword,useremail);
    
   
    updateStorage();
    newStudent.render();
    newStudent.renderLi();
    form.removeEventListener('submit',handleSubmit);
    
    

}

Form.prototype.render=function(){
    for (let i = 0; i <Form.allForm.length; i++) {
      
        
 
    let tr2 =document.createElement('tr')
    table.appendChild(tr2);
    let tdName=document.createElement('td');
    let tdpassword=document.createElement('td');
    let tdemail=document.createElement('td');
    tr2.appendChild(tdName);
    tr2.appendChild(tdpassword);
    tr2.appendChild(tdemail);
    tdName.textContent=Form.allForm[i].name;
    tdpassword.textContent=Form.allForm[i].password;
    tdemail.textContent=Form.allForm[i].email;


}
};
Form.prototype.renderLi=function(){
    let ul =document.createElement('ul');
    parent.appendChild(ul);
    for (let i = 0; i <Form.allForm.length; i++) {



        

      
        let li=document.createElement('li');
        ul.appendChild(li)
        li.textContent=Form.allForm[i].name;

        
        let li1=document.createElement('li');
        ul.appendChild(li1)
        li1.textContent=Form.allForm[i].password;



        let li2=document.createElement('li');
        ul.appendChild(li2)
        li2.textContent=Form.allForm[i].email;
     }
};





function updateStorage() {
    let storageArr = JSON.stringify(Form.allForm);
    localStorage.setItem('formss', storageArr);
    
  }
  
  function getUsersStories() {
    let data = localStorage.getItem('formss');
    let storiesData = JSON.parse(data);
    if (storiesData !== null) {
        Form.allForm = storiesData;
    }
  }
  getUsersStories();



   



