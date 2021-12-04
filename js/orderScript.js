let promoTitle = document.querySelector('.promo__title')
promoTitle.textContent = localStorage.getItem(1);





const moreBlockBtn = document.querySelectorAll('.main__item--btn');
const moreBlockBtnHide = document.querySelectorAll('.main__item--btn_remuve');
const moreBlock = document.querySelectorAll('.main__item--descer--big');


moreBlockBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        moreBlockBtn[i].style.display = "none";
        moreBlockBtnHide[i].style.display = "block";
        moreBlock[i].style.cssText = ` 
        transition: 0.5s height all;
        display: block;
        height: 450px;`  
    });
});

moreBlockBtnHide.forEach((item, i) => {
    item.addEventListener('click', () => {
        moreBlockBtn[i].style.display = "block";
        moreBlockBtnHide[i].style.display = "none";
        moreBlock[i].style.cssText = ` 
        transition: 0.5s height all;
        display: none;
        height: 0px;`  
    });
});




const mainContainer = document.querySelectorAll('.main__container');
const mainInput = document.querySelectorAll('.main__input');
const intelligence = document.querySelector('.intelligence');
const intelligenceFalse = document.querySelector('.intelligence__false');
const svgAnimation = document.querySelectorAll('circle');
let activeInput = document.querySelectorAll('.active__input');
let svgIndex = 0;










function allActiveInput (indexInput){
    intelligenceFalse.style.display = "none";
    intelligence.style.display = "block";
    svgAnimation[0].style.cssText = `stroke: rgb(0, 187, 113);  stroke-dashoffset: 161.221; stroke-dasharray: ${indexInput}.221, 171.221;`;
    svgIndex = indexInput;

};


function posThreSvg(indexInput) {
    intelligenceFalse.style.display = "block";
    intelligence.style.display = "none";
    const interva =  setInterval(() => {
        if(indexInput > 280){
            indexInput--;
        }else {
            indexInput++;
        }
        if(indexInput == 280){
            clearInterval(interva);
        } else {
            svgAnimation[1].style.cssText = `stroke: rgb(250, 77, 50);   stroke-dashoffset: 161.221; stroke-dasharray: ${indexInput}.221, 171.221;`;
         
        }
    }, 1);
    svgIndex = 280;
}

function pos2Svg(indexInput) {
    intelligenceFalse.style.display = "block";
    intelligence.style.display = "none";
    const interva =  setInterval(() => {
        if(indexInput > 220){
            indexInput--;
        }else {
            indexInput++;
        }
        if(indexInput == 220){
            clearInterval(interva);
        } else {
            svgAnimation[1].style.cssText = `stroke: rgb(250, 77, 50);   stroke-dashoffset: 161.221; stroke-dasharray: ${indexInput}.221, 171.221;`;
         
        }
    }, 1);
    svgIndex = 220;
}



function posOneSvg(indexInput) {
    intelligenceFalse.style.display = "block";
    intelligence.style.display = "none";
    const interva =  setInterval(() => {
        if(indexInput > 180){
            indexInput--;
        }else {
            indexInput++;
        }
        if(indexInput == 180){
            clearInterval(interva);
        } else {
            svgAnimation[1].style.cssText = `stroke: rgb(250, 77, 50);   stroke-dashoffset: 161.221; stroke-dasharray: ${indexInput}.221, 171.221;`;
         
        }
    }, 1);
    svgIndex = 180;
}

function posNullSvg(indexInput) {
    intelligenceFalse.style.display = "block";
    intelligence.style.display = "none";
    const interva =  setInterval(() => {
        if(indexInput > 160){
            indexInput--;
        }else {
            indexInput++;
        }
        if(indexInput == 160){
            clearInterval(interva);
        } else {
            svgAnimation[1].style.cssText = `stroke: rgb(250, 77, 50);   stroke-dashoffset: 161.221; stroke-dasharray: ${indexInput}.221, 171.221;`;
         
        }
    }, 1);
    svgIndex = 160;
}


function AllSVG(indexInput) {

     const  interva  =  setInterval(() => {
        if(indexInput > 334){
            indexInput--;
        }else {
            indexInput++;
        }
        if(indexInput == 334){
            clearInterval(interva);
            intelligenceFalse.style.display = "none";
            intelligence.style.display = "block";
        } else {
            svgAnimation[1].style.cssText = `stroke: rgb(250, 77, 50);   stroke-dashoffset: 161.221; stroke-dasharray: ${indexInput}.221, 171.221;`;
         

        }
    }, 1);


    svgIndex = 334;
}








if(activeInput.length == 4){
    allActiveInput(334);
}





let indexPrice = document.querySelectorAll('.indexPrice');
let bottumPrice = document.querySelector('.order__bottom--price'); 
let sumPrice = document.querySelectorAll('.active__pirce');
let resultPrice = 0;
const BottonBtn = document.querySelector('.order__bottom--btn');










function calculator() {    
    sumPrice.forEach((item) => {
        resultPrice += Number(item.innerHTML);
        bottumPrice.innerHTML = `Цена за ${sumPrice.length} докомента ${resultPrice}`;
});

    if(sumPrice.length == 0) {
        bottumPrice.innerHTML = `Выберите необходимые выписки, чтобы продолжить`;
    } else {
        resultPrice = 0;        
    }

 
}

calculator();


mainContainer.forEach((item, i) => {
    item.addEventListener('click', () => {

        if(mainInput[i].hasAttribute("checked")){
            mainInput[i].removeAttribute("checked");
            mainInput[i].classList.remove('active__input'); 
            activeInput = document.querySelectorAll('.active__input');
            indexPrice[i].classList.remove('active__pirce');
            sumPrice = document.querySelectorAll('.active__pirce');
            
            if(activeInput.length == 4) {
            } if(activeInput.length == 3) {
                posThreSvg(svgIndex)
            } if(activeInput.length == 2) {
                pos2Svg(svgIndex)
            } if(activeInput.length == 1) {
                posOneSvg(svgIndex)
            } if(activeInput.length == 0) {
                posNullSvg(svgIndex);
                BottonBtn.style.cssText = `opacity: 0.5;`;
            }
     
            calculator();
        
        }else{
            mainInput[i].setAttribute("checked", "checked");
            mainInput[i].classList.add('active__input');
            activeInput = document.querySelectorAll('.active__input');
            indexPrice[i].classList.add('active__pirce');
            sumPrice = document.querySelectorAll('.active__pirce');

            if(activeInput.length == 4) {
                AllSVG(svgIndex)
            } if(activeInput.length == 3) {
                posThreSvg(svgIndex)
            } if(activeInput.length == 2) {
                pos2Svg(svgIndex)
            } if(activeInput.length == 1) {
                posOneSvg(svgIndex)
            } if(activeInput.length == 0) {
                posNullSvg(svgIndex)
            }
            
            calculator();
        }
        
             
       
    });
})





BottonBtn.addEventListener('click', () =>{
    mainInput.forEach((item) => {
        if(item.hasAttribute("checked")){
            window.location.href = './form.html';
        }

    })
})