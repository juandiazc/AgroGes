Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad GLO_EstadoEstablecimiento
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
Public Class GLO_TipoJustificacion_DAO

#Region "METODOS DE ACCESO A DATOS"

    ''' <summary>
    ''' Permite insertar un objeto del tipo GLO_EstadoEstablecimiento en la base de datos
    ''' </summary>
    Public Sub Insertar(ByVal GLO As GLO_TipoJustificacion)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GLO_TipoJustificacion_INSERTAR")
            sp.AgregarParametro("Cod_EstEstablecimiento", GLO.propiedad_Cod_TipoJustificacion)
            sp.AgregarParametro("Glosa_EstEstablecimiento", GLO.propiedad_Glosa_TipoJustificacion)
            sp.AgregarParametro("orden", GLO.propiedad_orden)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite modificar un objeto del tipo GLO_EstadoEstablecimiento en la base de datos
    ''' </summary>
    Public Sub Modificar(ByVal GLO As GLO_TipoJustificacion)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GLO_TipoJustificacion_MODIFICAR")
            sp.AgregarParametro("Cod_EstEstablecimiento", GLO.propiedad_Cod_TipoJustificacion)
            sp.AgregarParametro("Glosa_EstEstablecimiento", GLO.propiedad_Glosa_TipoJustificacion)
            sp.AgregarParametro("orden", GLO.propiedad_orden)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite eliminar un objeto del tipo GLO_EstadoEstablecimiento en la base de datos
    ''' </summary>
    Public Sub Eliminar(ByVal GLO As GLO_TipoJustificacion)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GLO_TipoJustificacion_ELIMINAR")
            sp.AgregarParametro("", "")
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite listar todos los objeto del tipo GLO_EstadoEstablecimiento existenes en la base de datos
    ''' </summary>
    Public Function Listar() As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GLO_TipoJustificacion_LISTAR")
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#End Region

End Class

