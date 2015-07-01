Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_OrgJuridica
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_OrgJuridica

#REGION "ATRIBUTOS DE LA CLASE"

   Private Cod_OrgJuridica as string
   Private Glosa_OrgJuridica as string

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Cod_OrgJuridica
   ''' </summary>
   Public Property propiedad_Cod_OrgJuridica() As string
       Get
           return Cod_OrgJuridica
       End Get
       Set(ByVal value As string)
           Cod_OrgJuridica = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Glosa_OrgJuridica
   ''' </summary>
   Public Property propiedad_Glosa_OrgJuridica() As string
       Get
           return Glosa_OrgJuridica
       End Get
       Set(ByVal value As string)
           Glosa_OrgJuridica = value
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
