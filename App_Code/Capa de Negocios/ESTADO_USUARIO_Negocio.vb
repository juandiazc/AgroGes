Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad ESTADO_USUARIO en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class ESTADO_USUARIO_Negocio

#Region "METODOS DE LOGICA DE NEGOCIOS"

    ''' <summary>
    ''' Permite Listar un objeto del tipo ESTADO_USUARIO en la base de datos
    ''' </summary>
    Public Function Listar(ByVal EST As ESTADO_USUARIO) As DataSet
        Try
            Dim EST_DAO As New ESTADO_USUARIO_DAO
            Return EST_DAO.Listar()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#End Region

End Class

