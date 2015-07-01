Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos GES_EstadoEncuesta
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 11-01-2011
''' </history>
public class GES_EstadoEncuesta

#REGION "ATRIBUTOS DE LA CLASE"

   Private Año as Int16
   Private Mes as string
   Private Rol as Integer
   Private EstadoActual as Int16
   Private PerfilIngreso as string
   Private FechaIngreso as Date
   Private PerfilUltimaModificacion as string
   Private FechaUltimaModificacion as Date
   Private NumeroValidaciones as Integer
   Private CertificadoRecepcion as string
   Private FechaCertificadoRecepcion as Date
   Private Cod_MedioRecepcion as string
    Private EstadoAnterior As Int16

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Año
   ''' </summary>
   Public Property propiedad_Año() As Int16
       Get
           return Año
       End Get
       Set(ByVal value As Int16)
           Año = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Mes
   ''' </summary>
   Public Property propiedad_Mes() As string
       Get
           return Mes
       End Get
       Set(ByVal value As string)
           Mes = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Rol
   ''' </summary>
   Public Property propiedad_Rol() As Integer
       Get
           return Rol
       End Get
       Set(ByVal value As Integer)
           Rol = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo EstadoActual
   ''' </summary>
   Public Property propiedad_EstadoActual() As Int16
       Get
           return EstadoActual
       End Get
       Set(ByVal value As Int16)
           EstadoActual = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo PerfilIngreso
   ''' </summary>
   Public Property propiedad_PerfilIngreso() As string
       Get
           return PerfilIngreso
       End Get
       Set(ByVal value As string)
           PerfilIngreso = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo FechaIngreso
   ''' </summary>
   Public Property propiedad_FechaIngreso() As Date
       Get
           return FechaIngreso
       End Get
       Set(ByVal value As Date)
           FechaIngreso = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo PerfilUltimaModificacion
   ''' </summary>
   Public Property propiedad_PerfilUltimaModificacion() As string
       Get
           return PerfilUltimaModificacion
       End Get
       Set(ByVal value As string)
           PerfilUltimaModificacion = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo FechaUltimaModificacion
   ''' </summary>
   Public Property propiedad_FechaUltimaModificacion() As Date
       Get
           return FechaUltimaModificacion
       End Get
       Set(ByVal value As Date)
           FechaUltimaModificacion = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo NumeroValidaciones
   ''' </summary>
   Public Property propiedad_NumeroValidaciones() As Integer
       Get
           return NumeroValidaciones
       End Get
       Set(ByVal value As Integer)
           NumeroValidaciones = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo CertificadoRecepcion
   ''' </summary>
   Public Property propiedad_CertificadoRecepcion() As string
       Get
           return CertificadoRecepcion
       End Get
       Set(ByVal value As string)
           CertificadoRecepcion = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo FechaCertificadoRecepcion
   ''' </summary>
   Public Property propiedad_FechaCertificadoRecepcion() As Date
       Get
           return FechaCertificadoRecepcion
       End Get
       Set(ByVal value As Date)
           FechaCertificadoRecepcion = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Cod_MedioRecepcion
   ''' </summary>
   Public Property propiedad_Cod_MedioRecepcion() As string
       Get
           return Cod_MedioRecepcion
       End Get
       Set(ByVal value As string)
           Cod_MedioRecepcion = value
       End Set
   End Property
    Public Property propiedad_EstadoAnterior() As Int16
        Get
            Return EstadoAnterior
        End Get
        Set(ByVal value As Int16)
            EstadoAnterior = value
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
