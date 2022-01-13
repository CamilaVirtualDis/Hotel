// fade-in de información
window.onload="funcion";

function funcion(){
const clasesFadeIn = document.querySelectorAll(".fade-in");

const options = {

threshold: 1,
rootMargin: "0px 0px -100px 0px",
};

const aparece = new IntersectionObserver(
    function (entries,aparece)
    {
    entries.forEach(entry => {
        
        if (!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add("aparece");
            alert("apareceeeee"); 
        }
    });
},options);

clasesFadeIn.forEach(fadeIn => {
aparece.observe(fadeIn);
} );

};