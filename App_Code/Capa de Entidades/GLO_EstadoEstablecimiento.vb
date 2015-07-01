Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_EstadoEstablecimiento
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_EstadoEstablecimiento

#REGION "ATRIBUTOS DE LA CLASE"

   Private Cod_EstEstablecimiento as string
   Private Glosa_EstEstablecimiento as string
   Private orden as Integer

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Cod_EstEstablecimiento
   ''' </summary>
   Public Property propiedad_Cod_EstEstablecimiento() As string
       Get
           return Cod_EstEstablecimiento
       End Get
       Set(ByVal value As string)
           Cod_EstEstablecimiento = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Glosa_EstEstablecimiento
   ''' </summary>
   Public Property propiedad_Glosa_EstEstablecimiento() As string
       Get
           return Glosa_EstEstablecimiento
       End Get
       Set(ByVal value As string)
           Glosa_EstEstablecimiento = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo orden
   ''' </summary>
   Public Property propiedad_orden() As Integer
       Get
           return orden
       End Get
       Set(ByVal value As Integer)
           orden = value
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
