camposDecimal = ['txt_F2_S3_P302','txt_F2_S3_P304','txt_F2_S3_P306','txt_F2_S3_P308','txt_F2_S3_P310','txt_F2_S3_P312',
'txt_F2_S3_P314','txt_F2_S3_P316','txt_F2_S3_P318'];
camposletra=[];
camposMiles=['txt_F2_S2_P2085','txt_F2_S2_P2086','txt_F2_S2_P2087','txt_F2_S2_P2088','txt_F2_S2_P2089','txt_F2_S2_P2090',
'txt_F2_S2_P2091','txt_F2_S2_P2092','txt_F2_S2_P2093','txt_F2_S2_P2094','txt_F2_S2_P2095','txt_F2_S2_P2096',
'txt_F2_S2_P2097','txt_F2_S2_P2098','txt_F2_S2_P2099','txt_F2_S2_P2100','txt_F2_S2_P2101','txt_F2_S2_P2102',
'txt_F2_S2_P2103','txt_F2_S2_P2104','txt_F2_S2_P2105','txt_F2_S2_P2106','txt_F2_S2_P2107','txt_F2_S2_P2108',
'txt_F2_S2_P2109','txt_F2_S2_P2110','txt_F2_S2_P2111','txt_F2_S2_P2112','txt_F2_S2_P2113','txt_F2_S2_P2114',
'txt_F2_S2_P2115','txt_F2_S2_P2116','txt_F2_S2_P2117','txt_F2_S2_P2118','txt_F2_S2_P2119','txt_F2_S2_P2120',
'txt_F2_S2_P2121','txt_F2_S2_P2122','txt_F2_S2_P2123','txt_F2_S2_P2124','txt_F2_S2_P2125','txt_F2_S2_P2126',
'txt_F2_S2_P2127','txt_F2_S2_P2128','txt_F2_S2_P2129','txt_F2_S2_P2130','txt_F2_S2_P2131','txt_F2_S2_P2132',
'txt_F2_S2_P2133','txt_F2_S2_P2134','txt_F2_S2_P2135','txt_F2_S2_P2136','txt_F2_S2_P2137','txt_F2_S2_P2138',
'txt_F2_S2_P2139','txt_F2_S2_P2140','txt_F2_S2_P2141','txt_F2_S2_P2142','txt_F2_S2_P2143','txt_F2_S2_P2144',
'txt_F2_S2_P2145','txt_F2_S2_P2146','txt_F2_S2_P2147','txt_F2_S2_P2148','txt_F2_S2_P2149','txt_F2_S2_P2150',
'txt_F2_S3_P301','txt_F2_S3_P303','txt_F2_S3_P305','txt_F2_S3_P307','txt_F2_S3_P309','txt_F2_S3_P311',
'txt_F2_S3_P313','txt_F2_S3_P315','txt_F2_S3_P317','txt_F2_S3_P319','txt_F2_S3_P320','txt_F2_S3_P321','txt_F2_S3_P322'];
campoSoloTexto=[];
function validar (campo_j){
    campo_j = "#"+campo_j;
//Regla 66   
 if ($(campo_j).attr('id')=='txt_F2_S2_P2093')
    {
    campo2085=$.trim($('#txt_F2_S2_P2085').val());
    campo2086=$.trim($('#txt_F2_S2_P2086').val());
    campo2087=$.trim($('#txt_F2_S2_P2087').val());
    campo2088=$.trim($('#txt_F2_S2_P2088').val());
    campo2089=$.trim($('#txt_F2_S2_P2089').val());
    campo2090=$.trim($('#txt_F2_S2_P2090').val());
    campo2091=$.trim($('#txt_F2_S2_P2091').val());
    campo2092=$.trim($('#txt_F2_S2_P2092').val());
    campo2093=$.trim($('#txt_F2_S2_P2093').val());
   	suma=eliminar_miles(campo2085)+eliminar_miles(campo2086)+eliminar_miles(campo2087)+eliminar_miles(campo2088)+eliminar_miles(campo2089)+eliminar_miles(campo2090)+eliminar_miles(campo2091)+eliminar_miles(campo2092);
 
            if ( eliminar_miles(campo2093) > 0 && suma == 0 )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa remuneraciones pero no informa personas que trabajaron.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2085').focus();
						$('#txt_F2_S2_P2085').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2094').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa remuneraciones pero no informa personas que trabajaron.");
                    $('#txt_F2_S2_P2085').focus();
                     $('#txt_F2_S2_P2085').select();
                    return false;
					}
            }  

    }  
	//Regla 67  
 if ($(campo_j).attr('id')=='txt_F2_S2_P2093')
    {
    campo2085=$.trim($('#txt_F2_S2_P2085').val());
    campo2086=$.trim($('#txt_F2_S2_P2086').val());
    campo2087=$.trim($('#txt_F2_S2_P2087').val());
    campo2088=$.trim($('#txt_F2_S2_P2088').val());
    campo2089=$.trim($('#txt_F2_S2_P2089').val());
    campo2090=$.trim($('#txt_F2_S2_P2090').val());
    campo2091=$.trim($('#txt_F2_S2_P2091').val());
    campo2092=$.trim($('#txt_F2_S2_P2092').val());
    campo2093=$.trim($('#txt_F2_S2_P2093').val());
   	suma=eliminar_miles(campo2085)+eliminar_miles(campo2086)+eliminar_miles(campo2087)+eliminar_miles(campo2088)+eliminar_miles(campo2089)+eliminar_miles(campo2090)+eliminar_miles(campo2091)+eliminar_miles(campo2092);
 
            if ( eliminar_miles(campo2093) == 0 && suma > 0 )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2085').focus();
						$('#txt_F2_S2_P2085').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2094').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa personas que trabajaron pero no informa pago de remuneraciones.");
                    $('#txt_F2_S2_P2085').focus();
                     $('#txt_F2_S2_P2085').select();
                    return false;
					}
            }  

    }  
    //Regla 68 
 if ($(campo_j).attr('id')=='txt_F2_S2_P2102')
    {
    campo2094=$.trim($('#txt_F2_S2_P2094').val());
    campo2095=$.trim($('#txt_F2_S2_P2095').val());
    campo2096=$.trim($('#txt_F2_S2_P2096').val());
    campo2097=$.trim($('#txt_F2_S2_P2097').val());
    campo2098=$.trim($('#txt_F2_S2_P2098').val());
    campo2099=$.trim($('#txt_F2_S2_P2099').val());
    campo2100=$.trim($('#txt_F2_S2_P2100').val());
    campo2101=$.trim($('#txt_F2_S2_P2101').val());
    campo2102=$.trim($('#txt_F2_S2_P2102').val());
   	suma=eliminar_miles(campo2094)+eliminar_miles(campo2095)+eliminar_miles(campo2096)+eliminar_miles(campo2097)+eliminar_miles(campo2098)+eliminar_miles(campo2099)+eliminar_miles(campo2100)+eliminar_miles(campo2101);
 
            if ( eliminar_miles(campo2102) > 0 && suma == 0 )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa remuneraciones pero no informa personas que trabajaron.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2094').focus();
						$('#txt_F2_S2_P2094').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2103').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa remuneraciones pero no informa personas que trabajaron.");
                    $('#txt_F2_S2_P2094').focus();
                     $('#txt_F2_S2_P2094').select();
                    return false;
					}
            }  

    }  
	//Regla 69 
 if ($(campo_j).attr('id')=='txt_F2_S2_P2102')
    {
    campo2094=$.trim($('#txt_F2_S2_P2094').val());
    campo2095=$.trim($('#txt_F2_S2_P2095').val());
    campo2096=$.trim($('#txt_F2_S2_P2096').val());
    campo2097=$.trim($('#txt_F2_S2_P2097').val());
    campo2098=$.trim($('#txt_F2_S2_P2098').val());
    campo2099=$.trim($('#txt_F2_S2_P2099').val());
    campo2100=$.trim($('#txt_F2_S2_P2100').val());
    campo2101=$.trim($('#txt_F2_S2_P2101').val());
    campo2102=$.trim($('#txt_F2_S2_P2102').val());
   	suma=eliminar_miles(campo2094)+eliminar_miles(campo2095)+eliminar_miles(campo2096)+eliminar_miles(campo2097)+eliminar_miles(campo2098)+eliminar_miles(campo2099)+eliminar_miles(campo2100)+eliminar_miles(campo2101);
 
            if ( eliminar_miles(campo2102) == 0 && suma > 0 )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2094').focus();
						$('#txt_F2_S2_P2094').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2103').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa personas que trabajaron pero no informa pago de remuneraciones.");
                    $('#txt_F2_S2_P2094').focus();
                     $('#txt_F2_S2_P2094').select();
                    return false;
					}
            }  

    }  
    //Regla 70
 if ($(campo_j).attr('id')=='txt_F2_S2_P2111')
    {
    campo2103=$.trim($('#txt_F2_S2_P2103').val());
    campo2104=$.trim($('#txt_F2_S2_P2104').val());
    campo2105=$.trim($('#txt_F2_S2_P2105').val());
    campo2106=$.trim($('#txt_F2_S2_P2106').val());
    campo2107=$.trim($('#txt_F2_S2_P2107').val());
    campo2108=$.trim($('#txt_F2_S2_P2108').val());
    campo2109=$.trim($('#txt_F2_S2_P2109').val());
    campo2110=$.trim($('#txt_F2_S2_P2110').val());
    campo2111=$.trim($('#txt_F2_S2_P2111').val());
   	suma=eliminar_miles(campo2103)+eliminar_miles(campo2104)+eliminar_miles(campo2105)+eliminar_miles(campo2106)+eliminar_miles(campo2107)+eliminar_miles(campo2108)+eliminar_miles(campo2109)+eliminar_miles(campo2110);
 
            if ( eliminar_miles(campo2111) > 0 && suma == 0 )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa remuneraciones pero no informa personas que trabajaron.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2103').focus();
						$('#txt_F2_S2_P2103').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2112').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa remuneraciones pero no informa personas que trabajaron.");
                    $('#txt_F2_S2_P2103').focus();
                     $('#txt_F2_S2_P2103').select();
                    return false;
					}
            }  

    }  
	//Regla 71
 if ($(campo_j).attr('id')=='txt_F2_S2_P2111')
    {
    campo2103=$.trim($('#txt_F2_S2_P2103').val());
    campo2104=$.trim($('#txt_F2_S2_P2104').val());
    campo2105=$.trim($('#txt_F2_S2_P2105').val());
    campo2106=$.trim($('#txt_F2_S2_P2106').val());
    campo2107=$.trim($('#txt_F2_S2_P2107').val());
    campo2108=$.trim($('#txt_F2_S2_P2108').val());
    campo2109=$.trim($('#txt_F2_S2_P2109').val());
    campo2110=$.trim($('#txt_F2_S2_P2110').val());
    campo2111=$.trim($('#txt_F2_S2_P2111').val());
   	suma=eliminar_miles(campo2103)+eliminar_miles(campo2104)+eliminar_miles(campo2105)+eliminar_miles(campo2106)+eliminar_miles(campo2107)+eliminar_miles(campo2108)+eliminar_miles(campo2109)+eliminar_miles(campo2110);
 
            if ( eliminar_miles(campo2111) == 0 && suma > 0 )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2103').focus();
						$('#txt_F2_S2_P2103').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2112').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa personas que trabajaron pero no informa pago de remuneraciones.");
                    $('#txt_F2_S2_P2103').focus();
                     $('#txt_F2_S2_P2103').select();
                    return false;
					}
            }  

    }  
    //Regla 72
 if ($(campo_j).attr('id')=='txt_F2_S2_P2120')
    {
    campo2112=$.trim($('#txt_F2_S2_P2112').val());
    campo2113=$.trim($('#txt_F2_S2_P2113').val());
    campo2114=$.trim($('#txt_F2_S2_P2114').val());
    campo2115=$.trim($('#txt_F2_S2_P2115').val());
    campo2116=$.trim($('#txt_F2_S2_P2116').val());
    campo2117=$.trim($('#txt_F2_S2_P2117').val());
    campo2118=$.trim($('#txt_F2_S2_P2118').val());
    campo2119=$.trim($('#txt_F2_S2_P2119').val());
    campo2120=$.trim($('#txt_F2_S2_P2120').val());
   	suma=eliminar_miles(campo2112)+eliminar_miles(campo2113)+eliminar_miles(campo2114)+eliminar_miles(campo2115)+eliminar_miles(campo2116)+eliminar_miles(campo2117)+eliminar_miles(campo2118)+eliminar_miles(campo2119);
 
            if ( eliminar_miles(campo2120) > 0 && suma == 0 )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa remuneraciones pero no informa personas que trabajaron.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2112').focus();
						$('#txt_F2_S2_P2112').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2121').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa remuneraciones pero no informa personas que trabajaron.");
                    $('#txt_F2_S2_P2112').focus();
                     $('#txt_F2_S2_P2112').select();
                    return false;
					}
            }  

    }  
	//Regla 73
 if ($(campo_j).attr('id')=='txt_F2_S2_P2120')
    {
    campo2112=$.trim($('#txt_F2_S2_P2112').val());
    campo2113=$.trim($('#txt_F2_S2_P2113').val());
    campo2114=$.trim($('#txt_F2_S2_P2114').val());
    campo2115=$.trim($('#txt_F2_S2_P2115').val());
    campo2116=$.trim($('#txt_F2_S2_P2116').val());
    campo2117=$.trim($('#txt_F2_S2_P2117').val());
    campo2118=$.trim($('#txt_F2_S2_P2118').val());
    campo2119=$.trim($('#txt_F2_S2_P2119').val());
    campo2120=$.trim($('#txt_F2_S2_P2120').val());
   	suma=eliminar_miles(campo2112)+eliminar_miles(campo2113)+eliminar_miles(campo2114)+eliminar_miles(campo2115)+eliminar_miles(campo2116)+eliminar_miles(campo2117)+eliminar_miles(campo2118)+eliminar_miles(campo2119);
 
            if ( eliminar_miles(campo2120) == 0 && suma > 0 )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2112').focus();
						$('#txt_F2_S2_P2112').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2121').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa personas que trabajaron pero no informa pago de remuneraciones.");
                    $('#txt_F2_S2_P2112').focus();
                    $('#txt_F2_S2_P2112').select();
                    return false;
					}
            }  

    }  
    //Regla 74
 if ($(campo_j).attr('id')=='txt_F2_S2_P2129')
    {
    campo2121=$.trim($('#txt_F2_S2_P2121').val());
    campo2122=$.trim($('#txt_F2_S2_P2122').val());
    campo2123=$.trim($('#txt_F2_S2_P2123').val());
    campo2124=$.trim($('#txt_F2_S2_P2124').val());
    campo2125=$.trim($('#txt_F2_S2_P2125').val());
    campo2126=$.trim($('#txt_F2_S2_P2126').val());
    campo2127=$.trim($('#txt_F2_S2_P2127').val());
    campo2128=$.trim($('#txt_F2_S2_P2128').val());
    campo2129=$.trim($('#txt_F2_S2_P2129').val());
   	suma=eliminar_miles(campo2121)+eliminar_miles(campo2122)+eliminar_miles(campo2123)+eliminar_miles(campo2124)+eliminar_miles(campo2125)+eliminar_miles(campo2126)+eliminar_miles(campo2127)+eliminar_miles(campo2128);
 
            if ( eliminar_miles(campo2129) > 0 && suma == 0 )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa remuneraciones pero no informa personas que trabajaron.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2121').focus();
						$('#txt_F2_S2_P2121').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2130').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa remuneraciones pero no informa personas que trabajaron.");
                    $('#txt_F2_S2_P2121').focus();
                     $('#txt_F2_S2_P2121').select();
                    return false;
					}
            }  

    }  
	//Regla 75
 if ($(campo_j).attr('id')=='txt_F2_S2_P2129')
    {
    campo2121=$.trim($('#txt_F2_S2_P2121').val());
    campo2122=$.trim($('#txt_F2_S2_P2122').val());
    campo2123=$.trim($('#txt_F2_S2_P2123').val());
    campo2124=$.trim($('#txt_F2_S2_P2124').val());
    campo2125=$.trim($('#txt_F2_S2_P2125').val());
    campo2126=$.trim($('#txt_F2_S2_P2126').val());
    campo2127=$.trim($('#txt_F2_S2_P2127').val());
    campo2128=$.trim($('#txt_F2_S2_P2128').val());
    campo2129=$.trim($('#txt_F2_S2_P2129').val());
   	suma=eliminar_miles(campo2121)+eliminar_miles(campo2122)+eliminar_miles(campo2123)+eliminar_miles(campo2124)+eliminar_miles(campo2125)+eliminar_miles(campo2126)+eliminar_miles(campo2127)+eliminar_miles(campo2128);
 
            if ( eliminar_miles(campo2129) == 0 && suma > 0 )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2121').focus();
						$('#txt_F2_S2_P2121').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2130').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa personas que trabajaron pero no informa pago de remuneraciones.");
                    $('#txt_F2_S2_P2121').focus();
                     $('#txt_F2_S2_P2121').select();
                    return false;
					}
            }  

    }  
    //Regla 76
 if ($(campo_j).attr('id')=='txt_F2_S2_P2130')
    {
    campo2085=$.trim($('#txt_F2_S2_P2085').val());
    campo2094=$.trim($('#txt_F2_S2_P2094').val());
    campo2103=$.trim($('#txt_F2_S2_P2103').val());
    campo2112=$.trim($('#txt_F2_S2_P2112').val());
    campo2121=$.trim($('#txt_F2_S2_P2121').val());
    campo2130=$.trim($('#txt_F2_S2_P2130').val());
	suma=eliminar_miles(campo2085)+eliminar_miles(campo2094)+eliminar_miles(campo2103)+eliminar_miles(campo2112)+eliminar_miles(campo2121);
             if ( eliminar_miles(campo2130) != suma)
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control no cuadra 2130.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2085').focus();
						$('#txt_F2_S2_P2085').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2131').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total control no cuadra 2130.");
                    $('#txt_F2_S2_P2085').focus();
                     $('#txt_F2_S2_P2085').select();
                    return false;
					}
            }  

    }  
