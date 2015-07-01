Imports System
Imports System.Collections
Imports System.Net
Imports System.Net.Mail
Imports System.Net.Mime
Imports System.Configuration.ConfigurationManager

Public Class Correo_class

#Region "Atributos"

    Private From As String = Nothing             'Correo remitente
    Private NombreRemitente As String = Nothing  'Nombre remitente
    Private Asunto As String = Nothing           'Asunto del correo
    Private Cuerpo As String = Nothing           'Cuerpo del correo
    Private Prioridad As String = Nothing        'Priopridad del mail

    Private email As New MailMessage             'Objeto mensaje 
    Private Smtp As New SmtpClient               'Objeto de envio para protocolo Smtp

#End Region

#Region "Propiedades"

    ''' <summary>
    ''' Establece o recupera origen del correo
    ''' </summary>
    Public Property propiedadFrom() As String
        Get
            Return Me.From
        End Get
        Set(ByVal value As String)
            Me.From = value
        End Set
    End Property

    ''' <summary>
    ''' Establece o recupera origen del correo
    ''' </summary>
    Public Property propiedadNombreRemitente() As String
        Get
            Return Me.NombreRemitente
        End Get
        Set(ByVal value As String)
            Me.NombreRemitente = value
        End Set
    End Property

    ''' <summary>
    ''' Establece o recupera Asunto del correo
    ''' </summary>
    Public Property propiedadAsunto() As String
        Get
            Return Me.Asunto
        End Get
        Set(ByVal value As String)
            Me.Asunto = value
        End Set
    End Property

    ''' <summary>
    ''' Establece o recupera Cuerpo del correo
    ''' </summary>
    Public Property propiedadCuerpo() As String
        Get
            Return Me.Cuerpo
        End Get
        Set(ByVal value As String)
            Me.Cuerpo = value
        End Set
    End Property

    ''' <summary>
    ''' Establece o recupera Priopridad del mail
    ''' </summary>
    Public Property propiedadPrioridad() As String
        Get
            Return Me.Prioridad
        End Get
        Set(ByVal value As String)
            Me.Prioridad = value
        End Set
    End Property

#End Region

#Region "Constructores"

    ''' <summary>
    ''' Consructor simple recibe nombre servidor y puerto
    ''' </summary>
    ''' <param name="NombreServidor">Nombre del servidor</param>
    ''' <param name="puerto">Numero de puerto</param>
    ''' <history>
    ''' 29/05/2008   Fecha de creacion por Rodrigo Almonacid.    
    ''' </history>
    Public Sub New(ByVal NombreServidor As String, ByVal puerto As Integer)
        Me.Smtp.Host = NombreServidor
        Me.Smtp.Port = puerto
    End Sub

    ''' <summary>
    ''' Consructor simple recibe nombre servidor
    ''' </summary>
    ''' <param name="NombreServidor">Nombre del servidor</param>
    ''' <history>
    ''' 29/05/2008   Fecha de creacion por Rodrigo Almonacid.    
    ''' </history>
    Public Sub New(ByVal NombreServidor As String)
        Me.Smtp.Host = NombreServidor
    End Sub

    ''' <summary>
    ''' Constructor manejado por webconfig
    ''' </summary>
    ''' <history>
    ''' 29/05/2008   Fecha de creacion por Rodrigo Almonacid.    
    ''' </history>
    Public Sub New()

        Try
            Me.Smtp.Host = AppSettings("Servidor de Correos")
            Me.Smtp.Port = Integer.Parse(AppSettings("Puerto Servidor de Correos"))
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Sub

#End Region

#Region "Metodos"

    ''' <summary>
    ''' Agregar el correo destino
    ''' </summary>
    ''' <history>
    ''' 29/05/2008   Fecha de creacion por Rodrigo Almonacid.    
    ''' </history>
    Public Sub AgregarCorreoDestino(ByVal correoDestino As String)

        Try
            If correoDestino <> "" Then
                Me.email.To.Add(correoDestino)
            End If
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Sub

    Public Sub AgregarCC(ByVal CorreoCopia As String)
        Try
            If CorreoCopia <> "" Then
                Me.email.CC.Add(CorreoCopia)
            End If
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    Public Sub AgregarBCC(ByVal CorreoCopiaOculta As String)
        Try
            If CorreoCopiaOculta <> "" Then
                Me.email.Bcc.Add(CorreoCopiaOculta)
            End If
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    Public Sub EstablecerFormatoDeCuerpoHtml()
        Me.email.IsBodyHtml = True
    End Sub

    Public Sub EstablecerFormatoDeCuerpoText()
        Me.email.IsBodyHtml = False
        Me.email.BodyEncoding = System.Text.Encoding.UTF8
    End Sub

    Public Sub EstablecerAutentificacionSSL(ByVal usuario As String, ByVal contraseña As String)
        'Cofiguracion del smtp
        Me.Smtp.Credentials = New System.Net.NetworkCredential(usuario, contraseña)
        Me.Smtp.EnableSsl = True
    End Sub

    Public Sub EstablecerAutentificacionServidorExchange(ByVal usuario As String, ByVal contraseña As String, ByVal NombreServidor As String)
        'Cofiguracion del smtp
        Dim netcred As New NetworkCredential(usuario, contraseña, NombreServidor)
        Me.Smtp.UseDefaultCredentials = False
        Me.Smtp.Credentials = netcred
    End Sub

    Public Sub EstablecerAutentificacionActiveDirectory(ByVal usuario As String, ByVal contraseña As String)
        'Cofiguracion del smtp
        Dim netcred As New NetworkCredential(usuario, contraseña)
        Me.Smtp.UseDefaultCredentials = False
        Me.Smtp.Credentials = netcred
    End Sub

    Public Sub AgregarArchivoAdjunto(ByVal pathArchivo As String)
        Try

            If pathArchivo <> "" Then
                'Creamos el archivo adjunto para este correo electrónico. 
                Dim ArchivoAdjunto As Attachment
                ArchivoAdjunto = New Attachment(pathArchivo, MediaTypeNames.Application.Octet)

                'Añadimos la información de time stamp para el archivo.  
                Dim disposition As ContentDisposition
                disposition = ArchivoAdjunto.ContentDisposition
                disposition.CreationDate = System.IO.File.GetCreationTime(pathArchivo)
                disposition.ModificationDate = System.IO.File.GetLastWriteTime(pathArchivo)
                disposition.ReadDate = System.IO.File.GetLastAccessTime(pathArchivo)

                'Añadimos el archivo adjunto a este correo. 
                Me.email.Attachments.Add(ArchivoAdjunto)
            End If

        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

    End Sub

    Public Sub EnviarCorreo()

        Try
            Dim MailRemitente As New MailAddress(Me.From, Me.NombreRemitente)
            Me.email.From = MailRemitente
            Me.email.Subject = Me.Asunto
            Me.email.Body = Me.Cuerpo

            Select Case Me.Prioridad
                Case "High" : Me.email.Priority = MailPriority.High
                Case "Normal" : Me.email.Priority = MailPriority.Normal
                Case "Low" : Me.email.Priority = MailPriority.Low
            End Select

        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try

        Try
            Me.Smtp.Send(Me.email)
        Catch ex As SmtpException
            Throw New Exception(ex.Message)
        End Try

    End Sub

#End Region

End Class
