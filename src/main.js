const counter = document.querySelector('.counter--js');
const addBtn = document.querySelector('.add--js');
const removeBtn= document.querySelector('.remove--js');

let countNumber = 0


addBtn.addEventListener('click', ()=>{
    console.log('działa');
    const addCount = ++countNumber;
    counter.innerHTML = addCount;
    localStorage.setItem('count', countNumber)
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
    localStorage.setItem('count', countNumber)
})

if(localStorage.getItem('count')){
    counter.innerHTML = parseInt(localStorage.getItem('count'))
}

countNumber = localStorage.getItem('count')