//Regla 77
 if ($(campo_j).attr('id')=='txt_F2_S2_P2131')
    {
    campo2086=$.trim($('#txt_F2_S2_P2086').val());
    campo2095=$.trim($('#txt_F2_S2_P2095').val());
    campo2104=$.trim($('#txt_F2_S2_P2104').val());
    campo2113=$.trim($('#txt_F2_S2_P2113').val());
    campo2122=$.trim($('#txt_F2_S2_P2122').val());
    campo2131=$.trim($('#txt_F2_S2_P2131').val());
	suma=eliminar_miles(campo2086)+eliminar_miles(campo2095)+eliminar_miles(campo2104)+eliminar_miles(campo2113)+eliminar_miles(campo2122);
             if ( eliminar_miles(campo2131) != suma)
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control no cuadra 2131.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2086').focus();
						$('#txt_F2_S2_P2086').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2132').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total control no cuadra 2131.");
                    $('#txt_F2_S2_P2086').focus();
                     $('#txt_F2_S2_P2086').select();
                    return false;
					}
            }  

    }  
//Regla 78
 if ($(campo_j).attr('id')=='txt_F2_S2_P2132')
    {
    campo2087=$.trim($('#txt_F2_S2_P2087').val());
    campo2096=$.trim($('#txt_F2_S2_P2096').val());
    campo2105=$.trim($('#txt_F2_S2_P2105').val());
    campo2114=$.trim($('#txt_F2_S2_P2114').val());
    campo2123=$.trim($('#txt_F2_S2_P2123').val());
    campo2132=$.trim($('#txt_F2_S2_P2132').val());
	suma=eliminar_miles(campo2087)+eliminar_miles(campo2096)+eliminar_miles(campo2105)+eliminar_miles(campo2114)+eliminar_miles(campo2123);
             if ( eliminar_miles(campo2132) != suma)
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control no cuadra 2132.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2087').focus();
						$('#txt_F2_S2_P2087').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2133').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total control no cuadra 2132.");
                    $('#txt_F2_S2_P2087').focus();
                     $('#txt_F2_S2_P2087').select();
                    return false;
					}
            }  

    }  
