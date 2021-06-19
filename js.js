'use strict'

let hours = [1,2,3,4,5,6,7,8];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};



let syria = {
name :'mohammad',
min:24,
max:25,
avg:7.1,
setItem:[],
countItem:[],
total :0,


getSetItem : function(){
    for (let i= 0; i <hours.length; i++) {
        this.setItem.push(randomNumber(this.min, this.max))
       
        
    }
},

getcountItem :function(){
    for (let i= 0; i< hours.length; i++) {
        this.countItem.push(Math.ceil(this.setItem[i]*this.avg));
        this.total+=this.cookiesEachHour[i];
        
    }
  

},




render :function(){
    let parent = document.getElementById('parent');
    let name = document.createElement('h3');
    parent.appendChild(name);
    name.textContent=this.name;
    let ul =document.createElement('ul');
    parent.appendChild(ul);
    for (let i= 0; i< hours.length; i++) {
        let li =document.createElement('li');
        ul.appendChild(li);
        li.textContent= hours [i] + ':'  + this.countItem[i]  + " cookies"
       
        
        
    }
    let totalLi=document.createElement('li');
        ul.appendChild(totalLi);
        totalLi.textContent= 'total :' + this.total + 'cookies'

}
}

syria.render();
syria.getSetItem ();
syria.getcountItem ();

