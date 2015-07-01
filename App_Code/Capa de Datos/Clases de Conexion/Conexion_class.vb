Imports System.Data.SqlClient
Imports System.Configuration.ConfigurationManager

Public Class Conexion_class

#Region " Variables "

    Private mSqlConn As SqlConnection

#End Region

#Region " Propiedades "

    Public Property SQLConn() As SqlConnection
        Get
            Return mSqlConn
        End Get
        Set(ByVal Value As SqlConnection)
            mSqlConn = Value
        End Set
    End Property

#End Region

#Region "Constructor"

    Public Sub New()
        Try
            Dim StringConeccion As String
            'StringConeccion = System.Configuration.ConfigurationManager.AppSettings("Coneccion")
            StringConeccion = System.Configuration.ConfigurationManager.ConnectionStrings("Coneccion").ConnectionString
            SQLConn = New SqlConnection()
            SQLConn.ConnectionString = StringConeccion
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    Public Sub New(ByVal cadenaConexion As String)
        Try
            Dim StringConeccion As String
            StringConeccion = cadenaConexion
            SQLConn = New SqlConnection()
            SQLConn.ConnectionString = StringConeccion
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

#End Region

#Region "Metodos"

    Public Function AbrirConeccion() As SqlConnection
        Me.SQLConn.Open()
        Return Me.SQLConn
    End Function

    Public Sub CerrarConeccion()
        Me.SQLConn.Close()
    End Sub

#End Region

End Class
