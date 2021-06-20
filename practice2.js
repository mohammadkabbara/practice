
'use strict'

Personal.allPersonal=[];

let headerArray = ['name' , 'email' , 'password','price'];

let parent  =document.getElementById('parent');
let table =document.createElement('table');


parent.appendChild(table);
let total =0

function header(){
    let trHeader =document.createElement('tr');
    table.appendChild(trHeader);
    for (let i = 0; i < headerArray.length; i++) {
        let thHeader=document.createElement('th');
        trHeader.appendChild(thHeader);
        thHeader.textContent=headerArray[i]
        
        
    }
}
header();


function Personal(name,email,password,price) {
    this.name=name;
    this.email=email;
    this.password=password;
    this.price=price
    Personal.allPersonal.push(this)
    
}

let form =document.getElementById('form');
form.addEventListener('submit',onClick);
function onClick(event) {
    event.preventDefault();
    let name =event.target.name.value;
    let email=event.target.email.value;
    let password=event.target.password.value;
    let price=event.target.price.value;
    new Personal(name,email,password,price);
    setItem();
    
    render();
    renderLi();
    
    
    form.removeEventListener('submit', onClick);
    
}


function render() {

    for (let i= 0; i < Personal.allPersonal.length; i++) {
        let trRow=document.createElement('tr')
        table.appendChild(trRow);
        let tdName=document.createElement('td');
        let tdEmail=document.createElement('td');
        let tdPassword=document.createElement('td');
        let tdPrice=document.createElement('td')


        trRow.appendChild(tdName);
        trRow.appendChild(tdEmail);
        trRow.appendChild(tdPassword);
        trRow.appendChild(tdPrice);


        tdName.textContent=Personal.allPersonal[i].name;
        tdEmail.textContent=Personal.allPersonal[i].email;
        tdPassword.textContent=Personal.allPersonal[i].password;
        tdPrice.textContent=Personal.allPersonal[i].price;

        
        
    }
    
}


function renderLi() {

    let ul =document.createElement('ul');
    parent.appendChild(ul);
    for (let i = 0; i < Personal.allPersonal.length; i++) {
        let liName=document.createElement('li');
        let liEmail=document.createElement('li');
        let liPassword=document.createElement('li');
        let liPrice=document.createElement('li');


        ul.appendChild(liName);
        ul.appendChild(liEmail);
        ul.appendChild(liPassword);
        ul.appendChild(liPrice);

        liName.textContent=Personal.allPersonal[i].name;
        liEmail.textContent=Personal.allPersonal[i].email;
        liPassword.textContent=Personal.allPersonal[i].password;
        liPrice.textContent=Personal.allPersonal[i].price;
        
        
    }
    
}
// let p=document.createElement('p');
//     parent.appendChild(p);
//      function toto() {
//         toto += this.price;
//          p.textContent = `Total:${toto}JD`;
//     };


    
//  function total() {

//     total+=this.price;
//     p.textContent=`this total is : ${total} JD`
    
// }




function setItem() {

    let setData =JSON.stringify(Personal.allPersonal);
    localStorage.setItem('personal',setData);

    

}


function getItem() {

    let data =localStorage.getItem('presonal');
    let storageData=JSON.parse(data);
    if(storageData!==null){
        storageData=Personal.allPersonal;
    }

    
}
getItem();

