camposDecimal = [];
camposletra=['txt_F2_S3_P337','txt_F2_S3_P360_E','txt_F2_S4_P434_E','txt_F2_S4_P409_E'];
camposMiles=['txt_F2_S3_P323','txt_F2_S3_P324','txt_F2_S3_P325','txt_F2_S3_P326',
'txt_F2_S3_P327','txt_F2_S3_P328','txt_F2_S3_P329','txt_F2_S3_P330','txt_F2_S3_P331','txt_F2_S3_P332','txt_F2_S3_P333',
'txt_F2_S3_P334','txt_F2_S3_P335','txt_F2_S3_P336','txt_F2_S3_P337','txt_F2_S3_P338','txt_F2_S3_P339','txt_F2_S3_P340',
'txt_F2_S3_P341','txt_F2_S3_P342','txt_F2_S3_P343','txt_F2_S3_P344','txt_F2_S3_P345','txt_F2_S3_P346','txt_F2_S3_P347',
'txt_F2_S3_P348','txt_F2_S3_P349','txt_F2_S3_P350','txt_F2_S3_P351','txt_F2_S3_P352','txt_F2_S3_P353','txt_F2_S3_P354',
'txt_F2_S3_P355','txt_F2_S3_P356','txt_F2_S3_P357','txt_F2_S3_P358','txt_F2_S3_P359','txt_F2_S3_P360','txt_F2_S3_P361',
'txt_F2_S3_P362','txt_F2_S4_P401','txt_F2_S4_P402','txt_F2_S4_P403','txt_F2_S4_P404','txt_F2_S4_P405','txt_F2_S4_P406',
'txt_F2_S4_P407','txt_F2_S4_P408','txt_F2_S4_P409','txt_F2_S4_P410','txt_F2_S4_P411','txt_F2_S4_P412','txt_F2_S4_P413',
'txt_F2_S4_P414','txt_F2_S4_P415','txt_F2_S4_P416','txt_F2_S4_P417','txt_F2_S4_P418','txt_F2_S4_P419','txt_F2_S4_P420',
'txt_F2_S4_P421','txt_F2_S4_P422','txt_F2_S4_P423','txt_F2_S4_P424','txt_F2_S4_P425','txt_F2_S4_P426','txt_F2_S4_P427',
'txt_F2_S4_P428','txt_F2_S4_P429','txt_F2_S4_P430','txt_F2_S4_P431','txt_F2_S4_P432','txt_F2_S4_P433','txt_F2_S4_P434',
'txt_F2_S4_P435','txt_F2_S4_P436','txt_F2_S4_P437',
'txt_F2_S4_P438'];
campoSoloTexto=[];
function validar (campo_j){
    campo_j = "#"+campo_j;
         //Regla 101
 if ($(campo_j).attr('id')=='txt_F1_S3_P324')
    {
    campo323=$.trim($('#txt_F1_S3_P323').val());
    campo324=$.trim($('#txt_F1_S3_P324').val());
		if (eliminar_miles(campo323)>0 )
		{
				if ( eliminar_miles(campo324) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa cantidad pero no valor electricidad comprada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P325').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Informa cantidad pero no valor electricidad comprada.");
						$(campo_j).focus();
						$(campo_j).select();
						return false;
					}			
				}  
		}
    }    
    //Regla 102
if ($(campo_j).attr('id')=='txt_F1_S3_P324')
    {
    campo323=$.trim($('#txt_F1_S3_P323').val());
    campo324=$.trim($('#txt_F1_S3_P324').val());
		if (eliminar_miles(campo323)==0 )
		{
				if ( eliminar_miles(campo324) > 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa valor electricidad comprada pero no cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P323').focus();
						$('#txt_F2_S3_P323').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P325').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Informa valor electricidad comprada pero no cantidad.");
						$('#txt_F1_S3_P323').focus();
						$('#txt_F1_S3_P323').select();
						return false;  
					}		
				}  
		}
    }  
    	   //Regla 103
 if ($(campo_j).attr('id')=='txt_F2_S3_P326')
    {
    campo325=$.trim($('#txt_F2_S3_P325').val());
    campo326=$.trim($('#txt_F2_S3_P326').val());
		if (eliminar_miles(campo325)>0 )
		{
				if ( eliminar_miles(campo326) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa cantidad  pero no valor electricidad generada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P327').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Informa cantidad  pero no valor electricidad generada.");
						$(campo_j).focus();
						$(campo_j).select();
						return false;  
					}
				}  
		}
    }  
     //Regla 104
 if ($(campo_j).attr('id')=='txt_F2_S3_P326')
    {
    campo325=$.trim($('#txt_F2_S3_P325').val());
    campo326=$.trim($('#txt_F2_S3_P326').val());
		if (eliminar_miles(campo325)==0 )
		{
				if ( eliminar_miles(campo326) > 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa cantidad  pero no valor electricidad generada.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P325').focus();
						$('#txt_F2_S3_P325').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P327').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Informa valor electricidad generada pero no cantidad.");
						$('#txt_F2_S3_P325').focus();
						$('#txt_F2_S3_P325').select();
						return false; 
					}		
				}  
		}
    }  
 
	   //Regla 105
 if ($(campo_j).attr('id')=='txt_F2_S3_P328')
    {
    campo327=$.trim($('#txt_F2_S3_P327').val());
    campo328=$.trim($('#txt_F2_S3_P328').val());
		if (eliminar_miles(campo327)>0 )
		{
				if ( eliminar_miles(campo328) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa cantidad pero no valor electricidad vendida.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P329').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Informa cantidad pero no valor electricidad vendida.");
						$(campo_j).focus();
						$(campo_j).select();
						return false; 
					}		
				}  
		}
    } 
	       //Regla 106
 if ($(campo_j).attr('id')=='txt_F2_S3_P328')
    {
    campo327=$.trim($('#txt_F2_S3_P327').val());
    campo328=$.trim($('#txt_F2_S3_P328').val());
		if (eliminar_miles(campo327)==0 )
		{
				if ( eliminar_miles(campo328) > 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa cantidad pero no valor electricidad vendida.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P327').focus();
						$('#txt_F2_S3_P327').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P329').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Informa valor electricidad vendida pero no cantidad.");
						$('#txt_F2_S3_P327').focus();
						$('#txt_F2_S3_P327').select();
						return false; 
					}						
				}  
		}
    }  
         //Regla 107
 if ($(campo_j).attr('id')=='txt_F2_S3_P328')
    {
    campo325=$.trim($('#txt_F2_S3_P325').val());
	campo326=$.trim($('#txt_F2_S3_P326').val());
    campo327=$.trim($('#txt_F2_S3_P327').val());
	campo328=$.trim($('#txt_F2_S3_P328').val());
	suma1=eliminar_miles(campo325)+eliminar_miles(campo326);
	suma2=eliminar_miles(campo327)+eliminar_miles(campo328);
			if ( suma2 > 0)
			{	
				if ( suma1 == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Inconsistencia: Informa Electricidad vendida, pero no Electricidad generada.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P325').focus();
						$('#txt_F2_S3_P325').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P329').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Inconsistencia: Informa Electricidad vendida, pero no Electricidad generada.");
						$('#txt_F2_S3_P325').focus();
						$('#txt_F2_S3_P325').select();
						return false; 
					}		
				}  
			}
	}  
	   //Regla 108
 if ($(campo_j).attr('id')=='txt_F2_S3_P329')
    {
    campo323=$.trim($('#txt_F2_S3_P323').val());
	campo325=$.trim($('#txt_F2_S3_P325').val());
    campo327=$.trim($('#txt_F2_S3_P327').val());
	campo329=$.trim($('#txt_F2_S3_P329').val());
	suma=eliminar_miles(campo323)+eliminar_miles(campo325)+eliminar_miles(campo327);
				if ( suma != eliminar_miles(campo329))
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control Cantidad MWh Electricidad no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P323').focus();
						$('#txt_F2_S3_P323').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P330').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Total control Cantidad MWh Electricidad no cuadra.");
						$('#txt_F2_S3_P323').focus();
						$('#txt_F2_S3_P323').select();
						return false;  
					}		
				}  
	}  
	
    //Regla 109
 if ($(campo_j).attr('id')=='txt_F2_S3_P330')
    {
    campo324=$.trim($('#txt_F2_S3_P324').val());
	campo326=$.trim($('#txt_F2_S3_P326').val());
    campo328=$.trim($('#txt_F2_S3_P328').val());
	campo330=$.trim($('#txt_F2_S3_P330').val());
	suma=eliminar_miles(campo324)+eliminar_miles(campo326)+eliminar_miles(campo328);
				if ( suma != eliminar_miles(campo330))
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control Cantidad MWh Electricidad no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P324').focus();
						$('#txt_F2_S3_P324').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P331').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error:Total control valor en moneda utilizada de Electricidad no cuadra.");
						$('#txt_F2_S3_P324').focus();
						$('#txt_F2_S3_P324').select();
						return false;  
					}		
				}  
	}  
		//Regla 110
