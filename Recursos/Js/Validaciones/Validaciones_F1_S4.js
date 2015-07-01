camposDecimal = [];
camposletra=['txt_F1_S3_P327','txt_F1_S3_P350_E','txt_F1_S4_P434_E','txt_F1_S4_P409_E'];
camposMiles=['txt_F1_S3_P313','txt_F1_S3_P314','txt_F1_S3_P315','txt_F1_S3_P316','txt_F1_S3_P317','txt_F1_S3_P318',
'txt_F1_S3_P319','txt_F1_S3_P320','txt_F1_S3_P321','txt_F1_S3_P322','txt_F1_S3_P323','txt_F1_S3_P324','txt_F1_S3_P325',
'txt_F1_S3_P326','txt_F1_S3_P328','txt_F1_S3_P329','txt_F1_S3_P330','txt_F1_S3_P331','txt_F1_S3_P332','txt_F1_S3_P333',
'txt_F1_S3_P334','txt_F1_S3_P335','txt_F1_S3_P336','txt_F1_S3_P337','txt_F1_S3_P338','txt_F1_S3_P339','txt_F1_S3_P340',
'txt_F1_S3_P341','txt_F1_S3_P342','txt_F1_S3_P343','txt_F1_S3_P344','txt_F1_S3_P345','txt_F1_S3_P346','txt_F1_S3_P347',
'txt_F1_S3_P348','txt_F1_S3_P349','txt_F1_S3_P350','txt_F1_S3_P351','txt_F1_S3_P352','txt_F1_S4_P401','txt_F1_S4_P402',
'txt_F1_S4_P403','txt_F1_S4_P404','txt_F1_S4_P405','txt_F1_S4_P406','txt_F1_S4_P407','txt_F1_S4_P408','txt_F1_S4_P409',
'txt_F1_S4_P410','txt_F1_S4_P411','txt_F1_S4_P412','txt_F1_S4_P413','txt_F1_S4_P414','txt_F1_S4_P415','txt_F1_S4_P416',
'txt_F1_S4_P417','txt_F1_S4_P418','txt_F1_S4_P419','txt_F1_S4_P420','txt_F1_S4_P421','txt_F1_S4_P422','txt_F1_S4_P423',
'txt_F1_S4_P424','txt_F1_S4_P425','txt_F1_S4_P426','txt_F1_S4_P427','txt_F1_S4_P428','txt_F1_S4_P429','txt_F1_S4_P430',
'txt_F1_S4_P431','txt_F1_S4_P432','txt_F1_S4_P433','txt_F1_S4_P434','txt_F1_S4_P435','txt_F1_S4_P436','txt_F1_S4_P437',
'txt_F1_S4_P438'];
campoSoloTexto=[];
function validar (campo_j){
    campo_j = "#"+campo_j;
       //Regla 129
 if ($(campo_j).attr('id')=='txt_F1_S3_P315')
    {
    campo313=$.trim($('#txt_F1_S3_P313').val());
    campo315=$.trim($('#txt_F1_S3_P315').val());
	suma=eliminar_miles(campo313)+eliminar_miles(campo315);
			if ( suma == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: No informa consumo de electricidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P313').focus();
                        $('#txt_F1_S3_P313').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P316').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: No informa consumo de electricidad.");
						$('#txt_F1_S3_P313').focus();
						$('#txt_F1_S3_P313').select();
						return false;  
				    } 
				}  
    }  

    //Regla 130
if ($(campo_j).attr('id')=='txt_F1_S3_P314')
    {
    campo313=$.trim($('#txt_F1_S3_P313').val());
    campo314=$.trim($('#txt_F1_S3_P314').val());
		if (eliminar_miles(campo313)==0 )
		{
				if ( eliminar_miles(campo314) > 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de electricidad comprada, pero no cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P313').focus();
                        $('#txt_F1_S3_P313').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P315').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Informa valor en moneda utilizada de electricidad comprada, pero no cantidad.");
						$('#txt_F1_S3_P313').focus();
						$('#txt_F1_S3_P313').select();
						return false; 
					}  
				}  
		}
    }  
	   //Regla 131
 if ($(campo_j).attr('id')=='txt_F1_S3_P314')
    {
    campo313=$.trim($('#txt_F1_S3_P313').val());
    campo314=$.trim($('#txt_F1_S3_P314').val());
		if (eliminar_miles(campo313)>0 )
		{
				if ( eliminar_miles(campo314) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de electricidad comprada, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P313').focus();
                        $('#txt_F1_S3_P313').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P315').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Informa cantidad de electricidad comprada, pero no valor en moneda utilizada.");
						$('#txt_F1_S3_P313').focus();
						$('#txt_F1_S3_P313').select();
						return false;  
					} 
				}  
		}
    }    
     //Regla 132
 if ($(campo_j).attr('id')=='txt_F1_S3_P316')
    {
    campo315=$.trim($('#txt_F1_S3_P315').val());
    campo316=$.trim($('#txt_F1_S3_P316').val());
		if (eliminar_miles(campo315)==0 )
		{
				if ( eliminar_miles(campo316) > 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de electricidad generada, pero no cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P315').focus();
                        $('#txt_F1_S3_P315').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P317').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
						alert("Error: Informa valor en moneda utilizada de electricidad generada, pero no cantidad.");
						$('#txt_F1_S3_P315').focus();
						$('#txt_F1_S3_P315').select();
						return false;
					}   
				}  
		}
    }  
	   //Regla 133
 if ($(campo_j).attr('id')=='txt_F1_S3_P316')
    {
    campo315=$.trim($('#txt_F1_S3_P315').val());
    campo316=$.trim($('#txt_F1_S3_P316').val());
		if (eliminar_miles(campo315)>0 )
		{
				if ( eliminar_miles(campo316) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de electricidad generada, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P315').focus();
                        $('#txt_F1_S3_P315').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P317').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
						alert("Error: Informa cantidad de electricidad generada, pero no valor en moneda utilizada.");
						$('#txt_F1_S3_P315').focus();
						$('#txt_F1_S3_P315').select();
						return false;  
					} 
				}  
		}
    }  
        //Regla 134
 if ($(campo_j).attr('id')=='txt_F1_S3_P318')
    {
    campo317=$.trim($('#txt_F1_S3_P317').val());
    campo318=$.trim($('#txt_F1_S3_P318').val());
		if (eliminar_miles(campo317)==0 )
		{
				if ( eliminar_miles(campo318) > 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de electricidad vendida, pero no cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P317').focus();
                        $('#txt_F1_S3_P317').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P319').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
						alert("Error: Informa valor en moneda utilizada de electricidad vendida, pero no cantidad.");
						$('#txt_F1_S3_P317').focus();
						$('#txt_F1_S3_P317').select();
						return false;  
					} 
				}  
		}
    }  
	   //Regla 135
 if ($(campo_j).attr('id')=='txt_F1_S3_P318')
    {
    campo317=$.trim($('#txt_F1_S3_P317').val());
    campo318=$.trim($('#txt_F1_S3_P318').val());
		if (eliminar_miles(campo317)>0 )
		{
				if ( eliminar_miles(campo318) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de electricidad vendida, pero no valor en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P317').focus();
                        $('#txt_F1_S3_P317').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P319').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
						alert("Error: Informa cantidad de electricidad vendida, pero no valor en moneda utilizada.");
						$('#txt_F1_S3_P317').focus();
						$('#txt_F1_S3_P317').select();
						return false; 
					}  
				}  
		}
    } 
     //Regla 136
 if ($(campo_j).attr('id')=='txt_F1_S3_P318')
    {
    campo315=$.trim($('#txt_F1_S3_P315').val());
	campo316=$.trim($('#txt_F1_S3_P316').val());
    campo317=$.trim($('#txt_F1_S3_P317').val());
	campo318=$.trim($('#txt_F1_S3_P318').val());
	suma1=eliminar_miles(campo315)+eliminar_miles(campo316);
	suma2=eliminar_miles(campo317)+eliminar_miles(campo318);
			if ( suma2 > 0)
			{	
				if ( suma1 == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Inconsistencia: Informa Electricidad vendida, pero no Electricidad generada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P315').focus();
                        $('#txt_F1_S3_P315').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P319').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
						alert("Error: Inconsistencia: Informa Electricidad vendida, pero no Electricidad generada.");
						$('#txt_F1_S3_P315').focus();
						$('#txt_F1_S3_P315').select();
						return false; 
					}  
				}  
			}
	}  
    //Regla 137
 if ($(campo_j).attr('id')=='txt_F1_S3_P319')
    {
    campo313=$.trim($('#txt_F1_S3_P313').val());
	campo315=$.trim($('#txt_F1_S3_P315').val());
    campo317=$.trim($('#txt_F1_S3_P317').val());
	campo319=$.trim($('#txt_F1_S3_P319').val());
	suma=eliminar_miles(campo313)+eliminar_miles(campo315)+eliminar_miles(campo317);
				if ( suma != eliminar_miles(campo319))
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Total control Cantidad MWh Electricidad no cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P313').focus();
                        $('#txt_F1_S3_P313').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P320').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
						alert("Error: Total control Cantidad MWh Electricidad no cuadra.");
						$('#txt_F1_S3_P313').focus();
						$('#txt_F1_S3_P313').select();
						return false;   
					}
				}  
	}  
	
    //Regla 138
 if ($(campo_j).attr('id')=='txt_F1_S3_P320')
    {
    campo314=$.trim($('#txt_F1_S3_P314').val());
	campo316=$.trim($('#txt_F1_S3_P316').val());
    campo318=$.trim($('#txt_F1_S3_P318').val());
	campo320=$.trim($('#txt_F1_S3_P320').val());
	suma=eliminar_miles(campo314)+eliminar_miles(campo316)+eliminar_miles(campo318);
				if ( suma != eliminar_miles(campo320))
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Total control valor en moneda utilizada de Electricidad no cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P314').focus();
                        $('#txt_F1_S3_P314').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P321').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
						alert("Error: Total control valor en moneda utilizada de Electricidad no cuadra.");
						$('#txt_F1_S3_P314').focus();
						$('#txt_F1_S3_P314').select();
						return false;   
					}
				}  
	}  
	//Regla 139
