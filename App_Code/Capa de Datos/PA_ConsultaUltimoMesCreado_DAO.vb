Imports Microsoft.VisualBasic

Public Class PA_ConsultaUltimoMesCreado_DAO
    Public Function PA_ConsultaUltimoMesCreado() As Data.DataTable

        Try
            Dim sp As New StoredProcedure_class("PA_ConsultaUltimoMesCreado")
            Return sp.EjecutarProcedimiento_dt()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Function
End Class
