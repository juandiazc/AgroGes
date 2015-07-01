//Saltos Especiales
function SaltosEspeciales(campo_j)
{
 campo_j = "#"+campo_j;
 if ($(campo_j).attr('id')=='txt_F1_S1_P131')
    {
            $('#ddl_F1_S1_P135').focus();
            return false;
    }
    if ($(campo_j).attr('id')=='txt_F1_S1_P136')
    {
            $('#txt_F1_S1_P138').focus();
            return false;
    }
 if ($(campo_j).attr('id')=='txt_F1_S1_P143')
    {
            $('#txt_F1_S1_P144').focus();
            return false;
    }
    if ($(campo_j).attr('id')=='txt_F1_S1_P149')
    {
            $('#ddl_F1_S1_P150').focus();
            return false;
    }
    if ($(campo_j).attr('id')=='ddl_F1_S1_P150')
    {
            $('#ddl_F1_S1_P151').focus();
            return false;
    }
    if ($(campo_j).attr('id')=='ddl_F1_S1_P151')
    {
            $('#txt_F1_S1_P152').focus();
            return false;
    }
    if ($(campo_j).attr('id')=='txt_F1_S1_P152_E')
    {
            $('#ddl_F1_S1_P153').focus();
            return false;
    }
   return true 
}
//Funcion Limpiar Campos
function limpiaCampos()
{
$.each($('input'),function(i,v){
        campo_j = "#"+$(this).attr('id');
        $(campo_j).css('border','1px solid #C0C0C0');
    });
}
function cargarMiles()
{
//$.each($('input'),function(i,v){
//        campo_j = "#"+$(this).attr('id');
//        for (i = 0 ; i < camposMiles.length ; i++ ){
//            aux = camposMiles[i].length;
//            if ( ($(this).attr('id')) == camposMiles[i] ){
//                add_miles($(this).attr('id'));
//            }
//        }

//    });
            for (i = 0 ; i < camposMiles.length ; i++ ){
            aux = camposMiles[i];

//            if ( ($(this).attr('id')) == camposDecimal[i] ){
                add_miles(aux);
//            }
        }

}
function cargarDecimales()
{
//$.each($('input'),function(i,v){
//        campo_j = "#"+$(this).attr('id');
//        if ($(campo_j).val() == NaN || $(campo_j).val() == "" || $(campo_j).val() == undefined)
//        {
//        $(campo_j).attr("value","0,00");
//        }
//        else
//        {
        for (i = 0 ; i < camposDecimal.length ; i++ ){
            aux = camposDecimal[i];

//            if ( ($(this).attr('id')) == camposDecimal[i] ){
                add_miles_decimal(aux);
//            }
        }
//        }
//    });
}
//funcion elimina puntos
function eliminar_decimales(valor){
    if (valor == NaN || valor == "" || valor == undefined)
        return 0;
    valor = valor.replace('.','');
    valor = valor.replace('.','');
    valor = valor.replace('.','');
    valor = valor.replace(',','.');
    return parseFloat(valor);
}
// agrega separador de miles
function add_miles(campo){
    campo = "#"+campo;
    guion="";
    if ($(campo).val().length > 0){
        numero = $(campo).val();
        negativo = numero.substring(0,1);
        
        if (negativo=="-")
        {
        guion = negativo;
        numero = numero.substring(1,numero.length);
        }
        numero = numero.replace(".","");
        numero = numero.replace(".","");
        numero = numero.replace(".","");
        entero = parseInt(numero);
        numero = "";
        while( (parseInt(entero / 1000)) > 0 ){
            aux = entero +"";
            aux = aux.substring(aux.length-3,aux.length)
            numero = "."+aux+""+numero;
            entero=parseInt(entero/1000);
        }
        numero = guion + entero +""+ numero+"";
        $(campo).attr("value",numero);
    }
    else 
    {
            $(campo).attr("value",0);

    }
}
function eliminar_miles(valor){
    if (valor == NaN || valor == "" || valor == undefined)
        return 0;
    valor = valor.replace('.','');
    valor = valor.replace('.','');
    valor = valor.replace('.','');
    return parseInt(valor);
}
function eliminar_numeros(letra)
{
var RegExpPattern = /[^0-9]/;
    if (    !String.fromCharCode(letra).match(RegExpPattern)   ){
                return true;
            }
    else{
          return false;
        }
}
function eliminar_caracteres(letra)
{
    if (letra!="0" && letra!="1" && letra!="2" && letra!="3" && letra!="4" && letra!="5" && letra!="6" && letra!="7" && letra!="8" && letra!="9"){
          return true;
        }
    else{
          return false;
        }
}
//agrege funcion formatear numero miles
function formatearnumero(valor)
{

valor = "#"+valor;
numero = $(valor).val();
 if (numero == NaN || numero == "" || numero == undefined)
        return 0;
    numero = numero.replace('.','');
    numero = numero.replace('.','');
    numero = numero.replace('.','');
    $(valor).attr("value",numero);
}

