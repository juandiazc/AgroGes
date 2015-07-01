Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos PREGUNTAS
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class PREGUNTA

#Region "ATRIBUTOS DE LA CLASE"

    Private PK_PREGUNTA As Integer
    Private PK_USUARIO As String
    Private PRE_FECHA As Date
    Private PRE_TEMA As String
    Private PRE_GLOSA As String
    Private PRE_ESTADO As Integer

#End Region

#Region "PROPIEDADES DE LA CLASE"

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
    ''' Obtiene o establece el valor del atributo PRE_FECHA
    ''' </summary>
    Public Property propiedad_PRE_FECHA() As Date
        Get
            Return PRE_FECHA
        End Get
        Set(ByVal value As Date)
            PRE_FECHA = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo PRE_TEMA
    ''' </summary>
    Public Property propiedad_PRE_TEMA() As String
        Get
            Return PRE_TEMA
        End Get
        Set(ByVal value As String)
            PRE_TEMA = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo PRE_GLOSA
    ''' </summary>
    Public Property propiedad_PRE_GLOSA() As String
        Get
            Return PRE_GLOSA
        End Get
        Set(ByVal value As String)
            PRE_GLOSA = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo PRE_ESTADO
    ''' </summary>
    Public Property propiedad_PRE_ESTADO() As Integer
        Get
            Return PRE_ESTADO
        End Get
        Set(ByVal value As Integer)
            PRE_ESTADO = value
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
