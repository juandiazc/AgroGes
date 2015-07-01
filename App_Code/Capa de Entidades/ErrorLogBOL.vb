Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos ErrorLog
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13-10-2011
''' </history>
public class ErrorLogBOL

#REGION "ATRIBUTOS DE LA CLASE"

   Private _pkLogError as Integer
   Private _pkSistema as Integer
   Private _pkUsuario as string
   Private _tipo as string
   Private _pagina as string
   Private _mensaje as string
   Private _metodo as string
   Private _fechaLogError as Date

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo PkLogError
   ''' </summary>
   Public Property PkLogError() As Integer
       Get
           return _pkLogError
       End Get
       Set(ByVal value As Integer)
           _pkLogError = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo PkSistema
   ''' </summary>
   Public Property PkSistema() As Integer
       Get
           return _pkSistema
       End Get
       Set(ByVal value As Integer)
           _pkSistema = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo PkUsuario
   ''' </summary>
   Public Property PkUsuario() As string
       Get
           return _pkUsuario
       End Get
       Set(ByVal value As string)
           _pkUsuario = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Tipo
   ''' </summary>
   Public Property Tipo() As string
       Get
           return _tipo
       End Get
       Set(ByVal value As string)
           _tipo = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Pagina
   ''' </summary>
   Public Property Pagina() As string
       Get
           return _pagina
       End Get
       Set(ByVal value As string)
           _pagina = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Mensaje
   ''' </summary>
   Public Property Mensaje() As string
       Get
           return _mensaje
       End Get
       Set(ByVal value As string)
           _mensaje = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Metodo
   ''' </summary>
   Public Property Metodo() As string
       Get
           return _metodo
       End Get
       Set(ByVal value As string)
           _metodo = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo FechaLogError
   ''' </summary>
   Public Property FechaLogError() As Date
       Get
           return _fechaLogError
       End Get
       Set(ByVal value As Date)
           _fechaLogError = value
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
