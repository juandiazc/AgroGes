camposDecimal = [];
camposletra=[];
camposMiles=['txt_F1_S2_P2001','txt_F1_S2_P2002','txt_F1_S2_P2003','txt_F1_S2_P2004','txt_F1_S2_P2005','txt_F1_S2_P2006','txt_F1_S2_P2007',
'txt_F1_S2_P2008','txt_F1_S2_P2009','txt_F1_S2_P2010','txt_F1_S2_P2011','txt_F1_S2_P2012','txt_F1_S2_P2013','txt_F1_S2_P2014',
'txt_F1_S2_P2015','txt_F1_S2_P2016','txt_F1_S2_P2017','txt_F1_S2_P2018','txt_F1_S2_P2019','txt_F1_S2_P2020','txt_F1_S2_P2021',
'txt_F1_S2_P2022','txt_F1_S2_P2023','txt_F1_S2_P2024','txt_F1_S2_P2025','txt_F1_S2_P2026','txt_F1_S2_P2027','txt_F1_S2_P2028',
'txt_F1_S2_P2029','txt_F1_S2_P2030','txt_F1_S2_P2031','txt_F1_S2_P2032','txt_F1_S2_P2033','txt_F1_S2_P2034','txt_F1_S2_P2035',
'txt_F1_S2_P2036','txt_F1_S2_P2037','txt_F1_S2_P2038','txt_F1_S2_P2039','txt_F1_S2_P2040','txt_F1_S2_P2041','txt_F1_S2_P2042',
'txt_F1_S2_P2043','txt_F1_S2_P2044','txt_F1_S2_P2045','txt_F1_S2_P2046','txt_F1_S2_P2047','txt_F1_S2_P2048','txt_F1_S2_P2049',
'txt_F1_S2_P2050','txt_F1_S2_P2051','txt_F1_S2_P2052','txt_F1_S2_P2053','txt_F1_S2_P2054','txt_F1_S2_P2055','txt_F1_S2_P2056',
'txt_F1_S2_P2057','txt_F1_S2_P2058','txt_F1_S2_P2059','txt_F1_S2_P2060','txt_F1_S2_P2061','txt_F1_S2_P2062','txt_F1_S2_P2063',
'txt_F1_S2_P2064','txt_F1_S2_P2065','txt_F1_S2_P2066','txt_F1_S2_P2067','txt_F1_S2_P2068','txt_F1_S2_P2069','txt_F1_S2_P2070',
'txt_F1_S2_P2071','txt_F1_S2_P2072','txt_F1_S2_P2073','txt_F1_S2_P2074','txt_F1_S2_P2075','txt_F1_S2_P2076','txt_F1_S2_P2077',
'txt_F1_S2_P2078','txt_F1_S2_P2079','txt_F1_S2_P2080','txt_F1_S2_P2081','txt_F1_S2_P2082','txt_F1_S2_P2083','txt_F1_S2_P2084',
'txt_F1_S2_P2085','txt_F1_S2_P2086','txt_F1_S2_P2087','txt_F1_S2_P2088','txt_F1_S2_P2089','txt_F1_S2_P2090','txt_F1_S2_P2091',
'txt_F1_S2_P2092','txt_F1_S2_P2093','txt_F1_S2_P2094','txt_F1_S2_P2095','txt_F1_S2_P2096','txt_F1_S2_P2097','txt_F1_S2_P2098'];
campoSoloTexto=[];
function validar (campo_j){
    campo_j = "#"+campo_j;
 //Regla 72    
 if ($(campo_j).attr('id')=='txt_F1_S2_P2014')
    {
    campo2001=$.trim($('#txt_F1_S2_P2001').val());
    campo2002=$.trim($('#txt_F1_S2_P2002').val());
    campo2003=$.trim($('#txt_F1_S2_P2003').val());
    campo2004=$.trim($('#txt_F1_S2_P2004').val());
    campo2005=$.trim($('#txt_F1_S2_P2005').val());
    campo2006=$.trim($('#txt_F1_S2_P2006').val());
    campo2007=$.trim($('#txt_F1_S2_P2007').val());
    campo2008=$.trim($('#txt_F1_S2_P2008').val());
    campo2009=$.trim($('#txt_F1_S2_P2009').val());
    campo2010=$.trim($('#txt_F1_S2_P2010').val());
    campo2011=$.trim($('#txt_F1_S2_P2011').val());
    campo2014=$.trim($('#txt_F1_S2_P2014').val());
            if ( eliminar_miles(campo2011) > 0 || eliminar_miles(campo2014) > 0 )
            {
			    suma=eliminar_miles(campo2001)+eliminar_miles(campo2002)+eliminar_miles(campo2003)+eliminar_miles(campo2004)+eliminar_miles(campo2005)+eliminar_miles(campo2006)+eliminar_miles(campo2007)+eliminar_miles(campo2008);
				suma2=eliminar_miles(campo2009)+eliminar_miles(campo2010);
                if ( suma2== 0 || suma==0 )
                {
                    if (perfil == 4)
				    {
				        if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas.\n ¿Desea continuar?'))
					    {
					    $('#txt_F1_S2_P2001').focus();
					    $('#txt_F1_S2_P2001').select();
					    return false;
					    }
					    else
					    {
					    flag_2 = true;
					    $('#txt_F1_S2_P2015').focus();
					    return false;
					    }    
				    }
				    else
				    {
                        alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas.");
                        $('#txt_F1_S2_P2001').focus();
                        $('#txt_F1_S2_P2001').select();
                        return false;
                    }
                }
            }  

    }  
    //Regla 73   
    if ($(campo_j).attr('id')=='txt_F1_S2_P2014')
    {
    campo2001=$.trim($('#txt_F1_S2_P2001').val());
    campo2002=$.trim($('#txt_F1_S2_P2002').val());
    campo2003=$.trim($('#txt_F1_S2_P2003').val());
    campo2004=$.trim($('#txt_F1_S2_P2004').val());
    campo2005=$.trim($('#txt_F1_S2_P2005').val());
    campo2006=$.trim($('#txt_F1_S2_P2006').val());
    campo2007=$.trim($('#txt_F1_S2_P2007').val());
    campo2008=$.trim($('#txt_F1_S2_P2008').val());
    campo2009=$.trim($('#txt_F1_S2_P2009').val());
    campo2010=$.trim($('#txt_F1_S2_P2010').val());
    campo2011=$.trim($('#txt_F1_S2_P2011').val());
    campo2014=$.trim($('#txt_F1_S2_P2014').val());
	suma=eliminar_miles(campo2001)+eliminar_miles(campo2002)+eliminar_miles(campo2003)+eliminar_miles(campo2004)+eliminar_miles(campo2005)+eliminar_miles(campo2006)+eliminar_miles(campo2007)+eliminar_miles(campo2008);
	suma2=eliminar_miles(campo2009)+eliminar_miles(campo2010);
            if ( suma > 0 || suma2 > 0  )
            {
                if ( eliminar_miles(campo2011) == 0 || eliminar_miles(campo2014) == 0 )
                {
                    if(!confirm('Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios.\n ¿Desea continuar?')){
                    $('#txt_F1_S2_P2001').focus();
                    $('#txt_F1_S2_P2001').select();
                    return false;
                    }else{
                    flag_2 = true;
                    $('#txt_F1_S2_P2015').focus();
                    return false;
                    }
                }
            }  

    } 
    //Regla 74   
 if ($(campo_j).attr('id')=='txt_F1_S2_P2028')
    {
    campo2015=$.trim($('#txt_F1_S2_P2015').val());
    campo2016=$.trim($('#txt_F1_S2_P2016').val());
    campo2017=$.trim($('#txt_F1_S2_P2017').val());
    campo2018=$.trim($('#txt_F1_S2_P2018').val());
    campo2019=$.trim($('#txt_F1_S2_P2019').val());
    campo2020=$.trim($('#txt_F1_S2_P2020').val());
    campo2021=$.trim($('#txt_F1_S2_P2021').val());
    campo2022=$.trim($('#txt_F1_S2_P2022').val());
    campo2023=$.trim($('#txt_F1_S2_P2023').val());
    campo2024=$.trim($('#txt_F1_S2_P2024').val());
    campo2025=$.trim($('#txt_F1_S2_P2025').val());
    campo2028=$.trim($('#txt_F1_S2_P2028').val());
            if ( eliminar_miles(campo2025) > 0 || eliminar_miles(campo2028) > 0 )
            {
			    suma=eliminar_miles(campo2015)+eliminar_miles(campo2016)+eliminar_miles(campo2017)+eliminar_miles(campo2018)+eliminar_miles(campo2019)+eliminar_miles(campo2020)+eliminar_miles(campo2021)+eliminar_miles(campo2022);
				suma2=eliminar_miles(campo2023)+eliminar_miles(campo2024);
                if ( suma2== 0 || suma==0 )
                {
                    if (perfil == 4)
				    {
				        if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas.\n ¿Desea continuar?'))
					    {
					    $('#txt_F1_S2_P2015').focus();
					    $('#txt_F1_S2_P2015').select();
					    return false;
					    }
					    else
					    {
					    flag_2 = true;
					    $('#txt_F1_S2_P2029').focus();
					    return false;
					    }    
				    }
				    else
				    {
                        alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas.");
                        $('#txt_F1_S2_P2015').focus();
                        $('#txt_F1_S2_P2015').select();
                        return false;
                    }
                }
            }  

    }  
    //Regla 75   
    if ($(campo_j).attr('id')=='txt_F1_S2_P2028')
    {
    campo2015=$.trim($('#txt_F1_S2_P2015').val());
    campo2016=$.trim($('#txt_F1_S2_P2016').val());
    campo2017=$.trim($('#txt_F1_S2_P2017').val());
    campo2018=$.trim($('#txt_F1_S2_P2018').val());
    campo2019=$.trim($('#txt_F1_S2_P2019').val());
    campo2020=$.trim($('#txt_F1_S2_P2020').val());
    campo2021=$.trim($('#txt_F1_S2_P2021').val());
    campo2022=$.trim($('#txt_F1_S2_P2022').val());
    campo2023=$.trim($('#txt_F1_S2_P2023').val());
    campo2024=$.trim($('#txt_F1_S2_P2024').val());
    campo2025=$.trim($('#txt_F1_S2_P2025').val());
    campo2028=$.trim($('#txt_F1_S2_P2028').val());
	suma=eliminar_miles(campo2015)+eliminar_miles(campo2016)+eliminar_miles(campo2017)+eliminar_miles(campo2018)+eliminar_miles(campo2019)+eliminar_miles(campo2020)+eliminar_miles(campo2021)+eliminar_miles(campo2022);
	suma2=eliminar_miles(campo2023)+eliminar_miles(campo2024);
            if ( suma > 0 || suma2 > 0  )
            {
                if ( eliminar_miles(campo2025) == 0 || eliminar_miles(campo2028) == 0 )
                {
                    if (perfil == 4)
				    {
				        if(!confirm('Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios.\n ¿Desea continuar?'))
					    {
					    $('#txt_F1_S2_P2015').focus();
					    $('#txt_F1_S2_P2015').select();
					    return false;
					    }
					    else
					    {
					    flag_2 = true;
					    $('#txt_F1_S2_P2029').focus();
					    return false;
					    }    
				    }
				    else
				    {
                        alert("Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios.");
                        $('#txt_F1_S2_P2015').focus();
                        $('#txt_F1_S2_P2015').select();
                        return false;
                    }
                }
            }  

    }     
  //Regla 76   
 if ($(campo_j).attr('id')=='txt_F1_S2_P2042')
    {
    campo2029=$.trim($('#txt_F1_S2_P2029').val());
    campo2030=$.trim($('#txt_F1_S2_P2030').val());
    campo2031=$.trim($('#txt_F1_S2_P2031').val());
    campo2032=$.trim($('#txt_F1_S2_P2032').val());
    campo2033=$.trim($('#txt_F1_S2_P2033').val());
    campo2034=$.trim($('#txt_F1_S2_P2034').val());
    campo2035=$.trim($('#txt_F1_S2_P2035').val());
    campo2036=$.trim($('#txt_F1_S2_P2036').val());
    campo2037=$.trim($('#txt_F1_S2_P2037').val());
    campo2038=$.trim($('#txt_F1_S2_P2038').val());
    campo2039=$.trim($('#txt_F1_S2_P2039').val());
    campo2042=$.trim($('#txt_F1_S2_P2042').val());
            if ( eliminar_miles(campo2039) > 0 || eliminar_miles(campo2042) > 0 )
            {
			    suma=eliminar_miles(campo2029)+eliminar_miles(campo2030)+eliminar_miles(campo2031)+eliminar_miles(campo2032)+eliminar_miles(campo2033)+eliminar_miles(campo2034)+eliminar_miles(campo2035)+eliminar_miles(campo2036);
				suma2=eliminar_miles(campo2037)+eliminar_miles(campo2038);
                if ( suma2== 0 || suma==0 )
                {
                    if (perfil == 4)
				    {
				        if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas.\n ¿Desea continuar?'))
					    {
					    $('#txt_F1_S2_P2029').focus();
					    $('#txt_F1_S2_P2029').select();
					    return false;
					    }
					    else
					    {
					    flag_2 = true;
					    $('#txt_F1_S2_P2043').focus();
					    return false;
					    }    
				    }
				    else
				    {
                        alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas.");
                        $('#txt_F1_S2_P2029').focus();
                        $('#txt_F1_S2_P2029').select();
                        return false;
                    }
                }
            }  

    }  
    //Regla 77   
    if ($(campo_j).attr('id')=='txt_F1_S2_P2042')
    {
    campo2029=$.trim($('#txt_F1_S2_P2029').val());
    campo2030=$.trim($('#txt_F1_S2_P2030').val());
    campo2031=$.trim($('#txt_F1_S2_P2031').val());
    campo2032=$.trim($('#txt_F1_S2_P2032').val());
    campo2033=$.trim($('#txt_F1_S2_P2033').val());
    campo2034=$.trim($('#txt_F1_S2_P2034').val());
    campo2035=$.trim($('#txt_F1_S2_P2035').val());
    campo2036=$.trim($('#txt_F1_S2_P2036').val());
    campo2037=$.trim($('#txt_F1_S2_P2037').val());
    campo2038=$.trim($('#txt_F1_S2_P2038').val());
    campo2039=$.trim($('#txt_F1_S2_P2039').val());
    campo2042=$.trim($('#txt_F1_S2_P2042').val());
	suma=eliminar_miles(campo2029)+eliminar_miles(campo2030)+eliminar_miles(campo2031)+eliminar_miles(campo2032)+eliminar_miles(campo2033)+eliminar_miles(campo2034)+eliminar_miles(campo2035)+eliminar_miles(campo2036);
	suma2=eliminar_miles(campo2037)+eliminar_miles(campo2038);
            if ( suma > 0 || suma2 > 0  )
            {
                if ( eliminar_miles(campo2039) == 0 || eliminar_miles(campo2042) == 0 )
                {
                    if (perfil == 4)
				    {
				        if(!confirm('Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios.\n ¿Desea continuar?'))
					    {
					    $('#txt_F1_S2_P2029').focus();
					    $('#txt_F1_S2_P2029').select();
					    return false;
					    }
					    else
					    {
					    flag_2 = true;
					    $('#txt_F1_S2_P2043').focus();
					    return false;
					    }    
				    }
				    else
				    {
                        alert("Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios.");
                        $('#txt_F1_S2_P2029').focus();
                        $('#txt_F1_S2_P2029').select();
                        return false;
                    }
                }
            }  

    } 
    //Regla 78   
 if ($(campo_j).attr('id')=='txt_F1_S2_P2056')
    {
    campo2043=$.trim($('#txt_F1_S2_P2043').val());
    campo2044=$.trim($('#txt_F1_S2_P2044').val());
    campo2045=$.trim($('#txt_F1_S2_P2045').val());
    campo2046=$.trim($('#txt_F1_S2_P2046').val());
    campo2047=$.trim($('#txt_F1_S2_P2047').val());
    campo2048=$.trim($('#txt_F1_S2_P2048').val());
    campo2049=$.trim($('#txt_F1_S2_P2049').val());
    campo2050=$.trim($('#txt_F1_S2_P2050').val());
    campo2051=$.trim($('#txt_F1_S2_P2051').val());
    campo2052=$.trim($('#txt_F1_S2_P2052').val());
    campo2053=$.trim($('#txt_F1_S2_P2053').val());
    campo2056=$.trim($('#txt_F1_S2_P2056').val());
            if ( eliminar_miles(campo2053) > 0 || eliminar_miles(campo2056) > 0 )
            {
			    suma=eliminar_miles(campo2043)+eliminar_miles(campo2044)+eliminar_miles(campo2045)+eliminar_miles(campo2046)+eliminar_miles(campo2047)+eliminar_miles(campo2048)+eliminar_miles(campo2049)+eliminar_miles(campo2050);
				suma2=eliminar_miles(campo2051)+eliminar_miles(campo2052);
                if ( suma2== 0 || suma==0 )
                {
                    if (perfil == 4)
				    {
				        if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas.\n ¿Desea continuar?'))
					    {
					    $('#txt_F1_S2_P2043').focus();
					    $('#txt_F1_S2_P2043').select();
					    return false;
					    }
					    else
					    {
					    flag_2 = true;
					    $('#txt_F1_S2_P2057').focus();
					    return false;
					    }    
				    }
				    else
				    {
                        alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas.");
                        $('#txt_F1_S2_P2043').focus();
                        $('#txt_F1_S2_P2043').select();
                        return false;
                    }
                }
            }  

    }  
    //Regla 79   
    if ($(campo_j).attr('id')=='txt_F1_S2_P2056')
    {
    campo2043=$.trim($('#txt_F1_S2_P2043').val());
    campo2044=$.trim($('#txt_F1_S2_P2044').val());
    campo2045=$.trim($('#txt_F1_S2_P2045').val());
    campo2046=$.trim($('#txt_F1_S2_P2046').val());
    campo2047=$.trim($('#txt_F1_S2_P2047').val());
    campo2048=$.trim($('#txt_F1_S2_P2048').val());
    campo2049=$.trim($('#txt_F1_S2_P2049').val());
    campo2050=$.trim($('#txt_F1_S2_P2050').val());
    campo2051=$.trim($('#txt_F1_S2_P2051').val());
    campo2052=$.trim($('#txt_F1_S2_P2052').val());
    campo2053=$.trim($('#txt_F1_S2_P2053').val());
    campo2056=$.trim($('#txt_F1_S2_P2056').val());
	suma=eliminar_miles(campo2043)+eliminar_miles(campo2044)+eliminar_miles(campo2045)+eliminar_miles(campo2046)+eliminar_miles(campo2047)+eliminar_miles(campo2048)+eliminar_miles(campo2049)+eliminar_miles(campo2050);
	suma2=eliminar_miles(campo2051)+eliminar_miles(campo2052);
            if ( suma > 0 || suma2 > 0  )
            {
                if ( eliminar_miles(campo2053) == 0 || eliminar_miles(campo2056) == 0 )
                {
                    if (perfil == 4)
				    {
				        if(!confirm('Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios.\n ¿Desea continuar?'))
					    {
					    $('#txt_F1_S2_P2043').focus();
					    $('#txt_F1_S2_P2043').select();
					    return false;
					    }
					    else
					    {
					    flag_2 = true;
					    $('#txt_F1_S2_P2057').focus();
					    return false;
					    }    
				    }
				    else
				    {
                        alert("Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios.");
                        $('#txt_F1_S2_P2043').focus();
                        $('#txt_F1_S2_P2043').select();
                        return false;
                    }
                }
            }  

    }     
    //Regla 80  
 if ($(campo_j).attr('id')=='txt_F1_S2_P2070')
    {
    campo2057=$.trim($('#txt_F1_S2_P2057').val());
    campo2058=$.trim($('#txt_F1_S2_P2058').val());
    campo2059=$.trim($('#txt_F1_S2_P2059').val());
    campo2060=$.trim($('#txt_F1_S2_P2060').val());
    campo2061=$.trim($('#txt_F1_S2_P2061').val());
    campo2062=$.trim($('#txt_F1_S2_P2062').val());
    campo2063=$.trim($('#txt_F1_S2_P2063').val());
    campo2064=$.trim($('#txt_F1_S2_P2064').val());
    campo2065=$.trim($('#txt_F1_S2_P2065').val());
    campo2066=$.trim($('#txt_F1_S2_P2066').val());
    campo2067=$.trim($('#txt_F1_S2_P2067').val());
    campo2070=$.trim($('#txt_F1_S2_P2070').val());
            if ( eliminar_miles(campo2067) > 0 || eliminar_miles(campo2070) > 0 )
            {
			    suma=eliminar_miles(campo2057)+eliminar_miles(campo2058)+eliminar_miles(campo2059)+eliminar_miles(campo2060)+eliminar_miles(campo2061)+eliminar_miles(campo2062)+eliminar_miles(campo2063)+eliminar_miles(campo2064);
				suma2=eliminar_miles(campo2065)+eliminar_miles(campo2066);
                if ( suma2== 0 || suma==0 )
                {
                    if (perfil == 4)
				    {
				        if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas.\n ¿Desea continuar?'))
					    {
					    $('#txt_F1_S2_P2057').focus();
					    $('#txt_F1_S2_P2057').select();
					    return false;
					    }
					    else
					    {
					    flag_2 = true;
					    $('#txt_F1_S2_P2071').focus();
					    return false;
					    }    
				    }
				    else
				    {
                        alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas.");
                        $('#txt_F1_S2_P2057').focus();
                        $('#txt_F1_S2_P2057').select();
                        return false;
                    }
                }
            }  

    }  
    //Regla 81   
    if ($(campo_j).attr('id')=='txt_F1_S2_P2070')
    {
    campo2057=$.trim($('#txt_F1_S2_P2057').val());
    campo2058=$.trim($('#txt_F1_S2_P2058').val());
    campo2059=$.trim($('#txt_F1_S2_P2059').val());
    campo2060=$.trim($('#txt_F1_S2_P2060').val());
    campo2061=$.trim($('#txt_F1_S2_P2061').val());
    campo2062=$.trim($('#txt_F1_S2_P2062').val());
    campo2063=$.trim($('#txt_F1_S2_P2063').val());
    campo2064=$.trim($('#txt_F1_S2_P2064').val());
    campo2065=$.trim($('#txt_F1_S2_P2065').val());
    campo2066=$.trim($('#txt_F1_S2_P2066').val());
    campo2067=$.trim($('#txt_F1_S2_P2067').val());
    campo2070=$.trim($('#txt_F1_S2_P2070').val());
	suma=eliminar_miles(campo2057)+eliminar_miles(campo2058)+eliminar_miles(campo2059)+eliminar_miles(campo2060)+eliminar_miles(campo2061)+eliminar_miles(campo2062)+eliminar_miles(campo2063)+eliminar_miles(campo2064);
	suma2=eliminar_miles(campo2065)+eliminar_miles(campo2066);
            if ( suma > 0 || suma2 > 0  )
            {
                if ( eliminar_miles(campo2067) == 0 || eliminar_miles(campo2070) == 0 )
                {
                    if (perfil == 4)
				    {
				        if(!confirm('Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios.\n ¿Desea continuar?'))
					    {
					    $('#txt_F1_S2_P2057').focus();
					    $('#txt_F1_S2_P2057').select();
					    return false;
					    }
					    else
					    {
					    flag_2 = true;
					    $('#txt_F1_S2_P2071').focus();
					    return false;
					    }    
				    }
				    else
				    {
                        alert("Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios.");
                        $('#txt_F1_S2_P2057').focus();
                        $('#txt_F1_S2_P2057').select();
                        return false;
                    }
                }
            }  

    }     
    //Regla 82  
 if ($(campo_j).attr('id')=='txt_F1_S2_P2084')
    {
    campo2071=$.trim($('#txt_F1_S2_P2071').val());
    campo2072=$.trim($('#txt_F1_S2_P2072').val());
    campo2073=$.trim($('#txt_F1_S2_P2073').val());
    campo2074=$.trim($('#txt_F1_S2_P2074').val());
    campo2075=$.trim($('#txt_F1_S2_P2075').val());
    campo2076=$.trim($('#txt_F1_S2_P2076').val());
    campo2077=$.trim($('#txt_F1_S2_P2077').val());
    campo2078=$.trim($('#txt_F1_S2_P2078').val());
    campo2079=$.trim($('#txt_F1_S2_P2079').val());
    campo2080=$.trim($('#txt_F1_S2_P2080').val());
    campo2081=$.trim($('#txt_F1_S2_P2081').val());
    campo2084=$.trim($('#txt_F1_S2_P2084').val());
            if ( eliminar_miles(campo2081) > 0 || eliminar_miles(campo2084) > 0 )
            {
			    suma=eliminar_miles(campo2071)+eliminar_miles(campo2072)+eliminar_miles(campo2073)+eliminar_miles(campo2074)+eliminar_miles(campo2075)+eliminar_miles(campo2076)+eliminar_miles(campo2077)+eliminar_miles(campo2078);
				suma2=eliminar_miles(campo2079)+eliminar_miles(campo2080);
                if ( suma2== 0 || suma==0 )
                {
                    if (perfil == 4)
				    {
				        if(!confirm('Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas.\n ¿Desea continuar?'))
					    {
					    $('#txt_F1_S2_P2071').focus();
					    $('#txt_F1_S2_P2071').select();
					    return false;
					    }
					    else
					    {
					    flag_2 = true;
					    $('#txt_F1_S2_P2085').focus();
					    return false;
					    }    
				    }
				    else
				    {
                        alert("Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas.");
                        $('#txt_F1_S2_P2071').focus();
                        $('#txt_F1_S2_P2071').select();
                        return false;
                    }
                }
            }  

    }  
    //Regla 83   
    if ($(campo_j).attr('id')=='txt_F1_S2_P2084')
    {
    campo2071=$.trim($('#txt_F1_S2_P2071').val());
    campo2072=$.trim($('#txt_F1_S2_P2072').val());
    campo2073=$.trim($('#txt_F1_S2_P2073').val());
    campo2074=$.trim($('#txt_F1_S2_P2074').val());
    campo2075=$.trim($('#txt_F1_S2_P2075').val());
    campo2076=$.trim($('#txt_F1_S2_P2076').val());
    campo2077=$.trim($('#txt_F1_S2_P2077').val());
    campo2078=$.trim($('#txt_F1_S2_P2078').val());
    campo2079=$.trim($('#txt_F1_S2_P2079').val());
    campo2080=$.trim($('#txt_F1_S2_P2080').val());
    campo2081=$.trim($('#txt_F1_S2_P2081').val());
    campo2084=$.trim($('#txt_F1_S2_P2084').val());
	suma=eliminar_miles(campo2071)+eliminar_miles(campo2072)+eliminar_miles(campo2073)+eliminar_miles(campo2074)+eliminar_miles(campo2075)+eliminar_miles(campo2076)+eliminar_miles(campo2077)+eliminar_miles(campo2078);
	suma2=eliminar_miles(campo2079)+eliminar_miles(campo2080);
            if ( suma > 0 || suma2 > 0  )
            {
                if ( eliminar_miles(campo2081) == 0 || eliminar_miles(campo2084) == 0 )
                {
                    if (perfil == 4)
				    {
				        if(!confirm('Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios.\n ¿Desea continuar?'))
					    {
					    $('#txt_F1_S2_P2071').focus();
					    $('#txt_F1_S2_P2071').select();
					    return false;
					    }
					    else
					    {
					    flag_2 = true;
					    $('#txt_F1_S2_P2085').focus();
					    return false;
					    }    
				    }
				    else
				    {
                        alert("Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios.");
                        $('#txt_F1_S2_P2071').focus();
                        $('#txt_F1_S2_P2071').select();
                        return false;
                    }
                }
            }  

    } 
    //Regla 84 
 if ($(campo_j).attr('id')=='txt_F1_S2_P2085')
    {
    campo2001=$.trim($('#txt_F1_S2_P2001').val());
    campo2015=$.trim($('#txt_F1_S2_P2015').val());
    campo2029=$.trim($('#txt_F1_S2_P2029').val());
    campo2043=$.trim($('#txt_F1_S2_P2043').val());
    campo2057=$.trim($('#txt_F1_S2_P2057').val());
    campo2071=$.trim($('#txt_F1_S2_P2071').val());
    campo2085=$.trim($('#txt_F1_S2_P2085').val());
    suma=eliminar_miles(campo2001)+eliminar_miles(campo2015)+eliminar_miles(campo2029)+eliminar_miles(campo2043)+eliminar_miles(campo2057)+eliminar_miles(campo2071);

            if ( suma !=  eliminar_miles(campo2085) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Hombres (A1 a A8), Trimestre 1 No Cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2001').focus();
				    $('#txt_F1_S2_P2001').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2086').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Hombres (A1 a A8), Trimestre 1 No Cuadra.");
                    $('#txt_F1_S2_P2001').focus();
                    $('#txt_F1_S2_P2001').select();
                    return false;
                }
            }  

    }   
    //Regla 85	 
 if ($(campo_j).attr('id')=='txt_F1_S2_P2086')
    {
    campo2002=$.trim($('#txt_F1_S2_P2002').val());
    campo2016=$.trim($('#txt_F1_S2_P2016').val());
    campo2030=$.trim($('#txt_F1_S2_P2030').val());
    campo2044=$.trim($('#txt_F1_S2_P2044').val());
    campo2058=$.trim($('#txt_F1_S2_P2058').val());
    campo2072=$.trim($('#txt_F1_S2_P2072').val());
    campo2086=$.trim($('#txt_F1_S2_P2086').val());
    suma=eliminar_miles(campo2002)+eliminar_miles(campo2016)+eliminar_miles(campo2030)+eliminar_miles(campo2044)+eliminar_miles(campo2058)+eliminar_miles(campo2072);

            if ( suma !=  eliminar_miles(campo2086) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Mujeres (A1 a A8), Trimestre 1 No Cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2002').focus();
				    $('#txt_F1_S2_P2002').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2087').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Mujeres (A1 a A8), Trimestre 1 No Cuadra.");
                    $('#txt_F1_S2_P2002').focus();
                    $('#txt_F1_S2_P2002').select();
                    return false;
                }
            }  

    }  
   //Regla 86	 
 if ($(campo_j).attr('id')=='txt_F1_S2_P2087')
    {
    campo2003=$.trim($('#txt_F1_S2_P2003').val());
    campo2017=$.trim($('#txt_F1_S2_P2017').val());
    campo2031=$.trim($('#txt_F1_S2_P2031').val());
    campo2045=$.trim($('#txt_F1_S2_P2045').val());
    campo2059=$.trim($('#txt_F1_S2_P2059').val());
    campo2073=$.trim($('#txt_F1_S2_P2073').val());
    campo2087=$.trim($('#txt_F1_S2_P2087').val());
    suma=eliminar_miles(campo2003)+eliminar_miles(campo2017)+eliminar_miles(campo2031)+eliminar_miles(campo2045)+eliminar_miles(campo2059)+eliminar_miles(campo2073);

            if ( suma !=  eliminar_miles(campo2087) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Hombres (A1 a A8), Trimestre 2 No Cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2003').focus();
				    $('#txt_F1_S2_P2003').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2088').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Hombres (A1 a A8), Trimestre 2 No Cuadra.");
                    $('#txt_F1_S2_P2003').focus();
                    $('#txt_F1_S2_P2003').select();
                    return false;
                }
            }  

    }  
  //Regla 87 
 if ($(campo_j).attr('id')=='txt_F1_S2_P2088')
    {
    campo2004=$.trim($('#txt_F1_S2_P2004').val());
    campo2018=$.trim($('#txt_F1_S2_P2018').val());
    campo2032=$.trim($('#txt_F1_S2_P2032').val());
    campo2046=$.trim($('#txt_F1_S2_P2046').val());
    campo2060=$.trim($('#txt_F1_S2_P2060').val());
    campo2074=$.trim($('#txt_F1_S2_P2074').val());
    campo2088=$.trim($('#txt_F1_S2_P2088').val());
    suma=eliminar_miles(campo2004)+eliminar_miles(campo2018)+eliminar_miles(campo2032)+eliminar_miles(campo2046)+eliminar_miles(campo2060)+eliminar_miles(campo2074);

            if ( suma !=  eliminar_miles(campo2088) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Mujeres (A1 a A8), Trimestre 2 No Cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2004').focus();
				    $('#txt_F1_S2_P2004').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2089').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Mujeres (A1 a A8), Trimestre 2 No Cuadra.");
                    $('#txt_F1_S2_P2004').focus();
                    $('#txt_F1_S2_P2004').select();
                    return false;
                }
            }  

    } 
    //Regla 88
 if ($(campo_j).attr('id')=='txt_F1_S2_P2089')
    {
    campo2005=$.trim($('#txt_F1_S2_P2005').val());
    campo2019=$.trim($('#txt_F1_S2_P2019').val());
    campo2033=$.trim($('#txt_F1_S2_P2033').val());
    campo2047=$.trim($('#txt_F1_S2_P2047').val());
    campo2061=$.trim($('#txt_F1_S2_P2061').val());
    campo2075=$.trim($('#txt_F1_S2_P2075').val());
    campo2089=$.trim($('#txt_F1_S2_P2089').val());
    suma=eliminar_miles(campo2005)+eliminar_miles(campo2019)+eliminar_miles(campo2033)+eliminar_miles(campo2047)+eliminar_miles(campo2061)+eliminar_miles(campo2075);

            if ( suma !=  eliminar_miles(campo2089) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Hombres (A1 a A8), Trimestre 3 No Cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2005').focus();
				    $('#txt_F1_S2_P2005').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2090').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Hombres (A1 a A8), Trimestre 3 No Cuadra.");
                    $('#txt_F1_S2_P2005').focus();
                    $('#txt_F1_S2_P2005').select();
                    return false;
                }
            }  

    }  
     //Regla 89
 if ($(campo_j).attr('id')=='txt_F1_S2_P2090')
    {
    campo2006=$.trim($('#txt_F1_S2_P2006').val());
    campo2020=$.trim($('#txt_F1_S2_P2020').val());
    campo2034=$.trim($('#txt_F1_S2_P2034').val());
    campo2048=$.trim($('#txt_F1_S2_P2048').val());
    campo2062=$.trim($('#txt_F1_S2_P2062').val());
    campo2076=$.trim($('#txt_F1_S2_P2076').val());
    campo2090=$.trim($('#txt_F1_S2_P2090').val());
    suma=eliminar_miles(campo2006)+eliminar_miles(campo2020)+eliminar_miles(campo2034)+eliminar_miles(campo2048)+eliminar_miles(campo2062)+eliminar_miles(campo2076);

            if ( suma !=  eliminar_miles(campo2090) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Mujeres (A1 a A8), Trimestre 3 No Cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2006').focus();
				    $('#txt_F1_S2_P2006').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2091').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Mujeres (A1 a A8), Trimestre 3 No Cuadra.");
                    $('#txt_F1_S2_P2006').focus();
                    $('#txt_F1_S2_P2006').select();
                    return false;
                }
            }  

    }  
     //Regla 90
 if ($(campo_j).attr('id')=='txt_F1_S2_P2091')
    {
    campo2007=$.trim($('#txt_F1_S2_P2007').val());
    campo2021=$.trim($('#txt_F1_S2_P2021').val());
    campo2035=$.trim($('#txt_F1_S2_P2035').val());
    campo2049=$.trim($('#txt_F1_S2_P2049').val());
    campo2063=$.trim($('#txt_F1_S2_P2063').val());
    campo2077=$.trim($('#txt_F1_S2_P2077').val());
    campo2091=$.trim($('#txt_F1_S2_P2091').val());
    suma=eliminar_miles(campo2007)+eliminar_miles(campo2021)+eliminar_miles(campo2035)+eliminar_miles(campo2049)+eliminar_miles(campo2063)+eliminar_miles(campo2077);

            if ( suma !=  eliminar_miles(campo2091) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Hombres (A1 a A8), Trimestre 4 No Cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2007').focus();
				    $('#txt_F1_S2_P2007').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2092').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Hombres (A1 a A8), Trimestre 4 No Cuadra.");
                    $('#txt_F1_S2_P2007').focus();
                    $('#txt_F1_S2_P2007').select();
                    return false;
                }
            }  

    }  
     //Regla 91
 if ($(campo_j).attr('id')=='txt_F1_S2_P2092')
    {
    campo2008=$.trim($('#txt_F1_S2_P2008').val());
    campo2022=$.trim($('#txt_F1_S2_P2022').val());
    campo2036=$.trim($('#txt_F1_S2_P2036').val());
    campo2050=$.trim($('#txt_F1_S2_P2050').val());
    campo2064=$.trim($('#txt_F1_S2_P2064').val());
    campo2078=$.trim($('#txt_F1_S2_P2078').val());
    campo2092=$.trim($('#txt_F1_S2_P2092').val());
    suma=eliminar_miles(campo2008)+eliminar_miles(campo2022)+eliminar_miles(campo2036)+eliminar_miles(campo2050)+eliminar_miles(campo2064)+eliminar_miles(campo2078);

            if ( suma !=  eliminar_miles(campo2092) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Mujeres (A1 a A8), Trimestre 4 No Cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2008').focus();
				    $('#txt_F1_S2_P2008').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2093').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Mujeres (A1 a A8), Trimestre 4 No Cuadra.");
                    $('#txt_F1_S2_P2008').focus();
                    $('#txt_F1_S2_P2008').select();
                    return false;
                }
            }  

    }  
    //Regla 92
 if ($(campo_j).attr('id')=='txt_F1_S2_P2093')
    {
    campo2009=$.trim($('#txt_F1_S2_P2009').val());
    campo2023=$.trim($('#txt_F1_S2_P2023').val());
    campo2037=$.trim($('#txt_F1_S2_P2037').val());
    campo2051=$.trim($('#txt_F1_S2_P2051').val());
    campo2065=$.trim($('#txt_F1_S2_P2065').val());
    campo2079=$.trim($('#txt_F1_S2_P2079').val());
    campo2093=$.trim($('#txt_F1_S2_P2093').val());
    suma=eliminar_miles(campo2009)+eliminar_miles(campo2023)+eliminar_miles(campo2037)+eliminar_miles(campo2051)+eliminar_miles(campo2065)+eliminar_miles(campo2079);

            if ( suma !=  eliminar_miles(campo2093) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Número promedio individual de horas semanales trabajadas (A1 a A8) No cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2009').focus();
				    $('#txt_F1_S2_P2009').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2094').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Número promedio individual de horas semanales trabajadas (A1 a A8) No cuadra.");
                    $('#txt_F1_S2_P2009').focus();
                    $('#txt_F1_S2_P2009').select();
                    return false;
                }
            }  

    }  
     //Regla 93
 if ($(campo_j).attr('id')=='txt_F1_S2_P2094')
    {
    campo2010=$.trim($('#txt_F1_S2_P2010').val());
    campo2024=$.trim($('#txt_F1_S2_P2024').val());
    campo2038=$.trim($('#txt_F1_S2_P2038').val());
    campo2052=$.trim($('#txt_F1_S2_P2052').val());
    campo2066=$.trim($('#txt_F1_S2_P2066').val());
    campo2080=$.trim($('#txt_F1_S2_P2080').val());
    campo2094=$.trim($('#txt_F1_S2_P2094').val());
    suma=eliminar_miles(campo2010)+eliminar_miles(campo2024)+eliminar_miles(campo2038)+eliminar_miles(campo2052)+eliminar_miles(campo2066)+eliminar_miles(campo2080);

            if ( suma !=  eliminar_miles(campo2094) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Número total de horas extraordinarias trabajadas en el año (A1 a A8) No cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2010').focus();
				    $('#txt_F1_S2_P2010').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2095').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Número total de horas extraordinarias trabajadas en el año (A1 a A8) No cuadra.");
                    $('#txt_F1_S2_P2010').focus();
                    $('#txt_F1_S2_P2010').select();
                    return false;
                }
            }  

    }  
     //Regla 94
 if ($(campo_j).attr('id')=='txt_F1_S2_P2095')
    {
    campo2011=$.trim($('#txt_F1_S2_P2011').val());
    campo2025=$.trim($('#txt_F1_S2_P2025').val());
    campo2039=$.trim($('#txt_F1_S2_P2039').val());
    campo2053=$.trim($('#txt_F1_S2_P2053').val());
    campo2067=$.trim($('#txt_F1_S2_P2067').val());
    campo2081=$.trim($('#txt_F1_S2_P2081').val());
    campo2095=$.trim($('#txt_F1_S2_P2095').val());
    suma=eliminar_miles(campo2011)+eliminar_miles(campo2025)+eliminar_miles(campo2039)+eliminar_miles(campo2053)+eliminar_miles(campo2067)+eliminar_miles(campo2081);

            if ( suma !=  eliminar_miles(campo2095) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Remuneraciones No cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2011').focus();
				    $('#txt_F1_S2_P2011').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2096').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Remuneraciones No cuadra.");
                    $('#txt_F1_S2_P2011').focus();
                    $('#txt_F1_S2_P2011').select();
                    return false;
                }
            }  

    }  
     //Regla 95
 if ($(campo_j).attr('id')=='txt_F1_S2_P2096')
    {
    campo2012=$.trim($('#txt_F1_S2_P2012').val());
    campo2026=$.trim($('#txt_F1_S2_P2026').val());
    campo2040=$.trim($('#txt_F1_S2_P2040').val());
    campo2054=$.trim($('#txt_F1_S2_P2054').val());
    campo2068=$.trim($('#txt_F1_S2_P2068').val());
    campo2082=$.trim($('#txt_F1_S2_P2082').val());
    campo2096=$.trim($('#txt_F1_S2_P2096').val());
    suma=eliminar_miles(campo2012)+eliminar_miles(campo2026)+eliminar_miles(campo2040)+eliminar_miles(campo2054)+eliminar_miles(campo2068)+eliminar_miles(campo2082);

            if ( suma !=  eliminar_miles(campo2096) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Otras Remuneraciones No cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2012').focus();
				    $('#txt_F1_S2_P2012').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2097').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Otras Remuneraciones No cuadra.");
                    $('#txt_F1_S2_P2012').focus();
                    $('#txt_F1_S2_P2012').select();
                    return false;
                }
            }  

    }  
     //Regla 96
 if ($(campo_j).attr('id')=='txt_F1_S2_P2097')
    {
    campo2013=$.trim($('#txt_F1_S2_P2013').val());
    campo2027=$.trim($('#txt_F1_S2_P2027').val());
    campo2041=$.trim($('#txt_F1_S2_P2041').val());
    campo2055=$.trim($('#txt_F1_S2_P2055').val());
    campo2069=$.trim($('#txt_F1_S2_P2069').val());
    campo2083=$.trim($('#txt_F1_S2_P2083').val());
    campo2097=$.trim($('#txt_F1_S2_P2097').val());
    suma=eliminar_miles(campo2013)+eliminar_miles(campo2027)+eliminar_miles(campo2041)+eliminar_miles(campo2055)+eliminar_miles(campo2069)+eliminar_miles(campo2083);

            if ( suma !=  eliminar_miles(campo2097) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Aportes Patronales No cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2013').focus();
				    $('#txt_F1_S2_P2013').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2098').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Aportes Patronales No cuadra.");
                    $('#txt_F1_S2_P2013').focus();
                    $('#txt_F1_S2_P2013').select();
                    return false;
                }
            }  

    }    
     //Regla 97
 if ($(campo_j).attr('id')=='txt_F1_S2_P2098')
    {
    campo2014=$.trim($('#txt_F1_S2_P2014').val());
    campo2028=$.trim($('#txt_F1_S2_P2028').val());
    campo2042=$.trim($('#txt_F1_S2_P2042').val());
    campo2056=$.trim($('#txt_F1_S2_P2056').val());
    campo2070=$.trim($('#txt_F1_S2_P2070').val());
    campo2084=$.trim($('#txt_F1_S2_P2084').val());
    campo2098=$.trim($('#txt_F1_S2_P2098').val());
    suma=eliminar_miles(campo2014)+eliminar_miles(campo2028)+eliminar_miles(campo2042)+eliminar_miles(campo2056)+eliminar_miles(campo2070)+eliminar_miles(campo2084);

            if ( suma !=  eliminar_miles(campo2098) )
            {
                if (perfil == 4)
				{
				    if(!confirm('Advertencia: Total de control Honorarios No cuadra.\n ¿Desea continuar?'))
				    {
				    $('#txt_F1_S2_P2014').focus();
				    $('#txt_F1_S2_P2014').select();
				    return false;
				    }
				    else
				    {
				    flag_2 = true;
				    $('#txt_F1_S2_P2099').focus();
				    return false;
				    }    
				}
				else
				{
                    alert("Error: Total de control Honorarios No cuadra.");
                    $('#txt_F1_S2_P2014').focus();
                    $('#txt_F1_S2_P2014').select();
                    return false;
                }
            }  

    } 
        // Regla 98
