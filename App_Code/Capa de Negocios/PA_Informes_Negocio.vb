Imports Microsoft.VisualBasic

Public Class PA_Informes_Negocio
    Public Function ValidadorSegundoNivel(ByVal tab As PA_ParametrosInformes) As Data.DataTable
        Try
            Dim TBL_DAO As New PA_Informes_DAO
            Return TBL_DAO.ValidadorSegundoNivel(tab)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListaEncuestasFaltantes(ByVal tab As PA_ParametrosInformes) As Data.DataTable
        Try
            Dim TBL_DAO As New PA_Informes_DAO
            Return TBL_DAO.ListaEncuestasFaltantes(tab)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListaEstadoRoles(ByVal tab As PA_ParametrosInformes) As Data.DataTable
        Try
            Dim TBL_DAO As New PA_Informes_DAO
            Return TBL_DAO.ListaEstadoRoles(tab)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

    Public Function PA_Genera_Cobertura_EstadoEst(ByVal tab As PA_ParametrosInformes) As Data.DataTable
        Try
            Dim TBL_DAO As New PA_Informes_DAO
            Return TBL_DAO.CoberturaEstadosDirectorio(tab)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function PA_Genera_Cobertura_Regional(ByVal tab As PA_ParametrosInformes) As Data.DataTable
        Try
            Dim TBL_DAO As New PA_Informes_DAO
            Return TBL_DAO.CoberturaRegional(tab)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function PA_GENERAR_INFORME_DIRECTORIO(ByVal tab As PA_ParametrosInformes) As Data.DataTable
        Try
            Dim TBL_DAO As New PA_Informes_DAO
            Return TBL_DAO.ListadoDirectorio(tab)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
End Class
