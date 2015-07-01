Imports System.IO
Partial Class Modulo_Informaciones_frmNoticias
    Inherits PaginaBase_class

#Region "ATRIBUTOS DEL FORMULARIO"
    Dim CapaEntidadNoticia As New NOTICIA
    Dim CapaNegocioNoticia As New NOTICIA_Negocio
    Dim DsNoticias As New Data.DataSet

    Dim CapaEntidadLogErrores As New LOG_ERRORES
    Dim CapaNegocioLogErrores As New LOG_ERRORES_Negocio

    Dim err As New CONTROL_ERRORES_class

    Dim Ejecucion As Integer = 0
#End Region

#Region "EVENTOS ASOCIADOS A LA CARGA DE LA PAGINA"

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            Lbl_autor.Text = DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString
            pnl_mantener_noticias.Visible = False
            If DevolverUsuarioActivo.propiedad_PK_TIPO_USUARIO = 1 Then
                btn_mantener_noticia.Visible = True
            End If
        End If
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
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmNoticias.aspx", ex.Message, "Guarda_Adjunto()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    ''' <summary>
    ''' Instancia a la clase NOTICIA_Negocio con el método Insertar()
    ''' </summary>
    ''' <remarks></remarks>
    ''' <history>Fecha de Creacion: 13/05/2010</history>
    ''' 
    Sub Insertar_Noticia()
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

                CapaEntidadNoticia.propiedad_PK_USUARIO = DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString
                CapaEntidadNoticia.propiedad_NOT_TITULO = txt_titulo.Text
                'CapaEntidadNoticia.propiedad_NOT_ADJUNTO = "\matadero_aves\Archivo_Adjunto\" & Path.GetFileName(FileUpload1.PostedFile.FileName)
                CapaEntidadNoticia.propiedad_NOT_ADJUNTO = archivo & Path.GetFileName(FileUpload1.PostedFile.FileName)

                'CapaEntidadNoticia.propiedad_NOT_ADJUNTO = archivo & FileUpload1.FileName

                CapaEntidadNoticia.propiedad_NOT_GLOSA = txt_noticia.Text
                CapaNegocioNoticia.Insertar(CapaEntidadNoticia)
                'Guarda_Adjunto(archivo & Path.GetFileName(FileUpload1.PostedFile.FileName), FileUpload1)
                Guarda_Adjunto("..\Archivo_Adjunto\" & Path.GetFileName(FileUpload1.PostedFile.FileName), FileUpload1)

                lbl_Resultado.Text = "La noticia se ha publicado correctamente."
                txt_titulo.Text = ""
                txt_noticia.Text = ""
            End If
            Ejecucion = 1
        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmNoticias.aspx", ex.Message, "Insertar_Noticia()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    ''' <summary>
    ''' Instancia a la clase NOTICIA_Negocio con el método Listar() 
    ''' </summary>
    ''' <remarks></remarks>
    ''' <history>Fecha de Creacion: 13/05/2010</history>
    ''' 
    Sub Listar_Noticia()
        Try
            Me.DsNoticias = CapaNegocioNoticia.Listar(CapaEntidadNoticia)
            If DsNoticias.Tables(0).Rows.Count = 0 Then
                lbl_mensaje_noticias.Text = "En este momento no existen noticias publicadas."
                Grid_Noticias.Visible = False
            Else
                lbl_mensaje_noticias.Text = ""
                Session("Noticias") = DsNoticias
                Grid_Noticias.DataSource = DsNoticias
                Grid_Noticias.DataBind()
            End If
        Catch ex As Exception
            Me.err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmNoticias.aspx", ex.Message, "Listar_Noticia()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub
#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES BUTTON"

    Protected Sub btn_Publicar_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_Publicar.Click
        Insertar_Noticia()
    End Sub

    Protected Sub btn_mantener_noticia_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_mantener_noticia.Click
        pnl_mantener_noticias.Visible = True
        Listar_Noticia()
    End Sub

#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES GRIDVIEW"
    Protected Sub Grid_Noticias_PageIndexChanging(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewPageEventArgs) Handles Grid_Noticias.PageIndexChanging
        Try
            Me.Grid_Noticias.PageIndex = e.NewPageIndex()
            DsNoticias = Session("Noticias")
            Grid_Noticias.DataSource = DsNoticias.Tables(0)
            Grid_Noticias.DataBind()
        Catch ex As Exception
        End Try
    End Sub

    Protected Sub Grid_Noticias_RowEditing(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewEditEventArgs) Handles Grid_Noticias.RowEditing
        Try
            Grid_Noticias.EditIndex = e.NewEditIndex
            Listar_Noticia()

            Dim fila As GridViewRow
            fila = Grid_Noticias.Rows.Item(e.NewEditIndex)

        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmNoticias.aspx", ex.Message, "Grid_Noticias_RowEditing()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    Protected Sub Grid_Noticias_RowUpdating(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewUpdateEventArgs) Handles Grid_Noticias.RowUpdating
        Dim archivo As String = Server.MapPath("..\Archivo_Adjunto\")

        Try
            Dim fila As GridViewRow
            fila = Grid_Noticias.Rows.Item(e.RowIndex)

            CapaEntidadNoticia.propiedad_PK_NOTICIA = CType(fila.FindControl("lbl_IDPRE_edit"), Label).Text
            CapaEntidadNoticia.propiedad_NOT_TITULO = CType(fila.FindControl("txt_titulo_edit"), TextBox).Text
            CapaEntidadNoticia.propiedad_NOT_GLOSA = CType(fila.FindControl("txt_not_glosa_edit"), TextBox).Text

            Dim FileUpload2 As FileUpload = CType(fila.FindControl("FileUpload2"), FileUpload)
            Guarda_Adjunto(archivo & Path.GetFileName(FileUpload2.PostedFile.FileName), FileUpload2)
            CapaEntidadNoticia.propiedad_NOT_ADJUNTO = archivo & Path.GetFileName(FileUpload2.PostedFile.FileName)

            CapaNegocioNoticia.Modificar(CapaEntidadNoticia)
            Grid_Noticias.EditIndex = -1
            Listar_Noticia()
        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmNoticias.aspx", ex.Message, "Grid_Noticias_RowUpdating()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    Protected Sub Grid_Noticias_RowCommand(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewCommandEventArgs) Handles Grid_Noticias.RowCommand
        Select Case e.CommandName
            Case "Eliminar"
                Dim fila As GridViewRow
                fila = Grid_Noticias.Rows.Item(e.CommandArgument)

                CapaEntidadNoticia.propiedad_PK_NOTICIA = CType(fila.FindControl("lbl_IDPRE"), Label).Text
                CapaNegocioNoticia.Eliminar(CapaEntidadNoticia)
        End Select
        Listar_Noticia()
    End Sub

    Protected Sub Grid_Noticias_RowCancelingEdit(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewCancelEditEventArgs) Handles Grid_Noticias.RowCancelingEdit
        Grid_Noticias.EditIndex = -1
        Listar_Noticia()
    End Sub


    
#End Region
End Class
