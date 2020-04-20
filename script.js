let dataStore= [];

document.getElementById('white-8').addEventListener('mouseover',getData)


function getData(){  
 fetch('https://api.adviceslip.com/advice')
.then(res=> res.json())
.then (data =>{
 let newData = data.slip.advice;
 addDataFromApi(newData);
 updateDom();
 dataStore=[];
})   
}


function addDataFromApi(obj){
    dataStore.push(obj);
}

function updateDom(){
    var selectFortune= document.getElementById('fortune');
    selectFortune.innerText= dataStore;
     setTimeout(pageReload, 9010)
     document.querySelector('.white-8').style.opacity="0";
    document.getElementById('fortune').style.transform="scale(1)"
}

function pageReload(){
    window.location.reload();
}