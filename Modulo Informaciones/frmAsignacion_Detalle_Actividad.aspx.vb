Imports System.IO
Imports System.Data
Imports System.Data.SqlClient
Partial Class Modulo_Asignacion_Detalle_Actividad
    Inherits PaginaBase_class
    Dim CN As New SqlClient.SqlConnection("Server=TAMARUGO;database=BASES_AGROPECUARIAS_T;uid=usuarioagropecuarias;pwd=usuarioagropecuarias")
#Region "ATRIBUTOS DEL FORMULARIO"
    Dim CapaEntidadGANTT As New GANTT
    Dim CapaNegocioGANTT As New GANTT_Negocio
    Dim DsGANTTs As New Data.DataSet
    Dim DsGANTTs2 As New Data.DataSet
    Dim CapaEntidadLogErrores As New LOG_ERRORES
    Dim CapaNegocioLogErrores As New LOG_ERRORES_Negocio

    Dim err As New CONTROL_ERRORES_class

    Dim Ejecucion As Integer = 0
#End Region

#Region "EVENTOS ASOCIADOS A LA CARGA DE LA PAGINA"

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            Lbl_autor.Text = DevolverUsuarioActivo.propiedad_USU_NOMBRE + " " + DevolverUsuarioActivo.propiedad_USU_APE_PAT
            pnl_mantener_noticias.Visible = True
            '  Listar_GANTT()
            obtener_sistema()


        End If
    End Sub
    Sub obtener_sistema()

        CN.Open()
        Dim CONSULTAENC As String = "SELECT 0 AS Cod, 'Seleccione Sistema' UNION SELECT gs.ID, gs.SISTEMA FROM GES_GANTT_SISTEMAS gs"
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)

        drop_sistema.DataSource = exeNUMMAX
        drop_sistema.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_sistema.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_sistema.DataBind()

        '  txt_nombre.Focus()
        CN.Close()

    End Sub
    Sub obtener_producto()

        CN.Open()
        Dim CONSULTAENC As String = "SELECT 0 AS Cod, 'Seleccione Producto' AS Descrip UNION SELECT gg.ID,gg.PRODUCTO FROM GES_GANTT_PRODUCTO gg"
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)


        drop_producto.DataSource = exeNUMMAX
        drop_producto.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_producto.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_producto.DataBind()

        '  txt_nombre.Focus()
        CN.Close()

    End Sub
    Sub obtener_hito()

        CN.Open()
        Dim CONSULTAENC As String = "  SELECT gg.ID_1,gg.Hito FROM GES_HITOS gg WHERE gg.Sistema=" + drop_sistema.SelectedValue.ToString + " ORDER BY gg.ID_1"
        Dim a1 As String = drop_año.SelectedIndex.ToString
        Dim a2 As String = drop_producto.SelectedIndex.ToString
        Dim a3 As String = drop_sistema.SelectedIndex.ToString
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)


        drop_hito.DataSource = exeNUMMAX
        drop_hito.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_hito.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_hito.DataBind()

        '  txt_nombre.Focus()
        CN.Close()

    End Sub
    Sub obtener_año()

        CN.Open()
        Dim CONSULTAENC As String = "SELECT 0 AS Cod, 'Seleccione Año' AS Año UNION SELECT gg.ID,CAST(gg.AÑO AS varchar(4)) FROM GES_GANTT_AÑOS gg"
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)


        drop_año.DataSource = exeNUMMAX
        drop_año.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_año.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_año.DataBind()

        '  txt_nombre.Focus()
        CN.Close()

    End Sub
    Sub obtener_usuario()

        CN.Open()
        Dim CONSULTAENC As String = "SELECT '0' AS Cod, 'Seleccione Usuario' AS usuario UNION SELECT u.PK_USUARIO,(u.USU_NOMBRE+' '+ u.USU_APE_PAT) AS Nombre FROM USUARIO u WHERE u.PK_TIPO_USUARIO=4"
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)


        drop_usuario.DataSource = exeNUMMAX
        drop_usuario.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_usuario.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_usuario.DataBind()

        '  txt_nombre.Focus()
        CN.Close()

    End Sub
    Sub obtener_actividad()

        CN.Open()
        Dim CONSULTAENC As String = "SELECT 0 AS Cod, 'Seleccione Actividad' AS Actividad UNION SELECT distinct gg.ID,gg.Actividad  FROM GES_GANTT gg,GES_GANTT_ACTIVIDADES gga WHERE NOT gg.Detalle_Actividad='' AND gga.ID_S=gg.Sistema AND gga.ID_Ac=gg.ID AND gga.ID_H=" + drop_hito.SelectedIndex.ToString + " AND gga.ID_P=" + drop_producto.SelectedIndex.ToString + " AND gga.ID_A=" + drop_año.SelectedIndex.ToString + " AND gga.ID_S=" + drop_sistema.SelectedIndex.ToString
        Dim a As String = drop_hito.SelectedIndex.ToString
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)


        drop_actividad.DataSource = exeNUMMAX
        drop_actividad.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_actividad.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_actividad.DataBind()

        '  txt_nombre.Focus()
        CN.Close()

    End Sub
    Sub obtener_detalle_actividad()
        
        CN.Open()
        Dim CONSULTAENC As String = "SELECT A.Cod, A.DetalleActividad FROM(SELECT 0 AS Cod, 'Seleccione Detalle Actividad' AS DetalleActividad UNION SELECT gg.ID,  CASE WHEN gg.Detalle_Actividad=' ' THEN gg.Actividad ELSE gg.Detalle_Actividad END AS Detalle_Actividad FROM GES_GANTT gg,GES_GANTT_ACTIVIDADES gga WHERE gg.Sistema=gga.ID_S AND gg.ID=gga.ID_Ac AND gga.ID_Ac=" + drop_actividad.SelectedValue.ToString + ")AS A ORDER BY A.Cod"
        Dim a As String = drop_actividad.SelectedValue.ToString
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)


        drop_detalle_actividad.DataSource = exeNUMMAX
        drop_detalle_actividad.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_detalle_actividad.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_detalle_actividad.DataBind()

        '  txt_nombre.Focus()
        CN.Close()

    End Sub
