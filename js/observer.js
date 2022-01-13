// fade-in de información

const elementosFade = document.querySelectorAll(".fade-in");


const options = {
    rootMargin: '50px 0px -50px 0px',
    threshold: 0.58,
};

const observer = new IntersectionObserver(
    function (
        entries,
        observer
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("aparece");
            } else {
                return;
            }
        });
    }, options);

elementosFade.forEach(elemento => { 
    observer.observe(elemento); 
});






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
