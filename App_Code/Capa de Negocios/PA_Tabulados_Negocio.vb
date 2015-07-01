Imports Microsoft.VisualBasic

Public Class PA_Tabulados_Negocio

    Public Sub GeneraCifrasAnuario(ByVal tab As PA_ParametrosTabulados)
        Try
            Dim TBL_DAO As New PA_Tabulados_DAO
            TBL_DAO.GeneraCifrasAnuario(tab)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    Public Sub GeneraCifrasTabMensual(ByVal tab As PA_ParametrosTabulados)
        Try
            Dim TBL_DAO As New PA_Tabulados_DAO
            TBL_DAO.GeneraCifrasTabMensual(tab)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub
    Public Function RecuperaCifrasCuadros(ByVal tab As PA_ParametrosTabulados) As Data.DataTable
        Try
            Dim TBL_DAO As New PA_Tabulados_DAO
            Return TBL_DAO.RecuperaCifrasCuadros(tab)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

End Class
