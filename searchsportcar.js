const TopSportCarTag =document.querySelector(".TopSportCar");
const listcontainerTag =document.querySelector(".listcontainer");
const sliderTag =document.querySelector(".slider");
const darkmodeTag =document.querySelector(".darkmode")
const TapManuName =["Popular SportCars","Filter price SportCar","Exchange rate calculator","Contact us"];
const bodytag=document.querySelector(".body1");
const MidContainerTag= document.querySelector(".MidContainer");
const secondMidContainerTag =document.querySelector(".secondMidContainer");
const thirdMidcontainerTag =document.querySelector(".thirdMidcontainer") ;
const contactusTag =document.querySelector(".contactus")
const menucontainertag =document.querySelector(".menucontainer");
const lin1Tag =document.querySelector(".lin1");
const lin2Tag =document.querySelector(".lin2");
const lin3Tag =document.querySelector(".lin3");
const secondovermenuTag =document.querySelector(".secondovermenu") ;
const MidContainerall =document.getElementsByClassName("sportcontainer ")[0];
const j95jTag =document.querySelector(".j95j");
const k9Tag =document.querySelector(".k9");
const A95Tag =document.querySelector(".A95");
const k8 =document.querySelector(".k8")
const B95Tag =document.querySelector(".B95");
const k7 =document.querySelector(".k7");
const C95Tag =document.querySelector(".C95");
const k6 =document.querySelector(".k6")
const D95Tag =document.querySelector(".D95");
const k97 =document.querySelector(".k97")
const Tabchange = (event) => {
  const clicktabid  =event.target.id
  const idtag =document.getElementById(clicktabid);  
const clicktagwidth =idtag.offsetWidth;
const clicktagoffsetleft =idtag.offsetLeft;
sliderTag.style.width =clicktagwidth + "px";
sliderTag.style.transform = `  translateX(${clicktagoffsetleft}px) `
const takeid =clicktabid ;
switch(takeid) {
case "00000" :
  displaynoneadd2()
  MidContainerTag.classList.remove("displaynoneTag");
  MidContainerall.classList.remove("a2")
  console.log("it working")
  break
  case "10000" :
    displaynoneadd2()
    secondMidContainerTag.classList.remove("displaynoneTag");
    if (pricefilterTag.value === "" ) {
      searichprice = 71000
      console.log(searichprice)     
      }
      filterPrice = cartotal.filter(Carinfo => {
        return  Carinfo.price1 < (searichprice);
        });
        
       
        filterPrice.forEach( (carPrice) => {                     
          secondfiltershowTag.innerHTML  +=   ` <div class="MidContainer a1" >
          <div class="left" >
              <div class="resultinfo"></div>
              <div class="carinfo"> 
                  <h2 class="carName">${carPrice.title} </h2>
                  <h3>Technical Specifications</h3>
                  <ul class="ullist">
                      <li>${carPrice.Type}</li>
                      <li>${carPrice.Engin}</li>
                      <li>${carPrice.Torque}</li>
                      <li>${carPrice.Horsepower}</li>
                      <li>${carPrice.Acceleration}</li>
                      <li>${carPrice.storage}</li>
                      <li>${carPrice.Transmission}</li>
                      <li>${carPrice.TopSpeed}</li>
                      <li>${carPrice.person}</li>
                      <li>${carPrice.Special}</li>
                      <li class="lifont">${carPrice.price}</li>
                      
                  </ul>
              </div>
          </div>
      
          <div class="right">
              <div class="imageparents">        
                  <i class="fa-solid fa-caret-left nextbutton"></i>
                  <a href="${carPrice.href}"> <img src="${carPrice.image } " class="imgfirstview" /></a>
                 <i class="fa-solid fa-caret-right nextbutton"></i>  
                 <div class="carinfovideo infonpacty">Click To Photo to Look Car info Video </div>                  
             </div >
              <div class=" videodiv videodiv2"> <a href="https://youtu.be/1HpliMCHFSY" class="playvideo">Play ThisCar info Video</a>
              </div>
          
          </div>
       </div>`;
       
       
       searichprice = ""
      
      })
    
  break
  case "20000" : 
  displaynoneadd2()
  thirdMidcontainerTag.classList.remove("displaynoneTag"); 
 
  break
case "30000" : 
displaynoneadd2()
contactusTag.classList.remove("displaynoneTag");
skillfuction(j95jTag) ;
persent (k9Tag , "93%") ;
skillfuction(A95Tag);
persent(k8 , "83%");
skillfuction(B95Tag);C95Tag
persent(k7 , "74%" );
skillfuction(C95Tag);
persent(k6 , "10%" );
skillfuction(D95Tag);
persent(k97 , "8%" );
const ssTag =document.querySelector(".ss")
const  Intervalid7 =setInterval( () => {
    ssTag.style.opacity = "0"
    

},10000)
break
};
};

