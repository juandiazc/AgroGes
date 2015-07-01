Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_EstadoEstablecimiento
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
Public Class GLO_TipoJustificacion

#Region "ATRIBUTOS DE LA CLASE"

    Private Cod_TipoJustificacion As String
    Private Glosa_TipoJustificacion As String
    Private orden As Integer

#End Region

#Region "PROPIEDADES DE LA CLASE"

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Cod_EstEstablecimiento
    ''' </summary>
    Public Property propiedad_Cod_TipoJustificacion() As String
        Get
            Return Cod_TipoJustificacion
        End Get
        Set(ByVal value As String)
            Cod_TipoJustificacion = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Glosa_EstEstablecimiento
    ''' </summary>
    Public Property propiedad_Glosa_TipoJustificacion() As String
        Get
            Return Glosa_TipoJustificacion
        End Get
        Set(ByVal value As String)
            Glosa_TipoJustificacion = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo orden
    ''' </summary>
    Public Property propiedad_orden() As Integer
        Get
            Return orden
        End Get
        Set(ByVal value As Integer)
            orden = value
        End Set
    End Property

#End Region

#Region "CONSTRUCTORES DE LA CLASE"

    ''' <summary>
    ''' Crea una instancia vacia del objeto
    ''' </summary>
    Public Sub New()

    End Sub

#End Region

End Class
