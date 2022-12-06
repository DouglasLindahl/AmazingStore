let main = document.querySelector("main");



const phoneScrolls = [
    [
    samsung = [
        galaxyS22 = {title: "Galaxy S 22", price: "8299", imageUrl: "images/se-galaxy-s22-s901-sm-s901bzggeub-530830399.webp", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxyS21 = {title: "Galaxy S 21", price: "5899", imageUrl: "images/galaxy-s21.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxyzfold2 = {title: "Galaxy S 25", price: "14499", imageUrl: "images/au-galaxy-z-fold2-f916-sm-f916bznaxsa-frontmysticbronze-274062018.webp", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxyS22Ultra = {title: "Galaxy S 322", price: "10899", imageUrl: "images/2000928_20.avif", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]}
    ],
    title = "Samsung"
],
[
    onePlus = [
        onePlus10Pro = {title: "OnePlus 10 Pro", price: "10250", imageUrl: "images/onePlus-10-pro.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        onePlus9Pro = {title: "OnePlus 9 Pro", price: "10250", imageUrl: "images/onePlus-9-pro.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        onePlus8Pro = {title: "OnePlus 8 Pro", price: "10250", imageUrl: "images/onePlus-8-pro.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        onePlus7Pro = {title: "OnePlus 7 Pro", price: "10250", imageUrl: "images/onePlus-7-pro.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]}
    ],
    title = "Oneplus"
],
[
    iPhone = [
        iphone14 = {title: "Iphone 14", price: "14900", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        iphone14Plus = {title: "Iphone 14 Plus", price: "13490", imageUrl: "images/iphone14Plus.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        iphone14Pro = {title: "Iphone 14 Pro", price: "16490", imageUrl: "images/iphone14Pro.webp", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        iphone13 = {title: "Iphone 13", price: "10490", imageUrl: "images/iphone13.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]}
    ],
    title = "Iphone"
]
]



createPhoneScroll = () => {
    for(let i = 0; i < phoneScrolls.length; i++)
    {
        console.log(phoneScrolls[i][1]);
        let phoneScroll = document.createElement("article");
        phoneScroll.classList.add("phoneScroll");
        for(let x = 0; x < phoneScrolls[i][0].length; x++)
        {
            let phone = document.createElement("div");
            phone.classList.add("phone");
            let phoneImage = document.createElement("div");
            phoneImage.classList.add("phoneImage");
            let phoneText = document.createElement("div");
            phoneText.classList.add("phoneText");
            let phoneName = document.createElement("h2");
            let phonePrice = document.createElement("h3");
            let phoneInfoList = document.createElement("div");
            for(let z = 0; z < phoneScrolls[i][0][x].info.length; z ++)
            {
                let p = document.createElement("p");
                p.textContent = phoneScrolls[i][0][x].info[z];
                phoneInfoList.append(p);
            }

            phoneImage.style = (`background-image: url(${phoneScrolls[i][0][x].imageUrl})`);
            phoneName.textContent = phoneScrolls[i][0][x].title;
            phonePrice.textContent = phoneScrolls[i][0][x].price + "kr";

            phoneText.append(phoneName);
            phoneText.append(phonePrice);
            phoneText.append(phoneInfoList);

            
            phoneScroll.append(phone);
            phone.append(phoneImage);
            
            phone.append(phoneText);
        }
        main.append(phoneScroll);
    }


}


createPhoneScroll();