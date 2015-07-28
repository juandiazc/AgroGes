Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad NOTICIA
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class GANTT_DAO

#Region "METODOS DE ACCESO A DATOS"

    ''' <summary>
    ''' Permite insertar un objeto del tipo NOTICIA en la base de datos
    ''' </summary>
    Public Sub Insertar(ByVal NOTI As GANTT)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GANTT_INSERTAR")
            sp.AgregarParametro("Sistema", NOTI.propiedad_Sistema)            
            sp.AgregarParametro("ID", NOTI.propiedad_ID)
            sp.AgregarParametro("Hito", NOTI.propiedad_Hito)
            sp.AgregarParametro("Actividad", NOTI.propiedad_Actividad)
            sp.AgregarParametro("Detalle_Actividad", NOTI.propiedad_Detalle_Actividad)            
            sp.AgregarParametro("Perfil", NOTI.propiedad_Perfil)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite modificar un objeto del tipo NOTICIA en la base de datos
    ''' </summary>
    Public Sub Modificar(ByVal NOTI As GANTT)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GANTT_MODIFICAR")
            sp.AgregarParametro("Sistema", NOTI.propiedad_Sistema)
            sp.AgregarParametro("ID", NOTI.propiedad_ID)
            sp.AgregarParametro("Hito", NOTI.propiedad_Hito)
            sp.AgregarParametro("Actividad", NOTI.propiedad_Actividad)
            sp.AgregarParametro("Detalle_Actividad", NOTI.propiedad_Detalle_Actividad)
            sp.AgregarParametro("Perfil", NOTI.propiedad_Perfil)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite eliminar un objeto del tipo NOTICIA en la base de datos
    ''' </summary>
    Public Sub Eliminar(ByVal NOTI As GANTT)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GANTT_ELIMINAR")
            sp.AgregarParametro("ID", NOTI.propiedad_ID)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite listar todos los objeto del tipo NOTICIA existenes en la base de datos
    ''' </summary>
    Public Function Listar(ByVal NOTI As GANTT) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GANTT_LISTAR")
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarCheck(ByVal NOTI As GANTT) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GANTT_LISTAR_Check")
            sp.AgregarParametro("Sistema", NOTI.propiedad_Sistema)
            sp.AgregarParametro("Hito", NOTI.propiedad_ID_H)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarDetalle(ByVal NOTI As GANTT) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GANTT_LISTAR_DETALLE")
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarVitacora(ByVal NOTI As GANTT) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GANTT_LISTAR_VITACORA")
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarCheck2(ByVal NOTI As GANTT) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GANTT_LISTAR_Check2")
            sp.AgregarParametro("Sistema", NOTI.propiedad_ID_S)
            'sp.AgregarParametro("Hito", NOTI.propiedad_ID_H)
            sp.AgregarParametro("Año", NOTI.propiedad_ID_A)
            sp.AgregarParametro("Producto", NOTI.propiedad_ID_P)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarCheck3(ByVal NOTI As GANTT) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GANTT_LISTAR_OPERACIONES")
            sp.AgregarParametro("Sistema", NOTI.propiedad_Sistema)
            sp.AgregarParametro("Año", NOTI.propiedad_ID_A)
            sp.AgregarParametro("Producto", NOTI.propiedad_ID_P)
            sp.AgregarParametro("Hito", NOTI.propiedad_ID_H)
            sp.AgregarParametro("Operacion", NOTI.propiedad_Operacion)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarCheck4(ByVal NOTI As GANTT) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GANTT_LISTAR_OPERACIONES_2")
            sp.AgregarParametro("Sistema", NOTI.propiedad_Sistema)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
#End Region

End Class
