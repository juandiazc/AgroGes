camposDecimal = [];
camposletra=['txt_F1_S7_PObs','txt_F1_S6_P628_E'];
camposMiles=['txt_F1_S6_P616','txt_F1_S6_P617','txt_F1_S6_P618','txt_F1_S6_P619','txt_F1_S6_P620','txt_F1_S6_P621',
'txt_F1_S6_P622','txt_F1_S6_P623','txt_F1_S6_P624','txt_F1_S6_P625','txt_F1_S6_P626','txt_F1_S6_P627',
'txt_F1_S6_P628','txt_F1_S6_P629','txt_F1_S6_P630','txt_F1_S7_P701','txt_F1_S7_P702','txt_F1_S7_P703',
'txt_F1_S7_P704','txt_F1_S7_P705','txt_F1_S7_P706','txt_F1_S7_P707','txt_F1_S7_P708','txt_F1_S7_P709','txt_F1_S7_P710'];
campoSoloTexto=[];
function validar (campo_j){
    campo_j = "#"+campo_j;
           	//Regla 206
 if ($(campo_j).attr('id')=='txt_F1_S6_P628')
    {
    campo628=$.trim($(campo_j).val());
            if ( eliminar_miles(campo628) > 0 && $.trim($('#txt_F1_S6_P628_E').val()).length == 0 )
            {
                if (perfil == 4)
                    {
                    if(!confirm('Advertencia: No especifica tipo de subvención.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S6_P628_E').focus();
                        $('#txt_F1_S6_P628_E').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S6_P629').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
	                alert("Error: No especifica tipo de subvención.");
                    $('#txt_F1_S6_P628_E').focus();
                    $('#txt_F1_S6_P628_E').select();
                    return false;
                    }
            }  
    }  
    // Regla 207
if ($(campo_j).attr('id')=='txt_F1_S6_P630')
    {
	suma=0
	for (i=16;i<30;i++)
	{
		campo=$.trim($('#txt_F1_S6_P6'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	campo630=$.trim($(campo_j).val());
	 if (suma != eliminar_miles(campo630))
                {
                    if (perfil == 4)
                    {
                    if(!confirm('Advertencia:Total de control otros ingresos de la empresa no cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S6_P616').focus();
                        $('#txt_F1_S6_P616').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S7_P701').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
                    alert("Error: Total de control otros ingresos de la empresa no cuadra.");
                    $('#txt_F1_S6_P616').focus();
                    $('#txt_F1_S6_P616').select();
                    return false;
                    }
                }
    }
// Regla 208
if ($(campo_j).attr('id')=='txt_F1_S6_P630')
    {
	suma=0
	for (i=16;i<31;i++)
	{
		campo=$.trim($('#txt_F1_S6_P6'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                if(!confirm('Advertencia: No informa otros ingresos de la empresa o del establecimiento.\n ¿Desea continuar?')){
                $('#txt_F1_S6_P616').focus();
                $('#txt_F1_S6_P616').select();
                return false;
				}else{
                flag_2 = true;
                $('#txt_F1_S7_P701').focus();
                return false;
            }
                }
    }
    // SECCION VII
    	//Regla 209
 if ($(campo_j).attr('id')=='txt_F1_S7_P709')
    {
    campo701=$.trim($('#txt_F1_S7_P701').val());
    campo703=$.trim($('#txt_F1_S7_P703').val());
    campo705=$.trim($('#txt_F1_S7_P705').val());
    campo707=$.trim($('#txt_F1_S7_P707').val());
    campo709=$.trim($('#txt_F1_S7_P709').val());
   
	suma=eliminar_miles(campo701)+eliminar_miles(campo703)+eliminar_miles(campo705)+eliminar_miles(campo707);

            if ( suma != eliminar_miles(campo709)  )
            {
				if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Total de control existencias valor al principio del ejercicio no cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S7_P701').focus();
                        $('#txt_F1_S7_P701').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S7_P710').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
                    alert("Error: Total de control existencias valor al principio del ejercicio no cuadra.");
                    $('#txt_F1_S7_P701').focus();
                    $('#txt_F1_S7_P701').select();
                    return false;
                    }
            }  

    } 
          	//Regla 210
 if ($(campo_j).attr('id')=='txt_F1_S7_P710')
    {
    campo702=$.trim($('#txt_F1_S7_P702').val());
    campo704=$.trim($('#txt_F1_S7_P704').val());
    campo706=$.trim($('#txt_F1_S7_P706').val());
    campo708=$.trim($('#txt_F1_S7_P708').val());
    campo710=$.trim($('#txt_F1_S7_P710').val());
   
	suma=eliminar_miles(campo702)+eliminar_miles(campo704)+eliminar_miles(campo706)+eliminar_miles(campo708);

            if ( suma != eliminar_miles(campo710)  )
            {
				if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Total de control existencias valor final del ejercicio no cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S7_P702').focus();
                        $('#txt_F1_S7_P702').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S7_PObs').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
                    alert("Error: Total de control existencias valor final del ejercicio no cuadra.");
                    $('#txt_F1_S7_P702').focus();
                    $('#txt_F1_S7_P702').select();
                    return false;
					}
            }  

    }  
                // Regla 211
if ($(campo_j).attr('id')=='txt_F1_S7_P710')
    {
	suma=0
	for (i=1;i<11;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F1_S7_P70'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F1_S7_P7'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: No informa existencias.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S7_P701').focus();
                        $('#txt_F1_S7_P701').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S7_PObs').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
                    alert("Error: No informa existencias.");
                    $('#txt_F1_S7_P701').focus();
                    $('#txt_F1_S7_P701').select();
                    return false;
                    }
                }
    } 
    
      return true;
}
function validar_todo(){
    error = 0;
    advertencia = 0;
    var cont=-1;
    var foco = new Array();
	mensaje="\n";	
    $.each($('input'),function(i,v){
        campo_j = "#"+$(this).attr('id');
            	//Regla 206
 if ($(campo_j).attr('id')=='txt_F1_S6_P628')
    {
    campo628=$.trim($(campo_j).val());
            if ( eliminar_miles(campo628) > 0 && $.trim($('#txt_F1_S6_P628_E').val()).length == 0 )
            {
                if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo P628_E - Advertencia: No especifica tipo de subvención. \n");
			        $('#txt_F1_S6_P628_E').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo P628_E - Error: No especifica tipo de subvención. \n");
	                $('#txt_F1_S6_P628_E').css('border','2px solid red');
			        error++;
			        foco[++cont] = '#txt_F1_S6_P628_E';
			        }
            } 
            //$('#txt_F1_S6_P628_E').css('border','0px solid red'); 
    }  
    // Regla 207
if ($(campo_j).attr('id')=='txt_F1_S6_P630')
    {
	suma=0
	for (i=16;i<30;i++)
	{
		campo=$.trim($('#txt_F1_S6_P6'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	campo630=$.trim($(campo_j).val());
	 if (suma != eliminar_miles(campo630))
                {
                if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 630 - Advertencia: Total de control otros ingresos de la empresa no cuadra. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 630 - Error: Total de control otros ingresos de la empresa no cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
			        }
                }
//                else
//                {
//                $(campo_j).css('border','0px solid black');
//                }
    }
// Regla 208
if ($(campo_j).attr('id')=='txt_F1_S6_P630')
    {
	suma=0
	for (i=16;i<31;i++)
	{
		campo=$.trim($('#txt_F1_S6_P6'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {

                    mensaje=mensaje +("Campo 616 al 630  - Advertencia: No informa otros ingresos de la empresa o del establecimiento. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;

                }
                

    }
    // SECCION VII
    	//Regla 209
 if ($(campo_j).attr('id')=='txt_F1_S7_P709')
    {
    campo701=$.trim($('#txt_F1_S7_P701').val());
    campo703=$.trim($('#txt_F1_S7_P703').val());
    campo705=$.trim($('#txt_F1_S7_P705').val());
    campo707=$.trim($('#txt_F1_S7_P707').val());
    campo709=$.trim($('#txt_F1_S7_P709').val());
   
	suma=eliminar_miles(campo701)+eliminar_miles(campo703)+eliminar_miles(campo705)+eliminar_miles(campo707);

            if ( suma != eliminar_miles(campo709)  )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 709 - Advertencia: Total de control existencias valor al principio del ejercicio no cuadra. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 709  - Error: Total de control existencias valor al principio del ejercicio no cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
			        }
            }  
    } 
          	//Regla 210
 if ($(campo_j).attr('id')=='txt_F1_S7_P710')
    {
    campo702=$.trim($('#txt_F1_S7_P702').val());
    campo704=$.trim($('#txt_F1_S7_P704').val());
    campo706=$.trim($('#txt_F1_S7_P706').val());
    campo708=$.trim($('#txt_F1_S7_P708').val());
    campo710=$.trim($('#txt_F1_S7_P710').val());
   
	suma=eliminar_miles(campo702)+eliminar_miles(campo704)+eliminar_miles(campo706)+eliminar_miles(campo708);

            if ( suma != eliminar_miles(campo710)  )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 710 - Advertencia: Total de control existencias valor final del ejercicio no cuadra. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 710 - Error: Total de control existencias valor final del ejercicio no cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
			        }
            }  

    }  
                // Regla 211
if ($(campo_j).attr('id')=='txt_F1_S7_P710')
    {
	suma=0
	for (i=1;i<11;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F1_S7_P70'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F1_S7_P7'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                    if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 701 al 710 - Advertencia: No informa existencias. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 701 al 710 - Error: No informa existencias. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = '#txt_F1_S7_P701';
			        }
                }
    }        
        
         });
    return [advertencia,error,foco[0],mensaje];
}


