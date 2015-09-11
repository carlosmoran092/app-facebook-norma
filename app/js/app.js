/**
*Revisión: 09092015
*Carlos Morán
*https://developers.facebook.com/docs/graph-api/reference/user
*/

var tipo_pregunta = true;
var positive = new Object();
var negative = new Object();
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




$('#cambio').on("click",".btn-style-male",function(event){
style_female=$(this).attr("data-select");
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
		break;

	case "tipo-4":
		console.log("tipo 4");
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
		break;

	case "tipo-4":
		console.log("tipo 4");
		break;

	default:
		console.log("Indefinido");
		break;
} });

function mostrarHTML (tipo){
	
    $("#cambio").load("app/poll/"+tipo+".html");
     	//$("#pasadores").css('display', 'block');     	
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
		var Arrseleccion = tipoPregunta+".seleccionadas"; //conReg = tipoPregunta.seleccionadas[idPadre];
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
					break;
				case "negative":
					negative.seleccionadas = jQuery.grep(negative.seleccionadas, function(value) {
					return value != removeItem; });
					console.log("eliminado: "+tipoPregunta+" item: "+removeItem);
					$(this).parents("span:first").css('background', '#fff');
					$("[data-name="+removeItem+"]").removeAttr('rating').removeAttr('data-active');
					
					break;
				default:
					console.log('error en elminación');
					break;
			}
		}
		else if(activo != tipoPregunta){
		console.log("Ya lo has seleccionado anteriormente");			
		}



//////////////////////////


	else if(activo == true){
	console.log('else if(activo == true)');
	var valor_pregunta=$(this).parents("span:first").parents("div:first").attr("data-tipo");
	var rating_portada=$(this).attr("rating");
	console.log(valor_pregunta+" "+valor_portada);

		if(tipoPregunta == rating_portada){

		console.log("deseleccionada");
		activo = $(this).removeAttr('data-active');
		$(this).removeAttr('rating');
		$(this).parents("span:first").css('background', '#fff');
		idPadre = $(this).parents("span:first").attr("data-name");
		console.log("item eliminado: "+idPadre);

		var removeItem = idPadre;
			if(tipoPregunta=="positive"){
				var removeItem = idPadre;
				positive.seleccionadas = jQuery.grep(positive.seleccionadas, function(value) {
				return value != removeItem;
				});
			}else{
				var removeItem = idPadre;
				negative.seleccionadas = jQuery.grep(negative.seleccionadas, function(value) {
				return value != removeItem;
				});
			}			
		}
		else if(valor_pregunta != valor_portada){
		alert("Ya lo has seleecionado anteriormente")
		}

		}else{console.log('Invalido');}
});


/*****  BOTONES ANTERIOR Y SIGUIENTE   *****/


