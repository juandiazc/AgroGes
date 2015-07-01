<%@ Page Language="VB" AutoEventWireup="false" CodeFile="frmDirectorio.aspx.vb" Inherits="Modulo_Ingreso_de_Datos_frmDirectorio" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Directorio</title>
    <link href="../Recursos/Css/EstilosGenericos.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:ScriptManager ID="ScriptManager1" runat="server">
        </asp:ScriptManager>
    
    </div>
    <script language="javascript" src="../Recursos/js/funciones_java.js" type="text/javascript">
</script>
        <asp:UpdatePanel ID="UpdatePanel1" runat="server"><ContentTemplate>
&nbsp; <BR /><asp:Panel id="pnl_mantenedor" runat="server" Width="90%" HorizontalAlign="Center" Height="693px" GroupingText="Mantenedor Directorio" Font-Size="Larger" Font-Bold="True" CssClass="tiny" BorderStyle="None"><H3 style="TEXT-ALIGN: center"><BR /><asp:Panel id="pnl_empresa" runat="server" GroupingText="Datos de identificación de la Empresa"><BR /><BR /><TABLE style="WIDTH: 952px" id="TABLE1" language="javascript" onclick="return TABLE1_onclick()"><TBODY><TR><TD style="WIDTH: 123px; HEIGHT: 8px; TEXT-ALIGN: left" class="tiny">Rol : </TD><TD style="WIDTH: 297px; HEIGHT: 8px; TEXT-ALIGN: left"><asp:TextBox style="TEXT-ALIGN: right" id="txt_rol" tabIndex=1 runat="server" Width="144px" MaxLength="20"></asp:TextBox> <asp:TextBox id="txt_dvrol" tabIndex=2 runat="server" Width="51px" MaxLength="1"></asp:TextBox> <asp:Button id="btn_trae_est" tabIndex=100 onclick="btn_trae_est_Click" runat="server" Width="69px" CssClass="Boton" Text="Trae Estab."></asp:Button> </TD><TD style="WIDTH: 122px; HEIGHT: 8px" class="tiny2">Rut Empresa: </TD><TD style="WIDTH: 284px; HEIGHT: 8px; TEXT-ALIGN: left"><asp:TextBox style="TEXT-ALIGN: right" id="txt_rut_empresa" tabIndex=3 runat="server" Width="144px" MaxLength="20"></asp:TextBox> <asp:TextBox id="txt_dv_empresa" tabIndex=4 runat="server" Width="51px" MaxLength="1"></asp:TextBox> <asp:Button id="btn_trae_emp" tabIndex=101 onclick="btn_trae_emp_Click" runat="server" Width="69px" CssClass="Boton" Text="Trae Emp."></asp:Button> </TD></TR><TR><TD style="WIDTH: 123px; HEIGHT: 4px; TEXT-ALIGN: left" class="tiny">Razón Social:</TD><TD style="WIDTH: 297px; HEIGHT: 4px; TEXT-ALIGN: left"><asp:TextBox id="txt_razon_social" tabIndex=5 runat="server" Width="288px" MaxLength="100"></asp:TextBox> </TD><TD style="WIDTH: 122px; HEIGHT: 4px" class="tiny2">Nombre Comercial:</TD><TD style="WIDTH: 284px; HEIGHT: 4px; TEXT-ALIGN: left"><asp:TextBox id="txt_nombre" tabIndex=6 runat="server" Width="288px" MaxLength="100"></asp:TextBox></TD></TR><TR><TD style="WIDTH: 123px; HEIGHT: 6px; TEXT-ALIGN: left" class="tiny">Rut Representante:</TD><TD style="WIDTH: 297px; HEIGHT: 6px; TEXT-ALIGN: left"><asp:TextBox style="TEXT-ALIGN: right" id="txt_rut_representante" tabIndex=7 runat="server" Width="144px" MaxLength="20"></asp:TextBox> <asp:TextBox id="txt_dv_representante" tabIndex=8 runat="server" Width="51px"></asp:TextBox> <asp:RequiredFieldValidator id="rfv_representante" runat="server" ValidationGroup="validacion" ErrorMessage="Debe Ingresar un Rut del Representante" Display="Dynamic" ControlToValidate="txt_rut_representante">*</asp:RequiredFieldValidator></TD><TD style="WIDTH: 122px; HEIGHT: 6px" class="tiny2">Fono Celular:</TD><TD style="WIDTH: 284px; HEIGHT: 6px; TEXT-ALIGN: left"><asp:TextBox id="txt_celular" tabIndex=9 runat="server" Width="288px" MaxLength="50"></asp:TextBox></TD></TR><TR><TD style="WIDTH: 123px; HEIGHT: 3px; TEXT-ALIGN: left" class="tiny">Representante Legal:</TD><TD style="WIDTH: 297px; HEIGHT: 3px; TEXT-ALIGN: left"><asp:TextBox id="txt_representante" tabIndex=10 runat="server" Width="288px" MaxLength="100"></asp:TextBox> <asp:RequiredFieldValidator id="RequiredFieldValidator2" runat="server" Height="14px" ValidationGroup="validacion" ErrorMessage="Debe Ingresar un  Representante Legal" Display="Dynamic" ControlToValidate="txt_representante">*</asp:RequiredFieldValidator></TD><TD style="WIDTH: 122px; HEIGHT: 3px; TEXT-ALIGN: left" class="tiny">Dirección:</TD><TD style="WIDTH: 284px; HEIGHT: 3px; TEXT-ALIGN: left"><asp:TextBox id="txt_direccion" tabIndex=11 runat="server" Width="288px" MaxLength="255"></asp:TextBox> <asp:RequiredFieldValidator id="RequiredFieldValidator6" runat="server" Width="1px" ValidationGroup="validacion" ErrorMessage="Debe Ingresar una Diección de la Empresa" Display="Dynamic" ControlToValidate="txt_nombre_est">*</asp:RequiredFieldValidator></TD></TR><TR><TD style="WIDTH: 123px; HEIGHT: 10px; TEXT-ALIGN: left" class="tiny">Región:</TD><TD style="WIDTH: 297px; HEIGHT: 10px; TEXT-ALIGN: left"><asp:DropDownList id="drop_region" tabIndex=12 runat="server" Width="294px" CssClass="tiny" OnSelectedIndexChanged="drop_region_SelectedIndexChanged" AutoPostBack="True">
                                            </asp:DropDownList></TD><TD style="WIDTH: 122px; HEIGHT: 10px; TEXT-ALIGN: left" class="tiny">Provincia:</TD><TD style="WIDTH: 284px; HEIGHT: 10px; TEXT-ALIGN: left"><asp:DropDownList id="drop_provincia" tabIndex=13 runat="server" Width="294px" CssClass="tiny" OnSelectedIndexChanged="drop_provincia_SelectedIndexChanged" AutoPostBack="True">
                                            </asp:DropDownList></TD></TR><TR><TD style="WIDTH: 123px; HEIGHT: 10px; TEXT-ALIGN: left" class="tiny">Comuna:</TD><TD style="WIDTH: 297px; HEIGHT: 10px; TEXT-ALIGN: left"><asp:DropDownList id="drop_comuna" tabIndex=14 runat="server" Width="294px" CssClass="tiny">
                                            </asp:DropDownList></TD><TD style="WIDTH: 122px; HEIGHT: 10px; TEXT-ALIGN: left" class="tiny">Ciudad:</TD><TD style="WIDTH: 284px; HEIGHT: 10px; TEXT-ALIGN: left"><asp:TextBox id="txt_ciudad" tabIndex=15 runat="server" Width="288px" MaxLength="80"></asp:TextBox></TD></TR><TR><TD style="WIDTH: 123px; HEIGHT: 22px; TEXT-ALIGN: left" class="tiny">Fono:</TD><TD style="WIDTH: 297px; HEIGHT: 22px; TEXT-ALIGN: justify"><asp:TextBox id="txt_fono" tabIndex=16 runat="server" Width="288px" MaxLength="50"></asp:TextBox></TD><TD style="WIDTH: 122px; HEIGHT: 22px">Fax:</TD><TD style="WIDTH: 284px; HEIGHT: 22px"><asp:TextBox id="txt_fax" tabIndex=17 runat="server" Width="288px" MaxLength="50"></asp:TextBox></TD></TR><TR><TD style="WIDTH: 123px; HEIGHT: 22px; TEXT-ALIGN: left" class="tiny">Página Web</TD><TD style="WIDTH: 297px; HEIGHT: 22px; TEXT-ALIGN: justify"><asp:TextBox id="txt_web" tabIndex=18 runat="server" Width="288px" MaxLength="100" ></asp:TextBox></TD><TD style="WIDTH: 122px; HEIGHT: 22px" class="tiny2">E-mail:</TD><TD style="WIDTH: 284px; HEIGHT: 22px"><asp:TextBox id="txt_mail" tabIndex=19 runat="server" Width="288px" MaxLength="100"></asp:TextBox></TD></TR><TR><TD style="WIDTH: 123px; HEIGHT: 21px; TEXT-ALIGN: left" class="tiny">Organización Juridica:</TD><TD style="WIDTH: 297px; HEIGHT: 21px; TEXT-ALIGN: justify"><asp:DropDownList id="drop_organizacion" tabIndex=20 runat="server" Width="294px" CssClass="tiny"></asp:DropDownList></TD><TD style="WIDTH: 122px; HEIGHT: 21px">Forma Propiedad:</TD><TD style="WIDTH: 284px; HEIGHT: 21px"><asp:DropDownList id="drop_forma" tabIndex=21 runat="server" Width="294px" CssClass="tiny">
                                            </asp:DropDownList></TD></TR><TR><TD style="WIDTH: 123px; HEIGHT: 8px; TEXT-ALIGN: left" class="tiny">Tipo Actividad Eco.:</TD><TD style="WIDTH: 297px; HEIGHT: 8px; TEXT-ALIGN: justify"><asp:DropDownList id="drop_tipo_actividad" tabIndex=22 runat="server" Width="294px" CssClass="tiny" OnSelectedIndexChanged="drop_tipo_actividad_SelectedIndexChanged" AutoPostBack="True">
                                            </asp:DropDownList></TD><TD style="WIDTH: 122px; HEIGHT: 8px" class="tiny2">Estado Empresa:</TD><TD style="WIDTH: 284px; HEIGHT: 8px"><asp:DropDownList id="drop_estado" tabIndex=23 runat="server" Width="294px" CssClass="tiny"></asp:DropDownList></TD></TR><TR><TD style="WIDTH: 123px; TEXT-ALIGN: left" class="tiny">Actividad Economica:</TD><TD style="WIDTH: 297px; TEXT-ALIGN: justify"><asp:DropDownList id="drop_actividad" tabIndex=24 runat="server" Width="294px" CssClass="tiny">
                                            </asp:DropDownList></TD><TD style="WIDTH: 122px">CIIU:</TD><TD style="WIDTH: 284px"><asp:TextBox id="txt_ciiu" tabIndex=25 runat="server" Width="288px" MaxLength="20"></asp:TextBox></TD></TR></TBODY></TABLE></asp:Panel> <BR /><asp:Panel id="pnl_establecimiento" runat="server" GroupingText="Datos de identificación del Establecimiento"><BR /><BR /><TABLE style="WIDTH: 952px" id="Table4" language="javascript" onclick="return TABLE1_onclick()"><TBODY><TR><TD style="WIDTH: 122px; TEXT-ALIGN: left" class="tiny">Nombre Estab.:</TD><TD style="WIDTH: 107px; TEXT-ALIGN: left"><asp:TextBox id="txt_nombre_est" tabIndex=26 runat="server" Width="288px" MaxLength="100"></asp:TextBox> </TD><TD style="WIDTH: 115px" class="tiny2">Dirección:</TD><TD style="WIDTH: 117px; TEXT-ALIGN: left"><asp:TextBox id="txt_direccion_est" tabIndex=27 runat="server" Width="288px" MaxLength="100"></asp:TextBox> </TD></TR><TR><TD style="WIDTH: 122px; HEIGHT: 6px; TEXT-ALIGN: left" class="tiny">Región:</TD><TD style="WIDTH: 107px; HEIGHT: 6px; TEXT-ALIGN: left"><asp:DropDownList id="drop_region_est" tabIndex=28 runat="server" Width="294px" CssClass="tiny" OnSelectedIndexChanged="drop_region_est_SelectedIndexChanged" AutoPostBack="True">
                                            </asp:DropDownList></TD><TD style="WIDTH: 115px; HEIGHT: 6px" class="tiny2">Provincia:</TD><TD style="WIDTH: 117px; HEIGHT: 6px; TEXT-ALIGN: left"><asp:DropDownList id="drop_provincia_est" tabIndex=29 runat="server" Width="294px" CssClass="tiny" OnSelectedIndexChanged="drop_provincia_est_SelectedIndexChanged" AutoPostBack="True">
                                            </asp:DropDownList></TD></TR><TR><TD style="WIDTH: 122px; HEIGHT: 1px; TEXT-ALIGN: left" class="tiny">Comuna:</TD><TD style="WIDTH: 107px; HEIGHT: 1px; TEXT-ALIGN: left"><asp:DropDownList id="drop_comuna_est" tabIndex=30 runat="server" Width="294px" CssClass="tiny">
                                            </asp:DropDownList> </TD><TD style="WIDTH: 115px; HEIGHT: 1px; TEXT-ALIGN: left" class="tiny">Ciudad:</TD><TD style="WIDTH: 117px; HEIGHT: 1px; TEXT-ALIGN: left"><asp:TextBox id="txt_ciudad_est" tabIndex=31 runat="server" Width="288px" MaxLength="50"></asp:TextBox></TD></TR><TR><TD style="WIDTH: 122px; HEIGHT: 4px; TEXT-ALIGN: left" class="tiny">Fono:</TD><TD style="WIDTH: 107px; HEIGHT: 4px; TEXT-ALIGN: left"><asp:TextBox id="txt_fono_est" tabIndex=32 runat="server" Width="288px" MaxLength="50"></asp:TextBox></TD><TD style="WIDTH: 115px; HEIGHT: 4px; TEXT-ALIGN: left" class="tiny">Página Web:</TD><TD style="WIDTH: 117px; HEIGHT: 4px; TEXT-ALIGN: left"><asp:TextBox id="txt_web_est" tabIndex=33 runat="server" Width="288px" MaxLength="50"></asp:TextBox></TD></TR><TR><TD style="WIDTH: 122px; HEIGHT: 22px; TEXT-ALIGN: left" class="tiny">Fax:</TD><TD style="WIDTH: 107px; HEIGHT: 22px; TEXT-ALIGN: justify"><asp:TextBox id="txt_fax_est" tabIndex=34 runat="server" Width="288px" MaxLength="50"></asp:TextBox></TD><TD style="WIDTH: 115px; HEIGHT: 22px" class="tiny2">Fono Celular:</TD><TD style="WIDTH: 117px; HEIGHT: 22px"><asp:TextBox id="txt_celular_est" tabIndex=35 runat="server" Width="288px" MaxLength="50"></asp:TextBox></TD></TR><TR><TD style="WIDTH: 122px; HEIGHT: 22px; TEXT-ALIGN: left" class="tiny">E-mail:</TD><TD style="WIDTH: 107px; HEIGHT: 22px; TEXT-ALIGN: justify"><asp:TextBox id="txt_mail_est" tabIndex=36 runat="server" Width="288px" MaxLength="100"></asp:TextBox></TD><TD style="WIDTH: 115px; HEIGHT: 22px" class="tiny2">Estado Estab.</TD><TD style="WIDTH: 117px; HEIGHT: 22px"><asp:DropDownList id="drop_estado_est" tabIndex=37 runat="server" Width="294px" CssClass="tiny">
                                            </asp:DropDownList></TD></TR><TR><TD style="WIDTH: 122px; HEIGHT: 21px; TEXT-ALIGN: left" class="tiny">Actividad Principal:</TD><TD style="WIDTH: 107px; HEIGHT: 21px; TEXT-ALIGN: justify"><asp:DropDownList id="drop_actividad_est" tabIndex=38 runat="server" Width="294px" CssClass="tiny">
                                            </asp:DropDownList></TD><TD style="WIDTH: 115px; HEIGHT: 21px" class="tiny2">Tramite Interno:</TD><TD style="WIDTH: 117px; HEIGHT: 21px"><asp:DropDownList id="drop_tramite" tabIndex=39 runat="server" Width="294px" CssClass="tiny">
                                            </asp:DropDownList></TD></TR><TR><TD style="WIDTH: 122px; HEIGHT: 3px; TEXT-ALIGN: left" class="tiny">Seleción muestra</TD><TD style="WIDTH: 107px; HEIGHT: 3px; TEXT-ALIGN: justify"><asp:DropDownList id="drop_muestra" tabIndex=40 runat="server" Width="294px" CssClass="tiny">
                                                <asp:ListItem>IF</asp:ListItem>
                                                <asp:ListItem>RESTO</asp:ListItem>
                                            </asp:DropDownList></TD><TD style="WIDTH: 115px; HEIGHT: 3px" class="tiny2">CIIU:</TD><TD style="WIDTH: 117px; HEIGHT: 3px"><asp:TextBox id="txt_ciiu_est" tabIndex=41 runat="server" Width="288px" MaxLength="20"></asp:TextBox></TD></TR>
                                                <tr>
                                                    <td class="tiny" colspan="2" style="height: 3px; text-align: left">
                                                    </td>
                                                    <td class="tiny2" style="width: 115px; height: 3px">
                                                        <asp:Label ID="lbl_faltjust_1" runat="server" Text="Tipo Faltante Justificada"
                                                            Width="135px"></asp:Label></td>
                                                    <td style="width: 117px; height: 3px">
                                                        <asp:DropDownList id="drop_faltjust_1" tabIndex=23 runat="server" Width="294px" CssClass="tiny">
                                                        </asp:DropDownList></td>
                                                </tr>
                                            </TBODY></TABLE></asp:Panel> <BR /><asp:Panel id="pnl_informante" runat="server" Height="134px" GroupingText="Datos del Informante">
                            <br />
                            <br />
                            <table id="Table3" language="javascript" onclick="return TABLE1_onclick()" style="width: 952px;
                                height: 139px">
                                <tbody>
                                    <tr>
                                        <td class="tiny" style="width: 136px; height: 2px; text-align: left">
                                            Nombre Informante:</td>
                                        <td style="width: 332px; height: 2px; text-align: left">
                                            <asp:TextBox ID="txt_nombre_inf" runat="server" MaxLength="80" TabIndex="42" Width="288px"></asp:TextBox>
                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" ControlToValidate="txt_nombre_est"
                                                Display="Dynamic" ErrorMessage="Debe Ingresar un Informante" ValidationGroup="validacion">*</asp:RequiredFieldValidator></td>
                                        <td class="tiny2" style="width: 136px; height: 2px">
                                            Cargo:</td>
                                        <td style="height: 2px; text-align: left">
                                            <asp:TextBox ID="txt_cargo_inf" runat="server" MaxLength="50" TabIndex="43" Width="288px"></asp:TextBox>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tiny" style="width: 136px; height: 4px; text-align: left">
                                            E-mail:</td>
                                        <td style="width: 332px; height: 4px; text-align: left">
                                            <asp:TextBox ID="txt_mail_inf" runat="server" MaxLength="50" TabIndex="44" Width="288px"></asp:TextBox>
                                        </td>
                                        <td class="tiny2" style="width: 136px; height: 4px">
                                            Fono:</td>
                                        <td style="height: 4px; text-align: left">
                                            <asp:TextBox ID="txt_fono_inf" runat="server" MaxLength="50" TabIndex="45" Width="288px"></asp:TextBox></td>
                                    </tr>
                                    <tr>
                                        <td class="tiny" style="width: 136px; height: 3px; text-align: left">
                                            Fax:</td>
                                        <td style="width: 332px; height: 3px; text-align: left">
                                            <asp:TextBox ID="txt_fax_inf" runat="server" MaxLength="50" TabIndex="46" Width="288px"></asp:TextBox>
                                        </td>
                                        <td class="tiny" style="width: 136px; height: 3px; text-align: left">
                                        </td>
                                        <td style="height: 3px; text-align: left">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="tiny" style="width: 136px; height: 69px; text-align: left">
                                            Observaciones:</td>
                                        <td colspan="3" style="width: 357px; height: 69px; text-align: justify">
                                            <asp:TextBox ID="txt_observacion" runat="server" Height="52px" MaxLength="255" TabIndex="47"
                                                TextMode="MultiLine" Width="762px"></asp:TextBox></td>
                                    </tr>
                                </tbody>
                            </table>
                        </asp:Panel> </H3><H3 style="TEXT-ALIGN: center">&nbsp;</H3><H3 style="TEXT-ALIGN: center"><BR />&nbsp;</H3><H3 style="TEXT-ALIGN: center"><TABLE style="WIDTH: 811px; HEIGHT: 38px; TEXT-ALIGN: center" id="tbl_botones" class="tiny"><TBODY><TR><TD style="WIDTH: 293px; HEIGHT: 51px; TEXT-ALIGN: center"><asp:Button id="btn_grabar" tabIndex=249 onclick="Button1_Click" runat="server" Width="144px" Height="22px" CssClass="Boton" ValidationGroup="validacion" Text="Grabar"></asp:Button></TD><TD style="WIDTH: 293px; HEIGHT: 51px; TEXT-ALIGN: center"><asp:Button id="btn_limpiar" tabIndex=250 runat="server" Width="144px" Height="22px" CssClass="Boton" Text="Limpiar"></asp:Button></TD><TD style="WIDTH: 293px; HEIGHT: 51px; TEXT-ALIGN: center"><asp:Button id="btn_agrega_rol" tabIndex=250 onclick="btn_agrega_rol_Click" runat="server" Width="144px" Height="22px" CssClass="Boton" Text="Agrega Rol al Lev."></asp:Button></TD><TD style="WIDTH: 293px; HEIGHT: 51px; TEXT-ALIGN: center"><asp:Button id="Button2" tabIndex=251 onclick="Button2_Click" runat="server" Width="144px" Height="22px" CssClass="Boton" Text="Volver"></asp:Button></TD></TR></TBODY></TABLE></H3><P><BR />&nbsp;</P></asp:Panel> <BR /><BR /><BR /><BR /><BR /><BR /><BR /><asp:ValidationSummary style="TOP: 0px" id="vs_grabacion" runat="server" Width="272px" Height="48px" Font-Size="X-Small" ValidationGroup="validacion" ShowSummary="False" ShowMessageBox="True" HeaderText="Debe llenar los campos obligatorios:"></asp:ValidationSummary> <BR /><BR /><BR /><BR /><BR /><BR /><BR /><BR /><BR /><BR /><BR /><BR />
</ContentTemplate>
</asp:UpdatePanel>
    </form>
</body>
</html>
