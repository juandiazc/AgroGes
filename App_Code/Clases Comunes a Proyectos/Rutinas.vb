Imports Microsoft.VisualBasic
Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Data.SqlClient
Imports CrystalDecisions.CrystalReports.Engine
Imports CrystalDecisions.Shared
Public Class rutinas
    Inherits System.Web.UI.Page
    Dim DsRpc As New Data.DataSet
    Dim DtRpc As DataTable
    Dim CapaNegocioRpc As New RPC_Negocio
    Dim CapaEntidadRpc As New RPC
    Dim CapaEntidadActividad As New GLO_ActivEconomica
    Dim CapaNegocioActividad As New GLO_ActivEconomica_Negocio
    Dim DsAct As New Data.DataSet
    Dim DsTipoEmpresa As Data.DataSet
    Dim CapaEntidadForma As New GLO_FormaPropiedad
    Dim CapaNegocioForma As New GLO_FormaPropiedad_Negocio
    Dim CapaEntidadTipoEmpresa As New GLO_TipoEmpresa
    Dim CapaNegocioTipoEmpresa As New GLO_TipoEmpresa_Negocio
    Dim DsForma As New Data.DataSet
    Public Sub EiminaReferencias(ByRef Referencias As Object)
        Try
            'Bucle de eliminacion
            Do Until System.Runtime.InteropServices.Marshal.ReleaseComObject(Referencias) <= 0

            Loop
        Catch
        Finally
            Referencias = Nothing
        End Try
    End Sub
    Public Function FormatNumber(ByVal Number As String) As String

        If InStr(1, Number, ",") = 0 Then
            FormatNumber = Number
            Exit Function
        End If
        FormatNumber = Mid(Number, 1, (InStr(1, Number, ",") - 1)) + "." + Mid(Number, (InStr(1, Number, ",") + 1), Len(Number))

    End Function
    Public Sub formatea_excel(ByVal wexcel As Object, ByVal fila As Integer, ByVal columna As Integer, ByVal fila2 As Integer, ByVal columna2 As Integer, ByVal modo As Integer, Optional ByVal xdecimal As Integer = 1, Optional ByVal xalinea As Integer = 1)
        Dim xlRight = -4152
        Dim xlBottom = -4107
        Dim xlContext = -5002
        Dim xlEdgeTop = 8
        Dim xlContinuous = 1
        Dim xlMedium = -4138
        Dim xlAutomatic = -4105
        Dim xlEdgeBottom = 9
        Dim xlThin = 2
        Dim xlCenter = -4108
        Dim xlLeft = -4131
        Dim xlUnderlineStyleNone = -4142
        Dim xlDiagonalDown = 5
        Dim xlLandscape = 2
        Dim xlNone = -4142
        Dim xlDiagonalUp = 6
        Dim xlEdgeLeft = 7
        Dim xlEdgeRight = 10
        Dim xlInsideVertical = 11
        Dim xlInsideHorizontal = 12

        '******************formatea numero
        wexcel.Range(wexcel.Cells(fila, columna), wexcel.Cells(fila2, columna2)).Select()
        If modo = 1 Then
            If xdecimal = 1 Then
                wexcel.Selection.NumberFormat = "#.##0"
            End If
            If xdecimal = 2 Then
                wexcel.Selection.NumberFormat = "#.###,##"
            End If
            If xdecimal = 3 Then
                wexcel.Selection.NumberFormat = "###,##0.0"
            End If
            If xdecimal = 4 Then
                wexcel.Selection.NumberFormat = "#.###,00"
            End If
            If xdecimal = 5 Then
                wexcel.Selection.NumberFormat = "#.###,000"
            End If
            If xdecimal = 6 Then
                wexcel.Selection.NumberFormat = "#.###,000"
            End If
            With wexcel.Selection
                .HorizontalAlignment = xlRight
                .VerticalAlignment = xlBottom
                .WrapText = False
                .Orientation = 0
                .AddIndent = False
                .IndentLevel = 0
                .ShrinkToFit = False
                .ReadingOrder = xlContext
                .MergeCells = False
            End With
        End If

        '*****************negrita
        If modo = 2 Then
            wexcel.Selection.Font.Bold = True
        End If

        '*****************cuadro
        If modo = 3 Then
            wexcel.Selection.Borders(xlDiagonalDown).LineStyle = xlNone
            wexcel.Selection.Borders(xlDiagonalUp).LineStyle = xlNone
            With wexcel.Selection.Borders(xlEdgeLeft)
                .LineStyle = xlContinuous
                .Weight = xlThin
                .ColorIndex = xlAutomatic
            End With
            With wexcel.Selection.Borders(xlEdgeTop)
                .LineStyle = xlContinuous
                .Weight = xlThin
                .ColorIndex = xlAutomatic
            End With
            With wexcel.Selection.Borders(xlEdgeBottom)
                .LineStyle = xlContinuous
                .Weight = xlThin
                .ColorIndex = xlAutomatic
            End With
            With wexcel.Selection.Borders(xlEdgeRight)
                .LineStyle = xlContinuous
                .Weight = xlThin
                .ColorIndex = xlAutomatic
            End With

        End If

        '*************** centrar por rango
        If modo = 4 Then
            With wexcel.Selection
                .HorizontalAlignment = xlCenter
                .VerticalAlignment = xlBottom
                .WrapText = False
                .Orientation = 0
                .AddIndent = False
                .IndentLevel = 0
                .ShrinkToFit = False
                .ReadingOrder = xlContext
                .MergeCells = False
            End With
            wexcel.Selection.Merge()
        End If

        '****************centrar simple
        If modo = 5 Then
            With wexcel.Selection
                If xalinea = 1 Then
                    .HorizontalAlignment = xlCenter
                End If
                If xalinea = 2 Then
                    .HorizontalAlignment = xlRight
                End If
                If xalinea = 3 Then
                    .HorizontalAlignment = xlLeft
                End If
                .VerticalAlignment = xlBottom
                .WrapText = False
                .Orientation = 0
                .AddIndent = False
                .IndentLevel = 0
                .ShrinkToFit = False
                .ReadingOrder = xlContext
                .MergeCells = False
            End With
        End If

        '****************linea
        If modo = 6 Then
            With wexcel.Selection.Borders(xlEdgeBottom)
                .LineStyle = xlContinuous
                .Weight = xlThin
                .ColorIndex = xlAutomatic
            End With

        End If

        '**************tipo letra mas pequeña
        If modo = 7 Then
            With wexcel.Selection.Font
                .Size = 8
                .Strikethrough = False
                .Superscript = False
                .Subscript = False
                .OutlineFont = False
                .Shadow = False
                .Underline = xlUnderlineStyleNone
                .ColorIndex = xlAutomatic
            End With
        End If

        If modo = 8 Then
            wexcel.Selection.Borders(xlDiagonalDown).LineStyle = xlNone
            wexcel.Selection.Borders(xlDiagonalUp).LineStyle = xlNone
            With wexcel.Selection.Borders(xlEdgeLeft)
                .LineStyle = xlContinuous
                .Weight = xlMedium
                .ColorIndex = xlAutomatic
            End With
            With wexcel.Selection.Borders(xlEdgeTop)
                .LineStyle = xlContinuous
                .Weight = xlMedium
                .ColorIndex = xlAutomatic
            End With
            With wexcel.Selection.Borders(xlEdgeBottom)
                .LineStyle = xlContinuous
                .Weight = xlMedium
                .ColorIndex = xlAutomatic
            End With
            With wexcel.Selection.Borders(xlEdgeRight)
                .LineStyle = xlContinuous
                .Weight = xlMedium
                .ColorIndex = xlAutomatic
            End With
            wexcel.Selection.Borders(xlInsideVertical).LineStyle = xlNone
            wexcel.Selection.Borders(xlInsideHorizontal).LineStyle = xlNone


        End If

    End Sub
    Sub limpia_textbox(ByVal xformulario As Object)

        Dim i, x As Integer
        If xformulario.HasControls() Then
            For i = 0 To xformulario.Controls.Count - 1
                For x = 1 To xformulario.Controls(i).Controls.Count - 1
                    If TypeOf xformulario.Controls(i).Controls(x) Is TextBox Then
                        CType(xformulario.Controls(i).Controls(x), TextBox).Text = ""
                    End If
                Next x
            Next i
        End If


    End Sub
    Public Function Limpiar(ByRef form) As Boolean
        Dim control As Object
        Dim col As Integer

        For col = 1 To form.Controls.Count - 1

            control = form.Controls(col)

            If control.GetType.ToString = "System.Web.UI.WebControls.TextBox" Then

                control.text = ""

            End If

            Try

                If control.controls.count > 1 Then

                    Limpiar(control)

                End If

            Catch ex As Exception

            End Try

        Next

    End Function

    'Public Sub MensajeBox(ByVal msg As String, ByVal tipo As Boolean)

    '    Dim myScript As String = "alert('" & msg & "');"

    '    If tipo Then

    '        EjecutarScriptConAjax(myScript)

    '    Else

    '        EjecutarScriptSinAjax(myScript)

    '    End If

    'End Sub

    'Protected Sub EjecutarScriptConAjax(ByVal myscript As String)

    '    ScriptManager.RegisterStartupScript(Page, Page.GetType(), "Script", myscript, True)

    'End Sub

    'Protected Sub EjecutarScriptSinAjax(ByVal myscript As String)

    '    Dim cs As ClientScriptManager = Page.ClientScript

    '    cs.RegisterClientScriptBlock(Me.GetType(), "Mensaje", myscript, True)

    'End Sub

    'Protected Sub MensajeConfirmacion(ByVal mensaje As String, Optional ByVal PaginaRedireccion As String = "")

    '    Dim lsScript As String

    '    If PaginaRedireccion = "" Then

    '        lsScript = "if(confirm('" & mensaje & "'))"

    '        lsScript += "alert('mensaje enviado');"

    '    Else

    '        lsScript = "if(confirm('" & mensaje & "'))"

    '        lsScript += "{window.location.href = '" & PaginaRedireccion & "';}"

    '    End If

    '    EjecutarScriptConAjax(lsScript)

    'End Sub

    Function trae_valor(ByVal nombre As String, ByVal panel As Panel) As String
        Dim x As String
        Dim ElControl As New Control
        Dim c As TextBox
        Dim d As DropDownList
        trae_valor = ""
        For Each ElControl In panel.Controls
            x = ElControl.ID
            If (TypeOf ElControl Is TextBox) Then
                c = ElControl
                If c.ID = nombre Then
                    trae_valor = c.Text
                    Exit Function
                End If
            End If
            If (TypeOf ElControl Is DropDownList) Then
                d = ElControl
                If d.ID = nombre Then
                    trae_valor = d.Text
                    Exit Function
                End If
            End If
        Next
    End Function
    Sub carga_valor(ByVal nombre As String, ByVal panel As Panel, ByVal valor As String)
        '  Dim x As String
        Dim ElControl As New Control
        Dim c As TextBox
        Dim d As DropDownList
        ' trae_valor = ""
        For Each ElControl In panel.Controls
            'x = ElControl.ID
            If (TypeOf ElControl Is TextBox) Then
                c = ElControl
                If c.ID = nombre Then
                    c.Text = valor
                    Exit Sub
                End If
            End If

            If (TypeOf ElControl Is DropDownList) Then
                d = ElControl
                If d.ID = nombre Then
                    Dim sw As Integer
                    Dim x As Integer
                    sw = 0
                    For x = 0 To d.Items.Count - 1
                        d.SelectedIndex = x
                        If d.Items(d.SelectedIndex).Value = valor Then
                            sw = 1
                            Exit For
                        End If
                    Next
                    If sw = 0 Then
                        d.SelectedIndex = sw
                    End If
                    Exit Sub
                End If
            End If

        Next
    End Sub
    Function Valida_Rol(ByVal vrol, ByVal DvRol) As Boolean
        Dim i
        Dim valor, suma, divide

        valor = vrol
        suma = 0
        i = 2
        While valor > 0
            If i = 8 Then
                i = 2
            End If

            suma = suma + ((valor Mod 10) * i)
            valor = Int(valor / 10)
            i = i + 1
        End While
        divide = suma Mod 9
        If Val(DvRol) = divide Then
            Valida_Rol = True
        Else
            Valida_Rol = False
        End If

        'Dim A, B, C, D, E
        'Dim suma, divide

        '   A = int(vrol / 10000)
        '   B = int(vrol / 1000) - (A * 10)
        '   C = int(vrol / 100) - (int(vrol / 1000) * 10)
        '   D = int(vrol / 10) - (int(vrol / 100) * 10)
        '   E = vrol - (int(vrol / 10) * 10)
        '   suma = A*6 + B * 5 + C * 4 + D * 3 + E * 2
        '   divide = suma mod 9
        '   Valida_Rol = divide
    End Function
    Public Function RellenaBlancos(ByVal valor As String, ByVal largo As Integer, Optional ByVal modo As Boolean = False) As String
        If Not modo Then
            If Len(Trim(valor)) < largo Then
                RellenaBlancos = Trim(valor) & Space(largo - Len(Trim(valor)))
            Else
                RellenaBlancos = Mid(valor, 1, largo)
            End If
        Else
            If Len(Trim(valor)) < largo Then
                RellenaBlancos = Space(largo - Len(Trim(valor))) & Trim(valor)
            Else
                RellenaBlancos = Mid(valor, 1, largo)
            End If
        End If
    End Function
    Public Function RellenaBlancos2(ByVal valor As String, ByVal largo As Integer, Optional ByVal modo As Boolean = False) As String
        Dim cantidad As Integer
        cantidad = largo - Len(Trim(valor))

        Dim nveces As String
        nveces = New String("_", cantidad)
        If Not modo Then
            If Len(Trim(valor)) < largo Then
                'RellenaBlancos2 = Trim(valor) & Dim nveces as String =new String("_" ,largo - Len(Trim(valor))
                RellenaBlancos2 = Trim(valor) & nveces
            Else
                RellenaBlancos2 = Mid(valor, 1, largo)
            End If
        Else
            If Len(Trim(valor)) < largo Then
                'RellenaBlancos2 = Space(largo - Len(Trim(valor))) & Trim(valor)
                RellenaBlancos2 = nveces & Trim(valor)
            Else
                RellenaBlancos2 = Mid(valor, 1, largo)
            End If
        End If
    End Function
    Public Sub MuestraArchivo(ByVal Ruta As String, ByVal NombreArchivo As String)
        'Dim szURL As String
        'szURL = Ruta '"C:\SII\170908 CONVERSION FICTICIO REAL N2.txt"
        Dim liveStream As New IO.FileStream(Ruta, IO.FileMode.Open, IO.FileAccess.Read)
        Dim buffer(liveStream.Length) As Byte
        liveStream.Read(buffer, 0, liveStream.Length)
        liveStream.Close()
        Response.Clear()
        Response.ContentType = "application/octet-stream"
        'Response.ContentType = "application/txt"
        Response.AddHeader("Content-Length", buffer.Length.ToString())
        Response.AddHeader("Content-Disposition", "attachment; filename=" & NombreArchivo)
        Response.BinaryWrite(buffer)
        Response.End()

    End Sub
    Function EnviarCorreo(ByVal email_origen As String, ByVal email_destino As String, ByVal nombre As String, ByVal strRuta_Archivo As String, ByVal periodo As String) As Boolean
        Dim origen As String = "Sandra Sepulveda G."
        Dim strMensaje As String
        Dim smtpServer As String
        Dim CorreoDestino As String

        Dim CorreoEmpresa As New Net.Mail.MailMessage
        Dim Archivo_Mail As New System.Net.Mail.Attachment(strRuta_Archivo)
        CorreoEmpresa.Attachments.Add(Archivo_Mail)

        Try
            Dim link As String = "" '= txturl.Text & "?ce=" & Me.Session.Item("Usuario").IntCodEncuesta
            smtpServer = "10.10.10.50"
            ' antiguo smtpServer = "10.10.10.101"
            'Toma correo de quien se loggeo (Analista, Jefe producto).
            CorreoEmpresa.From = New Net.Mail.MailAddress(email_origen)
            ' ---------- Habilitar estas lineas al pasar a PRODUCCION   -----------
            CorreoDestino = email_destino
            CorreoEmpresa.To.Add(CorreoDestino)
            'CorreoEmpresa.Attachments.Add(CorreoEmpresa.Attachments.Item)
            ' ---------- FIN Habilitar estas lineas al pasar a PRODUCCION  ----------
            CorreoEmpresa.Subject = "Certificado de Recepción"
            CorreoEmpresa.IsBodyHtml = True
            CorreoEmpresa.Priority = Net.Mail.MailPriority.Normal
            'Mensaje del Correo
            strMensaje = ""
            strMensaje = strMensaje & "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01 Transitional//EN' 'http://www.w3.org/TR/html4/loose.dtd'>"
            strMensaje = strMensaje & "<html>"
            strMensaje = strMensaje & "<head>"
            strMensaje = strMensaje & "<meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1'>"
            strMensaje = strMensaje & "</head>"
            strMensaje = strMensaje & "<body>"
            strMensaje = strMensaje & "<div><b>Estimado(a) " & nombre & ":</b></div>"
            strMensaje = strMensaje & "<br>"
            strMensaje = strMensaje & "<div>Junto con saludar, informo a Ud. que su encuesta ha sido recepcionada, adjunto encontrará </div>"
            strMensaje = strMensaje & "<div>'Certificado de Recepción' de la Encuesta Mensual de Matadero de Aves, periodo " + periodo + "</div>"
            strMensaje = strMensaje & "<br>"
            strMensaje = strMensaje & "<br>"
            strMensaje = strMensaje & "<div>Muchas gracias por su colaboración.</div>"
            strMensaje = strMensaje & "<br>"
            strMensaje = strMensaje & "<br>"
            strMensaje = strMensaje & "<div>Atte.,</div>"
            strMensaje = strMensaje & "<br>"
            strMensaje = strMensaje & "<br>"

            strMensaje = strMensaje & "<div><b>" & origen & "</b></div>"
            strMensaje = strMensaje & "<div>Instituto Nacional de Estadísticas</div>"
            strMensaje = strMensaje & "<div>Departamento Estadísticas Agropecuarias y Medioambientales</div>"
            strMensaje = strMensaje & "<div>Fono : 02-7962479</div>"
            strMensaje = strMensaje & "<div>E-Mail: sandra.sepulveda@ine.cl</div>"
            strMensaje = strMensaje & "<div>Santiago de Chile</div>"
            strMensaje = strMensaje & "</body>"
            strMensaje = strMensaje & "</html>"
            CorreoEmpresa.Body = strMensaje
            'Establece el nombre del servidor de transmisión de correo SMTP
            'que se va a utilizar para enviar los mensajes de correo electrónico.
            Dim smtpMail As New Net.Mail.SmtpClient(smtpServer)
            smtpMail.Send(CorreoEmpresa)
            Return True
        Catch ex As Exception

            MensajeBox(ex.Message, True)
            Return False
        End Try
    End Function
    Function Genera_Certificado(ByVal rol As String, ByVal dv_rol As String, ByVal rut As String, ByVal dv_rut As String, ByVal nombre As String, ByVal mes As String, ByVal año As String) As Boolean
        On Error Resume Next
        Genera_Certificado = False
        Dim i As Integer
        Dim reportPath As String = Server.MapPath("rptCertificado.rpt")
        Dim destino As String = Server.MapPath("Certificado" + rol + ".pdf")
        Dim sfd As New Windows.Forms.SaveFileDialog()
        sfd.FileName = destino
        Dim reporte As New CrystalDecisions.Web.CrystalReportSource
        Dim crParameterDiscreteValue As ParameterDiscreteValue
        Dim crParameterFieldDefinitions As ParameterFieldDefinitions
        Dim crParameterFieldLocation As ParameterFieldDefinition
        Dim crParameterValues As ParameterValues

        reporte.ReportDocument.FileName = reportPath

        crParameterFieldDefinitions = reporte.ReportDocument.DataDefinition.ParameterFields

        For i = 0 To reporte.ReportDocument.DataDefinition.ParameterFields.Count - 1
            crParameterValues = reporte.ReportDocument.DataDefinition.ParameterFields(i).CurrentValues
            If i = 0 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("nombre")
            End If
            If i = 1 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("rol")
            End If
            If i = 2 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("año")
            End If
            If i = 3 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("mes")
            End If
            If i = 4 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("rut")

            End If
            If i = 5 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("dv_rut")
            End If
            If i = 6 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("dv_rol")
            End If

            crParameterValues = crParameterFieldLocation.CurrentValues
            crParameterDiscreteValue = New CrystalDecisions.Shared.ParameterDiscreteValue
            If i = 0 Then
                crParameterDiscreteValue.Value = nombre
            End If
            If i = 1 Then
                crParameterDiscreteValue.Value = rol
            End If
            If i = 2 Then
                crParameterDiscreteValue.Value = año
            End If

            If i = 3 Then
                crParameterDiscreteValue.Value = mes
            End If

            If i = 4 Then
                crParameterDiscreteValue.Value = rut
            End If
            If i = 5 Then
                crParameterDiscreteValue.Value = dv_rut
            End If
            If i = 6 Then
                crParameterDiscreteValue.Value = dv_rol
            End If

            crParameterValues = reporte.ReportDocument.DataDefinition.ParameterFields(i).CurrentValues
            crParameterValues.Add(crParameterDiscreteValue)
            crParameterFieldLocation.ApplyCurrentValues(crParameterValues)

            'If reporte.ReportDocument.DataDefinition.ParameterFields(i).Name = "año" Then
            reporte.ReportDocument.DataDefinition.ParameterFields(i).ApplyCurrentValues(crParameterValues)
            'End If
        Next
        reporte.ReportDocument.ExportToDisk(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat, sfd.FileName)
        Genera_Certificado = True
    End Function

    Function Genera_Certificado2(ByVal sistema As String, ByVal enc As String, ByVal numeroinf As String, ByVal fechainf As String, ByVal nombre As String, ByVal rut As String, ByVal dv_rut As String, ByVal resolucion As String, ByVal fecha As String, ByVal fecha1 As String, ByVal fecha2 As String, ByVal provincia As String, ByVal region As String, ByVal cont1 As String, ByVal cont2 As String, ByVal cum1 As String, ByVal cum2 As String, ByVal cum3 As String, ByVal cum4 As String, ByVal cum5 As String, ByVal cum6 As String, ByVal cum7 As String, ByVal cum8 As String, ByVal cum9 As String, ByVal cum10 As String, ByVal cum11 As String, ByVal cum12 As String) As Boolean
        On Error Resume Next
        Genera_Certificado2 = False
        Dim i As Integer
        Dim reportPath As String
        If sistema = 2 Then
            reportPath = Server.MapPath("rptBoletaHonorarios.rpt")
        Else
            reportPath = Server.MapPath("rptBoletaHonorarios1.rpt")
        End If

        Dim destino As String = Server.MapPath("InformeCumplimiento" + numeroinf + "_" + enc + ".pdf")
        Dim sfd As New Windows.Forms.SaveFileDialog()
        sfd.FileName = destino
        Dim reporte As New CrystalDecisions.Web.CrystalReportSource
        Dim crParameterDiscreteValue As ParameterDiscreteValue
        Dim crParameterFieldDefinitions As ParameterFieldDefinitions
        Dim crParameterFieldLocation As ParameterFieldDefinition
        Dim crParameterValues As ParameterValues

        reporte.ReportDocument.FileName = reportPath

        crParameterFieldDefinitions = reporte.ReportDocument.DataDefinition.ParameterFields

        For i = 0 To reporte.ReportDocument.DataDefinition.ParameterFields.Count - 1
            crParameterValues = reporte.ReportDocument.DataDefinition.ParameterFields(i).CurrentValues
            If i = 0 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Nombre")
            End If
            If i = 1 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Rut1")
            End If
            If i = 2 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Resolucion")
            End If
            If i = 3 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Fecha")
            End If
            If i = 4 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Fecha1")
            End If
            If i = 5 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Fecha2")
            End If
            If i = 6 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("NumeroInforme")
            End If
            If i = 7 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Fechainf")
            End If
            If i = 8 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Provincia")
            End If
            If i = 9 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Region")
            End If
            If i = 10 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Contratacion1")
            End If
            If i = 11 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Contratacion2")
            End If
            If i = 12 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Cumplimiento1")
            End If
            If i = 13 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Cumplimiento2")
            End If
            If i = 14 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Cumplimiento3")
            End If
            If i = 15 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Cumplimiento4")
            End If
            If i = 16 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Cumplimiento5")
            End If
            If i = 17 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Cumplimiento6")
            End If
            If i = 18 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Cumplimiento7")
            End If
            If i = 19 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Cumplimiento8")
            End If
            If i = 20 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Cumplimiento9")
            End If
            If i = 21 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Cumplimiento10")
            End If
            If i = 22 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Cumplimiento11")
            End If
            If i = 23 Then
                crParameterFieldLocation = crParameterFieldDefinitions.Item("Cumplimiento12")
            End If
            'numeroinf, fechainf,nombre,rut,dv_rut,resolucion,fecha,fecha1 ,fecha2,provincia,region
            crParameterValues = crParameterFieldLocation.CurrentValues
            crParameterDiscreteValue = New CrystalDecisions.Shared.ParameterDiscreteValue
            If i = 0 Then
                crParameterDiscreteValue.Value = nombre
            End If
            If i = 1 Then
                crParameterDiscreteValue.Value = rut + "-" + dv_rut
            End If
            If i = 2 Then
                crParameterDiscreteValue.Value = resolucion
            End If

            If i = 3 Then
                crParameterDiscreteValue.Value = fecha
            End If

            If i = 4 Then
                crParameterDiscreteValue.Value = fecha1
            End If
            If i = 5 Then
                crParameterDiscreteValue.Value = fecha2
            End If
            If i = 6 Then
                crParameterDiscreteValue.Value = numeroinf
            End If
            If i = 7 Then
                crParameterDiscreteValue.Value = fechainf
            End If
            If i = 8 Then
                crParameterDiscreteValue.Value = provincia
            End If
            If i = 9 Then
                crParameterDiscreteValue.Value = region
            End If
            If i = 10 Then
                crParameterDiscreteValue.Value = cont1
            End If
            If i = 11 Then
                crParameterDiscreteValue.Value = cont2
            End If
            If i = 12 Then
                crParameterDiscreteValue.Value = cum1
            End If
            If i = 13 Then
                crParameterDiscreteValue.Value = cum2
            End If
            If i = 14 Then
                crParameterDiscreteValue.Value = cum3
            End If
            If i = 15 Then
                crParameterDiscreteValue.Value = cum4
            End If
            If i = 16 Then
                crParameterDiscreteValue.Value = cum5
            End If
            If i = 17 Then
                crParameterDiscreteValue.Value = cum6
            End If
            If i = 18 Then
                crParameterDiscreteValue.Value = cum7
            End If
            If i = 19 Then
                crParameterDiscreteValue.Value = cum8
            End If
            If i = 20 Then
                crParameterDiscreteValue.Value = cum9
            End If
            If i = 21 Then
                crParameterDiscreteValue.Value = cum10
            End If
            If i = 22 Then
                crParameterDiscreteValue.Value = cum11
            End If
            If i = 23 Then
                crParameterDiscreteValue.Value = cum12
            End If
            crParameterValues = reporte.ReportDocument.DataDefinition.ParameterFields(i).CurrentValues
            crParameterValues.Add(crParameterDiscreteValue)
            crParameterFieldLocation.ApplyCurrentValues(crParameterValues)

            'If reporte.ReportDocument.DataDefinition.ParameterFields(i).Name = "año" Then
            reporte.ReportDocument.DataDefinition.ParameterFields(i).ApplyCurrentValues(crParameterValues)
            'End If
        Next
        reporte.ReportDocument.ExportToDisk(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat, sfd.FileName)
        Genera_Certificado2 = True
    End Function

    Public Sub MensajeBox(ByVal msg As String, ByVal tipo As Boolean)
        Dim myScript As String = "alert('" & msg & "');"
        If tipo Then
            EjecutarScriptConAjax(myScript)
        Else
            EjecutarScriptSinAjax(myScript)
        End If
    End Sub

    Protected Sub EjecutarScriptConAjax(ByVal myscript As String)
        ScriptManager.RegisterStartupScript(Page, Page.GetType(), "Script", myscript, True)
    End Sub

    Protected Sub EjecutarScriptSinAjax(ByVal myscript As String)
        Dim cs As ClientScriptManager = Page.ClientScript
        cs.RegisterClientScriptBlock(Me.GetType(), "Mensaje", myscript, True)
    End Sub

    Protected Sub MensajeConfirmacion(ByVal mensaje As String, Optional ByVal PaginaRedireccion As String = "")
        Dim lsScript As String
        If PaginaRedireccion = "" Then
            lsScript = "if(confirm('" & mensaje & "'))"
            lsScript += "alert('mensaje enviado');"
        Else
            lsScript = "if(confirm('" & mensaje & "'))"
            lsScript += "{window.location.href = '" & PaginaRedireccion & "';}"
        End If
        EjecutarScriptConAjax(lsScript)
    End Sub
    Public Sub llena_region(ByVal drop As DropDownList)
        'DsRpc = CapaNegocioRpc.ListarRegion(CapaEntidadRpc)
        DtRpc = CapaNegocioRpc.ListarRegion(CapaEntidadRpc)
        llena_drop_dt(drop, DtRpc)
    End Sub
    Public Sub llena_provincia(ByVal drop As DropDownList, ByVal region As Integer)
        'DsRpc = CapaNegocioRpc.ListarProvincia(CapaEntidadRpc, region)
        DtRpc = CapaNegocioRpc.ListarProvincia(CapaEntidadRpc, region)
        llena_drop_dt(drop, DtRpc)
    End Sub
    Public Sub llena_comuna(ByVal drop As DropDownList, ByVal provincia As Integer, Optional ByVal modo As Integer = 0)
        'DsRpc = CapaNegocioRpc.ListarComuna(CapaEntidadRpc, provincia, modo)
        DtRpc = CapaNegocioRpc.ListarComuna(CapaEntidadRpc, provincia, modo)
        llena_drop_dt(drop, DtRpc)
    End Sub
    Public Sub llena_drop(ByVal drop As DropDownList, ByVal Ds As Data.DataSet)
        drop.DataSource = Ds
        drop.DataValueField = Ds.Tables(0).Columns(0).ToString
        drop.DataTextField = Ds.Tables(0).Columns(1).ToString
        drop.DataBind()
    End Sub
    Public Sub llena_drop_dt(ByVal drop As DropDownList, ByVal Dt As Data.DataTable)
        drop.DataSource = Dt
        drop.DataValueField = Dt.Columns(0).ToString
        drop.DataTextField = Dt.Columns(1).ToString
        drop.DataBind()
    End Sub
    Sub llena_actividad_est(ByVal drop As DropDownList)
        '  CapaEntidadActividad.propiedad_TipoActividadEconomica
        DsAct = CapaNegocioActividad.Listar_Est(CapaEntidadActividad)
        llena_drop(drop, DsAct)
    End Sub
    Sub llena_forma(ByVal drop As DropDownList)
        DsForma = CapaNegocioForma.Listar(CapaEntidadForma)
        llena_drop(drop, DsForma)
    End Sub
    Sub llena_tipo_empresa(ByVal drop As DropDownList)
        DsTipoEmpresa = CapaNegocioTipoEmpresa.Listar(CapaEntidadTipoEmpresa)
        llena_drop(drop, DsTipoEmpresa)
    End Sub
    Public Function busca_cierre_mes(ByVal año As Integer, ByVal mes As Integer) As Integer
        Dim cierre_mes As New CierreMesGesBLL
        Dim campo_cierre_mes As New CierreMesGesBOL
        Dim dts As DataSet
        busca_cierre_mes = 0
        campo_cierre_mes.Año = año
        campo_cierre_mes.Mes = mes
        dts = cierre_mes.Listar(campo_cierre_mes)
        If dts.Tables(0).Rows.Count = 0 Then
            busca_cierre_mes = 1
            Exit Function
        Else
            If dts.Tables(0).Rows(0)("Mes_Cerrado") = 1 Then
                busca_cierre_mes = 2
                Exit Function
            End If
        End If

    End Function
    Sub limpia(ByVal panel As Panel)
        Dim x As String
        Dim ElControl As New Control
        Dim c As TextBox
        Dim d As DropDownList
      
        For Each ElControl In panel.Controls
            x = ElControl.ID
            If (TypeOf ElControl Is TextBox) Then
                c = ElControl
                c.Text = ""
            End If
            If (TypeOf ElControl Is DropDownList) Then
                d = ElControl
                d.SelectedIndex = 0
            End If
        Next

    End Sub
End Class