//Regla 79
 if ($(campo_j).attr('id')=='txt_F2_S2_P2133')
    {
    campo2088=$.trim($('#txt_F2_S2_P2088').val());
    campo2097=$.trim($('#txt_F2_S2_P2097').val());
    campo2106=$.trim($('#txt_F2_S2_P2106').val());
    campo2115=$.trim($('#txt_F2_S2_P2115').val());
    campo2124=$.trim($('#txt_F2_S2_P2124').val());
    campo2133=$.trim($('#txt_F2_S2_P2133').val());
	suma=eliminar_miles(campo2088)+eliminar_miles(campo2097)+eliminar_miles(campo2106)+eliminar_miles(campo2115)+eliminar_miles(campo2124);
             if ( eliminar_miles(campo2133) != suma)
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control no cuadra 2133.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2088').focus();
						$('#txt_F2_S2_P2088').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2134').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total control no cuadra 2133.");
                    $('#txt_F2_S2_P2088').focus();
                     $('#txt_F2_S2_P2088').select();
                    return false;
					}
            }  

    }  
//Regla 80
 if ($(campo_j).attr('id')=='txt_F2_S2_P2134')
    {
    campo2089=$.trim($('#txt_F2_S2_P2089').val());
    campo2098=$.trim($('#txt_F2_S2_P2098').val());
    campo2107=$.trim($('#txt_F2_S2_P2107').val());
    campo2116=$.trim($('#txt_F2_S2_P2116').val());
    campo2125=$.trim($('#txt_F2_S2_P2125').val());
    campo2134=$.trim($('#txt_F2_S2_P2134').val());
	suma=eliminar_miles(campo2089)+eliminar_miles(campo2098)+eliminar_miles(campo2107)+eliminar_miles(campo2116)+eliminar_miles(campo2125);
             if ( eliminar_miles(campo2134) != suma)
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control no cuadra 2134.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2089').focus();
						$('#txt_F2_S2_P2089').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2135').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total control no cuadra 2134.");
                    $('#txt_F2_S2_P2089').focus();
                     $('#txt_F2_S2_P2089').select();
                    return false;
					}
            }  

    }  
//Regla 81
 if ($(campo_j).attr('id')=='txt_F2_S2_P2135')
    {
    campo2090=$.trim($('#txt_F2_S2_P2090').val());
    campo2099=$.trim($('#txt_F2_S2_P2099').val());
    campo2108=$.trim($('#txt_F2_S2_P2108').val());
    campo2117=$.trim($('#txt_F2_S2_P2117').val());
    campo2126=$.trim($('#txt_F2_S2_P2126').val());
    campo2135=$.trim($('#txt_F2_S2_P2135').val());
	suma=eliminar_miles(campo2090)+eliminar_miles(campo2099)+eliminar_miles(campo2108)+eliminar_miles(campo2117)+eliminar_miles(campo2126);
             if ( eliminar_miles(campo2135) != suma)
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control no cuadra 2135.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2090').focus();
						$('#txt_F2_S2_P2090').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2136').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total control no cuadra 2135.");
                    $('#txt_F2_S2_P2090').focus();
                     $('#txt_F2_S2_P2090').select();
                    return false;
					}
            }  

    }  
//Regla 82
 if ($(campo_j).attr('id')=='txt_F2_S2_P2136')
    {
    campo2091=$.trim($('#txt_F2_S2_P2091').val());
    campo2100=$.trim($('#txt_F2_S2_P2100').val());
    campo2109=$.trim($('#txt_F2_S2_P2109').val());
    campo2118=$.trim($('#txt_F2_S2_P2118').val());
    campo2127=$.trim($('#txt_F2_S2_P2127').val());
    campo2136=$.trim($('#txt_F2_S2_P2136').val());
	suma=eliminar_miles(campo2091)+eliminar_miles(campo2100)+eliminar_miles(campo2109)+eliminar_miles(campo2118)+eliminar_miles(campo2127);
             if ( eliminar_miles(campo2136) != suma)
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control no cuadra 2136.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2091').focus();
						$('#txt_F2_S2_P2091').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2137').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total control no cuadra 2136.");
                    $('#txt_F2_S2_P2091').focus();
                     $('#txt_F2_S2_P2091').select();
                    return false;
					}
            }  

    }  
    //Regla 83
 if ($(campo_j).attr('id')=='txt_F2_S2_P2137')
    {
    campo2092=$.trim($('#txt_F2_S2_P2092').val());
    campo2101=$.trim($('#txt_F2_S2_P2101').val());
    campo2110=$.trim($('#txt_F2_S2_P2110').val());
    campo2119=$.trim($('#txt_F2_S2_P2119').val());
    campo2128=$.trim($('#txt_F2_S2_P2128').val());
    campo2137=$.trim($('#txt_F2_S2_P2137').val());
	suma=eliminar_miles(campo2092)+eliminar_miles(campo2101)+eliminar_miles(campo2110)+eliminar_miles(campo2119)+eliminar_miles(campo2128);
             if ( eliminar_miles(campo2137) != suma)
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control no cuadra 2137.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2092').focus();
						$('#txt_F2_S2_P2092').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2138').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total control no cuadra 2137.");
                    $('#txt_F2_S2_P2092').focus();
                     $('#txt_F2_S2_P2092').select();
                    return false;
					}
            }  

    }  
    //Regla 84
 if ($(campo_j).attr('id')=='txt_F2_S2_P2138')
    {
    campo2093=$.trim($('#txt_F2_S2_P2093').val());
    campo2102=$.trim($('#txt_F2_S2_P2102').val());
    campo2111=$.trim($('#txt_F2_S2_P2111').val());
    campo2120=$.trim($('#txt_F2_S2_P2120').val());
    campo2129=$.trim($('#txt_F2_S2_P2129').val());
    campo2138=$.trim($('#txt_F2_S2_P2138').val());
	suma=eliminar_miles(campo2093)+eliminar_miles(campo2102)+eliminar_miles(campo2111)+eliminar_miles(campo2120)+eliminar_miles(campo2129);
             if ( eliminar_miles(campo2138) != suma)
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control no cuadra 2138.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2093').focus();
						$('#txt_F2_S2_P2093').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2139').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total control no cuadra 2138.");
                    $('#txt_F2_S2_P2093').focus();
                     $('#txt_F2_S2_P2093').select();
                    return false;
					}
            }  

    }  
         // Regla 85
