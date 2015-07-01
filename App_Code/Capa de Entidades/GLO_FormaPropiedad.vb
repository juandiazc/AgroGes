Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_FormaPropiedad
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_FormaPropiedad

#REGION "ATRIBUTOS DE LA CLASE"

   Private Cod_FormaPropiedad as Int16
   Private Glosa_FormaPropiedad as string

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Cod_FormaPropiedad
   ''' </summary>
   Public Property propiedad_Cod_FormaPropiedad() As Int16
       Get
           return Cod_FormaPropiedad
       End Get
       Set(ByVal value As Int16)
           Cod_FormaPropiedad = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Glosa_FormaPropiedad
   ''' </summary>
   Public Property propiedad_Glosa_FormaPropiedad() As string
       Get
           return Glosa_FormaPropiedad
       End Get
       Set(ByVal value As string)
           Glosa_FormaPropiedad = value
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
