DarkMoodMemory = 0;
DarkMood.onclick = function(){
    if(DarkMoodMemory == 0){
        DarkMood.style.backgroundColor = "#555";
        Content.style.backgroundColor = "rgb(38, 38, 38)";
        DarkMoodHeaderTop.style.backgroundColor = "#17202a";
        DarkMoodHeaderBottom.style.backgroundColor = "#17202a";
        MobileSearch.style.backgroundColor = "#17202a";
        DarkMoodMainCenterRightTop.style.backgroundColor = "#4d5656";
        DarkMoodMainCenterRightBottom.style.backgroundColor = "#4d5656";
        DarkMoodMainCenter.style.backgroundColor = " #a93226 ";
        dmMainCenterItems.style.backgroundColor = "rgb(38, 38, 38)";
        DarkMoodMainCenterLeft.style.backgroundColor = " #a93226 ";
        dmLeftManiCenterTitle.style.color = "#fff";
        DarkMoodSabtenam.style.backgroundColor = " #424949 ";
        DarkMoodTitle01.style.color = " #fff ";
        DarkMoodTitle02.style.color = " #fff ";
        DarkMoodFooterTop.style.backgroundColor = "#424949";
        DarkMoodFooterTop.style.color = "#fff";
        DarkMoodFooterCenter.style.backgroundColor = "#424949";
        dmTitleItemFooterCenter01.style.color = "#fff";
        dmTitleItemFooterCenter02.style.color = "#fff";
        dmTitleItemFooterCenter03.style.color = "#fff";
        dmTitleItemFooterCenter04.style.color = "#fff";
        BigSliderItems.style.color = "#fff";
        DarkMoodMainBottom.style.color = "#fff";
        DarkMoodMemory = 1;
    }
    else if(DarkMoodMemory == 1){
        DarkMood.style.backgroundColor = "#fff";
        Content.style.backgroundColor = "#fff";
        DarkMoodHeaderTop.style.backgroundColor = "#191919";
        DarkMoodHeaderBottom.style.backgroundColor = "#191919";
        DarkMoodMainCenterRightTop.style.backgroundColor = "#f5f5f5";
        DarkMoodMainCenterRightBottom.style.backgroundColor = "#f5f5f5";
        DarkMoodMainCenter.style.backgroundColor = " #ffc0cb66 ";
        dmMainCenterItems.style.backgroundColor = "#fff";
        DarkMoodMainCenterLeft.style.backgroundColor = " #ffc0cb66 ";
        DarkMoodSabtenam.style.backgroundColor = " #f5f5f5 ";
        DarkMoodTitle01.style.color = " #000 ";
        DarkMoodTitle02.style.color = " #000 ";
        DarkMoodFooterTop.style.backgroundColor = "#e8e8e8";
        DarkMoodFooterTop.style.color = "#000";
        DarkMoodFooterCenter.style.backgroundColor = "#e8e8e8";
        dmTitleItemFooterCenter01.style.color = "#000";
        dmTitleItemFooterCenter02.style.color = "#000";
        dmTitleItemFooterCenter03.style.color = "#000";
        dmTitleItemFooterCenter04.style.color = "#000";
        dmLeftManiCenterTitle.style.color = "rgb(253, 56, 79)";
        BigSliderItems.style.color = "#000";
        DarkMoodMainBottom.style.color = "#000";
        MobileSearch.style.backgroundColor = "#191919";
        DarkMoodMemory = 0;
    }
}