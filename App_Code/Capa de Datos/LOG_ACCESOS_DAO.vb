Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad LOG_ACCESOS
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class LOG_ACCESOS_DAO

#Region "METODOS DE ACCESO A DATOS"

    ''' <summary>
    ''' Permite insertar un objeto del tipo LOG_ACCESOS en la base de datos
    ''' </summary>
    Public Sub Insertar(ByVal LOG As LOG_ACCESOS)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_LOG_ACCESOS_INSERTAR")
            sp.AgregarParametro("PK_USUARIO", LOG.propiedad_PK_USUARIO)
            sp.AgregarParametro("LOGACC_FECHA", LOG.propiedad_LOGACC_FECHA)
            sp.AgregarParametro("LOGACC_IP", LOG.propiedad_LOGACC_IP)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite listar todos los objeto del tipo LOG_ACCESOS existenes en la base de datos
    ''' </summary>
    Public Function Listar(ByVal LOG As LOG_ACCESOS) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_LOG_ACCESOS_LISTAR")
            sp.AgregarParametro("LOGACC_FECHA", LOG.propiedad_LOGACC_FECHA)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#End Region

End Class

