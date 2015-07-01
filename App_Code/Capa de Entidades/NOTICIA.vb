Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos NOTICIA
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class NOTICIA

#Region "ATRIBUTOS DE LA CLASE"
    Private PK_NOTICIA As Integer
    Private PK_USUARIO As String
    Private NOT_FECHA As Date
    Private NOT_TITULO As String
    Private NOT_ADJUNTO As String
    Private NOT_GLOSA As String
#End Region

#Region "PROPIEDADES DE LA CLASE"

    ''' <summary>
    ''' Obtiene o establece el valor del atributo PK_NOTICIA
    ''' </summary>
    Public Property propiedad_PK_NOTICIA() As Integer
        Get
            Return PK_NOTICIA
        End Get
        Set(ByVal value As Integer)
            PK_NOTICIA = value
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
    ''' Obtiene o establece el valor del atributo NOT_FECHA
    ''' </summary>
    Public Property propiedad_NOT_FECHA() As Date
        Get
            Return NOT_FECHA
        End Get
        Set(ByVal value As Date)
            NOT_FECHA = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo NOT_TITULO
    ''' </summary>
    Public Property propiedad_NOT_TITULO() As String
        Get
            Return NOT_TITULO
        End Get
        Set(ByVal value As String)
            NOT_TITULO = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo NOT_ADJUNTO
    ''' </summary>
    Public Property propiedad_NOT_ADJUNTO() As String
        Get
            Return NOT_ADJUNTO
        End Get
        Set(ByVal value As String)
            NOT_ADJUNTO = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo NOT_GLOSA
    ''' </summary>
    Public Property propiedad_NOT_GLOSA() As String
        Get
            Return NOT_GLOSA
        End Get
        Set(ByVal value As String)
            NOT_GLOSA = value
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
