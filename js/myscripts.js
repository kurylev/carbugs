$(document).ready(function() {
  var ft;
  var scrollTime;
  var curPos;
  var height;
  $('#li1').click(function(eventObject) {
   
 // Нажимаем левую кнопку 
 		$('#li1').css('background-color','#d81c00');
		$('#li2').css('background-color','#000');
		ft = false;
		if ($('#tabs2').css('display') == 'block') {
			$('#tabs2').hide();                // убрать
			ft = true;
		}
		if ($('#tabs1').css('display') == 'block'){
			$('#tabs1').fadeOut(0);                 // убрать
						
			$('#li1').css('background-color','#000');
			$('#li2').css('background-color','#000');
			//$('#document').animate({"scrollTop":0},"slow");
		}
		else {
			$('#tabs1').fadeIn(800);              // Показать
			curPos = $(document).scrollTop();
			height = $("body").height();
			if (ft === true) {
				scrollTime = 0;
			}
			else {
				scrollTime = (height - curPos)/1.73; 
			}	
			$("body,html").animate({"scrollTop":height},scrollTime); 
		};
   });
   
 // Нажимаем правую кнопку 
   $('#li2').click(function(eventObject) {  
		$('#li2').css('background-color','#d81c00');
		$('#li1').css('background-color','#000');
		ft = false;
		if ($('#tabs1').css('display') == 'block'){
			$('#tabs1').hide();                 // убрать
			ft = true;
		}
		
		if ($('#tabs2').css('display') == 'block') {
			$('#tabs2').fadeOut(0);                 // убрать
			$('#li2').css('background-color','#000');
			$('#li1').css('background-color','#000');
		}
		else {
			$('#tabs2').fadeIn(800);              // Показать
			$('#li1').css('background-color','#000');
			$('#li2').css('background-color','#d81c00');
			curPos = $(document).scrollTop();
			height = $("body").height();
			if (ft === true) {
				scrollTime = 0;
			}
			else {
				scrollTime = (height - curPos)/1.73; 
			}	
			$("body,html").animate({"scrollTop":height},scrollTime); 
		};
   });

 
 // СЛАЙДЕР 
 
	//quote_l	
	
     $("#guote_l").click(function () {
		if ($('#main').css('display') == 'block') {
			$('#main').hide();                 // убрать
			$('#main3').show('slide', { direction: 'right' }, 600);
			$('#point').css('background-position','0 100%');
			
		}
		else
		if ($('#main3').css('display') == 'block') {
			$('#main3').hide();                 // убрать
			$('#main2').show('slide', { direction: 'right' }, 600);
			$('#point').css('background-position','0 50%');
		
		}	
		else
		if ($('#main2').css('display') == 'block') {
			$('#main2').hide();                 // убрать
			$('#main').show('slide', { direction: 'right' }, 600);
			$('#point').css('background-position','0 0');
		
		}
    }); 
	
	//quote_r	
	
     $("#guote_r").click(function () {
		if ($('#main').css('display') == 'block') {
			$('#main').hide();                 // убрать
			$('#main2').show('slide', { direction: 'left'}, 600);
			$('#point').css('background-position','0 50%');
		}
		
		else
		if ($('#main2').css('display') == 'block') {
			$('#main2').hide();                 // убрать
			$('#main3').show('slide', { direction: 'left' }, 600);
			$('#point').css('background-position','0 100%');
		}	
		
		 else
		if ($('#main3').css('display') == 'block') {
			$('#main3').hide();                 // убрать
			$('#main').show('slide', { direction: 'left' }, 600);
			$('#point').css('background-position','0 0');
		}
    });

}); //Конец ready 


