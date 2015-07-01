Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GLO_LugarTramite
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_LugarTramite

#REGION "ATRIBUTOS DE LA CLASE"

   Private CodLugarTramite as string
   Private GloLugarTramite as string

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo CodLugarTramite
   ''' </summary>
   Public Property propiedad_CodLugarTramite() As string
       Get
           return CodLugarTramite
       End Get
       Set(ByVal value As string)
           CodLugarTramite = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo GloLugarTramite
   ''' </summary>
   Public Property propiedad_GloLugarTramite() As string
       Get
           return GloLugarTramite
       End Get
       Set(ByVal value As string)
           GloLugarTramite = value
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
