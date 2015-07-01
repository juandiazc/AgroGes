Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_TipoEmpresa
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13-12-2010
''' </history>
public class GLO_TipoEmpresa

#REGION "ATRIBUTOS DE LA CLASE"

   Private CodigoTipoEmpresa as Integer
   Private Glo_TipoEmpresa as string

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo CodigoTipoEmpresa
   ''' </summary>
   Public Property propiedad_CodigoTipoEmpresa() As Integer
       Get
           return CodigoTipoEmpresa
       End Get
       Set(ByVal value As Integer)
           CodigoTipoEmpresa = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Glo_TipoEmpresa
   ''' </summary>
   Public Property propiedad_Glo_TipoEmpresa() As string
       Get
           return Glo_TipoEmpresa
       End Get
       Set(ByVal value As string)
           Glo_TipoEmpresa = value
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