if ($(campo_j).attr('id')=='txt_F2_S2_P2138')
    {
	suma=0
	for (i=85;i<139;i++)
	{
			if (i<100)
			{
			campo=$.trim($('#txt_F2_S2_P20'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F2_S2_P2'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                   if(!confirm('Advertencia: No informa personal subcontratado por la empresa y/o establecimientos.\n ¿Desea continuar?')){
                    $('#txt_F2_S2_P2085').focus();
                    $('#txt_F2_S2_P2085').select();
                    return false;
                    }else{
                    flag_2 = true;
                    $('#txt_F2_S2_P2139').focus();
                    return false;
                    }
                }
    }
   //Regla 86
 if ($(campo_j).attr('id')=='txt_F2_S2_P2147')
    {
    campo2139=$.trim($('#txt_F2_S2_P2139').val());
    campo2140=$.trim($('#txt_F2_S2_P2140').val());
    campo2141=$.trim($('#txt_F2_S2_P2141').val());
    campo2142=$.trim($('#txt_F2_S2_P2142').val());
    campo2143=$.trim($('#txt_F2_S2_P2143').val());
    campo2144=$.trim($('#txt_F2_S2_P2144').val());
    campo2145=$.trim($('#txt_F2_S2_P2145').val());
    campo2146=$.trim($('#txt_F2_S2_P2146').val());
    campo2147=$.trim($('#txt_F2_S2_P2147').val());
   	suma=eliminar_miles(campo2139)+eliminar_miles(campo2140)+eliminar_miles(campo2141)+eliminar_miles(campo2142)+eliminar_miles(campo2143)+eliminar_miles(campo2144)+eliminar_miles(campo2145)+eliminar_miles(campo2146);
 
            if ( eliminar_miles(campo2147) > 0 && suma == 0 )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa Honorarios pero no informa personas que trabajaron.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2039').focus();
						$('#txt_F2_S2_P2039').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2148').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa Honorarios pero no informa personas que trabajaron.");
                    $('#txt_F2_S2_P2139').focus();
                     $('#txt_F2_S2_P2139').select();
                    return false;
					}
            }  

    }  
	//Regla 87
 if ($(campo_j).attr('id')=='txt_F2_S2_P2147')
    {
    campo2139=$.trim($('#txt_F2_S2_P2139').val());
    campo2140=$.trim($('#txt_F2_S2_P2140').val());
    campo2141=$.trim($('#txt_F2_S2_P2141').val());
    campo2142=$.trim($('#txt_F2_S2_P2142').val());
    campo2143=$.trim($('#txt_F2_S2_P2143').val());
    campo2144=$.trim($('#txt_F2_S2_P2144').val());
    campo2145=$.trim($('#txt_F2_S2_P2145').val());
    campo2146=$.trim($('#txt_F2_S2_P2146').val());
    campo2147=$.trim($('#txt_F2_S2_P2147').val());
   	suma=eliminar_miles(campo2139)+eliminar_miles(campo2140)+eliminar_miles(campo2141)+eliminar_miles(campo2142)+eliminar_miles(campo2143)+eliminar_miles(campo2144)+eliminar_miles(campo2145)+eliminar_miles(campo2146);
 
            if ( eliminar_miles(campo2147) == 0 && suma > 0 )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa personas que trabajaron pero no informa pago de honorarios.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2039').focus();
						$('#txt_F2_S2_P2039').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2148').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa personas que trabajaron pero no informa pago de honorarios.");
                    $('#txt_F2_S2_P2139').focus();
                     $('#txt_F2_S2_P2139').select();
                    return false;
					}
            }  

    }  
   //Regla 88
 if ($(campo_j).attr('id')=='txt_F2_S2_P2150')
    {
    campo2148=$.trim($('#txt_F2_S2_P2148').val());
    campo2149=$.trim($('#txt_F2_S2_P2149').val());
    campo2150=$.trim($('#txt_F2_S2_P2150').val());
   	suma=eliminar_miles(campo2148)+eliminar_miles(campo2149)+eliminar_miles(campo2150);
 
            if ( suma == 0 )
            {
                    if(!confirm('Advertencia: No informa costos laborales área informática.\n ¿Desea continuar?')){
                    $('#txt_F2_S2_P2148').focus();
                    $('#txt_F2_S2_P2148').select();
                    return false;
                    }else{
                    flag_2 = true;
                    $('#txt_F2_S3_P301').focus();
                    return false;
                    }
            }  

    }  
   //Regla 89
 if ($(campo_j).attr('id')=='txt_F2_S3_P302')
    {
    campo301=$.trim($('#txt_F2_S3_P301').val());
    campo302=$.trim($('#txt_F2_S3_P302').val());
   
            if (eliminar_miles(campo301) > 0 )
			{
				if ( eliminar_decimales(campo302)<0 || eliminar_decimales(campo302)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades manufactureras fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P303').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades manufactureras fuera de rango (0% a 100%).");
                    $(campo_j).focus();
                     $(campo_j).select();
                    return false;
					}
				}	
			}  
    }  
   //Regla 90
 if ($(campo_j).attr('id')=='txt_F2_S3_P304')
    {
    campo303=$.trim($('#txt_F2_S3_P303').val());
    campo304=$.trim($('#txt_F2_S3_P304').val());
   
            if (eliminar_miles(campo303) > 0 )
			{
				if ( eliminar_decimales(campo304)<0 || eliminar_decimales(campo304)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de agricultura fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P305').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de agricultura fuera de rango (0% a 100%).");
                    $(campo_j).focus();
                     $(campo_j).select();
                    return false;
					}
				}	
			}  
    }  
   //Regla 91
 if ($(campo_j).attr('id')=='txt_F2_S3_P306')
    {
    campo305=$.trim($('#txt_F2_S3_P305').val());
    campo306=$.trim($('#txt_F2_S3_P306').val());
   
            if (eliminar_miles(campo305) > 0 )
			{
				if ( eliminar_decimales(campo306)<0 || eliminar_decimales(campo306)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de pesca fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P307').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de pesca fuera de rango (0% a 100%).");
                    $(campo_j).focus();
                     $(campo_j).select();
                    return false;
					}
				}	
			}  
    }  
   //Regla 92 
 if ($(campo_j).attr('id')=='txt_F2_S3_P308')
    {
    campo307=$.trim($('#txt_F2_S3_P307').val());
    campo308=$.trim($('#txt_F2_S3_P308').val());
   
            if (eliminar_miles(campo307) > 0 )
			{
				if ( eliminar_decimales(campo308)<0 || eliminar_decimales(campo308)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de minería fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P309').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de minería fuera de rango (0% a 100%).");
                    $(campo_j).focus();
                     $(campo_j).select();
                    return false;
					}
				}	
			}  
    }  
   //Regla 93
 if ($(campo_j).attr('id')=='txt_F2_S3_P310')
    {
    campo309=$.trim($('#txt_F2_S3_P309').val());
    campo310=$.trim($('#txt_F2_S3_P310').val());
   
            if (eliminar_miles(campo309) > 0 )
			{
				if ( eliminar_decimales(campo310)<0 || eliminar_decimales(campo310)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de electricidad fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P311').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de electricidad fuera de rango (0% a 100%).");
                    $(campo_j).focus();
                     $(campo_j).select();
                    return false;
					}
				}	
			}  
    }  
   //Regla 94
 if ($(campo_j).attr('id')=='txt_F2_S3_P312')
    {
    campo311=$.trim($('#txt_F2_S3_P311').val());
    campo312=$.trim($('#txt_F2_S3_P312').val());
   
            if (eliminar_miles(campo311) > 0 )
			{
				if ( eliminar_decimales(campo312)<0 || eliminar_decimales(campo312)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de construcción fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P313').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de construcción fuera de rango (0% a 100%).");
                    $(campo_j).focus();
                     $(campo_j).select();
                    return false;
					}
				}	
			}  
    }  
   //Regla 95
 if ($(campo_j).attr('id')=='txt_F2_S3_P314')
    {
    campo313=$.trim($('#txt_F2_S3_P313').val());
    campo314=$.trim($('#txt_F2_S3_P314').val());
   
            if (eliminar_miles(campo313) > 0 )
			{
				if ( eliminar_decimales(campo314)<0 || eliminar_decimales(campo314)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentanje de sobretasa articulos comprados para la reventa fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P315').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Porcentanje de sobretasa articulos comprados para la reventa fuera de rango (0% a 100%).");
                    $(campo_j).focus();
                     $(campo_j).select();
                    return false;
					}
				}	
			}  
    }  
   //Regla 96
 if ($(campo_j).attr('id')=='txt_F2_S3_P316')
    {
    campo315=$.trim($('#txt_F2_S3_P315').val());
    campo316=$.trim($('#txt_F2_S3_P316').val());
   
            if (eliminar_miles(campo315) > 0 )
			{
				if ( eliminar_decimales(campo316)<0 || eliminar_decimales(campo316)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para prestación de servicios fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P317').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para prestación de servicios fuera de rango (0% a 100%).");
                    $(campo_j).focus();
                     $(campo_j).select();
                    return false;
					}
				}	
			}  
    }  
       //Regla 97
 if ($(campo_j).attr('id')=='txt_F2_S3_P318')
    {
    campo317=$.trim($('#txt_F2_S3_P317').val());
    campo318=$.trim($('#txt_F2_S3_P318').val());
   
            if (eliminar_miles(campo317) > 0 )
			{
				if ( eliminar_decimales(campo318)<0 || eliminar_decimales(campo318)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Porcentanje de sobretase compra de materias primas, materiales e insumos, no indicadas en categorias anteriores fuera de rango (0% a 100%).\n ¿Desea continuar?'))
						{
						$(campo_j).focus();
						$(campo_j).select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P319').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Porcentanje de sobretase compra de materias primas, materiales e insumos, no indicadas en categorias anteriores fuera de rango (0% a 100%).");
                    $(campo_j).focus();
                     $(campo_j).select();
                    return false;
					}
				}	
			}  
    }  
   //Regla 98
 if ($(campo_j).attr('id')=='txt_F2_S3_P321')
    {
    campo301=$.trim($('#txt_F2_S3_P301').val());
    campo303=$.trim($('#txt_F2_S3_P303').val());
    campo305=$.trim($('#txt_F2_S3_P305').val());
    campo307=$.trim($('#txt_F2_S3_P307').val());
    campo309=$.trim($('#txt_F2_S3_P309').val());
    campo311=$.trim($('#txt_F2_S3_P311').val());
    campo313=$.trim($('#txt_F2_S3_P313').val());
    campo315=$.trim($('#txt_F2_S3_P315').val());
	campo317=$.trim($('#txt_F2_S3_P317').val());
    campo321=$.trim($('#txt_F2_S3_P321').val());
   	suma=eliminar_miles(campo301)+eliminar_miles(campo303)+eliminar_miles(campo305)+eliminar_miles(campo307)+eliminar_miles(campo309)+eliminar_miles(campo311)+eliminar_miles(campo313)+eliminar_miles(campo315)+eliminar_miles(campo317);
        if ( eliminar_miles(campo321) > suma )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Productos importados superior a total valor compras.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P301').focus();
						$('#txt_F2_S3_P301').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S3_P322').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Productos importados superior a total valor compras.");
                    $('#txt_F2_S3_P301').focus();
                     $('#txt_F2_S3_P301').select();
                    return false;
					}
            }  

    }  
       //Regla 99
 if ($(campo_j).attr('id')=='txt_F2_S3_P322')
    {
    campo301=$.trim($('#txt_F2_S3_P301').val());
    campo303=$.trim($('#txt_F2_S3_P303').val());
    campo305=$.trim($('#txt_F2_S3_P305').val());
    campo307=$.trim($('#txt_F2_S3_P307').val());
    campo309=$.trim($('#txt_F2_S3_P309').val());
    campo311=$.trim($('#txt_F2_S3_P311').val());
    campo313=$.trim($('#txt_F2_S3_P313').val());
    campo315=$.trim($('#txt_F2_S3_P315').val());
	campo317=$.trim($('#txt_F2_S3_P317').val());
	campo319=$.trim($('#txt_F2_S3_P319').val());
	campo320=$.trim($('#txt_F2_S3_P320').val());
    campo321=$.trim($('#txt_F2_S3_P321').val());
	campo322=$.trim($('#txt_F2_S3_P322').val());
   	suma=eliminar_miles(campo301)+eliminar_miles(campo303)+eliminar_miles(campo305)+eliminar_miles(campo307)+eliminar_miles(campo309)+eliminar_miles(campo311)+eliminar_miles(campo313)+eliminar_miles(campo315)+eliminar_miles(campo317)+eliminar_miles(campo319)+eliminar_miles(campo320)+eliminar_miles(campo321);
        if ( eliminar_miles(campo322) != suma )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total control valores netos en moneda utilizada sección III.A no cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P301').focus();
						$('#txt_F2_S3_P301').select();
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
                    alert("Error: Total control valores netos en moneda utilizada sección III.A no cuadra.");
                    $('#txt_F2_S3_P301').focus();
                     $('#txt_F2_S3_P301').select();
                    return false;
					}
            }  

    }  
       //Regla 100
 if ($(campo_j).attr('id')=='txt_F2_S3_P322')
    {
    campo301=$.trim($('#txt_F2_S3_P301').val());
	campo302=$.trim($('#txt_F2_S3_P302').val());
    campo303=$.trim($('#txt_F2_S3_P303').val());
	campo304=$.trim($('#txt_F2_S3_P304').val());
    campo305=$.trim($('#txt_F2_S3_P305').val());
	campo306=$.trim($('#txt_F2_S3_P306').val());
    campo307=$.trim($('#txt_F2_S3_P307').val());
    campo308=$.trim($('#txt_F2_S3_P308').val());
	campo309=$.trim($('#txt_F2_S3_P309').val());
	campo310=$.trim($('#txt_F2_S3_P310').val());
    campo311=$.trim($('#txt_F2_S3_P311').val());
	campo312=$.trim($('#txt_F2_S3_P312').val());
    campo313=$.trim($('#txt_F2_S3_P313').val());
	campo314=$.trim($('#txt_F2_S3_P314').val());
    campo315=$.trim($('#txt_F2_S3_P315').val());
	campo316=$.trim($('#txt_F2_S3_P316').val());
	campo317=$.trim($('#txt_F2_S3_P317').val());
	campo318=$.trim($('#txt_F2_S3_P318').val());
	campo319=$.trim($('#txt_F2_S3_P319').val());
	campo320=$.trim($('#txt_F2_S3_P320').val());
    campo321=$.trim($('#txt_F2_S3_P321').val());
	campo322=$.trim($('#txt_F2_S3_P322').val());
   	suma=eliminar_miles(campo301)+eliminar_miles(campo303)+eliminar_miles(campo305)+eliminar_miles(campo307)+eliminar_miles(campo309)+eliminar_miles(campo311)+eliminar_miles(campo313)+eliminar_miles(campo315)+eliminar_miles(campo317)+eliminar_miles(campo319)+eliminar_miles(campo320)+eliminar_miles(campo321)+eliminar_miles(campo322);
	suma2=eliminar_decimales(campo302)+eliminar_decimales(campo304)+eliminar_decimales(campo306)+eliminar_decimales(campo308)+eliminar_decimales(campo310)+eliminar_decimales(campo312)+eliminar_decimales(campo314)+eliminar_decimales(campo316)+eliminar_decimales(campo318);
	 total=parseFloat(suma)+parseFloat(suma2);
	 
	 if ( total==0 )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: No informa compras de materias primas, materiales y costos.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S3_P301').focus();
						$('#txt_F2_S3_P301').select();
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
                    alert("Error: No informa compras de materias primas, materiales y costos");
                    $('#txt_F2_S3_P301').focus();
                     $('#txt_F2_S3_P301').select();
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
   //Regla 66   
 if ($(campo_j).attr('id')=='txt_F2_S2_P2093')
    {
    campo2085=$.trim($('#txt_F2_S2_P2085').val());
    campo2086=$.trim($('#txt_F2_S2_P2086').val());
    campo2087=$.trim($('#txt_F2_S2_P2087').val());
    campo2088=$.trim($('#txt_F2_S2_P2088').val());
    campo2089=$.trim($('#txt_F2_S2_P2089').val());
    campo2090=$.trim($('#txt_F2_S2_P2090').val());
    campo2091=$.trim($('#txt_F2_S2_P2091').val());
    campo2092=$.trim($('#txt_F2_S2_P2092').val());
    campo2093=$.trim($('#txt_F2_S2_P2093').val());
   	suma=eliminar_miles(campo2085)+eliminar_miles(campo2086)+eliminar_miles(campo2087)+eliminar_miles(campo2088)+eliminar_miles(campo2089)+eliminar_miles(campo2090)+eliminar_miles(campo2091)+eliminar_miles(campo2092);
 
            if ( eliminar_miles(campo2093) > 0 && suma == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2093 - Advertencia: Informa remuneraciones pero no informa personas que trabajaron. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2093 - Error: Informa remuneraciones pero no informa personas que trabajaron. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}					
            }  

    }  
	//Regla 67  
 if ($(campo_j).attr('id')=='txt_F2_S2_P2093')
    {
    campo2085=$.trim($('#txt_F2_S2_P2085').val());
    campo2086=$.trim($('#txt_F2_S2_P2086').val());
    campo2087=$.trim($('#txt_F2_S2_P2087').val());
    campo2088=$.trim($('#txt_F2_S2_P2088').val());
    campo2089=$.trim($('#txt_F2_S2_P2089').val());
    campo2090=$.trim($('#txt_F2_S2_P2090').val());
    campo2091=$.trim($('#txt_F2_S2_P2091').val());
    campo2092=$.trim($('#txt_F2_S2_P2092').val());
    campo2093=$.trim($('#txt_F2_S2_P2093').val());
   	suma=eliminar_miles(campo2085)+eliminar_miles(campo2086)+eliminar_miles(campo2087)+eliminar_miles(campo2088)+eliminar_miles(campo2089)+eliminar_miles(campo2090)+eliminar_miles(campo2091)+eliminar_miles(campo2092);
 
            if ( eliminar_miles(campo2093) == 0 && suma > 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2093 - Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2093 - Error: Informa personas que trabajaron pero no informa pago de remuneraciones. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}					
            }  

    }  
    //Regla 68 
 if ($(campo_j).attr('id')=='txt_F2_S2_P2102')
    {
    campo2094=$.trim($('#txt_F2_S2_P2094').val());
    campo2095=$.trim($('#txt_F2_S2_P2095').val());
    campo2096=$.trim($('#txt_F2_S2_P2096').val());
    campo2097=$.trim($('#txt_F2_S2_P2097').val());
    campo2098=$.trim($('#txt_F2_S2_P2098').val());
    campo2099=$.trim($('#txt_F2_S2_P2099').val());
    campo2100=$.trim($('#txt_F2_S2_P2100').val());
    campo2101=$.trim($('#txt_F2_S2_P2101').val());
    campo2102=$.trim($('#txt_F2_S2_P2102').val());
   	suma=eliminar_miles(campo2094)+eliminar_miles(campo2095)+eliminar_miles(campo2096)+eliminar_miles(campo2097)+eliminar_miles(campo2098)+eliminar_miles(campo2099)+eliminar_miles(campo2100)+eliminar_miles(campo2101);
 
            if ( eliminar_miles(campo2102) > 0 && suma == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2102 - Advertencia: Informa remuneraciones pero no informa personas que trabajaron. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2102 - Error: Informa remuneraciones pero no informa personas que trabajaron. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}					
            }  

    }  
	//Regla 69 
 if ($(campo_j).attr('id')=='txt_F2_S2_P2102')
    {
    campo2094=$.trim($('#txt_F2_S2_P2094').val());
    campo2095=$.trim($('#txt_F2_S2_P2095').val());
    campo2096=$.trim($('#txt_F2_S2_P2096').val());
    campo2097=$.trim($('#txt_F2_S2_P2097').val());
    campo2098=$.trim($('#txt_F2_S2_P2098').val());
    campo2099=$.trim($('#txt_F2_S2_P2099').val());
    campo2100=$.trim($('#txt_F2_S2_P2100').val());
    campo2101=$.trim($('#txt_F2_S2_P2101').val());
    campo2102=$.trim($('#txt_F2_S2_P2102').val());
   	suma=eliminar_miles(campo2094)+eliminar_miles(campo2095)+eliminar_miles(campo2096)+eliminar_miles(campo2097)+eliminar_miles(campo2098)+eliminar_miles(campo2099)+eliminar_miles(campo2100)+eliminar_miles(campo2101);
 
            if ( eliminar_miles(campo2102) == 0 && suma > 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2102 - Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2102 - Error: Informa personas que trabajaron pero no informa pago de remuneraciones. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}					
            }  

    }  
    //Regla 70
 if ($(campo_j).attr('id')=='txt_F2_S2_P2111')
    {
    campo2103=$.trim($('#txt_F2_S2_P2103').val());
    campo2104=$.trim($('#txt_F2_S2_P2104').val());
    campo2105=$.trim($('#txt_F2_S2_P2105').val());
    campo2106=$.trim($('#txt_F2_S2_P2106').val());
    campo2107=$.trim($('#txt_F2_S2_P2107').val());
    campo2108=$.trim($('#txt_F2_S2_P2108').val());
    campo2109=$.trim($('#txt_F2_S2_P2109').val());
    campo2110=$.trim($('#txt_F2_S2_P2110').val());
    campo2111=$.trim($('#txt_F2_S2_P2111').val());
   	suma=eliminar_miles(campo2103)+eliminar_miles(campo2104)+eliminar_miles(campo2105)+eliminar_miles(campo2106)+eliminar_miles(campo2107)+eliminar_miles(campo2108)+eliminar_miles(campo2109)+eliminar_miles(campo2110);
 
            if ( eliminar_miles(campo2111) > 0 && suma == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2111 - Advertencia: Informa remuneraciones pero no informa personas que trabajaron. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2111 - Error: Informa remuneraciones pero no informa personas que trabajaron. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}					
            }  

    }  
	//Regla 71
 if ($(campo_j).attr('id')=='txt_F2_S2_P2111')
    {
    campo2103=$.trim($('#txt_F2_S2_P2103').val());
    campo2104=$.trim($('#txt_F2_S2_P2104').val());
    campo2105=$.trim($('#txt_F2_S2_P2105').val());
    campo2106=$.trim($('#txt_F2_S2_P2106').val());
    campo2107=$.trim($('#txt_F2_S2_P2107').val());
    campo2108=$.trim($('#txt_F2_S2_P2108').val());
    campo2109=$.trim($('#txt_F2_S2_P2109').val());
    campo2110=$.trim($('#txt_F2_S2_P2110').val());
    campo2111=$.trim($('#txt_F2_S2_P2111').val());
   	suma=eliminar_miles(campo2103)+eliminar_miles(campo2104)+eliminar_miles(campo2105)+eliminar_miles(campo2106)+eliminar_miles(campo2107)+eliminar_miles(campo2108)+eliminar_miles(campo2109)+eliminar_miles(campo2110);
 
            if ( eliminar_miles(campo2111) == 0 && suma > 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2111 - Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2111 - Error: Informa personas que trabajaron pero no informa pago de remuneraciones. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}					
            }  

    }  
    //Regla 72
 if ($(campo_j).attr('id')=='txt_F2_S2_P2120')
    {
    campo2112=$.trim($('#txt_F2_S2_P2112').val());
    campo2113=$.trim($('#txt_F2_S2_P2113').val());
    campo2114=$.trim($('#txt_F2_S2_P2114').val());
    campo2115=$.trim($('#txt_F2_S2_P2115').val());
    campo2116=$.trim($('#txt_F2_S2_P2116').val());
    campo2117=$.trim($('#txt_F2_S2_P2117').val());
    campo2118=$.trim($('#txt_F2_S2_P2118').val());
    campo2119=$.trim($('#txt_F2_S2_P2119').val());
    campo2120=$.trim($('#txt_F2_S2_P2120').val());
   	suma=eliminar_miles(campo2112)+eliminar_miles(campo2113)+eliminar_miles(campo2114)+eliminar_miles(campo2115)+eliminar_miles(campo2116)+eliminar_miles(campo2117)+eliminar_miles(campo2118)+eliminar_miles(campo2119);
 
            if ( eliminar_miles(campo2120) > 0 && suma == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2120 - Advertencia: Informa remuneraciones pero no informa personas que trabajaron. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2120 - Error: Informa remuneraciones pero no informa personas que trabajaron. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}					
            }  

    }  
	//Regla 73
 if ($(campo_j).attr('id')=='txt_F2_S2_P2120')
    {
    campo2112=$.trim($('#txt_F2_S2_P2112').val());
    campo2113=$.trim($('#txt_F2_S2_P2113').val());
    campo2114=$.trim($('#txt_F2_S2_P2114').val());
    campo2115=$.trim($('#txt_F2_S2_P2115').val());
    campo2116=$.trim($('#txt_F2_S2_P2116').val());
    campo2117=$.trim($('#txt_F2_S2_P2117').val());
    campo2118=$.trim($('#txt_F2_S2_P2118').val());
    campo2119=$.trim($('#txt_F2_S2_P2119').val());
    campo2120=$.trim($('#txt_F2_S2_P2120').val());
   	suma=eliminar_miles(campo2112)+eliminar_miles(campo2113)+eliminar_miles(campo2114)+eliminar_miles(campo2115)+eliminar_miles(campo2116)+eliminar_miles(campo2117)+eliminar_miles(campo2118)+eliminar_miles(campo2119);
 
            if ( eliminar_miles(campo2120) == 0 && suma > 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2120 - Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2120 - Error: Informa personas que trabajaron pero no informa pago de remuneraciones. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}					
            }  

    }  
    //Regla 74
 if ($(campo_j).attr('id')=='txt_F2_S2_P2129')
    {
    campo2121=$.trim($('#txt_F2_S2_P2121').val());
    campo2122=$.trim($('#txt_F2_S2_P2122').val());
    campo2123=$.trim($('#txt_F2_S2_P2123').val());
    campo2124=$.trim($('#txt_F2_S2_P2124').val());
    campo2125=$.trim($('#txt_F2_S2_P2125').val());
    campo2126=$.trim($('#txt_F2_S2_P2126').val());
    campo2127=$.trim($('#txt_F2_S2_P2127').val());
    campo2128=$.trim($('#txt_F2_S2_P2128').val());
    campo2129=$.trim($('#txt_F2_S2_P2129').val());
   	suma=eliminar_miles(campo2121)+eliminar_miles(campo2122)+eliminar_miles(campo2123)+eliminar_miles(campo2124)+eliminar_miles(campo2125)+eliminar_miles(campo2126)+eliminar_miles(campo2127)+eliminar_miles(campo2128);
 
            if ( eliminar_miles(campo2129) > 0 && suma == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2129 - Advertencia: Informa remuneraciones pero no informa personas que trabajaron. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2129 - Error: Informa remuneraciones pero no informa personas que trabajaron. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}					
            }  

    }  
	//Regla 75
 if ($(campo_j).attr('id')=='txt_F2_S2_P2129')
    {
    campo2121=$.trim($('#txt_F2_S2_P2121').val());
    campo2122=$.trim($('#txt_F2_S2_P2122').val());
    campo2123=$.trim($('#txt_F2_S2_P2123').val());
    campo2124=$.trim($('#txt_F2_S2_P2124').val());
    campo2125=$.trim($('#txt_F2_S2_P2125').val());
    campo2126=$.trim($('#txt_F2_S2_P2126').val());
    campo2127=$.trim($('#txt_F2_S2_P2127').val());
    campo2128=$.trim($('#txt_F2_S2_P2128').val());
    campo2129=$.trim($('#txt_F2_S2_P2129').val());
   	suma=eliminar_miles(campo2121)+eliminar_miles(campo2122)+eliminar_miles(campo2123)+eliminar_miles(campo2124)+eliminar_miles(campo2125)+eliminar_miles(campo2126)+eliminar_miles(campo2127)+eliminar_miles(campo2128);
 
            if ( eliminar_miles(campo2129) == 0 && suma > 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2129 - Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2129 - Error: Informa personas que trabajaron pero no informa pago de remuneraciones. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}					
            }  

    }  
    //Regla 76
 if ($(campo_j).attr('id')=='txt_F2_S2_P2130')
    {
    campo2085=$.trim($('#txt_F2_S2_P2085').val());
    campo2094=$.trim($('#txt_F2_S2_P2094').val());
    campo2103=$.trim($('#txt_F2_S2_P2103').val());
    campo2112=$.trim($('#txt_F2_S2_P2112').val());
    campo2121=$.trim($('#txt_F2_S2_P2121').val());
    campo2130=$.trim($('#txt_F2_S2_P2130').val());
	suma=eliminar_miles(campo2085)+eliminar_miles(campo2094)+eliminar_miles(campo2103)+eliminar_miles(campo2112)+eliminar_miles(campo2121);
             if ( eliminar_miles(campo2130) != suma)
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2130 - Advertencia: Total control no cuadra 2130. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2130 - Error: Total control no cuadra 2130. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
            }  

    }  
