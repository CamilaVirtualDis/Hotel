// fade-in de información
window.onload = "funcion";

function funcion() {

    const elementosFade = document.querySelector(".fade-in");


    const options = {
        rootMargin: '0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver(
        function (
            entries,
            observer
        ) {
            entries.forEach( entry => {
                console.log(entry.target);
            });
        },options);

        observer.observe(elementosFade);






    // const clasesFadeIn = document.querySelectorAll(".fade-in");

    // const options = {
    //     threshold: 0,
    //     // rootMargin: "0px 0px -100px 0px",
    // };

    // const aparece = new IntersectionObserver(
    //     function (
    //         entries,
    //         aparece
    //     ) {
    //         entries.forEach(entry => {
    //             console.log("dentro de entries.forEach");
    //             if (!entry.isIntersecting) {
    //                 return;
    //             } else {
    //                 entry.target.classList.add("aparece");
    //                 alert("apareceeeee");
    //             }
    //         });
    //     }, options);

    // clasesFadeIn.forEach(fadeIn => {
    //     aparece.observe(fadeIn);
    // });

};