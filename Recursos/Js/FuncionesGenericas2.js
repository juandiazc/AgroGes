var MasterPage = 'ctl00_ContentPlaceHolder1_';

/*Cambia el color de fondo cuando el mouse pasa por encima del objeto*/
function td_MouseMove(obj,htxt)
{
    if (obj.id!=htxt.value)
        obj.style.backgroundColor='Lime';
}

/*Cambia el color de fondo a su color original cuando el mouse sale del objeto*/
function td_MouseOut(obj,htxt)
{
    if (obj.id!=htxt.value)
        obj.style.backgroundColor='Transparent';
}

/*Cambia el color de fondo cuando se da un clic en el objeto*/
function td_Click(tr,htxt_tr)
{    
    if (htxt_tr.value!='')
        document.getElementById(htxt_tr.value).style.backgroundColor='Transparent';

    tr.style.backgroundColor='Yellow';
    htxt_tr.value=tr.id;
}

//Descripción:
//  Mueve el cursor de un control a otro al presionar una tecla de dirección
//Parámetro(s):
//  obj: Objeto de referencia
//  sexo: 'H' => hombre
//        'M' => mujer
function Seccion_III_IV_MoverCursor(obj,sexo)
{            
    var tecla = event.keyCode;
    
    if (tecla >= 37 && tecla <= 40)
    {
        var PosCursor = getCursorPos(obj);
        var fila, columna;
        var x, y;
        var cuadro, nombre;
        var parametros = new Array();
        parametros.filas = 0;
        
        nombre = obj.name;
        cuadro = parseInt(nombre.substring(32,33), 10);
        if (cuadro == 2 && parseInt(nombre.substring(35,36), 10) >= 0 && parseInt(nombre.substring(35,36), 10) < 9)
        {
           fila = nombre.substring(34,36);
           columna = nombre.substring(37,38);
        }
        else
        {
           fila = nombre.substring(34,35);
           columna = nombre.substring(36,37);
        }
        
        if (columna == 'T')
            x = columna;
        else
            x = parseInt(columna, 10);
            
        if (fila == 'T')
            y = fila;
        else
            y = parseInt(fila, 10);
       
        switch(cuadro)
        {
         case 1:parametros.filas = 1;break;
         case 2:parametros.filas = 16;break;
         case 3:parametros.filas = 1;break;
         case 4:parametros.filas = 3;break;
        }
        
        switch(tecla)
        {
         case 37://Izquierda
            if (document.selection.createRange().text.length < obj.value.length)
                if (PosCursor>=1)
                    return false;
            if (x == 'T')
                x = 9;
            else
                if (x > 1)
                    x--;
            break;
         case 38://Arriba
            if (y == 'T' && cuadro != 3 && cuadro > 1)
                y = parametros.filas - 1;
            else
                if (y > 1)
                    y--;
                else
                {
                    if (cuadro == 2)
                        y = 'T';
                    else
                        if (cuadro >= 1)
                            y = 'T';
                       
                    if (cuadro > 1)
                        cuadro--;
                }
            break;
         case 39://Derecha
            if (document.selection.createRange().text.length < obj.value.length)
            if (PosCursor<obj.value.length)
                return false;
            if (x < 9)
                x++;
            else
                x = 'T';
            break;
         case 40://Abajo
            if (y == parametros.filas || y == 'T')
            {
              if (cuadro == 2)
                y = 'T';
              else if (cuadro != 4)
                y = 1;
              
              if (cuadro < 4)
                cuadro++;
              break;
            }
            
            if ((y < parametros.filas-1) || (cuadro == 1 && y < parametros.filas))
                y++;
            else if (cuadro != 1)
                y = 'T';
                        
            break;
        }
        
        var txt = document.getElementById(MasterPage+'Txt_'+sexo+'C'+cuadro+'_'+y+'_'+x);
        txt.focus();
    }
}


