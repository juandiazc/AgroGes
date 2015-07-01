Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad RESPUESTAS
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class RESPUESTA_DAO

#Region "METODOS DE ACCESO A DATOS"

    ''' <summary>
    ''' Permite insertar un objeto del tipo RESPUESTAS en la base de datos
    ''' </summary>
    Public Sub Insertar(ByVal RES As RESPUESTA)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_RESPUESTA_INSERTAR")
            sp.AgregarParametro("PK_USUARIO", RES.propiedad_PK_USUARIO)
            sp.AgregarParametro("PK_PREGUNTA", RES.propiedad_PK_PREGUNTA)
            sp.AgregarParametro("RES_GLOSA", RES.propiedad_RES_GLOSA)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite modificar un objeto del tipo RESPUESTAS en la base de datos
    ''' </summary>
    Public Sub Modificar(ByVal RES As RESPUESTA)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_RESPUESTAS_MODIFICAR")
            sp.AgregarParametro("PK_RESPUESTA", RES.propiedad_PK_RESPUESTA)
            sp.AgregarParametro("PK_USUARIO", RES.propiedad_PK_USUARIO)
            sp.AgregarParametro("RES_GLOSA", RES.propiedad_RES_GLOSA)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite eliminar un objeto del tipo RESPUESTAS en la base de datos
    ''' </summary>
    Public Sub Eliminar(ByVal RES As RESPUESTA)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_RESPUESTAS_ELIMINAR")
            sp.AgregarParametro("", "")
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub
#End Region

End Class

