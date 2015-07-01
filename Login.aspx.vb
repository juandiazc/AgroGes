Imports System.Configuration.ConfigurationManager
Partial Class Login
    Inherits PaginaBase_class

#Region "ATRIBUTOS DEL FORMULARIO"
    Dim CapaEntidadUsuario As New USUARIO
    Dim CapaNegocioUsuario As New USUARIO_Negocio

    Dim CapaEntidadLogAccesos As New LOG_ACCESOS
    Dim CapaNegocioLogAccesos As New LOG_ACCESOS_Negocio
    Dim i As Integer
#End Region

#Region "EVENTOS ASOCIADOS A LA CARGA DE LA PAGINA"
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        txt_idusuario.Focus()
        If IsPostBack = False Then
            For i = 2000 To Year(Today)
                drop_año.Items.Add(i)
            Next
            If Month(Today) = 1 Then
                drop_mes.SelectedValue = 12
                drop_año.SelectedValue = Year(Today) - 1
            Else
                drop_mes.SelectedValue = Month(Today) - 1
                drop_año.SelectedValue = Year(Today)
            End If
            valida_campos()

        End If
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
        SendMail.propiedadFrom = "juan.diaz@ine.cl"
        SendMail.propiedadAsunto = "Contacto INE"

        SendMail.propiedadCuerpo = "Consulta de: " & txt_nombre.Text & ". Email: " & txt_email.Text & ". Fecha:" & Date.Now & ". Duda o Consulta: " & txt_duda_consulta.Text

        SendMail.AgregarCorreoDestino(AppSettings("Correo_SPE").ToString)
        SendMail.EnviarCorreo()
        lbl_resultado.Text = "Su Duda o Consulta se a enviado, pronto nos contactaremos con usted."
        txt_nombre.Text = ""
        txt_email.Text = ""
        txt_duda_consulta.Text = ""
        ModalPopupExtender1.Show()
    End Sub

    Sub Graba_Acceso()
        CapaEntidadLogAccesos.propiedad_PK_USUARIO = txt_idusuario.Text
        CapaEntidadLogAccesos.propiedad_LOGACC_FECHA = Today
        CapaEntidadLogAccesos.propiedad_LOGACC_IP = Request.UserHostAddress
        CapaNegocioLogAccesos.Insertar(CapaEntidadLogAccesos)
    End Sub
    Sub valida_campos()
        Body.Attributes.Add("onload", "if(event.keyCode==13) {document.forms[0].txt_idusuario.focus();return false;}")
        Me.txt_idusuario.Attributes.Add("onkeydown", "if(event.keyCode==13) {document.forms[0].txt_UsuPassword.focus();return false;}")
        Me.txt_UsuPassword.Attributes.Add("onkeydown", "if(event.keyCode==13) {document.forms[0].btnIngresar.focus();return false;}")

        'txt_idusuario.Attributes.Add("onkeydown", "javascript:PresionaEnter();")
        'txt_UsuPassword.Attributes.Add("onkeydown", "javascript:PresionaEnter();")
    End Sub

#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES BUTTON"
    Protected Sub btnIngresar_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnIngresar.Click
        CapaEntidadUsuario.propiedad_PK_USUARIO = txt_idusuario.Text
        CapaEntidadUsuario.propiedad_USU_PASS = txt_UsuPassword.Text

        If CapaNegocioUsuario.UsuarioValido(CapaEntidadUsuario) = True Then
            CapaNegocioUsuario.ObtenerDatosUsuario(CapaEntidadUsuario)
            If CapaEntidadUsuario.propiedad_PK_ESTADO_USUARIO = 2 Then
                lbl_mensaje_login.Text = "Su usuario se encuentra desabilitado para ingresar al sistema"
            Else
                Session("año") = drop_año.SelectedValue
                Session("mes") = drop_mes.SelectedValue
                Session("usuario") = txt_idusuario.Text
                Session("tipo") = CapaEntidadUsuario.propiedad_PK_TIPO_USUARIO
                Graba_Acceso()
                AgregarUsuarioSesion(CapaEntidadUsuario)
                System.Web.Security.FormsAuthentication.SetAuthCookie(CapaEntidadUsuario.propiedad_PK_USUARIO, False)
                'Response.Redirect("Index.aspx", False)

                Response.Redirect("Index.aspx")
            End If
        Else
            lbl_mensaje_login.Text = "Usuario o contraseña incorrecta"
            txt_idusuario.Text() = ""
        End If
    End Sub

    Protected Sub btn_enviar_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_enviar.Click
        SendMail()
    End Sub

    Protected Sub btn_Salir_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_Salir.Click
        txt_nombre.Text = ""
        txt_email.Text = ""
        txt_duda_consulta.Text = ""
    End Sub
#End Region

    
 
End Class
