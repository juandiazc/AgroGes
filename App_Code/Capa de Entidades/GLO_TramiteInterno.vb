Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_TramiteInterno
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_TramiteInterno

#REGION "ATRIBUTOS DE LA CLASE"

   Private TipoTramiteInterno as Integer
   Private GlosaTramiteInterno as string

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo TipoTramiteInterno
   ''' </summary>
   Public Property propiedad_TipoTramiteInterno() As Integer
       Get
           return TipoTramiteInterno
       End Get
       Set(ByVal value As Integer)
           TipoTramiteInterno = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo GlosaTramiteInterno
   ''' </summary>
   Public Property propiedad_GlosaTramiteInterno() As string
       Get
           return GlosaTramiteInterno
       End Get
       Set(ByVal value As string)
           GlosaTramiteInterno = value
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
