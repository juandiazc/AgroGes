camposDecimal = ['txt_F2_S6_P602','txt_F2_S6_P603','txt_F2_S6_P604','txt_F2_S6_P606','txt_F2_S6_P607',
'txt_F2_S6_P609','txt_F2_S6_P611','txt_F2_S6_P613','txt_F2_S6_P615','txt_F2_S6_P617',
'txt_F2_S6_P620','txt_F2_S6_P622'];
camposletra=['txt_F2_S5_P5047_E','txt_F2_S6_P607_E','txt_F2_S6_P618'];
camposMiles=['txt_F2_S5_P5001','txt_F2_S5_P5002','txt_F2_S5_P5003','txt_F2_S5_P5004','txt_F2_S5_P5005','txt_F2_S5_P5006',
'txt_F2_S5_P5007','txt_F2_S5_P5008','txt_F2_S5_P5009','txt_F2_S5_P5010','txt_F2_S5_P5011','txt_F2_S5_P5012',
'txt_F2_S5_P5013','txt_F2_S5_P5014','txt_F2_S5_P5015','txt_F2_S5_P5016','txt_F2_S5_P5017','txt_F2_S5_P5018',
'txt_F2_S5_P5019','txt_F2_S5_P5020','txt_F2_S5_P5021','txt_F2_S5_P5022','txt_F2_S5_P5023','txt_F2_S5_P5024',
'txt_F2_S5_P5025','txt_F2_S5_P5026','txt_F2_S5_P5027','txt_F2_S5_P5028','txt_F2_S5_P5029','txt_F2_S5_P5030',
'txt_F2_S5_P5031','txt_F2_S5_P5032','txt_F2_S5_P5033','txt_F2_S5_P5034','txt_F2_S5_P5035','txt_F2_S5_P5036',
'txt_F2_S5_P5037','txt_F2_S5_P5038','txt_F2_S5_P5039','txt_F2_S5_P5040','txt_F2_S5_P5041','txt_F2_S5_P5042',
'txt_F2_S5_P5043','txt_F2_S5_P5044','txt_F2_S5_P5045','txt_F2_S5_P5046','txt_F2_S5_P5047','txt_F2_S5_P5048',
'txt_F2_S5_P5049','txt_F2_S5_P5050','txt_F2_S5_P5051','txt_F2_S5_P5052','txt_F2_S5_P5053','txt_F2_S5_P5054',
'txt_F2_S5_P5055','txt_F2_S5_P5056','txt_F2_S5_P5057','txt_F2_S5_P5058','txt_F2_S5_P5059','txt_F2_S5_P5060',
'txt_F2_S5_P5061','txt_F2_S5_P5062','txt_F2_S5_P5063','txt_F2_S5_P5064','txt_F2_S5_P5065','txt_F2_S5_P5066',
'txt_F2_S5_P5067','txt_F2_S5_P5068','txt_F2_S5_P5069','txt_F2_S5_P5070','txt_F2_S5_P5071','txt_F2_S5_P5072',
'txt_F2_S5_P5073','txt_F2_S5_P5074','txt_F2_S5_P5075','txt_F2_S5_P5076','txt_F2_S5_P5077','txt_F2_S5_P5078',
'txt_F2_S5_P5079','txt_F2_S5_P5080','txt_F2_S5_P5081','txt_F2_S5_P5082','txt_F2_S5_P5083','txt_F2_S5_P5084',
'txt_F2_S5_P5085','txt_F2_S5_P5086','txt_F2_S5_P5087','txt_F2_S6_P601','txt_F2_S6_P605','txt_F2_S6_P608',
'txt_F2_S6_P610','txt_F2_S6_P612','txt_F2_S6_P614','txt_F2_S6_P616','txt_F2_S6_P619','txt_F2_S6_P621',
'txt_F2_S6_P623','txt_F2_S6_P624'];
campoSoloTexto=[];
function validar (campo_j){
    campo_j = "#"+campo_j;
    // Regla 156
if ($(campo_j).attr('id')=='txt_F2_S5_P5058')
    {
	suma=0
	for (i=47;i<59;i++)
	{
			campo=$.trim($('#txt_F2_S5_P50'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			suma=eliminar_miles(campo)+suma;
    } 
	 if (suma > 0 && $.trim($('#txt_F2_S5_P5047_E').val()).length == 0)
                {
				if(!confirm('Advertencia: No especifica otros activos fijos.\n ¿Desea continuar?')){
                $('#txt_F2_S5_P5047_E').focus();
                $('#txt_F2_S5_P5047_E').select();
                return false;
				}else{
                flag_2 = true;
                $('#txt_F2_S5_P5059').focus();
                return false;
            }  
                }
    }
       	//Regla 157  
 if ($(campo_j).attr('id')=='txt_F2_S5_P5076')
    {
    campo5001=$.trim($('#txt_F2_S5_P5001').val());
    campo5011=$.trim($('#txt_F2_S5_P5011').val());
    campo5023=$.trim($('#txt_F2_S5_P5023').val());
    campo5035=$.trim($('#txt_F2_S5_P5035').val());
    campo5047=$.trim($('#txt_F2_S5_P5047').val());
    campo5059=$.trim($('#txt_F2_S5_P5059').val());
    campo5071=$.trim($('#txt_F2_S5_P5071').val());
    campo5076=$.trim($('#txt_F2_S5_P5076').val());
	suma=eliminar_miles(campo5001)+eliminar_miles(campo5011)+eliminar_miles(campo5023)+eliminar_miles(campo5035)+eliminar_miles(campo5047)+eliminar_miles(campo5059)+eliminar_miles(campo5071);

            if ( suma != eliminar_miles(campo5076)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control valor neto inicial del ejercicio no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S5_P5001').focus();
						$('#txt_F2_S5_P5001').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S5_P5077').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total control valor neto inicial del ejercicio no cuadra.");
                    $('#txt_F2_S5_P5001').focus();
                    $('#txt_F2_S5_P5001').select();
                    return false;
					}
            }  

    }  
     	//Regla 158
 if ($(campo_j).attr('id')=='txt_F2_S5_P5077')
    {
    campo5002=$.trim($('#txt_F2_S5_P5002').val());
    campo5012=$.trim($('#txt_F2_S5_P5012').val());
    campo5024=$.trim($('#txt_F2_S5_P5024').val());
    campo5036=$.trim($('#txt_F2_S5_P5036').val());
    campo5048=$.trim($('#txt_F2_S5_P5048').val());
    campo5060=$.trim($('#txt_F2_S5_P5060').val());
   
    campo5077=$.trim($('#txt_F2_S5_P5077').val());
	suma=eliminar_miles(campo5002)+eliminar_miles(campo5012)+eliminar_miles(campo5024)+eliminar_miles(campo5036)+eliminar_miles(campo5048)+eliminar_miles(campo5060);

            if ( suma != eliminar_miles(campo5077)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control compra de bienes nuevos no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S5_P5002').focus();
						$('#txt_F2_S5_P5002').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S5_P5078').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total control compra de bienes nuevos no cuadra.");
                    $('#txt_F2_S5_P5002').focus();
                    $('#txt_F2_S5_P5002').select();
                    return false;
					}	
            }  

    }  
      	//Regla 159
 if ($(campo_j).attr('id')=='txt_F2_S5_P5078')
    {
    campo5003=$.trim($('#txt_F2_S5_P5003').val());
    campo5013=$.trim($('#txt_F2_S5_P5013').val());
    campo5025=$.trim($('#txt_F2_S5_P5025').val());
    campo5037=$.trim($('#txt_F2_S5_P5037').val());
    campo5049=$.trim($('#txt_F2_S5_P5049').val());
    campo5061=$.trim($('#txt_F2_S5_P5061').val());
   
    campo5078=$.trim($('#txt_F2_S5_P5078').val());
	suma=eliminar_miles(campo5003)+eliminar_miles(campo5013)+eliminar_miles(campo5025)+eliminar_miles(campo5037)+eliminar_miles(campo5049)+eliminar_miles(campo5061);

            if ( suma != eliminar_miles(campo5078)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control compra de bienes usados no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S5_P5003').focus();
						$('#txt_F2_S5_P5003').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S5_P5079').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total control compra de bienes usados no cuadra.");
                    $('#txt_F2_S5_P5003').focus();
                    $('#txt_F2_S5_P5003').select();
                    return false;
					}	
            }  

    }  
      	//Regla 160
 if ($(campo_j).attr('id')=='txt_F2_S5_P5079')
    {
    campo5004=$.trim($('#txt_F2_S5_P5004').val());
    campo5014=$.trim($('#txt_F2_S5_P5014').val());
    campo5026=$.trim($('#txt_F2_S5_P5026').val());
    campo5038=$.trim($('#txt_F2_S5_P5038').val());
    campo5050=$.trim($('#txt_F2_S5_P5050').val());
    campo5062=$.trim($('#txt_F2_S5_P5062').val());
   
    campo5079=$.trim($('#txt_F2_S5_P5079').val());
	suma=eliminar_miles(campo5004)+eliminar_miles(campo5014)+eliminar_miles(campo5026)+eliminar_miles(campo5038)+eliminar_miles(campo5050)+eliminar_miles(campo5062);

            if ( suma != eliminar_miles(campo5079)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control reformas y mejoras efectuadas por terceros no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S5_P5004').focus();
						$('#txt_F2_S5_P5004').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S5_P5080').focus();
						return false;
						}    
					}
					else 
					{	
                    alert("Error: Total control reformas y mejoras efectuadas por terceros no cuadra.");
                    $('#txt_F2_S5_P5004').focus();
                    $('#txt_F2_S5_P5004').select();
                    return false;
					}
            }  

    }  
      	//Regla 161
 if ($(campo_j).attr('id')=='txt_F2_S5_P5080')
    {
    campo5005=$.trim($('#txt_F2_S5_P5005').val());
    campo5015=$.trim($('#txt_F2_S5_P5015').val());
    campo5027=$.trim($('#txt_F2_S5_P5027').val());
    campo5039=$.trim($('#txt_F2_S5_P5039').val());
    campo5051=$.trim($('#txt_F2_S5_P5051').val());
    campo5063=$.trim($('#txt_F2_S5_P5063').val());
   
    campo5080=$.trim($('#txt_F2_S5_P5080').val());
	suma=eliminar_miles(campo5005)+eliminar_miles(campo5015)+eliminar_miles(campo5027)+eliminar_miles(campo5039)+eliminar_miles(campo5051)+eliminar_miles(campo5063);

            if ( suma != eliminar_miles(campo5080)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control reformas y mejoras efectuadas por trabajadores del mismo establecimiento no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S5_P5005').focus();
						$('#txt_F2_S5_P5005').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S5_P5081').focus();
						return false;
						}    
					}
					else 
					{	
                    alert("Error: Total control reformas y mejoras efectuadas por trabajadores del mismo establecimiento no cuadra.");
                    $('#txt_F2_S5_P5005').focus();
                    $('#txt_F2_S5_P5005').select();
                    return false;
					}
            }  

    }  
      	//Regla 162
 if ($(campo_j).attr('id')=='txt_F2_S5_P5081')
    {
    campo5006=$.trim($('#txt_F2_S5_P5006').val());
    campo5016=$.trim($('#txt_F2_S5_P5016').val());
    campo5028=$.trim($('#txt_F2_S5_P5028').val());
    campo5040=$.trim($('#txt_F2_S5_P5040').val());
    campo5052=$.trim($('#txt_F2_S5_P5052').val());
    campo5064=$.trim($('#txt_F2_S5_P5064').val());
   
    campo5081=$.trim($('#txt_F2_S5_P5081').val());
	suma=eliminar_miles(campo5006)+eliminar_miles(campo5016)+eliminar_miles(campo5028)+eliminar_miles(campo5040)+eliminar_miles(campo5052)+eliminar_miles(campo5064);

            if ( suma != eliminar_miles(campo5081)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control valor de obras en curso no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S5_P5006').focus();
						$('#txt_F2_S5_P5006').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S5_P5082').focus();
						return false;
						}    
					}
					else 
					{	
                    alert("Error: Total control valor de obras en curso no cuadra.");
                    $('#txt_F2_S5_P5006').focus();
                    $('#txt_F2_S5_P5006').select();
                    return false;
					}
            }  

    }  
      	//Regla 163
 if ($(campo_j).attr('id')=='txt_F2_S5_P5082')
    {
    campo5007=$.trim($('#txt_F2_S5_P5007').val());
    campo5017=$.trim($('#txt_F2_S5_P5017').val());
    campo5029=$.trim($('#txt_F2_S5_P5029').val());
    campo5041=$.trim($('#txt_F2_S5_P5041').val());
    campo5053=$.trim($('#txt_F2_S5_P5053').val());
    campo5065=$.trim($('#txt_F2_S5_P5065').val());
   
    campo5082=$.trim($('#txt_F2_S5_P5082').val());
	suma=eliminar_miles(campo5007)+eliminar_miles(campo5017)+eliminar_miles(campo5029)+eliminar_miles(campo5041)+eliminar_miles(campo5053)+eliminar_miles(campo5065);

            if ( suma != eliminar_miles(campo5082)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control ventas no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S5_P5007').focus();
						$('#txt_F2_S5_P5007').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S5_P5083').focus();
						return false;
						}    
					}
					else 
					{	
                    alert("Error: Total control ventas no cuadra");
                    $('#txt_F2_S5_P5007').focus();
                    $('#txt_F2_S5_P5007').select();
                    return false;
					}
            }  

    }  
      	//Regla 164
 if ($(campo_j).attr('id')=='txt_F2_S5_P5083')
    {
    campo5008=$.trim($('#txt_F2_S5_P5008').val());
    campo5018=$.trim($('#txt_F2_S5_P5018').val());
    campo5030=$.trim($('#txt_F2_S5_P5030').val());
    campo5042=$.trim($('#txt_F2_S5_P5042').val());
    campo5054=$.trim($('#txt_F2_S5_P5054').val());
    campo5066=$.trim($('#txt_F2_S5_P5066').val());
   
    campo5083=$.trim($('#txt_F2_S5_P5083').val());
	suma=eliminar_miles(campo5008)+eliminar_miles(campo5018)+eliminar_miles(campo5030)+eliminar_miles(campo5042)+eliminar_miles(campo5054)+eliminar_miles(campo5066);

            if ( suma != eliminar_miles(campo5083)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control retiros no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S5_P5008').focus();
						$('#txt_F2_S5_P5008').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S5_P5084').focus();
						return false;
						}    
					}
					else 
					{	
                    alert("Error: Total control retiros no cuadra.");
                    $('#txt_F2_S5_P5008').focus();
                    $('#txt_F2_S5_P5008').select();
                    return false;
					}
            }  

    }  
      	//Regla 165
 if ($(campo_j).attr('id')=='txt_F2_S5_P5084')
    {
    campo5009=$.trim($('#txt_F2_S5_P5009').val());
    campo5019=$.trim($('#txt_F2_S5_P5019').val());
    campo5031=$.trim($('#txt_F2_S5_P5031').val());
    campo5043=$.trim($('#txt_F2_S5_P5043').val());
    campo5055=$.trim($('#txt_F2_S5_P5055').val());
    campo5067=$.trim($('#txt_F2_S5_P5067').val());
	campo5072=$.trim($('#txt_F2_S5_P5072').val());
    campo5084=$.trim($('#txt_F2_S5_P5084').val());
	suma=eliminar_miles(campo5009)+eliminar_miles(campo5019)+eliminar_miles(campo5031)+eliminar_miles(campo5043)+eliminar_miles(campo5055)+eliminar_miles(campo5067)+eliminar_miles(campo5072);

            if ( suma != eliminar_miles(campo5084)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control correción monetaria no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S5_P5009').focus();
						$('#txt_F2_S5_P5009').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S5_P5085').focus();
						return false;
						}    
					}
					else 
					{	
                    alert("Error: Total control correción monetaria no cuadra.");
                    $('#txt_F2_S5_P5009').focus();
                    $('#txt_F2_S5_P5009').select();
                    return false;
					}
            }  

    }  
      	//Regla 166
 if ($(campo_j).attr('id')=='txt_F2_S5_P5085')
    {
    campo5010=$.trim($('#txt_F2_S5_P5010').val());
    campo5020=$.trim($('#txt_F2_S5_P5020').val());
    campo5032=$.trim($('#txt_F2_S5_P5032').val());
    campo5044=$.trim($('#txt_F2_S5_P5044').val());
    campo5056=$.trim($('#txt_F2_S5_P5056').val());
    campo5068=$.trim($('#txt_F2_S5_P5068').val());
	campo5073=$.trim($('#txt_F2_S5_P5073').val());
    campo5085=$.trim($('#txt_F2_S5_P5085').val());
	suma=eliminar_miles(campo5010)+eliminar_miles(campo5020)+eliminar_miles(campo5032)+eliminar_miles(campo5044)+eliminar_miles(campo5056)+eliminar_miles(campo5068)+eliminar_miles(campo5073);

            if ( suma != eliminar_miles(campo5085)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control valor neto final del ejercicio no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S5_P5010').focus();
						$('#txt_F2_S5_P5010').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S5_P5086').focus();
						return false;
						}    
					}
					else 
					{	
				    alert("Error: Total control valor neto final del ejercicio no cuadra.");
                    $('#txt_F2_S5_P5010').focus();
                    $('#txt_F2_S5_P5010').select();
                    return false;
					}
            }  

    }  
      	//Regla 167
 if ($(campo_j).attr('id')=='txt_F2_S5_P5086')
    {
    campo5021=$.trim($('#txt_F2_S5_P5021').val());
    campo5033=$.trim($('#txt_F2_S5_P5033').val());
    campo5045=$.trim($('#txt_F2_S5_P5045').val());
    campo5057=$.trim($('#txt_F2_S5_P5057').val());
    campo5069=$.trim($('#txt_F2_S5_P5069').val());
	campo5074=$.trim($('#txt_F2_S5_P5074').val());
    campo5086=$.trim($('#txt_F2_S5_P5086').val());
	suma=eliminar_miles(campo5021)+eliminar_miles(campo5033)+eliminar_miles(campo5045)+eliminar_miles(campo5057)+eliminar_miles(campo5069)+eliminar_miles(campo5074);

            if ( suma != eliminar_miles(campo5086)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control depreciación acumulada no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S5_P5021').focus();
						$('#txt_F2_S5_P5021').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S5_P5087').focus();
						return false;
						}    
					}
					else 
					{	
                    alert("Error: Total control depreciación acumulada no cuadra.");
                    $('#txt_F2_S5_P5021').focus();
                    $('#txt_F2_S5_P5021').select();
                    return false;
					}
            }  

    }  
      	//Regla 168
 if ($(campo_j).attr('id')=='txt_F2_S5_P5087')
    {
    campo5022=$.trim($('#txt_F2_S5_P5022').val());
    campo5034=$.trim($('#txt_F2_S5_P5034').val());
    campo5046=$.trim($('#txt_F2_S5_P5046').val());
    campo5058=$.trim($('#txt_F2_S5_P5058').val());
    campo5070=$.trim($('#txt_F2_S5_P5070').val());
	campo5075=$.trim($('#txt_F2_S5_P5075').val());
    campo5087=$.trim($('#txt_F2_S5_P5087').val());
	suma=eliminar_miles(campo5022)+eliminar_miles(campo5034)+eliminar_miles(campo5046)+eliminar_miles(campo5058)+eliminar_miles(campo5070)+eliminar_miles(campo5075);

            if ( suma != eliminar_miles(campo5087)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control depreciación del ejercicio no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S5_P5022').focus();
						$('#txt_F2_S5_P5022').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P601').focus();
						return false;
						}    
					}
					else 
					{	
                    alert("Error: Total control depreciación del ejercicio no cuadra.");
                    $('#txt_F2_S5_P5022').focus();
                    $('#txt_F2_S5_P5022').select();
                    return false;
					}
            }  

    }  
    //Regla 169
    if ($(campo_j).attr('id')=='txt_F2_S5_P5075')
    {
	suma=0
	for (i=1;i<76;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F2_S5_P500'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F2_S5_P50'+i).val());
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
					if(!confirm('Advertencia: No informa movimiento del activo fijo.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S5_P5001').focus();
						$('#txt_F2_S5_P5001').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P601').focus();
						return false;
						}    
					}
					else 
					{	
					alert("Error: No informa movimiento del activo fijo.");
                    $('#txt_F2_S5_P5001').focus();
                    $('#txt_F2_S5_P5001').select();
                    return false;
					}
                }
    }
    //SECCCION VI
     // Regla 157
   if ($(campo_j).attr('id')=='txt_F2_S6_P602')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentaje de sobretasa venta de productos fabricados en el establecimiento fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P603').focus();
						return false;
						}    
					}
					else 
					{	
					alert("Error: Porcentaje de sobretasa venta de productos fabricados en el establecimiento fuera de rango (0% a 100%).");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
        }        
    }
     // Regla 158
   if ($(campo_j).attr('id')=='txt_F2_S6_P606')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentaje de sobretasa ingresos por actividades agrícolas fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P607').focus();
						return false;
						}    
					}
					else 
					{	
					alert("Error: Porcentaje de sobretasa ingresos por actividades agrícolas fuera de rango (0% a 100%).");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
        }        
    }
     // Regla 159
   if ($(campo_j).attr('id')=='txt_F2_S6_P609')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentaje de sobretasa ingresos por actividades de pesca fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P610').focus();
						return false;
						}    
					}
					else 
					{	
					alert("Error: Porcentaje de sobretasa ingresos por actividades de pesca fuera de rango (0% a 100%).");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
        }        
    }
     // Regla 160
   if ($(campo_j).attr('id')=='txt_F2_S6_P611')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentaje de sobretasa ingresos por actividades de mineria fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P612').focus();
						return false;
						}    
					}
					else 
					{	
					alert("Error: Porcentaje de sobretasa ingresos por actividades de mineria fuera de rango (0% a 100%).");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
        }        
    }
     // Regla 161
   if ($(campo_j).attr('id')=='txt_F2_S6_P613')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentaje de sobretasa ingresos por actividades de electricidad, gas y agua fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P614').focus();
						return false;
						}    
					}
					else 
					{	
					alert("Error: Porcentaje de sobretasa ingresos por actividades de electricidad, gas y agua fuera de rango (0% a 100%).");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
        }        
    }
     // Regla 162
   if ($(campo_j).attr('id')=='txt_F2_S6_P615')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentaje de sobretasa ingresos por actividades de construcción fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P616').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Porcentaje de sobretasa ingresos por actividades de construcción fuera de rango (0% a 100%).");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
        }        
    }
     // Regla 163
   if ($(campo_j).attr('id')=='txt_F2_S6_P617')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentaje de sobretasa ingresos por reventa de productos sin elaboración fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P618').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Porcentaje de sobretasa ingresos por reventa de productos sin elaboración fuera de rango (0% a 100%).");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
        }        
    }
     // Regla 164
   if ($(campo_j).attr('id')=='txt_F2_S6_P620')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentaje de sobretasa ingresos por prestación de servicios fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P621').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Porcentaje de sobretasa ingresos por prestación de servicios fuera de rango (0% a 100%).");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
        }        
    }
     // Regla 165
   if ($(campo_j).attr('id')=='txt_F2_S6_P622')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentaje de sobretasa ingresos por otras actividades no indicadas en categorias anteriores fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P623').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Porcentaje de sobretasa ingresos por otras actividades no indicadas en categorias anteriores fuera de rango (0% a 100%).");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
        }        
    }
       	//Regla 166
 if ($(campo_j).attr('id')=='txt_F2_S6_P623')
    {
    campo601=$.trim($('#txt_F2_S6_P601').val());
    campo605=$.trim($('#txt_F2_S6_P605').val());
    campo608=$.trim($('#txt_F2_S6_P608').val());
    campo610=$.trim($('#txt_F2_S6_P610').val());
    campo612=$.trim($('#txt_F2_S6_P612').val());
	campo614=$.trim($('#txt_F2_S6_P614').val());
    campo616=$.trim($('#txt_F2_S6_P616').val());
	campo619=$.trim($('#txt_F2_S6_P619').val());
	campo621=$.trim($('#txt_F2_S6_P621').val());
	campo623=$.trim($('#txt_F2_S6_P623').val());
	suma=eliminar_miles(campo601)+eliminar_miles(campo605)+eliminar_miles(campo608)+eliminar_miles(campo610)+eliminar_miles(campo612)+eliminar_miles(campo614)+eliminar_miles(campo616)+eliminar_miles(campo619)+eliminar_miles(campo621);

            if ( suma < eliminar_miles(campo623)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Valor productos exportados superior a ventas netas.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S6_P601').focus();
						$('#txt_F2_S6_P601').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P624').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Valor productos exportados superior a ventas netas.");
                    $('#txt_F2_S6_P601').focus();
                    $('#txt_F2_S6_P601').select();
                    return false;
					}
            }  

    }  
           	//Regla 167
 if ($(campo_j).attr('id')=='txt_F2_S6_P624')
    {
    campo601=$.trim($('#txt_F2_S6_P601').val());
    campo605=$.trim($('#txt_F2_S6_P605').val());
    campo608=$.trim($('#txt_F2_S6_P608').val());
    campo610=$.trim($('#txt_F2_S6_P610').val());
    campo612=$.trim($('#txt_F2_S6_P612').val());
	campo614=$.trim($('#txt_F2_S6_P614').val());
    campo616=$.trim($('#txt_F2_S6_P616').val());
	campo619=$.trim($('#txt_F2_S6_P619').val());
	campo621=$.trim($('#txt_F2_S6_P621').val());
	campo623=$.trim($('#txt_F2_S6_P623').val());
	campo624=$.trim($('#txt_F2_S6_P624').val());
	suma=eliminar_miles(campo601)+eliminar_miles(campo605)+eliminar_miles(campo608)+eliminar_miles(campo610)+eliminar_miles(campo612)+eliminar_miles(campo614)+eliminar_miles(campo616)+eliminar_miles(campo619)+eliminar_miles(campo621)+eliminar_miles(campo623);
            if ( suma != eliminar_miles(campo624)  )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total de control ingresos de la empresa o del establecimiento no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S6_P601').focus();
						$('#txt_F2_S6_P601').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#Btn_Anterior').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total de control ingresos de la empresa o del establecimiento no cuadra.");
                    $('#txt_F2_S6_P601').focus();
                    $('#txt_F2_S6_P601').select();
                    return false;
					}
            }  

    }  
           	//Regla 168
 if ($(campo_j).attr('id')=='txt_F2_S6_P623')
    {
    campo603=$.trim($('#txt_F2_S6_P603').val());
    campo604=$.trim($('#txt_F2_S6_P604').val());
    campo607=$.trim($('#txt_F2_S6_P607').val());
    campo623=$.trim($('#txt_F2_S6_P623').val());
        if ( eliminar_miles(campo623) == 0 )
            {
				if ( eliminar_decimales(campo603) > 0 || eliminar_decimales(campo604) > 0 || eliminar_decimales(campo607) > 0 )
					{
						if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa modalidad de exportación y no informa valor de exportación.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P624').focus();
						return false;
						}    
						}
						else 
						{
						alert("Error: Informa modalidad de exportación y no informa valor de exportación.");
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
					}
            }  

    }  
           	//Regla 169
 if ($(campo_j).attr('id')=='txt_F2_S6_P623')
    {
    campo603=$.trim($('#txt_F2_S6_P603').val());
    campo604=$.trim($('#txt_F2_S6_P604').val());
    campo607=$.trim($('#txt_F2_S6_P607').val());
    campo623=$.trim($('#txt_F2_S6_P623').val());
        if ( eliminar_miles(campo623) > 0 )
            {
				if ( eliminar_decimales(campo603) == 0 && eliminar_decimales(campo604) == 0 && eliminar_decimales(campo607) == 0 )
					{
						if (perfil == 4)
						{
						if(!confirm('Advertencia: No informa modalidad de exportación.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S6_P603').focus();
						$('#txt_F2_S6_P603').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P624').focus();
						return false;
						}    
						}
						else 
						{
						alert("Error: No informa modalidad de exportación.");
						$('#txt_F2_S6_P603').focus();
						$('#txt_F2_S6_P603').select();
						return false;
						}
					}
            }  

    }  
           	//Regla 170
 if ($(campo_j).attr('id')=='txt_F2_S6_P607')
    {
    campo607=$.trim($('#txt_F2_S6_P607').val());
          if ( eliminar_decimales(campo607) > 0 && $.trim($('#txt_F2_S6_P607_E').val()).length == 0 )
            {
				if (perfil == 4)
						{
						if(!confirm('Advertencia: No especifica otra modalidad de exportación.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S6_P607_E').focus();
						$('#txt_F2_S6_P607_E').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P608').focus();
						return false;
						}    
						}
						else 
						{
						alert("Error: No especifica otra modalidad de exportación.");
						$('#txt_F2_S6_P607_E').focus();
						$('#txt_F2_S6_P607_E').select();
						return false;
						}
            }  

    }  
           	//Regla 171
 if ($(campo_j).attr('id')=='txt_F2_S6_P618')
    {
    campo616=$.trim($('#txt_F2_S6_P616').val());
          if ( eliminar_miles(campo616) > 0 && $.trim($(campo_j).val()).length == 0 )
            {
				if (perfil == 4)
						{
						if(!confirm('Advertencia: No indica nombre del producto mas revendido.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S6_P619').focus();
						return false;
						}    
						}
						else 
						{
						alert("Error: No indica nombre del producto mas revendido.");
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
            }  

    }  
    //Regla 172
 if ($(campo_j).attr('id')=='txt_F2_S6_P624')
    {
    campo601=$.trim($('#txt_F2_S6_P601').val());
    campo605=$.trim($('#txt_F2_S6_P605').val());
    campo608=$.trim($('#txt_F2_S6_P608').val());
    campo610=$.trim($('#txt_F2_S6_P610').val());
    campo612=$.trim($('#txt_F2_S6_P612').val());
	campo614=$.trim($('#txt_F2_S6_P614').val());
    campo616=$.trim($('#txt_F2_S6_P616').val());
	campo619=$.trim($('#txt_F2_S6_P619').val());
	campo621=$.trim($('#txt_F2_S6_P621').val());
	campo623=$.trim($('#txt_F2_S6_P623').val());
	campo624=$.trim($('#txt_F2_S6_P624').val());
	suma=eliminar_miles(campo601)+eliminar_miles(campo605)+eliminar_miles(campo608)+eliminar_miles(campo610)+eliminar_miles(campo612)+eliminar_miles(campo614)+eliminar_miles(campo616)+eliminar_miles(campo619)+eliminar_miles(campo621)+eliminar_miles(campo623);
            if ( suma == 0 )
            {
				if (perfil == 4)
						{
						if(!confirm('Advertencia: No informa de la empresa.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S6_P601').focus();
						$('#txt_F2_S6_P601').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#Btn_Anterior').focus();
						return false;
						}    
						}
						else 
						{
						alert("Error: No informa de la empresa.");
						$('#txt_F2_S6_P601').focus();
						$('#txt_F2_S6_P601').select();
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
    // Regla 156
if ($(campo_j).attr('id')=='txt_F2_S5_P5058')
    {
	suma=0
	for (i=47;i<59;i++)
	{
			campo=$.trim($('#txt_F2_S5_P50'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			suma=eliminar_miles(campo)+suma;
    } 
	 if (suma > 0 && $.trim($('#txt_F2_S5_P5047_E').val()).length == 0)
                {
				mensaje=mensaje +("Campo 5047_E - Advertencia:  No especifica otros activos fijos. \n");
                $(campo_j).css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
                }
    }
       	//Regla 157  
 if ($(campo_j).attr('id')=='txt_F2_S5_P5076')
    {
    campo5001=$.trim($('#txt_F2_S5_P5001').val());
    campo5011=$.trim($('#txt_F2_S5_P5011').val());
    campo5023=$.trim($('#txt_F2_S5_P5023').val());
    campo5035=$.trim($('#txt_F2_S5_P5035').val());
    campo5047=$.trim($('#txt_F2_S5_P5047').val());
    campo5059=$.trim($('#txt_F2_S5_P5059').val());
    campo5071=$.trim($('#txt_F2_S5_P5071').val());
    campo5076=$.trim($('#txt_F2_S5_P5076').val());
	suma=eliminar_miles(campo5001)+eliminar_miles(campo5011)+eliminar_miles(campo5023)+eliminar_miles(campo5035)+eliminar_miles(campo5047)+eliminar_miles(campo5059)+eliminar_miles(campo5071);

            if ( suma != eliminar_miles(campo5076)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5076 - Advertencia: Total control valor neto inicial del ejercicio no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5076 - Error: Total control valor neto inicial del ejercicio no cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     	//Regla 158
 if ($(campo_j).attr('id')=='txt_F2_S5_P5077')
    {
    campo5002=$.trim($('#txt_F2_S5_P5002').val());
    campo5012=$.trim($('#txt_F2_S5_P5012').val());
    campo5024=$.trim($('#txt_F2_S5_P5024').val());
    campo5036=$.trim($('#txt_F2_S5_P5036').val());
    campo5048=$.trim($('#txt_F2_S5_P5048').val());
    campo5060=$.trim($('#txt_F2_S5_P5060').val());
   
    campo5077=$.trim($('#txt_F2_S5_P5077').val());
	suma=eliminar_miles(campo5002)+eliminar_miles(campo5012)+eliminar_miles(campo5024)+eliminar_miles(campo5036)+eliminar_miles(campo5048)+eliminar_miles(campo5060);

            if ( suma != eliminar_miles(campo5077)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5077 - Advertencia: Total control compra de bienes nuevos no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5077 - Error: Total control compra de bienes nuevos no cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
      	//Regla 159
 if ($(campo_j).attr('id')=='txt_F2_S5_P5078')
    {
    campo5003=$.trim($('#txt_F2_S5_P5003').val());
    campo5013=$.trim($('#txt_F2_S5_P5013').val());
    campo5025=$.trim($('#txt_F2_S5_P5025').val());
    campo5037=$.trim($('#txt_F2_S5_P5037').val());
    campo5049=$.trim($('#txt_F2_S5_P5049').val());
    campo5061=$.trim($('#txt_F2_S5_P5061').val());
   
    campo5078=$.trim($('#txt_F2_S5_P5078').val());
	suma=eliminar_miles(campo5003)+eliminar_miles(campo5013)+eliminar_miles(campo5025)+eliminar_miles(campo5037)+eliminar_miles(campo5049)+eliminar_miles(campo5061);

            if ( suma != eliminar_miles(campo5078)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5078 - Advertencia: Total control compra de bienes usados no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5078 - Error: Total control compra de bienes usados no cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
      	//Regla 160
 if ($(campo_j).attr('id')=='txt_F2_S5_P5079')
    {
    campo5004=$.trim($('#txt_F2_S5_P5004').val());
    campo5014=$.trim($('#txt_F2_S5_P5014').val());
    campo5026=$.trim($('#txt_F2_S5_P5026').val());
    campo5038=$.trim($('#txt_F2_S5_P5038').val());
    campo5050=$.trim($('#txt_F2_S5_P5050').val());
    campo5062=$.trim($('#txt_F2_S5_P5062').val());
   
    campo5079=$.trim($('#txt_F2_S5_P5079').val());
	suma=eliminar_miles(campo5004)+eliminar_miles(campo5014)+eliminar_miles(campo5026)+eliminar_miles(campo5038)+eliminar_miles(campo5050)+eliminar_miles(campo5062);

            if ( suma != eliminar_miles(campo5079)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5079 - Advertencia: Total control reformas y mejoras efectuadas por terceros no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5079 - Error: Total control reformas y mejoras efectuadas por terceros no cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
      	//Regla 161
 if ($(campo_j).attr('id')=='txt_F2_S5_P5080')
    {
    campo5005=$.trim($('#txt_F2_S5_P5005').val());
    campo5015=$.trim($('#txt_F2_S5_P5015').val());
    campo5027=$.trim($('#txt_F2_S5_P5027').val());
    campo5039=$.trim($('#txt_F2_S5_P5039').val());
    campo5051=$.trim($('#txt_F2_S5_P5051').val());
    campo5063=$.trim($('#txt_F2_S5_P5063').val());
   
    campo5080=$.trim($('#txt_F2_S5_P5080').val());
	suma=eliminar_miles(campo5005)+eliminar_miles(campo5015)+eliminar_miles(campo5027)+eliminar_miles(campo5039)+eliminar_miles(campo5051)+eliminar_miles(campo5063);

            if ( suma != eliminar_miles(campo5080)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5080 - Advertencia: Total control reformas y mejoras efectuadas por trabajadores del mismo establecimiento no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5080 - Error: Total control reformas y mejoras efectuadas por trabajadores del mismo establecimiento no cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
      	//Regla 162
 if ($(campo_j).attr('id')=='txt_F2_S5_P5081')
    {
    campo5006=$.trim($('#txt_F2_S5_P5006').val());
    campo5016=$.trim($('#txt_F2_S5_P5016').val());
    campo5028=$.trim($('#txt_F2_S5_P5028').val());
    campo5040=$.trim($('#txt_F2_S5_P5040').val());
    campo5052=$.trim($('#txt_F2_S5_P5052').val());
    campo5064=$.trim($('#txt_F2_S5_P5064').val());
   
    campo5081=$.trim($('#txt_F2_S5_P5081').val());
	suma=eliminar_miles(campo5006)+eliminar_miles(campo5016)+eliminar_miles(campo5028)+eliminar_miles(campo5040)+eliminar_miles(campo5052)+eliminar_miles(campo5064);

            if ( suma != eliminar_miles(campo5081)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5081 - Advertencia: Total control valor de obras en curso no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5081 - Error: Total control valor de obras en curso no cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
      	//Regla 163
 if ($(campo_j).attr('id')=='txt_F2_S5_P5082')
    {
    campo5007=$.trim($('#txt_F2_S5_P5007').val());
    campo5017=$.trim($('#txt_F2_S5_P5017').val());
    campo5029=$.trim($('#txt_F2_S5_P5029').val());
    campo5041=$.trim($('#txt_F2_S5_P5041').val());
    campo5053=$.trim($('#txt_F2_S5_P5053').val());
    campo5065=$.trim($('#txt_F2_S5_P5065').val());
   
    campo5082=$.trim($('#txt_F2_S5_P5082').val());
	suma=eliminar_miles(campo5007)+eliminar_miles(campo5017)+eliminar_miles(campo5029)+eliminar_miles(campo5041)+eliminar_miles(campo5053)+eliminar_miles(campo5065);

            if ( suma != eliminar_miles(campo5082)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5082 - Advertencia: Total control ventas no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5082 - Error: Total control ventas no cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
      	//Regla 164
 if ($(campo_j).attr('id')=='txt_F2_S5_P5083')
    {
    campo5008=$.trim($('#txt_F2_S5_P5008').val());
    campo5018=$.trim($('#txt_F2_S5_P5018').val());
    campo5030=$.trim($('#txt_F2_S5_P5030').val());
    campo5042=$.trim($('#txt_F2_S5_P5042').val());
    campo5054=$.trim($('#txt_F2_S5_P5054').val());
    campo5066=$.trim($('#txt_F2_S5_P5066').val());
   
    campo5083=$.trim($('#txt_F2_S5_P5083').val());
	suma=eliminar_miles(campo5008)+eliminar_miles(campo5018)+eliminar_miles(campo5030)+eliminar_miles(campo5042)+eliminar_miles(campo5054)+eliminar_miles(campo5066);

            if ( suma != eliminar_miles(campo5083)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5083 - Advertencia: Total control retiros no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5083 - Error: Total control retiros no cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
      	//Regla 165
 if ($(campo_j).attr('id')=='txt_F2_S5_P5084')
    {
    campo5009=$.trim($('#txt_F2_S5_P5009').val());
    campo5019=$.trim($('#txt_F2_S5_P5019').val());
    campo5031=$.trim($('#txt_F2_S5_P5031').val());
    campo5043=$.trim($('#txt_F2_S5_P5043').val());
    campo5055=$.trim($('#txt_F2_S5_P5055').val());
    campo5067=$.trim($('#txt_F2_S5_P5067').val());
	campo5072=$.trim($('#txt_F2_S5_P5072').val());
    campo5084=$.trim($('#txt_F2_S5_P5084').val());
	suma=eliminar_miles(campo5009)+eliminar_miles(campo5019)+eliminar_miles(campo5031)+eliminar_miles(campo5043)+eliminar_miles(campo5055)+eliminar_miles(campo5067)+eliminar_miles(campo5072);

            if ( suma != eliminar_miles(campo5084)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5084 - Advertencia: Total control correción monetaria no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5084 - Error: Total control correción monetaria no cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
      	//Regla 166
 if ($(campo_j).attr('id')=='txt_F2_S5_P5085')
    {
    campo5010=$.trim($('#txt_F2_S5_P5010').val());
    campo5020=$.trim($('#txt_F2_S5_P5020').val());
    campo5032=$.trim($('#txt_F2_S5_P5032').val());
    campo5044=$.trim($('#txt_F2_S5_P5044').val());
    campo5056=$.trim($('#txt_F2_S5_P5056').val());
    campo5068=$.trim($('#txt_F2_S5_P5068').val());
	campo5073=$.trim($('#txt_F2_S5_P5073').val());
    campo5085=$.trim($('#txt_F2_S5_P5085').val());
	suma=eliminar_miles(campo5010)+eliminar_miles(campo5020)+eliminar_miles(campo5032)+eliminar_miles(campo5044)+eliminar_miles(campo5056)+eliminar_miles(campo5068)+eliminar_miles(campo5073);

            if ( suma != eliminar_miles(campo5085)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5085 - Advertencia: Total control valor neto final del ejercicio no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5085 - Error: Total control valor neto final del ejercicio no cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
      	//Regla 167
 if ($(campo_j).attr('id')=='txt_F2_S5_P5086')
    {
    campo5021=$.trim($('#txt_F2_S5_P5021').val());
    campo5033=$.trim($('#txt_F2_S5_P5033').val());
    campo5045=$.trim($('#txt_F2_S5_P5045').val());
    campo5057=$.trim($('#txt_F2_S5_P5057').val());
    campo5069=$.trim($('#txt_F2_S5_P5069').val());
	campo5074=$.trim($('#txt_F2_S5_P5074').val());
    campo5086=$.trim($('#txt_F2_S5_P5086').val());
	suma=eliminar_miles(campo5021)+eliminar_miles(campo5033)+eliminar_miles(campo5045)+eliminar_miles(campo5057)+eliminar_miles(campo5069)+eliminar_miles(campo5074);

            if ( suma != eliminar_miles(campo5086)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5086 - Advertencia: Total control depreciación acumulada no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5086 - Error: Total control depreciación acumulada no cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
      	//Regla 168
 if ($(campo_j).attr('id')=='txt_F2_S5_P5087')
    {
    campo5022=$.trim($('#txt_F2_S5_P5022').val());
    campo5034=$.trim($('#txt_F2_S5_P5034').val());
    campo5046=$.trim($('#txt_F2_S5_P5046').val());
    campo5058=$.trim($('#txt_F2_S5_P5058').val());
    campo5070=$.trim($('#txt_F2_S5_P5070').val());
	campo5075=$.trim($('#txt_F2_S5_P5075').val());
    campo5087=$.trim($('#txt_F2_S5_P5087').val());
	suma=eliminar_miles(campo5022)+eliminar_miles(campo5034)+eliminar_miles(campo5046)+eliminar_miles(campo5058)+eliminar_miles(campo5070)+eliminar_miles(campo5075);

            if ( suma != eliminar_miles(campo5087)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5087 - Advertencia: Total control depreciación del ejercicio no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5087 - Error: Total control depreciación del ejercicio no cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
    //Regla 169
    if ($(campo_j).attr('id')=='txt_F2_S5_P5075')
    {
	suma=0
	for (i=1;i<76;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F2_S5_P500'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F2_S5_P50'+i).val());
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
					mensaje=mensaje +("Campo 5001 al 5087 - Advertencia: No informa movimiento del activo fijo. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5001 al 5087 - Error: No informa movimiento del activo fijo. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
                }
    }
    //SECCCION VI
     // Regla 157
   if ($(campo_j).attr('id')=='txt_F2_S6_P602')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					mensaje=mensaje +("Campo 602 - Advertencia: Porcentaje de sobretasa venta de productos fabricados en el establecimiento fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 602 - Error: Porcentaje de sobretasa venta de productos fabricados en el establecimiento fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
        }        
    }
     // Regla 158
   if ($(campo_j).attr('id')=='txt_F2_S6_P606')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					mensaje=mensaje +("Campo 606 - Advertencia: Porcentaje de sobretasa ingresos por actividades agrícolas fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 606 - Error: Porcentaje de sobretasa ingresos por actividades agrícolas fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
        }        
    }
     // Regla 159
   if ($(campo_j).attr('id')=='txt_F2_S6_P609')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					mensaje=mensaje +("Campo 609 - Advertencia: Porcentaje de sobretasa ingresos por actividades de pesca fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 609 - Error: Porcentaje de sobretasa ingresos por actividades de pesca fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
        }        
    }
     // Regla 160
   if ($(campo_j).attr('id')=='txt_F2_S6_P611')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					mensaje=mensaje +("Campo 611 - Advertencia: Porcentaje de sobretasa ingresos por actividades de mineria fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 611 - Error: Porcentaje de sobretasa ingresos por actividades de mineria fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
        }        
    }
     // Regla 161
   if ($(campo_j).attr('id')=='txt_F2_S6_P613')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					mensaje=mensaje +("Campo 613 - Advertencia: Porcentaje de sobretasa ingresos por actividades de electricidad, gas y agua fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 613 - Error: Porcentaje de sobretasa ingresos por actividades de electricidad, gas y agua fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
        }        
    }
     // Regla 162
   if ($(campo_j).attr('id')=='txt_F2_S6_P615')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					mensaje=mensaje +("Campo 615 - Advertencia: Porcentaje de sobretasa ingresos por actividades de construcción fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 615 - Error: Porcentaje de sobretasa ingresos por actividades de construcción fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
        }        
    }
     // Regla 163
   if ($(campo_j).attr('id')=='txt_F2_S6_P617')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					mensaje=mensaje +("Campo 617 - Advertencia: Porcentaje de sobretasa ingresos por reventa de productos sin elaboración fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 617 - Error: Porcentaje de sobretasa ingresos por reventa de productos sin elaboración fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
        }        
    }
     // Regla 164
   if ($(campo_j).attr('id')=='txt_F2_S6_P620')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					mensaje=mensaje +("Campo 620 - Advertencia: Porcentaje de sobretasa ingresos por prestación de servicios fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 620 - Error: Porcentaje de sobretasa ingresos por prestación de servicios fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
        }        
    }
     // Regla 165
   if ($(campo_j).attr('id')=='txt_F2_S6_P622')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
					{
					mensaje=mensaje +("Campo 622 - Advertencia: Porcentaje de sobretasa ingresos por otras actividades no indicadas en categorias anteriores fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 622 - Error: Porcentaje de sobretasa ingresos por otras actividades no indicadas en categorias anteriores fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
        }        
    }
       	//Regla 166
 if ($(campo_j).attr('id')=='txt_F2_S6_P623')
    {
    campo601=$.trim($('#txt_F2_S6_P601').val());
    campo605=$.trim($('#txt_F2_S6_P605').val());
    campo608=$.trim($('#txt_F2_S6_P608').val());
    campo610=$.trim($('#txt_F2_S6_P610').val());
    campo612=$.trim($('#txt_F2_S6_P612').val());
	campo614=$.trim($('#txt_F2_S6_P614').val());
    campo616=$.trim($('#txt_F2_S6_P616').val());
	campo619=$.trim($('#txt_F2_S6_P619').val());
	campo621=$.trim($('#txt_F2_S6_P621').val());
	campo623=$.trim($('#txt_F2_S6_P623').val());
	suma=eliminar_miles(campo601)+eliminar_miles(campo605)+eliminar_miles(campo608)+eliminar_miles(campo610)+eliminar_miles(campo612)+eliminar_miles(campo614)+eliminar_miles(campo616)+eliminar_miles(campo619)+eliminar_miles(campo621);

            if ( suma < eliminar_miles(campo623)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 623 - Advertencia: Valor productos exportados superior a ventas netas. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 623 - Error: Valor productos exportados superior a ventas netas. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
           	//Regla 167
 if ($(campo_j).attr('id')=='txt_F2_S6_P624')
    {
    campo601=$.trim($('#txt_F2_S6_P601').val());
    campo605=$.trim($('#txt_F2_S6_P605').val());
    campo608=$.trim($('#txt_F2_S6_P608').val());
    campo610=$.trim($('#txt_F2_S6_P610').val());
    campo612=$.trim($('#txt_F2_S6_P612').val());
	campo614=$.trim($('#txt_F2_S6_P614').val());
    campo616=$.trim($('#txt_F2_S6_P616').val());
	campo619=$.trim($('#txt_F2_S6_P619').val());
	campo621=$.trim($('#txt_F2_S6_P621').val());
	campo623=$.trim($('#txt_F2_S6_P623').val());
	campo624=$.trim($('#txt_F2_S6_P624').val());
	suma=eliminar_miles(campo601)+eliminar_miles(campo605)+eliminar_miles(campo608)+eliminar_miles(campo610)+eliminar_miles(campo612)+eliminar_miles(campo614)+eliminar_miles(campo616)+eliminar_miles(campo619)+eliminar_miles(campo621)+eliminar_miles(campo623);
            if ( suma != eliminar_miles(campo624)  )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 624 - Advertencia: Total de control ingresos de la empresa o del establecimiento no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 624 - Error: Total de control ingresos de la empresa o del establecimiento no cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
           	//Regla 168
 if ($(campo_j).attr('id')=='txt_F2_S6_P623')
    {
    campo603=$.trim($('#txt_F2_S6_P603').val());
    campo604=$.trim($('#txt_F2_S6_P604').val());
    campo607=$.trim($('#txt_F2_S6_P607').val());
    campo623=$.trim($('#txt_F2_S6_P623').val());
        if ( eliminar_miles(campo623) == 0 )
            {
				if ( eliminar_decimales(campo603) > 0 || eliminar_decimales(campo604) > 0 || eliminar_decimales(campo607) > 0 )
					{
						if (perfil == 4)
						{
						mensaje=mensaje +("Campo 623 - Advertencia: Informa modalidad de exportación y no informa valor de exportación. \n");
						$(campo_j).css('border','2px solid #FFA500');
						advertencia++;
						foco[++cont] = campo_j;
						}
						else
						{
						mensaje=mensaje +("Campos 623 - Error: Informa modalidad de exportación y no informa valor de exportación. \n");
						$(campo_j).css('border','2px solid red');
						error++;
						foco[++cont] = campo_j;
						}
					}
            }  

    }  
           	//Regla 169
 if ($(campo_j).attr('id')=='txt_F2_S6_P623')
    {
    campo603=$.trim($('#txt_F2_S6_P603').val());
    campo604=$.trim($('#txt_F2_S6_P604').val());
    campo607=$.trim($('#txt_F2_S6_P607').val());
    campo623=$.trim($('#txt_F2_S6_P623').val());
        if ( eliminar_miles(campo623) > 0 )
            {
				if ( eliminar_decimales(campo603) == 0 && eliminar_decimales(campo604) == 0 && eliminar_decimales(campo607) == 0 )
					{
						if (perfil == 4)
						{
						mensaje=mensaje +("Campo 603, 604 y 605 - Advertencia: No informa modalidad de exportación. \n");
						$(campo_j).css('border','2px solid #FFA500');
						advertencia++;
						foco[++cont] = campo_j;
						}
						else
						{
						mensaje=mensaje +("Campos 603, 604 y 605 - Error: No informa modalidad de exportación. \n");
						$(campo_j).css('border','2px solid red');
						error++;
						foco[++cont] = campo_j;
						}
					}
            }  

    }  
           	//Regla 170
 if ($(campo_j).attr('id')=='txt_F2_S6_P607')
    {
    campo607=$.trim($('#txt_F2_S6_P607').val());
          if ( eliminar_decimales(campo607) > 0 && $.trim($('#txt_F2_S6_P607_E').val()).length == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 607_E - Advertencia: No especifica otra modalidad de exportación. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 607_E - Error: No especifica otra modalidad de exportación. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
           	//Regla 171
 if ($(campo_j).attr('id')=='txt_F2_S6_P618')
    {
    campo616=$.trim($('#txt_F2_S6_P616').val());
          if ( eliminar_miles(campo616) > 0 && $.trim($(campo_j).val()).length == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 618 - Advertencia: No indica nombre del producto mas revendido. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 618 - Error: No indica nombre del producto mas revendido. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
				    }
            }  

    }  
    //Regla 172
 if ($(campo_j).attr('id')=='txt_F2_S6_P624')
    {
    campo601=$.trim($('#txt_F2_S6_P601').val());
    campo605=$.trim($('#txt_F2_S6_P605').val());
    campo608=$.trim($('#txt_F2_S6_P608').val());
    campo610=$.trim($('#txt_F2_S6_P610').val());
    campo612=$.trim($('#txt_F2_S6_P612').val());
	campo614=$.trim($('#txt_F2_S6_P614').val());
    campo616=$.trim($('#txt_F2_S6_P616').val());
	campo619=$.trim($('#txt_F2_S6_P619').val());
	campo621=$.trim($('#txt_F2_S6_P621').val());
	campo623=$.trim($('#txt_F2_S6_P623').val());
	campo624=$.trim($('#txt_F2_S6_P624').val());
	suma=eliminar_miles(campo601)+eliminar_miles(campo605)+eliminar_miles(campo608)+eliminar_miles(campo610)+eliminar_miles(campo612)+eliminar_miles(campo614)+eliminar_miles(campo616)+eliminar_miles(campo619)+eliminar_miles(campo621)+eliminar_miles(campo623);
            if ( suma == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 601 al 624 - Advertencia: No informa de la empresa. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 601 al 624 - Error: No informa de la empresa. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
				    }
            }  

    }          
        
         });
    return [advertencia,error,foco[0],mensaje];
}

