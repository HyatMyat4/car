let country_code = {
    "USD"	:"US",
    "AED" :	 "AE",
    "AFA" :	 "AF",
     "ALL" : "AL",
    "AMD" :	"AM",
    "ANG" :	"AN",
    "AOA"	: "AO",
    "ARS"	:"AR",
    "AUD"	:"AU",
    "AWG"	:"AW",
    "AZM"	:"AZ",   
    "BAM"	:"BA",
    "BBD"	:"BB",
    "BDT"	:"BD",
    "BGN"	:"BG",
    "BHD"	:"BH",
    "BIF"	:"BI",
    "BMD"	:"BM",
    "BND"	:"BN",
    "BRL"	:"BR",
    "BSD"	:"BS",
    "BTN"	:"BT",
    "BWP"	:"BW",
    "BYR"	:"BY",
    "BZD"	:"BZ",
    "CDF"	:"CD",
    "CHF"	:"CH",
    "CLP"	:"CL",
    "CNY"	:"CN",
    "COP"	:"CO",
    "CRC"	:"CR",
    "CSD"	:"CS",
    "CUP"	:"CU",
    "CVE"	:"CV",
    "CYP"	:"CY",
    "CZK"	:"CZ",
    "DJF"	:"DJ",
    "DKK"	:"DK",
    "DOP"	:"DO",
    "DZD"	:"DZ",
    "EEK"	:"EE",
    "EGP"	:"EG",
    "ERN"	:"ER",
    "ETB"	:"ET",
    "EUR"	:"EU",
    "FJD"	:"FJ",
    "FKP"	:"FK",
    "GBP"	:"GB",
    "GEL"	:"GE",
    "GGP"	:"GG",
    "GHC"	:"GH",
    "GIP"	:"GI",
    "GMD"	:"GM",
    "GNF"	:"GN",
    "GTQ"	:"GT",
    "GYD"	:"GY",
    "HKD"	:"HK",
    "HNL"	:"HN",
    "HRK"	:"HR",
    "HTG"	:"HT",
    "HUF"	:"HU",
    "IDR"	:"ID",
    "ILS"	:"IL",
    "IMP"	:"IM",
    "INR"	:"IN",
    "IQD"	:"IQ",
    "IRR"	:"IR",
    "ISK"	:"IS",
    "JEP"	:"JE",
    "JMD"	:"JM",
    "JOD"	:"JO",
    "JPY"	:"JP",
    "KES"	:"KE",
    "KGS"	:"KG",
    "KHR"	:"KH",
    "KMF"	:"KM",
    "KPW"	:"KP",
    "KRW"	:"KR",
    "KWD"	:"KW",
    "KYD"	:"KY",
    "KZT"	:"KZ",
    "LAK"	:"LA",
    "LBP"	:"LB",
    "LKR"	:"LK",
    "LRD"	:"LR",
    "LSL"	:"LS",
    "LTL"	:"LT",
    "LVL"	:"LV",
    "LYD"	:"LY",
    "MAD"	:"MA",
    "MDL"	:"MD",
    "MGA"	:"MG",
    "MKD"	:"MK",
    "MMK"	:"MM",
    "MNT"	:"MN",
    "MOP"	:"MO",
    "MRO"	:"MR",
    "MTL"	:"MT",
    "MUR"	:"MU",
    "MVR"	:"MV",
    "MWK"	:"MW",
    "MXN"	:"MX",
    "MYR"	:"MY",
    "MZM"	:"MZ",
    "NAD"	:"NA",
    "NGN"	:"NG",
    "NIO"	:"NI",
    "NOK"	:"NO",
    "NPR"	:"NP",
    "NZD"	:"NZ",
    "OMR"	:"OM",
    "PAB"	:"PA",
    "PEN"	:"PE",
    "PGK"	:"PG",
    "PHP"	:"PH",
    "PKR"	:"PK",
    "PLN"	:"PL",
    "PYG"	:"PY",
    "QAR"	:"QA",
    "RUR"	:"RU",
    "RWF"	:"RWF",
    "SAR"	:"SAR",
    "SBD"	:"SBD",
    "SCR"	:"SCR",
    "SDD"	:"SD",
    "SEK"	:"SE",
    "SGD"	:"SG",
    "SHP"	:"SH",
    "SIT"	:"SI",
    "SKK"	:"SK",
    "SLL"	:"SL",
    "SOS"	:"SO",
    "SPL"	:"SP",
    "SRD"	:"SR",
    "SRG"	:"SR",
    "STD"	:"ST",
    "SVC"	:"EV",
    "SYP"	:"SY",
    "SZL"	:"SZ",
    "THB"	:"TH",
    "TJS"	:"TJ",
    "TMM"	:"TM",
    "TND"	:"TN",
    "TOP"	:"TO",
    "TRL"	:"TR",
    "TTD"	:"TT",
    "TVD"	:"TV",
    "TWD"	:"TW",
    "TZS"	:"TZ",
    "UAH"	:"UA",
    "UGX"	:"UG",    
    "UYU"	:"UY",
    "UZS"	:"UZ",
    "VEB"	:"VE",
    "VND"	:"VN",
    "VUV"	:"VU",
    "WST"	:"WS",
    "XAF"	:"XA",
    "XAG"	:"XA",
    "XAU"	:"XA",
    "XCD"	:"XC",
    "XDR"	:"XD",
    "XOF"	:"XO",
    "XPD"	:"XP",
    "XPF"	:"XP" ,
    "XPT"	:"XP" ,
    "YER"	:"YE" ,
    "ZAR"	:"ZA" ,
    "ZMK"	:"ZM" ,
    "ZWD"	:"ZW",
    
}
const droplist =document.querySelectorAll(" .drop-list  select ");
const FromCurrency =document.querySelector(" .from  select ");
const Tocurrency =document.querySelector(" .To  select ");
const apiKey =  "5d94e1220c1913856512619f"
getButton =document.querySelector("form button")
for (let i = 0 ; i < droplist.length ; i++ ) {
    for (currencycode  in country_code ) {
        let select ;
        console.log(i)
        if (i == 0 ) {
            select =currencycode == "USD"  ? "select" : "" ;
        }else if (i == 1)   {
            select =currencycode == "MMK"  ? "select" : "" ;

        }
        let optionTag = ` <option value="${currencycode}" ${select}>${currencycode}</option>`
        droplist[i].insertAdjacentHTML("beforeend",optionTag)
        
    }
    droplist[i].addEventListener("change", event => {
        loadflag(event.target);
    })


function loadflag (element) {
    console.log("it working") 
     for ( code  in  country_code ) {
        if ( code == element.value ) {

let imgTag = element.parentElement.querySelector(".imgsize")
imgTag.src = `https://countryflagsapi.com/png/${country_code[code]}`

        }

     }

}


}
window.addEventListener("load", () => {    
    getExchangeRate();
    })

