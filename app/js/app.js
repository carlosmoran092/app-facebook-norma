var positivo = new Object();
var negativo = new Object();

positivo.seleccionadas = [];
$(".portada" ).click(function() {
  var id = $(this).attr("id");
  
  if (positivo.id!=id) {
	  alert( id ); 
	  var idPadre = $(this).parents("span:first").attr("data-name");
	  alert(idPadre);
	  $(this).parents("span:first").css('background', '#C6E7F6') /*aparecer label para cancelar selección*/;
	   var Arrseleccion = positivo.seleccionadas; conReg = positivo.seleccionadas[idPadre]
	   if(conReg != idPadre){
	   	Arrseleccion.push(idPadre);
	   }else{
	   	alert("Ya esta creado");
	   }
	   
	  alert(positivo.seleccionadas);
	  // agregar a arreglo de respuestas positivas si atributo x es positivo si es negativo, ira en negativo.
	  // Si click en label cancelar
	  // Quitar selección (quitar color de fondo)
	  //eliminar del arreglo si respuesta es negativa
	  
	 /*----------  Código para boton de cancelar selección  ----------*/

  } else{alert("nada pasa")};

 
});

$(".btn-cancel").click(function(event) {
	//$(this).parents("span:first").css('background', '#fff').attr("data-name");
	opt = $(this).parents("span:first",this).parents("");
	alert(opt);
});


