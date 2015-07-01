Imports Microsoft.VisualBasic

Public Class llena_control

    Dim CadenaConexion As String = ConfigurationSettings.AppSettings("StrConexion")
    Public Function llena_cbo(ByVal xObjeto As Web.UI.WebControls.DropDownList, ByVal sql As String) As Boolean

        Dim x
        Dim dbConnection As Data.OleDb.OleDbConnection
        Dim dbDataTable As Data.DataTable
        '   Dim dbDataSet As Data.DataSet
        Dim dbDataAdapter As Data.OleDb.OleDbDataAdapter

        Try
            dbConnection = New Data.OleDb.OleDbConnection(CadenaConexion)
        Catch e As Exception
            Exit Function
        End Try

        dbConnection.Open()
        '   dbDataSet = New Data.DataSet()
        dbDataAdapter = New Data.OleDb.OleDbDataAdapter(sql, dbConnection)

        Try
            dbDataTable = New Data.DataTable

            dbDataAdapter.Fill(dbDataTable)
            x = dbDataTable.Rows.Count

            'For i = 0 To x - 1
            If dbDataTable.Rows.Count > 0 Then
                xObjeto.DataSource = dbDataTable
                xObjeto.DataValueField = dbDataTable.Columns(0).ColumnName
                xObjeto.DataTextField = dbDataTable.Columns(1).ColumnName
                xObjeto.DataBind()
            End If


            'If x = 0 Then
            '    ' abre = False
            'Else
            '    '  abre = True
            'End If
        Catch ex As Exception
            ' MsgBox("Error en Fill:" & vbCrLf & ex.Message)
        End Try
        '

    End Function
    Public Function llena_lista(ByVal xObjeto As Web.UI.WebControls.ListBox, ByVal sql As String) As Boolean

        Dim x
        Dim dbConnection As Data.OleDb.OleDbConnection
        Dim dbDataTable As Data.DataTable
        'Dim dbDataSet As Data.DataSet
        Dim dbDataAdapter As Data.OleDb.OleDbDataAdapter

        Try
            dbConnection = New Data.OleDb.OleDbConnection(CadenaConexion)
        Catch e As Exception
            Exit Function
        End Try

        dbConnection.Open()
        '   dbDataSet = New Data.DataSet()
        dbDataAdapter = New Data.OleDb.OleDbDataAdapter(sql, dbConnection)

        Try
            dbDataTable = New Data.DataTable

            dbDataAdapter.Fill(dbDataTable)
            x = dbDataTable.Rows.Count

            'For i = 0 To x - 1
            If dbDataTable.Rows.Count > 0 Then
                xObjeto.DataSource = dbDataTable
                xObjeto.DataValueField = dbDataTable.Columns(0).ColumnName
                xObjeto.DataTextField = dbDataTable.Columns(1).ColumnName
                xObjeto.DataBind()
            End If


            'If x = 0 Then
            '    ' abre = False
            'Else
            '    '  abre = True
            'End If
        Catch ex As Exception
            ' MsgBox("Error en Fill:" & vbCrLf & ex.Message)
        End Try
        '

    End Function
    Public Function llena_lista2(ByVal xObjeto As Web.UI.WebControls.ListBox, ByVal sql As String) As Boolean

        Dim x
        Dim dbConnection As Data.SqlClient.SqlConnection
        Dim dbDataTable As Data.DataTable
        'Dim dbDataSet As Data.DataSet
        Dim dbDataAdapter As Data.SqlClient.SqlDataAdapter

        Try
            dbConnection = New Data.SqlClient.SqlConnection(CadenaConexion)
        Catch e As Exception
            Exit Function
        End Try

        dbConnection.Open()
        '   dbDataSet = New Data.DataSet()
        dbDataAdapter = New Data.SqlClient.SqlDataAdapter(sql, dbConnection)

        Try
            dbDataTable = New Data.DataTable

            dbDataAdapter.Fill(dbDataTable)
            x = dbDataTable.Rows.Count

            'For i = 0 To x - 1
            If dbDataTable.Rows.Count > 0 Then
                xObjeto.DataSource = dbDataTable
                xObjeto.DataValueField = dbDataTable.Columns(0).ColumnName
                xObjeto.DataTextField = dbDataTable.Columns(1).ColumnName
                xObjeto.DataBind()
            End If


            'If x = 0 Then
            '    ' abre = False
            'Else
            '    '  abre = True
            'End If
        Catch ex As Exception
            ' MsgBox("Error en Fill:" & vbCrLf & ex.Message)
        End Try
        '

    End Function
    Public Function llena_text_box(ByVal xObjeto As Web.UI.WebControls.TextBox, ByVal nombreBaseDatos As String, ByVal commandString As String, ByVal nombre_campo As String) As Boolean

        Dim x
        Dim dbConnection As Data.OleDb.OleDbConnection
        Dim dbDataTable As Data.DataTable
        Dim dbDataSet As Data.DataSet
        Dim dbDataAdapter As Data.OleDb.OleDbDataAdapter

        Dim CadenaConexion As String
        Dim CadenaSelect As String

        Dim ArchivoDatos As String
        'Dim NombreTabla As String

        ArchivoDatos = nombreBaseDatos
        If ArchivoDatos = "" Then
            Exit Function
        End If

        CadenaSelect = commandString

        CadenaConexion = "Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" & ArchivoDatos

        Try
            dbConnection = New Data.OleDb.OleDbConnection(CadenaConexion)
        Catch e As Exception
            '     MsgBox("Error al crear la conexión:" & vbCrLf & e.Message)
            Exit Function
        End Try

        dbConnection.Open()
        dbDataSet = New Data.DataSet()
        dbDataAdapter = New Data.OleDb.OleDbDataAdapter(CadenaSelect, dbConnection)

        Try
            dbDataTable = New Data.DataTable

            dbDataAdapter.Fill(dbDataTable)
            x = dbDataTable.Rows.Count

            'For i = 0 To x - 1
            If x <> 0 Then
                xObjeto.Text = dbDataTable.Rows(0)(nombre_campo).ToString()
            End If

            If x = 0 Then
                ' abre = False
            Else
                '  abre = True
            End If
        Catch ex As Exception
            ' MsgBox("Error en Fill:" & vbCrLf & ex.Message)
        End Try
        '

    End Function
    Public Function llena_grid(ByVal xObjeto As Object, ByVal sql As String) As Boolean

        Dim cnBAse As New Data.OleDb.OleDbConnection(CadenaConexion)
        Dim dbAdap As Data.OleDb.OleDbDataAdapter
        Dim dt As New Data.DataTable
        '  Dim dstcopy As New Data.DataSet
        cnBAse.Open()
        If cnBAse.State = Data.ConnectionState.Open Then
            dbAdap = New Data.OleDb.OleDbDataAdapter(sql, cnBAse)
            dbAdap.MissingSchemaAction = Data.MissingSchemaAction.AddWithKey
            dbAdap.Fill(dt)
            cnBAse.Close()
            xObjeto.DataSource = dt
            xObjeto.DataBind()
        End If

    End Function
    Public Function llena_datagrid(ByVal xObjeto As Web.UI.WebControls.DataGrid, ByVal nombreBaseDatos As String, ByVal commandString As String) As Boolean

        Dim x
        Dim dbConnection As Data.OleDb.OleDbConnection
        Dim dbDataTable As Data.DataTable
        'Dim dbDataSet As Data.DataSet
        Dim dbDataAdapter As Data.OleDb.OleDbDataAdapter
        Dim CadenaConexion As String
        Dim CadenaSelect As String
        Dim ArchivoDatos As String

        ArchivoDatos = nombreBaseDatos

        If ArchivoDatos = "" Then
            Exit Function
        End If

        CadenaSelect = commandString
        CadenaConexion = "Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" & ArchivoDatos
        '
        Try
            dbConnection = New Data.OleDb.OleDbConnection(CadenaConexion)
        Catch e As Exception
            ' MsgBox("Error al crear la conexión:" & vbCrLf & e.Message)
            Exit Function
        End Try
        dbConnection.Open()
        'dbDataSet = New Data.DataSet()

        dbDataAdapter = New Data.OleDb.OleDbDataAdapter(CadenaSelect, dbConnection)

        Try
            dbDataTable = New Data.DataTable

            dbDataAdapter.Fill(dbDataTable)
            x = dbDataTable.Rows.Count

            'For i = 0 To x - 1
            If x <> 0 Then
                xObjeto.DataSource = dbDataTable
                'xObjeto.DataValueField = dbDataTable.Columns(0).ColumnName
                'xObjeto.DataTextField = dbDataTable.Columns(1).ColumnName
                xObjeto.DataBind()
            End If
            dbDataTable.Clear()
            dbConnection.Close()
            If x = 0 Then
                ' abre = False
            Else
                '  abre = True
            End If
        Catch ex As Exception
            ' MsgBox("Error en Fill:" & vbCrLf & ex.Message)
        End Try
        '

    End Function
    Public Function campo_grid(ByVal xObjeto As Web.UI.WebControls.GridView, ByVal e As System.Web.UI.WebControls.GridViewCommandEventArgs, ByVal campo As Integer) As Object
        Dim index As Integer = Convert.ToInt32(e.CommandArgument)
        Dim selectedRow As GridViewRow = xObjeto.Rows(index)
        Dim contactCell As TableCell = selectedRow.Cells(campo)
        Dim contact As String = contactCell.Text
        campo_grid = contact

    End Function
    Public Function campo_datagrid(ByVal xObjeto As Web.UI.WebControls.DataGrid, ByVal e As System.Web.UI.WebControls.DataGridCommandEventArgs, ByVal campo As Integer) As Object
        Dim index As Integer = Convert.ToInt32(e.CommandArgument)
        Dim selectedRow As DataGridItem = xObjeto.Items(index)
        Dim contactCell As TableCell = selectedRow.Cells(campo)
        Dim contact As String = contactCell.Text

        campo_datagrid = contact

    End Function
    Public Function busca_cbo(ByVal xObjeto As Object, ByVal valor As Integer) As Boolean
        Dim sw As Integer
        Dim x As Integer
        sw = 0
        For x = 0 To xObjeto.Items.Count - 1
            xObjeto.SelectedIndex = x
            If xObjeto.Items(xObjeto.SelectedIndex).Value = valor Then
                sw = 1
                Exit For
            End If
        Next
        If sw = 0 Then
            xObjeto.SelectedIndex = sw
        End If
    End Function
    Public Function busca_cbo_CADENA(ByVal xObjeto As Object, ByVal valor As String) As Boolean
        Dim sw As Integer
        Dim x As Integer

        sw = 0
        For x = 0 To xObjeto.Items.Count - 1
            xObjeto.SelectedIndex = x
            If Trim(xObjeto.Items(xObjeto.SelectedIndex).Value) = Trim(valor) Then
                sw = 1
                Exit For
            End If
        Next
        If sw = 0 Then
            xObjeto.SelectedIndex = sw
        End If
    End Function
    Public Function llena_menu(ByVal xObjeto As Web.UI.WebControls.Menu, ByVal nombreBaseDatos As String, ByVal commandString As String) As Boolean



    End Function
End Class