if ($(campo_j).attr('id')=='txt_F1_S3_P320')
    {
	suma=0
	for (i=13;i<21;i++)
	{
		campo=$.trim($('#txt_F1_S3_P3'+i).val());
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
                        $('#txt_F1_S3_P313').focus();
                        $('#txt_F1_S3_P313').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P321').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
					    alert("Error: No informa Electricidad.");
					    $('#txt_F1_S3_P313').focus();
					    $('#txt_F1_S3_P313').select();
					    return false;  
					} 
                }
    }
    	   //Regla 140
 if ($(campo_j).attr('id')=='txt_F1_S3_P322')
    {
    campo321=$.trim($('#txt_F1_S3_P321').val());
    campo322=$.trim($('#txt_F1_S3_P322').val());
		if (eliminar_miles(campo321)>0 )
		{
				if ( eliminar_miles(campo322) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de agua comprada, pero no informa valor en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P321').focus();
                        $('#txt_F1_S3_P321').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P323').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
						alert("Error: Informa cantidad de agua comprada, pero no informa valor en moneda utilizada.");
						$('#txt_F1_S3_P321').focus();
						$('#txt_F1_S3_P321').select();
						return false;  
					} 
				}  
		}
    }  
 //Regla 141
 if ($(campo_j).attr('id')=='txt_F1_S3_P322')
    {
    campo321=$.trim($('#txt_F1_S3_P321').val());
    campo322=$.trim($('#txt_F1_S3_P322').val());
		if (eliminar_miles(campo321)==0 )
		{
				if ( eliminar_miles(campo322) > 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de agua comprada, pero no informa cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P321').focus();
                        $('#txt_F1_S3_P321').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P323').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
						alert("Error: Informa valor en moneda utilizada de agua comprada, pero no informa cantidad.");
						$('#txt_F1_S3_P321').focus();
						$('#txt_F1_S3_P321').select();
						return false;  
					} 
				}  
		}
    }  
	   //Regla 142
 if ($(campo_j).attr('id')=='txt_F1_S3_P324')
    {
    campo323=$.trim($('#txt_F1_S3_P323').val());
    campo324=$.trim($('#txt_F1_S3_P324').val());
		if (eliminar_miles(campo323)>0 )
		{
				if ( eliminar_miles(campo324) == 0)
				{
						if(!confirm('Advertencia: Informa cantidad de agua extraida, pero no informa valor en moneda utilizada.\n ¿Desea continuar?')){
						$('#txt_F1_S3_P323').focus();
						$('#txt_F1_S3_P323').select();
						return false;
						}else{
						flag_2 = true;
						$('#txt_F1_S3_P325').focus();
						return false;
						}
				}  
		}
    }  
 //Regla 143
 if ($(campo_j).attr('id')=='txt_F1_S3_P324')
    {
    campo323=$.trim($('#txt_F1_S3_P323').val());
    campo324=$.trim($('#txt_F1_S3_P324').val());
		if (eliminar_miles(campo323)==0)
		{
				if ( eliminar_miles(campo324) > 0)
				{
						if(!confirm('Advertencia: Informa valor en moneda utilizada de agua extraida pero no informa cantidad.\n ¿Desea continuar?')){
						$('#txt_F1_S3_P323').focus();
						$('#txt_F1_S3_P323').select();
						return false;
						}else{
						flag_2 = true;
						$('#txt_F1_S3_P325').focus();
						return false;
						}
				}  
		}
    }  
	   //Regla 144
 if ($(campo_j).attr('id')=='txt_F1_S3_P325')
    {
    campo321=$.trim($('#txt_F1_S3_P321').val());
    campo323=$.trim($('#txt_F1_S3_P323').val());
	campo325=$.trim($('#txt_F1_S3_P325').val());
	suma= eliminar_miles(campo321)+eliminar_miles(campo323);
		if (eliminar_miles(campo325)!= suma )
		{
		            if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Total control cantidad de agua no cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P321').focus();
                        $('#txt_F1_S3_P321').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P326').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
						alert("Error: Total control cantidad de agua no cuadra.");
						$('#txt_F1_S3_P321').focus();
						$('#txt_F1_S3_P321').select();
						return false;  
					} 	
		}
    }  
 //Regla 145
 if ($(campo_j).attr('id')=='txt_F1_S3_P326')
    {
    campo322=$.trim($('#txt_F1_S3_P322').val());
    campo324=$.trim($('#txt_F1_S3_P324').val());
	campo326=$.trim($('#txt_F1_S3_P326').val());
	suma= eliminar_miles(campo322)+eliminar_miles(campo324);
		if (eliminar_miles(campo326)!=suma)
		{
		            if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Total control valor en moneda utilizada de agua no cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P322').focus();
                        $('#txt_F1_S3_P322').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P327').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
						alert("Error: Total control valor en moneda utilizada de agua no cuadra.");
						$('#txt_F1_S3_P322').focus();
						$('#txt_F1_S3_P322').select();
						return false; 
				    }				      	
		}
    }  

		//Regla 146
