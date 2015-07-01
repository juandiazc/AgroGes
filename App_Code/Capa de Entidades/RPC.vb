Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos RPC
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class RPC

#REGION "ATRIBUTOS DE LA CLASE"

   Private region as string
   Private provincia as Int16
   Private comuna as Int16
   Private nom_rpc as string
   Private region2 as string
   Private provincia2 as Int16
   Private comuna2 as Int16

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo region
   ''' </summary>
   Public Property propiedad_region() As string
       Get
           return region
       End Get
       Set(ByVal value As string)
           region = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo provincia
   ''' </summary>
   Public Property propiedad_provincia() As Int16
       Get
           return provincia
       End Get
       Set(ByVal value As Int16)
           provincia = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo comuna
   ''' </summary>
   Public Property propiedad_comuna() As Int16
       Get
           return comuna
       End Get
       Set(ByVal value As Int16)
           comuna = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo nom_rpc
   ''' </summary>
   Public Property propiedad_nom_rpc() As string
       Get
           return nom_rpc
       End Get
       Set(ByVal value As string)
           nom_rpc = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo region2
   ''' </summary>
   Public Property propiedad_region2() As string
       Get
           return region2
       End Get
       Set(ByVal value As string)
           region2 = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo provincia2
   ''' </summary>
   Public Property propiedad_provincia2() As Int16
       Get
           return provincia2
       End Get
       Set(ByVal value As Int16)
           provincia2 = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo comuna2
   ''' </summary>
   Public Property propiedad_comuna2() As Int16
       Get
           return comuna2
       End Get
       Set(ByVal value As Int16)
           comuna2 = value
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
