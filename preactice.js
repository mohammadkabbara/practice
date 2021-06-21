Personal.allPersonal=[];

let headerArray = ['ID','name' , 'phone' , 'tutition','age'];

let parent  =document.getElementById('parent');
let table =document.createElement('table');



parent.appendChild(table);

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
function Personal (name ,phone,tuition){
    this.name=name;
    this.phone=phone;
    this.tuition=tuition;
    this.age=this.update();
    
    Personal.allPersonal.push(this)
};


let form =document.getElementById('form');
form.addEventListener('submit',onClick);
function onClick(event){
    event.preventDefault();
    let name=event.target.name.value;
    console.log(name);
    let phone=event.target.phone.value;
    console.log(phone);
    let tuition=event.target.R3.value;
    console.log(tuition);
    new Personal(name,phone,tuition);
    

    render();
    setItem();

}


Personal.prototype.update=function(){
    return this.age=getRandomNum(18,25)


}
let counter=0

let trRow=document.createElement('tr');
table.appendChild(trRow);
function render(){
 


    for (let i = 0; i < Personal.allPersonal.length; i++) {
        counter++


        let trRow=document.createElement('tr');
        table.appendChild(trRow);

       

        let tdCounter=document.createElement('td');
        let tdName=document.createElement('td');
        let tdPhone=document.createElement('td');
        let tdTutision=document.createElement('td');
        let tdAge=document.createElement('td');


        trRow.appendChild(tdCounter);
        trRow.appendChild(tdName);
        trRow.appendChild(tdPhone);
        trRow.appendChild(tdTutision);
        trRow.appendChild(tdAge);


        tdCounter.textContent=counter;
        tdName.textContent=Personal.allPersonal[i].name;
        tdPhone.textContent=Personal.allPersonal[i].phone;
        tdTutision.textContent=Personal.allPersonal[i].tuition;
        tdAge.textContent=Personal.allPersonal[i].age;


       
        
    }
}


function setItem(){
    let setData=JSON.stringify(Personal.allPersonal);
    localStorage.setItem('data' ,setData)
}


function getItem(){
    let data =localStorage.getItem('data');
    let storageData=JSON.parse(data);
    if(storageData!==null){
        storageData=Personal.allPersonal
    }
}
getItem();


