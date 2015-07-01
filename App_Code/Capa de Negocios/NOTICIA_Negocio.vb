Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad NOTICIA en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class NOTICIA_Negocio

#Region "METODOS DE LOGICA DE NEGOCIOS"

    ''' <summary>
    ''' Permite Modificar un objeto del tipo NOTICIA_class en la aplicación
    ''' </summary>
    Public Sub Insertar(ByVal NOTI As NOTICIA)
        Try
            Dim NOT_DAO As New NOTICIA_DAO
            NOT_DAO.Insertar(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite Modificar un objeto del tipo NOTICIA en la aplicación
    ''' </summary>
    Public Sub Modificar(ByVal NOTI As NOTICIA)
        Try
            Dim NOT_DAO As New NOTICIA_DAO
            NOT_DAO.Modificar(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite Eliminar un objeto del tipo NOTICIA en la base de datos
    ''' </summary>
    Public Sub Eliminar(ByVal NOTI As NOTICIA)
        Try
            Dim NOT_DAO As New NOTICIA_DAO
            NOT_DAO.Eliminar(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite Listar un objeto del tipo NOTICIA en la base de datos
    ''' </summary>
    Public Function Listar(ByVal NOTI As NOTICIA) As DataSet
        Try
            Dim NOT_DAO As New NOTICIA_DAO
            Return NOT_DAO.Listar(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#End Region

End Class
