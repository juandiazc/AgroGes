Imports System.IO
Imports System.Data
Imports System.Data.SqlClient
Partial Class Modulo_Informaciones_frmGANTT
    Inherits PaginaBase_class
    Dim CN As New SqlClient.SqlConnection("Server=TAMARUGO;database=BASES_AGROPECUARIAS_T;uid=usuarioagropecuarias;pwd=usuarioagropecuarias")
#Region "ATRIBUTOS DEL FORMULARIO"
    Dim CapaEntidadGANTT As New GANTT
    Dim CapaNegocioGANTT As New GANTT_Negocio
    Dim DsGANTTs As New Data.DataSet

    Dim CapaEntidadLogErrores As New LOG_ERRORES
    Dim CapaNegocioLogErrores As New LOG_ERRORES_Negocio

    Dim err As New CONTROL_ERRORES_class

    Dim Ejecucion As Integer = 0
#End Region

#Region "EVENTOS ASOCIADOS A LA CARGA DE LA PAGINA"

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then            
            Lbl_autor.Text = DevolverUsuarioActivo.propiedad_USU_NOMBRE + " " + DevolverUsuarioActivo.propiedad_USU_APE_PAT
            obtener_sistema()
            pnl_mantener_noticias.Visible = True

            Listar_GANTT()
            If DevolverUsuarioActivo.propiedad_PK_TIPO_USUARIO = 1 Then
                btn_mantener_noticia.Visible = True
            End If
        End If
    End Sub
    Public Sub prcCargarComboGridView(ByVal cboCombo As DropDownList)
        CN.Open()
        Dim a As String = CInt(Session("Sistema"))
        Dim CONSULTAENC As String = "SELECT C.Cod, C.Hito FROM(SELECT a.ID_1 AS Cod,a.Hito,a.Sistema FROM GES_HITOS a) AS C WHERE C.Sistema=" + a + " ORDER BY C.Cod ASC"
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)

        cboCombo.DataSource = exeNUMMAX
        cboCombo.DataValueField = exeNUMMAX.Columns(0).ToString
        cboCombo.DataTextField = exeNUMMAX.Columns(1).ToString
        cboCombo.DataBind()
        CN.Close()

    End Sub

    Sub obtener_sistema()

        CN.Open()
        Dim CONSULTAENC As String = "SELECT 0 AS Cod, 'Seleccione Sistema' UNION SELECT gs.Sistema, gs.GlosaSistema FROM GES_SISTEMA gs"
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)


        drop_sis.DataSource = exeNUMMAX
        drop_sis.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_sis.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_sis.DataBind()

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


        drop_sis.DataSource = exeNUMMAX
        drop_sis.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_sis.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_sis.DataBind()

        '  txt_nombre.Focus()
        CN.Close()

    End Sub

    Sub obtener_hitos()

        CN.Open()
        Dim a As String = CInt(drop_sis.SelectedIndex)
        Dim CONSULTAENC As String = "SELECT C.Cod, C.Hito FROM(SELECT a.ID_1 AS Cod,a.Hito,a.Sistema FROM GES_HITOS a) AS C WHERE C.Sistema=" + a + " ORDER BY C.Cod ASC"
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)


        drop_hitos.DataSource = exeNUMMAX
        drop_hitos.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_hitos.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_hitos.DataBind()

        '  txt_nombre.Focus()
        CN.Close()

    End Sub
#End Region

