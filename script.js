class Scroll {
    constructor(obj){
        if (typeof obj.el == "string") {
            this.element = document.querySelector(obj.el);
        } else if (obj.el instanceof HTMLElement) { // instanceof - проверяет наличие в наследниках класса HTMLElement
            this.element = obj.el;
        }
        this.element.style.position = "fixed";
        this.top = obj.top;
        this.unit = obj.unit;
        this.scroll();
        window.addEventListener("scroll", ()=>{this.scroll()});
        window.addEventListener("resize", ()=>{this.scroll()});
    }
    scroll() {
        this.menuTop = this.scrollNumber()
        console.log(window.pageYOffset);
        if (this.menuTop - window.pageYOffset > 0) {
            this.element.style.top = this.menuTop - window.pageYOffset + "px";            
        } else {
            this.element.style.top = 0;
        }
    }
    scrollNumber() {
        if (this.unit == "px") {
            return this.top >= 0 ? this.top : 0;
        } else if (this.unit == "%" || this.unit == undefined) {
            return window.innerHeight / 100 * this.top - this.element.clientHeight;
        }
    }
}

let y = document.querySelector('.header__nav');
const x = new Scroll({
    // el: ".header__nav"
    el: y,
    top: 100,
    unit: "%"
});
// console.dir(x.element);

let div = document.querySelector('.header__content');

div.addEventListener("mouseover", function () {
    div.style.top = `${Math.random() * 80}%`;
    div.style.left = `${Math.random() * 80}%`;
})

class Div {
    constructor(options) {
        this.div = document.querySelector(options.div);
        this.openButton = document.querySelector(options.openButton); 
        this.closeButton = document.querySelector(options.closeButton); 
        this.openButton.addEventListener("click", () => {
            this.div.style.left = 0;            
        })
        this.closeButton.addEventListener("click", () => {
            this.div.style.left = "-100%";
        })
    }   
}

class New {
    constructor(abc) {
        this.title = document.querySelector(abc.title);
    }
}

/* let openButton = document.querySelector('.header__button');
let closeButton = document.querySelector('.header__close');
let divButton = document.querySelector('.header__div');

openButton.addEventListener("click", function () {
    divButton.style.left = 0
})

closeButton.addEventListener("click", function () {
    divButton.style.left = "-100%"
}) */

let divButton = new Div({
    div: ".header__div",
    openButton: ".header__button",
    closeButton: ".header__close"
})

let furniture = new New({
    title: ".header__content h1"
})