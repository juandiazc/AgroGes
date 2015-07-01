Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad PREGUNTAS en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class PREGUNTA_Negocio

#Region "METODOS DE LOGICA DE NEGOCIOS"

    ''' <summary>
    ''' Permite Modificar un objeto del tipo PREGUNTAS_class en la aplicación
    ''' </summary>
    Public Sub Insertar(ByVal PRE As PREGUNTA)
        Try
            Dim PRE_DAO As New PREGUNTA_DAO
            PRE_DAO.Insertar(PRE)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite listar las preguntas activas del objeto del tipo PREGUNTAS existenes en la base de datos
    ''' </summary>
    Public Function Listar_Preguntas_Activas(ByVal Perfil As Integer, ByVal PRE As PREGUNTA) As DataSet
        Try
            Dim PRE_DAO As New PREGUNTA_DAO
            Return PRE_DAO.Listar_Preguntas_Activas(Perfil, PRE)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

    ''' <summary>
    ''' Permite listar las preguntas respondidas del objeto del tipo PREGUNTAS existenes en la base de datos
    ''' </summary>
    Public Function Listar_Preguntas_Respondidas(ByVal PRE As PREGUNTA) As DataSet
        Try
            Dim PRE_DAO As New PREGUNTA_DAO
            Return PRE_DAO.Listar_Preguntas_Respondidas(PRE)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#End Region

End Class