//Regla 77
 if ($(campo_j).attr('id')=='txt_F2_S2_P2131')
    {
    campo2086=$.trim($('#txt_F2_S2_P2086').val());
    campo2095=$.trim($('#txt_F2_S2_P2095').val());
    campo2104=$.trim($('#txt_F2_S2_P2104').val());
    campo2113=$.trim($('#txt_F2_S2_P2113').val());
    campo2122=$.trim($('#txt_F2_S2_P2122').val());
    campo2131=$.trim($('#txt_F2_S2_P2131').val());
	suma=eliminar_miles(campo2086)+eliminar_miles(campo2095)+eliminar_miles(campo2104)+eliminar_miles(campo2113)+eliminar_miles(campo2122);
             if ( eliminar_miles(campo2131) != suma)
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2131 - Advertencia: Total control no cuadra 2131. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2131 - Error: Total control no cuadra 2131. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}					
            }  

    }  
//Regla 78
 if ($(campo_j).attr('id')=='txt_F2_S2_P2132')
    {
    campo2087=$.trim($('#txt_F2_S2_P2087').val());
    campo2096=$.trim($('#txt_F2_S2_P2096').val());
    campo2105=$.trim($('#txt_F2_S2_P2105').val());
    campo2114=$.trim($('#txt_F2_S2_P2114').val());
    campo2123=$.trim($('#txt_F2_S2_P2123').val());
    campo2132=$.trim($('#txt_F2_S2_P2132').val());
	suma=eliminar_miles(campo2087)+eliminar_miles(campo2096)+eliminar_miles(campo2105)+eliminar_miles(campo2114)+eliminar_miles(campo2123);
             if ( eliminar_miles(campo2132) != suma)
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2132 - Advertencia: Total control no cuadra 2132. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2132 - Error: Total control no cuadra 2132. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}					
            }  

    }  
