Imports System
Imports System.Data
Imports System.Configuration
Imports System.Web
Imports System.Web.Security
Imports System.Web.UI
Imports System.Web.UI.WebControls
Imports System.Web.UI.WebControls.WebParts
Imports System.Web.UI.HtmlControls
Imports System.Security.Principal
Imports System.Net
Imports Microsoft.Reporting.WebForms

''' <summary>
''' Clase encargada de manejar los paramentros de un reporte
''' </summary>
''' <remarks>
''' Contenido:
''' - Atributos de paramatros de reportes
''' - Propiedades de paramatros de reportes 
''' - Constructores de paramatros de reportes 
''' - Metodos de paramatros de reportes 
''' </remarks>
'''  <history>
''' Fecha de Creacion: 05 de julio de 2008, Rodrigo Almonacid
''' </history> 
Public NotInheritable Class Credenciales_class
    Implements IReportServerCredentials

#Region " Atributos "

    Private _UserName As String
    Private _PassWord As String
    Private _DomainName As String

#End Region

#Region " Propiedades "

    ''' <summary>
    ''' Obtiene una credencial de windows
    ''' </summary>   
    Public ReadOnly Property ImpersonationUser() As WindowsIdentity _
            Implements IReportServerCredentials.ImpersonationUser
        Get

            'Use the default windows user.  Credentials will be
            'provided by the NetworkCredentials property.
            Return Nothing

        End Get
    End Property

    ''' <summary>
    ''' Obtiene una credencial con usuario, pasword y dominio
    ''' </summary>   
    Public ReadOnly Property NetworkCredentials() As ICredentials _
        Implements IReportServerCredentials.NetworkCredentials
        Get

            ' use NetworkCredentials
            Return New NetworkCredential(_UserName, _PassWord, _DomainName)

        End Get
    End Property
#End Region

#Region " Constructor "

    ''' <summary>
    ''' Permite crear una instancia de credenciales con todods sus datos
    ''' </summary>
    Public Sub New(ByVal UserName As String, ByVal PassWord As String, ByVal DomainName As String)

        _UserName = UserName
        _PassWord = PassWord
        _DomainName = DomainName

    End Sub

#End Region

#Region " Métodos "

    Public Function GetFormsCredentials(ByRef authCookie As Cookie, ByRef userName As String, ByRef password As String, ByRef authority As String) _
                                        As Boolean Implements IReportServerCredentials.GetFormsCredentials

        authCookie = Nothing
        userName = Nothing
        password = Nothing
        authority = Nothing

        'Not using form credentials
        Return False

    End Function

#End Region

End Class



