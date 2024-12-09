PosBottomMiniSlider4 = 0;
		ButtonRightMini04.onclick = function(){
			if(PosBottomMiniSlider4 > -400){
				PosBottomMiniSlider4=PosBottomMiniSlider4 - 100;
				BottomMiniSliderItems04.style.left = PosBottomMiniSlider4 + "%";
			}
			else if(PosBottomMiniSlider4 == -400){
				PosBottomMiniSlider4 = 0;
				BottomMiniSliderItems04.style.left = PosBottomMiniSlider4 + "%"; 
			}
		}
		ButtonLeftMini04.onclick = function(){
			if(PosBottomMiniSlider4 < 0){
				PosBottomMiniSlider4=PosBottomMiniSlider4 +100;
				BottomMiniSliderItems04.style.left = PosBottomMiniSlider4 + "%"; 
			}
		}