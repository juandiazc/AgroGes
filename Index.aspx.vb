
Partial Class Index
    Inherits PaginaBase_class

#Region "ATRIBUTOS DEL FORMULARIO"
    Dim CapaEntidadNoticia As New NOTICIA
    Dim CapaNegocioNoticia As New NOTICIA_Negocio
    Dim DsNoticias As New Data.DataSet

    Dim err As New CONTROL_ERRORES_class
#End Region

#Region "EVENTOS ASOCIADOS A LA CARGA DE LA PAGINA"
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            'me.Master.Master.Controls.
            Listar_Noticia()
        End If
    End Sub
#End Region

#Region "METODOS PROPIOS DEL FORMULARIO"

    ''' <summary>
    ''' Instancia a la clase NOTICIA_Negocio con el método Listar() 
    ''' </summary>
    ''' <remarks></remarks>
    ''' <history>Fecha de Creacion: 13/05/2010</history>
    ''' 
    Sub Listar_Noticia()
        Try
            DsNoticias = CapaNegocioNoticia.Listar(CapaEntidadNoticia)
            If DsNoticias.Tables(0).Rows.Count = 0 Then
                lbl_mensaje_noticias.Text = "En este momento no existen noticias publicadas."
            Else
                Me.lbl_mensaje_noticias.Text = ""
                Session("Noticias") = DsNoticias
                Grid_Noticias.DataSource = DsNoticias
                Grid_Noticias.DataBind()
            End If
        Catch ex As Exception
            Me.err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "Index.aspx", ex.Message, "Listar_Noticia()")
            Response.Redirect("PaginaDeError.aspx")
        End Try
    End Sub

#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES GRIDVIEW"
    Protected Sub Grid_Noticias_PageIndexChanging(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewPageEventArgs) Handles Grid_Noticias.PageIndexChanging
        Try
            Grid_Noticias.PageIndex = e.NewPageIndex()
            DsNoticias = Session("Noticias")
            Grid_Noticias.DataSource = DsNoticias.Tables(0)
            Grid_Noticias.DataBind()
        Catch ex As Exception
        End Try
    End Sub
#End Region

End Class
