Imports System.Data.SqlClient
Imports System.Data

Public Class StoredProcedureParameter_class

    Private mVariable As String
    Private mValor As Object

    'Nombre de la variable, debe ser igual a la declarada en el procedimiento almacenado
    Public Property Variable() As String
        Get
            Return mVariable
        End Get
        Set(ByVal Value As String)
            mVariable = Value
        End Set
    End Property

    'Valor de la variable, puede ser de cualquier tipo de dato. preferible que 
    'coincida con las variables declaradas en GetTypeProperty
    Public Property Valor()
        Get
            Return mValor
        End Get
        Set(ByVal Value)
            mValor = Value
        End Set
    End Property

    'Se definen los posibles tipos de datos que se le van a enviar al procedimiento almacenado
    'Esta lista podria aumentar conforme se usen otro tipo de variable.
    Public ReadOnly Property GetTypeProperty() As SqlDbType
        Get
            'If mValor.GetType.FullName = "System.String" Then
            '    Return SqlDbType.VarChar
            'ElseIf mValor.GetType.FullName = "System.Int16" Then
            '    Return SqlDbType.Int
            'ElseIf mValor.GetType.FullName = "System.Int32" Then
            '    Return SqlDbType.Int
            'ElseIf mValor.GetType.FullName = "System.Int64" Then
            '    Return SqlDbType.Int
            'ElseIf mValor.GetType.FullName = "System.Decimal" Then
            '    Return SqlDbType.Decimal
            'ElseIf mValor.GetType.FullName = "System.Double" Then
            '    Return SqlDbType.BigInt
            'ElseIf mValor.GetType.FullName = "System.DateTime" Then
            '    Return SqlDbType.DateTime
            'ElseIf mValor.GetType.FullName = "System.Byte" Then
            '    Return SqlDbType.Image
            'End If
            If mValor.GetType.FullName = "System.String" Then
                Return SqlDbType.VarChar
            ElseIf mValor.GetType.FullName = "System.Int16" Then
                Return SqlDbType.BigInt
            ElseIf mValor.GetType.FullName = "System.Int32" Then
                Return SqlDbType.BigInt
            ElseIf mValor.GetType.FullName = "System.Int64" Then
                Return SqlDbType.BigInt
            ElseIf mValor.GetType.FullName = "System.Decimal" Then
                Return SqlDbType.Decimal
            ElseIf mValor.GetType.FullName = "System.Double" Then
                Return SqlDbType.BigInt
            ElseIf mValor.GetType.FullName = "System.DateTime" Then
                Return SqlDbType.DateTime
            ElseIf mValor.GetType.FullName = "System.Byte" Then
                Return SqlDbType.Image
            End If
        End Get
    End Property

    'Procedimiento de creacion de la variable.
    Public Sub New(ByVal pVariable As String, ByVal pValor As Object)
        Try
            Me.Variable = pVariable
            Me.Valor = pValor
        Catch ex As Exception
            Throw New Exception("Error en la creacion del Parametro" & vbCrLf & ex.Message)
        End Try
    End Sub

End Class