/*Mueve el cursor de un control a otro al presionar una tecla de dirección*/
function Seccion_V_VI_VII_MoverCursor(obj)
{   
    var tecla; //Tecla presionada
    var cuadro; //Número de cuadro donde se esta posicionado
    var fila; //Número de fila donde se esta posicionado
    var columna; //Número de columna donde se esta posicionado
    var nombre; //Nombre del control donde se esta posicionado
    var txt; //Textbox al cual se pasara el foco
    var PosCursor; //Posición del cursor
    
    tecla = event.keyCode;
    nombre = obj.name;
    cuadro = parseInt(nombre.substring(32,33),10);
    fila = nombre.substring(34,35);
    columna = nombre.substring(36,37);
    PosCursor = getCursorPos(obj);
    
    switch(tecla)
    {
     case 37://Izquierda
        if (document.selection.createRange().text.length < obj.value.length)
            if (PosCursor>=1)
                return false;
        if(columna=='t')
            columna=2;
        else if(columna>1)
            columna--;
        else
        {
            if(cuadro>=8)
            {
                if(cuadro>8)
                {
                    columna='t';
                    cuadro--;
                }
            }
            else if(cuadro>=5)
            {
                if(cuadro>5)
                {
                    columna='t';
                    cuadro--;
                }
            }
        }
        break;
     case 38://Arriba
        if(fila=='t')
            fila=9;
        else if(fila>1)
            fila--;
        else
        {
            if(cuadro>7)
            {
                fila='t';
                cuadro-=3;
            }
        }
        break;
     case 39://Derecha
        if (document.selection.createRange().text.length < obj.value.length)
            if (PosCursor<obj.value.length)
                return false;
        if(columna=='t')
        {            
            if(cuadro<=7)
            {
                if(cuadro<7)
                {
                    cuadro++;
                    columna=1;
                }
            }
            else
            {
                if(cuadro<9)
                {
                    cuadro++;
                    columna=1;
                }
            }    
        }
        else if(columna<2)
            columna++;
        else
            columna='t';                    
        break;
     case 40://Abajo
        if(fila==9)
            fila='t';
        else if(fila<9)
            fila++;
        else
            if(cuadro<7)
            {
                fila=1;
                cuadro+=3;
            }
        break;
    }
    
    var txt = document.getElementById(MasterPage+'txt_yc'+cuadro+'_'+fila+'_'+columna);
    txt.focus();
}


/*Obtiene la posición del cursor dentro de un control*/
function getCursorPos(el)
{
    var sel, rng, r2, i=-1; 
    
    var selection = document.selection; 
    var textRange = el.createTextRange;
    if(selection && textRange)
    {
        sel=document.selection; 
        if(sel)
        {
            r2=sel.createRange(); 
            rng=el.createTextRange(); 
            rng.setEndPoint("EndToStart", r2); 
            i=rng.text.length; 
        }
    }
    
    return i; 
}

/* Cambia el color del Textbox cuando pierde el foco */
function txt_MouseOut(obj)
{
     obj.className='txt_MouseOut';
}

/* Cambia el color del Textbox cuando toma el foco */
function txt_MouseMove(obj)
{
	obj.className='txt_MouseMove';
}

/* Cambia el color del Textbox cuando pierde el foco */
function ddl_MouseOut(obj)
{
     obj.className='ddl_MouseOut';
}

/* Cambia el color del Textbox cuando toma el foco */
function ddl_MouseMove(obj)
{
	obj.className='ddl_MouseMove';
}

function txt_Focus(obj)
{
    var fila;
    var columna;
    var nombre = obj.name;
    var cuadro = parseInt(nombre.substring(32,33), 10);
    if (cuadro == 2 && parseInt(nombre.substring(35,36), 10) >= 0 && parseInt(nombre.substring(35,36), 10) < 9)
    {
        fila = nombre.substring(34,36);
        columna = nombre.substring(37,38);
    }
    else
    {
        fila = nombre.substring(34,35);
        columna = nombre.substring(36,37);
    }
    
    var tr = document.getElementById('tr_'+cuadro+'_'+fila);
    td_Click(tr,document.getElementById(MasterPage+'htxtFoco_tr'));
}


