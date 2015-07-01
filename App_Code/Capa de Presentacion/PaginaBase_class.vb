Imports System.Web.UI.WebControls
Imports System.Web.UI
Imports System.Configuration.ConfigurationManager
Imports System
Imports System.Data

Public Class PaginaBase_class
    Inherits System.Web.UI.Page

    ''' <summary>
    ''' Obtiene la entidad Usuario correspondiente al usuario logueado
    ''' </summary>
    ''' <returns> Devuelve el usuario activo en la session</returns>
    ''' <history>
    ''' 12/06/2008   Fecha de creacion por Rodrigo Almonacid.    
    ''' </history>
    Public Function DevolverUsuarioActivo() As USUARIO

        Dim user As New USUARIO

        Try
            user = Session("Usuario_Activo")
        Catch ex As Exception
            Me.MensajeBox(ex.Message, True)
        End Try

        If Me.UsuarioEstaLogueado() Then
            Return user
        Else
            Call Me.CerrarSession()
            Return Nothing
        End If

    End Function

    ''' <summary>
    ''' Metodo encargado de agregar un usuario a la session
    ''' </summary>
    ''' <param name="us"> Recibe un usuario y lo agrega a la session</param>
    ''' <history>
    ''' 12/06/2008   Fecha de creacion por Rodrigo Almonacid.    
    ''' </history>
    Public Sub AgregarUsuarioSesion(ByVal us As USUARIO)

        Try
            Session("Usuario_Activo") = us
        Catch ex As Exception
            Me.MensajeBox(ex.Message, True)
        End Try

    End Sub

    ''' <summary>
    ''' Metodo encargado de verificar si un usuario es logeado
    ''' </summary>
    ''' <returns> Devuelve un true o false dependiendo si existe un usaurio en session</returns>
    ''' <history>
    ''' 12/06/2008   Fecha de creacion por Rodrigo Almonacid.    
    ''' </history>
    Public Function UsuarioEstaLogueado() As Boolean

        If Session("Usuario_Activo") Is Nothing Then
            Return False
        Else
            Return True
        End If

    End Function

    ''' <summary>
    ''' Metodo encargado de cerrar la session y borrar sus valores
    ''' </summary>
    ''' <history>
    ''' 12/06/2008   Fecha de creacion por Rodrigo Almonacid.    
    ''' </history>
    Public Sub CerrarSession()
        Session.Clear()
        Session.Abandon()
        Session.RemoveAll()
        System.Web.Security.FormsAuthentication.SignOut()
    End Sub

    Protected Sub MensajeBox(ByVal msg As String, ByVal tipo As Boolean)
        Dim myScript As String = "alert('" & msg & "');"

        If tipo Then
            EjecutarScriptConAjax(myScript)
        Else
            EjecutarScriptSinAjax(myScript)
        End If

    End Sub

    ''' <summary>
    ''' Ejecuta Script con Ajax
    ''' </summary>
    ''' <param name="myscript"></param>
    ''' 13/05/2010   Fecha de creacion.
    Protected Sub EjecutarScriptConAjax(ByVal myscript As String)
        ScriptManager.RegisterStartupScript(Page, Page.GetType(), "Script", myscript, True)
    End Sub
    ''' <summary>
    ''' Ejecuta Script sin Ajax
    ''' </summary>
    ''' <param name="myscript"></param>
    ''' 13/05/2010   Fecha de creacion.
    Protected Sub EjecutarScriptSinAjax(ByVal myscript As String)
        Dim cs As ClientScriptManager = Page.ClientScript
        cs.RegisterClientScriptBlock(Me.GetType(), "Mensaje", myscript, True)
    End Sub

    ''' <summary>
    ''' Método que abre una página en forma de PopUp
    ''' </summary>
    ''' <param name="tsURL">Dirección de la página</param>
    ''' <param name="tiAncho">Ancho de la página</param>
    ''' <param name="tiAlto">Alto de la página</param>
    Protected Sub AbrirPopUp(ByVal tsURL As String, ByVal tiAncho As Integer, ByVal tiAlto As Integer)

        Dim lsScript As String
        lsScript = "window.open('"
        lsScript += tsURL
        lsScript += "','_blank', 'width=" + tiAncho.ToString() + ",height=" + tiAlto.ToString() + ", location=no, menubar=no, status=no, toolbar=no, fullscreen=1, scrollbars=yes, resizable=yes, top=0, left=200'" ', top='+H+', left='+L+''"
        lsScript += ")"

        Me.EjecutarScriptConAjax(lsScript)

    End Sub

    ''' <summary>
    ''' Método que envia un mensaje de confirmacion
    ''' </summary>
    ''' <param name="mensaje">Mensaje de confirmacion</param>
    ''' <param name="PaginaRedireccion">Dirección de la página a redireccionar</param>
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

End Class
