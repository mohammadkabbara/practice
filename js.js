'use strict'

// let hours = [1,2,3,4,5,6,7,8];

// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };



// let syria = {
// name :'mohammad',
// min:24,
// max:25,
// avg:7.1,
// setItem:[],
// countItem:[],
// total :0,


// getSetItem : function(){
//     for (let i= 0; i <hours.length; i++) {
//         this.setItem.push(randomNumber(this.min, this.max))


//     }
// },

// getcountItem :function(){
//     for (let i= 0; i< hours.length; i++) {
//         this.countItem.push(Math.ceil(this.setItem[i]*this.avg));
//         this.total+=this.cookiesEachHour[i];

//     }


// },




// render :function(){
//     let parent = document.getElementById('parent');
//     let name = document.createElement('h3');
//     parent.appendChild(name);
//     name.textContent=this.name;
//     let ul =document.createElement('ul');
//     parent.appendChild(ul);
//     for (let i= 0; i< hours.length; i++) {
//         let li =document.createElement('li');
//         ul.appendChild(li);
//         li.textContent= hours [i] + ':'  + this.countItem[i]  + " cookies"



//     }
//     let totalLi=document.createElement('li');
//         ul.appendChild(totalLi);
//         totalLi.textContent= 'total :' + this.total + 'cookies'

// }
// }

// syria.render();
// syria.getSetItem ();
// syria.getcountItem ();

let array = [];
let headerArray = ['ID', 'Name', 'Email', 'Mobile', 'Age', 'Tuition'];
let diveEl = document.getElementById('container');
let tableEl = document.createElement('table');

diveEl.appendChild(tableEl);
let total = 0;
let P = document.createElement('P');
    diveEl.appendChild(P);
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function header() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    for (let i = 0; i < headerArray.length; i++) {
        let thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = headerArray[i]
    }
}
header();
function Student(email, mobile, tuition) {
    this.email = email;
    this.tuition = tuition;
    this.mobile = mobile;
    this.age = this.update();
    this.name = this.email.substring(0, this.email.lastIndexOf('@'));
    array.push(this);
}

Student.prototype.update = function () {
    return this.age = getRandomNum(18, 24);
};
let counter = 0;
Student.prototype.render = function () {
    counter++;
    let tr2El = document.createElement('tr');
    tableEl.appendChild(tr2El);
    let td1El = document.createElement('td');
    let td2El = document.createElement('td');
    let td3El = document.createElement('td');
    let td4El = document.createElement('td');
    let td5El = document.createElement('td');
    let td6El = document.createElement('td');
    tr2El.appendChild(td1El); tr2El.appendChild(td2El);
    tr2El.appendChild(td3El); tr2El.appendChild(td4El);
    tr2El.appendChild(td5El); tr2El.appendChild(td6El);
    td1El.textContent = counter;
    td2El.textContent = this.email.substring(0, this.email.lastIndexOf('@'));
    td3El.textContent = this.email;
    td4El.textContent = this.mobile;
    td5El.textContent = this.age;
    td6El.textContent = this.tuition;
};


Student.prototype.total = function () {
    total += this.tuition;
     P.textContent = `Total:${total}JD`;
};
let form = document.getElementById('form');
form.addEventListener('submit', eventclilck);
function eventclilck(event) {
    event.preventDefault();
    let email = event.target.email.value;
    let mobile = event.target.R2.value;
    mobile = parseInt(mobile);
    let tuition = event.target.R3.value; tuition = parseInt(tuition);
    let newStudent = new Student(email, mobile, tuition);
    newStudent.render();
    newStudent.total();
    saveData();
}
function saveData() {
    let data = JSON.stringify(array);
    localStorage.setItem('allData', data);
}
function getData() {
    let info = localStorage.getItem('allData');
    let information = JSON.parse(info);
    for (let i = 0; i < array.length; i++) {

    } if (information) {
        array = information;
    }
}
getData();