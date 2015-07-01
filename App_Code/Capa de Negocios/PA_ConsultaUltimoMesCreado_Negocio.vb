Imports Microsoft.VisualBasic

Public Class PA_ConsultaUltimoMesCreado_Negocio
    Public Function PA_ConsultaUltimoMesCreado() As Data.DataTable
        Try
            Dim TBL_DAO As New PA_ConsultaUltimoMesCreado_DAO
            Return TBL_DAO.PA_ConsultaUltimoMesCreado()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
End Class
