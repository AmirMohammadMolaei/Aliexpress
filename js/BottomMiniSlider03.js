PosBottomMiniSlider3 = 0;
		ButtonRightMini03.onclick = function(){
			if(PosBottomMiniSlider3 > -400){
				PosBottomMiniSlider3=PosBottomMiniSlider3 - 100;
				BottomMiniSliderItems03.style.left = PosBottomMiniSlider3 + "%";
			}
			else if(PosBottomMiniSlider3 == -400){
				PosBottomMiniSlider3 = 0;
				BottomMiniSliderItems03.style.left = PosBottomMiniSlider3 + "%"; 
			}
		}
		ButtonLeftMini03.onclick = function(){
			if(PosBottomMiniSlider3 < 0){
				PosBottomMiniSlider3=PosBottomMiniSlider3 +100;
				BottomMiniSliderItems03.style.left = PosBottomMiniSlider3 + "%"; 
			}
		}