#Region "METODOS PROPIOS DEL FORMULARIO"

    ''' <summary>
    ''' Guarda el Archivo adjunto en el servidor
    ''' </summary>
    ''' <remarks></remarks>
    ''' <history>Fecha de Creacion: 13/05/2010</history>
    ''' 
    Sub Guarda_Adjunto(ByVal UrlArchivo As String, ByVal Control As FileUpload)
        Try
            Dim Destino As String = UrlArchivo
            Control.PostedFile.SaveAs(Server.MapPath(Destino))
        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmGANTTs.aspx", ex.Message, "Guarda_Adjunto()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    ''' <summary>
    ''' Instancia a la clase NOTICIA_Negocio con el método Insertar()
    ''' </summary>
    ''' <remarks></remarks>
    ''' <history>Fecha de Creacion: 13/05/2010</history>
    ''' 
    Sub Insertar_GANTT()
        Dim archivo As String = Server.MapPath("..\Archivo_Adjunto\")

        Dim i As Integer
        Dim cadena As String = "\Archivo_Adjunto\"
        Dim cadena2 As String = ""
        For i = Len(archivo) - Len(cadena) To 0 Step -1
            If Mid(archivo, i, 1) = "\" Then
                cadena2 = Mid(archivo, i, Len(archivo))
                Exit For
            End If
        Next
        archivo = cadena2
        archivo = Replace(archivo, "SITIO_", "")


        'TextBox1.Text = archivo
        'Dim prueba As String = "\SITIO_MATADEROAVES_D\Archivo_Adjunto\"
        'prueba = Replace(prueba, "SITIO_", "")
        Try
            If Ejecucion = 0 Then
                'Dim Destino As String = archivo & Path.GetFileName(FileUpload1.PostedFile.FileName)
                'FileUpload1.PostedFile.SaveAs(Server.MapPath(Destino))
                'Dim Destino As String = Server.MapPath("..\Archivo_Adjunto\") & Path.GetFileName(FileUpload1.PostedFile.FileName)
                'FileUpload1.PostedFile.SaveAs(Destino)
                CapaEntidadGANTT.propiedad_Perfil = DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString                
                CapaEntidadGANTT.propiedad_Sistema = drop_sis.SelectedIndex
                CapaEntidadGANTT.propiedad_ID = txt_ID.Text
                CapaEntidadGANTT.propiedad_Hito = drop_hitos.SelectedItem.ToString
                CapaEntidadGANTT.propiedad_Actividad = txt_actividad.Text
                CapaEntidadGANTT.propiedad_Detalle_Actividad = txt_detalle_actividad.Text

                '   CapaEntidadGANTT.propiedad_PK_USUARIO = DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString
                '    CapaEntidadGANTT.propiedad_NOT_TITULO = txt_titulo.Text
                'CapaEntidadGANTT.propiedad_NOT_ADJUNTO = "\matadero_aves\Archivo_Adjunto\" & Path.GetFileName(FileUpload1.PostedFile.FileName)
                '  CapaEntidadGANTT.propiedad_NOT_ADJUNTO = archivo & Path.GetFileName(FileUpload1.PostedFile.FileName)

                'CapaEntidadGANTT.propiedad_NOT_ADJUNTO = archivo & FileUpload1.FileName

                ' CapaEntidadGANTT.propiedad_NOT_GLOSA = txt_noticia.Text
                CapaNegocioGANTT.Insertar(CapaEntidadGANTT)
                'Guarda_Adjunto(archivo & Path.GetFileName(FileUpload1.PostedFile.FileName), FileUpload1)
                ' Guarda_Adjunto("..\Archivo_Adjunto\" & Path.GetFileName(FileUpload1.PostedFile.FileName), FileUpload1)

                lbl_Resultado.Text = "La actividad se ha publicado correctamente."
                'txt_titulo.Text = ""
                'txt_noticia.Text = ""
            End If
            Ejecucion = 1
        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmGANTTs.aspx", ex.Message, "Insertar_GANTT()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    ''' <summary>
    ''' Instancia a la clase NOTICIA_Negocio con el método Listar() 
    ''' </summary>
    ''' <remarks></remarks>
    ''' <history>Fecha de Creacion: 13/05/2010</history>
    ''' 
    Sub Listar_GANTT()
        Try
            Me.DsGANTTs = CapaNegocioGANTT.Listar(CapaEntidadGANTT)
            If DsGANTTs.Tables(0).Rows.Count = 0 Then
                lbl_mensaje_noticias.Text = "En este momento no existen actividades publicadas."
                Grid_GANTT.Visible = False
            Else
                lbl_mensaje_noticias.Text = ""
                Session("GANTTs") = DsGANTTs
                Grid_GANTT.DataSource = DsGANTTs
                Grid_GANTT.DataBind()
            End If
        Catch ex As Exception
            Me.err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmGANTTs.aspx", ex.Message, "Listar_GANTT()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub
#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES BUTTON"

    Protected Sub btn_Publicar_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_Publicar.Click
        Insertar_GANTT()
        Listar_GANTT()
    End Sub

    Protected Sub btn_mantener_noticia_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_mantener_noticia.Click
        pnl_mantener_noticias.Visible = True
        Listar_GANTT()
    End Sub

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

    Protected Sub Grid_GANTT_RowEditing(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewEditEventArgs) Handles Grid_GANTT.RowEditing
        Try

            Grid_GANTT.EditIndex = e.NewEditIndex

            Dim fila As GridViewRow
            fila = Grid_GANTT.Rows.Item(e.NewEditIndex)


            Listar_GANTT()
            obtener_hitos() 'Se obtienen los hitos para poder copiarlos

            Dim hito As DropDownList = Grid_GANTT.Rows.Item(e.NewEditIndex).FindControl("lbl_Hito_Actividad_edit") ', DropDownList

            If Not hito Is Nothing Then
                CN.Open()
                Dim a As String = CInt(Session("Sistema"))
                Dim CONSULTAENC As String = "SELECT C.Cod, C.Hito FROM(SELECT a.ID_1 AS Cod,a.Hito,a.Sistema FROM GES_HITOS a) AS C WHERE C.Sistema=" + a + " ORDER BY C.Cod ASC"
                Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
                Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
                Dim exeNUMMAX As New DataTable()
                preexeNUMMAX.Fill(exeNUMMAX)

                hito.DataSource = exeNUMMAX
                hito.DataValueField = exeNUMMAX.Columns(0).ToString
                hito.DataTextField = exeNUMMAX.Columns(1).ToString
                hito.DataBind()
                'txt_nombre.Focus()
                CN.Close()
                'Dim hito1 As TextBox = CType(fila.FindControl("lbl_Hito_Actividad"), TextBox)
                'hito.Items.FindByValue(hito1.Text).Selected = True
            End If

        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmGANTTs.aspx", ex.Message, "Grid_GANTT_RowEditing()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    Protected Sub Grid_GANTT_RowUpdating(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewUpdateEventArgs) Handles Grid_GANTT.RowUpdating


        Try

            Dim fila As GridViewRow


            fila = Grid_GANTT.Rows.Item(e.RowIndex)


            '    Dim aux As String = CType(fila.FindControl("lbl_Hito_Actividad_edit"), DropDownList).SelectedItem.ToString
            'Agregar Actividad y detalle actividad
            CapaEntidadGANTT.propiedad_Sistema = 1 'Beta
            CapaEntidadGANTT.propiedad_Año = 2000 'CType(fila.FindControl("lbl_Año_edit"), TextBox).Text
            CapaEntidadGANTT.propiedad_ID = CType(fila.FindControl("lbl_ID_edit"), TextBox).Text
            CapaEntidadGANTT.propiedad_ID_old = CType(fila.FindControl("lbl_ID_edit"), TextBox).Text
            CapaEntidadGANTT.propiedad_Hito = CType(fila.FindControl("lbl_Hito_Actividad_edit"), DropDownList).SelectedItem.ToString
            CapaEntidadGANTT.propiedad_Actividad = CType(fila.FindControl("lbl_Actividad_edit"), TextBox).Text
            CapaEntidadGANTT.propiedad_Detalle_Actividad = CType(fila.FindControl("lbl_Detalle_Actividad_edit"), TextBox).Text
            CapaEntidadGANTT.propiedad_Perfil = CType(fila.FindControl("lbl_Perfil_edit"), TextBox).Text
            CapaEntidadGANTT.propiedad_Usuario = CType(fila.FindControl("lbl_Usuario_edit"), TextBox).Text
            CapaEntidadGANTT.propiedad_FechaInicio = CType(fila.FindControl("lbl_FechaInicio_edit"), TextBox).Text
            CapaEntidadGANTT.propiedad_FechaTermino = CType(fila.FindControl("lbl_FechaTermino_edit"), TextBox).Text
            CapaEntidadGANTT.propiedad_Producto = 1 'Beta



            '     Dim FileUpload2 As FileUpload = CType(fila.FindControl("FileUpload2"), FileUpload)
            '    Guarda_Adjunto(archivo & Path.GetFileName(FileUpload2.PostedFile.FileName), FileUpload2)
            '   CapaEntidadGANTT.propiedad_Hito_Actividad = archivo & Path.GetFileName(FileUpload2.PostedFile.FileName)

            CapaNegocioGANTT.Modificar(CapaEntidadGANTT)
            Grid_GANTT.EditIndex = -1
            Listar_GANTT()
            fila.DataBind()
        Catch ex As Exception
            '      err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmGANTTs.aspx", ex.Message, "Grid_GANTT_RowUpdating()")
            '   Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    Protected Sub Grid_GANTT_RowCommand(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewCommandEventArgs) Handles Grid_GANTT.RowCommand
        Select Case e.CommandName
            Case "Eliminar"
                Dim fila As GridViewRow
                fila = Grid_GANTT.Rows.Item(e.CommandArgument)

                CapaEntidadGANTT.propiedad_ID = CType(fila.FindControl("lbl_ID"), Label).Text
                CapaNegocioGANTT.Eliminar(CapaEntidadGANTT)
        End Select
        Listar_GANTT()
    End Sub

    Protected Sub Grid_GANTT_RowCancelingEdit(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewCancelEditEventArgs) Handles Grid_GANTT.RowCancelingEdit
        Grid_GANTT.EditIndex = -1
        Listar_GANTT()
    End Sub

#End Region


    Protected Sub drop_sis_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_sis.SelectedIndexChanged
        If drop_sis.SelectedIndex = 0 Then
            drop_hitos.Enabled = False
        Else
            drop_hitos.Enabled = True
            obtener_hitos()
            Session("Sistema") = drop_sis.SelectedValue
        End If
    End Sub
End Class
