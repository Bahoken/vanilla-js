// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    linksContainer.classList.toggle('show-links');
});

// ********** fixed navbar ************
navToggle.addEventListener('click', () => {

    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    linksContainer.style.height = (containerHeight === 0) ? `${linksHeight}px` : 0;

});

// ********** smooth scroll ************

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    (navHeight < scrollHeight)
        ? navbar.classList.add("fixed-nav")
        : navbar.classList.remove("fixed-nav");

    (scrollHeight > 500) 
        ? topLink.classList.add("show-link")
        : topLink.classList.remove("show-link");

})

// select links

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        // prevent default
        e.preventDefault();

        // navigate to specific spot
        const id = e.currenttarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        
        // calculate the heights
        const navheight = navbar.getBoundingClientRect().height;
        const containerheight = linksContainer.getBoundingClientRect().height;
        const fixednav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navheight;

        position = (!fixednav) ? position - navheight : position;

        position = (navheight > 82) ? position + containerheight : position;

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.style.height = 0;
    });
});