PosLittleSlider = 0;
        setInterval(MoveLittleSlider,3000);
        function MoveLittleSlider(){
            if(PosLittleSlider > -1100){
				PosLittleSlider=PosLittleSlider - 100;
				LittleSliderItems.style.left = PosLittleSlider + "%";
			}
			else if(PosLittleSlider == -1100){
				PosLittleSlider = 0;
				LittleSliderItems.style.left = PosLittleSlider + "%"; 
			} 
        }
		ButtonRight2.onclick = function(){
			if(PosLittleSlider > -1100){
				PosLittleSlider=PosLittleSlider - 100;
				LittleSliderItems.style.left = PosLittleSlider + "%";
			}
			else if(PosLittleSlider == -1100){
				PosLittleSlider = 0;
				LittleSliderItems.style.left = PosLittleSlider + "%"; 
			}
		}
		ButtonLeft2.onclick = function(){
			if(PosLittleSlider < 0){
				PosLittleSlider=PosLittleSlider +100;
				LittleSliderItems.style.left = PosLittleSlider + "%"; 
			}
		}