function eliminar_caracteresmenosguion(letra)
{
    if (letra!="0" && letra!="1" && letra!="2" && letra!="3" && letra!="4" && letra!="5" && letra!="6" && letra!="7" && letra!="8" && letra!="9" && letra!="-"){
          return true;
        }
    else{
          return false;
        }
}
function add_miles_decimal(campo){
    campo = "#"+campo;
    if ($(campo).val().length > 0){
        numero = $(campo).val();
        numero = numero.replace(".","");
        numero = numero.replace(".","");
        numero = numero.replace(".","");
        numero = numero.replace(",",".");
        entero = parseInt(numero);
        decimales = Math.round((parseFloat(numero)-entero)*100);
        if ( decimales == 0 )
            decimales =",00";
        else{
            if (decimales < 10 ){
                decimales =",0"+decimales;
            }else
                decimales =","+decimales;
        }
        numero = "";
        while( (parseInt(entero / 1000)) > 0 ){
            aux = entero +"";
            aux = aux.substring(aux.length-3,aux.length)
            numero = "."+aux+""+numero;
            entero=parseInt(entero/1000);
        }
        numero = entero +""+ numero+""+decimales;
        $(campo).attr("value",numero);
    }
    else
    {
        $(campo).attr("value","0,00");    
    }
}
$(document).ready(function(){
    camposMiles.sort();
    camposDecimal.sort();
    cargarMiles();
    cargarDecimales();
    flag = false;
    flag_2 = false;
    no_corren = false;
    $('input').live("keypress", function(e) 
	{
			//AVANZA CON ENTER
            if (e.keyCode == 13) {
                flag = true;
                if(     !no_corren    ){
                    $(this).attr('value',$(this).val().toUpperCase());
                    if ( $(this).attr('id')=='txt_F1_S2_P2098' ||  $(this).attr('id')=='txt_F1_S3_P312' ||
                        $(this).attr('id')=='txt_F1_S4_P438' ||  $(this).attr('id')=='txt_F1_S6_P615' ||
                        $(this).attr('id')=='txt_F1_S7_PObs' ||  $(this).attr('id')=='txt_F2_S2_P2084' ||
                        $(this).attr('id')=='txt_F2_S3_P322' ||  $(this).attr('id')=='txt_F2_S4_P438' ||
                        $(this).attr('id')=='txt_F2_S6_P624' ||  $(this).attr('id')=='txt_F2_S7_PObs' ||
                        $(this).attr('id')=='txt_F3_S1_P50_8' ||  $(this).attr('id')=='txt_F4_S1_P47_9' ||
                        $(this).attr('id')=='txt_F6_S6_PObs')
                        {
                        $('#Btn_Siguiente').focus();
                        return false;
                        }
                        else
                        {
                            if ( $(this).attr('id')=='Btn_Siguiente' )
                            {
                            return true;
                            }
                            else
                            {
                                if (    SaltosEspeciales($(this).attr('id'))    ){
                                var inputs = $(this).parents("form").eq(0).find(":input:visible");
                                var idx = inputs.index(this);
                                if (inputs[idx+1].disabled==true)
                                    idx++;
                                if (idx == inputs.length - 1) {
                                    inputs[0].select();
                                } else {
                                    inputs[idx + 1].focus();
                                    //inputs[idx + 1].select();
                                }
                                return false;
                                }else{ 
                        return false;
                    }
                            }    
                        }
                }
            }else
			//VALIDA CAMPOS DECIMALES SI INGRESA COMA O PUNTO
            if (e.which == 46 || e.which == 44){
                for (i = 0 ; i < camposDecimal.length ; i++ ){
                    aux = camposDecimal[i].length;
                    if (($(this).attr('id')).substring(0,aux) == camposDecimal[i]){
                        valor = $(this).val().substring(0,$(this).val().length)+",";
                        $(this).attr('value',valor);
                        return false;
                    }
                }
            }
			//VALIDA SI SI CARACTER INGRESADO CORRESPONDE AL FORMATO DEL TEXTO
            if (e.which!=0 && e.which!=8)
            {
				if ($(this).attr('id')=='txt_F1_S4_P437' || $(this).attr('id')=='txt_F1_S4_P438'|| 
					$(this).attr('id')=='txt_F2_S4_P437' || $(this).attr('id')=='txt_F2_S4_P438')
					{
					  if(eliminar_caracteresmenosguion(String.fromCharCode(e.which)))
					   {
					   cont=0;
								for (i = 0 ; i < camposletra.length ; i++ )
								{
									if (camposletra[i]==$(this).attr('id'))
									cont++;
								}
								if (cont==0)
								{
									valor = $(this).val().substring(0,$(this).val().length);
						
									$(this).attr('value',valor);
									return false;
								}
					   }
					}  
				else
					{
					cont=0;
						for (i = 0 ; i < camposletra.length ; i++ )
						{
							if (camposletra[i]==$(this).attr('id'))
							cont++;
						}
						if (cont==0)
						{
						cont2=0;
						var si=true;
							for (i = 0 ; i <campoSoloTexto.length ; i++ )
							{
								if (campoSoloTexto[i]==$(this).attr('id'))
								cont2++;
								si=false;
								
							}
							if (cont2==0)
							{
								if(eliminar_caracteres(String.fromCharCode(e.which)))
									{
									valor = $(this).val().substring(0,$(this).val().length);
									$(this).attr('value',valor);
									return false;
									}
							}
							else
							{
								if (si==false)
								{
								 if(eliminar_caracteres(String.fromCharCode(e.which)))
										{
										return true;
										}
										else
										{
										valor = $(this).val().substring(0,$(this).val().length);
										$(this).attr('value',valor);
										return false;

										}
								}	    
							}
							
						}

					}
			}
    });

    $('select').live("keypress", function(e) {
			//AVANZA CON ENTER
            if (e.keyCode == 13) {
                flag = true;
                if(     !no_corren    ){
                    $(this).attr('value',$(this).val().toUpperCase());
                    if (    SaltosEspeciales($(this).attr('id'))    ){
                        var inputs = $(this).parents("form").eq(0).find(":input:visible");
                        var idx = inputs.index(this);
                        if (inputs[idx+1].disabled==true)
                            idx++;
                        if (idx == inputs.length - 1) {
                            inputs[0].select();
                        } else {
                            inputs[idx + 1].focus();
                            //inputs[idx + 1].select();
                        }
                        return false;
                        }else{ 
                        return false;
                    }

                }
            }
            
    });	
    $('textarea').live("keypress", function(e) {
			//AVANZA CON ENTER
			if (e.keyCode == 13) {
                flag = true;
                if(     !no_corren    ){
                    $(this).attr('value',$(this).val().toUpperCase());
                       if ( $(this).attr('id')=='txt_F1_S7_PObs' || $(this).attr('id')=='txt_F2_S7_PObs' ||
                       $(this).attr('id')=='txt_F6_S6_PObs')
                        {
                        $('#Btn_Siguiente').focus();
                        return false;
                        }
                        else
                        {
                        var inputs = $(this).parents("form").eq(0).find(":input:visible");
                        var idx = inputs.index(this);
                        if (inputs[idx+1].disabled==true)
                            idx++;
                        if (idx == inputs.length - 1) {
                            inputs[0].select();
                        } else {
                            inputs[idx + 1].focus();
                            //inputs[idx + 1].select();
                        }
                        return false;
                        }
                }
            }
    });    
//    $('input').focusout(function(e){
//        if (!flag && !flag_2 && !no_corren){
//            validar ($(this).attr('id'));
//        }
//        flag = false;
//        flag_2 = false;
//    });
    //Agrege funcion entrar al foco de caja de texto
 
    $('input').focus(function(e){
    for (i = 0 ; i < camposMiles.length ; i++ ){
				aux = camposMiles[i].length;
				if ( ($(this).attr('id')) == camposMiles[i] ){
                formatearnumero($(this).attr('id'));				
                }
			}
		$(this).select();
    });
    $('input').live("blur",function(){
		for (i = 0 ; i < camposMiles.length ; i++ ){
				aux = camposMiles[i].length;
				if ( ($(this).attr('id')) == camposMiles[i] ){
					add_miles($(this).attr('id'));
				}
			}
        for (i = 0 ; i < camposDecimal.length ; i++ ){
				aux = camposDecimal[i].length;
				if ( ($(this).attr('id')) == camposDecimal[i] ){
                add_miles_decimal($(this).attr('id'));
				}
			}
    });
        //Validar Todo Boton Siguiente
    $("#Btn_Siguiente").click(function(){
        no_corren = true;
        limpiaCampos();
        respuesta = validar_todo();
        advertencia = respuesta[0];
        error = respuesta[1];
        foco = respuesta[2];
        mensaje= respuesta[3];
        if (    error == 0  )
            if (    advertencia == 0    )
                temp = true;
            else
                if (confirm(" Existen "+advertencia+" advertencias, son: \n"+mensaje+" desea continuar?."))
                    temp = true;
                else{
                    $(foco).focus();
                    temp = false;
                }
        else
            if (    advertencia == 0    ){
                alert(" Existen "+error+" errores, son: \n" + mensaje);
                $(foco).focus();
                temp = false;
            }else{
                $(foco).focus();
                alert(" Existen "+error+" errores y "+advertencia+" advertencias, son: \n" + mensaje);
                temp = false;
            }
        no_corren = false;
        return temp;
    });
        //Validar Todo Boton Volver
//    $("#Btn_Volver").click(function(){
//    no_corren = true;
//       if (confirm(" Desea Grabar antes de Salir?."))
//       {
//                    temp = true;
//                    }
//                else{
//                   //$(this).focus
//                    //temp = false;
//                    temp = false;
//                    $(location).attr('href','www.google.cl');
//                    
//                    //$(location).attr('href','../FrmAsignacion.aspx');
//                    //temp = false;
//                }
//        no_corren = false;
//        return temp;
//    });
    //Validar Todo Boton Anterior
	$("#Btn_Anterior").click(function(){
        no_corren = true;
        limpiaCampos();
        respuesta = validar_todo();
        advertencia = respuesta[0];
        error = respuesta[1];
        foco = respuesta[2];
        mensaje= respuesta[3];
        if (    error == 0  )
            if (    advertencia == 0    )
                temp = true;
            else
                if (confirm(" Existen "+advertencia+" advertencias, son: \n"+mensaje+" desea continuar?."))
                    temp = true;
                else{
                    $(foco).focus();
                    temp = false;
                }
        else
            if (    advertencia == 0    ){
                alert(" Existen "+error+" errores, son: \n" + mensaje);
                $(foco).focus();
                temp = false;
            }else{
                $(foco).focus();
                alert(" Existen "+error+" errores y "+advertencia+" advertencias, son: \n" + mensaje);
                temp = false;
            }
        no_corren = false;
        return temp;
    });
});
