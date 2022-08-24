const nextbuttonTag =document.querySelector(".nextbutton")
const pervousbuttonTag =document.querySelector(".pervousbutton")
const sportcontainerTag =document.getElementsByClassName("sportcontainer")[0];
let orgimg = imgfirstviewTag.src ;
const imagearry = [
    
"hurcan1.webp",
"hurcan5.jpg ",
" hucanw.jpg",
" Huracan_20.jpg ",
"2020huracanEvo.jpg  ",
];

const cartotal = [

{
    "id": 111,    
    "title":   "McLaren 720S",
    "price1" :   284745,
    "price" :  " Price Starting at == $284,745.",
   "Type"  : "Type = Base, Luxury, and Performance",
    "Engin":   "Engine Name = 4.0-liter twin-turbo V8.",
   "Torque":  "Torque = 568 lb-ft.",
 "Horsepower":  "Horsepower = 710 hp.",
 "Acceleration":  "  Acceleration = 0 to 60 : 2.8s ",
 "storage"  :  "storage = 150 liters",
    "Transmission" : " Transmission = 7-speed dual-clutch automatic.",
     "TopSpeed" : "Top Speed = 212 mph.",
     "person":  " 2person",
    "image": "Screenshot (23).png ",
    "Special":"Special = 	Butterfly doors",
    "href" : "https://youtu.be/Zbzqx-hGOCg"
},
{
    "id": 112,    
    "title":   "Chevy Corvette C8",
    "price1" :   76150,
    "price" :  " Price Starting at == $76,150.",
   "Type"  : "Type = 1LT,Coupe or a Convertible body",
    "Engin":   "Engine Name = 6.2L V8 LT2 engine.",
   "Torque":  "Torque = 465 lb-ft of torque.",
 "Horsepower":  "Horsepower = 490hp .",
 "Acceleration":  "  Acceleration = 0 to 60 : 2.9s ",
 "storage"  :  "storage =  70 litres",
    "Transmission" : " Transmission =  Tremec TR-9080 DCT 8-speed dual clutch ",
     "TopSpeed" : "Top Speed = 194 mph ",
     "person":  " 2person",
     "Special":"Special = Rear Camera Mirror* Rear park assist* and HD rear vision camera*",
    "image": "c84.jpg",
    "href" : "https://youtu.be/7n3ITV6T2j4"
},
{
    "id": 113,    
    "title":   "Ferrari SF90",
    "price1" :   625000,
    "price" :  " Price Starting at == $625,000",
   "Type"  : "Type = Super Sport",
    "Engin":   "Engine Name = 4.0 l V8",
   "Torque":  "Torque = 590 lb·ft @ 6,000 rpm (800 N·m)",
 "Horsepower":  "Horsepower = 769 hp @ 7,500 rpm (573 kW)",
 "Acceleration":  "  Acceleration = 0  to 60 : 2.0s  ",
 "storage"  :  "storage =  50 litres",
    "Transmission" : " Transmission =  8-speed dual-clutch",
     "TopSpeed" : "Top Speed = 211 mph",
     "person":  " 2person",
     "Special":"Special = interior ",
    "image": "Red_2019_Ferrari_SF90_Stradale_(48264238897)_(cropped).jpg",
    "href" : "https://youtu.be/AL-GDDN5Y-0"
},
{
    "id": 114,    
    "title":   "GTR 35",
    "price1" :   115000,
    "price" :  " Price Starting at == $115,000",
   "Type"  : "Type =  unique style and performance",
    "Engin":   "Engine Name = 3.8-litre twin-turbo V6",
   "Torque":  "Torque = 419kW/632Nm",
 "Horsepower":  "Horsepower = 710hp",
 "Acceleration":  "  Acceleration = 0 to 60  2.5s",
 "storage"  :  " storage =  74 litres",
    "Transmission" : " Transmission = six-speed dual-clutch automatic.",
     "TopSpeed" : "Top Speed =  196 mph.",
     "person":  " 4person",
     "Special":"Special = Price to Performent ",
    "image": "GtR35.webp",
    "href" : "https://youtu.be/vlDOjTaaEdA"
},
{
    "id": 115,    
    "title":   "Lamborghini Aventador SVJ",
    "price1" :   517770,
    "price" :  " Price Starting at == $517,770",
   "Type"  : "Type = SuperSport + and bodyDesign",
    "Engin":   "Engine Name = 6.5L V12.",
   "Torque":  "Torque = 443@6,500",
 "Horsepower":  "Horsepower = 770 hp",
 "Acceleration":  "  Acceleration = 0 to 60 : 2.7s.",
 "storage"  :  "90 liters",
    "Transmission" : " Transmission =  7-Speed Single Clutch",
     "TopSpeed" : "Top Speed = 217+ mph.",
     "person":  " 2person",
     "Special":"Special = V12 + Design  ",
    "image": "lamborghini aventador svj1.webp",
    "href" : "https://youtu.be/42YbTTK7ESc"
},
{
    "id": 116,    
    "title":   "Mustang GT500",
    "price1" :   70000,
    "price" :  " Price Starting at == $70,000",
   "Type"  : "Type = Sport muscle Coupe",
    "Engin":   "Engine Name = 5.2l V8",
   "Torque":  "Torque = 625 lb·ft @ 5,000 rpm (847 N·m)",
 "Horsepower":  "Horsepower = 760 hp",
 "Acceleration":  "  Acceleration = 0 to 60 : 3.3s",
 "storage"  :  "storage =  445 litres",
    "Transmission" : " Transmission = 7-Speed Dual-Clutch",
     "TopSpeed" : "Top Speed = 180 mph.",
     "Special":" Special = Price  ",
     "person":  " 2person",
    "image": "Mustang.jpg",
    "href" : "https://youtu.be/PWAPQ2fAl5Q"
},
{
    "id": 117,    
    "title":    "Dodge Hellcat Demon With Body Kit",
    "price1" :   84995,
    "price" :  " Price Starting at == $84,995.",
   "Type"  : "Type = Muscle",
    "Engin":   "Engine Name = 6.2 l V8",
   "Torque":  "Torque = 717 lb·ft @ 4,500 rpm (972 N·m)",
 "Horsepower":  "Horsepower = 808 hp ",
 "Acceleration":  "  Acceleration = 0 to 60 : 2.3 seconds ",
 "storage"  :  "170 liters",
    "Transmission" : " Transmission =915663 · Hurst Billet/Plus Pistol Grip Automatic Shift ... ",
     "TopSpeed" : "Top Speed = 196 mph",
     "person":  "4person",
     "Special":" Special =  Supercharged ",
    "image": "dodge kit.jpg",
    "href" : "https://youtu.be/iHcJr60y6aw"
},
{
    "id": 118,    
    "title":   "Chevrolet Camaro Zl1",
    "price1" :  65000,
    "price" :  " Price Starting at == $65,000",
   "Type"  : "Type = muscle Coupe ",
    "Engin":   "Engine Name = 6.2L V8 engine",
   "Torque":  "Torque = 650 lb-ft @ 3,600 rpm",
 "Horsepower":  "Horsepower = 650 hp ",
 "Acceleration":  "  Acceleration = 0 to 60 : 5.4 s ",
 "storage"  :  "150 liters",
    "Transmission" : " Transmission = Available paddle-shift 10-speed automatic ... ",
     "TopSpeed" : "Top Speed = 198 mph ",
     "person":  " 4person",
     "Special":" Special =  Supercharged ",
    "image": "zl1.webp",
    "href" : "https://youtu.be/bSWGJsDIFY4"
},
{
    "id": 119,    
    "title":   "Dodge Viper GTS-R",
    "price1" :  294857,
    "price" :  " Price Starting at == $294,857.",
   "Type"  : "Type = Sport Coupe",
    "Engin":   "Engine Name = 	Viper 8.0-liter (7,998 cc) V10 naturally-aspirated, front-engined, rear-wheel drive",
   "Torque":  "Torque = 729 lb⋅ft (988 N⋅m) torque",
 "Horsepower":  "Horsepower = 709 hp",
 "Acceleration":  "  Acceleration = 0 to 60  3.3 sec, ",
 "storage"  :  "415 litres.",
    "Transmission" : " Transmission = BorgWarner T56 6-speed manual",
     "TopSpeed" : "Top Speed =  185 mph",
     "Special":" Special =  Unknow ",
     "person":  " 2person",
    "image": "viper.jpg",
    "href" : "https://youtu.be/HruMwfBotzs"
},
{
    "id": 120,    
    "title":   "Toyota Supra ",
    "price1" :   55374,
    "price" :  " Price Starting at == $55,374.",
   "Type"  : "Type = Sport Coupe",
    "Engin":   "Engine Name =  2.0-litre engine with twin-scroll turbocharger.	",
   "Torque":  "Torque =  400 Nm of torque.",
 "Horsepower":  "Horsepower =  335 hp",
 "Acceleration":  "  Acceleration = 0 to 60   4.1 s, ",
 "storage"  :  "290-litre",
    "Transmission" : " Transmission = (MT) option ... At launch",
     "TopSpeed" : "Top Speed =  165 mph ",
     "Special":" Special =  Toyota Supra Next Gen ",
     "person":  " 2person",
    "image": "2 (1).jpg",
    "href" : "https://youtu.be/FblJGCdMlds"
},
{
    "id": 121,    
    "title":   "Bugatti Chiron ",
    "price1" :   3987000,
    "price" :  " Price Starting at == $3.987 million.",
   "Type"  : "Type = Super Sport + mid-size sports car",
    "Engin":   "Engine Name =  	8.0 l W16 	Turbocharged	",
   "Torque":  "Torque =  1,180 lb·ft @ 2,000 : 6,000 rpm (1,600 N·m) ",
 "Horsepower":  "Horsepower =   1500  hp",
 "Acceleration":  "  Acceleration = 0 to 60   2.4 seconds, ",
 "storage"  :  " 44 litres.",
    "Transmission" : " Transmission = 7-speed dual-clutch automatic",
     "TopSpeed" : "Top Speed =  273 mph ",
     "Special":" Special = million Car  ",
     "person":  " 2person",
    "image": "Screenshot (31).png",
    "href" : "https://youtu.be/FR8iIMPNqYk"
},
];
let carcounter = "";
cartotal.forEach( (car) => {

    sportcontainerTag.innerHTML  +=   ` <div class="MidContainer a1" >
    <div class="left" >
        <div class="resultinfo"></div>
        <div class="carinfo"> 
            <h2 class="carName">${car.title} </h2>
            <h3>Technical Specifications</h3>
            <ul class="ullist">
                <li>${car.Type}</li>
                <li>${car.Engin}</li>
                <li>${car.Torque}</li>
                <li>${car.Horsepower}</li>
                <li>${car.Acceleration}</li>
                <li>${car.storage}</li>
                <li>${car.Transmission}</li>
                <li>${car.TopSpeed}</li>
                <li>${car.person}</li>
                <li>${car.Special}</li>
                <li class="lifont">${car.price}</li>
                
            </ul>
        </div>
    </div>

    <div class="right">
        <div class="imageparents">        
            <i class="fa-solid fa-caret-left nextbutton"></i>
            <a href="${car.href}"> <img src="${car.image } " class="imgfirstview" /></a>
           <i class="fa-solid fa-caret-right nextbutton"></i>  
           <div class="carinfovideo infonpacty">Click To Photo to Look Car info Video </div>                  
       </div >
        
    
    </div>
 </div>`;
 
 
 

})






let imgcounter1 = 5  ;
nextbuttonTag.addEventListener("click", () => {
   
    imgcounter1 -= 1; 
    let carcounter =imagearry[imgcounter1]  
            imgfirstviewTag.src = carcounter; 
            console.log("it workinf")  
            if (imgcounter1 === -1 ) { 
                imgfirstviewTag.src=  orgimg ;       
                imgcounter1 = 5 ;
               console.log("it Earr")
            }      
});
let imgcounter2 = 0  ;

pervousbuttonTag.addEventListener("click", () => {
    const carcounter =imagearry[imgcounter2];
    imgfirstviewTag.src = carcounter;
    imgcounter2 += 1;
    if (imgcounter2 ===  6 ){
        imgcounter2 = 0 ;
        imgfirstviewTag.src=  orgimg ;
        
    }


})
const infonpactyTag =document.getElementsByClassName("infonpacty")[0];

const  Intervalid =setInterval( () => {
    infonpactyTag.style.opacity = "0"
    
const Intervalid2 =setTimeout(() => {
    infonpactyTag.style.opacity = "1"   
},3000)
},5000)

