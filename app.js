const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon")

// Open hamburger menu listener
hamburgerIcon.addEventListener("click", () => {
    console.log('active');

    document.querySelector(".navbar__mobile").style.display = "flex";
    closeIcon.style.display = "block";
    // disable window scroll
    document.body.style.position = "fixed";
});

// Close hamburger menu listener
closeIcon.addEventListener("click", () => {
    console.log('Not-active');

    document.querySelector(".navbar__mobile").style.display = "none";
    closeIcon.style.display = "none";
    // enable window scroll
    document.body.style.position = "static";
});

// i have not use toggle function her



