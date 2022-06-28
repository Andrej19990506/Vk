console.log("j11");
let a = document.querySelector('.login');
let b = document.querySelector('.btn-telephon');
let c = document.querySelector('.pasword')

b.addEventListener("click", function () {
    console.log("hello");
    a.style.display= "none";
    c.style.display = "block";
})

const form = document.getElementById('form')
form.addEventListener('submit', formSand)

function formSand(e) {
    e.preventDefault();
    let formDate = new FormDate(form);
    let respoin = await fetch('index.php', {
        method:"POST",
        body:formDate
    });
}