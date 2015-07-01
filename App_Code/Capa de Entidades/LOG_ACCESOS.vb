Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos LOG_ACCESOS
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/02/2010
''' </history>
Public Class LOG_ACCESOS

#Region "ATRIBUTOS DE LA CLASE"

    Private PK_LOG_ACCESO As Integer
    Private PK_USUARIO As String
    Private LOGACC_FECHA As Date
    Private LOGACC_IP As String
    Private usuario As String

#End Region

#Region "PROPIEDADES DE LA CLASE"

    ''' <summary>
    ''' Obtiene o establece el valor del atributo PK_LOG_ACCESO
    ''' </summary>
    Public Property propiedad_PK_LOG_ACCESO() As Integer
        Get
            Return PK_LOG_ACCESO
        End Get
        Set(ByVal value As Integer)
            PK_LOG_ACCESO = value
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
    ''' Obtiene o establece el valor del atributo LOGACC_FECHA
    ''' </summary>
    Public Property propiedad_LOGACC_FECHA() As Date
        Get
            Return LOGACC_FECHA
        End Get
        Set(ByVal value As Date)
            LOGACC_FECHA = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo LOGACC_IP
    ''' </summary>
    Public Property propiedad_LOGACC_IP() As String
        Get
            Return LOGACC_IP
        End Get
        Set(ByVal value As String)
            LOGACC_IP = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo LOGACC_IP
    ''' </summary>
    Public Property propiedad_usuario() As String
        Get
            Return usuario
        End Get
        Set(ByVal value As String)
            usuario = value
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
