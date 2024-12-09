window.onscroll = function(){
    console.log(window.pageYOffset)
    if(window.pageYOffset > 105){
        DarkMoodMainCenterLeft.style.left = "0";
        RightMove.style.right = "0";
            if(window.pageYOffset > 400){
                // Header.className = "MoveHeader";
                if(window.pageYOffset > 700){
                    Content.className = "UP";
                    if(window.pageYOffset > 900){
                        MainCenterSlider.style.left = "0";
                        if(window.pageYOffset > 1530){
                            NewSlider.style.right = "0";
                        }
                    }
                }
            }
    }    
    else{
        Content.className = "";
        // Header.className = "";
    }
}
window.onresize = function(){
    if(innerWidth > 1519){
        MainCenterSlider.style.left = "0";
        NewSlider.style.right = "0";
        DarkMoodMainCenterLeft.style.left = "0";
        RightMove.style.right = "0";
    }
}