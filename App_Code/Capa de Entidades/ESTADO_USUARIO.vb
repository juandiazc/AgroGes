Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos ESTADO_USUARIO
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class ESTADO_USUARIO

#Region "ATRIBUTOS DE LA CLASE"

    Private PK_ESTADO_USUARIO As Integer
    Private ESTUSU_GLOSA_ESTADO As String

#End Region

#Region "PROPIEDADES DE LA CLASE"

    ''' <summary>
    ''' Obtiene o establece el valor del atributo PK_ESTADO_USUARIO
    ''' </summary>
    Public Property propiedad_PK_ESTADO_USUARIO() As Integer
        Get
            Return PK_ESTADO_USUARIO
        End Get
        Set(ByVal value As Integer)
            PK_ESTADO_USUARIO = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo ESTUSU_GLOSA_ESTADO
    ''' </summary>
    Public Property propiedad_ESTUSU_GLOSA_ESTADO() As String
        Get
            Return ESTUSU_GLOSA_ESTADO
        End Get
        Set(ByVal value As String)
            ESTUSU_GLOSA_ESTADO = value
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