if ($(campo_j).attr('id')=='txt_F2_S3_P330')
    {
	suma=0
	for (i=23;i<31;i++)
	{
		campo=$.trim($('#txt_F2_S3_P3'+i).val());
				if (campo=="")
				{
					campo=0;
				}

        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: No informa Electricidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P323').focus();
						$('#txt_F2_S3_P323').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P331').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: No informa Electricidad.");
					$('#txt_F2_S3_P323').focus();
					$('#txt_F2_S3_P323').select();
					return false;  
					}
                }
    }
      	   //Regla 111
 if ($(campo_j).attr('id')=='txt_F2_S3_P332')
    {
    campo331=$.trim($('#txt_F2_S3_P331').val());
    campo332=$.trim($('#txt_F2_S3_P332').val());
		if (eliminar_miles(campo331)>0 )
		{
				if ( eliminar_miles(campo332) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa cantidad de agua comprada, pero no informa valor en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P333').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Informa cantidad de agua comprada, pero no informa valor en moneda utilizada.");
						$(campo_j).focus();
						$(campo_j).select();
						return false;
					}		
				}  
		}
    }  
 //Regla 112
 if ($(campo_j).attr('id')=='txt_F2_S3_P332')
    {
    campo331=$.trim($('#txt_F2_S3_P331').val());
    campo332=$.trim($('#txt_F2_S3_P332').val());
		if (eliminar_miles(campo331)==0 )
		{
				if ( eliminar_miles(campo332) > 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa valor en moneda utilizada de agua comprada, pero no informa cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P331').focus();
						$('#txt_F2_S3_P331').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P333').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Informa valor en moneda utilizada de agua comprada, pero no informa cantidad.");
						$('#txt_F2_S3_P331').focus();
						$('#txt_F2_S3_P331').select();
						return false; 
					}		
				}  
		}
    }  
	   //Regla 113
 if ($(campo_j).attr('id')=='txt_F2_S3_P334')
    {
    campo333=$.trim($('#txt_F2_S3_P333').val());
    campo334=$.trim($('#txt_F2_S3_P334').val());
		if (eliminar_miles(campo333)>0 )
		{
				if ( eliminar_miles(campo334) == 0)
				{
						if(!confirm('Advertencia: Informa cantidad de agua extraida, pero no informa valor en moneda utilizada.\n ¿Desea continuar?')){
						$('#txt_F2_S3_P333').focus();
						$('#txt_F2_S3_P333').select();
						return false;
						}else{
						flag_2 = true;
						$('#txt_F2_S3_P335').focus();
						return false;
						}
				}  
		}
    }  
 //Regla 114
 if ($(campo_j).attr('id')=='txt_F2_S3_P334')
    {
    campo333=$.trim($('#txt_F2_S3_P333').val());
    campo334=$.trim($('#txt_F2_S3_P334').val());
		if (eliminar_miles(campo333)==0)
		{
				if ( eliminar_miles(campo334) > 0)
				{
						if(!confirm('Advertencia: Informa valor en moneda utilizada de agua extraida pero no informa cantidad.\n ¿Desea continuar?')){
						$('#txt_F2_S3_P333').focus();
						$('#txt_F2_S3_P333').select();
						return false;
						}else{
						flag_2 = true;
						$('#txt_F2_S3_P335').focus();
						return false;
						}
				}  
		}
    }  
	   //Regla 115
 if ($(campo_j).attr('id')=='txt_F2_S3_P335')
    {
    campo331=$.trim($('#txt_F2_S3_P331').val());
    campo333=$.trim($('#txt_F2_S3_P333').val());
	campo335=$.trim($('#txt_F2_S3_P335').val());
	suma= eliminar_miles(campo331)+eliminar_miles(campo333);
		if (eliminar_miles(campo335)!= suma )
		{
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control cantidad de agua no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P331').focus();
						$('#txt_F2_S3_P331').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P336').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Total control cantidad de agua no cuadra.");
						$('#txt_F2_S3_P331').focus();
						$('#txt_F2_S3_P331').select();
						return false; 
					}		
		}
    }  
 //Regla 116
 if ($(campo_j).attr('id')=='txt_F2_S3_P336')
    {
    campo332=$.trim($('#txt_F2_S3_P332').val());
    campo334=$.trim($('#txt_F2_S3_P334').val());
	campo336=$.trim($('#txt_F2_S3_P336').val());
	suma= eliminar_miles(campo332)+eliminar_miles(campo334);
		if (eliminar_miles(campo336)!=suma)
		{
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control valor en moneda utilizada de agua no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P332').focus();
						$('#txt_F2_S3_P332').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P337').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Total control valor en moneda utilizada de agua no cuadra.");
						$('#txt_F2_S3_P332').focus();
						$('#txt_F2_S3_P332').select();
						return false;
					}		
		}
    }  

		//Regla 117
