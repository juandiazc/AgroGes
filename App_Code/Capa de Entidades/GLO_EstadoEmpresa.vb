Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_EstadoEmpresa
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 11-08-2010
''' </history>
public class GLO_EstadoEmpresa

#REGION "ATRIBUTOS DE LA CLASE"

   Private Cod_EstEmpresa as string
   Private Glosa_EstEmpresa as string

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Cod_EstEmpresa
   ''' </summary>
   Public Property propiedad_Cod_EstEmpresa() As string
       Get
           return Cod_EstEmpresa
       End Get
       Set(ByVal value As string)
           Cod_EstEmpresa = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Glosa_EstEmpresa
   ''' </summary>
   Public Property propiedad_Glosa_EstEmpresa() As string
       Get
           return Glosa_EstEmpresa
       End Get
       Set(ByVal value As string)
           Glosa_EstEmpresa = value
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
