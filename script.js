
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".burgerContainer");

const body = document.querySelector("body");



menuButton.addEventListener("click", () => {
    menu.classList.toggle("menuOpen");
})




/*
const phoneScrolls = [
    samsung = [
        galaxys22 = {title: "Galaxy S 22", price: "8299", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxys21 = {title: "Galaxy S 21", price: "8299", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxyzfold2 = {title: "Galaxy S 25", price: "8299", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxys22ultra = {title: "Galaxy S 322", price: "8299", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]}
    ]
]

const howManyPhoneScrolls = 3;
const howManyPhones = 4;

createPhoneScroll = () => {
    for(let i = 0; i < phoneScrolls.length; i++)
    {
        let phoneScroll = document.createElement("article");
        for(let x = 0; x < phoneScrolls[i][x].length; x++)
        {
            let phone = document.createElement("div");
            let phoneImage = document.createElement("div");
            let phoneText = document.createElement("div");
            let phoneName = document.createElement("h2");
            let phoneInfoList = document.createElement("ul");

            phoneImage.textContent = phoneScrolls[i][x].imageUrl;
            phoneName.textContent = phoneScrolls[i][x].title;
            phoneName.phoneInfoList = phoneScrolls[i][x].price;

            

            body.append(phoneScroll);
            phoneScroll.append(phone);
            phone.append(phoneImage);
            phone.append(phoneName);
            phone.append(phoneInfoList);
        }
    }


}


createPhoneScroll();
*/