function txt_Seccion_V_VI_VII_Focus(obj)
{
    var fila;
    var columna;
    var nombre;
    var cuadro;
    var seccion;
    
    nombre = obj.name;
    cuadro = parseInt(nombre.substring(32,33), 10);
    fila = nombre.substring(34,35);
    columna = nombre.substring(36,37);
    
    if(cuadro==5 || cuadro==6 || cuadro==7)
        seccion=5;
    else
        seccion=6;

    var tr = document.getElementById('tr_'+seccion+'_'+fila);
    td_Click(tr,document.getElementById(MasterPage+'htxtFoco_tr'));
}


function txt_Blur()
{
    var htxt_tr=document.getElementById(MasterPage+'htxtFoco_tr');
    if(htxt_tr.value!='')
        document.getElementById(htxt_tr.value).style.backgroundColor='Transparent';
    htxt_tr.value='';    
}

/* Formatea un número con separador de miles */
function format(input)
{
    if(input.value!='')
        input.value = parseFloat(input.value);

    var num = input.value.replace(/\./g,'');
    if(!isNaN(num))
    {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/,'');
        input.value = num;
    }
    else
    {
        alert('Sólo se permiten números');
        input.value = input.value.replace(/[^\d\.]*/g,'');
    }
}

/* Quita los puntos de un texto */
function SacarPuntos(input)
{
    var str = input.value;
    while (str.indexOf('.') != -1)
         str = str.replace('.','');
    input.value=str;
}

/* Devuelve el objeto especificado */
function getCtrl(ctrl)
{
    return document.getElementById(MasterPage+ctrl);
}

function DoScroll()
{
    var _gridView = document.getElementById("GridViewDiv");
    var _header = document.getElementById("HeaderDiv");
    _header.scrollLeft = _gridView.scrollLeft;
}

//Permite ingresar sólo números enteros.
function SoloNumeros()
{
   if ((event.keyCode < 48 || event.keyCode > 57))
    event.returnValue = false; 
}

//Permite ingresar números decimales. (Caracter separador: (.))
function SoloDecimales()
{
   if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode != 46) 
    event.returnValue = false;
}

//permite solo decimales y entrega foco al objeto siguiente.
function soloDecimalesConFoco(obj)
{
   if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode != 46 && event.keyCode != 13) 
   {    event.returnValue = false;  }   
    else if (event.keyCode == 13)
    {   
        document.getElementById(obj).focus();
        event.keyCode = 0 ; 
    }    
}

function ValidaRolPorModulo9(rol, dv_rol)
{
   var ro = 0.0;
   var ro1 = 0.0;
   var m = 0;
   var s = 0;
   var dig = 0;

  ro = parseFloat(rol.value);
   ro1 = parseFloat(rol.value);
   m = 1;
   s = 0;
   while(ro > 0)
   {
      m = m + 1;
      s = s + ((ro % 10) * m);
      ro = parseInt(ro / 10);
      
      if(m==7)
       m=1;      
   }

  dig = s % 9

   if(dig == dv_rol.value)
    {
     return true;
    }
   else
    {
     var dig_correcto= 'Digito Verificador Incorrecto, debe ser ' + dig;
     Msgbox(dig_correcto,null,1);
     //alert(dig_correcto);
     //dv_rol.value ="";
     return false;
    }      
}

//Valida el dígito verificador del rut.
function ValidaRut(R,DV){
	var M = 0, S = 0;
	var T = R.value;
	var D = DV.value;
	//document.write (T + " - " + D);
	for(;T;T=Math.floor(T/10))
		S = (S+T%10*(9-M++%6))%11;
		S?S-1:'k';	
		if(S==10)
		S='k';
	//document.write ("S es: " + S);
	if (S != D)
	{
		alert("Dígito verificador no válido, es: " + S);
		//DV.focus();
		return false;
	}
	return true;
}

