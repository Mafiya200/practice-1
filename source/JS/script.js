'use strict';

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};


const animItems = document.querySelectorAll(`._anim-item`);

if (animItems.length > 0) {
    animationScroll();
    window.addEventListener(`scroll`, animationScroll);
}

function animationScroll() {
    for (let i = 0; i < animItems.length; i++) {
        const itemAnim = animItems[i];

        const itemAnimRatio = 4;

        const itemAnimHeight = itemAnim.offsetHeight;

        const rectYWidth = pageParametrs(itemAnim).rectY;

        let itemAnimPoint = itemAnimHeight / itemAnimRatio;

        if (itemAnimHeight > window.innerHeight) {
            itemAnimPoint = window.innerHeight / itemAnimRatio;
        }

        if ((pageYOffset > ((rectYWidth + itemAnimPoint) - window.innerHeight)) && (pageYOffset < rectYWidth + itemAnimHeight)) {
            itemAnim.classList.add(`_active`);
        }
        else {
            if (!itemAnim.classList.contains(`anim-item-no-hide`)) {
                itemAnim.classList.remove(`_active`);
            }

        }


    }
}

function pageParametrs(item) {

    const rectItem = item.getBoundingClientRect();

    const pageY = scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const pageX = scrollX || window.pageXOffset || document.documentElement.scrollLeft;

    return { rectY: rectItem.top + pageY, rectX: rectItem.left + pageX }
}