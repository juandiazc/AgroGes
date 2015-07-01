Imports System.IO
Imports System.Data
Imports System.Data.SqlClient
Partial Class Modulo_Informaciones_frmGANTT1
    Inherits PaginaBase_class
    Dim CN As New SqlClient.SqlConnection("Server=TAMARUGO;database=BASES_AGROPECUARIAS_T;uid=usuarioagropecuarias;pwd=usuarioagropecuarias")
#Region "ATRIBUTOS DEL FORMULARIO"
    Dim CapaEntidadGANTT As New GANTT
    Dim CapaNegocioGANTT As New GANTT_Negocio
    Dim DsGANTTs As New Data.DataSet
    Dim DsGANTTs2 As New Data.DataSet
    Dim CapaEntidadLogErrores As New LOG_ERRORES
    Dim CapaNegocioLogErrores As New LOG_ERRORES_Negocio

    Dim err As New CONTROL_ERRORES_class

    Dim Ejecucion As Integer = 0
#End Region

#Region "EVENTOS ASOCIADOS A LA CARGA DE LA PAGINA"

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        If Not Page.IsPostBack Then
            Lbl_autor.Text = DevolverUsuarioActivo.propiedad_USU_NOMBRE + " " + DevolverUsuarioActivo.propiedad_USU_APE_PAT
            pnl_mantener_noticias.Visible = True
            Listar_GANTT()
            obtener_operacion()
            ModalPopupExtender3.Enabled = True
            For Each row As GridViewRow In Grid_GANTT.Rows
                If CType(row.FindControl("lbl_operacion"), Label).Text = "" Then
                    CType(row.FindControl("lbl_operacion1"), Label).Text = "2"
                    CType(row.FindControl("lbl_operacion2"), Label).Text = "2"
                Else
                    CType(row.FindControl("lbl_operacion1"), Label).Text = "Nombre de " + CType(row.FindControl("lbl_operacion"), Label).Text
                    CType(row.FindControl("lbl_operacion2"), Label).Text = "Nombre de " + CType(row.FindControl("lbl_operacion"), Label).Text
                End If
            Next
        End If

        For Each row As GridViewRow In Grid_GANTT.Rows
            If CType(row.FindControl("lbl_operacion"), Label).Text = "" Then
                CType(row.FindControl("lbl_operacion1"), Label).Text = "1"
                CType(row.FindControl("lbl_operacion2"), Label).Text = "1"
            Else
                CType(row.FindControl("lbl_operacion1"), Label).Text = "Nombre de " + CType(row.FindControl("lbl_operacion"), Label).Text
                CType(row.FindControl("lbl_operacion2"), Label).Text = "Nombre de " + CType(row.FindControl("lbl_operacion"), Label).Text
            End If
        Next

    End Sub
    Sub obtener_sistema()

        CN.Open()
        Dim CONSULTAENC As String = "SELECT 0 AS Cod, 'Seleccione Sistema' UNION SELECT gs.ID, gs.SISTEMA FROM GES_GANTT_SISTEMAS gs"
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)


        drop_sistema.DataSource = exeNUMMAX
        drop_sistema.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_sistema.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_sistema.DataBind()

        '  txt_nombre.Focus()
        CN.Close()

    End Sub
    Sub obtener_producto()

        CN.Open()
        Dim CONSULTAENC As String = "SELECT 0 AS Cod, 'Seleccione Producto' AS Descrip UNION SELECT gg.ID,gg.PRODUCTO FROM GES_GANTT_PRODUCTO gg"
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)


        drop_producto.DataSource = exeNUMMAX
        drop_producto.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_producto.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_producto.DataBind()

        '  txt_nombre.Focus()
        CN.Close()

    End Sub
    Sub obtener_hito()

        CN.Open()
        Dim a As String = CInt(drop_sistema.SelectedIndex)
        Dim CONSULTAENC As String = "SELECT gg.ID_1,gg.Hito FROM GES_HITOS gg WHERE gg.Sistema=" + drop_sistema.SelectedValue.ToString + " ORDER BY gg.ID_1 ASC"
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)


        drop_hito.DataSource = exeNUMMAX
        drop_hito.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_hito.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_hito.DataBind()

        '  txt_nombre.Focus()
        CN.Close()

    End Sub
    Sub obtener_año()
        CN.Open()
        Dim CONSULTAENC As String = "SELECT 0 AS Cod, 'Seleccione Año' AS Año UNION SELECT gg.ID,CAST(gg.AÑO AS varchar(4)) FROM GES_GANTT_AÑOS gg"
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)

        drop_año.DataSource = exeNUMMAX
        drop_año.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_año.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_año.DataBind()
        '  txt_nombre.Focus()
        CN.Close()
    End Sub

    Sub obtener_operacion()
        CN.Open()
        Dim CONSULTAENC As String = "SELECT 0 AS Cod, 'Seleccione operación' AS operacion UNION SELECT 1,'Cita' UNION SELECT 2,'Salida de Capacitación' UNION SELECT 3,'Salida de supervición' UNION SELECT 4,'Minuta'"
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)

        drop_operacion.DataSource = exeNUMMAX
        drop_operacion.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_operacion.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_operacion.DataBind()
        '  txt_nombre.Focus()
        CN.Close()
    End Sub

