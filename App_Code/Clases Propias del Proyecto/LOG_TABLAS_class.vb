
Public Class LOG_TABLAS_class

#Region "METODOS PROPIOS DE LA CLASE"
    ''' <summary>
    '''  Clase encargada del manejo de los log
    ''' </summary>
    ''' <remarks>
    '''  Lista los datos contenidos en la tablas de Log
    ''' </remarks>
    ''' <history>
    '''  Fecha de Creacion: 13/05/2010
    ''' </history>
    Public Function Listar_Log_Tablas(ByVal Tabla As String, ByVal Fecha As Date) As Data.DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_LOG_TABLAS_LISTAR")
            sp.AgregarParametro("TABLA", Tabla)
            sp.AgregarParametro("FECHA_ACCION", Fecha)
            Return sp.EjecutarProcedimiento
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
#End Region

End Class
