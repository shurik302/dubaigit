export default function F() {
    console.log("еуіе");
}

export function selectDate() {
    const AllLi = document.querySelector(".AllLi");
    const BuildingLi = document.querySelector(".BuildingLi");
    const InteriorLi = document.querySelector(".InteriorLi");
    const AllCard = document.querySelector(".AllCard");
    if (AllLi.classList.contains("active")) {
        console.log("Пользователь даун 1");
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
        console.log("Пользователь даун 2");
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
        console.log("Пользователь даун 3");
    } else {
        AllLi.classList.remove("active");
        BuildingLi.classList.remove("active");
        InteriorLi.classList.add("active");
        Interior.classList.add("activeSlideN");
    }
}
