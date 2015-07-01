
Partial Class Modulo_Ingreso_de_Datos_frmDirectorio
    Inherits System.Web.UI.Page
    Dim CapaEntidadRpc As New RPC
    Dim CapaNegocioRpc As New RPC_Negocio
    Dim DsRpc As New Data.DataSet
    Dim DtRpc As New Data.DataTable

    Dim CapaEntidadOrg As New GLO_OrgJuridica
    Dim CapaNegocioOrg As New GLO_OrgJuridica_Negocio
    Dim DsOrg As New Data.DataSet

    Dim CapaEntidadTipoActividad As New GLO_TipoActividadEconomica
    Dim CapaNegocioTipoActividad As New GLO_TipoActividadEconomica_Negocio

    Dim CapaEntidadActividad As New GLO_ActivEconomica
    Dim CapaNegocioActividad As New GLO_ActivEconomica_Negocio
    Dim DsAct As New Data.DataSet

    Dim CapaEntidadForma As New GLO_FormaPropiedad
    Dim CapaNegocioForma As New GLO_FormaPropiedad_Negocio
    Dim DsForma As New Data.DataSet

    Dim CapaEntidadEstado_emp As New GLO_EstadoEmpresa
    Dim CapaNegocioEstado_emp As New GLO_EstadoEmpresa_Negocio
    Dim DsEstado As New Data.DataSet
    Dim CapaEntidadEstado_est As New GLO_EstadoEstablecimiento
    Dim CapaNegocioEstado_est As New GLO_EstadoEstablecimiento_Negocio

    Dim CapaEntidadEstado_jus As New GLO_TipoJustificacion
    Dim CapaNegocioEstado_just As New GLO_TipoJustificacion_Negocio

    Dim CapaEntidadEmpresa As New TBL_Directorio_Empresa
    Dim CapaNegocioEmpresa As New TBL_Directorio_Empresa_Negocio
    Dim DsEmp As New Data.DataSet

    Dim CapaEntidadEstablecimiento As New TBL_Directorio_Establecimiento
    Dim CapaNegocioEstablecimiento As New TBL_Directorio_Establecimiento_Negocio
    Dim DsEst As New Data.DataSet
    Dim DsEst2 As New Data.DataSet
    Dim dt As Data.DataTable

    Dim CapaEntidadInformante As New TBL_Directorio_Informante
    Dim CapaNegocioInformante As New TBL_Directorio_Informante_Negocio
    Dim DsInf As New Data.DataSet

    Dim rutinas As New rutinas
    Dim Ds As New Data.DataSet
    Dim periodo As String
    Dim err As New CONTROL_ERRORES_class
    Dim cierre_mes As New CierreMesGesBLL
    Dim campo_cierre_mes As New CierreMesGesBOL

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If IsPostBack = False Then
            'periodo = MonthName(Session("mes"))
            If Val(Session("mes")) = 0 Then
                Exit Sub
            End If
            'lbl_año.Text = UCase(MonthName(Val(Session("mes")))) + "-" + Session("año")
            'lbl_mes.Text = Session("mes")
            llena_combos()
            txt_rol.Focus()
            valida_campos(pnl_empresa)
            valida_campos(pnl_establecimiento)
            valida_campos(pnl_informante)
        End If
        Response.ExpiresAbsolute = Now
    End Sub

    Sub llena_combos()
        llena_region(drop_region)
        llena_region(drop_region_est)
        llena_region(drop_tramite)
        llena_provincia(drop_provincia, drop_region.Items(drop_region.SelectedIndex).Value)
        llena_provincia(drop_provincia_est, drop_region_est.Items(drop_region_est.SelectedIndex).Value)
        llena_comuna(drop_comuna, drop_provincia.Items(drop_provincia.SelectedIndex).Value)
        llena_comuna(drop_comuna_est, drop_provincia_est.Items(drop_provincia_est.SelectedIndex).Value)
        llena_organizacion()
        llena_tipo_actividad(drop_tipo_actividad)
        llena_actividad(drop_actividad)
        llena_actividad_est(drop_actividad_est)
        llena_forma()
        llena_estado_empresa()
        llena_estado_establecimiento()
        llena_Tipo_faltante_justificada()
    End Sub
    Sub llena_region(ByVal drop As DropDownList)
        ' DsRpc = CapaNegocioRpc.ListarRegion(CapaEntidadRpc)
        DtRpc = CapaNegocioRpc.ListarRegion(CapaEntidadRpc)
        llena_drop(drop, DtRpc)
    End Sub
    Sub llena_provincia(ByVal drop As DropDownList, ByVal region As Integer)
        ' DsRpc = CapaNegocioRpc.ListarProvincia(CapaEntidadRpc, region)
        DtRpc = CapaNegocioRpc.ListarProvincia(CapaEntidadRpc, region)
        llena_drop(drop, DtRpc)
    End Sub
    Sub llena_comuna(ByVal drop As DropDownList, ByVal provincia As Integer)
        ' DsRpc = CapaNegocioRpc.ListarComuna(CapaEntidadRpc, provincia)
        DtRpc = CapaNegocioRpc.ListarComuna(CapaEntidadRpc, provincia)
        llena_drop(drop, DtRpc)
    End Sub
    Sub llena_organizacion()
        Ds = CapaNegocioOrg.Listar(CapaEntidadOrg)
        llena_drop_ds(drop_organizacion, Ds)
    End Sub
    Sub llena_tipo_actividad(ByVal drop As DropDownList)
        Ds = CapaNegocioTipoActividad.Listar(CapaEntidadTipoActividad)
        llena_drop_ds(drop, Ds)
    End Sub
    Sub llena_actividad(ByVal drop As DropDownList)
        CapaEntidadActividad.propiedad_TipoActividadEconomica = drop_tipo_actividad.SelectedValue
        Ds = CapaNegocioActividad.Listar(CapaEntidadActividad)
        llena_drop_ds(drop, Ds)
    End Sub
    Sub llena_actividad_est(ByVal drop As DropDownList)
        CapaEntidadActividad.propiedad_TipoActividadEconomica = drop_tipo_actividad.SelectedValue
        Ds = CapaNegocioActividad.Listar_Est(CapaEntidadActividad)
        llena_drop_ds(drop, Ds)
    End Sub
    Sub llena_forma()
        Ds = CapaNegocioForma.Listar(CapaEntidadForma)
        llena_drop_ds(drop_forma, Ds)
    End Sub
    Sub llena_estado_empresa()
        Ds = CapaNegocioEstado_emp.Listar(CapaEntidadEstado_emp)
        llena_drop_ds(drop_estado, Ds)
    End Sub
    Sub llena_estado_establecimiento()
        Ds = CapaNegocioEstado_est.Listar(CapaEntidadEstado_est)
        llena_drop_ds(drop_estado_est, Ds)
    End Sub
    Sub llena_Tipo_faltante_justificada()
        Ds = CapaNegocioEstado_just.Listar(CapaEntidadEstado_jus)
        llena_drop_ds(drop_faltjust_1, Ds)
    End Sub    
    Protected Sub drop_region_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)
        llena_provincia(drop_provincia, drop_region.Items(drop_region.SelectedIndex).Value)
        llena_comuna(drop_comuna, drop_provincia.Items(drop_provincia.SelectedIndex).Value)
    End Sub
    Protected Sub drop_provincia_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)
        llena_comuna(drop_comuna, drop_provincia.Items(drop_provincia.SelectedIndex).Value)
    End Sub
    Sub llena_drop(ByVal drop As DropDownList, ByVal dt As Data.DataTable)
        drop.DataSource = dt
        drop.DataValueField = dt.Columns(0).ToString
        drop.DataTextField = dt.Columns(1).ToString
        drop.DataBind()
    End Sub
    Sub llena_drop_ds(ByVal drop As DropDownList, ByVal ds As Data.DataSet)
        drop.DataSource = ds
        drop.DataValueField = ds.Tables(0).Columns(0).ToString
        drop.DataTextField = ds.Tables(0).Columns(1).ToString
        drop.DataBind()
    End Sub
    Protected Sub drop_region_est_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)
        llena_provincia(drop_provincia_est, drop_region_est.Items(drop_region_est.SelectedIndex).Value)
        llena_comuna(drop_comuna_est, drop_provincia_est.Items(drop_provincia_est.SelectedIndex).Value)
    End Sub
    Protected Sub drop_provincia_est_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)
        llena_comuna(drop_comuna_est, drop_provincia_est.Items(drop_provincia_est.SelectedIndex).Value)
    End Sub

    Protected Sub Button2_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        Response.Redirect("../Index.aspx")
    End Sub

    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        If rutinas.busca_cierre_mes(Val(Session("año")), Val(Session("mes"))) = 1 Then
            MensajeBox("Debe inicializar el mes", True)
            rutinas.limpia(pnl_empresa)
            rutinas.limpia(pnl_establecimiento)
            Exit Sub
        End If
        graba()
    End Sub
    Sub graba()

        If graba_empresa() = False Then
            MensajeBox("Error al Grabar la Empresa", True)
            Exit Sub
        End If
        If graba_establecimiento() = False Then
            MensajeBox("Error al Grabar la Establecimiento", True)
            Exit Sub
        End If
        If graba_informante() = False Then
            MensajeBox("Error al Grabar el Informante", True)
            Exit Sub
        End If
        MensajeBox("Registro Grabado con exito", True)


    End Sub
    Function graba_empresa() As Boolean
        Try
            graba_empresa = False
            CapaEntidadEmpresa.propiedad_Año = Session("año")
            CapaEntidadEmpresa.propiedad_CIIU_R3 = Val(txt_ciiu.Text)
            CapaEntidadEmpresa.propiedad_Ciudad = txt_ciudad.Text
            CapaEntidadEmpresa.propiedad_CodActivEconomica = drop_actividad.SelectedValue
            CapaEntidadEmpresa.propiedad_Comuna = drop_comuna.SelectedValue
            CapaEntidadEmpresa.propiedad_Direccion = txt_direccion.Text
            CapaEntidadEmpresa.propiedad_DireccionWeb = txt_web.Text
            CapaEntidadEmpresa.propiedad_DvRut = txt_dv_empresa.Text
            CapaEntidadEmpresa.propiedad_DvRut_RLegal = txt_dv_representante.Text
            CapaEntidadEmpresa.propiedad_Email = txt_mail.Text
            CapaEntidadEmpresa.propiedad_EstadoEmpresa = drop_estado.SelectedValue
            CapaEntidadEmpresa.propiedad_Fax = txt_fax.Text
            CapaEntidadEmpresa.propiedad_Fono = txt_fono.Text
            CapaEntidadEmpresa.propiedad_FonoCelular = txt_celular.Text
            CapaEntidadEmpresa.propiedad_FormaPropiedad = drop_forma.SelectedValue
            CapaEntidadEmpresa.propiedad_Mes = Session("mes")
            CapaEntidadEmpresa.propiedad_NombreFantasia = txt_nombre.Text
            CapaEntidadEmpresa.propiedad_OrganizacionJuridica = drop_organizacion.SelectedValue
            CapaEntidadEmpresa.propiedad_Provincia = drop_provincia.SelectedValue
            CapaEntidadEmpresa.propiedad_RazonSocial = txt_razon_social.Text
            CapaEntidadEmpresa.propiedad_Region = drop_region.SelectedValue
            CapaEntidadEmpresa.propiedad_RepresentanteLegal = txt_representante.Text
            CapaEntidadEmpresa.propiedad_Rut = txt_rut_empresa.Text
            CapaEntidadEmpresa.propiedad_Rut_RLegal = txt_rut_representante.Text
            CapaEntidadEmpresa.propiedad_TipoActivEconomica = drop_tipo_actividad.SelectedValue

            CapaNegocioEmpresa.Grabar(CapaEntidadEmpresa)

            graba_empresa = True
        Catch ex As Exception
            graba_empresa = False

        End Try
    End Function

    Function graba_establecimiento() As Boolean
        Try
            graba_establecimiento = False

            CapaEntidadEstablecimiento.propiedad_Año = Session("año")
            CapaEntidadEstablecimiento.propiedad_Ciudad = txt_ciudad.Text
            CapaEntidadEstablecimiento.propiedad_CodActivEconomica = drop_actividad.SelectedValue
            CapaEntidadEstablecimiento.propiedad_Comuna = drop_comuna_est.SelectedValue
            CapaEntidadEstablecimiento.propiedad_DireccionEstablecimiento = txt_direccion_est.Text
            CapaEntidadEstablecimiento.propiedad_DireccionWeb = txt_web_est.Text
            CapaEntidadEstablecimiento.propiedad_DvRol = txt_dvrol.Text
            CapaEntidadEstablecimiento.propiedad_Email = txt_mail_est.Text
            CapaEntidadEstablecimiento.propiedad_EstadoEstablecimiento = drop_estado_est.SelectedValue
            CapaEntidadEstablecimiento.propiedad_TipoFaltanteJustificada = drop_faltjust_1.SelectedValue
            CapaEntidadEstablecimiento.propiedad_Fax = txt_fax_est.Text
            CapaEntidadEstablecimiento.propiedad_Fono = txt_fono_est.Text
            CapaEntidadEstablecimiento.propiedad_Fono_Celular = txt_celular_est.Text
            CapaEntidadEstablecimiento.propiedad_Mes = Session("mes")
            CapaEntidadEstablecimiento.propiedad_NombreEstablecimiento = txt_nombre_est.Text
            CapaEntidadEstablecimiento.propiedad_Provincia = drop_provincia_est.SelectedValue
            CapaEntidadEstablecimiento.propiedad_Region = drop_region_est.SelectedValue
            CapaEntidadEstablecimiento.propiedad_Rol = txt_rol.Text
            CapaEntidadEstablecimiento.propiedad_DvRol = txt_dvrol.Text
            CapaEntidadEstablecimiento.propiedad_Rut_Empresa = txt_rut_empresa.Text
            CapaEntidadEstablecimiento.propiedad_Seleccion_Muestra = drop_muestra.SelectedValue
            CapaEntidadEstablecimiento.propiedad_TramiteInterno = drop_tramite.SelectedValue
            CapaEntidadEstablecimiento.propiedad_CIIU_R3 = Val(txt_ciiu_est.Text)
            CapaNegocioEstablecimiento.Grabar(CapaEntidadEstablecimiento)

            graba_establecimiento = True


        Catch ex As Exception
            graba_establecimiento = False

        End Try

    End Function
    Function graba_informante() As Boolean
        Try
            graba_informante = False

            CapaEntidadInformante.propiedad_Año = Session("año")
            CapaEntidadInformante.propiedad_CargoInformante = txt_cargo_inf.Text
            CapaEntidadInformante.propiedad_EmailInformante = txt_mail_inf.Text
            CapaEntidadInformante.propiedad_FaxInformante = txt_fax_inf.Text
            CapaEntidadInformante.propiedad_FonoInformante = txt_fono_inf.Text
            CapaEntidadInformante.propiedad_Mes = Session("mes")
            CapaEntidadInformante.propiedad_NomInformante = txt_nombre_inf.Text
            CapaEntidadInformante.propiedad_Observacion = txt_observacion.Text
            CapaEntidadInformante.propiedad_Rol = txt_rol.Text

            CapaNegocioInformante.Grabar(CapaEntidadInformante)
            graba_informante = True


        Catch ex As Exception
            graba_informante = False

        End Try
    End Function

    Sub trae_empresa()
        If txt_rut_empresa.Text = "" Then Exit Sub
        CapaEntidadEmpresa.propiedad_Año = Session("año")
        CapaEntidadEmpresa.propiedad_Mes = Session("mes")
        CapaEntidadEmpresa.propiedad_Rut = txt_rut_empresa.Text
        DsEmp = CapaNegocioEmpresa.Listar(CapaEntidadEmpresa)

        If DsEmp.Tables(0).Rows.Count > 0 Then
            txt_dv_empresa.Text = DsEmp.Tables(0).Rows(0)("DvRut").ToString
            txt_razon_social.Text = DsEmp.Tables(0).Rows(0)("RazonSocial").ToString
            txt_nombre.Text = DsEmp.Tables(0).Rows(0)("NombreFantasia").ToString
            txt_representante.Text = DsEmp.Tables(0).Rows(0)("RepresentanteLegal").ToString
            txt_rut_representante.Text = DsEmp.Tables(0).Rows(0)("Rut_RLegal").ToString
            txt_dv_representante.Text = DsEmp.Tables(0).Rows(0)("DvRut_RLegal").ToString
            txt_direccion.Text = DsEmp.Tables(0).Rows(0)("Direccion").ToString
            txt_ciudad.Text = DsEmp.Tables(0).Rows(0)("Ciudad").ToString
            drop_region.SelectedValue = DsEmp.Tables(0).Rows(0)("Region").ToString
            llena_provincia(drop_provincia, drop_region.Items(drop_region.SelectedIndex).Value)
            drop_provincia.SelectedValue = DsEmp.Tables(0).Rows(0)("Provincia").ToString
            llena_comuna(drop_comuna, drop_provincia.Items(drop_provincia.SelectedIndex).Value)
            drop_comuna.SelectedValue = DsEmp.Tables(0).Rows(0)("Comuna").ToString
            txt_fono.Text = DsEmp.Tables(0).Rows(0)("Fono").ToString
            txt_celular.Text = DsEmp.Tables(0).Rows(0)("FonoCelular").ToString
            txt_fax.Text = DsEmp.Tables(0).Rows(0)("Fax").ToString
            txt_mail.Text = DsEmp.Tables(0).Rows(0)("Email").ToString
            txt_web.Text = DsEmp.Tables(0).Rows(0)("DireccionWeb").ToString
            drop_organizacion.SelectedValue = Val(DsEmp.Tables(0).Rows(0)("OrganizacionJuridica").ToString)
            drop_forma.SelectedValue = Val(DsEmp.Tables(0).Rows(0)("FormaPropiedad").ToString)
            drop_tipo_actividad.SelectedValue = DsEmp.Tables(0).Rows(0)("TipoActivEconomica").ToString
            llena_actividad(drop_actividad)
            drop_actividad.SelectedValue = Val(DsEmp.Tables(0).Rows(0)("CodActivEconomica").ToString)
            drop_estado.SelectedValue = DsEmp.Tables(0).Rows(0)("EstadoEmpresa").ToString
            txt_ciiu.Text = DsEmp.Tables(0).Rows(0)("CIIU_R3").ToString
            'drop_estado_est.SelectedValue = DsEst.Tables(0).Rows(0)("EstadoEstablecimiento").ToString
        End If


    End Sub
    Sub trae_establecimiento()
        If txt_rol.Text = "" Then Exit Sub
        CapaEntidadEstablecimiento.propiedad_Año = Session("año")
        CapaEntidadEstablecimiento.propiedad_Mes = Session("mes")
        CapaEntidadEstablecimiento.propiedad_Rol = txt_rol.Text
        DsEst = CapaNegocioEstablecimiento.Listar(CapaEntidadEstablecimiento)
        ' DsEst2 = CapaNegocioEstablecimiento.Listar(CapaEntidadEstablecimiento)

        'Dim CapaEntidadEstado_jus As New GLO_TipoJustificacion
        'Dim CapaNegocioEstado_just As New GLO_TipoJustificacion_Negocio

        If DsEst.Tables(0).Rows.Count Then
            txt_dvrol.Text = DsEst.Tables(0).Rows(0)("DvRol").ToString
            txt_nombre_est.Text = DsEst.Tables(0).Rows(0)("NombreEstablecimiento").ToString
            txt_direccion_est.Text = DsEst.Tables(0).Rows(0)("DireccionEstablecimiento").ToString
            drop_region_est.SelectedValue = DsEst.Tables(0).Rows(0)("Region").ToString
            llena_provincia(drop_provincia_est, drop_region_est.Items(drop_region_est.SelectedIndex).Value)
            drop_estado_est.SelectedValue = DsEst.Tables(0).Rows(0)("EstadoEstablecimiento").ToString
            drop_provincia_est.SelectedValue = DsEst.Tables(0).Rows(0)("Provincia").ToString
            llena_comuna(drop_comuna_est, drop_provincia_est.Items(drop_provincia_est.SelectedIndex).Value)
            drop_comuna_est.SelectedValue = DsEst.Tables(0).Rows(0)("Comuna").ToString
            txt_ciudad_est.Text = DsEst.Tables(0).Rows(0)("Ciudad").ToString
            txt_fono_est.Text = DsEst.Tables(0).Rows(0)("Fono").ToString
            txt_celular_est.Text = DsEst.Tables(0).Rows(0)("Fono_Celular").ToString
            txt_fax_est.Text = DsEst.Tables(0).Rows(0)("Fax").ToString
            txt_web_est.Text = DsEst.Tables(0).Rows(0)("DireccionWeb").ToString
            txt_mail_est.Text = DsEst.Tables(0).Rows(0)("Email").ToString
            drop_estado_est.SelectedValue = DsEst.Tables(0).Rows(0)("EstadoEstablecimiento").ToString
            drop_faltjust_1.SelectedValue = DsEst.Tables(0).Rows(0)("TipoJustFalt").ToString
            ' drop_muestra.SelectedValue = Val(DsEst.Tables(0).Rows(0)("Seleccion_Muestra").ToString)

            drop_tramite.SelectedValue = Val(DsEst.Tables(0).Rows(0)("TramiteInterno").ToString)
            txt_ciiu_est.Text = DsEst.Tables(0).Rows(0)("CIIU_R3").ToString
            txt_rut_empresa.Text = DsEst.Tables(0).Rows(0)("Rut_Empresa").ToString
            drop_actividad_est.SelectedValue = Val(DsEst.Tables(0).Rows(0)("CodActivEconomica").ToString)
        End If

    End Sub
    Sub trae_informante()
        CapaEntidadInformante.propiedad_Año = Session("año")
        CapaEntidadInformante.propiedad_Mes = Session("mes")
        CapaEntidadInformante.propiedad_Rol = txt_rol.Text
        DsInf = CapaNegocioInformante.Listar(CapaEntidadInformante)

        If DsInf.Tables(0).Rows.Count Then
            txt_nombre_inf.Text = DsInf.Tables(0).Rows(0)("NomInformante").ToString
            txt_cargo_inf.Text = DsInf.Tables(0).Rows(0)("CargoInformante").ToString
            txt_fono_inf.Text = DsInf.Tables(0).Rows(0)("FonoInformante").ToString
            txt_fax_inf.Text = DsInf.Tables(0).Rows(0)("FaxInformante").ToString
            txt_mail_inf.Text = DsInf.Tables(0).Rows(0)("EmailInformante").ToString
            txt_observacion.Text = DsInf.Tables(0).Rows(0)("Observacion").ToString
        End If
    End Sub
    Protected Sub btn_trae_est_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        If rutinas.busca_cierre_mes(Val(Session("año")), Val(Session("mes"))) = 1 Then
            MensajeBox("Debe inicializar el mes", True)
            rutinas.limpia(pnl_empresa)
            rutinas.limpia(pnl_establecimiento)
            Exit Sub
        End If
        trae_establecimiento()
        trae_informante()
        trae_empresa()
    End Sub
    Protected Sub drop_tipo_actividad_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)
        llena_actividad(drop_actividad)
        llena_actividad(drop_actividad_est)
    End Sub
    Sub valida_campos(ByVal pnl As Panel)
        Dim x As String
        Dim ElControl As New Control
        Dim c As TextBox
        Dim d As DropDownList
        For Each ElControl In pnl.Controls
            x = ElControl.ID
            If (TypeOf ElControl Is TextBox) Then
                c = ElControl
                c.Attributes.Add("onkeydown", "javascript:PresionaEnter();")
            End If
            If (TypeOf ElControl Is DropDownList) Then
                d = ElControl
                d.Attributes.Add("onkeydown", "javascript:PresionaEnter();")
            End If
        Next
        txt_rol.Attributes.Add("onkeypress", "javascript:solonumeros();")
        txt_rut_empresa.Attributes.Add("onkeypress", "javascript:solonumeros();")
        txt_ciiu_est.Attributes.Add("onkeypress", "javascript:solonumeros();")
        Me.txt_dvrol.Attributes.Add("onkeydown", "javascript:if(event.keyCode==13) if (Valida_Rol(" + Me.txt_rol.ClientID + ".value," + Me.txt_dvrol.ClientID + ".value)==true){" + Me.txt_rut_empresa.ClientID + ".focus();return false;} else {return false;} ;")
        Me.txt_dv_empresa.Attributes.Add("onkeydown", "javascript:if(event.keyCode==13) if (Valida_rut(" + Me.txt_rut_empresa.ClientID + ".value," + Me.txt_dv_empresa.ClientID + ".value)==true){" + Me.txt_razon_social.ClientID + ".focus();return false;} else {return false;} ;")
    End Sub
    Public Sub MensajeBox(ByVal msg As String, ByVal tipo As Boolean)
        Dim myScript As String = "alert('" & msg & "');"
        If tipo Then
            EjecutarScriptConAjax(myScript)
        Else
            EjecutarScriptSinAjax(myScript)
        End If
    End Sub

    Protected Sub EjecutarScriptConAjax(ByVal myscript As String)
        ScriptManager.RegisterStartupScript(Page, Page.GetType(), "Script", myscript, True)
    End Sub

    Protected Sub EjecutarScriptSinAjax(ByVal myscript As String)
        Dim cs As ClientScriptManager = Page.ClientScript
        cs.RegisterClientScriptBlock(Me.GetType(), "Mensaje", myscript, True)
    End Sub

    Protected Sub MensajeConfirmacion(ByVal mensaje As String, Optional ByVal PaginaRedireccion As String = "")
        Dim lsScript As String
        If PaginaRedireccion = "" Then
            lsScript = "if(confirm('" & mensaje & "'))"
            lsScript += "alert('mensaje enviado');"
        Else
            lsScript = "if(confirm('" & mensaje & "'))"
            lsScript += "{window.location.href = '" & PaginaRedireccion & "';}"
        End If
        EjecutarScriptConAjax(lsScript)
    End Sub


    Protected Sub btn_limpiar_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_limpiar.Click
        rutinas.limpia(pnl_empresa)
        rutinas.limpia(pnl_establecimiento)
    End Sub

    Protected Sub btn_agrega_rol_Click(ByVal sender As Object, ByVal e As System.EventArgs)

        If Val(txt_rol.Text) = 0 Then
            MensajeBox("Debe Ingresar un Rol", True)
            Exit Sub
        End If
        Dim agrega_rol As New PA_AgregaRolAlLevantamiento_Negocio
        Dim campos_agrega As New PA_AgregaRolAlLevantamiento
        Dim valor As Integer
        campos_agrega.propiedad_año = Session("año")
        campos_agrega.propiedad_mes = Session("mes")
        campos_agrega.propiedad_usuario = Session("usuario")
        campos_agrega.propiedad_rol = txt_rol.Text
        agrega_rol.PA_AgregaRolAlLevantamiento(campos_agrega)
        If valor = 1 Then
            MensajeBox("Rol ya se levantó para el período", True)
        End If
        If valor = 2 Then
            MensajeBox("No se puede levantar porque no está activa", True)
        End If
        If valor = 3 Then
            MensajeBox("Problemas al insertar registro en GES_EstadoEncuesta", True)
        End If
        If valor = 4 Then
            MensajeBox("Problemas al insertar registro en GES_AsignacionCarga", True)
        End If
        If valor = 5 Then
            MensajeBox("Problemas al insertar registro en GES_CoberturaRegional", True)
        End If
        If valor = 9 Then
            MensajeBox("Rol se levantó exitosamente", True)
        End If

    End Sub

    Protected Sub btn_trae_emp_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        If rutinas.busca_cierre_mes(Val(Session("año")), Val(Session("mes"))) = 1 Then
            MensajeBox("Debe inicializar el mes", True)
            rutinas.limpia(pnl_empresa)
            rutinas.limpia(pnl_establecimiento)
            Exit Sub
        End If
        If txt_rut_empresa.Text <> "" Then
            trae_empresa()
        End If
    End Sub



End Class
