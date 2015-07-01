
Partial Class MensajeProceso
    Inherits System.Web.UI.UserControl

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Me.EjecutarScript("javascript:CenterWindow('divProcesando');")
    End Sub

    Protected Sub EjecutarScript(ByVal myscript As String)
        ScriptManager.RegisterStartupScript(Page, Page.GetType(), "Script", myscript, True)
    End Sub

End Class