#End Region

#Region "METODOS PROPIOS DEL FORMULARIO"

    ''' <summary>
    ''' Instancia a la clase NOTICIA_Negocio con el método Listar() 
    ''' </summary>
    ''' <remarks></remarks>
    ''' <history>Fecha de Creacion: 13/05/2010</history>
    ''' 
    Sub Listar_GANTT()
        Try
            If drop_sistema.SelectedIndex = -1 Then
                CapaEntidadGANTT.propiedad_Sistema = 0
            Else
                CapaEntidadGANTT.propiedad_Sistema = drop_sistema.SelectedIndex
            End If
            If drop_hito.SelectedIndex = -1 Then
                CapaEntidadGANTT.propiedad_ID_H = 0
            Else
                CapaEntidadGANTT.propiedad_ID_H = drop_hito.SelectedIndex
            End If
            If drop_producto.SelectedIndex = -1 Then
                CapaEntidadGANTT.propiedad_ID_P = 0
            Else
                CapaEntidadGANTT.propiedad_ID_P = drop_producto.SelectedIndex
            End If
            If drop_año.SelectedIndex = -1 Then
                CapaEntidadGANTT.propiedad_ID_A = 0
            Else
                CN.Open()
                Dim CONSULTAENC1 As String = "SELECT gga.AÑO FROM GES_GANTT_AÑOS gga WHERE gga.ID='" + drop_año.SelectedIndex.ToString + "'"
                Dim NUMMAXPES2 As New SqlCommand(CONSULTAENC1, CN)
                Dim preexeNUMMAX2 As New SqlDataAdapter(NUMMAXPES2)
                Dim exeNUMMAX2 As New DataTable()
                preexeNUMMAX2.Fill(exeNUMMAX2)
                If exeNUMMAX2.Rows.Count() <> 0 Then
                    CapaEntidadGANTT.propiedad_ID_A = exeNUMMAX2.Rows(0).Item(0).ToString()
                Else
                    CapaEntidadGANTT.propiedad_ID_A = 0
                End If

                CN.Close()

            End If

            CapaEntidadGANTT.propiedad_Operacion = drop_operacion.SelectedIndex
            Me.DsGANTTs = CapaNegocioGANTT.ListarCheck3(CapaEntidadGANTT)
            If DsGANTTs.Tables(0).Rows.Count = 0 Then
                lbl_mensaje_noticias.Text = "En este momento no hay actividades para el tipo de sistema seleccionado."
                Grid_GANTT.Visible = False
            Else
                lbl_mensaje_noticias.Text = ""
                Session("GANTTs") = DsGANTTs
                Grid_GANTT.DataSource = DsGANTTs
                Grid_GANTT.DataBind()
                Grid_GANTT.Visible = True
                '  MarcarCheck()
            End If
        Catch ex As Exception
            Me.err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmGANTTs.aspx", ex.Message, "Listar_GANTT()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub

    Sub MarcarCheck()
        Try
            CapaEntidadGANTT.propiedad_ID_S = drop_sistema.SelectedIndex
            Me.DsGANTTs2 = CapaNegocioGANTT.ListarCheck4(CapaEntidadGANTT)
            Dim actividad As String = ""
            Dim actividad2 As String = ""
            For Each row1 As GridViewRow In Grid_GANTT.Rows               
                If row1.RowType = DataControlRowType.DataRow Then
                    Dim chkRow As CheckBox = TryCast(row1.Cells(1).FindControl("chkRow"), CheckBox)                    
                    chkRow.Checked = False
                End If
            Next
            For Each row As DataRow In DsGANTTs2.Tables(0).Rows
                actividad = row("ID_Ac")
                For Each row1 As GridViewRow In Grid_GANTT.Rows
                    actividad2 = CType(row1.Cells(0).FindControl("lbl_Actividades1"), Label).Text
                    If row1.RowType = DataControlRowType.DataRow Then
                        Dim chkRow As CheckBox = TryCast(row1.Cells(1).FindControl("chkRow"), CheckBox)
                        If actividad = actividad2 Then
                            If row("ID_H") = CType(row1.Cells(0).FindControl("lbl_Hito"), Label).Text Then
                                If row("ID_A") = CType(row1.Cells(0).FindControl("lbl_año"), Label).Text Then
                                    If row("ID_Ac") = CType(row1.Cells(0).FindControl("lbl_Actividades1"), Label).Text Then
                                        If row("Nombre_cita") = CType(row1.Cells(0).FindControl("lbl_Nombre_operacion"), Label).Text Then
                                            If row("Operacion") = CType(row1.Cells(0).FindControl("lbl_Operacion"), Label).Text Then
                                                chkRow.Checked = True
                                            End If

                                        End If
                                    End If
                                End If
                            End If
                        End If
                    End If
                Next
            Next

        Catch ex As Exception
            Me.err.Insertar_Error(DevolverUsuarioActivo.propiedad_PK_USUARIO.ToString, "Aplicación", "frmGANTTs.aspx", ex.Message, "Marcar_Check()")
            Response.Redirect("../PaginaDeError.aspx")
        End Try
    End Sub
