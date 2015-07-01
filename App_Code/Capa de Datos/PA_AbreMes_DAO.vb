Imports Microsoft.VisualBasic
Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Data.SqlClient
Public Class PA_AbreMes_DAO
    Dim BASEDATOS As String = System.Configuration.ConfigurationManager.ConnectionStrings("Coneccion").ConnectionString
    Public Function AbreMes(ByVal tab As PA_AbreMes) As Integer
        Dim valor As Integer
        valor = 0
        Try
            Dim sql As String
            Dim dt As New Data.DataTable
            sql = "PA_AbreMes"
            Using conn As New Data.SqlClient.SqlConnection(BASEDATOS)
                conn.Open()
                Using dbAdap = New Data.SqlClient.SqlDataAdapter(sql, conn)
                    dbAdap.SelectCommand.CommandType = CommandType.StoredProcedure
                    dbAdap.SelectCommand.Parameters.Add("@usuario", SqlDbType.NVarChar)
                    dbAdap.SelectCommand.Parameters("@usuario").Value = tab.propiedad_usuario
                    dbAdap.SelectCommand.Parameters.Add("@Uaño", SqlDbType.Int)
                    dbAdap.SelectCommand.Parameters("@Uaño").Value = tab.propiedad_año
                    dbAdap.SelectCommand.Parameters.Add("@Umes", SqlDbType.Int)
                    dbAdap.SelectCommand.Parameters("@Umes").Value = tab.propiedad_mes
                    dbAdap.SelectCommand.Parameters.Add("@error", SqlDbType.Int)
                    dbAdap.SelectCommand.Parameters("@error").Value = 0 'tab.propiedad_Tipoerror
                    dbAdap.SelectCommand.Parameters("@error").direction = ParameterDirection.Output

                    dbAdap.MissingSchemaAction = MissingSchemaAction.AddWithKey
                    dbAdap.Fill(dt)
                    conn.Close()
                    valor = dbAdap.SelectCommand.Parameters("@error").Value
                End Using
            End Using
            Return valor

        Catch ex As Exception
            Return valor
        End Try

    End Function
End Class
