let main = document.querySelector("main");



const phoneScrolls = [
    samsung = [
        galaxys22 = {title: "Galaxy S 22", price: "8299", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxys21 = {title: "Galaxy S 21", price: "8299", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxyzfold2 = {title: "Galaxy S 25", price: "8299", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxys22ultra = {title: "Galaxy S 322", price: "8299", imageUrl: "images/OnePlus10Pro.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]}
    ],
    onePlus = [
        galaxys22 = {title: "Galaxy S 22", price: "8299", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxys21 = {title: "Galaxy S 21", price: "8299", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxyzfold2 = {title: "Galaxy S 25", price: "8299", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxys22ultra = {title: "Galaxy S 322", price: "8299", imageUrl: "images/OnePlus10Pro.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]}
    ],
    samsung = [
        galaxys22 = {title: "Galaxy S 22", price: "8299", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxys21 = {title: "Galaxy S 21", price: "8299", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxyzfold2 = {title: "Galaxy S 25", price: "8299", imageUrl: "images/iphone14.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxys22ultra = {title: "Galaxy S 322", price: "8299", imageUrl: "images/OnePlus10Pro.png", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]}
    ]
]

createPhoneScroll = () => {
    for(let i = 0; i < phoneScrolls.length; i++)
    {
        let phoneScroll = document.createElement("article");
        phoneScroll.classList.add("phoneScroll");
        for(let x = 0; x < phoneScrolls[i].length; x++)
        {
            let phone = document.createElement("div");
            phone.classList.add("phone");
            let phoneImage = document.createElement("div");
            phoneImage.classList.add("phoneImage");
            let phoneText = document.createElement("div");
            phoneText.classList.add("phoneText");
            let phoneName = document.createElement("h2");
            let phonePrice = document.createElement("h3");
            let phoneInfoList = document.createElement("ul");
            for(let z = 0; z < phoneScrolls[i][x].info.length; z ++)
            {
                let p = document.createElement("p");
                p.textContent = phoneScrolls[i][x].info[z];
                phoneInfoList.append(p);
            }

            phoneImage.style = (`background-image: url(${phoneScrolls[i][x].imageUrl})`);
            phoneName.textContent = phoneScrolls[i][x].title;
            phonePrice.textContent = phoneScrolls[i][x].price;

            

            phoneScroll.append(phone);
            phone.append(phoneImage);
            phone.append(phoneName);
            phone.append(phonePrice);
            phone.append(phoneInfoList);
        }
        main.append(phoneScroll);
    }


}


createPhoneScroll();