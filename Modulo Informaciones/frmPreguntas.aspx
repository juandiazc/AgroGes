<%@ Page Language="VB" MasterPageFile="~/MasterSitio.master" AutoEventWireup="false" CodeFile="frmPreguntas.aspx.vb" Inherits="Modulo_Administracion_frmPreguntas" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Panel ID="Pnl_Preguntas" runat="server" CssClass="tiny" GroupingText="Ingreso de Dudas o Consultas"
                Width="900px">
                <table style="width: 836px">
                    <tbody>
                        <tr>
                            <td class="tiny" colspan="1" style="text-align: justify">
                            </td>
                            <td class="tiny" colspan="1" style="text-align: justify; width: 21px;">
                            </td>
                            <td class="tiny" colspan="3" style="text-align: justify">
                                <strong>
                                    <br />
                                    <br />
                                    Formulario Ingreso de Dudas o Consultas.</strong></td>
                            <td class="tiny" colspan="1" style="text-align: justify">
                            </td>
                        </tr>
                        <tr>
                            <td class="tiny" colspan="1">
                            </td>
                            <td class="tiny" colspan="1" style="width: 21px">
                            </td>
                            <td class="tiny" colspan="3">
                            </td>
                            <td class="tiny" colspan="1">
                            </td>
                        </tr>
                        <tr>
                            <td class="tiny" style="width: 100px; height: 21px">
                            </td>
                            <td class="tiny" style="width: 21px; height: 21px">
                            </td>
                            <td class="tiny" style="width: 52px; height: 21px; text-align: left;">
                                Usuario:</td>
                            <td style="width: 106px; height: 21px; text-align: justify">
                                <asp:Label ID="lbl_Usuario" runat="server" CssClass="tiny" ForeColor="ActiveCaption"></asp:Label></td>
                            <td style="width: 18px; height: 21px">
                            </td>
                            <td style="width: 67px; height: 21px">
                            </td>
                        </tr>
                        <tr>
                            <td class="tiny" style="width: 100px; height: 21px">
                            </td>
                            <td class="tiny" style="width: 21px; height: 21px">
                            </td>
                            <td class="tiny" style="width: 52px; height: 21px; text-align: left;">
                                Tema:</td>
                            <td style="width: 106px; height: 21px; text-align: justify;">
                                <asp:TextBox ID="txtTema" runat="server" MaxLength="50"></asp:TextBox></td>
                            <td style="width: 18px; height: 21px">
                                </td>
                            <td style="width: 67px; height: 21px">
                            </td>
                        </tr>
                        <tr>
                            <td class="tiny" style="width: 100px">
                            </td>
                            <td class="tiny" style="width: 21px">
                            </td>
                            <td class="tiny" style="width: 52px; text-align: left;">
                                Contenido:</td>
                            <td style="width: 106px; text-align: justify;">
                                <asp:TextBox ID="txtPregunta" runat="server" Height="128px" TextMode="MultiLine"
                                    Width="288px" MaxLength="200"></asp:TextBox></td>
                            <td style="width: 18px">
                                </td>
                            <td style="width: 67px">
                            </td>
                        </tr>
                        <tr>
                            <td class="tiny" style="width: 100px">
                            </td>
                            <td class="tiny" style="width: 21px">
                            </td>
                            <td class="tiny" style="width: 52px">
                            </td>
                            <td style="width: 106px; text-align: justify">
                                <asp:Button ID="btnConsultar" runat="server" CssClass="Boton" 
                                    Text="Ingresar" OnClick="btnConsultar_Click" /></td>
                            <td style="width: 18px">
                            </td>
                            <td style="width: 67px">
                            </td>
                        </tr>
                        <tr>
                            <td class="tiny" style="width: 100px">
                            </td>
                            <td class="tiny" style="width: 21px">
                            </td>
                            <td class="tiny" style="width: 52px">
                            </td>
                            <td style="width: 106px; text-align: justify">
                            </td>
                            <td style="width: 18px">
                            </td>
                            <td style="width: 67px">
                            </td>
                        </tr>
                        <tr>
                            <td class="tiny" style="width: 100px">
                            </td>
                            <td class="tiny" style="width: 21px">
                            </td>
                            <td class="tiny" style="text-align: left;" colspan="4">
                                <asp:Label ID="lbl_Resultado" runat="server" CssClass="tiny"></asp:Label></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
            </asp:Panel>
        </ContentTemplate>
    </asp:UpdatePanel>
    &nbsp;
</asp:Content>