if ($(campo_j).attr('id')=='txt_F1_S3_P327')
    {
	suma=0
	for (i=21;i<27;i++)
	{
		campo=$.trim($('#txt_F1_S3_P3'+i).val());
				if (campo=="")
				{
					campo=0;
				}

        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0 && $.trim($(campo_j).val()).length == 0)
                {
				if(!confirm('Advertencia: No informa agua.\n ¿Desea continuar?')){
                $('#txt_F1_S3_P321').focus();
                $('#txt_F1_S3_P321').select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F1_S3_P328').focus();
                return false;
            }
                }
    }
    	   //Regla 147
 if ($(campo_j).attr('id')=='txt_F1_S3_P329')
    {
    campo328=$.trim($('#txt_F1_S3_P328').val());
    campo329=$.trim($('#txt_F1_S3_P329').val());
		if (eliminar_miles(campo329)>0 )
		{
				if ( eliminar_miles(campo328) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de Carbón y carboncillo, pero no informa cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P328').focus();
                        $('#txt_F1_S3_P328').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P330').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
					    alert("Error: Informa valor en moneda utilizada de Carbón y carboncillo, pero no informa cantidad.");
					    $('#txt_F1_S3_P328').focus();
					    $('#txt_F1_S3_P328').select();
					    return false; 
					}  	
				}  
		}
    }  
		   //Regla 148
 if ($(campo_j).attr('id')=='txt_F1_S3_P329')
    {
    campo328=$.trim($('#txt_F1_S3_P328').val());
    campo329=$.trim($('#txt_F1_S3_P329').val());
		if (eliminar_miles(campo328)>0 )
		{
				if ( eliminar_miles(campo329) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de Carbón y carboncillo, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P328').focus();
                        $('#txt_F1_S3_P328').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P330').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
					alert("Error: Informa cantidad de Carbón y carboncillo, pero no informa valor  en moneda utilizada.");
					$('#txt_F1_S3_P328').focus();
					$('#txt_F1_S3_P328').select();
					return false;   
					}	
				}  
		}
    }  
    	   //Regla 149
 if ($(campo_j).attr('id')=='txt_F1_S3_P331')
    {
    campo330=$.trim($('#txt_F1_S3_P330').val());
    campo331=$.trim($('#txt_F1_S3_P331').val());
		if (eliminar_miles(campo331)>0 )
		{
				if ( eliminar_miles(campo330) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de Coque, pero no informa cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P330').focus();
                        $('#txt_F1_S3_P330').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P332').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
					alert("Error: Informa valor en moneda utilizada de Coque, pero no informa cantidad.");
					$('#txt_F1_S3_P330').focus();
					$('#txt_F1_S3_P330').select();
					return false;   	
					}
				}  
		}
    }  
		   //Regla 150
 if ($(campo_j).attr('id')=='txt_F1_S3_P331')
    {
    campo330=$.trim($('#txt_F1_S3_P330').val());
    campo331=$.trim($('#txt_F1_S3_P331').val());
		if (eliminar_miles(campo330)>0 )
		{
				if ( eliminar_miles(campo331) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de Coque, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P330').focus();
                        $('#txt_F1_S3_P330').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P332').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
					alert("Error: Informa cantidad de Coque, pero no informa valor  en moneda utilizada.");
					$('#txt_F1_S3_P330').focus();
					$('#txt_F1_S3_P330').select();
					return false;  
					} 	
				}  
		}
    }  
    	   //Regla 151
 if ($(campo_j).attr('id')=='txt_F1_S3_P333')
    {
    campo332=$.trim($('#txt_F1_S3_P332').val());
    campo333=$.trim($('#txt_F1_S3_P333').val());
		if (eliminar_miles(campo333)>0 )
		{
				if ( eliminar_miles(campo332) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de Petróleo combustible, pero no informa cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P332').focus();
                        $('#txt_F1_S3_P332').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P334').focus();
                        return false;
				        }    
			        }
			        else 
			        {   
					alert("Error: Informa valor en moneda utilizada de Petróleo combustible, pero no informa cantidad.");
					$('#txt_F1_S3_P332').focus();
					$('#txt_F1_S3_P332').select();
					return false; 
					}  	
				}  
		}
    }  
		   //Regla 152
 if ($(campo_j).attr('id')=='txt_F1_S3_P333')
    {
    campo332=$.trim($('#txt_F1_S3_P332').val());
    campo333=$.trim($('#txt_F1_S3_P333').val());
		if (eliminar_miles(campo332)>0 )
		{
				if ( eliminar_miles(campo333) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de Petróleo combustible, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P332').focus();
                        $('#txt_F1_S3_P332').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P334').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa cantidad de Petróleo combustible, pero no informa valor  en moneda utilizada.");
					$('#txt_F1_S3_P332').focus();
					$('#txt_F1_S3_P332').select();
					return false;  
					} 	
				}  
		}
    }  
    	   //Regla 153
 if ($(campo_j).attr('id')=='txt_F1_S3_P335')
    {
    campo334=$.trim($('#txt_F1_S3_P334').val());
    campo335=$.trim($('#txt_F1_S3_P335').val());
		if (eliminar_miles(campo335)>0 )
		{
				if ( eliminar_miles(campo334) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de Petróleo diesel, pero no informa cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P334').focus();
                        $('#txt_F1_S3_P334').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P336').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa valor en moneda utilizada de Petróleo diesel, pero no informa cantidad.");
					$('#txt_F1_S3_P334').focus();
					$('#txt_F1_S3_P334').select();
					return false; 
					}  	
				}  
		}
    }  
		   //Regla 154
 if ($(campo_j).attr('id')=='txt_F1_S3_P335')
    {
    campo334=$.trim($('#txt_F1_S3_P334').val());
    campo335=$.trim($('#txt_F1_S3_P335').val());
		if (eliminar_miles(campo334)>0 )
		{
				if ( eliminar_miles(campo335) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de Petróleo diesel, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P334').focus();
                        $('#txt_F1_S3_P334').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P336').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa cantidad de Petróleo diesel, pero no informa valor  en moneda utilizada.");
					$('#txt_F1_S3_P334').focus();
					$('#txt_F1_S3_P334').select();
					return false;   	
					}
				}  
		}
    }  
    	   //Regla 155
 if ($(campo_j).attr('id')=='txt_F1_S3_P337')
    {
    campo336=$.trim($('#txt_F1_S3_P336').val());
    campo337=$.trim($('#txt_F1_S3_P337').val());
		if (eliminar_miles(campo337)>0 )
		{
				if ( eliminar_miles(campo336) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de Gasolinas, pero no informa cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P336').focus();
                        $('#txt_F1_S3_P336').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P338').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa valor en moneda utilizada de Gasolinas, pero no informa cantidad.");
					$('#txt_F1_S3_P336').focus();
					$('#txt_F1_S3_P336').select();
					return false;   
					}	
				}  
		}
    }  
		   //Regla 156
 if ($(campo_j).attr('id')=='txt_F1_S3_P337')
    {
    campo336=$.trim($('#txt_F1_S3_P336').val());
    campo337=$.trim($('#txt_F1_S3_P337').val());
		if (eliminar_miles(campo336)>0 )
		{
				if ( eliminar_miles(campo337) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de Gasolinas, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P336').focus();
                        $('#txt_F1_S3_P336').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P338').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa cantidad de Gasolinas, pero no informa valor  en moneda utilizada.");
					$('#txt_F1_S3_P336').focus();
					$('#txt_F1_S3_P336').select();
					return false; 
					}  	
				}  
		}
    }  
    	   //Regla 157
 if ($(campo_j).attr('id')=='txt_F1_S3_P339')
    {
    campo338=$.trim($('#txt_F1_S3_P338').val());
    campo339=$.trim($('#txt_F1_S3_P339').val());
		if (eliminar_miles(campo339)>0 )
		{
				if ( eliminar_miles(campo338) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de Kerosene, pero no informa cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P338').focus();
                        $('#txt_F1_S3_P338').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P340').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa valor en moneda utilizada de Kerosene, pero no informa cantidad.");
					$('#txt_F1_S3_P338').focus();
					$('#txt_F1_S3_P338').select();
					return false;  
					} 	
				}  
		}
    }  
		   //Regla 158
 if ($(campo_j).attr('id')=='txt_F1_S3_P339')
    {
    campo338=$.trim($('#txt_F1_S3_P338').val());
    campo339=$.trim($('#txt_F1_S3_P339').val());
		if (eliminar_miles(campo338)>0 )
		{
				if ( eliminar_miles(campo339) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de Kerosene, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P338').focus();
                        $('#txt_F1_S3_P338').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P340').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa cantidad de Kerosene, pero no informa valor  en moneda utilizada.");
					$('#txt_F1_S3_P338').focus();
					$('#txt_F1_S3_P338').select();
					return false;
					}   	
				}  
		}
    }  
    	   //Regla 159
 if ($(campo_j).attr('id')=='txt_F1_S3_P341')
    {
    campo340=$.trim($('#txt_F1_S3_P340').val());
    campo341=$.trim($('#txt_F1_S3_P341').val());
		if (eliminar_miles(campo341)>0 )
		{
				if ( eliminar_miles(campo340) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de Gas Licuado de Petróleo, pero no informa cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P340').focus();
                        $('#txt_F1_S3_P340').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P342').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa valor en moneda utilizada de Gas Licuado de Petróleo, pero no informa cantidad.");
					$('#txt_F1_S3_P340').focus();
					$('#txt_F1_S3_P340').select();
					return false;   
					}	
				}  
		}
    }  
		   //Regla 160
 if ($(campo_j).attr('id')=='txt_F1_S3_P341')
    {
    campo340=$.trim($('#txt_F1_S3_P340').val());
    campo341=$.trim($('#txt_F1_S3_P341').val());
		if (eliminar_miles(campo340)>0 )
		{
				if ( eliminar_miles(campo341) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de Gas Licuado de Petróleo, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P340').focus();
                        $('#txt_F1_S3_P340').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P342').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa cantidad de Gas Licuado de Petróleo, pero no informa valor  en moneda utilizada.");
					$('#txt_F1_S3_P340').focus();
					$('#txt_F1_S3_P340').select();
					return false;  
					} 	
				}  
		}
    }  
    	   //Regla 161
 if ($(campo_j).attr('id')=='txt_F1_S3_P343')
    {
    campo342=$.trim($('#txt_F1_S3_P342').val());
    campo343=$.trim($('#txt_F1_S3_P343').val());
		if (eliminar_miles(campo343)>0 )
		{
				if ( eliminar_miles(campo342) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de Gas Natural, pero no informa cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P342').focus();
                        $('#txt_F1_S3_P342').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P344').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa valor en moneda utilizada de Gas Natural, pero no informa cantidad.");
					$('#txt_F1_S3_P342').focus();
					$('#txt_F1_S3_P342').select();
					return false;  
					} 	
				}  
		}
    }  
		   //Regla 162
 if ($(campo_j).attr('id')=='txt_F1_S3_P343')
    {
    campo342=$.trim($('#txt_F1_S3_P342').val());
    campo343=$.trim($('#txt_F1_S3_P343').val());
		if (eliminar_miles(campo342)>0 )
		{
				if ( eliminar_miles(campo343) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de Gas Natural, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P342').focus();
                        $('#txt_F1_S3_P342').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P344').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa cantidad de Gas Natural, pero no informa valor  en moneda utilizada.");
					$('#txt_F1_S3_P342').focus();
					$('#txt_F1_S3_P342').select();
					return false;  
					} 	
				}  
		}
    }  
    	   //Regla 163
 if ($(campo_j).attr('id')=='txt_F1_S3_P345')
    {
    campo344=$.trim($('#txt_F1_S3_P344').val());
    campo345=$.trim($('#txt_F1_S3_P345').val());
		if (eliminar_miles(campo345)>0 )
		{
				if ( eliminar_miles(campo344) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de Metanol, pero no informa cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P344').focus();
                        $('#txt_F1_S3_P344').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P346').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa valor en moneda utilizada de Metanol, pero no informa cantidad.");
					$('#txt_F1_S3_P344').focus();
					$('#txt_F1_S3_P344').select();
					return false; 
					}  	
				}  
		}
    }  
		   //Regla 164
 if ($(campo_j).attr('id')=='txt_F1_S3_P345')
    {
    campo344=$.trim($('#txt_F1_S3_P344').val());
    campo345=$.trim($('#txt_F1_S3_P345').val());
		if (eliminar_miles(campo344)>0 )
		{
				if ( eliminar_miles(campo345) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de Metanol, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P344').focus();
                        $('#txt_F1_S3_P344').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P346').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa cantidad de Metanol, pero no informa valor  en moneda utilizada.");
					$('#txt_F1_S3_P344').focus();
					$('#txt_F1_S3_P344').select();
					return false;
					}   	
				}  
		}
    }  
    	   //Regla 165
 if ($(campo_j).attr('id')=='txt_F1_S3_P347')
    {
    campo346=$.trim($('#txt_F1_S3_P346').val());
    campo347=$.trim($('#txt_F1_S3_P347').val());
		if (eliminar_miles(campo347)>0 )
		{
				if ( eliminar_miles(campo346) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de Leña (incluye biomasa), pero no informa cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P346').focus();
                        $('#txt_F1_S3_P346').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P348').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa valor en moneda utilizada de Leña (incluye biomasa), pero no informa cantidad.");
					$('#txt_F1_S3_P346').focus();
					$('#txt_F1_S3_P346').select();
					return false; 
					}  	
				}  
		}
    }  
		   //Regla 166
 if ($(campo_j).attr('id')=='txt_F1_S3_P347')
    {
    campo346=$.trim($('#txt_F1_S3_P346').val());
    campo347=$.trim($('#txt_F1_S3_P347').val());
		if (eliminar_miles(campo346)>0 )
		{
				if ( eliminar_miles(campo347) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de Leña (incluye biomasa), pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P346').focus();
                        $('#txt_F1_S3_P346').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P348').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa cantidad de Leña (incluye biomasa), pero no informa valor  en moneda utilizada.");
					$('#txt_F1_S3_P346').focus();
					$('#txt_F1_S3_P346').select();
					return false; 
					}  	
				}  
		}
    }  
    	   //Regla 167
 if ($(campo_j).attr('id')=='txt_F1_S3_P349')
    {
    campo348=$.trim($('#txt_F1_S3_P348').val());
    campo349=$.trim($('#txt_F1_S3_P349').val());
		if (eliminar_miles(campo349)>0 )
		{
				if ( eliminar_miles(campo348) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa valor en moneda utilizada de Grasa y aceites lubricantes, pero no informa cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P348').focus();
                        $('#txt_F1_S3_P348').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P350_E').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa valor en moneda utilizada de Grasa y aceites lubricantes, pero no informa cantidad.");
					$('#txt_F1_S3_P348').focus();
					$('#txt_F1_S3_P348').select();
					return false;  
					} 	
				}  
		}
    }  
		   //Regla 168
 if ($(campo_j).attr('id')=='txt_F1_S3_P349')
    {
    campo348=$.trim($('#txt_F1_S3_P348').val());
    campo349=$.trim($('#txt_F1_S3_P349').val());
		if (eliminar_miles(campo348)>0 )
		{
				if ( eliminar_miles(campo349) == 0)
				{
				    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa cantidad de Grasa y aceites lubricantes, pero no informa valor  en moneda utilizada.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P348').focus();
                        $('#txt_F1_S3_P348').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P350_E').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
					alert("Error: Informa cantidad de Grasa y aceites lubricantes, pero no informa valor  en moneda utilizada.");
					$('#txt_F1_S3_P348').focus();
					$('#txt_F1_S3_P348').select();
					return false; 
					}  	
				}  
		}
    }  
    		   //Regla 169
 if ($(campo_j).attr('id')=='txt_F1_S3_P350')
    {
    campo350=$.trim($('#txt_F1_S3_P350').val());
		if (eliminar_miles(campo350)>0 && $.trim($('#txt_F1_S3_P350_E').val()).length == 0 )
		{
		    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: No especifica otros combustibles.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P350_E').focus();
                        $('#txt_F1_S3_P350_E').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P351').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
			        alert("Error: No especifica otros combustibles.");
			        $('#txt_F1_S3_P350_E').focus();
			        $('#txt_F1_S3_P350_E').select();
			        return false;
			        }   	
		}
    }  
    //Regla 170
    if ($(campo_j).attr('id')=='txt_F1_S3_P350')
    {
    campo350=$.trim($('#txt_F1_S3_P350').val());
		if (eliminar_miles(campo350)==0 && $.trim($('#txt_F1_S3_P350_E').val()).length != 0 )
		{
		    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Especifica otros combustibles pero no indica cantidad.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P350').focus();
                        $('#txt_F1_S3_P350').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P351').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
			        alert("Error: Especifica otros combustibles pero no indica cantidad.");
			        $('#txt_F1_S3_P350_E').focus();
			        $('#txt_F1_S3_P350_E').select();
			        return false; 
			        }  	
		}
    }  
    		   //Regla 171
 if ($(campo_j).attr('id')=='txt_F1_S3_P351')
    {
    campo328=$.trim($('#txt_F1_S3_P328').val());
	campo330=$.trim($('#txt_F1_S3_P330').val());
	campo332=$.trim($('#txt_F1_S3_P332').val());
	campo334=$.trim($('#txt_F1_S3_P334').val());
	campo336=$.trim($('#txt_F1_S3_P336').val());
	campo338=$.trim($('#txt_F1_S3_P338').val());
	campo340=$.trim($('#txt_F1_S3_P340').val());
	campo342=$.trim($('#txt_F1_S3_P342').val());
	campo344=$.trim($('#txt_F1_S3_P344').val());
	campo346=$.trim($('#txt_F1_S3_P346').val());
	campo348=$.trim($('#txt_F1_S3_P348').val());
	campo351=$.trim($('#txt_F1_S3_P351').val());
	suma=eliminar_miles(campo328)+eliminar_miles(campo330)+eliminar_miles(campo332)+eliminar_miles(campo334)+eliminar_miles(campo336)+eliminar_miles(campo338)+eliminar_miles(campo340)+eliminar_miles(campo342)+eliminar_miles(campo344)+eliminar_miles(campo346)+eliminar_miles(campo348);
		if ( suma != eliminar_miles(campo351))
		{
		            if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Total control cantidad de combustibles no cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P328').focus();
                        $('#txt_F1_S3_P328').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P352').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
			        alert("Error: Total control cantidad de combustibles no cuadra.");
			        $('#txt_F1_S3_P328').focus();
			        $('#txt_F1_S3_P328').select();
			        return false;
			        }   	
		}
    }  
    		   //Regla 172
 if ($(campo_j).attr('id')=='txt_F1_S3_P352')
    {
    campo329=$.trim($('#txt_F1_S3_P329').val());
	campo331=$.trim($('#txt_F1_S3_P331').val());
	campo333=$.trim($('#txt_F1_S3_P333').val());
	campo335=$.trim($('#txt_F1_S3_P335').val());
	campo337=$.trim($('#txt_F1_S3_P337').val());
	campo339=$.trim($('#txt_F1_S3_P339').val());
	campo341=$.trim($('#txt_F1_S3_P341').val());
	campo343=$.trim($('#txt_F1_S3_P343').val());
	campo345=$.trim($('#txt_F1_S3_P345').val());
	campo347=$.trim($('#txt_F1_S3_P347').val());
	campo349=$.trim($('#txt_F1_S3_P349').val());
	campo350=$.trim($('#txt_F1_S3_P350').val());
	campo352=$.trim($('#txt_F1_S3_P352').val());
	suma=eliminar_miles(campo329)+eliminar_miles(campo331)+eliminar_miles(campo333)+eliminar_miles(campo335)+eliminar_miles(campo337)+eliminar_miles(campo339)+eliminar_miles(campo341)+eliminar_miles(campo343)+eliminar_miles(campo345)+eliminar_miles(campo347)+eliminar_miles(campo349)+eliminar_miles(campo350);
		if ( suma != eliminar_miles(campo352))
		{
		            if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Total control valores en moneda utilizada de combustibles no cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P329').focus();
                        $('#txt_F1_S3_P329').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S4_P401').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
			        alert("Error: Total control valores en moneda utilizada de combustibles no cuadra.");
			        $('#txt_F1_S3_P329').focus();
			        $('#txt_F1_S3_P329').select();
			        return false;
			        }   	
		}
    } 
    	//Regla 173
