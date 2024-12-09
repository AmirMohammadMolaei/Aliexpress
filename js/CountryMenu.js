Country = 0;
        ChosseCountry.onclick = function(){
            if(Country == 0){
                Keshvar.style.display = "block";
                Country = 1;
            }
            else if(Country == 1){
                Keshvar.style.display = "none";
                Country = 0;
            }
        }
        Language = 0;
        ChosseLanguage.onclick = function(){
            if(Language == 0){
                Zaban.style.display = "block";
                Language = 1;
            }
            else if(Language == 1){
                Zaban.style.display = "none";
                Language = 0;
            }
        }
        Currency = 0;
        ChosseCurrency.onclick = function(){
            if(Currency == 0){
                VahedPol.style.display = "block";
                Currency = 1;
            }
            else if(Currency == 1){
                VahedPol.style.display = "none";
                Currency = 0;
            }
        }