//Regla 79
 if ($(campo_j).attr('id')=='txt_F2_S2_P2133')
    {
    campo2088=$.trim($('#txt_F2_S2_P2088').val());
    campo2097=$.trim($('#txt_F2_S2_P2097').val());
    campo2106=$.trim($('#txt_F2_S2_P2106').val());
    campo2115=$.trim($('#txt_F2_S2_P2115').val());
    campo2124=$.trim($('#txt_F2_S2_P2124').val());
    campo2133=$.trim($('#txt_F2_S2_P2133').val());
	suma=eliminar_miles(campo2088)+eliminar_miles(campo2097)+eliminar_miles(campo2106)+eliminar_miles(campo2115)+eliminar_miles(campo2124);
             if ( eliminar_miles(campo2133) != suma)
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2133 - Advertencia: Total control no cuadra 2133. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2133 - Error: Total control no cuadra 2133. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
            }  

    }  
//Regla 80
 if ($(campo_j).attr('id')=='txt_F2_S2_P2134')
    {
    campo2089=$.trim($('#txt_F2_S2_P2089').val());
    campo2098=$.trim($('#txt_F2_S2_P2098').val());
    campo2107=$.trim($('#txt_F2_S2_P2107').val());
    campo2116=$.trim($('#txt_F2_S2_P2116').val());
    campo2125=$.trim($('#txt_F2_S2_P2125').val());
    campo2134=$.trim($('#txt_F2_S2_P2134').val());
	suma=eliminar_miles(campo2089)+eliminar_miles(campo2098)+eliminar_miles(campo2107)+eliminar_miles(campo2116)+eliminar_miles(campo2125);
             if ( eliminar_miles(campo2134) != suma)
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2134 - Advertencia: Total control no cuadra 2134. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2134 - Error: Total control no cuadra 2134. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
            }  

    }  
