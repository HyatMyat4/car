const imgfirstviewTag =document.querySelector(".imgfirstview")
const videodivTag =document.querySelector(".videodiv")
const sport1containerTag =document.querySelector(".sport1container")
const pricefilterTag =document.querySelector(".pricefilter")
imgfirstviewTag.addEventListener("click", () => {
    videodivTag.classList.remove("videodiv2")
});

videodivTag.addEventListener("click", () => {
    videodivTag.classList.add("videodiv2")
});
const carautocompleteTag =document.getElementsByClassName("carautocomplete")[0];
const resultinfoTag =document.getElementsByClassName("resultinfo")[0];
   
    carautocompleteTag.addEventListener("keyup", (event) => {      
     if ( event.key === "ArrowDown" ||  
          event.key ===  "ArrowUp"||
          event.key === "Enter"
           )
          {
            NavigateProduct(event.key);
          return;
          }
      resultinfoTag.innerHTML = "" ;
      const SearchValue =event.target.value.toLowerCase();
      if (SearchValue.length === 0) {
return;
      };
      CarfilterArry = cartotal.filter(Carinfo => {
      return  Carinfo.title.toLowerCase().includes(SearchValue);
      });
      const Carproduct =CarfilterArry.length > 0 ;
     
      if (Carproduct === true) {        
        for (let i = 0 ; i < CarfilterArry.length ; i++ ) {
            const caritemcontainer =document.createElement("div");
            caritemcontainer.id=CarfilterArry[i].id;
            caritemcontainer.classList.add("caritemcontainer");            
            const CarName =document.createElement("div");
          CarName.classList.add("carName2");
            CarName.append(CarfilterArry[i].title);

            const carimg =document.createElement("img");
            carimg.classList.add("carimg");
            carimg.src =CarfilterArry[i].image;

            caritemcontainer.append(CarName,carimg);
            resultinfoTag.append(caritemcontainer);

        }
      }
    });

    let indexnumber = -1 ;
    const NavigateProduct = ( key ) => {
      if ( key === "ArrowDown" ) {
       if ( indexnumber ===  CarfilterArry.length -1) {
        indexnumber = -1 ;
        delsepod()
        return       }
        indexnumber += 1 ;              
       const carnumbertoselectcontainer = selectpod(indexnumber);
      
       if (indexnumber > 0 ) {
        delsepod()       }
       carnumbertoselectcontainer.classList.add("select")
      }else if( key === "ArrowUp" ){
        if (indexnumber === -1 ) {          
          return
        }
        if(indexnumber === 0  ) {
          delsepod();
          indexnumber =   -1 ;
          return
        }
        indexnumber -= 1 ;
        delsepod();
        selectpod(indexnumber);
        const carnumbertoselectcontainer = selectpod(indexnumber);
        carnumbertoselectcontainer.classList.add("select")
      }else {

      }
    };
   
    const delsepod = () => {
      const desele =document.getElementsByClassName("select")[0];
        desele.style.backgroundColor = ""
        desele.firstChild.style.color = ""
        desele.classList.remove("select")
        
    };

    const selectpod = (oki) => {
      const carnumbertoselect = CarfilterArry[oki].id.toString();       
      const carnumbertoselectcontainer =document.getElementById(carnumbertoselect);        
      carnumbertoselectcontainer.style.backgroundColor = "#237BFF"
      return carnumbertoselectcontainer
    };    
    
   

  
      resultinfoTag.addEventListener("click", (event) => {    
        sport1containerTag.innerHTML = "";
       carautocompleteTag.value = ""       
       SearchValue = "" ;
      
        let resultid = event.target.id ;
        console.log("is",resultid)
       
       cartotalfilterid =cartotal.filter( creifo => {
         return creifo.id.toString().includes(resultid);         

        });
        console.log(cartotalfilterid)
        sport1containerTag.innerHTML  +=   ` <div class="MidContainer a1" >
        <div class="left" >
            <div class="resultinfo"></div>
            <div class="carinfo"> 
                <h2 class="carName">${cartotalfilterid[0].title} </h2>
                <h3>Technical Specifications</h3>
                <ul class="ullist">
                    <li>${cartotalfilterid[0].Type}</li>
                    <li>${cartotalfilterid[0].Engin}</li>
                    <li>${cartotalfilterid[0].Torque}</li>
                    <li>${cartotalfilterid[0].Horsepower}</li>
                    <li>${cartotalfilterid[0].Acceleration}</li>
                    <li>${cartotalfilterid[0].storage}</li>
                    <li>${cartotalfilterid[0].Transmission}</li>
                    <li>${cartotalfilterid[0].TopSpeed}</li>
                    <li>${cartotalfilterid[0].person}</li>
                    <li>${cartotalfilterid[0].Special}</li>
                    <li class="lifont">${cartotalfilterid[0].price}</li>
                    
                </ul>
            </div>
        </div>
    
        <div class="right">
            <div class="imageparents">        
                <i class="fa-solid fa-caret-left nextbutton"></i>
                <a href="${cartotalfilterid[0].href}"> <img src="${cartotalfilterid[0].image } " class="imgfirstview" /></a>
               <i class="fa-solid fa-caret-right nextbutton"></i>  
               <div class="carinfovideo infonpacty">Click To Photo to Look Car info Video </div>                  
           </div >
          
        
        </div>
     </div>`;
     resultinfoTag.innerHTML = "" ;
       });
       const secondfiltershowTag =document.querySelector(".secondfiltershow");

       pricefilterTag.addEventListener( "keyup"  ,(e) =>  {        
        secondfiltershowTag.innerHTML =  "";
        searichprice  =e.target.value;
      
      console.log(searichprice)
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
               
            
            </div>
         </div>`;
         
       
         
        
        })
        
       });

       const trashvalueTag =document.querySelector(".trashvalue");
       const trashvalue1Tag =document.querySelector(".trashvalue1")
       const trashvalue2 = document.querySelector(".trashvalue2")
       trashvalueTag.addEventListener("click", () => {
        pricefilterTag.value = ""
        searichprice = ""
        secondfiltershowTag.innerHTML = ""
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
                 
              
              </div>
           </div>`;
           
           
           searichprice = ""
          
          })
        
        trashvalueTag.style.opacity = "0"
        const Intervalidvalueremove2 =setTimeout(() => {
          trashvalue1Tag.style.opacity = "1"
      },1000)
        
        setopacty(trashvalue1Tag)
      const Intervalidvalueremove3 =setTimeout(() => {
        trashvalue2.style.opacity = "1"
    },2000)

    const Intervalidvalueremove4 =setTimeout(() => {
      trashvalue2.style.opacity = "0"
      trashvalueTag.style.opacity = "1"
  },3000)
        console.log("it working")
       })
      
  const setopacty = (trash)=>    {
    const Intervalidvalueremove1 =setTimeout(() => {
      trash.style.opacity = "0"
  },2000)
  }
  