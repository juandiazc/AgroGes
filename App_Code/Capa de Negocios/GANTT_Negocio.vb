Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad GANTT en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class GANTT_Negocio

#Region "METODOS DE LOGICA DE NEGOCIOS"

    ''' <summary>
    ''' Permite Modificar un objeto del tipo GANTT_class en la aplicación
    ''' </summary>
    Public Sub Insertar(ByVal NOTI As GANTT)
        Try
            Dim NOT_DAO As New GANTT_DAO
            NOT_DAO.Insertar(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite Modificar un objeto del tipo GANTT en la aplicación
    ''' </summary>
    Public Sub Modificar(ByVal NOTI As GANTT)
        Try
            Dim NOT_DAO As New GANTT_DAO
            NOT_DAO.Modificar(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite Eliminar un objeto del tipo GANTT en la base de datos
    ''' </summary>
    Public Sub Eliminar(ByVal NOTI As GANTT)
        Try
            Dim NOT_DAO As New GANTT_DAO
            NOT_DAO.Eliminar(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite Listar un objeto del tipo GANTT en la base de datos
    ''' </summary>
    Public Function Listar(ByVal NOTI As GANTT) As DataSet
        Try
            Dim NOT_DAO As New GANTT_DAO
            Return NOT_DAO.Listar(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

    Public Function ListarCheck(ByVal NOTI As GANTT) As DataSet
        Try
            Dim NOT_DAO As New GANTT_DAO
            Return NOT_DAO.ListarCheck(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

    Public Function ListarDetalle(ByVal NOTI As GANTT) As DataSet
        Try
            Dim NOT_DAO As New GANTT_DAO
            Return NOT_DAO.ListarDetalle(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarVitacora(ByVal NOTI As GANTT) As DataSet
        Try
            Dim NOT_DAO As New GANTT_DAO
            Return NOT_DAO.ListarVitacora(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarCheck2(ByVal NOTI As GANTT) As DataSet
        Try
            Dim NOT_DAO As New GANTT_DAO
            Return NOT_DAO.ListarCheck2(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarCheck3(ByVal NOTI As GANTT) As DataSet
        Try
            Dim NOT_DAO As New GANTT_DAO
            Return NOT_DAO.ListarCheck3(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarCheck4(ByVal NOTI As GANTT) As DataSet
        Try
            Dim NOT_DAO As New GANTT_DAO
            Return NOT_DAO.ListarCheck4(NOTI)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
#End Region

End Class