#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES BUTTON"

#End Region

#Region "EVENTOS ASOCIADOS A CONTROLES GRIDVIEW"
    Protected Sub Grid_GANTT_PageIndexChanging(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewPageEventArgs) Handles Grid_GANTT.PageIndexChanging
        Try
            Me.Grid_GANTT.PageIndex = e.NewPageIndex()
            DsGANTTs = Session("GANTTs")
            Grid_GANTT.DataSource = DsGANTTs.Tables(0)
            Grid_GANTT.DataBind()
        Catch ex As Exception
        End Try
    End Sub

#End Region
    Protected Sub Grid_GANTT_RowCommand(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewCommandEventArgs) Handles Grid_GANTT.RowCommand
        Dim c As String
        Dim a5 As String

        Dim a1 As String = drop_sistema.SelectedIndex
        Dim a2 As String ' = drop_hito.SelectedIndex
        Dim a3 As String = drop_año.SelectedIndex
        Dim a4 As String = drop_producto.SelectedIndex
        Dim CONSULTAENC As String
        Dim CONSULTAENC1 As String
        Dim aux As String
        Dim Id_op As String
        Dim fila As GridViewRow
        fila = Grid_GANTT.Rows.Item(e.CommandArgument)
        For Each row As GridViewRow In Grid_GANTT.Rows
            If CType(row.FindControl("lbl_operacion"), Label).Text = "" Then
                CType(row.FindControl("lbl_operacion1"), Label).Text = "3"
                CType(row.FindControl("lbl_operacion2"), Label).Text = "3"
                aux = drop_operacion.SelectedIndex
            Else
                CType(row.FindControl("lbl_operacion1"), Label).Text = "Nombre de " + CType(row.FindControl("lbl_operacion"), Label).Text
                CType(row.FindControl("lbl_operacion2"), Label).Text = "Nombre de " + CType(row.FindControl("lbl_operacion"), Label).Text
                If CType(row.FindControl("lbl_operacion"), Label).Text = "Cita" Then
                    aux = 1
                ElseIf CType(row.FindControl("lbl_operacion"), Label).Text = "Capacitación" Then
                    aux = 2
                ElseIf CType(row.FindControl("lbl_operacion"), Label).Text = "Supervisión" Then
                    aux = 3
                Else
                    aux = 4
                End If
            End If
        Next
        'HOla prueba 
        CN.Open()
            Select Case e.CommandName
                Case "Eliminar"
                    'CapaEntidadGANTT.propiedad_ID = CType(fila.FindControl("lbl_Sistema"), Label).Text
                    CONSULTAENC = "DELETE FROM GES_GANTT_ASIGNAR_CITA WHERE ID_S=" + CType(fila.FindControl("lbl_Sistema"), Label).Text + " AND ID_P=" + CType(fila.FindControl("lbl_producto"), Label).Text + " AND ID_A=" + CType(fila.FindControl("lbl_año"), Label).Text + " AND ID_H=" + CType(fila.FindControl("lbl_Hito"), Label).Text + " AND ID_Ac='" + CType(fila.FindControl("lbl_Actividades1"), Label).Text + "' AND Operacion='" + aux + "'"
                    Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
                    Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
                    Dim exeNUMMAX As New DataTable()
                    preexeNUMMAX.Fill(exeNUMMAX)
                    CType(fila.FindControl("chkRow"), CheckBox).Checked = False
                    'Listar_GANTT()
                Case "AgregarD"
                    a1 = CType(fila.FindControl("lbl_Sistema"), Label).Text
                    a3 = CType(fila.FindControl("lbl_año"), Label).Text
                    a4 = CType(fila.FindControl("lbl_producto"), Label).Text
                    c = CType(fila.FindControl("lbl_Actividades1"), Label).Text
                    a2 = CType(fila.FindControl("lbl_Hito"), Label).Text
                    a5 = CType(fila.FindControl("lbl_Detalle_Actividad"), Label).Text

                CONSULTAENC1 = "SELECT CAST (CASE WHEN MAX(gac.ID_op) IS NULL THEN 1 ELSE MAX(gac.ID_op)+1 END AS Varchar(10)) AS ID_op FROM GES_GANTT_ASIGNAR_CITA gac"
                Dim NUMMAXPES2 As New SqlCommand(CONSULTAENC1, CN)
                Dim preexeNUMMAX2 As New SqlDataAdapter(NUMMAXPES2)
                Dim exeNUMMAX2 As New DataTable()
                preexeNUMMAX2.Fill(exeNUMMAX2)
                Id_op = exeNUMMAX2.Rows(0).Item("ID_op").ToString

                If CType(fila.FindControl("lbl_Nombre_operacion"), Label).Text = "" And drop_operacion.SelectedIndex <> 0 Then
                    CONSULTAENC1 = "SELECT * FROM GES_GANTT_ASIGNAR_CITA WHERE ID_P=" + a4 + " AND ID_A=" + a3 + " AND ID_S=" + a1 + " AND ID_H=" + a2 + " AND ID_Ac=" + c + " AND Operacion='" + aux + "'"
                ElseIf CType(fila.FindControl("lbl_Nombre_operacion"), Label).Text = "" And drop_operacion.SelectedIndex = 0 Then
                    CONSULTAENC1 = ""
                Else
                    CONSULTAENC1 = "SELECT * FROM GES_GANTT_ASIGNAR_CITA WHERE ID_P=" + a4 + " AND ID_A=" + a3 + " AND ID_S=" + a1 + " AND ID_H=" + a2 + " AND ID_Ac=" + c + " AND Operacion='" + aux + "' AND Nombre_Cita='" + CType(fila.FindControl("txt_nombre_cita1"), TextBox).Text + "'"
                End If

                Dim NUMMAXPES1 As New SqlCommand(CONSULTAENC1, CN)
                    Dim preexeNUMMAX1 As New SqlDataAdapter(NUMMAXPES1)
                    Dim exeNUMMAX1 As New DataTable()
                    preexeNUMMAX1.Fill(exeNUMMAX1)
                    If exeNUMMAX1.Rows.Count = 0 Then
                    CONSULTAENC = "INSERT INTO GES_GANTT_ASIGNAR_CITA(	ID_P,	ID_A,	ID_S,	ID_H,ID_Ac,ID_op,Ac_Detalle,Nombre_cita,Lugar,Fecha_Realizacion,Hora_Inicio,Hora_Termino,Comentarios,Operacion)SELECT " + a4 + "," + a3 + "," + a1 + "," + a2 + "," + c + ",'" + Id_op + "','" + a5 + "','" + CType(fila.FindControl("txt_nombre_cita1"), TextBox).Text + "','" + CType(fila.FindControl("txt_lugar1"), TextBox).Text + "','" + CType(fila.FindControl("txt_fecha_r1"), TextBox).Text + "','" + CType(fila.FindControl("txt_horai1"), TextBox).Text + "','" + CType(fila.FindControl("txt_horat1"), TextBox).Text + "','" + CType(fila.FindControl("text_coment1"), TextBox).Text + "','" + aux + "'"
                        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
                        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
                        Dim exeNUMMAX As New DataTable()
                        preexeNUMMAX.Fill(exeNUMMAX)
                    Else
                    MensajeBox("No se ha asignado la operación: " + CType(fila.FindControl("txt_nombre_cita1"), Label).Text + " ya sea porque existe o porque no ha seleccionado cita en la lista desplegable.", True)
                    End If
                    CType(fila.FindControl("chkRow"), CheckBox).Checked = True
                    'Listar_GANTT()
                Case "Modificar"
                CONSULTAENC = "UPDATE GES_GANTT_ASIGNAR_CITA SET Nombre_cita='" + CType(fila.FindControl("txt_nombre_cita"), TextBox).Text + "', Lugar='" + CType(fila.FindControl("txt_lugar"), TextBox).Text + "', Fecha_Realizacion='" + CType(fila.FindControl("txt_fecha_r1"), TextBox).Text + "',Hora_Inicio='" + CType(fila.FindControl("txt_horai"), TextBox).Text + "',Hora_Termino='" + CType(fila.FindControl("txt_horat"), TextBox).Text + "',Comentarios='" + CType(fila.FindControl("text_coment1"), TextBox).Text + "' WHERE ID_S=" + CType(fila.FindControl("lbl_Sistema"), Label).Text + " AND ID_P=" + CType(fila.FindControl("lbl_producto"), Label).Text + " AND ID_A=" + CType(fila.FindControl("lbl_año"), Label).Text + " AND ID_H=" + CType(fila.FindControl("lbl_Hito"), Label).Text + " AND ID_Ac='" + CType(fila.FindControl("lbl_Actividades1"), Label).Text + "' AND Operacion='" + aux + "'"
                    Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
                    Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
                    Dim exeNUMMAX As New DataTable()
                    preexeNUMMAX.Fill(exeNUMMAX)
                    'Listar_GANTT()
                Case "Salir"
                    
        End Select

        CN.Close()
        Listar_GANTT()

    End Sub
    Protected Sub drop_sistema_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_sistema.SelectedIndexChanged
        If drop_sistema.SelectedIndex <> 0 Then
            drop_hito.Visible = True
            drop_año.Visible = True
            drop_producto.Visible = True
            obtener_producto()
            obtener_hito()
            obtener_año()         
        Else
            drop_hito.Visible = False
            drop_año.Visible = False
            drop_producto.Visible = False

        End If
       
        Listar_GANTT()
    End Sub

    Protected Sub drop_hito_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_hito.SelectedIndexChanged
        If drop_operacion.SelectedIndex <> 0 Then
            Listar_GANTT()
            ' MarcarCheck()
        Else
            Listar_GANTT()
            drop_hito.SelectedIndex = 0
            MensajeBox("Debe seleccionar una operación", True)
        End If      
    End Sub
    Protected Sub drop_año_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_año.SelectedIndexChanged
        If drop_operacion.SelectedIndex <> 0 Then
            Listar_GANTT()
            ' MarcarCheck()
        Else
            Listar_GANTT()
            drop_año.SelectedIndex = 0
            MensajeBox("Debe seleccionar una operación", True)
        End If
    End Sub
    Protected Sub drop_producto_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_producto.SelectedIndexChanged
        If drop_operacion.SelectedIndex <> 0 Then
            Listar_GANTT()
            '  MarcarCheck()
        Else
            Listar_GANTT()
            drop_producto.SelectedIndex = 0
            MensajeBox("Debe seleccionar una operación", True)
        End If
    End Sub
    Protected Sub btn_agregar2_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_agregar2.Click

        Dim CONSULTAENC As String
        Dim CONSULTAENC1 As String

        Dim c As String
        Dim a5 As String

        Dim a1 As String = drop_sistema.SelectedIndex
        Dim a2 As String ' = drop_hito.SelectedIndex
        Dim a3 As String = drop_año.SelectedIndex
        Dim a4 As String = drop_producto.SelectedIndex

        Dim aux As String = drop_operacion.SelectedIndex

        Dim Id_op As String
        CONSULTAENC1 = "SELECT CAST (CASE WHEN MAX(gac.ID_op) IS NULL THEN 1 ELSE MAX(gac.ID_op)+1 END AS Varchar(10)) AS ID_op FROM GES_GANTT_ASIGNAR_CITA gac"
        Dim NUMMAXPES2 As New SqlCommand(CONSULTAENC1, CN)
        Dim preexeNUMMAX2 As New SqlDataAdapter(NUMMAXPES2)
        Dim exeNUMMAX2 As New DataTable()
        preexeNUMMAX2.Fill(exeNUMMAX2)
        Id_op = exeNUMMAX2.Rows(0).Item("ID_op").ToString

        If drop_operacion.SelectedIndex <> 0 And txt_nombre_cita2.Text <> "" And txt_lugar2.Text <> "" And txt_fecha_r2.Text <> "" And txt_horai2.Text <> "" And txt_horat2.Text <> "" Then
            CN.Open()
            For Each row As GridViewRow In Grid_GANTT.Rows
                If row.RowType = DataControlRowType.DataRow Then
                    Dim chkRow As CheckBox = TryCast(row.Cells(1).FindControl("chkRow"), CheckBox)
                    If chkRow.Checked Then
                        a1 = CType(row.Cells(1).FindControl("lbl_Sistema"), Label).Text
                        a3 = CType(row.Cells(1).FindControl("lbl_año"), Label).Text
                        a4 = CType(row.Cells(1).FindControl("lbl_producto"), Label).Text
                        c = CType(row.Cells(1).FindControl("lbl_Actividades1"), Label).Text
                        a2 = CType(row.Cells(1).FindControl("lbl_Hito"), Label).Text
                        a5 = CType(row.Cells(1).FindControl("lbl_Detalle_Actividad"), Label).Text
                        'lbl_Nombre_operacion
                        If CType(row.Cells(1).FindControl("lbl_Nombre_operacion"), Label).Text = "" Then
                            CONSULTAENC1 = "SELECT * FROM GES_GANTT_ASIGNAR_CITA WHERE ID_P=" + a4 + " AND ID_A=" + a3 + " AND ID_S=" + a1 + " AND ID_H=" + a2 + " AND ID_Ac=" + c + " AND Operacion='" + aux + "'"
                        Else
                            CONSULTAENC1 = "SELECT * FROM GES_GANTT_ASIGNAR_CITA WHERE ID_P=" + a4 + " AND ID_A=" + a3 + " AND ID_S=" + a1 + " AND ID_H=" + a2 + " AND ID_Ac=" + c + " AND Operacion='" + aux + "' AND Nombre_Cita='" + CType(row.Cells(1).FindControl("txt_nombre_cita1"), TextBox).Text + "'"
                        End If
                        Dim NUMMAXPES1 As New SqlCommand(CONSULTAENC1, CN)
                        Dim preexeNUMMAX1 As New SqlDataAdapter(NUMMAXPES1)
                        Dim exeNUMMAX1 As New DataTable()
                        preexeNUMMAX1.Fill(exeNUMMAX1)
                        If exeNUMMAX1.Rows.Count = 0 Then
                            CONSULTAENC = "INSERT INTO GES_GANTT_ASIGNAR_CITA(	ID_P,	ID_A,	ID_S,	ID_H,ID_Ac,ID_op,Ac_Detalle,Nombre_cita,Lugar,Fecha_Realizacion,Hora_Inicio,Hora_Termino,Comentarios,Operacion)SELECT " + a4 + "," + a3 + "," + a1 + "," + a2 + "," + c + ",'" + Id_op + "','" + a5 + "','" + txt_nombre_cita2.Text + "','" + txt_lugar2.Text + "','" + txt_fecha_r2.Text + "','" + txt_horai2.Text + "','" + txt_horat2.Text + "','" + text_coment2.Text + "','" + aux + "'"
                            Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
                            Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
                            Dim exeNUMMAX As New DataTable()
                            preexeNUMMAX.Fill(exeNUMMAX)
                        Else
                            MensajeBox("No se ha asignado la cita: " + CType(row.Cells(1).FindControl("txt_nombre_cita1"), Label).Text + " porque ya existe.", True)
                        End If
                        'txt_nombre.Focus()
                        'Listar_GANTT()   
                        'Pasa asignar y desasignar automatico
                        'Else
                        '    a1 = CType(row.Cells(1).FindControl("lbl_Sistema"), Label).Text
                        '    a3 = CType(row.Cells(1).FindControl("lbl_año"), Label).Text
                        '    a4 = CType(row.Cells(1).FindControl("lbl_producto"), Label).Text
                        '    a = CType(row.Cells(1).FindControl("lbl_Actividades"), Label).Text
                        '    c = CType(row.Cells(1).FindControl("lbl_Sistema"), Label).Text
                        '    a2 = CType(row.Cells(1).FindControl("lbl_Hito"), Label).Text
                        '    CONSULTAENC1 = "SELECT * FROM GES_GANTT_ASIGNAR_CITA WHERE ID_P=" + a4 + " AND ID_A=" + a3 + " AND ID_S=" + a1 + " AND ID_H=" + a2 + " AND ID_Ac=" + c
                        '    Dim NUMMAXPES1 As New SqlCommand(CONSULTAENC1, CN)
                        '    Dim preexeNUMMAX1 As New SqlDataAdapter(NUMMAXPES1)
                        '    Dim exeNUMMAX1 As New DataTable()
                        '    preexeNUMMAX1.Fill(exeNUMMAX1)
                        '    If exeNUMMAX1.Rows.Count <> 0 Then
                        '        CONSULTAENC = "DELETE FROM GES_GANTT_ASIGNAR_CITA WHERE ID_P=" + a4 + " AND ID_A=" + a3 + " AND ID_S=" + a1 + " AND ID_H=" + a2 + " AND ID_Ac=" + c
                        '        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
                        '        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
                        '        Dim exeNUMMAX As New DataTable()
                        '        preexeNUMMAX.Fill(exeNUMMAX)
                        '        'txt_nombre.Focus()
                        '        'Listar_GANTT()
                        ' End If
                    End If
                End If
            Next
            MensajeBox("Se ha asignado la cita a las actividades seleccionadas", True)
            CN.Close()
        Else
            If drop_operacion.SelectedIndex = 0 Then
                MensajeBox("Debe indicar el tipo de operación (lista desplegable)", True)
            Else
                MensajeBox("Faltan campos por llenar", True)
            End If
        End If
        Listar_GANTT()
    End Sub
    Protected Sub btn_asignar_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_asignar.Click
        If drop_sistema.SelectedIndex = 0 Then
            MensajeBox("Debe seleccionar sistema", True)
        ElseIf drop_operacion.SelectedIndex = 0 Then
            MensajeBox("Debe seleccionar operación", True)
            pnl_contacto_2.Visible = False
            pnl_contacto_2.Enabled = False
        Else
            pnl_contacto_2.Visible = True
            pnl_contacto_2.Enabled = True
        End If
    End Sub
    Protected Sub drop_operacion_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_operacion.SelectedIndexChanged

        If drop_operacion.SelectedIndex = 1 Then            
            '  MarcarCheck()
            lbl_operacion.Text = "Nombre de Cita"
            ModalPopupExtender3.Enabled = True
            For Each row As GridViewRow In Grid_GANTT.Rows
                CType(row.FindControl("lbl_operacion1"), Label).Text = "Nombre de Cita"
                CType(row.FindControl("lbl_operacion2"), Label).Text = "Nombre de Cita"
            Next
            drop_sistema.Visible = True
            obtener_sistema()
            Listar_GANTT()
            '  Grid_GANTT.Visible = True
        ElseIf drop_operacion.SelectedIndex = 2 Then
            ' MarcarCheck()
            lbl_operacion.Text = "Nombre de Capacitación"
            ModalPopupExtender3.Enabled = True
            For Each row As GridViewRow In Grid_GANTT.Rows
                CType(row.FindControl("lbl_operacion1"), Label).Text = "Nombre de Capacitación"
                CType(row.FindControl("lbl_operacion2"), Label).Text = "Nombre de Capacitación"
            Next
            obtener_sistema()
            drop_sistema.Visible = True
            Listar_GANTT()
            '  Grid_GANTT.Visible = True
        ElseIf drop_operacion.SelectedIndex = 3 Then
            ' MarcarCheck()
            lbl_operacion.Text = "Nombre de Supervisión"
            ModalPopupExtender3.Enabled = True
            For Each row As GridViewRow In Grid_GANTT.Rows
                CType(row.FindControl("lbl_operacion1"), Label).Text = "Nombre de Supervisión"
                CType(row.FindControl("lbl_operacion2"), Label).Text = "Nombre de Supervisión"
            Next
            obtener_sistema()
            drop_sistema.Visible = True
            Listar_GANTT()
            'Grid_GANTT.Visible = True
        ElseIf drop_operacion.SelectedIndex = 4 Then
            Grid_GANTT.Visible = True
            '  MarcarCheck()
            lbl_operacion.Text = "Nombre de Minuta"
            ModalPopupExtender3.Enabled = True
            For Each row As GridViewRow In Grid_GANTT.Rows
                CType(row.FindControl("lbl_operacion1"), Label).Text = "Nombre de Minuta"
                CType(row.FindControl("lbl_operacion2"), Label).Text = "Nombre de Minuta"
            Next
            obtener_sistema()
            drop_sistema.Visible = True
            Listar_GANTT()
            ' Grid_GANTT.Visible = True
        End If
        Listar_GANTT()
    End Sub
    Protected Sub btn_eliminar_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_eliminar.Click
        'Desplegable con opciones
    End Sub
End Class