if ($(campo_j).attr('id')=='txt_F1_S3_P352')
    {
	suma=0
	for (i=28;i<53;i++)
	{
		campo=$.trim($('#txt_F1_S3_P3'+i).val());
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
                    if(!confirm('Advertencia:  No informa compra de combustibles y lubricantes.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P328').focus();
                        $('#txt_F1_S3_P328').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S4_P401').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
				    alert("Error: No informa compra de combustibles y lubricantes.");
				    $('#txt_F1_S3_P328').focus();
				    $('#txt_F1_S3_P328').select();
				    return false; 
				    } 
                }
    } 
    //SECCION IV
    		   //Regla 174
 if ($(campo_j).attr('id')=='txt_F1_S4_P409')
    {
    campo409=$.trim($('#txt_F1_S4_P409').val());
	if ( eliminar_miles(campo409) > 0 && $.trim($('#txt_F1_S4_P409_E').val()).length == 0)
		{
		            if (perfil == 4)
                    {
                    if(!confirm('Advertencia:  No especifica otros servicios de telecomunicaciones.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S4_P409_E').focus();
                        $('#txt_F1_S4_P409_E').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S4_P410').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
			        alert("Error: No especifica otros servicios de telecomunicaciones.");
			        $('#txt_F1_S4_P409_E').focus();
			        $('#txt_F1_S4_P409_E').select();
			        return false;
			        }   	
		}
    }  
      // Regla 175
if ($(campo_j).attr('id')=='txt_F1_S4_P421')
    {
	suma=0
	for (i=1;i<21;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F1_S4_P40'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F1_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	campo421=$.trim($('#txt_F1_S4_P421').val());
	 if (suma != eliminar_miles(campo421))
                {
                if (perfil == 4)
                    {
                    if(!confirm('Advertencia:  Total control valores en moneda utilizada Gastos Generales no cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S4_P401').focus();
                        $('#txt_F1_S4_P401').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S4_P422').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
                    alert("Error: Total control valores en moneda utilizada Gastos Generales no cuadra.");
				    $('#txt_F1_S4_P401').focus();
				    $('#txt_F1_S4_P401').select();
				    return false; 
				    } 
                }
    }
            // Regla 176
if ($(campo_j).attr('id')=='txt_F1_S4_P421')
    {
	suma=0
	for (i=1;i<22;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F1_S4_P40'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F1_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                 if(!confirm('Advertencia: No declara gastos generales.\n ¿Desea continuar?')){
                $('#txt_F1_S4_P401').focus();
                $('#txt_F1_S4_P401').select();
                return false;
				}else{
                flag_2 = true;
                $('#txt_F1_S4_P422').focus();
                return false;
				}
                }
    }
            // Regla 177
if ($(campo_j).attr('id')=='txt_F1_S4_P429')
    {
	suma=0
	for (i=22;i<29;i++)
	{
		campo=$.trim($('#txt_F1_S4_P4'+i).val());
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
                        $('#txt_F1_S4_P422').focus();
                        $('#txt_F1_S4_P422').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S4_P430').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
                    alert("Error: Total de control valores en moneda utilizada Gastos Financieros no cuadra.");
			        $('#txt_F1_S4_P422').focus();
			        $('#txt_F1_S4_P422').select();
			        return false;  
			        } 
                }
    }
            // Regla 178
if ($(campo_j).attr('id')=='txt_F1_S4_P429')
    {
	suma=0
	for (i=22;i<30;i++)
	{
		campo=$.trim($('#txt_F1_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                 if(!confirm('Advertencia: No informa gastos financieros.\n ¿Desea continuar?')){
                $('#txt_F1_S4_P422').focus();
                $('#txt_F1_S4_P422').select();
                return false;
				}else{
                flag_2 = true;
                $('#txt_F1_S4_P430').focus();
                return false;
				}
                }
    }
    		   //Regla 179
 if ($(campo_j).attr('id')=='txt_F1_S4_P434')
    {
    campo434=$.trim($(campo_j).val());
	if ( eliminar_miles(campo434) > 0 && $.trim($('#txt_F1_S4_P434_E').val()).length == 0)
		{
		    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: No especifica otros impuestos no indicados en las categorías anteriores (pagados en el periodo).\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S4_P434_E').focus();
                        $('#txt_F1_S4_P434_E').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S4_P435').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
			        alert("Error: No especifica otros impuestos no indicados en las categorías anteriores (pagados en el periodo).");
			        $('#txt_F1_S4_P434_E').focus();
			        $('#txt_F1_S4_P434_E').select();
			        return false; 
			        }  	
		}
    } 
    		   //Regla 180
 if ($(campo_j).attr('id')=='txt_F1_S4_P437')
    {
    campo437=$.trim($(campo_j).val());
	if ( eliminar_miles(campo437) == 0 )
		{
		    if (perfil == 4)
                    {
                    if(!confirm('Advertencia: No declara utilidad o pérdida del ejercicio.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S4_P437').focus();
                        $('#txt_F1_S4_P437').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S4_P438').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
			        alert("Error: No declara utilidad o pérdida del ejercicio.");
			        $('#txt_F1_S4_P437').focus();
			        $('#txt_F1_S4_P437').select();
			        return false; 
			        }  	
		}
    } 
            // Regla 181
if ($(campo_j).attr('id')=='txt_F1_S4_P438')
    {
	suma=0
	for (i=30;i<38;i++)
	{
		campo=$.trim($('#txt_F1_S4_P4'+i).val());
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
                        $('#txt_F1_S4_P437').focus();
                        $('#txt_F1_S4_P437').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S4_P438').focus();
                        return false;
				        }    
			        }
			        else 
			        {  
                    alert("Error: Total de control impuestos, retiros y dividendos No cuadra.");
			        $('#txt_F1_S4_P430').focus();
			        $('#txt_F1_S4_P430').select();
			        return false; 
			        }
                }
    } 
            // Regla 182
