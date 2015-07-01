Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_ActivEconomica
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 16-08-2010
''' </history>
public class GLO_ActivEconomica

#REGION "ATRIBUTOS DE LA CLASE"

   Private TipoActividadEconomica as Integer
   Private CodActividad as string
   Private GlosaActividad as string

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo TipoActividadEconomica
   ''' </summary>
   Public Property propiedad_TipoActividadEconomica() As Integer
       Get
           return TipoActividadEconomica
       End Get
       Set(ByVal value As Integer)
           TipoActividadEconomica = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo CodActividad
   ''' </summary>
   Public Property propiedad_CodActividad() As string
       Get
           return CodActividad
       End Get
       Set(ByVal value As string)
           CodActividad = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo GlosaActividad
   ''' </summary>
   Public Property propiedad_GlosaActividad() As string
       Get
           return GlosaActividad
       End Get
       Set(ByVal value As string)
           GlosaActividad = value
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
