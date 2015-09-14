/**
*Revisión: 011092015
*Carlos Morán
*https://developers.facebook.com/docs/graph-api/reference/user
*/
var registro = new Object();
var tipo_pregunta = true;
var positive = new Object();
var negative = new Object();
var ubicacion = [0]; //1 last
var usuario = [];
positive.seleccionadas = [];
negative.seleccionadas = [];
var registroJson = "";

var nombre="";
var genero="";
var email ="";
var nacimiento="";
var ubicacion="";


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '406344899565122',
      xfbml      : true,
      version    : 'v2.4'
    });
  };
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


function ingresar_facebook (argument) {

	FB.login(function(response) {
		if (response.authResponse) {
		console.log('Welcome!  Fetching your information.... ');
		FB.api('/me', function(response) {
		console.log('Good to see you, ' + response.name + '.');
		permitir();
		//mostrarHTML("seleccionGenero");
		});
		} else {
		console.log('User cancelled login or did not fully authorize.');
		}
	}, {scope: 'email,user_birthday,user_location'}     );

}


function permitir (argument) {

FB.api('/me', {fields: 'name,gender,email,hometown,birthday,location'}, function(response) {
console.log(response);
console.log("respuesta "+response.location.name);

nombre=response.name;
genero=response.gender;
email =response.email;
nacimiento=response.birthday;
ubicacion=response.location.name;
usuario=[nombre,genero,email,nacimiento,ubicacion];

	if (genero=="male") {
		console.log("Eres hombre");
		mostrarHTML("male/seleccionar_tipo");

	}else{
		console.log("Eres mujer");
		mostrarHTML("female/seleccionar_tipo");
	};

});
}

  function mostrar_mensaje (argument) {
	FB.ui({
		method: 'share_open_graph',
		action_type: 'og.likes',
		action_properties: JSON.stringify({
		object:'https://developers.facebook.com/docs/',
	})
	}, function(response){
	// Debug response (optional)
	console.log(response);
	});
  	
  }






/*----------  COMENZAR TEST  ----------*/

$( "#comienzo-test" ).click(function() {
	ingresar_facebook();
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


$("body").on('click', '.pasadores', function(event) {
btn=$(this).attr("id");
np = contarPreguntas ();




switch (btn){
 	case"atras":
 		if (ubicacion[0]>=1) {
 			ubicacion[0] = ubicacion[0]-1;

 		}else if(ubicacion[0]==0)
 		{	$("#atras").removeAttr("data-slide");
 		}

 		else{console.log("Desactivado");}

 	break;

 	case"adelante":
 	if (ubicacion[0]==0 && ubicacion[0]< np) {
 		$("#atras").attr("data-slide","prev");
 		ubicacion[0] = ubicacion[0]+1;
 	}else if(ubicacion[0]>=0)
		{ubicacion[0] = ubicacion[0]+1;
		$("#atras").attr("data-slide","prev");
		} 

 	break


 	default:console.log("pasadores");
 	break;
 }

});


$("body").on('click', '#finalizar-test', function(event) {


//usuario=[nombre,genero,email,nacimiento,ubicacion];
registro.nombre=nombre
registro.genero=genero;
registro.email=email;
registro.nacimiento=nacimiento;
registro.ubicacion=ubicacion;
registro.positivas= positive.seleccionadas;
registro.negativas= negative.seleccionadas;


console.log("Objeto js creado:  "+registro);


registroJson = JSON.stringify(registro);


$.post('app/server/registro.php', {registro: registroJson},
    function(respuesta) {
        console.log(respuesta);
}).error(
    function(){
        console.log('Error al ejecutar la petición');
    }
);


});



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




