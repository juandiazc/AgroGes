camposDecimal = ['txt_F1_S1_P120','txt_F1_S1_P121'];
camposletra=['txt_F1_S1_P101','txt_F1_S1_P102','txt_F1_S1_P103','txt_F1_S1_P104','txt_F1_S1_P105','txt_F1_S1_P106',
'txt_F1_S1_P107','txt_F1_S1_P108','txt_F1_S1_P109','txt_F1_S1_P110','txt_F1_S1_P112','txt_F1_S1_P113',
'txt_F1_S1_P114','txt_F1_S1_P115','txt_F1_S1_P117','txt_F1_S1_P118_E','txt_F1_S1_P122','txt_F1_S1_P123',
'txt_F1_S1_P124','txt_F1_S1_P125','txt_F1_S1_P128','txt_F1_S1_P130',
'txt_F1_S1_P131','txt_F1_S1_P132','txt_F1_S1_P134','txt_F1_S1_P136','txt_F1_S1_P137',
'txt_F1_S1_P138','txt_F1_S1_P140','txt_F1_S1_P142','txt_F1_S1_P143',
'txt_F1_S1_P152_E'];
camposMiles=[];
campoSoloTexto=['txt_F1_S1_P116','txt_F1_S1_P126','txt_F1_S1_P153','txt_F1_S1_P154'];

