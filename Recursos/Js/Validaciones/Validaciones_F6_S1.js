camposDecimal = [];
camposletra=['txt_F6_S1_P101','txt_F6_S1_P102','txt_F6_S1_P103','txt_F6_S1_P104','txt_F6_S1_P105','txt_F6_S1_P106',
'txt_F6_S1_P107','txt_F6_S1_P108','txt_F6_S1_P109','txt_F6_S1_P110','txt_F6_S1_P111','txt_F6_S1_P112','txt_F6_S1_P113',
'txt_F6_S1_P114','txt_F6_S1_P115','txt_F6_S1_P117','txt_F6_S1_P118'];
camposMiles=['txt_F6_S1_P119','txt_F6_S1_P120','txt_F6_S1_P121','txt_F6_S1_P122','txt_F6_S1_P123','txt_F6_S1_P124',
'txt_F6_S1_P125','txt_F6_S1_P126','txt_F6_S1_P127','txt_F6_S1_P128',
'txt_F6_S2_P2001','txt_F6_S2_P2002','txt_F6_S2_P2003','txt_F6_S2_P2004','txt_F6_S2_P2005','txt_F6_S2_P2006',
'txt_F6_S2_P2007','txt_F6_S2_P2008','txt_F6_S2_P2009','txt_F6_S2_P2010','txt_F6_S2_P2011','txt_F6_S2_P2012',
'txt_F6_S2_P2013','txt_F6_S2_P2014','txt_F6_S2_P2015','txt_F6_S2_P2016','txt_F6_S2_P2017','txt_F6_S2_P2018',
'txt_F6_S2_P2019','txt_F6_S2_P2020','txt_F6_S2_P2021','txt_F6_S2_P2022','txt_F6_S2_P2023','txt_F6_S2_P2024',
'txt_F6_S2_P2025','txt_F6_S2_P2026','txt_F6_S2_P2027','txt_F6_S2_P2028','txt_F6_S2_P2029','txt_F6_S2_P2030',
'txt_F6_S2_P2031','txt_F6_S2_P2032','txt_F6_S2_P2033','txt_F6_S2_P2034','txt_F6_S2_P2035','txt_F6_S2_P2036',
'txt_F6_S2_P2037','txt_F6_S2_P2038','txt_F6_S2_P2039'];
campoSoloTexto=['txt_F6_S1_P116','txt_F6_S1_P129','txt_F6_S1_P130'];
function validar (campo_j){
    campo_j = "#"+campo_j;
    // Regla 1
   if ($(campo_j).attr('id')=='txt_F6_S1_P101')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Razón Social.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S1_P102').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No indica Razón Social.");
				$(campo_j).focus();
				$(campo_j).select();
				return false;
				}
        }        
    }
    // Regla 2
    if ($(campo_j).attr('id')=='txt_F6_S1_P103')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Representante Legal de la empresa.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S1_P104').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No indica Representante Legal de la empresa.");
				$(campo_j).focus();
				$(campo_j).select();
				return false;
				}
        }        
    }
    // Regla 3
    if ($(campo_j).attr('id')=='txt_F6_S1_P104')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica RUT Representante Legal de la empresa.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S1_P105').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No indica RUT Representante Legal de la empresa.");
				$(campo_j).focus();
				$(campo_j).select();
				return false;
				}
        }        
    }
    // Regla 5
   if ($(campo_j).attr('id')=='txt_F6_S1_P105')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica calle en la Dirección de la Gerencia General u Oficina.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S1_P106').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No indica calle en la Dirección de la Gerencia General u Oficina.");
				$(campo_j).focus();
				$(campo_j).select();
				return false;
				}
        }        
    }
    // Regla 6
   if ($(campo_j).attr('id')=='txt_F6_S1_P106')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Número en la Dirección de la Gerencia General u Oficina.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S1_P107').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No indica Número en la Dirección de la Gerencia General u Oficina.");
				$(campo_j).focus();
				$(campo_j).select();
				return false;
				}
        }        
    }
    // Regla 7
   if ($(campo_j).attr('id')=='txt_F6_S1_P107')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if(!confirm('Advertencia: No indica Número local/oficina en la Dirección de la Gerencia General u Oficina.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F6_S1_P108').focus();
                return false;
            }
        }        
    }
    // Regla 8
   if ($(campo_j).attr('id')=='txt_F6_S1_P108')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Comuna en la Dirección de la Gerencia General u Oficina.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S1_P109').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No indica Comuna en la Dirección de la Gerencia General u Oficina.");
				$(campo_j).focus();
				$(campo_j).select();
				return false;
				}
        }        
    }
    // Regla 9
   if ($(campo_j).attr('id')=='txt_F6_S1_P110')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Número de Teléfono.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S1_P111').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No indica Número de Teléfono.");
				$(campo_j).focus();
				$(campo_j).select();
				return false;
				}
        }        
    }
    // Regla 10
   if ($(campo_j).attr('id')=='txt_F6_S1_P110')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F6_S1_P109').val()).length == 0)
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Código Área Teléfono.\n ¿Desea continuar?'))
					{
					$('#txt_F6_S1_P109').focus();
					$('#txt_F6_S1_P109').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S1_P111').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No indica Código Área Teléfono.");
				$('#txt_F6_S1_P109').focus();
				$('#txt_F6_S1_P109').select();
				return false;
				}
        }        
    }
	// Regla 11
   if ($(campo_j).attr('id')=='txt_F6_S1_P112')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica número de Fax.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S1_P113').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No indica número de Fax.");
				$(campo_j).focus();
				$(campo_j).select();
				return false;
				}
        }        
    }
     // Regla 12
   if ($(campo_j).attr('id')=='txt_F6_S1_P112')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F6_S1_P111').val()).length == 0)
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Código Área Fax.\n ¿Desea continuar?'))
					{
					$('#txt_F6_S1_P111').focus();
					$('#txt_F6_S1_P111').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S1_P113').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No indica Código Área Fax.");
				$('#txt_F6_S1_P111').focus();
				$('#txt_F6_S1_P111').select();
				return false;
				}
        }        
    }
    // Regla 13
   if ($(campo_j).attr('id')=='txt_F6_S1_P113')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if(!confirm('Advertencia: No indica Correo Electrónico.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F6_S1_P114').focus();
                return false;
            }
        }        
    }
      // Regla 14
   if ($(campo_j).attr('id')=='txt_F6_S1_P116')
    {
        if ( $.trim($(campo_j).val()).length == 0 && $.trim($('#txt_F6_S1_P115').val()).length != 0)
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Comuna Casilla Comercial.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S1_P117').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No indica Comuna Casilla Comercial.");
				$(campo_j).focus();
				$(campo_j).select();
				return false;
				}
        }        
    }
     // Regla 15
   if ($(campo_j).attr('id')=='txt_F6_S1_P117')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if(!confirm('Advertencia: Recuerde ingresar su código postal.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F6_S1_P118').focus();
                return false;
            }
        }        
    }
    // Regla 16
   if ($(campo_j).attr('id')=='txt_F6_S1_P118')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if(!confirm('Advertencia: No indica nombre de flota.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F6_S1_P119').focus();
                return false;
            }
        }        
    }
    //Regla 17
        if ($(campo_j).attr('id')=='txt_F6_S1_P127')
        {
		suma=0;
        for (i=19;i<28;i++)
			{
			campo=$.trim($('#txt_F6_S1_P1'+i).val());
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
				if(!confirm('Advertencia: No informa número de embarcaciones.\n ¿Desea continuar?'))
					{
					$('#txt_F6_S1_P119').focus();
					$('#txt_F6_S1_P119').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S1_P128').focus();
					return false;
					}    
					}
					else 
					{
					alert("Error: No informa número de embarcaciones.");
                    $('#txt_F6_S1_P119').focus();
                    $('#txt_F6_S1_P119').select();
                    return false;
					}
                }
        } 
        //Regla 18
        if ($(campo_j).attr('id')=='txt_F6_S1_P127')
        {
		suma=0;
        for (i=19;i<28;i++)
			{
			campo=$.trim($('#txt_F6_S1_P1'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			
			suma=eliminar_miles(campo)+suma;
			}
		if (suma < 0 || suma > 250)
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Número de embarcaciones fuera de rango.\n ¿Desea continuar?'))
					{
					$('#txt_F6_S1_P119').focus();
					$('#txt_F6_S1_P119').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F6_S1_P128').focus();
					return false;
					}    
					}
					else 
					{
					alert("Error: Número de embarcaciones fuera de rango.");
                    $('#txt_F6_S1_P119').focus();
                    $('#txt_F6_S1_P119').select();
                    return false;
					}
				}
        } 
        //SECCION II
        //Regla 23   
 if ($(campo_j).attr('id')=='txt_F6_S2_P2013')
    {
    campo2001=$.trim($('#txt_F6_S2_P2001').val());
    campo2002=$.trim($('#txt_F6_S2_P2002').val());
    campo2003=$.trim($('#txt_F6_S2_P2003').val());
    campo2004=$.trim($('#txt_F6_S2_P2004').val());
    campo2005=$.trim($('#txt_F6_S2_P2005').val());
    campo2006=$.trim($('#txt_F6_S2_P2006').val());
    campo2007=$.trim($('#txt_F6_S2_P2007').val());
    campo2008=$.trim($('#txt_F6_S2_P2008').val());
    campo2009=$.trim($('#txt_F6_S2_P2009').val());
	campo2010=$.trim($('#txt_F6_S2_P2010').val());
    campo2013=$.trim($('#txt_F6_S2_P2013').val());
            if ( eliminar_miles(campo2010) > 0 || eliminar_miles(campo2013) > 0 )
            {
			    suma=eliminar_miles(campo2001)+eliminar_miles(campo2002)+eliminar_miles(campo2003)+eliminar_miles(campo2004)+eliminar_miles(campo2005)+eliminar_miles(campo2006)+eliminar_miles(campo2007)+eliminar_miles(campo2008);
				if ( suma==0  || eliminar_miles(campo2009)==0)
                {
					if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. Personal de Flota.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2001').focus();
						$('#txt_F6_S2_P2001').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2014').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. Personal de Flota.");
                    $('#txt_F6_S2_P2001').focus();
                    $('#txt_F6_S2_P2001').select();
                    return false;
					}
                }
            }  

    }  
    //Regla 24   
    if ($(campo_j).attr('id')=='txt_F6_S2_P2013')
    {
    campo2001=$.trim($('#txt_F6_S2_P2001').val());
    campo2002=$.trim($('#txt_F6_S2_P2002').val());
    campo2003=$.trim($('#txt_F6_S2_P2003').val());
    campo2004=$.trim($('#txt_F6_S2_P2004').val());
    campo2005=$.trim($('#txt_F6_S2_P2005').val());
    campo2006=$.trim($('#txt_F6_S2_P2006').val());
    campo2007=$.trim($('#txt_F6_S2_P2007').val());
    campo2008=$.trim($('#txt_F6_S2_P2008').val());
    campo2009=$.trim($('#txt_F6_S2_P2009').val());
	campo2010=$.trim($('#txt_F6_S2_P2010').val());
    campo2013=$.trim($('#txt_F6_S2_P2013').val());
	suma=eliminar_miles(campo2001)+eliminar_miles(campo2002)+eliminar_miles(campo2003)+eliminar_miles(campo2004)+eliminar_miles(campo2005)+eliminar_miles(campo2006)+eliminar_miles(campo2007)+eliminar_miles(campo2008);
            if ( suma > 0 || eliminar_miles(campo2009)>0)
            {
                if ( eliminar_miles(campo2010) == 0 || eliminar_miles(campo2013) == 0 )
                {
                    if(!confirm('Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. Personal de Flota.\n ¿Desea continuar?')){
                    $('#txt_F6_S2_P2001').focus();
                    $('#txt_F6_S2_P2001').select();
                    return false;
                    }else{
                    flag_2 = true;
                    $('#txt_F6_S2_P2014').focus();
                    return false;
                    }
                }
            }  

    }
    //Regla 25   
 if ($(campo_j).attr('id')=='txt_F6_S2_P2026')
    {
    campo2014=$.trim($('#txt_F6_S2_P2014').val());
    campo2015=$.trim($('#txt_F6_S2_P2015').val());
    campo2016=$.trim($('#txt_F6_S2_P2016').val());
    campo2017=$.trim($('#txt_F6_S2_P2017').val());
    campo2018=$.trim($('#txt_F6_S2_P2018').val());
    campo2019=$.trim($('#txt_F6_S2_P2019').val());
    campo2020=$.trim($('#txt_F6_S2_P2020').val());
    campo2021=$.trim($('#txt_F6_S2_P2021').val());
    campo2022=$.trim($('#txt_F6_S2_P2022').val());
	campo2023=$.trim($('#txt_F6_S2_P2023').val());
    campo2026=$.trim($('#txt_F6_S2_P2026').val());
            if ( eliminar_miles(campo2023) > 0 || eliminar_miles(campo2026) > 0 )
            {
			    suma=eliminar_miles(campo2014)+eliminar_miles(campo2015)+eliminar_miles(campo2016)+eliminar_miles(campo2017)+eliminar_miles(campo2018)+eliminar_miles(campo2019)+eliminar_miles(campo2020)+eliminar_miles(campo2021);
				if ( suma==0  || eliminar_miles(campo2022)==0)
                {
					if (perfil == 4)
					{
						if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. Personal de Bahía.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2014').focus();
						$('#txt_F6_S2_P2014').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2027').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. Personal de Bahía.");
                    $('#txt_F6_S2_P2014').focus();
                    $('#txt_F6_S2_P2014').select();
                    return false;
					}
                }
            }  

    }  
    //Regla 26   
    if ($(campo_j).attr('id')=='txt_F6_S2_P2026')
    {
    campo2014=$.trim($('#txt_F6_S2_P2014').val());
    campo2015=$.trim($('#txt_F6_S2_P2015').val());
    campo2016=$.trim($('#txt_F6_S2_P2016').val());
    campo2017=$.trim($('#txt_F6_S2_P2017').val());
    campo2018=$.trim($('#txt_F6_S2_P2018').val());
    campo2019=$.trim($('#txt_F6_S2_P2019').val());
    campo2020=$.trim($('#txt_F6_S2_P2020').val());
    campo2021=$.trim($('#txt_F6_S2_P2021').val());
    campo2022=$.trim($('#txt_F6_S2_P2022').val());
	campo2023=$.trim($('#txt_F6_S2_P2023').val());
    campo2026=$.trim($('#txt_F6_S2_P2026').val());
	suma=eliminar_miles(campo2014)+eliminar_miles(campo2015)+eliminar_miles(campo2016)+eliminar_miles(campo2017)+eliminar_miles(campo2018)+eliminar_miles(campo2019)+eliminar_miles(campo2020)+eliminar_miles(campo2021);
            if ( suma > 0 || eliminar_miles(campo2022)>0)
            {
                if ( eliminar_miles(campo2023) == 0 || eliminar_miles(campo2026) == 0 )
                {
                    if(!confirm('Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. Personal de Bahía.\n ¿Desea continuar?')){
                    $('#txt_F6_S2_P2014').focus();
                    $('#txt_F6_S2_P2014').select();
                    return false;
                    }else{
                    flag_2 = true;
                    $('#txt_F6_S2_P2027').focus();
                    return false;
                    }
                }
            }  

    } 
    //Regla 27   
 if ($(campo_j).attr('id')=='txt_F6_S2_P2027')
    {
    campo2001=$.trim($('#txt_F6_S2_P2001').val());
    campo2014=$.trim($('#txt_F6_S2_P2014').val());
    campo2027=$.trim($('#txt_F6_S2_P2027').val());
	suma=eliminar_miles(campo2001)+eliminar_miles(campo2014);
             if ( suma != eliminar_miles(campo2027) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control Hombres 1° Trimestre No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2001').focus();
						$('#txt_F6_S2_P2001').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2028').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control Hombres 1° Trimestre No cuadra.");
                    $('#txt_F6_S2_P2001').focus();
                    $('#txt_F6_S2_P2001').select();
                    return false;
					}
            }  

    }  
    //Regla 28   
 if ($(campo_j).attr('id')=='txt_F6_S2_P2028')
    {
    campo2002=$.trim($('#txt_F6_S2_P2002').val());
    campo2015=$.trim($('#txt_F6_S2_P2015').val());
    campo2028=$.trim($('#txt_F6_S2_P2028').val());
	suma=eliminar_miles(campo2002)+eliminar_miles(campo2015);
             if ( suma != eliminar_miles(campo2028) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control Mujeres 1° Trimestre No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2002').focus();
						$('#txt_F6_S2_P2002').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2029').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control Mujeres 1° Trimestre No cuadra.");
                    $('#txt_F6_S2_P2002').focus();
                    $('#txt_F6_S2_P2002').select();
                    return false;
					}
            }  

    }  
    //Regla 29   
 if ($(campo_j).attr('id')=='txt_F6_S2_P2029')
    {
    campo2003=$.trim($('#txt_F6_S2_P2003').val());
    campo2016=$.trim($('#txt_F6_S2_P2016').val());
    campo2029=$.trim($('#txt_F6_S2_P2029').val());
	suma=eliminar_miles(campo2003)+eliminar_miles(campo2016);
             if ( suma != eliminar_miles(campo2029) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control Hombres 2° Trimestre No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2003').focus();
						$('#txt_F6_S2_P2003').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2030').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control Hombres 2° Trimestre No cuadra.");
                    $('#txt_F6_S2_P2003').focus();
                    $('#txt_F6_S2_P2003').select();
                    return false;
					}
            }  

    }  
   //Regla 30  
 if ($(campo_j).attr('id')=='txt_F6_S2_P2030')
    {
    campo2004=$.trim($('#txt_F6_S2_P2004').val());
    campo2017=$.trim($('#txt_F6_S2_P2017').val());
    campo2030=$.trim($('#txt_F6_S2_P2030').val());
	suma=eliminar_miles(campo2004)+eliminar_miles(campo2017);
             if ( suma != eliminar_miles(campo2030) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control Mujeres 2° Trimestre No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2004').focus();
						$('#txt_F6_S2_P2004').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2031').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control Mujeres 2° Trimestre No cuadra.");
                    $('#txt_F6_S2_P2004').focus();
                    $('#txt_F6_S2_P2004').select();
                    return false;
					}
            }  

    }  
    //Regla 31  
 if ($(campo_j).attr('id')=='txt_F6_S2_P2031')
    {
    campo2005=$.trim($('#txt_F6_S2_P2005').val());
    campo2018=$.trim($('#txt_F6_S2_P2018').val());
    campo2031=$.trim($('#txt_F6_S2_P2031').val());
	suma=eliminar_miles(campo2005)+eliminar_miles(campo2018);
             if ( suma != eliminar_miles(campo2031) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control Hombres 3° Trimestre No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2005').focus();
						$('#txt_F6_S2_P2005').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2032').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control Hombres 3° Trimestre No cuadra.");
                    $('#txt_F6_S2_P2005').focus();
                    $('#txt_F6_S2_P2005').select();
                    return false;
					}
            }  

    }  
    //Regla 32 
 if ($(campo_j).attr('id')=='txt_F6_S2_P2032')
    {
    campo2006=$.trim($('#txt_F6_S2_P2006').val());
    campo2019=$.trim($('#txt_F6_S2_P2019').val());
    campo2032=$.trim($('#txt_F6_S2_P2032').val());
	suma=eliminar_miles(campo2006)+eliminar_miles(campo2019);
             if ( suma != eliminar_miles(campo2032) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control Mujeres 3° Trimestre No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2006').focus();
						$('#txt_F6_S2_P2006').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2033').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control Mujeres 3° Trimestre No cuadra.");
                    $('#txt_F6_S2_P2006').focus();
                    $('#txt_F6_S2_P2006').select();
                    return false;
					}
            }  

    }  
   //Regla 33
 if ($(campo_j).attr('id')=='txt_F6_S2_P2033')
    {
    campo2007=$.trim($('#txt_F6_S2_P2007').val());
    campo2020=$.trim($('#txt_F6_S2_P2020').val());
    campo2033=$.trim($('#txt_F6_S2_P2033').val());
	suma=eliminar_miles(campo2007)+eliminar_miles(campo2020);
             if ( suma != eliminar_miles(campo2033) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control Hombres 4° Trimestre No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2007').focus();
						$('#txt_F6_S2_P2007').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2034').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control Hombres 4° Trimestre No cuadra.");
                    $('#txt_F6_S2_P2007').focus();
                    $('#txt_F6_S2_P2007').select();
                    return false;
					}
            }  

    }  
    //Regla 34
 if ($(campo_j).attr('id')=='txt_F6_S2_P2034')
    {
    campo2008=$.trim($('#txt_F6_S2_P2008').val());
    campo2021=$.trim($('#txt_F6_S2_P2021').val());
    campo2034=$.trim($('#txt_F6_S2_P2034').val());
	suma=eliminar_miles(campo2008)+eliminar_miles(campo2021);
             if ( suma != eliminar_miles(campo2034) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control Mujeres 4° Trimestre No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2008').focus();
						$('#txt_F6_S2_P2008').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2035').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control Mujeres 4° Trimestre No cuadra.");
                    $('#txt_F6_S2_P2008').focus();
                    $('#txt_F6_S2_P2008').select();
                    return false;
					}
            }  

    }  
    //Regla 35
 if ($(campo_j).attr('id')=='txt_F6_S2_P2035')
    {
    campo2009=$.trim($('#txt_F6_S2_P2009').val());
    campo2022=$.trim($('#txt_F6_S2_P2022').val());
    campo2035=$.trim($('#txt_F6_S2_P2035').val());
	suma=eliminar_miles(campo2009)+eliminar_miles(campo2022);
             if ( suma != eliminar_miles(campo2035) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control Horas trabajadas No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2009').focus();
						$('#txt_F6_S2_P2009').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2036').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control Horas trabajadas No cuadra.");
                    $('#txt_F6_S2_P2009').focus();
                    $('#txt_F6_S2_P2009').select();
                    return false;
					}
            }  

    }  
    //Regla 36
 if ($(campo_j).attr('id')=='txt_F6_S2_P2036')
    {
    campo2010=$.trim($('#txt_F6_S2_P2010').val());
    campo2023=$.trim($('#txt_F6_S2_P2023').val());
    campo2036=$.trim($('#txt_F6_S2_P2036').val());
	suma=eliminar_miles(campo2010)+eliminar_miles(campo2023);
             if ( suma != eliminar_miles(campo2036) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control Remuneraciones No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2010').focus();
						$('#txt_F6_S2_P2010').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2037').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control Remuneraciones No cuadra.");
                    $('#txt_F6_S2_P2010').focus();
                    $('#txt_F6_S2_P2010').select();
                    return false;
					}
            }  

    }  
    //Regla 37
 if ($(campo_j).attr('id')=='txt_F6_S2_P2037')
    {
    campo2011=$.trim($('#txt_F6_S2_P2011').val());
    campo2024=$.trim($('#txt_F6_S2_P2024').val());
    campo2037=$.trim($('#txt_F6_S2_P2037').val());
	suma=eliminar_miles(campo2011)+eliminar_miles(campo2024);
             if ( suma != eliminar_miles(campo2037) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control prima o participación de pesca anual No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2011').focus();
						$('#txt_F6_S2_P2011').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2038').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control prima o participación de pesca anual No cuadra.");
                    $('#txt_F6_S2_P2011').focus();
                    $('#txt_F6_S2_P2011').select();
                    return false;
					}
            }  

    }  
    //Regla 38
 if ($(campo_j).attr('id')=='txt_F6_S2_P2038')
    {
    campo2012=$.trim($('#txt_F6_S2_P2012').val());
    campo2025=$.trim($('#txt_F6_S2_P2025').val());
    campo2038=$.trim($('#txt_F6_S2_P2038').val());
	suma=eliminar_miles(campo2012)+eliminar_miles(campo2025);
             if ( suma != eliminar_miles(campo2038) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control aportes patronales anual No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2012').focus();
						$('#txt_F6_S2_P2012').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F6_S2_P2039').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control aportes patronales anual No cuadra.");
                    $('#txt_F6_S2_P2012').focus();
                    $('#txt_F6_S2_P2012').select();
                    return false;
					}
            }  

    }  
    //Regla 39
 if ($(campo_j).attr('id')=='txt_F6_S2_P2039')
    {
    campo2013=$.trim($('#txt_F6_S2_P2013').val());
    campo2026=$.trim($('#txt_F6_S2_P2026').val());
    campo2039=$.trim($('#txt_F6_S2_P2039').val());
	suma=eliminar_miles(campo2013)+eliminar_miles(campo2026);
             if ( suma != eliminar_miles(campo2039) )
            {
				if (perfil == 4)
					{
						if(!confirm('Advertencia: Total de control Honorarios anual No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2013').focus();
						$('#txt_F6_S2_P2013').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#Btn_Volver').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: Total de control Honorarios anual No cuadra.");
                    $('#txt_F6_S2_P2013').focus();
                    $('#txt_F6_S2_P2013').select();
                    return false;
					}
            }  

    }  
    // Regla 40
if ($(campo_j).attr('id')=='txt_F6_S2_P2039')
    {
	suma=0
	for (i=1;i<40;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F6_S2_P200'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F6_S2_P20'+i).val());
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
						if(!confirm('Advertencia: No informa personal directamente contratado por la empresa.\n ¿Desea continuar?'))
						{
						$('#txt_F6_S2_P2001').focus();
						$('#txt_F6_S2_P2001').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#Btn_Volver').focus();
						return false;
						}    
					}
					else 
					{
					alert("Error: No informa personal directamente contratado por la empresa.");
                    $('#txt_F6_S2_P2001').focus();
                    $('#txt_F6_S2_P2001').select();
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
//        // Regla 1
//   if ($(campo_j).attr('id')=='txt_F6_S1_P101')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//				{
//				mensaje=mensaje +("Campo 101 - Advertencia: No indica Razón Social. \n");
//				$(campo_j).css('border','2px solid #FFA500');
//				advertencia++;
//				foco[++cont] = campo_j;
//				}
//				else
//				{
//				mensaje=mensaje +("Campos 101 - Error: No indica Razón Social. \n");
//                $(campo_j).css('border','2px solid red');
//			    error++;
//			    foco[++cont] = campo_j;
//				}
//        }        
//    }
//    // Regla 2
//    if ($(campo_j).attr('id')=='txt_F6_S1_P103')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//				{
//				mensaje=mensaje +("Campo 103 - Advertencia: No indica Representante Legal de la empresa. \n");
//				$(campo_j).css('border','2px solid #FFA500');
//				advertencia++;
//				foco[++cont] = campo_j;
//				}
//				else
//				{
//				mensaje=mensaje +("Campos 103 - Error: No indica Representante Legal de la empresa. \n");
//                $(campo_j).css('border','2px solid red');
//			    error++;
//			    foco[++cont] = campo_j;
//				}
//        }        
//    }
//    // Regla 3
//    if ($(campo_j).attr('id')=='txt_F6_S1_P104')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//				{
//				mensaje=mensaje +("Campo 104 - Advertencia: No indica RUT Representante Legal de la empresa. \n");
//				$(campo_j).css('border','2px solid #FFA500');
//				advertencia++;
//				foco[++cont] = campo_j;
//				}
//				else
//				{
//				mensaje=mensaje +("Campos 104 - Error: No indica RUT Representante Legal de la empresa. \n");
//                $(campo_j).css('border','2px solid red');
//			    error++;
//			    foco[++cont] = campo_j;
//				}
//        }        
//    }
//    // Regla 5
//   if ($(campo_j).attr('id')=='txt_F6_S1_P105')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//				{
//				mensaje=mensaje +("Campo 105 - Advertencia: No indica calle en la Dirección de la Gerencia General u Oficina. \n");
//				$(campo_j).css('border','2px solid #FFA500');
//				advertencia++;
//				foco[++cont] = campo_j;
//				}
//				else
//				{
//				mensaje=mensaje +("Campos 105 - Error: No indica calle en la Dirección de la Gerencia General u Oficina. \n");
//                $(campo_j).css('border','2px solid red');
//			    error++;
//			    foco[++cont] = campo_j;
//				}
//        }        
//    }
//    // Regla 6
//   if ($(campo_j).attr('id')=='txt_F6_S1_P106')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//				{
//				mensaje=mensaje +("Campo 106 - Advertencia: No indica Número en la Dirección de la Gerencia General u Oficina. \n");
//				$(campo_j).css('border','2px solid #FFA500');
//				advertencia++;
//				foco[++cont] = campo_j;
//				}
//				else
//				{
//				mensaje=mensaje +("Campos 106 - Error: No indica Número en la Dirección de la Gerencia General u Oficina. \n");
//                $(campo_j).css('border','2px solid red');
//			    error++;
//			    foco[++cont] = campo_j;
//				}
//        }        
//    }
//    // Regla 7
//   if ($(campo_j).attr('id')=='txt_F6_S1_P107')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//				mensaje=mensaje +("Campo 107 - Advertencia:  No indica Número local/oficina en la Dirección de la Gerencia General u Oficina. \n");
//                $(campo_j).css('border','2px solid #FFA500');
//			    advertencia++;
//			    foco[++cont] = campo_j;
//        }        
//    }
//    // Regla 8
//   if ($(campo_j).attr('id')=='txt_F6_S1_P108')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//				{
//				mensaje=mensaje +("Campo 108 - Advertencia: No indica Comuna en la Dirección de la Gerencia General u Oficina. \n");
//				$(campo_j).css('border','2px solid #FFA500');
//				advertencia++;
//				foco[++cont] = campo_j;
//				}
//				else
//				{
//				mensaje=mensaje +("Campos 108 - Error: No indica Comuna en la Dirección de la Gerencia General u Oficina. \n");
//                $(campo_j).css('border','2px solid red');
//			    error++;
//			    foco[++cont] = campo_j;
//				}
//        }        
//    }
//    // Regla 9
//   if ($(campo_j).attr('id')=='txt_F6_S1_P110')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//				{
//				mensaje=mensaje +("Campo 110 - Advertencia: No indica Número de Teléfono. \n");
//				$(campo_j).css('border','2px solid #FFA500');
//				advertencia++;
//				foco[++cont] = campo_j;
//				}
//				else
//				{
//				mensaje=mensaje +("Campos 110 - Error: No indica Número de Teléfono. \n");
//                $(campo_j).css('border','2px solid red');
//			    error++;
//			    foco[++cont] = campo_j;
//				}
//        }        
//    }
//    // Regla 10
//   if ($(campo_j).attr('id')=='txt_F6_S1_P110')
//    {
//        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F6_S1_P109').val()).length == 0)
//        {
//			if (perfil == 4)
//				{
//				mensaje=mensaje +("Campo 109 - Advertencia: No indica Código Área Teléfono. \n");
//				$(campo_j).css('border','2px solid #FFA500');
//				advertencia++;
//				foco[++cont] = campo_j;
//				}
//				else
//				{
//				mensaje=mensaje +("Campos 109 - Error: No indica Código Área Teléfono. \n");
//				$(campo_j).css('border','2px solid red');
//			    error++;
//			    foco[++cont] = campo_j;
//				}
//        }        
//    }
	// Regla 11
   if ($(campo_j).attr('id')=='txt_F6_S1_P112')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				mensaje=mensaje +("Campo 112 - Advertencia: No indica número de Fax. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 112 - Error: No indica número de Fax. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
        }        
    }
     // Regla 12
   if ($(campo_j).attr('id')=='txt_F6_S1_P112')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#ddl_F6_S1_P111').val()) == 0)
        {
			if (perfil == 4)
				{
				mensaje=mensaje +("Campo 111 - Advertencia: No indica Código Área Fax. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 111 - Error: No indica Código Área Fax. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
        }        
    }
//    // Regla 13
//   if ($(campo_j).attr('id')=='txt_F6_S1_P113')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//				mensaje=mensaje +("Campo 113 - Advertencia:  No indica Correo Electrónico. \n");
//                $(campo_j).css('border','2px solid #FFA500');
//			    advertencia++;
//			    foco[++cont] = campo_j;
//        }        
//    }
      // Regla 14
   
     // Regla 15
   if ($(campo_j).attr('id')=='txt_F6_S1_P117')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
				mensaje=mensaje +("Campo 117 - Advertencia: Recuerde ingresar su código postal. \n");
                $(campo_j).css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
        }        
    }
    // Regla 16
   if ($(campo_j).attr('id')=='txt_F6_S1_P118')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
				mensaje=mensaje +("Campo 118 - Advertencia: No indica nombre de flota. \n");
                $(campo_j).css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
        }        
    }
    //Regla 17
        if ($(campo_j).attr('id')=='txt_F6_S1_P127')
        {
		suma=0;
        for (i=19;i<28;i++)
			{
			campo=$.trim($('#txt_F6_S1_P1'+i).val());
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
					mensaje=mensaje +("Campo 119 al 127 - Advertencia: No informa número de embarcaciones. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 119 al 127 - Error: No informa número de embarcaciones. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
                }
        } 
        //Regla 18
        if ($(campo_j).attr('id')=='txt_F6_S1_P127')
        {
		suma=0;
        for (i=19;i<28;i++)
			{
			campo=$.trim($('#txt_F6_S1_P1'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			
			suma=eliminar_miles(campo)+suma;
			}
		if (suma < 0 || suma > 250)
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 119 al 127 - Advertencia: Número de embarcaciones fuera de rango. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 119 al 127 - Error: Número de embarcaciones fuera de rango. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
                }
        } 
        //--
        

        //SECCION II
        //Regla 23   
 if ($(campo_j).attr('id')=='txt_F6_S2_P2013')
    {
    campo2001=$.trim($('#txt_F6_S2_P2001').val());
    campo2002=$.trim($('#txt_F6_S2_P2002').val());
    campo2003=$.trim($('#txt_F6_S2_P2003').val());
    campo2004=$.trim($('#txt_F6_S2_P2004').val());
    campo2005=$.trim($('#txt_F6_S2_P2005').val());
    campo2006=$.trim($('#txt_F6_S2_P2006').val());
    campo2007=$.trim($('#txt_F6_S2_P2007').val());
    campo2008=$.trim($('#txt_F6_S2_P2008').val());
    campo2009=$.trim($('#txt_F6_S2_P2009').val());
	campo2010=$.trim($('#txt_F6_S2_P2010').val());
    campo2013=$.trim($('#txt_F6_S2_P2013').val());
            if ( eliminar_miles(campo2010) > 0 || eliminar_miles(campo2013) > 0 )
            {
			    suma=eliminar_miles(campo2001)+eliminar_miles(campo2002)+eliminar_miles(campo2003)+eliminar_miles(campo2004)+eliminar_miles(campo2005)+eliminar_miles(campo2006)+eliminar_miles(campo2007)+eliminar_miles(campo2008);
				if ( suma==0  || eliminar_miles(campo2009)==0)
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2013 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. Personal de Flota. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2013 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. Personal de Flota. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
                }
            }  

    }  
    //Regla 24   
    if ($(campo_j).attr('id')=='txt_F6_S2_P2013')
    {
    campo2001=$.trim($('#txt_F6_S2_P2001').val());
    campo2002=$.trim($('#txt_F6_S2_P2002').val());
    campo2003=$.trim($('#txt_F6_S2_P2003').val());
    campo2004=$.trim($('#txt_F6_S2_P2004').val());
    campo2005=$.trim($('#txt_F6_S2_P2005').val());
    campo2006=$.trim($('#txt_F6_S2_P2006').val());
    campo2007=$.trim($('#txt_F6_S2_P2007').val());
    campo2008=$.trim($('#txt_F6_S2_P2008').val());
    campo2009=$.trim($('#txt_F6_S2_P2009').val());
	campo2010=$.trim($('#txt_F6_S2_P2010').val());
    campo2013=$.trim($('#txt_F6_S2_P2013').val());
	suma=eliminar_miles(campo2001)+eliminar_miles(campo2002)+eliminar_miles(campo2003)+eliminar_miles(campo2004)+eliminar_miles(campo2005)+eliminar_miles(campo2006)+eliminar_miles(campo2007)+eliminar_miles(campo2008);
            if ( suma > 0 || eliminar_miles(campo2009)>0)
            {
                if ( eliminar_miles(campo2010) == 0 || eliminar_miles(campo2013) == 0 )
                {
					mensaje=mensaje +("Campo 2013 - Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. Personal de Flota. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
                }
            }  

    }
    //Regla 25   
 if ($(campo_j).attr('id')=='txt_F6_S2_P2026')
    {
    campo2014=$.trim($('#txt_F6_S2_P2014').val());
    campo2015=$.trim($('#txt_F6_S2_P2015').val());
    campo2016=$.trim($('#txt_F6_S2_P2016').val());
    campo2017=$.trim($('#txt_F6_S2_P2017').val());
    campo2018=$.trim($('#txt_F6_S2_P2018').val());
    campo2019=$.trim($('#txt_F6_S2_P2019').val());
    campo2020=$.trim($('#txt_F6_S2_P2020').val());
    campo2021=$.trim($('#txt_F6_S2_P2021').val());
    campo2022=$.trim($('#txt_F6_S2_P2022').val());
	campo2023=$.trim($('#txt_F6_S2_P2023').val());
    campo2026=$.trim($('#txt_F6_S2_P2026').val());
            if ( eliminar_miles(campo2023) > 0 || eliminar_miles(campo2026) > 0 )
            {
			    suma=eliminar_miles(campo2014)+eliminar_miles(campo2015)+eliminar_miles(campo2016)+eliminar_miles(campo2017)+eliminar_miles(campo2018)+eliminar_miles(campo2019)+eliminar_miles(campo2020)+eliminar_miles(campo2021);
				if ( suma==0  || eliminar_miles(campo2022)==0)
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2026 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. Personal de Bahía. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2026 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. Personal de Bahía. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
                }
            }  

    }  
    //Regla 26   
    if ($(campo_j).attr('id')=='txt_F6_S2_P2026')
    {
    campo2014=$.trim($('#txt_F6_S2_P2014').val());
    campo2015=$.trim($('#txt_F6_S2_P2015').val());
    campo2016=$.trim($('#txt_F6_S2_P2016').val());
    campo2017=$.trim($('#txt_F6_S2_P2017').val());
    campo2018=$.trim($('#txt_F6_S2_P2018').val());
    campo2019=$.trim($('#txt_F6_S2_P2019').val());
    campo2020=$.trim($('#txt_F6_S2_P2020').val());
    campo2021=$.trim($('#txt_F6_S2_P2021').val());
    campo2022=$.trim($('#txt_F6_S2_P2022').val());
	campo2023=$.trim($('#txt_F6_S2_P2023').val());
    campo2026=$.trim($('#txt_F6_S2_P2026').val());
	suma=eliminar_miles(campo2014)+eliminar_miles(campo2015)+eliminar_miles(campo2016)+eliminar_miles(campo2017)+eliminar_miles(campo2018)+eliminar_miles(campo2019)+eliminar_miles(campo2020)+eliminar_miles(campo2021);
            if ( suma > 0 || eliminar_miles(campo2022)>0)
            {
                if ( eliminar_miles(campo2023) == 0 || eliminar_miles(campo2026) == 0 )
                {
					mensaje=mensaje +("Campo 2026 - Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. Personal de Bahía. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
                }
            }  

    } 
    //Regla 27   
 if ($(campo_j).attr('id')=='txt_F6_S2_P2027')
    {
    campo2001=$.trim($('#txt_F6_S2_P2001').val());
    campo2014=$.trim($('#txt_F6_S2_P2014').val());
    campo2027=$.trim($('#txt_F6_S2_P2027').val());
	suma=eliminar_miles(campo2001)+eliminar_miles(campo2014);
             if ( suma != eliminar_miles(campo2027) )
            {
				if (perfil == 4)
				{
				mensaje=mensaje +("Campo 2027 - Advertencia: Total de control Hombres 1° Trimestre No cuadra. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 2027 - Error: Total de control Hombres 1° Trimestre No cuadra. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
            }  

    }  
    //Regla 28   
 if ($(campo_j).attr('id')=='txt_F6_S2_P2028')
    {
    campo2002=$.trim($('#txt_F6_S2_P2002').val());
    campo2015=$.trim($('#txt_F6_S2_P2015').val());
    campo2028=$.trim($('#txt_F6_S2_P2028').val());
	suma=eliminar_miles(campo2002)+eliminar_miles(campo2015);
             if ( suma != eliminar_miles(campo2028) )
            {
				if (perfil == 4)
				{
				mensaje=mensaje +("Campo 2028 - Advertencia: Total de control Mujeres 1° Trimestre No cuadra. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 2028 - Error: Total de control Mujeres 1° Trimestre No cuadra. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
            }  

    }  
    //Regla 29   
 if ($(campo_j).attr('id')=='txt_F6_S2_P2029')
    {
    campo2003=$.trim($('#txt_F6_S2_P2003').val());
    campo2016=$.trim($('#txt_F6_S2_P2016').val());
    campo2029=$.trim($('#txt_F6_S2_P2029').val());
	suma=eliminar_miles(campo2003)+eliminar_miles(campo2016);
             if ( suma != eliminar_miles(campo2029) )
            {
				if (perfil == 4)
				{
				mensaje=mensaje +("Campo 2029 - Advertencia: Total de control Hombres 2° Trimestre No cuadra. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 2029 - Error: Total de control Hombres 2° Trimestre No cuadra. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
            }  

    }  
   //Regla 30  
 if ($(campo_j).attr('id')=='txt_F6_S2_P2030')
    {
    campo2004=$.trim($('#txt_F6_S2_P2004').val());
    campo2017=$.trim($('#txt_F6_S2_P2017').val());
    campo2030=$.trim($('#txt_F6_S2_P2030').val());
	suma=eliminar_miles(campo2004)+eliminar_miles(campo2017);
             if ( suma != eliminar_miles(campo2030) )
            {
				if (perfil == 4)
				{
				mensaje=mensaje +("Campo 2030 - Advertencia: Total de control Mujeres 2° Trimestre No cuadra. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 2030 - Error: Total de control Mujeres 2° Trimestre No cuadra. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
            }  

    }  
    //Regla 31  
 if ($(campo_j).attr('id')=='txt_F6_S2_P2031')
    {
    campo2005=$.trim($('#txt_F6_S2_P2005').val());
    campo2018=$.trim($('#txt_F6_S2_P2018').val());
    campo2031=$.trim($('#txt_F6_S2_P2031').val());
	suma=eliminar_miles(campo2005)+eliminar_miles(campo2018);
             if ( suma != eliminar_miles(campo2031) )
            {
				if (perfil == 4)
				{
				mensaje=mensaje +("Campo 2031 - Advertencia: Total de control Hombres 3° Trimestre No cuadra. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 2031 - Error: Total de control Hombres 3° Trimestre No cuadra. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
            }  

    }  
    //Regla 32 
 if ($(campo_j).attr('id')=='txt_F6_S2_P2032')
    {
    campo2006=$.trim($('#txt_F6_S2_P2006').val());
    campo2019=$.trim($('#txt_F6_S2_P2019').val());
    campo2032=$.trim($('#txt_F6_S2_P2032').val());
	suma=eliminar_miles(campo2006)+eliminar_miles(campo2019);
             if ( suma != eliminar_miles(campo2032) )
            {
				if (perfil == 4)
				{
				mensaje=mensaje +("Campo 2032 - Advertencia: Total de control Mujeres 3° Trimestre No cuadra. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 2032 - Error: Total de control Mujeres 3° Trimestre No cuadra. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
            }  

    }  
   //Regla 33
 if ($(campo_j).attr('id')=='txt_F6_S2_P2033')
    {
    campo2007=$.trim($('#txt_F6_S2_P2007').val());
    campo2020=$.trim($('#txt_F6_S2_P2020').val());
    campo2033=$.trim($('#txt_F6_S2_P2033').val());
	suma=eliminar_miles(campo2007)+eliminar_miles(campo2020);
             if ( suma != eliminar_miles(campo2033) )
            {
				if (perfil == 4)
				{
				mensaje=mensaje +("Campo 2033 - Advertencia: Total de control Hombres 4° Trimestre No cuadra. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 2033 - Error: Total de control Hombres 4° Trimestre No cuadra. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
            }  

    }  
    //Regla 34
 if ($(campo_j).attr('id')=='txt_F6_S2_P2034')
    {
    campo2008=$.trim($('#txt_F6_S2_P2008').val());
    campo2021=$.trim($('#txt_F6_S2_P2021').val());
    campo2034=$.trim($('#txt_F6_S2_P2034').val());
	suma=eliminar_miles(campo2008)+eliminar_miles(campo2021);
             if ( suma != eliminar_miles(campo2034) )
            {
				if (perfil == 4)
				{
				mensaje=mensaje +("Campo 2034 - Advertencia: Total de control Mujeres 4 ° Trimestre No cuadra. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 2034 - Error: Total de control Mujeres 4° Trimestre No cuadra. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
            }  

    }  
    //Regla 35
 if ($(campo_j).attr('id')=='txt_F6_S2_P2035')
    {
    campo2009=$.trim($('#txt_F6_S2_P2009').val());
    campo2022=$.trim($('#txt_F6_S2_P2022').val());
    campo2035=$.trim($('#txt_F6_S2_P2035').val());
	suma=eliminar_miles(campo2009)+eliminar_miles(campo2022);
             if ( suma != eliminar_miles(campo2035) )
            {
				if (perfil == 4)
				{
				mensaje=mensaje +("Campo 2035 - Advertencia: Total de control Horas trabajadas No cuadra. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 2035 - Error: Total de control Horas trabajadas No cuadra. \n");
				$(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
            }  

    }  
    //Regla 36
 if ($(campo_j).attr('id')=='txt_F6_S2_P2036')
    {
    campo2010=$.trim($('#txt_F6_S2_P2010').val());
    campo2023=$.trim($('#txt_F6_S2_P2023').val());
    campo2036=$.trim($('#txt_F6_S2_P2036').val());
	suma=eliminar_miles(campo2010)+eliminar_miles(campo2023);
             if ( suma != eliminar_miles(campo2036) )
            {
				if (perfil == 4)
				{
				mensaje=mensaje +("Campo 2036 - Advertencia: Total de control Remuneraciones No cuadra. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 2036 - Error: Total de control Remuneraciones No cuadra. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
            }  

    }  
    //Regla 37
 if ($(campo_j).attr('id')=='txt_F6_S2_P2037')
    {
    campo2011=$.trim($('#txt_F6_S2_P2011').val());
    campo2024=$.trim($('#txt_F6_S2_P2024').val());
    campo2037=$.trim($('#txt_F6_S2_P2037').val());
	suma=eliminar_miles(campo2011)+eliminar_miles(campo2024);
             if ( suma != eliminar_miles(campo2037) )
            {
				if (perfil == 4)
				{
				mensaje=mensaje +("Campo 2037 - Advertencia: Total de control prima o participación de pesca anual No cuadra. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 2037 - Error: Total de control prima o participación de pesca anual No cuadra. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
            }  

    }  
    //Regla 38
 if ($(campo_j).attr('id')=='txt_F6_S2_P2038')
    {
    campo2012=$.trim($('#txt_F6_S2_P2012').val());
    campo2025=$.trim($('#txt_F6_S2_P2025').val());
    campo2038=$.trim($('#txt_F6_S2_P2038').val());
	suma=eliminar_miles(campo2012)+eliminar_miles(campo2025);
             if ( suma != eliminar_miles(campo2038) )
            {
				if (perfil == 4)
				{
				mensaje=mensaje +("Campo 2038 - Advertencia: Total de control aportes patronales anual No cuadra. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 2038 - Error: Total de control aportes patronales anual No cuadra. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
            }  

    }  
    //Regla 39
 if ($(campo_j).attr('id')=='txt_F6_S2_P2039')
    {
    campo2013=$.trim($('#txt_F6_S2_P2013').val());
    campo2026=$.trim($('#txt_F6_S2_P2026').val());
    campo2039=$.trim($('#txt_F6_S2_P2039').val());
	suma=eliminar_miles(campo2013)+eliminar_miles(campo2026);
             if ( suma != eliminar_miles(campo2039) )
            {
				if (perfil == 4)
				{
				mensaje=mensaje +("Campo 2039 - Advertencia: Total de control Honorarios anual No cuadra. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 2039 - Error: Total de control Honorarios anual No cuadra. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
            }  

    }  
    // Regla 40
if ($(campo_j).attr('id')=='txt_F6_S2_P2039')
    {
	suma=0
	for (i=1;i<40;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F6_S2_P200'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F6_S2_P20'+i).val());
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
					mensaje=mensaje +("Campo 2001 al 2039 - Advertencia: No informa personal directamente contratado por la empresa. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2001 al 2039 - Error: No informa personal directamente contratado por la empresa. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
                }
    }
        
         });
         
          $.each($('select'),function(i,v){
        campo_j = "#"+$(this).attr('id');
              // Regla 13
              if ($(campo_j).attr('id')=='ddl_F6_S1_P116')
    {
        if ( $.trim($(campo_j).val()) == 0 && $.trim($('#txt_F6_S1_P115').val()).length != 0)
        {
			if (perfil == 4)
				{
				mensaje=mensaje +("Campo 116 - Advertencia: No indica Comuna Casilla Comercial. \n");
				$(campo_j).css('border','2px solid #FFA500');
				advertencia++;
				foco[++cont] = campo_j;
				}
				else
				{
				mensaje=mensaje +("Campos 116 - Error: No indica Comuna Casilla Comercial. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
				}
        }        
    }
//Regla 61
    if ($(campo_j).attr('id')=='ddl_F6_S1_P129')
    {
        if ( $.trim($(campo_j).val()) == 0 )
        {
            if (perfil == 4)
                {
                mensaje=mensaje +("Campo 129 - Advertencia: Días Laborales fuera de rango. \n");
			    $(campo_j).css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
                }
                else
                {
			    mensaje=mensaje +("Campo 129 - Error: Días Laborales fuera de rango.\n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
			    }
        }        
    }
    //Regla 62
    if ($(campo_j).attr('id')=='ddl_F6_S1_P130')
    {
    
        if ( $.trim($(campo_j).val()) == 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 130 - Advertencia: Días Laborales fuera de rango. \n");
			$(campo_j).css('background-color','#FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 130 - Error: Días Laborales fuera de rango. \n");
            $(campo_j).css('background-color','red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
        //--
        if ($(campo_j).attr('id')=='ddl_F6_S1_P130')
    {
    camponum154=$.trim($(campo_j).val());
    camponum153=$.trim($('#ddl_F6_S1_P129').val());
    
	if ( parseInt(camponum154) < parseInt(camponum153))
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: La jornada normal de trabajo en días termina antes de comenzar.\n ¿Desea continuar?'))
                mensaje=mensaje +("Campo 129 y 130 - Advertencia: La jornada normal de trabajo en días termina antes de comenzar. \n");
			    $('#ddl_F1_S1_P129').css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
                }
                else
                {
			    mensaje=mensaje +("Campos 129 y 130 - Error: La jornada normal de trabajo en días termina antes de comenzar. \n");
                $('#ddl_F1_S1_P129').css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
			    }
        }  
    }
    });
    return [advertencia,error,foco[0],mensaje];
}

