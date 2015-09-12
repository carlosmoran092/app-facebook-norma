/**
*Revisión: 011092015
*Carlos Morán
*https://developers.facebook.com/docs/graph-api/reference/user
*/

var tipo_pregunta = true;
var positive = new Object();
var negative = new Object();
var ubicacion = [1];
positive.seleccionadas = [];
negative.seleccionadas = [];



/*----------  COMENZAR TEST  ----------*/


$("#comienzo-test").on("click",function(event) 
{	  
mostrarHTML("seleccionGenero");
});

/*----------  COMENZAR TEST  ----------*/



/*----------  HOMBRE O MUJER  ----------*/
$('#cambio').on("click","#female",function(event) {
	console.log("seleccionaste mujer");
	mostrarHTML("female/seleccionar_tipo");
});

$('#cambio').on("click","#male",function(event) {
	console.log("seleccionaste hombre");
	mostrarHTML("male/seleccionar_tipo");
});
/*---------- FIN HOMBRE Y MUJER  ----------*/


/*========================================
=     FUNCIÓN PASADOR DE PREGUNTAS    =
=========================================*/

function pasadorPreguntas(npasador){
	var np = contarPreguntas ();

	if(np <= np && np > 0){
		//$("[data-pregunta='"++"']")
		sl = 2;
		var valorboton=(parseInt(npasador));
		return (valorboton);
		 
	}

}

/*
$("body").on('click', '.pasadores', function(event) {
var data_pasador = $(this).attr('data-pasador');
npasador= pasadorPreguntas(data_pasador);

np = contarPreguntas ();
	if(np <= np && ubicacion[0] >= 1 && ubicacion[0] <= np){
		contador = ubicacion[0];
		preg = npasador;
		mostrar = contador+(preg);

		var selector=".pregunta:nth-child("+mostrar+")";

		var quitar=".pregunta:nth-child("+contador+")";

		$(quitar).css('display', 'none');
		console.log('dja de verse :div.pregunta: '+quitar);

		$(selector).attr('style', 'display:block');
		console.log('se muestra :div.pregunta: '+selector);
		ubicacion[0]=mostrar;
		var contador=+npasador;     
	}
	else{
	console.log('No continua');}

});
*/



/*---------- HOMBRES  ----------*/
$('#cambio').on("click",".btn-style-male",function(event){
style_female=$(this).attr("data-select");
$('.carousel').carousel({interval: false,keyboard:false,});
switch(style_female){
	case "tipo-1":
		console.log("tipo 1");		
		mostrarHTML("male/tipo1");		
		mostrarBotones();		
		break;

	case "tipo-2":
		console.log("tipo 2");
		mostrarHTML("male/tipo2");
		mostrarBotones();
	break;

	case "tipo-3":
		console.log("tipo 3");
		mostrarHTML("male/tipo3");
		mostrarBotones();
		break;

	case "tipo-4":
		console.log("tipo 4");
		mostrarHTML("male/tipo4");		
		mostrarBotones();
		break;

	default:
		console.log("Indefinido");
		break;
} });


/*----------  ESTILO MUJER  ----------*/

$('#cambio').on("click",".btn-style-female",function(event){
style_female=$(this).attr("data-select");
switch(style_female){
	case "tipo-1":
		console.log("tipo 1");		
		mostrarHTML("female/tipo1");
		mostrarBotones();		
		break;

	case "tipo-2":
		console.log("tipo 2");
		mostrarHTML("female/tipo2");
		mostrarBotones();
	break;
	case "tipo-3":
		console.log("tipo 3");
		mostrarHTML("female/tipo3");
		mostrarBotones();
	break;
	default:
		console.log("Indefinido");
		break;
} });

function mostrarHTML (tipo){
	
    $("#cambio").load("app/poll/"+tipo+".html");  	
	};

function mostrarBotones(npreguntas){
	$("#pasadores").css('display','inline-block');
	}

function contarPreguntas () {
	return ($("[data-id|='cuestionario']").length);
}



function verificarRating (mycues,rating) {
	if(mycues%2==0 && rating!="undefined"){
			f_rating = "negative";
			f_licence= "active";
			key=[f_rating,f_licence];
			return(key);
		}
		else if(mycues%2 != 0 && rating!="undefined"){
			f_rating  = "positive";
			f_licence = "active";
			key=[f_rating,f_licence];
			return(key);
		}
		else if(mycues%2==0 && rating=="positive"){
			f_rating = "negative";
			f_licence = "disabled";
			key=[f_rating,f_licence];
			return(key);
		}
		else if(mycues%2 != 0 && rating=="negative"){
			f_rating= "positive";
			f_licence= "disabled";
			key=[f_rating,f_licence];
			return(key);
		}
	}

// 

/*----------  FIN ESTILO MUJER  ----------*/

$("#cambio" ).on("click",".portada",function() {
	
  	var id = $(this).attr("id");
    var activo = $(this).attr('data-active');
    console.log(activo);
    var tipoPregunta = $(this).parents("span:first").parents("div:first").attr('data-tipo');
	console.log('Pregunta actual: '+ tipoPregunta );
	var idPadre = $(this).attr("data-name");

  if (activo == undefined) {
  		activo = $(this).attr('data-active', tipoPregunta);
	  	console.log(id); 	  
		
		console.log("guardado: "+idPadre);	
		var Arrseleccion = tipoPregunta+".seleccionadas"; 
		console.log('se ha guardado en: '+Arrseleccion);
		
		mycues=$(this).parents("div:first").parents("div:first").attr('data-pregunta');
		mycues=parseInt(mycues); 
		verificarRating(mycues,activo); 
		nameportada=$(this).attr('data-name');
		console.log("Nombre de la portada: "+nameportada);
		console.log("valores identificados: "+key[0]+" - "+key[1]);
			if(tipoPregunta=="positive"){
				positive.seleccionadas.push(idPadre);
			}else{
				negative.seleccionadas.push(idPadre);
			}		
		$("[data-name="+nameportada+"]").attr('rating',key[0]);
		$("[data-name="+nameportada+"]").attr('data-active',key[0]);
		$(this).parents("span:first").css('background', '#C6E7F6');
		$("[data-name="+nameportada+"]").css('outline','1px solid #0083A9');
		console.log("Incrustado rating: "+key[0])	


	}
	
	// SI HAY COINCIDENCIA ENTRE RESPUES Y PREGUNTA SE PUEDE EDITAR
	
	else if(activo == tipoPregunta){
		console.log("esta por deseleccionar portada "+tipoPregunta);
			var removeItem = idPadre;
			switch(tipoPregunta){
				case "positive":
					positive.seleccionadas = jQuery.grep(positive.seleccionadas, function(value) {
					return value != removeItem; });
					console.log("eliminado: "+tipoPregunta+" item: "+removeItem);
					$(this).parents("span:first").css('background', '#fff');
					$("[data-name="+removeItem+"]").removeAttr('rating').removeAttr('data-active');
					$("[data-name="+nameportada+"]").css('outline','none');
					break;
				case "negative":
					negative.seleccionadas = jQuery.grep(negative.seleccionadas, function(value) {
					return value != removeItem; });
					console.log("eliminado: "+tipoPregunta+" item: "+removeItem);
					$(this).parents("span:first").css('background', '#fff');
					$("[data-name="+removeItem+"]").removeAttr('rating').removeAttr('data-active');
					$("[data-name="+nameportada+"]").css('outline','none');
					break;
				default:
					console.log('error en elminación');
					break;
			}
		}
		else if(activo != tipoPregunta){
		console.log("Ya lo has seleccionado anteriormente");
		$(this).effect( "shake" );			
		}
});