function validar (campo_j){
    campo_j = "#"+campo_j;
	// Regla 1
   if ($(campo_j).attr('id')=='txt_F1_S1_P101')
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
                $('#txt_F1_S1_P102').focus();
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
    if ($(campo_j).attr('id')=='txt_F1_S1_P103')
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
					$('#txt_F1_S1_P104').focus();
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
    if ($(campo_j).attr('id')=='txt_F1_S1_P104')
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
					$('#txt_F1_S1_P105').focus();
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
    // Regla 4
   if ($(campo_j).attr('id')=='txt_F1_S1_P105')
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
					$('#txt_F1_S1_P106').focus();
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
    // Regla 5
   if ($(campo_j).attr('id')=='txt_F1_S1_P106')
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
					$('#txt_F1_S1_P107').focus();
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
    // Regla 6
   if ($(campo_j).attr('id')=='txt_F1_S1_P107')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if(!confirm('Advertencia: No indica Número local/oficina en la Dirección de la Gerencia General u Oficina.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F1_S1_P108').focus();
                return false;
            }
        }        
    }
    // Regla 7
   if ($(campo_j).attr('id')=='txt_F1_S1_P108')
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
					$('#txt_F1_S1_P109').focus();
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
    // Regla 8
   if ($(campo_j).attr('id')=='txt_F1_S1_P110')
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
					$('#txt_F1_S1_P111').focus();
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
    // Regla 9
   if ($(campo_j).attr('id')=='txt_F1_S1_P110')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F1_S1_P109').val()).length == 0)
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Código Área Teléfono.\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P109').focus();
					$('#txt_F1_S1_P109').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P111').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica Código Área Teléfono.");
					$('#txt_F1_S1_P109').focus();
					$('#txt_F1_S1_P109').select();
					return false;
				}
        }        
    }
     // Regla 10
   if ($(campo_j).attr('id')=='txt_F1_S1_P112')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F1_S1_P111').val()).length == 0)
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Código Área Fax.\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P111').focus();
					$('#txt_F1_S1_P111').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P112').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica Código Área Fax.");
					$('#txt_F1_S1_P111').focus();
					$('#txt_F1_S1_P111').select();
					return false;
				}
        }        
    }
    // Regla 11
   if ($(campo_j).attr('id')=='txt_F1_S1_P113')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if(!confirm('Advertencia: No indica Correo Electrónico.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F1_S1_P114').focus();
                return false;
            }
        }        
    }
      // Regla 12
   if ($(campo_j).attr('id')=='txt_F1_S1_P116')
    {
        if ( $.trim($(campo_j).val()).length == 0 && $.trim($('#txt_F1_S1_P115').val()).length != 0)
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
					$('#txt_F1_S1_P117').focus();
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
     // Regla 13
   if ($(campo_j).attr('id')=='txt_F1_S1_P117')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if ( perfil == 3)
			{
					alert("Error: Recuerde ingresar su código postal.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
			}
			else
			{
				if(!confirm('Advertencia: Recuerde ingresar su código postal.\n ¿Desea continuar?'))
				{
                $(campo_j).focus();
                $(campo_j).select();
                return false;
				}
				else
				{
                flag_2 = true;
                $('#txt_F1_S1_P118').focus();
                return false;
				}
			}
        }        
    }
        // Regla 14
   if ($(campo_j).attr('id')=='txt_F1_S1_P118')
    {
        if ( $.trim($(campo_j).val()).length == 0 || parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val())>8)
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Tipo de Empresa Fuera de rangos.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P119').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Tipo de Empresa Fuera de rangos.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
    //pasar foco
    if ($(campo_j).attr('id')=='txt_F1_S1_P118')
    {
        if (parseInt($(campo_j).val()) == 8 )
        {
            $('#txt_F1_S1_P118_E').focus();
            return false;
        }  
        else
        {
			$('#txt_F1_S1_P119').focus();
			return false;
        }      
    }
    //Regla 15
    if ($(campo_j).attr('id')=='txt_F1_S1_P118_E')
    {
        if ( $.trim($(campo_j).val()).length == 0 && parseInt($('#txt_F1_S1_P118').val()) == 8 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No especifica otra tipo de organización jurídica.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P119').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No especifica otra tipo de organización jurídica.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
         // Regla 16
   if ($(campo_j).attr('id')=='txt_F1_S1_P119')
    {
        if ( $.trim($(campo_j).val()).length == 0 || parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val())>4)
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Tipo de propiedad Fuera de rangos.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P120').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Tipo de propiedad Fuera de rangos.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
       // Regla 17
   if ($(campo_j).attr('id')=='txt_F1_S1_P120')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: valor del campo debe estar entre 0 y 100.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P121').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: valor del campo debe estar entre 0 y 100.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
    // Regla 18
   if ($(campo_j).attr('id')=='txt_F1_S1_P121')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: valor del campo debe estar entre 0 y 100.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P122').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: valor del campo debe estar entre 0 y 100.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
     // Regla 19
   if ($(campo_j).attr('id')=='txt_F1_S1_P121')
    {
    campo_120=$.trim($('#txt_F1_S1_P120').val());
    campo_121=$.trim($('#txt_F1_S1_P121').val());
    if (campo_120=="")
    {
    campo_120=0;
    } 
    if (campo_121=="")
    {
    campo_121=0;
    } 
            if ( eliminar_decimales(campo_120) + eliminar_decimales(campo_121)!= 100)
			{
				if (perfil == 4)
				{
				if(!confirm('Advertencia: La Suma de las campos nacional y extranjero no debe ser distinta de 100.\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P120').focus();
					$('#txt_F1_S1_P120').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P122').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: La Suma de las campos nacional y extranjero no debe ser distinta de 100.");
					$('#txt_F1_S1_P120').focus();
					$('#txt_F1_S1_P120').select();
					return false;
				}
			}        
    }
    // Regla del 20 al 27
    // valida opcion 1
    if ($(campo_j).attr('id')=='txt_F1_S1_P121')
    {
        if ( parseInt($('#txt_F1_S1_P119').val()) == 1 &&
             parseFloat(eliminar_decimales($('#txt_F1_S1_P120').val())) != 100 &&
             parseFloat(eliminar_decimales($(campo_j).val())) != 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Conformación de Capital inválida con Forma de propiedad..\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P120').focus();
					$('#txt_F1_S1_P120').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P122').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Conformación de Capital inválida con Forma de propiedad.");
					$('#txt_F1_S1_P120').focus();
					$('#txt_F1_S1_P120').select();
					return false;	
				}
        }        
    }
    // valida opcion 2
    if ($(campo_j).attr('id')=='txt_F1_S1_P121')
    {
        if ( parseInt($('#txt_F1_S1_P119').val()) == 2 &&
             parseFloat(eliminar_decimales($('#txt_F1_S1_P120').val())) != 0 &&
             parseFloat(eliminar_decimales($(campo_j).val())) != 100 )
			{
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Conformación de Capital inválida con Forma de propiedad..\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P120').focus();
					$('#txt_F1_S1_P120').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P122').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Conformación de Capital inválida con Forma de propiedad.");
					$('#txt_F1_S1_P120').focus();
					$('#txt_F1_S1_P120').select();
					return false;
				}
			}        
    }
    // valida opcion 4
    if ($(campo_j).attr('id')=='txt_F1_S1_P121')
    {
        if ( parseInt($('#txt_F1_S1_P119').val()) == 4 &&
             parseFloat(eliminar_decimales($('#txt_F1_S1_P120').val())) != 100 &&
             parseFloat(eliminar_decimales($(campo_j).val())) != 0 )
			{
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Conformación de Capital inválida con Forma de propiedad..\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P120').focus();
					$('#txt_F1_S1_P120').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P122').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Conformación de Capital inválida con Forma de propiedad.");
					$('#txt_F1_S1_P120').focus();
					$('#txt_F1_S1_P120').select();
					return false;
				}
			}        
    }
    //COMPLETA PORCENTAJES
    if ( $(campo_j).attr('id') == 'txt_F1_S1_P119' ){
        if ( parseInt($(campo_j).val()) == 1 ){
            $('#txt_F1_S1_P120').attr('value','100,00');
            $('#txt_F1_S1_P121').attr('value','0,00');
            $('#txt_F1_S1_P122').focus();
            return false;
        }
        if ( parseInt($(campo_j).val()) == 2 ){
            $('#txt_F1_S1_P120').attr('value','0,00');
            $('#txt_F1_S1_P121').attr('value','100,00');
            $('#txt_F1_S1_P122').focus();
            return false;
        }
        if ( parseInt($(campo_j).val()) == 4 ){
            $('#txt_F1_S1_P120').attr('value','100,00');
            $('#txt_F1_S1_P121').attr('value','0,00');
            $('#txt_F1_S1_P122').focus();
            return false;
        }
		}
    //Regla 27
    if ($(campo_j).attr('id')=='txt_F1_S1_P122')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica el Nombre de la Planta.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P123').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica el Nombre de la Planta.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
    //Regla 28
    if ($(campo_j).attr('id')=='txt_F1_S1_P123')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica calle en la direccion de la planta o establecimiento.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P124').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica calle en la direccion de la planta o establecimiento.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
    //Regla 29
    if ($(campo_j).attr('id')=='txt_F1_S1_P124')
    {
        if ( $.trim($(campo_j).val()).length == 0 && $.trim($('#txt_F1_S1_P123').val()).length != 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Número en la direccion de la planta o establecimiento.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P125').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica Número en la direccion de la planta o establecimiento.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
    //Regla 30
    if ($(campo_j).attr('id')=='txt_F1_S1_P125')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
           if(!confirm('Advertencia: No indica Número local/oficina en la direccion de la planta o establecimiento.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F1_S1_P126').focus();
                return false;
            }
        }        
    }
    //Regla 31
    if ($(campo_j).attr('id')=='txt_F1_S1_P126')
    {
        if ( $.trim($(campo_j).val()).length == 0 && $.trim($('#txt_F1_S1_P123').val()).length != 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Comuna en la direccion de la planta o establecimiento.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P126').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica Comuna en la direccion de la planta o establecimiento.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
     //Regla 32
    if ($(campo_j).attr('id')=='txt_F1_S1_P128')
    {
        if ( $.trim($(campo_j).val()).length == 0 && $.trim($('#txt_F1_S1_P123').val()).length != 0 )
        {
            if(!confirm('Advertencia: No indica Número de Teléfono de la planta o establecimiento.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F1_S1_P129').focus();
                return false;
            }
        }        
    }
    //Regla 33
    if ($(campo_j).attr('id')=='txt_F1_S1_P128')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F1_S1_P127').val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Código Área Teléfono de la planta o establecimiento.\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P127').focus();
					$('#txt_F1_S1_P127').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P129').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica Código Área Teléfono de la planta o establecimiento.");
					$('#txt_F1_S1_P127').focus();
					$('#txt_F1_S1_P127').select();
					return false;
				}
        }        
    }
    //Regla 34
    if ($(campo_j).attr('id')=='txt_F1_S1_P130')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F1_S1_P129').val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Código Área Fax de la planta o establecimiento.\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P129').focus();
					$('#txt_F1_S1_P129').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P131').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica Código Área Fax de la planta o establecimiento.");
					$('#txt_F1_S1_P129').focus();
					$('#txt_F1_S1_P129').select();
					return false;
				}
        }        
    }
     //Regla 35
    if ($(campo_j).attr('id')=='txt_F1_S1_P131')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if(!confirm('Advertencia: No indica Correo Electrónico de la planta o establecimiento.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F1_S1_P135').focus();
                return false;
            }
        }  
        else
        {
        
        $('#txt_F1_S1_P135').focus();
        return false;
        }      
    }
     //Regla 36
    if ($(campo_j).attr('id')=='txt_F1_S1_P132')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Nombre del contador o informante calificado.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P133').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica Nombre del contador o informante calificado.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
     //Regla 37
    if ($(campo_j).attr('id')=='txt_F1_S1_P134')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Número Telefónico del contador o informante calificado.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P135').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica Número Telefónico del contador o informante calificado.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
    //Regla 38
    if ($(campo_j).attr('id')=='txt_F1_S1_P134')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F1_S1_P133').val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Código Área Teléfono del contador o informante calificado.\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P133').focus();
					$('#txt_F1_S1_P133').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P135').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica Código Área Teléfono del contador o informante calificado.");
					$('#txt_F1_S1_P133').focus();
					$('#txt_F1_S1_P133').select();
					return false;
				}
        }        
    }
    //Regla 39
    if ($(campo_j).attr('id')=='txt_F1_S1_P136')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F1_S1_P135').val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Código Área Fax del contador o informante calificado.\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P135').focus();
					$('#txt_F1_S1_P135').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P137').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica Código Área Fax del contador o informante calificado.");
					$('#txt_F1_S1_P135').focus();
					$('#txt_F1_S1_P135').select();
					return false;
				}
        }        
    }
    //Regla 40
    if ($(campo_j).attr('id')=='txt_F1_S1_P137')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if(!confirm('Advertencia: No indica Correo Electrónico.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F1_S1_P138').focus();
                return false;
            }
        }        
    }
    //Regla 41
    if ($(campo_j).attr('id')=='txt_F1_S1_P138')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if(!confirm('Advertencia: No indica el nombre del encargado de producción de la empresa o establecimiento.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F1_S1_P139').focus();
                return false;
            }
        }        
    }
     //Regla 42
    if ($(campo_j).attr('id')=='txt_F1_S1_P140')
    {
        if ( $.trim($(campo_j).val()).length == 0 && $.trim($('#txt_F1_S1_P138').val()).length != 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica el teléfono del encargado de producción de la empresa o establecimiento.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P141').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica el teléfono del encargado de producción de la empresa o establecimiento.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
    //Regla 43
    if ($(campo_j).attr('id')=='txt_F1_S1_P140')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F1_S1_P139').val()).length == 0 )
        {	
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica el Código Área Teléfono del encargado de producción de la empresa o establecimiento.\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P139').focus();
					$('#txt_F1_S1_P139').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P141').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica el Código Área Teléfono del encargado de producción de la empresa o establecimiento.");
					$('#txt_F1_S1_P139').focus();
					$('#txt_F1_S1_P139').select();
					return false;
				}
        }        
    }
     //Regla 44
    if ($(campo_j).attr('id')=='txt_F1_S1_P142')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F1_S1_P141').val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica el Código Área Fax del encargado de producción de la empresa o establecimiento.\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P141').focus();
					$('#txt_F1_S1_P141').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P143').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica el Código Área Fax del encargado de producción de la empresa o establecimiento.");
					$('#txt_F1_S1_P141').focus();
					$('#txt_F1_S1_P141').select();
					return false;
				}
        }        
    }
    //Pasar Foco
    if ($(campo_j).attr('id')=='txt_F1_S1_P143')
    {
            $('#txt_F1_S1_P144').focus();
            return false;
    }
