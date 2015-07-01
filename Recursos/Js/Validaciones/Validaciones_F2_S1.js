camposDecimal = ['txt_F2_S1_P120','txt_F2_S1_P121'];
camposletra=['txt_F2_S1_P101','txt_F2_S1_P102','txt_F2_S1_P103','txt_F2_S1_P104','txt_F2_S1_P105','txt_F2_S1_P106',
'txt_F2_S1_P107','txt_F2_S1_P108','txt_F2_S1_P109','txt_F2_S1_P110','txt_F2_S1_P111','txt_F2_S1_P112','txt_F2_S1_P113',
'txt_F2_S1_P114','txt_F2_S1_P115','txt_F2_S1_P117','txt_F2_S1_P118_E','txt_F2_S1_P125','txt_F2_S1_P126','txt_F2_S1_P127','txt_F2_S1_P128','txt_F2_S1_P129','txt_F2_S1_P130',
'txt_F2_S1_P131','txt_F2_S1_P132','txt_F2_S1_P133','txt_F2_S1_P134','txt_F2_S1_P135','txt_F2_S1_P136'];
camposMiles=[];
campoSoloTexto=['txt_F2_S1_P116'];
function validar (campo_j){
    campo_j = "#"+campo_j;
   // Regla 1
   if ($(campo_j).attr('id')=='txt_F2_S1_P101')
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
                $('#txt_F2_S1_P102').focus();
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
    if ($(campo_j).attr('id')=='txt_F2_S1_P103')
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
                $('#txt_F2_S1_P104').focus();
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
    if ($(campo_j).attr('id')=='txt_F2_S1_P104')
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
                $('#txt_F2_S1_P105').focus();
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
   if ($(campo_j).attr('id')=='txt_F2_S1_P105')
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
                $('#txt_F2_S1_P106').focus();
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
   if ($(campo_j).attr('id')=='txt_F2_S1_P106')
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
                $('#txt_F2_S1_P107').focus();
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
   if ($(campo_j).attr('id')=='txt_F2_S1_P107')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if(!confirm('Advertencia: No indica Número local/oficina en la Dirección de la Gerencia General u Oficina.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F2_S1_P108').focus();
                return false;
            }
        }        
    }
    // Regla 7
   if ($(campo_j).attr('id')=='txt_F2_S1_P108')
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
                $('#txt_F2_S1_P109').focus();
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
   if ($(campo_j).attr('id')=='txt_F2_S1_P110')
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
                $('#txt_F2_S1_P111').focus();
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
   if ($(campo_j).attr('id')=='txt_F2_S1_P110')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F2_S1_P109').val()).length == 0)
        {
			if (perfil == 4)
            {
            if(!confirm('Advertencia: No indica Código Área Teléfono.\n ¿Desea continuar?'))
				{
                $('#txt_F2_S1_P109').focus();
                $('#txt_F2_S1_P109').select();
                return false;
				}
				else
				{
                flag_2 = true;
                $('#txt_F2_S1_P111').focus();
                return false;
				}    
			}
			else 
			{
            alert("Error: No indica Código Área Teléfono.");
            $('#txt_F2_S1_P109').focus();
            $('#txt_F2_S1_P109').select();
            return false;
			}
        }        
    }
	  // Regla 10
   if ($(campo_j).attr('id')=='txt_F2_S1_P112')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
            {
            if(!confirm('Advertencia: No indica Número de fax.\n ¿Desea continuar?'))
				{
                $(campo_j).focus();
                $(campo_j).select();
                return false;
				}
				else
				{
                flag_2 = true;
                $('#txt_F2_S1_P113').focus();
                return false;
				}    
			}
			else 
			{
            alert("Error: No indica Número de fax.");
            $(campo_j).focus();
            $(campo_j).select();
            return false;
			}
        }        
    }
     // Regla 11
   if ($(campo_j).attr('id')=='txt_F2_S1_P112')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F2_S1_P111').val()).length == 0)
        {
			if (perfil == 4)
            {
            if(!confirm('Advertencia: No indica Código Área fax.\n ¿Desea continuar?'))
				{
                $('#txt_F2_S1_P111').focus();
                $('#txt_F2_S1_P111').select();
                return false;
				}
				else
				{
                flag_2 = true;
                $('#txt_F2_S1_P113').focus();
                return false;
				}    
			}
			else 
			{
            alert("Error: No indica Código Área fax.");
            $('#txt_F2_S1_P111').focus();
            $('#txt_F2_S1_P111').select();
            return false;
			}
        }        
    }
    // Regla 12
   if ($(campo_j).attr('id')=='txt_F2_S1_P113')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if(!confirm('Advertencia: No indica Correo Electrónico.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F2_S1_P114').focus();
                return false;
            }
        }        
    }
      // Regla 13
   if ($(campo_j).attr('id')=='txt_F2_S1_P116')
    {
        if ( $.trim($(campo_j).val()).length == 0 && $.trim($('#txt_F2_S1_P115').val()).length != 0)
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
                $('#txt_F2_S1_P117').focus();
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
     // Regla 14
   if ($(campo_j).attr('id')=='txt_F2_S1_P117')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            if(!confirm('Advertencia: Recuerde ingresar su código postal.\n ¿Desea continuar?')){
                $(campo_j).focus();
                $(campo_j).select();
                return false;
            }else{
                flag_2 = true;
                $('#txt_F2_S1_P118').focus();
                return false;
            }
        }        
    }
        // Regla 15
   if ($(campo_j).attr('id')=='txt_F2_S1_P118')
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
                $('#txt_F2_S1_P119').focus();
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
    if ($(campo_j).attr('id')=='txt_F2_S1_P118')
    {
        if (parseInt($(campo_j).val()) == 8 )
        {
            $('#txt_F2_S1_P118_E').focus();
            return false;
        }  
        else
        {
        $('#txt_F2_S1_P119').focus();
        return false;
        }      
    }
    //Regla 16
    if ($(campo_j).attr('id')=='txt_F2_S1_P118_E')
    {
        if ( $.trim($(campo_j).val()).length == 0 && parseInt($('#txt_F2_S1_P118').val()) == 8 )
        {
			if (perfil == 4)
            {
            if(!confirm('Advertencia:No especifica otra tipo de organización jurídica.\n ¿Desea continuar?'))
				{
                $(campo_j).focus();
                $(campo_j).select();
                return false;
				}
				else
				{
                flag_2 = true;
                $('#txt_F2_S1_P119').focus();
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
         // Regla 17
   if ($(campo_j).attr('id')=='txt_F2_S1_P119')
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
                $('#txt_F2_S1_P120').focus();
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
       // Regla 18
   if ($(campo_j).attr('id')=='txt_F2_S1_P120')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
            {
            if(!confirm('Advertencia: Valor del campo debe estar entre 0 y 100.\n ¿Desea continuar?'))
				{
                $(campo_j).focus();
                $(campo_j).select();
                return false;
				}
				else
				{
                flag_2 = true;
                $('#txt_F2_S1_P121').focus();
                return false;
				}    
			}
			else 
			{
            alert("Error: Valor del campo debe estar entre 0 y 100.");
            $(campo_j).focus();
            $(campo_j).select();
            return false;
			}
        }        
    }
    // Regla 19
   if ($(campo_j).attr('id')=='txt_F2_S1_P121')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
            {
            if(!confirm('Advertencia: Valor del campo debe estar entre 0 y 100.\n ¿Desea continuar?'))
				{
                $(campo_j).focus();
                $(campo_j).select();
                return false;
				}
				else
				{
                flag_2 = true;
                $('#txt_F2_S1_P122').focus();
                return false;
				}    
			}
			else 
			{
            alert("Error: Valor del campo debe estar entre 0 y 100.");
            $(campo_j).focus();
            $(campo_j).select();
            return false;
			}
        }        
    }
     // Regla 20
   if ($(campo_j).attr('id')=='txt_F2_S1_P121')
    {
    campo_120=$.trim($('#txt_F2_S1_P120').val());
    campo_121=$.trim($('#txt_F2_S1_P121').val());
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
					$(campo_j).focus();
					$(campo_j).select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F2_S1_P122').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: La Suma de las campos nacional y extranjero no debe ser distinta de 100.");
				$('#txt_F2_S1_P120').focus();
				$('#txt_F2_S1_P120').select();
				return false;
				}
			}        
    }
    // Regla del 21 al 27
    // valida opcion 1
    if ($(campo_j).attr('id')=='txt_F2_S1_P121')
    {
        if ( parseInt($('#txt_F2_S1_P119').val()) == 1 &&
             parseFloat(eliminar_decimales($('#txt_F2_S1_P120').val())) != 100 &&
             parseFloat(eliminar_decimales($(campo_j).val())) != 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Conformación de Capital inválida con Forma de propiedad.\n ¿Desea continuar?'))
					{
					$('#txt_F2_S1_P120').focus();
					$('#txt_F2_S1_P120').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F2_S1_P122').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: Conformación de Capital inválida con Forma de propiedad.");
				$('#txt_F2_S1_P120').focus();
				$('#txt_F2_S1_P120').select();
				return false;
				}
        }        
    }
    // valida opcion 2
    if ($(campo_j).attr('id')=='txt_F2_S1_P121')
    {
        if ( parseInt($('#txt_F2_S1_P119').val()) == 2 &&
             parseFloat(eliminar_decimales($('#txt_F2_S1_P120').val())) != 0 &&
             parseFloat(eliminar_decimales($(campo_j).val())) != 100 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Conformación de Capital inválida con Forma de propiedad.\n ¿Desea continuar?'))
					{
					$('#txt_F2_S1_P120').focus();
					$('#txt_F2_S1_P120').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F2_S1_P122').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: Conformación de Capital inválida con Forma de propiedad.");
				$('#txt_F2_S1_P120').focus();
				$('#txt_F2_S1_P120').select();
				return false;
				}
        }        
    }
    // valida opcion 4
    if ($(campo_j).attr('id')=='txt_F2_S1_P121')
    {
        if ( parseInt($('#txt_F2_S1_P119').val()) == 4 &&
             parseFloat(eliminar_decimales($('#txt_F2_S1_P120').val())) != 100 &&
             parseFloat(eliminar_decimales($(campo_j).val())) != 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Conformación de Capital inválida con Forma de propiedad.\n ¿Desea continuar?'))
					{
					$('#txt_F2_S1_P120').focus();
					$('#txt_F2_S1_P120').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F2_S1_P122').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: Conformación de Capital inválida con Forma de propiedad.");
				$('#txt_F2_S1_P120').focus();
				$('#txt_F2_S1_P120').select();
				return false;
				}
        }        
    }
    //COMPLETA PORCENTAJES
    if ( $(campo_j).attr('id') == 'txt_F2_S1_P119' ){
        if ( parseInt($(campo_j).val()) == 1 ){
            $('#txt_F2_S1_P120').attr('value','100,00');
            $('#txt_F2_S1_P121').attr('value','0,00');
            $('#txt_F2_S1_P122').focus();
            return false;
        }
        if ( parseInt($(campo_j).val()) == 2 ){
            $('#txt_F2_S1_P120').attr('value','0,00');
            $('#txt_F2_S1_P121').attr('value','100,00');
            $('#txt_F2_S1_P122').focus();
            return false;
        }
        if ( parseInt($(campo_j).val()) == 4 ){
            $('#txt_F2_S1_P120').attr('value','100,00');
            $('#txt_F2_S1_P121').attr('value','0,00');
            $('#txt_F2_S1_P122').focus();
            return false;
        }
		}
	// Regla 28
   if ($(campo_j).attr('id')=='txt_F2_S1_P124')
    {
    campo122=$.trim($('#txt_F2_S1_P122').val());
    campo123=$.trim($('#txt_F2_S1_P123').val());
	campo124=$.trim($('#txt_F2_S1_P124').val());
    if ( eliminar_miles(campo122) + eliminar_miles(campo123)!= eliminar_miles(campo124))
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: Número total de establecimientos de la empresa no cuadra.\n ¿Desea continuar?'))
					{
					$('#txt_F2_S1_P122').focus();
					$('#txt_F2_S1_P122').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F2_S1_P125').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: Número total de establecimientos de la empresa no cuadra.");
				$('#txt_F2_S1_P122').focus();
				$('#txt_F2_S1_P122').select();
				return false;
				}
        }        
    }
	// Regla 29
   if ($(campo_j).attr('id')=='txt_F2_S1_P124')
    {
	campo124=$.trim($('#txt_F2_S1_P124').val());
    if ( eliminar_miles(campo124) == 0)
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No informa número de establecimiento.\n ¿Desea continuar?'))
					{
					$('#txt_F2_S1_P122').focus();
					$('#txt_F2_S1_P122').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F2_S1_P125').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No informa número de establecimiento.");
				$('#txt_F2_S1_P122').focus();
				$('#txt_F2_S1_P122').select();
				return false;
				}
        }        
    }
     //Regla 30
    if ($(campo_j).attr('id')=='txt_F2_S1_P125')
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
					$('#txt_F2_S1_P126').focus();
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
     //Regla 31
    if ($(campo_j).attr('id')=='txt_F2_S1_P128')
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
					$('#txt_F2_S1_P129').focus();
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
    //Regla 32
    if ($(campo_j).attr('id')=='txt_F2_S1_P128')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F2_S1_P127').val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Código Área Teléfono del contador o informante calificado.\n ¿Desea continuar?'))
					{
					$('#txt_F2_S1_P127').focus();
					$('#txt_F2_S1_P127').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F2_S1_P129').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No indica Código Área Teléfono del contador o informante calificado.");
				$('#txt_F2_S1_P127').focus();
				$('#txt_F2_S1_P127').select();
				return false;
				}
        }        
    }
    //Regla 33
    if ($(campo_j).attr('id')=='txt_F2_S1_P130')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F2_S1_P129').val()).length == 0 )
        {
			if (perfil == 4)
				{
				if(!confirm('Advertencia: No indica Código Área Fax del contador o informante calificado.\n ¿Desea continuar?'))
					{
					$('#txt_F2_S1_P129').focus();
					$('#txt_F2_S1_P129').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F2_S1_P131').focus();
					return false;
					}    
				}
				else 
				{
				alert("Error: No indica Código Área Fax del contador o informante calificado.");
				$('#txt_F2_S1_P129').focus();
				$('#txt_F2_S1_P129').select();
				return false;
				}
        }        
    }

 //Regla 64 al 68
    if ($(campo_j).attr('id')=='chk_F2_S1_P134')
    {
		if($('#chk_F2_S1_P134').is(':checked'))
		{
		chk134=1;
		}
		else
		{
		chk134=0;
		}
		if($('#chk_F2_S1_P133').is(':checked'))
		{
		chk133=1;
		}
		else
		{
		chk133=0;
		}
		if($('#chk_F2_S1_P132').is(':checked'))
		{
		chk132=1;
		}
		else
		{
		chk132=0;
		}
        if ( chk134==1 && chk133==1 && chk132==1)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F2_S1_P135').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
					}
        } 
		if ( chk134==1 && chk133==1 && chk132==0)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F2_S1_P135').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
					}
        }   
		if ( chk134==1 && chk133==0 && chk132==1)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F2_S1_P135').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
					}
        }  
		if ( chk134==0 && chk133==1 && chk132==1)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F2_S1_P135').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
					}
        } 
		if ( chk134==0 && chk133==0 && chk132==0)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F2_S1_P135').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar una de las alternativas de moneda.");
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
					}
        }        
    }
     //Regla 64 al 68
    if ($(campo_j).attr('id')=='chk_F2_S1_P133')
    {
		if($('#chk_F2_S1_P134').is(':checked'))
		{
		chk134=1;
		}
		else
		{
		chk134=0;
		}
		if($('#chk_F2_S1_P133').is(':checked'))
		{
		chk133=1;
		}
		else
		{
		chk133=0;
		}
		if($('#chk_F2_S1_P132').is(':checked'))
		{
		chk132=1;
		}
		else
		{
		chk132=0;
		}
        if ( chk134==1 && chk133==1 && chk132==1)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F2_S1_P135').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
					}
        } 
