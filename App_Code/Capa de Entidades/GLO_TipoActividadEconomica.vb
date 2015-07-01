Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_TipoActividadEconomica
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_TipoActividadEconomica

#REGION "ATRIBUTOS DE LA CLASE"

   Private CodigoTipoActividad as Integer
   Private Glo_TipoActividad as string

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo CodigoTipoActividad
   ''' </summary>
   Public Property propiedad_CodigoTipoActividad() As Integer
       Get
           return CodigoTipoActividad
       End Get
       Set(ByVal value As Integer)
           CodigoTipoActividad = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Glo_TipoActividad
   ''' </summary>
   Public Property propiedad_Glo_TipoActividad() As string
       Get
           return Glo_TipoActividad
       End Get
       Set(ByVal value As string)
           Glo_TipoActividad = value
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