//    if ($(campo_j).attr('id')=='txt_F1_S1_P149')
//    {
//            $('#txt_F1_S1_P150').focus();
//            return false;
//    }
//    if ($(campo_j).attr('id')=='txt_F1_S1_P150')
//    {
//            $('#txt_F1_S1_P151').focus();
//            return false;
//    }
//     if ($(campo_j).attr('id')=='txt_F1_S1_P151')
//    {
//            $('#txt_F1_S1_P152').focus();
//            return false;
//    }
    // Validaciones 45 hasta la 55.
    //------------------------------
    // Validaciones 45 hasta la 55.
    //------------------------------
	//Regla 45
	if ($(campo_j).attr('id')=='txt_F1_S1_P144')
    {
        if ( parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val()) > 31 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Día informado fuera de rango.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P145').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Día informado fuera de rango.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
	//Regla 46
	if ($(campo_j).attr('id')=='txt_F1_S1_P147')
    {
        if ( parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val()) > 31 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Día informado fuera de rango.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P148').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Día informado fuera de rango.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
	//Regla 47
	if ($(campo_j).attr('id')=='txt_F1_S1_P145')
    {
        if ( parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val()) > 12 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Mes informado fuera de rango.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P146').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Mes informado fuera de rango.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
	//Regla 48
	if ($(campo_j).attr('id')=='txt_F1_S1_P148')
    {
        if ( parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val()) > 12 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Mes informado fuera de rango.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P149').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Mes informado fuera de rango.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
    	//Regla 49
	if ($(campo_j).attr('id')=='txt_F1_S1_P146')
    {
        if ( parseInt($(campo_j).val()) != 2011 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Año informado fuera de rango.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P147').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Año informado fuera de rango.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
	//Regla 50
	if ($(campo_j).attr('id')=='txt_F1_S1_P149')
    {
        if ( parseInt($(campo_j).val()) != 2011 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Año informado fuera de rango.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P150').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Año informado fuera de rango.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        } 
        else
        {
        $('#txt_F1_S1_P150').focus();
            return false;
        }
        
       
    }
     //Regla 56
   if ($(campo_j).attr('id')=='txt_F1_S1_P150')
    {
        if ( $.trim($(campo_j).val()).length == 0 || parseInt($(campo_j).val()) < 0 || parseInt($(campo_j).val())>365)
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Número de días trabajados fuera de rango.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P151').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Número de días trabajados fuera de rango.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }  
        else
        {
        $('#txt_F1_S1_P151').focus();
            return false;
        }      
    }
    //Regla 51
	if ($(campo_j).attr('id')=='txt_F1_S1_P145')
    {
        if ( parseInt($(campo_j).val()) == 4 || parseInt($(campo_j).val()) == 6 || parseInt($(campo_j).val()) == 9 || parseInt($(campo_j).val()) == 11)
        {
			if (parseInt($('#txt_F1_S1_P144').val()) > 30)
			{
				if (perfil == 4)
					{
					if(!confirm('Advertencia: El mes indicado no tiene 31 días.\n ¿Desea continuar?'))
						{
						$('#txt_F1_S1_P144').focus();
						$('#txt_F1_S1_P144').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F1_S1_P146').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: El mes indicado no tiene 31 días.");
						$('#txt_F1_S1_P144').focus();
						$('#txt_F1_S1_P144').select();
						return false;
					}
			}
        }        
    }
    	//Regla 52
	if ($(campo_j).attr('id')=='txt_F1_S1_P148')
    {
        if ( parseInt($(campo_j).val()) == 4 || parseInt($(campo_j).val()) == 6 || parseInt($(campo_j).val()) == 9 || parseInt($(campo_j).val()) == 11)
        {
			if (parseInt($('#txt_F1_S1_P147').val()) > 30)
			{
				if (perfil == 4)
					{
					if(!confirm('Advertencia: El mes indicado no tiene 31 días.\n ¿Desea continuar?'))
						{
						$('#txt_F1_S1_P147').focus();
						$('#txt_F1_S1_P147').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F1_S1_P149').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: El mes indicado no tiene 31 días.");
						$('#txt_F1_S1_P147').focus();
						$('#txt_F1_S1_P147').select();
						return false;
					}
			}
        }        
    }
		//Regla 53
	if ($(campo_j).attr('id')=='txt_F1_S1_P145')
    {
        if ( parseInt($(campo_j).val()) == 2 )
        {
			if (parseInt($('#txt_F1_S1_P144').val()) > 28)
			{
				if (perfil == 4)
					{
					if(!confirm('Advertencia: El mes indicado tiene sólo 28 días.\n ¿Desea continuar?'))
						{
						$('#txt_F1_S1_P144').focus();
						$('#txt_F1_S1_P144').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F1_S1_P146').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: El mes indicado tiene sólo 28 días.");
						$('#txt_F1_S1_P144').focus();
						$('#txt_F1_S1_P144').select();
						return false;
					}
			}
        }        
    }
	//Regla 54
	if ($(campo_j).attr('id')=='txt_F1_S1_P148')
    {
        if ( parseInt($(campo_j).val()) == 2 )
        {
			if (parseInt($('#txt_F1_S1_P147').val()) > 28)
			{
				if (perfil == 4)
					{
					if(!confirm('Advertencia: El mes indicado tiene sólo 28 días.\n ¿Desea continuar?'))
						{
						$('#txt_F1_S1_P147').focus();
						$('#txt_F1_S1_P147').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F1_S1_P149').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: El mes indicado tiene sólo 28 días.");
						$('#txt_F1_S1_P147').focus();
						$('#txt_F1_S1_P147').select();
						return false;
					}
			}
        }        
    }
//    //Regla 55
//    if ($(campo_j).attr('id')=='txt_F1_S1_P149')
//    {
//    if (  parseInt($('##txt_F1_S1_P144').val()) > parseInt($('#txt_F1_S1_P147').val()) &&  parseInt($('#txt_F1_S1_P145').val()) >= parseInt($('#txt_F1_S1_P148').val()) )
//         {
//           alert("Error: Fecha desde  mayor o igual que fecha hasta");
//           $('#txt_F1_S1_P144').focus();
//            return false;
//         }
//    }	
//    if ($(campo_j).attr('id')=='txt_F1_S1_P149')
//    {
//    if (  parseInt($('#txt_F1_S1_P145').val()) > parseInt($('#txt_F1_S1_P148').val()) )
//         {
//           alert("Error: Fecha desde  mayor o igual que fecha hasta");
//           $('#txt_F1_S1_P144').focus();
//            return false;
//         }
//         else
//         {
//          $('#txt_F1_S1_P150').focus();
//          return false;
//          }
//         
//    }	


     // Regla 57 y 58
   if ($(campo_j).attr('id')=='txt_F1_S1_P151')
    {
    if ( $.trim($(campo_j).val()).length == 0 || parseInt($(campo_j).val()) < 0 || parseInt($(campo_j).val())>365)
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Número de días paralizados fuera de rango.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P152').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Número de días paralizados fuera de rango.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }   
    campo_150=$.trim($('#txt_F1_S1_P150').val());
    campo_151=$.trim($('#txt_F1_S1_P151').val());
    if (campo_150=="")
    {
    campo_150=0;
    } 
    if (campo_151=="")
    {
    campo_151=0;
    } 
            if ( parseInt(campo_150) + parseInt(campo_151)> 365)
			{
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Días trabajados más días paralizados mayor que 365.\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P150').focus();
					$('#txt_F1_S1_P150').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P152').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Días trabajados más días paralizados mayor que 365.");
					$('#txt_F1_S1_P150').focus();
					$('#txt_F1_S1_P150').select();
					return false;
				}
			}  
       $('#txt_F1_S1_P152').focus();
        return false;
    }
     //Regla 59
   if ($(campo_j).attr('id')=='txt_F1_S1_P152')
    {
    campo_151=$.trim($('#txt_F1_S1_P151').val());
		if (campo_151=="")
		{
		campo_151=0;
		}
        if (parseInt(campo_151) > 0)
        {
            if ( $.trim($(campo_j).val()).length == 0 || parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val())>7)
            {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica causa de la paralización.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P153').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No indica causa de la paralización.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
            }        
        }
    }
    //pasar foco
    if ($(campo_j).attr('id')=='txt_F1_S1_P152')
    {
            if ( parseInt($(campo_j).val()) == 7 )
            {
                $('#txt_F1_S1_P152_E').focus();
                return false;
                }
                else
                {
                $('#txt_F1_S1_P153').focus();
                return false;
            }        
    }
     //Regla 60
   if ($(campo_j).attr('id')=='txt_F1_S1_P152_E')
    {
            if ( $.trim($(campo_j).val()).length == 0 && parseInt($('#txt_F1_S1_P152').val())== 7 )
            {
				if (perfil == 4)
				{
				if(!confirm('Advertencia: No especifica otra causa de paralización.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P153').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: No especifica otra causa de paralización.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
            }        
    }
    //Regla 61
    if ($(campo_j).attr('id')=='txt_F1_S1_P153')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Días Laborales fuera de rango.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P154').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Días Laborales fuera de rango.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }        
    }
    //Regla 62
    if ($(campo_j).attr('id')=='txt_F1_S1_P154')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Días Laborales fuera de rango.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P155').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Días Laborales fuera de rango.");
					$(campo_j).focus();
					$(campo_j).select();
					return false;
				}
        }  
//        else
//        {
//        $('#txt_F1_S1_P160').focus();
//        }          
    }
    			//Regla 63
    if ($(campo_j).attr('id')=='txt_F1_S1_P154')
    {
    
    campo154=$.trim($(campo_j).val());
    campo153=$.trim($('#txt_F1_S1_P153').val());
    if (campo153=='Lunes' || campo153=='LUNES')
	{
	camponum153=1;
	}
	if (campo153=='Martes' || campo153=='MARTES')
	{
	camponum153=2;
	}
	if (campo153=='Miercoles' || campo153=='MIERCOLES')
	{
	camponum153=3;
	}
	if (campo153=='Jueves' || campo153=='JUEVES')
	{
	camponum153=4;
	}
	if (campo153=='Viernes' || campo153=='VIERNES')
	{
	camponum153=5;
	}
	if (campo153=='Sabado' || campo153=='SABADO')
	{
	camponum153=6;
	}
	if (campo153=='Domingo' || campo153=='DOMINGO')
	{
	camponum153=7;
	}
	if (campo154=='Lunes' || campo154=='LUNES')
	{
	camponum154=1;
	}
	if (campo154=='Martes' || campo154=='MARTES')
	{
	camponum154=2;
	}
	if (campo154=='Miercoles' || campo154=='MIERCOLES')
	{
	camponum154=3;
	}
	if (campo154=='Jueves' || campo154=='JUEVES')
	{
	camponum154=4;
	}
	if (campo154=='Viernes' || campo154=='VIERNES')
	{
	camponum154=5;
	}
	if (campo154=='Sabado' || campo154=='SABADO')
	{
	camponum154=6;
	}
	if (campo154=='Domingo' || campo154=='DOMINGO')
	{
	camponum154=7;
	}
	if ( parseInt(camponum154) < parseInt(camponum153))
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: La jornada normal de trabajo en días termina antes de comenzar.\n ¿Desea continuar?'))
					{
					$('#txt_F1_S1_P153').focus();
					$('#txt_F1_S1_P153').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#chk_F1_S1_P155').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: La jornada normal de trabajo en días termina antes de comenzar.");
					$('#txt_F1_S1_P153').focus();
					$('#txt_F1_S1_P153').select();
					return false;
				}
        }  
//        else
//        {
//        $('#txt_F1_S1_P160').focus();
//        }      
    }
    //Regla 64 al 68
    if ($(campo_j).attr('id')=='chk_F1_S1_P157')
    {
		if($('#chk_F1_S1_P157').is(':checked'))
		{
		chk157=1;
		}
		else
		{
		chk157=0;
		}
		if($('#chk_F1_S1_P156').is(':checked'))
		{
		chk156=1;
		}
		else
		{
		chk156=0;
		}
		if($('#chk_F1_S1_P155').is(':checked'))
		{
		chk155=1;
		}
		else
		{
		chk155=0;
		}
        if ( chk157==1 && chk156==1 && chk155==1)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F1_S1_P158').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
					}
        } 
		if ( chk157==1 && chk156==1 && chk155==0)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F1_S1_P158').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
					}
        }   
		if ( chk157==1 && chk156==0 && chk155==1)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F1_S1_P158').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
					}
        }  
		if ( chk157==0 && chk156==1 && chk155==1)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F1_S1_P158').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
					}
        } 
		if ( chk157==0 && chk156==0 && chk155==0)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F1_S1_P158').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar una de las alternativas de moneda.");
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
					}
        }        
    }
     //Regla 64 al 68
    if ($(campo_j).attr('id')=='chk_F1_S1_P156')
    {
		if($('#chk_F1_S1_P157').is(':checked'))
		{
		chk157=1;
		}
		else
		{
		chk157=0;
		}
		if($('#chk_F1_S1_P156').is(':checked'))
		{
		chk156=1;
		}
		else
		{
		chk156=0;
		}
		if($('#chk_F1_S1_P155').is(':checked'))
		{
		chk155=1;
		}
		else
		{
		chk155=0;
		}
        if ( chk157==1 && chk156==1 && chk155==1)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F1_S1_P158').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
					}
        } 
