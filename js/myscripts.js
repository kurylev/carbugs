$(document).ready(function() {

  $('#li1').click(function(eventObject) {
   
 // Нажимаем левую кнопку 
 		$('#li1').css('background-color','#d81c00');
		$('#li2').css('background-color','#000');
		
		if ($('#tabs2').css('display') == 'block'){
			$('#tabs2').hide();                // убрать
			
			//$('#tabs2').slideUp();
			
		}
		
		if ($('#tabs1').css('display') == 'block'){
			$('#tabs1').fadeOut(0);                 // убрать
			
			//$('#tabs1').slideUp();
			
			/* $('#click').hide(); */
			$('#li1').css('background-color','#000');
			$('#li2').css('background-color','#000');
		}
		else{
			$('#tabs1').fadeIn(800);              // Показать
		
			//$('#tabs1').slideDown(1000);
			
			//$('#tabs2').slideUp();
			
			//$('#tabs2').slideUp();
			
		};
   });
   
 // Нажимаем правую кнопку 
   $('#li2').click(function(eventObject) {  
   
		$('#li2').css('background-color','#d81c00');
		$('#li1').css('background-color','#000');
		
		if ($('#tabs1').css('display') == 'block'){
			$('#tabs1').hide();                 // убрать
			
			//$('#tabs1').slideUp();
		};
		
		if ($('#tabs2').css('display') == 'block'){
			$('#tabs2').fadeOut(0);                 // убрать
			
			//$('#tabs2').slideUp();
			
			$('#li2').css('background-color','#000');
			$('#li1').css('background-color','#000');
		/* 	$('#click').hide(); */
		}
		else{
			$('#tabs2').fadeIn(800);              // Показать
			
			//$('#tabs2').slideDown(1000);
			
			$('#li1').css('background-color','#000');
			$('#li2').css('background-color','#d81c00');
			/* $('#click').show(); */
		};
   });

 
 // СЛАЙДЕР 
 
     $("#guote_l").click(function () {
		if ($('#main').css('display') == 'block') {
			$('#main').hide();                 // убрать
			$('#main2').show("slide", { direction: "right" }, 500);
			
		}
		else
		if ($('#main2').css('display') == 'block') {
			$('#main2').hide();                 // убрать
			$('#main').show("slide", { direction: "right" }, 500);
		
		}	
		/* else
		if ($('#main3').css('display') == 'block') {
			$('#main3').hide();                 // убрать
			$('#main').show("slide", {}, 500);
		
		} */	
      //$("#main").show("slide", {}, 1400);
    }); 
	
	//quote_r	
	
     $("#guote_r").click(function () {
		if ($('#main').css('display') == 'block') {
			$('#main').hide();                 // убрать
			$('#main2').show("slide", { direction: "left" }, 500);
			
		}
		else
		if ($('#main2').css('display') == 'block') {
			$('#main2').hide();                 // убрать
			$('#main').show("slide", { direction: "left" }, 500);
		
		}	
		/* else
		if ($('#main3').css('display') == 'block') {
			$('#main3').hide();                 // убрать
			$('#main').show("slide", {}, 500);
		
		} */	
      //$("#main").show("slide", {}, 1400);
    });

}); //Конец ready 