if ($(campo_j).attr('id')=='txt_F1_S4_P438')
    {
	suma=0
	for (i=30;i<39;i++)
	{
		campo=$.trim($('#txt_F1_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                 if(!confirm('Advertencia: No informa impuestos, retiros y dividendos.\n ¿Desea continuar?')){
                $('#txt_F1_S4_P430').focus();
                $('#txt_F1_S4_P430').select();
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
         //Regla 129
 if ($(campo_j).attr('id')=='txt_F1_S3_P315')
    {
    campo313=$.trim($('#txt_F1_S3_P313').val());
    campo315=$.trim($('#txt_F1_S3_P315').val());
	suma=eliminar_miles(campo313)+eliminar_miles(campo315);
			if ( suma == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 313 y 315 - Advertencia: No informa consumo de electricidad. \n");
                    $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 313 y 315 - Error: No informa consumo de electricidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}
				}  
    }  

    //Regla 130
if ($(campo_j).attr('id')=='txt_F1_S3_P314')
    {
    campo313=$.trim($('#txt_F1_S3_P313').val());
    campo314=$.trim($('#txt_F1_S3_P314').val());
		if (eliminar_miles(campo313)==0 )
		{
				if ( eliminar_miles(campo314) > 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 313  - Advertencia: Informa valor en moneda utilizada de electricidad comprada, pero no cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 313 - Error: Informa valor en moneda utilizada de electricidad comprada, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
				}  
		}
    }  
	   //Regla 131
 if ($(campo_j).attr('id')=='txt_F1_S3_P314')
    {
    campo313=$.trim($('#txt_F1_S3_P313').val());
    campo314=$.trim($('#txt_F1_S3_P314').val());
		if (eliminar_miles(campo313)>0 )
		{
				if ( eliminar_miles(campo314) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 314 - Advertencia: Informa cantidad de electricidad comprada, pero no valor en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 314 - Error: Informa cantidad de electricidad comprada, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}						
				}  
		}
    }    
     //Regla 132
 if ($(campo_j).attr('id')=='txt_F1_S3_P316')
    {
    campo315=$.trim($('#txt_F1_S3_P315').val());
    campo316=$.trim($('#txt_F1_S3_P316').val());
		if (eliminar_miles(campo315)==0 )
		{
				if ( eliminar_miles(campo316) > 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 315 - Advertencia: Informa valor en moneda utilizada de electricidad generada, pero no cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 315 - Error: Informa valor en moneda utilizada de electricidad generada, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
				}  
		}
    }  
	   //Regla 133
 if ($(campo_j).attr('id')=='txt_F1_S3_P316')
    {
    campo315=$.trim($('#txt_F1_S3_P315').val());
    campo316=$.trim($('#txt_F1_S3_P316').val());
		if (eliminar_miles(campo315)>0 )
		{
				if ( eliminar_miles(campo316) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 316 - Advertencia: Informa cantidad de electricidad generada, pero no valor en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 316 - Error: Informa cantidad de electricidad generada, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}
				}  
		}
    }  
        //Regla 134
 if ($(campo_j).attr('id')=='txt_F1_S3_P318')
    {
    campo317=$.trim($('#txt_F1_S3_P317').val());
    campo318=$.trim($('#txt_F1_S3_P318').val());
		if (eliminar_miles(campo317)==0 )
		{
				if ( eliminar_miles(campo318) > 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 317 - Advertencia: Informa valor en moneda utilizada de electricidad vendida, pero no cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 317 - Error: Informa valor en moneda utilizada de electricidad vendida, pero no cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}		
				}  
		}
    }  
	   //Regla 135
 if ($(campo_j).attr('id')=='txt_F1_S3_P318')
    {
    campo317=$.trim($('#txt_F1_S3_P317').val());
    campo318=$.trim($('#txt_F1_S3_P318').val());
		if (eliminar_miles(campo317)>0 )
		{
				if ( eliminar_miles(campo318) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 318 - Advertencia: Informa cantidad de electricidad vendida, pero no valor en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 318 - Error: Informa cantidad de electricidad vendida, pero no valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
				}  
		}
    } 
     //Regla 136
 if ($(campo_j).attr('id')=='txt_F1_S3_P318')
    {
    campo315=$.trim($('#txt_F1_S3_P315').val());
	campo316=$.trim($('#txt_F1_S3_P316').val());
    campo317=$.trim($('#txt_F1_S3_P317').val());
	campo318=$.trim($('#txt_F1_S3_P318').val());
	suma1=eliminar_miles(campo315)+eliminar_miles(campo316);
	suma2=eliminar_miles(campo317)+eliminar_miles(campo318);
			if ( suma2 > 0)
			{	
				if ( suma1 == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 315 y 316 - Advertencia: Inconsistencia: Informa Electricidad vendida, pero no Electricidad generada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 315 y 316 - Error: Inconsistencia: Informa Electricidad vendida, pero no Electricidad generada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
				}  
			}
	}  
    //Regla 137
 if ($(campo_j).attr('id')=='txt_F1_S3_P319')
    {
    campo313=$.trim($('#txt_F1_S3_P313').val());
	campo315=$.trim($('#txt_F1_S3_P315').val());
    campo317=$.trim($('#txt_F1_S3_P317').val());
	campo319=$.trim($('#txt_F1_S3_P319').val());
	suma=eliminar_miles(campo313)+eliminar_miles(campo315)+eliminar_miles(campo317);
				if ( suma != eliminar_miles(campo319))
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 319 - Advertencia: Total control Cantidad MWh Electricidad no cuadra. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 319 - Error: Total control Cantidad MWh Electricidad no cuadra. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}			
				}  
	}  
	
    //Regla 138
 if ($(campo_j).attr('id')=='txt_F1_S3_P320')
    {
    campo314=$.trim($('#txt_F1_S3_P314').val());
	campo316=$.trim($('#txt_F1_S3_P316').val());
    campo318=$.trim($('#txt_F1_S3_P318').val());
	campo320=$.trim($('#txt_F1_S3_P320').val());
	suma=eliminar_miles(campo314)+eliminar_miles(campo316)+eliminar_miles(campo318);
				if ( suma != eliminar_miles(campo320))
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 320 - Advertencia: Total control valor en moneda utilizada de Electricidad no cuadra. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 320 - Error: Total control valor en moneda utilizada de Electricidad no cuadra. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}
				}  
	}  
	//Regla 139
