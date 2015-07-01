Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad GLO_EstadoEstablecimiento en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
Public Class GLO_TipoJustificacion_Negocio

#Region "METODOS DE LOGICA DE NEGOCIOS"

    ''' <summary>
    ''' Permite Modificar un objeto del tipoGLO_EstadoEstablecimiento_class en la aplicación
    ''' </summary>
    Public Sub Insertar(ByVal GLO As GLO_TipoJustificacion)
        Try
            Dim GLO_DAO As New GLO_TipoJustificacion_DAO
            GLO_DAO.Insertar(GLO)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite Modificar un objeto del tipoGLO_EstadoEstablecimiento en la aplicación
    ''' </summary>
    Public Sub Modificar(ByVal GLO As GLO_TipoJustificacion)
        Try
            Dim GLO_DAO As New GLO_TipoJustificacion_DAO
            GLO_DAO.Modificar(GLO)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite Eliminar un objeto del tipoGLO_EstadoEstablecimiento en la base de datos
    ''' </summary>
    ' Public Sub Eliminar(ByVal GLO As GLO_TipoJustificacion)
    '    Try
    'Dim GLO_DAO As New GLO_TipoJustificaciono_DAO
    '      GLO_DAO.Eliminar(GLO)
    '   Catch ex As Exception
    '     Throw New Exception(ex.Message)
    ' End Try
    'End Sub

    ''' <summary>
    ''' Permite Listar un objeto del tipoGLO_EstadoEstablecimiento en la base de datos
    ''' </summary>
    Public Function Listar(ByVal GLO As GLO_TipoJustificacion) As DataSet
        Try
            Dim GLO_DAO As New GLO_TipoJustificacion_DAO
            Return GLO_DAO.Listar()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#End Region

End Class

