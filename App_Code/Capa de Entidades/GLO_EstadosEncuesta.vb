Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_EstadosEncuesta
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 14-03-2011
''' </history>
public class GLO_EstadosEncuesta

#REGION "ATRIBUTOS DE LA CLASE"

   Private Codigo as Int16
   Private Glosa as string

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Codigo
   ''' </summary>
   Public Property propiedad_Codigo() As Int16
       Get
           return Codigo
       End Get
       Set(ByVal value As Int16)
           Codigo = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Glosa
   ''' </summary>
   Public Property propiedad_Glosa() As string
       Get
           return Glosa
       End Get
       Set(ByVal value As string)
           Glosa = value
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
