const press = document.querySelector('.cloud')
const downbtn = document.querySelector('.downloadButton');
const img = document.querySelector('.img1');
const leftArrow = document.querySelector('.leftarrow');
const rightArrow = document.querySelector('.rightarrow');
let count = 0;


leftArrow.addEventListener('click', lose);
rightArrow.addEventListener('click',add);



function add() {
    count++;
    console.log(count);
    if (count == 5) {
        count = 0; 
    }

    if (count == 0) {
        img.style.backgroundImage = 'url(school.png)';
    } else if (count == 1) {
        img.style.backgroundImage = 'url(koridor\\ dva.png)';
    } else if (count == 2) {
        img.style.backgroundImage = 'url(the\\ final\\ result\\ of\\ room2.png)';
    } else if (count == 3) {
        img.style.backgroundImage = 'url(corridor.png)';
    }
    else if (count == 4) {
        img.style.backgroundImage = 'url(we`re.jpg)';
    }
};

function lose() {
    count--;
    console.log(count);

    if (count < 0) {
        count = 4; 
    }

    if (count == 0) {
        img.style.backgroundImage = 'url(school.png)';
    } else if (count == 1) {
        img.style.backgroundImage = 'url(koridor\\ dva.png)';
    } else if (count == 2) {
        img.style.backgroundImage = 'url(the\\ final\\ result\\ of\\ room2.png)';
    } else if (count == 3) {
        img.style.backgroundImage = 'url(corridor.png)';
    }
    else if (count == 4) {
        img.style.backgroundImage = 'url(we`re.jpg)';
    }
};


downbtn.addEventListener('mouseover', function(){
    setTimeout(function(){
        press.style.opacity = '1';
        press.style.transform = 'translateY(-60px)';
    },300)
});


downbtn.addEventListener('mouseleave', function(){
    setTimeout(function(){
        press.style.opacity = '0';
        press.style.transform = 'translateY(60px)';
    },300)
})