//		if ( chk134==1 && chk133==1 && chk132==0)
//			{
//			if (perfil == 4)
//					{
//					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
//						{
//						$('#chk_F2_S1_P132').focus();
//						$('#chk_F2_S1_P132').select();
//						return false;
//						}
//						else
//						{
//						flag_2 = true;
//						$('#chk_F2_S1_P135').focus();
//						return false;
//						}    
//					}
//					else 
//					{
//						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
//						$('#chk_F2_S1_P132').focus();
//						$('#chk_F2_S1_P132').select();
//						return false;
//					}
//        }   
//		if ( chk134==1 && chk133==0 && chk132==1)
//			{
//			if (perfil == 4)
//					{
//					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
//						{
//						$('#chk_F2_S1_P132').focus();
//						$('#chk_F2_S1_P132').select();
//						return false;
//						}
//						else
//						{
//						flag_2 = true;
//						$('#chk_F2_S1_P135').focus();
//						return false;
//						}    
//					}
//					else 
//					{
//						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
//						$('#chk_F2_S1_P132').focus();
//						$('#chk_F2_S1_P132').select();
//						return false;
//					}
//        }  
//		if ( chk134==0 && chk133==1 && chk132==1)
//			{
//			if (perfil == 4)
//					{
//					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
//						{
//						$('#chk_F2_S1_P132').focus();
//						$('#chk_F2_S1_P132').select();
//						return false;
//						}
//						else
//						{
//						flag_2 = true;
//						$('#chk_F2_S1_P135').focus();
//						return false;
//						}    
//					}
//					else 
//					{
//						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
//						$('#chk_F2_S1_P132').focus();
//						$('#chk_F2_S1_P132').select();
//						return false;
//					}
//        } 
		if ( chk134==0 && chk133==0 && chk132==0)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F2_S1_P135').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar una de las alternativas de moneda.");
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
					}
        }        
    }
     //Regla 64 al 68
    if ($(campo_j).attr('id')=='chk_F2_S1_P132')
    {
		if($('#chk_F2_S1_P134').is(':checked'))
		{
		chk134=1;
		}
		else
		{
		chk134=0;
		}
		if($('#chk_F2_S1_P133').is(':checked'))
		{
		chk133=1;
		}
		else
		{
		chk133=0;
		}
		if($('#chk_F2_S1_P132').is(':checked'))
		{
		chk132=1;
		}
		else
		{
		chk132=0;
		}
        if ( chk134==1 && chk133==1 && chk132==1)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F2_S1_P135').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
					}
        } 
