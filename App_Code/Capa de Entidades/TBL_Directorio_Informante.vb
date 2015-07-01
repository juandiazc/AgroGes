Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos TBL_Directorio_Informante
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class TBL_Directorio_Informante

#REGION "ATRIBUTOS DE LA CLASE"

   Private Año as Integer
   Private Mes as string
   Private Rol as Integer
   Private NomInformante as string
   Private CargoInformante as string
   Private FonoInformante as string
   Private FaxInformante as string
   Private EmailInformante as string
   Private Observacion as string

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
   ''' Obtiene o establece el valor del atributo Rol
   ''' </summary>
   Public Property propiedad_Rol() As Integer
       Get
           return Rol
       End Get
       Set(ByVal value As Integer)
           Rol = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo NomInformante
   ''' </summary>
   Public Property propiedad_NomInformante() As string
       Get
           return NomInformante
       End Get
       Set(ByVal value As string)
           NomInformante = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo CargoInformante
   ''' </summary>
   Public Property propiedad_CargoInformante() As string
       Get
           return CargoInformante
       End Get
       Set(ByVal value As string)
           CargoInformante = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo FonoInformante
   ''' </summary>
   Public Property propiedad_FonoInformante() As string
       Get
           return FonoInformante
       End Get
       Set(ByVal value As string)
           FonoInformante = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo FaxInformante
   ''' </summary>
   Public Property propiedad_FaxInformante() As string
       Get
           return FaxInformante
       End Get
       Set(ByVal value As string)
           FaxInformante = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo EmailInformante
   ''' </summary>
   Public Property propiedad_EmailInformante() As string
       Get
           return EmailInformante
       End Get
       Set(ByVal value As string)
           EmailInformante = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Observacion
   ''' </summary>
   Public Property propiedad_Observacion() As string
       Get
           return Observacion
       End Get
       Set(ByVal value As string)
           Observacion = value
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
