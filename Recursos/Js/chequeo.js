//-------------------------------//
//       Archivo JScript         //
//-------------------------------//

//Valida si los campos de rol y dv rol se encuentran vacios y si corresponde el digito verificador del rol
function ChekeaRol(rol,dvrol)
{
    if (ChequeaCampoVacio(rol) && ChequeaCampoVacio(dvrol) && Valida_Rol(rol,dvrol))
    {
        return true;
    } 
    else
    {
        return false;
    }  
}


//Valida Campos propios de empresa en directorio
function ValidarEmpresa()
{
    if (ChequeaCampoVacio(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_empresa_Txt_rutEmp')) && 
        ChequeaCampoVacio(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_empresa_Txt_dvRutEmp')) && 
        ValidaRut(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_empresa_Txt_rutEmp'),document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_empresa_Txt_dvRutEmp')) &&
        chequea_lista(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_empresa_Ddl_regionEmp')) && 
        chequea_lista(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_empresa_Ddl_provinciaEmp')) && 
        chequea_lista(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_empresa_Ddl_comunaEmp')) &&
        ChequeaCampoVacio(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_empresa_Txt_representanteLegalEmp')) &&
        ChequeaCampoVacio(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_empresa_Txt_razonSocialEmp')) && 
        ChequeaCampoVacio(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_empresa_Txt_calleEmp')) &&
        chequea_lista(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_empresa_Ddl_orgJuridicaEmp')) &&
        chequea_lista(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_empresa_Ddl_formaPropiedadEmp')) &&
        chequea_lista(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_empresa_Ddl_actEcoPri'))
        )

        
    {
            return true;
    } 
    else
    {
            return false;
    } 
}

//Valida Campos propios de establecimiento en directorio
function ValidarEstablecimiento()
{
    if (
        ChequeaCampoVacio(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_establecimiento_Txt_rol')) && 
        ChequeaCampoVacio(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_establecimiento_Txt_dvRol')) && 
        Valida_Rol(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_establecimiento_Txt_rol'),document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_establecimiento_Txt_dvRol')) &&
        chequea_lista(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_establecimiento_Ddl_regionEst')) && 
        chequea_lista(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_establecimiento_Ddl_provinciaEst')) && 
        chequea_lista(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_establecimiento_Ddl_comunaEst')) &&
        ChequeaCampoVacio(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_establecimiento_Txt_nombreEstablecimiento')) &&
        ChequeaCampoVacio(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_establecimiento_Txt_calleEst')) &&
        /*chequea_lista(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_establecimiento_Ddl_actEco'))*/
        )
    {
   
           return true;
    }
    else
    {
     
           return false;
    }
}

//Valida Campos propios de informante en directorio
function ValidarInformante()
{
    
    if (
        ChequeaCampoVacio(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_informante_Txt_nombreInf')) && 
        ChequeaCampoVacio(document.getElementById('ctl00_ContentPlaceHolder1_Tcn_directorio_Tpn_informante_Txt_cargoInf'))
       )
    {
   
           return true;
    }
    else
    {
     
           return false;
    }
}

function FormularioDirectorio(tipo)
{
  
     if (tipo == 0) {
        if (!ValidarEmpresa()) {
            return false; }
        else 
        {
            $find('ctl00_ContentPlaceHolder1_Tcn_directorio').set_activeTabIndex(1);
            if (!ValidarEstablecimiento()) {
                return false; }
            else 
            {
                $find('ctl00_ContentPlaceHolder1_Tcn_directorio').set_activeTabIndex(2);
                if (!ValidarInformante()) {
                    return false;}
                else {
                    $find('ctl00_ContentPlaceHolder1_Tcn_directorio').set_activeTabIndex(0);
                    return true;}
            }
        }
    }
    
    
       if (tipo == 1) {
       
        if (!ValidarEstablecimiento()) {
            return false; }
        else 
        {
           
            $find('ctl00_ContentPlaceHolder1_Tcn_directorio').set_activeTabIndex(2);
            
            if (!ValidarInformante()) {
                return false; }
            else 
            {
                $find('ctl00_ContentPlaceHolder1_Tcn_directorio').set_activeTabIndex(0);
                
                if (!ValidarEmpresa()) {
                    return false;}
                else {
                    $find('ctl00_ContentPlaceHolder1_Tcn_directorio').set_activeTabIndex(1);
                    return true;}
            }
        }
    }
    
    
    if (tipo == 2) {
        if (!ValidarInformante()) {
            return false; }
        else 
        {
            $find('ctl00_ContentPlaceHolder1_Tcn_directorio').set_activeTabIndex(0);
            
            if (!ValidarEmpresa()) {
                return false; }
            else 
            {
                $find('ctl00_ContentPlaceHolder1_Tcn_directorio').set_activeTabIndex(1);
                
                if (!ValidarEstablecimiento()) {
                    return false;}
                else {
                    $find('ctl00_ContentPlaceHolder1_Tcn_directorio').set_activeTabIndex(2);
                    return true;}
            }
        }
    }
    return true;
}