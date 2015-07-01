camposDecimal = [];
camposletra=['txt_F6_S4_P408_E','txt_F6_S5_P5037_E','txt_F6_S6_P613_E'];
camposMiles=['txt_F6_S3_P301','txt_F6_S3_P302','txt_F6_S3_P303','txt_F6_S3_P304','txt_F6_S3_P305','txt_F6_S3_P306',
'txt_F6_S3_P307','txt_F6_S3_P308','txt_F6_S3_P309','txt_F6_S3_P310','txt_F6_S3_P311','txt_F6_S3_P312',
'txt_F6_S3_P313','txt_F6_S3_P314',
'txt_F6_S4_P401','txt_F6_S4_P402','txt_F6_S4_P403','txt_F6_S4_P404','txt_F6_S4_P405','txt_F6_S4_P406',
'txt_F6_S4_P407','txt_F6_S4_P408','txt_F6_S4_P409',
'txt_F6_S5_P5001','txt_F6_S5_P5002','txt_F6_S5_P5003','txt_F6_S5_P5004','txt_F6_S5_P5005','txt_F6_S5_P5006',
'txt_F6_S5_P5007','txt_F6_S5_P5008','txt_F6_S5_P5009','txt_F6_S5_P5010','txt_F6_S5_P5011','txt_F6_S5_P5012',
'txt_F6_S5_P5013','txt_F6_S5_P5014','txt_F6_S5_P5015','txt_F6_S5_P5016','txt_F6_S5_P5017','txt_F6_S5_P5018',
'txt_F6_S5_P5019','txt_F6_S5_P5020','txt_F6_S5_P5021','txt_F6_S5_P5022','txt_F6_S5_P5023','txt_F6_S5_P5024',
'txt_F6_S5_P5025','txt_F6_S5_P5026','txt_F6_S5_P5027','txt_F6_S5_P5028','txt_F6_S5_P5029','txt_F6_S5_P5030',
'txt_F6_S5_P5031','txt_F6_S5_P5032','txt_F6_S5_P5033','txt_F6_S5_P5034','txt_F6_S5_P5035','txt_F6_S5_P5036',
'txt_F6_S5_P5037','txt_F6_S5_P5038','txt_F6_S5_P5039','txt_F6_S5_P5040','txt_F6_S5_P5041','txt_F6_S5_P5042',
'txt_F6_S5_P5043','txt_F6_S5_P5044','txt_F6_S5_P5045','txt_F6_S5_P5046','txt_F6_S5_P5047','txt_F6_S5_P5048',
'txt_F6_S5_P5049','txt_F6_S5_P5050','txt_F6_S5_P5051','txt_F6_S5_P5052','txt_F6_S5_P5053','txt_F6_S5_P5054',
'txt_F6_S5_P5055','txt_F6_S5_P5056','txt_F6_S5_P5057','txt_F6_S5_P5058','txt_F6_S5_P5059','txt_F6_S5_P5060',
'txt_F6_S6_P601','txt_F6_S6_P602','txt_F6_S6_P603','txt_F6_S6_P604','txt_F6_S6_P605','txt_F6_S6_P606',
'txt_F6_S6_P607','txt_F6_S6_P608','txt_F6_S6_P609','txt_F6_S6_P610','txt_F6_S6_P611','txt_F6_S6_P612',
'txt_F6_S6_P613','txt_F6_S6_P614','txt_F6_S6_P615','txt_F6_S6_P616','txt_F6_S6_P617','txt_F6_S6_P618'];
campoSoloTexto=[];
function validar (campo_j){
    campo_j = "#"+campo_j;
    //Regla 41
        if ($(campo_j).attr('id')=='txt_F6_S3_P301')
    {
		campo301=$.trim($('#txt_F6_S3_P301').val());
        if ( eliminar_miles(campo301)== 0 )
            {
                    if(!confirm('Advertencia: Flota no compra alimentación para el personal.\n ¿Desea continuar?')){
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
                    }else{
                    flag_2 = true;
                    $('#txt_F6_S3_P302').focus();
                    return false;
                    }
            }  

    }  
    //Regla 42
if ($(campo_j).attr('id')=='txt_F6_S3_P302')
    {
		campo302=$.trim($('#txt_F6_S3_P302').val());
        if ( eliminar_miles(campo302)== 0 )
            {
                    if(!confirm('Advertencia: Flota no compra hielo.\n ¿Desea continuar?')){
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
                    }else{
                    flag_2 = true;
                    $('#txt_F6_S3_P303').focus();
                    return false;
                    }
            }  

    } 
    //Regla 43
if ($(campo_j).attr('id')=='txt_F6_S3_P303')
    {
		campo303=$.trim($('#txt_F6_S3_P303').val());
        if ( eliminar_miles(campo303)== 0 )
            {
                    if(!confirm('Advertencia: Flota no compra elementos de trabajo, aparejos y materiales de pesca.\n ¿Desea continuar?')){
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
                    }else{
                    flag_2 = true;
                    $('#txt_F6_S3_P304').focus();
                    return false;
                    }
            }  

    }   
    // Regla 44
if ($(campo_j).attr('id')=='txt_F6_S3_P306')
    {
	suma=0
	for (i=1;i<6;i++)
	{
			campo=$.trim($('#txt_F6_S3_P30'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	campo306=$.trim($('#txt_F6_S3_P306').val());
	 if (suma != eliminar_miles(campo306))
            {
				if (perfil == 4)
				{
				if(!confirm('Advertencia: Total de Control compra de insumos y materiales No cuadra.\n ¿Desea continuar?'))
					{
					$('#txt_F6_S3_P301').focus();
					$('#txt_F6_S3_P301').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S3_P307').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Total de Control compra de insumos y materiales No cuadra.");
                    $('#txt_F6_S3_P301').focus();
                    $('#txt_F6_S3_P301').select();
                    return false;
				}
            }
    }
     //Regla 45
 if ($(campo_j).attr('id')=='txt_F6_S3_P313')
    {
    campo307=$.trim($('#txt_F6_S3_P307').val());
    campo309=$.trim($('#txt_F6_S3_P309').val());
    campo311=$.trim($('#txt_F6_S3_P311').val());
	campo313=$.trim($('#txt_F6_S3_P313').val());
	suma=eliminar_miles(campo307)+eliminar_miles(campo309)+eliminar_miles(campo311);
             if ( suma != eliminar_miles(campo313) )
            {
				if (perfil == 4)
				{
				if(!confirm('Advertencia: Total de control de combustibles No cuadra.\n ¿Desea continuar?'))
					{
					$('#txt_F6_S3_P307').focus();
					$('#txt_F6_S3_P307').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S3_P314').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Total de control de combustibles No cuadra.");
                    $('#txt_F6_S3_P307').focus();
                    $('#txt_F6_S3_P307').select();
                    return false;
				}
            }  

    }  
     //Regla 46
 if ($(campo_j).attr('id')=='txt_F6_S3_P308')
    {
    campo307=$.trim($('#txt_F6_S3_P307').val());
    campo308=$.trim($(campo_j).val());
             if ( eliminar_miles(campo307) > 0 && eliminar_miles(campo308) == 0 )
            {
				if (perfil == 4)
				{
				if(!confirm('Advertencia: Informa cantidad de petróleo combustible, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S3_P307').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Informa cantidad de petróleo combustible, pero no valor en moneda utilizada.");
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
				}
            }  

    }  
     //Regla 47
 if ($(campo_j).attr('id')=='txt_F6_S3_P308')
    {
    campo307=$.trim($('#txt_F6_S3_P307').val());
    campo308=$.trim($(campo_j).val());
             if ( eliminar_miles(campo307) == 0 && eliminar_miles(campo308) > 0 )
            {
				if (perfil == 4)
				{
				if(!confirm('Advertencia: Informa valor en moneda utilizada de petróleo combustible, pero no cantidad.\n ¿Desea continuar?'))
					{
					$('#txt_F6_S3_P307').focus();
					$('#txt_F6_S3_P307').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S3_P309').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Informa valor en moneda utilizada de petróleo combustible, pero no cantidad.");
                    $('#txt_F6_S3_P307').focus();
                    $('#txt_F6_S3_P307').select();
                    return false;
				}
            }  

    }  
     //Regla 48
 if ($(campo_j).attr('id')=='txt_F6_S3_P310')
    {
    campo309=$.trim($('#txt_F6_S3_P309').val());
    campo310=$.trim($(campo_j).val());
             if ( eliminar_miles(campo309) > 0 && eliminar_miles(campo310) == 0 )
            {
				if (perfil == 4)
				{
				if(!confirm('Advertencia: Informa cantidad petróleo diesel, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S3_P311').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Informa cantidad petróleo diesel, pero no valor en moneda utilizada.");
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
				}
            }  

    }  
     //Regla 49
 if ($(campo_j).attr('id')=='txt_F6_S3_P310')
    {
    campo309=$.trim($('#txt_F6_S3_P309').val());
    campo310=$.trim($(campo_j).val());
             if ( eliminar_miles(campo309) == 0 && eliminar_miles(campo310) > 0 )
            {
				if (perfil == 4)
				{
				if(!confirm('Advertencia: Informa valor en moneda utilizada de petróleo diesel, pero no cantidad.\n ¿Desea continuar?'))
					{
					$('#txt_F6_S3_P309').focus();
					$('#txt_F6_S3_P309').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S3_P311').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Informa valor en moneda utilizada de petróleo diesel, pero no cantidad.");
                    $('#txt_F6_S3_P309').focus();
                    $('#txt_F6_S3_P309').select();
                    return false;
				}
            }  

    } 
     //Regla 50
 if ($(campo_j).attr('id')=='txt_F6_S3_P312')
    {
    campo311=$.trim($('#txt_F6_S3_P311').val());
    campo312=$.trim($(campo_j).val());
             if ( eliminar_miles(campo311) > 0 && eliminar_miles(campo312) == 0 )
            {
				if (perfil == 4)
				{
				if(!confirm('Advertencia: Informa cantidad de lubricantes, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S3_P313').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Informa cantidad de lubricantes, pero no valor en moneda utilizada.");
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
				}
            }  

    }  
     //Regla 51
 if ($(campo_j).attr('id')=='txt_F6_S3_P312')
    {
    campo311=$.trim($('#txt_F6_S3_P311').val());
    campo312=$.trim($(campo_j).val());
             if ( eliminar_miles(campo311) == 0 && eliminar_miles(campo312)> 0 )
            {
				if (perfil == 4)
				{
				if(!confirm('Advertencia: Informa valor en moneda utilizada de lubricantes, pero no cantidad.\n ¿Desea continuar?'))
					{
					$('#txt_F6_S3_P311').focus();
					$('#txt_F6_S3_P311').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S3_P313').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Informa valor en moneda utilizada de lubricantes, pero no cantidad.");
                    $('#txt_F6_S3_P311').focus();
                    $('#txt_F6_S3_P311').select();
                    return false;
				}
            }  

    }   
     //Regla 52
 if ($(campo_j).attr('id')=='txt_F6_S3_P314')
    {
    campo313=$.trim($('#txt_F6_S3_P313').val());
    campo314=$.trim($(campo_j).val());
             if ( eliminar_miles(campo313) > 0 && eliminar_miles(campo314) == 0 )
            {
				if (perfil == 4)
				{
				if(!confirm('Advertencia: Informa cantidad en total de control de lubricantes, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S4_P401').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Informa cantidad en total de control de lubricantes, pero no valor en moneda utilizada.");
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
				}	
            }  
    }  
     //Regla 53
 if ($(campo_j).attr('id')=='txt_F6_S3_P314')
    {
    campo313=$.trim($('#txt_F6_S3_P313').val());
    campo314=$.trim($(campo_j).val());
             if ( eliminar_miles(campo313) == 0 && eliminar_miles(campo314)> 0 )
            {
				if (perfil == 4)
				{
				if(!confirm('Advertencia: Informa valor en moneda utilizada de total de control combustibles y lubricantes, pero no cantidad.\n ¿Desea continuar?'))
					{
					$('#txt_F6_S3_P313').focus();
					$('#txt_F6_S3_P313').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S4_P401').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Informa valor en moneda utilizada de total de control combustibles y lubricantes, pero no cantidad.");
                    $('#txt_F6_S3_P313').focus();
                    $('#txt_F6_S3_P313').select();
                    return false;
				}	
            }  
    }
        //Regla 54
 if ($(campo_j).attr('id')=='txt_F6_S3_P314')
    {
    campo308=$.trim($('#txt_F6_S3_P308').val());
    campo310=$.trim($('#txt_F6_S3_P310').val());
    campo312=$.trim($('#txt_F6_S3_P312').val());
	campo314=$.trim($('#txt_F6_S3_P314').val());
	suma=eliminar_miles(campo308)+eliminar_miles(campo310)+eliminar_miles(campo312);
             if ( suma != eliminar_miles(campo314) )
            {
				if (perfil == 4)
				{
				if(!confirm('Advertencia: Total de control valor Combustibles y lubricantes No cuadra.\n ¿Desea continuar?'))
					{
					$('#txt_F6_S3_P308').focus();
					$('#txt_F6_S3_P308').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S4_P401').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Total de control valor Combustibles y lubricantes No cuadra.");
                    $('#txt_F6_S3_P308').focus();
                    $('#txt_F6_S3_P308').select();
                    return false;
				}	
            }  
    }  
        //Regla 55
 if ($(campo_j).attr('id')=='txt_F6_S4_P408')
    {
    campo308=$.trim($(campo_j).val());
             if ( eliminar_miles(campo314) > 0 &&  $.trim($('#txt_F6_S4_P408_E').val()).length == 0 )
            {
					if(!confirm('Advertencia: No especifica otras reparaciones.\n ¿Desea continuar?')){
					$('#txt_F6_S4_P408_E').focus();
					$('#txt_F6_S4_P408_E').select();
					return false;
					}else{
					flag_2 = true;
					$('#txt_F6_S4_P409').focus();
					return false;
					}
            }  
    }  
        // Regla 56
if ($(campo_j).attr('id')=='txt_F6_S4_P409')
    {
	suma=0
	for (i=1;i<9;i++)
	{
		campo=$.trim($('#txt_F6_S4_P40'+i).val());
			if (campo=="")
			{
				campo=0;
			}
        suma=eliminar_miles(campo)+suma;
    } 
    campo409=$.trim($(campo_j).val());
	 if (suma != eliminar_miles(campo409))
                {
					if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control Gastos Generales No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S4_P401').focus();
						$('#txt_F6_S4_P401').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S5_P5001').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control Gastos Generales No cuadra.");
                    $('#txt_F6_S4_P401').focus();
                    $('#txt_F6_S4_P401').select();
                    return false;
					}
                }
    }
        // Regla 57
if ($(campo_j).attr('id')=='txt_F6_S5_P5060')
    {
	suma=0
	for (i=1;i<61;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F6_S5_P500'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F6_S5_P50'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
					if(!confirm('Advertencia: No informa movimiento en el activo fijo.\n ¿Desea continuar?')){
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}else{
					flag_2 = true;
					$('#txt_F6_S6_P601').focus();
					return false;
					}
                }
    }
     //Regla 58
 if ($(campo_j).attr('id')=='txt_F6_S5_P5037')
    {
    campo5037=$.trim($(campo_j).val());
             if ( eliminar_miles(campo5037) > 0 &&  $.trim($('#txt_F6_S5_P5037_E').val()).length == 0 )
            {
					if(!confirm('Advertencia: No especifica otros activos fijos.\n ¿Desea continuar?')){
					$('#txt_F6_S5_P5037_E').focus();
					$('#txt_F6_S5_P5037_E').select();
					return false;
					}else{
					flag_2 = true;
					$('#txt_F6_S5_P5038').focus();
					return false;
					}
            }  
    }  
       //Regla 59   
 if ($(campo_j).attr('id')=='txt_F6_S5_P5049')
    {
    campo5001=$.trim($('#txt_F6_S5_P5001').val());
    campo5013=$.trim($('#txt_F6_S5_P5013').val());
	campo5025=$.trim($('#txt_F6_S5_P5025').val());
	campo5037=$.trim($('#txt_F6_S5_P5037').val());
    campo5049=$.trim($('#txt_F6_S5_P5049').val());
	suma=eliminar_miles(campo5001)+eliminar_miles(campo5013)+eliminar_miles(campo5025)+eliminar_miles(campo5037);
             if ( suma != eliminar_miles(campo5049) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control valor neto inicial del ejercicio No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S5_P5001').focus();
						$('#txt_F6_S5_P5001').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S5_P5050').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control valor neto inicial del ejercicio No cuadra.");
                    $('#txt_F6_S5_P5001').focus();
                    $('#txt_F6_S5_P5001').select();
                    return false;
					}
            }  

    }  
       //Regla 60  
 if ($(campo_j).attr('id')=='txt_F6_S5_P5050')
    {
    campo5002=$.trim($('#txt_F6_S5_P5002').val());
    campo5014=$.trim($('#txt_F6_S5_P5014').val());
	campo5026=$.trim($('#txt_F6_S5_P5026').val());
	campo5038=$.trim($('#txt_F6_S5_P5038').val());
    campo5050=$.trim($('#txt_F6_S5_P5050').val());
	suma=eliminar_miles(campo5002)+eliminar_miles(campo5014)+eliminar_miles(campo5026)+eliminar_miles(campo5038);
             if ( suma != eliminar_miles(campo5050) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control compra de bienes nuevos No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S5_P5002').focus();
						$('#txt_F6_S5_P5002').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S5_P5051').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control compra de bienes nuevos No cuadra.");
                    $('#txt_F6_S5_P5002').focus();
                    $('#txt_F6_S5_P5002').select();
                    return false;
					}
            }  

    }  
       //Regla 61  
 if ($(campo_j).attr('id')=='txt_F6_S5_P5051')
    {
    campo5003=$.trim($('#txt_F6_S5_P5003').val());
    campo5015=$.trim($('#txt_F6_S5_P5015').val());
	campo5027=$.trim($('#txt_F6_S5_P5027').val());
	campo5039=$.trim($('#txt_F6_S5_P5039').val());
    campo5051=$.trim($('#txt_F6_S5_P5051').val());
	suma=eliminar_miles(campo5003)+eliminar_miles(campo5015)+eliminar_miles(campo5027)+eliminar_miles(campo5039);
             if ( suma != eliminar_miles(campo5051) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control compra de bienes usados No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S5_P5003').focus();
						$('#txt_F6_S5_P5003').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S5_P5052').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control compra de bienes usados No cuadra.");
                    $('#txt_F6_S5_P5003').focus();
                    $('#txt_F6_S5_P5003').select();
                    return false;
					}
            }  

    }  
       //Regla 62 
 if ($(campo_j).attr('id')=='txt_F6_S5_P5052')
    {
    campo5004=$.trim($('#txt_F6_S5_P5004').val());
    campo5016=$.trim($('#txt_F6_S5_P5016').val());
	campo5028=$.trim($('#txt_F6_S5_P5028').val());
	campo5040=$.trim($('#txt_F6_S5_P5040').val());
    campo5052=$.trim($('#txt_F6_S5_P5052').val());
	suma=eliminar_miles(campo5004)+eliminar_miles(campo5016)+eliminar_miles(campo5028)+eliminar_miles(campo5040);
             if ( suma != eliminar_miles(campo5052) )
            {	
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control reformas y mejoras efectuadas por terceros No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S5_P5004').focus();
						$('#txt_F6_S5_P5004').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S5_P5053').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control reformas y mejoras efectuadas por terceros No cuadra.");
                    $('#txt_F6_S5_P5004').focus();
                    $('#txt_F6_S5_P5004').select();
                    return false;
					}
            }  

    }  
       //Regla 63
 if ($(campo_j).attr('id')=='txt_F6_S5_P5053')
    {
    campo5005=$.trim($('#txt_F6_S5_P5005').val());
    campo5017=$.trim($('#txt_F6_S5_P5017').val());
	campo5029=$.trim($('#txt_F6_S5_P5029').val());
	campo5041=$.trim($('#txt_F6_S5_P5041').val());
    campo5053=$.trim($('#txt_F6_S5_P5053').val());
	suma=eliminar_miles(campo5005)+eliminar_miles(campo5017)+eliminar_miles(campo5029)+eliminar_miles(campo5041);
             if ( suma != eliminar_miles(campo5053) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control reformas y mejoras efectuadas por trabajadores del mismo establecimiento No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S5_P5005').focus();
						$('#txt_F6_S5_P5005').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S5_P5054').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control reformas y mejoras efectuadas por trabajadores del mismo establecimiento No cuadra.");
                    $('#txt_F6_S5_P5005').focus();
                    $('#txt_F6_S5_P5005').select();
                    return false;
					}
            }  

    }  
       //Regla 64
 if ($(campo_j).attr('id')=='txt_F6_S5_P5054')
    {
    campo5006=$.trim($('#txt_F6_S5_P5006').val());
    campo5018=$.trim($('#txt_F6_S5_P5018').val());
	campo5030=$.trim($('#txt_F6_S5_P5030').val());
	campo5042=$.trim($('#txt_F6_S5_P5042').val());
    campo5054=$.trim($('#txt_F6_S5_P5054').val());
	suma=eliminar_miles(campo5006)+eliminar_miles(campo5018)+eliminar_miles(campo5030)+eliminar_miles(campo5042);
             if ( suma != eliminar_miles(campo5054) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control valor de obras en curso No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S5_P5006').focus();
						$('#txt_F6_S5_P5006').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S5_P5055').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control valor de obras en curso No cuadra.");
                    $('#txt_F6_S5_P5006').focus();
                    $('#txt_F6_S5_P5006').select();
                    return false;
					}
            }  

    }  
       //Regla 65
 if ($(campo_j).attr('id')=='txt_F6_S5_P5055')
    {
    campo5007=$.trim($('#txt_F6_S5_P5007').val());
    campo5019=$.trim($('#txt_F6_S5_P5019').val());
	campo5031=$.trim($('#txt_F6_S5_P5031').val());
	campo5043=$.trim($('#txt_F6_S5_P5043').val());
    campo5055=$.trim($('#txt_F6_S5_P5055').val());
	suma=eliminar_miles(campo5007)+eliminar_miles(campo5019)+eliminar_miles(campo5031)+eliminar_miles(campo5043);
             if ( suma != eliminar_miles(campo5055) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control ventas No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S5_P5007').focus();
						$('#txt_F6_S5_P5007').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S5_P5056').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control ventas No cuadra.");
                    $('#txt_F6_S5_P5007').focus();
                    $('#txt_F6_S5_P5007').select();
                    return false;
					}
            }  

    }  
       //Regla 66
 if ($(campo_j).attr('id')=='txt_F6_S5_P5056')
    {
    campo5008=$.trim($('#txt_F6_S5_P5008').val());
    campo5020=$.trim($('#txt_F6_S5_P5020').val());
	campo5032=$.trim($('#txt_F6_S5_P5032').val());
	campo5044=$.trim($('#txt_F6_S5_P5044').val());
    campo5056=$.trim($('#txt_F6_S5_P5056').val());
	suma=eliminar_miles(campo5008)+eliminar_miles(campo5020)+eliminar_miles(campo5032)+eliminar_miles(campo5044);
             if ( suma != eliminar_miles(campo5056) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control retiros No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S5_P5008').focus();
						$('#txt_F6_S5_P5008').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S5_P5057').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control retiros No cuadra.");
                    $('#txt_F6_S5_P5008').focus();
                    $('#txt_F6_S5_P5008').select();
                    return false;
					}
            }  

    }  
       //Regla 67
 if ($(campo_j).attr('id')=='txt_F6_S5_P5057')
    {
    campo5009=$.trim($('#txt_F6_S5_P5009').val());
    campo5021=$.trim($('#txt_F6_S5_P5021').val());
	campo5033=$.trim($('#txt_F6_S5_P5033').val());
	campo5045=$.trim($('#txt_F6_S5_P5045').val());
    campo5057=$.trim($('#txt_F6_S5_P5057').val());
	suma=eliminar_miles(campo5009)+eliminar_miles(campo5021)+eliminar_miles(campo5033)+eliminar_miles(campo5045);
             if ( suma != eliminar_miles(campo5057) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control corrección monetaria No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S5_P5009').focus();
						$('#txt_F6_S5_P5009').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S5_P5058').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control corrección monetaria No cuadra.");
                    $('#txt_F6_S5_P5009').focus();
                    $('#txt_F6_S5_P5009').select();
                    return false;
					}
            }  

    }  
       //Regla 68
 if ($(campo_j).attr('id')=='txt_F6_S5_P5058')
    {
    campo5010=$.trim($('#txt_F6_S5_P5010').val());
    campo5022=$.trim($('#txt_F6_S5_P5022').val());
	campo5034=$.trim($('#txt_F6_S5_P5034').val());
	campo5046=$.trim($('#txt_F6_S5_P5046').val());
    campo5058=$.trim($('#txt_F6_S5_P5058').val());
	suma=eliminar_miles(campo5010)+eliminar_miles(campo5022)+eliminar_miles(campo5034)+eliminar_miles(campo5046);
             if ( suma != eliminar_miles(campo5058) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control valor neto al final del ejercicio No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S5_P5010').focus();
						$('#txt_F6_S5_P5010').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S5_P5059').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control valor neto al final del ejercicio No cuadra.");
                    $('#txt_F6_S5_P5010').focus();
                    $('#txt_F6_S5_P5010').select();
                    return false;
					}
            }  

    }  
       //Regla 69
 if ($(campo_j).attr('id')=='txt_F6_S5_P5059')
    {
    campo5011=$.trim($('#txt_F6_S5_P5011').val());
    campo5023=$.trim($('#txt_F6_S5_P5023').val());
	campo5035=$.trim($('#txt_F6_S5_P5035').val());
	campo5047=$.trim($('#txt_F6_S5_P5047').val());
    campo5059=$.trim($('#txt_F6_S5_P5059').val());
	suma=eliminar_miles(campo5011)+eliminar_miles(campo5023)+eliminar_miles(campo5035)+eliminar_miles(campo5047);
             if ( suma != eliminar_miles(campo5059) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control depreciación acumulada No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S5_P5011').focus();
						$('#txt_F6_S5_P5011').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S5_P5060').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control depreciación acumulada No cuadra.");
                    $('#txt_F6_S5_P5011').focus();
                    $('#txt_F6_S5_P5011').select();
                    return false;
					}
            }  

    }  
       //Regla 70
 if ($(campo_j).attr('id')=='txt_F6_S5_P5060')
    {
    campo5012=$.trim($('#txt_F6_S5_P5012').val());
    campo5024=$.trim($('#txt_F6_S5_P5024').val());
	campo5036=$.trim($('#txt_F6_S5_P5036').val());
	campo5048=$.trim($('#txt_F6_S5_P5048').val());
    campo5060=$.trim($('#txt_F6_S5_P5060').val());
	suma=eliminar_miles(campo5012)+eliminar_miles(campo5024)+eliminar_miles(campo5036)+eliminar_miles(campo5048);
             if ( suma != eliminar_miles(campo5060) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control depreciación del ejercicio No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S5_P5012').focus();
						$('#txt_F6_S5_P5012').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P601').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control depreciación del ejercicio No cuadra.");
                    $('#txt_F6_S5_P5012').focus();
                    $('#txt_F6_S5_P5012').select();
                    return false;
					}
            }  

    }  
    //SECCION VI
     //Regla 71
 if ($(campo_j).attr('id')=='txt_F6_S6_P602')
    {
    campo601=$.trim($('#txt_F6_S6_P601').val());
    campo602=$.trim($(campo_j).val());
             if ( eliminar_miles(campo601) > 0 && eliminar_miles(campo602) == 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa cantidad de anchoveta, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P603').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de anchoveta, pero no valor en moneda utilizada.");
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
					}
            }  
    }  
     //Regla 72
 if ($(campo_j).attr('id')=='txt_F6_S6_P602')
    {
    campo601=$.trim($('#txt_F6_S6_P601').val());
    campo602=$.trim($(campo_j).val());
             if ( eliminar_miles(campo601) == 0 && eliminar_miles(campo602)> 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa valor en moneda utilizada de anchoveta, pero no cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S6_P601').focus();
						$('#txt_F6_S6_P601').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P603').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de anchoveta, pero no cantidad.");
                    $('#txt_F6_S6_P601').focus();
                    $('#txt_F6_S6_P601').select();
                    return false;
					}
            }  
    }
     //Regla 73
 if ($(campo_j).attr('id')=='txt_F6_S6_P604')
    {
    campo603=$.trim($('#txt_F6_S6_P603').val());
    campo604=$.trim($(campo_j).val());
             if ( eliminar_miles(campo603) > 0 && eliminar_miles(campo604) == 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa cantidad de jurel, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P605').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de jurel, pero no valor en moneda utilizada.");
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
					}
            }  
    }  
     //Regla 74
 if ($(campo_j).attr('id')=='txt_F6_S6_P604')
    {
    campo603=$.trim($('#txt_F6_S6_P603').val());
    campo604=$.trim($(campo_j).val());
             if ( eliminar_miles(campo603) == 0 && eliminar_miles(campo604)> 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa valor en moneda utilizada de jurel, pero no cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S6_P603').focus();
						$('#txt_F6_S6_P603').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P605').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de jurel, pero no cantidad.");
                    $('#txt_F6_S6_P603').focus();
                    $('#txt_F6_S6_P603').select();
                    return false;
					}
            }  
    }
     //Regla 75
 if ($(campo_j).attr('id')=='txt_F6_S6_P606')
    {
    campo605=$.trim($('#txt_F6_S6_P605').val());
    campo606=$.trim($(campo_j).val());
             if ( eliminar_miles(campo605) > 0 && eliminar_miles(campo606) == 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa cantidad de sardina, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P607').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de sardina, pero no valor en moneda utilizada.");
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
					}
            }  
    }  
     //Regla 76
 if ($(campo_j).attr('id')=='txt_F6_S6_P606')
    {
    campo605=$.trim($('#txt_F6_S6_P605').val());
    campo606=$.trim($(campo_j).val());
             if ( eliminar_miles(campo605) == 0 && eliminar_miles(campo606)> 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa valor en moneda utilizada de sardina, pero no cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S6_P605').focus();
						$('#txt_F6_S6_P605').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P607').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de sardina, pero no cantidad.");
                    $('#txt_F6_S6_P605').focus();
                    $('#txt_F6_S6_P605').select();
                    return false;
					}
            }  
    }
     //Regla 77
 if ($(campo_j).attr('id')=='txt_F6_S6_P608')
    {
    campo607=$.trim($('#txt_F6_S6_P607').val());
    campo608=$.trim($(campo_j).val());
             if ( eliminar_miles(campo607) > 0 && eliminar_miles(campo608) == 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa cantidad de caballa, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P609').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de caballa, pero no valor en moneda utilizada.");
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
					}
            }  
    }  
     //Regla 78
 if ($(campo_j).attr('id')=='txt_F6_S6_P608')
    {
    campo607=$.trim($('#txt_F6_S6_P607').val());
    campo608=$.trim($(campo_j).val());
             if ( eliminar_miles(campo607) == 0 && eliminar_miles(campo608)> 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa valor en moneda utilizada de caballa, pero no cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S6_P607').focus();
						$('#txt_F6_S6_P607').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P609').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de caballa, pero no cantidad.");
                    $('#txt_F6_S6_P607').focus();
                    $('#txt_F6_S6_P607').select();
                    return false;
					}
            }  
    }
     //Regla 79
 if ($(campo_j).attr('id')=='txt_F6_S6_P610')
    {
    campo609=$.trim($('#txt_F6_S6_P609').val());
    campo610=$.trim($(campo_j).val());
             if ( eliminar_miles(campo609) > 0 && eliminar_miles(campo610) == 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa cantidad de merluza austral, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P611').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de merluza austral, pero no valor en moneda utilizada.");
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
					}
            }  
    }  
     //Regla 80
 if ($(campo_j).attr('id')=='txt_F6_S6_P610')
    {
    campo609=$.trim($('#txt_F6_S6_P609').val());
    campo610=$.trim($(campo_j).val());
             if ( eliminar_miles(campo609) == 0 && eliminar_miles(campo610)> 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa valor en moneda utilizada de merluza austral, pero no cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S6_P609').focus();
						$('#txt_F6_S6_P609').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P611').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de merluza austral, pero no cantidad.");
                    $('#txt_F6_S6_P609').focus();
                    $('#txt_F6_S6_P609').select();
                    return false;
					}
            }  
    }
     //Regla 81
 if ($(campo_j).attr('id')=='txt_F6_S6_P612')
    {
    campo611=$.trim($('#txt_F6_S6_P611').val());
    campo612=$.trim($(campo_j).val());
             if ( eliminar_miles(campo611) > 0 && eliminar_miles(campo612) == 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa cantidad de merluza gayi, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P613').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de merluza gayi, pero no valor en moneda utilizada.");
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
					}
            }  
    }  
     //Regla 82
 if ($(campo_j).attr('id')=='txt_F6_S6_P612')
    {
    campo611=$.trim($('#txt_F6_S6_P611').val());
    campo612=$.trim($(campo_j).val());
             if ( eliminar_miles(campo611) == 0 && eliminar_miles(campo612)> 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa valor en moneda utilizada de merluza gayi, pero no cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S6_P611').focus();
						$('#txt_F6_S6_P611').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P613').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de merluza gayi, pero no cantidad.");
                    $('#txt_F6_S6_P611').focus();
                    $('#txt_F6_S6_P611').select();
                    return false;
					}
            }  
    }
     //Regla 83
 if ($(campo_j).attr('id')=='txt_F6_S6_P614')
    {
    campo613=$.trim($('#txt_F6_S6_P613').val());
    campo614=$.trim($(campo_j).val());
             if ( eliminar_miles(campo613) > 0 && eliminar_miles(campo614) == 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa cantidad de otras especies, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P615').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de otras especies, pero no valor en moneda utilizada.");
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
					}
            }  
    }  
     //Regla 84
 if ($(campo_j).attr('id')=='txt_F6_S6_P614')
    {
    campo613=$.trim($('#txt_F6_S6_P613').val());
    campo614=$.trim($(campo_j).val());
             if ( eliminar_miles(campo613) == 0 && eliminar_miles(campo614)> 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa valor en moneda utilizada de otras especies, pero no cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S6_P613').focus();
						$('#txt_F6_S6_P613').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P615').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de otras especies, pero no cantidad.");
                    $('#txt_F6_S6_P613').focus();
                    $('#txt_F6_S6_P613').select();
                    return false;
					}
            }  
    }
     //Regla 85
 if ($(campo_j).attr('id')=='txt_F6_S6_P616')
    {
    campo615=$.trim($('#txt_F6_S6_P615').val());
    campo616=$.trim($(campo_j).val());
             if ( eliminar_miles(campo615) > 0 && eliminar_miles(campo616) == 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa cantidad de entregas a terceros, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P617').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de entregas a terceros, pero no valor en moneda utilizada.");
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
					}
            }  
    }  
     //Regla 86
 if ($(campo_j).attr('id')=='txt_F6_S6_P616')
    {
    campo615=$.trim($('#txt_F6_S6_P615').val());
    campo616=$.trim($(campo_j).val());
             if ( eliminar_miles(campo615) == 0 && eliminar_miles(campo616)> 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa valor en moneda utilizada de entregas a terceros, pero no cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S6_P615').focus();
						$('#txt_F6_S6_P615').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P617').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de entregas a terceros, pero no cantidad.");
                    $('#txt_F6_S6_P615').focus();
                    $('#txt_F6_S6_P615').select();
                    return false;
					}
            }  
    }
    //Regla 87
 if ($(campo_j).attr('id')=='txt_F6_S6_P613')
    {
    campo613=$.trim($(campo_j).val());
             if ( eliminar_miles(campo613) > 0 &&  $.trim($('#txt_F6_S6_P613_E').val()).length == 0 )
            {
					if(!confirm('Advertencia: No especifica otras especies.\n ¿Desea continuar?')){
					$('#txt_F6_S5_P613_E').focus();
					$('#txt_F6_S5_P613_E').select();
					return false;
					}else{
					flag_2 = true;
					$('#txt_F6_S6_P614').focus();
					return false;
					}
            }  
    }  
       //Regla 88
 if ($(campo_j).attr('id')=='txt_F6_S6_P5060')
    {
    campo601=$.trim($('#txt_F6_S6_P601').val());
    campo603=$.trim($('#txt_F6_S6_P603').val());
	campo605=$.trim($('#txt_F6_S6_P605').val());
	campo607=$.trim($('#txt_F6_S6_P607').val());
    campo609=$.trim($('#txt_F6_S6_P609').val());
	campo611=$.trim($('#txt_F6_S6_P611').val());
	campo613=$.trim($('#txt_F6_S6_P613').val());
	campo615=$.trim($('#txt_F6_S6_P615').val());
    campo617=$.trim($('#txt_F6_S6_P617').val());
	suma=eliminar_miles(campo601)+eliminar_miles(campo603)+eliminar_miles(campo605)+eliminar_miles(campo607)+eliminar_miles(campo609)+eliminar_miles(campo611)+eliminar_miles(campo613)+eliminar_miles(campo615);
             if ( suma != eliminar_miles(campo617) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control cantidad de captura No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S6_P601').focus();
						$('#txt_F6_S6_P601').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_P618').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control cantidad de captura No cuadra.");
                    $('#txt_F6_S6_P601').focus();
                    $('#txt_F6_S6_P601').select();
                    return false;
					}
            }  

    }  
     //Regla 89
 if ($(campo_j).attr('id')=='txt_F6_S6_P618')
    {
    campo617=$.trim($('#txt_F6_S6_P617').val());
    campo618=$.trim($(campo_j).val());
             if ( eliminar_miles(campo617) > 0 && eliminar_miles(campo618) == 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa cantidad de total de control captura, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_PObs').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de total de control captura, pero no valor en moneda utilizada.");
                    $(campo_j).focus();
                    $(campo_j).select();
                    return false;
					}
            }  
    }  
       //Regla 90
 if ($(campo_j).attr('id')=='txt_F6_S6_P618')
    {
    campo602=$.trim($('#txt_F6_S6_P602').val());
    campo604=$.trim($('#txt_F6_S6_P604').val());
	campo606=$.trim($('#txt_F6_S6_P606').val());
	campo608=$.trim($('#txt_F6_S6_P608').val());
    campo610=$.trim($('#txt_F6_S6_P610').val());
	campo612=$.trim($('#txt_F6_S6_P612').val());
	campo614=$.trim($('#txt_F6_S6_P614').val());
	campo616=$.trim($('#txt_F6_S6_P616').val());
    campo618=$.trim($('#txt_F6_S6_P618').val());
	suma=eliminar_miles(campo602)+eliminar_miles(campo604)+eliminar_miles(campo606)+eliminar_miles(campo608)+eliminar_miles(campo610)+eliminar_miles(campo612)+eliminar_miles(campo614)+eliminar_miles(campo616);
             if ( suma != eliminar_miles(campo618) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control valor de captura No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S6_P602').focus();
						$('#txt_F6_S6_P602').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_PObs').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control valor de captura No cuadra.");
                    $('#txt_F6_S6_P602').focus();
                    $('#txt_F6_S6_P602').select();
                    return false;
					}
            }  

    }  
     //Regla 91
 if ($(campo_j).attr('id')=='txt_F6_S6_P618')
    {
    campo617=$.trim($('#txt_F6_S6_P617').val());
    campo618=$.trim($(campo_j).val());
             if ( eliminar_miles(campo617) == 0 && eliminar_miles(campo618)> 0 )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa valor en total de control captura, pero no cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S6_P617').focus();
						$('#txt_F6_S6_P617').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S6_PObs').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en total de control captura, pero no cantidad.");
                    $('#txt_F6_S6_P617').focus();
                    $('#txt_F6_S6_P617').select();
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
     //Regla 41
    if ($(campo_j).attr('id')=='txt_F6_S3_P301')
	{
		campo301=$.trim($('#txt_F6_S3_P301').val());
        if ( eliminar_miles(campo301)== 0 )
            {
					mensaje=mensaje +("Campo 301 - Advertencia: Flota no compra alimentación para el personal. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
            }  

	}  
    //Regla 42
if ($(campo_j).attr('id')=='txt_F6_S3_P302')
    {
		campo302=$.trim($('#txt_F6_S3_P302').val());
        if ( eliminar_miles(campo302)== 0 )
            {
				mensaje=mensaje +("Campo 302 - Advertencia: Flota no compra hielo. \n");
                $(campo_j).css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
            }  

    } 
    //Regla 43
if ($(campo_j).attr('id')=='txt_F6_S3_P303')
    {
		campo303=$.trim($('#txt_F6_S3_P303').val());
        if ( eliminar_miles(campo303)== 0 )
            {
				mensaje=mensaje +("Campo 303 - Advertencia: Flota no compra elementos de trabajo, aparejos y materiales de pesca. \n");
                $(campo_j).css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
            }  

    }   
    // Regla 44
if ($(campo_j).attr('id')=='txt_F6_S3_P306')
    {
	suma=0
	for (i=1;i<6;i++)
	{
			campo=$.trim($('#txt_F6_S3_P30'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	campo306=$.trim($('#txt_F6_S3_P306').val());
	 if (suma != eliminar_miles(campo306))
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 306 - Advertencia: Total de Control compra de insumos y materiales No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 306 - Error: Total de Control compra de insumos y materiales No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
                }
    }
     //Regla 45
 if ($(campo_j).attr('id')=='txt_F6_S3_P313')
    {
    campo307=$.trim($('#txt_F6_S3_P307').val());
    campo309=$.trim($('#txt_F6_S3_P309').val());
    campo311=$.trim($('#txt_F6_S3_P311').val());
	campo313=$.trim($('#txt_F6_S3_P313').val());
	suma=eliminar_miles(campo307)+eliminar_miles(campo309)+eliminar_miles(campo311);
             if ( suma != eliminar_miles(campo313) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 313 - Advertencia: Total de control de combustibles No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 313 - Error: Total de control de combustibles No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 46
 if ($(campo_j).attr('id')=='txt_F6_S3_P308')
    {
    campo307=$.trim($('#txt_F6_S3_P307').val());
    campo308=$.trim($(campo_j).val());
             if ( eliminar_miles(campo307) > 0 && eliminar_miles(campo308) == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 308 - Advertencia: Informa cantidad de petróleo combustible, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 308 - Error: Informa cantidad de petróleo combustible, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 47
 if ($(campo_j).attr('id')=='txt_F6_S3_P308')
    {
    campo307=$.trim($('#txt_F6_S3_P307').val());
    campo308=$.trim($(campo_j).val());
             if ( eliminar_miles(campo307) == 0 && eliminar_miles(campo308) > 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 307 - Advertencia: Informa valor en moneda utilizada de petróleo combustible, pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 307 - Error: Informa valor en moneda utilizada de petróleo combustible, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 48
 if ($(campo_j).attr('id')=='txt_F6_S3_P310')
    {
    campo309=$.trim($('#txt_F6_S3_P309').val());
    campo310=$.trim($(campo_j).val());
             if ( eliminar_miles(campo309) > 0 && eliminar_miles(campo310) == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 310 - Advertencia: Informa cantidad petróleo diesel, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 310 - Error: Informa cantidad petróleo diesel, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 49
 if ($(campo_j).attr('id')=='txt_F6_S3_P310')
    {
    campo309=$.trim($('#txt_F6_S3_P309').val());
    campo310=$.trim($(campo_j).val());
             if ( eliminar_miles(campo309) == 0 && eliminar_miles(campo310) > 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 309 - Advertencia: Informa valor en moneda utilizada de petróleo diesel, pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 309 - Error: Informa valor en moneda utilizada de petróleo diesel, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    } 
     //Regla 50
 if ($(campo_j).attr('id')=='txt_F6_S3_P312')
    {
    campo311=$.trim($('#txt_F6_S3_P311').val());
    campo312=$.trim($(campo_j).val());
             if ( eliminar_miles(campo311) > 0 && eliminar_miles(campo312) == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 312 - Advertencia: Informa cantidad de lubricantes, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 312 - Error: Informa cantidad de lubricantes, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 51
 if ($(campo_j).attr('id')=='txt_F6_S3_P312')
    {
    campo311=$.trim($('#txt_F6_S3_P311').val());
    campo312=$.trim($(campo_j).val());
             if ( eliminar_miles(campo311) == 0 && eliminar_miles(campo312)> 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 311 - Advertencia: Informa valor en moneda utilizada de lubricantes, pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 311 - Error: Informa valor en moneda utilizada de lubricantes, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }   
     //Regla 52
 if ($(campo_j).attr('id')=='txt_F6_S3_P314')
    {
    campo313=$.trim($('#txt_F6_S3_P313').val());
    campo314=$.trim($(campo_j).val());
             if ( eliminar_miles(campo313) > 0 && eliminar_miles(campo314) == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 314 - Advertencia: Informa cantidad en total de control de lubricantes, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 314 - Error: Informa cantidad en total de control de lubricantes, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }  
     //Regla 53
 if ($(campo_j).attr('id')=='txt_F6_S3_P314')
    {
    campo313=$.trim($('#txt_F6_S3_P313').val());
    campo314=$.trim($(campo_j).val());
             if ( eliminar_miles(campo313) == 0 && eliminar_miles(campo314)> 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 313 - Advertencia: Informa valor en moneda utilizada de total de control combustibles y lubricantes, pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 313 - Error: Informa valor en moneda utilizada de total de control combustibles y lubricantes, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }
        //Regla 54
 if ($(campo_j).attr('id')=='txt_F6_S3_P314')
    {
    campo308=$.trim($('#txt_F6_S3_P308').val());
    campo310=$.trim($('#txt_F6_S3_P310').val());
    campo312=$.trim($('#txt_F6_S3_P312').val());
	campo314=$.trim($('#txt_F6_S3_P314').val());
	suma=eliminar_miles(campo308)+eliminar_miles(campo310)+eliminar_miles(campo312);
             if ( suma != eliminar_miles(campo314) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 314 - Advertencia: Total de control valor Combustibles y lubricantes No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 314 - Error: Total de control valor Combustibles y lubricantes No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }  
        //Regla 55
 if ($(campo_j).attr('id')=='txt_F6_S4_P408')
    {
    campo308=$.trim($(campo_j).val());
             if ( eliminar_miles(campo314) > 0 &&  $.trim($('#txt_F6_S4_P408_E').val()).length == 0 )
            {
					mensaje=mensaje +("Campo 408_E - Advertencia: No especifica otras reparaciones. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
            }  
    }  
        // Regla 56
if ($(campo_j).attr('id')=='txt_F6_S4_P409')
    {
	suma=0
	for (i=1;i<9;i++)
	{
		campo=$.trim($('#txt_F6_S4_P40'+i).val());
			if (campo=="")
			{
				campo=0;
			}
        suma=eliminar_miles(campo)+suma;
    } 
    campo409=$.trim($(campo_j).val());
	 if (suma != eliminar_miles(campo409))
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 409 - Advertencia: Total de control Gastos Generales No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 409 - Error: Total de control Gastos Generales No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
                }
    }
        // Regla 57
if ($(campo_j).attr('id')=='txt_F6_S5_P5060')
    {
	suma=0
	for (i=1;i<61;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F6_S5_P500'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F6_S5_P50'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
					mensaje=mensaje +("Campo 5001 al 5060 - Advertencia: No informa movimiento en el activo fijo. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
                }
    }
     //Regla 58
 if ($(campo_j).attr('id')=='txt_F6_S5_P5037')
    {
    campo5037=$.trim($(campo_j).val());
             if ( eliminar_miles(campo5037) > 0 &&  $.trim($('#txt_F6_S5_P5037_E').val()).length == 0 )
            {
				mensaje=mensaje +("Campo 5037_E - Advertencia: No especifica otros activos fijos. \n");
                $(campo_j).css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
            }  
    }  
       //Regla 59   
 if ($(campo_j).attr('id')=='txt_F6_S5_P5049')
    {
    campo5001=$.trim($('#txt_F6_S5_P5001').val());
    campo5013=$.trim($('#txt_F6_S5_P5013').val());
	campo5025=$.trim($('#txt_F6_S5_P5025').val());
	campo5037=$.trim($('#txt_F6_S5_P5037').val());
    campo5049=$.trim($('#txt_F6_S5_P5049').val());
	suma=eliminar_miles(campo5001)+eliminar_miles(campo5013)+eliminar_miles(campo5025)+eliminar_miles(campo5037);
             if ( suma != eliminar_miles(campo5049) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5049 - Advertencia: Total de control valor neto inicial del ejercicio No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5049 - Error: Total de control valor neto inicial del ejercicio No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
       //Regla 60  
 if ($(campo_j).attr('id')=='txt_F6_S5_P5050')
    {
    campo5002=$.trim($('#txt_F6_S5_P5002').val());
    campo5014=$.trim($('#txt_F6_S5_P5014').val());
	campo5026=$.trim($('#txt_F6_S5_P5026').val());
	campo5038=$.trim($('#txt_F6_S5_P5038').val());
    campo5050=$.trim($('#txt_F6_S5_P5050').val());
	suma=eliminar_miles(campo5002)+eliminar_miles(campo5014)+eliminar_miles(campo5026)+eliminar_miles(campo5038);
             if ( suma != eliminar_miles(campo5050) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5050 - Advertencia: Total de control compra de bienes nuevos No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5050 - Error: Total de control compra de bienes nuevos No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
       //Regla 61  
 if ($(campo_j).attr('id')=='txt_F6_S5_P5051')
    {
    campo5003=$.trim($('#txt_F6_S5_P5003').val());
    campo5015=$.trim($('#txt_F6_S5_P5015').val());
	campo5027=$.trim($('#txt_F6_S5_P5027').val());
	campo5039=$.trim($('#txt_F6_S5_P5039').val());
    campo5051=$.trim($('#txt_F6_S5_P5051').val());
	suma=eliminar_miles(campo5003)+eliminar_miles(campo5015)+eliminar_miles(campo5027)+eliminar_miles(campo5039);
             if ( suma != eliminar_miles(campo5051) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5051 - Advertencia: Total de control compra de bienes usados No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5051 - Error: Total de control compra de bienes usados No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
       //Regla 62 
 if ($(campo_j).attr('id')=='txt_F6_S5_P5052')
    {
    campo5004=$.trim($('#txt_F6_S5_P5004').val());
    campo5016=$.trim($('#txt_F6_S5_P5016').val());
	campo5028=$.trim($('#txt_F6_S5_P5028').val());
	campo5040=$.trim($('#txt_F6_S5_P5040').val());
    campo5052=$.trim($('#txt_F6_S5_P5052').val());
	suma=eliminar_miles(campo5004)+eliminar_miles(campo5016)+eliminar_miles(campo5028)+eliminar_miles(campo5040);
             if ( suma != eliminar_miles(campo5052) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5052 - Advertencia: Total de control reformas y mejoras efectuadas por terceros No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5052 - Error: Total de control reformas y mejoras efectuadas por terceros No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
       //Regla 63
 if ($(campo_j).attr('id')=='txt_F6_S5_P5053')
    {
    campo5005=$.trim($('#txt_F6_S5_P5005').val());
    campo5017=$.trim($('#txt_F6_S5_P5017').val());
	campo5029=$.trim($('#txt_F6_S5_P5029').val());
	campo5041=$.trim($('#txt_F6_S5_P5041').val());
    campo5053=$.trim($('#txt_F6_S5_P5053').val());
	suma=eliminar_miles(campo5005)+eliminar_miles(campo5017)+eliminar_miles(campo5029)+eliminar_miles(campo5041);
             if ( suma != eliminar_miles(campo5053) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5053 - Advertencia: Total de control reformas y mejoras efectuadas por trabajadores del mismo establecimiento No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5053 - Error: Total de control reformas y mejoras efectuadas por trabajadores del mismo establecimiento No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
       //Regla 64
 if ($(campo_j).attr('id')=='txt_F6_S5_P5054')
    {
    campo5006=$.trim($('#txt_F6_S5_P5006').val());
    campo5018=$.trim($('#txt_F6_S5_P5018').val());
	campo5030=$.trim($('#txt_F6_S5_P5030').val());
	campo5042=$.trim($('#txt_F6_S5_P5042').val());
    campo5054=$.trim($('#txt_F6_S5_P5054').val());
	suma=eliminar_miles(campo5006)+eliminar_miles(campo5018)+eliminar_miles(campo5030)+eliminar_miles(campo5042);
             if ( suma != eliminar_miles(campo5054) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5054 - Advertencia: Total de control valor de obras en curso No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5054 - Error: Total de control valor de obras en curso No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
       //Regla 65
 if ($(campo_j).attr('id')=='txt_F6_S5_P5055')
    {
    campo5007=$.trim($('#txt_F6_S5_P5007').val());
    campo5019=$.trim($('#txt_F6_S5_P5019').val());
	campo5031=$.trim($('#txt_F6_S5_P5031').val());
	campo5043=$.trim($('#txt_F6_S5_P5043').val());
    campo5055=$.trim($('#txt_F6_S5_P5055').val());
	suma=eliminar_miles(campo5007)+eliminar_miles(campo5019)+eliminar_miles(campo5031)+eliminar_miles(campo5043);
             if ( suma != eliminar_miles(campo5055) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5055 - Advertencia: Total de control ventas No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5055 - Error: Total de control ventas No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
       //Regla 66
 if ($(campo_j).attr('id')=='txt_F6_S5_P5056')
    {
    campo5008=$.trim($('#txt_F6_S5_P5008').val());
    campo5020=$.trim($('#txt_F6_S5_P5020').val());
	campo5032=$.trim($('#txt_F6_S5_P5032').val());
	campo5044=$.trim($('#txt_F6_S5_P5044').val());
    campo5056=$.trim($('#txt_F6_S5_P5056').val());
	suma=eliminar_miles(campo5008)+eliminar_miles(campo5020)+eliminar_miles(campo5032)+eliminar_miles(campo5044);
             if ( suma != eliminar_miles(campo5056) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5056 - Advertencia: Total de control retiros No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5056 - Error: Total de control retiros No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
       //Regla 67
 if ($(campo_j).attr('id')=='txt_F6_S5_P5057')
    {
    campo5009=$.trim($('#txt_F6_S5_P5009').val());
    campo5021=$.trim($('#txt_F6_S5_P5021').val());
	campo5033=$.trim($('#txt_F6_S5_P5033').val());
	campo5045=$.trim($('#txt_F6_S5_P5045').val());
    campo5057=$.trim($('#txt_F6_S5_P5057').val());
	suma=eliminar_miles(campo5009)+eliminar_miles(campo5021)+eliminar_miles(campo5033)+eliminar_miles(campo5045);
             if ( suma != eliminar_miles(campo5057) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5057 - Advertencia: Total de control corrección monetaria No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5057 - Error: Total de control corrección monetaria No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
       //Regla 68
 if ($(campo_j).attr('id')=='txt_F6_S5_P5058')
    {
    campo5010=$.trim($('#txt_F6_S5_P5010').val());
    campo5022=$.trim($('#txt_F6_S5_P5022').val());
	campo5034=$.trim($('#txt_F6_S5_P5034').val());
	campo5046=$.trim($('#txt_F6_S5_P5046').val());
    campo5058=$.trim($('#txt_F6_S5_P5058').val());
	suma=eliminar_miles(campo5010)+eliminar_miles(campo5022)+eliminar_miles(campo5034)+eliminar_miles(campo5046);
             if ( suma != eliminar_miles(campo5058) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5058 - Advertencia: Total de control valor neto al final del ejercicio No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5058 - Error: Total de control valor neto al final del ejercicio No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
       //Regla 69
 if ($(campo_j).attr('id')=='txt_F6_S5_P5059')
    {
    campo5011=$.trim($('#txt_F6_S5_P5011').val());
    campo5023=$.trim($('#txt_F6_S5_P5023').val());
	campo5035=$.trim($('#txt_F6_S5_P5035').val());
	campo5047=$.trim($('#txt_F6_S5_P5047').val());
    campo5059=$.trim($('#txt_F6_S5_P5059').val());
	suma=eliminar_miles(campo5011)+eliminar_miles(campo5023)+eliminar_miles(campo5035)+eliminar_miles(campo5047);
             if ( suma != eliminar_miles(campo5059) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5059 - Advertencia: Total de control depreciación acumulada No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5059 - Error: Total de control depreciación acumulada No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
       //Regla 70
 if ($(campo_j).attr('id')=='txt_F6_S5_P5060')
    {
    campo5012=$.trim($('#txt_F6_S5_P5012').val());
    campo5024=$.trim($('#txt_F6_S5_P5024').val());
	campo5036=$.trim($('#txt_F6_S5_P5036').val());
	campo5048=$.trim($('#txt_F6_S5_P5048').val());
    campo5060=$.trim($('#txt_F6_S5_P5060').val());
	suma=eliminar_miles(campo5012)+eliminar_miles(campo5024)+eliminar_miles(campo5036)+eliminar_miles(campo5048);
             if ( suma != eliminar_miles(campo5060) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 5060 - Advertencia: Total de control depreciación del ejercicio No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 5060 - Error: Total de control depreciación del ejercicio No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
    //SECCION VI
     //Regla 71
 if ($(campo_j).attr('id')=='txt_F6_S6_P602')
    {
    campo601=$.trim($('#txt_F6_S6_P601').val());
    campo602=$.trim($(campo_j).val());
             if ( eliminar_miles(campo601) > 0 && eliminar_miles(campo602) == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 602 - Advertencia: Informa cantidad de anchoveta, pero no valor en moneda utilizad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 602 - Error: Informa cantidad de anchoveta, pero no valor en moneda utilizad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }  
     //Regla 72
 if ($(campo_j).attr('id')=='txt_F6_S6_P602')
    {
    campo601=$.trim($('#txt_F6_S6_P601').val());
    campo602=$.trim($(campo_j).val());
             if ( eliminar_miles(campo601) == 0 && eliminar_miles(campo602)> 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 601 - Advertencia: Informa valor en moneda utilizada de anchoveta, pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 601 - Error: Informa valor en moneda utilizada de anchoveta, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }
     //Regla 73
 if ($(campo_j).attr('id')=='txt_F6_S6_P604')
    {
    campo603=$.trim($('#txt_F6_S6_P603').val());
    campo604=$.trim($(campo_j).val());
             if ( eliminar_miles(campo603) > 0 && eliminar_miles(campo604) == 0 )
            {	
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 604 - Advertencia: Informa cantidad de jurel, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 604 - Error: Informa cantidad de jurel, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }  
     //Regla 74
 if ($(campo_j).attr('id')=='txt_F6_S6_P604')
    {
    campo603=$.trim($('#txt_F6_S6_P603').val());
    campo604=$.trim($(campo_j).val());
             if ( eliminar_miles(campo603) == 0 && eliminar_miles(campo604)> 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 603 - Advertencia: Informa valor en moneda utilizada de jurel, pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 603 - Error: Informa valor en moneda utilizada de jurel, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }
     //Regla 75
 if ($(campo_j).attr('id')=='txt_F6_S6_P606')
    {
    campo605=$.trim($('#txt_F6_S6_P605').val());
    campo606=$.trim($(campo_j).val());
             if ( eliminar_miles(campo605) > 0 && eliminar_miles(campo606) == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 606 - Advertencia: Informa cantidad de sardina, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 606 - Error: Informa cantidad de sardina, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }  
     //Regla 76
 if ($(campo_j).attr('id')=='txt_F6_S6_P606')
    {
    campo605=$.trim($('#txt_F6_S6_P605').val());
    campo606=$.trim($(campo_j).val());
             if ( eliminar_miles(campo605) == 0 && eliminar_miles(campo606)> 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 605 - Advertencia: Informa valor en moneda utilizada de sardina, pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 605 - Error: Informa valor en moneda utilizada de sardina, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
			}  
    }
     //Regla 77
 if ($(campo_j).attr('id')=='txt_F6_S6_P608')
    {
    campo607=$.trim($('#txt_F6_S6_P607').val());
    campo608=$.trim($(campo_j).val());
             if ( eliminar_miles(campo607) > 0 && eliminar_miles(campo608) == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 608 - Advertencia: Informa cantidad de caballa, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 608 - Error: Informa cantidad de caballa, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }  
     //Regla 78
 if ($(campo_j).attr('id')=='txt_F6_S6_P608')
    {
    campo607=$.trim($('#txt_F6_S6_P607').val());
    campo608=$.trim($(campo_j).val());
             if ( eliminar_miles(campo607) == 0 && eliminar_miles(campo608)> 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 607 - Advertencia: Informa valor en moneda utilizada de caballa, pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 607 - Error: Informa valor en moneda utilizada de caballa, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }
     //Regla 79
 if ($(campo_j).attr('id')=='txt_F6_S6_P610')
    {
    campo609=$.trim($('#txt_F6_S6_P609').val());
    campo610=$.trim($(campo_j).val());
             if ( eliminar_miles(campo609) > 0 && eliminar_miles(campo610) == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 610 - Advertencia: Informa cantidad de merluza austral, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 610 - Error: Informa cantidad de merluza austral, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }  
     //Regla 80
 if ($(campo_j).attr('id')=='txt_F6_S6_P610')
    {
    campo609=$.trim($('#txt_F6_S6_P609').val());
    campo610=$.trim($(campo_j).val());
             if ( eliminar_miles(campo609) == 0 && eliminar_miles(campo610)> 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 609 - Advertencia: Informa valor en moneda utilizada de merluza austral, pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 609 - Error: Informa valor en moneda utilizada de merluza austral, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }
     //Regla 81
 if ($(campo_j).attr('id')=='txt_F6_S6_P612')
    {
    campo611=$.trim($('#txt_F6_S6_P611').val());
    campo612=$.trim($(campo_j).val());
             if ( eliminar_miles(campo611) > 0 && eliminar_miles(campo612) == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 612 - Advertencia: Informa cantidad de merluza gayi, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 612 - Error: Informa cantidad de merluza gayi, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }  
     //Regla 82
 if ($(campo_j).attr('id')=='txt_F6_S6_P612')
    {
    campo611=$.trim($('#txt_F6_S6_P611').val());
    campo612=$.trim($(campo_j).val());
             if ( eliminar_miles(campo611) == 0 && eliminar_miles(campo612)> 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 611 - Advertencia: Informa valor en moneda utilizada de merluza gayi, pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 611 - Error: Informa valor en moneda utilizada de merluza gayi, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }
     //Regla 83
 if ($(campo_j).attr('id')=='txt_F6_S6_P614')
    {
    campo613=$.trim($('#txt_F6_S6_P613').val());
    campo614=$.trim($(campo_j).val());
             if ( eliminar_miles(campo613) > 0 && eliminar_miles(campo614) == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 614 - Advertencia: Informa cantidad de otras especies, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 614 - Error: Informa cantidad de otras especies, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }  
     //Regla 84
 if ($(campo_j).attr('id')=='txt_F6_S6_P614')
    {
    campo613=$.trim($('#txt_F6_S6_P613').val());
    campo614=$.trim($(campo_j).val());
             if ( eliminar_miles(campo613) == 0 && eliminar_miles(campo614)> 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 613 - Advertencia: Informa valor en moneda utilizada de otras especies, pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 613 - Error: Informa valor en moneda utilizada de otras especies, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }
     //Regla 85
 if ($(campo_j).attr('id')=='txt_F6_S6_P616')
    {
    campo615=$.trim($('#txt_F6_S6_P615').val());
    campo616=$.trim($(campo_j).val());
             if ( eliminar_miles(campo615) > 0 && eliminar_miles(campo616) == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 616 - Advertencia: Informa cantidad de entregas a terceros, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 616 - Error: Informa cantidad de entregas a terceros, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }  
     //Regla 86
 if ($(campo_j).attr('id')=='txt_F6_S6_P616')
    {
    campo615=$.trim($('#txt_F6_S6_P615').val());
    campo616=$.trim($(campo_j).val());
             if ( eliminar_miles(campo615) == 0 && eliminar_miles(campo616)> 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 615 - Advertencia: Informa valor en moneda utilizada de entregas a terceros, pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 615 - Error: Informa valor en moneda utilizada de entregas a terceros, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }
    //Regla 87
 if ($(campo_j).attr('id')=='txt_F6_S6_P613')
    {
    campo613=$.trim($(campo_j).val());
             if ( eliminar_miles(campo613) > 0 &&  $.trim($('#txt_F6_S6_P613_E').val()).length == 0 )
            {
				mensaje=mensaje +("Campo 613_E - Advertencia: No especifica otras especies. \n");
                $(campo_j).css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
            }  
    }  
       //Regla 88
 if ($(campo_j).attr('id')=='txt_F6_S6_P5060')
    {
    campo601=$.trim($('#txt_F6_S6_P601').val());
    campo603=$.trim($('#txt_F6_S6_P603').val());
	campo605=$.trim($('#txt_F6_S6_P605').val());
	campo607=$.trim($('#txt_F6_S6_P607').val());
    campo609=$.trim($('#txt_F6_S6_P609').val());
	campo611=$.trim($('#txt_F6_S6_P611').val());
	campo613=$.trim($('#txt_F6_S6_P613').val());
	campo615=$.trim($('#txt_F6_S6_P615').val());
    campo617=$.trim($('#txt_F6_S6_P617').val());
	suma=eliminar_miles(campo601)+eliminar_miles(campo603)+eliminar_miles(campo605)+eliminar_miles(campo607)+eliminar_miles(campo609)+eliminar_miles(campo611)+eliminar_miles(campo613)+eliminar_miles(campo615);
             if ( suma != eliminar_miles(campo617) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 617 - Advertencia: Total de control cantidad de captura No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 617 - Error: Total de control cantidad de captura No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 89
 if ($(campo_j).attr('id')=='txt_F6_S6_P618')
    {
    campo617=$.trim($('#txt_F6_S6_P617').val());
    campo618=$.trim($(campo_j).val());
             if ( eliminar_miles(campo617) > 0 && eliminar_miles(campo618) == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 618 - Advertencia: Informa cantidad de total de control captura, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 618 - Error: Informa cantidad de total de control captura, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }  
       //Regla 90
 if ($(campo_j).attr('id')=='txt_F6_S6_P5060')
    {
    campo602=$.trim($('#txt_F6_S6_P602').val());
    campo604=$.trim($('#txt_F6_S6_P604').val());
	campo606=$.trim($('#txt_F6_S6_P606').val());
	campo608=$.trim($('#txt_F6_S6_P608').val());
    campo610=$.trim($('#txt_F6_S6_P610').val());
	campo612=$.trim($('#txt_F6_S6_P612').val());
	campo614=$.trim($('#txt_F6_S6_P614').val());
	campo616=$.trim($('#txt_F6_S6_P616').val());
    campo618=$.trim($('#txt_F6_S6_P618').val());
	suma=eliminar_miles(campo602)+eliminar_miles(campo604)+eliminar_miles(campo606)+eliminar_miles(campo608)+eliminar_miles(campo610)+eliminar_miles(campo612)+eliminar_miles(campo614)+eliminar_miles(campo616);
             if ( suma != eliminar_miles(campo618) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 618 - Advertencia: Total de control valor de captura No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 618 - Error: Total de control valor de captura No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 91
 if ($(campo_j).attr('id')=='txt_F6_S6_P618')
    {
    campo617=$.trim($('#txt_F6_S6_P617').val());
    campo618=$.trim($(campo_j).val());
             if ( eliminar_miles(campo617) == 0 && eliminar_miles(campo618)> 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 617 - Advertencia: Informa valor en total de control captura, pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 617 - Error: Informa valor en total de control captura, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  
    }    
        
         });
    return [advertencia,error,foco[0],mensaje];
}

