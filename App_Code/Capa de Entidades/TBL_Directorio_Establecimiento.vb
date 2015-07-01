Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos TBL_Directorio_Establecimiento
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class TBL_Directorio_Establecimiento


    Private Año As Integer
    Private Mes As String
    Private Rol As Integer
    Private DvRol As String
    Private Rut_Empresa As Integer
    Private NombreEstablecimiento As String
    Private DireccionEstablecimiento As String
    Private Region As String
    Private Provincia As String
    Private Comuna As String
    Private Ciudad As String
    Private Fono As String
    Private Fono_Celular As String
    Private Fax As String
    Private DireccionWeb As String
    Private Email As String
    Private CodActivEconomica As String
    Private EstadoEstablecimiento As String
    Private TipoFaltanteJustificada As String
    Private Seleccion_Muestra As String
    Private TramiteInterno As String
    Private CIIU_R3 As Integer
    Private Usuario As String

#Region "PROPIEDADES DE LA CLASE"

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Año
    ''' </summary>
    Public Property propiedad_Año() As Integer
        Get
            Return Año
        End Get
        Set(ByVal value As Integer)
            Año = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Mes
    ''' </summary>
    Public Property propiedad_Mes() As String
        Get
            Return Mes
        End Get
        Set(ByVal value As String)
            Mes = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Rol
    ''' </summary>
    Public Property propiedad_Rol() As Integer
        Get
            Return Rol
        End Get
        Set(ByVal value As Integer)
            Rol = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo DvRol
    ''' </summary>
    Public Property propiedad_Rut_Empresa() As Integer
        Get
            Return Rut_Empresa
        End Get
        Set(ByVal value As Integer)
            Rut_Empresa = value
        End Set
    End Property
    Public Property propiedad_DvRol() As String
        Get
            Return DvRol
        End Get
        Set(ByVal value As String)
            DvRol = value
        End Set
    End Property
    ''' <summary>
    ''' Obtiene o establece el valor del atributo NombreEstablecimiento
    ''' </summary>
    Public Property propiedad_NombreEstablecimiento() As String
        Get
            Return NombreEstablecimiento
        End Get
        Set(ByVal value As String)
            NombreEstablecimiento = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo DireccionEstablecimiento
    ''' </summary>
    Public Property propiedad_DireccionEstablecimiento() As String
        Get
            Return DireccionEstablecimiento
        End Get
        Set(ByVal value As String)
            DireccionEstablecimiento = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Region
    ''' </summary>
    Public Property propiedad_Region() As String
        Get
            Return Region
        End Get
        Set(ByVal value As String)
            Region = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Provincia
    ''' </summary>
    Public Property propiedad_Provincia() As String
        Get
            Return Provincia
        End Get
        Set(ByVal value As String)
            Provincia = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Comuna
    ''' </summary>
    Public Property propiedad_Comuna() As String
        Get
            Return Comuna
        End Get
        Set(ByVal value As String)
            Comuna = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Ciudad
    ''' </summary>
    Public Property propiedad_Ciudad() As String
        Get
            Return Ciudad
        End Get
        Set(ByVal value As String)
            Ciudad = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Fono
    ''' </summary>
    Public Property propiedad_Fono() As String
        Get
            Return Fono
        End Get
        Set(ByVal value As String)
            Fono = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Fono_Celular
    ''' </summary>
    Public Property propiedad_Fono_Celular() As String
        Get
            Return Fono_Celular
        End Get
        Set(ByVal value As String)
            Fono_Celular = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Fax
    ''' </summary>
    Public Property propiedad_Fax() As String
        Get
            Return Fax
        End Get
        Set(ByVal value As String)
            Fax = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo DireccionWeb
    ''' </summary>
    Public Property propiedad_DireccionWeb() As String
        Get
            Return DireccionWeb
        End Get
        Set(ByVal value As String)
            DireccionWeb = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo Email
    ''' </summary>
    Public Property propiedad_Email() As String
        Get
            Return Email
        End Get
        Set(ByVal value As String)
            Email = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo CodActivEconomica
    ''' </summary>
    Public Property propiedad_CodActivEconomica() As String
        Get
            Return CodActivEconomica
        End Get
        Set(ByVal value As String)
            CodActivEconomica = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo EstadoEstablecimiento
    ''' </summary>
    Public Property propiedad_EstadoEstablecimiento() As String
        Get
            Return EstadoEstablecimiento
        End Get
        Set(ByVal value As String)
            EstadoEstablecimiento = value
        End Set
    End Property
    ''' <summary>
    ''' Obtiene o establece el valor del atributo Seleccion_Muestra
    ''' </summary>
    Public Property propiedad_TipoFaltanteJustificada() As String
        Get
            Return TipoFaltanteJustificada
        End Get
        Set(ByVal value As String)
            TipoFaltanteJustificada = value
        End Set
    End Property
    ''' <summary>
    ''' Obtiene o establece el valor del atributo Seleccion_Muestra
    ''' </summary>
    Public Property propiedad_Seleccion_Muestra() As String
        Get
            Return Seleccion_Muestra
        End Get
        Set(ByVal value As String)
            Seleccion_Muestra = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el valor del atributo TramiteInterno
    ''' </summary>
    Public Property propiedad_TramiteInterno() As String
        Get
            Return TramiteInterno
        End Get
        Set(ByVal value As String)
            TramiteInterno = value
        End Set
    End Property
    Public Property propiedad_CIIU_R3() As Integer
        Get
            Return CIIU_R3
        End Get
        Set(ByVal value As Integer)
            CIIU_R3 = value
        End Set
    End Property
    Public Property propiedad_Usuario() As String
        Get
            Return Usuario
        End Get
        Set(ByVal value As String)
            Usuario = value
        End Set
    End Property
#End Region

#REGION "CONSTRUCTORES DE LA CLASE"

   ''' <summary>
   ''' Crea una instancia vacia del objeto
   ''' </summary>
   Public Sub New()

   End Sub

#END REGION

end class
