// const elem = document.querySelector(`.header-list`);
// console.log(elem);

// const elem1 = document.querySelector(`.header-item`);
// console.log(elem1);
// // elem1.textContent = `Hello`;

// const elem2 = document.querySelector(`.header-item:nth-child(2)`);
// console.log(elem2);

// const elem4 = elem.querySelector(`.header-item:nth-child(4)`);
// console.log(elem4);



// const elemNav = document.querySelector(`.header-nav`);
// console.log(elemNav)

// const liElems = elemNav.querySelectorAll(`.header-item`);
// console.log(liElems);

// console.log(Array.from(liElems));

// console.log([...liElems])

// console.log(liElems[2]);

// const link = document.querySelector(`h1`);
// console.log(link);


// document.getElementById( без # `.`);
// document.getElementsByClassName(`header-link`);
// document.getElementsByTagName(`li`);
// document.getElementsByClassName(``)

// ==============================

// const ulElem = document.querySelector(`.header-list`);
// console.log(ulElem.parentElement);

// console.log(ulElem.firstChild текстовый узел, не пишем);

// console.log(ulElem.firstElementChild);

// console.log(ulElem.lastElementChild);

// console.log(ulElem.children);
// console.log(ulElem.children[1]);

// console.log(ulElem.nextElementSibling)

// =============================

// const imageEl = document.querySelector(`.man-img`);
// console.log(imageEl);

// console.log(imageEl.getAttribute(`src`));
// console.log(imageEl.getAttribute(`class`));
// imageEl.removeAttribute(``);
// imageEl.hasAttribute(``);



// console.log(imageEl.src);
// console.log(imageEl.width)
// imageEl.src = `#`

// const elemH1 = document.querySelector(`.main-title`);
// console.log(elemH1);
// elemH1.textContent = `Hello`;

// ==============================

// const liEl = document.querySelector(`.header-item`);
// console.log(liEl);

// liEl.classList.add( `bolt`);
// liEl.classList.remove(`bolt`);
// setInterval(() => {
//     liEl.classList.toggle(`bolt`)
// }, 1000)

// liEl.classList.replace(`заменть один клас`,`н другой`)

// console.log(liEl.classList.contains(`есть класс или нет?`))

// ==================================

// const link = document.querySelector(`h1`);
// link.style.color = `tomato`
// link.style.fontSize = `77px`
// console.log(link);

// ==================================

// const myElem = document.createElement(`h1`);

// myElem.textContent = `Hello Word`;
// myElem.style.color = `tomato`;
// myElem.classList.add(`bolt`)
// console.log(myElem);



// const arr = [];
// for(let i = 0; i < 100; i ++){
//     const myElem = document.createElement(`h1`);
//     myElem.textContent = `Hello Word`
//     arr.push(myElem)
// }
// console.log(arr);

// ================================

// const myElem = document.createElement(`h1`);

// myElem.textContent = `Hello Word`;
// myElem.style.color = `tomato`;
// myElem.classList.add(`bolt`)
// console.log(myElem);

// const boxElem = document.querySelector(`.js-nav`);
// boxElem.append(myElem);
// console.log(boxElem);

// const arr = [];
// for(let i = 1; i < 10; i++){
//     const myElem = document.createElement(`h1`);

// myElem.textContent = `Hello Word` +  i;
// myElem.style.color = `tomato`;
// myElem.classList.add(`bolt`);
// arr.push(myElem);
// }

// boxElem.append(...arr)

// const boxElem = document.querySelector(`.js-nav`);
// boxElem.prepend(myElem);
// console.log(boxElem);

// ======================================


// const options = [
//     {lable: `красный`, color: `#f44336`},
//     {lable: `зеленый`, color: `#4c4f50`},
//     {lable: `синий`, color: `#2196f3`},
//     {lable: `серый`, color: `#607d8b`},
//     {lable: `оранжевый`, color: `#e91e63`},
//     {lable: `индиго`, color: `#3f51b5`},
// ]


// const colorPictetContainer = document.querySelector(`.js-color-picer`)
// // colorPictetContainer.textContent = marKup;
// colorPictetContainer.innerHTML = marKup;

// const marKup = options.map(colotTemplate).join(`\n\n`)
// console.log(marKup)

// for(let color of options){
//     const marKup = colotTemplate(color)
//     console.log(marKup)
// }






/* 
<div class="color-card">
<div class="box" style="background-color: red;"></div>
<p>красный</p>
</div> 
*/

