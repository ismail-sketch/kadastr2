


const loadForm = document.querySelector('.content__form__load');
const input = document.querySelector('.content__input');
const InputBtn = document.querySelector('.content__btn');
const blockError = document.querySelector('.content__form__eroor');
let promoTitle = document.querySelector('.promo__title')
let orderlocal = "";

const req = /:/ig;
const req1 = /,/ig;
const req2 = /\./ig;











InputBtn.addEventListener('click', () => {
    orderlocal = input.value;
    localStorage.setItem(1, (orderlocal));

    if(input.value !== "" ){
        loadForm.style.display = "flex";
    } else {
        blockError.style.display = "block";
        blockError.textContent = "Укажите кадастровый номер или адрес объекта."


        setTimeout(() => {
            blockError.style.display = "none";
        }, 3000);
    }



    setTimeout(() => {

        if(input.value !== "" && input.value.match(req) || input.value.match(req1)  || input.value.match(req2)  ){
            window.location.href = './order.html';

        } else {
            loadForm.style.display = "none";
            blockError.style.display = "block";
            blockError.textContent = "Укажите кадастровый номер или адрес объекта."


            setTimeout(() => {
                blockError.style.display = "none";
            }, 3000);
        }
    }, 5000);



});


// input form


const linkPhotoImg = document.querySelector('.exempels__link--img');
const linkPhoto = document.querySelector('.exempels__link');



// linkPhotoImg.addEventListener('click', (event) => {
//     event.preventDefault();
//     window.open('./img/2_5467712750442517611.pdf');

// });


// linkPhoto.addEventListener('click', (event) => {
//     event.preventDefault();
//     window.open('./img/2_5467712750442517611.pdf');

// });
//modals-sample ========================================

const exempelsImg = document.querySelectorAll('.exempels__link--img');
const underlay = document.querySelectorAll('.underlay');
const dataUnder = document.querySelectorAll('[data-under]');
console.log(dataUnder);

const dataUnderTrue = Array.from(dataUnder)

window.addEventListener('click', (e) => {
   if(e.target.closest('#under1') || e.target.closest('.exe1')) {
    underlay[0].classList.add('active');
   }

   if(e.target.closest('#under2') || e.target.closest('.exe2')) {
    underlay[1].classList.add('active');
   }

   if(e.target.closest('#under3') || e.target.closest('.exe3')) {
    underlay[2].classList.add('active');
   }

})

underlay.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.closest('.underlay span') || !e.target.closest('.sample') && !e.target.closest('.sample-btn')) {
          {
             item.classList.remove('active')
            }
        }
    })
})

const reportBtn = document.querySelectorAll('.report__btn');
const popupInner = document.querySelector('.popup__inner');


reportBtn.forEach(item => {
    item.addEventListener('click', () => {
        popupInner.classList.add('active');
        document.body.style.overflow = 'hidden'
    })
})
popupInner.addEventListener('click', (e) => {
    if(!e.target.closest('.popup__content')) {
        popupInner.classList.remove('active');
        document.body.style.overflow = '';
    }
})







