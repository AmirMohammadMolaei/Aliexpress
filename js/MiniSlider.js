pos = 0;
        setInterval(MoveMiniSlider,3000);
        function MoveMiniSlider(){
            if(pos > -50){
				pos = pos - 50;
				MiniSliderItems.style.left = pos + "%";
			}
            else if(pos == -50){
				pos = 0;
				MiniSliderItems.style.left = pos + "%"; 
			}
        }
		ButtonRight.onclick = function(){
			if(pos > -50){
				pos = pos - 50;
				MiniSliderItems.style.left = pos + "%";
			}
			else if(pos == -50){
				pos = 0;
				MiniSliderItems.style.left = pos + "%";	
			}
		}
		ButtonLeft.onclick = function(){

			if(pos < 0){
				pos = pos + 50;
				MiniSliderItems.style.left = pos + "%";
			}
		}