if ($(campo_j).attr('id')=='txt_F1_S3_P320')
    {
	suma=0
	for (i=13;i<21;i++)
	{
		campo=$.trim($('#txt_F1_S3_P3'+i).val());
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
                    mensaje=mensaje +("Campo 313 al 320 - Advertencia: No informa Electricidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 313 al 320 - Error: No informa Electricidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
    }
    	   //Regla 140
 if ($(campo_j).attr('id')=='txt_F1_S3_P322')
    {
    campo321=$.trim($('#txt_F1_S3_P321').val());
    campo322=$.trim($('#txt_F1_S3_P322').val());
		if (eliminar_miles(campo321)>0 )
		{
				if ( eliminar_miles(campo322) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 322 - Advertencia: Informa cantidad de agua comprada, pero no informa valor en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 322 - Error: Informa cantidad de agua comprada, pero no informa valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
				}  
		}
    }  
 //Regla 141
 if ($(campo_j).attr('id')=='txt_F1_S3_P322')
    {
    campo321=$.trim($('#txt_F1_S3_P321').val());
    campo322=$.trim($('#txt_F1_S3_P322').val());
		if (eliminar_miles(campo321)==0 )
		{
				if ( eliminar_miles(campo322) > 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 321 - Advertencia: Informa valor en moneda utilizada de agua comprada, pero no informa cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 321 - Error: Informa valor en moneda utilizada de agua comprada, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
				}  
		}
    }  
	   //Regla 142
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
                    mensaje=mensaje +("Campo 324  - Advertencia: Informa cantidad de agua extraida, pero no informa valor en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 324 - Error: Informa cantidad de agua extraida, pero no informa valor en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        advertencia++;
			        foco[++cont] = campo_j;
					}
				}  
		}
    }  
 //Regla 143
 if ($(campo_j).attr('id')=='txt_F1_S3_P324')
    {
    campo323=$.trim($('#txt_F1_S3_P323').val());
    campo324=$.trim($('#txt_F1_S3_P324').val());
		if (eliminar_miles(campo323)==0)
		{
				if ( eliminar_miles(campo324) > 0)
				{
                    mensaje=mensaje +("Campo 323 - Advertencia: Informa valor en moneda utilizada de agua extraida pero no informa cantidad . \n");
					$(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
				}  
		}
    }  
	   //Regla 144
 if ($(campo_j).attr('id')=='txt_F1_S3_P325')
    {
    campo321=$.trim($('#txt_F1_S3_P321').val());
    campo323=$.trim($('#txt_F1_S3_P323').val());
	campo325=$.trim($('#txt_F1_S3_P325').val());
	suma= eliminar_miles(campo321)+eliminar_miles(campo323);
		if (eliminar_miles(campo325)!= suma )
		{
			if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 325 - Advertencia: Total control cantidad de agua no cuadra. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 325 - Error: Total control cantidad de agua no cuadra. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
		}
    }  
 //Regla 145
 if ($(campo_j).attr('id')=='txt_F1_S3_P326')
    {
    campo322=$.trim($('#txt_F1_S3_P322').val());
    campo324=$.trim($('#txt_F1_S3_P324').val());
	campo326=$.trim($('#txt_F1_S3_P326').val());
	suma= eliminar_miles(campo322)+eliminar_miles(campo324);
		if (eliminar_miles(campo326)!=suma)
		{
			if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 326 - Advertencia: Total control valor en moneda utilizada de agua no cuadra. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 326 - Error: Total control valor en moneda utilizada de agua no cuadra. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}
		}
    }  

		//Regla 146
