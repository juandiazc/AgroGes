Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_Tama�o
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_Tama�o

#REGION "ATRIBUTOS DE LA CLASE"

   Private CodTama�o as string
   Private GLO_Tama�o as string

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo CodTama�o
   ''' </summary>
   Public Property propiedad_CodTama�o() As string
       Get
           return CodTama�o
       End Get
       Set(ByVal value As string)
           CodTama�o = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo GLO_Tama�o
   ''' </summary>
   Public Property propiedad_GLO_Tama�o() As string
       Get
           return GLO_Tama�o
       End Get
       Set(ByVal value As string)
           GLO_Tama�o = value
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
