export default function F() {
    console.log("еуіе");
}

export function selectDate() {
    const AllLi = document.querySelector(".AllLi");
    const BuildingLi = document.querySelector(".BuildingLi");
    const InteriorLi = document.querySelector(".InteriorLi");
    const AllCard = document.querySelector(".AllCard");
    if (AllLi.classList.contains("active")) {
        console.log("Повторное нажатие");
    } else {
        AllLi.classList.add("active");
        BuildingLi.classList.remove("active");
        InteriorLi.classList.remove("active");
        AllCard.classList.add("activeSlideN");
    }
}

export function selectDateS() {
    const AllLi = document.querySelector(".AllLi");
    const BuildingLi = document.querySelector(".BuildingLi");
    const InteriorLi = document.querySelector(".InteriorLi");
    const AllCard = document.querySelector(".AllCard");
    if (BuildingLi.classList.contains("active")) {
        console.log("Повторное нажатие");
    } else {
        AllLi.classList.remove("active");
        BuildingLi.classList.add("active");
        InteriorLi.classList.remove("active");
        AllCard.classList.add("activeSlideN");
    }
}
export function selectDateT() {
    const AllLi = document.querySelector(".AllLi");
    const BuildingLi = document.querySelector(".BuildingLi");
    const InteriorLi = document.querySelector(".InteriorLi");
    const Interior = document.querySelector(".Interior");
    if (InteriorLi.classList.contains("active")) {
        console.log("Повторное нажатие");
    } else {
        AllLi.classList.remove("active");
        BuildingLi.classList.remove("active");
        InteriorLi.classList.add("active");
        Interior.classList.add("activeSlideN");
    }
}

export function Razv() {
    const screenWidth = window.screen.width;
    const Razv = document.querySelector(".Razv");
    const BuyO = document.querySelector(".BuyO");
    if (screenWidth <= 768) {
        if (!BuyO.classList.contains("activeO")) {
            BuyO.classList.add("activeO");
            console.log("Делаю add номер кнопкой ?");
            console.log(
                "добавляю активО через проверку его наличия в самой кнопке"
            );
        } else {
            BuyO.classList.remove("activeO");
            console.log("Делаю remove номер кнопкой ?");
            console.log(
                "убираю активО через проверку его наличия в самой кнопке"
            );
        }
    } else {
    }
}

export function CheckSv() {
    const BuyO = document.querySelector(".BuyO");
    const screenWidth = window.screen.width;
    if (screenWidth <= 768) {
        if (BuyO.classList.contains("activeO")) {
            BuyO.classList.remove("activeO");
            console.log("Делаю ремув номер ?");
            console.log(
                "убираю активО через проверку его наличия в самой навигации"
            );
        } else {
        }
    } else {
    }
}
