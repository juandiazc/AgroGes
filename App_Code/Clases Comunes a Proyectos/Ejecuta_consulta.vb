Public Class ejecuta_consulta
    Private Const BASEDATOS As String = "Data Source=LAUREL;Initial Catalog=PARQUEVEHICULOSCIRCULACION;Integrated Security=True"
    Dim CadenaConexion As String = ConfigurationSettings.AppSettings("StrConexion") 'oledb
    Dim CadenaConexion2 As String = ConfigurationSettings.AppSettings("StrConexion2") 'sqlclient
    Dim CadenaConexion3 As String = ConfigurationSettings.AppSettings("StrConexion3")

    Function ejecuta_sql(ByVal sql As String, ByVal Modo As Integer, Optional ByVal cadena As Integer = 1) As Boolean
        Dim xcadena As String
        Dim cnn As Data.SqlClient.SqlConnection = Nothing
        Dim cmd As Data.SqlClient.SqlCommand = Nothing
        Dim dbAdap As Data.OleDb.OleDbDataAdapter
        Dim dt As New Data.DataTable
        Dim booOK As Boolean = False
        xcadena = ""
        If cadena = 1 Then
            xcadena = CadenaConexion
        End If
        If cadena = 2 Then
            xcadena = CadenaConexion2
        End If
        If cadena = 3 Then
            xcadena = CadenaConexion3
        End If
        Dim cnBAse As New Data.OleDb.OleDbConnection(CadenaConexion)

        cnBAse.Open()
        If cnBAse.State = Data.ConnectionState.Open Then
            dbAdap = New Data.OleDb.OleDbDataAdapter(sql, cnBAse)
            If Modo = 1 Then
                dbAdap.SelectCommand.CommandType = Data.CommandType.Text
            End If
            If Modo = 2 Then
                dbAdap.SelectCommand.CommandType = Data.CommandType.StoredProcedure
            End If
            dbAdap.MissingSchemaAction = Data.MissingSchemaAction.AddWithKey
            dbAdap.Fill(dt)
            cnBAse.Close()
        End If
        ejecuta_sql = True

        Try

        Catch e As Exception
            ejecuta_sql = False
            Exit Function
        End Try
    End Function
    Public Function consulta_sql(ByVal sql As String, Optional ByVal cadena As Integer = 1) As Boolean
        Dim xcadena As String
        Dim cnBAse As Data.OleDb.OleDbConnection
        Dim dbDataTable As Data.DataTable
        Dim dbDataAdapter As Data.OleDb.OleDbDataAdapter
        xcadena = ""
        If cadena = 1 Then
            xcadena = CadenaConexion
        End If
        If cadena = 2 Then
            xcadena = CadenaConexion2
        End If
        If cadena = 3 Then
            xcadena = CadenaConexion3
        End If
        cnBAse = New Data.OleDb.OleDbConnection(CadenaConexion)
        cnBAse.Open()
        If cnBAse.State = Data.ConnectionState.Open Then
            dbDataAdapter = New Data.OleDb.OleDbDataAdapter(sql, cnBAse)
            dbDataTable = New Data.DataTable
            dbDataAdapter.Fill(dbDataTable)
            If dbDataTable.Rows.Count > 0 Then
                consulta_sql = False
            Else
                consulta_sql = True
            End If
            cnBAse.Close()
        End If
    End Function
    Public Function trae_tabla(ByVal sql As String, Optional ByVal cadena As Integer = 1) As Data.DataTable
        Dim x
        Dim xcadena As String
        Dim cnBAse As Data.OleDb.OleDbConnection
        Dim dbDataTable As Data.DataTable
        Dim dbDataAdapter As Data.OleDb.OleDbDataAdapter
        xcadena = ""
        If cadena = 1 Then
            xcadena = CadenaConexion
        End If
        If cadena = 2 Then
            xcadena = CadenaConexion2
        End If
        If cadena = 3 Then
            xcadena = CadenaConexion3
        End If
        cnBAse = New Data.OleDb.OleDbConnection(CadenaConexion)
        cnBAse.Open()
        If cnBAse.State = Data.ConnectionState.Open Then
            dbDataAdapter = New Data.OleDb.OleDbDataAdapter(sql, cnBAse)
            dbDataTable = New Data.DataTable
            dbDataAdapter.Fill(dbDataTable)
            x = dbDataTable.Rows.Count
            trae_tabla = dbDataTable
            cnBAse.Close()
        Else
            cnBAse.Open()
            dbDataAdapter = New Data.OleDb.OleDbDataAdapter(sql, cnBAse)
            dbDataTable = New Data.DataTable
            dbDataAdapter.Fill(dbDataTable)
            x = dbDataTable.Rows.Count
            trae_tabla = dbDataTable
            cnBAse.Close()
        End If
    End Function
    Public Function trae_tabla_reader(ByVal sql As String) As Data.OleDb.OleDbDataReader 'Data.SqlClient.SqlDataReader 'Data.OleDb.OleDbDataReader '
        Dim conexion As New Data.OleDb.OleDbConnection(CadenaConexion)

        Dim cmd As New Data.OleDb.OleDbCommand(sql, conexion)

        Dim dataReader As Data.OleDb.OleDbDataReader

        conexion.Open()
        dataReader = cmd.ExecuteReader(Data.CommandBehavior.CloseConnection)
        trae_tabla_reader = dataReader
    End Function
    Public Function trae_tabla_adapter(ByVal sql As String) As Data.DataTable
        Dim dt As New Data.DataTable
        Dim cnDatos As New Data.SqlClient.SqlConnection(CadenaConexion2)
        Dim data1 As New Data.SqlClient.SqlDataAdapter(sql, cnDatos)
        data1.SelectCommand.CommandType = Data.CommandType.Text
        'llenamos el datatable
        data1.Fill(dt)
        trae_tabla_adapter = dt
    End Function
End Class
