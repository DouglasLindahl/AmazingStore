let main = document.querySelector("main");



const phoneScrolls = [
    [
    samsung = [
        galaxyS22 = {title: "Galaxy S 22", price: "8299", imageUrl: "images/se-galaxy-s22-s901-sm-s901bzggeub-530830399.webp", info: ["FHD+ sAMOLED 120 Hz Display", "64MP OIS Camera", "2 Days Battery"]},
        galaxyS21 = {title: "Galaxy S 21", price: "5899", imageUrl: "images/galaxy-s21.png", info: ["6,2 amoled FHD display", "108+10+10+12Mpx-camera, laserfokus", "4000 mAh battery"]},
        galaxyzfold2 = {title: "Galaxy S 25", price: "14499", imageUrl: "images/au-galaxy-z-fold2-f916-sm-f916bznaxsa-frontmysticbronze-274062018.webp", info: ["foldable screens", "Android 10 med Samsung One UI 2.5", "Snapdragon 865 Plus"]},
        galaxyS22Ultra = {title: "Galaxy S 322", price: "10899", imageUrl: "images/2000928_20.avif", info: ["6.8 Infinity-O 120Hz-screen", "108+10+10+12 Mpx quadcamera", "5000mAh battery"]}
    ],
    title = "Samsung"
],
[
    onePlus = [
        onePlus10Pro = {title: "OnePlus 10 Pro", price: "10250", imageUrl: "images/onePlus-10-pro.png", info: ["6.7” 120Hz Fluid AMOLED-skärm", "48+50+8Mpx Hasselblad-kamera", "5000 mAh battery"]},
        onePlus9Pro = {title: "OnePlus 9 Pro", price: "10250", imageUrl: "images/onePlus-9-pro.png", info: ["6.7” 120Hz Fluid AMOLED-screen", "quad camera with 48mp main camera", "4500 mAh battery"]},
        onePlus8Pro = {title: "OnePlus 8 Pro", price: "10250", imageUrl: "images/onePlus-8-pro.png", info: ["6.7” 120Hz Fluid AMOLED-screen", "quad camera with 48mp main camera", "4510 mAh battery"]},
        onePlus7Pro = {title: "OnePlus 7 Pro", price: "10250", imageUrl: "images/onePlus-7-pro.png", info: ["6.7” 90Hz fluid AMOLED-screen", "retractable” selfie screen", "4000 mAh battery"]}
    ],
    title = "Oneplus"
],
[
    iPhone = [
        iphone14 = {title: "Iphone 14", price: "14900", imageUrl: "images/iphone14.png", info: ["6.1” super retina XDR OLED screen", "Dynamisk “island”", "3279 mAh battery"]},
        iphone14Plus = {title: "Iphone 14 Plus", price: "13490", imageUrl: "images/iphone14Plus.png", info: ["6.7“ Super Retina XDR-screen", "dual 12mp main camera", "4323 mAh battery"]},
        iphone14Pro = {title: "Iphone 14 Pro", price: "16490", imageUrl: "images/iphone14Pro.webp", info: ["6.1” super retina XDR OLED screen", "triple 48mp main camera", "3200 mAh battery"]},
        iphone13 = {title: "Iphone 13", price: "10490", imageUrl: "images/iphone13.png", info: ["6.1“ Super Retina XDR-screen", "dual 12mp cameras", "K3240 mAh battery"]}
    ],
    title = "Iphone"
]
]



createPhoneScroll = () => {
    for(let i = 0; i < phoneScrolls.length; i++)
    {
        //scroll-container
        const scrollContainer = document.createElement('div');

       //Phone Title
         let titleDiv = document.createElement("div")
         let titleText = document.createElement("h2")
         titleDiv.classList.add('titleContainer')

         titleText.textContent = phoneScrolls[i][1]
         titleText.style.color = "#fff"




         titleDiv.append(titleText);


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

            main.append(scrollContainer)
            scrollContainer.append(titleDiv)
            scrollContainer.append(phoneScroll)
            phoneScroll.append(phone);
            phone.append(phoneImage);
            
            
            phone.append(phoneText);
        }
        main.append(phoneScroll);
    }


}


createPhoneScroll();