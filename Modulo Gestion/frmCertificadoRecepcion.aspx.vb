Imports System.Data.SqlClient
Imports System.Data
Partial Class Modulo_Gestion_frmCertificadoRecepcion
    Inherits System.Web.UI.Page
    Dim rutinas As New rutinas
    Dim CN As New SqlClient.SqlConnection("Server=LIMONERO;database=ENCGANADOBOC2015;uid=usuarioganadoboc2015;pwd=usuarioganadoboc2015")
    Dim nombrenc As String

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If IsPostBack = False Then
            valida_campos(Panel1)          
            obtener_sistema()
            '  obtener_encuestador()
        End If
    End Sub
    Sub obtener_sistema()

        CN.Open()
        Dim CONSULTAENC As String = "SELECT 0 AS Cod, 'Seleccione tipo de informe' UNION SELECT 1 AS Cod,'Digitador' AS tipo UNION SELECT 2,'Encuestador' UNION SELECT 3,'Supervirsor'"
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)

        drop_sis.DataSource = exeNUMMAX
        drop_sis.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_sis.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_sis.DataBind()
        '  txt_nombre.Focus()
        CN.Close()

    End Sub
    Sub obtener_encuestador()

        CN.Open()
        Dim a As String
        a = drop_sis.SelectedIndex

        Dim CONSULTAENC As String
        If drop_sis.SelectedValue = 1 Then
            CONSULTAENC = "SELECT 0,'Seleccione un Digitador' UNION SELECT 1,'CAMILA VILLANUEVA' AS nombre UNION SELECT 2,'KAREM MERY'"

        ElseIf drop_sis.SelectedValue = 2 Then
            CONSULTAENC = "SELECT 0 AS Cod,'Seleccione un encuestador' UNION SELECT distinct  RANK()OVER(ORDER BY grg.Encuestador) AS Cod,grg.Encuestador FROM Ges_RecepcionGt grg,Ges_Encuesta ge WHERE ge.PkSistema=grg.PkSistema AND ge.Id=grg.Id AND grg.Folio=ge.Folio AND grg.Estado_Pago IS null AND ge.PkEstadoEncuesta>3 GROUP BY grg.Encuestador ORDER BY Cod"
           
        ElseIf drop_sis.SelectedValue = 3 Then
            drop_numinf.Visible = True
            '    CONSULTAENC = "SELECT 0,'Seleccione un supervisor' UNION SELECT 1,'Pedro Caceres Lillo' AS nombre UNION SELECT 2,'Carolina Duco Ibañez' AS nombre UNION SELECT 3,'María Valeska Flores' AS nombre UNION SELECT 4,'Roberto Paut' AS nombre UNION SELECT 5,'Leonardo Maureira' AS nombre UNION SELECT	6,'Rodrigo Navarrete' AS nombre UNION SELECT 7,'Yasna Saez Pantanalli' AS nombre "
        Else
            drop_numinf.Visible = False
        End If

        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)

        drop_enc.DataSource = exeNUMMAX
        drop_enc.DataValueField = exeNUMMAX.Columns(1).ToString
        drop_enc.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_enc.DataBind()
        '  txt_nombre.Focus()
        CN.Close()
    End Sub
    Sub obtener_periodo()

        ' CN.Open()
        Dim CONSULTAENC As String = "SELECT 0 AS Cod,'Seleccione remesa' UNION SELECT 1, 'Remesa 10 noviembre' AS PeriodoAL UNION SELECT 2 AS Cod,'Remesa 25 noviembre' AS PeriodoAL UNION SELECT 3 AS Cod,'Remesa 10 diciembre' AS PeriodoAL "
        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)

        drop_numinf.DataSource = exeNUMMAX
        drop_numinf.DataValueField = exeNUMMAX.Columns(0).ToString
        drop_numinf.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_numinf.DataBind()
        '  txt_nombre.Focus()
        '     CN.Close()

        'Gas licuado: 143
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


    Protected Sub btn_certificado_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_certificado.Click
        Dim carpeta As String
        Dim archivo As String
        Dim archivo2 As String

        If valida() = False Then
            Exit Sub
        End If

        If drop_sis.SelectedValue = 3 Or drop_sis.SelectedValue = 1 Then
            txt_cum_4.Text = txt_cum_1.Text
            txt_cum_1.Text = ""
            txt_cum_5.Text = txt_cum_2.Text
            txt_cum_2.Text = ""
        End If
        '9-9-90528866
        If rutinas.Genera_Certificado2(drop_sis.SelectedValue, drop_enc.Text, txt_numero_inf.Text, txt_fecha_inf.Text, txt_nombre.Text, txt_rut.Text, txt_dvrut.Text, txt_resolucion.Text, txt_fecha.Text, txt_fecha1.Text, txt_fecha2.Text, txt_provincia.Text, txt_region.Text, txt_cont1.Text, txt_cont2.Text, txt_cum_1.Text, txt_cum_2.Text, txt_cum_3.Text, txt_cum_4.Text, txt_cum_5.Text, txt_cum_6.Text, txt_cum_7.Text, txt_cum_8.Text, txt_cum_9.Text, txt_cum_10.Text, txt_cum_11.Text, txt_cum_12.Text) = True Then
            carpeta = Server.MapPath("InformeCumplimiento" + txt_numero_inf.Text + "_" + drop_enc.Text + ".pdf")
            archivo = carpeta
            archivo2 = "InformeCumplimiento" + txt_numero_inf.Text + "_" + drop_enc.Text + ".pdf"
            MuestraArchivo(archivo, archivo2)
        Else
            MensajeBox("Error al Generar Boleta de Honorarios", True)
        End If
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
            End If
            If (TypeOf ElControl Is DropDownList) Then
                d = ElControl
                d.Attributes.Add("onkeydown", "javascript:PresionaEnter();")
            End If
        Next

    End Sub
    Function valida() As Boolean
        valida = False

        valida = True
    End Function
    Protected Sub drop_sis_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_sis.SelectedIndexChanged
        If drop_sis.SelectedValue <> 0 Then
            drop_numinf.Visible = True
            btn_pago.Visible = False
            obtener_periodo()
            If drop_sis.SelectedValue = "2" Then
                drop_numinf.Visible = False
                drop_enc.Visible = True
                btn_pago.Visible = True
                obtener_encuestador()
            ElseIf drop_sis.SelectedValue = "1" Then
                drop_numinf.Visible = False
                drop_enc.Visible = True
                obtener_encuestador()
            End If
        Else
            btn_pago.Visible = False
            drop_enc.Visible = False
            drop_numinf.Visible = False


        End If

    End Sub

    Sub traer()
        CN.Open()
        Dim a As String
        a = drop_sis.SelectedIndex
        Dim CONSULTAENC As String

        If drop_sis.SelectedValue = 1 Then
            CONSULTAENC = "SELECT A1.numeroinf, UPPER(CASE WHEN A1.Region=99 THEN 'Total País/P' WHEN A1.Region=1 THEN 'Tarapaca' WHEN A1.Region=15 THEN 'Arica y Parinacota' WHEN A1.Region=2 THEN 'Antofagasta' WHEN A1.Region=3 THEN 'Atacama' WHEN A1.Region=4 THEN 'Coquimbo' WHEN A1.Region=5 THEN 'Valparaíso' WHEN A1.Region=13 THEN 'Metropolitana' WHEN A1.Region=6 THEN 'O'+CHAR(39)+'Higgins' WHEN A1.Region=7 THEN 'Maule' WHEN A1.Region=8 THEN 'Biobío' WHEN A1.Region=9 THEN 'La Araucanía' WHEN A1.Region=14 THEN 'Los Ríos' WHEN A1.Region=10 THEN 'Los Lagos' WHEN A1.Region=11 THEN 'Aysén' WHEN A1.Region=12 THEN 'Magallanes' END) AS Region, A1.nombre, A1.rut, A1.dv_rut, A1.PeriodoDEL,A1.PeriodoAL, A1.Fechainf, A1.M1, A1.E1 FROM(SELECT 1 AS numeroinf, 11 AS Region, UPPER('Camila Villanueva')AS nombre,19461281 AS rut,8 AS dv_rut,'1/Marzo/2015' AS PeriodoDEL,'31/Marzo/2015' AS PeriodoAL,replace(convert(NVARCHAR, getdate(), 106), ' ', '/') AS Fechainf,'LEVANTAMIENTO ENCUESTA DE BOVINOS Y OVINOS 2015' AS M1,'LA DIGITADORA CAMILA VILLANUEVA HA REALIZADO LA DIGITACIÓN DE 136 ENCUESTAS DE LA REGIÓN XI POR UN MONTO TOTAL DE $ 81.600.' AS E1 UNION SELECT 1 AS numeroinf, 12 AS Region, UPPER('Karem Mery')AS nombre,16142891 AS rut,4 AS dv_rut,'1/Marzo/2015' AS PeriodoDEL,'31/Marzo/2015' AS PeriodoAL,replace(convert(NVARCHAR, getdate(), 106), ' ', '/') AS Fechainf,'LEVANTAMIENTO ENCUESTA DE BOVINOS Y OVINOS 2015' AS M1,'LA DIGITADORA KAREM MERY HA REALIZADO LA DIGITACIÓN DE 68 ENCUESTAS DE LA REGIÓN XII POR UN MONTO TOTAL DE $ 40.800.' AS E1)AS A1 WHERE A1.numeroinf=1 AND A1.nombre='" + drop_enc.Text + "'"
            'CONSULTAENC = "SELECT distinct gu.NombreUsuario+' ' + gu.ApellidoPaterno+ ' ' + gu.ApellidoMaterno AS nombre,replace(convert(NVARCHAR, getdate(), 106), ' ', '/') AS Fechainf,'10-Dic-2014'AS PeriodoDel,'12-Dic-2014' AS PeriodoAL,UPPER(CASE WHEN grg.Region=99 THEN 'Total País/P' WHEN grg.Region=1 THEN 'Tarapaca' WHEN grg.Region=15 THEN 'Arica y Parinacota' WHEN grg.Region=2 THEN 'Antofagasta' WHEN grg.Region=3 THEN 'Atacama' WHEN grg.Region=4 THEN 'Coquimbo' WHEN grg.Region=5 THEN 'Valparaíso' WHEN grg.Region=13 THEN 'Metropolitana' WHEN grg.Region=6 THEN 'O'+CHAR(39)+'Higgins' WHEN grg.Region=7 THEN 'Maule' WHEN grg.Region=8 THEN 'Biobío' WHEN grg.Region=9 THEN 'La Araucanía' WHEN grg.Region=14 THEN 'Los Ríos' WHEN grg.Region=10 THEN 'Los Lagos' WHEN grg.Region=11 THEN 'Aysén' WHEN grg.Region=12 THEN 'Magallanes' END) AS Region,'LEVANTAMIENTO ENCUESTA DE SUPERFICIE CULTIVOS ANUALES Y HORTALIZAS 2014/2015' AS M1 ,'EL ENCUESTADOR ' + gu.NombreUsuario+' ' + gu.ApellidoPaterno+ ' HA CUMPLIDO SATISFACTORIAMENTE CON LA CARGA ASIGNADA. REALIZÓ '+ CAST(A.N AS VARCHAR(3))+ ' ENCUESTAS ' AS E1,'QUE EQUIVALEN A $'+ CAST(A.M AS VARCHAR(12)) + ' (INCLUYE SEGURO $3.667).' AS E2 FROM Ges_RecepcionGt grg,Ges_Usuario gu, (SELECT count(grg.Folio) AS N,count(grg.Folio)*12000+3667 AS M,grg.Encuestador FROM Ges_RecepcionGt grg,Ges_Encuesta ge WHERE ge.Folio=grg.Folio AND grg.PkSistema=ge.PkSistema AND grg.Id=ge.Id AND ge.PkEstadoEncuesta>4 AND grg.Estado_Pago IS null AND grg.Encuestador='" + drop_enc.Text + "' GROUP BY grg.Encuestador) AS A WHERE grg.PkSistema=gu.PkSistema AND grg.Encuestador=gu.PkUsuario AND A.Encuestador=grg.Encuestador AND grg.Estado_Pago IS null AND grg.Encuestador='" + drop_enc.Text + "'" 'Hortalizas
        ElseIf drop_sis.SelectedValue = 2 Then
            CONSULTAENC = "SELECT distinct UPPER(gu.NombreUsuario+' ' + gu.ApellidoPaterno+ ' ' + CASE WHEN gu.ApellidoMaterno IS NULL THEN '' ELSE gu.ApellidoMaterno END) AS nombre,replace(convert(NVARCHAR, getdate(), 106), ' ', '-') AS Fechainf,'1-Abr-2015'AS PeriodoDel,'9-Abr-2015' AS PeriodoAL, UPPER(CASE WHEN grg.Region=99 THEN 'Total País/P' WHEN grg.Region=1 THEN 'Tarapaca' WHEN grg.Region=15 THEN 'Arica y Parinacota' WHEN grg.Region=2 THEN 'Antofagasta' WHEN grg.Region=3 THEN 'Atacama' WHEN grg.Region=4 THEN 'Coquimbo' WHEN grg.Region=5 THEN 'Valparaíso' WHEN grg.Region=13 THEN 'Metropolitana' WHEN grg.Region=6 THEN 'O'+CHAR(39)+'Higgins' WHEN grg.Region=7 THEN 'Maule' WHEN grg.Region=8 THEN 'Biobío' WHEN grg.Region=9 THEN 'La Araucanía' WHEN grg.Region=14 THEN 'Los Ríos' WHEN grg.Region=10 THEN 'Los Lagos' WHEN grg.Region=11 THEN 'Aysén' WHEN grg.Region=12 THEN 'Magallanes' END) AS Region, 'LEVANTAMIENTO ENCUESTA DE BOVINOS Y OVINOS 2015' AS M1 , 'EL ENCUESTADOR ' + UPPER(gu.NombreUsuario)+' ' + UPPER(gu.ApellidoPaterno)+ ' HA CUMPLIDO SATISFACTORIAMENTE CON LA CARGA ASIGNADA. REALIZÓ '+ CAST(A.N AS VARCHAR(3))+ ' ENCUESTAS ' AS E1, 'QUE EQUIVALEN A $'+ CAST(A.M+3786 AS VARCHAR(12)) + ' (INCLUYE SEGURO $3.786).' AS E2 FROM Ges_RecepcionGt grg,Ges_Usuario gu, (SELECT SUM(V1.N)AS N, SUM(V1.M) AS M, V1.Encuestador	FROM(SELECT COUNT(V.Id) AS N,(COUNT(V.Id)*V.TipoValor)AS M,V.Encuestador,V.PkSistema FROM (SELECT grg.PkSistema,grg.Id, CASE WHEN eb.P1_1=102 THEN 15000 WHEN eb.P1_1=104 THEN 25000 WHEN eb.P1_1=121 or eb.P1_1=122 or eb.P1_1=123 or eb.P1_1=124 or eb.P1_1=111 or eb.P1_1=112 or eb.P1_1=113 or eb.P1_1=114  THEN 24000 ELSE 13000 END TipoValor,grg.Encuestador	FROM Ges_RecepcionGt grg,Ges_Encuesta ge,ENC_Bovinos eb				WHERE ge.Folio=grg.Folio AND grg.PkSistema=ge.PkSistema AND grg.Id=ge.Id AND grg.PkSistema=eb.PkSistema AND grg.Id=eb.Id AND grg.Folio=eb.Folio AND ge.PkEstadoEncuesta>3 AND grg.Estado_Pago IS null UNION	SELECT grg.PkSistema,grg.Id, CASE WHEN eb.P1_1=102 THEN 15000 WHEN eb.P1_1=104 THEN 25000 WHEN eb.P1_1=121 or eb.P1_1=122 or eb.P1_1=123 or eb.P1_1=124 or eb.P1_1=111 or eb.P1_1=112 or eb.P1_1=113 or eb.P1_1=114 THEN 24000 ELSE 13000 END TipoValor,grg.Encuestador	FROM Ges_RecepcionGt grg,Ges_Encuesta ge, ENC_Ovinos eb	WHERE ge.Folio=grg.Folio AND grg.PkSistema=ge.PkSistema AND grg.Id=ge.Id AND grg.PkSistema=eb.PkSistema AND grg.Id=eb.Id AND grg.Folio=eb.Folio AND ge.PkEstadoEncuesta>3 AND grg.Estado_Pago IS NULL)AS V WHERE V.Encuestador='" + drop_enc.Text + "'GROUP BY V.TipoValor, V.Encuestador,V.PkSistema)AS V1 GROUP BY V1.Encuestador	) AS A WHERE grg.PkSistema=gu.PkSistema AND grg.Encuestador=gu.PkUsuario AND A.Encuestador=grg.Encuestador AND grg.Estado_Pago IS NULL AND grg.Encuestador='" + drop_enc.Text + "'"
        ElseIf drop_sis.SelectedValue = 3 Then
            If drop_numinf.SelectedValue = 0 Then
                MensajeBox("Debe seleccionar periodo de remesa", True)
                Exit Sub
            Else
                CONSULTAENC = "SELECT BD.numeroinf, BD.Region, UPPER(BD.nombre) AS nombre,BD.rut, BD.dv_rut, CASE WHEN BD.numeroinf=1 THEN '7-oct-2014'WHEN BD.numeroinf=2 THEN '1-nov-2014'WHEN BD.numeroinf=3 THEN '1-dic-2014' END AS PeriodoDEL, CASE WHEN BD.numeroinf=1 THEN '31-oct-2014'WHEN BD.numeroinf=2 THEN '30-nov-2014'WHEN BD.numeroinf=3 THEN '12-dic-2014' END AS PeriodoAL,replace(convert(NVARCHAR, getdate(), 106), ' ', '/') AS Fechainf,'LEVANTAMIENTO ENCUESTA DE SUPERFICIE CULTIVOS ANUALES Y HORTALIZAS 2014/2015' AS M1,('EL SUPERVISOR ' + UPPER(BD.nombre) + ' HA REALIZADO LA SUPERVISIÓN DE LAS ENCUESTAS DE LA REGIÓN '+ BD.Region+ ' POR UN MONTO TOTAL DE '+ BD.Monto +' (INCLUYE SEGURO 3.667).') AS E1,'' AS E2 FROM(SELECT  1 AS numeroinf,	'IV' AS Region,	'Pedro Caceres Lillo' AS nombre,	'9143970' AS rut, '0' AS dv_rut,	'747.267' AS Monto	UNION	SELECT  2 AS numeroinf,	'IV' AS Region,	'Pedro Caceres Lillo' AS nombre,	'9143970' AS rut, '0' AS dv_rut,	'1.103.667'	UNION		SELECT  3 AS numeroinf,	'IV' AS Region,	'Pedro Caceres Lillo' AS nombre,	'9143970' AS rut, '0' AS dv_rut,		'360.067'		UNION		SELECT  1 AS numeroinf,	'V' AS Region,	'Carolina Duco Ibañez' AS nombre,	'7140891' AS rut, '4' AS dv_rut,	'747.267' AS Monto		UNION		SELECT  2 AS numeroinf,	'V' AS Region,	'Carolina Duco Ibañez' AS nombre,	'7140891' AS rut, '4' AS dv_rut,	'1.103.667'	UNION	SELECT  3 AS numeroinf,	'V' AS Region,	'Carolina Duco Ibañez' AS nombre,	'7140891' AS rut, '4' AS dv_rut,		'360.067'	UNION	SELECT  1 AS numeroinf,	'VI' AS Region,	'María Valeska Flores' AS nombre,	'12780202' AS rut, '5' AS dv_rut,	'747.267' AS Monto	UNION	SELECT  2 AS numeroinf,	'VI' AS Region,	'María Valeska Flores' AS nombre,	'12780202' AS rut, '5' AS dv_rut,	'1.103.667'	UNION	SELECT  3 AS numeroinf,	'VI' AS Region,	'María Valeska Flores' AS nombre,	'12780202' AS rut, '5' AS dv_rut,		'360.067'	UNION	SELECT  1 AS numeroinf,	'X y XIV' AS Region,	'Roberto Paut' AS nombre,	'5102757' AS rut, '4' AS dv_rut,	'747.267' AS Monto	UNION	SELECT  2 AS numeroinf,	'X y XIV' AS Region,	'Roberto Paut' AS nombre,	'5102757' AS rut, '4' AS dv_rut,	'1.103.667'	UNION	SELECT  3 AS numeroinf,	'X y XIV' AS Region,	'Roberto Paut' AS nombre,	'5102757' AS rut, '4' AS dv_rut,		'360.067' UNION	SELECT  1 AS numeroinf,	'VII' AS Region,	'Leonardo Maureira' AS nombre,	'11566871' AS rut, '4' AS dv_rut,	'1.017.181' AS Monto UNION	SELECT  2 AS numeroinf,	'VII' AS Region,	'Leonardo Maureira' AS nombre,	'11566871' AS rut, '4' AS dv_rut,	'1.503.667'	UNION	SELECT  3 AS numeroinf,	'VII' AS Region,	'Leonardo Maureira' AS nombre,	'11566871' AS rut, '4' AS dv_rut,		'490.153' UNION	SELECT  1 AS numeroinf,	'VIII' AS Region,	'Rodrigo Navarrete' AS nombre,	'12584735' AS rut, '8' AS dv_rut,	'1.017.181' AS Monto UNION	SELECT  2 AS numeroinf,	'VIII' AS Region,	'Rodrigo Navarrete' AS nombre,	'12584735' AS rut, '8' AS dv_rut,	'1.503.667'	UNION	SELECT  3 AS numeroinf,	'VIII' AS Region,	'Rodrigo Navarrete' AS nombre,	'12584735' AS rut, '8' AS dv_rut,	'490.153'	UNION	SELECT  1 AS numeroinf,	'IX' AS Region,	'Yasna Saez Pantanalli' AS nombre,	'9737732' AS rut, '4' AS dv_rut,	'1.017.181' AS Monto UNION	SELECT  2 AS numeroinf,	'IX' AS Region,	'Yasna Saez Pantanalli' AS nombre,	'9737732' AS rut, '4' AS dv_rut,	'1.503.667'	UNION	SELECT  3 AS numeroinf,	'IX' AS Region,	'Yasna Saez Pantanalli' AS nombre,	'9737732' AS rut, '4' AS dv_rut,		'490.153') AS BD WHERE BD.numeroinf=" + drop_numinf.SelectedValue + " AND BD.nombre='" + drop_enc.Text + "'"
            End If
        End If

        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)
        Dim Motivo As String
        Dim E1 As String
        Dim E2 As String

        If drop_sis.SelectedValue = 2 And drop_enc.SelectedValue <> "Seleccione un encuestador" Then
            txt_nombre.Text = exeNUMMAX.Rows(0)(0).ToString
            'Tables(0).Columns(1).ColumnName.ToString()

            txt_fecha_inf.Text = exeNUMMAX.Rows(0)(1).ToString
            txt_fecha1.Text = exeNUMMAX.Rows(0)(2).ToString
            txt_fecha2.Text = exeNUMMAX.Rows(0)(3).ToString
            txt_region.Text = exeNUMMAX.Rows(0)(4).ToString
            Motivo = exeNUMMAX.Rows(0)(5).ToString
            E1 = exeNUMMAX.Rows(0)(6).ToString
            E2 = exeNUMMAX.Rows(0)(7).ToString

        ElseIf drop_sis.SelectedValue = 1 And drop_enc.SelectedValue <> "Seleccione un Digitador" Then 'And drop_numinf.SelectedValue <> 0 
            ' txt_numero_inf.Text = exeNUMMAX.Rows(0)(0).ToString
            txt_region.Text = exeNUMMAX.Rows(0)(1).ToString
            txt_nombre.Text = exeNUMMAX.Rows(0)(2).ToString
            txt_rut.Text = exeNUMMAX.Rows(0)(3).ToString
            txt_dvrut.Text = exeNUMMAX.Rows(0)(4).ToString
            txt_fecha1.Text = exeNUMMAX.Rows(0)(5).ToString
            txt_fecha2.Text = exeNUMMAX.Rows(0)(6).ToString
            txt_fecha_inf.Text = exeNUMMAX.Rows(0)(7).ToString
            Motivo = exeNUMMAX.Rows(0)(8).ToString
            E1 = exeNUMMAX.Rows(0)(9).ToString
            E2 = ""
        Else
            limpia(Panel1)
            Exit Sub
        End If

        'drop_enc.Text

        Dim Etodo As String = ""
        Dim Etodo1 As String = ""
        Dim Etodo2 As String = ""
        Dim Etodo3 As String = ""
        Dim Etodo4 As String = ""
        Dim Etodo5 As String = ""
        Dim Etodo6 As String = ""
        Dim Etodo7 As String = ""
        Dim Etodo8 As String = ""
        Dim Etodo9 As String = ""
        Dim Etodo10 As String = ""
        Dim Etodo11 As String = ""


        Dim aux As String = ""
        Dim aux2 As String = ""

        Dim c1 As Integer
        Dim c2 As Integer

        If Len(Motivo) < 81 Then
            txt_cont1.Text = Motivo
        Else
            txt_cont1.Text = Mid(Motivo, 1, 80)
            If Len(Motivo) < 161 Then
                txt_cont2.Text = Mid(Motivo, 81, 160)
            Else
                txt_cont2.Text = Mid(Motivo, 81, 160)
                'If Len(Motivo) < 241 Then
                '    txt_cont3.Text = Mid(Motivo, 161, 240)
                'Else
                '    txt_cont3.Text = Mid(Motivo, 161, 240)                  
                'End If
            End If

        End If

        Dim a2 As String = 1
        Dim a3 As String = 2
        ' Aquí genero en linea los ids para unir el string
        Dim CONSULTAENC1 As String = "SELECT  grg1.Id AS IDS FROM Ges_Encuesta ge1, Ges_RecepcionGt grg1	WHERE ge1.PkSistema=grg1.PkSistema AND ge1.Id=grg1.Id AND ge1.Folio=grg1.Folio AND grg1.Estado_Pago IS null AND grg1.PkSistema=" + a2 + " AND ge1.PkEstadoEncuesta>3  AND grg1.Encuestador='" + drop_enc.Text + "'"
        'drop_enc.Text

        Dim NUMMAXPES1 As New SqlCommand(CONSULTAENC1, CN)
        Dim preexeNUMMAX1 As New SqlDataAdapter(NUMMAXPES1)
        Dim exeNUMMAX1 As New DataTable()
        preexeNUMMAX1.Fill(exeNUMMAX1)

        Dim CONSULTAENC2 As String = "SELECT  grg1.Id AS IDS FROM Ges_Encuesta ge1, Ges_RecepcionGt grg1	WHERE ge1.PkSistema=grg1.PkSistema AND ge1.Id=grg1.Id AND ge1.Folio=grg1.Folio AND grg1.Estado_Pago IS null AND grg1.PkSistema=" + a3 + " AND ge1.PkEstadoEncuesta>3  AND grg1.Encuestador='" + drop_enc.Text + "'"
        'drop_enc.Text

        Dim NUMMAXPES2 As New SqlCommand(CONSULTAENC2, CN)
        Dim preexeNUMMAX2 As New SqlDataAdapter(NUMMAXPES2)
        Dim exeNUMMAX2 As New DataTable()
        preexeNUMMAX2.Fill(exeNUMMAX2)
        Dim n1 As Integer = 0
        Dim n2 As Integer = 0
        Dim n3 As String
        Dim n4 As String
        ' c1 = Len(E1)
        Dim max As Integer
        c1 = 0
        While c1 < exeNUMMAX1.Rows.Count
            If c1 <> exeNUMMAX1.Rows.Count - 1 Then
                aux = aux + exeNUMMAX1.Rows(c1)(0).ToString + ", "
            Else
                aux = aux + exeNUMMAX1.Rows(c1)(0).ToString
            End If
            c1 = c1 + 1
            n1 = n1 + 1
        End While
        c1 = 0
        While c1 < exeNUMMAX2.Rows.Count
            If c1 <> exeNUMMAX2.Rows.Count - 1 Then
                aux2 = aux2 + exeNUMMAX2.Rows(c1)(0).ToString + ", "
            Else
                aux2 = aux2 + exeNUMMAX2.Rows(c1)(0).ToString
            End If
            c1 = c1 + 1
            n2 = n2 + 1
        End While
        n3 = n1
        n4 = n2
        Dim l1 As Integer
        Dim l2 As Integer

        If drop_sis.SelectedValue = 2 Then
            If aux = "" Then
                Etodo = E1 + "DE OVINOS(" + aux2 + ") " + E2
            ElseIf aux2 = "" Then
                Etodo = E1 + "DE BOVINOS(" + aux + ") " + E2
            Else
                Etodo = E1 + ": " + n3 + " DE BOVINOS(" + aux + ") Y " + n4 + " DE OVINOS (" + aux2 + ") " + E2
                l1 = Len(E1 + ": " + n3 + " DE BOVINOS(" + aux + ") Y ") + n4
                l2 = Len(E1 + ": " + n3 + " DE BOVINOS(" + aux + ") Y " + n4 + " DE OVINOS (" + aux2 + ") " + E2)
            End If
        Else
            Etodo = E1
        End If

        '   Etodo = E1 + "(" + aux + ") " + E2

        c1 = Len(Etodo)
        'c2 = 130
        c2 = 90 'real
        While Right(Mid(Etodo, 1, c2), 1) <> " "
            c2 = c2 - 1
        End While
        txt_cum_1.Text = Mid(Etodo, 1, c2)
        Etodo1 = Mid(Etodo, c2, Len(Etodo))
        l1 = l1 - (l1 - Len(Etodo1))
        l2 = l2 - (l2 - Len(Etodo1))
        c1 = Len(Etodo1)
        'c2 = 130
        c2 = 110 'real
        If l1 < c2 Then
            c2 = 100
        ElseIf l2 < c2 Then
            c2 = 100
        End If
        If c1 > c2 Then

            While Right(Mid(Etodo1, 1, c2), 1) <> " "
                c2 = c2 - 1
            End While
            txt_cum_2.Text = Mid(Etodo1, 2, c2 - 1)
            max = Len(Etodo1)
            Etodo2 = Mid(Etodo1, c2, max)
            l1 = l1 - (l1 - Len(Etodo2))
            l2 = l2 - (l2 - Len(Etodo2))
            c1 = Len(Etodo2)
            c2 = 125
            If l1 < c2 Then
                c2 = 130
            ElseIf l2 < c2 Then
                c2 = 125
            End If
            If c1 > c2 Then
                While Right(Mid(Etodo2, 1, c2), 1) <> " "
                    c2 = c2 - 1
                End While
                txt_cum_3.Text = Mid(Etodo2, 2, c2 - 1)
                max = Len(Etodo2)
                Etodo3 = Mid(Etodo2, c2, max)
                l1 = l1 - (l1 - Len(Etodo3))
                l2 = l2 - (l2 - Len(Etodo3))
                c1 = Len(Etodo3)
                c2 = 125
                If l1 < c2 Then
                    c2 = 130
                ElseIf l2 < c2 Then
                    c2 = 125
                End If
                If c1 > c2 Then
                    While Right(Mid(Etodo3, 1, c2), 1) <> " "
                        c2 = c2 - 1
                    End While
                    txt_cum_4.Text = Mid(Etodo3, 2, c2 - 1)
                    max = Len(Etodo3)
                    Etodo4 = Mid(Etodo3, c2, max)
                    l1 = l1 - (l1 - Len(Etodo4))
                    l2 = l2 - (l2 - Len(Etodo4))
                    c1 = Len(Etodo4)
                    c2 = 125
                    If l1 < c2 Then
                        c2 = 130
                    ElseIf l2 < c2 Then
                        c2 = 125
                    End If
                    If c1 > c2 Then
                        While Right(Mid(Etodo4, 1, c2), 1) <> " "
                            c2 = c2 - 1
                        End While
                        txt_cum_5.Text = Mid(Etodo4, 2, c2 - 1)
                        max = Len(Etodo4)
                        Etodo5 = Mid(Etodo4, c2, max)
                        l1 = l1 - (l1 - Len(Etodo5))
                        l2 = l2 - (l2 - Len(Etodo5))
                        c1 = Len(Etodo5)
                        c2 = 125
                        If l1 < c2 Then
                            c2 = 130
                        ElseIf l2 < c2 Then
                            c2 = 125
                        End If
                        If c1 > c2 Then
                            While Right(Mid(Etodo5, 1, c2), 1) <> " "
                                c2 = c2 - 1
                            End While
                            txt_cum_6.Text = Mid(Etodo5, 2, c2 - 1)
                            max = Len(Etodo5)
                            Etodo6 = Mid(Etodo5, c2, max)
                            l1 = l1 - (l1 - Len(Etodo6))
                            l2 = l2 - (l2 - Len(Etodo6))
                            c1 = Len(Etodo6)
                            c2 = 125
                            If l1 < c2 Then
                                c2 = 130
                            ElseIf l2 < c2 Then
                                c2 = 125
                            End If
                            If c1 > c2 Then
                                While Right(Mid(Etodo6, 1, c2), 1) <> " "
                                    c2 = c2 - 1
                                End While
                                txt_cum_7.Text = Mid(Etodo6, 2, c2 - 1)
                                max = Len(Etodo6)
                                Etodo7 = Mid(Etodo6, c2, max)
                                l1 = l1 - (l1 - Len(Etodo7))
                                l2 = l2 - (l2 - Len(Etodo7))
                                c1 = Len(Etodo7)
                                c2 = 125
                                If l1 < c2 Then
                                    c2 = 130
                                ElseIf l2 < c2 Then
                                    c2 = 125
                                End If
                                If c1 > c2 Then
                                    While Right(Mid(Etodo7, 1, c2), 1) <> " "
                                        c2 = c2 - 1
                                    End While
                                    txt_cum_8.Text = Mid(Etodo7, 2, c2 - 1)
                                    max = Len(Etodo7)
                                    Etodo8 = Mid(Etodo7, c2, max)
                                    l1 = l1 - (l1 - Len(Etodo8))
                                    l2 = l2 - (l2 - Len(Etodo8))
                                    c1 = Len(Etodo8)
                                    c2 = 125
                                    If l1 < c2 Then
                                        c2 = 130
                                    ElseIf l2 < c2 Then
                                        c2 = 125
                                    End If
                                    If c1 > c2 Then
                                        While Right(Mid(Etodo8, 1, c2), 1) <> " "
                                            c2 = c2 - 1
                                        End While
                                        txt_cum_9.Text = Mid(Etodo8, 2, c2 - 1)
                                        max = Len(Etodo8)
                                        Etodo9 = Mid(Etodo8, c2, max)
                                        l1 = l1 - (l1 - Len(Etodo9))
                                        l2 = l2 - (l2 - Len(Etodo9))
                                        c1 = Len(Etodo9)
                                        c2 = 130
                                        If c1 > c2 Then
                                            While Right(Mid(Etodo9, 1, c2), 1) <> " "
                                                c2 = c2 - 1
                                            End While
                                            txt_cum_10.Text = Mid(Etodo9, 2, c2 - 1)
                                            max = Len(Etodo9)
                                            Etodo10 = Mid(Etodo9, c2, max)
                                            l1 = l1 - (l1 - Len(Etodo10))
                                            l2 = l2 - (l2 - Len(Etodo10))
                                            c1 = Len(Etodo10)
                                            c2 = 130
                                            If c1 > c2 Then
                                                While Right(Mid(Etodo10, 1, c2), 1) <> " "
                                                    c2 = c2 - 1
                                                End While
                                                txt_cum_11.Text = Mid(Etodo10, 2, c2 - 1)
                                                max = Len(Etodo10)
                                                Etodo11 = Mid(Etodo10, c2, max)
                                                l1 = l1 - (l1 - Len(Etodo11))
                                                l2 = l2 - (l2 - Len(Etodo11))
                                                c1 = Len(Etodo11)
                                                c2 = 130
                                                If c1 > c2 Then
                                                    While Right(Mid(Etodo11, 1, c2), 1) <> " "
                                                        c2 = c2 - 1
                                                    End While
                                                    txt_cum_12.Text = Mid(Etodo11, 2, c2 - 1)
                                                Else
                                                    txt_cum_12.Text = Mid(Etodo11, 2, Len(Etodo11))
                                                End If
                                            Else
                                                txt_cum_11.Text = Mid(Etodo10, 2, Len(Etodo10))
                                            End If
                                        Else
                                            txt_cum_10.Text = Mid(Etodo9, 2, Len(Etodo9))
                                        End If
                                    Else
                                        txt_cum_9.Text = Mid(Etodo8, 2, Len(Etodo8))
                                    End If
                                Else
                                    txt_cum_8.Text = Mid(Etodo7, 2, Len(Etodo7))
                                End If
                            Else
                                txt_cum_7.Text = Mid(Etodo6, 2, Len(Etodo6))
                            End If
                        Else
                            txt_cum_6.Text = Mid(Etodo5, 2, Len(Etodo5))
                        End If
                    Else
                        txt_cum_5.Text = Mid(Etodo4, 2, Len(Etodo4))
                    End If
                Else
                    txt_cum_4.Text = Mid(Etodo3, 2, Len(Etodo3))
                End If
            Else
                txt_cum_3.Text = Mid(Etodo2, 2, Len(Etodo2))
            End If
        Else
            txt_cum_2.Text = Mid(Etodo1, 2, Len(Etodo1))
        End If

        Dim CONSULTAENC4 As String = "SELECT distinct UPPER(CASE WHEN eb.P1_2='Aisén' THEN 'Aysén' ELSE eb.P1_2 END ) AS ID	FROM Ges_Encuesta ge1, Ges_RecepcionGt grg1,ENC_Bovinos eb	WHERE ge1.PkSistema=grg1.PkSistema AND ge1.Id=grg1.Id AND ge1.Folio=grg1.Folio AND grg1.Estado_Pago IS null  AND ge1.PkEstadoEncuesta>3 AND ge1.PkSistema=eb.PkSistema AND ge1.Id=eb.Id AND ge1.Folio=eb.Folio  AND grg1.Encuestador='" + drop_enc.Text + "'"
        'drop_enc.Text

        Dim NUMMAXPES4 As New SqlCommand(CONSULTAENC4, CN)
        Dim preexeNUMMAX4 As New SqlDataAdapter(NUMMAXPES4)
        Dim exeNUMMAX4 As New DataTable()
        preexeNUMMAX4.Fill(exeNUMMAX4)

        ' c1 = Len(E1)
        Dim c3 As Integer
        c3 = 0
        aux = ""        
        While c3 < exeNUMMAX4.Rows.Count
            If c3 <> exeNUMMAX4.Rows.Count - 1 Then
                aux = aux + exeNUMMAX4.Rows(c3)(0).ToString + ", "
            Else
                aux = aux + exeNUMMAX4.Rows(c3)(0).ToString
            End If
            c3 = c3 + 1
        End While

        txt_provincia.Text = aux.ToString
        'drop_sis.DataSource = exeNUMMAX
        'drop_sis.DataValueField = exeNUMMAX.Columns(0).ToString
        'drop_sis.DataTextField = exeNUMMAX.Columns(1).ToString
        'drop_sis.DataBind()
        '  txt_nombre.Focus()
        CN.Close()
    End Sub
    Protected Sub btn_pago_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_pago.Click
        Try
            CN.Open()
            Dim CONSULTAENC2 As String = "SELECT  grg1.Id AS IDS FROM Ges_Encuesta ge1, Ges_RecepcionGt grg1	WHERE ge1.PkSistema=grg1.PkSistema AND ge1.Id=grg1.Id AND ge1.Folio=grg1.Folio AND grg1.Estado_Pago IS null  AND ge1.PkEstadoEncuesta>3  AND grg1.Encuestador='" + drop_enc.Text + "'"
            'drop_enc.Text
            Dim c1 As Integer
            Dim aux As String
            Dim NUMMAXPES2 As New SqlCommand(CONSULTAENC2, CN)
            Dim preexeNUMMAX2 As New SqlDataAdapter(NUMMAXPES2)
            Dim exeNUMMAX2 As New DataTable()
            preexeNUMMAX2.Fill(exeNUMMAX2)

            ' c1 = Len(E1)

            c1 = 0
            While c1 < exeNUMMAX2.Rows.Count
                If c1 <> exeNUMMAX2.Rows.Count - 1 Then
                    aux = aux + exeNUMMAX2.Rows(c1)(0).ToString + ", "
                Else
                    aux = aux + exeNUMMAX2.Rows(c1)(0).ToString
                End If
                c1 = c1 + 1
            End While

            ' Aquí genero en linea los ids para unir el string
            Dim CONSULTAENC1 As String = "UPDATE Ges_RecepcionGt SET Estado_Pago = 1,Fecha_Pago = GETDATE(),Usuario_Pago = 'Dominique' WHERE Encuestador='" + drop_enc.Text + "' AND Id in(" + aux + ") "
            'drop_enc.Text
            Dim NUMMAXPES1 As New SqlCommand(CONSULTAENC1, CN)
            Dim preexeNUMMAX1 As New SqlDataAdapter(NUMMAXPES1)
            Dim exeNUMMAX1 As New DataTable()
            preexeNUMMAX1.Fill(exeNUMMAX1)


            CN.Close()
            MensajeBox("Las encuestas han sido procesadas en sistema", True)
        Catch ex As Exception
            MensajeBox("Error en pago de encuestas ", True)
        End Try
        obtener_encuestador()
        limpia(Panel1)
    End Sub
    Sub limpia(ByVal panel As Panel)
        Dim x As String
        Dim ElControl As New Control
        Dim c As TextBox
        For Each ElControl In panel.Controls
            x = ElControl.ID
            If (TypeOf ElControl Is TextBox) Then
                c = ElControl
                c.Text = ""
            End If
        Next
    End Sub

    Protected Sub drop_enc_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_enc.SelectedIndexChanged
        limpia(Panel1)
        traer()
    End Sub

    Protected Sub drop_numinf_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_numinf.SelectedIndexChanged
        If drop_numinf.SelectedValue <> 0 Then
            drop_enc.Visible = True
            obtener_encuestador()
        Else

            drop_enc.Visible = False
            limpia(Panel1)
        End If
    End Sub

    Protected Sub btn_hortaliza_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_hortaliza.Click
        Try
            'Recepcionar PDA's Autmático.
            CN.Open()
            Dim CONSULTAENC2 As String = "DECLARE @id INT, @cont INT; SET @cont=0 DECLARE id_hortaliza CURSOR FOR SELECT ge.Id FROM Ges_Encuesta ge WHERE ge.PkSistema=2 AND ge.PkEstadoEncuesta=4 AND ge.PkEstadoSeleccion=1 OPEN id_hortaliza FETCH NEXT FROM id_hortaliza INTO @id  WHILE @@FETCH_STATUS = 0 BEGIN 	IF (	SELECT count(*) 	FROM Ges_RecepcionGt grg 	WHERE grg.PkSistema=2 AND grg.Id=@id) <> 1 	BEGIN 	INSERT INTO Ges_RecepcionGt 	( 		PkSistema,		Id, 		Folio,		Dv_Folio,		Region,		Encuestador,		Rec_Stgo,		Fecha_Rec,		Medio_Verif,		Usuario_Rec	)	SELECT		ge.PkSistema,		ge.Id,		ge.Folio,		de.Dv_Folio,		de.Region,			gct.Encuestador,		1,		GETDATE(),		'PDA',		'STdpincheira'	FROM		Ges_Encuesta ge,Ges_CargaTrabajo gct,Ges_Usuario gu,DIR_Empresa de	WHERE ge.PkSistema=2 AND ge.PkEstadoEncuesta=5	AND ge.PkSistema=gct.PkSistema AND ge.Id=gct.Id AND ge.Folio=gct.Folio	AND gu.PkSistema=ge.PkSistema AND gu.PkUsuario=gct.Encuestador	AND de.PkSistema=ge.PkSistema AND de.Id=ge.Id AND ge.Folio=de.Folio	AND ge.Id=@id		END				FETCH NEXT FROM id_hortaliza     INTO @id END CLOSE id_hortaliza; DEALLOCATE id_hortaliza;"
            Dim NUMMAXPES2 As New SqlCommand(CONSULTAENC2, CN)
            Dim preexeNUMMAX2 As New SqlDataAdapter(NUMMAXPES2)
            Dim exeNUMMAX2 As New DataTable()
            preexeNUMMAX2.Fill(exeNUMMAX2)

            CN.Close()
            MensajeBox("Las encuestas de Hortalizas se han recepcionado", True)
        Catch ex As Exception
            MensajeBox("Error en recepcionar encuestas de hortalizas ", True)
        End Try
    End Sub

    Protected Sub btn_mostrar_habilitar_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_mostrar_habilitar.Click

        drop_enc_h.Visible = True        
        obtener_encuestador2()
    End Sub
    Sub obtener_encuestador2()

        CN.Open()
        Dim a As String
        a = drop_sis.SelectedIndex

        Dim CONSULTAENC As String
        CONSULTAENC = "SELECT 0 AS Cod,'Seleccione un encuestador' UNION SELECT distinct  RANK()OVER(ORDER BY grg.Encuestador) AS Cod,grg.Encuestador FROM Ges_RecepcionGt grg,Ges_Encuesta ge WHERE ge.PkSistema=grg.PkSistema AND ge.Id=grg.Id AND grg.Folio=ge.Folio AND grg.Estado_Pago=1 AND ge.PkEstadoEncuesta>3 GROUP BY grg.Encuestador ORDER BY Cod"

        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)

        drop_enc_h.DataSource = exeNUMMAX
        drop_enc_h.DataValueField = exeNUMMAX.Columns(1).ToString
        drop_enc_h.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_enc_h.DataBind()
        '  txt_nombre.Focus()
        CN.Close()
    End Sub
    Sub obtener_fecha()

        CN.Open()
        Dim a As String
        a = drop_sis.SelectedIndex

        Dim CONSULTAENC As String
        CONSULTAENC = "SELECT 	RANK()OVER(ORDER BY A.Fecha DESC) AS Cod,A.Fecha	FROM(SELECT 0 AS Cod,'Seleccione una fecha' AS Fecha UNION	SELECT distinct  1 AS Cod, CONVERT(varchar(100),grg.Fecha_Pago,109) FROM Ges_RecepcionGt grg 	where grg.Estado_Pago=1 AND grg.Encuestador='" + drop_enc_h.Text + "')AS A"

        Dim NUMMAXPES As New SqlCommand(CONSULTAENC, CN)
        Dim preexeNUMMAX As New SqlDataAdapter(NUMMAXPES)
        Dim exeNUMMAX As New DataTable()
        preexeNUMMAX.Fill(exeNUMMAX)

        drop_fecha.DataSource = exeNUMMAX
        drop_fecha.DataValueField = exeNUMMAX.Columns(1).ToString
        drop_fecha.DataTextField = exeNUMMAX.Columns(1).ToString
        drop_fecha.DataBind()
        '  txt_nombre.Focus()
        CN.Close()
    End Sub
    Protected Sub drop_enc_h_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_enc_h.SelectedIndexChanged
        If drop_enc.SelectedValue = "0" Then
            drop_fecha.Visible = False
        Else
            drop_fecha.Visible = True
            obtener_fecha()
        End If
    End Sub

    Protected Sub drop_fecha_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles drop_fecha.SelectedIndexChanged
        If drop_fecha.SelectedValue <> "1" Then
            btn_Habilitar.Visible = True
        Else
            btn_Habilitar.Visible = False
        End If
    End Sub

    Protected Sub btn_Habilitar_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_Habilitar.Click
        Try
            CN.Open()
            ' Aquí genero en linea los ids para unir el string
            Dim CONSULTAENC1 As String = "UPDATE Ges_RecepcionGt SET Estado_Pago = NULL,Fecha_Pago = NULL,Usuario_Pago = NULL WHERE Encuestador='" + drop_enc_h.Text + "' AND Fecha_Pago=CONVERT(DATETIME,'" + drop_fecha.Text + "')"
            'drop_enc.Text
            Dim NUMMAXPES1 As New SqlCommand(CONSULTAENC1, CN)
            Dim preexeNUMMAX1 As New SqlDataAdapter(NUMMAXPES1)
            Dim exeNUMMAX1 As New DataTable()
            preexeNUMMAX1.Fill(exeNUMMAX1)


            CN.Close()
            MensajeBox("Las encuestas han sido habilitadas", True)
        Catch ex As Exception
            MensajeBox("Error en habilitar encuestas ", True)
        End Try
        obtener_encuestador()
        obtener_encuestador2()
        drop_fecha.Visible = False
    End Sub
End Class
