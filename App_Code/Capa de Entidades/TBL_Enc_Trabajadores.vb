Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos TBL_Enc_Trabajadores
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 14-09-2010
''' </history>
public class TBL_Enc_Trabajadores

#REGION "ATRIBUTOS DE LA CLASE"

   Private Año as Integer
   Private Mes as string
   Private Rol as Integer
   Private Tipo_trabajador as string
   Private total as Integer
   Private hombres as Integer
   Private mujeres as Integer
   Private jornal as string
    Private FechaHora As DateTime
    Private Perfil As String

#END REGION

#REGION "PROPIEDADES DE LA CLASE"

   ''' <summary>
   ''' Obtiene o establece el valor del atributo Año
   ''' </summary>
   Public Property propiedad_Año() As Integer
       Get
           return Año
       End Get
       Set(ByVal value As Integer)
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
   ''' Obtiene o establece el valor del atributo Tipo_trabajador
   ''' </summary>
   Public Property propiedad_Tipo_trabajador() As string
       Get
           return Tipo_trabajador
       End Get
       Set(ByVal value As string)
           Tipo_trabajador = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo total
   ''' </summary>
   Public Property propiedad_total() As Integer
       Get
           return total
       End Get
       Set(ByVal value As Integer)
           total = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo hombres
   ''' </summary>
   Public Property propiedad_hombres() As Integer
       Get
           return hombres
       End Get
       Set(ByVal value As Integer)
           hombres = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo mujeres
   ''' </summary>
   Public Property propiedad_mujeres() As Integer
       Get
           return mujeres
       End Get
       Set(ByVal value As Integer)
           mujeres = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo jornal
   ''' </summary>
   Public Property propiedad_jornal() As string
       Get
           return jornal
       End Get
       Set(ByVal value As string)
           jornal = value
       End Set
   End Property
    Public Property propiedad_fechahora() As DateTime
        Get
            Return FechaHora
        End Get
        Set(ByVal value As DateTime)
            FechaHora = value
        End Set
    End Property

    Public Property propiedad_perfil() As String
        Get
            Return Perfil
        End Get
        Set(ByVal value As String)
            Perfil = value
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