if ($(campo_j).attr('id')=='txt_F1_S2_P2098')
    {
	suma=0
	for (i=1;i<99;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F1_S2_P200'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F1_S2_P20'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                if(!confirm('Advertencia: No informa empleo y costo de la mano de obra.\n ¿Desea continuar?')){
                $('#txt_F1_S2_P2001').focus();
                $('#txt_F1_S2_P2001').select();
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
    mensaje="  \n";
    $.each($('input'),function(i,v){
        campo_j = "#"+$(this).attr('id');
              //Regla 72    
  if ($(campo_j).attr('id')=='txt_F1_S2_P2014')
    {
    campo2001=$.trim($('#txt_F1_S2_P2001').val());
    campo2002=$.trim($('#txt_F1_S2_P2002').val());
    campo2003=$.trim($('#txt_F1_S2_P2003').val());
    campo2004=$.trim($('#txt_F1_S2_P2004').val());
    campo2005=$.trim($('#txt_F1_S2_P2005').val());
    campo2006=$.trim($('#txt_F1_S2_P2006').val());
    campo2007=$.trim($('#txt_F1_S2_P2007').val());
    campo2008=$.trim($('#txt_F1_S2_P2008').val());
    campo2009=$.trim($('#txt_F1_S2_P2009').val());
    campo2010=$.trim($('#txt_F1_S2_P2010').val());
    campo2011=$.trim($('#txt_F1_S2_P2011').val());
    campo2014=$.trim($('#txt_F1_S2_P2014').val());
            if ( eliminar_miles(campo2011) > 0 || eliminar_miles(campo2014) > 0 )
            {
			    suma=eliminar_miles(campo2001)+eliminar_miles(campo2002)+eliminar_miles(campo2003)+eliminar_miles(campo2004)+eliminar_miles(campo2005)+eliminar_miles(campo2006)+eliminar_miles(campo2007)+eliminar_miles(campo2008);
				suma2=eliminar_miles(campo2009)+eliminar_miles(campo2010);
                if ( suma2== 0 || suma==0 )
                {
                    if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2014 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. \n");
			        $('#txt_F1_S2_P2001').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = '#txt_F1_S2_P2001';
                    }
                    else
                    {
			        mensaje=mensaje +("Campo 2014 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. \n");
                    $('#txt_F1_S2_P2001').css('border','2px solid red');
			        error++;
			        foco[++cont] = '#txt_F1_S2_P2001';
			        }
                }
            }  

    }  
    //Regla 73   
    if ($(campo_j).attr('id')=='txt_F1_S2_P2014')
    {
    campo2001=$.trim($('#txt_F1_S2_P2001').val());
    campo2002=$.trim($('#txt_F1_S2_P2002').val());
    campo2003=$.trim($('#txt_F1_S2_P2003').val());
    campo2004=$.trim($('#txt_F1_S2_P2004').val());
    campo2005=$.trim($('#txt_F1_S2_P2005').val());
    campo2006=$.trim($('#txt_F1_S2_P2006').val());
    campo2007=$.trim($('#txt_F1_S2_P2007').val());
    campo2008=$.trim($('#txt_F1_S2_P2008').val());
    campo2009=$.trim($('#txt_F1_S2_P2009').val());
    campo2010=$.trim($('#txt_F1_S2_P2010').val());
    campo2011=$.trim($('#txt_F1_S2_P2011').val());
    campo2014=$.trim($('#txt_F1_S2_P2014').val());
	suma=eliminar_miles(campo2001)+eliminar_miles(campo2002)+eliminar_miles(campo2003)+eliminar_miles(campo2004)+eliminar_miles(campo2005)+eliminar_miles(campo2006)+eliminar_miles(campo2007)+eliminar_miles(campo2008);
	suma2=eliminar_miles(campo2009)+eliminar_miles(campo2010);
            if ( suma > 0 || suma2 > 0  )
            {
                if ( eliminar_miles(campo2011) == 0 || eliminar_miles(campo2014) == 0 )
                {	
			        mensaje=mensaje +("Campo 2014 - Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. \n");
                    $('#txt_F1_S2_P2001').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = '#txt_F1_S2_P2001';
                }
            }  

    } 
    //Regla 74   
 if ($(campo_j).attr('id')=='txt_F1_S2_P2028')
    {
    campo2015=$.trim($('#txt_F1_S2_P2015').val());
    campo2016=$.trim($('#txt_F1_S2_P2016').val());
    campo2017=$.trim($('#txt_F1_S2_P2017').val());
    campo2018=$.trim($('#txt_F1_S2_P2018').val());
    campo2019=$.trim($('#txt_F1_S2_P2019').val());
    campo2020=$.trim($('#txt_F1_S2_P2020').val());
    campo2021=$.trim($('#txt_F1_S2_P2021').val());
    campo2022=$.trim($('#txt_F1_S2_P2022').val());
    campo2023=$.trim($('#txt_F1_S2_P2023').val());
    campo2024=$.trim($('#txt_F1_S2_P2024').val());
    campo2025=$.trim($('#txt_F1_S2_P2025').val());
    campo2028=$.trim($('#txt_F1_S2_P2028').val());
            if ( eliminar_miles(campo2025) > 0 || eliminar_miles(campo2028) > 0 )
            {
			    suma=eliminar_miles(campo2015)+eliminar_miles(campo2016)+eliminar_miles(campo2017)+eliminar_miles(campo2018)+eliminar_miles(campo2019)+eliminar_miles(campo2020)+eliminar_miles(campo2021)+eliminar_miles(campo2022);
				suma2=eliminar_miles(campo2023)+eliminar_miles(campo2024);
                if ( suma2== 0 || suma==0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2028 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. \n");
			        $('#txt_F1_S2_P2015').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = '#txt_F1_S2_P2015';
                    }
                    else
                    {
			        mensaje=mensaje +("Campo 2028 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. \n");
                    $('#txt_F1_S2_P2015').css('border','2px solid red');
			        error++;
			        foco[++cont] = '#txt_F1_S2_P2015';
					}
                }
            }  

    }  
    //Regla 75   
    if ($(campo_j).attr('id')=='txt_F1_S2_P2028')
    {
    campo2015=$.trim($('#txt_F1_S2_P2015').val());
    campo2016=$.trim($('#txt_F1_S2_P2016').val());
    campo2017=$.trim($('#txt_F1_S2_P2017').val());
    campo2018=$.trim($('#txt_F1_S2_P2018').val());
    campo2019=$.trim($('#txt_F1_S2_P2019').val());
    campo2020=$.trim($('#txt_F1_S2_P2020').val());
    campo2021=$.trim($('#txt_F1_S2_P2021').val());
    campo2022=$.trim($('#txt_F1_S2_P2022').val());
    campo2023=$.trim($('#txt_F1_S2_P2023').val());
    campo2024=$.trim($('#txt_F1_S2_P2024').val());
    campo2025=$.trim($('#txt_F1_S2_P2025').val());
    campo2028=$.trim($('#txt_F1_S2_P2028').val());
	suma=eliminar_miles(campo2015)+eliminar_miles(campo2016)+eliminar_miles(campo2017)+eliminar_miles(campo2018)+eliminar_miles(campo2019)+eliminar_miles(campo2020)+eliminar_miles(campo2021)+eliminar_miles(campo2022);
	suma2=eliminar_miles(campo2023)+eliminar_miles(campo2024);
            if ( suma > 0 || suma2 > 0  )
            {
                if ( eliminar_miles(campo2025) == 0 || eliminar_miles(campo2028) == 0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2028 - Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. \n");
			        $('#txt_F1_S2_P2015').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = '#txt_F1_S2_P2015';
                    }
                    else
                    {
			        mensaje=mensaje +("Campo 2028 - Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. \n");
                    $('#txt_F1_S2_P2015').css('border','2px solid red');
			        error++;
			        foco[++cont] = '#txt_F1_S2_P2015';
                }
            }  

    }    
}	
  //Regla 76   
 if ($(campo_j).attr('id')=='txt_F1_S2_P2042')
    {
    campo2029=$.trim($('#txt_F1_S2_P2029').val());
    campo2030=$.trim($('#txt_F1_S2_P2030').val());
    campo2031=$.trim($('#txt_F1_S2_P2031').val());
    campo2032=$.trim($('#txt_F1_S2_P2032').val());
    campo2033=$.trim($('#txt_F1_S2_P2033').val());
    campo2034=$.trim($('#txt_F1_S2_P2034').val());
    campo2035=$.trim($('#txt_F1_S2_P2035').val());
    campo2036=$.trim($('#txt_F1_S2_P2036').val());
    campo2037=$.trim($('#txt_F1_S2_P2037').val());
    campo2038=$.trim($('#txt_F1_S2_P2038').val());
    campo2039=$.trim($('#txt_F1_S2_P2039').val());
    campo2042=$.trim($('#txt_F1_S2_P2042').val());
            if ( eliminar_miles(campo2039) > 0 || eliminar_miles(campo2042) > 0 )
            {
			    suma=eliminar_miles(campo2029)+eliminar_miles(campo2030)+eliminar_miles(campo2031)+eliminar_miles(campo2032)+eliminar_miles(campo2033)+eliminar_miles(campo2034)+eliminar_miles(campo2035)+eliminar_miles(campo2036);
				suma2=eliminar_miles(campo2037)+eliminar_miles(campo2038);
                if ( suma2== 0 || suma==0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2042 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. \n");
			        $('#txt_F1_S2_P2029').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = '#txt_F1_S2_P2029';
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2042 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas.  \n");
                    $('#txt_F1_S2_P2029').css('border','2px solid red');
			        error++;
			        foco[++cont] = '#txt_F1_S2_P2029';
					}
                }
            }  

    }  
    //Regla 77   
    if ($(campo_j).attr('id')=='txt_F1_S2_P2042')
    {
    campo2029=$.trim($('#txt_F1_S2_P2029').val());
    campo2030=$.trim($('#txt_F1_S2_P2030').val());
    campo2031=$.trim($('#txt_F1_S2_P2031').val());
    campo2032=$.trim($('#txt_F1_S2_P2032').val());
    campo2033=$.trim($('#txt_F1_S2_P2033').val());
    campo2034=$.trim($('#txt_F1_S2_P2034').val());
    campo2035=$.trim($('#txt_F1_S2_P2035').val());
    campo2036=$.trim($('#txt_F1_S2_P2036').val());
    campo2037=$.trim($('#txt_F1_S2_P2037').val());
    campo2038=$.trim($('#txt_F1_S2_P2038').val());
    campo2039=$.trim($('#txt_F1_S2_P2039').val());
    campo2042=$.trim($('#txt_F1_S2_P2042').val());
	suma=eliminar_miles(campo2029)+eliminar_miles(campo2030)+eliminar_miles(campo2031)+eliminar_miles(campo2032)+eliminar_miles(campo2033)+eliminar_miles(campo2034)+eliminar_miles(campo2035)+eliminar_miles(campo2036);
	suma2=eliminar_miles(campo2037)+eliminar_miles(campo2038);
            if ( suma > 0 || suma2 > 0  )
            {
                if ( eliminar_miles(campo2039) == 0 || eliminar_miles(campo2042) == 0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2042 - Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. \n");
			        $('#txt_F1_S2_P2029').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = '#txt_F1_S2_P2029';
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2042 - Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. \n");
                    $('#txt_F1_S2_P2029').css('border','2px solid red');
			        error++;
			        foco[++cont] = '#txt_F1_S2_P2029';
					}
                }
            }  

    } 
    //Regla 78   
 if ($(campo_j).attr('id')=='txt_F1_S2_P2056')
    {
    campo2043=$.trim($('#txt_F1_S2_P2043').val());
    campo2044=$.trim($('#txt_F1_S2_P2044').val());
    campo2045=$.trim($('#txt_F1_S2_P2045').val());
    campo2046=$.trim($('#txt_F1_S2_P2046').val());
    campo2047=$.trim($('#txt_F1_S2_P2047').val());
    campo2048=$.trim($('#txt_F1_S2_P2048').val());
    campo2049=$.trim($('#txt_F1_S2_P2049').val());
    campo2050=$.trim($('#txt_F1_S2_P2050').val());
    campo2051=$.trim($('#txt_F1_S2_P2051').val());
    campo2052=$.trim($('#txt_F1_S2_P2052').val());
    campo2053=$.trim($('#txt_F1_S2_P2053').val());
    campo2056=$.trim($('#txt_F1_S2_P2056').val());
            if ( eliminar_miles(campo2053) > 0 || eliminar_miles(campo2056) > 0 )
            {
			    suma=eliminar_miles(campo2043)+eliminar_miles(campo2044)+eliminar_miles(campo2045)+eliminar_miles(campo2046)+eliminar_miles(campo2047)+eliminar_miles(campo2048)+eliminar_miles(campo2049)+eliminar_miles(campo2050);
				suma2=eliminar_miles(campo2051)+eliminar_miles(campo2052);
                if ( suma2== 0 || suma==0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2056 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. \n");
			        $('#txt_F1_S2_P2043').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = '#txt_F1_S2_P2043';
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2056 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. \n");
                    $('#txt_F1_S2_P2043').css('border','2px solid red');
			        error++;
			        foco[++cont] = '#txt_F1_S2_P2043';
					}
                }
            }  

    }  
    //Regla 79   
    if ($(campo_j).attr('id')=='txt_F1_S2_P2056')
    {
    campo2043=$.trim($('#txt_F1_S2_P2043').val());
    campo2044=$.trim($('#txt_F1_S2_P2044').val());
    campo2045=$.trim($('#txt_F1_S2_P2045').val());
    campo2046=$.trim($('#txt_F1_S2_P2046').val());
    campo2047=$.trim($('#txt_F1_S2_P2047').val());
    campo2048=$.trim($('#txt_F1_S2_P2048').val());
    campo2049=$.trim($('#txt_F1_S2_P2049').val());
    campo2050=$.trim($('#txt_F1_S2_P2050').val());
    campo2051=$.trim($('#txt_F1_S2_P2051').val());
    campo2052=$.trim($('#txt_F1_S2_P2052').val());
    campo2053=$.trim($('#txt_F1_S2_P2053').val());
    campo2056=$.trim($('#txt_F1_S2_P2056').val());
	suma=eliminar_miles(campo2043)+eliminar_miles(campo2044)+eliminar_miles(campo2045)+eliminar_miles(campo2046)+eliminar_miles(campo2047)+eliminar_miles(campo2048)+eliminar_miles(campo2049)+eliminar_miles(campo2050);
	suma2=eliminar_miles(campo2051)+eliminar_miles(campo2052);
            if ( suma > 0 || suma2 > 0  )
            {
                if ( eliminar_miles(campo2053) == 0 || eliminar_miles(campo2056) == 0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2056 - Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. \n");
			        $('#txt_F1_S2_P2043').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = '#txt_F1_S2_P2043';
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2056 - Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. \n");
                    $('#txt_F1_S2_P2043').css('border','2px solid red');
			        error++;
			        foco[++cont] = '#txt_F1_S2_P2043';
					}
                }
            }  

    }     
    //Regla 80  
 if ($(campo_j).attr('id')=='txt_F1_S2_P2070')
    {
    campo2057=$.trim($('#txt_F1_S2_P2057').val());
    campo2058=$.trim($('#txt_F1_S2_P2058').val());
    campo2059=$.trim($('#txt_F1_S2_P2059').val());
    campo2060=$.trim($('#txt_F1_S2_P2060').val());
    campo2061=$.trim($('#txt_F1_S2_P2061').val());
    campo2062=$.trim($('#txt_F1_S2_P2062').val());
    campo2063=$.trim($('#txt_F1_S2_P2063').val());
    campo2064=$.trim($('#txt_F1_S2_P2064').val());
    campo2065=$.trim($('#txt_F1_S2_P2065').val());
    campo2066=$.trim($('#txt_F1_S2_P2066').val());
    campo2067=$.trim($('#txt_F1_S2_P2067').val());
    campo2070=$.trim($('#txt_F1_S2_P2070').val());
            if ( eliminar_miles(campo2067) > 0 || eliminar_miles(campo2070) > 0 )
            {
			    suma=eliminar_miles(campo2057)+eliminar_miles(campo2058)+eliminar_miles(campo2059)+eliminar_miles(campo2060)+eliminar_miles(campo2061)+eliminar_miles(campo2062)+eliminar_miles(campo2063)+eliminar_miles(campo2064);
				suma2=eliminar_miles(campo2065)+eliminar_miles(campo2066);
                if ( suma2== 0 || suma==0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2070 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. \n");
			        $('#txt_F1_S2_P2057').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = '#txt_F1_S2_P2057';
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2070 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. \n");
                    $('#txt_F1_S2_P2057').css('border','2px solid red');
			        error++;
			        foco[++cont] = '#txt_F1_S2_P2057';
					}
                }
            }  

    }  
    //Regla 81   
    if ($(campo_j).attr('id')=='txt_F1_S2_P2070')
    {
    campo2057=$.trim($('#txt_F1_S2_P2057').val());
    campo2058=$.trim($('#txt_F1_S2_P2058').val());
    campo2059=$.trim($('#txt_F1_S2_P2059').val());
    campo2060=$.trim($('#txt_F1_S2_P2060').val());
    campo2061=$.trim($('#txt_F1_S2_P2061').val());
    campo2062=$.trim($('#txt_F1_S2_P2062').val());
    campo2063=$.trim($('#txt_F1_S2_P2063').val());
    campo2064=$.trim($('#txt_F1_S2_P2064').val());
    campo2065=$.trim($('#txt_F1_S2_P2065').val());
    campo2066=$.trim($('#txt_F1_S2_P2066').val());
    campo2067=$.trim($('#txt_F1_S2_P2067').val());
    campo2070=$.trim($('#txt_F1_S2_P2070').val());
	suma=eliminar_miles(campo2057)+eliminar_miles(campo2058)+eliminar_miles(campo2059)+eliminar_miles(campo2060)+eliminar_miles(campo2061)+eliminar_miles(campo2062)+eliminar_miles(campo2063)+eliminar_miles(campo2064);
	suma2=eliminar_miles(campo2065)+eliminar_miles(campo2066);
            if ( suma > 0 || suma2 > 0  )
            {
                if ( eliminar_miles(campo2067) == 0 || eliminar_miles(campo2070) == 0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2070 - Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. \n");
			        $('#txt_F1_S2_P2057').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = '#txt_F1_S2_P2071';
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2070 - Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. \n");
                    $('#txt_F1_S2_P2057').css('border','2px solid red');
			        error++;
			        foco[++cont] = '#txt_F1_S2_P2057';
					}
                }
            }  

    }     
    //Regla 82  
 if ($(campo_j).attr('id')=='txt_F1_S2_P2084')
    {
    campo2071=$.trim($('#txt_F1_S2_P2071').val());
    campo2072=$.trim($('#txt_F1_S2_P2072').val());
    campo2073=$.trim($('#txt_F1_S2_P2073').val());
    campo2074=$.trim($('#txt_F1_S2_P2074').val());
    campo2075=$.trim($('#txt_F1_S2_P2075').val());
    campo2076=$.trim($('#txt_F1_S2_P2076').val());
    campo2077=$.trim($('#txt_F1_S2_P2077').val());
    campo2078=$.trim($('#txt_F1_S2_P2078').val());
    campo2079=$.trim($('#txt_F1_S2_P2079').val());
    campo2080=$.trim($('#txt_F1_S2_P2080').val());
    campo2081=$.trim($('#txt_F1_S2_P2081').val());
    campo2084=$.trim($('#txt_F1_S2_P2084').val());
            if ( eliminar_miles(campo2081) > 0 || eliminar_miles(campo2084) > 0 )
            {
			    suma=eliminar_miles(campo2071)+eliminar_miles(campo2072)+eliminar_miles(campo2073)+eliminar_miles(campo2074)+eliminar_miles(campo2075)+eliminar_miles(campo2076)+eliminar_miles(campo2077)+eliminar_miles(campo2078);
				suma2=eliminar_miles(campo2079)+eliminar_miles(campo2080);
                if ( suma2== 0 || suma==0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2084 - Advertencia: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. \n");
			        $('#txt_F1_S2_P2071').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = '#txt_F1_S2_P2071';
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2084 - Error: Informa remuneraciones o pago de honorarios y no informa personas que trabajaron u horas trabajadas. \n");
                    $('#txt_F1_S2_P2071').css('border','2px solid red');
			        error++;
			        foco[++cont] = '#txt_F1_S2_P2071';
					}
                }
            }  

    }  
    //Regla 83   
    if ($(campo_j).attr('id')=='txt_F1_S2_P2084')
    {
    campo2071=$.trim($('#txt_F1_S2_P2071').val());
    campo2072=$.trim($('#txt_F1_S2_P2072').val());
    campo2073=$.trim($('#txt_F1_S2_P2073').val());
    campo2074=$.trim($('#txt_F1_S2_P2074').val());
    campo2075=$.trim($('#txt_F1_S2_P2075').val());
    campo2076=$.trim($('#txt_F1_S2_P2076').val());
    campo2077=$.trim($('#txt_F1_S2_P2077').val());
    campo2078=$.trim($('#txt_F1_S2_P2078').val());
    campo2079=$.trim($('#txt_F1_S2_P2079').val());
    campo2080=$.trim($('#txt_F1_S2_P2080').val());
    campo2081=$.trim($('#txt_F1_S2_P2081').val());
    campo2084=$.trim($('#txt_F1_S2_P2084').val());
	suma=eliminar_miles(campo2071)+eliminar_miles(campo2072)+eliminar_miles(campo2073)+eliminar_miles(campo2074)+eliminar_miles(campo2075)+eliminar_miles(campo2076)+eliminar_miles(campo2077)+eliminar_miles(campo2078);
	suma2=eliminar_miles(campo2079)+eliminar_miles(campo2080);
            if ( suma > 0 || suma2 > 0  )
            {
                if ( eliminar_miles(campo2081) == 0 || eliminar_miles(campo2084) == 0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2084 - Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. \n");
			        $('#txt_F1_S2_P2071').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = '#txt_F1_S2_P2071';
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2084 - Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones u honorarios. \n");
                    $('#txt_F1_S2_P2071').css('border','2px solid red');
			        error++;
			        foco[++cont] = '#txt_F1_S2_P2071';
					}
                }
            }  

    } 
    //Regla 84 
 if ($(campo_j).attr('id')=='txt_F1_S2_P2085')
    {
    campo2001=$.trim($('#txt_F1_S2_P2001').val());
    campo2015=$.trim($('#txt_F1_S2_P2015').val());
    campo2029=$.trim($('#txt_F1_S2_P2029').val());
    campo2043=$.trim($('#txt_F1_S2_P2043').val());
    campo2057=$.trim($('#txt_F1_S2_P2057').val());
    campo2071=$.trim($('#txt_F1_S2_P2071').val());
    campo2085=$.trim($('#txt_F1_S2_P2085').val());
    suma=eliminar_miles(campo2001)+eliminar_miles(campo2015)+eliminar_miles(campo2029)+eliminar_miles(campo2043)+eliminar_miles(campo2057)+eliminar_miles(campo2071);

            if ( suma !=  eliminar_miles(campo2085) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2085 - Advertencia: Total de control Hombres (A1 a A8), Trimestre 1 No Cuadra. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2085 - Error:  Total de control Hombres (A1 a A8), Trimestre 1 No Cuadra.\n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }   
    //Regla 85	 
 if ($(campo_j).attr('id')=='txt_F1_S2_P2086')
    {
    campo2002=$.trim($('#txt_F1_S2_P2002').val());
    campo2016=$.trim($('#txt_F1_S2_P2016').val());
    campo2030=$.trim($('#txt_F1_S2_P2030').val());
    campo2044=$.trim($('#txt_F1_S2_P2044').val());
    campo2058=$.trim($('#txt_F1_S2_P2058').val());
    campo2072=$.trim($('#txt_F1_S2_P2072').val());
    campo2086=$.trim($('#txt_F1_S2_P2086').val());
    suma=eliminar_miles(campo2002)+eliminar_miles(campo2016)+eliminar_miles(campo2030)+eliminar_miles(campo2044)+eliminar_miles(campo2058)+eliminar_miles(campo2072);

            if ( suma !=  eliminar_miles(campo2086) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2086 - Advertencia: Total de control Mujeres (A1 a A8), Trimestre 1 No Cuadra. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2086 - Error: Total de control Mujeres (A1 a A8), Trimestre 1 No Cuadra. \n");
				   $(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
   //Regla 86	 
 if ($(campo_j).attr('id')=='txt_F1_S2_P2087')
    {
    campo2003=$.trim($('#txt_F1_S2_P2003').val());
    campo2017=$.trim($('#txt_F1_S2_P2017').val());
    campo2031=$.trim($('#txt_F1_S2_P2031').val());
    campo2045=$.trim($('#txt_F1_S2_P2045').val());
    campo2059=$.trim($('#txt_F1_S2_P2059').val());
    campo2073=$.trim($('#txt_F1_S2_P2073').val());
    campo2087=$.trim($('#txt_F1_S2_P2087').val());
    suma=eliminar_miles(campo2003)+eliminar_miles(campo2017)+eliminar_miles(campo2031)+eliminar_miles(campo2045)+eliminar_miles(campo2059)+eliminar_miles(campo2073);

            if ( suma !=  eliminar_miles(campo2087) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2087 - Advertencia: Total de control Hombres (A1 a A8), Trimestre 2 No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2087 - Error: Total de control Hombres (A1 a A8), Trimestre 2 No Cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
  //Regla 87 
 if ($(campo_j).attr('id')=='txt_F1_S2_P2088')
    {
    campo2004=$.trim($('#txt_F1_S2_P2004').val());
    campo2018=$.trim($('#txt_F1_S2_P2018').val());
    campo2032=$.trim($('#txt_F1_S2_P2032').val());
    campo2046=$.trim($('#txt_F1_S2_P2046').val());
    campo2060=$.trim($('#txt_F1_S2_P2060').val());
    campo2074=$.trim($('#txt_F1_S2_P2074').val());
    campo2088=$.trim($('#txt_F1_S2_P2088').val());
    suma=eliminar_miles(campo2004)+eliminar_miles(campo2018)+eliminar_miles(campo2032)+eliminar_miles(campo2046)+eliminar_miles(campo2060)+eliminar_miles(campo2074);

            if ( suma !=  eliminar_miles(campo2088) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2088 - Advertencia: Total de control Mujeres (A1 a A8), Trimestre 2 No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2088 - Error: Total de control Mujeres (A1 a A8), Trimestre 2 No Cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    } 
    //Regla 88
 if ($(campo_j).attr('id')=='txt_F1_S2_P2089')
    {
    campo2005=$.trim($('#txt_F1_S2_P2005').val());
    campo2019=$.trim($('#txt_F1_S2_P2019').val());
    campo2033=$.trim($('#txt_F1_S2_P2033').val());
    campo2047=$.trim($('#txt_F1_S2_P2047').val());
    campo2061=$.trim($('#txt_F1_S2_P2061').val());
    campo2075=$.trim($('#txt_F1_S2_P2075').val());
    campo2089=$.trim($('#txt_F1_S2_P2089').val());
    suma=eliminar_miles(campo2005)+eliminar_miles(campo2019)+eliminar_miles(campo2033)+eliminar_miles(campo2047)+eliminar_miles(campo2061)+eliminar_miles(campo2075);

            if ( suma !=  eliminar_miles(campo2089) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2089 - Advertencia: Total de control Hombres (A1 a A8), Trimestre 3 No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2089 - Error: Total de control Hombres (A1 a A8), Trimestre 3 No Cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 89
 if ($(campo_j).attr('id')=='txt_F1_S2_P2090')
    {
    campo2006=$.trim($('#txt_F1_S2_P2006').val());
    campo2020=$.trim($('#txt_F1_S2_P2020').val());
    campo2034=$.trim($('#txt_F1_S2_P2034').val());
    campo2048=$.trim($('#txt_F1_S2_P2048').val());
    campo2062=$.trim($('#txt_F1_S2_P2062').val());
    campo2076=$.trim($('#txt_F1_S2_P2076').val());
    campo2090=$.trim($('#txt_F1_S2_P2090').val());
    suma=eliminar_miles(campo2006)+eliminar_miles(campo2020)+eliminar_miles(campo2034)+eliminar_miles(campo2048)+eliminar_miles(campo2062)+eliminar_miles(campo2076);

            if ( suma !=  eliminar_miles(campo2090) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2090 - Advertencia: Total de control Mujeres (A1 a A8), Trimestre 3 No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2090 - Error: Total de control Mujeres (A1 a A8), Trimestre 3 No Cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 90
 if ($(campo_j).attr('id')=='txt_F1_S2_P2091')
    {
    campo2007=$.trim($('#txt_F1_S2_P2007').val());
    campo2021=$.trim($('#txt_F1_S2_P2021').val());
    campo2035=$.trim($('#txt_F1_S2_P2035').val());
    campo2049=$.trim($('#txt_F1_S2_P2049').val());
    campo2063=$.trim($('#txt_F1_S2_P2063').val());
    campo2077=$.trim($('#txt_F1_S2_P2077').val());
    campo2091=$.trim($('#txt_F1_S2_P2091').val());
    suma=eliminar_miles(campo2007)+eliminar_miles(campo2021)+eliminar_miles(campo2035)+eliminar_miles(campo2049)+eliminar_miles(campo2063)+eliminar_miles(campo2077);

            if ( suma !=  eliminar_miles(campo2091) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2091 - Advertencia: Total de control Hombres (A1 a A8), Trimestre 4 No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2091 - Error: Total de control Hombres (A1 a A8), Trimestre 4 No Cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 91
 if ($(campo_j).attr('id')=='txt_F1_S2_P2092')
    {
    campo2008=$.trim($('#txt_F1_S2_P2008').val());
    campo2022=$.trim($('#txt_F1_S2_P2022').val());
    campo2036=$.trim($('#txt_F1_S2_P2036').val());
    campo2050=$.trim($('#txt_F1_S2_P2050').val());
    campo2064=$.trim($('#txt_F1_S2_P2064').val());
    campo2078=$.trim($('#txt_F1_S2_P2078').val());
    campo2092=$.trim($('#txt_F1_S2_P2092').val());
    suma=eliminar_miles(campo2008)+eliminar_miles(campo2022)+eliminar_miles(campo2036)+eliminar_miles(campo2050)+eliminar_miles(campo2064)+eliminar_miles(campo2078);

            if ( suma !=  eliminar_miles(campo2092) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2092 - Advertencia: Total de control Mujeres (A1 a A8), Trimestre 4 No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2092 - Error: Total de control Mujeres (A1 a A8), Trimestre 4 No Cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
    //Regla 92
 if ($(campo_j).attr('id')=='txt_F1_S2_P2093')
    {
    campo2009=$.trim($('#txt_F1_S2_P2009').val());
    campo2023=$.trim($('#txt_F1_S2_P2023').val());
    campo2037=$.trim($('#txt_F1_S2_P2037').val());
    campo2051=$.trim($('#txt_F1_S2_P2051').val());
    campo2065=$.trim($('#txt_F1_S2_P2065').val());
    campo2079=$.trim($('#txt_F1_S2_P2079').val());
    campo2093=$.trim($('#txt_F1_S2_P2093').val());
    suma=eliminar_miles(campo2009)+eliminar_miles(campo2023)+eliminar_miles(campo2037)+eliminar_miles(campo2051)+eliminar_miles(campo2065)+eliminar_miles(campo2079);

            if ( suma !=  eliminar_miles(campo2093) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2093 - Advertencia: Total de control Número promedio individual de horas semanales trabajadas (A1 a A8) No cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2093 - Error: Total de control Número promedio individual de horas semanales trabajadas (A1 a A8) No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 93
 if ($(campo_j).attr('id')=='txt_F1_S2_P2094')
    {
    campo2010=$.trim($('#txt_F1_S2_P2010').val());
    campo2024=$.trim($('#txt_F1_S2_P2024').val());
    campo2038=$.trim($('#txt_F1_S2_P2038').val());
    campo2052=$.trim($('#txt_F1_S2_P2052').val());
    campo2066=$.trim($('#txt_F1_S2_P2066').val());
    campo2080=$.trim($('#txt_F1_S2_P2080').val());
    campo2094=$.trim($('#txt_F1_S2_P2094').val());
    suma=eliminar_miles(campo2010)+eliminar_miles(campo2024)+eliminar_miles(campo2038)+eliminar_miles(campo2052)+eliminar_miles(campo2066)+eliminar_miles(campo2080);

            if ( suma !=  eliminar_miles(campo2094) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2094 - Advertencia: Total de control Número total de horas extraordinarias trabajadas en el año (A1 a A8) No cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2094 - Error: Total de control Número total de horas extraordinarias trabajadas en el año (A1 a A8) No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 94
 if ($(campo_j).attr('id')=='txt_F1_S2_P2095')
    {
    campo2011=$.trim($('#txt_F1_S2_P2011').val());
    campo2025=$.trim($('#txt_F1_S2_P2025').val());
    campo2039=$.trim($('#txt_F1_S2_P2039').val());
    campo2053=$.trim($('#txt_F1_S2_P2053').val());
    campo2067=$.trim($('#txt_F1_S2_P2067').val());
    campo2081=$.trim($('#txt_F1_S2_P2081').val());
    campo2095=$.trim($('#txt_F1_S2_P2095').val());
    suma=eliminar_miles(campo2011)+eliminar_miles(campo2025)+eliminar_miles(campo2039)+eliminar_miles(campo2053)+eliminar_miles(campo2067)+eliminar_miles(campo2081);

            if ( suma !=  eliminar_miles(campo2095) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2095 - Advertencia: Total de control Remuneraciones No cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2095 - Error: Total de control Remuneraciones No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 95
 if ($(campo_j).attr('id')=='txt_F1_S2_P2096')
    {
    campo2012=$.trim($('#txt_F1_S2_P2012').val());
    campo2026=$.trim($('#txt_F1_S2_P2026').val());
    campo2040=$.trim($('#txt_F1_S2_P2040').val());
    campo2054=$.trim($('#txt_F1_S2_P2054').val());
    campo2068=$.trim($('#txt_F1_S2_P2068').val());
    campo2082=$.trim($('#txt_F1_S2_P2082').val());
    campo2096=$.trim($('#txt_F1_S2_P2096').val());
    suma=eliminar_miles(campo2012)+eliminar_miles(campo2026)+eliminar_miles(campo2040)+eliminar_miles(campo2054)+eliminar_miles(campo2068)+eliminar_miles(campo2082);

            if ( suma !=  eliminar_miles(campo2096) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2096 - Advertencia: Total de control Otras Remuneraciones No cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2096 - Error: Total de control Otras Remuneraciones No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }  
     //Regla 96
 if ($(campo_j).attr('id')=='txt_F1_S2_P2097')
    {
    campo2013=$.trim($('#txt_F1_S2_P2013').val());
    campo2027=$.trim($('#txt_F1_S2_P2027').val());
    campo2041=$.trim($('#txt_F1_S2_P2041').val());
    campo2055=$.trim($('#txt_F1_S2_P2055').val());
    campo2069=$.trim($('#txt_F1_S2_P2069').val());
    campo2083=$.trim($('#txt_F1_S2_P2083').val());
    campo2097=$.trim($('#txt_F1_S2_P2097').val());
    suma=eliminar_miles(campo2013)+eliminar_miles(campo2027)+eliminar_miles(campo2041)+eliminar_miles(campo2055)+eliminar_miles(campo2069)+eliminar_miles(campo2083);

            if ( suma !=  eliminar_miles(campo2097) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2097 - Advertencia: Total de control Aportes Patronales No cuadra.  \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2097 - Error: Total de control Aportes Patronales No cuadra.  \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    }    
     //Regla 97
 if ($(campo_j).attr('id')=='txt_F1_S2_P2098')
    {
    campo2014=$.trim($('#txt_F1_S2_P2014').val());
    campo2028=$.trim($('#txt_F1_S2_P2028').val());
    campo2042=$.trim($('#txt_F1_S2_P2042').val());
    campo2056=$.trim($('#txt_F1_S2_P2056').val());
    campo2070=$.trim($('#txt_F1_S2_P2070').val());
    campo2084=$.trim($('#txt_F1_S2_P2084').val());
    campo2098=$.trim($('#txt_F1_S2_P2098').val());
    suma=eliminar_miles(campo2014)+eliminar_miles(campo2028)+eliminar_miles(campo2042)+eliminar_miles(campo2056)+eliminar_miles(campo2070)+eliminar_miles(campo2084);

            if ( suma !=  eliminar_miles(campo2098) )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2098 - Advertencia: Total de control Honorarios No cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
					mensaje=mensaje +("Campo 2098 - Error: Total de control Honorarios No cuadra. \n");
					$(campo_j).css('border','2px solid red');
					error++;
					foco[++cont] = campo_j;
					}
            }  

    } 
        // Regla 98
if ($(campo_j).attr('id')=='txt_F1_S2_P2098')
    {
	suma=0
	for (i=1;i<99;i++)
	{
			if (i<10)
			{
			campo=$.trim($('#txt_F1_S2_P200'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F1_S2_P20'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
					mensaje=mensaje +("Campo 2001 - Advertencia:  No informa empleo y costo de la mano de obra.\n");
					$('#txt_F1_S2_P2001').css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = '#txt_F1_S2_P2001';
                }
    }

});
    return [advertencia,error,foco[0], mensaje];
}

