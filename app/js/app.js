$(".portada" ).click(function() {
	var oID = $(this).attr("id");
  alert( oID ); 
  var idPadre = $(this).parents("span:first").attr("id");
  alert(idPadre);
  $(this).parents("span:first").css('background', '#444')/*aparecer label para cancelar selección*/;

  // agregar a arreglo de respuestas positivas si atributo x es positivo si es negativo, ira en negativo.
// Si click en label cancelar
 // Quitar selección (quitar color de fondo)
 //eliminar del arreglo si respuesta es negativa
});


