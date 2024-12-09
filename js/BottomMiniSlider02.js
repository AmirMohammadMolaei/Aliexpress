PosBottomMiniSlider2 = 0;
		ButtonRightMini02.onclick = function(){
			if(PosBottomMiniSlider2 > -400){
				PosBottomMiniSlider2=PosBottomMiniSlider2 - 100;
				BottomMiniSliderItems02.style.left = PosBottomMiniSlider2 + "%";
			}
			else if(PosBottomMiniSlider2 == -400){
				PosBottomMiniSlider2 = 0;
				BottomMiniSliderItems02.style.left = PosBottomMiniSlider2 + "%"; 
			}
		}
		ButtonLeftMini02.onclick = function(){
			if(PosBottomMiniSlider2 < 0){
				PosBottomMiniSlider2=PosBottomMiniSlider2 +100;
				BottomMiniSliderItems02.style.left = PosBottomMiniSlider2 + "%"; 
			}
		}