//		if ( chk157==1 && chk156==1 && chk155==0)
//			{
//			if (perfil == 4)
//					{
//					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
//						{
//						$('#chk_F1_S1_P155').focus();
//						$('#chk_F1_S1_P155').select();
//						return false;
//						}
//						else
//						{
//						flag_2 = true;
//						$('#chk_F1_S1_P158').focus();
//						return false;
//						}    
//					}
//					else 
//					{
//						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
//						$('#chk_F1_S1_P155').focus();
//						$('#chk_F1_S1_P155').select();
//						return false;
//					}
//        }   
//		if ( chk157==1 && chk156==0 && chk155==1)
//			{
//			if (perfil == 4)
//					{
//					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
//						{
//						$('#chk_F1_S1_P155').focus();
//						$('#chk_F1_S1_P155').select();
//						return false;
//						}
//						else
//						{
//						flag_2 = true;
//						$('#chk_F1_S1_P158').focus();
//						return false;
//						}    
//					}
//					else 
//					{
//						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
//						$('#chk_F1_S1_P155').focus();
//						$('#chk_F1_S1_P155').select();
//						return false;
//					}
//        }  
//		if ( chk157==0 && chk156==1 && chk155==1)
//			{
//			if (perfil == 4)
//					{
//					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
//						{
//						$('#chk_F1_S1_P155').focus();
//						$('#chk_F1_S1_P155').select();
//						return false;
//						}
//						else
//						{
//						flag_2 = true;
//						$('#chk_F1_S1_P158').focus();
//						return false;
//						}    
//					}
//					else 
//					{
//						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
//						$('#chk_F1_S1_P155').focus();
//						$('#chk_F1_S1_P155').select();
//						return false;
//					}
//        } 
		if ( chk157==0 && chk156==0 && chk155==0)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F1_S1_P158').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar una de las alternativas de moneda.");
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
					}
        }        
    }
     //Regla 64 al 68
    if ($(campo_j).attr('id')=='chk_F1_S1_P155')
    {
		if($('#chk_F1_S1_P157').is(':checked'))
		{
		chk157=1;
		}
		else
		{
		chk157=0;
		}
		if($('#chk_F1_S1_P156').is(':checked'))
		{
		chk156=1;
		}
		else
		{
		chk156=0;
		}
		if($('#chk_F1_S1_P155').is(':checked'))
		{
		chk155=1;
		}
		else
		{
		chk155=0;
		}
        if ( chk157==1 && chk156==1 && chk155==1)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F1_S1_P158').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
					}
        } 
