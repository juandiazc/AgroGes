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
Public Class NOTICIA_DAO

#Region "METODOS DE ACCESO A DATOS"

    ''' <summary>
    ''' Permite insertar un objeto del tipo NOTICIA en la base de datos
    ''' </summary>
    Public Sub Insertar(ByVal NOTI As NOTICIA)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_NOTICIA_INSERTAR")
            sp.AgregarParametro("PK_USUARIO", NOTI.propiedad_PK_USUARIO)
            sp.AgregarParametro("NOT_TITULO", NOTI.propiedad_NOT_TITULO)
            sp.AgregarParametro("NOT_ADJUNTO", NOTI.propiedad_NOT_ADJUNTO)
            sp.AgregarParametro("NOT_GLOSA", NOTI.propiedad_NOT_GLOSA)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite modificar un objeto del tipo NOTICIA en la base de datos
    ''' </summary>
    Public Sub Modificar(ByVal NOTI As NOTICIA)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_NOTICIA_MODIFICAR")
            sp.AgregarParametro("PK_NOTICIA", NOTI.propiedad_PK_NOTICIA)
            sp.AgregarParametro("NOT_TITULO", NOTI.propiedad_NOT_TITULO)
            sp.AgregarParametro("NOT_ADJUNTO", NOTI.propiedad_NOT_ADJUNTO)
            sp.AgregarParametro("NOT_GLOSA", NOTI.propiedad_NOT_GLOSA)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite eliminar un objeto del tipo NOTICIA en la base de datos
    ''' </summary>
    Public Sub Eliminar(ByVal NOTI As NOTICIA)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_NOTICIA_ELIMINAR")
            sp.AgregarParametro("PK_NOTICIA", NOTI.propiedad_PK_NOTICIA)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite listar todos los objeto del tipo NOTICIA existenes en la base de datos
    ''' </summary>
    Public Function Listar(ByVal NOTI As NOTICIA) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_NOTICIA_LISTAR")
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#End Region

End Class
