
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");


    if (mobileMenu.classList.contains("open")) {
        menuBtn.innerHTML = "&times;";
    } else {
        menuBtn.innerHTML = "&#9776;";
    }
});

const myUniqueButton = document.querySelector('.animated-button1');
const myUniqueVideoCon = document.querySelector('.video-con');


let isMyVideoDragging = false;
let startX, scrollLeft;


myUniqueVideoCon.addEventListener('mouseenter', () => {
    myUniqueButton.style.display = 'block';
});


myUniqueVideoCon.addEventListener('mouseleave', () => {
    myUniqueButton.style.display = 'none';
});


myUniqueVideoCon.addEventListener('mousemove', (event) => {
    if (isMyVideoDragging) return;

    const containerRect = myUniqueVideoCon.getBoundingClientRect();
    const cursorX = event.clientX - containerRect.left;
    const cursorY = event.clientY - containerRect.top;

    const buttonWidth = myUniqueButton.offsetWidth;
    const buttonHeight = myUniqueButton.offsetHeight;


    const maxX = containerRect.width - buttonWidth;
    const maxY = containerRect.height - buttonHeight;


    const newX = Math.min(Math.max(cursorX - buttonWidth / 2, 0), maxX);
    const newY = Math.min(Math.max(cursorY - buttonHeight / 2, 0), maxY);

    myUniqueButton.style.left = `${newX + myUniqueVideoCon.scrollLeft}px`;
    myUniqueButton.style.top = `${newY + myUniqueVideoCon.scrollTop}px`;
});


myUniqueVideoCon.addEventListener('mousedown', (event) => {
    isMyVideoDragging = true;
    startX = event.pageX - myUniqueVideoCon.offsetLeft;
    scrollLeft = myUniqueVideoCon.scrollLeft;
    myUniqueVideoCon.style.cursor = 'grabbing';
});

myUniqueVideoCon.addEventListener('mousemove', (event) => {
    if (!isMyVideoDragging) return;

    event.preventDefault();
    const x = event.pageX - myUniqueVideoCon.offsetLeft;
    const walk = x - startX;
    myUniqueVideoCon.scrollLeft = scrollLeft - walk;
});

myUniqueVideoCon.addEventListener('mouseup', () => {
    isMyVideoDragging = false;
    myUniqueVideoCon.style.cursor = 'default';
});

myUniqueVideoCon.addEventListener('mouseleave', () => {
    isMyVideoDragging = false;
    myUniqueVideoCon.style.cursor = 'default';
});

const modal = document.getElementById("myModal");
const fullImage = document.getElementById("fullImage");
const pageContent = document.getElementById("pageContent");
const description = document.getElementById("description");

function openModal() {
    modal.style.display = "flex";
    fullImage.src = document.querySelector(".thumbnail").src;
    pageContent.classList.add("blur");
    description.classList.remove("expanded");
}

function closeModal() {
    modal.style.display = "none";
    pageContent.classList.remove("blur");
}

function toggleDescription() {
    description.classList.toggle("expanded");
}