//		if ( chk157==1 && chk156==1 && chk155==0)
//			{
//			if (perfil == 4)
//					{
//					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
//						{
//						$('#chk_F1_S1_P155').focus();
//						$('#chk_F1_S1_P155').select();
//						return false;
//						}
//						else
//						{
//						flag_2 = true;
//						$('#chk_F1_S1_P158').focus();
//						return false;
//						}    
//					}
//					else 
//					{
//						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
//						$('#chk_F1_S1_P155').focus();
//						$('#chk_F1_S1_P155').select();
//						return false;
//					}
//        }   
//		if ( chk157==1 && chk156==0 && chk155==1)
//			{
//			if (perfil == 4)
//					{
//					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
//						{
//						$('#chk_F1_S1_P155').focus();
//						$('#chk_F1_S1_P155').select();
//						return false;
//						}
//						else
//						{
//						flag_2 = true;
//						$('#chk_F1_S1_P158').focus();
//						return false;
//						}    
//					}
//					else 
//					{
//						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
//						$('#chk_F1_S1_P155').focus();
//						$('#chk_F1_S1_P155').select();
//						return false;
//					}
//        }  
//		if ( chk157==0 && chk156==1 && chk155==1)
//			{
//			if (perfil == 4)
//					{
//					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
//						{
//						$('#chk_F1_S1_P155').focus();
//						$('#chk_F1_S1_P155').select();
//						return false;
//						}
//						else
//						{
//						flag_2 = true;
//						$('#chk_F1_S1_P158').focus();
//						return false;
//						}    
//					}
//					else 
//					{
//						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
//						$('#chk_F1_S1_P155').focus();
//						$('#chk_F1_S1_P155').select();
//						return false;
//					}
//        } 
		if ( chk157==0 && chk156==0 && chk155==0)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F1_S1_P158').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar una de las alternativas de moneda.");
						$('#chk_F1_S1_P155').focus();
						$('#chk_F1_S1_P155').select();
						return false;
					}
        }        
    }
    
    
   
   
     //Regla 69
    if ($(campo_j).attr('id')=='chk_F1_S1_P159')
    {
	if($('#chk_F1_S1_P158').is(':checked'))
	{
	chk158=1;
	}
	else
	{
	chk158=0;
	}
	if($('#chk_F1_S1_P159').is(':checked'))
	{
	chk159=1;
	}
	else
	{
	chk159=0;
	}
	//alert(chk158);
        if ( chk158==1  && chk159==1 )
        {
        	if (perfil == 4)
				{
				if(!confirm('Advertencia: Debe marcar sólo una de las alternativas.\n ¿Desea continuar?'))
					{
					$('#chk_F1_S1_P158').focus();
					$('#chk_F1_S1_P158').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P160').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Debe marcar sólo una de las alternativas.");
					$('#chk_F1_S1_P158').focus();
					$('#chk_F1_S1_P158').select();
					return false;
				}
        }  
         if ( chk158==0  && chk159==0 )
        {
        	if (perfil == 4)
				{
				if(!confirm('Advertencia: Debe marcar una de las alternativas.\n ¿Desea continuar?'))
					{
					$('#chk_F1_S1_P158').focus();
					$('#chk_F1_S1_P158').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P160').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Debe marcar una de las alternativas.");
					$('#chk_F1_S1_P158').focus();
					$('#chk_F1_S1_P158').select();
					return false;
				}
        }              
    }
     //Regla 69
    if ($(campo_j).attr('id')=='chk_F1_S1_P158')
    {
	if($('#chk_F1_S1_P158').is(':checked'))
	{
	chk158=1;
	}
	else
	{
	chk158=0;
	}
	if($('#chk_F1_S1_P159').is(':checked'))
	{
	chk159=1;
	}
	else
	{
	chk159=0;
	}
	//alert(chk158);
        if ( chk158==1  && chk159==1 )
        {
        	if (perfil == 4)
				{
				if(!confirm('Advertencia: Debe marcar sólo una de las alternativas.\n ¿Desea continuar?'))
					{
					$('#chk_F1_S1_P158').focus();
					$('#chk_F1_S1_P158').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F1_S1_P160').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Debe marcar sólo una de las alternativas.");
					$('#chk_F1_S1_P158').focus();
					$('#chk_F1_S1_P158').select();
					return false;
				}
        }  
//         if ( chk158==0  && chk159==0 )
//        {
//        	if (perfil == 4)
//				{
//				if(!confirm('Advertencia: Debe marcar una de las alternativas.\n ¿Desea continuar?'))
//					{
//					$('#chk_F1_S1_P158').focus();
//					$('#chk_F1_S1_P158').select();
//					return false;
//					}
//					else
//					{
//					flag_2 = true;
//					$('#txt_F1_S1_P160').focus();
//					return false;
//					}    
//				}
//				else 
//				{
//					alert("Error: Debe marcar una de las alternativas.");
//					$('#chk_F1_S1_P158').focus();
//					$('#chk_F1_S1_P158').select();
//					return false;
//				}
//        }              
    }

    //Regla 70
    if ($(campo_j).attr('id')=='txt_F1_S1_P160')
    {
        if ( $.trim($(campo_j).val()).length == 0 || parseInt($(campo_j).val()) == 0)
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No informa Número de plantas o establecimientos\n(industriales y no Industriales) que posee su empresa en el territorio nacional.\n ¿Desea continuar?'))
					{
					$(campo_j).focus();
					$(campo_j).select();
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
					alert("Error: No informa Número de plantas o establecimientos\n(industriales y no Industriales) que posee su empresa en el territorio nacional.");
					$(campo_j).focus();
					$(campo_j).select();
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
    mensaje="  \n";
    var camponum153;
    var camponum154;
    $.each($('input'),function(i,v){
        campo_j = "#"+$(this).attr('id');
//    //Regla 1
//    if ($(campo_j).attr('id')=='txt_F1_S1_P101')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//            if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 101 - Advertencia: No indica Razón Social. \n");
//			 $(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campo 101 - Error: No indica Razón Social. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;
//			}
//        }        
//    }
//    // Regla 2
//    if ($(campo_j).attr('id')=='txt_F1_S1_P103')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//            if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 103 - Advertencia: No indica Representante Legal de la empresa. \n");
//			$(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campo 103 - Error: No indica Representante Legal de la empresa. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;
//			}
//        }        
//    }
//    // Regla 3
//    if ($(campo_j).attr('id')=='txt_F1_S1_P104')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//            if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 104 - Advertencia: No indica RUT Representante Legal de la empresa. \n");
//			 $(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campo 104 - Error: No indica RUT Representante Legal de la empresa. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;
//			}
//        }        
//    }
//    // Regla 4
//   if ($(campo_j).attr('id')=='txt_F1_S1_P105')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//            if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 105 - Advertencia: No indica calle en la Dirección de la Gerencia General u Oficina. \n");
//			 $(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campo 105 - Error: No indica calle en la Dirección de la Gerencia General u Oficina. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;
//			}
//        }        
//    }
//    // Regla 5
//   if ($(campo_j).attr('id')=='txt_F1_S1_P106')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//            if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 106 - Advertencia: No indica Número en la Dirección de la Gerencia General u Oficina. \n");
//			 $(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campo 106 - Error: No indica Número en la Dirección de la Gerencia General u Oficina. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;
//			}
//        }        
//    }
//    // Regla 6
//   if ($(campo_j).attr('id')=='txt_F1_S1_P107')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//            mensaje=mensaje +("Campo 107 - Advertencia: No indica Número local/oficina en la Dirección de la Gerencia General u Oficina. \n");
//            $(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//        }        
//    }
//    // Regla 7
//   if ($(campo_j).attr('id')=='txt_F1_S1_P108')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//            if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 108 - Advertencia: No indica Comuna en la Dirección de la Gerencia General u Oficina. \n");
//			 $(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campo 108 - Error: No indica Comuna en la Dirección de la Gerencia General u Oficina. \n");
//			$(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;
//			}
//        }        
//    }
//    // Regla 8
//   if ($(campo_j).attr('id')=='txt_F1_S1_P110')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//            if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 110 - Advertencia: No indica Número de Teléfono. \n");
//			 $(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campo 110 - Error: No indica Número de Teléfono. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;
//			}
//        }        
//    }
//    // Regla 9
//   if ($(campo_j).attr('id')=='txt_F1_S1_P110')
//    {
//        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F1_S1_P109').val()).length == 0)
//        {
//            if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 109 - Advertencia: No indica Código Área Teléfono. \n");
//			 $(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campo 109 - Error: No indica Código Área Teléfono. \n");
//            //$('#txt_F1_S1_P109').css('border','2px solid red');
//			error++;
//			foco[++cont] = '#txt_F1_S1_P109';
//			}
//        }        
//    }
     // Regla 10
   if ($(campo_j).attr('id')=='txt_F1_S1_P112')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#ddl_F1_S1_P111').val()) == 0)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 111 - Advertencia: Error: No indica Código Área Fax. \n");
			 $('#ddl_F1_S1_P111').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 111 - Error: No indica Código Área Fax. \n");
			$('#ddl_F1_S1_P111').css('border','2px solid red');
			error++;
			foco[++cont] = '#txt_F1_S1_P111';
			}
        }        
    }
//    // Regla 11
//   if ($(campo_j).attr('id')=='txt_F1_S1_P113')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//            mensaje=mensaje +("Campo 113 - Advertencia: No indica Correo Electrónico \n");
//            $(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//        }        
//    }
     
     // Regla 13
   if ($(campo_j).attr('id')=='txt_F1_S1_P117')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			mensaje=mensaje +("Campo 117 - Advertencia: Recuerde ingresar su código postal. \n");
            $(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
        }        
    }
        // Regla 14
   if ($(campo_j).attr('id')=='txt_F1_S1_P118')
    {
        if ( $.trim($(campo_j).val()).length == 0 || parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val())>8)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 118 - Advertencia: Error: Tipo de Empresa Fuera de rangos. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 118 - Error: Tipo de Empresa Fuera de rangos.\n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
    
    //Regla 15
    if ($(campo_j).attr('id')=='txt_F1_S1_P118_E')
    {
        if ( $.trim($(campo_j).val()).length == 0 && parseInt($('#txt_F1_S1_P118').val()) == 8 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 118_E - Advertencia: No especifica otra tipo de organización jurídica. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 118_E - Error: No especifica otra tipo de organización jurídica.\n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
         // Regla 16
   if ($(campo_j).attr('id')=='txt_F1_S1_P119')
    {
        if ( $.trim($(campo_j).val()).length == 0 || parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val())>4)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 119 - Advertencia: Tipo de propiedad Fuera de rangos. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo  119 - Error: Tipo de propiedad Fuera de rangos. \n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
       // Regla 17
   if ($(campo_j).attr('id')=='txt_F1_S1_P120')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 120 - Advertencia: valor del campo debe estar entre 0 y 100. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 120 - Error: valor del campo debe estar entre 0 y 100. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
    // Regla 18
   if ($(campo_j).attr('id')=='txt_F1_S1_P121')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 121 - Advertencia: valor del campo debe estar entre 0 y 100. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 121 - Error: valor del campo debe estar entre 0 y 100. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
     // Regla 19
   if ($(campo_j).attr('id')=='txt_F1_S1_P121')
    {
    campo_120=$.trim($('#txt_F1_S1_P120').val());
    campo_121=$.trim($('#txt_F1_S1_P121').val());
    if (campo_120=="")
    {
    campo_120=0;
    } 
    if (campo_121=="")
    {
    campo_121=0;
    } 
            if ( eliminar_decimales(campo_120) + eliminar_decimales(campo_121)!= 100)
            {
                if (perfil == 4)
                {
                mensaje=mensaje +("Campo 120 y 121 - Advertencia: La Suma de las campos nacional y extranjero no debe ser distinta de 100. \n");
			    $('#txt_F1_S1_P120').css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
                }
                else
                {
			    mensaje=mensaje +("Campos 120 y 121 - Error: La Suma de las campos nacional y extranjero no debe ser distinta de 100. \n");
                $('#txt_F1_S1_P120').css('border','2px solid red');
			    error++;
			    foco[++cont] = '#txt_F1_S1_P120';
			    }
            }        
    }
    // Regla del 20 al 27
    // valida opcion 1
    if ($(campo_j).attr('id')=='txt_F1_S1_P121')
    {
        if ( parseInt($('#txt_F1_S1_P119').val()) == 1 &&
             parseFloat(eliminar_decimales($('#txt_F1_S1_P120').val())) != 100 &&
             parseFloat(eliminar_decimales($(campo_j).val())) != 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 120 y 121 - Advertencia: Conformación de Capital inválida con Forma de propiedad. \n");
			$('#txt_F1_S1_P120').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 120 y 121 - Error: Conformación de Capital inválida con Forma de propiedad. \n");
            $('#txt_F1_S1_P120').css('border','2px solid red');
			error++;
			foco[++cont] = '#txt_F1_S1_P120';
			}
        }        
    }
    // valida opcion 2
    if ($(campo_j).attr('id')=='txt_F1_S1_P121')
    {
        if ( parseInt($('#txt_F1_S1_P119').val()) == 2 &&
             parseFloat(eliminar_decimales($('#txt_F1_S1_P120').val())) != 0 &&
             parseFloat(eliminar_decimales($(campo_j).val())) != 100 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 120 y 121 - Advertencia: Conformación de Capital inválida con Forma de propiedad. \n");
			$('#txt_F1_S1_P120').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 120 y 121 - Error: Conformación de Capital inválida con Forma de propiedad. \n");
            $('#txt_F1_S1_P120').css('border','2px solid red');
			error++;
			foco[++cont] = '#txt_F1_S1_P120';
			}
        }        
    }
    // valida opcion 4
    if ($(campo_j).attr('id')=='txt_F1_S1_P121')
    {
        if ( parseInt($('#txt_F1_S1_P119').val()) == 4 &&
             parseFloat(eliminar_decimales($('#txt_F1_S1_P120').val())) != 100 &&
             parseFloat(eliminar_decimales($(campo_j).val())) != 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 120 y 121 - Advertencia: Conformación de Capital inválida con Forma de propiedad. \n");
			$('#txt_F1_S1_P120').css('border','2px solid red');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 120 y 121 - Error: Conformación de Capital inválida con Forma de propiedad. \n");
            $('#txt_F1_S1_P120').css('border','2px solid red');
			error++;
			foco[++cont] = '#txt_F1_S1_P120';
			}
        }        
    }
    
    //Regla 27
    if ($(campo_j).attr('id')=='txt_F1_S1_P122')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 122 - Advertencia: No indica el Nombre de la Planta. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 122 - Error: No indica el Nombre de la Planta. \n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
    //Regla 28
    if ($(campo_j).attr('id')=='txt_F1_S1_P123')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 123 - Advertencia: No indica calle en la direccion de la planta o establecimiento. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 123 - Error: No indica calle en la direccion de la planta o establecimiento. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
    //Regla 29
    if ($(campo_j).attr('id')=='txt_F1_S1_P124')
    {
        if ( $.trim($(campo_j).val()).length == 0 && $.trim($('#txt_F1_S1_P123').val()).length != 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 124 - Advertencia: No indica Número en la direccion de la planta o establecimiento. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 124 - Error: No indica Número en la direccion de la planta o establecimiento. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
    //Regla 30
    if ($(campo_j).attr('id')=='txt_F1_S1_P125')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            mensaje=mensaje +("Campo 125 - Advertencia: No indica Número local/oficina en la direccion de la planta o establecimiento. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
        }        
    }
   
     //Regla 32
    if ($(campo_j).attr('id')=='txt_F1_S1_P128')
    {
        if ( $.trim($(campo_j).val()).length == 0 && $.trim($('#txt_F1_S1_P123').val()).length != 0 )
        {
			mensaje=mensaje +("Campo 128 - Advertencia: No indica Número de Teléfono de la planta o establecimiento. \n");
            $(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
        }        
    }
    //Regla 33
    if ($(campo_j).attr('id')=='txt_F1_S1_P128')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#ddl_F1_S1_P127').val()) == 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 127 - Advertencia:No indica Código Área Teléfono de la planta o establecimiento. \n");
			$('#ddl_F1_S1_P127').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 127 - Error: No indica Código Área Teléfono de la planta o establecimiento.\n");
            $('#ddl_F1_S1_P127').css('border','2px solid red');
			error++;
			foco[++cont] = '#txt_F1_S1_P127';
			}
        }        
    }
    //Regla 34
    if ($(campo_j).attr('id')=='txt_F1_S1_P130')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#ddl_F1_S1_P129').val()) == 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 129 - Advertencia: No indica Código Área Fax de la planta o establecimiento. \n");
			$('#ddl_F1_S1_P129').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 129 - Error: No indica Código Área Fax de la planta o establecimiento. \n");
			$('#ddl_F1_S1_P129').css('border','2px solid red');
			error++;
			foco[++cont] = '#txt_F1_S1_P129';
			}
        }        
    }
     //Regla 35
    if ($(campo_j).attr('id')=='txt_F1_S1_P131')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			mensaje=mensaje +("Campo 131 - Advertencia: No indica Correo Electrónico de la planta o establecimiento. \n");
            $(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
        }        
    }
     //Regla 36
    if ($(campo_j).attr('id')=='txt_F1_S1_P132')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 132 - Advertencia: No indica Nombre del contador o informante calificado. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 132 - Error: No indica Nombre del contador o informante calificado. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
     //Regla 37
    if ($(campo_j).attr('id')=='txt_F1_S1_P134')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 134 - Advertencia: No indica Número Telefónico del contador o informante calificado. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 134 - Error: No indica Número Telefónico del contador o informante calificado.\n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
    //Regla 38
    if ($(campo_j).attr('id')=='txt_F1_S1_P134')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F1_S1_P133').val()).length == 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 133 - Advertencia: No indica Código Área Teléfono del contador o informante calificado. \n");
			$('#txt_F1_S1_P133').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 133 - Error: No indica Código Área Teléfono del contador o informante calificado.\n");
			$('#txt_F1_S1_P133').css('border','2px solid red');
			error++;
			foco[++cont] = '#txt_F1_S1_P133';
			}
        }        
    }
    //Regla 39
    if ($(campo_j).attr('id')=='txt_F1_S1_P136')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#ddl_F1_S1_P135').val()) == 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 135 - Advertencia: No indica Código Área Fax del contador o informante calificado. \n");
			$('#ddl_F1_S1_P135').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 135 - Error: No indica Código Área Fax del contador o informante calificado. \n");
            $('#ddl_F1_S1_P135').css('border','2px solid red');
			error++;
			foco[++cont] = '#txt_F1_S1_P135';
			}
        }        
    }
    //Regla 40
    if ($(campo_j).attr('id')=='txt_F1_S1_P137')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			mensaje=mensaje +("Campo 137 - Advertencia: No indica Correo Electrónico.\n");
            $(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
        }        
    }
    //Regla 41
    if ($(campo_j).attr('id')=='txt_F1_S1_P138')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			mensaje=mensaje +("Campo 138 - Advertencia: No indica el nombre del encargado de producción de la empresa o establecimiento. \n");
            $(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
        }        
    }
     //Regla 42
    if ($(campo_j).attr('id')=='txt_F1_S1_P140')
    {
        if ( $.trim($(campo_j).val()).length == 0 && $.trim($('#txt_F1_S1_P138').val()).length != 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 140 - Advertencia: No indica el teléfono del encargado de producción de la empresa o establecimiento. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 140 - Error: No indica el teléfono del encargado de producción de la empresa o establecimiento. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
    //Regla 43
    if ($(campo_j).attr('id')=='txt_F1_S1_P140')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#ddl_F1_S1_P139').val()) == 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 139 - Advertencia: No indica el Código Área Teléfono del encargado de producción de la empresa o establecimiento. \n");
			$('#ddl_F1_S1_P139').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 139 - Error: No indica el Código Área Teléfono del encargado de producción de la empresa o establecimiento. \n");
            $('#ddl_F1_S1_P139').css('border','2px solid red');
			error++;
			foco[++cont] = '#txt_F1_S1_P139';
			}
        }        
    }
     //Regla 44
    if ($(campo_j).attr('id')=='txt_F1_S1_P142')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#ddl_F1_S1_P141').val()) == 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 141 - Advertencia: No indica el Código Área Fax del encargado de producción de la empresa o establecimiento. \n");
			$('#ddl_F1_S1_P141').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 141 - Error: No indica el Código Área Fax del encargado de producción de la empresa o establecimiento. \n");
            $('#ddl_F1_S1_P141').css('border','2px solid red');
			error++;
			foco[++cont] = '#txt_F1_S1_P141';
			}
        }        
    }
    
        // Validaciones 45 hasta la 55.
    //------------------------------
	//Regla 45
	if ($(campo_j).attr('id')=='txt_F1_S1_P144')
    {
        if ( parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val()) > 31 )
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 144 - Advertencia: Día informado fuera de rango. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 144 - Error: Día informado fuera de rango. \n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}

        }        
    }
	//Regla 46
	if ($(campo_j).attr('id')=='txt_F1_S1_P147')
    {
        if ( parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val()) > 31 )
        {
		if (perfil == 4)
            {
            mensaje=mensaje +("Campo 147 - Advertencia: Día informado fuera de rango. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 147 - Error: Día informado fuera de rango. \n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
			}
    }
	//Regla 47
	if ($(campo_j).attr('id')=='txt_F1_S1_P145')
    {
        if ( parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val()) > 12 )
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 145 - Advertencia: Mes informado fuera de rango. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 145 - Error: Mes informado fuera de rango. \n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
			}
    }
	//Regla 48
	if ($(campo_j).attr('id')=='txt_F1_S1_P148')
    {
		if ( parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val()) > 12 )
        {

			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 148 - Advertencia: Mes informado fuera de rango. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 148 - Error: Mes informado fuera de rango. \n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
			}
    }
    	//Regla 49
	if ($(campo_j).attr('id')=='txt_F1_S1_P146')
    {
		if ( parseInt($(campo_j).val()) != 2011 )
        {

			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 146 - Advertencia: Año informado fuera de rango. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 146 - Error: Año informado fuera de rango. \n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
			}
    }
	//Regla 50
	if ($(campo_j).attr('id')=='txt_F1_S1_P149')
    {
				if ( parseInt($(campo_j).val()) != 2011 )
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 149 - Advertencia: Año informado fuera de rango. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 149 - Error: Año informado fuera de rango. \n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }
       
    }
    //Regla 51
	if ($(campo_j).attr('id')=='txt_F1_S1_P145')
    {
        if ( parseInt($(campo_j).val()) == 4 || parseInt($(campo_j).val()) == 6 || parseInt($(campo_j).val()) == 9 || parseInt($(campo_j).val()) == 11)
        {
			if (parseInt($('#txt_F1_S1_P144').val()) > 30)
			{
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 145 - Advertencia: El mes indicado no tiene 31 días. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 145 - Error: El mes indicado no tiene 31 días. \n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
			}
        }        
    }
    	//Regla 52
	if ($(campo_j).attr('id')=='txt_F1_S1_P148')
    {
        if ( parseInt($(campo_j).val()) == 4 || parseInt($(campo_j).val()) == 6 || parseInt($(campo_j).val()) == 9 || parseInt($(campo_j).val()) == 11)
        {
			if (parseInt($('#txt_F1_S1_P147').val()) > 30)
			{
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 148 - Advertencia: El mes indicado no tiene 31 días. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 148 - Error: El mes indicado no tiene 31 días. \n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
			}
        }        
    }
		//Regla 53
	if ($(campo_j).attr('id')=='txt_F1_S1_P145')
    {
        if ( parseInt($(campo_j).val()) == 2 )
        {
			if (parseInt($('#txt_F1_S1_P144').val()) > 28)
			{
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 145 - Advertencia: El mes indicado tiene sólo 28 días. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 145 - Error: El mes indicado tiene sólo 28 días. \n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
			}
        }        
    }
	//Regla 54
	if ($(campo_j).attr('id')=='txt_F1_S1_P148')
    {
        if ( parseInt($(campo_j).val()) == 2 )
        {
			if (parseInt($('#txt_F1_S1_P147').val()) > 28)
			{
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 148 - Advertencia: El mes indicado tiene sólo 28 días. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 148 - Error: El mes indicado tiene sólo 28 días. \n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}			}
        }        
    }
