// // const div = document.getElementById('div');
// // div[0].innerText='Hello world';
// // div[0].style.color='red';
// // div[0].style.backgroundColor='cyan';
// // console.log(div);

// const container = document.getElementsByClassName('container');

// // container[0].innerHTML='<h2 style=color:red>Hello World</h2>';
// // console.dir(container);
// const h2=document.createElement('h2');
// h2.innerText='ABES Engineering college';
// h2.style.color='whilte';
// h2.style.backgroundColor='brown';
// console.log(h2);
// container[0].appendChild(h2);


// // const img=document.createElement('img');
// // img.src='https://fastly.picsum.photos/id/795/200/300.jpg?hmac=nVCcTtoBktz0APjPmi8v8r7YJ_Tw7u9vVX6gE1WTIxw';
// // img.setAttribute('height','200px');
// // img.setAttribute('width','200px')
// // container[0].appendChild(img);

// const button = document.getElementById('btn');
// console.log(button);

// function msg(){
//     //console.log('Hi, I m working on DOM');
//     //alert("hi, I m using DOM");
//         const con = document.getElementsByClassName('con');
//     con[0].innerHTML='<h2 style=color:aqua>Loading Image ....</h2>';
//     setTimeout(()=>{
//            const img=document.createElement('img');
// img.src='https://fastly.picsum.photos/id/795/200/300.jpg?hmac=nVCcTtoBktz0APjPmi8v8r7YJ_Tw7u9vVX6gE1WTIxw';
// img.setAttribute('height','200px');
// img.setAttribute('width','200px')
// container[0].appendChild(img);
//     const con = document.getElementsByClassName('con');
//     con[0].innerHTML='<h2 style=color:black>Hello World</h2>';
//     console.dir(con);
//     }, 2000);
 
// }

// button.addEventListener('click',msg);

// Blokcing and Non-blocking

// const button = document.getElementById('btn');
// function longData(){
//     console.log('Satrt');
//     for(int i=0; i<1000000; i++){
//         console.log(i);
//     }
//     console.log('end');
// }

// button.addEventListener('click',longData);

// callback function

// function greetmsg(myName){
//     return 'Hii'+myName+'Welcome to abes';
// }

// function msgHandler(msg, clbk){
//     //console.log(msg);
//     const data = clbk();
//     return data;
// }

// const student=['Rahul', 'Aman', 'Vansh'];
// stuent.forEach((name) =>{
//     console.log(msgHandler(name, greetmsg))
// })
// const completemsg= msgHandler("Hii", greetmsg);
// console.log(completemsg);

// Promise

const myPromise = new Promise((resolve, reject)=>{
    const password = "72348hdf45";
    if(password.length > 8){
        resolve('Password length is ok');
    }
    else {
        reject('Password length is not as per our policy');
    }

});

// myPromise.then(()=>{console.log(result)})
// .catch((err)=>{console.log(err)})
// .finally(()=>{
//     console.log("All the resources have closed succesfully");
// })

// async function handleData(){
//     const result = await myPromise;
//     console.log(result);
// }
// handleData();

const button = document.getElementById('btn');
const disp = document.getElementById('disp');
let table =`<table border = 1>` ;
async function fetchData(){
    disp.innerHTML="<h2>Data is loading...</h2>"
    const response = await fetch('https://dummyjson.com/recipes');
    const jasonData = await response.json();
    console.log(jasonData.recipes);  
    //disp.innerHTML=<h2>${jasonData.recipes[0].name} ${jasonData.recipes}</h2>
    jasonData.recipes.forEach(element => {
        table += `<tr>
        <td><img src=${element.image} height=200p width=200 alt='image'></td>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.ingredients}</td>
        </tr>`
        
    });

    table+=`</table>`;
    disp.innerHTML=table;
}
button.addEventListener('click', fetchData);