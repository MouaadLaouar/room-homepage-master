const background = document.querySelector('.div01');
const h1 = document.getElementById('h1');
const p = document.getElementById('p');
const btnRight = document.getElementById('btn-right');
const btnLeft = document.getElementById('btn-left');



const theme01 = () => {
    background.style.backgroundImage = "url(../../images/desktop-image-hero-1.jpg)";
    h1.innerText = "Discover innovative ways to decorate";
    p.innerText = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
}

const theme02 = () => {
    background.style.backgroundImage = "url(../../images/desktop-image-hero-2.jpg)";
    h1.innerText = "We are available all across the globe";
    p.innerText = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
}

const theme03 = () => {
    background.style.backgroundImage = "url(../../images/desktop-image-hero-3.jpg)";
    h1.innerText = "Manufactured with the best materials";
    p.innerText = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
}

let x = 0;

function right() {
    x++;
    if (x == 1) {
        theme02();
    }else if (x == 2) {
        theme03();
    }else if (x == 3) {
        x = 0;
        theme01();
    }
}

function left() {
    x--;
    if (x == 1) {
        theme02();
    }else if (x == 2) {
        theme03();
    }else if (x == 0 ) {
        theme01();
    }else if (x == -1) {
        x = 2;
        theme03();
    }
}

btnLeft.addEventListener('click', left)

btnRight.addEventListener('click', right)