if ($(campo_j).attr('id')=='txt_F1_S3_P327')
    {
	suma=0
	for (i=21;i<27;i++)
	{
		campo=$.trim($('#txt_F1_S3_P3'+i).val());
				if (campo=="")
				{
					campo=0;
				}

        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0 && $.trim($(campo_j).val()).length == 0)
                {
                    mensaje=mensaje +("Campo 321 al 326 - Advertencia: No informa agua. \n");
				    $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                }
    }
    	   //Regla 147
 if ($(campo_j).attr('id')=='txt_F1_S3_P329')
    {
    campo328=$.trim($('#txt_F1_S3_P328').val());
    campo329=$.trim($('#txt_F1_S3_P329').val());
		if (eliminar_miles(campo329)>0 )
		{
				if ( eliminar_miles(campo328) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 328 - Advertencia: Informa valor en moneda utilizada de Carbón y carboncillo, pero no informa cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 328 - Error: Informa valor en moneda utilizada de Carbón y carboncillo, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
				}  
		}
    }  
		   //Regla 148
 if ($(campo_j).attr('id')=='txt_F1_S3_P329')
    {
    campo328=$.trim($('#txt_F1_S3_P328').val());
    campo329=$.trim($('#txt_F1_S3_P329').val());
		if (eliminar_miles(campo328)>0 )
		{
				if ( eliminar_miles(campo329) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 329 - Advertencia: Informa cantidad de Carbón y carboncillo, pero no informa valor  en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 329 - Error: Informa cantidad de Carbón y carboncillo, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}
				}  
		}
    }  
    	   //Regla 149
 if ($(campo_j).attr('id')=='txt_F1_S3_P331')
    {
    campo330=$.trim($('#txt_F1_S3_P330').val());
    campo331=$.trim($('#txt_F1_S3_P331').val());
		if (eliminar_miles(campo331)>0 )
		{
				if ( eliminar_miles(campo330) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 330 - Advertencia: Informa valor en moneda utilizada de Coque, pero no informa cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 330 - Error: Informa valor en moneda utilizada de Coque, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}						
				}  
		}
    }  
		   //Regla 150
 if ($(campo_j).attr('id')=='txt_F1_S3_P331')
    {
    campo330=$.trim($('#txt_F1_S3_P330').val());
    campo331=$.trim($('#txt_F1_S3_P331').val());
		if (eliminar_miles(campo330)>0 )
		{
				if ( eliminar_miles(campo331) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 331 - Advertencia: Informa cantidad de Coque, pero no informa valor  en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 331 - Error: Informa cantidad de Coque, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}							
				}  
		}
    }  
    	   //Regla 151
 if ($(campo_j).attr('id')=='txt_F1_S3_P333')
    {
    campo332=$.trim($('#txt_F1_S3_P332').val());
    campo333=$.trim($('#txt_F1_S3_P333').val());
		if (eliminar_miles(campo333)>0 )
		{
				if ( eliminar_miles(campo332) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 332 - Advertencia: Informa valor en moneda utilizada de Petróleo combustible, pero no informa cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 332 - Error: Informa valor en moneda utilizada de Petróleo combustible, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}			
				}  
		}
    }  
		   //Regla 152
 if ($(campo_j).attr('id')=='txt_F1_S3_P333')
    {
    campo332=$.trim($('#txt_F1_S3_P332').val());
    campo333=$.trim($('#txt_F1_S3_P333').val());
		if (eliminar_miles(campo332)>0 )
		{
				if ( eliminar_miles(campo333) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 333 - Advertencia: Informa cantidad de Petróleo combustible, pero no informa valor  en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 333 - Error: Informa cantidad de Petróleo combustible, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}							
				}  
		}
    }  
    	   //Regla 153
 if ($(campo_j).attr('id')=='txt_F1_S3_P335')
    {
    campo334=$.trim($('#txt_F1_S3_P334').val());
    campo335=$.trim($('#txt_F1_S3_P335').val());
		if (eliminar_miles(campo335)>0 )
		{
				if ( eliminar_miles(campo334) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 334 - Advertencia: Informa valor en moneda utilizada de Petróleo diesel, pero no informa cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 334 - Error: Informa valor en moneda utilizada de Petróleo diesel, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;		
					}
				}  
		}
    }  
		   //Regla 154
 if ($(campo_j).attr('id')=='txt_F1_S3_P335')
    {
    campo334=$.trim($('#txt_F1_S3_P334').val());
    campo335=$.trim($('#txt_F1_S3_P335').val());
		if (eliminar_miles(campo334)>0 )
		{
				if ( eliminar_miles(campo335) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 335 - Advertencia: Informa cantidad de Petróleo diesel, pero no informa valor  en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 335 - Error: Informa cantidad de Petróleo diesel, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}
				}  
		}
    }  
    	   //Regla 155
 if ($(campo_j).attr('id')=='txt_F1_S3_P337')
    {
    campo336=$.trim($('#txt_F1_S3_P336').val());
    campo337=$.trim($('#txt_F1_S3_P337').val());
		if (eliminar_miles(campo337)>0 )
		{
				if ( eliminar_miles(campo336) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 336 - Advertencia: Informa valor en moneda utilizada de Gasolinas, pero no informa cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 336 - Error: Informa valor en moneda utilizada de Gasolinas, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}
				}  
		}
    }  
		   //Regla 156
 if ($(campo_j).attr('id')=='txt_F1_S3_P337')
    {
    campo336=$.trim($('#txt_F1_S3_P336').val());
    campo337=$.trim($('#txt_F1_S3_P337').val());
		if (eliminar_miles(campo336)>0 )
		{
				if ( eliminar_miles(campo337) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 337 - Advertencia: Informa cantidad de Gasolinas, pero no informa valor  en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 337 - Error: Informa cantidad de Gasolinas, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}
				}  
		}
    }  
    	   //Regla 157
 if ($(campo_j).attr('id')=='txt_F1_S3_P339')
    {
    campo338=$.trim($('#txt_F1_S3_P338').val());
    campo339=$.trim($('#txt_F1_S3_P339').val());
		if (eliminar_miles(campo339)>0 )
		{
				if ( eliminar_miles(campo338) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 338 - Advertencia: Informa valor en moneda utilizada de Kerosene, pero no informa cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 338 - Error: Informa valor en moneda utilizada de Kerosene, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}
				}  
		}
    }  
		   //Regla 158
 if ($(campo_j).attr('id')=='txt_F1_S3_P339')
    {
    campo338=$.trim($('#txt_F1_S3_P338').val());
    campo339=$.trim($('#txt_F1_S3_P339').val());
		if (eliminar_miles(campo338)>0 )
		{
				if ( eliminar_miles(campo339) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 339 - Advertencia: Informa cantidad de Kerosene, pero no informa valor  en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 339 - Error: Informa cantidad de Kerosene, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	   	
					}
				}  
		}
    }  
    	   //Regla 159
 if ($(campo_j).attr('id')=='txt_F1_S3_P341')
    {
    campo340=$.trim($('#txt_F1_S3_P340').val());
    campo341=$.trim($('#txt_F1_S3_P341').val());
		if (eliminar_miles(campo341)>0 )
		{
				if ( eliminar_miles(campo340) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 340 - Advertencia: Informa valor en moneda utilizada de Gas Licuado de Petróleo, pero no informa cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 340 - Error: Informa valor en moneda utilizada de Gas Licuado de Petróleo, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;		
					}
				}  
		}
    }  
		   //Regla 160
 if ($(campo_j).attr('id')=='txt_F1_S3_P341')
    {
    campo340=$.trim($('#txt_F1_S3_P340').val());
    campo341=$.trim($('#txt_F1_S3_P341').val());
		if (eliminar_miles(campo340)>0 )
		{
				if ( eliminar_miles(campo341) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 341 - Advertencia: Informa cantidad de Gas Licuado de Petróleo, pero no informa valor  en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 341 - Error: Informa cantidad de Gas Licuado de Petróleo, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
				}  
		}
    }  
    	   //Regla 161
 if ($(campo_j).attr('id')=='txt_F1_S3_P343')
    {
    campo342=$.trim($('#txt_F1_S3_P342').val());
    campo343=$.trim($('#txt_F1_S3_P343').val());
		if (eliminar_miles(campo343)>0 )
		{
				if ( eliminar_miles(campo342) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 342 - Advertencia: Informa valor en moneda utilizada de Gas Natural, pero no informa cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 342 - Error: Informa valor en moneda utilizada de Gas Natural, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
				}  
		}
    }  
		   //Regla 162
 if ($(campo_j).attr('id')=='txt_F1_S3_P343')
    {
    campo342=$.trim($('#txt_F1_S3_P342').val());
    campo343=$.trim($('#txt_F1_S3_P343').val());
		if (eliminar_miles(campo342)>0 )
		{
				if ( eliminar_miles(campo343) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 343 - Advertencia: Informa cantidad de Gas Natural, pero no informa valor  en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 343 - Error: Informa cantidad de Gas Natural, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
				}  
		}
    }  
    	   //Regla 163
 if ($(campo_j).attr('id')=='txt_F1_S3_P345')
    {
    campo344=$.trim($('#txt_F1_S3_P344').val());
    campo345=$.trim($('#txt_F1_S3_P345').val());
		if (eliminar_miles(campo345)>0 )
		{
				if ( eliminar_miles(campo344) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 344 - Advertencia: Informa valor en moneda utilizada de Metanol, pero no informa cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 344 - Error: Informa valor en moneda utilizada de Metanol, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	 
					}
				}  
		}
    }  
		   //Regla 164
 if ($(campo_j).attr('id')=='txt_F1_S3_P345')
    {
    campo344=$.trim($('#txt_F1_S3_P344').val());
    campo345=$.trim($('#txt_F1_S3_P345').val());
		if (eliminar_miles(campo344)>0 )
		{
				if ( eliminar_miles(campo345) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 345 - Advertencia: Informa cantidad de Metanol, pero no informa valor  en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 345 - Error: Informa cantidad de Metanol, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}
				}  
		}
    }  
    	   //Regla 165
 if ($(campo_j).attr('id')=='txt_F1_S3_P347')
    {
    campo346=$.trim($('#txt_F1_S3_P346').val());
    campo347=$.trim($('#txt_F1_S3_P347').val());
		if (eliminar_miles(campo347)>0 )
		{
				if ( eliminar_miles(campo346) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 346 - Advertencia: Informa valor en moneda utilizada de Leña (incluye biomasa), pero no informa cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 346 - Error: Informa valor en moneda utilizada de Leña (incluye biomasa), pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	 
					}		
				}  
		}
    }  
		   //Regla 166
 if ($(campo_j).attr('id')=='txt_F1_S3_P347')
    {
    campo346=$.trim($('#txt_F1_S3_P346').val());
    campo347=$.trim($('#txt_F1_S3_P347').val());
		if (eliminar_miles(campo346)>0 )
		{
				if ( eliminar_miles(campo347) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 347 - Advertencia: Informa cantidad de Leña (incluye biomasa), pero no informa valor  en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 347 - Error: Informa cantidad de Leña (incluye biomasa), pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	 
					}
				}  
		}
    }  
    	   //Regla 167
 if ($(campo_j).attr('id')=='txt_F1_S3_P349')
    {
    campo348=$.trim($('#txt_F1_S3_P348').val());
    campo349=$.trim($('#txt_F1_S3_P349').val());
		if (eliminar_miles(campo349)>0 )
		{
				if ( eliminar_miles(campo348) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 348 - Advertencia: Informa valor en moneda utilizada de Grasa y aceites lubricantes, pero no informa cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 348 - Error: Informa valor en moneda utilizada de Grasa y aceites lubricantes, pero no informa cantidad. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}
				}  
		}
    }  
		   //Regla 168
 if ($(campo_j).attr('id')=='txt_F1_S3_P349')
    {
    campo348=$.trim($('#txt_F1_S3_P348').val());
    campo349=$.trim($('#txt_F1_S3_P349').val());
		if (eliminar_miles(campo348)>0 )
		{
				if ( eliminar_miles(campo349) == 0)
				{
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 349 - Advertencia: Informa cantidad de Grasa y aceites lubricantes, pero no informa valor  en moneda utilizada. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 349 - Error: Informa cantidad de Grasa y aceites lubricantes, pero no informa valor  en moneda utilizada. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
				}  
		}
    }  
    		   //Regla 169
 if ($(campo_j).attr('id')=='txt_F1_S3_P350')
    {
    campo350=$.trim($('#txt_F1_S3_P350').val());
		if (eliminar_miles(campo350)>0 && $.trim($('#txt_F1_S3_P350_E').val()).length == 0 )
		{
			if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 350_E - Advertencia: No especifica otros combustibles. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 350_E - Error: No especifica otros combustibles. \n");
			        $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
		}
    }  
    //Regla 170
    if ($(campo_j).attr('id')=='txt_F1_S3_P350')
    {
    campo350=$.trim($('#txt_F1_S3_P350').val());
		if (eliminar_miles(campo350)==0 && $.trim($('#txt_F1_S3_P350_E').val()).length != 0 )
		{
			if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 350 - Advertencia: Especifica otros combustibles pero no indica cantidad. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 350 - Error: Especifica otros combustibles pero no indica cantidad. \n");
			        $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}
		}
    }  
    		   //Regla 171
 if ($(campo_j).attr('id')=='txt_F1_S3_P351')
    {
    campo328=$.trim($('#txt_F1_S3_P328').val());
	campo330=$.trim($('#txt_F1_S3_P330').val());
	campo332=$.trim($('#txt_F1_S3_P332').val());
	campo334=$.trim($('#txt_F1_S3_P334').val());
	campo336=$.trim($('#txt_F1_S3_P336').val());
	campo338=$.trim($('#txt_F1_S3_P338').val());
	campo340=$.trim($('#txt_F1_S3_P340').val());
	campo342=$.trim($('#txt_F1_S3_P342').val());
	campo344=$.trim($('#txt_F1_S3_P344').val());
	campo346=$.trim($('#txt_F1_S3_P346').val());
	campo348=$.trim($('#txt_F1_S3_P348').val());
	campo351=$.trim($('#txt_F1_S3_P351').val());
	suma=eliminar_miles(campo328)+eliminar_miles(campo330)+eliminar_miles(campo332)+eliminar_miles(campo334)+eliminar_miles(campo336)+eliminar_miles(campo338)+eliminar_miles(campo340)+eliminar_miles(campo342)+eliminar_miles(campo344)+eliminar_miles(campo346)+eliminar_miles(campo348);
		if ( suma != eliminar_miles(campo351))
		{
			if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 351 - Advertencia: Total control cantidad de combustibles no cuadra. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 351 - Error: Total control cantidad de combustibles no cuadra. \n");
			        $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}
		}
    }  
    		   //Regla 172
 if ($(campo_j).attr('id')=='txt_F1_S3_P352')
    {
    campo329=$.trim($('#txt_F1_S3_P329').val());
	campo331=$.trim($('#txt_F1_S3_P331').val());
	campo333=$.trim($('#txt_F1_S3_P333').val());
	campo335=$.trim($('#txt_F1_S3_P335').val());
	campo337=$.trim($('#txt_F1_S3_P337').val());
	campo339=$.trim($('#txt_F1_S3_P339').val());
	campo341=$.trim($('#txt_F1_S3_P341').val());
	campo343=$.trim($('#txt_F1_S3_P343').val());
	campo345=$.trim($('#txt_F1_S3_P345').val());
	campo347=$.trim($('#txt_F1_S3_P347').val());
	campo349=$.trim($('#txt_F1_S3_P349').val());
	campo350=$.trim($('#txt_F1_S3_P350').val());
	campo352=$.trim($('#txt_F1_S3_P352').val());
	suma=eliminar_miles(campo329)+eliminar_miles(campo331)+eliminar_miles(campo333)+eliminar_miles(campo335)+eliminar_miles(campo337)+eliminar_miles(campo339)+eliminar_miles(campo341)+eliminar_miles(campo343)+eliminar_miles(campo345)+eliminar_miles(campo347)+eliminar_miles(campo349)+eliminar_miles(campo350);
		if ( suma != eliminar_miles(campo352))
		{
			if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 352 - Advertencia: Total control valores en moneda utilizada de combustibles no cuadra. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 352 - Error: Total control valores en moneda utilizada de combustibles no cuadra. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}
		}
    } 
    	//Regla 173
