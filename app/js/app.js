var tipo_pregunta = true;
var positivo = new Object();
var negativo = new Object();
positivo.seleccionadas = [];



/*----------  HOMBRE Y MUJER  ----------*/


$('#female').click(function(event) {
	alert("seleccionaste mujer")
});


$('#male').click(function(event) {
	alert("seleccionaste hombre")
});




/*---------- FIN HOMBRE Y MUJER  ----------*/






$(".portada" ).click(function() {
  var id = $(this).attr("id");
    var activo = $(this).attr('data-active');
  alert(activo);

//inArray

//$(this).attr('data-active', 'true');

  if (activo == undefined) {
  	activo = $(this).attr('data-active', 'true');
	  alert(id); 
	  
	  var idPadre = $(this).parents("span:first").attr("data-name");
	  alert(idPadre);
	  $(this).parents("span:first").css('background', '#C6E7F6');
	   var Arrseleccion = positivo.seleccionadas; conReg = positivo.seleccionadas[idPadre];
	   
	   if(conReg != idPadre)
	   {Arrseleccion.push(idPadre);}

	   
	  alert(positivo.seleccionadas);
	}else if(activo == "true"){
		alert("deseleccionar")
		activo = $(this).removeAttr('data-active');
		$(this).parents("span:first").css('background', '#fff');
		eliminarItem=positivo.seleccionadas.indexOf(idPadre);
		alert(eliminarItem);
		delete positivo.seleccionadas[eliminarItem];

	} else{alert("nada pasa")};

 
});

$("#btn-siguiente").click(function() {
//capturar variable de numero-pregunta
$( "#cuestionario" ).load( "app/poll/male/tipo1.txt" );
});

