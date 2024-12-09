		PosYellowSlider=0;
		BottunRight03.onclick = function(){
			if(PosYellowSlider > -50){
				PosYellowSlider=PosYellowSlider - 50;
				YellowSliderItems.style.left = PosYellowSlider + "%";
			}
		}
		BottunLeft03.onclick = function(){
			if(PosYellowSlider < 0){
				PosYellowSlider=PosYellowSlider + 50;
				YellowSliderItems.style.left = PosYellowSlider + "%";
			}
		}
		BottunRight03.onmouseover = function(){
			if(PosYellowSlider > -50){BottunRight03.style.cursor = "pointer"}
			else{BottunRight03.style.cursor = "no-drop"}
		}
		BottunLeft03.onmouseover = function(){
			if(PosYellowSlider < 0){BottunLeft03.style.cursor = "pointer"}
			else{BottunLeft03.style.cursor = "no-drop"}
		}