if ($(campo_j).attr('id')=='txt_F1_S3_P352')
    {
	suma=0
	for (i=28;i<53;i++)
	{
		campo=$.trim($('#txt_F1_S3_P3'+i).val());
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
                    mensaje=mensaje +("Campo 328 al 352 - Advertencia: No informa compra de combustibles y lubricantes. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 328 al 352 - Error: No informa compra de combustibles y lubricantes. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}
                }
    } 
    //SECCION IV
    		   //Regla 174
 if ($(campo_j).attr('id')=='txt_F1_S4_P409')
    {
    campo409=$.trim($('#txt_F1_S4_P409').val());
	if ( eliminar_miles(campo409) > 0 && $.trim($('#txt_F1_S4_P409_E').val()).length == 0)
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
                    mensaje=mensaje +("Campo 409_E - Error: No especifica otros servicios de telecomunicaciones. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}						
		}
    }  
      // Regla 175
if ($(campo_j).attr('id')=='txt_F1_S4_P421')
    {
	suma=0
	for (i=1;i<21;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F1_S4_P40'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F1_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	campo421=$.trim($('#txt_F1_S4_P421').val());
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
                    mensaje=mensaje +("Campo 421 - Error: Total control valores en moneda utilizada Gastos Generales no cuadra. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	 
					}
                }
    }
            // Regla 176
if ($(campo_j).attr('id')=='txt_F1_S4_P421')
    {
	suma=0
	for (i=1;i<22;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F1_S4_P40'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F1_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                    mensaje=mensaje +("Campo 401 al 421 - Advertencia: No declara gastos generales. \n");
					$(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;	
                }
    }
            // Regla 177
if ($(campo_j).attr('id')=='txt_F1_S4_P429')
    {
	suma=0
	for (i=22;i<29;i++)
	{
		campo=$.trim($('#txt_F1_S4_P4'+i).val());
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
                    mensaje=mensaje +("Campo 429 - Error: Total de control valores en moneda utilizada Gastos Financieros no cuadra. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}						
                }
    }
            // Regla 178
if ($(campo_j).attr('id')=='txt_F1_S4_P429')
    {
	suma=0
	for (i=22;i<30;i++)
	{
		campo=$.trim($('#txt_F1_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                    mensaje=mensaje +("Campo 422 al 429 - Advertencia: No informa gastos financieros. \n");
					$(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;	
                }
    }
    		   //Regla 179
 if ($(campo_j).attr('id')=='txt_F1_S4_P434')
    {
    campo434=$.trim($(campo_j).val());
	if ( eliminar_miles(campo434) > 0 && $.trim($('#txt_F1_S4_P434_E').val()).length == 0)
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
                    mensaje=mensaje +("Campo 343_E - Error: No especifica otros impuestos no indicados en las categorías anteriores (pagados en el periodo). \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}						
		}
    } 
    		   //Regla 180
 if ($(campo_j).attr('id')=='txt_F1_S4_P437')
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
                    mensaje=mensaje +("Campo 437 - Error: No declara utilidad o pérdida del ejercicio. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
					}						
		}
    } 
            // Regla 181
if ($(campo_j).attr('id')=='txt_F1_S4_P438')
    {
	suma=0
	for (i=30;i<38;i++)
	{
		campo=$.trim($('#txt_F1_S4_P4'+i).val());
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
                    mensaje=mensaje +("Campo 438 - Error: Total de control impuestos, retiros y dividendos No cuadra. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;	
						}
                }
    } 
            // Regla 182
if ($(campo_j).attr('id')=='txt_F1_S4_P438')
    {
	suma=0
	for (i=30;i<39;i++)
	{
		campo=$.trim($('#txt_F1_S4_P4'+i).val());
				if (campo=="")
				{
					campo=0;
				}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                    mensaje=mensaje +("Campo 430 al 438 - Advertencia: No informa impuestos, retiros y dividendos. \n");
					$(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;	
                }
    }  
 
});
    return [advertencia,error,foco[0],mensaje];
}
