/**
*Revisión: 09092015
*Carlos Morán
*https://developers.facebook.com/docs/graph-api/reference/user
*/




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
	console.log("seleccionaste mujer");
	mostrarHTML("female/seleccionar_tipo");
});

$('#cambio').on("click","#male",function(event) {
	console.log("seleccionaste hombre")
});

/*---------- FIN HOMBRE Y MUJER  ----------*/


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

  if (activo == undefined) {
  		activo = $(this).attr('data-active', 'true');
	  	console.log(id); 	  
		var idPadre = $(this).parents("span:first").attr("data-name");
		console.log("guardado: "+idPadre);
		$(this).parents("span:first").css('background', '#C6E7F6');
		var Arrseleccion = positivo.seleccionadas; conReg = positivo.seleccionadas[idPadre];
		rating=$(this).attr('rating');
		mycues=$(this).parents("div:first").parents("div:first").attr('data-pregunta');
		mycues=parseInt(mycues); 
		verificarRating(mycues,rating); 
		nameportada=$(this).parents("span:first").attr('data-name');
		console.log(nameportada);

		console.log("valores identificados: "+key[0]+" - "+key[1]);

		//verificar que coinsida la rating(this) = 1 ó 2 / entre mycues = numero pregunta

			if(conReg != idPadre && rating==undefined)
				{
				Arrseleccion.push(idPadre);
				$(this).attr('rating',key[0]);
				console.log("Incrustado rating: "+key[0])
								
				}
			}

		else if(key[1] == "active"){

					if(activo == "true"){
					console.log("deseleccionar");
					activo = $(this).removeAttr('data-active');
					$(this).removeAttr('rating');
					$(this).parents("span:first").css('background', '#fff');
					idPadre = $(this).parents("span:first").attr("data-name");
					console.log("item eliminado: "+idPadre);

					var removeItem = idPadre;

					positivo.seleccionadas = jQuery.grep(positivo.seleccionadas, function(value) {
					return value != removeItem;
					});

					}else{
					alert("Ya lo has seleecionado anteriormente")
					}





	}
});




/*****  BOTONES ANTERIOR Y SIGUIENTE   *****/


