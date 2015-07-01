Imports Microsoft.VisualBasic

Public Class PA_Informes_DAO

    Public Function ValidadorSegundoNivel(ByVal tab As PA_ParametrosInformes) As Data.DataTable

        Try
            Dim sp As New StoredProcedure_class("PA_ValidadorSegundoNivel")
            sp.AgregarParametro("añoproc", tab.propiedad_año)
            sp.AgregarParametro("mesproc", tab.propiedad_mes)
            sp.AgregarParametro("perfil", tab.propiedad_usuario)
            Return sp.EjecutarProcedimiento_dt()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Function
    Public Function ListaEncuestasFaltantes(ByVal tab As PA_ParametrosInformes) As Data.DataTable

        Try
            Dim sp As New StoredProcedure_class("PA_ListaEncFaltantes")
            sp.AgregarParametro("añoproc", tab.propiedad_año)
            sp.AgregarParametro("mesproc", tab.propiedad_mes)
            sp.AgregarParametro("perfil", tab.propiedad_usuario)
            Return sp.EjecutarProcedimiento_dt()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Function
    Public Function ListaEstadoRoles(ByVal tab As PA_ParametrosInformes) As Data.DataTable

        Try
            Dim sp As New StoredProcedure_class("PA_ListaEstadoRoles")
            sp.AgregarParametro("añoproc", tab.propiedad_año)
            sp.AgregarParametro("mesproc", tab.propiedad_mes)
            sp.AgregarParametro("perfil", tab.propiedad_usuario)
            Return sp.EjecutarProcedimiento_dt()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Function
    Public Function CoberturaEstadosDirectorio(ByVal tab As PA_ParametrosInformes) As Data.DataTable

        Try
            Dim sp As New StoredProcedure_class("PA_Genera_Cobertura_EstadoEst")
            sp.AgregarParametro("mes", tab.propiedad_mes)
            sp.AgregarParametro("año", tab.propiedad_año)
            Return sp.EjecutarProcedimiento_dt()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function CoberturaRegional(ByVal tab As PA_ParametrosInformes) As Data.DataTable

        Try
            Dim sp As New StoredProcedure_class("PA_Genera_Cobertura_Regional")
            sp.AgregarParametro("usuario", tab.propiedad_usuario)
            sp.AgregarParametro("mes", tab.propiedad_mes)
            sp.AgregarParametro("año", tab.propiedad_año)
            Return sp.EjecutarProcedimiento_dt()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Function
    Public Function ListadoDirectorio(ByVal tab As PA_ParametrosInformes) As Data.DataTable

        Try
            Dim sp As New StoredProcedure_class("PA_GENERAR_INFORME_DIRECTORIO")
            sp.AgregarParametro("mes", tab.propiedad_mes)
            sp.AgregarParametro("año", tab.propiedad_año)
            Return sp.EjecutarProcedimiento_dt()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

End Class

