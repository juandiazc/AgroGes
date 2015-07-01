
Partial Class Modulo_Administracion_frmPreguntas
    Inherits PaginaBase_class

#Region "ATRIBUTOS DEL FORMULARIO"
    Dim CapaEntidadPregunta As New PREGUNTA
    Dim CapaNegocioPregunta As New PREGUNTA_Negocio

    Dim CapaEntidadLogErrores As New LOG_ERRORES
    Dim CapaNegocioLogErrores As New LOG_ERRORES_Negocio

    Dim err As New CONTROL_ERRORES_class
#End Region

#Region "EVENTOS ASOCIADOS A LA CARGA DE LA PAGINA"
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            lbl_Usuario.Text = DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString()
        End If
    End Sub
#End Region

#Region "METODOS PROPIOS DEL FORMULARIO"

    ''' <summary>
    ''' Instancia a la clase PREGUNTAS_Negocio con el Método Insertar()
    ''' </summary>
    ''' <history>Fecha de Creacion: 13/05/2010</history>
    ''' 
    Sub Insertar_Pregunta()
        Try
            CapaEntidadPregunta.propiedad_PK_USUARIO = DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString
            CapaEntidadPregunta.propiedad_PRE_TEMA = txtTema.Text
            CapaEntidadPregunta.propiedad_PRE_GLOSA = txtPregunta.Text
            CapaNegocioPregunta.Insertar(CapaEntidadPregunta)
            lbl_Resultado.Text = "El ingreso de su duda o consulta a sido correcto, le responderemos a la brevedad."
            txtTema.Text = ""
            txtPregunta.Text = ""
        Catch ex As Exception
            err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmPreguntas.aspx", ex.Message, "Insertar_Pregunta()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub
#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES BUTTON"
    Protected Sub btnConsultar_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        If txtTema.Text = "" Or txtPregunta.Text = "" Then
            MensajeBox("Debe ingresar un tema y una pregunta valida.", True)
        Else
            Insertar_Pregunta()
        End If
    End Sub
#End Region

End Class
