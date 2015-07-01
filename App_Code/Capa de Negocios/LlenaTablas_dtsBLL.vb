Imports Microsoft.VisualBasic

Public Class LlenaTablas_dtsBLL
    Public Function Llenar(ByVal llenatablas_dtsBOL As Llena_Tablas_dtsBOL) As Boolean
        Try
            Dim llenatablas_dtsDAL As New Llena_Tablas_dtsDAL
            Llenar = True
            llenatablas_dtsDAL.Llena(llenatablas_dtsBOL)
        Catch ex As Exception
            Llenar = False
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function Llenar_InIn(ByVal llenatablas_dtsBOL As Llena_Tablas_dtsBOL) As Boolean
        Try
            Dim llenatablas_dtsDAL As New Llena_Tablas_dtsDAL
            Llenar_InIn = True
            llenatablas_dtsDAL.Llena_InIn(llenatablas_dtsBOL)
        Catch ex As Exception
            Llenar_InIn = False
            Throw New Exception(ex.Message)
        End Try
    End Function
End Class