if ($(campo_j).attr('id')=='txt_F2_S3_P337')
    {
	suma=0
	for (i=31;i<37;i++)
	{
		campo=$.trim($('#txt_F2_S3_P3'+i).val());
				if (campo=="")
				{
					campo=0;
				}

        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0 && $.trim($(campo_j).val()).length == 0)
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: No informa agua.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P331').focus();
						$('#txt_F2_S3_P331').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P338').focus();
						return false;
						}    
					}
					else 
					{
				        alert("Error: No informa agua.");
						$('#txt_F2_S3_P331').focus();
						$('#txt_F2_S3_P331').select();
						return false;
					}		
                }
    }
       	   //Regla 118
 if ($(campo_j).attr('id')=='txt_F2_S3_P339')
    {
    campo338=$.trim($('#txt_F2_S3_P338').val());
    campo339=$.trim($('#txt_F2_S3_P339').val());
		if (eliminar_miles(campo339)>0 )
		{
				if ( eliminar_miles(campo338) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa valor en moneda utilizada de Carbón y carboncillo, pero no informa cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P338').focus();
						$('#txt_F2_S3_P338').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P340').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de Carbón y carboncillo, pero no informa cantidad.");
					$('#txt_F2_S3_P338').focus();
					$('#txt_F2_S3_P338').select();
					return false; 
					}					
				}  
		}
    }  
		   //Regla 119
 if ($(campo_j).attr('id')=='txt_F2_S3_P339')
    {
    campo338=$.trim($('#txt_F2_S3_P338').val());
    campo339=$.trim($('#txt_F2_S3_P339').val());
		if (eliminar_miles(campo338)>0 )
		{
				if ( eliminar_miles(campo339) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa cantidad de Carbón y carboncillo, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P340').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de Carbón y carboncillo, pero no informa valor  en moneda utilizada.");
					$(campo_j).focus();
					$(campo_j).select();
					return false; 
					}		
				}  
		}
    }  
       	   //Regla 120
 if ($(campo_j).attr('id')=='txt_F2_S3_P341')
    {
    campo340=$.trim($('#txt_F2_S3_P340').val());
    campo341=$.trim($('#txt_F2_S3_P341').val());
		if (eliminar_miles(campo341)>0 )
		{
				if ( eliminar_miles(campo340) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa valor en moneda utilizada de Coque metalúrgico, pero no informa cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P340').focus();
						$('#txt_F2_S3_P340').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P342').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de Coque metalúrgico, pero no informa cantidad.");
					$('#txt_F2_S3_P340').focus();
					$('#txt_F2_S3_P340').select();
					return false; 
					}		
				}  
		}
    }  
		   //Regla 121
 if ($(campo_j).attr('id')=='txt_F2_S3_P341')
    {
    campo340=$.trim($('#txt_F2_S3_P340').val());
    campo341=$.trim($('#txt_F2_S3_P341').val());
		if (eliminar_miles(campo340)>0 )
		{
				if ( eliminar_miles(campo341) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa cantidad de Coque metalúrgico, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P342').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de Coque metalúrgico, pero no informa valor  en moneda utilizada.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;  
					}	
				}  
		}
    }  
        	   //Regla 122
 if ($(campo_j).attr('id')=='txt_F2_S3_P343')
    {
    campo342=$.trim($('#txt_F2_S3_P342').val());
    campo343=$.trim($('#txt_F2_S3_P343').val());
		if (eliminar_miles(campo343)>0 )
		{
				if ( eliminar_miles(campo342) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa valor en moneda utilizada de Petróleo combustible, pero no informa cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P342').focus();
						$('#txt_F2_S3_P342').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P344').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de Petróleo combustible, pero no informa cantidad.");
					$('#txt_F2_S3_P342').focus();
					$('#txt_F2_S3_P342').select();
					return false; 
					}		
				}  
		}
    }  
		   //Regla 123
 if ($(campo_j).attr('id')=='txt_F2_S3_P343')
    {
    campo342=$.trim($('#txt_F2_S3_P342').val());
    campo343=$.trim($('#txt_F2_S3_P343').val());
		if (eliminar_miles(campo342)>0 )
		{
				if ( eliminar_miles(campo343) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa cantidad de Petróleo combustible, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P344').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de Petróleo combustible, pero no informa valor  en moneda utilizada.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
				}  
		}
    }  
    	   //Regla 124
 if ($(campo_j).attr('id')=='txt_F2_S3_P345')
    {
    campo344=$.trim($('#txt_F2_S3_P344').val());
    campo345=$.trim($('#txt_F2_S3_P345').val());
		if (eliminar_miles(campo345)>0 )
		{
				if ( eliminar_miles(campo344) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa valor en moneda utilizada de Petróleo diesel, pero no informa cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P344').focus();
						$('#txt_F2_S3_P344').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P346').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de Petróleo diesel, pero no informa cantidad.");
					$('#txt_F2_S3_P344').focus();
					$('#txt_F2_S3_P344').select();
					return false;
					}	
				}  
		}
    }  
		   //Regla 125
 if ($(campo_j).attr('id')=='txt_F2_S3_P345')
    {
    campo344=$.trim($('#txt_F2_S3_P344').val());
    campo345=$.trim($('#txt_F2_S3_P345').val());
		if (eliminar_miles(campo344)>0 )
		{
				if ( eliminar_miles(campo345) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa cantidad de Petróleo diesel, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P346').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de Petróleo diesel, pero no informa valor  en moneda utilizada.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}	
				}  
		}
    }  
    	   //Regla 126
 if ($(campo_j).attr('id')=='txt_F2_S3_P347')
    {
    campo346=$.trim($('#txt_F2_S3_P346').val());
    campo347=$.trim($('#txt_F2_S3_P347').val());
		if (eliminar_miles(campo347)>0 )
		{
				if ( eliminar_miles(campo346) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa valor en moneda utilizada de Gasolinas, pero no informa cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P346').focus();
						$('#txt_F2_S3_P346').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P348').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de Gasolinas, pero no informa cantidad.");
					$('#txt_F2_S3_P346').focus();
					$('#txt_F2_S3_P346').select();
					return false;   
					}	
				}  
		}
    }  
		   //Regla 127
 if ($(campo_j).attr('id')=='txt_F2_S3_P347')
    {
    campo346=$.trim($('#txt_F2_S3_P346').val());
    campo347=$.trim($('#txt_F2_S3_P347').val());
		if (eliminar_miles(campo346)>0 )
		{
				if ( eliminar_miles(campo347) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa cantidad de Gasolinas, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P348').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de Gasolinas, pero no informa valor  en moneda utilizada.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}	
				}  
		}
    }  
    	   //Regla 128
 if ($(campo_j).attr('id')=='txt_F2_S3_P349')
    {
    campo348=$.trim($('#txt_F2_S3_P348').val());
    campo349=$.trim($('#txt_F2_S3_P349').val());
		if (eliminar_miles(campo349)>0 )
		{
				if ( eliminar_miles(campo348) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa valor en moneda utilizada de Kerosene, pero no informa cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P348').focus();
						$('#txt_F2_S3_P348').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P350').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de Kerosene, pero no informa cantidad.");
					$('#txt_F2_S3_P348').focus();
					$('#txt_F2_S3_P348').select();
					return false; 
					}	
				}  
		}
    }  
		   //Regla 129
 if ($(campo_j).attr('id')=='txt_F2_S3_P349')
    {
    campo348=$.trim($('#txt_F2_S3_P348').val());
    campo349=$.trim($('#txt_F2_S3_P349').val());
		if (eliminar_miles(campo348)>0 )
		{
				if ( eliminar_miles(campo349) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa cantidad de Kerosene, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P350').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de Kerosene, pero no informa valor  en moneda utilizada.");
					$(campo_j).focus();
					$(campo_j).select();
					return false; 
					}	
				}  
		}
    }  
        	   //Regla 130
 if ($(campo_j).attr('id')=='txt_F2_S3_P351')
    {
    campo350=$.trim($('#txt_F2_S3_P350').val());
    campo351=$.trim($('#txt_F2_S3_P351').val());
		if (eliminar_miles(campo351)>0 )
		{
				if ( eliminar_miles(campo350) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa valor en moneda utilizada de Gas Licuado de Petróleo, pero no informa cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P350').focus();
						$('#txt_F2_S3_P350').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P352').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de Gas Licuado de Petróleo, pero no informa cantidad.");
					$('#txt_F2_S3_P350').focus();
					$('#txt_F2_S3_P350').select();
					return false; 
					}	
				}  
		}
    }  
		   //Regla 131
 if ($(campo_j).attr('id')=='txt_F2_S3_P351')
    {
    campo350=$.trim($('#txt_F2_S3_P350').val());
    campo351=$.trim($('#txt_F2_S3_P351').val());
		if (eliminar_miles(campo350)>0 )
		{
				if ( eliminar_miles(campo351) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa cantidad de Gas Licuado de Petróleo, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P352').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de Gas Licuado de Petróleo, pero no informa valor  en moneda utilizada.");
					$(campo_j).focus();
					$(campo_j).select();
					return false; 
					}	
				}  
		}
    }  
    	   //Regla 132
 if ($(campo_j).attr('id')=='txt_F2_S3_P353')
    {
    campo352=$.trim($('#txt_F2_S3_P352').val());
    campo353=$.trim($('#txt_F2_S3_P353').val());
		if (eliminar_miles(campo353)>0 )
		{
				if ( eliminar_miles(campo352) == 0)
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa valor en moneda utilizada de Gas Natural, pero no informa cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P352').focus();
						$('#txt_F2_S3_P352').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P354').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de Gas Natural, pero no informa cantidad.");
					$('#txt_F2_S3_P352').focus();
					$('#txt_F2_S3_P352').select();
					return false;  
					}
				}  
		}
    }  
		   //Regla 133
 if ($(campo_j).attr('id')=='txt_F2_S3_P353')
    {
    campo352=$.trim($('#txt_F2_S3_P352').val());
    campo353=$.trim($('#txt_F2_S3_P353').val());
		if (eliminar_miles(campo352)>0 )
		{
				if ( eliminar_miles(campo353) == 0)
				{
					if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa cantidad de Gas Natural, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P354').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de Gas Natural, pero no informa valor  en moneda utilizada.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;  
					}	
				}  
		}
    }  
    	   //Regla 134
 if ($(campo_j).attr('id')=='txt_F2_S3_P355')
    {
    campo354=$.trim($('#txt_F2_S3_P354').val());
    campo355=$.trim($('#txt_F2_S3_P355').val());
		if (eliminar_miles(campo355)>0 )
		{
				if ( eliminar_miles(campo354) == 0)
				{
					if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa valor en moneda utilizada de Metanol, pero no informa cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P354').focus();
						$('#txt_F2_S3_P354').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P356').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de Metanol, pero no informa cantidad.");
					$('#txt_F2_S3_P354').focus();
					$('#txt_F2_S3_P354').select();
					return false; 
					}					
				}  
		}
    }  
		   //Regla 135
 if ($(campo_j).attr('id')=='txt_F2_S3_P355')
    {
    campo354=$.trim($('#txt_F2_S3_P354').val());
    campo355=$.trim($('#txt_F2_S3_P355').val());
		if (eliminar_miles(campo354)>0 )
		{
				if ( eliminar_miles(campo355) == 0)
				{
					if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa cantidad de Metanol, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P356').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de Metanol, pero no informa valor  en moneda utilizada.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;  
					}	
				}  
		}
    }  
    	   //Regla 136
 if ($(campo_j).attr('id')=='txt_F2_S3_P357')
    {
    campo356=$.trim($('#txt_F2_S3_P356').val());
    campo357=$.trim($('#txt_F2_S3_P357').val());
		if (eliminar_miles(campo357)>0 )
		{
				if ( eliminar_miles(campo356) == 0)
				{
					if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa valor en moneda utilizada de Leña (incluye biomasa), pero no informa cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P356').focus();
						$('#txt_F2_S3_P356').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P358').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de Leña (incluye biomasa), pero no informa cantidad.");
					$('#txt_F2_S3_P356').focus();
					$('#txt_F2_S3_P356').select();
					return false;  
					}	
				}  
		}
    }  
		   //Regla 137
 if ($(campo_j).attr('id')=='txt_F2_S3_P357')
    {
    campo356=$.trim($('#txt_F2_S3_P356').val());
    campo357=$.trim($('#txt_F2_S3_P357').val());
		if (eliminar_miles(campo356)>0 )
		{
				if ( eliminar_miles(campo357) == 0)
				{
					if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa cantidad de Leña (incluye biomasa), pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P358').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de Leña (incluye biomasa), pero no informa valor  en moneda utilizada.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
				}  
		}
    }  
    	   //Regla 138
 if ($(campo_j).attr('id')=='txt_F2_S3_P359')
    {
    campo358=$.trim($('#txt_F2_S3_P358').val());
    campo359=$.trim($('#txt_F2_S3_P359').val());
		if (eliminar_miles(campo359)>0 )
		{
				if ( eliminar_miles(campo358) == 0)
				{
					if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa valor en moneda utilizada de Grasa y aceites lubricantes, pero no informa cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P358').focus();
						$('#txt_F2_S3_P358').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P360_E').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa valor en moneda utilizada de Grasa y aceites lubricantes, pero no informa cantidad.");
					$('#txt_F2_S3_P358').focus();
					$('#txt_F2_S3_P358').select();
					return false; 
					}	
				}  
		}
    }  
		   //Regla 139
 if ($(campo_j).attr('id')=='txt_F2_S3_P359')
    {
    campo358=$.trim($('#txt_F2_S3_P358').val());
    campo359=$.trim($('#txt_F2_S3_P359').val());
		if (eliminar_miles(campo358)>0 )
		{
				if ( eliminar_miles(campo359) == 0)
				{
					if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa cantidad de Grasa y aceites lubricantes, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P360_E').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Informa cantidad de Grasa y aceites lubricantes, pero no informa valor  en moneda utilizada.");
					$(campo_j).focus();
					$(campo_j).select();
					return false; 
					}	
				}  
		}
    }  
        		   //Regla 140
 if ($(campo_j).attr('id')=='txt_F2_S3_P360')
    {
    campo360=$.trim($('#txt_F2_S3_P360').val());
		if (eliminar_miles(campo360)>0 && $.trim($('#txt_F2_S3_P360_E').val()).length == 0 )
		{
			if (perfil == 4)
					{
						if(!confirm('Advertencia: No especifica otros combustibles.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P360_E').focus();
						$('#txt_F2_S3_P360_E').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P361').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: No especifica otros combustibles.");
					$('#txt_F2_S3_P360_E').focus();
					$('#txt_F2_S3_P360_E').select();
					return false;   
					}
		}
    }  
    //Regla 141
    if ($(campo_j).attr('id')=='txt_F2_S3_P360')
    {
    campo360=$.trim($('#txt_F2_S3_P360').val());
		if (eliminar_miles(campo360)==0 && $.trim($('#txt_F2_S3_P360_E').val()).length != 0 )
		{
			if (perfil == 4)
					{
						if(!confirm('Advertencia: Especifica otros combustibles pero no indica cantidad.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P360').focus();
						$('#txt_F2_S3_P360').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P361').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Especifica otros combustibles pero no indica cantidad.");
						$('#txt_F2_S3_P360_E').focus();
						$('#txt_F2_S3_P360_E').select();
						return false;
					}
		}
    }  
       		   //Regla 142
 if ($(campo_j).attr('id')=='txt_F2_S3_P361')
    {
    campo338=$.trim($('#txt_F2_S3_P338').val());
	campo340=$.trim($('#txt_F2_S3_P340').val());
	campo342=$.trim($('#txt_F2_S3_P342').val());
	campo345=$.trim($('#txt_F2_S3_P345').val());
	campo346=$.trim($('#txt_F2_S3_P346').val());
	campo348=$.trim($('#txt_F2_S3_P348').val());
	campo350=$.trim($('#txt_F2_S3_P350').val());
	campo352=$.trim($('#txt_F2_S3_P352').val());
	campo354=$.trim($('#txt_F2_S3_P354').val());
	campo356=$.trim($('#txt_F2_S3_P356').val());
	campo358=$.trim($('#txt_F2_S3_P358').val());
	campo361=$.trim($('#txt_F2_S3_P361').val());
	suma=eliminar_miles(campo338)+eliminar_miles(campo340)+eliminar_miles(campo342)+eliminar_miles(campo345)+eliminar_miles(campo346)+eliminar_miles(campo348)+eliminar_miles(campo350)+eliminar_miles(campo352)+eliminar_miles(campo354)+eliminar_miles(campo356)+eliminar_miles(campo358);
		if ( suma != eliminar_miles(campo361))
		{
					if (perfil == 4)
						{
						if(!confirm('Advertencia: Total control cantidad de combustibles no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P338').focus();
						$('#txt_F2_S3_P338').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P362').focus();
						return false;
						}    
						}
						else 
						{
						alert("Error: Total control cantidad de combustibles no cuadra");
						$('#txt_F2_S3_P338').focus();
						$('#txt_F2_S3_P338').select();
						return false;   	
						}
    }  
	}	
    		   //Regla 143
 if ($(campo_j).attr('id')=='txt_F2_S3_P362')
    {
    campo339=$.trim($('#txt_F2_S3_P339').val());
	campo341=$.trim($('#txt_F2_S3_P341').val());
	campo343=$.trim($('#txt_F2_S3_P343').val());
	campo346=$.trim($('#txt_F2_S3_P346').val());
	campo347=$.trim($('#txt_F2_S3_P347').val());
	campo349=$.trim($('#txt_F2_S3_P349').val());
	campo351=$.trim($('#txt_F2_S3_P351').val());
	campo353=$.trim($('#txt_F2_S3_P353').val());
	campo355=$.trim($('#txt_F2_S3_P355').val());
	campo357=$.trim($('#txt_F2_S3_P357').val());
	campo359=$.trim($('#txt_F2_S3_P359').val());
	campo360=$.trim($('#txt_F2_S3_P360').val());
	campo362=$.trim($('#txt_F2_S3_P362').val());
	suma=eliminar_miles(campo339)+eliminar_miles(campo341)+eliminar_miles(campo343)+eliminar_miles(campo346)+eliminar_miles(campo347)+eliminar_miles(campo349)+eliminar_miles(campo351)+eliminar_miles(campo353)+eliminar_miles(campo355)+eliminar_miles(campo357)+eliminar_miles(campo359)+eliminar_miles(campo360);
		if ( suma != eliminar_miles(campo362))
		{
					if (perfil == 4)
						{
						if(!confirm('Advertencia: Total control valores en moneda utilizada de combustibles no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P339').focus();
						$('#txt_F2_S3_P339').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S4_P401').focus();
						return false;
						}    
						}
						else 
						{
						alert("Error: Total control valores en moneda utilizada de combustibles no cuadra.");
						$('#txt_F2_S3_P339').focus();
						$('#txt_F2_S3_P339').select();
						return false;
						}	
		}
    } 
     	//Regla 144
if ($(campo_j).attr('id')=='txt_F2_S3_P352')
    {
	suma=0
	for (i=38;i<63;i++)
	{
		campo=$.trim($('#txt_F2_S3_P3'+i).val());
				if (campo=="")
				{
					campo=0;
				}

        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0 )
                {
					if (perfil == 4)
						{
						if(!confirm('Advertencia: No informa compra de combustibles y lubricantes.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P338').focus();
						$('#txt_F2_S3_P338').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S4_P401').focus();
						return false;
						}    
						}
						else 
						{
						alert("Error: No informa compra de combustibles y lubricantes.");
						$('#txt_F2_S3_P338').focus();
						$('#txt_F2_S3_P338').select();
						return false; 
						}
                }
    } 
      //SECCION IV
    		   //Regla 145
 if ($(campo_j).attr('id')=='txt_F2_S4_P409')
    {
    campo409=$.trim($('#txt_F2_S4_P409').val());
	if ( eliminar_miles(campo409) > 0 && $.trim($('#txt_F2_S4_P409_E').val()).length == 0)
		{
				if (perfil == 4)
						{
						if(!confirm('Advertencia: No especifica otros servicios de telecomunicaciones.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S4_P409_E').focus();
						$('#txt_F2_S4_P409_E').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S4_P410').focus();
						return false;
						}    
						}
						else 
						{
						alert("Error: No especifica otros servicios de telecomunicaciones");
						$('#txt_F2_S4_P409_E').focus();
						$('#txt_F2_S4_P409_E').select();
						return false;
						}
		}
    }  
      // Regla 146
if ($(campo_j).attr('id')=='txt_F2_S4_P421')
    {
	suma=0
	for (i=1;i<21;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F2_S4_P40'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F2_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	campo421=$.trim($('#txt_F2_S4_P421').val());
	 if (suma != eliminar_miles(campo421))
                {
					if (perfil == 4)
						{
						if(!confirm('Advertencia: Total control valores en moneda utilizada Gastos Generales no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S4_P401').focus();
						$('#txt_F2_S4_P401').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S4_P422').focus();
						return false;
						}    
						}
						else 
						{
						alert("Error: Total control valores en moneda utilizada Gastos Generales no cuadra");
						$('#txt_F2_S4_P401').focus();
						$('#txt_F2_S4_P401').select();
						return false;  
						}
                }
    }
            // Regla 147
if ($(campo_j).attr('id')=='txt_F2_S4_P421')
    {
	suma=0
	for (i=1;i<22;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F2_S4_P40'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F2_S4_P4'+i).val());
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
						if(!confirm('Advertencia: No declara gastos generales.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S4_P401').focus();
						$('#txt_F2_S4_P401').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S4_P422').focus();
						return false;
						}    
						}
						else 
						{
						alert("Error: No declara gastos generales.");
						$('#txt_F2_S4_P401').focus();
						$('#txt_F2_S4_P401').select();
						return false; 
						}
                }
    }
            // Regla 148