//Regla 81
 if ($(campo_j).attr('id')=='txt_F2_S2_P2135')
    {
    campo2090=$.trim($('#txt_F2_S2_P2090').val());
    campo2099=$.trim($('#txt_F2_S2_P2099').val());
    campo2108=$.trim($('#txt_F2_S2_P2108').val());
    campo2117=$.trim($('#txt_F2_S2_P2117').val());
    campo2126=$.trim($('#txt_F2_S2_P2126').val());
    campo2135=$.trim($('#txt_F2_S2_P2135').val());
	suma=eliminar_miles(campo2090)+eliminar_miles(campo2099)+eliminar_miles(campo2108)+eliminar_miles(campo2117)+eliminar_miles(campo2126);
             if ( eliminar_miles(campo2135) != suma)
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2135 - Advertencia: Total control no cuadra 2135. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2135 - Error: Total control no cuadra 2135. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
            }  

    }  
//Regla 82
 if ($(campo_j).attr('id')=='txt_F2_S2_P2136')
    {
    campo2091=$.trim($('#txt_F2_S2_P2091').val());
    campo2100=$.trim($('#txt_F2_S2_P2100').val());
    campo2109=$.trim($('#txt_F2_S2_P2109').val());
    campo2118=$.trim($('#txt_F2_S2_P2118').val());
    campo2127=$.trim($('#txt_F2_S2_P2127').val());
    campo2136=$.trim($('#txt_F2_S2_P2136').val());
	suma=eliminar_miles(campo2091)+eliminar_miles(campo2100)+eliminar_miles(campo2109)+eliminar_miles(campo2118)+eliminar_miles(campo2127);
             if ( eliminar_miles(campo2136) != suma)
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2136 - Advertencia: Total control no cuadra 2136. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2136 - Error: Total control no cuadra 2136. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}					
            }  

    }  
    //Regla 83
 if ($(campo_j).attr('id')=='txt_F2_S2_P2137')
    {
    campo2092=$.trim($('#txt_F2_S2_P2092').val());
    campo2101=$.trim($('#txt_F2_S2_P2101').val());
    campo2110=$.trim($('#txt_F2_S2_P2110').val());
    campo2119=$.trim($('#txt_F2_S2_P2119').val());
    campo2128=$.trim($('#txt_F2_S2_P2128').val());
    campo2137=$.trim($('#txt_F2_S2_P2137').val());
	suma=eliminar_miles(campo2092)+eliminar_miles(campo2101)+eliminar_miles(campo2110)+eliminar_miles(campo2119)+eliminar_miles(campo2128);
             if ( eliminar_miles(campo2137) != suma)
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2137 - Advertencia: Total control no cuadra 2137. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2137 - Error: Total control no cuadra 2137. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
            }  

    }  
    //Regla 84
 if ($(campo_j).attr('id')=='txt_F2_S2_P2138')
    {
    campo2093=$.trim($('#txt_F2_S2_P2093').val());
    campo2102=$.trim($('#txt_F2_S2_P2102').val());
    campo2111=$.trim($('#txt_F2_S2_P2111').val());
    campo2120=$.trim($('#txt_F2_S2_P2120').val());
    campo2129=$.trim($('#txt_F2_S2_P2129').val());
    campo2138=$.trim($('#txt_F2_S2_P2138').val());
	suma=eliminar_miles(campo2093)+eliminar_miles(campo2102)+eliminar_miles(campo2111)+eliminar_miles(campo2120)+eliminar_miles(campo2129);
             if ( eliminar_miles(campo2138) != suma)
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2138 - Advertencia: Total control no cuadra 2138. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2138 - Error: Total control no cuadra 2138. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
            }  

    }  
         // Regla 85