//Chequea que el campo no esté vacío.
function ChequeaCampoVacio(p_campo)
{
  if (p_campo.value.length == 0) 
  {
  alert(p_campo.tag + " no puede estar vacío");
  limpia_campo(p_campo);		
  p_campo.focus();
  return false;
  }
  
   if (p_campo.value.length > 0) 
   {
   for (var i = 0 ;i < p_campo.value.length; i++)
     { 
	 if (p_campo.value.charAt(i) !=' ' && p_campo.value.charAt(i) !='\t')	 
	   {
	   return true;
       }
     } 
        alert("El Campo " + p_campo.tag + " no puede estar vacío");
        limpia_campo(p_campo);		
		p_campo.focus();
		return false;
  }
}

//Verifica una dirección de correo.
function ValidaEmail(p_email)
{
    if (p_email.value != ""){
	    if(p_email.value.indexOf('@',0) == -1) 	{
		    alert("El Email Debe Contener el Signo @");
		    p_email.focus();
		    return false;  	}

	    if(p_email.value.indexOf('.',0) == -1) 	{
		    alert("El Email Debe Contener al Menos un Punto");
		    p_email.focus();
		    return false;  	}

	    v_signo = 0
    		
	    for (i = 0; i <  p_email.value.length; i++) 	{
		    if (p_email.value.charAt(i) == '@') 	{
			    v_signo  = v_signo + 1
			    if ((i < 1) || (i == p_email.value.length) || (i == p_email.value.length - 1) || (i == p_email.value.length - 2)) 	{
				    alert("El Signo @  no puede estar en esa Posición");
  				    p_email.focus();
  				    return false;  	}
		    }

		    if (((i == 0) || (i == p_email.value.length - 1)) && (p_email.value.charAt(i) == '.')) {
			    alert("El Punto no puede estar en esa Posición");
  			    p_email.focus();
  			    return false;  
		    }

		    if (v_signo > 1)
		    {
			    alert("El Signo @ solo puede estar una vez en el Email");
  			    p_email.focus();
  			    return false;  
		    }
	    }
    }
    return true;
}

//Reemplaza la función de la tecla TAB por ENTER.
function PresionaEnter()
{
	if (event.keyCode==13)
	{
		event.keyCode = 9;
		return false;
	}
	return true;
}

//Funciones de Validación sobre evento Onkeypress()...
//Permite ingresar solo letras.
function SoloLetras()
{
   if ((event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 97 || event.keyCode > 122) && (event.keyCode > 32))
    event.returnValue = false;
}

 
//Permite ingresar un texto alfanumérico.
function Alfanumerico()
{
   if ((event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 97 || event.keyCode > 122) && (event.keyCode > 32) && (event.keyCode < 48 || event.keyCode > 57))
    event.returnValue = false;
}

//Chequea si un radiobutton está seleccionado.
function ChequeaBotonRadio(p_objeto)
{
v_tl_check = 0 
for (var i = 0; i < p_objeto.length; i++)
  {
  if (p_objeto[i].checked)
    { 
	v_tl_check = v_tl_check + 1
	}
  }
  if (v_tl_check == 0)
  {
	alert("Seleccione algún tipo de Tabulado")
	return false;	
  }
return true;
}

