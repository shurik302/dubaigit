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

export function CheckSv() {
    const Razv = document.querySelector(".Razv");
    const BuyO = document.querySelector(".BuyO");
    BuyO.classList.toggle("activeO");
    console.log("Делаю тогл номер ?");
}

export function Razv() {
    const Navigation = document.querySelector(".Navigation");
    const BuyO = document.querySelector(".BuyO");
    BuyO.classList.remove("activeO");
    console.log("Делаю ремув номер ?");
}
