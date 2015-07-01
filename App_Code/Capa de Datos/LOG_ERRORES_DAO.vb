Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad LOG_ERRORES
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class LOG_ERRORES_DAO

#Region "METODOS DE ACCESO A DATOS"

    ''' <summary>
    ''' Permite insertar un objeto del tipo LOG_ERRORES en la base de datos
    ''' </summary>
    Public Sub Insertar(ByVal LOG As LOG_ERRORES)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_LOG_ERRORES_INSERTAR")
            sp.AgregarParametro("PK_USUARIO", LOG.propiedad_PK_USUARIO)
            sp.AgregarParametro("LOGERR_TIPO", LOG.propiedad_LOGERR_TIPO)
            sp.AgregarParametro("LOGERR_PAGINA", LOG.propiedad_LOGERR_PAGINA)
            sp.AgregarParametro("LOGERR_MENSAJE", LOG.propiedad_LOGERR_MENSAJE)
            sp.AgregarParametro("LOGERR_FECHA", LOG.propiedad_LOGERR_FECHA)
            sp.AgregarParametro("LOGERR_METODO", LOG.propiedad_LOGERR_METODO)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite listar todos los objeto del tipo LOG_ERRORES existenes en la base de datos
    ''' </summary>
    Public Function Listar(ByVal LOG As LOG_ERRORES) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_LOG_ERRORES_LISTAR")
            sp.AgregarParametro("LOGERR_FECHA", LOG.propiedad_LOGERR_FECHA)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#End Region

End Class

