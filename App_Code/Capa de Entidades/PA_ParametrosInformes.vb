Imports Microsoft.VisualBasic

Public Class PA_ParametrosInformes
    Private a�o As Integer
    Private mes As Integer
    Private usuario As String

    Public Property propiedad_a�o() As Integer
        Get
            Return a�o
        End Get
        Set(ByVal value As Integer)
            a�o = value
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
    Public Property propiedad_usuario() As String
        Get
            Return usuario
        End Get
        Set(ByVal value As String)
            usuario = value
        End Set
    End Property

End Class