if ($(campo_j).attr('id')=='txt_F2_S2_P2138')
    {
	suma=0
	for (i=85;i<139;i++)
	{
			if (i<100)
			{
			campo=$.trim($('#txt_F2_S2_P20'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F2_S2_P2'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
					mensaje=mensaje +("Campo 2085 al 2138 - Advertencia: No informa personal subcontratado por la empresa y/o establecimientos. \n");
                    $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;  
                }
    }
   //Regla 86
 if ($(campo_j).attr('id')=='txt_F2_S2_P2147')
    {
    campo2139=$.trim($('#txt_F2_S2_P2139').val());
    campo2140=$.trim($('#txt_F2_S2_P2140').val());
    campo2141=$.trim($('#txt_F2_S2_P2141').val());
    campo2142=$.trim($('#txt_F2_S2_P2142').val());
    campo2143=$.trim($('#txt_F2_S2_P2143').val());
    campo2144=$.trim($('#txt_F2_S2_P2144').val());
    campo2145=$.trim($('#txt_F2_S2_P2145').val());
    campo2146=$.trim($('#txt_F2_S2_P2146').val());
    campo2147=$.trim($('#txt_F2_S2_P2147').val());
   	suma=eliminar_miles(campo2139)+eliminar_miles(campo2140)+eliminar_miles(campo2141)+eliminar_miles(campo2142)+eliminar_miles(campo2143)+eliminar_miles(campo2144)+eliminar_miles(campo2145)+eliminar_miles(campo2146);
 
            if ( eliminar_miles(campo2147) > 0 && suma == 0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2147 - Advertencia: Informa Honorarios pero no informa personas que trabajaron. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2147 - Error: Informa Honorarios pero no informa personas que trabajaron. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
            }  

    }  
	//Regla 87
 if ($(campo_j).attr('id')=='txt_F2_S2_P2147')
    {
    campo2139=$.trim($('#txt_F2_S2_P2139').val());
    campo2140=$.trim($('#txt_F2_S2_P2140').val());
    campo2141=$.trim($('#txt_F2_S2_P2141').val());
    campo2142=$.trim($('#txt_F2_S2_P2142').val());
    campo2143=$.trim($('#txt_F2_S2_P2143').val());
    campo2144=$.trim($('#txt_F2_S2_P2144').val());
    campo2145=$.trim($('#txt_F2_S2_P2145').val());
    campo2146=$.trim($('#txt_F2_S2_P2146').val());
    campo2147=$.trim($('#txt_F2_S2_P2147').val());
   	suma=eliminar_miles(campo2139)+eliminar_miles(campo2140)+eliminar_miles(campo2141)+eliminar_miles(campo2142)+eliminar_miles(campo2143)+eliminar_miles(campo2144)+eliminar_miles(campo2145)+eliminar_miles(campo2146);
 
            if ( eliminar_miles(campo2147) == 0 && suma > 0 )
            {	
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2147 - Advertencia: Informa personas que trabajaron pero no informa pago de honorarios. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2147 - Error: Informa personas que trabajaron pero no informa pago de honorarios. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}					
            }  

    }  
   //Regla 88
 if ($(campo_j).attr('id')=='txt_F2_S2_P2150')
    {
    campo2148=$.trim($('#txt_F2_S2_P2148').val());
    campo2149=$.trim($('#txt_F2_S2_P2149').val());
    campo2150=$.trim($('#txt_F2_S2_P2150').val());
   	suma=eliminar_miles(campo2148)+eliminar_miles(campo2149)+eliminar_miles(campo2150);
 
            if ( suma == 0 )
            {
					mensaje=mensaje +("Campo 2148 al 2150  - Advertencia: No informa costos laborales área informática. \n");
                    $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j; 
            }  

    }  
   //Regla 89
 if ($(campo_j).attr('id')=='txt_F2_S3_P302')
    {
    campo301=$.trim($('#txt_F2_S3_P301').val());
    campo302=$.trim($('#txt_F2_S3_P302').val());
   
            if (eliminar_miles(campo301) > 0 )
			{
				if ( eliminar_decimales(campo302)<0 || eliminar_decimales(campo302)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 302 - Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades manufactureras fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 302 - Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades manufactureras fuera de rango (0% a 100%). \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
				}	
			}  
    }  
   //Regla 90
 if ($(campo_j).attr('id')=='txt_F2_S3_P304')
    {
    campo303=$.trim($('#txt_F2_S3_P303').val());
    campo304=$.trim($('#txt_F2_S3_P304').val());
   
            if (eliminar_miles(campo303) > 0 )
			{
				if ( eliminar_decimales(campo304)<0 || eliminar_decimales(campo304)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 304 - Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de agricultura fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 304 - Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de agricultura fuera de rango (0% a 100%). \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
				}	
			}  
    }  
   //Regla 91
 if ($(campo_j).attr('id')=='txt_F2_S3_P306')
    {
    campo305=$.trim($('#txt_F2_S3_P305').val());
    campo306=$.trim($('#txt_F2_S3_P306').val());
   
            if (eliminar_miles(campo305) > 0 )
			{
				if ( eliminar_decimales(campo306)<0 || eliminar_decimales(campo306)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 306 - Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de pesca fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 306 - Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de pesca fuera de rango (0% a 100%). \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}					
				}	
			}  
    }  
   //Regla 92 
 if ($(campo_j).attr('id')=='txt_F2_S3_P308')
    {
    campo307=$.trim($('#txt_F2_S3_P307').val());
    campo308=$.trim($('#txt_F2_S3_P308').val());
   
            if (eliminar_miles(campo307) > 0 )
			{
				if ( eliminar_decimales(campo308)<0 || eliminar_decimales(campo308)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 308 - Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de minería fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 308 - Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de minería fuera de rango (0% a 100%). \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
				}	
			}  
    }  
   //Regla 93
 if ($(campo_j).attr('id')=='txt_F2_S3_P310')
    {
    campo309=$.trim($('#txt_F2_S3_P309').val());
    campo310=$.trim($('#txt_F2_S3_P310').val());
   
            if (eliminar_miles(campo309) > 0 )
			{
				if ( eliminar_decimales(campo310)<0 || eliminar_decimales(campo310)>100 || $.trim($(campo_j).val()).length == 0 )
				{	
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 310 - Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de electricidad fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 310 - Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de electricidad fuera de rango (0% a 100%). \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
				}	
			}  
    }  
   //Regla 94
 if ($(campo_j).attr('id')=='txt_F2_S3_P312')
    {
    campo311=$.trim($('#txt_F2_S3_P311').val());
    campo312=$.trim($('#txt_F2_S3_P312').val());
   
            if (eliminar_miles(campo311) > 0 )
			{
				if ( eliminar_decimales(campo312)<0 || eliminar_decimales(campo312)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 312 - Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de construcción fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 312 - Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para actividades de construcción fuera de rango (0% a 100%). \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
				}	
			}  
    }  
   //Regla 95
 if ($(campo_j).attr('id')=='txt_F2_S3_P314')
    {
    campo313=$.trim($('#txt_F2_S3_P313').val());
    campo314=$.trim($('#txt_F2_S3_P314').val());
   
            if (eliminar_miles(campo313) > 0 )
			{
				if ( eliminar_decimales(campo314)<0 || eliminar_decimales(campo314)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 314 - Advertencia: Porcentanje de sobretasa articulos comprados para la reventa fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 314 - Error: Porcentanje de sobretasa articulos comprados para la reventa fuera de rango (0% a 100%). \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
				}	
			}  
    }  
   //Regla 96
 if ($(campo_j).attr('id')=='txt_F2_S3_P316')
    {
    campo315=$.trim($('#txt_F2_S3_P315').val());
    campo316=$.trim($('#txt_F2_S3_P316').val());
   
            if (eliminar_miles(campo315) > 0 )
			{
				if ( eliminar_decimales(campo316)<0 || eliminar_decimales(campo316)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 316 - Advertencia: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para prestación de servicios fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 316 - Error: Porcentanje de sobretasa compra de materias primas, materiales e insumos, para prestación de servicios fuera de rango (0% a 100%). \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}
				}	
			}  
    }  
       //Regla 97
 if ($(campo_j).attr('id')=='txt_F2_S3_P318')
    {
    campo317=$.trim($('#txt_F2_S3_P317').val());
    campo318=$.trim($('#txt_F2_S3_P318').val());
   
            if (eliminar_miles(campo317) > 0 )
			{
				if ( eliminar_decimales(campo318)<0 || eliminar_decimales(campo318)>100 || $.trim($(campo_j).val()).length == 0 )
				{
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 318 - Advertencia: Porcentanje de sobretase compra de materias primas, materiales e insumos, no indicadas en categorias anteriores fuera de rango (0% a 100%). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 318 - Error: Porcentanje de sobretase compra de materias primas, materiales e insumos, no indicadas en categorias anteriores fuera de rango (0% a 100%). \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
				}	
			}  
    }  
   //Regla 98
 if ($(campo_j).attr('id')=='txt_F2_S3_P321')
    {
    campo301=$.trim($('#txt_F2_S3_P301').val());
    campo303=$.trim($('#txt_F2_S3_P303').val());
    campo305=$.trim($('#txt_F2_S3_P305').val());
    campo307=$.trim($('#txt_F2_S3_P307').val());
    campo309=$.trim($('#txt_F2_S3_P309').val());
    campo311=$.trim($('#txt_F2_S3_P311').val());
    campo313=$.trim($('#txt_F2_S3_P313').val());
    campo315=$.trim($('#txt_F2_S3_P315').val());
	campo317=$.trim($('#txt_F2_S3_P317').val());
    campo321=$.trim($('#txt_F2_S3_P321').val());
   	suma=eliminar_miles(campo301)+eliminar_miles(campo303)+eliminar_miles(campo305)+eliminar_miles(campo307)+eliminar_miles(campo309)+eliminar_miles(campo311)+eliminar_miles(campo313)+eliminar_miles(campo315)+eliminar_miles(campo317);
        if ( eliminar_miles(campo321) > suma )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 321 - Advertencia: Productos importados superior a total valor compras. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 321 - Error: Productos importados superior a total valor compras. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
            }  

    }  
       //Regla 99 
 if ($(campo_j).attr('id')=='txt_F2_S3_P322')
    {
    campo301=$.trim($('#txt_F2_S3_P301').val());
    campo303=$.trim($('#txt_F2_S3_P303').val());
    campo305=$.trim($('#txt_F2_S3_P305').val());
    campo307=$.trim($('#txt_F2_S3_P307').val());
    campo309=$.trim($('#txt_F2_S3_P309').val());
    campo311=$.trim($('#txt_F2_S3_P311').val());
    campo313=$.trim($('#txt_F2_S3_P313').val());
    campo315=$.trim($('#txt_F2_S3_P315').val());
	campo317=$.trim($('#txt_F2_S3_P317').val());
	campo319=$.trim($('#txt_F2_S3_P319').val());
	campo320=$.trim($('#txt_F2_S3_P320').val());
    campo321=$.trim($('#txt_F2_S3_P321').val());
	campo322=$.trim($('#txt_F2_S3_P322').val());
   	suma=eliminar_miles(campo301)+eliminar_miles(campo303)+eliminar_miles(campo305)+eliminar_miles(campo307)+eliminar_miles(campo309)+eliminar_miles(campo311)+eliminar_miles(campo313)+eliminar_miles(campo315)+eliminar_miles(campo317)+eliminar_miles(campo319)+eliminar_miles(campo320)+eliminar_miles(campo321);
        if ( eliminar_miles(campo322) != suma )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 322 - Advertencia: Total control valores netos en moneda utilizada sección III.A no cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 322 - Error: Total control valores netos en moneda utilizada sección III.A no cuadra. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
            }  

    }  
       //Regla 100
 if ($(campo_j).attr('id')=='txt_F2_S3_P322')
    {
    campo301=$.trim($('#txt_F2_S3_P301').val());
	campo302=$.trim($('#txt_F2_S3_P302').val());
    campo303=$.trim($('#txt_F2_S3_P303').val());
	campo304=$.trim($('#txt_F2_S3_P304').val());
    campo305=$.trim($('#txt_F2_S3_P305').val());
	campo306=$.trim($('#txt_F2_S3_P306').val());
    campo307=$.trim($('#txt_F2_S3_P307').val());
    campo308=$.trim($('#txt_F2_S3_P308').val());
	campo309=$.trim($('#txt_F2_S3_P309').val());
	campo310=$.trim($('#txt_F2_S3_P310').val());
    campo311=$.trim($('#txt_F2_S3_P311').val());
	campo312=$.trim($('#txt_F2_S3_P312').val());
    campo313=$.trim($('#txt_F2_S3_P313').val());
	campo314=$.trim($('#txt_F2_S3_P314').val());
    campo315=$.trim($('#txt_F2_S3_P315').val());
	campo316=$.trim($('#txt_F2_S3_P316').val());
	campo317=$.trim($('#txt_F2_S3_P317').val());
	campo318=$.trim($('#txt_F2_S3_P318').val());
	campo319=$.trim($('#txt_F2_S3_P319').val());
	campo320=$.trim($('#txt_F2_S3_P320').val());
    campo321=$.trim($('#txt_F2_S3_P321').val());
	campo322=$.trim($('#txt_F2_S3_P322').val());
   	suma=eliminar_miles(campo301)+eliminar_miles(campo303)+eliminar_miles(campo305)+eliminar_miles(campo307)+eliminar_miles(campo309)+eliminar_miles(campo311)+eliminar_miles(campo313)+eliminar_miles(campo315)+eliminar_miles(campo317)+eliminar_miles(campo319)+eliminar_miles(campo320)+eliminar_miles(campo321)+eliminar_miles(campo322);
	suma2=eliminar_decimales(campo302)+eliminar_decimales(campo304)+eliminar_decimales(campo306)+eliminar_decimales(campo308)+eliminar_decimales(campo310)+eliminar_decimales(campo312)+eliminar_decimales(campo314)+eliminar_decimales(campo316)+eliminar_decimales(campo318);
	 total=parseFloat(suma)+parseFloat(suma2);
	 
	 if ( total==0 )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 301 al 322 - Advertencia: No informa compras de materias primas, materiales y costos. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 301 al 322 - Error: No informa compras de materias primas, materiales y costos. \n");	
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;   
					}
            }  

    }       
        
         });
    return [advertencia,error,foco[0],mensaje];
}