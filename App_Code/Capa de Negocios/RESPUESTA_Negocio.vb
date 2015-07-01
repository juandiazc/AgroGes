Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad RESPUESTAS en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class RESPUESTA_Negocio

#Region "METODOS DE LOGICA DE NEGOCIOS"

    ''' <summary>
    ''' Permite Modificar un objeto del tipo RESPUESTAS_class en la aplicación
    ''' </summary>
    Public Sub Insertar(ByVal RES As RESPUESTA)
        Try
            Dim RES_DAO As New RESPUESTA_DAO
            RES_DAO.Insertar(RES)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite Modificar un objeto del tipo RESPUESTAS en la aplicación
    ''' </summary>
    Public Sub Modificar(ByVal RES As RESPUESTA)
        Try
            Dim RES_DAO As New RESPUESTA_DAO
            RES_DAO.Modificar(RES)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite Eliminar un objeto del tipo RESPUESTAS en la base de datos
    ''' </summary>
    Public Sub Eliminar(ByVal RES As RESPUESTA)
        Try
            Dim RES_DAO As New RESPUESTA_DAO
            RES_DAO.Eliminar(RES)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

#End Region

End Class

