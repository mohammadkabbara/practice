
'use strict'

Personal.allPersonal=[];

let headerArray = ['ID','name' , 'email' , 'password','price','age'];

let parent  =document.getElementById('parent');
let table =document.createElement('table');

let P = document.createElement('P');
   parent.appendChild(P);

parent.appendChild(table);
let total =0
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


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


function Personal(name,email,password,tuition) {
    this.name=name;
    this.email=email;
    this.password=password;
    this.tuition = tuition;
    this.age = this.update();
    Personal.allPersonal.push(this)
    
}
Personal.prototype.update = function () {
    return this.age = getRandomNum(18, 24);
   
};

let form =document.getElementById('form');
form.addEventListener('submit',onClick);
function onClick(event) {
    event.preventDefault();
    let name =event.target.name.value;
    let email=event.target.email.value;
    let password=event.target.password.value;
    let tuition = event.target.R3.value;
    new Personal(name,email,password,tuition);

    
    render();
    renderLi();
   allTotal();
    setItem();
    
    
    // form.removeEventListener('submit', onClick);
    
}


let counter = 0

function render() {
    counter++
    console.log(counter);

    for (let i= 0; i < Personal.allPersonal.length; i++) {
        
        let trRow=document.createElement('tr')
        table.appendChild(trRow);
        let tdc=document.createElement('td');
        let tdName=document.createElement('td');
        let tdEmail=document.createElement('td');
        let tdPassword=document.createElement('td');
        let td6El =document.createElement('td')
        let tdAge=document.createElement('td')


        trRow.appendChild(tdc);
        trRow.appendChild(tdName);
        trRow.appendChild(tdEmail);
        trRow.appendChild(tdPassword);
        trRow.appendChild(td6El);
        trRow.appendChild(tdAge);


        tdName.textContent=counter;
        tdName.textContent=Personal.allPersonal[i].name;
        tdEmail.textContent=Personal.allPersonal[i].email;
        tdPassword.textContent=Personal.allPersonal[i].password;
        td6El.textContent = Personal.allPersonal[i].tuition;
        tdAge.textContent=Personal.allPersonal[i].age;

        
        
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
function allTotal () {
    total += this.tuition;
     P.textContent = `Total:${total}JD`;
};




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