//Formatea una expresion con los numeros decimales que se le indiquen
function FormatNumber(Expression, NumDigitsAfterDecimal)
{

        var iNumDecimals = NumDigitsAfterDecimal;
        var dbInVal = Expression;
        var bNegative = false;
        var iInVal = 0;
        var strInVal
        var strWhole = "", strDec = "";
        var strTemp = "", strOut = "";
        var iLen = 0;

        if (dbInVal < 0)
        {
                bNegative = true;
                dbInVal *= -1;
        }

        dbInVal = dbInVal * Math.pow(10, iNumDecimals)
        iInVal = parseInt(dbInVal);
        if ((dbInVal - iInVal) >= .5)
        {
                iInVal++;
        }
        strInVal = iInVal + "";
        strWhole = strInVal.substring(0, (strInVal.length - iNumDecimals));
        strDec = strInVal.substring((strInVal.length - iNumDecimals), strInVal.length);
        while (strDec.length < iNumDecimals)
        {
                strDec = "0" + strDec;
        }
        iLen = strWhole.length;
        if (iLen >= 3)
        {
                while (iLen > 0)
                {
                        strTemp = strWhole.substring(iLen - 3, iLen);
                        if (strTemp.length == 3)
                        {
                                strOut = "" + strTemp + strOut;
                                iLen -= 3;
                        }
                        else
                        {
                                strOut = strTemp + strOut;
                                iLen = 0;
                        }
                }
                if (strOut.substring(0, 1) == ".")
                {
                        strWhole = strOut.substring(1, strOut.length);
                }
                else
                {
                        strWhole = strOut;
                }
        }
        if (bNegative)
        {
                return "-" + strWhole + "." + strDec;
        }
        else
        {
                return strWhole + "0." + strDec;
        }
}

//Abre un ventana popup con la dirección indicada en el parámetro 'url'
function AbrirPopUp(url)
{
 window.open(url,"miventana","width=1000,height=600,menubar=no, scrollbars=yes, dependent=yes, resizable=yes")
}

//Quita cualquier caracter que no sea número cuando se intenta pegar un texto dentro de un control
function onPaste(event,obj)
{ 
    var pasteData=window.clipboardData.getData("Text");
    obj.value=pasteData.replace(/\D/g,'');
    return false;
}

//Centra una ventana de acuerdo a las dimensiones de la pantalla
function CenterWindow(d)
{
    var dimension = getWindow();
    var div = document.getElementById(d);
    
    width = div.offsetWidth;
    height = div.offsetHeight;
        
    div.style.top = (dimension[5]-height)/2 - 100;
    div.style.left = (dimension[4]-width)/2;       
}

//Obtiene datos de la pantalla
function getWindow(){
    var widthViewport,heightViewport,xScroll,yScroll,widthTotal,heightTotal;
    if (typeof window.innerWidth != 'undefined'){
        widthViewport= window.innerWidth;
        heightViewport= window.innerHeight;
    }else if(typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth !='undefined' && document.documentElement.clientWidth != 0){
        widthViewport=document.documentElement.clientWidth;
        heightViewport=document.documentElement.clientHeight;
    }else{
        widthViewport= document.getElementsByTagName('body')[0].clientWidth;
        heightViewport=document.getElementsByTagName('body')[0].clientHeight;
    }
    xScroll=self.pageXOffset || (document.documentElement.scrollLeft+document.body.scrollLeft);
    yScroll=self.pageYOffset || (document.documentElement.scrollTop+document.body.scrollTop);
    widthTotal=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth,widthViewport);
    heightTotal=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight,heightViewport);
    return [widthViewport,heightViewport,xScroll,yScroll,widthTotal,heightTotal];
}


function SoloEnter(obj)
{
   if (event.keyCode != 13){
    event.returnValue = false;  }
    else if (event.keyCode == 13)
    {   
        document.getElementById(obj).focus();
        event.keyCode = 0 ; 
    }    
}

//Reemplaza la función de la tecla TAB por ENTER.
function pasafoco(obj)
{  
   if (event.keyCode==13)
	{
		obj.focus()
		return false;
	}
	return true;
}

//No acepta ENTER.
function noEnter(obj)
{  
   if (event.keyCode==13)
	{
		return false;
	}
	return true;
}

function AbrirPopUp(url)
{
 window.open(url,"miventana","width=1000,height=600,menubar=no, scrollbars=yes, dependent=yes, resizable=yes")
}