#End Region

#Region "METODOS PROPIOS DEL FORMULARIO"

    ''' <summary>
    ''' Instancia a la clase NOTICIA_Negocio con el método Listar() 
    ''' </summary>
    ''' <remarks></remarks>
    ''' <history>Fecha de Creacion: 13/05/2010</history>
    ''' 
    Sub Listar_GANTT()
        Try
            Me.DsGANTTs = CapaNegocioGANTT.ListarDetalle(CapaEntidadGANTT)
            If DsGANTTs.Tables(0).Rows.Count = 0 Then
                lbl_mensaje_noticias.Text = "En este momento no hay actividades para el tipo de sistema seleccionado."
                Grid_GANTT.Visible = False
            Else
                lbl_mensaje_noticias.Text = ""
                Session("GANTTs") = DsGANTTs
                Grid_GANTT.DataSource = DsGANTTs
                Grid_GANTT.DataBind()
                Grid_GANTT.Visible = True
                '  MarcarCheck()
            End If
        Catch ex As Exception
            Me.err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmGANTTs.aspx", ex.Message, "Listar_GANTT()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    Sub MarcarCheck()

    End Sub
#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES BUTTON"

#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES GRIDVIEW"
    Protected Sub Grid_GANTT_PageIndexChanging(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewPageEventArgs) Handles Grid_GANTT.PageIndexChanging
        Try
            Me.Grid_GANTT.PageIndex = e.NewPageIndex()
            DsGANTTs = Session("GANTTs")
            Grid_GANTT.DataSource = DsGANTTs.Tables(0)
            Grid_GANTT.DataBind()
        Catch ex As Exception
        End Try
    End Sub

