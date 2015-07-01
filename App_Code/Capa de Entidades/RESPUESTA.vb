Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos RESPUESTAS
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class RESPUESTA

#Region "ATRIBUTOS DE LA CLASE"

    Private PK_RESPUESTA As Integer
    Private PK_USUARIO As String
    Private PK_PREGUNTA As Integer
    Private RES_FECHA As Date
    Private RES_GLOSA As String

#End Region

#Region "PROPIEDADES DE LA CLASE"

    ''' <summary>
    ''' Obtiene o establece el valor del atributo PK_RESPUESTA
    ''' </summary>
    Public Property propiedad_PK_RESPUESTA() As Integer
        Get
            Return PK_RESPUESTA
        End Get
        Set(ByVal value As Integer)
            PK_RESPUESTA = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo PK_USUARIO
    ''' </summary>
    Public Property propiedad_PK_USUARIO() As String
        Get
            Return PK_USUARIO
        End Get
        Set(ByVal value As String)
            PK_USUARIO = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo PK_PREGUNTA
    ''' </summary>
    Public Property propiedad_PK_PREGUNTA() As Integer
        Get
            Return PK_PREGUNTA
        End Get
        Set(ByVal value As Integer)
            PK_PREGUNTA = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo RES_FECHA
    ''' </summary>
    Public Property propiedad_RES_FECHA() As Date
        Get
            Return RES_FECHA
        End Get
        Set(ByVal value As Date)
            RES_FECHA = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo RES_GLOSA
    ''' </summary>
    Public Property propiedad_RES_GLOSA() As String
        Get
            Return RES_GLOSA
        End Get
        Set(ByVal value As String)
            RES_GLOSA = value
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
