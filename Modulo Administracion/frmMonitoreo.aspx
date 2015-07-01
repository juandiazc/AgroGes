<%@ Page Language="VB" MasterPageFile="~/MasterSitio.master" AutoEventWireup="false" CodeFile="frmMonitoreo.aspx.vb" Inherits="Modulo_Administracion_frmMonitoreo" title="Monitoreo de Errores" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
    <table class="TablaGeneral">
        <tr>
            <td>
                <asp:Panel ID="pnl_monitoreo" runat="server" GroupingText="Monitoreo del Sistema" CssClass="tiny">
                    <asp:Panel ID="pnl_opciones_monitoreo" runat="server" CssClass="tiny" GroupingText="Opciones de Monitoreo">
                        <table style="width: 784px">
                            <tr>
                                <td style="width: 100px">
                                    <asp:RadioButtonList ID="rbt_opciones_monitoreo" runat="server" RepeatDirection="Horizontal"
                                        Width="520px" AutoPostBack="True" OnSelectedIndexChanged="rbt_opciones_monitoreo_SelectedIndexChanged">
                                        <asp:ListItem Selected="True" Value="0">Monitoreo de Errores</asp:ListItem>
                                        <asp:ListItem Value="1">Monitoreo de Accesos</asp:ListItem>
                                        <asp:ListItem Value="2">Monitoreo de Tablas</asp:ListItem>
                                    </asp:RadioButtonList></td>
                                <td style="width: 1967px">
                                    <br />
                                </td>
                                <td style="width: 1967px; text-align: center">
                                <asp:Image ID="img_monitoreo" runat="server" ImageUrl="~/Recursos/Images/Monitoreo.gif" /></td>
                            </tr>
                        </table>
                    </asp:Panel>
                </asp:Panel>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Panel ID="pnl_log_errores" runat="server" GroupingText="Monitoreo de Errores" CssClass="tiny">
                    <table style="width: 783px; margin-left: 0px;">
                    <tr>
                        <td class="tiny" style="width: 102px; text-align: justify;">
                            Seleccione Fecha:</td>
                        <td style="width: 1px; text-align: justify;">
                            <asp:TextBox ID="txt_fecha" runat="server"></asp:TextBox></td>
                        <td style="text-align: justify;">
                            <asp:Button ID="btn_buscar" runat="server" CssClass="Boton" Text="Buscar" /></td>
                    </tr>
                </table>
                                <asp:GridView ID="grv_log" runat="server" AlternatingRowStyle-CssClass="altrowstyle" AutoGenerateColumns="False" CellPadding="4"
                                    Width="656px" Caption="Monitoreo de Errores" AllowPaging="True" CssClass="grid" PageSize="8">
                                    <Columns>
                                        <asp:TemplateField HeaderText="N&#176;">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_pk_error" runat="server" Text='<%# bind("PK_LOG_ERRORES") %>' Font-Size="XX-Small" CssClass="tiny"></asp:Label>
                                            </ItemTemplate>
                                            <HeaderStyle CssClass="tiny" />
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Usuario">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_usuario" runat="server" Text='<%# bind("PK_USUARIO") %>' Font-Size="XX-Small" CssClass="tiny"></asp:Label>
                                            </ItemTemplate>
                                            <HeaderStyle CssClass="tiny" />
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Tipo">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_tipo" runat="server" Text='<%# bind("LOGERR_TIPO") %>' Font-Size="XX-Small" CssClass="tiny"></asp:Label>
                                            </ItemTemplate>
                                            <HeaderStyle CssClass="tiny" />
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="P&#225;gina">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_pagina" runat="server" Text='<%# bind("LOGERR_PAGINA") %>' Width="100px" Font-Size="XX-Small" CssClass="tiny"></asp:Label>
                                            </ItemTemplate>
                                            <HeaderStyle CssClass="tiny" />
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="M&#233;todo">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_metodo" runat="server" Text='<%# bind("LOGERR_METODO") %>' Width="150px" Font-Size="XX-Small" CssClass="tiny"></asp:Label>
                                            </ItemTemplate>
                                            <HeaderStyle CssClass="tiny" />
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Mensaje">
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_mensaje" runat="server" Text='<%# bind("LOGERR_MENSAJE") %>' Width="450px" Font-Size="XX-Small" CssClass="tiny"></asp:Label>
                                            </ItemTemplate>
                                            <HeaderStyle CssClass="tiny" />
                                        </asp:TemplateField>
                                    </Columns>
                                    <PagerTemplate>
                                    &nbsp; &nbsp;
                                    <asp:Button ID="Button4" runat="server" CommandArgument="First" CommandName="Page"
                                    CssClass="pagfirst" ToolTip="Prim. Pag" />
                                    <asp:Button ID="Button1" runat="server" CommandArgument="Prev" CommandName="Page"
                                    CssClass="pagprev" ToolTip="Pág. anterior" />
                                    <asp:Button ID="Button2" runat="server" CommandArgument="Next" CommandName="Page"
                                    CssClass="pagnext" ToolTip="Sig. página" />
                                    <asp:Button ID="Button3" runat="server" CommandArgument="Last" CommandName="Page"
                                    CssClass="paglast" ToolTip="Últ. Pag" />
                                    </PagerTemplate>
                                    <PagerStyle CssClass="pagerstyle" />
                                    <SelectedRowStyle CssClass="selectedrow" />
                                    <AlternatingRowStyle CssClass="altrow" />
                                </asp:GridView>
                </asp:Panel><asp:Panel ID="pnl_log_accesos" runat="server" GroupingText="Monitoreo de Accesos" CssClass="tiny">
                    <table style="width: 784px; text-align: left;">
                        <tr>
                            <td class="tiny" style="width: 102px; text-align: justify;">
                                Seleccione Fecha:</td>
                            <td style="width: 1px; text-align: justify;">
                                <asp:TextBox ID="txt_fecha_acceso" runat="server"></asp:TextBox></td>
                            <td style="text-align: justify;">
                                <asp:Button ID="btn_buscar_acceso" runat="server" CssClass="Boton" Text="Buscar" OnClick="btn_buscar_acceso_Click" /></td>
                        </tr>
                    </table>
                    <asp:GridView ID="grv_log_accesos" runat="server" AlternatingRowStyle-CssClass="altrowstyle" AutoGenerateColumns="False" CellPadding="4"
                                    Width="288px" Caption="Monitoreo de Accesos" AllowPaging="True" CssClass="grid" PageSize="8">
                        <Columns>
                            <asp:TemplateField HeaderText="N&#176;">
                                <ItemTemplate>
                                    <asp:Label ID="lbl_pk_acceso" runat="server" CssClass="tiny" Font-Size="XX-Small"
                                        Text='<%# bind("PK_LOG_ACCESO") %>'></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="tiny" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="Usuario">
                                <ItemTemplate>
                                    <asp:Label ID="lbl_usuario" runat="server" CssClass="tiny" Font-Size="XX-Small" Text='<%# bind("PK_USUARIO") %>'
                                        Width="150px"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="tiny" />
                            </asp:TemplateField>
                            <asp:TemplateField HeaderText="IP">
                                <ItemTemplate>
                                    <asp:Label ID="lbl_ip" runat="server" CssClass="tiny" Font-Size="XX-Small" Text='<%# bind("LOGACC_IP") %>'
                                        Width="200px"></asp:Label>
                                </ItemTemplate>
                                <HeaderStyle CssClass="tiny" />
                            </asp:TemplateField>
                        </Columns>
                        <PagerTemplate>
                            &nbsp; &nbsp;
                            <asp:Button ID="Button4" runat="server" CommandArgument="First" CommandName="Page"
                                    CssClass="pagfirst" ToolTip="Prim. Pag" />
                            <asp:Button ID="Button1" runat="server" CommandArgument="Prev" CommandName="Page"
                                    CssClass="pagprev" ToolTip="Pág. anterior" />
                            <asp:Button ID="Button2" runat="server" CommandArgument="Next" CommandName="Page"
                                    CssClass="pagnext" ToolTip="Sig. página" />
                            <asp:Button ID="Button3" runat="server" CommandArgument="Last" CommandName="Page"
                                    CssClass="paglast" ToolTip="Últ. Pag" />
                        </PagerTemplate>
                        <PagerStyle CssClass="pagerstyle" />
                        <SelectedRowStyle CssClass="selectedrow" />
                        <AlternatingRowStyle CssClass="altrow" />
                    </asp:GridView>
                </asp:Panel>
                <asp:Panel ID="pnl_log_tablas" runat="server" GroupingText="Monitoreo de Tablas" CssClass="tiny">
                    <table style="width: 784px; text-align: left;">
                        <tr>
                            <td class="tiny" style="width: 102px; text-align: justify;">
                                Seleccione Fecha:</td>
                            <td style="width: 1px; text-align: justify;">
                                <asp:TextBox ID="txt_fecha_tabla" runat="server"></asp:TextBox></td>
                            <td class="tiny" style="width: 101px; text-align: justify">
                                Seleccione Tabla:</td>
                            <td style="width: 3px; text-align: justify">
                                <asp:DropDownList ID="drop_tablas" runat="server" CssClass="tiny">
                                    <asp:ListItem Value="0">LOG_USUARIO</asp:ListItem>
                                    <asp:ListItem Value="1">LOG_NOTICIA</asp:ListItem>
                                </asp:DropDownList></td>
                            <td style="text-align: justify;">
                                <asp:Button ID="btn_buscar_tabla" runat="server" CssClass="Boton" Text="Buscar" OnClick="btn_buscar_tabla_Click" />
                            </td>
                        </tr>
                    </table>
                    <asp:GridView ID="grv_log_tablas" runat="server" AllowPaging="True" AlternatingRowStyle-CssClass="altrowstyle"
                        Caption="Monitoreo de Tablas" CssClass="grid" Height="1px" Width="840px" PageSize="8">
                        <PagerTemplate>
                            &nbsp; &nbsp;
                            <asp:Button ID="Button4" runat="server" CommandArgument="First" CommandName="Page"
                                CssClass="pagfirst" ToolTip="Prim. Pag" />
                            <asp:Button ID="Button1" runat="server" CommandArgument="Prev" CommandName="Page"
                                CssClass="pagprev" ToolTip="Pág. anterior" />
                            <asp:Button ID="Button2" runat="server" CommandArgument="Next" CommandName="Page"
                                CssClass="pagnext" ToolTip="Sig. página" />
                            <asp:Button ID="Button3" runat="server" CommandArgument="Last" CommandName="Page"
                                CssClass="paglast" ToolTip="Últ. Pag" />
                        </PagerTemplate>
                        <PagerStyle CssClass="pagerstyle" />
                        <SelectedRowStyle CssClass="selectedrow" />
                        <AlternatingRowStyle CssClass="altrow" />
                    </asp:GridView>
                </asp:Panel>
            </td>
        </tr>
        <tr>
            <td style="height: 28px">
                <cc1:CalendarExtender ID="CalendarExtender1" runat="server" Format="dd/M/yyyy" TargetControlID="txt_fecha">
                </cc1:CalendarExtender><cc1:CalendarExtender ID="CalendarExtender2" runat="server" Format="dd/M/yyyy" TargetControlID="txt_fecha_acceso">
                </cc1:CalendarExtender>
                <cc1:CalendarExtender ID="CalendarExtender3" runat="server" Format="dd/M/yyyy" TargetControlID="txt_fecha_tabla">
                </cc1:CalendarExtender>
            </td>
        </tr>
    </table>
        </ContentTemplate>
    </asp:UpdatePanel>
<script language="javascript" type="text/javascript" src="../Recursos/Js/FuncionesGenericas.js"></script>
</asp:Content>
