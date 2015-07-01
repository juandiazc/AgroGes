<%@ Page Language="VB" MasterPageFile="~/MasterSitio.master" AutoEventWireup="false" CodeFile="frmBetaNoticias1.aspx.vb" Inherits="Modulo_Informaciones_frmNoticias" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<asp:Panel id="Pnl_Noticia" runat="server" CssClass="tiny" GroupingText="Publicar Noticias" HorizontalAlign="Center"><TABLE style="WIDTH: 872px"><TBODY><TR>
    <td rowspan="6" style="width: 139px; text-align: left">
        <asp:Image ID="Image1" runat="server" ImageUrl="~/Recursos/Images/Noticia.jpg" /></td>
    <TD style="WIDTH: 102px; TEXT-ALIGN: left" class="tiny">
    Autor</TD><TD style="WIDTH: 337px; TEXT-ALIGN: left"><asp:Label id="Lbl_autor" runat="server" CssClass="tiny" ForeColor="ActiveCaption" Width="144px"></asp:Label></TD><TD style="WIDTH: 3px"></TD><TD></TD></TR><TR><TD style="WIDTH: 102px; TEXT-ALIGN: left; height: 20px;" class="tiny">
                                    Adjunto</TD><TD style="WIDTH: 337px; height: 20px; text-align: justify;">
                                    <asp:FileUpload ID="FileUpload1" runat="server" Height="16px" Width="352px" /></TD><TD style="WIDTH: 3px; height: 20px;"></TD><TD style="height: 20px"></TD></TR><TR><TD style="WIDTH: 102px; TEXT-ALIGN: left" class="tiny">
                                    Título</TD><TD style="WIDTH: 337px; text-align: justify;"><asp:TextBox id="txt_titulo" runat="server" Width="216px" MaxLength="50"></asp:TextBox></TD><TD style="WIDTH: 3px"></TD><TD></TD></TR>
    <tr>
        <td class="tiny" style="width: 102px; text-align: left">
            Descripción</td>
        <td style="width: 337px; text-align: justify">
            <asp:TextBox id="txt_noticia" runat="server" Height="104px" Width="99%" TextMode="MultiLine" MaxLength="1000"></asp:TextBox></td>
        <td style="width: 3px">
        </td>
        <td>
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; text-align: left">
        </td>
        <td style="width: 337px; text-align: justify">
                                            <asp:Label ID="lbl_Resultado" runat="server" CssClass="tiny"></asp:Label></td>
        <td style="width: 3px">
        </td>
        <td>
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; text-align: left; height: 21px;">
        </td>
        <td style="width: 337px; text-align: justify; height: 21px;">
            <asp:Button id="btn_Publicar" runat="server" Text="Publicar" CssClass="Boton" OnClick="btn_Publicar_Click"></asp:Button>
            <asp:Button ID="btn_mantener_noticia" runat="server" CssClass="Boton" Text="Mantener" CausesValidation="False" Visible="False" /></td>
        <td style="width: 3px; height: 21px;">
        </td>
        <td style="height: 21px">
        </td>
    </tr>
