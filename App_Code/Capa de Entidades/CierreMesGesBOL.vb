Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos CierreMesGes
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-05-2012
''' </history>
public class CierreMesGesBOL

#REGION "ATRIBUTOS DE LA CLASE"

   Private _año as Integer
   Private _mes as Integer
   Private _fecha_Apertura as Date
   Private _usuario_Apertura as String
   Private _fecha_Cierre as Date
   Private _usuario_Cierre as String
   Private _mes_Cerrado as Integer

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Año
   ''' </summary>
   Public Property Año() As Integer
       Get
           return _año
       End Get
       Set(ByVal value As Integer)
           _año = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Mes
   ''' </summary>
   Public Property Mes() As Integer
       Get
           return _mes
       End Get
       Set(ByVal value As Integer)
           _mes = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Fecha_Apertura
   ''' </summary>
   Public Property Fecha_Apertura() As Date
       Get
           return _fecha_Apertura
       End Get
       Set(ByVal value As Date)
           _fecha_Apertura = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Usuario_Apertura
   ''' </summary>
   Public Property Usuario_Apertura() As String
       Get
           return _usuario_Apertura
       End Get
       Set(ByVal value As String)
           _usuario_Apertura = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Fecha_Cierre
   ''' </summary>
   Public Property Fecha_Cierre() As Date
       Get
           return _fecha_Cierre
       End Get
       Set(ByVal value As Date)
           _fecha_Cierre = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Usuario_Cierre
   ''' </summary>
   Public Property Usuario_Cierre() As String
       Get
           return _usuario_Cierre
       End Get
       Set(ByVal value As String)
           _usuario_Cierre = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Mes_Cerrado
   ''' </summary>
   Public Property Mes_Cerrado() As Integer
       Get
           return _mes_Cerrado
       End Get
       Set(ByVal value As Integer)
           _mes_Cerrado = value
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
