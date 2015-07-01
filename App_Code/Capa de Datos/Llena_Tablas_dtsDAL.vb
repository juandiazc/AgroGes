Imports Microsoft.VisualBasic

Public Class Llena_Tablas_dtsDAL
    Public Function Llena(ByVal llenatablas_dtsBOL As Llena_Tablas_dtsBOL)
        Try
            Dim sp As New StoredProcedure_class("PA_LlenaTablas_dts")
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function Llena_InIn(ByVal llenatablas_dtsBOL As Llena_Tablas_dtsBOL)
        Try
            Dim sp As New StoredProcedure_class("PA_LlenaTablas_dts_InIn")
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
End Class
