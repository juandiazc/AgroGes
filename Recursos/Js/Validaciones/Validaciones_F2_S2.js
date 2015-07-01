camposDecimal = [];
camposletra=[];
camposMiles=['txt_F2_S2_P2001','txt_F2_S2_P2002','txt_F2_S2_P2003','txt_F2_S2_P2004','txt_F2_S2_P2005','txt_F2_S2_P2006','txt_F2_S2_P2007',
'txt_F2_S2_P2008','txt_F2_S2_P2009','txt_F2_S2_P2010','txt_F2_S2_P2011','txt_F2_S2_P2012','txt_F2_S2_P2013','txt_F2_S2_P2014',
'txt_F2_S2_P2015','txt_F2_S2_P2016','txt_F2_S2_P2017','txt_F2_S2_P2018','txt_F2_S2_P2019','txt_F2_S2_P2020','txt_F2_S2_P2021',
'txt_F2_S2_P2022','txt_F2_S2_P2023','txt_F2_S2_P2024','txt_F2_S2_P2025','txt_F2_S2_P2026','txt_F2_S2_P2027','txt_F2_S2_P2028',
'txt_F2_S2_P2029','txt_F2_S2_P2030','txt_F2_S2_P2031','txt_F2_S2_P2032','txt_F2_S2_P2033','txt_F2_S2_P2034','txt_F2_S2_P2035',
'txt_F2_S2_P2036','txt_F2_S2_P2037','txt_F2_S2_P2038','txt_F2_S2_P2039','txt_F2_S2_P2040','txt_F2_S2_P2041','txt_F2_S2_P2042',
'txt_F2_S2_P2043','txt_F2_S2_P2044','txt_F2_S2_P2045','txt_F2_S2_P2046','txt_F2_S2_P2047','txt_F2_S2_P2048','txt_F2_S2_P2049',
'txt_F2_S2_P2050','txt_F2_S2_P2051','txt_F2_S2_P2052','txt_F2_S2_P2053','txt_F2_S2_P2054','txt_F2_S2_P2055','txt_F2_S2_P2056',
'txt_F2_S2_P2057','txt_F2_S2_P2058','txt_F2_S2_P2059','txt_F2_S2_P2060','txt_F2_S2_P2061','txt_F2_S2_P2062','txt_F2_S2_P2063',
'txt_F2_S2_P2064','txt_F2_S2_P2065','txt_F2_S2_P2066','txt_F2_S2_P2067','txt_F2_S2_P2068','txt_F2_S2_P2069','txt_F2_S2_P2070',
'txt_F2_S2_P2071','txt_F2_S2_P2072','txt_F2_S2_P2073','txt_F2_S2_P2074','txt_F2_S2_P2075','txt_F2_S2_P2076','txt_F2_S2_P2077',
'txt_F2_S2_P2078','txt_F2_S2_P2079','txt_F2_S2_P2080','txt_F2_S2_P2081','txt_F2_S2_P2082','txt_F2_S2_P2083','txt_F2_S2_P2084'];
campoSoloTexto=[];
function validar (campo_j){
    campo_j = "#"+campo_j;
 //Regla 41    
 if ($(campo_j).attr('id')=='txt_F2_S2_P2012')
    {
    campo2001=$.trim($('#txt_F2_S2_P2001').val());
    campo2002=$.trim($('#txt_F2_S2_P2002').val());
    campo2003=$.trim($('#txt_F2_S2_P2003').val());
    campo2004=$.trim($('#txt_F2_S2_P2004').val());
    campo2005=$.trim($('#txt_F2_S2_P2005').val());
    campo2006=$.trim($('#txt_F2_S2_P2006').val());
    campo2007=$.trim($('#txt_F2_S2_P2007').val());
    campo2008=$.trim($('#txt_F2_S2_P2008').val());
    campo2009=$.trim($('#txt_F2_S2_P2009').val());
    campo2012=$.trim($('#txt_F2_S2_P2012').val());
            if ( eliminar_miles(campo2009) > 0 || eliminar_miles(campo2012) > 0 )
            {
			    suma=eliminar_miles(campo2001)+eliminar_miles(campo2002)+eliminar_miles(campo2003)+eliminar_miles(campo2004)+eliminar_miles(campo2005)+eliminar_miles(campo2006)+eliminar_miles(campo2007)+eliminar_miles(campo2008);
				if ( suma==0 )
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A1 y A2).\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2001').focus();
						$('#txt_F2_S2_P2001').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2013').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A1 y A2)");
                    $('#txt_F2_S2_P2001').focus();
                    $('#txt_F2_S2_P2001').select();
                    return false;
					}
                }
            }  

    }  
    //Regla 42   
    if ($(campo_j).attr('id')=='txt_F2_S2_P2012')
    {
    campo2001=$.trim($('#txt_F2_S2_P2001').val());
    campo2002=$.trim($('#txt_F2_S2_P2002').val());
    campo2003=$.trim($('#txt_F2_S2_P2003').val());
    campo2004=$.trim($('#txt_F2_S2_P2004').val());
    campo2005=$.trim($('#txt_F2_S2_P2005').val());
    campo2006=$.trim($('#txt_F2_S2_P2006').val());
    campo2007=$.trim($('#txt_F2_S2_P2007').val());
    campo2008=$.trim($('#txt_F2_S2_P2008').val());
    campo2009=$.trim($('#txt_F2_S2_P2009').val());
    campo2012=$.trim($('#txt_F2_S2_P2012').val());
	suma=eliminar_miles(campo2001)+eliminar_miles(campo2002)+eliminar_miles(campo2003)+eliminar_miles(campo2004)+eliminar_miles(campo2005)+eliminar_miles(campo2006)+eliminar_miles(campo2007)+eliminar_miles(campo2008);
            if ( suma > 0 )
            {
                if ( eliminar_miles(campo2009) == 0 || eliminar_miles(campo2012) == 0 )
                {
                    if(!confirm('Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A1 y A2).\n ¿Desea continuar?')){
                    $('#txt_F2_S2_P2001').focus();
                    $('#txt_F2_S2_P2001').select();
                    return false;
                    }else{
                    flag_2 = true;
                    $('#txt_F2_S2_P2013').focus();
                    return false;
                    }
                }
            }  

    } 
    //Regla 43    
 if ($(campo_j).attr('id')=='txt_F2_S2_P2024')
    {
    campo2013=$.trim($('#txt_F2_S2_P2013').val());
    campo2014=$.trim($('#txt_F2_S2_P2014').val());
    campo2015=$.trim($('#txt_F2_S2_P2015').val());
    campo2016=$.trim($('#txt_F2_S2_P2016').val());
    campo2017=$.trim($('#txt_F2_S2_P2017').val());
    campo2018=$.trim($('#txt_F2_S2_P2018').val());
    campo2019=$.trim($('#txt_F2_S2_P2019').val());
    campo2020=$.trim($('#txt_F2_S2_P2020').val());
    campo2021=$.trim($('#txt_F2_S2_P2021').val());
    campo2024=$.trim($('#txt_F2_S2_P2024').val());
            if ( eliminar_miles(campo2021) > 0 || eliminar_miles(campo2024) > 0 )
            {
			    suma=eliminar_miles(campo2013)+eliminar_miles(campo2014)+eliminar_miles(campo2015)+eliminar_miles(campo2016)+eliminar_miles(campo2017)+eliminar_miles(campo2018)+eliminar_miles(campo2019)+eliminar_miles(campo2020);
				if ( suma==0 )
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A3).\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2013').focus();
						$('#txt_F2_S2_P2013').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2025').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A3).");
                    $('#txt_F2_S2_P2013').focus();
                    $('#txt_F2_S2_P2013').select();
                    return false;
					}
                }
            }  

    }  
    //Regla 44   
    if ($(campo_j).attr('id')=='txt_F2_S2_P2024')
    {
    campo2013=$.trim($('#txt_F2_S2_P2013').val());
    campo2014=$.trim($('#txt_F2_S2_P2014').val());
    campo2015=$.trim($('#txt_F2_S2_P2015').val());
    campo2016=$.trim($('#txt_F2_S2_P2016').val());
    campo2017=$.trim($('#txt_F2_S2_P2017').val());
    campo2018=$.trim($('#txt_F2_S2_P2018').val());
    campo2019=$.trim($('#txt_F2_S2_P2019').val());
    campo2020=$.trim($('#txt_F2_S2_P2020').val());
    campo2021=$.trim($('#txt_F2_S2_P2021').val());
    campo2024=$.trim($('#txt_F2_S2_P2024').val());
	suma=eliminar_miles(campo2013)+eliminar_miles(campo2014)+eliminar_miles(campo2015)+eliminar_miles(campo2016)+eliminar_miles(campo2017)+eliminar_miles(campo2018)+eliminar_miles(campo2019)+eliminar_miles(campo2020);
            if ( suma > 0 )
            {
                if ( eliminar_miles(campo2021) == 0 || eliminar_miles(campo2024) == 0 )
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A3).\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2013').focus();
						$('#txt_F2_S2_P2013').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2025').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A3).");
                    $('#txt_F2_S2_P2013').focus();
                    $('#txt_F2_S2_P2013').select();
                    return false;
					}
                }
            }  

    } 
    //Regla 45   
 if ($(campo_j).attr('id')=='txt_F2_S2_P2036')
    {
    campo2025=$.trim($('#txt_F2_S2_P2025').val());
    campo2026=$.trim($('#txt_F2_S2_P2026').val());
    campo2027=$.trim($('#txt_F2_S2_P2027').val());
    campo2028=$.trim($('#txt_F2_S2_P2028').val());
    campo2029=$.trim($('#txt_F2_S2_P2029').val());
    campo2030=$.trim($('#txt_F2_S2_P2030').val());
    campo2031=$.trim($('#txt_F2_S2_P2031').val());
    campo2032=$.trim($('#txt_F2_S2_P2032').val());
    campo2033=$.trim($('#txt_F2_S2_P2033').val());
    campo2036=$.trim($('#txt_F2_S2_P2036').val());
            if ( eliminar_miles(campo2033) > 0 || eliminar_miles(campo2036) > 0 )
            {
			    suma=eliminar_miles(campo2025)+eliminar_miles(campo2026)+eliminar_miles(campo2027)+eliminar_miles(campo2028)+eliminar_miles(campo2029)+eliminar_miles(campo2030)+eliminar_miles(campo2031)+eliminar_miles(campo2032);
				if ( suma==0 )
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A4).\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2025').focus();
						$('#txt_F2_S2_P2025').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2037').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A4).");
                    $('#txt_F2_S2_P2025').focus();
                    $('#txt_F2_S2_P2025').select();
                    return false;
					}
                }
            }  

    }  
    //Regla 46  
    if ($(campo_j).attr('id')=='txt_F2_S2_P2036')
    {
    campo2025=$.trim($('#txt_F2_S2_P2025').val());
    campo2026=$.trim($('#txt_F2_S2_P2026').val());
    campo2027=$.trim($('#txt_F2_S2_P2027').val());
    campo2028=$.trim($('#txt_F2_S2_P2028').val());
    campo2029=$.trim($('#txt_F2_S2_P2029').val());
    campo2030=$.trim($('#txt_F2_S2_P2030').val());
    campo2031=$.trim($('#txt_F2_S2_P2031').val());
    campo2032=$.trim($('#txt_F2_S2_P2032').val());
    campo2033=$.trim($('#txt_F2_S2_P2033').val());
    campo2036=$.trim($('#txt_F2_S2_P2036').val());
	suma=eliminar_miles(campo2025)+eliminar_miles(campo2026)+eliminar_miles(campo2027)+eliminar_miles(campo2028)+eliminar_miles(campo2029)+eliminar_miles(campo2030)+eliminar_miles(campo2031)+eliminar_miles(campo2032);
            if ( suma > 0 )
            {
                if ( eliminar_miles(campo2033) == 0 || eliminar_miles(campo2036) == 0 )
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A4).\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2025').focus();
						$('#txt_F2_S2_P2025').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2037').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A4).");
                    $('#txt_F2_S2_P2025').focus();
                    $('#txt_F2_S2_P2025').select();
                    return false;
					}
                }
            }  

    } 
    //Regla 47   
 if ($(campo_j).attr('id')=='txt_F2_S2_P2048')
    {
    campo2037=$.trim($('#txt_F2_S2_P2037').val());
    campo2038=$.trim($('#txt_F2_S2_P2038').val());
    campo2039=$.trim($('#txt_F2_S2_P2039').val());
    campo2040=$.trim($('#txt_F2_S2_P2040').val());
    campo2041=$.trim($('#txt_F2_S2_P2041').val());
    campo2042=$.trim($('#txt_F2_S2_P2042').val());
    campo2043=$.trim($('#txt_F2_S2_P2043').val());
    campo2044=$.trim($('#txt_F2_S2_P2044').val());
    campo2045=$.trim($('#txt_F2_S2_P2045').val());
    campo2048=$.trim($('#txt_F2_S2_P2048').val());
            if ( eliminar_miles(campo2045) > 0 || eliminar_miles(campo2048) > 0 )
            {
			    suma=eliminar_miles(campo2037)+eliminar_miles(campo2038)+eliminar_miles(campo2039)+eliminar_miles(campo2040)+eliminar_miles(campo2041)+eliminar_miles(campo2042)+eliminar_miles(campo2043)+eliminar_miles(campo2044);
				if ( suma==0 )
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A5).\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2037').focus();
						$('#txt_F2_S2_P2037').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2049').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A5).");
                    $('#txt_F2_S2_P2037').focus();
                    $('#txt_F2_S2_P2037').select();
                    return false;
					}
                }
            }  

    }  
    //Regla 48  
    if ($(campo_j).attr('id')=='txt_F2_S2_P2048')
    {
    campo2037=$.trim($('#txt_F2_S2_P2037').val());
    campo2038=$.trim($('#txt_F2_S2_P2038').val());
    campo2039=$.trim($('#txt_F2_S2_P2039').val());
    campo2040=$.trim($('#txt_F2_S2_P2040').val());
    campo2041=$.trim($('#txt_F2_S2_P2041').val());
    campo2042=$.trim($('#txt_F2_S2_P2042').val());
    campo2043=$.trim($('#txt_F2_S2_P2043').val());
    campo2044=$.trim($('#txt_F2_S2_P2044').val());
    campo2045=$.trim($('#txt_F2_S2_P2045').val());
    campo2048=$.trim($('#txt_F2_S2_P2048').val());
	suma=eliminar_miles(campo2037)+eliminar_miles(campo2038)+eliminar_miles(campo2039)+eliminar_miles(campo2040)+eliminar_miles(campo2041)+eliminar_miles(campo2042)+eliminar_miles(campo2043)+eliminar_miles(campo2044);
            if ( suma > 0 )
            {
                if ( eliminar_miles(campo2045) == 0 || eliminar_miles(campo2048) == 0 )
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A5).\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2037').focus();
						$('#txt_F2_S2_P2037').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2049').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A5).");
                    $('#txt_F2_S2_P2037').focus();
                    $('#txt_F2_S2_P2037').select();
                    return false;
					}
                }
            }  

    } 
    //Regla 49   
 if ($(campo_j).attr('id')=='txt_F2_S2_P2060')
    {
    campo2049=$.trim($('#txt_F2_S2_P2049').val());
    campo2050=$.trim($('#txt_F2_S2_P2050').val());
    campo2051=$.trim($('#txt_F2_S2_P2051').val());
    campo2052=$.trim($('#txt_F2_S2_P2052').val());
    campo2053=$.trim($('#txt_F2_S2_P2053').val());
    campo2054=$.trim($('#txt_F2_S2_P2054').val());
    campo2055=$.trim($('#txt_F2_S2_P2055').val());
    campo2056=$.trim($('#txt_F2_S2_P2056').val());
    campo2057=$.trim($('#txt_F2_S2_P2057').val());
    campo2060=$.trim($('#txt_F2_S2_P2060').val());
            if ( eliminar_miles(campo2057) > 0 || eliminar_miles(campo2060) > 0 )
            {
			    suma=eliminar_miles(campo2049)+eliminar_miles(campo2050)+eliminar_miles(campo2051)+eliminar_miles(campo2052)+eliminar_miles(campo2053)+eliminar_miles(campo2054)+eliminar_miles(campo2055)+eliminar_miles(campo2056);
				if ( suma==0 )
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A6 y A7).\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2049').focus();
						$('#txt_F2_S2_P2049').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2061').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A6 y A7).");
                    $('#txt_F2_S2_P2049').focus();
                    $('#txt_F2_S2_P2049').select();
                    return false;
					}
                }
            }  

    }  
    //Regla 50  
    if ($(campo_j).attr('id')=='txt_F2_S2_P2060')
    {
    campo2049=$.trim($('#txt_F2_S2_P2049').val());
    campo2050=$.trim($('#txt_F2_S2_P2050').val());
    campo2051=$.trim($('#txt_F2_S2_P2051').val());
    campo2052=$.trim($('#txt_F2_S2_P2052').val());
    campo2053=$.trim($('#txt_F2_S2_P2053').val());
    campo2054=$.trim($('#txt_F2_S2_P2054').val());
    campo2055=$.trim($('#txt_F2_S2_P2055').val());
    campo2056=$.trim($('#txt_F2_S2_P2056').val());
    campo2057=$.trim($('#txt_F2_S2_P2057').val());
    campo2060=$.trim($('#txt_F2_S2_P2060').val());
	suma=eliminar_miles(campo2049)+eliminar_miles(campo2050)+eliminar_miles(campo2051)+eliminar_miles(campo2052)+eliminar_miles(campo2053)+eliminar_miles(campo2054)+eliminar_miles(campo2055)+eliminar_miles(campo2056);
            if ( suma > 0 )
            {
                if ( eliminar_miles(campo2057) == 0 || eliminar_miles(campo2060) == 0 )
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A6 y A7).\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2049').focus();
						$('#txt_F2_S2_P2049').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2061').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A6 y A7).");
                    $('#txt_F2_S2_P2049').focus();
                    $('#txt_F2_S2_P2049').select();
                    return false;
					}
                }
            }  

    } 
    //Regla 51  
 if ($(campo_j).attr('id')=='txt_F2_S2_P2072')
    {
    campo2061=$.trim($('#txt_F2_S2_P2061').val());
    campo2062=$.trim($('#txt_F2_S2_P2062').val());
    campo2063=$.trim($('#txt_F2_S2_P2063').val());
    campo2064=$.trim($('#txt_F2_S2_P2064').val());
    campo2065=$.trim($('#txt_F2_S2_P2065').val());
    campo2066=$.trim($('#txt_F2_S2_P2066').val());
    campo2067=$.trim($('#txt_F2_S2_P2067').val());
    campo2068=$.trim($('#txt_F2_S2_P2068').val());
    campo2069=$.trim($('#txt_F2_S2_P2069').val());
    campo2072=$.trim($('#txt_F2_S2_P2072').val());
            if ( eliminar_miles(campo2069) > 0 || eliminar_miles(campo2072) > 0 )
            {
			    suma=eliminar_miles(campo2061)+eliminar_miles(campo2062)+eliminar_miles(campo2063)+eliminar_miles(campo2064)+eliminar_miles(campo2065)+eliminar_miles(campo2066)+eliminar_miles(campo2067)+eliminar_miles(campo2068);
				if ( suma==0 )
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A8).\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2061').focus();
						$('#txt_F2_S2_P2061').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2073').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A8).");
                    $('#txt_F2_S2_P2061').focus();
                    $('#txt_F2_S2_P2061').select();
                    return false;
					}
                }
            }  

    }  
    //Regla 52  
    if ($(campo_j).attr('id')=='txt_F2_S2_P2072')
    {
    campo2061=$.trim($('#txt_F2_S2_P2061').val());
    campo2062=$.trim($('#txt_F2_S2_P2062').val());
    campo2063=$.trim($('#txt_F2_S2_P2063').val());
    campo2064=$.trim($('#txt_F2_S2_P2064').val());
    campo2065=$.trim($('#txt_F2_S2_P2065').val());
    campo2066=$.trim($('#txt_F2_S2_P2066').val());
    campo2067=$.trim($('#txt_F2_S2_P2067').val());
    campo2068=$.trim($('#txt_F2_S2_P2068').val());
    campo2069=$.trim($('#txt_F2_S2_P2069').val());
    campo2072=$.trim($('#txt_F2_S2_P2072').val());
	suma=eliminar_miles(campo2061)+eliminar_miles(campo2062)+eliminar_miles(campo2063)+eliminar_miles(campo2064)+eliminar_miles(campo2065)+eliminar_miles(campo2066)+eliminar_miles(campo2067)+eliminar_miles(campo2068);
            if ( suma > 0 )
            {
                if ( eliminar_miles(campo2069) == 0 || eliminar_miles(campo2072) == 0 )
                {
					if (perfil == 4)
					{
					if(!confirm('Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A8).\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2061').focus();
						$('#txt_F2_S2_P2061').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2073').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A8).");
                    $('#txt_F2_S2_P2061').focus();
                    $('#txt_F2_S2_P2061').select();
                    return false;
					}
                }
            }  

    } 
       //Regla 53	
 if ($(campo_j).attr('id')=='txt_F2_S2_P2073')
    {
    campo2001=$.trim($('#txt_F2_S2_P2001').val());
    campo2013=$.trim($('#txt_F2_S2_P2013').val());
    campo2025=$.trim($('#txt_F2_S2_P2025').val());
    campo2037=$.trim($('#txt_F2_S2_P2037').val());
    campo2049=$.trim($('#txt_F2_S2_P2049').val());
    campo2061=$.trim($('#txt_F2_S2_P2061').val());
    campo2073=$.trim($('#txt_F2_S2_P2073').val());
    suma=eliminar_miles(campo2001)+eliminar_miles(campo2013)+eliminar_miles(campo2025)+eliminar_miles(campo2037)+eliminar_miles(campo2049)+eliminar_miles(campo2061);

            if ( suma !=  eliminar_miles(campo2073) )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total de control Hombres (A1 a A8), Trimestre 1 No Cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2001').focus();
						$('#txt_F2_S2_P2001').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2074').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total de control Hombres (A1 a A8), Trimestre 1 No Cuadra.");
                    $('#txt_F2_S2_P2001').focus();
                    $('#txt_F2_S2_P2001').select();
                    return false;
					}
            }  

    }       
        //Regla 54
 if ($(campo_j).attr('id')=='txt_F2_S2_P2074')
    {
    campo2002=$.trim($('#txt_F2_S2_P2002').val());
    campo2014=$.trim($('#txt_F2_S2_P2014').val());
    campo2026=$.trim($('#txt_F2_S2_P2026').val());
    campo2038=$.trim($('#txt_F2_S2_P2038').val());
    campo2050=$.trim($('#txt_F2_S2_P2050').val());
    campo2062=$.trim($('#txt_F2_S2_P2062').val());
    campo2074=$.trim($('#txt_F2_S2_P2074').val());
    suma=eliminar_miles(campo2002)+eliminar_miles(campo2014)+eliminar_miles(campo2026)+eliminar_miles(campo2038)+eliminar_miles(campo2050)+eliminar_miles(campo2062);

            if ( suma !=  eliminar_miles(campo2074) )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total de control Mujeres (A1 a A8), Trimestre 1 No Cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2002').focus();
						$('#txt_F2_S2_P2002').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2075').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total de control Mujeres (A1 a A8), Trimestre 1 No Cuadra.");
                    $('#txt_F2_S2_P2002').focus();
                    $('#txt_F2_S2_P2002').select();
                    return false;
					}
            }  

    }  
      //Regla 55	 
 if ($(campo_j).attr('id')=='txt_F2_S2_P2075')
    {
    campo2003=$.trim($('#txt_F2_S2_P2003').val());
    campo2015=$.trim($('#txt_F2_S2_P2015').val());
    campo2027=$.trim($('#txt_F2_S2_P2027').val());
    campo2039=$.trim($('#txt_F2_S2_P2039').val());
    campo2051=$.trim($('#txt_F2_S2_P2051').val());
    campo2063=$.trim($('#txt_F2_S2_P2063').val());
    campo2075=$.trim($('#txt_F2_S2_P2075').val());
    suma=eliminar_miles(campo2003)+eliminar_miles(campo2015)+eliminar_miles(campo2027)+eliminar_miles(campo2039)+eliminar_miles(campo2051)+eliminar_miles(campo2063);

            if ( suma !=  eliminar_miles(campo2075) )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total de control Hombres (A1 a A8), Trimestre 2 No Cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2003').focus();
						$('#txt_F2_S2_P2003').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2076').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total de control Hombres (A1 a A8), Trimestre 2 No Cuadra.");
                    $('#txt_F2_S2_P2003').focus();
                    $('#txt_F2_S2_P2003').select();
                    return false;
					}
            }  

    }  
    //Regla 56
 if ($(campo_j).attr('id')=='txt_F2_S2_P2076')
    {
    campo2004=$.trim($('#txt_F2_S2_P2004').val());
    campo2016=$.trim($('#txt_F2_S2_P2016').val());
    campo2028=$.trim($('#txt_F2_S2_P2028').val());
    campo2040=$.trim($('#txt_F2_S2_P2040').val());
    campo2052=$.trim($('#txt_F2_S2_P2052').val());
    campo2064=$.trim($('#txt_F2_S2_P2064').val());
    campo2076=$.trim($('#txt_F2_S2_P2076').val());
    suma=eliminar_miles(campo2004)+eliminar_miles(campo2016)+eliminar_miles(campo2028)+eliminar_miles(campo2040)+eliminar_miles(campo2052)+eliminar_miles(campo2064);

            if ( suma !=  eliminar_miles(campo2076) )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total de control Mujeres (A1 a A8), Trimestre 2 No Cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2004').focus();
						$('#txt_F2_S2_P2004').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2077').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total de control Mujeres (A1 a A8), Trimestre 2 No Cuadra.");
                    $('#txt_F2_S2_P2004').focus();
                    $('#txt_F2_S2_P2004').select();
                    return false;
					}
            }  

    } 
       //Regla 57
 if ($(campo_j).attr('id')=='txt_F2_S2_P2077')
    {
    campo2005=$.trim($('#txt_F2_S2_P2005').val());
    campo2017=$.trim($('#txt_F2_S2_P2017').val());
    campo2029=$.trim($('#txt_F2_S2_P2029').val());
    campo2041=$.trim($('#txt_F2_S2_P2041').val());
    campo2053=$.trim($('#txt_F2_S2_P2053').val());
    campo2065=$.trim($('#txt_F2_S2_P2065').val());
    campo2077=$.trim($('#txt_F2_S2_P2077').val());
    suma=eliminar_miles(campo2005)+eliminar_miles(campo2017)+eliminar_miles(campo2029)+eliminar_miles(campo2041)+eliminar_miles(campo2053)+eliminar_miles(campo2065);

            if ( suma !=  eliminar_miles(campo2077) )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total de control Hombres (A1 a A8), Trimestre 3 No Cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2005').focus();
						$('#txt_F2_S2_P2005').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2078').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total de control Hombres (A1 a A8), Trimestre 3 No Cuadra.");
                    $('#txt_F2_S2_P2005').focus();
                    $('#txt_F2_S2_P2005').select();
                    return false;
					}
            }  

    }  
         //Regla 58
 if ($(campo_j).attr('id')=='txt_F2_S2_P2078')
    {
    campo2006=$.trim($('#txt_F2_S2_P2006').val());
    campo2018=$.trim($('#txt_F2_S2_P2018').val());
    campo2030=$.trim($('#txt_F2_S2_P2030').val());
    campo2042=$.trim($('#txt_F2_S2_P2042').val());
    campo2054=$.trim($('#txt_F2_S2_P2054').val());
    campo2066=$.trim($('#txt_F2_S2_P2066').val());
    campo2078=$.trim($('#txt_F2_S2_P2078').val());
    suma=eliminar_miles(campo2006)+eliminar_miles(campo2018)+eliminar_miles(campo2030)+eliminar_miles(campo2042)+eliminar_miles(campo2054)+eliminar_miles(campo2066);

            if ( suma !=  eliminar_miles(campo2078) )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total de control Mujeres (A1 a A8), Trimestre 3 No Cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2006').focus();
						$('#txt_F2_S2_P2006').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2079').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total de control Mujeres (A1 a A8), Trimestre 3 No Cuadra.");
                    $('#txt_F2_S2_P2006').focus();
                    $('#txt_F2_S2_P2006').select();
                    return false;
					}
            }  

    }  
      //Regla 59
 if ($(campo_j).attr('id')=='txt_F2_S2_P2079')
    {
    campo2007=$.trim($('#txt_F2_S2_P2007').val());
    campo2019=$.trim($('#txt_F2_S2_P2019').val());
    campo2031=$.trim($('#txt_F2_S2_P2031').val());
    campo2043=$.trim($('#txt_F2_S2_P2043').val());
    campo2055=$.trim($('#txt_F2_S2_P2055').val());
    campo2067=$.trim($('#txt_F2_S2_P2067').val());
    campo2079=$.trim($('#txt_F2_S2_P2079').val());
    suma=eliminar_miles(campo2007)+eliminar_miles(campo2019)+eliminar_miles(campo2031)+eliminar_miles(campo2043)+eliminar_miles(campo2055)+eliminar_miles(campo2067);

            if ( suma !=  eliminar_miles(campo2079) )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total de control Hombres (A1 a A8), Trimestre 4 No Cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2007').focus();
						$('#txt_F2_S2_P2007').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2080').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total de control Hombres (A1 a A8), Trimestre 4 No Cuadra.");
                    $('#txt_F2_S2_P2007').focus();
                    $('#txt_F2_S2_P2007').select();
                    return false;
					}
            }  

    }  
          //Regla 60
 if ($(campo_j).attr('id')=='txt_F2_S2_P2080')
    {
    campo2008=$.trim($('#txt_F2_S2_P2008').val());
    campo2020=$.trim($('#txt_F2_S2_P2020').val());
    campo2032=$.trim($('#txt_F2_S2_P2032').val());
    campo2044=$.trim($('#txt_F2_S2_P2044').val());
    campo2056=$.trim($('#txt_F2_S2_P2056').val());
    campo2068=$.trim($('#txt_F2_S2_P2068').val());
    campo2080=$.trim($('#txt_F2_S2_P2080').val());
    suma=eliminar_miles(campo2008)+eliminar_miles(campo2020)+eliminar_miles(campo2032)+eliminar_miles(campo2044)+eliminar_miles(campo2056)+eliminar_miles(campo2068);

            if ( suma !=  eliminar_miles(campo2080) )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total de control Mujeres (A1 a A8), Trimestre 4 No Cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2008').focus();
						$('#txt_F2_S2_P2008').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2081').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total de control Mujeres (A1 a A8), Trimestre 4 No Cuadra.");
                    $('#txt_F2_S2_P2008').focus();
                    $('#txt_F2_S2_P2008').select();
                    return false;
					}
            }  

    }  
      //Regla 61
 if ($(campo_j).attr('id')=='txt_F2_S2_P2081')
    {
    campo2009=$.trim($('#txt_F2_S2_P2009').val());
    campo2021=$.trim($('#txt_F2_S2_P2021').val());
    campo2033=$.trim($('#txt_F2_S2_P2033').val());
    campo2045=$.trim($('#txt_F2_S2_P2045').val());
    campo2057=$.trim($('#txt_F2_S2_P2057').val());
    campo2069=$.trim($('#txt_F2_S2_P2069').val());
    campo2081=$.trim($('#txt_F2_S2_P2081').val());
    suma=eliminar_miles(campo2009)+eliminar_miles(campo2021)+eliminar_miles(campo2033)+eliminar_miles(campo2045)+eliminar_miles(campo2057)+eliminar_miles(campo2069);

            if ( suma !=  eliminar_miles(campo2081) )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total de control Remuneraciones (A1 a A8) No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2009').focus();
						$('#txt_F2_S2_P2009').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2082').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total de control Remuneraciones (A1 a A8) No cuadra.");
                    $('#txt_F2_S2_P2009').focus();
                    $('#txt_F2_S2_P2009').select();
                    return false;
					}
            }  

    }  
      //Regla 62
 if ($(campo_j).attr('id')=='txt_F2_S2_P2082')
    {
    campo2010=$.trim($('#txt_F2_S2_P2010').val());
    campo2022=$.trim($('#txt_F2_S2_P2022').val());
    campo2034=$.trim($('#txt_F2_S2_P2034').val());
    campo2046=$.trim($('#txt_F2_S2_P2046').val());
    campo2058=$.trim($('#txt_F2_S2_P2058').val());
    campo2070=$.trim($('#txt_F2_S2_P2070').val());
    campo2082=$.trim($('#txt_F2_S2_P2082').val());
    suma=eliminar_miles(campo2010)+eliminar_miles(campo2022)+eliminar_miles(campo2034)+eliminar_miles(campo2046)+eliminar_miles(campo2058)+eliminar_miles(campo2070);

            if ( suma !=  eliminar_miles(campo2082) )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total de control Otras Remuneraciones (A1 a A8) No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2010').focus();
						$('#txt_F2_S2_P2010').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2083').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total de control Otras Remuneraciones (A1 a A8) No cuadra.");
                    $('#txt_F2_S2_P2010').focus();
                    $('#txt_F2_S2_P2010').select();
                    return false;
					}
            }  

    }  
        //Regla 63
 if ($(campo_j).attr('id')=='txt_F2_S2_P2083')
    {
    campo2011=$.trim($('#txt_F2_S2_P2011').val());
    campo2023=$.trim($('#txt_F2_S2_P2023').val());
    campo2035=$.trim($('#txt_F2_S2_P2035').val());
    campo2047=$.trim($('#txt_F2_S2_P2047').val());
    campo2059=$.trim($('#txt_F2_S2_P2059').val());
    campo2071=$.trim($('#txt_F2_S2_P2071').val());
    campo2083=$.trim($('#txt_F2_S2_P2083').val());
    suma=eliminar_miles(campo2011)+eliminar_miles(campo2023)+eliminar_miles(campo2035)+eliminar_miles(campo2047)+eliminar_miles(campo2059)+eliminar_miles(campo2071);

            if ( suma !=  eliminar_miles(campo2083) )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia: Total de control Aportes Patronales No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2011').focus();
						$('#txt_F2_S2_P2011').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2084').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total de control Aportes Patronales No cuadra.");
                    $('#txt_F2_S2_P2011').focus();
                    $('#txt_F2_S2_P2011').select();
                    return false;
					}
            }  

    }  
        //Regla 64
 if ($(campo_j).attr('id')=='txt_F2_S2_P2084')
    {
    campo2012=$.trim($('#txt_F2_S2_P2012').val());
    campo2024=$.trim($('#txt_F2_S2_P2024').val());
    campo2036=$.trim($('#txt_F2_S2_P2036').val());
    campo2048=$.trim($('#txt_F2_S2_P2048').val());
    campo2060=$.trim($('#txt_F2_S2_P2060').val());
    campo2072=$.trim($('#txt_F2_S2_P2072').val());
    campo2084=$.trim($('#txt_F2_S2_P2084').val());
    suma=eliminar_miles(campo2012)+eliminar_miles(campo2024)+eliminar_miles(campo2036)+eliminar_miles(campo2048)+eliminar_miles(campo2060)+eliminar_miles(campo2072);

            if ( suma !=  eliminar_miles(campo2084) )
            {
				if (perfil == 4)
					{
					if(!confirm('Advertencia:  Total de control Honorarios No cuadra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2012').focus();
						$('#txt_F2_S2_P2012').select();
						return false;
						}
						else
						{
						flag_2 = true;
						$('#txt_F2_S2_P2085').focus();
						return false;
						}    
					}
					else 
					{
                    alert("Error: Total de control Honorarios No cuadra.");
                    $('#txt_F2_S2_P2012').focus();
                    $('#txt_F2_S2_P2012').select();
                    return false;
					}
            }  

    }  
           // Regla 65
