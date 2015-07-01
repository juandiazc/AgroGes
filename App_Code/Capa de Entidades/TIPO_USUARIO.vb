Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos TIPO_USUARIO
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class TIPO_USUARIO

#Region "ATRIBUTOS DE LA CLASE"

    Private PK_TIPO_USUARIO As Integer
    Private TIPUSU_GLOSA As String

#End Region

#Region "PROPIEDADES DE LA CLASE"

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
    ''' Obtiene o establece el valor del atributo TIPUSU_GLOSA
    ''' </summary>
    Public Property propiedad_TIPUSU_GLOSA() As String
        Get
            Return TIPUSU_GLOSA
        End Get
        Set(ByVal value As String)
            TIPUSU_GLOSA = value
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
