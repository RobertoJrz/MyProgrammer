let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');
let listItem = document.querySelectorAll('.list-item');

btn.onclick = function() {
    sidebar.classList.toggle('active');
}

searchBtn.onclick = function() {
    sidebar.classList.toggle('active');
}

function activeLink() {
    listItem.forEach(item =>
        item.classList.remove('active'));
        this.classList.add('active');
}

listItem.forEach(item =>
    item.onclick = activeLink);


    
var typed = new  Typed(".text", {
    strings: ["Hello world! <br> <br> This site is specifically for information about <br> programming languages, to help everyone  <br> learn a little bit about them, where we will talk <br> about the trendings languages, explain about them,  <br> among many other things, <br> <br> WELCOME TO THE WORLD OF TECHNOLGY!"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    
})