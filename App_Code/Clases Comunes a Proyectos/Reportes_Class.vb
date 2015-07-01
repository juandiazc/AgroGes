Imports System
Imports System.Web
Imports System.Web.UI
Imports RSExecution2005
Imports System.IO
Imports System.Net
Imports System.Net.Mail
Imports System.Net.Mime
Imports System.Xml
Imports System.Text
Imports System.Web.Services.Protocols
Imports Microsoft.Reporting.WebForms
Imports System.Configuration.ConfigurationManager
Imports System.Drawing.Printing

''' <summary>
'''  Clase encargada del manejo de los reportes
'''  Referencias requeridas:
'''  Locales: Microsoft.Reporting.WebForms
'''  Web: ReportExecution2005, Recomendable poner nombre de referencia RSExecution2005
''' </summary>
''' <remarks>
''' Contenido:
''' - Atributos de reportes
''' - Propiedades de reportes
''' - Constructores de reportes
''' - Metodos de reportes
''' </remarks>
'''  <history>
''' Fecha de Creacion: 03 de julio de 2008
''' </history>
Public Class Reportes_Class

#Region "Atributos de reportes"

    'Atributos de acceso a servidor de reportes
    Private RutaCarpetaServidorReportes As String
    Private RutaReporte As String
    Private NombreDirectorio As String
    Private NombreArchivo As String
    Private NombreDirectorioImpresora As String

    'Coleccion de parametros de un reporte
    Private mParametrosVer As New Collection
    Private mParametrosGrabar As New Collection

    'Atributos ocupados para grabar el reporte en un archivo
    Private historyID As String = Nothing
    Private deviceInfo As String = Nothing
    Private format As String = "Excel"
    Private results As Byte()
    Private encoding As String = String.Empty
    Private mimeType As String = String.Empty
    Private extension As String = String.Empty
    Private warnings As RSExecution2005.Warning() = Nothing
    Private streamIDs() As String = Nothing

#End Region

#Region "Propiedades de reportes"

    ''' <summary>
    ''' Obtiene o establece la ruta de acceso a la carpeta de reportes del servidor de registros
    ''' </summary>    
    Public Property Propiedad_RutaCarpetaServidorReportes() As String
        Get
            Return Me.RutaCarpetaServidorReportes
        End Get
        Set(ByVal value As String)
            Me.RutaCarpetaServidorReportes = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece la ruta de acceso al reporte
    ''' </summary>   
    Public Property Propiedad_RutaReporte() As String
        Get
            Return Me.RutaReporte
        End Get
        Set(ByVal value As String)
            Me.RutaReporte = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el nombre del archivo a exportar
    ''' </summary>   
    Public Property Propiedad_NombreArchivo() As String
        Get
            Return Me.NombreArchivo
        End Get
        Set(ByVal value As String)
            Me.NombreArchivo = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el nombre del directorio en donde se almacenaran los archivos a exportar
    ''' </summary>   
    Public Property Propiedad_NombreDirectorio() As String
        Get
            Return Me.NombreDirectorio
        End Get
        Set(ByVal value As String)
            Me.NombreDirectorio = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece la informacion historica del archivo que se va a exportar
    ''' </summary>   
    Public Property Propiedad_historyID() As String
        Get
            Return Me.historyID
        End Get
        Set(ByVal value As String)
            Me.historyID = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece la informacion de dispositivo del archivo a exportar
    ''' </summary>   
    Public Property Propiedad_deviceInfo() As String
        Get
            Return Me.deviceInfo
        End Get
        Set(ByVal value As String)
            Me.deviceInfo = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el formato (puede ser excel, word o pdf )del archivo a exportar 
    ''' </summary>   
    Public Property Propiedad_format() As String
        Get
            Return Me.format
        End Get
        Set(ByVal value As String)
            Me.format = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el atributo result que almacena toda la informacion del archivo a exportar 
    ''' </summary>   
    Public Property Propiedad_results() As Byte()
        Get
            Return Me.results
        End Get
        Set(ByVal value As Byte())
            Me.results = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece la codificacion del archivo a exportar 
    ''' </summary>   
    Public Property Propiedad_encoding() As String
        Get
            Return Me.encoding
        End Get
        Set(ByVal value As String)
            Me.encoding = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece el tipo mime del archivo a exportar 
    ''' </summary>   
    Public Property Propiedad_mimeType() As String
        Get
            Return Me.mimeType
        End Get
        Set(ByVal value As String)
            Me.mimeType = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece la extension del archivo a exportar 
    ''' </summary>   
    Public Property Propiedad_extension() As String
        Get
            Return Me.extension
        End Get
        Set(ByVal value As String)
            Me.extension = value
        End Set
    End Property

    ''' <summary>
    ''' Obtiene o establece la codificacion del archivo a exportar 
    ''' </summary>   
    Public Property Propiedad_warnings() As RSExecution2005.Warning()
        Get
            Return Me.warnings
        End Get
        Set(ByVal value As RSExecution2005.Warning())
            Me.warnings = value
        End Set
    End Property