// function colotTemplate(obj){
// const label = obj.label;
// const color = obj.color;

// return`
// <div class="color-card">
// <div class="box" style="background-color: ${color};"></div>
// <p>${label}</p>
// </div> 
// `
// }

// const result = colotTemplate( {label: `Hello`, color: `blue`});
// console.log(result)


// ==============================

// const clickBtn = document.querySelector(`.js-btn`);
// clickBtn.addEventListener(`click`, onBtnClick);

// let boxecTop = 50;
// let boxecLeft = 50;

// function onBtnClick(){
//     boxecTop += 10;
//     boxecLeft += 10
//     boxec.style.top = `${boxecTop}px`;
//     boxec.style.left = `${boxecLeft}px`
// }

// =====================================

// const boxec = document.querySelector(`.boxec`);
// console.log(boxec)

// boxec.addEventListener(`click`, clikBoxec);

// function clikBoxec (){
//     boxecTop -= 10;
//     boxecLeft -= 10
//     boxec.style.top = `${boxecTop}px`;
//     boxec.style.left = `${boxecLeft}px`
// }

// =======================================

// const input = document.querySelector(`.js-input`);
// input.addEventListener(`click` , () => {
// console.log(`Hello`)
// })

// input.addEventListener(`input` , () => {
//     console.log(`Hello`)
//     })

    // input.addEventListener(`blur` , () => {
    //     console.log(`blur`)
    //     })

    //     input.addEventListener(`focus` , () => {
    //         console.log(`focus`)
    //         })

    // input.addEventListener(`change`, () => {
    //     console.log(`Change`)
    // })

    // ==============================================
//     input.addEventListener(`blur`, onInputBlut);

//     function onInputBlut(){
//         console.log(input.value)
//         alert(`Hello ${input.value}`)
//    }

//=============================================

//    input.addEventListener(`blur`, onInputBlut);
//    input.addEventListener(`focus`, onInputFocus);

//    function onInputBlut(){
//     const name = input.value;
//     if(name.length > 6){
//         input.classList.add(`valid`)
//     }else{
//         input.classList.add(`isvalid`)
//     }
// }

// function onInputFocus(){
//     input.classList.remove(`valid`);
//     input.classList.remove(`isvalid`);
// }
//  =========================================

// let input = document.addEventListener(`input`, () => {
//     const name = input.value;
//   input.innerHTML = `Hello ${name}`
// })

// ==========================================

// const form = document.querySelector(`.js-form`);
// form.addEventListener(`submit`, onFormSubmit);
// function onFormSubmit(e){
//     e.preventDefault();
    
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;
//     const coment = form.elements.coment.value;
//     const userData = {
//         email,
//         password,
//         coment,
//     }
//     console.log (userData);
//     form.reset();
// }

// =======================================
// const box = document.querySelector(`.boxec`);
// let boxLeft = 0;
// let boxTop = 0;
// document.addEventListener(`keydown`, (e) => {
// console.log(e.code)
// switch(e.code){
//     case `keyW`: boxTop -= 10; break;
//     case `keyS`: boxTop += 10; break;
//     case `keyD`: boxLeft += 10; break; 
//     case `keyA`: boxLeft -= 10; break;
// }
// box.style.left = boxLeft + `px`;
// box.style.top = boxTop + `px`;
// });


// =============================================
// document.addEventListener(`keyress`, (e) => {
//     console.log(e.code)
//   if(e.ctrlKey && e.code === `KeyQ`){
//     console.log(`Hello Q`);
//   }
// });

// =============================================

// document.addEventListener(`keyup`, (e) => {
//     console.log(`keyup`, e.code)
// });

// =======================================

// const box = document.querySelector(`.boxec`);

// box.addEventListener(`mouseenter`, ( )=> {
//     box.classList.add(``)
// })

// =============================================

// const box = document.querySelector(`.boxec`);

// box.addEventListener(`mouseleave`, ( )=> {
//     box.classList.remove(``)
// })

// ============================================

// const box = document.querySelector(`.boxec`);

// box.addEventListener(`mouseover`, ( )=> {
//     box.classList.add(``)
// })

// ==========================================

// const box = document.querySelector(`.boxec`);

// box.addEventListener(`mouseout`, ( )=> {
//     box.classList.remove(``)
// })

// ==========================================

// const box = document.querySelector(`.boxec`);

// box.addEventListener(`mousemove`, (e)=> {
//     console.log(e.x, e.y)
// })

// =========================================