const skillfuction = (lam35) => {
  const Intervalid3 =setInterval(() => {
    lam35.style.transform = " translateX( -0px )" ;
  },1000)
 }
 const persent = (persent3 , pp ) => {
  const Intervalid4 =setInterval(() => {
    persent3.style. marginLeft = pp;
  },1000)
 }

const displaynoneadd2 =() => {
  MidContainerall.classList.add("a2")
  MidContainerTag.classList.add("displaynoneTag");
  secondMidContainerTag.classList.add("displaynoneTag");
  thirdMidcontainerTag.classList.add("displaynoneTag");
  contactusTag.classList.add("displaynoneTag")
};


for (let i = 0 ; i < TapManuName.length ; i++) {
 const TapManuDiv =document.createElement("div");
 TapManuDiv.append(TapManuName[i].toLocaleUpperCase());
 TapManuDiv.id =i + "0000"  ;
 TapManuDiv.addEventListener("click",Tabchange)
 listcontainerTag.append(TapManuDiv)
 TapManuDiv.classList.add("TopSportCar")
 
 if( i === 0) {
    sliderTag.style.width =   `180px` ;
   
}
};
let isBlack1 = 0 ;
darkmodeTag.addEventListener("click", () => {
    localStorage.setItem('isBlack', '1');     
    darkmodeTag.style.transform = ` translateX(+30px)`
    darkmodeTag.style.backgroundColor = `black`
    const isBlack =localStorage.getItem("isBlack");
    bodytag.classList.remove("body3");

    isBlack1  += 1 ;
  if (isBlack1 === 2 ) {
    isBlack1 = 0 ;
    darkmodeTag.style.transform = ` translateX(+0px)`
    darkmodeTag.style.backgroundColor = `white`
    bodytag.classList.remove("body2")
    localStorage.removeItem('isBlack', '1');   
    bodytag.classList.add("body3");

  };if (isBlack === "1") {        
    bodytag.classList.add("body2")    
 };});
const isBlack =localStorage.getItem("isBlack");
if (isBlack === "1") {  
    darkmodeTag.style.backgroundColor = `black`
    bodytag.classList.add("body2")
    darkmodeTag.style.transform = ` translateX(+30px)`
    isBlack1  += 1 ;
    
 };

 menucontainertag.addEventListener("", () => {
   if (menucontainertag.classList.contains("isOpen")) {
    secondovermenuTag.classList.remove("displaynonemenu")
    lin2Tag.classList.remove("opictydispaaer") ;
    lin1Tag.classList.remove("rotate45deg") ;
    lin3Tag.classList.remove("rotate-45deg") ;
    menucontainertag.classList.remove("isOpen");
   }else {
    secondovermenuTag.classList.add("displaynonemenu");
  lin2Tag.classList.add("opictydispaaer") ;
  lin1Tag.classList.add("rotate45deg") ;
  lin3Tag.classList.add("rotate-45deg") ;
  menucontainertag.classList.add("isOpen")
   }
 });




