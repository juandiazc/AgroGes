Imports System.data

Partial Class Modulo_Administracion_frmMonitoreo
    Inherits PaginaBase_class

#Region "ATRIBUTOS DEL FORMULARIO"
    Dim CapaEntidadLogErrores As New LOG_ERRORES
    Dim CapaNegocioLogErrores As New LOG_ERRORES_Negocio
    Dim DsLogErrores As New DataSet

    Dim CapaEntidadLogAccesos As New LOG_ACCESOS
    Dim CapaNegocioLogAccesos As New LOG_ACCESOS_Negocio
    Dim DsLogAccesos As New Data.DataSet

    Dim LogTablas As New LOG_TABLAS_class
    Dim DsLogTablas As New Data.DataSet
#End Region

#Region "EVENTOS ASOCIADOS A LA CARGA DE LA PAGINA"

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Validaciones_JavaScript()
        If Not Page.IsPostBack Then
            pnl_log_errores.Visible = False
            pnl_log_accesos.Visible = False
            pnl_log_tablas.Visible = False
            rbt_opciones_monitoreo_SelectedIndexChanged(0, e)
        End If
    End Sub

#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES BUTTON"

#Region "BOTONES ERRORES"
    Public Sub btn_buscar_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_buscar.Click
        If txt_fecha.Text = "" Then
            MensajeBox("Debe ingresar una fecha.", True)
        Else
            grv_log.DataSource = Nothing
            grv_log.DataBind()
            CargarGrillaErrores()
        End If
    End Sub

#End Region

#Region "BOTONES ACCESOS"
    Protected Sub btn_buscar_acceso_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        If txt_fecha_acceso.Text = "" Then
            MensajeBox("Debe ingresar una fecha.", True)
        Else
            grv_log_accesos.DataSource = Nothing
            grv_log_accesos.DataBind()
            CargarGrillaAccesos()
        End If
    End Sub
#End Region

#Region "BOTON TABLAS"
    Protected Sub btn_buscar_tabla_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        If txt_fecha_tabla.Text = "" Then
            MensajeBox("Debe ingresar una fecha.", True)
        Else
            grv_log_tablas.DataSource = Nothing
            grv_log_tablas.DataBind()
            CargarGrillaTablas()
        End If
    End Sub
#End Region

#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES GRIDVIEW"

#Region "GRIDVIEW ERRORES"
    Public Sub CargarGrillaErrores()
        CapaEntidadLogErrores.propiedad_LOGERR_FECHA = txt_fecha.Text
        DsLogErrores = CapaNegocioLogErrores.Listar(CapaEntidadLogErrores)
        If DsLogErrores Is Nothing Or DsLogErrores.Tables(0).Rows.Count = 0 Then
            Me.MensajeBox("No existen errores registrados en la fecha selecionada", True)
        Else
            Session("ERRORES") = DsLogErrores
            grv_log.DataSource = DsLogErrores
            grv_log.DataBind()
        End If
    End Sub

    Protected Sub grv_log_PageIndexChanging(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewPageEventArgs) Handles grv_log.PageIndexChanging
        Try
            grv_log.PageIndex = e.NewPageIndex()
            DsLogErrores = Session("ERRORES")
            grv_log.DataSource = DsLogErrores.Tables(0)
            grv_log.DataBind()
        Catch ex As Exception
        End Try
    End Sub
#End Region

#Region "GRIDVIEW ACCESOS"
    Public Sub CargarGrillaAccesos()
        CapaEntidadLogAccesos.propiedad_LOGACC_FECHA = txt_fecha_acceso.Text
        DsLogAccesos = CapaNegocioLogAccesos.Listar(CapaEntidadLogAccesos)
        If DsLogAccesos Is Nothing Or DsLogAccesos.Tables(0).Rows.Count = 0 Then
            Me.MensajeBox("No existen accesos registrados en la fecha selecionada", True)
        Else
            Session("ACCESOS") = DsLogAccesos
            grv_log_accesos.DataSource = DsLogAccesos
            grv_log_accesos.DataBind()
        End If
    End Sub

    Protected Sub grv_log_accesos_PageIndexChanging(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewPageEventArgs) Handles grv_log_accesos.PageIndexChanging
        Try
            grv_log_accesos.PageIndex = e.NewPageIndex()
            DsLogAccesos = Session("ACCESOS")
            grv_log_accesos.DataSource = DsLogAccesos.Tables(0)
            grv_log_accesos.DataBind()
        Catch ex As Exception
        End Try
    End Sub
#End Region

#Region "GRIDVIEW TABLAS"
    Public Sub CargarGrillaTablas()
        DsLogTablas = LogTablas.Listar_Log_Tablas(drop_tablas.SelectedItem.Text, txt_fecha_tabla.Text)
        If DsLogTablas Is Nothing Or DsLogTablas.Tables(0).Rows.Count = 0 Then
            MensajeBox("No existen transacciones registradas en la fecha selecionada", True)
        Else
            Session("TABLAS") = DsLogTablas
            grv_log_tablas.DataSource = DsLogTablas
            grv_log_tablas.DataBind()
        End If
    End Sub

    Protected Sub grv_log_tablas_DataBound(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewRowEventArgs) Handles grv_log_tablas.RowDataBound
        For Each Celda As TableCell In e.Row.Cells
            If (Celda.Text.Length > 0) Then
                Celda.Text = "<nobr>" + Celda.Text + "</nobr>"
            End If
        Next
    End Sub

    Protected Sub grv_log_tablas_PageIndexChanging(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewPageEventArgs) Handles grv_log_tablas.PageIndexChanging
        Try
            grv_log_tablas.PageIndex = e.NewPageIndex()
            DsLogTablas = Session("TABLAS")
            grv_log_tablas.DataSource = DsLogTablas.Tables(0)
            grv_log_tablas.DataBind()
        Catch ex As Exception
        End Try
    End Sub

#End Region

#End Region

#Region "METODOS DE VALIDACION"
    Sub Validaciones_JavaScript()
        txt_fecha.Attributes.Add("onkeypress", "javascript:SoloEnter('" & btn_buscar.ClientID & "');")
        txt_fecha.Attributes.Add("onfocus", "javascript:this.select(); ")
    End Sub

#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES RADIOBUTONLIST"
    Protected Sub rbt_opciones_monitoreo_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)
        Select Case rbt_opciones_monitoreo.SelectedValue
            Case 0
                pnl_log_errores.Visible = True
                pnl_log_accesos.Visible = False
                pnl_log_tablas.Visible = False
            Case 1
                pnl_log_accesos.Visible = True
                pnl_log_errores.Visible = False
                pnl_log_tablas.Visible = False
            Case 2
                pnl_log_tablas.Visible = True
                pnl_log_accesos.Visible = False
                pnl_log_errores.Visible = False
        End Select
    End Sub
#End Region
    
End Class
