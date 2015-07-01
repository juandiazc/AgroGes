Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos LOG_ERRORES
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class LOG_ERRORES

#Region "ATRIBUTOS DE LA CLASE"

    Private PK_LOG_ERRORES As Integer
    Private PK_USUARIO As String
    Private LOGERR_TIPO As String
    Private LOGERR_PAGINA As String
    Private LOGERR_MENSAJE As String
    Private LOGERR_METODO As String
    Private LOGERR_FECHA As Date

#End Region

#Region "PROPIEDADES DE LA CLASE"

    ''' <summary>
    ''' Obtiene o establece el valor del atributo PK_LOG_ERRORES
    ''' </summary>
    Public Property propiedad_PK_LOG_ERRORES() As Integer
        Get
            Return PK_LOG_ERRORES
        End Get
        Set(ByVal value As Integer)
            PK_LOG_ERRORES = value
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
    ''' Obtiene o establece el valor del atributo LOGERR_TIPO
    ''' </summary>
    Public Property propiedad_LOGERR_TIPO() As String
        Get
            Return LOGERR_TIPO
        End Get
        Set(ByVal value As String)
            LOGERR_TIPO = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo LOGERR_PAGINA
    ''' </summary>
    Public Property propiedad_LOGERR_PAGINA() As String
        Get
            Return LOGERR_PAGINA
        End Get
        Set(ByVal value As String)
            LOGERR_PAGINA = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo LOGERR_MENSAJE
    ''' </summary>
    Public Property propiedad_LOGERR_MENSAJE() As String
        Get
            Return LOGERR_MENSAJE
        End Get
        Set(ByVal value As String)
            LOGERR_MENSAJE = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo LOGERR_METODO
    ''' </summary>
    Public Property propiedad_LOGERR_METODO() As String
        Get
            Return LOGERR_METODO
        End Get
        Set(ByVal value As String)
            LOGERR_METODO = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo LOGERR_FECHA
    ''' </summary>
    Public Property propiedad_LOGERR_FECHA() As Date
        Get
            Return LOGERR_FECHA
        End Get
        Set(ByVal value As Date)
            LOGERR_FECHA = value
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
