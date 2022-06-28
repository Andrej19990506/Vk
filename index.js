console.log("j11");
let a = document.querySelector('.login');
let b = document.querySelector('.btn-telephon');
let c = document.querySelector('.pasword')

b.addEventListener("click", function () {
    console.log("hello");
    a.style.display= "none";
    c.style.display = "block";
})