#End Region

    Protected Sub drop_sistema_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_sistema.SelectedIndexChanged
        If drop_sistema.SelectedIndex = 0 Then
            drop_hito.Visible = False
            drop_año.Visible = False
            drop_producto.Visible = False
            drop_usuario.Visible = False
            Grid_GANTT.Visible = False
        Else
            drop_hito.Visible = True
            drop_año.Visible = True
            drop_producto.Visible = True
            drop_usuario.Visible = True
            obtener_producto()            
            obtener_año()
            obtener_hito()
            obtener_usuario()
            Grid_GANTT.Visible = True
            Listar_GANTT()

        End If
    End Sub

    Protected Sub btn_asignar_actividad_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_asignar_actividad.Click

        CN.Open()
        Dim CONSULTAENC As String

        If drop_sistema.SelectedIndex <> 0 And drop_hito.SelectedIndex <> 0 And drop_año.SelectedIndex <> 0 And drop_actividad.SelectedIndex <> 0 And drop_detalle_actividad.SelectedIndex <> 0 And drop_usuario.SelectedIndex <> 0 And txt_fechai.Text <> "" And txt_fechaf.Text <> "" Then
            CONSULTAENC = "INSERT INTO GES_GANTT_DETALLE_ACTIVIDADES(ID_S,ID_P,ID_A,ID_H,ID_Ac,ID_Ac_Detalle,FechaInicio,FechaTermino,Usuario,EstadoDetalle,Comentarios)SELECT " + drop_sistema.SelectedIndex.ToString + "," + drop_producto.SelectedIndex.ToString + "," + drop_año.SelectedIndex.ToString + "," + drop_hito.SelectedIndex.ToString + "," + drop_actividad.SelectedValue.ToString + "," + drop_detalle_actividad.SelectedValue.ToString + ",'" + txt_fechai.Text + "','" + txt_fechaf.Text + "','" + drop_usuario.SelectedValue.ToString + "','1','" + txt_comentario.Text + "'"
            Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
            Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
            Dim exeNUMMAX As New DataTable()
            preexeNUMMAX.Fill(exeNUMMAX)
            '  txt_nombre.Focus()
            Listar_GANTT()
            MensajeBox("Se ha asignado las actividades seleccionadas", True)
        Else
            MensajeBox("Debe marcar todos los campos", True)
        End If


        CN.Close()
    End Sub
    Protected Sub Grid_GANTT_RowCommand(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewCommandEventArgs) Handles Grid_GANTT.RowCommand
        Select Case e.CommandName
            Case "Eliminar"
                CN.Open()
                Dim fila As GridViewRow
                fila = Grid_GANTT.Rows.Item(e.CommandArgument)

                Dim CONSULTAENC2 As String
                Dim id_año As String = ""
                CONSULTAENC2 = "SELECT a.ID FROM GES_GANTT_AÑOS a WHERE a.AÑO='" + CType(fila.FindControl("lbl_Año"), Label).Text + "'"
                Dim NUMMAXPES2 As New SqlCommand(CONSULTAENC2, CN)
                Dim preexeNUMMAX2 As New SqlDataAdapter(NUMMAXPES2)
                Dim exeNUMMAX2 As New DataTable()
                preexeNUMMAX2.Fill(exeNUMMAX2)
                id_año = exeNUMMAX2.Rows(0).Item(0).ToString()

                'CapaEntidadGANTT.propiedad_ID = CType(fila.FindControl("lbl_ID"), Label).Text

                Dim CONSULTAENC As String
                CONSULTAENC = "DELETE FROM GES_GANTT_DETALLE_ACTIVIDADES WHERE ID_S=" + CType(fila.FindControl("lbl_Sistema"), Label).Text + " AND ID_P=" + CType(fila.FindControl("lbl_Producto"), Label).Text + " AND ID_A=" + id_año + " AND ID_H=" + CType(fila.FindControl("lbl_Hito"), Label).Text + " AND ID_Ac='" + CType(fila.FindControl("lbl_ID_Actividades"), Label).Text + "'"
                Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
                Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
                Dim exeNUMMAX As New DataTable()
                preexeNUMMAX.Fill(exeNUMMAX)
                'txt_nombre.Focus()
                Listar_GANTT()
                MensajeBox("Se ha eliminado actividad", True)
                CN.Close()
        End Select
        Listar_GANTT()
    End Sub
    Protected Sub drop_hito_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_hito.SelectedIndexChanged
        If drop_sistema.SelectedIndex <> 0 And drop_hito.SelectedIndex <> 0 And drop_año.SelectedIndex <> 0 Then
            drop_actividad.Visible = True
            obtener_actividad()
        Else
            drop_actividad.Visible = False
        End If

    End Sub
    Protected Sub drop_año_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_año.SelectedIndexChanged

        If drop_sistema.SelectedIndex <> 0 And drop_hito.SelectedIndex <> 0 And drop_año.SelectedIndex <> 0 Then
            drop_actividad.Visible = True
            obtener_actividad()
        Else
            drop_actividad.Visible = False
        End If
    End Sub
    Protected Sub drop_producto_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_producto.SelectedIndexChanged
        If drop_sistema.SelectedIndex <> 0 And drop_hito.SelectedIndex <> 0 And drop_año.SelectedIndex <> 0 Then
            drop_actividad.Visible = True
            obtener_actividad()
        Else
            drop_actividad.Visible = False
        End If
    End Sub

    Protected Sub drop_actividad_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_actividad.SelectedIndexChanged
        If drop_actividad.SelectedIndex <> 0 Then
            drop_detalle_actividad.Visible = True
            obtener_detalle_actividad()
        Else
            drop_detalle_actividad.Visible = False
        End If
    End Sub

    Protected Sub Button5_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Button5.Click
        CN.Open()
        Dim CONSULTAENC As String
        If drop_sistema.SelectedIndex <> 0 And drop_hito.SelectedIndex <> 0 And drop_año.SelectedIndex <> 0 And drop_actividad.SelectedIndex <> 0 And drop_detalle_actividad.SelectedIndex <> 0 And drop_usuario.SelectedIndex <> 0 And txt_fechai.Text <> "" And txt_fechaf.Text <> "" And txt_comentario.Text <> "" Then

            CONSULTAENC = "UPDATE GES_GANTT_DETALLE_ACTIVIDADES SET EstadoDetalle=0 where ID_S=" + drop_sistema.SelectedIndex.ToString + " AND ID_P=" + drop_producto.SelectedIndex.ToString + " AND ID_A=" + drop_año.SelectedIndex.ToString + " AND ID_H=" + drop_hito.SelectedIndex.ToString + " AND ID_Ac=" + drop_actividad.SelectedValue.ToString + " AND ID_Ac_Detalle='" + drop_detalle_actividad.SelectedValue.ToString + "'"
            Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
            Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
            Dim exeNUMMAX As New DataTable()
            preexeNUMMAX.Fill(exeNUMMAX)
            '  txt_nombre.Focus()
            Listar_GANTT()
            MensajeBox("Se ha cerrado actividad", True)
        Else
            MensajeBox("Debe marcar todos los campos", True)
        End If
        CN.Close()
    End Sub
End Class

