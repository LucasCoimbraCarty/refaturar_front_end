const logos = document.querySelector("section.overflow-hidden.group");
const logosSlide = logos?.firstElementChild;

if (logos && logosSlide) {
    const copySlide = logosSlide.cloneNode(true);
    logos.appendChild(copySlide);
}