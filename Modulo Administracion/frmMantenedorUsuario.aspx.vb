
Partial Class Modulo_Administracion_frmMantenedorUsuario
    Inherits PaginaBase_class

#Region "ATRIBUTOS DEL FORMULARIO"
    Dim CapaEntidadUsuario As New USUARIO
    Dim CapaNegocioUsuario As New USUARIO_Negocio
    Dim DsUsuarios As New Data.DataSet

    Dim CapaEntidadTipoUsuario As New TIPO_USUARIO
    Dim CapaNegocioTipoUsuario As New TIPO_USUARIO_Negocio
    Dim DsTipoUsuario As Data.DataSet

    Dim CapaEntidadEstadoUsuario As New ESTADO_USUARIO
    Dim CapaNegocioEstadoUsuario As New ESTADO_USUARIO_Negocio
    Dim DsEstadoUsuario As New Data.DataSet

    Dim err As New CONTROL_ERRORES_class
#End Region

#Region "EVENTOS ASOCIADOS A LA CARGA DE LA PAGINA"
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            cargarGrillaUsuarios()
            cargarTipoUsuario(drop_tipo_usuario_agregar)
            cargarEstadoUsuario(drop_estado_usuario_agregar)
        End If
    End Sub
#End Region

#Region "METODOS PROPIOS DEL FORMULARIO"
    Public Sub limpiar()
        txt_usuario.Text = ""
        txt_nombre.Text = ""
        txt_email.Text = ""
        txt_ap_paterno.Text = ""
        txt_pass.Text = ""
        pnl_Nuevo_usuario.Visible = False
    End Sub

    Sub Agregar_Nuevo_Usuario()
        Try
            CapaEntidadUsuario.propiedad_PK_USUARIO = txt_usuario.Text
            CapaEntidadUsuario.propiedad_PK_TIPO_USUARIO = drop_tipo_usuario_agregar.SelectedValue
            CapaEntidadUsuario.propiedad_USU_PASS = txt_pass.Text
            CapaEntidadUsuario.propiedad_USU_NOMBRE = txt_nombre.Text
            CapaEntidadUsuario.propiedad_USU_APE_PAT = txt_ap_paterno.Text
            CapaEntidadUsuario.propiedad_USU_EMAIL = txt_email.Text
            CapaEntidadUsuario.propiedad_PK_ESTADO_USUARIO = drop_estado_usuario_agregar.SelectedValue

            CapaNegocioUsuario.Insertar(CapaEntidadUsuario)
        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmMantenedorUsuario.aspx", ex.Message, "Agregar_Nuevo_Usuario()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
        Me.cargarGrillaUsuarios()
        Me.limpiar()
    End Sub
