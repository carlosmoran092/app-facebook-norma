var tipo_pregunta = true;
var positivo = new Object();
var negativo = new Object();
positivo.seleccionadas = [];


/*----------  COMENZAR TEST  ----------*/


$("#comienzo-test").on("click",function(event) 
{
	mostrarHTML("seleccionGenero");
});


/*----------  COMENZAR TEST  ----------*/




/*----------  HOMBRE O MUJER  ----------*/


$('#cambio').on("click","#female",function(event) {
	alert("seleccionaste mujer");
	mostrarHTML("female/seleccionar_tipo");
});

$('#cambio').on("click","#male",function(event) {
	alert("seleccionaste hombre")
});

/*---------- FIN HOMBRE Y MUJER  ----------*/


/*----------  ESTILO MUJER  ----------*/


$('#cambio').on("click",".btn-style-female",function(event){
style_female=$(this).attr("data-select");
switch(style_female){
	case "tipo-1":
		alert("tipo 1");		
		mostrarHTML("female/tipo1");
		mostrarBotones();
		break;

	case "tipo-2":
		alert("tipo 2");
		mostrarHTML("female/tipo2");
	break;

	case "tipo-3":
		alert("tipo 3");
		break;

	case "tipo-4":
		alert("tipo 4");
		break;

	default:
		alert("Indefinido");
		break;
} });

function mostrarHTML (tipo){
	
    $("#cambio").load("app/poll/"+tipo+".html");
     	//$("#pasadores").css('display', 'block');
	};

function mostrarBotones(){
	$("#pasadores").css('display','block');
}

// 
 


/*----------  FIN ESTILO MUJER  ----------*/



$("#cambio" ).on("click",".portada",function() {
  	var id = $(this).attr("id");
    var activo = $(this).attr('data-active');
    alert(activo);

  if (activo == undefined) {
  		activo = $(this).attr('data-active', 'true');
	  	alert(id); 
	  
		var idPadre = $(this).parents("span:first").attr("data-name");
		alert("ID PADRE: "+idPadre);
		$(this).parents("span:first").css('background', '#C6E7F6');
		var Arrseleccion = positivo.seleccionadas; conReg = positivo.seleccionadas[idPadre];

			if(conReg != idPadre)
				{Arrseleccion.push(idPadre);}
				alert(positivo.seleccionadas);
			}else if(activo == "true"){
				alert("deseleccionar");
				activo = $(this).removeAttr('data-active');
				$(this).parents("span:first").css('background', '#fff');
				idPadre = $(this).parents("span:first").attr("data-name");
				alert("item eliminado: "+idPadre);

				var removeItem = idPadre;

				positivo.seleccionadas = jQuery.grep(positivo.seleccionadas, function(value) {
				return value != removeItem;
				});
				

			} else{alert("nada pasa")};

 
});

$("#btn-siguiente").click(function() {

});




