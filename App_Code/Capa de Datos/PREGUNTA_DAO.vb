Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad PREGUNTAS
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class PREGUNTA_DAO

#Region "METODOS DE ACCESO A DATOS"

    ''' <summary>
    ''' Permite insertar un objeto del tipo PREGUNTAS en la base de datos
    ''' </summary>
    Public Sub Insertar(ByVal PRE As PREGUNTA)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_PREGUNTA_INSERTAR")
            sp.AgregarParametro("PK_USUARIO", PRE.propiedad_PK_USUARIO)
            sp.AgregarParametro("PRE_TEMA", PRE.propiedad_PRE_TEMA)
            sp.AgregarParametro("PRE_GLOSA", PRE.propiedad_PRE_GLOSA)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite listar las preguntas activas del objeto del tipo PREGUNTAS existenes en la base de datos
    ''' </summary>
    Public Function Listar_Preguntas_Activas(ByVal Perfil As Integer, ByVal PRE As PREGUNTA) As Data.DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_PREGUNTA_LISTAR_PREGUNTA_ACTIVA")
            sp.AgregarParametro("PK_TIPO_USUARIO", Perfil)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

    ''' <summary>
    ''' Permite listar las preguntas respondidas del objeto del tipo PREGUNTAS existenes en la base de datos
    ''' </summary>
    Public Function Listar_Preguntas_Respondidas(ByVal PRE As PREGUNTA) As Data.DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_PREGUNTA_LISTAR_PREGUNTA_RESPONDIDA")
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#End Region

End Class

