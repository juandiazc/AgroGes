Imports System.Configuration.ConfigurationManager
Partial Class MasterSitio
    Inherits System.Web.UI.MasterPage

#Region "ATRIBUTOS DEL FORMULARIO"
    Dim CapaEntidadUsuario As New USUARIO
    Dim CapaEntidadMenu As New MENU
    Dim CapaNegocioMenu As New MENU_Negocio
#End Region

#Region "EVENTOS ASOCIADOS A CARGA DE LA PAGINA"

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        Dim pb As New PaginaBase_class()
        If pb.UsuarioEstaLogueado() = True Then
            'Me.Master.LoadControl("lbl_usuario")
            Me.lnk_cerrar_session.Visible = True
            If Page.IsPostBack = False Then
                lbl_periodo.Text = Session("mes") + "- " + Session("año")
                Me.LlenarMenu()
            End If
        Else
            Response.Redirect(System.Web.Security.FormsAuthentication.LoginUrl)
        End If
    End Sub
#End Region

#Region "METODOS ASOCIADOS A MENUS DE USUARIOS"

    Sub LlenarMenu()
        Dim dtMenuItem As Data.DataTable
        Dim PaginaBase As New PaginaBase_class
        dtMenuItem = CapaNegocioMenu.LlenarMenu(PaginaBase.DevolverUsuarioActivo.propiedad_PK_TIPO_USUARIO)

        For Each drMenuItem As Data.DataRow In dtMenuItem.Rows
            Select Case drMenuItem("Nivel")
                Case 1
                    Dim mnuMenuItem As New MenuItem
                    mnuMenuItem.Value = drMenuItem("MenuId").ToString
                    mnuMenuItem.Text = drMenuItem("descripcion").ToString
                    mnuMenuItem.NavigateUrl = drMenuItem("Url").ToString
                    menu_sistema.Items.Add(mnuMenuItem)
                Case 2
                    For Each nodo As MenuItem In menu_sistema.Items
                        If (drMenuItem("PadreId") = Integer.Parse(nodo.Value)) Then
                            Dim mnuMenuItem As New MenuItem
                            mnuMenuItem.Value = drMenuItem("MenuId").ToString
                            mnuMenuItem.Text = drMenuItem("descripcion").ToString
                            mnuMenuItem.NavigateUrl = drMenuItem("Url").ToString
                            nodo.ChildItems.Add(mnuMenuItem)
                        End If
                    Next
                Case 3
                    For Each nodo As MenuItem In menu_sistema.Items
                        For i As Integer = 0 To nodo.ChildItems.Count - 1
                            If (drMenuItem("PadreId") = nodo.ChildItems.Item(i).Value) Then
                                Dim mnuMenuItem As New MenuItem
                                mnuMenuItem.Value = drMenuItem("MenuId").ToString
                                mnuMenuItem.Text = drMenuItem("descripcion").ToString
                                mnuMenuItem.NavigateUrl = drMenuItem("Url").ToString
                                nodo.ChildItems.Item(i).ChildItems.Add(mnuMenuItem)
                            End If
                        Next
                    Next
            End Select
        Next
    End Sub

#End Region

#Region "METODOS PROPIOS DEL FORMULARIO"

    ''' <summary>
    ''' Envia un correo de contacto a mi (Roberto Nobili).
    ''' </summary>
    ''' <history>Fecha creacion 01 Marzo 2010, Roberto Nobili</history>
    ''' 
    Sub SendMail()
        Dim SendMail As New Correo_class

        SendMail.propiedadNombreRemitente = Me.txt_nombre.Text
        SendMail.propiedadFrom = "contacto@ine.cl"
        SendMail.propiedadAsunto = "Contacto INE"

        SendMail.propiedadCuerpo = "Consulta de: " & Me.txt_nombre.Text & ". Email: " & Me.txt_email.Text & ". Fecha:" & Date.Now & ". Duda o Consulta: " & Me.txt_duda_consulta.Text

        SendMail.AgregarCorreoDestino(AppSettings("Correo_SPE").ToString)
        SendMail.EnviarCorreo()
        Me.lbl_resultado.Text = "Su Duda o Consulta se a enviado, pronto nos contactaremos con usted."
        Me.txt_nombre.Text = ""
        Me.txt_email.Text = ""
        Me.txt_duda_consulta.Text = ""
        Me.ModalPopupExtender1.Show()
    End Sub
#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES BUTTON"

    Protected Sub lnk_cerrar_session_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles lnk_cerrar_session.Click
        Dim pb As New PaginaBase_class
        pb.CerrarSession()
        Response.Redirect(System.Web.Security.FormsAuthentication.LoginUrl)
    End Sub

    Protected Sub btn_enviar_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_enviar.Click
        SendMail()
    End Sub

    Protected Sub btn_Salir_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_Salir.Click
        Me.txt_nombre.Text = ""
        Me.txt_email.Text = ""
        Me.txt_duda_consulta.Text = ""
    End Sub
#End Region

    Protected Sub menu_sistema_MenuItemClick(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.MenuEventArgs) Handles menu_sistema.MenuItemClick

    End Sub
End Class
