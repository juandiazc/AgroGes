Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_TipoEstablecimiento
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_TipoEstablecimiento

#REGION "ATRIBUTOS DE LA CLASE"

   Private CodigoTipoEstablecimiento as Integer
   Private Glo_TipoEstablecimiento as string

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo CodigoTipoEstablecimiento
   ''' </summary>
   Public Property propiedad_CodigoTipoEstablecimiento() As Integer
       Get
           return CodigoTipoEstablecimiento
       End Get
       Set(ByVal value As Integer)
           CodigoTipoEstablecimiento = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Glo_TipoEstablecimiento
   ''' </summary>
   Public Property propiedad_Glo_TipoEstablecimiento() As string
       Get
           return Glo_TipoEstablecimiento
       End Get
       Set(ByVal value As string)
           Glo_TipoEstablecimiento = value
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
