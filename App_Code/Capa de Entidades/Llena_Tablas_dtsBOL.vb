Imports Microsoft.VisualBasic

Public Class Llena_Tablas_dtsBOL

    Private _año As Integer
    Private _mes As Integer
    Public Property Año() As Integer
        Get
            Return _año
        End Get
        Set(ByVal value As Integer)
            _año = value
        End Set
    End Property

    Public Property mes() As Integer
        Get
            Return _mes
        End Get
        Set(ByVal value As Integer)
            _mes = value
        End Set
    End Property

    Public Sub New()

    End Sub
End Class
