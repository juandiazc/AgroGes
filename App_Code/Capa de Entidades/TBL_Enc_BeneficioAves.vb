Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos TBL_Enc_BeneficioAves
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 14-09-2010
''' </history>
public class TBL_Enc_BeneficioAves

#REGION "ATRIBUTOS DE LA CLASE"

   Private Año as Integer
   Private Mes as string
   Private Rol as Integer
   Private Especies as string
   Private num_aves_faenadas as Integer
   Private total_peso_vivo as Integer
   Private peso_total_faenadas as Integer
   Private naf_criadas_region as Integer
    Private naf_criadas_otra_region As Integer
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
   ''' Obtiene o establece el valor del atributo Especies
   ''' </summary>
   Public Property propiedad_Especies() As string
       Get
           return Especies
       End Get
       Set(ByVal value As string)
           Especies = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo num_aves_faenadas
   ''' </summary>
   Public Property propiedad_num_aves_faenadas() As Integer
       Get
           return num_aves_faenadas
       End Get
       Set(ByVal value As Integer)
           num_aves_faenadas = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo total_peso_vivo
   ''' </summary>
   Public Property propiedad_total_peso_vivo() As Integer
       Get
           return total_peso_vivo
       End Get
       Set(ByVal value As Integer)
           total_peso_vivo = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo peso_total_faenadas
   ''' </summary>
   Public Property propiedad_peso_total_faenadas() As Integer
       Get
           return peso_total_faenadas
       End Get
       Set(ByVal value As Integer)
           peso_total_faenadas = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo naf_criadas_region
   ''' </summary>
   Public Property propiedad_naf_criadas_region() As Integer
       Get
           return naf_criadas_region
       End Get
       Set(ByVal value As Integer)
           naf_criadas_region = value
       End Set
   End Property

   ''' <summary>
   ''' Obtiene o establece el valor del atributo naf_criadas_otra_region
   ''' </summary>
   Public Property propiedad_naf_criadas_otra_region() As Integer
       Get
           return naf_criadas_otra_region
       End Get
       Set(ByVal value As Integer)
           naf_criadas_otra_region = value
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