if ($(campo_j).attr('id')=='txt_F2_S2_P2084')
    {
	suma=0
	for (i=1;i<85;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F2_S2_P200'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F2_S2_P20'+i).val());
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
					if(!confirm('Advertencia:  No informa empleo y costo de la mano de obra.\n ¿Desea continuar?'))
						{
						$('#txt_F2_S2_P2001').focus();
						$('#txt_F2_S2_P2001').select();
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
					alert("Error: No informa empleo y costo de la mano de obra.");
                    $('#txt_F2_S2_P2001').focus();
                    $('#txt_F2_S2_P2001').select();
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
	mensaje = " \n";
    $.each($('input'),function(i,v){
        campo_j = "#"+$(this).attr('id');
  //Regla 41    
 if ($(campo_j).attr('id')=='txt_F2_S2_P2012')
    {
    campo2001=$.trim($('#txt_F2_S2_P2001').val());
    campo2002=$.trim($('#txt_F2_S2_P2002').val());
    campo2003=$.trim($('#txt_F2_S2_P2003').val());
    campo2004=$.trim($('#txt_F2_S2_P2004').val());
    campo2005=$.trim($('#txt_F2_S2_P2005').val());
    campo2006=$.trim($('#txt_F2_S2_P2006').val());
    campo2007=$.trim($('#txt_F2_S2_P2007').val());
    campo2008=$.trim($('#txt_F2_S2_P2008').val());
    campo2009=$.trim($('#txt_F2_S2_P2009').val());
    campo2012=$.trim($('#txt_F2_S2_P2012').val());
            if ( eliminar_miles(campo2009) > 0 || eliminar_miles(campo2012) > 0 )
            {
			    suma=eliminar_miles(campo2001)+eliminar_miles(campo2002)+eliminar_miles(campo2003)+eliminar_miles(campo2004)+eliminar_miles(campo2005)+eliminar_miles(campo2006)+eliminar_miles(campo2007)+eliminar_miles(campo2008);
				if ( suma==0 )
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2012 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A1 y A2). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2012 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A1 y A2). \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}					
			    }
            }  

    }  
    //Regla 42   
    if ($(campo_j).attr('id')=='txt_F2_S2_P2012')
    {
    campo2001=$.trim($('#txt_F2_S2_P2001').val());
    campo2002=$.trim($('#txt_F2_S2_P2002').val());
    campo2003=$.trim($('#txt_F2_S2_P2003').val());
    campo2004=$.trim($('#txt_F2_S2_P2004').val());
    campo2005=$.trim($('#txt_F2_S2_P2005').val());
    campo2006=$.trim($('#txt_F2_S2_P2006').val());
    campo2007=$.trim($('#txt_F2_S2_P2007').val());
    campo2008=$.trim($('#txt_F2_S2_P2008').val());
    campo2009=$.trim($('#txt_F2_S2_P2009').val());
    campo2012=$.trim($('#txt_F2_S2_P2012').val());
	suma=eliminar_miles(campo2001)+eliminar_miles(campo2002)+eliminar_miles(campo2003)+eliminar_miles(campo2004)+eliminar_miles(campo2005)+eliminar_miles(campo2006)+eliminar_miles(campo2007)+eliminar_miles(campo2008);
            if ( suma > 0 )
            {
                if ( eliminar_miles(campo2009) == 0 || eliminar_miles(campo2012) == 0 )
                {
					mensaje=mensaje +("Campo 2012 - Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A1 y A2). \n");
                    $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j; 
                }
            }  

    } 
    //Regla 43    
 if ($(campo_j).attr('id')=='txt_F2_S2_P2024')
    {
    campo2013=$.trim($('#txt_F2_S2_P2013').val());
    campo2014=$.trim($('#txt_F2_S2_P2014').val());
    campo2015=$.trim($('#txt_F2_S2_P2015').val());
    campo2016=$.trim($('#txt_F2_S2_P2016').val());
    campo2017=$.trim($('#txt_F2_S2_P2017').val());
    campo2018=$.trim($('#txt_F2_S2_P2018').val());
    campo2019=$.trim($('#txt_F2_S2_P2019').val());
    campo2020=$.trim($('#txt_F2_S2_P2020').val());
    campo2021=$.trim($('#txt_F2_S2_P2021').val());
    campo2024=$.trim($('#txt_F2_S2_P2024').val());
            if ( eliminar_miles(campo2021) > 0 || eliminar_miles(campo2024) > 0 )
            {
			    suma=eliminar_miles(campo2013)+eliminar_miles(campo2014)+eliminar_miles(campo2015)+eliminar_miles(campo2016)+eliminar_miles(campo2017)+eliminar_miles(campo2018)+eliminar_miles(campo2019)+eliminar_miles(campo2020);
				if ( suma==0 )
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2024 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A3). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2024 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A3). \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
                }
            }  

    }  
    //Regla 44   
    if ($(campo_j).attr('id')=='txt_F2_S2_P2024')
    {
    campo2013=$.trim($('#txt_F2_S2_P2013').val());
    campo2014=$.trim($('#txt_F2_S2_P2014').val());
    campo2015=$.trim($('#txt_F2_S2_P2015').val());
    campo2016=$.trim($('#txt_F2_S2_P2016').val());
    campo2017=$.trim($('#txt_F2_S2_P2017').val());
    campo2018=$.trim($('#txt_F2_S2_P2018').val());
    campo2019=$.trim($('#txt_F2_S2_P2019').val());
    campo2020=$.trim($('#txt_F2_S2_P2020').val());
    campo2021=$.trim($('#txt_F2_S2_P2021').val());
    campo2024=$.trim($('#txt_F2_S2_P2024').val());
	suma=eliminar_miles(campo2013)+eliminar_miles(campo2014)+eliminar_miles(campo2015)+eliminar_miles(campo2016)+eliminar_miles(campo2017)+eliminar_miles(campo2018)+eliminar_miles(campo2019)+eliminar_miles(campo2020);
            if ( suma > 0 )
            {
                if ( eliminar_miles(campo2021) == 0 || eliminar_miles(campo2024) == 0 )
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2024 - Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A3). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2024 - Error: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A3). \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}					
                }
            }  

    } 
    //Regla 45   
 if ($(campo_j).attr('id')=='txt_F2_S2_P2036')
    {
    campo2025=$.trim($('#txt_F2_S2_P2025').val());
    campo2026=$.trim($('#txt_F2_S2_P2026').val());
    campo2027=$.trim($('#txt_F2_S2_P2027').val());
    campo2028=$.trim($('#txt_F2_S2_P2028').val());
    campo2029=$.trim($('#txt_F2_S2_P2029').val());
    campo2030=$.trim($('#txt_F2_S2_P2030').val());
    campo2031=$.trim($('#txt_F2_S2_P2031').val());
    campo2032=$.trim($('#txt_F2_S2_P2032').val());
    campo2033=$.trim($('#txt_F2_S2_P2033').val());
    campo2036=$.trim($('#txt_F2_S2_P2036').val());
            if ( eliminar_miles(campo2033) > 0 || eliminar_miles(campo2036) > 0 )
            {
			    suma=eliminar_miles(campo2025)+eliminar_miles(campo2026)+eliminar_miles(campo2027)+eliminar_miles(campo2028)+eliminar_miles(campo2029)+eliminar_miles(campo2030)+eliminar_miles(campo2031)+eliminar_miles(campo2032);
				if ( suma==0 )
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2036 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A4). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2036 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A4). \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}					
                }
            }  

    }  
    //Regla 46  
    if ($(campo_j).attr('id')=='txt_F2_S2_P2036')
    {
    campo2025=$.trim($('#txt_F2_S2_P2025').val());
    campo2026=$.trim($('#txt_F2_S2_P2026').val());
    campo2027=$.trim($('#txt_F2_S2_P2027').val());
    campo2028=$.trim($('#txt_F2_S2_P2028').val());
    campo2029=$.trim($('#txt_F2_S2_P2029').val());
    campo2030=$.trim($('#txt_F2_S2_P2030').val());
    campo2031=$.trim($('#txt_F2_S2_P2031').val());
    campo2032=$.trim($('#txt_F2_S2_P2032').val());
    campo2033=$.trim($('#txt_F2_S2_P2033').val());
    campo2036=$.trim($('#txt_F2_S2_P2036').val());
	suma=eliminar_miles(campo2025)+eliminar_miles(campo2026)+eliminar_miles(campo2027)+eliminar_miles(campo2028)+eliminar_miles(campo2029)+eliminar_miles(campo2030)+eliminar_miles(campo2031)+eliminar_miles(campo2032);
            if ( suma > 0 )
            {
                if ( eliminar_miles(campo2033) == 0 || eliminar_miles(campo2036) == 0 )
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2036 - Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A4). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2036 - Error: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A4). \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
                }
            }  

    } 
    //Regla 47   
 if ($(campo_j).attr('id')=='txt_F2_S2_P2048')
    {
    campo2037=$.trim($('#txt_F2_S2_P2037').val());
    campo2038=$.trim($('#txt_F2_S2_P2038').val());
    campo2039=$.trim($('#txt_F2_S2_P2039').val());
    campo2040=$.trim($('#txt_F2_S2_P2040').val());
    campo2041=$.trim($('#txt_F2_S2_P2041').val());
    campo2042=$.trim($('#txt_F2_S2_P2042').val());
    campo2043=$.trim($('#txt_F2_S2_P2043').val());
    campo2044=$.trim($('#txt_F2_S2_P2044').val());
    campo2045=$.trim($('#txt_F2_S2_P2045').val());
    campo2048=$.trim($('#txt_F2_S2_P2048').val());
            if ( eliminar_miles(campo2045) > 0 || eliminar_miles(campo2048) > 0 )
            {
			    suma=eliminar_miles(campo2037)+eliminar_miles(campo2038)+eliminar_miles(campo2039)+eliminar_miles(campo2040)+eliminar_miles(campo2041)+eliminar_miles(campo2042)+eliminar_miles(campo2043)+eliminar_miles(campo2044);
				if ( suma==0 )
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2048 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A5). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2048 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A5). \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}					
                }
            }  

    }  
    //Regla 48  
    if ($(campo_j).attr('id')=='txt_F2_S2_P2048')
    {
    campo2037=$.trim($('#txt_F2_S2_P2037').val());
    campo2038=$.trim($('#txt_F2_S2_P2038').val());
    campo2039=$.trim($('#txt_F2_S2_P2039').val());
    campo2040=$.trim($('#txt_F2_S2_P2040').val());
    campo2041=$.trim($('#txt_F2_S2_P2041').val());
    campo2042=$.trim($('#txt_F2_S2_P2042').val());
    campo2043=$.trim($('#txt_F2_S2_P2043').val());
    campo2044=$.trim($('#txt_F2_S2_P2044').val());
    campo2045=$.trim($('#txt_F2_S2_P2045').val());
    campo2048=$.trim($('#txt_F2_S2_P2048').val());
	suma=eliminar_miles(campo2037)+eliminar_miles(campo2038)+eliminar_miles(campo2039)+eliminar_miles(campo2040)+eliminar_miles(campo2041)+eliminar_miles(campo2042)+eliminar_miles(campo2043)+eliminar_miles(campo2044);
            if ( suma > 0 )
            {
                if ( eliminar_miles(campo2045) == 0 || eliminar_miles(campo2048) == 0 )
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2048 - Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A5). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2048 - Error: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A5). \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}					
                }
            }  

    } 
    //Regla 49   
 if ($(campo_j).attr('id')=='txt_F2_S2_P2060')
    {
    campo2049=$.trim($('#txt_F2_S2_P2049').val());
    campo2050=$.trim($('#txt_F2_S2_P2050').val());
    campo2051=$.trim($('#txt_F2_S2_P2051').val());
    campo2052=$.trim($('#txt_F2_S2_P2052').val());
    campo2053=$.trim($('#txt_F2_S2_P2053').val());
    campo2054=$.trim($('#txt_F2_S2_P2054').val());
    campo2055=$.trim($('#txt_F2_S2_P2055').val());
    campo2056=$.trim($('#txt_F2_S2_P2056').val());
    campo2057=$.trim($('#txt_F2_S2_P2057').val());
    campo2060=$.trim($('#txt_F2_S2_P2060').val());
            if ( eliminar_miles(campo2057) > 0 || eliminar_miles(campo2060) > 0 )
            {
			    suma=eliminar_miles(campo2049)+eliminar_miles(campo2050)+eliminar_miles(campo2051)+eliminar_miles(campo2052)+eliminar_miles(campo2053)+eliminar_miles(campo2054)+eliminar_miles(campo2055)+eliminar_miles(campo2056);
				if ( suma==0 )
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2060 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A6 y A7). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2060 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A6 y A7). \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}					
                }
            }  

    }  
    //Regla 50  
    if ($(campo_j).attr('id')=='txt_F2_S2_P2060')
    {
    campo2049=$.trim($('#txt_F2_S2_P2049').val());
    campo2050=$.trim($('#txt_F2_S2_P2050').val());
    campo2051=$.trim($('#txt_F2_S2_P2051').val());
    campo2052=$.trim($('#txt_F2_S2_P2052').val());
    campo2053=$.trim($('#txt_F2_S2_P2053').val());
    campo2054=$.trim($('#txt_F2_S2_P2054').val());
    campo2055=$.trim($('#txt_F2_S2_P2055').val());
    campo2056=$.trim($('#txt_F2_S2_P2056').val());
    campo2057=$.trim($('#txt_F2_S2_P2057').val());
    campo2060=$.trim($('#txt_F2_S2_P2060').val());
	suma=eliminar_miles(campo2049)+eliminar_miles(campo2050)+eliminar_miles(campo2051)+eliminar_miles(campo2052)+eliminar_miles(campo2053)+eliminar_miles(campo2054)+eliminar_miles(campo2055)+eliminar_miles(campo2056);
            if ( suma > 0 )
            {
                if ( eliminar_miles(campo2057) == 0 || eliminar_miles(campo2060) == 0 )
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2060 - Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A6 y A7). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2060 - Error: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A6 y A7). \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}					
                }
            }  

    } 
    //Regla 51  
 if ($(campo_j).attr('id')=='txt_F2_S2_P2072')
    {
    campo2061=$.trim($('#txt_F2_S2_P2061').val());
    campo2062=$.trim($('#txt_F2_S2_P2062').val());
    campo2063=$.trim($('#txt_F2_S2_P2063').val());
    campo2064=$.trim($('#txt_F2_S2_P2064').val());
    campo2065=$.trim($('#txt_F2_S2_P2065').val());
    campo2066=$.trim($('#txt_F2_S2_P2066').val());
    campo2067=$.trim($('#txt_F2_S2_P2067').val());
    campo2068=$.trim($('#txt_F2_S2_P2068').val());
    campo2069=$.trim($('#txt_F2_S2_P2069').val());
    campo2072=$.trim($('#txt_F2_S2_P2072').val());
            if ( eliminar_miles(campo2069) > 0 || eliminar_miles(campo2072) > 0 )
            {
			    suma=eliminar_miles(campo2061)+eliminar_miles(campo2062)+eliminar_miles(campo2063)+eliminar_miles(campo2064)+eliminar_miles(campo2065)+eliminar_miles(campo2066)+eliminar_miles(campo2067)+eliminar_miles(campo2068);
				if ( suma==0 )
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2072 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A8). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2072 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron (A8). \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
            }  

    }  
    //Regla 52  
    if ($(campo_j).attr('id')=='txt_F2_S2_P2072')
    {
    campo2061=$.trim($('#txt_F2_S2_P2061').val());
    campo2062=$.trim($('#txt_F2_S2_P2062').val());
    campo2063=$.trim($('#txt_F2_S2_P2063').val());
    campo2064=$.trim($('#txt_F2_S2_P2064').val());
    campo2065=$.trim($('#txt_F2_S2_P2065').val());
    campo2066=$.trim($('#txt_F2_S2_P2066').val());
    campo2067=$.trim($('#txt_F2_S2_P2067').val());
    campo2068=$.trim($('#txt_F2_S2_P2068').val());
    campo2069=$.trim($('#txt_F2_S2_P2069').val());
    campo2072=$.trim($('#txt_F2_S2_P2072').val());
	suma=eliminar_miles(campo2061)+eliminar_miles(campo2062)+eliminar_miles(campo2063)+eliminar_miles(campo2064)+eliminar_miles(campo2065)+eliminar_miles(campo2066)+eliminar_miles(campo2067)+eliminar_miles(campo2068);
            if ( suma > 0 )
            {
                if ( eliminar_miles(campo2069) == 0 || eliminar_miles(campo2072) == 0 )
                {
					if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2072 - Advertencia: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A8). \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2072 - Error: Informa personas que trabajaron pero no informa pago de remuneraciones u honorarios (A8). \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
                }
            }  

    } 
       //Regla 53	
 if ($(campo_j).attr('id')=='txt_F2_S2_P2073')
    {
    campo2001=$.trim($('#txt_F2_S2_P2001').val());
    campo2013=$.trim($('#txt_F2_S2_P2013').val());
    campo2025=$.trim($('#txt_F2_S2_P2025').val());
    campo2037=$.trim($('#txt_F2_S2_P2037').val());
    campo2049=$.trim($('#txt_F2_S2_P2049').val());
    campo2061=$.trim($('#txt_F2_S2_P2061').val());
    campo2073=$.trim($('#txt_F2_S2_P2073').val());
    suma=eliminar_miles(campo2001)+eliminar_miles(campo2013)+eliminar_miles(campo2025)+eliminar_miles(campo2037)+eliminar_miles(campo2049)+eliminar_miles(campo2061);

            if ( suma !=  eliminar_miles(campo2073) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2073 - Advertencia: Total de control Hombres (A1 a A8), Trimestre 1 No Cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2073 - Error: Total de control Hombres (A1 a A8), Trimestre 1 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
            }  

    }       
        //Regla 54
 if ($(campo_j).attr('id')=='txt_F2_S2_P2074')
    {
    campo2002=$.trim($('#txt_F2_S2_P2002').val());
    campo2014=$.trim($('#txt_F2_S2_P2014').val());
    campo2026=$.trim($('#txt_F2_S2_P2026').val());
    campo2038=$.trim($('#txt_F2_S2_P2038').val());
    campo2050=$.trim($('#txt_F2_S2_P2050').val());
    campo2062=$.trim($('#txt_F2_S2_P2062').val());
    campo2074=$.trim($('#txt_F2_S2_P2074').val());
    suma=eliminar_miles(campo2002)+eliminar_miles(campo2014)+eliminar_miles(campo2026)+eliminar_miles(campo2038)+eliminar_miles(campo2050)+eliminar_miles(campo2062);

            if ( suma !=  eliminar_miles(campo2074) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2074 - Advertencia: Total de control Mujeres (A1 a A8), Trimestre 1 No Cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2074 - Error: Total de control Mujeres (A1 a A8), Trimestre 1 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
            }  

    }  
      //Regla 55	 
 if ($(campo_j).attr('id')=='txt_F2_S2_P2075')
    {
    campo2003=$.trim($('#txt_F2_S2_P2003').val());
    campo2015=$.trim($('#txt_F2_S2_P2015').val());
    campo2027=$.trim($('#txt_F2_S2_P2027').val());
    campo2039=$.trim($('#txt_F2_S2_P2039').val());
    campo2051=$.trim($('#txt_F2_S2_P2051').val());
    campo2063=$.trim($('#txt_F2_S2_P2063').val());
    campo2075=$.trim($('#txt_F2_S2_P2075').val());
    suma=eliminar_miles(campo2003)+eliminar_miles(campo2015)+eliminar_miles(campo2027)+eliminar_miles(campo2039)+eliminar_miles(campo2051)+eliminar_miles(campo2063);

            if ( suma !=  eliminar_miles(campo2075) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2075 - Advertencia: Total de control Hombres (A1 a A8), Trimestre 2 No Cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2075 - Error: Total de control Hombres (A1 a A8), Trimestre 2 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}					
            }  

    }  
    //Regla 56
 if ($(campo_j).attr('id')=='txt_F2_S2_P2076')
    {
    campo2004=$.trim($('#txt_F2_S2_P2004').val());
    campo2016=$.trim($('#txt_F2_S2_P2016').val());
    campo2028=$.trim($('#txt_F2_S2_P2028').val());
    campo2040=$.trim($('#txt_F2_S2_P2040').val());
    campo2052=$.trim($('#txt_F2_S2_P2052').val());
    campo2064=$.trim($('#txt_F2_S2_P2064').val());
    campo2076=$.trim($('#txt_F2_S2_P2076').val());
    suma=eliminar_miles(campo2004)+eliminar_miles(campo2016)+eliminar_miles(campo2028)+eliminar_miles(campo2040)+eliminar_miles(campo2052)+eliminar_miles(campo2064);

            if ( suma !=  eliminar_miles(campo2076) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2076 - Advertencia: Total de control Mujeres (A1 a A8), Trimestre 2 No Cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2076 - Error: Total de control Mujeres (A1 a A8), Trimestre 2 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}					
            }  

    } 
       //Regla 57
 if ($(campo_j).attr('id')=='txt_F2_S2_P2077')
    {
    campo2005=$.trim($('#txt_F2_S2_P2005').val());
    campo2017=$.trim($('#txt_F2_S2_P2017').val());
    campo2029=$.trim($('#txt_F2_S2_P2029').val());
    campo2041=$.trim($('#txt_F2_S2_P2041').val());
    campo2053=$.trim($('#txt_F2_S2_P2053').val());
    campo2065=$.trim($('#txt_F2_S2_P2065').val());
    campo2077=$.trim($('#txt_F2_S2_P2077').val());
    suma=eliminar_miles(campo2005)+eliminar_miles(campo2017)+eliminar_miles(campo2029)+eliminar_miles(campo2041)+eliminar_miles(campo2053)+eliminar_miles(campo2065);

            if ( suma !=  eliminar_miles(campo2077) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2077 - Advertencia: Total de control Hombres (A1 a A8), Trimestre 3 No Cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2077 - Error: Total de control Hombres (A1 a A8), Trimestre 3 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
            }  

    }  
         //Regla 58
 if ($(campo_j).attr('id')=='txt_F2_S2_P2078')
    {
    campo2006=$.trim($('#txt_F2_S2_P2006').val());
    campo2018=$.trim($('#txt_F2_S2_P2018').val());
    campo2030=$.trim($('#txt_F2_S2_P2030').val());
    campo2042=$.trim($('#txt_F2_S2_P2042').val());
    campo2054=$.trim($('#txt_F2_S2_P2054').val());
    campo2066=$.trim($('#txt_F2_S2_P2066').val());
    campo2078=$.trim($('#txt_F2_S2_P2078').val());
    suma=eliminar_miles(campo2006)+eliminar_miles(campo2018)+eliminar_miles(campo2030)+eliminar_miles(campo2042)+eliminar_miles(campo2054)+eliminar_miles(campo2066);

            if ( suma !=  eliminar_miles(campo2078) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2078 - Advertencia: Total de control Mujeres (A1 a A8), Trimestre 3 No Cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2078 - Error: Total de control Mujeres (A1 a A8), Trimestre 3 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
            }  

    }  
      //Regla 59
 if ($(campo_j).attr('id')=='txt_F2_S2_P2079')
    {
    campo2007=$.trim($('#txt_F2_S2_P2007').val());
    campo2019=$.trim($('#txt_F2_S2_P2019').val());
    campo2031=$.trim($('#txt_F2_S2_P2031').val());
    campo2043=$.trim($('#txt_F2_S2_P2043').val());
    campo2055=$.trim($('#txt_F2_S2_P2055').val());
    campo2067=$.trim($('#txt_F2_S2_P2067').val());
    campo2079=$.trim($('#txt_F2_S2_P2079').val());
    suma=eliminar_miles(campo2007)+eliminar_miles(campo2019)+eliminar_miles(campo2031)+eliminar_miles(campo2043)+eliminar_miles(campo2055)+eliminar_miles(campo2067);

            if ( suma !=  eliminar_miles(campo2079) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2079 - Advertencia: Total de control Hombres (A1 a A8), Trimestre 4 No Cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2079 - Error: Total de control Hombres (A1 a A8), Trimestre 4 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
            }  

    }  
          //Regla 60
 if ($(campo_j).attr('id')=='txt_F2_S2_P2080')
    {
    campo2008=$.trim($('#txt_F2_S2_P2008').val());
    campo2020=$.trim($('#txt_F2_S2_P2020').val());
    campo2032=$.trim($('#txt_F2_S2_P2032').val());
    campo2044=$.trim($('#txt_F2_S2_P2044').val());
    campo2056=$.trim($('#txt_F2_S2_P2056').val());
    campo2068=$.trim($('#txt_F2_S2_P2068').val());
    campo2080=$.trim($('#txt_F2_S2_P2080').val());
    suma=eliminar_miles(campo2008)+eliminar_miles(campo2020)+eliminar_miles(campo2032)+eliminar_miles(campo2044)+eliminar_miles(campo2056)+eliminar_miles(campo2068);

            if ( suma !=  eliminar_miles(campo2080) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2080 - Advertencia: Total de control Mujeres (A1 a A8), Trimestre 4 No Cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2080 - Error: Total de control Mujeres (A1 a A8), Trimestre 4 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}					
            }  

    }  
      //Regla 61
 if ($(campo_j).attr('id')=='txt_F2_S2_P2081')
    {
    campo2009=$.trim($('#txt_F2_S2_P2009').val());
    campo2021=$.trim($('#txt_F2_S2_P2021').val());
    campo2033=$.trim($('#txt_F2_S2_P2033').val());
    campo2045=$.trim($('#txt_F2_S2_P2045').val());
    campo2057=$.trim($('#txt_F2_S2_P2057').val());
    campo2069=$.trim($('#txt_F2_S2_P2069').val());
    campo2081=$.trim($('#txt_F2_S2_P2081').val());
    suma=eliminar_miles(campo2009)+eliminar_miles(campo2021)+eliminar_miles(campo2033)+eliminar_miles(campo2045)+eliminar_miles(campo2057)+eliminar_miles(campo2069);

            if ( suma !=  eliminar_miles(campo2081) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2081 - Advertencia: Total de control Remuneraciones (A1 a A8) No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2081 - Error: Total de control Remuneraciones (A1 a A8) No cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}
            }  

    }  
      //Regla 62
 if ($(campo_j).attr('id')=='txt_F2_S2_P2082')
    {
    campo2010=$.trim($('#txt_F2_S2_P2010').val());
    campo2022=$.trim($('#txt_F2_S2_P2022').val());
    campo2034=$.trim($('#txt_F2_S2_P2034').val());
    campo2046=$.trim($('#txt_F2_S2_P2046').val());
    campo2058=$.trim($('#txt_F2_S2_P2058').val());
    campo2070=$.trim($('#txt_F2_S2_P2070').val());
    campo2082=$.trim($('#txt_F2_S2_P2082').val());
    suma=eliminar_miles(campo2010)+eliminar_miles(campo2022)+eliminar_miles(campo2034)+eliminar_miles(campo2046)+eliminar_miles(campo2058)+eliminar_miles(campo2070);

            if ( suma !=  eliminar_miles(campo2082) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2082 - Advertencia: Total de control Otras Remuneraciones (A1 a A8) No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2082 - Error: Total de control Otras Remuneraciones (A1 a A8) No cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
            }  

    }  
        //Regla 63
 if ($(campo_j).attr('id')=='txt_F2_S2_P2083')
    {
    campo2011=$.trim($('#txt_F2_S2_P2011').val());
    campo2023=$.trim($('#txt_F2_S2_P2023').val());
    campo2035=$.trim($('#txt_F2_S2_P2035').val());
    campo2047=$.trim($('#txt_F2_S2_P2047').val());
    campo2059=$.trim($('#txt_F2_S2_P2059').val());
    campo2071=$.trim($('#txt_F2_S2_P2071').val());
    campo2083=$.trim($('#txt_F2_S2_P2083').val());
    suma=eliminar_miles(campo2011)+eliminar_miles(campo2023)+eliminar_miles(campo2035)+eliminar_miles(campo2047)+eliminar_miles(campo2059)+eliminar_miles(campo2071);

            if ( suma !=  eliminar_miles(campo2083) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2083 - Advertencia: Total de control Aportes Patronales No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2083 - Error: Total de control Aportes Patronales No cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
            }  

    }  
        //Regla 64
 if ($(campo_j).attr('id')=='txt_F2_S2_P2084')
    {
    campo2012=$.trim($('#txt_F2_S2_P2012').val());
    campo2024=$.trim($('#txt_F2_S2_P2024').val());
    campo2036=$.trim($('#txt_F2_S2_P2036').val());
    campo2048=$.trim($('#txt_F2_S2_P2048').val());
    campo2060=$.trim($('#txt_F2_S2_P2060').val());
    campo2072=$.trim($('#txt_F2_S2_P2072').val());
    campo2084=$.trim($('#txt_F2_S2_P2084').val());
    suma=eliminar_miles(campo2012)+eliminar_miles(campo2024)+eliminar_miles(campo2036)+eliminar_miles(campo2048)+eliminar_miles(campo2060)+eliminar_miles(campo2072);

            if ( suma !=  eliminar_miles(campo2084) )
            {
				if (perfil == 4)
					{
					mensaje=mensaje +("Campo 2084 - Advertencia: Total de control Honorarios No cuadra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2084 - Error: Total de control Honorarios No cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
            }  

    }  
           // Regla 65
if ($(campo_j).attr('id')=='txt_F2_S2_P2084')
    {
	suma=0
	for (i=1;i<85;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F2_S2_P200'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F2_S2_P20'+i).val());
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
					mensaje=mensaje +("Campo 2001 al 2084 - Advertencia: No informa empleo y costo de la mano de obra. \n");
					$(campo_j).css('border','2px solid #FFA500');
					advertencia++;
					foco[++cont] = campo_j;
					}
					else
					{
					mensaje=mensaje +("Campos 2001 al 2084 - Error: No informa empleo y costo de la mano de obra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
                }
    }
    
    });
    return [advertencia,error,foco[0], mensaje];
}



