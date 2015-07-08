Imports System.Data.SqlClient
Imports System.Data

Public Class StoredProcedure_class

#Region " Variables "
    Private mNombreProcedimiento As String
    Private mParametros As Collection
#End Region

#Region " Propiedades "

    Public Property Nombre() As String
        Get
            Return mNombreProcedimiento
        End Get
        Set(ByVal Value As String)
            mNombreProcedimiento = Value
        End Set
    End Property

    Public Property Parametros() As Collection
        Get
            Return mParametros
        End Get
        Set(ByVal Value As Collection)
            mParametros = Value
        End Set
    End Property

#End Region

#Region "Constructor "

    'Solo recibe el nombre del procedimiento e inicializa la colección.
    Public Sub New(ByVal nNombre As String)
        Try
            Nombre = nNombre
            Parametros = New Collection
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    'Constructor Vacio.
    Public Sub New()

    End Sub

#End Region

#Region " Propiedades y Funciones "

    'Agrega los parametros del procedimiento y su respectivo valor.
    Public Sub AgregarParametro(ByVal pVariable As String, ByVal pValor As Object)
        Try
            Dim iParametro As New StoredProcedureParameter_class("@" & pVariable, pValor)
            Me.Parametros.Add(iParametro)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    'Ejecuta el procedimiento almacenado.
    Public Function EjecutarProcedimiento() As DataSet
        Try
            Dim Conn As New Conexion_class
            Dim sqlCmd As New SqlCommand(Me.Nombre, Conn.AbrirConeccion())
            sqlCmd.CommandType = CommandType.StoredProcedure
            sqlCmd.CommandTimeout = 4000

            Dim mParametro As StoredProcedureParameter_class

            'Agrega las variables al procedimiento almacenado
            For Each mParametro In Me.Parametros
                Dim pParam As New SqlParameter(mParametro.Variable, mParametro.GetTypeProperty)
                pParam.Direction = ParameterDirection.Input
                pParam.Value = mParametro.Valor
                sqlCmd.Parameters.Add(pParam)
            Next

            'SqlAdapter utiliza el SqlCommand para llenar el Dataset
            Dim sda As New SqlDataAdapter(sqlCmd)

            'Se llena el dataset
            Dim ds As New DataSet
            sda.Fill(ds)

            Conn.CerrarConeccion()
            Return ds
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function EjecutarProcedimiento_dt() As DataTable
        Try
            Dim Conn As New Conexion_class
            Dim sqlCmd As New SqlCommand(Me.Nombre, Conn.AbrirConeccion())
            sqlCmd.CommandType = CommandType.StoredProcedure
            sqlCmd.CommandTimeout = 4000

            Dim mParametro As StoredProcedureParameter_class

            'Agrega las variables al procedimiento almacenado
            For Each mParametro In Me.Parametros
                Dim pParam As New SqlParameter(mParametro.Variable, mParametro.GetTypeProperty)
                pParam.Direction = ParameterDirection.Input
                pParam.Value = mParametro.Valor
                sqlCmd.Parameters.Add(pParam)
            Next

            'SqlAdapter utiliza el SqlCommand para llenar el Dataset
            Dim sda As New SqlDataAdapter(sqlCmd)

            'Se llena el dataset
            Dim dt As New DataTable
            sda.Fill(dt)

            Conn.CerrarConeccion()
            Return dt
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    'Public Function EjecutarProcedimiento_RD() As SqlDataReader
    '    Try
    '        Dim Conn As New Conexion_class
    '        Dim sqlCmd As New SqlCommand(Me.Nombre, Conn.AbrirConeccion())
    '        sqlCmd.CommandType = CommandType.StoredProcedure
    '        sqlCmd.CommandTimeout = 4000

    '        Dim mParametro As StoredProcedureParameter_class

    '        'Agrega las variables al procedimiento almacenado
    '        For Each mParametro In Me.Parametros
    '            Dim pParam As New SqlParameter(mParametro.Variable, mParametro.GetTypeProperty)
    '            pParam.Direction = ParameterDirection.Input
    '            pParam.Value = mParametro.Valor
    '            sqlCmd.Parameters.Add(pParam)
    '        Next

    '        'SqlAdapter utiliza el SqlCommand para llenar el Dataset
    '        Dim sda As New SqlDataAdapter(sqlCmd)
    '        Dim rda As New Data.SqlClient.SqlDataReader(sqlCmd)
    '        'Se llena el dataset
    '        Dim ds As New DataSet
    '        sda.Fill(ds)

    '        Conn.CerrarConeccion()
    '        Return ds
    '    Catch ex As Exception
    '        Throw New Exception(ex.Message)
    '    End Try
    'End Function
    'Ejecuta un script de consulta
    Public Function EjecutarConsulta(ByVal cadenaconexion As String, ByVal consulta As String) As DataSet
        Try
            Dim Conn As New Conexion_class(cadenaconexion)
            Dim sqlCmd As New SqlCommand(Me.Nombre, Conn.AbrirConeccion())
            sqlCmd.CommandType = CommandType.Text
            sqlCmd.CommandTimeout = 4000
            sqlCmd.CommandText = consulta

            'SqlAdapter utiliza el SqlCommand para llenar el Dataset
            Dim sda As New SqlDataAdapter(sqlCmd)

            'Se llena el dataset
            Dim ds As New DataSet
            sda.Fill(ds)

            Conn.CerrarConeccion()
            Return ds
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Function

#End Region

End Class
