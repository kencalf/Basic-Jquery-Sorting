 $(document).ready(function() {
	 		
//BLUE-------------------
     $('#click1').click(function(){
     $('.blue  ').css("display","block") ;
	 $('.green').css("display","none") ;
	 $('.red').css("display","none") ;
     });
   
//GREEN-------------------
   $('#click2').click(function() {
   $('.green ').css("display","block");
   $('.blue  ').css("display","none");
   $('.red  ').css("display","none");
   });
   
   
   
//RED-------------------
   $('#click3').click(function() {
   $('.red').css("display","block");
   $('.blue  ').css("display","none");
   $('.green  ').css("display","none");
   });
   
   
   
   //ALL COLORS-------------------
   $('#click4').click(function() {
   $('.red  ').css("display","block");
   $('.blue  ').css("display","block");
   $('.green  ').css("display","block");
   });
   
   

 //end of functions--------------------------------------- 
 });