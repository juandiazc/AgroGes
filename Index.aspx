<%@ Page Language="VB" MasterPageFile="~/MasterSitio.master" AutoEventWireup="false" CodeFile="Index.aspx.vb" Inherits="Index" %>
<%@ MasterType TypeName="MasterSitio" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Panel ID="pnl_noticias_sistema" runat="server" CssClass="tiny" GroupingText="Sección Noticias "
                Width="900px">
                <table>
                    <tr>
                        <td style="width: 100px">
                        </td>
                        <td style="width: 100px; text-align: left">
                            <asp:Label ID="lbl_mensaje_noticias" runat="server" CssClass="tiny" Width="392px"></asp:Label></td>
                        <td style="width: 100px">
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 100px">
                        </td>
                        <td style="width: 100px">
                <asp:GridView ID="Grid_Noticias" runat="server" AllowPaging="True" AlternatingRowStyle-CssClass="altrowstyle"
                    AutoGenerateColumns="False" Caption="Noticias " CssClass="grid" PageSize="7" Width="728px">
                    <Columns>
                        <asp:TemplateField HeaderText="N&#176;">
                            <ItemTemplate>
                                <asp:Label ID="lbl_IDPRE" runat="server" CssClass="tiny" 
                                    Visible="False"></asp:Label><%#Convert.ToInt32(DataBinder.Eval(Container, "DataItemIndex")) + 1%>
                            </ItemTemplate>
                            <ItemStyle HorizontalAlign="Center" Width="5%" />
                            <HeaderStyle CssClass="tiny" />
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Glosa">
                            <ItemTemplate>
                        <asp:Panel ID="panelHeader" runat="server" Style="cursor: pointer; color: #d61719;
                            width: 100%; display: block;">
                            <span style="float: left;">
                                                 </span>
                            <asp:Image ID="Image1" runat="server" ImageUrl="~/Recursos/Images/expand_blue.jpg" Style="float: right;" />
                            <asp:Label ID="lbl_Titulo" runat="server" CssClass="tiny" ForeColor="ActiveCaption" Text= '<%# Eval("NOT_TITULO") %>'></asp:Label></asp:Panel>
                        <asp:Panel ID="Panel1" runat="server" Style="margin-top: 3px; background: url(images/blogBack.gif) no-repeat;" CssClass="tiny" GroupingText="Detalle Noticia">
                            <%#Eval("NOT_GLOSA")%>
                        </asp:Panel>
                        <cc1:collapsiblepanelextender id="cpe1" runat="server" collapsecontrolid="panelHeader"
                            collapsed="true" collapsedimage="~/Recursos/Images/expand_blue.jpg" expandcontrolid="panelHeader"
                            expandedimage="~/Recursos/Images/collapse_blue.jpg" imagecontrolid="Image1" suppresspostback="true"
                            targetcontrolid="Panel1"></cc1:collapsiblepanelextender>
                            </ItemTemplate>
                            <HeaderStyle CssClass="tiny" />
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Adjunto">
                            <ItemTemplate>
                                <asp:HyperLink ID="HyperLink1" runat="server" CssClass="tiny" ForeColor="#009933"
                                    Width="128px" NavigateUrl='<%#Eval("NOT_ADJUNTO")%>'>Ver Archivo Adjunto</asp:HyperLink>
                            </ItemTemplate>
                            <HeaderStyle CssClass="tiny" />
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Fecha Noticia">
                            <ItemTemplate>
                                <asp:Label ID="lbl_Fecha" runat="server" CssClass="tiny" ForeColor="Crimson" Text='<%# Eval("NOT_FECHA") %>' Width="112px"></asp:Label>
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
                        </td>
                        <td style="width: 100px">
                        </td>
                    </tr>
                </table>
                <br />
            </asp:Panel>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>

