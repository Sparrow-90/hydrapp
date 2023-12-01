const counter = document.querySelector('.counter--js');
const addBtn = document.querySelector('.add--js');
const removeBtn= document.querySelector('.remove--js');

let countNumber = 0;
let key = new Date().toLocaleString().slice(0,10);

setInterval(()=>{
    if(key !== new Date().toLocaleString().slice(0,10)){
        key = new Date().toLocaleString().slice(0,10);
        countNumber = 0
    }
}, 1000*60)

addBtn.addEventListener('click', ()=>{
    const addCount = ++countNumber;
    counter.innerHTML = addCount;
    localStorage.setItem(key, countNumber)
})

removeBtn.addEventListener('click', ()=>{
    if(countNumber === 0 ){
        counter.innerHTML = 0
    }
    else{
        const removeCount = --countNumber;
        counter.innerHTML = removeCount
    };
    localStorage.setItem(key, countNumber)
})

if(localStorage.getItem(key)){
    counter.innerHTML = parseInt(localStorage.getItem(key))
}

countNumber = localStorage.getItem(key)