Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GES_AsignacionCarga
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 03-02-2011
''' </history>
public class GES_AsignacionCarga

#REGION "ATRIBUTOS DE LA CLASE"

   Private Año as Integer
   Private Mes as string
   Private Rol as Integer
   Private Analista as string

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
   ''' Obtiene o establece el valor del atributo Analista
   ''' </summary>
   Public Property propiedad_Analista() As string
       Get
           return Analista
       End Get
       Set(ByVal value As string)
           Analista = value
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
