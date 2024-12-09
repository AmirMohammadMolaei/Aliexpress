PosBottomMiniSlider = 0;
		ButtonRightMini01.onclick = function(){
			if(PosBottomMiniSlider > -400){
				PosBottomMiniSlider=PosBottomMiniSlider - 100;
				BottomMiniSliderItems01.style.left = PosBottomMiniSlider + "%";
			}
			else if(PosBottomMiniSlider == -400){
				PosBottomMiniSlider = 0;
				BottomMiniSliderItems01.style.left = PosBottomMiniSlider + "%"; 
			}
		}
		ButtonLeftMini01.onclick = function(){
			if(PosBottomMiniSlider < 0){
				PosBottomMiniSlider=PosBottomMiniSlider +100;
				BottomMiniSliderItems01.style.left = PosBottomMiniSlider + "%"; 
			}
		}