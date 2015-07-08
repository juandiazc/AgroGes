Imports Microsoft.VisualBasic
Imports System.Collections.Generic
Imports System.Data
Imports System.Data.SqlClient
Imports Microsoft.Office.Interop
Imports CrystalDecisions.CrystalReports.Engine
Imports CrystalDecisions.Shared
Imports System.io
Imports System.Web.HttpResponse
Imports System.Web.UI.Page
Partial Class Modulo_Ingreso_de_Datos_frmEncuesta
    Inherits System.Web.UI.Page
    Dim SQL As String
    Dim llena_control As New llena_control
    Dim rutinas As New rutinas
    Dim campo_encuesta As New TBL_Encuesta
    Dim encuesta As New TBL_Encuesta_Negocio
    'Para llenar drop de comuna, región
    Dim DsRpc As New Data.DataSet
    Dim DtRpc As DataTable
    Dim CapaNegocioRpc As New RPC_Negocio
    Dim CapaEntidadRpc As New RPC

    'Dim cierre_mes As New CierreMesGesBLL
    'Dim campo_cierre_mes As New CierreMesGesBOL
    Dim CN As New SqlClient.SqlConnection("Server=TAMARUGO;database=BASES_AGROPECUARIAS_T;uid=usuarioagropecuarias;pwd=usuarioagropecuarias")

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If IsPostBack = False Then      
            'txt_mes.Text = Session("mes")
            'txt_año.Text = Session("año")
            llena_region(drop_region)
            valida_campos(pnl_encuesta)
        End If
        Response.ExpiresAbsolute = Now

    End Sub
    Sub valida_campos(ByVal pnl As Panel)
        Dim x As String
        Dim ElControl As New Control
        Dim c As TextBox
        Dim d As DropDownList
        For Each ElControl In pnl.Controls
            x = ElControl.ID
            If (TypeOf ElControl Is TextBox) Then
                c = ElControl
                c.Attributes.Add("onkeydown", "javascript:PresionaEnter();")
                'If c.ID <> "txt_nombre_informante" And c.ID <> "txt_dv" And c.ID <> "txt_nombre_explotacion" And _
                'c.ID <> "txt_cargo" And c.ID <> "txt_profesion" And c.ID <> "txt_direccion" And c.ID <> "txt_email_i" And c.ID <> "txt_fono_1_i" And c.ID <> "txt_fono_2_i" And _
                ' c.ID <> "txt_nombre_infor" And c.ID <> "txt_fecha_inf" And c.ID <> "txt_observaciones" Then
                '   c.Attributes.Add("onkeypress", "javascript:solonumeros();")
                'End If
            End If
                If (TypeOf ElControl Is DropDownList) Then
                    d = ElControl
                    d.Attributes.Add("onkeydown", "javascript:PresionaEnter();")
                End If
        Next
    End Sub
    Protected Sub drop_region_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)
        If drop_region.SelectedValue = 0 Then
            drop_comuna.Enabled = False
        Else
            drop_comuna.Enabled = True
            llena_comuna(drop_comuna, drop_region.SelectedValue)
        End If

    End Sub
    Public Sub llena_region(ByVal drop As DropDownList)
        'DsRpc = CapaNegocioRpc.ListarRegion(CapaEntidadRpc)
        DtRpc = CapaNegocioRpc.ListarRegion(CapaEntidadRpc)
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
    Protected Sub drop_fono_1_SelectedIndexChanged1(ByVal sender As Object, ByVal e As System.EventArgs)
        If drop_fono_1.SelectedValue = 1 Then
            txt_fono_1_i.Enabled = True
        Else
            txt_fono_1_i.Enabled = False
        End If
    End Sub
    Protected Sub drop_fono_2_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)
        If drop_fono_2.SelectedValue = 1 Then
            txt_fono_2_i.Enabled = True
        Else
            txt_fono_2_i.Enabled = False
        End If
    End Sub
    Protected Sub drop_email_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)
        If drop_email.SelectedValue = 1 Then
            txt_email_i.Enabled = True
        Else
            txt_email_i.Enabled = False
        End If
    End Sub
    Protected Sub btn_guardar_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        Dim CONSULTAENC1 As String
        Dim id As String = txt_id.Text
        If valida() = True Then
            CONSULTAENC1 = "SELECT id FROM TBL_Encuesta where id=" + id
            Dim NUMMAXPES1 As New SqlCommand(CONSULTAENC1, CN)
            Dim preexeNUMMAX1 As New SqlDataAdapter(NUMMAXPES1)
            Dim exeNUMMAX1 As New DataTable()
            preexeNUMMAX1.Fill(exeNUMMAX1)
            If exeNUMMAX1.Rows.Count = 0 Then
                If graba(0) = True Then
                    MensajeBox("Registro Grabado con Exito", True)
                    limpia(pnl_encuesta)
                Else
                    MensajeBox("Error al Grabar el Registro", True)
                    ' If elimina() = False Then
                    ' MensajeBox("Error al Eliminar el Registro", True)
                    'End If
                End If

            Else
                MensajeBox("El id ya se encuentra en la BD. Genere nuevo id.", True)
            End If
            

        End If
    End Sub
    Function Trans(ByVal caja As String)
        If caja = "" Then
            Return Nothing
        Else
            Return caja
        End If
    End Function
    Function graba(ByVal estado As Integer) As Boolean
        'Dim i As Integer
        graba = False
        'FALTA PONER BUSCADOR DE ID
        If txt_id.Text = "" Then
            generar_id()
        End If
        campo_encuesta.propiedad_ip = Request.UserHostAddress
        campo_encuesta.propiedad_PerfilIngreso = Session("usuario")
        campo_encuesta.propiedad_FechaIngreso = Today
        campo_encuesta.propiedad_id = txt_id.Text
        campo_encuesta.propiedad_nombre_informante = txt_nombre_informante.Text
        campo_encuesta.propiedad_sexo = drop_sexo.SelectedValue
        campo_encuesta.propiedad_rut = txt_rut.Text
        campo_encuesta.propiedad_dv_rut = txt_dv.Text
        campo_encuesta.propiedad_nombre_explotacion = txt_nombre_explotacion.Text
        campo_encuesta.propiedad_cargo = txt_cargo.Text
        campo_encuesta.propiedad_profesion = txt_profesion.Text
        campo_encuesta.propiedad_direccion = txt_direccion.Text
        campo_encuesta.propiedad_comuna = drop_comuna.SelectedValue
        campo_encuesta.propiedad_region = drop_region.SelectedValue
        campo_encuesta.propiedad_email = drop_email.SelectedValue
        campo_encuesta.propiedad_email_i = txt_email_i.Text
        campo_encuesta.propiedad_fono = drop_fono_1.SelectedValue
        campo_encuesta.propiedad_fono_i = txt_fono_1_i.Text
        campo_encuesta.propiedad_fono2 = drop_fono_2.SelectedValue
        campo_encuesta.propiedad_fono2_i = txt_fono_2_i.Text
        campo_encuesta.propiedad_trigo_blanco_12_1_p = txt_12_1_p.Text
        campo_encuesta.propiedad_trigo_blanco_12_1_s = txt_12_1_s.Text
        campo_encuesta.propiedad_trigo_blanco_12_1_i = txt_12_1_i.Text
        campo_encuesta.propiedad_trigo_candeal_12_2_p = txt_12_2_p.Text
        campo_encuesta.propiedad_trigo_candeal_12_2_s = txt_12_2_s.Text
        campo_encuesta.propiedad_trigo_candeal_12_2_i = txt_12_2_i.Text
        campo_encuesta.propiedad_avena_12_3_p = txt_12_3_p.Text
        campo_encuesta.propiedad_avena_12_3_s = txt_12_3_s.Text
        campo_encuesta.propiedad_avena_12_3_i = txt_12_3_i.Text
        campo_encuesta.propiedad_cebada_12_4_p = txt_12_4_p.Text
        campo_encuesta.propiedad_cebada_12_4_s = txt_12_4_s.Text
        campo_encuesta.propiedad_cebada_12_4_i = txt_12_4_i.Text
        campo_encuesta.propiedad_maiz_consumo_12_5_p = txt_12_5_p.Text
        campo_encuesta.propiedad_maiz_consumo_12_5_s = txt_12_5_s.Text
        campo_encuesta.propiedad_maiz_consumo_12_5_i = txt_12_5_i.Text
        campo_encuesta.propiedad_maiz_semilla_12_6_p = txt_12_6_p.Text
        campo_encuesta.propiedad_maiz_semilla_12_6_s = txt_12_6_s.Text
        campo_encuesta.propiedad_maiz_semilla_12_6_i = txt_12_6_i.Text
        campo_encuesta.propiedad_arroz_12_7_p = txt_12_7_p.Text
        campo_encuesta.propiedad_arroz_12_7_s = txt_12_7_s.Text
        campo_encuesta.propiedad_arroz_12_7_i = txt_12_7_i.Text
        campo_encuesta.propiedad_sup_reg_13_1_1 = txt_sup_reg_13_1_1.Text
        campo_encuesta.propiedad_sup_reg_13_1_2 = txt_sup_reg_13_1_2.Text
        campo_encuesta.propiedad_sup_reg_13_1_3 = txt_sup_reg_13_1_3.Text
        campo_encuesta.propiedad_sup_reg_13_1_4 = txt_sup_reg_13_1_4.Text
        campo_encuesta.propiedad_sup_reg_13_1_5 = txt_sup_reg_13_1_5.Text
        campo_encuesta.propiedad_sup_reg_13_2_1 = txt_sup_nac_13_2_1.Text
        campo_encuesta.propiedad_sup_reg_13_2_2 = txt_sup_nac_13_2_2.Text
        campo_encuesta.propiedad_sup_reg_13_2_3 = txt_sup_nac_13_2_3.Text
        campo_encuesta.propiedad_sup_reg_13_2_4 = txt_sup_nac_13_2_4.Text
        campo_encuesta.propiedad_sup_reg_13_2_5 = txt_sup_nac_13_2_5.Text
        campo_encuesta.propiedad_trigo_blanco_14 = txt_trigo_blanco_14.Text
        campo_encuesta.propiedad_trigo_blanco_14_1 = txt_trigo_blanco_14_1.Text
        campo_encuesta.propiedad_trigo_blanco_14_2 = txt_trigo_blanco_14_2.Text
        campo_encuesta.propiedad_trigo_blanco_14_3 = txt_trigo_blanco_14_3.Text
        campo_encuesta.propiedad_trigo_blanco_14_4 = txt_trigo_blanco_14_4.Text
        campo_encuesta.propiedad_trigo_blanco_14_5 = txt_trigo_blanco_14_5.Text
        campo_encuesta.propiedad_trigo_blanco_15 = txt_trigo_blanco_15.Text
        campo_encuesta.propiedad_trigo_blanco_15_1 = txt_trigo_blanco_15_1.Text
        campo_encuesta.propiedad_trigo_blanco_15_2 = txt_trigo_blanco_15_2.Text
        campo_encuesta.propiedad_trigo_blanco_15_3 = txt_trigo_blanco_15_3.Text
        campo_encuesta.propiedad_trigo_blanco_16 = txt_trigo_blanco_16.Text
        campo_encuesta.propiedad_trigo_blanco_16_1 = txt_trigo_blanco_16_1.Text
        campo_encuesta.propiedad_trigo_blanco_16_2 = txt_trigo_blanco_16_2.Text
        campo_encuesta.propiedad_trigo_blanco_16_3 = txt_trigo_blanco_16_3.Text
        campo_encuesta.propiedad_trigo_blanco_16_4 = txt_trigo_blanco_16_4.Text
        campo_encuesta.propiedad_trigo_blanco_16_5 = txt_trigo_blanco_16_5.Text
        campo_encuesta.propiedad_trigo_blanco_16_6 = txt_trigo_blanco_16_6.Text
        campo_encuesta.propiedad_trigo_blanco_16_7 = txt_trigo_blanco_16_7.Text
        campo_encuesta.propiedad_trigo_blanco_16_8 = txt_trigo_blanco_16_8.Text
        campo_encuesta.propiedad_trigo_blanco_16_9 = txt_trigo_blanco_16_9.Text
        campo_encuesta.propiedad_trigo_blanco_17 = txt_trigo_blanco_17.Text
        campo_encuesta.propiedad_trigo_blanco_17_1 = txt_trigo_blanco_17_1.Text
        campo_encuesta.propiedad_trigo_blanco_17_2 = txt_trigo_blanco_17_2.Text
        campo_encuesta.propiedad_trigo_blanco_17_3 = txt_trigo_blanco_17_3.Text
        campo_encuesta.propiedad_trigo_blanco_17_4 = txt_trigo_blanco_17_4.Text
        campo_encuesta.propiedad_trigo_blanco_17_5 = txt_trigo_blanco_17_5.Text
        campo_encuesta.propiedad_trigo_blanco_18 = txt_trigo_blanco_18.Text
        campo_encuesta.propiedad_trigo_blanco_18_1 = txt_trigo_blanco_18_1.Text
        campo_encuesta.propiedad_trigo_blanco_18_2 = txt_trigo_blanco_18_2.Text
        campo_encuesta.propiedad_trigo_blanco_18_3 = txt_trigo_blanco_18_3.Text
        campo_encuesta.propiedad_trigo_blanco_18_4 = txt_trigo_blanco_18_4.Text
        campo_encuesta.propiedad_trigo_blanco_18_5 = txt_trigo_blanco_18_5.Text
        campo_encuesta.propiedad_trigo_candeal_14 = txt_trigo_candeal_14.Text
        campo_encuesta.propiedad_trigo_candeal_14_1 = txt_trigo_candeal_14_1.Text
        campo_encuesta.propiedad_trigo_candeal_14_2 = txt_trigo_candeal_14_2.Text
        campo_encuesta.propiedad_trigo_candeal_14_3 = txt_trigo_candeal_14_3.Text
        campo_encuesta.propiedad_trigo_candeal_14_4 = txt_trigo_candeal_14_4.Text
        campo_encuesta.propiedad_trigo_candeal_14_5 = txt_trigo_candeal_14_5.Text
        campo_encuesta.propiedad_trigo_candeal_15 = txt_trigo_candeal_15.Text
        campo_encuesta.propiedad_trigo_candeal_15_1 = txt_trigo_candeal_15_1.Text
        campo_encuesta.propiedad_trigo_candeal_15_2 = txt_trigo_candeal_15_2.Text
        campo_encuesta.propiedad_trigo_candeal_15_3 = txt_trigo_candeal_15_3.Text
        campo_encuesta.propiedad_trigo_candeal_16 = txt_trigo_candeal_16.Text
        campo_encuesta.propiedad_trigo_candeal_16_1 = txt_trigo_candeal_16_1.Text
        campo_encuesta.propiedad_trigo_candeal_16_2 = txt_trigo_candeal_16_2.Text
        campo_encuesta.propiedad_trigo_candeal_16_3 = txt_trigo_candeal_16_3.Text
        campo_encuesta.propiedad_trigo_candeal_16_4 = txt_trigo_candeal_16_4.Text
        campo_encuesta.propiedad_trigo_candeal_16_5 = txt_trigo_candeal_16_5.Text
        campo_encuesta.propiedad_trigo_candeal_16_6 = txt_trigo_candeal_16_6.Text
        campo_encuesta.propiedad_trigo_candeal_16_7 = txt_trigo_candeal_16_7.Text
        campo_encuesta.propiedad_trigo_candeal_16_8 = txt_trigo_candeal_16_8.Text
        campo_encuesta.propiedad_trigo_candeal_16_9 = txt_trigo_candeal_16_9.Text
        campo_encuesta.propiedad_trigo_candeal_17 = txt_trigo_candeal_17.Text
        campo_encuesta.propiedad_trigo_candeal_17_1 = txt_trigo_candeal_17_1.Text
        campo_encuesta.propiedad_trigo_candeal_17_2 = txt_trigo_candeal_17_2.Text
        campo_encuesta.propiedad_trigo_candeal_17_3 = txt_trigo_candeal_17_3.Text
        campo_encuesta.propiedad_trigo_candeal_17_4 = txt_trigo_candeal_17_4.Text
        campo_encuesta.propiedad_trigo_candeal_17_5 = txt_trigo_candeal_17_5.Text
        campo_encuesta.propiedad_trigo_candeal_18 = txt_trigo_candeal_18.Text
        campo_encuesta.propiedad_trigo_candeal_18_1 = txt_trigo_candeal_18_1.Text
        campo_encuesta.propiedad_trigo_candeal_18_2 = txt_trigo_candeal_18_2.Text
        campo_encuesta.propiedad_trigo_candeal_18_3 = txt_trigo_candeal_18_3.Text
        campo_encuesta.propiedad_trigo_candeal_18_4 = txt_trigo_candeal_18_4.Text
        campo_encuesta.propiedad_trigo_candeal_18_5 = txt_trigo_candeal_18_5.Text
        campo_encuesta.propiedad_avena_14 = txt_avena_14.Text
        campo_encuesta.propiedad_avena_14_1 = txt_avena_14_1.Text
        campo_encuesta.propiedad_avena_14_2 = txt_avena_14_2.Text
        campo_encuesta.propiedad_avena_14_3 = txt_avena_14_3.Text
        campo_encuesta.propiedad_avena_14_4 = txt_avena_14_4.Text
        campo_encuesta.propiedad_avena_14_5 = txt_avena_14_5.Text
        campo_encuesta.propiedad_avena_15 = txt_avena_15.Text
        campo_encuesta.propiedad_avena_15_1 = txt_avena_15_1.Text
        campo_encuesta.propiedad_avena_15_2 = txt_avena_15_2.Text
        campo_encuesta.propiedad_avena_15_3 = txt_avena_15_3.Text
        campo_encuesta.propiedad_avena_16 = txt_avena_16.Text
        campo_encuesta.propiedad_avena_16_1 = txt_avena_16_1.Text
        campo_encuesta.propiedad_avena_16_2 = txt_avena_16_2.Text
        campo_encuesta.propiedad_avena_16_3 = txt_avena_16_3.Text
        campo_encuesta.propiedad_avena_16_4 = txt_avena_16_4.Text
        campo_encuesta.propiedad_avena_16_5 = txt_avena_16_5.Text
        campo_encuesta.propiedad_avena_16_6 = txt_avena_16_6.Text
        campo_encuesta.propiedad_avena_16_7 = txt_avena_16_7.Text
        campo_encuesta.propiedad_avena_16_8 = txt_avena_16_8.Text
        campo_encuesta.propiedad_avena_16_9 = txt_avena_16_9.Text
        campo_encuesta.propiedad_avena_17 = txt_avena_17.Text
        campo_encuesta.propiedad_avena_17_1 = txt_avena_17_1.Text
        campo_encuesta.propiedad_avena_17_2 = txt_avena_17_2.Text
        campo_encuesta.propiedad_avena_17_3 = txt_avena_17_3.Text
        campo_encuesta.propiedad_avena_17_4 = txt_avena_17_4.Text
        campo_encuesta.propiedad_avena_17_5 = txt_avena_17_5.Text
        campo_encuesta.propiedad_avena_18 = txt_avena_18.Text
        campo_encuesta.propiedad_avena_18_1 = txt_avena_18_1.Text
        campo_encuesta.propiedad_avena_18_2 = txt_avena_18_2.Text
        campo_encuesta.propiedad_avena_18_3 = txt_avena_18_3.Text
        campo_encuesta.propiedad_avena_18_4 = txt_avena_18_4.Text
        campo_encuesta.propiedad_avena_18_5 = txt_avena_18_5.Text
        campo_encuesta.propiedad_cebada_14 = txt_cebada_14.Text
        campo_encuesta.propiedad_cebada_14_1 = txt_cebada_14_1.Text
        campo_encuesta.propiedad_cebada_14_2 = txt_cebada_14_2.Text
        campo_encuesta.propiedad_cebada_14_3 = txt_cebada_14_3.Text
        campo_encuesta.propiedad_cebada_14_4 = txt_cebada_14_4.Text
        campo_encuesta.propiedad_cebada_14_5 = txt_cebada_14_5.Text
        campo_encuesta.propiedad_cebada_15 = txt_cebada_15.Text
        campo_encuesta.propiedad_cebada_15_1 = txt_cebada_15_1.Text
        campo_encuesta.propiedad_cebada_15_2 = txt_cebada_15_2.Text
        campo_encuesta.propiedad_cebada_15_3 = txt_cebada_15_3.Text
        campo_encuesta.propiedad_cebada_16 = txt_cebada_16.Text
        campo_encuesta.propiedad_cebada_16_1 = txt_cebada_16_1.Text
        campo_encuesta.propiedad_cebada_16_2 = txt_cebada_16_2.Text
        campo_encuesta.propiedad_cebada_16_3 = txt_cebada_16_3.Text
        campo_encuesta.propiedad_cebada_16_4 = txt_cebada_16_4.Text
        campo_encuesta.propiedad_cebada_16_5 = txt_cebada_16_5.Text
        campo_encuesta.propiedad_cebada_16_6 = txt_cebada_16_6.Text
        campo_encuesta.propiedad_cebada_16_7 = txt_cebada_16_7.Text
        campo_encuesta.propiedad_cebada_16_8 = txt_cebada_16_8.Text
        campo_encuesta.propiedad_cebada_16_9 = txt_cebada_16_9.Text
        campo_encuesta.propiedad_cebada_17 = txt_cebada_17.Text
        campo_encuesta.propiedad_cebada_17_1 = txt_cebada_17_1.Text
        campo_encuesta.propiedad_cebada_17_2 = txt_cebada_17_2.Text
        campo_encuesta.propiedad_cebada_17_3 = txt_cebada_17_3.Text
        campo_encuesta.propiedad_cebada_17_4 = txt_cebada_17_4.Text
        campo_encuesta.propiedad_cebada_17_5 = txt_cebada_17_5.Text
        campo_encuesta.propiedad_cebada_18 = txt_cebada_18.Text
        campo_encuesta.propiedad_cebada_18_1 = txt_cebada_18_1.Text
        campo_encuesta.propiedad_cebada_18_2 = txt_cebada_18_2.Text
        campo_encuesta.propiedad_cebada_18_3 = txt_cebada_18_3.Text
        campo_encuesta.propiedad_cebada_18_4 = txt_cebada_18_4.Text
        campo_encuesta.propiedad_cebada_18_5 = txt_cebada_18_5.Text
        campo_encuesta.propiedad_maiz_consumo_14 = txt_maiz_c_14.Text
        campo_encuesta.propiedad_maiz_consumo_14_1 = txt_maiz_c_14_1.Text
        campo_encuesta.propiedad_maiz_consumo_14_2 = txt_maiz_c_14_2.Text
        campo_encuesta.propiedad_maiz_consumo_14_3 = txt_maiz_c_14_3.Text
        campo_encuesta.propiedad_maiz_consumo_14_4 = txt_maiz_c_14_4.Text
        campo_encuesta.propiedad_maiz_consumo_14_5 = txt_maiz_c_14_5.Text
        campo_encuesta.propiedad_maiz_consumo_15 = txt_maiz_c_15.Text
        campo_encuesta.propiedad_maiz_consumo_15_1 = txt_maiz_c_15_1.Text
        campo_encuesta.propiedad_maiz_consumo_15_2 = txt_maiz_c_15_2.Text
        campo_encuesta.propiedad_maiz_consumo_15_3 = txt_maiz_c_15_3.Text
        campo_encuesta.propiedad_maiz_consumo_16 = txt_maiz_c_16.Text
        campo_encuesta.propiedad_maiz_consumo_16_1 = txt_maiz_c_16_1.Text
        campo_encuesta.propiedad_maiz_consumo_16_2 = txt_maiz_c_16_2.Text
        campo_encuesta.propiedad_maiz_consumo_16_3 = txt_maiz_c_16_3.Text
        campo_encuesta.propiedad_maiz_consumo_16_4 = txt_maiz_c_16_4.Text
        campo_encuesta.propiedad_maiz_consumo_16_5 = txt_maiz_c_16_5.Text
        campo_encuesta.propiedad_maiz_consumo_16_6 = txt_maiz_c_16_6.Text
        campo_encuesta.propiedad_maiz_consumo_16_7 = txt_maiz_c_16_7.Text
        campo_encuesta.propiedad_maiz_consumo_16_8 = txt_maiz_c_16_8.Text
        campo_encuesta.propiedad_maiz_consumo_16_9 = txt_maiz_c_16_9.Text
        campo_encuesta.propiedad_maiz_consumo_17 = txt_maiz_c_17.Text
        campo_encuesta.propiedad_maiz_consumo_17_1 = txt_maiz_c_17_1.Text
        campo_encuesta.propiedad_maiz_consumo_17_2 = txt_maiz_c_17_2.Text
        campo_encuesta.propiedad_maiz_consumo_17_3 = txt_maiz_c_17_3.Text
        campo_encuesta.propiedad_maiz_consumo_17_4 = txt_maiz_c_17_4.Text
        campo_encuesta.propiedad_maiz_consumo_17_5 = txt_maiz_c_17_5.Text
        campo_encuesta.propiedad_maiz_consumo_18 = txt_maiz_c_18.Text
        campo_encuesta.propiedad_maiz_consumo_18_1 = txt_maiz_c_18_1.Text
        campo_encuesta.propiedad_maiz_consumo_18_2 = txt_maiz_c_18_2.Text
        campo_encuesta.propiedad_maiz_consumo_18_3 = txt_maiz_c_18_3.Text
        campo_encuesta.propiedad_maiz_consumo_18_4 = txt_maiz_c_18_4.Text
        campo_encuesta.propiedad_maiz_consumo_18_5 = txt_maiz_c_18_5.Text
        campo_encuesta.propiedad_maiz_semilla_14 = txt_maiz_s_14.Text
        campo_encuesta.propiedad_maiz_semilla_14_1 = txt_maiz_s_14_1.Text
        campo_encuesta.propiedad_maiz_semilla_14_2 = txt_maiz_s_14_2.Text
        campo_encuesta.propiedad_maiz_semilla_14_3 = txt_maiz_s_14_3.Text
        campo_encuesta.propiedad_maiz_semilla_14_4 = txt_maiz_s_14_4.Text
        campo_encuesta.propiedad_maiz_semilla_14_5 = txt_maiz_s_14_5.Text
        campo_encuesta.propiedad_maiz_semilla_15 = txt_maiz_s_15.Text
        campo_encuesta.propiedad_maiz_semilla_15_1 = txt_maiz_s_15_1.Text
        campo_encuesta.propiedad_maiz_semilla_15_2 = txt_maiz_s_15_2.Text
        campo_encuesta.propiedad_maiz_semilla_15_3 = txt_maiz_s_15_3.Text
        campo_encuesta.propiedad_maiz_semilla_16 = txt_maiz_s_16.Text
        campo_encuesta.propiedad_maiz_semilla_16_1 = txt_maiz_s_16_1.Text
        campo_encuesta.propiedad_maiz_semilla_16_2 = txt_maiz_s_16_2.Text
        campo_encuesta.propiedad_maiz_semilla_16_3 = txt_maiz_s_16_3.Text
        campo_encuesta.propiedad_maiz_semilla_16_4 = txt_maiz_s_16_4.Text
        campo_encuesta.propiedad_maiz_semilla_16_5 = txt_maiz_s_16_5.Text
        campo_encuesta.propiedad_maiz_semilla_16_6 = txt_maiz_s_16_6.Text
        campo_encuesta.propiedad_maiz_semilla_16_7 = txt_maiz_s_16_7.Text
        campo_encuesta.propiedad_maiz_semilla_16_8 = txt_maiz_s_16_8.Text
        campo_encuesta.propiedad_maiz_semilla_16_9 = txt_maiz_s_16_9.Text
        campo_encuesta.propiedad_maiz_semilla_17 = txt_maiz_s_17.Text
        campo_encuesta.propiedad_maiz_semilla_17_1 = txt_maiz_s_17_1.Text
        campo_encuesta.propiedad_maiz_semilla_17_2 = txt_maiz_s_17_2.Text
        campo_encuesta.propiedad_maiz_semilla_17_3 = txt_maiz_s_17_3.Text
        campo_encuesta.propiedad_maiz_semilla_17_4 = txt_maiz_s_17_4.Text
        campo_encuesta.propiedad_maiz_semilla_17_5 = txt_maiz_s_17_5.Text
        campo_encuesta.propiedad_maiz_semilla_18 = txt_maiz_s_18.Text
        campo_encuesta.propiedad_maiz_semilla_18_1 = txt_maiz_s_18_1.Text
        campo_encuesta.propiedad_maiz_semilla_18_2 = txt_maiz_s_18_2.Text
        campo_encuesta.propiedad_maiz_semilla_18_3 = txt_maiz_s_18_3.Text
        campo_encuesta.propiedad_maiz_semilla_18_4 = txt_maiz_s_18_4.Text
        campo_encuesta.propiedad_maiz_semilla_18_5 = txt_maiz_s_18_5.Text
        campo_encuesta.propiedad_arroz_14 = txt_arroz_14.Text
        campo_encuesta.propiedad_arroz_14_1 = txt_arroz_14_1.Text
        campo_encuesta.propiedad_arroz_14_2 = txt_arroz_14_2.Text
        campo_encuesta.propiedad_arroz_14_3 = txt_arroz_14_3.Text
        campo_encuesta.propiedad_arroz_14_4 = txt_arroz_14_4.Text
        campo_encuesta.propiedad_arroz_14_5 = txt_arroz_14_5.Text
        campo_encuesta.propiedad_arroz_15 = txt_arroz_15.Text
        campo_encuesta.propiedad_arroz_15_1 = txt_arroz_15_1.Text
        campo_encuesta.propiedad_arroz_15_2 = txt_arroz_15_2.Text
        campo_encuesta.propiedad_arroz_15_3 = txt_arroz_15_3.Text
        campo_encuesta.propiedad_arroz_16 = txt_arroz_16.Text
        campo_encuesta.propiedad_arroz_16_1 = txt_arroz_16_1.Text
        campo_encuesta.propiedad_arroz_16_2 = txt_arroz_16_2.Text
        campo_encuesta.propiedad_arroz_16_3 = txt_arroz_16_3.Text
        campo_encuesta.propiedad_arroz_16_4 = txt_arroz_16_4.Text
        campo_encuesta.propiedad_arroz_16_5 = txt_arroz_16_5.Text
        campo_encuesta.propiedad_arroz_16_6 = txt_arroz_16_6.Text
        campo_encuesta.propiedad_arroz_16_7 = txt_arroz_16_7.Text
        campo_encuesta.propiedad_arroz_16_8 = txt_arroz_16_8.Text
        campo_encuesta.propiedad_arroz_16_9 = txt_arroz_16_9.Text
        campo_encuesta.propiedad_arroz_17 = txt_arroz_17.Text
        campo_encuesta.propiedad_arroz_17_1 = txt_arroz_17_1.Text
        campo_encuesta.propiedad_arroz_17_2 = txt_arroz_17_2.Text
        campo_encuesta.propiedad_arroz_17_3 = txt_arroz_17_3.Text
        campo_encuesta.propiedad_arroz_17_4 = txt_arroz_17_4.Text
        campo_encuesta.propiedad_arroz_17_5 = txt_arroz_17_5.Text
        campo_encuesta.propiedad_arroz_18 = txt_arroz_18.Text
        campo_encuesta.propiedad_arroz_18_1 = txt_arroz_18_1.Text
        campo_encuesta.propiedad_arroz_18_2 = txt_arroz_18_2.Text
        campo_encuesta.propiedad_arroz_18_3 = txt_arroz_18_3.Text
        campo_encuesta.propiedad_arroz_18_4 = txt_arroz_18_4.Text
        campo_encuesta.propiedad_arroz_18_5 = txt_arroz_18_5.Text
        campo_encuesta.propiedad_poroto_19_1_p = txt_19_1_p.Text
        campo_encuesta.propiedad_poroto_19_1_s = txt_19_1_s.Text
        campo_encuesta.propiedad_poroto_19_1_i = txt_19_1_i.Text
        campo_encuesta.propiedad_papa_19_2_p = txt_19_2_p.Text
        campo_encuesta.propiedad_papa_19_2_s = txt_19_2_s.Text
        campo_encuesta.propiedad_papa_19_2_i = txt_19_2_i.Text
        campo_encuesta.propiedad_poroto_20 = txt_poroto_20.Text
        campo_encuesta.propiedad_poroto_20_1 = txt_poroto_20_1.Text
        campo_encuesta.propiedad_poroto_20_2 = txt_poroto_20_2.Text
        campo_encuesta.propiedad_poroto_20_3 = txt_poroto_20_3.Text
        campo_encuesta.propiedad_poroto_20_4 = txt_poroto_20_4.Text
        campo_encuesta.propiedad_poroto_20_5 = txt_poroto_20_5.Text
        campo_encuesta.propiedad_poroto_21 = txt_poroto_21.Text
        campo_encuesta.propiedad_poroto_21_1 = txt_poroto_21_1.Text
        campo_encuesta.propiedad_poroto_21_2 = txt_poroto_21_2.Text
        campo_encuesta.propiedad_poroto_21_3 = txt_poroto_21_3.Text
        campo_encuesta.propiedad_poroto_22 = txt_poroto_22.Text
        campo_encuesta.propiedad_poroto_22_1 = txt_poroto_22_1.Text
        campo_encuesta.propiedad_poroto_22_2 = txt_poroto_22_2.Text
        campo_encuesta.propiedad_poroto_22_3 = txt_poroto_22_3.Text
        campo_encuesta.propiedad_poroto_22_4 = txt_poroto_22_4.Text
        campo_encuesta.propiedad_poroto_22_5 = txt_poroto_22_5.Text
        campo_encuesta.propiedad_poroto_22_6 = txt_poroto_22_6.Text
        campo_encuesta.propiedad_poroto_22_7 = txt_poroto_22_7.Text
        campo_encuesta.propiedad_poroto_22_8 = txt_poroto_22_8.Text
        campo_encuesta.propiedad_poroto_22_9 = txt_poroto_22_9.Text
        campo_encuesta.propiedad_poroto_23 = txt_poroto_23.Text
        campo_encuesta.propiedad_poroto_23_1 = txt_poroto_23_1.Text
        campo_encuesta.propiedad_poroto_23_2 = txt_poroto_23_2.Text
        campo_encuesta.propiedad_poroto_23_3 = txt_poroto_23_3.Text
        campo_encuesta.propiedad_poroto_23_4 = txt_poroto_23_4.Text
        campo_encuesta.propiedad_poroto_24 = txt_poroto_24.Text
        campo_encuesta.propiedad_poroto_24_1 = txt_poroto_24_1.Text
        campo_encuesta.propiedad_poroto_24_2 = txt_poroto_24_2.Text
        campo_encuesta.propiedad_poroto_24_3 = txt_poroto_24_3.Text
        campo_encuesta.propiedad_poroto_24_4 = txt_poroto_24_4.Text
        campo_encuesta.propiedad_poroto_24_5 = txt_poroto_24_5.Text
        campo_encuesta.propiedad_papa_20 = txt_papa_20.Text
        campo_encuesta.propiedad_papa_20_1 = txt_papa_20_1.Text
        campo_encuesta.propiedad_papa_20_2 = txt_papa_20_2.Text
        campo_encuesta.propiedad_papa_20_3 = txt_papa_20_3.Text
        campo_encuesta.propiedad_papa_20_4 = txt_papa_20_4.Text
        campo_encuesta.propiedad_papa_20_5 = txt_papa_20_5.Text
        campo_encuesta.propiedad_papa_21 = txt_papa_21.Text
        campo_encuesta.propiedad_papa_21_1 = txt_papa_21_1.Text
        campo_encuesta.propiedad_papa_21_2 = txt_papa_21_2.Text
        campo_encuesta.propiedad_papa_21_3 = txt_papa_21_3.Text
        campo_encuesta.propiedad_papa_22 = txt_papa_22.Text
        campo_encuesta.propiedad_papa_22_1 = txt_papa_22_1.Text
        campo_encuesta.propiedad_papa_22_2 = txt_papa_22_2.Text
        campo_encuesta.propiedad_papa_22_3 = txt_papa_22_3.Text
        campo_encuesta.propiedad_papa_22_4 = txt_papa_22_4.Text
        campo_encuesta.propiedad_papa_22_5 = txt_papa_22_5.Text
        campo_encuesta.propiedad_papa_22_6 = txt_papa_22_6.Text
        campo_encuesta.propiedad_papa_22_7 = txt_papa_22_7.Text
        campo_encuesta.propiedad_papa_22_8 = txt_papa_22_8.Text
        campo_encuesta.propiedad_papa_22_9 = txt_papa_22_9.Text
        campo_encuesta.propiedad_papa_23 = txt_papa_23.Text
        campo_encuesta.propiedad_papa_23_1 = txt_papa_23_1.Text
        campo_encuesta.propiedad_papa_23_2 = txt_papa_23_2.Text
        campo_encuesta.propiedad_papa_23_3 = txt_papa_23_3.Text
        campo_encuesta.propiedad_papa_23_4 = txt_papa_23_4.Text
        campo_encuesta.propiedad_papa_24 = txt_papa_24.Text
        campo_encuesta.propiedad_papa_24_1 = txt_papa_24_1.Text
        campo_encuesta.propiedad_papa_24_2 = txt_papa_24_2.Text
        campo_encuesta.propiedad_papa_24_3 = txt_papa_24_3.Text
        campo_encuesta.propiedad_papa_24_4 = txt_papa_24_4.Text
        campo_encuesta.propiedad_papa_24_5 = txt_papa_24_5.Text
        campo_encuesta.propiedad_raps_25_1 = txt_25_1_p.Text
        campo_encuesta.propiedad_raps_27 = txt_raps_27.Text
        campo_encuesta.propiedad_raps_27_1 = txt_raps_27_1.Text
        campo_encuesta.propiedad_raps_27_2 = txt_raps_27_2.Text
        campo_encuesta.propiedad_raps_27_3 = txt_raps_27_3.Text
        campo_encuesta.propiedad_raps_27_4 = txt_raps_27_4.Text
        campo_encuesta.propiedad_raps_27_5 = txt_raps_27_5.Text
        campo_encuesta.propiedad_raps_28 = txt_raps_28.Text
        campo_encuesta.propiedad_raps_28_1 = txt_raps_28_1.Text
        campo_encuesta.propiedad_raps_28_2 = txt_raps_28_2.Text
        campo_encuesta.propiedad_raps_28_3 = txt_raps_28_3.Text
        campo_encuesta.propiedad_raps_29 = txt_raps_29.Text
        campo_encuesta.propiedad_raps_29_1 = txt_raps_29_1.Text
        campo_encuesta.propiedad_raps_29_2 = txt_raps_29_2.Text
        campo_encuesta.propiedad_raps_29_3 = txt_raps_29_3.Text
        campo_encuesta.propiedad_raps_29_4 = txt_raps_29_4.Text
        campo_encuesta.propiedad_raps_29_5 = txt_raps_29_5.Text
        campo_encuesta.propiedad_raps_29_6 = txt_raps_29_6.Text
        campo_encuesta.propiedad_raps_29_7 = txt_raps_29_7.Text
        campo_encuesta.propiedad_raps_29_8 = txt_raps_29_8.Text
        campo_encuesta.propiedad_raps_29_9 = txt_raps_29_9.Text
        campo_encuesta.propiedad_raps_30 = txt_raps_30.Text
        campo_encuesta.propiedad_raps_30_1 = txt_raps_30_1.Text
        campo_encuesta.propiedad_raps_30_2 = txt_raps_30_2.Text
        campo_encuesta.propiedad_raps_30_3 = txt_raps_30_3.Text
        campo_encuesta.propiedad_raps_30_4 = txt_raps_30_4.Text
        campo_encuesta.propiedad_raps_31 = txt_raps_31.Text
        campo_encuesta.propiedad_raps_31_1 = txt_raps_31_1.Text
        campo_encuesta.propiedad_raps_31_2 = txt_raps_31_2.Text
        campo_encuesta.propiedad_raps_31_3 = txt_raps_31_3.Text
        campo_encuesta.propiedad_remolacha_25_2 = txt_25_2_p.Text
        campo_encuesta.propiedad_remolacha_27 = txt_remolacha_27.Text
        campo_encuesta.propiedad_remolacha_27_1 = txt_remolacha_27_1.Text
        campo_encuesta.propiedad_remolacha_27_2 = txt_remolacha_27_2.Text
        campo_encuesta.propiedad_remolacha_27_3 = txt_remolacha_27_3.Text
        campo_encuesta.propiedad_remolacha_27_4 = txt_remolacha_27_4.Text
        campo_encuesta.propiedad_remolacha_27_5 = txt_remolacha_27_5.Text
        campo_encuesta.propiedad_remolacha_28 = txt_remolacha_28.Text
        campo_encuesta.propiedad_remolacha_28_1 = txt_remolacha_28_1.Text
        campo_encuesta.propiedad_remolacha_28_2 = txt_remolacha_28_2.Text
        campo_encuesta.propiedad_remolacha_28_3 = txt_remolacha_28_3.Text
        campo_encuesta.propiedad_remolacha_29 = txt_remolacha_29.Text
        campo_encuesta.propiedad_remolacha_29_1 = txt_remolacha_29_1.Text
        campo_encuesta.propiedad_remolacha_29_2 = txt_remolacha_29_2.Text
        campo_encuesta.propiedad_remolacha_29_3 = txt_remolacha_29_3.Text
        campo_encuesta.propiedad_remolacha_29_4 = txt_remolacha_29_4.Text
        campo_encuesta.propiedad_remolacha_29_5 = txt_remolacha_29_5.Text
        campo_encuesta.propiedad_remolacha_29_6 = txt_remolacha_29_6.Text
        campo_encuesta.propiedad_remolacha_29_7 = txt_remolacha_29_7.Text
        campo_encuesta.propiedad_remolacha_29_8 = txt_remolacha_29_8.Text
        campo_encuesta.propiedad_remolacha_29_9 = txt_remolacha_29_9.Text
        campo_encuesta.propiedad_remolacha_30 = txt_remolacha_30.Text
        campo_encuesta.propiedad_remolacha_30_1 = txt_remolacha_30_1.Text
        campo_encuesta.propiedad_remolacha_30_2 = txt_remolacha_30_2.Text
        campo_encuesta.propiedad_remolacha_30_3 = txt_remolacha_30_3.Text
        campo_encuesta.propiedad_remolacha_30_4 = txt_remolacha_30_4.Text
        campo_encuesta.propiedad_remolacha_31 = txt_remolacha_31.Text
        campo_encuesta.propiedad_remolacha_31_1 = txt_remolacha_31_1.Text
        campo_encuesta.propiedad_remolacha_31_2 = txt_remolacha_31_2.Text
        campo_encuesta.propiedad_remolacha_31_3 = txt_remolacha_31_3.Text
        campo_encuesta.propiedad_maravilla_25_3 = txt_25_3_p.Text
        campo_encuesta.propiedad_maravilla_27 = txt_maravilla_27.Text
        campo_encuesta.propiedad_maravilla_27_1 = txt_maravilla_27_1.Text
        campo_encuesta.propiedad_maravilla_27_2 = txt_maravilla_27_2.Text
        campo_encuesta.propiedad_maravilla_27_3 = txt_maravilla_27_3.Text
        campo_encuesta.propiedad_maravilla_27_4 = txt_maravilla_27_4.Text
        campo_encuesta.propiedad_maravilla_27_5 = txt_maravilla_27_5.Text
        campo_encuesta.propiedad_maravilla_28 = txt_maravilla_28.Text
        campo_encuesta.propiedad_maravilla_28_1 = txt_maravilla_28_1.Text
        campo_encuesta.propiedad_maravilla_28_2 = txt_maravilla_28_2.Text
        campo_encuesta.propiedad_maravilla_28_3 = txt_maravilla_28_3.Text
        campo_encuesta.propiedad_maravilla_29 = txt_maravilla_29.Text
        campo_encuesta.propiedad_maravilla_29_1 = txt_maravilla_29_1.Text
        campo_encuesta.propiedad_maravilla_29_2 = txt_maravilla_29_2.Text
        campo_encuesta.propiedad_maravilla_29_3 = txt_maravilla_29_3.Text
        campo_encuesta.propiedad_maravilla_29_4 = txt_maravilla_29_4.Text
        campo_encuesta.propiedad_maravilla_29_5 = txt_maravilla_29_5.Text
        campo_encuesta.propiedad_maravilla_29_6 = txt_maravilla_29_6.Text
        campo_encuesta.propiedad_maravilla_29_7 = txt_maravilla_29_7.Text
        campo_encuesta.propiedad_maravilla_29_8 = txt_maravilla_29_8.Text
        campo_encuesta.propiedad_maravilla_29_9 = txt_maravilla_29_9.Text
        campo_encuesta.propiedad_maravilla_30 = txt_maravilla_30.Text
        campo_encuesta.propiedad_maravilla_30_1 = txt_maravilla_30_1.Text
        campo_encuesta.propiedad_maravilla_30_2 = txt_maravilla_30_2.Text
        campo_encuesta.propiedad_maravilla_30_3 = txt_maravilla_30_3.Text
        campo_encuesta.propiedad_maravilla_30_4 = txt_maravilla_30_4.Text
        campo_encuesta.propiedad_maravilla_31 = txt_maravilla_31.Text
        campo_encuesta.propiedad_maravilla_31_1 = txt_maravilla_31_1.Text
        campo_encuesta.propiedad_maravilla_31_2 = txt_maravilla_31_2.Text
        campo_encuesta.propiedad_maravilla_31_3 = txt_maravilla_31_3.Text
        campo_encuesta.propiedad_achicoria_25_4 = txt_25_4_p.Text
        campo_encuesta.propiedad_achicoria_27 = txt_ahicoria_27.Text
        campo_encuesta.propiedad_achicoria_27_1 = txt_ahicoria_27_1.Text
        campo_encuesta.propiedad_achicoria_27_2 = txt_ahicoria_27_2.Text
        campo_encuesta.propiedad_achicoria_27_3 = txt_ahicoria_27_3.Text
        campo_encuesta.propiedad_achicoria_27_4 = txt_ahicoria_27_4.Text
        campo_encuesta.propiedad_achicoria_27_5 = txt_ahicoria_27_5.Text
        campo_encuesta.propiedad_achicoria_28 = txt_ahicoria_28.Text
        campo_encuesta.propiedad_achicoria_28_1 = txt_ahicoria_28_1.Text
        campo_encuesta.propiedad_achicoria_28_2 = txt_ahicoria_28_2.Text
        campo_encuesta.propiedad_achicoria_28_3 = txt_ahicoria_28_3.Text
        campo_encuesta.propiedad_achicoria_29 = txt_ahicoria_29.Text
        campo_encuesta.propiedad_achicoria_29_1 = txt_ahicoria_29_1.Text
        campo_encuesta.propiedad_achicoria_29_2 = txt_ahicoria_29_2.Text
        campo_encuesta.propiedad_achicoria_29_3 = txt_ahicoria_29_3.Text
        campo_encuesta.propiedad_achicoria_29_4 = txt_ahicoria_29_4.Text
        campo_encuesta.propiedad_achicoria_29_5 = txt_ahicoria_29_5.Text
        campo_encuesta.propiedad_achicoria_29_6 = txt_ahicoria_29_6.Text
        campo_encuesta.propiedad_achicoria_29_7 = txt_ahicoria_29_7.Text
        campo_encuesta.propiedad_achicoria_29_8 = txt_ahicoria_29_8.Text
        campo_encuesta.propiedad_achicoria_29_9 = txt_ahicoria_29_9.Text
        campo_encuesta.propiedad_achicoria_30 = txt_ahicoria_30.Text
        campo_encuesta.propiedad_achicoria_30_1 = txt_ahicoria_30_1.Text
        campo_encuesta.propiedad_achicoria_30_2 = txt_ahicoria_30_2.Text
        campo_encuesta.propiedad_achicoria_30_3 = txt_ahicoria_30_3.Text
        campo_encuesta.propiedad_achicoria_30_4 = txt_ahicoria_30_4.Text
        campo_encuesta.propiedad_achicoria_31 = txt_ahicoria_31.Text
        campo_encuesta.propiedad_achicoria_31_1 = txt_ahicoria_31_1.Text
        campo_encuesta.propiedad_achicoria_31_2 = txt_ahicoria_31_2.Text
        campo_encuesta.propiedad_achicoria_31_3 = txt_ahicoria_31_3.Text
        campo_encuesta.propiedad_tomate_25_5 = txt_25_5_p.Text
        campo_encuesta.propiedad_tomate_27 = txt_tomate_27.Text
        campo_encuesta.propiedad_tomate_27_1 = txt_tomate_27_1.Text
        campo_encuesta.propiedad_tomate_27_2 = txt_tomate_27_2.Text
        campo_encuesta.propiedad_tomate_27_3 = txt_tomate_27_3.Text
        campo_encuesta.propiedad_tomate_27_4 = txt_tomate_27_4.Text
        campo_encuesta.propiedad_tomate_27_5 = txt_tomate_27_5.Text
        campo_encuesta.propiedad_tomate_28 = txt_tomate_28.Text
        campo_encuesta.propiedad_tomate_28_1 = txt_tomate_28_1.Text
        campo_encuesta.propiedad_tomate_28_2 = txt_tomate_28_2.Text
        campo_encuesta.propiedad_tomate_28_3 = txt_tomate_28_3.Text
        campo_encuesta.propiedad_tomate_29 = txt_tomate_29.Text
        campo_encuesta.propiedad_tomate_29_1 = txt_tomate_29_1.Text
        campo_encuesta.propiedad_tomate_29_2 = txt_tomate_29_2.Text
        campo_encuesta.propiedad_tomate_29_3 = txt_tomate_29_3.Text
        campo_encuesta.propiedad_tomate_29_4 = txt_tomate_29_4.Text
        campo_encuesta.propiedad_tomate_29_5 = txt_tomate_29_5.Text
        campo_encuesta.propiedad_tomate_29_6 = txt_tomate_29_6.Text
        campo_encuesta.propiedad_tomate_29_7 = txt_tomate_29_7.Text
        campo_encuesta.propiedad_tomate_29_8 = txt_tomate_29_8.Text
        campo_encuesta.propiedad_tomate_29_9 = txt_tomate_29_9.Text
        campo_encuesta.propiedad_tomate_30 = txt_tomate_30.Text
        campo_encuesta.propiedad_tomate_30_1 = txt_tomate_30_1.Text
        campo_encuesta.propiedad_tomate_30_2 = txt_tomate_30_2.Text
        campo_encuesta.propiedad_tomate_30_3 = txt_tomate_30_3.Text
        campo_encuesta.propiedad_tomate_30_4 = txt_tomate_30_4.Text
        campo_encuesta.propiedad_tomate_31 = txt_tomate_31.Text
        campo_encuesta.propiedad_tomate_31_1 = txt_tomate_31_1.Text
        campo_encuesta.propiedad_tomate_31_2 = txt_tomate_31_2.Text
        campo_encuesta.propiedad_tomate_31_3 = txt_tomate_31_3.Text
        campo_encuesta.propiedad_lupino_25_6 = txt_25_6_p.Text
        campo_encuesta.propiedad_lupino_27 = txt_lupino_27.Text
        campo_encuesta.propiedad_lupino_27_1 = txt_lupino_27_1.Text
        campo_encuesta.propiedad_lupino_27_2 = txt_lupino_27_2.Text
        campo_encuesta.propiedad_lupino_27_3 = txt_lupino_27_3.Text
        campo_encuesta.propiedad_lupino_27_4 = txt_lupino_27_4.Text
        campo_encuesta.propiedad_lupino_27_5 = txt_lupino_27_5.Text
        campo_encuesta.propiedad_lupino_28 = txt_lupino_28.Text
        campo_encuesta.propiedad_lupino_28_1 = txt_lupino_28_1.Text
        campo_encuesta.propiedad_lupino_28_2 = txt_lupino_28_2.Text
        campo_encuesta.propiedad_lupino_28_3 = txt_lupino_28_3.Text
        campo_encuesta.propiedad_lupino_29 = txt_lupino_29.Text
        campo_encuesta.propiedad_lupino_29_1 = txt_lupino_29_1.Text
        campo_encuesta.propiedad_lupino_29_2 = txt_lupino_29_2.Text
        campo_encuesta.propiedad_lupino_29_3 = txt_lupino_29_3.Text
        campo_encuesta.propiedad_lupino_29_4 = txt_lupino_29_4.Text
        campo_encuesta.propiedad_lupino_29_5 = txt_lupino_29_5.Text
        campo_encuesta.propiedad_lupino_29_6 = txt_lupino_29_6.Text
        campo_encuesta.propiedad_lupino_29_7 = txt_lupino_29_7.Text
        campo_encuesta.propiedad_lupino_29_8 = txt_lupino_29_8.Text
        campo_encuesta.propiedad_lupino_29_9 = txt_lupino_29_9.Text
        campo_encuesta.propiedad_lupino_30 = txt_lupino_30.Text
        campo_encuesta.propiedad_lupino_30_1 = txt_lupino_30_1.Text
        campo_encuesta.propiedad_lupino_30_2 = txt_lupino_30_2.Text
        campo_encuesta.propiedad_lupino_30_3 = txt_lupino_30_3.Text
        campo_encuesta.propiedad_lupino_30_4 = txt_lupino_30_4.Text
        campo_encuesta.propiedad_lupino_31 = txt_lupino_31.Text
        campo_encuesta.propiedad_lupino_31_1 = txt_lupino_31_1.Text
        campo_encuesta.propiedad_lupino_31_2 = txt_lupino_31_2.Text
        campo_encuesta.propiedad_lupino_31_3 = txt_lupino_31_3.Text
        campo_encuesta.propiedad_tabaco_25_7 = txt_25_7_p.Text
        campo_encuesta.propiedad_tabaco_27 = txt_tabaco_27.Text
        campo_encuesta.propiedad_tabaco_27_1 = txt_tabaco_27_1.Text
        campo_encuesta.propiedad_tabaco_27_2 = txt_tabaco_27_2.Text
        campo_encuesta.propiedad_tabaco_27_3 = txt_tabaco_27_3.Text
        campo_encuesta.propiedad_tabaco_27_4 = txt_tabaco_27_4.Text
        campo_encuesta.propiedad_tabaco_27_5 = txt_tabaco_27_5.Text
        campo_encuesta.propiedad_tabaco_28 = txt_tabaco_28.Text
        campo_encuesta.propiedad_tabaco_28_1 = txt_tabaco_28_1.Text
        campo_encuesta.propiedad_tabaco_28_2 = txt_tabaco_28_2.Text
        campo_encuesta.propiedad_tabaco_28_3 = txt_tabaco_28_3.Text
        campo_encuesta.propiedad_tabaco_29 = txt_tabaco_29.Text
        campo_encuesta.propiedad_tabaco_29_1 = txt_tabaco_29_1.Text
        campo_encuesta.propiedad_tabaco_29_2 = txt_tabaco_29_2.Text
        campo_encuesta.propiedad_tabaco_29_3 = txt_tabaco_29_3.Text
        campo_encuesta.propiedad_tabaco_29_4 = txt_tabaco_29_4.Text
        campo_encuesta.propiedad_tabaco_29_5 = txt_tabaco_29_5.Text
        campo_encuesta.propiedad_tabaco_29_6 = txt_tabaco_29_6.Text
        campo_encuesta.propiedad_tabaco_29_7 = txt_tabaco_29_7.Text
        campo_encuesta.propiedad_tabaco_29_8 = txt_tabaco_29_8.Text
        campo_encuesta.propiedad_tabaco_29_9 = txt_tabaco_29_9.Text
        campo_encuesta.propiedad_tabaco_30 = txt_tabaco_30.Text
        campo_encuesta.propiedad_tabaco_30_1 = txt_tabaco_30_1.Text
        campo_encuesta.propiedad_tabaco_30_2 = txt_tabaco_30_2.Text
        campo_encuesta.propiedad_tabaco_30_3 = txt_tabaco_30_3.Text
        campo_encuesta.propiedad_tabaco_30_4 = txt_tabaco_30_4.Text
        campo_encuesta.propiedad_tabaco_31 = txt_tabaco_31.Text
        campo_encuesta.propiedad_tabaco_31_1 = txt_tabaco_31_1.Text
        campo_encuesta.propiedad_tabaco_31_2 = txt_tabaco_31_2.Text
        campo_encuesta.propiedad_tabaco_31_3 = txt_tabaco_31_3.Text
        campo_encuesta.propiedad_sup_reg_26_1_1 = txt_sup_reg_26_1_1.Text
        campo_encuesta.propiedad_sup_reg_26_1_2 = txt_sup_reg_26_1_2.Text
        campo_encuesta.propiedad_sup_reg_26_1_3 = txt_sup_reg_26_1_3.Text
        campo_encuesta.propiedad_sup_reg_26_1_4 = txt_sup_reg_26_1_4.Text
        campo_encuesta.propiedad_sup_reg_26_1_5 = txt_sup_reg_26_1_5.Text
        campo_encuesta.propiedad_sup_reg_26_1_6 = txt_sup_reg_26_1_6.Text
        campo_encuesta.propiedad_sup_nac_26_2_1 = txt_sup_nac_26_2_1.Text
        campo_encuesta.propiedad_sup_nac_26_2_2 = txt_sup_nac_26_2_2.Text
        campo_encuesta.propiedad_sup_nac_26_2_3 = txt_sup_nac_26_2_3.Text
        campo_encuesta.propiedad_sup_nac_26_2_4 = txt_sup_nac_26_2_4.Text
        campo_encuesta.propiedad_sup_nac_26_2_5 = txt_sup_nac_26_2_5.Text
        campo_encuesta.propiedad_sup_nac_26_2_6 = txt_sup_nac_26_2_6.Text
        campo_encuesta.propiedad_nom_entre_inf = txt_nombre_infor.Text
        campo_encuesta.propiedad_Fecha = txt_fecha_inf.Text
        campo_encuesta.propiedad_tipoentrevista = drop_entrevista_inf.SelectedValue
        campo_encuesta.propiedad_observaciones = txt_observaciones.Text
        encuesta.Grabar(campo_encuesta)
        graba = True

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
    Protected Sub btn_limpiar_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        drop_comuna.Enabled = False
        txt_email_i.Enabled = False
        txt_fono_1_i.Enabled = False
        txt_fono_2_i.Enabled = False
        limpia(pnl_encuesta)

    End Sub
    Protected Sub btn_limpiarceros_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        limpia2(pnl_encuesta)
    End Sub
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
    Sub limpia2(ByVal panel As Panel)
        Dim x As String
        Dim ElControl As New Control
        Dim c As TextBox
        Dim d As DropDownList
        For Each ElControl In panel.Controls
            x = ElControl.ID
            If (TypeOf ElControl Is TextBox) Then
                c = ElControl
                If c.Text = "0" Then
                    c.Text = ""
                End If
            End If
            If (TypeOf ElControl Is DropDownList) Then
                d = ElControl
                '        d.SelectedIndex = 0
            End If
        Next
    End Sub
    Protected Sub btn_volver_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        Response.Redirect("../Index.aspx")
    End Sub

    Protected Sub btn_generar_id_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        generar_id()
    End Sub
    Sub generar_id()
        Dim dts As DataSet
        dts = encuesta.GeneraID()
        rutinas.carga_valor("txt_id", pnl_encuesta, dts.Tables(0).Rows(0).Item(0).ToString())
    End Sub

    Protected Sub btn_listar_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        drop_comuna.Enabled = True
        txt_email_i.Enabled = True
        txt_fono_1_i.Enabled = True
        txt_fono_2_i.Enabled = True
        trae()
    End Sub
    Sub trae()
        Dim llena_control As New llena_control
        Dim dts As DataSet
        Dim x As Integer
        Dim i As Integer
        If txt_id.Text = "" Then
            generar_id()
        End If

        campo_encuesta.propiedad_id = Val(txt_id.Text)

        dts = encuesta.Listar(campo_encuesta)
        If dts.Tables(0).Rows.Count > 0 Then
            For i = 0 To dts.Tables(0).Rows.Count - 1
                For x = 0 To dts.Tables(0).Columns.Count - 1
                    'If dts.Tables(0).Columns(x).ColumnName.ToString = "observaciones" Then
                    '    MensajeBox("WW", True)
                    'End If
                    rutinas.carga_valor("txt_" + dts.Tables(0).Columns(x).ColumnName.ToString, pnl_encuesta, dts.Tables(0).Rows(i).Item(x).ToString())
                    rutinas.carga_valor("drop_" + dts.Tables(0).Columns(x).ColumnName.ToString, pnl_encuesta, dts.Tables(0).Rows(i).Item(x).ToString())
                    If dts.Tables(0).Columns(x).ColumnName.ToString = "region" Then
                        llena_comuna(drop_comuna, drop_region.SelectedValue)
                    End If

                Next
            Next
        Else
            MensajeBox("Rol no Valido", True)
        End If
        txt_observaciones.Text = Trim(txt_observaciones.Text)
        txt_nombre_infor.Text = Trim(txt_nombre_infor.Text)

    End Sub
    Function valida() As Boolean

        valida = True
        If txt_nombre_informante.Text = "" Then
            MensajeBox("Debe poner el nombre del informante", True)
            txt_nombre_informante.Text = ""
            valida = False
        End If
        'If txt_fono_1_i.Text = "" And txt_fono_2_i.Text = "" And txt_email_i.Text = "" Then
        '    MensajeBox("Debe ingresar al menos un datos de contacto", True)
        '    txt_fono_1_i.Text = ""
        '    txt_fono_2_i.Text = ""
        '    txt_email_i.Text = ""
        '    valida = False
        'End If

        'Sección 1
        If txt_12_1_p.Text = "" Then
            If (Val(txt_trigo_blanco_14.Text) <> 0 Or Val(txt_trigo_blanco_14_1.Text) <> 0 Or Val(txt_trigo_blanco_14_2.Text) <> 0 Or Val(txt_trigo_blanco_14_3.Text) <> 0 Or Val(txt_trigo_blanco_14_4.Text) <> 0 Or Val(txt_trigo_blanco_14_5.Text) <> 0 Or Val(txt_trigo_blanco_15.Text) <> 0 Or Val(txt_trigo_blanco_15_1.Text) <> 0 Or Val(txt_trigo_blanco_15_2.Text) <> 0 Or Val(txt_trigo_blanco_15_3.Text) <> 0 Or Val(txt_trigo_blanco_16.Text) <> 0 Or Val(txt_trigo_blanco_16_1.Text) <> 0 Or Val(txt_trigo_blanco_16_2.Text) <> 0 Or Val(txt_trigo_blanco_16_3.Text) <> 0 Or Val(txt_trigo_blanco_16_4.Text) <> 0 Or Val(txt_trigo_blanco_16_5.Text) <> 0 Or Val(txt_trigo_blanco_16_6.Text) <> 0 Or Val(txt_trigo_blanco_16_7.Text) <> 0 Or Val(txt_trigo_blanco_16_8.Text) <> 0 Or Val(txt_trigo_blanco_16_9.Text) <> 0 Or Val(txt_trigo_blanco_17.Text) <> 0 Or Val(txt_trigo_blanco_17_1.Text) <> 0 Or Val(txt_trigo_blanco_17_2.Text) <> 0 Or Val(txt_trigo_blanco_17_3.Text) <> 0 Or Val(txt_trigo_blanco_17_4.Text) <> 0 Or Val(txt_trigo_blanco_17_5.Text) <> 0 Or Val(txt_trigo_blanco_18.Text) <> 0 Or Val(txt_trigo_blanco_18_1.Text) <> 0 Or Val(txt_trigo_blanco_18_2.Text) <> 0 Or Val(txt_trigo_blanco_18_3.Text) <> 0 Or Val(txt_trigo_blanco_18_4.Text) <> 0 Or Val(txt_trigo_blanco_18_5.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de trigo harinero, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_12_1_p.Text) <> 0 And (Val(txt_trigo_blanco_14.Text) = 0 And Val(txt_trigo_blanco_14_1.Text) = 0 And Val(txt_trigo_blanco_14_2.Text) = 0 And Val(txt_trigo_blanco_14_3.Text) = 0 And Val(txt_trigo_blanco_14_4.Text) = 0 And Val(txt_trigo_blanco_14_5.Text) = 0 And Val(txt_trigo_blanco_15.Text) = 0 And Val(txt_trigo_blanco_15_1.Text) = 0 And Val(txt_trigo_blanco_15_2.Text) = 0 And Val(txt_trigo_blanco_15_3.Text) = 0 And Val(txt_trigo_blanco_16.Text) = 0 And Val(txt_trigo_blanco_16_1.Text) = 0 And Val(txt_trigo_blanco_16_2.Text) = 0 And Val(txt_trigo_blanco_16_3.Text) = 0 And Val(txt_trigo_blanco_16_4.Text) = 0 And Val(txt_trigo_blanco_16_5.Text) = 0 And Val(txt_trigo_blanco_16_6.Text) = 0 And Val(txt_trigo_blanco_16_7.Text) = 0 And Val(txt_trigo_blanco_16_8.Text) = 0 And Val(txt_trigo_blanco_16_9.Text) = 0 And Val(txt_trigo_blanco_17.Text) = 0 And Val(txt_trigo_blanco_17_1.Text) = 0 And Val(txt_trigo_blanco_17_2.Text) = 0 And Val(txt_trigo_blanco_17_3.Text) = 0 And Val(txt_trigo_blanco_17_4.Text) = 0 And Val(txt_trigo_blanco_17_5.Text) = 0 And Val(txt_trigo_blanco_18.Text) = 0 And Val(txt_trigo_blanco_18_1.Text) = 0 And Val(txt_trigo_blanco_18_2.Text) = 0 And Val(txt_trigo_blanco_18_3.Text) = 0 And Val(txt_trigo_blanco_18_4.Text) = 0 And Val(txt_trigo_blanco_18_5.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de trigo harinero, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        If txt_12_2_p.Text = "" Then
            If (Val(txt_trigo_candeal_14.Text) <> 0 Or Val(txt_trigo_candeal_14_1.Text) <> 0 Or Val(txt_trigo_candeal_14_2.Text) <> 0 Or Val(txt_trigo_candeal_14_3.Text) <> 0 Or Val(txt_trigo_candeal_14_4.Text) <> 0 Or Val(txt_trigo_candeal_14_5.Text) <> 0 Or Val(txt_trigo_candeal_15.Text) <> 0 Or Val(txt_trigo_candeal_15_1.Text) <> 0 Or Val(txt_trigo_candeal_15_2.Text) <> 0 Or Val(txt_trigo_candeal_15_3.Text) <> 0 Or Val(txt_trigo_candeal_16.Text) <> 0 Or Val(txt_trigo_candeal_16_1.Text) <> 0 Or Val(txt_trigo_candeal_16_2.Text) <> 0 Or Val(txt_trigo_candeal_16_3.Text) <> 0 Or Val(txt_trigo_candeal_16_4.Text) <> 0 Or Val(txt_trigo_candeal_16_5.Text) <> 0 Or Val(txt_trigo_candeal_16_6.Text) <> 0 Or Val(txt_trigo_candeal_16_7.Text) <> 0 Or Val(txt_trigo_candeal_16_8.Text) <> 0 Or Val(txt_trigo_candeal_16_9.Text) <> 0 Or Val(txt_trigo_candeal_17.Text) <> 0 Or Val(txt_trigo_candeal_17_1.Text) <> 0 Or Val(txt_trigo_candeal_17_2.Text) <> 0 Or Val(txt_trigo_candeal_17_3.Text) <> 0 Or Val(txt_trigo_candeal_17_4.Text) <> 0 Or Val(txt_trigo_candeal_17_5.Text) <> 0 Or Val(txt_trigo_candeal_18.Text) <> 0 Or Val(txt_trigo_candeal_18_1.Text) <> 0 Or Val(txt_trigo_candeal_18_2.Text) <> 0 Or Val(txt_trigo_candeal_18_3.Text) <> 0 Or Val(txt_trigo_candeal_18_4.Text) <> 0 Or Val(txt_trigo_candeal_18_5.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de trigo candeal, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_12_2_p.Text) <> 0 And (Val(txt_trigo_candeal_14.Text) = 0 And Val(txt_trigo_candeal_14_1.Text) = 0 And Val(txt_trigo_candeal_14_2.Text) = 0 And Val(txt_trigo_candeal_14_3.Text) = 0 And Val(txt_trigo_candeal_14_4.Text) = 0 And Val(txt_trigo_candeal_14_5.Text) = 0 And Val(txt_trigo_candeal_15.Text) = 0 And Val(txt_trigo_candeal_15_1.Text) = 0 And Val(txt_trigo_candeal_15_2.Text) = 0 And Val(txt_trigo_candeal_15_3.Text) = 0 And Val(txt_trigo_candeal_16.Text) = 0 And Val(txt_trigo_candeal_16_1.Text) = 0 And Val(txt_trigo_candeal_16_2.Text) = 0 And Val(txt_trigo_candeal_16_3.Text) = 0 And Val(txt_trigo_candeal_16_4.Text) = 0 And Val(txt_trigo_candeal_16_5.Text) = 0 And Val(txt_trigo_candeal_16_6.Text) = 0 And Val(txt_trigo_candeal_16_7.Text) = 0 And Val(txt_trigo_candeal_16_8.Text) = 0 And Val(txt_trigo_candeal_16_9.Text) = 0 And Val(txt_trigo_candeal_17.Text) = 0 And Val(txt_trigo_candeal_17_1.Text) = 0 And Val(txt_trigo_candeal_17_2.Text) = 0 And Val(txt_trigo_candeal_17_3.Text) = 0 And Val(txt_trigo_candeal_17_4.Text) = 0 And Val(txt_trigo_candeal_17_5.Text) = 0 And Val(txt_trigo_candeal_18.Text) = 0 And Val(txt_trigo_candeal_18_1.Text) = 0 And Val(txt_trigo_candeal_18_2.Text) = 0 And Val(txt_trigo_candeal_18_3.Text) = 0 And Val(txt_trigo_candeal_18_4.Text) = 0 And Val(txt_trigo_candeal_18_5.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de trigo candeal, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        If txt_12_3_p.Text = "" Then
            If (Val(txt_avena_14.Text) <> 0 Or Val(txt_avena_14_1.Text) <> 0 Or Val(txt_avena_14_2.Text) <> 0 Or Val(txt_avena_14_3.Text) <> 0 Or Val(txt_avena_14_4.Text) <> 0 Or Val(txt_avena_14_5.Text) <> 0 Or Val(txt_avena_15.Text) <> 0 Or Val(txt_avena_15_1.Text) <> 0 Or Val(txt_avena_15_2.Text) <> 0 Or Val(txt_avena_15_3.Text) <> 0 Or Val(txt_avena_16.Text) <> 0 Or Val(txt_avena_16_1.Text) <> 0 Or Val(txt_avena_16_2.Text) <> 0 Or Val(txt_avena_16_3.Text) <> 0 Or Val(txt_avena_16_4.Text) <> 0 Or Val(txt_avena_16_5.Text) <> 0 Or Val(txt_avena_16_6.Text) <> 0 Or Val(txt_avena_16_7.Text) <> 0 Or Val(txt_avena_16_8.Text) <> 0 Or Val(txt_avena_16_9.Text) <> 0 Or Val(txt_avena_17.Text) <> 0 Or Val(txt_avena_17_1.Text) <> 0 Or Val(txt_avena_17_2.Text) <> 0 Or Val(txt_avena_17_3.Text) <> 0 Or Val(txt_avena_17_4.Text) <> 0 Or Val(txt_avena_17_5.Text) <> 0 Or Val(txt_avena_18.Text) <> 0 Or Val(txt_avena_18_1.Text) <> 0 Or Val(txt_avena_18_2.Text) <> 0 Or Val(txt_avena_18_3.Text) <> 0 Or Val(txt_avena_18_4.Text) <> 0 Or Val(txt_avena_18_5.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de avena, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_12_3_p.Text) <> 0 And (Val(txt_avena_14.Text) = 0 And Val(txt_avena_14_1.Text) = 0 And Val(txt_avena_14_2.Text) = 0 And Val(txt_avena_14_3.Text) = 0 And Val(txt_avena_14_4.Text) = 0 And Val(txt_avena_14_5.Text) = 0 And Val(txt_avena_15.Text) = 0 And Val(txt_avena_15_1.Text) = 0 And Val(txt_avena_15_2.Text) = 0 And Val(txt_avena_15_3.Text) = 0 And Val(txt_avena_16.Text) = 0 And Val(txt_avena_16_1.Text) = 0 And Val(txt_avena_16_2.Text) = 0 And Val(txt_avena_16_3.Text) = 0 And Val(txt_avena_16_4.Text) = 0 And Val(txt_avena_16_5.Text) = 0 And Val(txt_avena_16_6.Text) = 0 And Val(txt_avena_16_7.Text) = 0 And Val(txt_avena_16_8.Text) = 0 And Val(txt_avena_16_9.Text) = 0 And Val(txt_avena_17.Text) = 0 And Val(txt_avena_17_1.Text) = 0 And Val(txt_avena_17_2.Text) = 0 And Val(txt_avena_17_3.Text) = 0 And Val(txt_avena_17_4.Text) = 0 And Val(txt_avena_17_5.Text) = 0 And Val(txt_avena_18.Text) = 0 And Val(txt_avena_18_1.Text) = 0 And Val(txt_avena_18_2.Text) = 0 And Val(txt_avena_18_3.Text) = 0 And Val(txt_avena_18_4.Text) = 0 And Val(txt_avena_18_5.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de avena, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        If txt_12_4_p.Text = "" Then
            If (Val(txt_cebada_14.Text) <> 0 Or Val(txt_cebada_14_1.Text) <> 0 Or Val(txt_cebada_14_2.Text) <> 0 Or Val(txt_cebada_14_3.Text) <> 0 Or Val(txt_cebada_14_4.Text) <> 0 Or Val(txt_cebada_14_5.Text) <> 0 Or Val(txt_cebada_15.Text) <> 0 Or Val(txt_cebada_15_1.Text) <> 0 Or Val(txt_cebada_15_2.Text) <> 0 Or Val(txt_cebada_15_3.Text) <> 0 Or Val(txt_cebada_16.Text) <> 0 Or Val(txt_cebada_16_1.Text) <> 0 Or Val(txt_cebada_16_2.Text) <> 0 Or Val(txt_cebada_16_3.Text) <> 0 Or Val(txt_cebada_16_4.Text) <> 0 Or Val(txt_cebada_16_5.Text) <> 0 Or Val(txt_cebada_16_6.Text) <> 0 Or Val(txt_cebada_16_7.Text) <> 0 Or Val(txt_cebada_16_8.Text) <> 0 Or Val(txt_cebada_16_9.Text) <> 0 Or Val(txt_cebada_17.Text) <> 0 Or Val(txt_cebada_17_1.Text) <> 0 Or Val(txt_cebada_17_2.Text) <> 0 Or Val(txt_cebada_17_3.Text) <> 0 Or Val(txt_cebada_17_4.Text) <> 0 Or Val(txt_cebada_17_5.Text) <> 0 Or Val(txt_cebada_18.Text) <> 0 Or Val(txt_cebada_18_1.Text) <> 0 Or Val(txt_cebada_18_2.Text) <> 0 Or Val(txt_cebada_18_3.Text) <> 0 Or Val(txt_cebada_18_4.Text) <> 0 Or Val(txt_cebada_18_5.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de cebada, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_12_4_p.Text) <> 0 And (Val(txt_cebada_14.Text) = 0 And Val(txt_cebada_14_1.Text) = 0 And Val(txt_cebada_14_2.Text) = 0 And Val(txt_cebada_14_3.Text) = 0 And Val(txt_cebada_14_4.Text) = 0 And Val(txt_cebada_14_5.Text) = 0 And Val(txt_cebada_15.Text) = 0 And Val(txt_cebada_15_1.Text) = 0 And Val(txt_cebada_15_2.Text) = 0 And Val(txt_cebada_15_3.Text) = 0 And Val(txt_cebada_16.Text) = 0 And Val(txt_cebada_16_1.Text) = 0 And Val(txt_cebada_16_2.Text) = 0 And Val(txt_cebada_16_3.Text) = 0 And Val(txt_cebada_16_4.Text) = 0 And Val(txt_cebada_16_5.Text) = 0 And Val(txt_cebada_16_6.Text) = 0 And Val(txt_cebada_16_7.Text) = 0 And Val(txt_cebada_16_8.Text) = 0 And Val(txt_cebada_16_9.Text) = 0 And Val(txt_cebada_17.Text) = 0 And Val(txt_cebada_17_1.Text) = 0 And Val(txt_cebada_17_2.Text) = 0 And Val(txt_cebada_17_3.Text) = 0 And Val(txt_cebada_17_4.Text) = 0 And Val(txt_cebada_17_5.Text) = 0 And Val(txt_cebada_18.Text) = 0 And Val(txt_cebada_18_1.Text) = 0 And Val(txt_cebada_18_2.Text) = 0 And Val(txt_cebada_18_3.Text) = 0 And Val(txt_cebada_18_4.Text) = 0 And Val(txt_cebada_18_5.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de trigo cebada, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        If txt_12_5_p.Text = "" Then
            If (Val(txt_maiz_c_14.Text) <> 0 Or Val(txt_maiz_c_14_1.Text) <> 0 Or Val(txt_maiz_c_14_2.Text) <> 0 Or Val(txt_maiz_c_14_3.Text) <> 0 Or Val(txt_maiz_c_14_4.Text) <> 0 Or Val(txt_maiz_c_14_5.Text) <> 0 Or Val(txt_maiz_c_15.Text) <> 0 Or Val(txt_maiz_c_15_1.Text) <> 0 Or Val(txt_maiz_c_15_2.Text) <> 0 Or Val(txt_maiz_c_15_3.Text) <> 0 Or Val(txt_maiz_c_16.Text) <> 0 Or Val(txt_maiz_c_16_1.Text) <> 0 Or Val(txt_maiz_c_16_2.Text) <> 0 Or Val(txt_maiz_c_16_3.Text) <> 0 Or Val(txt_maiz_c_16_4.Text) <> 0 Or Val(txt_maiz_c_16_5.Text) <> 0 Or Val(txt_maiz_c_16_6.Text) <> 0 Or Val(txt_maiz_c_16_7.Text) <> 0 Or Val(txt_maiz_c_16_8.Text) <> 0 Or Val(txt_maiz_c_16_9.Text) <> 0 Or Val(txt_maiz_c_17.Text) <> 0 Or Val(txt_maiz_c_17_1.Text) <> 0 Or Val(txt_maiz_c_17_2.Text) <> 0 Or Val(txt_maiz_c_17_3.Text) <> 0 Or Val(txt_maiz_c_17_4.Text) <> 0 Or Val(txt_maiz_c_17_5.Text) <> 0 Or Val(txt_maiz_c_18.Text) <> 0 Or Val(txt_maiz_c_18_1.Text) <> 0 Or Val(txt_maiz_c_18_2.Text) <> 0 Or Val(txt_maiz_c_18_3.Text) <> 0 Or Val(txt_maiz_c_18_4.Text) <> 0 Or Val(txt_maiz_c_18_5.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de maíz consumo, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_12_5_p.Text) <> 0 And (Val(txt_maiz_c_14.Text) = 0 And Val(txt_maiz_c_14_1.Text) = 0 And Val(txt_maiz_c_14_2.Text) = 0 And Val(txt_maiz_c_14_3.Text) = 0 And Val(txt_maiz_c_14_4.Text) = 0 And Val(txt_maiz_c_14_5.Text) = 0 And Val(txt_maiz_c_15.Text) = 0 And Val(txt_maiz_c_15_1.Text) = 0 And Val(txt_maiz_c_15_2.Text) = 0 And Val(txt_maiz_c_15_3.Text) = 0 And Val(txt_maiz_c_16.Text) = 0 And Val(txt_maiz_c_16_1.Text) = 0 And Val(txt_maiz_c_16_2.Text) = 0 And Val(txt_maiz_c_16_3.Text) = 0 And Val(txt_maiz_c_16_4.Text) = 0 And Val(txt_maiz_c_16_5.Text) = 0 And Val(txt_maiz_c_16_6.Text) = 0 And Val(txt_maiz_c_16_7.Text) = 0 And Val(txt_maiz_c_16_8.Text) = 0 And Val(txt_maiz_c_16_9.Text) = 0 And Val(txt_maiz_c_17.Text) = 0 And Val(txt_maiz_c_17_1.Text) = 0 And Val(txt_maiz_c_17_2.Text) = 0 And Val(txt_maiz_c_17_3.Text) = 0 And Val(txt_maiz_c_17_4.Text) = 0 And Val(txt_maiz_c_17_5.Text) = 0 And Val(txt_maiz_c_18.Text) = 0 And Val(txt_maiz_c_18_1.Text) = 0 And Val(txt_maiz_c_18_2.Text) = 0 And Val(txt_maiz_c_18_3.Text) = 0 And Val(txt_maiz_c_18_4.Text) = 0 And Val(txt_maiz_c_18_5.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de maíz consumo, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        If txt_12_6_p.Text = "" Then
            If (Val(txt_maiz_s_14.Text) <> 0 Or Val(txt_maiz_s_14_1.Text) <> 0 Or Val(txt_maiz_s_14_2.Text) <> 0 Or Val(txt_maiz_s_14_3.Text) <> 0 Or Val(txt_maiz_s_14_4.Text) <> 0 Or Val(txt_maiz_s_14_5.Text) <> 0 Or Val(txt_maiz_s_15.Text) <> 0 Or Val(txt_maiz_s_15_1.Text) <> 0 Or Val(txt_maiz_s_15_2.Text) <> 0 Or Val(txt_maiz_s_15_3.Text) <> 0 Or Val(txt_maiz_s_16.Text) <> 0 Or Val(txt_maiz_s_16_1.Text) <> 0 Or Val(txt_maiz_s_16_2.Text) <> 0 Or Val(txt_maiz_s_16_3.Text) <> 0 Or Val(txt_maiz_s_16_4.Text) <> 0 Or Val(txt_maiz_s_16_5.Text) <> 0 Or Val(txt_maiz_s_16_6.Text) <> 0 Or Val(txt_maiz_s_16_7.Text) <> 0 Or Val(txt_maiz_s_16_8.Text) <> 0 Or Val(txt_maiz_s_16_9.Text) <> 0 Or Val(txt_maiz_s_17.Text) <> 0 Or Val(txt_maiz_s_17_1.Text) <> 0 Or Val(txt_maiz_s_17_2.Text) <> 0 Or Val(txt_maiz_s_17_3.Text) <> 0 Or Val(txt_maiz_s_17_4.Text) <> 0 Or Val(txt_maiz_s_17_5.Text) <> 0 Or Val(txt_maiz_s_18.Text) <> 0 Or Val(txt_maiz_s_18_1.Text) <> 0 Or Val(txt_maiz_s_18_2.Text) <> 0 Or Val(txt_maiz_s_18_3.Text) <> 0 Or Val(txt_maiz_s_18_4.Text) <> 0 Or Val(txt_maiz_s_18_5.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de maíz semilla, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_12_6_p.Text) <> 0 And (Val(txt_maiz_s_14.Text) = 0 And Val(txt_maiz_s_14_1.Text) = 0 And Val(txt_maiz_s_14_2.Text) = 0 And Val(txt_maiz_s_14_3.Text) = 0 And Val(txt_maiz_s_14_4.Text) = 0 And Val(txt_maiz_s_14_5.Text) = 0 And Val(txt_maiz_s_15.Text) = 0 And Val(txt_maiz_s_15_1.Text) = 0 And Val(txt_maiz_s_15_2.Text) = 0 And Val(txt_maiz_s_15_3.Text) = 0 And Val(txt_maiz_s_16.Text) = 0 And Val(txt_maiz_s_16_1.Text) = 0 And Val(txt_maiz_s_16_2.Text) = 0 And Val(txt_maiz_s_16_3.Text) = 0 And Val(txt_maiz_s_16_4.Text) = 0 And Val(txt_maiz_s_16_5.Text) = 0 And Val(txt_maiz_s_16_6.Text) = 0 And Val(txt_maiz_s_16_7.Text) = 0 And Val(txt_maiz_s_16_8.Text) = 0 And Val(txt_maiz_s_16_9.Text) = 0 And Val(txt_maiz_s_17.Text) = 0 And Val(txt_maiz_s_17_1.Text) = 0 And Val(txt_maiz_s_17_2.Text) = 0 And Val(txt_maiz_s_17_3.Text) = 0 And Val(txt_maiz_s_17_4.Text) = 0 And Val(txt_maiz_s_17_5.Text) = 0 And Val(txt_maiz_s_18.Text) = 0 And Val(txt_maiz_s_18_1.Text) = 0 And Val(txt_maiz_s_18_2.Text) = 0 And Val(txt_maiz_s_18_3.Text) = 0 And Val(txt_maiz_s_18_4.Text) = 0 And Val(txt_maiz_s_18_5.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de maíz semilla, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        If txt_12_7_p.Text = "" Then
            If (Val(txt_arroz_14.Text) <> 0 Or Val(txt_arroz_14_1.Text) <> 0 Or Val(txt_arroz_14_2.Text) <> 0 Or Val(txt_arroz_14_3.Text) <> 0 Or Val(txt_arroz_14_4.Text) <> 0 Or Val(txt_arroz_14_5.Text) <> 0 Or Val(txt_arroz_15.Text) <> 0 Or Val(txt_arroz_15_1.Text) <> 0 Or Val(txt_arroz_15_2.Text) <> 0 Or Val(txt_arroz_15_3.Text) <> 0 Or Val(txt_arroz_16.Text) <> 0 Or Val(txt_arroz_16_1.Text) <> 0 Or Val(txt_arroz_16_2.Text) <> 0 Or Val(txt_arroz_16_3.Text) <> 0 Or Val(txt_arroz_16_4.Text) <> 0 Or Val(txt_arroz_16_5.Text) <> 0 Or Val(txt_arroz_16_6.Text) <> 0 Or Val(txt_arroz_16_7.Text) <> 0 Or Val(txt_arroz_16_8.Text) <> 0 Or Val(txt_arroz_16_9.Text) <> 0 Or Val(txt_arroz_17.Text) <> 0 Or Val(txt_arroz_17_1.Text) <> 0 Or Val(txt_arroz_17_2.Text) <> 0 Or Val(txt_arroz_17_3.Text) <> 0 Or Val(txt_arroz_17_4.Text) <> 0 Or Val(txt_arroz_17_5.Text) <> 0 Or Val(txt_arroz_18.Text) <> 0 Or Val(txt_arroz_18_1.Text) <> 0 Or Val(txt_arroz_18_2.Text) <> 0 Or Val(txt_arroz_18_3.Text) <> 0 Or Val(txt_arroz_18_4.Text) <> 0 Or Val(txt_arroz_18_5.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de arroz, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_12_7_p.Text) <> 0 And (Val(txt_arroz_14.Text) = 0 And Val(txt_arroz_14_1.Text) = 0 And Val(txt_arroz_14_2.Text) = 0 And Val(txt_arroz_14_3.Text) = 0 And Val(txt_arroz_14_4.Text) = 0 And Val(txt_arroz_14_5.Text) = 0 And Val(txt_arroz_15.Text) = 0 And Val(txt_arroz_15_1.Text) = 0 And Val(txt_arroz_15_2.Text) = 0 And Val(txt_arroz_15_3.Text) = 0 And Val(txt_arroz_16.Text) = 0 And Val(txt_arroz_16_1.Text) = 0 And Val(txt_arroz_16_2.Text) = 0 And Val(txt_arroz_16_3.Text) = 0 And Val(txt_arroz_16_4.Text) = 0 And Val(txt_arroz_16_5.Text) = 0 And Val(txt_arroz_16_6.Text) = 0 And Val(txt_arroz_16_7.Text) = 0 And Val(txt_arroz_16_8.Text) = 0 And Val(txt_arroz_16_9.Text) = 0 And Val(txt_arroz_17.Text) = 0 And Val(txt_arroz_17_1.Text) = 0 And Val(txt_arroz_17_2.Text) = 0 And Val(txt_arroz_17_3.Text) = 0 And Val(txt_arroz_17_4.Text) = 0 And Val(txt_arroz_17_5.Text) = 0 And Val(txt_arroz_18.Text) = 0 And Val(txt_arroz_18_1.Text) = 0 And Val(txt_arroz_18_2.Text) = 0 And Val(txt_arroz_18_3.Text) = 0 And Val(txt_arroz_18_4.Text) = 0 And Val(txt_arroz_18_5.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de arroz, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        'Sección 2
        If txt_19_1_p.Text = "" Then
            If (Val(txt_poroto_20.Text) <> 0 Or Val(txt_poroto_20_1.Text) <> 0 Or Val(txt_poroto_20_2.Text) <> 0 Or Val(txt_poroto_20_3.Text) <> 0 Or Val(txt_poroto_20_4.Text) <> 0 Or Val(txt_poroto_20_5.Text) <> 0 Or Val(txt_poroto_21.Text) <> 0 Or Val(txt_poroto_21_1.Text) <> 0 Or Val(txt_poroto_21_2.Text) <> 0 Or Val(txt_poroto_21_3.Text) <> 0 Or Val(txt_poroto_22.Text) <> 0 Or Val(txt_poroto_22_1.Text) <> 0 Or Val(txt_poroto_22_2.Text) <> 0 Or Val(txt_poroto_22_3.Text) <> 0 Or Val(txt_poroto_22_4.Text) <> 0 Or Val(txt_poroto_22_5.Text) <> 0 Or Val(txt_poroto_22_6.Text) <> 0 Or Val(txt_poroto_22_7.Text) <> 0 Or Val(txt_poroto_22_8.Text) <> 0 Or Val(txt_poroto_22_9.Text) <> 0 Or Val(txt_poroto_23.Text) <> 0 Or Val(txt_poroto_23_1.Text) <> 0 Or Val(txt_poroto_23_2.Text) <> 0 Or Val(txt_poroto_23_3.Text) <> 0 Or Val(txt_poroto_23_4.Text) <> 0 <> 0 Or Val(txt_poroto_24.Text) <> 0 Or Val(txt_poroto_24_1.Text) <> 0 Or Val(txt_poroto_24_2.Text) <> 0 Or Val(txt_poroto_24_3.Text) <> 0 Or Val(txt_poroto_24_4.Text) <> 0 Or Val(txt_poroto_24_5.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de poroto, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_19_1_p.Text) <> 0 And (Val(txt_poroto_20.Text) = 0 And Val(txt_poroto_20_1.Text) = 0 And Val(txt_poroto_20_2.Text) = 0 And Val(txt_poroto_20_3.Text) = 0 And Val(txt_poroto_20_4.Text) = 0 And Val(txt_poroto_20_5.Text) = 0 And Val(txt_poroto_21.Text) = 0 And Val(txt_poroto_21_1.Text) = 0 And Val(txt_poroto_21_2.Text) = 0 And Val(txt_poroto_21_3.Text) = 0 And Val(txt_poroto_22.Text) = 0 And Val(txt_poroto_22_1.Text) = 0 And Val(txt_poroto_22_2.Text) = 0 And Val(txt_poroto_22_3.Text) = 0 And Val(txt_poroto_22_4.Text) = 0 And Val(txt_poroto_22_5.Text) = 0 And Val(txt_poroto_22_6.Text) = 0 And Val(txt_poroto_22_7.Text) = 0 And Val(txt_poroto_22_8.Text) = 0 And Val(txt_poroto_22_9.Text) = 0 And Val(txt_poroto_23.Text) = 0 And Val(txt_poroto_23_1.Text) = 0 And Val(txt_poroto_23_2.Text) = 0 And Val(txt_poroto_23_3.Text) = 0 And Val(txt_poroto_23_4.Text) = 0 And Val(txt_poroto_24.Text) = 0 And Val(txt_poroto_24_1.Text) = 0 And Val(txt_poroto_24_2.Text) = 0 And Val(txt_poroto_24_3.Text) = 0 And Val(txt_poroto_24_4.Text) = 0 And Val(txt_poroto_24_5.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de poroto, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        If txt_19_2_p.Text = "" Then
            If (Val(txt_papa_20.Text) <> 0 Or Val(txt_papa_20_1.Text) <> 0 Or Val(txt_papa_20_2.Text) <> 0 Or Val(txt_papa_20_3.Text) <> 0 Or Val(txt_papa_20_4.Text) <> 0 Or Val(txt_papa_20_5.Text) <> 0 Or Val(txt_papa_21.Text) <> 0 Or Val(txt_papa_21_1.Text) <> 0 Or Val(txt_papa_21_2.Text) <> 0 Or Val(txt_papa_21_3.Text) <> 0 Or Val(txt_papa_22.Text) <> 0 Or Val(txt_papa_22_1.Text) <> 0 Or Val(txt_papa_22_2.Text) <> 0 Or Val(txt_papa_22_3.Text) <> 0 Or Val(txt_papa_22_4.Text) <> 0 Or Val(txt_papa_22_5.Text) <> 0 Or Val(txt_papa_22_6.Text) <> 0 Or Val(txt_papa_22_7.Text) <> 0 Or Val(txt_papa_22_8.Text) <> 0 Or Val(txt_papa_22_9.Text) <> 0 Or Val(txt_papa_23.Text) <> 0 Or Val(txt_papa_23_1.Text) <> 0 Or Val(txt_papa_23_2.Text) <> 0 Or Val(txt_papa_23_3.Text) <> 0 Or Val(txt_papa_23_4.Text) <> 0 <> 0 Or Val(txt_papa_24.Text) <> 0 Or Val(txt_papa_24_1.Text) <> 0 Or Val(txt_papa_24_2.Text) <> 0 Or Val(txt_papa_24_3.Text) <> 0 Or Val(txt_papa_24_4.Text) <> 0 Or Val(txt_papa_24_5.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de papa, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_19_2_p.Text) <> 0 And (Val(txt_papa_20.Text) = 0 And Val(txt_papa_20_1.Text) = 0 And Val(txt_papa_20_2.Text) = 0 And Val(txt_papa_20_3.Text) = 0 And Val(txt_papa_20_4.Text) = 0 And Val(txt_papa_20_5.Text) = 0 And Val(txt_papa_21.Text) = 0 And Val(txt_papa_21_1.Text) = 0 And Val(txt_papa_21_2.Text) = 0 And Val(txt_papa_21_3.Text) = 0 And Val(txt_papa_22.Text) = 0 And Val(txt_papa_22_1.Text) = 0 And Val(txt_papa_22_2.Text) = 0 And Val(txt_papa_22_3.Text) = 0 And Val(txt_papa_22_4.Text) = 0 And Val(txt_papa_22_5.Text) = 0 And Val(txt_papa_22_6.Text) = 0 And Val(txt_papa_22_7.Text) = 0 And Val(txt_papa_22_8.Text) = 0 And Val(txt_papa_22_9.Text) = 0 And Val(txt_papa_23.Text) = 0 And Val(txt_papa_23_1.Text) = 0 And Val(txt_papa_23_2.Text) = 0 And Val(txt_papa_23_3.Text) = 0 And Val(txt_papa_23_4.Text) = 0 And Val(txt_papa_24.Text) = 0 And Val(txt_papa_24_1.Text) = 0 And Val(txt_papa_24_2.Text) = 0 And Val(txt_papa_24_3.Text) = 0 And Val(txt_papa_24_4.Text) = 0 And Val(txt_papa_24_5.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de papa, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        'Sección 3
        If txt_25_1_p.Text = "" Then
            If (Val(txt_raps_27.Text) <> 0 Or Val(txt_raps_27_1.Text) <> 0 Or Val(txt_raps_27_2.Text) <> 0 Or Val(txt_raps_27_3.Text) <> 0 Or Val(txt_raps_27_4.Text) <> 0 Or Val(txt_raps_27_5.Text) <> 0 Or Val(txt_raps_28.Text) <> 0 Or Val(txt_raps_28_1.Text) <> 0 Or Val(txt_raps_28_2.Text) <> 0 Or Val(txt_raps_28_3.Text) <> 0 Or Val(txt_raps_29.Text) <> 0 Or Val(txt_raps_29_1.Text) <> 0 Or Val(txt_raps_29_2.Text) <> 0 Or Val(txt_raps_29_3.Text) <> 0 Or Val(txt_raps_29_4.Text) <> 0 Or Val(txt_raps_29_5.Text) <> 0 Or Val(txt_raps_29_6.Text) <> 0 Or Val(txt_raps_29_7.Text) <> 0 Or Val(txt_raps_29_8.Text) <> 0 Or Val(txt_raps_29_9.Text) <> 0 Or Val(txt_raps_30.Text) <> 0 Or Val(txt_raps_30_1.Text) <> 0 Or Val(txt_raps_30_2.Text) <> 0 Or Val(txt_raps_30_3.Text) <> 0 Or Val(txt_raps_30_4.Text) <> 0 <> 0 Or Val(txt_raps_31.Text) <> 0 Or Val(txt_raps_31_1.Text) <> 0 Or Val(txt_raps_31_2.Text) <> 0 Or Val(txt_raps_31_3.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de raps, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_25_1_p.Text) <> 0 And (Val(txt_raps_27.Text) = 0 And Val(txt_raps_27_1.Text) = 0 And Val(txt_raps_27_2.Text) = 0 And Val(txt_raps_27_3.Text) = 0 And Val(txt_raps_27_4.Text) = 0 And Val(txt_raps_27_5.Text) = 0 And Val(txt_raps_28.Text) = 0 And Val(txt_raps_28_1.Text) = 0 And Val(txt_raps_28_2.Text) = 0 And Val(txt_raps_28_3.Text) = 0 And Val(txt_raps_29.Text) = 0 And Val(txt_raps_29_1.Text) = 0 And Val(txt_raps_29_2.Text) = 0 And Val(txt_raps_29_3.Text) = 0 And Val(txt_raps_29_4.Text) = 0 And Val(txt_raps_29_5.Text) = 0 And Val(txt_raps_29_6.Text) = 0 And Val(txt_raps_29_7.Text) = 0 And Val(txt_raps_29_8.Text) = 0 And Val(txt_raps_29_9.Text) = 0 And Val(txt_raps_30.Text) = 0 And Val(txt_raps_30_1.Text) = 0 And Val(txt_raps_30_2.Text) = 0 And Val(txt_raps_30_3.Text) = 0 And Val(txt_raps_30_4.Text) = 0 And Val(txt_raps_31.Text) = 0 And Val(txt_raps_31_1.Text) = 0 And Val(txt_raps_31_2.Text) = 0 And Val(txt_raps_31_3.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de raps, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        If txt_25_2_p.Text = "" Then
            If (Val(txt_remolacha_27.Text) <> 0 Or Val(txt_remolacha_27_1.Text) <> 0 Or Val(txt_remolacha_27_2.Text) <> 0 Or Val(txt_remolacha_27_3.Text) <> 0 Or Val(txt_remolacha_27_4.Text) <> 0 Or Val(txt_remolacha_27_5.Text) <> 0 Or Val(txt_remolacha_28.Text) <> 0 Or Val(txt_remolacha_28_1.Text) <> 0 Or Val(txt_remolacha_28_2.Text) <> 0 Or Val(txt_remolacha_28_3.Text) <> 0 Or Val(txt_remolacha_29.Text) <> 0 Or Val(txt_remolacha_29_1.Text) <> 0 Or Val(txt_remolacha_29_2.Text) <> 0 Or Val(txt_remolacha_29_3.Text) <> 0 Or Val(txt_remolacha_29_4.Text) <> 0 Or Val(txt_remolacha_29_5.Text) <> 0 Or Val(txt_remolacha_29_6.Text) <> 0 Or Val(txt_remolacha_29_7.Text) <> 0 Or Val(txt_remolacha_29_8.Text) <> 0 Or Val(txt_remolacha_29_9.Text) <> 0 Or Val(txt_remolacha_30.Text) <> 0 Or Val(txt_remolacha_30_1.Text) <> 0 Or Val(txt_remolacha_30_2.Text) <> 0 Or Val(txt_remolacha_30_3.Text) <> 0 Or Val(txt_remolacha_30_4.Text) <> 0 <> 0 Or Val(txt_remolacha_31.Text) <> 0 Or Val(txt_remolacha_31_1.Text) <> 0 Or Val(txt_remolacha_31_2.Text) <> 0 Or Val(txt_remolacha_31_3.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de remolacha, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_25_2_p.Text) <> 0 And (Val(txt_remolacha_27.Text) = 0 And Val(txt_remolacha_27_1.Text) = 0 And Val(txt_remolacha_27_2.Text) = 0 And Val(txt_remolacha_27_3.Text) = 0 And Val(txt_remolacha_27_4.Text) = 0 And Val(txt_remolacha_27_5.Text) = 0 And Val(txt_remolacha_28.Text) = 0 And Val(txt_remolacha_28_1.Text) = 0 And Val(txt_remolacha_28_2.Text) = 0 And Val(txt_remolacha_28_3.Text) = 0 And Val(txt_remolacha_29.Text) = 0 And Val(txt_remolacha_29_1.Text) = 0 And Val(txt_remolacha_29_2.Text) = 0 And Val(txt_remolacha_29_3.Text) = 0 And Val(txt_remolacha_29_4.Text) = 0 And Val(txt_remolacha_29_5.Text) = 0 And Val(txt_remolacha_29_6.Text) = 0 And Val(txt_remolacha_29_7.Text) = 0 And Val(txt_remolacha_29_8.Text) = 0 And Val(txt_remolacha_29_9.Text) = 0 And Val(txt_remolacha_30.Text) = 0 And Val(txt_remolacha_30_1.Text) = 0 And Val(txt_remolacha_30_2.Text) = 0 And Val(txt_remolacha_30_3.Text) = 0 And Val(txt_remolacha_30_4.Text) = 0 And Val(txt_remolacha_31.Text) = 0 And Val(txt_remolacha_31_1.Text) = 0 And Val(txt_remolacha_31_2.Text) = 0 And Val(txt_remolacha_31_3.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de remolacha, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        If txt_25_3_p.Text = "" Then
            If (Val(txt_maravilla_27.Text) <> 0 Or Val(txt_maravilla_27_1.Text) <> 0 Or Val(txt_maravilla_27_2.Text) <> 0 Or Val(txt_maravilla_27_3.Text) <> 0 Or Val(txt_maravilla_27_4.Text) <> 0 Or Val(txt_maravilla_27_5.Text) <> 0 Or Val(txt_maravilla_28.Text) <> 0 Or Val(txt_maravilla_28_1.Text) <> 0 Or Val(txt_maravilla_28_2.Text) <> 0 Or Val(txt_maravilla_28_3.Text) <> 0 Or Val(txt_maravilla_29.Text) <> 0 Or Val(txt_maravilla_29_1.Text) <> 0 Or Val(txt_maravilla_29_2.Text) <> 0 Or Val(txt_maravilla_29_3.Text) <> 0 Or Val(txt_maravilla_29_4.Text) <> 0 Or Val(txt_maravilla_29_5.Text) <> 0 Or Val(txt_maravilla_29_6.Text) <> 0 Or Val(txt_maravilla_29_7.Text) <> 0 Or Val(txt_maravilla_29_8.Text) <> 0 Or Val(txt_maravilla_29_9.Text) <> 0 Or Val(txt_maravilla_30.Text) <> 0 Or Val(txt_maravilla_30_1.Text) <> 0 Or Val(txt_maravilla_30_2.Text) <> 0 Or Val(txt_maravilla_30_3.Text) <> 0 Or Val(txt_maravilla_30_4.Text) <> 0 <> 0 Or Val(txt_maravilla_31.Text) <> 0 Or Val(txt_maravilla_31_1.Text) <> 0 Or Val(txt_maravilla_31_2.Text) <> 0 Or Val(txt_maravilla_31_3.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de maravilla, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_25_3_p.Text) <> 0 And (Val(txt_maravilla_27.Text) = 0 And Val(txt_maravilla_27_1.Text) = 0 And Val(txt_maravilla_27_2.Text) = 0 And Val(txt_maravilla_27_3.Text) = 0 And Val(txt_maravilla_27_4.Text) = 0 And Val(txt_maravilla_27_5.Text) = 0 And Val(txt_maravilla_28.Text) = 0 And Val(txt_maravilla_28_1.Text) = 0 And Val(txt_maravilla_28_2.Text) = 0 And Val(txt_maravilla_28_3.Text) = 0 And Val(txt_maravilla_29.Text) = 0 And Val(txt_maravilla_29_1.Text) = 0 And Val(txt_maravilla_29_2.Text) = 0 And Val(txt_maravilla_29_3.Text) = 0 And Val(txt_maravilla_29_4.Text) = 0 And Val(txt_maravilla_29_5.Text) = 0 And Val(txt_maravilla_29_6.Text) = 0 And Val(txt_maravilla_29_7.Text) = 0 And Val(txt_maravilla_29_8.Text) = 0 And Val(txt_maravilla_29_9.Text) = 0 And Val(txt_maravilla_30.Text) = 0 And Val(txt_maravilla_30_1.Text) = 0 And Val(txt_maravilla_30_2.Text) = 0 And Val(txt_maravilla_30_3.Text) = 0 And Val(txt_maravilla_30_4.Text) = 0 And Val(txt_maravilla_31.Text) = 0 And Val(txt_maravilla_31_1.Text) = 0 And Val(txt_maravilla_31_2.Text) = 0 And Val(txt_maravilla_31_3.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de maravilla, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        If txt_25_4_p.Text = "" Then
            If (Val(txt_ahicoria_27.Text) <> 0 Or Val(txt_ahicoria_27_1.Text) <> 0 Or Val(txt_ahicoria_27_2.Text) <> 0 Or Val(txt_ahicoria_27_3.Text) <> 0 Or Val(txt_ahicoria_27_4.Text) <> 0 Or Val(txt_ahicoria_27_5.Text) <> 0 Or Val(txt_ahicoria_28.Text) <> 0 Or Val(txt_ahicoria_28_1.Text) <> 0 Or Val(txt_ahicoria_28_2.Text) <> 0 Or Val(txt_ahicoria_28_3.Text) <> 0 Or Val(txt_ahicoria_29.Text) <> 0 Or Val(txt_ahicoria_29_1.Text) <> 0 Or Val(txt_ahicoria_29_2.Text) <> 0 Or Val(txt_ahicoria_29_3.Text) <> 0 Or Val(txt_ahicoria_29_4.Text) <> 0 Or Val(txt_ahicoria_29_5.Text) <> 0 Or Val(txt_ahicoria_29_6.Text) <> 0 Or Val(txt_ahicoria_29_7.Text) <> 0 Or Val(txt_ahicoria_29_8.Text) <> 0 Or Val(txt_ahicoria_29_9.Text) <> 0 Or Val(txt_ahicoria_30.Text) <> 0 Or Val(txt_ahicoria_30_1.Text) <> 0 Or Val(txt_ahicoria_30_2.Text) <> 0 Or Val(txt_ahicoria_30_3.Text) <> 0 Or Val(txt_ahicoria_30_4.Text) <> 0 <> 0 Or Val(txt_ahicoria_31.Text) <> 0 Or Val(txt_ahicoria_31_1.Text) <> 0 Or Val(txt_ahicoria_31_2.Text) <> 0 Or Val(txt_ahicoria_31_3.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de achicoría, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_25_4_p.Text) <> 0 And (Val(txt_ahicoria_27.Text) = 0 And Val(txt_ahicoria_27_1.Text) = 0 And Val(txt_ahicoria_27_2.Text) = 0 And Val(txt_ahicoria_27_3.Text) = 0 And Val(txt_ahicoria_27_4.Text) = 0 And Val(txt_ahicoria_27_5.Text) = 0 And Val(txt_ahicoria_28.Text) = 0 And Val(txt_ahicoria_28_1.Text) = 0 And Val(txt_ahicoria_28_2.Text) = 0 And Val(txt_ahicoria_28_3.Text) = 0 And Val(txt_ahicoria_29.Text) = 0 And Val(txt_ahicoria_29_1.Text) = 0 And Val(txt_ahicoria_29_2.Text) = 0 And Val(txt_ahicoria_29_3.Text) = 0 And Val(txt_ahicoria_29_4.Text) = 0 And Val(txt_ahicoria_29_5.Text) = 0 And Val(txt_ahicoria_29_6.Text) = 0 And Val(txt_ahicoria_29_7.Text) = 0 And Val(txt_ahicoria_29_8.Text) = 0 And Val(txt_ahicoria_29_9.Text) = 0 And Val(txt_ahicoria_30.Text) = 0 And Val(txt_ahicoria_30_1.Text) = 0 And Val(txt_ahicoria_30_2.Text) = 0 And Val(txt_ahicoria_30_3.Text) = 0 And Val(txt_ahicoria_30_4.Text) = 0 And Val(txt_ahicoria_31.Text) = 0 And Val(txt_ahicoria_31_1.Text) = 0 And Val(txt_ahicoria_31_2.Text) = 0 And Val(txt_ahicoria_31_3.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de achicoría, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        If txt_25_5_p.Text = "" Then
            If (Val(txt_tomate_27.Text) <> 0 Or Val(txt_tomate_27_1.Text) <> 0 Or Val(txt_tomate_27_2.Text) <> 0 Or Val(txt_tomate_27_3.Text) <> 0 Or Val(txt_tomate_27_4.Text) <> 0 Or Val(txt_tomate_27_5.Text) <> 0 Or Val(txt_tomate_28.Text) <> 0 Or Val(txt_tomate_28_1.Text) <> 0 Or Val(txt_tomate_28_2.Text) <> 0 Or Val(txt_tomate_28_3.Text) <> 0 Or Val(txt_tomate_29.Text) <> 0 Or Val(txt_tomate_29_1.Text) <> 0 Or Val(txt_tomate_29_2.Text) <> 0 Or Val(txt_tomate_29_3.Text) <> 0 Or Val(txt_tomate_29_4.Text) <> 0 Or Val(txt_tomate_29_5.Text) <> 0 Or Val(txt_tomate_29_6.Text) <> 0 Or Val(txt_tomate_29_7.Text) <> 0 Or Val(txt_tomate_29_8.Text) <> 0 Or Val(txt_tomate_29_9.Text) <> 0 Or Val(txt_tomate_30.Text) <> 0 Or Val(txt_tomate_30_1.Text) <> 0 Or Val(txt_tomate_30_2.Text) <> 0 Or Val(txt_tomate_30_3.Text) <> 0 Or Val(txt_tomate_30_4.Text) <> 0 <> 0 Or Val(txt_tomate_31.Text) <> 0 Or Val(txt_tomate_31_1.Text) <> 0 Or Val(txt_tomate_31_2.Text) <> 0 Or Val(txt_tomate_31_3.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de tomate, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_25_5_p.Text) <> 0 And (Val(txt_tomate_27.Text) = 0 And Val(txt_tomate_27_1.Text) = 0 And Val(txt_tomate_27_2.Text) = 0 And Val(txt_tomate_27_3.Text) = 0 And Val(txt_tomate_27_4.Text) = 0 And Val(txt_tomate_27_5.Text) = 0 And Val(txt_tomate_28.Text) = 0 And Val(txt_tomate_28_1.Text) = 0 And Val(txt_tomate_28_2.Text) = 0 And Val(txt_tomate_28_3.Text) = 0 And Val(txt_tomate_29.Text) = 0 And Val(txt_tomate_29_1.Text) = 0 And Val(txt_tomate_29_2.Text) = 0 And Val(txt_tomate_29_3.Text) = 0 And Val(txt_tomate_29_4.Text) = 0 And Val(txt_tomate_29_5.Text) = 0 And Val(txt_tomate_29_6.Text) = 0 And Val(txt_tomate_29_7.Text) = 0 And Val(txt_tomate_29_8.Text) = 0 And Val(txt_tomate_29_9.Text) = 0 And Val(txt_tomate_30.Text) = 0 And Val(txt_tomate_30_1.Text) = 0 And Val(txt_tomate_30_2.Text) = 0 And Val(txt_tomate_30_3.Text) = 0 And Val(txt_tomate_30_4.Text) = 0 And Val(txt_tomate_31.Text) = 0 And Val(txt_tomate_31_1.Text) = 0 And Val(txt_tomate_31_2.Text) = 0 And Val(txt_tomate_31_3.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de tomate, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        If txt_25_6_p.Text = "" Then
            If (Val(txt_lupino_27.Text) <> 0 Or Val(txt_lupino_27_1.Text) <> 0 Or Val(txt_lupino_27_2.Text) <> 0 Or Val(txt_lupino_27_3.Text) <> 0 Or Val(txt_lupino_27_4.Text) <> 0 Or Val(txt_lupino_27_5.Text) <> 0 Or Val(txt_lupino_28.Text) <> 0 Or Val(txt_lupino_28_1.Text) <> 0 Or Val(txt_lupino_28_2.Text) <> 0 Or Val(txt_lupino_28_3.Text) <> 0 Or Val(txt_lupino_29.Text) <> 0 Or Val(txt_lupino_29_1.Text) <> 0 Or Val(txt_lupino_29_2.Text) <> 0 Or Val(txt_lupino_29_3.Text) <> 0 Or Val(txt_lupino_29_4.Text) <> 0 Or Val(txt_lupino_29_5.Text) <> 0 Or Val(txt_lupino_29_6.Text) <> 0 Or Val(txt_lupino_29_7.Text) <> 0 Or Val(txt_lupino_29_8.Text) <> 0 Or Val(txt_lupino_29_9.Text) <> 0 Or Val(txt_lupino_30.Text) <> 0 Or Val(txt_lupino_30_1.Text) <> 0 Or Val(txt_lupino_30_2.Text) <> 0 Or Val(txt_lupino_30_3.Text) <> 0 Or Val(txt_lupino_30_4.Text) <> 0 <> 0 Or Val(txt_lupino_31.Text) <> 0 Or Val(txt_lupino_31_1.Text) <> 0 Or Val(txt_lupino_31_2.Text) <> 0 Or Val(txt_lupino_31_3.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de lupino, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_25_6_p.Text) <> 0 And (Val(txt_lupino_27.Text) = 0 And Val(txt_lupino_27_1.Text) = 0 And Val(txt_lupino_27_2.Text) = 0 And Val(txt_lupino_27_3.Text) = 0 And Val(txt_lupino_27_4.Text) = 0 And Val(txt_lupino_27_5.Text) = 0 And Val(txt_lupino_28.Text) = 0 And Val(txt_lupino_28_1.Text) = 0 And Val(txt_lupino_28_2.Text) = 0 And Val(txt_lupino_28_3.Text) = 0 And Val(txt_lupino_29.Text) = 0 And Val(txt_lupino_29_1.Text) = 0 And Val(txt_lupino_29_2.Text) = 0 And Val(txt_lupino_29_3.Text) = 0 And Val(txt_lupino_29_4.Text) = 0 And Val(txt_lupino_29_5.Text) = 0 And Val(txt_lupino_29_6.Text) = 0 And Val(txt_lupino_29_7.Text) = 0 And Val(txt_lupino_29_8.Text) = 0 And Val(txt_lupino_29_9.Text) = 0 And Val(txt_lupino_30.Text) = 0 And Val(txt_lupino_30_1.Text) = 0 And Val(txt_lupino_30_2.Text) = 0 And Val(txt_lupino_30_3.Text) = 0 And Val(txt_lupino_30_4.Text) = 0 And Val(txt_lupino_31.Text) = 0 And Val(txt_lupino_31_1.Text) = 0 And Val(txt_lupino_31_2.Text) = 0 And Val(txt_lupino_31_3.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de lupino, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        If txt_25_7_p.Text = "" Then
            If (Val(txt_tabaco_27.Text) <> 0 Or Val(txt_tabaco_27_1.Text) <> 0 Or Val(txt_tabaco_27_2.Text) <> 0 Or Val(txt_tabaco_27_3.Text) <> 0 Or Val(txt_tabaco_27_4.Text) <> 0 Or Val(txt_tabaco_27_5.Text) <> 0 Or Val(txt_tabaco_28.Text) <> 0 Or Val(txt_tabaco_28_1.Text) <> 0 Or Val(txt_tabaco_28_2.Text) <> 0 Or Val(txt_tabaco_28_3.Text) <> 0 Or Val(txt_tabaco_29.Text) <> 0 Or Val(txt_tabaco_29_1.Text) <> 0 Or Val(txt_tabaco_29_2.Text) <> 0 Or Val(txt_tabaco_29_3.Text) <> 0 Or Val(txt_tabaco_29_4.Text) <> 0 Or Val(txt_tabaco_29_5.Text) <> 0 Or Val(txt_tabaco_29_6.Text) <> 0 Or Val(txt_tabaco_29_7.Text) <> 0 Or Val(txt_tabaco_29_8.Text) <> 0 Or Val(txt_tabaco_29_9.Text) <> 0 Or Val(txt_tabaco_30.Text) <> 0 Or Val(txt_tabaco_30_1.Text) <> 0 Or Val(txt_tabaco_30_2.Text) <> 0 Or Val(txt_tabaco_30_3.Text) <> 0 Or Val(txt_tabaco_30_4.Text) <> 0 <> 0 Or Val(txt_tabaco_31.Text) <> 0 Or Val(txt_tabaco_31_1.Text) <> 0 Or Val(txt_tabaco_31_2.Text) <> 0 Or Val(txt_tabaco_31_3.Text) <> 0) Then
                MensajeBox("Si marcó algún factor que influye en su pronóstico de tabaco, debe ingresa su pronóstico", True)
                valida = False
            End If
        End If
        If Val(txt_25_7_p.Text) <> 0 And (Val(txt_tabaco_27.Text) = 0 And Val(txt_tabaco_27_1.Text) = 0 And Val(txt_tabaco_27_2.Text) = 0 And Val(txt_tabaco_27_3.Text) = 0 And Val(txt_tabaco_27_4.Text) = 0 And Val(txt_tabaco_27_5.Text) = 0 And Val(txt_tabaco_28.Text) = 0 And Val(txt_tabaco_28_1.Text) = 0 And Val(txt_tabaco_28_2.Text) = 0 And Val(txt_tabaco_28_3.Text) = 0 And Val(txt_tabaco_29.Text) = 0 And Val(txt_tabaco_29_1.Text) = 0 And Val(txt_tabaco_29_2.Text) = 0 And Val(txt_tabaco_29_3.Text) = 0 And Val(txt_tabaco_29_4.Text) = 0 And Val(txt_tabaco_29_5.Text) = 0 And Val(txt_tabaco_29_6.Text) = 0 And Val(txt_tabaco_29_7.Text) = 0 And Val(txt_tabaco_29_8.Text) = 0 And Val(txt_tabaco_29_9.Text) = 0 And Val(txt_tabaco_30.Text) = 0 And Val(txt_tabaco_30_1.Text) = 0 And Val(txt_tabaco_30_2.Text) = 0 And Val(txt_tabaco_30_3.Text) = 0 And Val(txt_tabaco_30_4.Text) = 0 And Val(txt_tabaco_31.Text) = 0 And Val(txt_tabaco_31_1.Text) = 0 And Val(txt_tabaco_31_2.Text) = 0 And Val(txt_tabaco_31_3.Text) = 0) Then
            MensajeBox("Si marcó algún pronóstico de tabaco, debe ingresa algún valor para los factores que influyen en su pronóstico", True)
            valida = False
        End If
        'Sección encuestador
        If txt_nombre_infor.Text = "" Then
            MensajeBox("Debe poner el nombre del entrevistador", True)
            txt_nombre_infor.Text = ""
            valida = False
        End If
        If txt_fecha_inf.Text = "" Then
            MensajeBox("Debe poner la fecha de la entrevista", True)
            txt_fecha_inf.Text = ""
            valida = False
        End If
        If drop_entrevista_inf.SelectedValue = 0 Then
            MensajeBox("Debe marcar el tipo de entevista", True)
            valida = False
        End If
    End Function

 

End Class

'Protected Sub drop_provincia_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)
'    rutinas.llena_comuna(drop_comuna, drop_provincia.SelectedValue)
'    rutinas.llena_comuna(drop_comuna2, drop_provincia.SelectedValue)

'End Sub


'Function elimina() As Boolean
'    elimina = False
'    campo_encuesta.propiedad_Año = Val(txt_año.Text)
'    campo_encuesta.propiedad_Rol = Val(txt_rol.Text)
'    campo_encuesta.propiedad_Mes = Val(txt_mes.Text)
'    encuesta.Eliminar(campo_encuesta)
'    elimina = True
'End Function
'Protected Sub Button3_Click(ByVal sender As Object, ByVal e As System.EventArgs)
'    If valida() = False Then
'        Exit Sub
'    End If
'    If graba(0) = True Then
'        MensajeBox("Registro Grabado con Exito", True)
'        trae()
'    Else

'        MensajeBox("Error al Grabar el Registro", True)
'        If elimina() = False Then
'            ' MensajeBox("Error al Eliminar el Registro", True)
'        End If
'    End If
'End Sub

'Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
'    If Val(txt_rol.Text) > 0 Then
'        trae()
'    Else
'        MensajeBox("Debe ingresar un rol", True)
'    End If
'End Sub


'Protected Sub Button4_Click(ByVal sender As Object, ByVal e As System.EventArgs)
'    limpia(pnl_encuesta)
'End Sub

