const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const input = document.querySelector('.obj')

input.value = localStorage.getItem(1);



function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        const formData = new FormData(form);

        const object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        const json = JSON.stringify(object);
        request.send(json);
    
    });
}






postData(form);