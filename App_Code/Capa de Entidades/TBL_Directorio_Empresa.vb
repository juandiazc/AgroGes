Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos TBL_Directorio_Empresa
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13-08-2010
''' </history>
public class TBL_Directorio_Empresa

#REGION "ATRIBUTOS DE LA CLASE"

   Private Año as Integer
   Private Mes as string
   Private Rut as Integer
   Private DvRut as string
   Private RazonSocial as string
   Private NombreFantasia as string
   Private RepresentanteLegal as string
   Private Rut_RLegal as Integer
   Private DvRut_RLegal as string
   Private Direccion as string
   Private Ciudad as string
   Private Region as string
   Private Provincia as Int16
   Private Comuna as Integer
   Private Fono as string
   Private FonoCelular as string
   Private Fax as string
   Private Email as string
   Private DireccionWeb as string
   Private OrganizacionJuridica as string
   Private FormaPropiedad as Int16
   Private TipoActivEconomica as Integer
   Private CodActivEconomica as string
   Private EstadoEmpresa as string
   Private CIIU_R3 as Integer

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Año
   ''' </summary>
   Public Property propiedad_Año() As Integer
       Get
           return Año
       End Get
       Set(ByVal value As Integer)
           Año = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Mes
   ''' </summary>
   Public Property propiedad_Mes() As string
       Get
           return Mes
       End Get
       Set(ByVal value As string)
           Mes = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Rut
   ''' </summary>
   Public Property propiedad_Rut() As Integer
       Get
           return Rut
       End Get
       Set(ByVal value As Integer)
           Rut = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo DvRut
   ''' </summary>
   Public Property propiedad_DvRut() As string
       Get
           return DvRut
       End Get
       Set(ByVal value As string)
           DvRut = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo RazonSocial
   ''' </summary>
   Public Property propiedad_RazonSocial() As string
       Get
           return RazonSocial
       End Get
       Set(ByVal value As string)
           RazonSocial = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo NombreFantasia
   ''' </summary>
   Public Property propiedad_NombreFantasia() As string
       Get
           return NombreFantasia
       End Get
       Set(ByVal value As string)
           NombreFantasia = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo RepresentanteLegal
   ''' </summary>
   Public Property propiedad_RepresentanteLegal() As string
       Get
           return RepresentanteLegal
       End Get
       Set(ByVal value As string)
           RepresentanteLegal = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Rut_RLegal
   ''' </summary>
   Public Property propiedad_Rut_RLegal() As Integer
       Get
           return Rut_RLegal
       End Get
       Set(ByVal value As Integer)
           Rut_RLegal = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo DvRut_RLegal
   ''' </summary>
   Public Property propiedad_DvRut_RLegal() As string
       Get
           return DvRut_RLegal
       End Get
       Set(ByVal value As string)
           DvRut_RLegal = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Direccion
   ''' </summary>
   Public Property propiedad_Direccion() As string
       Get
           return Direccion
       End Get
       Set(ByVal value As string)
           Direccion = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Ciudad
   ''' </summary>
   Public Property propiedad_Ciudad() As string
       Get
           return Ciudad
       End Get
       Set(ByVal value As string)
           Ciudad = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Region
   ''' </summary>
   Public Property propiedad_Region() As string
       Get
           return Region
       End Get
       Set(ByVal value As string)
           Region = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Provincia
   ''' </summary>
   Public Property propiedad_Provincia() As Int16
       Get
           return Provincia
       End Get
       Set(ByVal value As Int16)
           Provincia = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Comuna
   ''' </summary>
   Public Property propiedad_Comuna() As Integer
       Get
           return Comuna
       End Get
       Set(ByVal value As Integer)
           Comuna = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Fono
   ''' </summary>
   Public Property propiedad_Fono() As string
       Get
           return Fono
       End Get
       Set(ByVal value As string)
           Fono = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo FonoCelular
   ''' </summary>
   Public Property propiedad_FonoCelular() As string
       Get
           return FonoCelular
       End Get
       Set(ByVal value As string)
           FonoCelular = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Fax
   ''' </summary>
   Public Property propiedad_Fax() As string
       Get
           return Fax
       End Get
       Set(ByVal value As string)
           Fax = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Email
   ''' </summary>
   Public Property propiedad_Email() As string
       Get
           return Email
       End Get
       Set(ByVal value As string)
           Email = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo DireccionWeb
   ''' </summary>
   Public Property propiedad_DireccionWeb() As string
       Get
           return DireccionWeb
       End Get
       Set(ByVal value As string)
           DireccionWeb = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo OrganizacionJuridica
   ''' </summary>
   Public Property propiedad_OrganizacionJuridica() As string
       Get
           return OrganizacionJuridica
       End Get
       Set(ByVal value As string)
           OrganizacionJuridica = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo FormaPropiedad
   ''' </summary>
   Public Property propiedad_FormaPropiedad() As Int16
       Get
           return FormaPropiedad
       End Get
       Set(ByVal value As Int16)
           FormaPropiedad = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo TipoActivEconomica
   ''' </summary>
   Public Property propiedad_TipoActivEconomica() As Integer
       Get
           return TipoActivEconomica
       End Get
       Set(ByVal value As Integer)
           TipoActivEconomica = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo CodActivEconomica
   ''' </summary>
   Public Property propiedad_CodActivEconomica() As string
       Get
           return CodActivEconomica
       End Get
       Set(ByVal value As string)
           CodActivEconomica = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo EstadoEmpresa
   ''' </summary>
   Public Property propiedad_EstadoEmpresa() As string
       Get
           return EstadoEmpresa
       End Get
       Set(ByVal value As string)
           EstadoEmpresa = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo CIIU_R3
   ''' </summary>
   Public Property propiedad_CIIU_R3() As Integer
       Get
           return CIIU_R3
       End Get
       Set(ByVal value As Integer)
           CIIU_R3 = value
       End Set
   End Property

#END REGION

#REGION "CONSTRUCTORES DE LA CLASE"

   ''' <summary>
   ''' Crea una instancia vacia del objeto
   ''' </summary>
   Public Sub New()

   End Sub

#END REGION

end class