//		if ( chk134==1 && chk133==1 && chk132==0)
//			{
//			if (perfil == 4)
//					{
//					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
//						{
//						$('#chk_F2_S1_P132').focus();
//						$('#chk_F2_S1_P132').select();
//						return false;
//						}
//						else
//						{
//						flag_2 = true;
//						$('#chk_F2_S1_P135').focus();
//						return false;
//						}    
//					}
//					else 
//					{
//						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
//						$('#chk_F2_S1_P132').focus();
//						$('#chk_F2_S1_P132').select();
//						return false;
//					}
//        }   
//		if ( chk134==1 && chk133==0 && chk132==1)
//			{
//			if (perfil == 4)
//					{
//					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
//						{
//						$('#chk_F2_S1_P132').focus();
//						$('#chk_F2_S1_P132').select();
//						return false;
//						}
//						else
//						{
//						flag_2 = true;
//						$('#chk_F2_S1_P135').focus();
//						return false;
//						}    
//					}
//					else 
//					{
//						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
//						$('#chk_F2_S1_P132').focus();
//						$('#chk_F2_S1_P132').select();
//						return false;
//					}
//        }  
//		if ( chk134==0 && chk133==1 && chk132==1)
//			{
//			if (perfil == 4)
//					{
//					if(!confirm('Advertencia: Debe seleccionar sólo una de las alternativas de moneda.\n ¿Desea continuar?'))
//						{
//						$('#chk_F2_S1_P132').focus();
//						$('#chk_F2_S1_P132').select();
//						return false;
//						}
//						else
//						{
//						flag_2 = true;
//						$('#chk_F2_S1_P135').focus();
//						return false;
//						}    
//					}
//					else 
//					{
//						alert("Error: Debe seleccionar sólo una de las alternativas de moneda.");
//						$('#chk_F2_S1_P132').focus();
//						$('#chk_F2_S1_P132').select();
//						return false;
//					}
//        } 
		if ( chk134==0 && chk133==0 && chk132==0)
			{
			if (perfil == 4)
					{
					if(!confirm('Advertencia: Debe seleccionar una de las alternativas de moneda.\n ¿Desea continuar?'))
						{
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#chk_F2_S1_P135').focus();
						return false;
						}    
					}
					else 
					{
						alert("Error: Debe seleccionar una de las alternativas de moneda.");
						$('#chk_F2_S1_P132').focus();
						$('#chk_F2_S1_P132').select();
						return false;
					}
        }        
    }
    
    
   
   
     //Regla 69
    if ($(campo_j).attr('id')=='chk_F2_S1_P136')
    {
	if($('#chk_F2_S1_P135').is(':checked'))
	{
	chk135=1;
	}
	else
	{
	chk135=0;
	}
	if($('#chk_F2_S1_P136').is(':checked'))
	{
	chk136=1;
	}
	else
	{
	chk136=0;
	}
	//alert(chk135);
        if ( chk135==1  && chk136==1 )
        {
        	if (perfil == 4)
				{
				if(!confirm('Advertencia: Debe marcar sólo una de las alternativas.\n ¿Desea continuar?'))
					{
					$('#chk_F2_S1_P135').focus();
					$('#chk_F2_S1_P135').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F2_S1_P160').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Debe marcar sólo una de las alternativas.");
					$('#chk_F2_S1_P135').focus();
					$('#chk_F2_S1_P135').select();
					return false;
				}
        }  
         if ( chk135==0  && chk136==0 )
        {
        	if (perfil == 4)
				{
				if(!confirm('Advertencia: Debe marcar una de las alternativas.\n ¿Desea continuar?'))
					{
					$('#chk_F2_S1_P135').focus();
					$('#chk_F2_S1_P135').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F2_S1_P160').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Debe marcar una de las alternativas.");
					$('#chk_F2_S1_P135').focus();
					$('#chk_F2_S1_P135').select();
					return false;
				}
        }              
    }
     //Regla 69
    if ($(campo_j).attr('id')=='chk_F2_S1_P135')
    {
	if($('#chk_F2_S1_P135').is(':checked'))
	{
	chk135=1;
	}
	else
	{
	chk135=0;
	}
	if($('#chk_F2_S1_P136').is(':checked'))
	{
	chk136=1;
	}
	else
	{
	chk136=0;
	}
	//alert(chk135);
        if ( chk135==1  && chk136==1 )
        {
        	if (perfil == 4)
				{
				if(!confirm('Advertencia: Debe marcar sólo una de las alternativas.\n ¿Desea continuar?'))
					{
					$('#chk_F2_S1_P135').focus();
					$('#chk_F2_S1_P135').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F2_S1_P160').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Debe marcar sólo una de las alternativas.");
					$('#chk_F2_S1_P135').focus();
					$('#chk_F2_S1_P135').select();
					return false;
				}
        }  
         if ( chk135==0  && chk136==0 )
        {
        	if (perfil == 4)
				{
				if(!confirm('Advertencia: Debe marcar una de las alternativas.\n ¿Desea continuar?'))
					{
					$('#chk_F2_S1_P135').focus();
					$('#chk_F2_S1_P135').select();
					return false;
					}
					else
					{
					flag_2 = true;
					$('#txt_F2_S1_P160').focus();
					return false;
					}    
				}
				else 
				{
					alert("Error: Debe marcar una de las alternativas.");
					$('#chk_F2_S1_P135').focus();
					$('#chk_F2_S1_P135').select();
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
//// Regla 1
//   if ($(campo_j).attr('id')=='txt_F2_S1_P101')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 101 - Advertencia: No indica Razón Social. \n");
//			$(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campos 101 - Error: No indica Razón Social. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;	
//			}
//        }        
//    }
//    // Regla 2
//    if ($(campo_j).attr('id')=='txt_F2_S1_P103')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 103 - Advertencia: No indica Representante Legal de la empresa. \n");
//			$(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campos 103 - Error: No indica Representante Legal de la empresa. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;	 
//			}						
//        }        
//    }
//    // Regla 3
//    if ($(campo_j).attr('id')=='txt_F2_S1_P104')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 104 - Advertencia: No indica RUT Representante Legal de la empresa. \n");
//			$(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campos 104 - Error: No indica RUT Representante Legal de la empresa. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;	 
//			}						
//        }        
//    }
//    // Regla 4
//   if ($(campo_j).attr('id')=='txt_F2_S1_P105')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 105 - Advertencia: No indica calle en la Dirección de la Gerencia General u Oficina. \n");
//			$(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campos 105 - Error: No indica calle en la Dirección de la Gerencia General u Oficina. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;
//			}						
//        }        
//    }
//    // Regla 5
//   if ($(campo_j).attr('id')=='txt_F2_S1_P106')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 106 - Advertencia: No indica Número en la Dirección de la Gerencia General u Oficina. \n");
//			$(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campos 106 - Error: No indica Número en la Dirección de la Gerencia General u Oficina. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;	
//			}
//        }       
//    }
//    // Regla 6
//   if ($(campo_j).attr('id')=='txt_F2_S1_P107')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {

//            mensaje=mensaje +("Campo 107 - Advertencia: No indica Número local/oficina en la Dirección de la Gerencia General u Oficina. \n");
//			$(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;	
//					
//        }        
//    }
//    // Regla 7
//   if ($(campo_j).attr('id')=='txt_F2_S1_P108')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 108 - Advertencia: No indica Comuna en la Dirección de la Gerencia General u Oficina. \n");
//			$(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campos 108 - Error: No indica Comuna en la Dirección de la Gerencia General u Oficina. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;
//			}						
//        }        
//    }
//    // Regla 8
//   if ($(campo_j).attr('id')=='txt_F2_S1_P110')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 110 - Advertencia: No indica Número de Teléfono. \n");
//			$(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campos 110 - Error: No indica Número de Teléfono. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;	
//			}						
//        }        
//    }
//    // Regla 9
//   if ($(campo_j).attr('id')=='txt_F2_S1_P110')
//    {
//        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#txt_F2_S1_P109').val()).length == 0)
//        {
//			if (perfil == 4)
//            {
//            mensaje=mensaje +("Campo 109 - Advertencia: No indica Código Área Teléfono. \n");
//			$(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;
//            }
//            else
//            {
//			mensaje=mensaje +("Campos 109 - Error: No indica Código Área Teléfono. \n");
//            $(campo_j).css('border','2px solid red');
//			error++;
//			foco[++cont] = campo_j;	 
//			}
//       }        
//    }
	  // Regla 10
   if ($(campo_j).attr('id')=='txt_F2_S1_P112')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 112 - Advertencia: No indica Número de fax. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 112 - Error: No indica Número de fax. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	 
			}
        }        
    }
     // Regla 11
   if ($(campo_j).attr('id')=='txt_F2_S1_P112')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#ddl_F2_S1_P111').val()) == 0)
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 111 - Advertencia: No indica Código Área fax. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 111 - Error: No indica Código Área fax. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	 
			}						
        }        
    }
