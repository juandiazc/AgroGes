
Partial Class Modulo_Administracion_frmRespuestas
    Inherits PaginaBase_class

#Region "ATRIBUTOS DEL FORMULARIO"
    Dim CapaEntidadRespuesta As New RESPUESTA
    Dim CapaNegocioRespuesta As New RESPUESTA_Negocio

    Dim CapaEntidadPregunta As New PREGUNTA
    Dim CapaNegocioPregunta As New PREGUNTA_Negocio

    Dim DsPreguntasRespondidas As New Data.DataSet
    Dim DsPreguntasActivas As New Data.DataSet

    Dim CapaEntidadLogErrores As New LOG_ERRORES
    Dim CapaNegocioLogErrores As New LOG_ERRORES_Negocio

    Dim err As New CONTROL_ERRORES_class
#End Region

#Region "EVENTOS ASOCIADOS A LA CARGA DE LA PAGINA"

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            Listar_Preguntas_Respondidas()
            If DevolverUsuarioActivo.propiedad_PK_TIPO_USUARIO = 1 Then
                Listar_Preguntas_Activas()
            End If
            pnl_responder.Visible = False
            txt_Respuesta.Focus()
        End If
    End Sub

#End Region

#Region "METODOS PROPIOS DEL FORMULARIO"

    ''' <summary>
    ''' Instancia a la clase PREGUNTAS_Negocio con el Método Listar_Preguntas_Activas()
    ''' </summary>
    ''' <history>Fecha de Creacion: 13/05/2010</history>
    ''' 
    Sub Listar_Preguntas_Activas()
        Try
            DsPreguntasActivas = Me.CapaNegocioPregunta.Listar_Preguntas_Activas(DevolverUsuarioActivo.propiedad_PK_TIPO_USUARIO, CapaEntidadPregunta)
            Session("categoria2") = DsPreguntasActivas
            If DsPreguntasActivas.Tables(0).Rows.Count = 0 Then
                lbl_mensaje_respuestas.Text = "En este momento no existen preguntas para responder."
            Else
                lbl_mensaje_respuestas.Text = ""
                Grid_Preguntas.DataSource = DsPreguntasActivas
                Grid_Preguntas.DataBind()
            End If
        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmRespuestas.aspx", ex.Message, "Listar_Preguntas_Activas()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    ''' <summary>
    ''' Instancia a la clase PREGUNTAS_Negocio con el Método Listar_Preguntas_Respondidas()
    ''' </summary>
    ''' <history>Fecha de Creacion: 13/05/2010</history>
    ''' 
    Sub Listar_Preguntas_Respondidas()
        Try
            DsPreguntasRespondidas = CapaNegocioPregunta.Listar_Preguntas_Respondidas(CapaEntidadPregunta)
            Session("categoria") = DsPreguntasRespondidas
            If DsPreguntasRespondidas.Tables(0).Rows.Count = 0 Then
                lbl_mensaje_respuestas.Text = "En este momento no existen preguntas activas."
            Else
                lbl_mensaje_respuestas.Text = ""
                Grid_Respuestas.DataSource = DsPreguntasRespondidas
                Grid_Respuestas.DataBind()
            End If
        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmRespuestas.aspx", ex.Message, "Listar_Preguntas_Respondidas()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    ''' <summary>
    ''' Instancia a la clase RESPUESTAS_Negocio con el Método Insertar()
    ''' </summary>
    ''' <history>Fecha creacion 25 Febrero 2010, Roberto Nobili</history>
    ''' 
    Sub Insertar_Respuesta()
        Try
            CapaEntidadRespuesta.propiedad_PK_PREGUNTA = lbl_ID.Text
            CapaEntidadRespuesta.propiedad_PK_USUARIO = lbl_Usuario.Text.ToString
            CapaEntidadRespuesta.propiedad_RES_GLOSA = txt_Respuesta.Text
            CapaNegocioRespuesta.Insertar(CapaEntidadRespuesta)
            txt_Respuesta.Text = ""
            Listar_Preguntas_Activas()
            Listar_Preguntas_Respondidas()
            pnl_responder.Visible = False
        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmRespuestas.aspx", ex.Message, "Insertar_Respuesta()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES GRIDVIEW"

    Protected Sub Grid_Respuestas_PageIndexChanging(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewPageEventArgs) Handles Grid_Respuestas.PageIndexChanging
        Try
            Grid_Respuestas.PageIndex = e.NewPageIndex()
            DsPreguntasRespondidas = Session("categoria")
            Grid_Respuestas.DataSource = DsPreguntasRespondidas.Tables(0)
            Grid_Respuestas.DataBind()
        Catch ex As Exception
        End Try
    End Sub

    Protected Sub Grid_Respuestas_RowEditing(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewEditEventArgs) Handles Grid_Respuestas.RowEditing
        Try
            If DevolverUsuarioActivo.propiedad_PK_TIPO_USUARIO <> 1 Then
                MensajeBox("Usted no tiene privilegios para modificar la respuesta", True)
            Else
                Grid_Respuestas.EditIndex = e.NewEditIndex
                Listar_Preguntas_Respondidas()
                Dim fila As GridViewRow
                fila = Grid_Respuestas.Rows.Item(e.NewEditIndex)
            End If
        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmRespuestas.aspx", ex.Message, "Grid_Respuestas_RowEditing()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
        
    End Sub

    Protected Sub Grid_Respuestas_RowUpdating(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewUpdateEventArgs) Handles Grid_Respuestas.RowUpdating
        Dim fila As GridViewRow
        fila = Grid_Respuestas.Rows.Item(e.RowIndex)

        CapaEntidadRespuesta.propiedad_PK_RESPUESTA = CType(fila.FindControl("lbl_ID"), Label).Text
        CapaEntidadRespuesta.propiedad_PK_USUARIO = DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString
        CapaEntidadRespuesta.propiedad_RES_GLOSA = CType(fila.FindControl("txt_Respuesta"), TextBox).Text

        CapaNegocioRespuesta.Modificar(CapaEntidadRespuesta)
        Grid_Respuestas.EditIndex = -1
        Listar_Preguntas_Respondidas()
    End Sub

    Protected Sub Grid_Respuestas_RowCancelingEdit(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewCancelEditEventArgs) Handles Grid_Respuestas.RowCancelingEdit
        Grid_Respuestas.EditIndex = -1
        Listar_Preguntas_Respondidas()
    End Sub

    Protected Sub Grid_Preguntas_PageIndexChanging(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewPageEventArgs) Handles Grid_Preguntas.PageIndexChanging
        Grid_Preguntas.PageIndex = e.NewPageIndex()
        DsPreguntasActivas = Session("categoria2")
        Grid_Preguntas.DataSource = DsPreguntasActivas.Tables(0)
        Grid_Preguntas.DataBind()
    End Sub

    Protected Sub Grid_Preguntas_RowCommand(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewCommandEventArgs) Handles Grid_Preguntas.RowCommand
        If e.CommandName = "Responder" Then
            pnl_responder.Visible = True
            Dim Fila As GridViewRow
            Fila = Grid_Preguntas.Rows.Item(e.CommandArgument)
            Dim lbl_IDPRE As Label = CType(Fila.FindControl("lbl_IDPRE"), Label)
            lbl_ID.Text = lbl_IDPRE.Text

            Dim lbl_Fecha_Pre As Label = CType(Fila.FindControl("lbl_Fecha_Pre"), Label)
            lbl_Fecha_Pregunta.Text = lbl_Fecha_Pre.Text

            Dim lbl_Pregunta_Pre As Label = CType(Fila.FindControl("lbl_Pregunta_Pre"), Label)
            lbl_Pregunta.Text = lbl_Pregunta_Pre.Text

            Dim lbl_Pre_Por As Label = CType(Fila.FindControl("lbl_Pre_Por"), Label)
            lbl_Usuario.Text = lbl_Pre_Por.Text
        End If
    End Sub

#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES BUTTON"
    Protected Sub btn_Graba_Respuesta_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        If txt_Respuesta.Text = "" Then
            MensajeBox("Debe ingresar una respuesta valida.", True)
        Else
            Insertar_Respuesta()
            Response.Redirect("frmRespuestas.aspx")
        End If
    End Sub

    Protected Sub btn_cancelar_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        pnl_responder.Visible = False
    End Sub
#End Region

End Class
