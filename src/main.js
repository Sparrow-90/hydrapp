const counter = document.querySelector('.counter--js');
const addBtn = document.querySelector('.add--js');
const removeBtn= document.querySelector('.remove--js');

let countNumber = 0;
const key = new Date().toISOString().slice(0,10)


addBtn.addEventListener('click', ()=>{
    console.log('działa');
    const addCount = ++countNumber;
    counter.innerHTML = addCount;
    localStorage.setItem(key, countNumber)
})

removeBtn.addEventListener('click', ()=>{
    console.log('remove działa');
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