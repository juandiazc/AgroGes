Imports Microsoft.VisualBasic

Public Class Llena_Tablas_dtsBOL

    Private _a�o As Integer
    Private _mes As Integer
    Public Property A�o() As Integer
        Get
            Return _a�o
        End Get
        Set(ByVal value As Integer)
            _a�o = value
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
