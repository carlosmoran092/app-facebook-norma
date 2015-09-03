$(".portada" ).click(function() {
	var oID = $(this).attr("id");
  alert( oID ); 
  var idPadre = $(this).parents("span:first").attr("id");
  alert(idPadre);
  $(this).parents("span:first").css('background', '#444').append("<span class='float:right'>Cerrar</span>");

  // agregar a arreglo de respuestas positivas si atributo x es positivo si es negativo, ira en negativo.
});