getButton.addEventListener("click", e => {
e.preventDefault();
getExchangeRate();
aimation();
})
const iconTag =document.querySelector(" .drop-list  .icon")
iconTag.addEventListener("click", () => {
let teamcode = FromCurrency.value
FromCurrency.value =  Tocurrency.value ; 
Tocurrency.value = teamcode
getExchangeRate()
});
function getExchangeRate() {
    const amount =document.querySelector(".amount input");
     ExchangeRateTag =document.querySelector(".getexchange-rate");
    let amountvail =amount.value;
if (   amountvail == " "   ||  amountvail == "0" ){
    amount.value = "1" ;
    amountvail =1 ;
   
}
ExchangeRateTag.innerText = "loding Exchange Rate..";
let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${FromCurrency.value}`
    fetch(url).then(response => response.json() ).then(result => {
        let exchangerate = result.conversion_rates[Tocurrency.value];
        let TotalExchangeRate =Math.floor((amountvail * exchangerate).toFixed(2)) 
       
        ExchangeRateTag.innerHTML = ` ${amount.value} ${FromCurrency.value} = ${TotalExchangeRate} ${Tocurrency.value} ` 
        console.log(TotalExchangeRate)

    })
}
const iszTag =document.querySelector(".Aimtion")
function aimation() {
    
    iszTag.classList.remove("isz")
    iszTag.classList.add("vvv")
   

}