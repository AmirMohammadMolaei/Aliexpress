PosBigSlider = 0;
        setInterval(MoveBigSlider,3000);
        function MoveBigSlider(){
            if(PosBigSlider > -100){
				PosBigSlider=PosBigSlider - 100;
				BigSliderItems.style.left = PosBigSlider + "%";
			}
            else if(PosBigSlider == -100){
				PosBigSlider = 0;
				BigSliderItems.style.left = PosBigSlider + "%"; 
			}
        }
		ButtonRight1.onclick = function(){
			if(PosBigSlider > -100){
				PosBigSlider=PosBigSlider - 100;
				BigSliderItems.style.left = PosBigSlider + "%";
			}
			else if(PosBigSlider == -100){
				PosBigSlider = 0;
				BigSliderItems.style.left = PosBigSlider + "%"; 
			}
		}
		ButtonLeft1.onclick = function(){
			if(PosBigSlider == 0){
				PosBigSlider= -100;
				BigSliderItems.style.left = PosBigSlider + "%"; 
			}
			else{
				PosBigSlider = 0;
				BigSliderItems.style.left = PosBigSlider + "%"; 
			}
		}