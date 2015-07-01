<%@ Page Language="VB" MasterPageFile="~/MasterSitio.master" AutoEventWireup="false" CodeFile="frmRespuestas.aspx.vb" Inherits="Modulo_Administracion_frmRespuestas" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <script language="javascript" type="text/javascript" src="../Recursos/Js/FuncionesGenericas.js"></script>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Panel ID="pnl_preguntas" runat="server" CssClass="tiny" GroupingText="Respuestas">
                <asp:Label ID="lbl_mensaje_respuestas" runat="server" CssClass="tiny"></asp:Label><br />
                <asp:GridView ID="Grid_Respuestas" runat="server" AllowPaging="True" AlternatingRowStyle-CssClass="altrowstyle"
                    AutoGenerateColumns="False" Caption="Respuestas Activas" CssClass="grid" 
                    PageSize="5" Width="728px">
                    <PagerTemplate>
                        &nbsp; &nbsp;
                
                    <asp:Button ID="Button4" runat="server" CommandName="Page" ToolTip="Prim. Pag"  CommandArgument="First" CssClass="pagfirst" />                    
                    <asp:Button ID="Button1" runat="server" CommandName="Page" ToolTip="Pág. anterior"  CommandArgument="Prev" CssClass="pagprev" />
                    <asp:Button ID="Button2" runat="server" CommandName="Page" ToolTip="Sig. página" CommandArgument="Next" CssClass="pagnext" />                    
                    <asp:Button ID="Button3" runat="server" CommandName="Page" ToolTip="Últ. Pag"  CommandArgument="Last" CssClass="paglast" />                    

                </PagerTemplate><Columns>
                    <asp:TemplateField HeaderText="N&#176;">
                        <ItemTemplate>
                            <asp:Label ID="lbl_ID" runat="server" CssClass="tiny" Text='<%# bind("PK_RESPUESTA") %>'
                                Visible="False"></asp:Label><%#Convert.ToInt32(DataBinder.Eval(Container, "DataItemIndex")) + 1%>
                        </ItemTemplate>
                        <ItemStyle HorizontalAlign="Center" Width="5px" />
                        <HeaderStyle CssClass="tiny" />
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Fecha Pregunta">
                        <ItemTemplate>
                            <asp:Label ID="lbl_Fecha" runat="server" CssClass="tiny" Text='<%# bind("PRE_FECHA") %>'
                                Width="88px"></asp:Label>
                        </ItemTemplate>
                        <ItemStyle HorizontalAlign="Center" Width="5px" />
                        <HeaderStyle CssClass="tiny" />
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Pregunta">
                        <ItemTemplate>
                            <asp:Label ID="lbl_Glosa" runat="server" CssClass="tiny" Text='<%# bind("PRE_GLOSA") %>'
                                ></asp:Label>
                        </ItemTemplate>
                        <HeaderStyle CssClass="tiny" />
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Respuesta">
                        <EditItemTemplate>
                            <asp:TextBox ID="txt_Respuesta" runat="server"  TextMode="MultiLine" Width="184px" MaxLength="200" Text='<%# bind("RES_GLOSA") %>'
                                ></asp:TextBox>
                        </EditItemTemplate>
                        <ItemTemplate>
                            <asp:Label ID="lbl_Respuesta" runat="server" BorderColor="ControlLightLight" CssClass="tiny"
                                ForeColor="ActiveCaption" Text='<%# bind("RES_GLOSA") %>' Width="240px"></asp:Label>
                        </ItemTemplate>
                        <HeaderStyle CssClass="tiny" />
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Por">
                            <ItemTemplate>
                                <asp:Label ID="lbl_Por" runat="server" CssClass="tiny" Width="64px" text='<%# bind("PK_USUARIO") %>'></asp:Label>
                            </ItemTemplate>
                            <HeaderStyle CssClass="tiny" />
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Fecha Respuesta">
                            <ItemTemplate>
                                <asp:Label ID="lbl_Fecha_Resp" runat="server" CssClass="tiny" Width="96px" Text='<%# bind("RES_FECHA") %>'></asp:Label>
                            </ItemTemplate>
                            <HeaderStyle CssClass="tiny" />
                        </asp:TemplateField>
                        <asp:CommandField ButtonType="Image" CancelImageUrl="~/Recursos/Images/Cancel.gif"
                            EditImageUrl="~/Recursos/Images/page_edit.gif" ShowEditButton="True" UpdateImageUrl="~/Recursos/Images/Update.gif" >
                            <HeaderStyle CssClass="tiny" />
                        </asp:CommandField>
                    </Columns><PagerStyle CssClass="pagerstyle" />
                    <SelectedRowStyle CssClass="selectedrow" />
                    <AlternatingRowStyle CssClass="altrow" />
                </asp:GridView>
                <asp:GridView ID="Grid_Preguntas" runat="server" AllowPaging="True" AlternatingRowStyle-CssClass="altrowstyle"
                    AutoGenerateColumns="False" Caption="Preguntas sin Contestar" 
                    PageSize="5" Width="732px" CssClass="grid" >
                    <Columns>
                        <asp:TemplateField HeaderText="N&#176;">
                            <ItemTemplate>
                                <asp:Label ID="lbl_IDPRE" runat="server" CssClass="tiny" Text='<%# bind("PK_PREGUNTA") %>'
                                    Visible="False"></asp:Label><%#Convert.ToInt32(DataBinder.Eval(Container, "DataItemIndex")) + 1%>
                            </ItemTemplate>
                            <ItemStyle HorizontalAlign="Center" Width="5%" />
                            <HeaderStyle CssClass="tiny" />
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Fecha Pregunta">
                            <ItemTemplate>
                                <asp:Label ID="lbl_Fecha_Pre" runat="server" CssClass="tiny" Text='<%# bind("PRE_FECHA") %>'
                                    Width="88px"></asp:Label>
                            </ItemTemplate>
                            <ItemStyle HorizontalAlign="Center" Width="5%" />
                            <HeaderStyle CssClass="tiny" />
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Pregunta">
                            <ItemTemplate>
                                <asp:Label ID="lbl_Pregunta_Pre" runat="server" CssClass="tiny" ForeColor="ActiveCaption"
                                    Text='<%# bind("PRE_GLOSA") %>' Width="182px"></asp:Label>
                            </ItemTemplate>
                            <HeaderStyle CssClass="tiny" />
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Por">
                           <ItemTemplate>
                                <asp:Label ID="lbl_Pre_Por" runat="server" BorderColor="ControlLightLight" CssClass="tiny"
                                    Text='<%# bind("PK_USUARIO") %>' Width="236px"></asp:Label>
                            </ItemTemplate>
                            <HeaderStyle CssClass="tiny" />
                        </asp:TemplateField>
                        <asp:ButtonField ButtonType="Button" CommandName="Responder" Text="Responder">
                            <ControlStyle CssClass="Boton" />
                            <HeaderStyle CssClass="tiny" />
                        </asp:ButtonField>
                    </Columns>
                    <PagerTemplate>
                        &nbsp; &nbsp;
                        <asp:Button ID="Button4" runat="server" CommandName="Page" ToolTip="Prim. Pag"  CommandArgument="First" CssClass="pagfirst" />
                        <asp:Button ID="Button1" runat="server" CommandName="Page" ToolTip="Pág. anterior"  CommandArgument="Prev" CssClass="pagprev" />
                        <asp:Button ID="Button2" runat="server" CommandName="Page" ToolTip="Sig. página" CommandArgument="Next" CssClass="pagnext" />
                        <asp:Button ID="Button3" runat="server" CommandName="Page" ToolTip="Últ. Pag"  CommandArgument="Last" CssClass="paglast" />
                    </PagerTemplate>
                    <PagerStyle CssClass="pagerstyle" />
                    <SelectedRowStyle CssClass="selectedrow" />
                    <AlternatingRowStyle CssClass="altrow" />
                    <EditRowStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                </asp:GridView>
                <asp:Panel ID="pnl_responder" runat="server" GroupingText="Responder Duda o Consulta" CssClass="tiny">
                    <br />
                    <table style="width: 640px">
                        <tr>
                            <td style="width: 103px; text-align: justify;" class="tiny">
                                </td>
                            <td style="width: 100px; text-align: justify;">
                                <asp:Label ID="lbl_ID" runat="server" CssClass="tiny" ForeColor="ActiveCaptionText"></asp:Label></td>
                        </tr>
                        <tr>
                            <td style="width: 103px; text-align: justify;" class="tiny">
                                Fecha Pregunta:</td>
                            <td style="width: 100px; text-align: justify;">
                                <asp:Label ID="lbl_Fecha_Pregunta" runat="server" CssClass="tiny" ForeColor="ActiveCaption"></asp:Label></td>
                        </tr>
                        <tr>
                            <td class="tiny" style="width: 103px; height: 15px; text-align: justify">
                                Pregunta:</td>
                            <td style="width: 100px; height: 15px; text-align: justify">
                                <asp:Label ID="lbl_Pregunta" runat="server" CssClass="tiny" ForeColor="ActiveCaption"></asp:Label></td>
                        </tr>
                        <tr>
                            <td class="tiny" style="width: 103px; height: 15px; text-align: justify">
                                Usuario:</td>
                            <td style="width: 100px; height: 15px; text-align: justify">
                                <asp:Label ID="lbl_Usuario" runat="server" CssClass="tiny" ForeColor="ActiveCaption"></asp:Label></td>
                        </tr>
                        <tr>
                            <td class="tiny" style="width: 103px; height: 15px; text-align: justify">
                                Respuesta:</td>
                            <td style="width: 100px; height: 15px; text-align: justify">
                                <asp:TextBox ID="txt_Respuesta" runat="server" Height="40px" TextMode="MultiLine"
                                    Width="272px" MaxLength="200"></asp:TextBox></td>
                        </tr>
                        <tr>
                            <td class="tiny" style="width: 103px; height: 15px; text-align: justify">
                                <asp:Button ID="btn_Graba_Respuesta" runat="server" CssClass="Boton" Text="Grabar Respuesta" OnClick="btn_Graba_Respuesta_Click" /></td>
                            <td style="width: 100px; height: 15px; text-align: justify">
                                <asp:Button ID="btn_cancelar" runat="server" CssClass="Boton" OnClick="btn_cancelar_Click"
                                    Text="Cancelar" /></td>
                        </tr>
                    </table>
                </asp:Panel>
                        <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;
                &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;&nbsp;</asp:Panel>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>

