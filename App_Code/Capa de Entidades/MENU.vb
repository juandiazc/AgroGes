Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos MENU
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class MENU

#Region "ATRIBUTOS DE LA CLASE"

    Private PK_MENUID As Integer
    Private MEN_DESCRIPCION As String
    Private MEN_PADRE As Integer
    Private MEN_POSICION As Integer
    Private MEN_NIVEL As Integer
    Private MEN_HABILITADO As Integer
    Private MEN_URL As String
    Private MEN_FECHA_CREACION As Date
    Private MEN_USUARIO_CREACION As String
    Private MEN_FECHA_MODIFICACION As Date
    Private MEN_USUARIO_MODIFICACION As String

#End Region

#Region "PROPIEDADES DE LA CLASE"

    ''' <summary>
    ''' Obtiene o establece el valor del atributo PK_MENUID
    ''' </summary>
    Public Property propiedad_PK_MENUID() As Integer
        Get
            Return PK_MENUID
        End Get
        Set(ByVal value As Integer)
            PK_MENUID = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo MEN_DESCRIPCION
    ''' </summary>
    Public Property propiedad_MEN_DESCRIPCION() As String
        Get
            Return MEN_DESCRIPCION
        End Get
        Set(ByVal value As String)
            MEN_DESCRIPCION = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo MEN_PADRE
    ''' </summary>
    Public Property propiedad_MEN_PADRE() As Integer
        Get
            Return MEN_PADRE
        End Get
        Set(ByVal value As Integer)
            MEN_PADRE = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo MEN_POSICION
    ''' </summary>
    Public Property propiedad_MEN_POSICION() As Integer
        Get
            Return MEN_POSICION
        End Get
        Set(ByVal value As Integer)
            MEN_POSICION = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo MEN_NIVEL
    ''' </summary>
    Public Property propiedad_MEN_NIVEL() As Integer
        Get
            Return MEN_NIVEL
        End Get
        Set(ByVal value As Integer)
            MEN_NIVEL = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo MEN_HABILITADO
    ''' </summary>
    Public Property propiedad_MEN_HABILITADO() As Integer
        Get
            Return MEN_HABILITADO
        End Get
        Set(ByVal value As Integer)
            MEN_HABILITADO = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo MEN_URL
    ''' </summary>
    Public Property propiedad_MEN_URL() As String
        Get
            Return MEN_URL
        End Get
        Set(ByVal value As String)
            MEN_URL = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo MEN_FECHA_CREACION
    ''' </summary>
    Public Property propiedad_MEN_FECHA_CREACION() As Date
        Get
            Return MEN_FECHA_CREACION
        End Get
        Set(ByVal value As Date)
            MEN_FECHA_CREACION = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo MEN_USUARIO_CREACION
    ''' </summary>
    Public Property propiedad_MEN_USUARIO_CREACION() As String
        Get
            Return MEN_USUARIO_CREACION
        End Get
        Set(ByVal value As String)
            MEN_USUARIO_CREACION = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo MEN_FECHA_MODIFICACION
    ''' </summary>
    Public Property propiedad_MEN_FECHA_MODIFICACION() As Date
        Get
            Return MEN_FECHA_MODIFICACION
        End Get
        Set(ByVal value As Date)
            MEN_FECHA_MODIFICACION = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo MEN_USUARIO_MODIFICACION
    ''' </summary>
    Public Property propiedad_MEN_USUARIO_MODIFICACION() As String
        Get
            Return MEN_USUARIO_MODIFICACION
        End Get
        Set(ByVal value As String)
            MEN_USUARIO_MODIFICACION = value
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