#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES DROPDOWNLIST"
    Public Sub cargarTipoUsuario(ByVal lista As DropDownList)
        Try
            Me.DsTipoUsuario = CapaNegocioTipoUsuario.Listar(CapaEntidadTipoUsuario)
            lista.DataSource = DsTipoUsuario
            lista.DataTextField = DsTipoUsuario.Tables(0).Columns(1).ToString
            lista.DataValueField = DsTipoUsuario.Tables(0).Columns(0).ToString
            lista.DataBind()
        Catch ex As Exception
            Me.err.Insertar_Error(Me.DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmMantenedorUsuario.aspx", ex.Message, "cargarTipoUsuario()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    Public Sub cargarEstadoUsuario(ByVal lista As DropDownList)
        Try
            Me.DsEstadoUsuario = Me.CapaNegocioEstadoUsuario.Listar(Me.CapaEntidadEstadoUsuario)
            lista.DataSource = Me.DsEstadoUsuario
            lista.DataTextField = Me.DsEstadoUsuario.Tables(0).Columns(1).ToString
            lista.DataValueField = Me.DsEstadoUsuario.Tables(0).Columns(0).ToString
            lista.DataBind()
        Catch ex As Exception
            Me.err.Insertar_Error(Me.DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmMantenedorUsuario.aspx", ex.Message, "cargarEstadoUsuario()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub
#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES GRIDVIEW"

    Public Sub cargarGrillaUsuarios()
        Try
            DsUsuarios = CapaNegocioUsuario.Listar(CapaEntidadUsuario)
            Session("Usuarios") = DsUsuarios
            grv_usuarios.DataSource = DsUsuarios
            grv_usuarios.DataBind()
        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmMantenedorUsuario.aspx", ex.Message, "cargarGrillaUsuarios()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    Protected Sub grv_usuarios_PageIndexChanging(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewPageEventArgs) Handles grv_usuarios.PageIndexChanging
        Try
            grv_usuarios.PageIndex = e.NewPageIndex()
            DsUsuarios = Session("Usuarios")
            grv_usuarios.DataSource = DsUsuarios.Tables(0)
            grv_usuarios.DataBind()
        Catch ex As Exception
        End Try
    End Sub

    Protected Sub grv_usuarios_RowEditing(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewEditEventArgs) Handles grv_usuarios.RowEditing
        Try
            grv_usuarios.EditIndex = e.NewEditIndex
            cargarGrillaUsuarios()

            Dim fila As GridViewRow
            fila = Me.grv_usuarios.Rows.Item(e.NewEditIndex)

            Dim lbl_tipo_edit As Label = CType(fila.FindControl("lbl_tipo_edit"), Label)
            Dim ddl_tipo As DropDownList = CType(fila.FindControl("ddl_tipo"), DropDownList)
            cargarTipoUsuario(CType(fila.FindControl("ddl_tipo"), DropDownList))
            ddl_tipo.SelectedValue = lbl_tipo_edit.Text

            Dim lbl_estado_usuario_edit As Label = CType(fila.FindControl("lbl_estado_usuario_edit"), Label)
            Dim drop_estado_usuario As DropDownList = CType(fila.FindControl("drop_estado_usuario"), DropDownList)
            cargarEstadoUsuario(CType(fila.FindControl("drop_estado_usuario"), DropDownList))
            drop_estado_usuario.SelectedValue = lbl_estado_usuario_edit.Text

        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmMantenedorUsuario.aspx", ex.Message, "grv_usuarios_RowEditing()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    Protected Sub grv_usuarios_RowUpdating(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewUpdateEventArgs) Handles grv_usuarios.RowUpdating
        Try
            Dim fila As GridViewRow
            fila = grv_usuarios.Rows.Item(e.RowIndex)

            CapaEntidadUsuario.propiedad_PK_USUARIO = CType(fila.FindControl("lbl_edit_usuario"), Label).Text
            CapaEntidadUsuario.propiedad_PK_TIPO_USUARIO = CType(fila.FindControl("ddl_tipo"), DropDownList).SelectedValue
            CapaEntidadUsuario.propiedad_USU_PASS = CType(fila.FindControl("txt_pass"), TextBox).Text
            CapaEntidadUsuario.propiedad_USU_NOMBRE = CType(fila.FindControl("txt_nombre"), TextBox).Text
            CapaEntidadUsuario.propiedad_USU_APE_PAT = CType(fila.FindControl("txt_ap_paterno"), TextBox).Text
            CapaEntidadUsuario.propiedad_USU_EMAIL = CType(fila.FindControl("txt_email"), TextBox).Text
            CapaEntidadUsuario.propiedad_PK_ESTADO_USUARIO = CType(fila.FindControl("drop_estado_usuario"), DropDownList).SelectedValue
            CapaNegocioUsuario.Modificar(CapaEntidadUsuario)
            grv_usuarios.EditIndex = -1
            cargarGrillaUsuarios()
        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmMantenedorUsuario.aspx", ex.Message, "grv_usuarios_RowUpdating()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    Protected Sub grv_usuarios_RowCancelingEdit(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewCancelEditEventArgs) Handles grv_usuarios.RowCancelingEdit
        grv_usuarios.EditIndex = -1
        cargarGrillaUsuarios()
    End Sub
#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES BUTTON"
    Protected Sub Btn_Agregar_usuario_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Btn_Agregar_usuario.Click
        pnl_Nuevo_usuario.Visible = True
    End Sub

    Protected Sub btn_guardar_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        Agregar_Nuevo_Usuario()
    End Sub

    Protected Sub btn_cancelar_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        pnl_Nuevo_usuario.Visible = False
    End Sub
#End Region

    Protected Sub grv_usuarios_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)

    End Sub
End Class
