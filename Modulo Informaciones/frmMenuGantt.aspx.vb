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
            '  Listar_GANTT()
            obtener_sistema()


        End If
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
            CapaEntidadGANTT.propiedad_Sistema = drop_sistema.SelectedIndex
            CapaEntidadGANTT.propiedad_ID_H = drop_hito.SelectedIndex
            Me.DsGANTTs = CapaNegocioGANTT.ListarCheck(CapaEntidadGANTT)
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
            'CapaEntidadGANTT.propiedad_ID_H = drop_hito.SelectedIndex
            CapaEntidadGANTT.propiedad_ID_A = drop_año.SelectedIndex
            CapaEntidadGANTT.propiedad_ID_P = drop_producto.SelectedIndex
            Me.DsGANTTs2 = CapaNegocioGANTT.ListarCheck2(CapaEntidadGANTT)
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
                    actividad2 = CType(row1.Cells(0).FindControl("lbl_ID"), Label).Text
                    If row1.RowType = DataControlRowType.DataRow Then
                        Dim chkRow As CheckBox = TryCast(row1.Cells(1).FindControl("chkRow"), CheckBox)
                        If actividad = actividad2 Then
                            If row("ID_H") = CType(row1.Cells(0).FindControl("lbl_Hito"), Label).Text Then
                                chkRow.Checked = True
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

    Protected Sub drop_sistema_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_sistema.SelectedIndexChanged
        If drop_sistema.SelectedIndex = 0 Then
            drop_hito.Visible = False
            drop_año.Visible = False
            drop_producto.Visible = False
            Grid_GANTT.Visible = False
        Else
            drop_hito.Visible = True
            drop_año.Visible = True
            drop_producto.Visible = True
            obtener_producto()
            obtener_hito()
            obtener_año()
            Grid_GANTT.Visible = True
            Listar_GANTT()

        End If
    End Sub


    Protected Sub btn_asignar_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_asignar.Click
        CN.Open()
        Dim CONSULTAENC As String
        Dim CONSULTAENC1 As String
        Dim a As String
        Dim c As String
        Dim a5 As String

        Dim a1 As String = drop_sistema.SelectedIndex
        Dim a2 As String ' = drop_hito.SelectedIndex
        Dim a3 As String = drop_año.SelectedIndex
        Dim a4 As String = drop_producto.SelectedIndex
        If drop_sistema.SelectedIndex <> 0 And drop_sistema.SelectedIndex <> 0 And drop_año.SelectedIndex <> 0 Then
            For Each row As GridViewRow In Grid_GANTT.Rows
                If row.RowType = DataControlRowType.DataRow Then
                    Dim chkRow As CheckBox = TryCast(row.Cells(1).FindControl("chkRow"), CheckBox)
                    If chkRow.Checked Then
                        a = CType(row.Cells(1).FindControl("lbl_Actividades"), Label).Text
                        c = CType(row.Cells(1).FindControl("lbl_ID"), Label).Text
                        a2 = CType(row.Cells(1).FindControl("lbl_Hito"), Label).Text
                        a5 = CType(row.Cells(1).FindControl("lbl_Detalle_Actividad"), Label).Text
                        CONSULTAENC1 = "SELECT * FROM GES_GANTT_ACTIVIDADES WHERE ID_P=" + a4 + " AND ID_A=" + a3 + " AND ID_S=" + a1 + " AND ID_H=" + a2 + " AND ID_Ac=" + c
                        Dim NUMMAXPES1 As New SqlCommand(CONSULTAENC1, CN)
                        Dim preexeNUMMAX1 As New SqlDataAdapter(NUMMAXPES1)
                        Dim exeNUMMAX1 As New DataTable()
                        preexeNUMMAX1.Fill(exeNUMMAX1)
                        If exeNUMMAX1.Rows.Count = 0 Then
                            CONSULTAENC = "INSERT INTO GES_GANTT_ACTIVIDADES(	ID_P,	ID_A,	ID_S,	ID_H,	ID_Ac,ID_Ac_Detalle,	ID_Ac_Detalle_D)SELECT " + a4 + "," + a3 + "," + a1 + "," + a2 + "," + c + ",'" + a + "','" + a5 + "'"
                            Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
                            Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
                            Dim exeNUMMAX As New DataTable()
                            preexeNUMMAX.Fill(exeNUMMAX)
                        End If
                        '  txt_nombre.Focus()
                        'Listar_GANTT()
                    Else
                        a = CType(row.Cells(1).FindControl("lbl_Actividades"), Label).Text
                        c = CType(row.Cells(1).FindControl("lbl_ID"), Label).Text
                        a2 = CType(row.Cells(1).FindControl("lbl_Hito"), Label).Text
                        CONSULTAENC1 = "SELECT * FROM GES_GANTT_ACTIVIDADES WHERE ID_P=" + a4 + " AND ID_A=" + a3 + " AND ID_S=" + a1 + " AND ID_H=" + a2 + " AND ID_Ac=" + c
                        Dim NUMMAXPES1 As New SqlCommand(CONSULTAENC1, CN)
                        Dim preexeNUMMAX1 As New SqlDataAdapter(NUMMAXPES1)
                        Dim exeNUMMAX1 As New DataTable()
                        preexeNUMMAX1.Fill(exeNUMMAX1)
                        If exeNUMMAX1.Rows.Count <> 0 Then
                            CONSULTAENC = "DELETE FROM GES_GANTT_ACTIVIDADES WHERE ID_P=" + a4 + " AND ID_A=" + a3 + " AND ID_S=" + a1 + " AND ID_H=" + a2 + " AND ID_Ac=" + c
                            Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
                            Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
                            Dim exeNUMMAX As New DataTable()
                            preexeNUMMAX.Fill(exeNUMMAX)
                            'txt_nombre.Focus()
                            'Listar_GANTT()
                        End If
                    End If
                End If
            Next
            MensajeBox("Se ha asignado las actividades seleccionadas", True)
        Else
            MensajeBox("Debe marcar Sistema, Producto y Año", True)
        End If


        CN.Close()
    End Sub

    Protected Sub drop_hito_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_hito.SelectedIndexChanged
        If drop_sistema.SelectedIndex <> 0 And drop_sistema.SelectedIndex <> 0 And drop_año.SelectedIndex <> 0 Then
            If drop_hito.SelectedIndex = 0 Then
                Listar_GANTT()
                MarcarCheck()
            Else
                Listar_GANTT()
                MarcarCheck()
            End If
        End If

    End Sub
    Protected Sub drop_año_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_año.SelectedIndexChanged
        If drop_sistema.SelectedIndex <> 0 And drop_sistema.SelectedIndex <> 0 And drop_año.SelectedIndex <> 0 Then
            MarcarCheck()
        End If
    End Sub
    Protected Sub drop_producto_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_producto.SelectedIndexChanged
        If drop_sistema.SelectedIndex <> 0 And drop_sistema.SelectedIndex <> 0 And drop_año.SelectedIndex <> 0 Then
            MarcarCheck()
        End If
    End Sub
End Class
