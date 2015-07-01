<%@ Page Language="VB" MasterPageFile="~/MasterSitio.master" AutoEventWireup="false" CodeFile="frmCertificadoRecepcion.aspx.vb" Inherits="Modulo_Gestion_frmCertificadoRecepcion" title="Certificado Manual" %>

<%@ Register Assembly="CrystalDecisions.Web, Version=10.2.3600.0, Culture=neutral, PublicKeyToken=692fbea5521e1304"
    Namespace="CrystalDecisions.Web" TagPrefix="CR" %>
  

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
      <script language="javascript" src="../Recursos/js/funciones_java.js" type="text/javascript">
</script>
            <asp:Panel ID="Panel1" runat="server" CssClass="tiny" GroupingText="Emitir Boleta Honorarios"
                Height="398px" HorizontalAlign="Center" Width="905px">
                <h3 style="text-align: center">
                    <CR:CrystalReportViewer ID="CrystalReportViewer1" runat="server" AutoDataBind="true"
                        Style="z-index: 293; left: 0px; position: absolute; top: 0px" />
                    &nbsp;</h3>
                
                    <table style="width: 509px; height: 156px">
                        <tr>
                            <td colspan="5" style="vertical-align: middle; text-align: center; height: 24px;">
                                <asp:DropDownList ID="drop_sis" runat="server" AutoPostBack="True" Width="114px">
                                </asp:DropDownList>
                                <asp:DropDownList ID="drop_numinf" runat="server" AutoPostBack="True" Width="54px">
                                </asp:DropDownList>&nbsp;&nbsp;<asp:DropDownList ID="drop_enc" runat="server"
                                    Width="120px" AutoPostBack="True" Visible="False">
                                </asp:DropDownList>
                                &nbsp;&nbsp;&nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align: middle; width: 107px; text-align: left">
                                Número Informe</td>
                            <td style="width: 122px">
                                <asp:TextBox ID="txt_numero_inf" runat="server" Style="text-align: left" TabIndex="1"
                                    Width="30px"></asp:TextBox>
                            </td>
                            <td style="width: 81px">
                                Fecha Informe</td>
                            <td style="width: 137px">
                                <asp:TextBox ID="txt_fecha_inf" runat="server" Style="text-align: left" TabIndex="2" Width="160px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td style="vertical-align: middle; width: 107px; text-align: left; height: 22px;">
                                Nombre</td>
                            <td style="width: 122px; height: 22px;">
                                <asp:TextBox ID="txt_nombre" runat="server" style="text-align: left" TabIndex="3" Width="168px"></asp:TextBox></td>
                            <td style="width: 81px; height: 22px;">
                                Rut</td>
                            <td style="width: 137px; height: 22px;">
                                <asp:TextBox ID="txt_rut" runat="server" Style="text-align: left" TabIndex="4" Width="160px"></asp:TextBox>
                                <asp:TextBox ID="txt_dvrut" runat="server" TabIndex="5" Width="46px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td style="vertical-align: middle; width: 107px; text-align: left">
                                Resolución</td>
                            <td style="vertical-align: middle; text-align: left; width: 122px;">
                                <asp:TextBox ID="txt_resolucion" runat="server" Width="168px" TabIndex="6"></asp:TextBox></td>
                            <td style="vertical-align: middle; width: 81px; text-align: left">
                                Fecha</td>
                            <td style="vertical-align: middle; width: 137px; text-align: left">
                                <asp:TextBox ID="txt_fecha" runat="server" TabIndex="7" Width="160px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td style="vertical-align: middle; width: 107px; text-align: left; height: 4px;">
                                Periodo de desempeño del</td>
                            <td style="vertical-align: middle; text-align: left; width: 122px; height: 4px;">
                                <asp:TextBox ID="txt_fecha1" runat="server" TabIndex="8" Width="168px"></asp:TextBox></td>
                            <td style="vertical-align: middle; width: 81px; text-align: left; height: 4px;">
                                al</td>
                            <td style="vertical-align: middle; width: 137px; text-align: left; height: 4px;">
                                <asp:TextBox ID="txt_fecha2" runat="server" TabIndex="9" Width="160px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td style="vertical-align: middle; width: 107px; height: 7px; text-align: left">
                                Provincia</td>
                            <td style="vertical-align: middle; height: 7px; text-align: left; width: 122px;">
                                <asp:TextBox ID="txt_provincia" runat="server" Width="166px" TabIndex="10"></asp:TextBox></td>
                            <td style="vertical-align: middle; width: 81px; height: 7px; text-align: left">
                                Región</td>
                            <td style="vertical-align: middle; width: 137px; height: 7px; text-align: left">
                                <asp:TextBox ID="txt_region" runat="server" Width="160px" TabIndex="11"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="5" rowspan="1" style="vertical-align: middle; text-align: left">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="2" style="vertical-align: middle; width: 107px; text-align: left">
                                Motivo de contratación:</td>
                            <td colspan="3" style="vertical-align: middle; height: 16px; text-align: left">
                                <asp:TextBox ID="txt_cont1" runat="server" MaxLength="101" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="3" style="vertical-align: middle; height: 16px; text-align: left">
                                <asp:TextBox ID="txt_cont2" runat="server" MaxLength="101" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="5" rowspan="1" style="vertical-align: middle; height: 15px; text-align: left">
                            </td>
                        </tr>
                        <tr>
                            <td style="vertical-align: middle; width: 107px; text-align: left" rowspan="11">
                                Evaluación de cumplimiento</td>
                            <td style="vertical-align: middle; text-align: left; height: 5px;" colspan="3">
                                <asp:TextBox ID="txt_cum_1" runat="server" MaxLength="150" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="3" style="vertical-align: middle; height: 5px; text-align: left">
                                <asp:TextBox ID="txt_cum_2" runat="server" MaxLength="150" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="3" style="vertical-align: middle; height: 5px; text-align: left">
                                <asp:TextBox ID="txt_cum_3" runat="server" MaxLength="150" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="3" style="vertical-align: middle; height: 5px; text-align: left">
                                <asp:TextBox ID="txt_cum_4" runat="server" MaxLength="150" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="3" style="vertical-align: middle; height: 5px; text-align: left">
                                <asp:TextBox ID="txt_cum_5" runat="server" MaxLength="150" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="3" style="vertical-align: middle; height: 5px; text-align: left">
                                <asp:TextBox ID="txt_cum_6" runat="server" MaxLength="150" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="3" style="vertical-align: middle; height: 5px; text-align: left">
                                <asp:TextBox ID="txt_cum_7" runat="server" MaxLength="150" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="3" style="vertical-align: middle; height: 5px; text-align: left">
                                <asp:TextBox ID="txt_cum_8" runat="server" MaxLength="150" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="3" style="vertical-align: middle; height: 5px; text-align: left">
                                <asp:TextBox ID="txt_cum_9" runat="server" MaxLength="150" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="3" style="vertical-align: middle; height: 5px; text-align: left">
                                <asp:TextBox ID="txt_cum_10" runat="server" MaxLength="150" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="3" style="vertical-align: middle; height: 5px; text-align: left">
                                <asp:TextBox ID="txt_cum_11" runat="server" MaxLength="150" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td rowspan="1" style="vertical-align: middle; width: 107px; text-align: left">
                            </td>
                            <td colspan="3" style="vertical-align: middle; height: 5px; text-align: left">
                                <asp:TextBox ID="txt_cum_12" runat="server" MaxLength="150" TabIndex="10" Width="720px"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td colspan="5" style="vertical-align: middle; text-align: center; height: 21px;">
                                <asp:Button ID="btn_certificado" runat="server" CssClass="Boton" TabIndex="99" Text="Imprimir"
                                    ValidationGroup="validacion" Width="97px" OnClick="btn_certificado_Click" />
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<asp:Button ID="btn_hortaliza" runat="server" CssClass="Boton" TabIndex="99" Text="Recepcionar"
                                    ValidationGroup="validacion" Width="127px" Visible="False" />
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <asp:Button ID="btn_pago" runat="server" CssClass="Boton" TabIndex="99" Text="Enviar Pago"
                                    ValidationGroup="validacion" Width="97px" Visible="False" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5" style="vertical-align: middle; height: 21px; text-align: center">
                                </td>
                        </tr>
                        <tr>
                            <td colspan="5" style="vertical-align: middle; height: 21px; text-align: center">
                                <asp:Button ID="btn_mostrar_habilitar" runat="server" CssClass="Boton" TabIndex="99" Text="Habilitar Encuesta"
                                    ValidationGroup="validacion" Width="121px" /></td>
                        </tr>
                        <tr>
                            <td colspan="5" style="vertical-align: middle; height: 21px; text-align: left">
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<asp:Button ID="btn_Habilitar" runat="server" CssClass="Boton" TabIndex="99" Text="Habilita"
                                    ValidationGroup="validacion" Width="121px" Visible="False" />
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<asp:DropDownList ID="drop_enc_h" runat="server" AutoPostBack="True" Width="114px" Visible="False">
                                </asp:DropDownList>
                                &nbsp; &nbsp;
                                <asp:DropDownList ID="drop_fecha" runat="server" AutoPostBack="True" Width="114px" Visible="False">
                                </asp:DropDownList>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5" style="vertical-align: middle; height: 21px; text-align: left">
                            </td>
                        </tr>
                    </table>
               
                <p>
                    &nbsp;</p>
            </asp:Panel>
</asp:Content>

