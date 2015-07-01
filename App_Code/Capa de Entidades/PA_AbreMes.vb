Imports Microsoft.VisualBasic

Public Class PA_AbreMes
    Private usuario As String
    Private año As Integer
    Private mes As Integer
    Private Tipoerror As Integer


    Public Property propiedad_usuario() As String
        Get
            Return usuario
        End Get
        Set(ByVal value As String)
            usuario = value
        End Set
    End Property
    Public Property propiedad_año() As Integer
        Get
            Return año
        End Get
        Set(ByVal value As Integer)
            año = value
        End Set
    End Property

    Public Property propiedad_mes() As Integer
        Get
            Return mes
        End Get
        Set(ByVal value As Integer)
            mes = value
        End Set
    End Property
    Public Property propiedad_Tipoerror() As Integer
        Get
            Return Tipoerror
        End Get
        Set(ByVal value As Integer)
            Tipoerror = value
        End Set
    End Property


End Class
