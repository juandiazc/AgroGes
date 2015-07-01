camposDecimal = ['txt_F1_S3_P302','txt_F1_S3_P307'];
camposletra=['txt_F1_S3_P327'];
camposMiles=['txt_F1_S2_P2099','txt_F1_S2_P2100','txt_F1_S2_P2101','txt_F1_S2_P2102','txt_F1_S2_P2103','txt_F1_S2_P2104','txt_F1_S2_P2105',
'txt_F1_S2_P2106','txt_F1_S2_P2107','txt_F1_S2_P2108','txt_F1_S2_P2109','txt_F1_S2_P2110','txt_F1_S2_P2111','txt_F1_S2_P2112',
'txt_F1_S2_P2113','txt_F1_S2_P2114','txt_F1_S2_P2115','txt_F1_S2_P2116','txt_F1_S2_P2117','txt_F1_S2_P2118','txt_F1_S2_P2119',
'txt_F1_S2_P2120','txt_F1_S2_P2121','txt_F1_S2_P2122','txt_F1_S2_P2123','txt_F1_S2_P2124','txt_F1_S2_P2125','txt_F1_S2_P2126',
'txt_F1_S2_P2127','txt_F1_S2_P2128','txt_F1_S2_P2129','txt_F1_S2_P2130','txt_F1_S2_P2131','txt_F1_S2_P2132','txt_F1_S2_P2133',
'txt_F1_S2_P2134','txt_F1_S2_P2135','txt_F1_S2_P2136','txt_F1_S2_P2137','txt_F1_S2_P2138','txt_F1_S2_P2139','txt_F1_S2_P2140',
'txt_F1_S2_P2141','txt_F1_S2_P2142','txt_F1_S2_P2143','txt_F1_S2_P2144','txt_F1_S2_P2145','txt_F1_S2_P2146','txt_F1_S2_P2147',
'txt_F1_S2_P2148','txt_F1_S2_P2149','txt_F1_S2_P2150','txt_F1_S2_P2151','txt_F1_S2_P2152','txt_F1_S2_P2153','txt_F1_S2_P2154',
'txt_F1_S2_P2155','txt_F1_S2_P2156','txt_F1_S2_P2157','txt_F1_S2_P2158','txt_F1_S2_P2159','txt_F1_S2_P2160','txt_F1_S2_P2161',
'txt_F1_S2_P2162','txt_F1_S2_P2163','txt_F1_S2_P2164','txt_F1_S2_P2165','txt_F1_S2_P2166','txt_F1_S2_P2167','txt_F1_S2_P2168',
'txt_F1_S2_P2169','txt_F1_S2_P2170','txt_F1_S3_P301','txt_F1_S3_P303','txt_F1_S3_P304','txt_F1_S3_P305','txt_F1_S3_P306',
'txt_F1_S3_P308','txt_F1_S3_P309','txt_F1_S3_P310','txt_F1_S3_P311','txt_F1_S3_P312'];
campoSoloTexto=[];
function validar (campo_j){
    campo_j = "#"+campo_j;
 //Regla 99   
 if ($(campo_j).attr('id')=='txt_F1_S2_P2108')
    {
    campo2099=$.trim($('#txt_F1_S2_P2099').val());
    campo2100=$.trim($('#txt_F1_S2_P2100').val());
    campo2101=$.trim($('#txt_F1_S2_P2101').val());
    campo2102=$.trim($('#txt_F1_S2_P2102').val());
    campo2103=$.trim($('#txt_F1_S2_P2103').val());
    campo2104=$.trim($('#txt_F1_S2_P2104').val());
    campo2105=$.trim($('#txt_F1_S2_P2105').val());
    campo2106=$.trim($('#txt_F1_S2_P2106').val());
    campo2107=$.trim($('#txt_F1_S2_P2107').val());
    campo2108=$.trim($('#txt_F1_S2_P2108').val());
    
            if ( eliminar_miles(campo2108) > 0 )
            {
			    suma=eliminar_miles(campo2099)+eliminar_miles(campo2100)+eliminar_miles(campo2101)+eliminar_miles(campo2102)+eliminar_miles(campo2103)+eliminar_miles(campo2104)+eliminar_miles(campo2105)+eliminar_miles(campo2106);
				if ( suma== 0 || eliminar_miles(campo2107)==0 )
                {
                if (perfil == 4)
                    {
                    if(!confirm('Advertencia: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2099').focus();
                        $('#txt_F1_S2_P2099').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2109').focus();
                        return false;
				        }    
			        }
			        else 
			        {
                        alert("Error: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas.");
                        $('#txt_F1_S2_P2099').focus();
                         $('#txt_F1_S2_P2099').select();
                        return false;
                    }
                }
            }  

    }  
	//Regla 100   
 if ($(campo_j).attr('id')=='txt_F1_S2_P2108')
    {
    campo2099=$.trim($('#txt_F1_S2_P2099').val());
    campo2100=$.trim($('#txt_F1_S2_P2100').val());
    campo2101=$.trim($('#txt_F1_S2_P2101').val());
    campo2102=$.trim($('#txt_F1_S2_P2102').val());
    campo2103=$.trim($('#txt_F1_S2_P2103').val());
    campo2104=$.trim($('#txt_F1_S2_P2104').val());
    campo2105=$.trim($('#txt_F1_S2_P2105').val());
    campo2106=$.trim($('#txt_F1_S2_P2106').val());
    campo2107=$.trim($('#txt_F1_S2_P2107').val());
    campo2108=$.trim($('#txt_F1_S2_P2108').val());
    suma=eliminar_miles(campo2099)+eliminar_miles(campo2100)+eliminar_miles(campo2101)+eliminar_miles(campo2102)+eliminar_miles(campo2103)+eliminar_miles(campo2104)+eliminar_miles(campo2105)+eliminar_miles(campo2106);

            if ( suma > 0 || eliminar_miles(campo2107) > 0 )
            {
				if ( eliminar_miles(campo2108)== 0)
                {
				if (perfil == 4)
                    {
					if(!confirm('Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2099').focus();
                        $('#txt_F1_S2_P2099').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2109').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones.");
						$('#txt_F1_S2_P2099').focus();
						$('#txt_F1_S2_P2099').select();
						return false;
					}
                }
            }  

    }
 //Regla 101
 if ($(campo_j).attr('id')=='txt_F1_S2_P2118')
    {
    campo2109=$.trim($('#txt_F1_S2_P2109').val());
    campo2110=$.trim($('#txt_F1_S2_P2110').val());
    campo2111=$.trim($('#txt_F1_S2_P2111').val());
    campo2112=$.trim($('#txt_F1_S2_P2112').val());
    campo2113=$.trim($('#txt_F1_S2_P2113').val());
    campo2114=$.trim($('#txt_F1_S2_P2114').val());
    campo2115=$.trim($('#txt_F1_S2_P2115').val());
    campo2116=$.trim($('#txt_F1_S2_P2116').val());
    campo2117=$.trim($('#txt_F1_S2_P2117').val());
    campo2118=$.trim($('#txt_F1_S2_P2118').val());
    
            if ( eliminar_miles(campo2118) > 0 )
            {
			    suma=eliminar_miles(campo2109)+eliminar_miles(campo2110)+eliminar_miles(campo2111)+eliminar_miles(campo2112)+eliminar_miles(campo2113)+eliminar_miles(campo2114)+eliminar_miles(campo2115)+eliminar_miles(campo2116);
				if ( suma== 0 || eliminar_miles(campo2117)==0 )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2109').focus();
                        $('#txt_F1_S2_P2109').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2119').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas.");
						$('#txt_F1_S2_P2109').focus();
						$('#txt_F1_S2_P2109').select();
						return false;
					}
                }
            }  

    }  
	//Regla 102   
 if ($(campo_j).attr('id')=='txt_F1_S2_P2118')
    {
    campo2109=$.trim($('#txt_F1_S2_P2109').val());
    campo2110=$.trim($('#txt_F1_S2_P2110').val());
    campo2111=$.trim($('#txt_F1_S2_P2111').val());
    campo2112=$.trim($('#txt_F1_S2_P2112').val());
    campo2113=$.trim($('#txt_F1_S2_P2113').val());
    campo2114=$.trim($('#txt_F1_S2_P2114').val());
    campo2115=$.trim($('#txt_F1_S2_P2115').val());
    campo2116=$.trim($('#txt_F1_S2_P2116').val());
    campo2117=$.trim($('#txt_F1_S2_P2117').val());
    campo2118=$.trim($('#txt_F1_S2_P2118').val());
    suma=eliminar_miles(campo2109)+eliminar_miles(campo2110)+eliminar_miles(campo2111)+eliminar_miles(campo2112)+eliminar_miles(campo2113)+eliminar_miles(campo2114)+eliminar_miles(campo2115)+eliminar_miles(campo2116);

            if ( suma > 0 || eliminar_miles(campo2117) > 0 )
            {
				if ( eliminar_miles(campo2118)== 0)
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2109').focus();
                        $('#txt_F1_S2_P2109').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2119').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones.");
						$('#txt_F1_S2_P2109').focus();
						$('#txt_F1_S2_P2109').select();
						return false;
					}
                }
            }  

    }
 //Regla 103
 if ($(campo_j).attr('id')=='txt_F1_S2_P2128')
    {
    campo2119=$.trim($('#txt_F1_S2_P2119').val());
    campo2120=$.trim($('#txt_F1_S2_P2120').val());
    campo2121=$.trim($('#txt_F1_S2_P2121').val());
    campo2122=$.trim($('#txt_F1_S2_P2122').val());
    campo2123=$.trim($('#txt_F1_S2_P2123').val());
    campo2124=$.trim($('#txt_F1_S2_P2124').val());
    campo2125=$.trim($('#txt_F1_S2_P2125').val());
    campo2126=$.trim($('#txt_F1_S2_P2126').val());
    campo2127=$.trim($('#txt_F1_S2_P2127').val());
    campo2128=$.trim($('#txt_F1_S2_P2128').val());
    
            if ( eliminar_miles(campo2128) > 0 )
            {
			    suma=eliminar_miles(campo2119)+eliminar_miles(campo2120)+eliminar_miles(campo2121)+eliminar_miles(campo2122)+eliminar_miles(campo2123)+eliminar_miles(campo2124)+eliminar_miles(campo2125)+eliminar_miles(campo2126);
				if ( suma== 0 || eliminar_miles(campo2127)==0 )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2119').focus();
                        $('#txt_F1_S2_P2119').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2129').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas.");
						$('#txt_F1_S2_P2119').focus();
						$('#txt_F1_S2_P2119').select();
						return false;
					}
                }
            }  

    }  
	//Regla 104
 if ($(campo_j).attr('id')=='txt_F1_S2_P2128')
    {
    campo2119=$.trim($('#txt_F1_S2_P2119').val());
    campo2120=$.trim($('#txt_F1_S2_P2120').val());
    campo2121=$.trim($('#txt_F1_S2_P2121').val());
    campo2122=$.trim($('#txt_F1_S2_P2122').val());
    campo2123=$.trim($('#txt_F1_S2_P2123').val());
    campo2124=$.trim($('#txt_F1_S2_P2124').val());
    campo2125=$.trim($('#txt_F1_S2_P2125').val());
    campo2126=$.trim($('#txt_F1_S2_P2126').val());
    campo2127=$.trim($('#txt_F1_S2_P2127').val());
    campo2128=$.trim($('#txt_F1_S2_P2128').val());
    suma=eliminar_miles(campo2119)+eliminar_miles(campo2120)+eliminar_miles(campo2121)+eliminar_miles(campo2122)+eliminar_miles(campo2123)+eliminar_miles(campo2124)+eliminar_miles(campo2125)+eliminar_miles(campo2126);

            if ( suma > 0 || eliminar_miles(campo2127) > 0 )
            {
				if ( eliminar_miles(campo2128)== 0)
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2119').focus();
                        $('#txt_F1_S2_P2119').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2129').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones.");
						$('#txt_F1_S2_P2119').focus();
						$('#txt_F1_S2_P2119').select();
						return false;
					}
                }
            }  

    }
 //Regla 105
 if ($(campo_j).attr('id')=='txt_F1_S2_P2138')
    {
    campo2129=$.trim($('#txt_F1_S2_P2129').val());
    campo2130=$.trim($('#txt_F1_S2_P2130').val());
    campo2131=$.trim($('#txt_F1_S2_P2131').val());
    campo2132=$.trim($('#txt_F1_S2_P2132').val());
    campo2133=$.trim($('#txt_F1_S2_P2133').val());
    campo2134=$.trim($('#txt_F1_S2_P2134').val());
    campo2135=$.trim($('#txt_F1_S2_P2135').val());
    campo2136=$.trim($('#txt_F1_S2_P2136').val());
    campo2137=$.trim($('#txt_F1_S2_P2137').val());
    campo2138=$.trim($('#txt_F1_S2_P2138').val());
    
            if ( eliminar_miles(campo2138) > 0 )
            {
			    suma=eliminar_miles(campo2129)+eliminar_miles(campo2130)+eliminar_miles(campo2131)+eliminar_miles(campo2132)+eliminar_miles(campo2133)+eliminar_miles(campo2134)+eliminar_miles(campo2135)+eliminar_miles(campo2136);
				if ( suma== 0 || eliminar_miles(campo2137)==0 )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2129').focus();
                        $('#txt_F1_S2_P2129').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2139').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas.");
						$('#txt_F1_S2_P2129').focus();
						$('#txt_F1_S2_P2129').select();
						return false;
					}
                }
            }  

    }  
	//Regla 106
 if ($(campo_j).attr('id')=='txt_F1_S2_P2138')
    {
    campo2129=$.trim($('#txt_F1_S2_P2129').val());
    campo2130=$.trim($('#txt_F1_S2_P2130').val());
    campo2131=$.trim($('#txt_F1_S2_P2131').val());
    campo2132=$.trim($('#txt_F1_S2_P2132').val());
    campo2133=$.trim($('#txt_F1_S2_P2133').val());
    campo2134=$.trim($('#txt_F1_S2_P2134').val());
    campo2135=$.trim($('#txt_F1_S2_P2135').val());
    campo2136=$.trim($('#txt_F1_S2_P2136').val());
    campo2137=$.trim($('#txt_F1_S2_P2137').val());
    campo2138=$.trim($('#txt_F1_S2_P2138').val());
    suma=eliminar_miles(campo2129)+eliminar_miles(campo2130)+eliminar_miles(campo2131)+eliminar_miles(campo2132)+eliminar_miles(campo2133)+eliminar_miles(campo2134)+eliminar_miles(campo2135)+eliminar_miles(campo2136);

            if ( suma > 0 || eliminar_miles(campo2137) > 0 )
            {
				if ( eliminar_miles(campo2138)== 0)
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2129').focus();
                        $('#txt_F1_S2_P2129').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2139').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones.");
						$('#txt_F1_S2_P2129').focus();
						$('#txt_F1_S2_P2129').select();
						return false;
					}
                }
            }  

    }
 //Regla 107
 if ($(campo_j).attr('id')=='txt_F1_S2_P2148')
    {
    campo2139=$.trim($('#txt_F1_S2_P2139').val());
    campo2140=$.trim($('#txt_F1_S2_P2140').val());
    campo2141=$.trim($('#txt_F1_S2_P2141').val());
    campo2142=$.trim($('#txt_F1_S2_P2142').val());
    campo2143=$.trim($('#txt_F1_S2_P2143').val());
    campo2144=$.trim($('#txt_F1_S2_P2144').val());
    campo2145=$.trim($('#txt_F1_S2_P2145').val());
    campo2146=$.trim($('#txt_F1_S2_P2146').val());
    campo2147=$.trim($('#txt_F1_S2_P2147').val());
    campo2148=$.trim($('#txt_F1_S2_P2148').val());
    
            if ( eliminar_miles(campo2148) > 0 )
            {
			    suma=eliminar_miles(campo2139)+eliminar_miles(campo2140)+eliminar_miles(campo2141)+eliminar_miles(campo2142)+eliminar_miles(campo2143)+eliminar_miles(campo2144)+eliminar_miles(campo2145)+eliminar_miles(campo2146);
				if ( suma== 0 || eliminar_miles(campo2147)==0 )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2139').focus();
                        $('#txt_F1_S2_P2139').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2149').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas.");
						$('#txt_F1_S2_P2139').focus();
						$('#txt_F1_S2_P2139').select();
						return false;
					}
                }
            }  

    }  
	//Regla 108
 if ($(campo_j).attr('id')=='txt_F1_S2_P2148')
    {
    campo2139=$.trim($('#txt_F1_S2_P2139').val());
    campo2140=$.trim($('#txt_F1_S2_P2140').val());
    campo2141=$.trim($('#txt_F1_S2_P2141').val());
    campo2142=$.trim($('#txt_F1_S2_P2142').val());
    campo2143=$.trim($('#txt_F1_S2_P2143').val());
    campo2144=$.trim($('#txt_F1_S2_P2144').val());
    campo2145=$.trim($('#txt_F1_S2_P2145').val());
    campo2146=$.trim($('#txt_F1_S2_P2146').val());
    campo2147=$.trim($('#txt_F1_S2_P2147').val());
    campo2148=$.trim($('#txt_F1_S2_P2148').val());
    suma=eliminar_miles(campo2139)+eliminar_miles(campo2140)+eliminar_miles(campo2141)+eliminar_miles(campo2142)+eliminar_miles(campo2143)+eliminar_miles(campo2144)+eliminar_miles(campo2145)+eliminar_miles(campo2146);

            if ( suma > 0 || eliminar_miles(campo2147) > 0 )
            {
				if ( eliminar_miles(campo2148)== 0)
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2139').focus();
                        $('#txt_F1_S2_P2139').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2149').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones.");
						$('#txt_F1_S2_P2139').focus();
						$('#txt_F1_S2_P2139').select();
						return false;
					}
                }
            }  

    }
 //Regla 109
 if ($(campo_j).attr('id')=='txt_F1_S2_P2149')
    {
    campo2099=$.trim($('#txt_F1_S2_P2099').val());
    campo2109=$.trim($('#txt_F1_S2_P2109').val());
    campo2119=$.trim($('#txt_F1_S2_P2119').val());
    campo2129=$.trim($('#txt_F1_S2_P2129').val());
    campo2139=$.trim($('#txt_F1_S2_P2139').val());
    campo2149=$.trim($('#txt_F1_S2_P2149').val());
    suma=eliminar_miles(campo2099)+eliminar_miles(campo2109)+eliminar_miles(campo2119)+eliminar_miles(campo2129)+eliminar_miles(campo2139);
				if ( suma != eliminar_miles(campo2149) )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Total de Control Hombres (B1 a B6), Trimestre 1 No Cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2099').focus();
                        $('#txt_F1_S2_P2099').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2150').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Total de Control Hombres (B1 a B6), Trimestre 1 No Cuadra.");
						$('#txt_F1_S2_P2099').focus();
						$('#txt_F1_S2_P2099').select();
						return false;
					}
                }

    }  
 //Regla 110
 if ($(campo_j).attr('id')=='txt_F1_S2_P2150')
    {
    campo2100=$.trim($('#txt_F1_S2_P2100').val());
    campo2110=$.trim($('#txt_F1_S2_P2110').val());
    campo2120=$.trim($('#txt_F1_S2_P2120').val());
    campo2130=$.trim($('#txt_F1_S2_P2130').val());
    campo2140=$.trim($('#txt_F1_S2_P2140').val());
    campo2150=$.trim($('#txt_F1_S2_P2150').val());
    suma=eliminar_miles(campo2100)+eliminar_miles(campo2110)+eliminar_miles(campo2120)+eliminar_miles(campo2130)+eliminar_miles(campo2140);
				if ( suma != eliminar_miles(campo2150) )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Total de Control Mujeres (B1 a B6), Trimestre 1 No Cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2100').focus();
                        $('#txt_F1_S2_P2100').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2151').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Total de Control Mujeres (B1 a B6), Trimestre 1 No Cuadra.");
						$('#txt_F1_S2_P2100').focus();
						$('#txt_F1_S2_P2100').select();
						return false;
					}
                }

    }  
 //Regla 111
 if ($(campo_j).attr('id')=='txt_F1_S2_P2151')
    {
    campo2101=$.trim($('#txt_F1_S2_P2101').val());
    campo2111=$.trim($('#txt_F1_S2_P2111').val());
    campo2121=$.trim($('#txt_F1_S2_P2121').val());
    campo2131=$.trim($('#txt_F1_S2_P2131').val());
    campo2141=$.trim($('#txt_F1_S2_P2141').val());
    campo2151=$.trim($('#txt_F1_S2_P2151').val());
    suma=eliminar_miles(campo2101)+eliminar_miles(campo2111)+eliminar_miles(campo2121)+eliminar_miles(campo2131)+eliminar_miles(campo2141);
				if ( suma != eliminar_miles(campo2151) )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Total de Control Hombres (B1 a B6), Trimestre 2 No Cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2101').focus();
                        $('#txt_F1_S2_P2101').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2152').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Total de Control Hombres (B1 a B6), Trimestre 2 No Cuadra.");
						$('#txt_F1_S2_P2101').focus();
						$('#txt_F1_S2_P2101').select();
						return false;
					}
                }

    }  
 //Regla 112
 if ($(campo_j).attr('id')=='txt_F1_S2_P2152')
    {
    campo2102=$.trim($('#txt_F1_S2_P2102').val());
    campo2112=$.trim($('#txt_F1_S2_P2112').val());
    campo2122=$.trim($('#txt_F1_S2_P2122').val());
    campo2132=$.trim($('#txt_F1_S2_P2132').val());
    campo2142=$.trim($('#txt_F1_S2_P2142').val());
    campo2152=$.trim($('#txt_F1_S2_P2152').val());
    suma=eliminar_miles(campo2102)+eliminar_miles(campo2112)+eliminar_miles(campo2122)+eliminar_miles(campo2132)+eliminar_miles(campo2142);
				if ( suma != eliminar_miles(campo2152) )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Total de Control Mujeres (B1 a B6), Trimestre 2 No Cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2102').focus();
                        $('#txt_F1_S2_P2102').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2153').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Total de Control Mujeres (B1 a B6), Trimestre 2 No Cuadra.");
						$('#txt_F1_S2_P2102').focus();
						$('#txt_F1_S2_P2102').select();
						return false;
					}
                }

    }  
