Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos USUARIO
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class USUARIO

#Region "ATRIBUTOS DE LA CLASE"

    Private PK_USUARIO As String
    Private PK_ESTADO_USUARIO As Integer
    Private PK_TIPO_USUARIO As Integer
    Private USU_PASS As String
    Private USU_NOMBRE As String
    Private USU_APE_PAT As String
    Private USU_APE_MAT As String
    Private USU_EMAIL As String

#End Region

#Region "PROPIEDADES DE LA CLASE"

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
    ''' Obtiene o establece el valor del atributo PK_TIPO_USUARIO
    ''' </summary>
    Public Property propiedad_PK_TIPO_USUARIO() As Integer
        Get
            Return PK_TIPO_USUARIO
        End Get
        Set(ByVal value As Integer)
            PK_TIPO_USUARIO = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo USU_PASS
    ''' </summary>
    Public Property propiedad_USU_PASS() As String
        Get
            Return USU_PASS
        End Get
        Set(ByVal value As String)
            USU_PASS = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo USU_NOMBRE
    ''' </summary>
    Public Property propiedad_USU_NOMBRE() As String
        Get
            Return USU_NOMBRE
        End Get
        Set(ByVal value As String)
            USU_NOMBRE = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo USU_APE_PAT
    ''' </summary>
    Public Property propiedad_USU_APE_PAT() As String
        Get
            Return USU_APE_PAT
        End Get
        Set(ByVal value As String)
            USU_APE_PAT = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo USU_APE_MAT
    ''' </summary>
    Public Property propiedad_USU_APE_MAT() As String
        Get
            Return USU_APE_MAT
        End Get
        Set(ByVal value As String)
            USU_APE_MAT = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo USU_EMAIL
    ''' </summary>
    Public Property propiedad_USU_EMAIL() As String
        Get
            Return USU_EMAIL
        End Get
        Set(ByVal value As String)
            USU_EMAIL = value
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
