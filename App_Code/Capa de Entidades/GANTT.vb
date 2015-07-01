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
Public Class GANTT

#Region "ATRIBUTOS DE LA CLASE"
    Private Sistema As Integer
    Private Año As Integer
    Private ID As Integer
    Private ID_P As Integer ' Atributo de GES_GANT_ACTIVIDADES
    Private ID_H As Integer ' Atributo de GES_GANT_ACTIVIDADES
    Private ID_S As Integer ' Atributo de GES_GANT_ACTIVIDADES
    Private ID_A As Integer ' Atributo de GES_GANT_ACTIVIDADES
    Private ID_old As Integer
    Private Hito As String
    Private Actividad As String
    Private Detalle_Actividad As String
    Private Producto As String
    Private Perfil As String
    Private Usuario As String
    Private FechaInicio As String
    Private FechaTermino As String
    Private Operacion As String
#End Region


#Region "PROPIEDADES DE LA CLASE"

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Operacion
    ''' </summary>
    Public Property propiedad_Operacion() As String
        Get
            Return Operacion
        End Get
        Set(ByVal value As String)
            Operacion = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo PK_NOTICIA
    ''' </summary>
    Public Property propiedad_Sistema() As Integer
        Get
            Return Sistema
        End Get
        Set(ByVal value As Integer)
            Sistema = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo PK_USUARIO
    ''' </summary>
    Public Property propiedad_ID() As Integer
        Get
            Return ID
        End Get
        Set(ByVal value As Integer)
            ID = value
        End Set
    End Property
    Public Property propiedad_ID_S() As Integer
        Get
            Return ID_S
        End Get
        Set(ByVal value As Integer)
            ID_S = value
        End Set
    End Property
    Public Property propiedad_ID_P() As Integer
        Get
            Return ID_P
        End Get
        Set(ByVal value As Integer)
            ID_P = value
        End Set
    End Property
    Public Property propiedad_ID_A() As Integer
        Get
            Return ID_A
        End Get
        Set(ByVal value As Integer)
            ID_A = value
        End Set
    End Property
    Public Property propiedad_ID_H() As Integer
        Get
            Return ID_H
        End Get
        Set(ByVal value As Integer)
            ID_H = value
        End Set
    End Property

    Public Property propiedad_ID_old() As Integer
        Get
            Return ID_old
        End Get
        Set(ByVal value As Integer)
            ID_old = value
        End Set
    End Property
    Public Property propiedad_Año() As Integer
        Get
            Return Año
        End Get
        Set(ByVal value As Integer)
            Año = value
        End Set
    End Property
    ''' <summary>
    ''' Obtiene o establece el valor del atributo NOT_FECHA
    ''' </summary>
    Public Property propiedad_Hito() As String
        Get
            Return Hito
        End Get
        Set(ByVal value As String)
            Hito = value
        End Set
    End Property
    Public Property propiedad_Actividad() As String
        Get
            Return Actividad
        End Get
        Set(ByVal value As String)
            Actividad = value
        End Set
    End Property

    Public Property propiedad_Detalle_Actividad() As String
        Get
            Return Detalle_Actividad
        End Get
        Set(ByVal value As String)
            Detalle_Actividad = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo NOT_TITULO
    ''' </summary>
    Public Property propiedad_Producto() As String
        Get
            Return Producto
        End Get
        Set(ByVal value As String)
            Producto = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo NOT_ADJUNTO
    ''' </summary>
    Public Property propiedad_Perfil() As String
        Get
            Return Perfil
        End Get
        Set(ByVal value As String)
            Perfil = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo NOT_GLOSA
    ''' </summary>
    Public Property propiedad_Usuario() As String
        Get
            Return Usuario
        End Get
        Set(ByVal value As String)
            Usuario = value
        End Set
    End Property

    Public Property propiedad_FechaInicio() As String
        Get
            Return FechaInicio
        End Get
        Set(ByVal value As String)
            FechaInicio = value
        End Set
    End Property

    Public Property propiedad_FechaTermino() As String
        Get
            Return FechaTermino
        End Get
        Set(ByVal value As String)
            FechaTermino = value
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