//Regla 113
 if ($(campo_j).attr('id')=='txt_F1_S2_P2153')
    {
    campo2103=$.trim($('#txt_F1_S2_P2103').val());
    campo2113=$.trim($('#txt_F1_S2_P2113').val());
    campo2123=$.trim($('#txt_F1_S2_P2123').val());
    campo2133=$.trim($('#txt_F1_S2_P2133').val());
    campo2143=$.trim($('#txt_F1_S2_P2143').val());
    campo2153=$.trim($('#txt_F1_S2_P2153').val());
    suma=eliminar_miles(campo2103)+eliminar_miles(campo2113)+eliminar_miles(campo2123)+eliminar_miles(campo2133)+eliminar_miles(campo2143);
				if ( suma != eliminar_miles(campo2153) )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Total de Control Hombres (B1 a B6), Trimestre 3 No Cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2103').focus();
                        $('#txt_F1_S2_P2103').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2154').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Total de Control Hombres (B1 a B6), Trimestre 3 No Cuadra.");
						$('#txt_F1_S2_P2103').focus();
						$('#txt_F1_S2_P2103').select();
						return false;
					}
                }

    }  
     //Regla 114
 if ($(campo_j).attr('id')=='txt_F1_S2_P2154')
    {
    campo2104=$.trim($('#txt_F1_S2_P2104').val());
    campo2114=$.trim($('#txt_F1_S2_P2114').val());
    campo2124=$.trim($('#txt_F1_S2_P2124').val());
    campo2134=$.trim($('#txt_F1_S2_P2134').val());
    campo2144=$.trim($('#txt_F1_S2_P2144').val());
    campo2154=$.trim($('#txt_F1_S2_P2154').val());
    suma=eliminar_miles(campo2104)+eliminar_miles(campo2114)+eliminar_miles(campo2124)+eliminar_miles(campo2134)+eliminar_miles(campo2144);
				if ( suma != eliminar_miles(campo2154) )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Total de Control Mujeres (B1 a B6), Trimestre 3 No Cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2104').focus();
                        $('#txt_F1_S2_P2104').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2155').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Total de Control Mujeres (B1 a B6), Trimestre 3 No Cuadra.");
						$('#txt_F1_S2_P2104').focus();
						$('#txt_F1_S2_P2104').select();
						return false;
					}
                }

    }  
     //Regla 115
 if ($(campo_j).attr('id')=='txt_F1_S2_P2155')
    {
    campo2105=$.trim($('#txt_F1_S2_P2105').val());
    campo2115=$.trim($('#txt_F1_S2_P2115').val());
    campo2125=$.trim($('#txt_F1_S2_P2125').val());
    campo2135=$.trim($('#txt_F1_S2_P2135').val());
    campo2145=$.trim($('#txt_F1_S2_P2145').val());
    campo2155=$.trim($('#txt_F1_S2_P2155').val());
    suma=eliminar_miles(campo2105)+eliminar_miles(campo2115)+eliminar_miles(campo2125)+eliminar_miles(campo2135)+eliminar_miles(campo2145);
				if ( suma != eliminar_miles(campo2155) )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Total de Control Hombres (B1 a B6), Trimestre 4 No Cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2105').focus();
                        $('#txt_F1_S2_P2105').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2156').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Total de Control Hombres (B1 a B6), Trimestre 4 No Cuadra.");
						$('#txt_F1_S2_P2105').focus();
						$('#txt_F1_S2_P2105').select();
						return false;
					}
                }

    }  
 //Regla 116
 if ($(campo_j).attr('id')=='txt_F1_S2_P2156')
    {
    campo2106=$.trim($('#txt_F1_S2_P2106').val());
    campo2116=$.trim($('#txt_F1_S2_P2116').val());
    campo2126=$.trim($('#txt_F1_S2_P2126').val());
    campo2136=$.trim($('#txt_F1_S2_P2136').val());
    campo2146=$.trim($('#txt_F1_S2_P2146').val());
    campo2156=$.trim($('#txt_F1_S2_P2156').val());
    suma=eliminar_miles(campo2106)+eliminar_miles(campo2116)+eliminar_miles(campo2126)+eliminar_miles(campo2136)+eliminar_miles(campo2146);
				if ( suma != eliminar_miles(campo2156) )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Total de Control Mujeres (B1 a B6), Trimestre 4 No Cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2106').focus();
                        $('#txt_F1_S2_P2106').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2157').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Total de Control Mujeres (B1 a B6), Trimestre 4 No Cuadra.");
						$('#txt_F1_S2_P2106').focus();
						$('#txt_F1_S2_P2106').select();
						return false;
					}
                }

    }  
 //Regla 117
 if ($(campo_j).attr('id')=='txt_F1_S2_P2157')
    {
    campo2107=$.trim($('#txt_F1_S2_P2107').val());
    campo2117=$.trim($('#txt_F1_S2_P2117').val());
    campo2127=$.trim($('#txt_F1_S2_P2127').val());
    campo2137=$.trim($('#txt_F1_S2_P2137').val());
    campo2147=$.trim($('#txt_F1_S2_P2147').val());
    campo2157=$.trim($('#txt_F1_S2_P2157').val());
    suma=eliminar_miles(campo2107)+eliminar_miles(campo2117)+eliminar_miles(campo2127)+eliminar_miles(campo2137)+eliminar_miles(campo2147);
				if ( suma != eliminar_miles(campo2157) )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Total de Control Horas trabajadas en el año No Cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2107').focus();
                        $('#txt_F1_S2_P2107').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2158').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Total de Control Horas trabajadas en el año No Cuadra.");
						$('#txt_F1_S2_P2107').focus();
						$('#txt_F1_S2_P2107').select();
						return false;
					}
                }

    }  
 //Regla 118
 if ($(campo_j).attr('id')=='txt_F1_S2_P2158')
    {
    campo2108=$.trim($('#txt_F1_S2_P2108').val());
    campo2118=$.trim($('#txt_F1_S2_P2118').val());
    campo2128=$.trim($('#txt_F1_S2_P2128').val());
    campo2138=$.trim($('#txt_F1_S2_P2138').val());
    campo2148=$.trim($('#txt_F1_S2_P2148').val());
    campo2158=$.trim($('#txt_F1_S2_P2158').val());
    suma=eliminar_miles(campo2108)+eliminar_miles(campo2118)+eliminar_miles(campo2128)+eliminar_miles(campo2138)+eliminar_miles(campo2148);
				if ( suma != eliminar_miles(campo2158) )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Total de Control Remuneraciones y otras remuneraciones No Cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2108').focus();
                        $('#txt_F1_S2_P2108').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2159').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Total de Control Remuneraciones y otras remuneraciones No Cuadra.");
						$('#txt_F1_S2_P2108').focus();
						$('#txt_F1_S2_P2108').select();
						return false;
					}
                }

    }  