//     //Regla 56
//   if ($(campo_j).attr('id')=='txt_F1_S1_P150')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 || parseInt($(campo_j).val()) < 0 || parseInt($(campo_j).val())>365)
//        {
//            if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 150 - Advertencia: Número de días trabajados fuera de rango. \n");
//			$(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campo 150 - Error: Número de días trabajados fuera de rango. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;
//			}
//        }        
//    }

   
     //Regla 59
   if ($(campo_j).attr('id')=='txt_F1_S1_P152')
    {
    campo_151=$.trim($('#txt_F1_S1_P151').val());
    if (campo_151=="")
    {
    campo_151=0;
    }
        if (parseInt(campo_151) > 0)
        {
            if ( $.trim($(campo_j).val()).length == 0 || parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val())>7)
            {
                if (perfil == 4)
                {
                mensaje=mensaje +("Campo 152 - Advertencia: No indica causa de la paralización. \n");
			    $(campo_j).css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
                }
                else
                {
				mensaje=mensaje +("Campo  152 - Error: No indica causa de la paralización. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
			    }
            }        
        }
    }
   
     //Regla 60
   if ($(campo_j).attr('id')=='txt_F1_S1_P152_E')
    {
            if ( $.trim($(campo_j).val()).length == 0 && parseInt($('#txt_F1_S1_P152').val())== 7 )
            {
                if (perfil == 4)
                {
                mensaje=mensaje +("Campo 152_E - Advertencia: No especifica otra causa de paralización. \n");
			    $(campo_j).css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
                }
                else
                {
				mensaje=mensaje +("Campo 152_E - Error: No especifica otra causa de paralización. \n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
			    }
            }        
    }
    
    //Regla 63
    if ($(campo_j).attr('id')=='chk_F1_S1_P157')
    {
        if($('#chk_F1_S1_P157').is(':checked'))
		{
		chk157=1;
		}
		else
		{
		chk157=0;
		}
		if($('#chk_F1_S1_P156').is(':checked'))
		{
		chk156=1;
		}
		else
		{
		chk156=0;
		}
		if($('#chk_F1_S1_P155').is(':checked'))
		{
		chk155=1;
		}
		else
		{
		chk155=0;
		}
        if ( chk157==1 && chk156==1 && chk155==1)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 155, 156 y 157 - Advertencia: Debe seleccionar sólo una de las alternativas de moneda. \n");
			 $('#chk_F1_S1_P157').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 155, 156 y 157 - Error: Debe seleccionar sólo una de las alternativas de moneda. \n");
            $('#chk_F1_S1_P157').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F1_S1_P155';
			}
        }        
    }
    //Regla 64
    if ($(campo_j).attr('id')=='chk_F1_S1_P157')
    {
        if($('#chk_F1_S1_P157').is(':checked'))
		{
		chk157=1;
		}
		else
		{
		chk157=0;
		}
		if($('#chk_F1_S1_P156').is(':checked'))
		{
		chk156=1;
		}
		else
		{
		chk156=0;
		}
		if($('#chk_F1_S1_P155').is(':checked'))
		{
		chk155=1;
		}
		else
		{
		chk155=0;
		}
        if ( chk157==1 && chk156==1 && chk155==1)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 155, 156 y 157 - Advertencia: Debe seleccionar sólo una de las alternativas de moneda. \n");
			$('#chk_F1_S1_P157').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 155, 156 y 157 - Error: Debe seleccionar sólo una de las alternativas de moneda. \n");
            $('#chk_F1_S1_P157').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F1_S1_P155';
			}
        }        
    }
    //Regla 65
    if ($(campo_j).attr('id')=='chk_F1_S1_P157')
    {
if($('#chk_F1_S1_P157').is(':checked'))
		{
		chk157=1;
		}
		else
		{
		chk157=0;
		}
		if($('#chk_F1_S1_P156').is(':checked'))
		{
		chk156=1;
		}
		else
		{
		chk156=0;
		}
		if($('#chk_F1_S1_P155').is(':checked'))
		{
		chk155=1;
		}
		else
		{
		chk155=0;
		}
        if ( chk157==1 && chk156==1 && chk155==0)        
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 155, 156 y 157 - Advertencia: Debe seleccionar sólo una de las alternativas de moneda. \n");
			$('#chk_F1_S1_P157').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 155, 156 y 157 - Error: Debe seleccionar sólo una de las alternativas de moneda. \n");
            $('#chk_F1_S1_P157').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F1_S1_P155';
			}
        }        
    }
    //Regla 66
    if ($(campo_j).attr('id')=='chk_F1_S1_P157')
    {
        if($('#chk_F1_S1_P157').is(':checked'))
		{
		chk157=1;
		}
		else
		{
		chk157=0;
		}
		if($('#chk_F1_S1_P156').is(':checked'))
		{
		chk156=1;
		}
		else
		{
		chk156=0;
		}
		if($('#chk_F1_S1_P155').is(':checked'))
		{
		chk155=1;
		}
		else
		{
		chk155=0;
		}
        if ( chk157==1 && chk156==0 && chk155==1)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 155, 156 y 157 - Advertencia: Debe seleccionar sólo una de las alternativas de moneda. \n");
			$('#chk_F1_S1_P157').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 155, 156 y 157 - Error: Debe seleccionar sólo una de las alternativas de moneda. \n");
            $('#chk_F1_S1_P157').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F1_S1_P155';
			}
        }        
    }
    //Regla 67
    if ($(campo_j).attr('id')=='chk_F1_S1_P157')
    {
        if($('#chk_F1_S1_P157').is(':checked'))
		{
		chk157=1;
		}
		else
		{
		chk157=0;
		}
		if($('#chk_F1_S1_P156').is(':checked'))
		{
		chk156=1;
		}
		else
		{
		chk156=0;
		}
		if($('#chk_F1_S1_P155').is(':checked'))
		{
		chk155=1;
		}
		else
		{
		chk155=0;
		}
        if ( chk157==0 && chk156==1 && chk155==1)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 155, 156 y 157 - Advertencia: Debe seleccionar sólo una de las alternativas de moneda. \n");
			$('#chk_F1_S1_P157').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 155, 156 y 157 - Error: Debe seleccionar sólo una de las alternativas de moneda. \n");
            $('#chk_F1_S1_P157').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F1_S1_P155';
			}
        }        
    }
    //Regla 68
    if ($(campo_j).attr('id')=='chk_F1_S1_P157')
    {
if($('#chk_F1_S1_P157').is(':checked'))
		{
		chk157=1;
		}
		else
		{
		chk157=0;
		}
		if($('#chk_F1_S1_P156').is(':checked'))
		{
		chk156=1;
		}
		else
		{
		chk156=0;
		}
		if($('#chk_F1_S1_P155').is(':checked'))
		{
		chk155=1;
		}
		else
		{
		chk155=0;
		}
        if ( chk157==0 && chk156==0 && chk155==0)
                {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 155, 156 y 157 - Advertencia: Debe seleccionar una de las alternativas de moneda. \n");
			$('#chk_F1_S1_P157').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 155, 156 y 157 - Error: Debe seleccionar una de las alternativas de moneda. \n");
            $('#chk_F1_S1_P157').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F1_S1_P155';
			}
        }        
    } 
    //Regla 69
    if ($(campo_j).attr('id')=='chk_F1_S1_P158')
    {
	if($('#chk_F1_S1_P158').is(':checked'))
	{
	chk158=1;
	}
	else
	{
	chk158=0;
	}
	if($('#chk_F1_S1_P159').is(':checked'))
	{
	chk159=1;
	}
	else
	{
	chk159=0;
	}
	//alert(chk158);
        if ( chk158==1  && chk159==1 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 158 y 159 - Advertencia: Debe marcar sólo una de las alternativas. \n");
			$('#chk_F1_S1_P159').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 158 y 159 -  Error: Debe marcar sólo una de las alternativas.\n");
            $('#chk_F1_S1_P159').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F1_S1_P158';
			}
        }        
    }
    //Regla 70
    if ($(campo_j).attr('id')=='chk_F1_S1_P158')
    {
	if($('#chk_F1_S1_P158').is(':checked'))
	{
	chk158=1;
	}
	else
	{
	chk158=0;
	}
	if($('#chk_F1_S1_P159').is(':checked'))
	{
	chk159=1;
	}
	else
	{
	chk159=0;
	}
	//alert(chk158);
        if ( chk158==0  && chk159==0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 158 y 159 - Advertencia: Debe marcar una de las alternativas. \n");
			$('#chk_F1_S1_P159').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 158 y 159 -  Error: Debe marcar una de las alternativas.\n");
            $('#chk_F1_S1_P158').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F1_S1_P158';
			}
        }        
    }
    //Regla 70
    if ($(campo_j).attr('id')=='txt_F1_S1_P160')
    {
        if ( $.trim($(campo_j).val()).length == 0 || parseInt($(campo_j).val()) == 0)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 160 - Advertencia: No informa Número de plantas o establecimientos\n(industriales y no Industriales) que posee su empresa en el territorio nacional. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 160 - Error: No informa Número de plantas o establecimientos\n(industriales y no Industriales) que posee su empresa en el territorio nacional. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }   
        
    
    });
     $.each($('select'),function(i,v){
        campo_j = "#"+$(this).attr('id');
         // Regla 12
   if ($(campo_j).attr('id')=='ddl_F1_S1_P116')
    {
        if ( $.trim($(campo_j).val()) == 0 && $.trim($('#txt_F1_S1_P115').val()).length != 0)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 116 - Advertencia: Error: No indica Comuna Casilla Comercial. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 116 - Error: No indica Comuna Casilla Comercial. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
	 //Regla 31
    if ($(campo_j).attr('id')=='ddl_F1_S1_P126')
    {
        if ( $.trim($(campo_j).val()) == 0 && $.trim($('#txt_F1_S1_P123').val()).length != 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 126 - Advertencia: No indica Comuna en la direccion de la planta o establecimiento. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 126 - Error: No indica Comuna en la direccion de la planta o establecimiento. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
	  // Regla 57 y 58
   if ($(campo_j).attr('id')=='ddl_F1_S1_P151')
    {
//    if ( $.trim($(campo_j).val()).length == 0 || parseInt($(campo_j).val()) < 0 || parseInt($(campo_j).val())>365)
//        {
//            if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 151 - Advertencia: Número de días paralizados fuera de rango. \n");
//			$(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campo 151 - Error: Número de días paralizados fuera de rango.\n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;
//			}
//        }   
    campo_150=$.trim($('#ddl_F1_S1_P150').val());
    campo_151=$.trim($('#ddl_F1_S1_P151').val());
    if (campo_150=="")
    {
    campo_150=0;
    } 
    if (campo_151=="")
    {
    campo_151=0;
    } 
            if ( parseInt(campo_150) + parseInt(campo_151)> 365)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 150 y 151 - Advertencia: Días trabajados más días paralizados mayor que 365. \n");
			$('#ddl_F1_S1_P150').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 150 y 151 - Error: Días trabajados más días paralizados mayor que 365. \n");
			$('#ddl_F1_S1_P150').css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }  
       
    }
        //Regla 61
    if ($(campo_j).attr('id')=='ddl_F1_S1_P153')
    {
        if ( $.trim($(campo_j).val()) == 0 )
        {
            if (perfil == 4)
                {
                mensaje=mensaje +("Campo 153 - Advertencia: Días Laborales fuera de rango. \n");
			    $(campo_j).css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
                }
                else
                {
			    mensaje=mensaje +("Campo 153 - Error: Días Laborales fuera de rango.\n");
                $(campo_j).css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
			    }
        }        
    }
    //Regla 62
    if ($(campo_j).attr('id')=='ddl_F1_S1_P154')
    {
    
        if ( $.trim($(campo_j).val()) == 0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 154 - Advertencia: Días Laborales fuera de rango. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campo 154 - Error: Días Laborales fuera de rango. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
        			//Regla 63
    if ($(campo_j).attr('id')=='ddl_F1_S1_P154')
    {
    camponum154=$.trim($(campo_j).val());
    camponum153=$.trim($('#ddl_F1_S1_P153').val());
    
	if ( parseInt(camponum154) < parseInt(camponum153))
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: La jornada normal de trabajo en días termina antes de comenzar.\n ¿Desea continuar?'))
                mensaje=mensaje +("Campo 153 y 154 - Advertencia: La jornada normal de trabajo en días termina antes de comenzar. \n");
			    $('#ddl_F1_S1_P154').css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;
                }
                else
                {
			    mensaje=mensaje +("Campos 153 y 154 - Error: La jornada normal de trabajo en días termina antes de comenzar. \n");
                $('#ddl_F1_S1_P154').css('border','2px solid red');
			    error++;
			    foco[++cont] = campo_j;
			    }
        }  
    }

    });
    return [advertencia,error,foco[0], mensaje];
}

