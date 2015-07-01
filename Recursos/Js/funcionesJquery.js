    
    function SoloNumeros(textbox) {
        $(textbox).keydown(function (event) {
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 13 || (event.keyCode >= 96 && event.keyCode <= 105)) 
            {
                // enter, backspace, delete
            }
            else 
            {
                if (event.keyCode < 48 || event.keyCode > 57) 
                {
                    event.preventDefault();
                }
            }
        });         
    }
    
    function SoloNumerosCeroAlSiete(textbox) {
        $(textbox).keydown(function (event) {
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 13 || (event.keyCode >= 96 && event.keyCode <= 103) || (event.keyCode > 48 && event.keyCode <= 55)) 
            {
                // delete || backspace || enter (numereos numpad 0 al numpad 7) || (numereos 0 al 7)
            }
            else 
            {                   
                event.preventDefault();                    
            }
         });       
    }  
    
    function SoloNumerosUnoAlTres(textbox) {
        $(textbox).keydown(function (event) {
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 13 || (event.keyCode >= 97 && event.keyCode <= 99) || (event.keyCode >= 49 && event.keyCode <= 51)) 
            {
                // delete || backspace || enter (numereos numpad 1 al numpad 3) || (numereos 1 al 3)
            }
            else 
            {                   
                event.preventDefault();                    
            }
         });       
    }  
    
     function soloDecimales(textbox) {
        $(textbox).keydown(function (event) {
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 13 || event.keyCode == 188 || event.keyCode == 37 || event.keyCode == 39 ||  (event.keyCode >= 96 && event.keyCode <= 105)) 
            {
                // delete || backspace || enter ||comma || (numereos numpad 0 al numpad 9)
            }
            else 
            {
                //numeros del 0 al 9
                if (event.keyCode < 48 || event.keyCode > 57) 
                {
                    event.preventDefault(); 
                }
            }
       });        
    }
    
   
    
    
    function MaxlengthSetting(selector,n) {
        $(selector).attr('maxlength', n);      
    }
    
    function CalcularTotal(selector,ctr) {
        var total = 0;
        if(ctr=='input')
        {
            $(selector).each(function() {                
                var coltotal = parseFloat($(this).val());               
                if (!isNaN(coltotal)) {
                    total += coltotal;
                }
            });
            return total;           
        }
        if(ctr=='label')
        {
            $(selector).each(function() {                
                var coltotal = parseFloat($(this).html());               
                if (!isNaN(coltotal)) {
                    total += coltotal;
                }
            });
            return total;           
        }
        
    }

    function validarEmail(valor) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor)) {
            return (true)
        } else {
            return (false);
        }
    }
    
    function PasaFocoJq(obj1,obj2) 
     {
        $(obj1).keypress(function(event) 
        {
            if(event.keyCode == 13) 
            {
                $(obj2).focus(); 
                $(obj2).select();
                return false;        
            }
            else
            {
                if(event.keyCode == 9)
                {
                return false;
                    
                }
            }
        });  
     }

        function SoloX(selector)
        {
            $(selector).keydown(function (event) 
            {
                if ((event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 13 || event.keyCode == 88)!=true) 
                {   // delete,backspace,tab,enter,k
                    event.preventDefault();           
                }        
            });
        }
        
        
    function SinEspaciador(textbox) {
        $(textbox).keydown(function (event) {
            if (event.keyCode == 32 ) 
            {
                event.preventDefault();
            }
            else 
            {                   
                                 
            }
         });       
    }  
    
    function CompruebaSuma(selector,tot,msg) {
	    var total = 0;	    
	    $(selector).each(function() {                
            var coltotal = parseFloat($(this).val());                     
            if (!isNaN(coltotal)) {
                total += coltotal;
            }
        });        
        if(total==parseFloat($(tot).val())){
            return true;
        }
        else{
            alert(msg); 
            $(tot).focus();
            return false;           
        }
    }
    
    function SeleccionMaxima(selector,aBuscar,pCont)
    {
        $(selector).keydown(function (event) 
        {                                
            var cont = 0;	    	            
            $(selector).each(function() { 	                                                                    
                var x = $(this).val().toUpperCase();                     
                if (x== aBuscar) {
                    cont += 1;
                }                    
            });
            
            if(cont >= pCont){
                if ((event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 13)!=true) 
                {   // delete,backspace,tab,enter,k
                    event.preventDefault();           
                }                     
            }                       
        });
    }

function ValidaFechaJquery(obj)
{ 
 $(function() {
            
		$("#"+obj).datepicker({ minDate: -30, maxDate: "+0M +0D", dateFormat: "dd/mm/yy" });	
		$("#"+obj).datepicker('show');									
	
	});
}        