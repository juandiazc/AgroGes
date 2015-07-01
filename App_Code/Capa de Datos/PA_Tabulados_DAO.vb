Imports Microsoft.VisualBasic

Public Class PA_Tabulados_DAO

    Public Function GeneraCifrasAnuario(ByVal tab As PA_ParametrosTabulados) As Data.DataTable

        Try
            Dim sp As New StoredProcedure_class("PA_GeneraCifrasAnuario")
            sp.AgregarParametro("añoproc", tab.propiedad_año)
            sp.AgregarParametro("perfil", tab.propiedad_usuario)
            Return sp.EjecutarProcedimiento_dt()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Function
    Public Sub GeneraCifrasTabMensual(ByVal tab As PA_ParametrosTabulados)

        Try
            Dim sp As New StoredProcedure_class("PA_GeneraCifrasTabMensual")
            sp.AgregarParametro("añoproc", tab.propiedad_año)
            sp.AgregarParametro("mesproc", tab.propiedad_mes)
            sp.AgregarParametro("perfil", tab.propiedad_usuario)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Sub
    Public Function RecuperaCifrasCuadros(ByVal tab As PA_ParametrosTabulados) As Data.DataTable

        Try
            Dim sp As New StoredProcedure_class("PA_RecuperaCifrasCuadros")
            sp.AgregarParametro("añoproc", tab.propiedad_año)
            sp.AgregarParametro("mesproc", tab.propiedad_mes)
            sp.AgregarParametro("cuadro", tab.propiedad_cuadro)
            sp.AgregarParametro("perfil", tab.propiedad_usuario)
            Return sp.EjecutarProcedimiento_dt()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Function
End Class