</TBODY></TABLE>
    <asp:Panel ID="pnl_mantener_noticias" runat="server" CssClass="tiny" GroupingText="Mantener Noticias">
        <asp:Label ID="lbl_mensaje_noticias" runat="server" CssClass="tiny" Width="392px"></asp:Label><br />
        <asp:GridView ID="Grid_Noticias" runat="server" AllowPaging="True" AlternatingRowStyle-CssClass="altrowstyle"
            AutoGenerateColumns="False" Caption="Noticias " CssClass="grid" PageSize="5"
            Width="832px">
            <Columns>
                <asp:TemplateField HeaderText="ID">
                    <ItemTemplate>
                        <asp:Label ID="lbl_IDPRE" runat="server" CssClass="tiny" Visible="False" Text='<%# bind("ID") %>'></asp:Label><%#Convert.ToInt32(DataBinder.Eval(Container, "DataItemIndex")) + 1%>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                    <EditItemTemplate>
                        <asp:Label ID="lbl_IDPRE_edit" runat="server" CssClass="tiny" Text='<%# bind("ID") %>'
                            Visible="False"></asp:Label>
                    </EditItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Glosa">
                    <ItemTemplate>
                        <asp:Panel ID="panelHeader" runat="server" Style="cursor: pointer; color: #d61719;
                            width: 100%; display: block;">
                            <span style="float: left;"></span>
                            <asp:Image ID="Image1" runat="server" ImageUrl="~/Recursos/Images/expand_blue.jpg"
                                Style="float: right;" />
                            <asp:Label ID="lbl_Titulo" runat="server" CssClass="tiny" ForeColor="ActiveCaption"
                                Text='<%# Eval("NOT_TITULO") %>'></asp:Label></asp:Panel>
                        <asp:Panel ID="Panel1" runat="server" CssClass="tiny" GroupingText="Detalle Noticia"
                            Style="margin-top: 3px; background: url(images/blogBack.gif) no-repeat;">
                            <%#Eval("NOT_GLOSA")%>
                        </asp:Panel>
                        <cc1:CollapsiblePanelExtender ID="cpe1" runat="server" CollapseControlID="panelHeader"
                            Collapsed="true" CollapsedImage="~/Recursos/Images/expand_blue.jpg" ExpandControlID="panelHeader"
                            ExpandedImage="~/Recursos/Images/collapse_blue.jpg" ImageControlID="Image1" SuppressPostBack="true"
                            TargetControlID="Panel1">
                        </cc1:CollapsiblePanelExtender>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <EditItemTemplate>
                        <asp:Panel ID="panelHeader" runat="server" Style="cursor: pointer; color: #d61719;
                            width: 100%; display: block;">
                            <span style="float: left;"></span>
                            <asp:Image ID="Image1" runat="server" ImageUrl="~/Recursos/Images/expand_blue.jpg"
                                Style="float: right;" />
                            <asp:TextBox ID="txt_titulo_edit" runat="server" Text='<%# Eval("NOT_TITULO") %>'
                                Width="95px"></asp:TextBox></asp:Panel>
                        <asp:Panel ID="Panel1" runat="server" CssClass="tiny" GroupingText="Detalle Noticia"
                            Style="margin-top: 3px; background: url(images/blogBack.gif) no-repeat;">
                            <asp:TextBox ID="txt_not_glosa_edit" runat="server" Text=' <%#Eval("NOT_GLOSA")%>'
                                Width="230px" Height="56px" TextMode="MultiLine"></asp:TextBox>
                                                   </asp:Panel>
                        <cc1:CollapsiblePanelExtender ID="cpe1" runat="server" CollapseControlID="panelHeader"
                            Collapsed="true" CollapsedImage="~/Recursos/Images/expand_blue.jpg" ExpandControlID="panelHeader"
                            ExpandedImage="~/Recursos/Images/collapse_blue.jpg" ImageControlID="Image1" SuppressPostBack="true"
                            TargetControlID="Panel1">
                        </cc1:CollapsiblePanelExtender>
                    </EditItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Adjunto">
                    <ItemTemplate>
                        <asp:HyperLink ID="HyperLink1" runat="server" CssClass="tiny" ForeColor="#009933"
                            NavigateUrl='<%#Eval("NOT_ADJUNTO")%>' Width="128px">Ver Archivo Adjunto</asp:HyperLink>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <EditItemTemplate>
                        <asp:FileUpload ID="FileUpload2" runat="server" Height="16px" Width="352px" />
                    </EditItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Fecha Noticia">
                    <ItemTemplate>
                        <asp:Label ID="lbl_Fecha" runat="server" CssClass="tiny" ForeColor="Crimson" Text='<%# Eval("NOT_FECHA") %>'
                            Width="112px"></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                </asp:TemplateField>
                <asp:CommandField ButtonType="Image" CancelImageUrl="~/Recursos/Images/Cancel.gif"
                    EditImageUrl="~/Recursos/Images/page_edit.gif" HeaderText="Editar" ShowEditButton="True"
                    UpdateImageUrl="~/Recursos/Images/Update.gif">
                    <HeaderStyle CssClass="tiny" />
                </asp:CommandField>
                <asp:ButtonField AccessibleHeaderText="Eliminar" ButtonType="Image" CommandName="Eliminar"
                    HeaderText="Eliminar" ImageUrl="~/Recursos/Images/Delete.gif" Text="Bot&#243;n">
                    <HeaderStyle CssClass="tiny" />
                </asp:ButtonField>
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
    <br />
    <BR /><cc1:TextBoxWatermarkExtender id="TextBoxWatermarkExtender1" watermarkText="Ingrese Título de la noticia" runat="server" TargetControlID="txt_titulo"></cc1:TextBoxWatermarkExtender> <cc1:TextBoxWatermarkExtender id="TextBoxWatermarkExtender2" watermarkText="Ingrese Noticia" runat="server" TargetControlID="Txt_noticia"></cc1:TextBoxWatermarkExtender> </asp:Panel> 
<script language="javascript" type="text/javascript" src="../Recursos/Js/FuncionesGenericas.js"></script>
</asp:Content>