//Regla 119
if ($(campo_j).attr('id')=='txt_F1_S2_P2158')
    {
	suma=0
	for (i=99;i<159;i++)
	{
			if (i<100)
			{
			campo=$.trim($('#txt_F1_S2_P20'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F1_S2_P2'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                if(!confirm('Advertencia: No informa personal subcontratado por la empresa y/o establecimiento.\n ¿Desea continuar?')){
                $('#txt_F1_S2_P2099').focus();
                $('#txt_F1_S2_P2099').select();
                return false;
				}else{
                flag_2 = true;
                $('#txt_F1_S2_P2159').focus();
                return false;
            }
                }
    }
//Regla 121
 if ($(campo_j).attr('id')=='txt_F1_S2_P2167')
    {
    campo2159=$.trim($('#txt_F1_S2_P2159').val());
    campo2160=$.trim($('#txt_F1_S2_P2160').val());
    campo2161=$.trim($('#txt_F1_S2_P2161').val());
    campo2162=$.trim($('#txt_F1_S2_P2162').val());
    campo2163=$.trim($('#txt_F1_S2_P2163').val());
    campo2164=$.trim($('#txt_F1_S2_P2164').val());
    campo2165=$.trim($('#txt_F1_S2_P2165').val());
    campo2166=$.trim($('#txt_F1_S2_P2166').val());
    campo2167=$.trim($('#txt_F1_S2_P2167').val());
    
            if ( eliminar_miles(campo2167) > 0 )
            {
			    suma=eliminar_miles(campo2159)+eliminar_miles(campo2160)+eliminar_miles(campo2161)+eliminar_miles(campo2162)+eliminar_miles(campo2163)+eliminar_miles(campo2164)+eliminar_miles(campo2165)+eliminar_miles(campo2166);
				if ( suma== 0  )
                {
				if (perfil == 4)
                    {
					if(!confirm('Advertencia: Informa honorarios pero no cantidad de personas que trabajaron.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2159').focus();
                        $('#txt_F1_S2_P2159').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2168').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Informa honorarios pero no cantidad de personas que trabajaron.");
						$('#txt_F1_S2_P2159').focus();
						$('#txt_F1_S2_P2159').select();
						return false;
					}
                }
            }  

    }  
    //Regla 122
 if ($(campo_j).attr('id')=='txt_F1_S2_P2167')
    {
    campo2159=$.trim($('#txt_F1_S2_P2159').val());
    campo2160=$.trim($('#txt_F1_S2_P2160').val());
    campo2161=$.trim($('#txt_F1_S2_P2161').val());
    campo2162=$.trim($('#txt_F1_S2_P2162').val());
    campo2163=$.trim($('#txt_F1_S2_P2163').val());
    campo2164=$.trim($('#txt_F1_S2_P2164').val());
    campo2165=$.trim($('#txt_F1_S2_P2165').val());
    campo2166=$.trim($('#txt_F1_S2_P2166').val());
    campo2167=$.trim($('#txt_F1_S2_P2167').val());
    suma=eliminar_miles(campo2159)+eliminar_miles(campo2160)+eliminar_miles(campo2161)+eliminar_miles(campo2162)+eliminar_miles(campo2163)+eliminar_miles(campo2164)+eliminar_miles(campo2165)+eliminar_miles(campo2166);

            if ( suma > 0 )
            {
				if ( eliminar_miles(campo2167)== 0  )
                {
					if (perfil == 4)
                    {
					if(!confirm('Advertencia: Informa cantidad de personas que trabajan pero no informa pago de honorarios.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S2_P2159').focus();
                        $('#txt_F1_S2_P2159').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S2_P2168').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Informa cantidad de personas que trabajan pero no informa pago de honorarios.");
						$('#txt_F1_S2_P2159').focus();
						$('#txt_F1_S2_P2159').select();
						return false;
					}
                }
            }  

    } 
    //Regla 123
 if ($(campo_j).attr('id')=='txt_F1_S2_P2170')
    {
    campo2168=$.trim($('#txt_F1_S2_P2168').val());
    campo2169=$.trim($('#txt_F1_S2_P2169').val());
    campo2170=$.trim($('#txt_F1_S2_P2170').val());
    
    suma=eliminar_miles(campo2168)+eliminar_miles(campo2169)+eliminar_miles(campo2170);

            if ( suma == 0 )
            {
                if(!confirm('Advertencia: No informa costos laborales área informática.\n ¿Desea continuar?')){
                $('#txt_F1_S2_P2168').focus();
                $('#txt_F1_S2_P2168').select();
                return false;
				}else{
                flag_2 = true;
                $('#txt_F1_S3_P301').focus();
                return false;
				}
            }  

    } 
    //Regla 124
 if ($(campo_j).attr('id')=='txt_F1_S3_P312')
    {
    campo301=$.trim($('#txt_F1_S3_P301').val());
    campo303=$.trim($('#txt_F1_S3_P303').val());
	campo304=$.trim($('#txt_F1_S3_P304').val());
	campo305=$.trim($('#txt_F1_S3_P305').val());
	campo306=$.trim($('#txt_F1_S3_P306').val());
	campo308=$.trim($('#txt_F1_S3_P308').val());
	campo309=$.trim($('#txt_F1_S3_P309').val());
	campo310=$.trim($('#txt_F1_S3_P310').val());
	campo311=$.trim($('#txt_F1_S3_P311').val());
	campo312=$.trim($('#txt_F1_S3_P312').val());    
    suma=eliminar_miles(campo301)+eliminar_miles(campo303)+eliminar_miles(campo304)+eliminar_miles(campo305)+eliminar_miles(campo306)+eliminar_miles(campo308)+eliminar_miles(campo309)+eliminar_miles(campo310)+eliminar_miles(campo311);

            if ( suma != eliminar_miles(campo312))
            {
				if (perfil == 4)
                    {
					if(!confirm('Advertencia: Total control valores netos en moneda utilizada seccion III.A no cuadra.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P301').focus();
                        $('#txt_F1_S3_P301').select();
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
						alert("Error: Total control valores netos en moneda utilizada seccion III.A no cuadra.");
						$('#txt_F1_S3_P301').focus();
						$('#txt_F1_S3_P301').select();
						return false;  
					}					
            }  

    }  
    //Regla 125
 if ($(campo_j).attr('id')=='txt_F1_S3_P303')
    {
    campo301=$.trim($('#txt_F1_S3_P301').val());
    campo303=$.trim($('#txt_F1_S3_P303').val());    
        if ( eliminar_miles(campo303) > eliminar_miles(campo301))
            {
				if (perfil == 4)
                    {
					if(!confirm('Advertencia: Productos importados superior a total valor compras.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P301').focus();
                        $('#txt_F1_S3_P301').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P304').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Productos importados superior a total valor compras.");
						$('#txt_F1_S3_P301').focus();
						$('#txt_F1_S3_P301').select();
						return false;  
					}					
			}  

    }   
    //Regla 126
 if ($(campo_j).attr('id')=='txt_F1_S3_P302')
    {
    campo301=$.trim($('#txt_F1_S3_P301').val());
    campo302=$.trim($('#txt_F1_S3_P302').val());
        if ( eliminar_miles(campo301) > 0 )
		{
			if (eliminar_miles(campo302) < 0 || eliminar_miles(campo302) > 100 || $.trim($(campo_j).val()).length == 0)
            {
				if (perfil == 4)
                    {
					if(!confirm('Advertencia: Porcentaje de sobretasa compra de materias primas, materiales e insumos fuera de rango (0% al 100%).\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P302').focus();
                        $('#txt_F1_S3_P302').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P303').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Porcentaje de sobretasa compra de materias primas, materiales e insumos fuera de rango (0% al 100%).");
						$('#txt_F1_S3_P302').focus();
						$('#txt_F1_S3_P302').select();
						return false;  
					}					
			}  
		}
    }  
    //Regla 127
 if ($(campo_j).attr('id')=='txt_F1_S3_P307')
    {
    campo306=$.trim($('#txt_F1_S3_P306').val());
    campo307=$.trim($('#txt_F1_S3_P307').val());
        if ( eliminar_miles(campo306) > 0 )
		{
			if (eliminar_miles(campo307) < 0 || eliminar_miles(campo307) > 100 || $.trim($(campo_j).val()).length == 0 )
            {
				if (perfil == 4)
                    {
					if(!confirm('Advertencia: Porcentaje de sobretasa articulos comprados para la reventa fuera de rango (0% al 100%).\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P307').focus();
                        $('#txt_F1_S3_P307').select();
                        return false;
				        }
				        else
				        {
                        flag_2 = true;
                        $('#txt_F1_S3_P308').focus();
                        return false;
				        }    
			        }
			        else 
			        {
						alert("Error: Porcentaje de sobretasa articulos comprados para la reventa fuera de rango (0% al 100%).");
						$('#txt_F1_S3_P307').focus();
						$('#txt_F1_S3_P307').select();
						return false;  
					}		
			}  
		}
    } 
        //Regla 128
 if ($(campo_j).attr('id')=='txt_F1_S3_P312')
    {
    campo301=$.trim($('#txt_F1_S3_P301').val());
    campo303=$.trim($('#txt_F1_S3_P303').val());
	campo304=$.trim($('#txt_F1_S3_P304').val());
	campo305=$.trim($('#txt_F1_S3_P305').val());
	campo306=$.trim($('#txt_F1_S3_P306').val());
	campo308=$.trim($('#txt_F1_S3_P308').val());
	campo309=$.trim($('#txt_F1_S3_P309').val());
	campo310=$.trim($('#txt_F1_S3_P310').val());
	campo311=$.trim($('#txt_F1_S3_P311').val());
	campo312=$.trim($('#txt_F1_S3_P312').val());    
    suma=eliminar_miles(campo301)+eliminar_miles(campo303)+eliminar_miles(campo304)+eliminar_miles(campo305)+eliminar_miles(campo306)+eliminar_miles(campo308)+eliminar_miles(campo309)+eliminar_miles(campo310)+eliminar_miles(campo311)+eliminar_miles(campo312);

            if ( suma == 0)
            {
				if (perfil == 4)
                    {
					if(!confirm('Advertencia: No informa compras de materias primas, materiales y costo de trabajos efectuados por contrato.\n ¿Desea continuar?'))
				        {
                        $('#txt_F1_S3_P301').focus();
                        $('#txt_F1_S3_P301').select();
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
						alert("Error: No informa compras de materias primas, materiales y costo de trabajos efectuados por contrato.");
						$('#txt_F1_S3_P301').focus();
						$('#txt_F1_S3_P301').select();
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
 //Regla 99   
 if ($(campo_j).attr('id')=='txt_F1_S2_P2108')
    {
    campo2099=$.trim($('#txt_F1_S2_P2099').val());
    campo2100=$.trim($('#txt_F1_S2_P2100').val());
    campo2101=$.trim($('#txt_F1_S2_P2101').val());
    campo2102=$.trim($('#txt_F1_S2_P2102').val());
    campo2103=$.trim($('#txt_F1_S2_P2103').val());
    campo2104=$.trim($('#txt_F1_S2_P2104').val());
    campo2105=$.trim($('#txt_F1_S2_P2105').val());
    campo2106=$.trim($('#txt_F1_S2_P2106').val());
    campo2107=$.trim($('#txt_F1_S2_P2107').val());
    campo2108=$.trim($('#txt_F1_S2_P2108').val());
    
            if ( eliminar_miles(campo2108) > 0 )
            {
			    suma=eliminar_miles(campo2099)+eliminar_miles(campo2100)+eliminar_miles(campo2101)+eliminar_miles(campo2102)+eliminar_miles(campo2103)+eliminar_miles(campo2104)+eliminar_miles(campo2105)+eliminar_miles(campo2106);
				if ( suma== 0 || eliminar_miles(campo2107)==0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2108 - Advertencia: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2108 - Error: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
            }  

    }  
	//Regla 100   
 if ($(campo_j).attr('id')=='txt_F1_S2_P2108')
    {
    campo2099=$.trim($('#txt_F1_S2_P2099').val());
    campo2100=$.trim($('#txt_F1_S2_P2100').val());
    campo2101=$.trim($('#txt_F1_S2_P2101').val());
    campo2102=$.trim($('#txt_F1_S2_P2102').val());
    campo2103=$.trim($('#txt_F1_S2_P2103').val());
    campo2104=$.trim($('#txt_F1_S2_P2104').val());
    campo2105=$.trim($('#txt_F1_S2_P2105').val());
    campo2106=$.trim($('#txt_F1_S2_P2106').val());
    campo2107=$.trim($('#txt_F1_S2_P2107').val());
    campo2108=$.trim($('#txt_F1_S2_P2108').val());
    suma=eliminar_miles(campo2099)+eliminar_miles(campo2100)+eliminar_miles(campo2101)+eliminar_miles(campo2102)+eliminar_miles(campo2103)+eliminar_miles(campo2104)+eliminar_miles(campo2105)+eliminar_miles(campo2106);

            if ( suma > 0 || eliminar_miles(campo2107) > 0 )
            {
				if ( eliminar_miles(campo2108)== 0)
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2108 - Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2108 - Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
            }  

    }
 //Regla 101
 if ($(campo_j).attr('id')=='txt_F1_S2_P2118')
    {
    campo2109=$.trim($('#txt_F1_S2_P2109').val());
    campo2110=$.trim($('#txt_F1_S2_P2110').val());
    campo2111=$.trim($('#txt_F1_S2_P2111').val());
    campo2112=$.trim($('#txt_F1_S2_P2112').val());
    campo2113=$.trim($('#txt_F1_S2_P2113').val());
    campo2114=$.trim($('#txt_F1_S2_P2114').val());
    campo2115=$.trim($('#txt_F1_S2_P2115').val());
    campo2116=$.trim($('#txt_F1_S2_P2116').val());
    campo2117=$.trim($('#txt_F1_S2_P2117').val());
    campo2118=$.trim($('#txt_F1_S2_P2118').val());
    
            if ( eliminar_miles(campo2118) > 0 )
            {
			    suma=eliminar_miles(campo2109)+eliminar_miles(campo2110)+eliminar_miles(campo2111)+eliminar_miles(campo2112)+eliminar_miles(campo2113)+eliminar_miles(campo2114)+eliminar_miles(campo2115)+eliminar_miles(campo2116);
				if ( suma== 0 || eliminar_miles(campo2117)==0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2118 - Advertencia: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2118 - Error: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
            }  

    }  
	//Regla 102   
 if ($(campo_j).attr('id')=='txt_F1_S2_P2118')
    {
    campo2109=$.trim($('#txt_F1_S2_P2109').val());
    campo2110=$.trim($('#txt_F1_S2_P2110').val());
    campo2111=$.trim($('#txt_F1_S2_P2111').val());
    campo2112=$.trim($('#txt_F1_S2_P2112').val());
    campo2113=$.trim($('#txt_F1_S2_P2113').val());
    campo2114=$.trim($('#txt_F1_S2_P2114').val());
    campo2115=$.trim($('#txt_F1_S2_P2115').val());
    campo2116=$.trim($('#txt_F1_S2_P2116').val());
    campo2117=$.trim($('#txt_F1_S2_P2117').val());
    campo2118=$.trim($('#txt_F1_S2_P2118').val());
    suma=eliminar_miles(campo2109)+eliminar_miles(campo2110)+eliminar_miles(campo2111)+eliminar_miles(campo2112)+eliminar_miles(campo2113)+eliminar_miles(campo2114)+eliminar_miles(campo2115)+eliminar_miles(campo2116);

            if ( suma > 0 || eliminar_miles(campo2117) > 0 )
            {
				if ( eliminar_miles(campo2118)== 0)
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2118 - Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2118 - Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
            }  

    }
 //Regla 103
 if ($(campo_j).attr('id')=='txt_F1_S2_P2128')
    {
    campo2119=$.trim($('#txt_F1_S2_P2119').val());
    campo2120=$.trim($('#txt_F1_S2_P2120').val());
    campo2121=$.trim($('#txt_F1_S2_P2121').val());
    campo2122=$.trim($('#txt_F1_S2_P2122').val());
    campo2123=$.trim($('#txt_F1_S2_P2123').val());
    campo2124=$.trim($('#txt_F1_S2_P2124').val());
    campo2125=$.trim($('#txt_F1_S2_P2125').val());
    campo2126=$.trim($('#txt_F1_S2_P2126').val());
    campo2127=$.trim($('#txt_F1_S2_P2127').val());
    campo2128=$.trim($('#txt_F1_S2_P2128').val());
    
            if ( eliminar_miles(campo2128) > 0 )
            {
			    suma=eliminar_miles(campo2119)+eliminar_miles(campo2120)+eliminar_miles(campo2121)+eliminar_miles(campo2122)+eliminar_miles(campo2123)+eliminar_miles(campo2124)+eliminar_miles(campo2125)+eliminar_miles(campo2126);
				if ( suma== 0 || eliminar_miles(campo2127)==0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2128 - Advertencia: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2128 - Error: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
            }  

    }  
	//Regla 104
 if ($(campo_j).attr('id')=='txt_F1_S2_P2128')
    {
    campo2119=$.trim($('#txt_F1_S2_P2119').val());
    campo2120=$.trim($('#txt_F1_S2_P2120').val());
    campo2121=$.trim($('#txt_F1_S2_P2121').val());
    campo2122=$.trim($('#txt_F1_S2_P2122').val());
    campo2123=$.trim($('#txt_F1_S2_P2123').val());
    campo2124=$.trim($('#txt_F1_S2_P2124').val());
    campo2125=$.trim($('#txt_F1_S2_P2125').val());
    campo2126=$.trim($('#txt_F1_S2_P2126').val());
    campo2127=$.trim($('#txt_F1_S2_P2127').val());
    campo2128=$.trim($('#txt_F1_S2_P2128').val());
    suma=eliminar_miles(campo2119)+eliminar_miles(campo2120)+eliminar_miles(campo2121)+eliminar_miles(campo2122)+eliminar_miles(campo2123)+eliminar_miles(campo2124)+eliminar_miles(campo2125)+eliminar_miles(campo2126);

            if ( suma > 0 || eliminar_miles(campo2127) > 0 )
            {
				if ( eliminar_miles(campo2128)== 0)
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2128 - Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2128 - Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
            }  

    }
 //Regla 105
 if ($(campo_j).attr('id')=='txt_F1_S2_P2138')
    {
    campo2129=$.trim($('#txt_F1_S2_P2129').val());
    campo2130=$.trim($('#txt_F1_S2_P2130').val());
    campo2131=$.trim($('#txt_F1_S2_P2131').val());
    campo2132=$.trim($('#txt_F1_S2_P2132').val());
    campo2133=$.trim($('#txt_F1_S2_P2133').val());
    campo2134=$.trim($('#txt_F1_S2_P2134').val());
    campo2135=$.trim($('#txt_F1_S2_P2135').val());
    campo2136=$.trim($('#txt_F1_S2_P2136').val());
    campo2137=$.trim($('#txt_F1_S2_P2137').val());
    campo2138=$.trim($('#txt_F1_S2_P2138').val());
    
            if ( eliminar_miles(campo2138) > 0 )
            {
			    suma=eliminar_miles(campo2129)+eliminar_miles(campo2130)+eliminar_miles(campo2131)+eliminar_miles(campo2132)+eliminar_miles(campo2133)+eliminar_miles(campo2134)+eliminar_miles(campo2135)+eliminar_miles(campo2136);
				if ( suma== 0 || eliminar_miles(campo2137)==0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2138 - Advertencia: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2138 - Error: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
            }  

    }  
	//Regla 106
 if ($(campo_j).attr('id')=='txt_F1_S2_P2138')
    {
    campo2129=$.trim($('#txt_F1_S2_P2129').val());
    campo2130=$.trim($('#txt_F1_S2_P2130').val());
    campo2131=$.trim($('#txt_F1_S2_P2131').val());
    campo2132=$.trim($('#txt_F1_S2_P2132').val());
    campo2133=$.trim($('#txt_F1_S2_P2133').val());
    campo2134=$.trim($('#txt_F1_S2_P2134').val());
    campo2135=$.trim($('#txt_F1_S2_P2135').val());
    campo2136=$.trim($('#txt_F1_S2_P2136').val());
    campo2137=$.trim($('#txt_F1_S2_P2137').val());
    campo2138=$.trim($('#txt_F1_S2_P2138').val());
    suma=eliminar_miles(campo2129)+eliminar_miles(campo2130)+eliminar_miles(campo2131)+eliminar_miles(campo2132)+eliminar_miles(campo2133)+eliminar_miles(campo2134)+eliminar_miles(campo2135)+eliminar_miles(campo2136);

            if ( suma > 0 || eliminar_miles(campo2137) > 0 )
            {
				if ( eliminar_miles(campo2138)== 0)
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2138 - Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2138 - Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
            }  

    }
 //Regla 107
 if ($(campo_j).attr('id')=='txt_F1_S2_P2148')
    {
    campo2139=$.trim($('#txt_F1_S2_P2139').val());
    campo2140=$.trim($('#txt_F1_S2_P2140').val());
    campo2141=$.trim($('#txt_F1_S2_P2141').val());
    campo2142=$.trim($('#txt_F1_S2_P2142').val());
    campo2143=$.trim($('#txt_F1_S2_P2143').val());
    campo2144=$.trim($('#txt_F1_S2_P2144').val());
    campo2145=$.trim($('#txt_F1_S2_P2145').val());
    campo2146=$.trim($('#txt_F1_S2_P2146').val());
    campo2147=$.trim($('#txt_F1_S2_P2147').val());
    campo2148=$.trim($('#txt_F1_S2_P2148').val());
    
            if ( eliminar_miles(campo2148) > 0 )
            {
			    suma=eliminar_miles(campo2139)+eliminar_miles(campo2140)+eliminar_miles(campo2141)+eliminar_miles(campo2142)+eliminar_miles(campo2143)+eliminar_miles(campo2144)+eliminar_miles(campo2145)+eliminar_miles(campo2146);
				if ( suma== 0 || eliminar_miles(campo2147)==0 )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2148 - Advertencia: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2148 - Error: Informa remuneraciones pero no informa personas que trabajaron u horas trabajadas. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
            }  

    }  
	//Regla 108
 if ($(campo_j).attr('id')=='txt_F1_S2_P2148')
    {
    campo2139=$.trim($('#txt_F1_S2_P2139').val());
    campo2140=$.trim($('#txt_F1_S2_P2140').val());
    campo2141=$.trim($('#txt_F1_S2_P2141').val());
    campo2142=$.trim($('#txt_F1_S2_P2142').val());
    campo2143=$.trim($('#txt_F1_S2_P2143').val());
    campo2144=$.trim($('#txt_F1_S2_P2144').val());
    campo2145=$.trim($('#txt_F1_S2_P2145').val());
    campo2146=$.trim($('#txt_F1_S2_P2146').val());
    campo2147=$.trim($('#txt_F1_S2_P2147').val());
    campo2148=$.trim($('#txt_F1_S2_P2148').val());
    suma=eliminar_miles(campo2139)+eliminar_miles(campo2140)+eliminar_miles(campo2141)+eliminar_miles(campo2142)+eliminar_miles(campo2143)+eliminar_miles(campo2144)+eliminar_miles(campo2145)+eliminar_miles(campo2146);

            if ( suma > 0 || eliminar_miles(campo2147) > 0 )
            {
				if ( eliminar_miles(campo2148)== 0)
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2148 - Advertencia: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2148 - Error: Informa personas que trabajaron u horas trabajadas pero no informa pago de remuneraciones. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
            }  

    }
 //Regla 109
 if ($(campo_j).attr('id')=='txt_F1_S2_P2149')
    {
    campo2099=$.trim($('#txt_F1_S2_P2099').val());
    campo2109=$.trim($('#txt_F1_S2_P2109').val());
    campo2119=$.trim($('#txt_F1_S2_P2119').val());
    campo2129=$.trim($('#txt_F1_S2_P2129').val());
    campo2139=$.trim($('#txt_F1_S2_P2139').val());
    campo2149=$.trim($('#txt_F1_S2_P2149').val());
    suma=eliminar_miles(campo2099)+eliminar_miles(campo2109)+eliminar_miles(campo2119)+eliminar_miles(campo2129)+eliminar_miles(campo2139);
				if ( suma != eliminar_miles(campo2149) )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2149 - Advertencia: Total de Control Hombres (B1 a B6), Trimestre 1 No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2149 - Error: Total de Control Hombres (B1 a B6), Trimestre 1 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }

    }  
 //Regla 110
 if ($(campo_j).attr('id')=='txt_F1_S2_P2150')
    {
    campo2100=$.trim($('#txt_F1_S2_P2100').val());
    campo2110=$.trim($('#txt_F1_S2_P2110').val());
    campo2120=$.trim($('#txt_F1_S2_P2120').val());
    campo2130=$.trim($('#txt_F1_S2_P2130').val());
    campo2140=$.trim($('#txt_F1_S2_P2140').val());
    campo2150=$.trim($('#txt_F1_S2_P2150').val());
    suma=eliminar_miles(campo2100)+eliminar_miles(campo2110)+eliminar_miles(campo2120)+eliminar_miles(campo2130)+eliminar_miles(campo2140);
				if ( suma != eliminar_miles(campo2150) )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2150 - Advertencia: Total de Control Mujeres (B1 a B6), Trimestre 1 No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2150 - Error: Total de Control Mujeres (B1 a B6), Trimestre 1 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }

    }  
 //Regla 111
 if ($(campo_j).attr('id')=='txt_F1_S2_P2151')
    {
    campo2101=$.trim($('#txt_F1_S2_P2101').val());
    campo2111=$.trim($('#txt_F1_S2_P2111').val());
    campo2121=$.trim($('#txt_F1_S2_P2121').val());
    campo2131=$.trim($('#txt_F1_S2_P2131').val());
    campo2141=$.trim($('#txt_F1_S2_P2141').val());
    campo2151=$.trim($('#txt_F1_S2_P2151').val());
    suma=eliminar_miles(campo2101)+eliminar_miles(campo2111)+eliminar_miles(campo2121)+eliminar_miles(campo2131)+eliminar_miles(campo2141);
				if ( suma != eliminar_miles(campo2151) )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2151 - Advertencia: Total de Control Hombres (B1 a B6), Trimestre 2 No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2151 - Error: Total de Control Hombres (B1 a B6), Trimestre 2 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }

    }  
 //Regla 112
 if ($(campo_j).attr('id')=='txt_F1_S2_P2152')
    {
    campo2102=$.trim($('#txt_F1_S2_P2102').val());
    campo2112=$.trim($('#txt_F1_S2_P2112').val());
    campo2122=$.trim($('#txt_F1_S2_P2122').val());
    campo2132=$.trim($('#txt_F1_S2_P2132').val());
    campo2142=$.trim($('#txt_F1_S2_P2142').val());
    campo2152=$.trim($('#txt_F1_S2_P2152').val());
    suma=eliminar_miles(campo2102)+eliminar_miles(campo2112)+eliminar_miles(campo2122)+eliminar_miles(campo2132)+eliminar_miles(campo2142);
				if ( suma != eliminar_miles(campo2152) )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2152 - Advertencia: Total de Control Mujeres (B1 a B6), Trimestre 2 No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2152 - Error: Total de Control Mujeres (B1 a B6), Trimestre 2 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }

    }  
//Regla 113
 if ($(campo_j).attr('id')=='txt_F1_S2_P2153')
    {
    campo2103=$.trim($('#txt_F1_S2_P2103').val());
    campo2113=$.trim($('#txt_F1_S2_P2113').val());
    campo2123=$.trim($('#txt_F1_S2_P2123').val());
    campo2133=$.trim($('#txt_F1_S2_P2133').val());
    campo2143=$.trim($('#txt_F1_S2_P2143').val());
    campo2153=$.trim($('#txt_F1_S2_P2153').val());
    suma=eliminar_miles(campo2103)+eliminar_miles(campo2113)+eliminar_miles(campo2123)+eliminar_miles(campo2133)+eliminar_miles(campo2143);
				if ( suma != eliminar_miles(campo2153) )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2153 - Advertencia: Total de Control Hombres (B1 a B6), Trimestre 3 No Cuadra. \n");
			        $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2153 - Error: Total de Control Hombres (B1 a B6), Trimestre 3 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }

    }  
     //Regla 114
 if ($(campo_j).attr('id')=='txt_F1_S2_P2154')
    {
    campo2104=$.trim($('#txt_F1_S2_P2104').val());
    campo2114=$.trim($('#txt_F1_S2_P2114').val());
    campo2124=$.trim($('#txt_F1_S2_P2124').val());
    campo2134=$.trim($('#txt_F1_S2_P2134').val());
    campo2144=$.trim($('#txt_F1_S2_P2144').val());
    campo2154=$.trim($('#txt_F1_S2_P2154').val());
    suma=eliminar_miles(campo2104)+eliminar_miles(campo2114)+eliminar_miles(campo2124)+eliminar_miles(campo2134)+eliminar_miles(campo2144);
				if ( suma != eliminar_miles(campo2154) )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2154 - Advertencia: Total de Control Mujeres (B1 a B6), Trimestre 3 No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2154 - Error: Total de Control Mujeres (B1 a B6), Trimestre 3 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }

    }  
     //Regla 115
 if ($(campo_j).attr('id')=='txt_F1_S2_P2155')
    {
    campo2105=$.trim($('#txt_F1_S2_P2105').val());
    campo2115=$.trim($('#txt_F1_S2_P2115').val());
    campo2125=$.trim($('#txt_F1_S2_P2125').val());
    campo2135=$.trim($('#txt_F1_S2_P2135').val());
    campo2145=$.trim($('#txt_F1_S2_P2145').val());
    campo2155=$.trim($('#txt_F1_S2_P2155').val());
    suma=eliminar_miles(campo2105)+eliminar_miles(campo2115)+eliminar_miles(campo2125)+eliminar_miles(campo2135)+eliminar_miles(campo2145);
				if ( suma != eliminar_miles(campo2155) )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2155 - Advertencia: Total de Control Hombres (B1 a B6), Trimestre 4 No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2155 - Error: Total de Control Hombres (B1 a B6), Trimestre 4 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }

    }  
 //Regla 116
 if ($(campo_j).attr('id')=='txt_F1_S2_P2156')
    {
    campo2106=$.trim($('#txt_F1_S2_P2106').val());
    campo2116=$.trim($('#txt_F1_S2_P2116').val());
    campo2126=$.trim($('#txt_F1_S2_P2126').val());
    campo2136=$.trim($('#txt_F1_S2_P2136').val());
    campo2146=$.trim($('#txt_F1_S2_P2146').val());
    campo2156=$.trim($('#txt_F1_S2_P2156').val());
    suma=eliminar_miles(campo2106)+eliminar_miles(campo2116)+eliminar_miles(campo2126)+eliminar_miles(campo2136)+eliminar_miles(campo2146);
				if ( suma != eliminar_miles(campo2156) )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2156 - Advertencia: Total de Control Mujeres (B1 a B6), Trimestre 4 No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2156 - Error: Total de Control Mujeres (B1 a B6), Trimestre 4 No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }

    }  
 //Regla 117
 if ($(campo_j).attr('id')=='txt_F1_S2_P2157')
    {
    campo2107=$.trim($('#txt_F1_S2_P2107').val());
    campo2117=$.trim($('#txt_F1_S2_P2117').val());
    campo2127=$.trim($('#txt_F1_S2_P2127').val());
    campo2137=$.trim($('#txt_F1_S2_P2137').val());
    campo2147=$.trim($('#txt_F1_S2_P2147').val());
    campo2157=$.trim($('#txt_F1_S2_P2157').val());
    suma=eliminar_miles(campo2107)+eliminar_miles(campo2117)+eliminar_miles(campo2127)+eliminar_miles(campo2137)+eliminar_miles(campo2147);
				if ( suma != eliminar_miles(campo2157) )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2157 - Advertencia: Total de Control Horas trabajadas en el año No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2157 - Error: Total de Control Horas trabajadas en el año No Cuadra. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }

    }  
 //Regla 118
 if ($(campo_j).attr('id')=='txt_F1_S2_P2158')
    {
    campo2108=$.trim($('#txt_F1_S2_P2108').val());
    campo2118=$.trim($('#txt_F1_S2_P2118').val());
    campo2128=$.trim($('#txt_F1_S2_P2128').val());
    campo2138=$.trim($('#txt_F1_S2_P2138').val());
    campo2148=$.trim($('#txt_F1_S2_P2148').val());
    campo2158=$.trim($('#txt_F1_S2_P2158').val());
    suma=eliminar_miles(campo2108)+eliminar_miles(campo2118)+eliminar_miles(campo2128)+eliminar_miles(campo2138)+eliminar_miles(campo2148);
				if ( suma != eliminar_miles(campo2158) )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2158 - Advertencia: Total de Control Remuneraciones y otras remuneraciones No Cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2158 - Error: Total de Control Remuneraciones y otras remuneraciones No Cuadra. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }

    }  
//Regla 119
if ($(campo_j).attr('id')=='txt_F1_S2_P2158')
    {
	suma=0
	for (i=99;i<159;i++)
	{
			if (i<100)
			{
			campo=$.trim($('#txt_F1_S2_P20'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			 }
			else
			{
			campo=$.trim($('#txt_F1_S2_P2'+i).val());
				if (campo=="")
				{
					campo=0;
				}
			}
        suma=eliminar_miles(campo)+suma;
    } 
	 if (suma == 0)
                {
                    mensaje=mensaje +("Campo 2158 - Advertencia: No informa personal subcontratado por la empresa y/o establecimiento. \n");
					$(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                }
    }
//Regla 121
 if ($(campo_j).attr('id')=='txt_F1_S2_P2167')
    {
    campo2159=$.trim($('#txt_F1_S2_P2159').val());
    campo2160=$.trim($('#txt_F1_S2_P2160').val());
    campo2161=$.trim($('#txt_F1_S2_P2161').val());
    campo2162=$.trim($('#txt_F1_S2_P2162').val());
    campo2163=$.trim($('#txt_F1_S2_P2163').val());
    campo2164=$.trim($('#txt_F1_S2_P2164').val());
    campo2165=$.trim($('#txt_F1_S2_P2165').val());
    campo2166=$.trim($('#txt_F1_S2_P2166').val());
    campo2167=$.trim($('#txt_F1_S2_P2167').val());
    
            if ( eliminar_miles(campo2167) > 0 )
            {
			    suma=eliminar_miles(campo2159)+eliminar_miles(campo2160)+eliminar_miles(campo2161)+eliminar_miles(campo2162)+eliminar_miles(campo2163)+eliminar_miles(campo2164)+eliminar_miles(campo2165)+eliminar_miles(campo2166);
				if ( suma== 0  )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2167 - Advertencia: Informa honorarios pero no cantidad de personas que trabajaron. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2167 - Error: Informa honorarios pero no cantidad de personas que trabajaron. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
            }  

    }  
    //Regla 122
 if ($(campo_j).attr('id')=='txt_F1_S2_P2167')
    {
    campo2159=$.trim($('#txt_F1_S2_P2159').val());
    campo2160=$.trim($('#txt_F1_S2_P2160').val());
    campo2161=$.trim($('#txt_F1_S2_P2161').val());
    campo2162=$.trim($('#txt_F1_S2_P2162').val());
    campo2163=$.trim($('#txt_F1_S2_P2163').val());
    campo2164=$.trim($('#txt_F1_S2_P2164').val());
    campo2165=$.trim($('#txt_F1_S2_P2165').val());
    campo2166=$.trim($('#txt_F1_S2_P2166').val());
    campo2167=$.trim($('#txt_F1_S2_P2167').val());
    suma=eliminar_miles(campo2159)+eliminar_miles(campo2160)+eliminar_miles(campo2161)+eliminar_miles(campo2162)+eliminar_miles(campo2163)+eliminar_miles(campo2164)+eliminar_miles(campo2165)+eliminar_miles(campo2166);

            if ( suma > 0 )
            {
				if ( eliminar_miles(campo2167)== 0  )
                {
					if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 2167 - Advertencia: Informa cantidad de personas que trabajan pero no informa pago de honorarios. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 2167 - Error: Informa cantidad de personas que trabajan pero no informa pago de honorarios. \n");
                    $(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;
					}
                }
            }  

    } 
    //Regla 123
 if ($(campo_j).attr('id')=='txt_F1_S2_P2170')
    {
    campo2168=$.trim($('#txt_F1_S2_P2168').val());
    campo2169=$.trim($('#txt_F1_S2_P2169').val());
    campo2170=$.trim($('#txt_F1_S2_P2170').val());
    
    suma=eliminar_miles(campo2168)+eliminar_miles(campo2169)+eliminar_miles(campo2170);

            if ( suma == 0 )
            {
                mensaje=mensaje +("Campo 2170 - Advertencia: No informa costos laborales área informática. \n");
				$(campo_j).css('border','2px solid #FFA500');
			    advertencia++;
			    foco[++cont] = campo_j;

            }  

    } 
    //Regla 124
 if ($(campo_j).attr('id')=='txt_F1_S3_P312')
    {
    campo301=$.trim($('#txt_F1_S3_P301').val());
    campo303=$.trim($('#txt_F1_S3_P303').val());
	campo304=$.trim($('#txt_F1_S3_P304').val());
	campo305=$.trim($('#txt_F1_S3_P305').val());
	campo306=$.trim($('#txt_F1_S3_P306').val());
	campo308=$.trim($('#txt_F1_S3_P308').val());
	campo309=$.trim($('#txt_F1_S3_P309').val());
	campo310=$.trim($('#txt_F1_S3_P310').val());
	campo311=$.trim($('#txt_F1_S3_P311').val());
	campo312=$.trim($('#txt_F1_S3_P312').val());    
    suma=eliminar_miles(campo301)+eliminar_miles(campo303)+eliminar_miles(campo304)+eliminar_miles(campo305)+eliminar_miles(campo306)+eliminar_miles(campo308)+eliminar_miles(campo309)+eliminar_miles(campo310)+eliminar_miles(campo311);

            if ( suma != eliminar_miles(campo312))
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 312 - Advertencia: Total control valores netos en moneda utilizada seccion III.A no cuadra. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 312 - Error: Total control valores netos en moneda utilizada seccion III.A no cuadra. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
            }  

    }  
    //Regla 125
 if ($(campo_j).attr('id')=='txt_F1_S3_P303')
    {
    campo301=$.trim($('#txt_F1_S3_P301').val());
    campo303=$.trim($('#txt_F1_S3_P303').val());    
        if ( eliminar_miles(campo303) > eliminar_miles(campo301))
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 303 - Advertencia: Productos importados superior a total valor compras. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 303 - Error: Productos importados superior a total valor compras. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
			}  

    }   
    //Regla 126
 if ($(campo_j).attr('id')=='txt_F1_S3_P302')
    {
    campo301=$.trim($('#txt_F1_S3_P301').val());
    campo302=$.trim($('#txt_F1_S3_P302').val());
        if ( eliminar_miles(campo301) > 0 )
		{
			if (eliminar_miles(campo302) < 0 || eliminar_miles(campo302) > 100 || $.trim($(campo_j).val()).length == 0)
            {	
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 302 - Advertencia: Porcentaje de sobretasa compra de materias primas, materiales e insumos fuera de rango (0% al 100%). \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 302 - Error: Porcentaje de sobretasa compra de materias primas, materiales e insumos fuera de rango (0% al 100%). \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}
			}  
		}
    }  
    //Regla 127
 if ($(campo_j).attr('id')=='txt_F1_S3_P307')
    {
    campo306=$.trim($('#txt_F1_S3_P306').val());
    campo307=$.trim($('#txt_F1_S3_P307').val());
        if ( eliminar_miles(campo306) > 0 )
		{
			if (eliminar_miles(campo307) < 0 || eliminar_miles(campo307) > 100 || $.trim($(campo_j).val()).length == 0 )
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 307 - Advertencia: Porcentaje de sobretasa articulos comprados para la reventa fuera de rango (0% al 100%). \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 307 - Error: Porcentaje de sobretasa articulos comprados para la reventa fuera de rango (0% al 100%). \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j; 
					}
			}  
		}
    } 
        //Regla 128
 if ($(campo_j).attr('id')=='txt_F1_S3_P312')
    {
    campo301=$.trim($('#txt_F1_S3_P301').val());
    campo303=$.trim($('#txt_F1_S3_P303').val());
	campo304=$.trim($('#txt_F1_S3_P304').val());
	campo305=$.trim($('#txt_F1_S3_P305').val());
	campo306=$.trim($('#txt_F1_S3_P306').val());
	campo308=$.trim($('#txt_F1_S3_P308').val());
	campo309=$.trim($('#txt_F1_S3_P309').val());
	campo310=$.trim($('#txt_F1_S3_P310').val());
	campo311=$.trim($('#txt_F1_S3_P311').val());
	campo312=$.trim($('#txt_F1_S3_P312').val());    
    suma=eliminar_miles(campo301)+eliminar_miles(campo303)+eliminar_miles(campo304)+eliminar_miles(campo305)+eliminar_miles(campo306)+eliminar_miles(campo308)+eliminar_miles(campo309)+eliminar_miles(campo310)+eliminar_miles(campo311)+eliminar_miles(campo312);

            if ( suma == 0)
            {
				if (perfil == 4)
                    {
                    mensaje=mensaje +("Campo 312 - Advertencia: No informa compras de materias primas, materiales y costo de trabajos efectuados por contrato. \n");
			         $(campo_j).css('border','2px solid #FFA500');
			        advertencia++;
			        foco[++cont] = campo_j;
                    }
                    else
                    {
                    mensaje=mensaje +("Campo 312 - Error: No informa compras de materias primas, materiales y costo de trabajos efectuados por contrato. \n");
					$(campo_j).css('border','2px solid red');
			        error++;
			        foco[++cont] = campo_j;  
					}
            }  

    }    

});
    return [advertencia,error,foco[0],mensaje];
}
