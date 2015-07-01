Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_Tamaño
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_Tamaño

#REGION "ATRIBUTOS DE LA CLASE"

   Private CodTamaño as string
   Private GLO_Tamaño as string

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo CodTamaño
   ''' </summary>
   Public Property propiedad_CodTamaño() As string
       Get
           return CodTamaño
       End Get
       Set(ByVal value As string)
           CodTamaño = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo GLO_Tamaño
   ''' </summary>
   Public Property propiedad_GLO_Tamaño() As string
       Get
           return GLO_Tamaño
       End Get
       Set(ByVal value As string)
           GLO_Tamaño = value
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