if ($(campo_j).attr('id')=='txt_F2_S4_P429')
    {
	suma=0
	for (i=22;i<29;i++)
	{
		campo=$.trim($('#txt_F2_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	campo429=$.trim($(campo_j).val());
	 if (suma != eliminar_miles(campo429))
                {
					if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control valores en moneda utilizada Gastos Financieros no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S4_P422').focus();
						$('#txt_F2_S4_P422').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S4_P430').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Total de control valores en moneda utilizada Gastos Financieros no cuadra.");
						$('#txt_F2_S4_P422').focus();
						$('#txt_F2_S4_P422').select();
						return false;
					}				
                }
    }
            // Regla 149
if ($(campo_j).attr('id')=='txt_F2_S4_P429')
    {
	suma=0
	for (i=22;i<30;i++)
	{
		campo=$.trim($('#txt_F2_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
					if (perfil == 4)
					{
						if(!confirm('Advertencia: No informa gastos financieros.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S4_P422').focus();
						$('#txt_F2_S4_P422').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S4_P430').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: No informa gastos financieros.");
						$('#txt_F2_S4_P422').focus();
						$('#txt_F2_S4_P422').select();
						return false; 
					}
                }
    }
    //Regla 150
    if ($(campo_j).attr('id')=='txt_F2_S4_P431')
    {
    campo431=$.trim($(campo_j).val());
	if ( eliminar_miles(campo431) == 0 )
		{
			if (perfil == 4)
					{
						if(!confirm('Advertencia:  No informa impuesto a la renta devengado en el periodo.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S4_P431').focus();
						$('#txt_F2_S4_P431').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S4_P432').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: No informa impuesto a la renta devengado en el periodo.");
						$('#txt_F2_S4_P431').focus();
						$('#txt_F2_S4_P431').select();
						return false; 
					}
		}
    } 
    //Regla 151
    if ($(campo_j).attr('id')=='txt_F2_S4_P433')
    {
    campo433=$.trim($(campo_j).val());
	if ( eliminar_miles(campo433) == 0 )
		{
			if (perfil == 4)
					{
						if(!confirm('Advertencia:  No informa patentes, derechos y permisos municipales pagados en el periodo.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S4_P433').focus();
						$('#txt_F2_S4_P433').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S4_P434').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: No informa patentes, derechos y permisos municipales pagados en el periodo.");
						$('#txt_F2_S4_P433').focus();
						$('#txt_F2_S4_P433').select();
						return false; 
					}
		}
    } 
    		   //Regla 152
 if ($(campo_j).attr('id')=='txt_F2_S4_P434')
    {
    campo434=$.trim($(campo_j).val());
	if ( eliminar_miles(campo434) > 0 && $.trim($('#txt_F2_S4_P434_E').val()).length == 0)
		{
				if (perfil == 4)
					{
						if(!confirm('Advertencia:  No especifica otros impuestos no indicados en las categorías anteriores (pagados en el periodo).\n ¿Desea continuar?'))
						{
						$('#txt_F2_S4_P434_E').focus();
						$('#txt_F2_S4_P434_E').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S4_P435').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: No especifica otros impuestos no indicados en las categorías anteriores (pagados en el periodo)");
					$('#txt_F2_S4_P434_E').focus();
					$('#txt_F2_S4_P434_E').select();
					return false; 
					}
		}
    } 
    		   //Regla 153
 if ($(campo_j).attr('id')=='txt_F2_S4_P437')
    {
    campo437=$.trim($(campo_j).val());
	if ( eliminar_miles(campo437) == 0 )
		{
			if (perfil == 4)
					{
						if(!confirm('Advertencia: No declara utilidad o pérdida del ejercicio.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S4_P437').focus();
						$('#txt_F2_S4_P437').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S4_P438').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: No declara utilidad o pérdida del ejercicio.");
						$('#txt_F2_S4_P437').focus();
						$('#txt_F2_S4_P437').select();
						return false;
					}
		}
    } 
            // Regla 154
if ($(campo_j).attr('id')=='txt_F2_S4_P438')
    {
	suma=0
	for (i=30;i<38;i++)
	{
		campo=$.trim($('#txt_F2_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	campo438=$.trim($(campo_j).val());
	 if (suma != eliminar_miles(campo438))
                {
					if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control impuestos, retiros y dividendos No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S4_P430').focus();
						$('#txt_F2_S4_P430').select();
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
						alert("Error: Total de control impuestos, retiros y dividendos No cuadra.");
						$('#txt_F2_S4_P430').focus();
						$('#txt_F2_S4_P430').select();
						return false; 
					}
                }
    } 
            // Regla 155
if ($(campo_j).attr('id')=='txt_F2_S4_P438')
    {
	suma=0
	for (i=30;i<39;i++)
	{
		campo=$.trim($('#txt_F2_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                 if(!confirm('Advertencia: No informa impuestos, retiros y dividendos.\n ¿Desea continuar?')){
                $('#txt_F2_S4_P430').focus();
                $('#txt_F2_S4_P430').select();
                return false;
				}else{
                flag_2 = true;
                $('#Btn_Anterior').focus();
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
	mensaje=" \n";
    $.each($('input'),function(i,v){
        campo_j = "#"+$(this).attr('id');
   //Regla 101
 if ($(campo_j).attr('id')=='txt_F1_S3_P324')
    {
    campo323=$.trim($('#txt_F1_S3_P323').val());
    campo324=$.trim($('#txt_F1_S3_P324').val());
		if (eliminar_miles(campo323)>0 )
		{
				if ( eliminar_miles(campo324) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 324 - Advertencia: Informa cantidad pero no valor electricidad comprada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 324 - Error: Informa cantidad pero no valor electricidad comprada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
				}  
		}
    }    
    //Regla 102
if ($(campo_j).attr('id')=='txt_F1_S3_P324')
    {
    campo323=$.trim($('#txt_F1_S3_P323').val());
    campo324=$.trim($('#txt_F1_S3_P324').val());
		if (eliminar_miles(campo323)==0 )
		{
				if ( eliminar_miles(campo324) > 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 323 - Advertencia: Informa valor electricidad comprada pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 323 - Error: Informa valor electricidad comprada pero no cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}					
				}  
		}
    }  
    	   //Regla 103
 if ($(campo_j).attr('id')=='txt_F2_S3_P326')
    {
    campo325=$.trim($('#txt_F2_S3_P325').val());
    campo326=$.trim($('#txt_F2_S3_P326').val());
		if (eliminar_miles(campo325)>0 )
		{
				if ( eliminar_miles(campo326) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 326 - Advertencia: Informa cantidad  pero no valor electricidad generada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 326 - Error: Informa cantidad  pero no valor electricidad generada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}					
				}  
		}
    }  
     //Regla 104
 if ($(campo_j).attr('id')=='txt_F2_S3_P326')
    {
    campo325=$.trim($('#txt_F2_S3_P325').val());
    campo326=$.trim($('#txt_F2_S3_P326').val());
		if (eliminar_miles(campo325)==0 )
		{
				if ( eliminar_miles(campo326) > 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 325 - Advertencia: Informa valor electricidad generada pero no cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 325 - Error: Informa valor electricidad generada pero no cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
		}
    }  
 
	   //Regla 105
 if ($(campo_j).attr('id')=='txt_F2_S3_P328')
    {
    campo327=$.trim($('#txt_F2_S3_P327').val());
    campo328=$.trim($('#txt_F2_S3_P328').val());
		if (eliminar_miles(campo327)>0 )
		{
				if ( eliminar_miles(campo328) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 328  - Advertencia: Informa cantidad pero no valor electricidad vendida. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 328 - Error: Informa cantidad pero no valor electricidad vendida. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
				}  
		}
    } 
	       //Regla 106
 if ($(campo_j).attr('id')=='txt_F2_S3_P328')
    {
    campo327=$.trim($('#txt_F2_S3_P327').val());
    campo328=$.trim($('#txt_F2_S3_P328').val());
		if (eliminar_miles(campo327)==0 )
		{
				if ( eliminar_miles(campo328) > 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 327 - Advertencia: Informa cantidad pero no valor electricidad vendida. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 327 - Error: Informa cantidad pero no valor electricidad vendida. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
		}
    }  
         //Regla 107
 if ($(campo_j).attr('id')=='txt_F2_S3_P328')
    {
    campo325=$.trim($('#txt_F2_S3_P325').val());
	campo326=$.trim($('#txt_F2_S3_P326').val());
    campo327=$.trim($('#txt_F2_S3_P327').val());
	campo328=$.trim($('#txt_F2_S3_P328').val());
	suma1=eliminar_miles(campo325)+eliminar_miles(campo326);
	suma2=eliminar_miles(campo327)+eliminar_miles(campo328);
			if ( suma2 > 0)
			{	
				if ( suma1 == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 325 al 328 - Advertencia: Inconsistencia: Informa Electricidad vendida, pero no Electricidad generada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 325 al 328 - Error: Inconsistencia: Informa Electricidad vendida, pero no Electricidad generada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
			}
	}  
	   //Regla 108
 if ($(campo_j).attr('id')=='txt_F2_S3_P329')
    {
    campo323=$.trim($('#txt_F2_S3_P323').val());
	campo325=$.trim($('#txt_F2_S3_P325').val());
    campo327=$.trim($('#txt_F2_S3_P327').val());
	campo329=$.trim($('#txt_F2_S3_P329').val());
	suma=eliminar_miles(campo323)+eliminar_miles(campo325)+eliminar_miles(campo327);
				if ( suma != eliminar_miles(campo329))
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 329 - Advertencia: Total control Cantidad MWh Electricidad no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 329 - Error: Total control Cantidad MWh Electricidad no cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
	}  
	
    //Regla 109
 if ($(campo_j).attr('id')=='txt_F2_S3_P330')
    {
    campo324=$.trim($('#txt_F2_S3_P324').val());
	campo326=$.trim($('#txt_F2_S3_P326').val());
    campo328=$.trim($('#txt_F2_S3_P328').val());
	campo330=$.trim($('#txt_F2_S3_P330').val());
	suma=eliminar_miles(campo324)+eliminar_miles(campo326)+eliminar_miles(campo328);
				if ( suma != eliminar_miles(campo330))
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 330 - Advertencia: Total control Cantidad MWh Electricidad no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 330 - Error: Total control Cantidad MWh Electricidad no cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
	}  
		//Regla 110
if ($(campo_j).attr('id')=='txt_F2_S3_P330')
    {
	suma=0
	for (i=23;i<31;i++)
	{
		campo=$.trim($('#txt_F2_S3_P3'+i).val());
				if (campo=="")
				{
					campo=0;
				}

        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campos 323 al 330  - Advertencia: No informa Electricidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 323 al 330 - Error: No informa Electricidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
                }
    }
      	   //Regla 111
 if ($(campo_j).attr('id')=='txt_F2_S3_P332')
    {
    campo331=$.trim($('#txt_F2_S3_P331').val());
    campo332=$.trim($('#txt_F2_S3_P332').val());
		if (eliminar_miles(campo331)>0 )
		{
				if ( eliminar_miles(campo332) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 332 - Advertencia: Informa cantidad de agua comprada, pero no informa valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 332 - Error: Informa cantidad de agua comprada, pero no informa valor en moneda utilizada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
		}
    }  
 //Regla 112
 if ($(campo_j).attr('id')=='txt_F2_S3_P332')
    {
    campo331=$.trim($('#txt_F2_S3_P331').val());
    campo332=$.trim($('#txt_F2_S3_P332').val());
		if (eliminar_miles(campo331)==0 )
		{
				if ( eliminar_miles(campo332) > 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 331 - Advertencia: Informa valor en moneda utilizada de agua comprada, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 331 - Error: Informa valor en moneda utilizada de agua comprada, pero no informa cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
				}  
		}
    }  
	   //Regla 113
 if ($(campo_j).attr('id')=='txt_F2_S3_P334')
    {
    campo333=$.trim($('#txt_F2_S3_P333').val());
    campo334=$.trim($('#txt_F2_S3_P334').val());
		if (eliminar_miles(campo333)>0 )
		{
				if ( eliminar_miles(campo334) == 0)
				{
					mensaje=mensaje +("Campo 334 - Advertencia: Informa cantidad de agua extraida, pero no informa valor en moneda utilizada. \n");
                    $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
				}  
		}
    }  
 //Regla 114
 if ($(campo_j).attr('id')=='txt_F2_S3_P334')
    {
    campo333=$.trim($('#txt_F2_S3_P333').val());
    campo334=$.trim($('#txt_F2_S3_P334').val());
		if (eliminar_miles(campo333)==0)
		{
				if ( eliminar_miles(campo334) > 0)
				{
					mensaje=mensaje +("Campo 333 - Advertencia: Informa valor en moneda utilizada de agua extraida pero no informa cantidad. \n");
                    $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;  
				}  
		}
    }  
	   //Regla 115
 if ($(campo_j).attr('id')=='txt_F2_S3_P335')
    {
    campo331=$.trim($('#txt_F2_S3_P331').val());
    campo333=$.trim($('#txt_F2_S3_P333').val());
	campo335=$.trim($('#txt_F2_S3_P335').val());
	suma= eliminar_miles(campo331)+eliminar_miles(campo333);
		if (eliminar_miles(campo335)!= suma )
		{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 335 - Advertencia: Total control cantidad de agua no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 335 - Error: Total control cantidad de agua no cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
		}
    }  
 //Regla 116
 if ($(campo_j).attr('id')=='txt_F2_S3_P336')
    {
    campo332=$.trim($('#txt_F2_S3_P332').val());
    campo334=$.trim($('#txt_F2_S3_P334').val());
	campo336=$.trim($('#txt_F2_S3_P336').val());
	suma= eliminar_miles(campo332)+eliminar_miles(campo334);
		if (eliminar_miles(campo336)!=suma)
		{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 336 - Advertencia: Total control valor en moneda utilizada de agua no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 336 - Error: Total control valor en moneda utilizada de agua no cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
		}
    }  

		//Regla 117
if ($(campo_j).attr('id')=='txt_F2_S3_P337')
    {
	suma=0
	for (i=31;i<37;i++)
	{
		campo=$.trim($('#txt_F2_S3_P3'+i).val());
				if (campo=="")
				{
					campo=0;
				}

        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0 && $.trim($(campo_j).val()).length == 0)
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 331 al 337 - Advertencia: No informa agua. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 331 al 337 - Error: No informa agua. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}	
                }
    }
       	   //Regla 118
 if ($(campo_j).attr('id')=='txt_F2_S3_P339')
    {
    campo338=$.trim($('#txt_F2_S3_P338').val());
    campo339=$.trim($('#txt_F2_S3_P339').val());
		if (eliminar_miles(campo339)>0 )
		{
				if ( eliminar_miles(campo338) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 338 - Advertencia: Informa valor en moneda utilizada de Carbón y carboncillo, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 338 - Error: Informa valor en moneda utilizada de Carbón y carboncillo, pero no informa cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
				}  
		}
    }  
		   //Regla 119
 if ($(campo_j).attr('id')=='txt_F2_S3_P339')
    {
    campo338=$.trim($('#txt_F2_S3_P338').val());
    campo339=$.trim($('#txt_F2_S3_P339').val());
		if (eliminar_miles(campo338)>0 )
		{
				if ( eliminar_miles(campo339) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 339 - Advertencia: Informa cantidad de Carbón y carboncillo, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 339 - Error: Informa cantidad de Carbón y carboncillo, pero no informa valor  en moneda utilizada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
		}
    }  
       	   //Regla 120
 if ($(campo_j).attr('id')=='txt_F2_S3_P341')
    {
    campo340=$.trim($('#txt_F2_S3_P340').val());
    campo341=$.trim($('#txt_F2_S3_P341').val());
		if (eliminar_miles(campo341)>0 )
		{
				if ( eliminar_miles(campo340) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 340 - Advertencia: Informa valor en moneda utilizada de Coque metalúrgico, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 340 - Error: Informa valor en moneda utilizada de Coque metalúrgico, pero no informa cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}	
				}  
		}
    }  
		   //Regla 121
 if ($(campo_j).attr('id')=='txt_F2_S3_P341')
    {
    campo340=$.trim($('#txt_F2_S3_P340').val());
    campo341=$.trim($('#txt_F2_S3_P341').val());
		if (eliminar_miles(campo340)>0 )
		{
				if ( eliminar_miles(campo341) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 341 - Advertencia: Informa cantidad de Coque metalúrgico, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 341 - Error: Informa cantidad de Coque metalúrgico, pero no informa valor  en moneda utilizada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;               
					}
				}  
		}
    }  
        	   //Regla 122
 if ($(campo_j).attr('id')=='txt_F2_S3_P343')
    {
    campo342=$.trim($('#txt_F2_S3_P342').val());
    campo343=$.trim($('#txt_F2_S3_P343').val());
		if (eliminar_miles(campo343)>0 )
		{
				if ( eliminar_miles(campo342) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 342 - Advertencia: Informa valor en moneda utilizada de Petróleo combustible, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 342 - Error: Informa valor en moneda utilizada de Petróleo combustible, pero no informa cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;               
					}
				}  
		}
    }  
		   //Regla 123
 if ($(campo_j).attr('id')=='txt_F2_S3_P343')
    {
    campo342=$.trim($('#txt_F2_S3_P342').val());
    campo343=$.trim($('#txt_F2_S3_P343').val());
		if (eliminar_miles(campo342)>0 )
		{
				if ( eliminar_miles(campo343) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 343 - Advertencia: Informa cantidad de Petróleo combustible, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 343 - Error: Informa cantidad de Petróleo combustible, pero no informa valor  en moneda utilizada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}	
				}  
		}
    }  
    	   //Regla 124
 if ($(campo_j).attr('id')=='txt_F2_S3_P345')
    {
    campo344=$.trim($('#txt_F2_S3_P344').val());
    campo345=$.trim($('#txt_F2_S3_P345').val());
		if (eliminar_miles(campo345)>0 )
		{
				if ( eliminar_miles(campo344) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 344 - Advertencia: Informa valor en moneda utilizada de Petróleo diesel, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 344 - Error: Informa valor en moneda utilizada de Petróleo diesel, pero no informa cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}	
				}  
		}
    }  
		   //Regla 125
 if ($(campo_j).attr('id')=='txt_F2_S3_P345')
    {
    campo344=$.trim($('#txt_F2_S3_P344').val());
    campo345=$.trim($('#txt_F2_S3_P345').val());
		if (eliminar_miles(campo344)>0 )
		{
				if ( eliminar_miles(campo345) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 345 - Advertencia: Informa cantidad de Petróleo diesel, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 345 - Error: Informa cantidad de Petróleo diesel, pero no informa valor  en moneda utilizada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
				}  
		}
    }  
    	   //Regla 126
 if ($(campo_j).attr('id')=='txt_F2_S3_P347')
    {
    campo346=$.trim($('#txt_F2_S3_P346').val());
    campo347=$.trim($('#txt_F2_S3_P347').val());
		if (eliminar_miles(campo347)>0 )
		{
				if ( eliminar_miles(campo346) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 346 - Advertencia: Informa valor en moneda utilizada de Gasolinas, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 346 - Error: Informa valor en moneda utilizada de Gasolinas, pero no informa cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
		}
    }  
		   //Regla 127
 if ($(campo_j).attr('id')=='txt_F2_S3_P347')
    {
    campo346=$.trim($('#txt_F2_S3_P346').val());
    campo347=$.trim($('#txt_F2_S3_P347').val());
		if (eliminar_miles(campo346)>0 )
		{
				if ( eliminar_miles(campo347) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 347 - Advertencia: Informa cantidad de Gasolinas, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 347 - Error: Informa cantidad de Gasolinas, pero no informa valor  en moneda utilizada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
		}
    }  
    	   //Regla 128
 if ($(campo_j).attr('id')=='txt_F2_S3_P349')
    {
    campo348=$.trim($('#txt_F2_S3_P348').val());
    campo349=$.trim($('#txt_F2_S3_P349').val());
		if (eliminar_miles(campo349)>0 )
		{
				if ( eliminar_miles(campo348) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 348 - Advertencia: Informa valor en moneda utilizada de Kerosene, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 348 - Error: Informa valor en moneda utilizada de Kerosene, pero no informa cantidad . \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
				}  
		}
    }  
		   //Regla 129
 if ($(campo_j).attr('id')=='txt_F2_S3_P349')
    {
    campo348=$.trim($('#txt_F2_S3_P348').val());
    campo349=$.trim($('#txt_F2_S3_P349').val());
		if (eliminar_miles(campo348)>0 )
		{
				if ( eliminar_miles(campo349) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 349 - Advertencia: Informa cantidad de Kerosene, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 349 - Error: Informa cantidad de Kerosene, pero no informa valor  en moneda utilizada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
		}
    }  
        	   //Regla 130
 if ($(campo_j).attr('id')=='txt_F2_S3_P351')
    {
    campo350=$.trim($('#txt_F2_S3_P350').val());
    campo351=$.trim($('#txt_F2_S3_P351').val());
		if (eliminar_miles(campo351)>0 )
		{
				if ( eliminar_miles(campo350) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 350 - Advertencia: Informa valor en moneda utilizada de Gas Licuado de Petróleo, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 350 - Error: Informa valor en moneda utilizada de Gas Licuado de Petróleo, pero no informa cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}	
				}  
		}
    }  
		   //Regla 131
 if ($(campo_j).attr('id')=='txt_F2_S3_P351')
    {
    campo350=$.trim($('#txt_F2_S3_P350').val());
    campo351=$.trim($('#txt_F2_S3_P351').val());
		if (eliminar_miles(campo350)>0 )
		{
				if ( eliminar_miles(campo351) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 351 - Advertencia: Informa cantidad de Gas Licuado de Petróleo, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 351 - Error: Informa cantidad de Gas Licuado de Petróleo, pero no informa valor  en moneda utilizada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
				}  
		}
    }  
    	   //Regla 132
 if ($(campo_j).attr('id')=='txt_F2_S3_P353')
    {
    campo352=$.trim($('#txt_F2_S3_P352').val());
    campo353=$.trim($('#txt_F2_S3_P353').val());
		if (eliminar_miles(campo353)>0 )
		{
				if ( eliminar_miles(campo352) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 352 - Advertencia: Informa valor en moneda utilizada de Gas Natural, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 352 - Error: Informa valor en moneda utilizada de Gas Natural, pero no informa cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
		}
    }  
		   //Regla 133
 if ($(campo_j).attr('id')=='txt_F2_S3_P353')
    {
    campo352=$.trim($('#txt_F2_S3_P352').val());
    campo353=$.trim($('#txt_F2_S3_P353').val());
		if (eliminar_miles(campo352)>0 )
		{
				if ( eliminar_miles(campo353) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 353 - Advertencia: Informa cantidad de Gas Natural, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 353 - Error: Informa cantidad de Gas Natural, pero no informa valor  en moneda utilizada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
		}
    }  
    	   //Regla 134
 if ($(campo_j).attr('id')=='txt_F2_S3_P355')
    {
    campo354=$.trim($('#txt_F2_S3_P354').val());
    campo355=$.trim($('#txt_F2_S3_P355').val());
		if (eliminar_miles(campo355)>0 )
		{
				if ( eliminar_miles(campo354) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 354 - Advertencia: Informa valor en moneda utilizada de Metanol, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 354 - Error: Informa valor en moneda utilizada de Metanol, pero no informa cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
				}  
		}
    }  
		   //Regla 135
 if ($(campo_j).attr('id')=='txt_F2_S3_P355')
    {
    campo354=$.trim($('#txt_F2_S3_P354').val());
    campo355=$.trim($('#txt_F2_S3_P355').val());
		if (eliminar_miles(campo354)>0 )
		{
				if ( eliminar_miles(campo355) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 355 - Advertencia: Informa cantidad de Metanol, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 355 - Error: Informa cantidad de Metanol, pero no informa valor  en moneda utilizada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
				}  
		}
    }  
    	   //Regla 136
 if ($(campo_j).attr('id')=='txt_F2_S3_P357')
    {
    campo356=$.trim($('#txt_F2_S3_P356').val());
    campo357=$.trim($('#txt_F2_S3_P357').val());
		if (eliminar_miles(campo357)>0 )
		{
				if ( eliminar_miles(campo356) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 356 - Advertencia: Informa valor en moneda utilizada de Leña (incluye biomasa), pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 356 - Error: Informa valor en moneda utilizada de Leña (incluye biomasa), pero no informa cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
				}  
		}
    }  
		   //Regla 137
 if ($(campo_j).attr('id')=='txt_F2_S3_P357')
    {
    campo356=$.trim($('#txt_F2_S3_P356').val());
    campo357=$.trim($('#txt_F2_S3_P357').val());
		if (eliminar_miles(campo356)>0 )
		{
				if ( eliminar_miles(campo357) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 357 - Advertencia: Informa cantidad de Leña (incluye biomasa), pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 357 - Error: Informa cantidad de Leña (incluye biomasa), pero no informa valor  en moneda utilizada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
				}  
		}
    }  
    	   //Regla 138
 if ($(campo_j).attr('id')=='txt_F2_S3_P359')
    {
    campo358=$.trim($('#txt_F2_S3_P358').val());
    campo359=$.trim($('#txt_F2_S3_P359').val());
		if (eliminar_miles(campo359)>0 )
		{
				if ( eliminar_miles(campo358) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 358 - Advertencia: Informa valor en moneda utilizada de Grasa y aceites lubricantes, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 358 - Error: Informa valor en moneda utilizada de Grasa y aceites lubricantes, pero no informa cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
		}
    }  
		   //Regla 139
 if ($(campo_j).attr('id')=='txt_F2_S3_P359')
    {
    campo358=$.trim($('#txt_F2_S3_P358').val());
    campo359=$.trim($('#txt_F2_S3_P359').val());
		if (eliminar_miles(campo358)>0 )
		{
				if ( eliminar_miles(campo359) == 0)
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 359 - Advertencia: Informa cantidad de Grasa y aceites lubricantes, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 359 - Error: Informa cantidad de Grasa y aceites lubricantes, pero no informa valor  en moneda utilizada. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
				}  
		}
    }  
        		   //Regla 140
 if ($(campo_j).attr('id')=='txt_F2_S3_P360')
    {
    campo360=$.trim($('#txt_F2_S3_P360').val());
		if (eliminar_miles(campo360)>0 && $.trim($('#txt_F2_S3_P360_E').val()).length == 0 )
		{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 360_E - Advertencia: No especifica otros combustibles. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 360_E - Error: No especifica otros combustibles. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
		}
    }  
    //Regla 141
    if ($(campo_j).attr('id')=='txt_F2_S3_P360')
    {
    campo360=$.trim($('#txt_F2_S3_P360').val());
		if (eliminar_miles(campo360)==0 && $.trim($('#txt_F2_S3_P360_E').val()).length != 0 )
		{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 360 - Advertencia: Especifica otros combustibles pero no indica cantidad. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 360 - Error: Especifica otros combustibles pero no indica cantidad. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
		}
    }  
       		   //Regla 142
 if ($(campo_j).attr('id')=='txt_F2_S3_P361')
    {
    campo338=$.trim($('#txt_F2_S3_P338').val());
	campo340=$.trim($('#txt_F2_S3_P340').val());
	campo342=$.trim($('#txt_F2_S3_P342').val());
	campo345=$.trim($('#txt_F2_S3_P345').val());
	campo346=$.trim($('#txt_F2_S3_P346').val());
	campo348=$.trim($('#txt_F2_S3_P348').val());
	campo350=$.trim($('#txt_F2_S3_P350').val());
	campo352=$.trim($('#txt_F2_S3_P352').val());
	campo354=$.trim($('#txt_F2_S3_P354').val());
	campo356=$.trim($('#txt_F2_S3_P356').val());
	campo358=$.trim($('#txt_F2_S3_P358').val());
	campo361=$.trim($('#txt_F2_S3_P361').val());
	suma=eliminar_miles(campo338)+eliminar_miles(campo340)+eliminar_miles(campo342)+eliminar_miles(campo345)+eliminar_miles(campo346)+eliminar_miles(campo348)+eliminar_miles(campo350)+eliminar_miles(campo352)+eliminar_miles(campo354)+eliminar_miles(campo356)+eliminar_miles(campo358);
		if ( suma != eliminar_miles(campo361))
		{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 361 - Advertencia: Total control cantidad de combustibles no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 361 - Error: Total control cantidad de combustibles no cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
		}
    }  
    		   //Regla 143
 if ($(campo_j).attr('id')=='txt_F2_S3_P362')
    {
    campo339=$.trim($('#txt_F2_S3_P339').val());
	campo341=$.trim($('#txt_F2_S3_P341').val());
	campo343=$.trim($('#txt_F2_S3_P343').val());
	campo346=$.trim($('#txt_F2_S3_P346').val());
	campo347=$.trim($('#txt_F2_S3_P347').val());
	campo349=$.trim($('#txt_F2_S3_P349').val());
	campo351=$.trim($('#txt_F2_S3_P351').val());
	campo353=$.trim($('#txt_F2_S3_P353').val());
	campo355=$.trim($('#txt_F2_S3_P355').val());
	campo357=$.trim($('#txt_F2_S3_P357').val());
	campo359=$.trim($('#txt_F2_S3_P359').val());
	campo360=$.trim($('#txt_F2_S3_P360').val());
	campo362=$.trim($('#txt_F2_S3_P362').val());
	suma=eliminar_miles(campo339)+eliminar_miles(campo341)+eliminar_miles(campo343)+eliminar_miles(campo346)+eliminar_miles(campo347)+eliminar_miles(campo349)+eliminar_miles(campo351)+eliminar_miles(campo353)+eliminar_miles(campo355)+eliminar_miles(campo357)+eliminar_miles(campo359)+eliminar_miles(campo360);
		if ( suma != eliminar_miles(campo362))
		{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 362 - Advertencia: Total control valores en moneda utilizada de combustibles no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 362 - Error: Total control valores en moneda utilizada de combustibles no cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
		}
    } 
     	//Regla 144
if ($(campo_j).attr('id')=='txt_F2_S3_P352')
    {
	suma=0
	for (i=38;i<63;i++)
	{
		campo=$.trim($('#txt_F2_S3_P3'+i).val());
				if (campo=="")
				{
					campo=0;
				}

        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0 )
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 338 al 362 - Advertencia: No informa compra de combustibles y lubricantes. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 338 al 362 - Error: No informa compra de combustibles y lubricantes. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
                }
    } 
      //SECCION IV
    		   //Regla 145
 if ($(campo_j).attr('id')=='txt_F2_S4_P409')
    {
    campo409=$.trim($('#txt_F2_S4_P409').val());
	if ( eliminar_miles(campo409) > 0 && $.trim($('#txt_F2_S4_P409_E').val()).length == 0)
		{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 409_E - Advertencia: No especifica otros servicios de telecomunicaciones. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 409_E - Error: No especifica otros servicios de telecomunicaciones. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
		}
    }  
      // Regla 146
if ($(campo_j).attr('id')=='txt_F2_S4_P421')
    {
	suma=0
	for (i=1;i<21;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F2_S4_P40'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F2_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	campo421=$.trim($('#txt_F2_S4_P421').val());
	 if (suma != eliminar_miles(campo421))
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 421 - Advertencia: Total control valores en moneda utilizada Gastos Generales no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 421 - Error: Total control valores en moneda utilizada Gastos Generales no cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
                }
    }
            // Regla 147
if ($(campo_j).attr('id')=='txt_F2_S4_P421')
    {
	suma=0
	for (i=1;i<22;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F2_S4_P40'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F2_S4_P4'+i).val());
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
					mensaje=mensaje +("Campo 401 al 421 - Advertencia: No declara gastos generales. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 401 al 421 - Error: No declara gastos generales. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
                }
    }
            // Regla 148
if ($(campo_j).attr('id')=='txt_F2_S4_P429')
    {
	suma=0
	for (i=22;i<29;i++)
	{
		campo=$.trim($('#txt_F2_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	campo429=$.trim($(campo_j).val());
	 if (suma != eliminar_miles(campo429))
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 429 - Advertencia: Total de control valores en moneda utilizada Gastos Financieros no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 429 - Error: Total de control valores en moneda utilizada Gastos Financieros no cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
                }
    }
            // Regla 149
if ($(campo_j).attr('id')=='txt_F2_S4_P429')
    {
	suma=0
	for (i=22;i<30;i++)
	{
		campo=$.trim($('#txt_F2_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 422 al 429  - Advertencia: No informa gastos financieros. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 422 al 429 - Error: No informa gastos financieros. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
                }
    }
    //Regla 150
    if ($(campo_j).attr('id')=='txt_F2_S4_P431')
    {
    campo431=$.trim($(campo_j).val());
	if ( eliminar_miles(campo431) == 0 )
		{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 431  - Advertencia: No informa impuesto a la renta devengado en el periodo. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 431 - Error: No informa impuesto a la renta devengado en el periodo. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
		}
    } 
    //Regla 151
    if ($(campo_j).attr('id')=='txt_F2_S4_P433')
    {
    campo433=$.trim($(campo_j).val());
	if ( eliminar_miles(campo433) == 0 )
		{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 433 - Advertencia: No informa patentes, derechos y permisos municipales pagados en el periodo. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 433 - Error: No informa patentes, derechos y permisos municipales pagados en el periodo. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}	
		}
    } 
    		   //Regla 152
 if ($(campo_j).attr('id')=='txt_F2_S4_P434')
    {
    campo434=$.trim($(campo_j).val());
	if ( eliminar_miles(campo434) > 0 && $.trim($('#txt_F2_S4_P434_E').val()).length == 0)
		{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 434_E - Advertencia: No especifica otros impuestos no indicados en las categorías anteriores (pagados en el periodo). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 434_E - Error: No especifica otros impuestos no indicados en las categorías anteriores (pagados en el periodo). \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
		}
    } 
    		   //Regla 153
 if ($(campo_j).attr('id')=='txt_F2_S4_P437')
    {
    campo437=$.trim($(campo_j).val());
	if ( eliminar_miles(campo437) == 0 )
		{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 437 - Advertencia: No declara utilidad o pérdida del ejercicio. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 437 - Error: No declara utilidad o pérdida del ejercicio. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
		}
    } 
            // Regla 154
if ($(campo_j).attr('id')=='txt_F2_S4_P438')
    {
	suma=0
	for (i=30;i<38;i++)
	{
		campo=$.trim($('#txt_F2_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	campo438=$.trim($(campo_j).val());
	 if (suma != eliminar_miles(campo438))
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 438 - Advertencia: Total de control impuestos, retiros y dividendos No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 438 - Error: Total de control impuestos, retiros y dividendos No cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}	
                }
    } 
            // Regla 155
if ($(campo_j).attr('id')=='txt_F2_S4_P438')
    {
	suma=0
	for (i=30;i<39;i++)
	{
		campo=$.trim($('#txt_F2_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 430 al 438 - Advertencia: No informa impuestos, retiros y dividendos. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 430 al 438 - Error: No informa impuestos, retiros y dividendos. \n");
                    $(campo_j).css('border','2px solid red');
			        advertencia++;
			        foco[++cont] = campo_j;
					}	
                }
    }       
 
});
    return [advertencia,error,foco[0],mensaje];
}


