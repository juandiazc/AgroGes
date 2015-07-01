Imports System.Configuration.ConfigurationManager
''' <summary>
'''  Clase encargada del manejo de los errores
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
''' 
Public Class CONTROL_ERRORES_class
    Inherits System.Web.UI.Page

#Region "ATRIBUTOS DE LA CLASE"
    Dim CapaEntidadLogErrores As New LOG_ERRORES
    Dim CapaNegocioLogErrores As New LOG_ERRORES_Negocio
    Dim SendMail As New Correo_class
#End Region

#Region "METODOS PROPIOS DE LA CLASE"

    ''' <summary>
    ''' Inserta el resultado de la excepción y envia un correo al desarrollador
    ''' </summary>
    ''' <remarks></remarks>
    ''' <history>Fecha de Creacion: 13/05/2010</history>
    ''' 
    Sub Insertar_Error(ByVal PK_USUARIO As String, ByVal LOGERR_TIPO As String, ByVal LOGERR_PAGINA As String, ByVal LOGERR_MENSAJE As String, ByVal LOGERR_METODO As String)
        CapaEntidadLogErrores.propiedad_PK_USUARIO = PK_USUARIO
        CapaEntidadLogErrores.propiedad_LOGERR_TIPO = LOGERR_TIPO
        CapaEntidadLogErrores.propiedad_LOGERR_PAGINA = LOGERR_PAGINA
        CapaEntidadLogErrores.propiedad_LOGERR_MENSAJE = LOGERR_MENSAJE
        CapaEntidadLogErrores.propiedad_LOGERR_METODO = LOGERR_METODO
        CapaEntidadLogErrores.propiedad_LOGERR_FECHA = Today
        CapaNegocioLogErrores.Insertar(CapaEntidadLogErrores)

        SendMail.propiedadAsunto = "Se ha producido una excepción en el sistema"
        SendMail.propiedadCuerpo = Trim(LOGERR_TIPO) & ", Pagina: " & Trim(LOGERR_PAGINA) & ", Metodo: " & Trim(LOGERR_METODO) & ", el error producido es:  " & Trim(LOGERR_MENSAJE)
        SendMail.propiedadFrom = "ControlErroresSPE@ine.cl"
        SendMail.AgregarCorreoDestino(AppSettings("Correo_SPE"))
        SendMail.EnviarCorreo()
    End Sub
#End Region
End Class