#End Region

#Region "Constructores de reportes"

    ''' <summary>
    ''' Permite construir una instancia de reporte con todo sus datos
    ''' </summary>
    ''' <param name="RutaCarpetaServidorReportes">Establece la ruta de la carpeta de reportes del servidor de reporte</param>
    ''' <param name="RutaReporte">Establece la ruta del reporte a cargar</param>
    ''' <remarks></remarks>
    Public Sub New(ByVal RutaCarpetaServidorReportes As String, ByVal RutaReporte As String)

        Try
            Me.Propiedad_RutaCarpetaServidorReportes = RutaCarpetaServidorReportes
            Me.Propiedad_RutaReporte = RutaReporte
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Sub

    ''' <summary>
    ''' Permite construir una instancia de reporte sin datos
    ''' </summary>
    Public Sub New()

    End Sub

#End Region

#Region "Metodos de reportes"

    ''' <summary>
    '''  Metodo para levantar un reporte en un ReportView
    ''' </summary>
    ''' <history>
    ''' Fecha de Creacion: 05 de julio de 2008, Rodrigo Almonacid
    ''' </history>
    Public Sub LevantarReporte(ByVal ReportViewer1 As ReportViewer)

        Try

            'Asignamos la ruta del reporte en servidor
            ReportViewer1.ServerReport.ReportPath = Me.Propiedad_RutaReporte

            'Asignamos la ruta del servidor de reportes
            Dim url As New Uri(Me.Propiedad_RutaCarpetaServidorReportes)
            ReportViewer1.ServerReport.ReportServerUrl = url

            Dim irsc As New Credenciales_class(AppSettings("usuario"), AppSettings("pass"), "INE")
            ReportViewer1.ServerReport.ReportServerCredentials = irsc

            Dim par As New ParametrosReporte_Class
            Dim i As Integer = 0

            'Enviar parámetros
            Dim param(0 To mParametrosVer.Count - 1) As Microsoft.Reporting.WebForms.ReportParameter

            For Each par In Me.mParametrosVer

                'Establecemos el valor de los parámetros
                param(i) = New Microsoft.Reporting.WebForms.ReportParameter(par.Propiedad_nombreParametro, CType(par.Propiedad_valorParametro, String))
                i += 1

            Next

            ReportViewer1.ServerReport.SetParameters(param)
            ReportViewer1.ServerReport.Refresh()
            ReportViewer1.Visible = True

        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Sub

    ''' <summary>
    '''  Metodo para agregar un parametro para ver un reporte 
    ''' </summary>
    ''' <history>
    ''' Fecha de Creacion: 03 de julio de 2008, Rodrigo Almonacid
    ''' </history>
    Public Sub AgregarParametroParaVer(ByVal NombreParametro As String, ByVal valorParametro As String)

        Try
            Dim par As New ParametrosReporte_Class

            If IsNothing(NombreParametro) Or IsNothing(valorParametro) Then
                Throw New Exception("Debe agregar Nombre y Valor del parametro")
            Else
                par.Propiedad_nombreParametro = NombreParametro
                par.Propiedad_valorParametro = valorParametro
                mParametrosVer.Add(par)
            End If

        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Sub

    ''' <summary>
    ''' Metodo para exportar reporte de acuerdo a un formato establecido 
    ''' Los formatos soportados son pdf, word o excel
    ''' </summary>
    ''' <history>
    ''' Fecha de Creacion: 03 de julio de 2008, Rodrigo Almonacid
    ''' </history>
    Public Sub ExportarReporte()

        Try
            'verificamos que la propiedad formato venga con una extension 
            If IsNothing(Me.Propiedad_format) Then
                Throw New Exception("El formato del archivo a exportar es incorrecto")
            Else
                'verificamos que la se haya asignado un nombre de carpeta en donde almacenar los reportes 
                If IsNothing(Me.Propiedad_NombreDirectorio) Then
                    Throw New Exception("Nombre de directorio es incorrecto")
                Else

                    Select Case Me.Propiedad_format

                        Case "Excel"
                            Me.Propiedad_NombreArchivo = Me.Propiedad_NombreArchivo + ".xls"
                        Case "Pdf"
                            Me.Propiedad_NombreArchivo = Me.Propiedad_NombreArchivo + ".pdf"
                        Case Else
                            Me.Propiedad_NombreArchivo = Me.Propiedad_NombreArchivo + ".xls"

                    End Select

                    'Si el nombre de directorio no existe lo crea
                    If Not Directory.Exists(AppSettings("RutaCarpetaReporteServidor") + Me.Propiedad_NombreDirectorio) Then
                        Directory.CreateDirectory(AppSettings("RutaCarpetaReporteServidor") + Me.Propiedad_NombreDirectorio)
                    End If

                    'Carga el reporte
                    Dim re As RSExecution2005.ReportExecutionService = New RSExecution2005.ReportExecutionService()
                    re.Url = AppSettings("UriLibreria") '"http://192.168.1.18/reportserver/reportexecution2005.asmx?wsdl" '
                    Dim isrc As New System.Net.NetworkCredential(AppSettings("usuario"), AppSettings("pass"), "INE")
                    re.Credentials = isrc

                    'Se carga el reporte parea exportar
                    Dim ei As ExecutionInfo = re.LoadReport(Me.Propiedad_RutaReporte, historyID)

                    'Crea numero de parametros predeterminado de tipo RSExecution2005.ParameterValue
                    Dim param(0 To mParametrosGrabar.Count - 1) As RSExecution2005.ParameterValue

                    Dim par As New ParametrosReporte_Class
                    Dim i As Integer = 0

                    For Each par In Me.mParametrosGrabar
                        param(i) = New RSExecution2005.ParameterValue()
                        param(i).Name = par.Propiedad_nombreParametro
                        param(i).Value = CType(par.Propiedad_valorParametro, String)
                        i += 1
                    Next

                    re.SetExecutionParameters(param, "en-us")

                    ei = re.GetExecutionInfo()
                    results = re.Render(format, deviceInfo, extension, encoding, mimeType, warnings, streamIDs)

                    'Crea el archivo en donde se almacena el reporte
                    Dim stream As New FileStream(AppSettings("RutaCarpetaReporteServidor") + Me.Propiedad_NombreDirectorio + "\" + Me.Propiedad_NombreArchivo, FileMode.Create)

                    stream.Write(results, 0, results.Length)
                    stream.Close()

                End If

            End If

        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Sub

    ''' <summary>
    '''  Metodo para agregar un parametro para exportar un reporte 
    ''' </summary>
    ''' <history>
    ''' Fecha de Creacion: 24 de julio de 2008, Rodrigo Almonacid
    ''' </history>
    Public Sub AgregarParametroParaExportar(ByVal NombreParametro As String, ByVal valorParametro As Object)

        Try
            Dim par As New ParametrosReporte_Class

            If IsNothing(NombreParametro) Or IsNothing(valorParametro) Then
                Throw New Exception("Debe agregar Nombre y valor de parametro")
            Else
                par.Propiedad_nombreParametro = NombreParametro
                par.Propiedad_valorParametro = valorParametro
                mParametrosGrabar.Add(par)
            End If

        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Sub

    Public Sub Imprimir(ByVal rutacompleta As String)
        Try

            If Me.Propiedad_format = "Pdf" Then
                Dim Result As Integer
                Result = Shell("print /d:" & Chr(34) & AppSettings("Directorio_Impresora") & Chr(34) & " " & Chr(34) & rutacompleta & ".pdf" & Chr(34))
            End If
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    Public Sub Imprimir_prueba(ByVal rutacompleta As String)
        Try

            If Me.Propiedad_format = "Pdf" Then
                Dim Result As Integer
                Result = Shell(Chr(34) & AppSettings("RutaAcrobat") & Chr(34) & " /t " & Chr(34) & rutacompleta & Chr(34) & " " & Chr(34) & AppSettings("Directorio_Impresora") & Chr(34))
                'Result = Shell("C:\Archivos de programa\Adobe\Acrobat 7.0\Reader\AcroRd32.pdf" & " /t " & " " & "C:\Formularios\SITIO_IRICMO_COYUNTURAL\Certificados_Emitidos_Pdf\Certificados_entrega_17951.pdf" & " " & "\\pino\IR_eleuterio")
            End If
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    Public Sub BorrarArchivo(ByVal NombreArchivo As String)
        File.Delete(Me.Propiedad_NombreDirectorio & NombreArchivo & ".pdf")
    End Sub

    ''' <summary>
    ''' Metodo para enviar un archivo exportado por mail
    ''' </summary>
    ''' <param name="MailOrigen">E-mail de origen</param>
    ''' <param name="MailDestino">E-mail de destino</param>
    ''' <param name="Asunto">Asunto del mail</param>
    Public Sub EnviarReportePorMail(ByVal MailOrigen As String, ByVal MailDestino As String, ByVal Asunto As String, ByVal cuerpo As String)

        Try

            Dim c As New Correo_class("10.10.10.5", 25)
            c.propiedadFrom = MailOrigen ' "rodrigo.almonacid@ine.cl"
            c.AgregarCorreoDestino(MailDestino) '"jorge.volosky@ine.cl"
            c.propiedadAsunto = Asunto '"Correo de Prueba"
            c.propiedadCuerpo = cuerpo
            c.AgregarArchivoAdjunto(AppSettings("RutaCarpetaReporteServidor") + Me.Propiedad_NombreDirectorio + "\" + Me.Propiedad_NombreArchivo)
            c.EstablecerFormatoDeCuerpoText()
            c.EnviarCorreo()

        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Sub

#End Region

End Class
