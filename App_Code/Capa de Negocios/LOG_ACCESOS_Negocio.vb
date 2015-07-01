Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad LOG_ACCESOS en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class LOG_ACCESOS_Negocio

#Region "METODOS DE LOGICA DE NEGOCIOS"

    ''' <summary>
    ''' Permite Modificar un objeto del tipo LOG_ACCESOS_class en la aplicación
    ''' </summary>
    Public Sub Insertar(ByVal LOG As LOG_ACCESOS)
        Try
            Dim LOG_DAO As New LOG_ACCESOS_DAO
            LOG_DAO.Insertar(LOG)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite Listar un objeto del tipo LOG_ACCESOS en la base de datos
    ''' </summary>
    Public Function Listar(ByVal LOG As LOG_ACCESOS) As DataSet
        Try
            Dim LOG_DAO As New LOG_ACCESOS_DAO
            Return LOG_DAO.Listar(LOG)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#End Region

End Class

