//CheckedNav
// const menu = querySelector("#menu");
// const li = document.getElementsByTagName('li');
// const links = document.getElementsByTagName('a');

// links.forEach((link)=>{
//     alert(link);
// });


// li[0].addEventListener('click', ()=>{
    // alert("1")
// });
// li[1].addEventListener('click', ()=>{
    // alert("2")
// });
// li[2].addEventListener('click', ()=>{
    // alert("3")
// });
// li[3].addEventListener('click', ()=>{
    // alert("4")
// });


// li.addEventListener("click", ()=>{
//     li.classList.toggle('active');
// });


// jQuery

$(document).ready(function () {
    $('#menu li').on('click', function () {
        $(this).siblings().toggle('check');
        // $(this).addClass('check');
    })
})
