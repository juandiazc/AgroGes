Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Data.SqlClient
Imports Microsoft.Office.Interop
Partial Class Modulo_Descarga_frmDescargaBases
    Inherits System.Web.UI.Page
    Dim campo_llena_tablas As New Llena_Tablas_dtsBOL
    Dim Llenatablas_dtsBLL As New LlenaTablas_dtsBLL

    Protected Sub btn_genera_Click(ByVal sender As Object, ByVal e As System.EventArgs)

        Dim ejecuta As New ejecuta_consulta

        If drop_tabulado.SelectedValue = 1 Then
            If Llenatablas_dtsBLL.Llenar(campo_llena_tablas) = True Then
                MensajeBox("Proceso Realizado con Exito", True)
            Else
                MensajeBox("Error al Generer la Base", True)
            End If
        End If
        'If drop_tabulado.SelectedValue = 2 Then
        '    If Llenatablas_dtsBLL.Llenar_InIn(campo_llena_tablas) = True Then
        '        MensajeBox("Proceso Realizado con Exito", True)
        '    Else
        '        MensajeBox("Error al Generer la Base", True)
        '    End If
        'End If
    End Sub
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
    Sub MuestraArchivo(ByVal Ruta As String, ByVal NombreArchivo As String)
        Dim liveStream As New IO.FileStream(Ruta, IO.FileMode.Open, IO.FileAccess.Read)
        Dim buffer(liveStream.Length) As Byte
        liveStream.Read(buffer, 0, liveStream.Length)
        liveStream.Close()
        Response.Clear()
        Response.ContentType = "application/octet-stream"
        Response.AddHeader("Content-Length", buffer.Length.ToString())
        Response.AddHeader("Content-Disposition", "attachment; filename=" & NombreArchivo)
        Response.BinaryWrite(buffer)
        Response.End()
    End Sub
    Protected Sub drop_tabulado_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)
        If drop_tabulado.SelectedValue = 1 Then
            lnk_muestra.NavigateUrl = "http://petra.ine.cl/BASES_AGROPECUARIA_T/base_datos_agropecuarias/base_intenciones.xlsx"
            'lnk_muestra.NavigateUrl = "http://pimiento.ine.cl/BASES_AGROPECUARIA_D/base_datos_agropecuarias/base_intenciones.xls"
        End If
        'If drop_tabulado.SelectedValue = 2 Then
        '    lnk_muestra.NavigateUrl = "http://palma.ine.cl/CRIADEROPORCINOS/base_datos_porcinos/base_porcinos_InIn.mdb"
        'End If
    End Sub
End Class
