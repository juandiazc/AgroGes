Imports Microsoft.VisualBasic

Public Class PA_AgregaRolAlLevantamiento
    Private usuario As String
    Private mes As Integer
    Private a�o As Integer
    Private rol As Integer
    Private tipoerror As Integer

    Public Property propiedad_usuario() As String
        Get
            Return usuario
        End Get
        Set(ByVal value As String)
            usuario = value
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

    Public Property propiedad_a�o() As Integer
        Get
            Return a�o
        End Get
        Set(ByVal value As Integer)
            a�o = value
        End Set
    End Property
    Public Property propiedad_rol() As Integer
        Get
            Return rol
        End Get
        Set(ByVal value As Integer)
            rol = value
        End Set
    End Property
    Public Property propiedad_tipoerror() As Integer
        Get
            Return tipoerror
        End Get
        Set(ByVal value As Integer)
            tipoerror = value
        End Set
    End Property
End Class
