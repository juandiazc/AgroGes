 
 
 
 
 //**************************************************************************************************************** 
function campo_nulo(campo)
{
	if (event.keyCode==13)
	{
		//if(trim(campo.value)=='')
		if (campo.value.length == 0) 
		  {
			campo.value=0
		  }  
	}
	return true;
}    
    
function valida_region(val1, val2, val3,mode)
{
	if (event.keyCode==13)
	{
		campo_nulo(val1)
		campo_nulo(val2)
		campo_nulo(val3)
		
				
		var suma = (parseInt(val1.value) + parseInt(val2.value))
		if (suma == parseInt(val3.value)) 
		   {
		    val1.style.backgroundColor="White";
			return true;
		   }
		else
		{
		   if (mode == 0)
		   {
			alert('Total distinto a parciales : ');
			}
			val1.style.backgroundColor="Orange";
			return true;
		}  
		 	
	}
 }


   
function valida_aves_vertical(val1, val2, val3, val4, val5 , mode)
{
	if (event.keyCode==13)
	{
		campo_nulo(val1)
		campo_nulo(val2)
		campo_nulo(val3)
		campo_nulo(val4)
		campo_nulo(val5)
				
		var suma = (parseInt(val1.value) + parseInt(val2.value)+ parseInt(val3.value)+ parseInt(val4.value))
		if (suma == parseInt(val5.value)) 
		   {
		    val5.style.backgroundColor="White";
			return true;
		   }
		else
		{
		   if (mode == 0)
		   {
			alert('Total distinto a parciales : ');
			//alert(mode);
			}
			val5.style.backgroundColor="Orange";
			//val6.focus();
			return true;
			//return false;
		}  
		 	
	}
 }


function valida_trabajadores_vertical(val1, val2, val3,mode)
{
	if (event.keyCode==13)
	{
		campo_nulo(val1)
		campo_nulo(val2)
		campo_nulo(val3)
		
				
		var suma = (parseInt(val1.value) + parseInt(val2.value))
		if (suma == parseInt(val3.value)) 
		   {
		    val3.style.backgroundColor="White";
			return true;
		   }
		else
		{
		   if (mode == 0)
		   {
			alert('Total distinto a parciales : ');
			//alert(mode);
			}
			val3.style.backgroundColor="Orange";
			//val6.focus();
			return true;
			//return false;
		}  
		 	
	}
 }






function validar(input)
{ 
input.value = Number(input.value); 
}


function PresionaEnter()
{
	if (event.keyCode==13)
	{
		event.keyCode = 9;
		return false;
	}
	return true;
}

function situaFoco()
{
	document.forms(0).elements(0).focus();
}



function imagen_procesa()
{
 var boton1 = document.getElementById('Button2');
 var imagen = document.getElementById('imgProcesando');
 boton1.disabled=true;
 imagen.style.display='inline';

  //alert("CC");
  
}

function oculta_imagen_procesa()
{
 var imagen = document.getElementById('imgProcesando');
 imagen.style.display='none';
 //return false;

  //alert("CC");
  
}

function solodecimales()
{
   if ((event.keyCode < 48 || event.keyCode > 57))
		if ((event.keyCode != 44))
		{
			event.returnValue = false;
		}
}

function solonumeros(){

   if ((event.keyCode < 48 || event.keyCode > 57))
  // {
   event.returnValue = false; 
  // }
}

function solodecimales()
{
   if ((event.keyCode < 48 || event.keyCode > 57))
		if ((event.keyCode != 44))
		{
			event.returnValue = false;
		}
}

function Valida_rut(R,DV)
{
   var M = 0;
   var S = 0;
   var T = 0;
   var D = 0;
    
   T = R;
   D = DV;
        
   //document.write (T + " - " + D);
   
   if (D=="k")
      {
       D="K"
       }
   
   for(;T;T=Math.floor(T/10))
      S = (S+T%10*(9-M++%6))%11;
           S?S-1:'k'; 
                    
       ////document.write ("S es: " + S);
       
      if (S==10)
        {
        S = "K"
        }
      if (S != D)
        {
          alert("Digito del Rut Invalido");
          DV.value = "";
         // DV.focus();
         return false;
         }
      else
         {
         return true;
         }
}

function  Foco(control) 
{
control.focus()
return false
}
function  Valida_Rol(rol,dv) 
{
			var i=2;
			var suma=0;
			var divide;
			var valor=rol;
			while (valor>0)
			{
				if (i==8)
				{
					i=2;
				}
				suma=suma+((valor % 10) * i )
				
				valor = parseInt(valor/10);
				i=i+1;
			}
			
			divide = suma % 9;
			if (divide==dv){
				return true;
			}
			else{
				alert("Digito del Rol es Invalido");
				dv.value = "";
				//dv.focus();
				return false;
				
			}
}




function pantallaCompleta()
{
alert('XX');
//window.open('login.aspx', '', 'fullscreen=yes, scrollbars=auto');
return true;
}
	