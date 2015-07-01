Imports System.Data.SqlClient
Imports System.Data

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
Public Class ParametrosReporte_Class

#Region "Atributos de paramatros de reportes"

    Private mVariable As String
    Private mValor As Object

#End Region

#Region "Propiedades de paramatros de reportes"

    'Nombre de la variable, debe ser igual a la declarada en el procedimiento almacenado
    Public Property Propiedad_nombreParametro() As String
        Get
            Return mVariable
        End Get
        Set(ByVal Value As String)
            mVariable = Value
        End Set
    End Property

    'Valor de la variable, puede ser de cualquier tipo de dato. preferible que 
    'coincida con las variables declaradas en GetTypeProperty
    Public Property Propiedad_valorParametro()
        Get
            Return mValor
        End Get
        Set(ByVal Value)
            mValor = Value
        End Set
    End Property

#End Region

#Region "Constructores de paramatros de reportes"

    'Procedimiento de creacion de la variable.
    Public Sub New(ByVal pVariable As String, ByVal pValor As Object)
        Try
            Me.Propiedad_nombreParametro = pVariable
            Me.Propiedad_valorParametro = pValor
        Catch ex As Exception
            Throw New Exception("Error en la creacion del Parametro" & vbCrLf & ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite crear una instancia de paramatros sin datos
    ''' </summary>
    Public Sub New()

    End Sub

#End Region

#Region "Metodos de paramatros de reportes"

    'Se definen los posibles tipos de datos que se le van a enviar al procedimiento almacenado
    'Esta lista podria aumentar conforme se usen otro tipo de variable.
    Public ReadOnly Property GetTypeProperty() As SqlDbType
        Get
            If mValor.GetType.FullName = "System.String" Then
                Return SqlDbType.VarChar
            ElseIf mValor.GetType.FullName = "System.Int16" Then
                Return SqlDbType.Int
            ElseIf mValor.GetType.FullName = "System.Int32" Then
                Return SqlDbType.Int
            ElseIf mValor.GetType.FullName = "System.Int64" Then
                Return SqlDbType.Int
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

#End Region

End Class