//    // Regla 12
//   if ($(campo_j).attr('id')=='txt_F2_S1_P113')
//    {
//        if ( $.trim($(campo_j).val()).length == 0 )
//        {
//			mensaje=mensaje +("Campos 113 - Advertencia: No indica Correo Electrónico. \n");
//            $(campo_j).css('border','2px solid #FFA500');
//			advertencia++;
//			foco[++cont] = campo_j;	                
//        }        
//    }

     // Regla 14
   if ($(campo_j).attr('id')=='txt_F2_S1_P117')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
            mensaje=mensaje +("Campo 117 - Advertencia: Recuerde ingresar su código postal. \n");
            $(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;	  
        }        
    }
        // Regla 15
   if ($(campo_j).attr('id')=='txt_F2_S1_P118')
    {
        if ( $.trim($(campo_j).val()).length == 0 || parseInt($(campo_j).val()) < 1 || parseInt($(campo_j).val())>8)
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 118 - Advertencia: Tipo de Empresa Fuera de rangos. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 118 - Error: Tipo de Empresa Fuera de rangos. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	 
			}						
        }        
    }
    
    //Regla 16
    if ($(campo_j).attr('id')=='txt_F2_S1_P118_E')
    {
        if ( $.trim($(campo_j).val()).length == 0 && parseInt($('#txt_F2_S1_P118').val()) == 8 )
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
			mensaje=mensaje +("Campos 118_E - Error: No especifica otra tipo de organización jurídica. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}
        }        
    }
         // Regla 17
   if ($(campo_j).attr('id')=='txt_F2_S1_P119')
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
			mensaje=mensaje +("Campos 119 - Error: Tipo de propiedad Fuera de rangos. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	 
			}						
        }        
    }
       // Regla 18
   if ($(campo_j).attr('id')=='txt_F2_S1_P120')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 120 - Advertencia: Valor del campo debe estar entre 0 y 100. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 120 - Error: Valor del campo debe estar entre 0 y 100. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	 
			}						
        }        
    }
    // Regla 19
   if ($(campo_j).attr('id')=='txt_F2_S1_P121')
    {
        if ( $.trim($(campo_j).val()).length == 0 || eliminar_decimales($(campo_j).val()) < 0 || eliminar_decimales($(campo_j).val())>100)
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 121 - Advertencia: Valor del campo debe estar entre 0 y 100. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 121 - Error: Valor del campo debe estar entre 0 y 100. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	
			}						
        }        
    }
     // Regla 20
   if ($(campo_j).attr('id')=='txt_F2_S1_P121')
    {
    campo_120=$.trim($('#txt_F2_S1_P120').val());
    campo_121=$.trim($('#txt_F2_S1_P121').val());
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
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 120 y 121 - Error: La Suma de las campos nacional y extranjero no debe ser distinta de 100. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	 
			}						
        }        
    }
    // Regla del 21 al 27
    // valida opcion 1
    if ($(campo_j).attr('id')=='txt_F2_S1_P121')
    {
        if ( parseInt($('#txt_F2_S1_P119').val()) == 1 &&
             parseFloat(eliminar_decimales($('#txt_F2_S1_P120').val())) != 100 &&
             parseFloat(eliminar_decimales($(campo_j).val())) != 0 )
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 119, 120 y 121 - Advertencia: Conformación de Capital inválida con Forma de propiedad. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 119, 120 y 121 - Error: Conformación de Capital inválida con Forma de propiedad. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}						
        }        
    }
    // valida opcion 2
    if ($(campo_j).attr('id')=='txt_F2_S1_P121')
    {
        if ( parseInt($('#txt_F2_S1_P119').val()) == 2 &&
             parseFloat(eliminar_decimales($('#txt_F2_S1_P120').val())) != 0 &&
             parseFloat(eliminar_decimales($(campo_j).val())) != 100 )
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 119, 120 y 121 - Advertencia: Conformación de Capital inválida con Forma de propiedad. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 119, 120 y 121 - Error: Conformación de Capital inválida con Forma de propiedad. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	
			}						
        }        
    }
    // valida opcion 4
    if ($(campo_j).attr('id')=='txt_F2_S1_P121')
    {
        if ( parseInt($('#txt_F2_S1_P119').val()) == 4 &&
             parseFloat(eliminar_decimales($('#txt_F2_S1_P120').val())) != 100 &&
             parseFloat(eliminar_decimales($(campo_j).val())) != 0 )
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 119, 120 y 121 - Advertencia: Conformación de Capital inválida con Forma de propiedad. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 119, 120 y 121 - Error: Conformación de Capital inválida con Forma de propiedad. \n");
			$(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	
			}						
        }        
    }
    
	// Regla 28
   if ($(campo_j).attr('id')=='txt_F2_S1_P124')
    {
    campo122=$.trim($('#txt_F2_S1_P122').val());
    campo123=$.trim($('#txt_F2_S1_P123').val());
	campo124=$.trim($('#txt_F2_S1_P124').val());
    if ( eliminar_miles(campo122) + eliminar_miles(campo123)!= eliminar_miles(campo124))
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 124 - Advertencia: Número total de establecimientos de la empresa no cuadra. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 124 - Error: Número total de establecimientos de la empresa no cuadra. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	
			}
        }        
    }
	// Regla 29
   if ($(campo_j).attr('id')=='txt_F2_S1_P124')
    {
	campo124=$.trim($('#txt_F2_S1_P124').val());
    if ( eliminar_miles(campo124) == 0)
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 124 - Advertencia: No informa número de establecimiento. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 124 - Error: No informa número de establecimiento. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	
			}						
        }        
    }
     //Regla 30
    if ($(campo_j).attr('id')=='txt_F2_S1_P125')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 125 - Advertencia: No indica Nombre del contador o informante calificado. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 125 - Error: No indica Nombre del contador o informante calificado. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	
			}						
        }        
    }
     //Regla 31
    if ($(campo_j).attr('id')=='txt_F2_S1_P128')
    {
        if ( $.trim($(campo_j).val()).length == 0 )
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 128 - Advertencia: No indica Número Telefónico del contador o informante calificado. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 128 - Error: No indica Número Telefónico del contador o informante calificado. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	
			}
        }        
    }
    //Regla 32
    if ($(campo_j).attr('id')=='txt_F2_S1_P128')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#ddl_F2_S1_P127').val()) == 0 )
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 127 - Advertencia: No indica Código Área Teléfono del contador o informante calificado. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 127 - Error: No indica Código Área Teléfono del contador o informante calificado. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;
			}						
        }        
    }
    //Regla 33
    if ($(campo_j).attr('id')=='txt_F2_S1_P130')
    {
        if ( $.trim($(campo_j).val()).length != 0 && $.trim($('#ddl_F2_S1_P129').val()) == 0 )
        {
			if (perfil == 4)
            {
            mensaje=mensaje +("Campo 129 - Advertencia: No indica Código Área Fax del contador o informante calificado. \n");
			$(campo_j).css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 129 - Error: No indica Código Área Fax del contador o informante calificado. \n");
            $(campo_j).css('border','2px solid red');
			error++;
			foco[++cont] = campo_j;	
			}						
        }        
    }

    //Regla 63
    if ($(campo_j).attr('id')=='chk_F2_S1_P134')
    {
        if($('#chk_F2_S1_P134').is(':checked'))
		{
		chk134=1;
		}
		else
		{
		chk134=0;
		}
		if($('#chk_F2_S1_P133').is(':checked'))
		{
		chk133=1;
		}
		else
		{
		chk133=0;
		}
		if($('#chk_F2_S1_P132').is(':checked'))
		{
		chk132=1;
		}
		else
		{
		chk132=0;
		}
        if ( chk134==1 && chk133==1 && chk132==1)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 132, 133 y 134 - Advertencia: Debe seleccionar sólo una de las alternativas de moneda. \n");
			$('#chk_F2_S1_P134').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 132, 133 y 134 - Error: Debe seleccionar sólo una de las alternativas de moneda. \n");
            $('#chk_F2_S1_P134').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F2_S1_P132';
			}
        }        
    }
    //Regla 64
    if ($(campo_j).attr('id')=='chk_F2_S1_P134')
    {
        if($('#chk_F2_S1_P134').is(':checked'))
		{
		chk134=1;
		}
		else
		{
		chk134=0;
		}
		if($('#chk_F2_S1_P133').is(':checked'))
		{
		chk133=1;
		}
		else
		{
		chk133=0;
		}
		if($('#chk_F2_S1_P132').is(':checked'))
		{
		chk132=1;
		}
		else
		{
		chk132=0;
		}
        if ( chk134==1 && chk133==1 && chk132==1)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 132, 133 y 134 - Advertencia: Debe seleccionar sólo una de las alternativas de moneda. \n");
			$('#chk_F2_S1_P134').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 132, 133 y 134 - Error: Debe seleccionar sólo una de las alternativas de moneda. \n");
            $('#chk_F2_S1_P134').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F2_S1_P132';
			}
        }        
    }
    //Regla 65
    if ($(campo_j).attr('id')=='chk_F2_S1_P134')
    {
if($('#chk_F2_S1_P134').is(':checked'))
		{
		chk134=1;
		}
		else
		{
		chk134=0;
		}
		if($('#chk_F2_S1_P133').is(':checked'))
		{
		chk133=1;
		}
		else
		{
		chk133=0;
		}
		if($('#chk_F2_S1_P132').is(':checked'))
		{
		chk132=1;
		}
		else
		{
		chk132=0;
		}
        if ( chk134==1 && chk133==1 && chk132==0)        
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 132, 133 y 134 - Advertencia: Debe seleccionar sólo una de las alternativas de moneda. \n");
			$('#chk_F2_S1_P134').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 132, 133 y 134 - Error: Debe seleccionar sólo una de las alternativas de moneda. \n");
            $('#chk_F2_S1_P134').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F2_S1_P132';
			}
        }        
    }
    //Regla 66
    if ($(campo_j).attr('id')=='chk_F2_S1_P134')
    {
        if($('#chk_F2_S1_P134').is(':checked'))
		{
		chk134=1;
		}
		else
		{
		chk134=0;
		}
		if($('#chk_F2_S1_P133').is(':checked'))
		{
		chk133=1;
		}
		else
		{
		chk133=0;
		}
		if($('#chk_F2_S1_P132').is(':checked'))
		{
		chk132=1;
		}
		else
		{
		chk132=0;
		}
        if ( chk134==1 && chk133==0 && chk132==1)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 132, 133 y 134 - Advertencia: Debe seleccionar sólo una de las alternativas de moneda. \n");
			$('#chk_F2_S1_P134').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 132, 133 y 134 - Error: Debe seleccionar sólo una de las alternativas de moneda. \n");
            $('#chk_F2_S1_P134').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F2_S1_P132';
			}
        }        
    }
    //Regla 67
    if ($(campo_j).attr('id')=='chk_F2_S1_P134')
    {
        if($('#chk_F2_S1_P134').is(':checked'))
		{
		chk134=1;
		}
		else
		{
		chk134=0;
		}
		if($('#chk_F2_S1_P133').is(':checked'))
		{
		chk133=1;
		}
		else
		{
		chk133=0;
		}
		if($('#chk_F2_S1_P132').is(':checked'))
		{
		chk132=1;
		}
		else
		{
		chk132=0;
		}
        if ( chk134==0 && chk133==1 && chk132==1)
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 132, 133 y 134 - Advertencia: Debe seleccionar sólo una de las alternativas de moneda. \n");
			$('#chk_F2_S1_P134').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 132, 133 y 134 - Error: Debe seleccionar sólo una de las alternativas de moneda. \n");
            $('#chk_F2_S1_P134').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F2_S1_P132';
			}
        }        
    }
    //Regla 68
    if ($(campo_j).attr('id')=='chk_F2_S1_P134')
    {
if($('#chk_F2_S1_P134').is(':checked'))
		{
		chk134=1;
		}
		else
		{
		chk134=0;
		}
		if($('#chk_F2_S1_P133').is(':checked'))
		{
		chk133=1;
		}
		else
		{
		chk133=0;
		}
		if($('#chk_F2_S1_P132').is(':checked'))
		{
		chk132=1;
		}
		else
		{
		chk132=0;
		}
        if ( chk134==0 && chk133==0 && chk132==0)
                {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 132, 133 y 134 - Advertencia: Debe seleccionar una de las alternativas de moneda. \n");
			$('#chk_F2_S1_P134').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 132, 133 y 134 - Error: Debe seleccionar una de las alternativas de moneda. \n");
            $('#chk_F2_S1_P134').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F2_S1_P132';
			}
        }        
    } 
    //Regla 69
    if ($(campo_j).attr('id')=='chk_F2_S1_P135')
    {
	if($('#chk_F2_S1_P135').is(':checked'))
	{
	chk135=1;
	}
	else
	{
	chk135=0;
	}
	if($('#chk_F2_S1_P136').is(':checked'))
	{
	chk136=1;
	}
	else
	{
	chk136=0;
	}
	//alert(chk135);
        if ( chk135==1  && chk136==1 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 135 y 136 - Advertencia: Debe marcar sólo una de las alternativas. \n");
			$('#chk_F2_S1_P136').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 135 y 136 -  Error: Debe marcar sólo una de las alternativas.\n");
            $('#chk_F2_S1_P136').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F2_S1_P135';
			}
        }        
    }
    //Regla 70
    if ($(campo_j).attr('id')=='chk_F2_S1_P135')
    {
	if($('#chk_F2_S1_P135').is(':checked'))
	{
	chk135=1;
	}
	else
	{
	chk135=0;
	}
	if($('#chk_F2_S1_P136').is(':checked'))
	{
	chk136=1;
	}
	else
	{
	chk136=0;
	}
	//alert(chk135);
        if ( chk135==0  && chk136==0 )
        {
            if (perfil == 4)
            {
            mensaje=mensaje +("Campo 135 y 136 - Advertencia: Debe marcar una de las alternativas. \n");
			$('#chk_F2_S1_P136').css('border','2px solid #FFA500');
			advertencia++;
			foco[++cont] = campo_j;
            }
            else
            {
			mensaje=mensaje +("Campos 135 y 136 -  Error: Debe marcar una de las alternativas.\n");
            $('#chk_F2_S1_P136').css('border','2px solid red');
			error++;
			foco[++cont] = '#chk_F2_S1_P135';
			}
        }        
    }
    

    
    $.each($('select'),function(i,v){
        campo_j = "#"+$(this).attr('id');
              // Regla 13
   if ($(campo_j).attr('id')=='ddl_F2_S1_P116')
    {
        if ( $.trim($('#ddl_F2_S1_P116').val()) == 0 && $.trim($('#txt_F2_S1_P115').val()).length != 0)
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
    });
    return [advertencia,error,foco[0],mensaje];
}



