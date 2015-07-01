<%@ Page Language="VB" MasterPageFile="~/MasterSitio.master" AutoEventWireup="false" CodeFile="frmMantenedorUsuario.aspx.vb" Inherits="Modulo_Administracion_frmMantenedorUsuario" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Panel ID="pnl_mant_usuarios" runat="server" CssClass="tiny" GroupingText="Mantenedor de Usuarios">
                <table class="TablaGeneral" style="width: 656px">
                    <tbody>
                        <tr>
                            <td colspan="6" style="width: 731px">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="6" style="width: 731px">
                                &nbsp; &nbsp;&nbsp;&nbsp;
                                <asp:GridView ID="grv_usuarios" runat="server" AllowPaging="True" AlternatingRowStyle-CssClass="altrowstyle"
                                    AutoGenerateColumns="False" Caption="Mantenedor de Usuario" CssClass="grid" PageSize="5"
                                    Width="672px" Height="1px" OnSelectedIndexChanged="grv_usuarios_SelectedIndexChanged">
                                    <Columns>
                                        <asp:TemplateField HeaderText="N&#176;">
                                            <HeaderStyle CssClass="tiny" />
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_cont" runat="server" CssClass="tiny" Text='<%#Convert.ToInt32(DataBinder.Eval(Container, "DataItemIndex")) + 1%>'></asp:Label>
                                            </ItemTemplate>
                                        </asp:TemplateField>
                                         <asp:TemplateField HeaderText="Usuario">
                                            <EditItemTemplate>
                                                <asp:Label ID="lbl_edit_usuario" runat="server" CssClass="tiny" Text='<%# bind("PK_USUARIO") %>' Width="96px" ></asp:Label>
                                            </EditItemTemplate>
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_usuario" runat="server" CssClass="tiny" Text='<%# bind("PK_USUARIO") %>' Width="80px"></asp:Label>
                                            </ItemTemplate>
                                             <HeaderStyle CssClass="tiny" />
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Password">
                                            <EditItemTemplate>
                                                <asp:TextBox ID="txt_pass" runat="server" Text='<%# bind("USU_PASS") %>' Width="88px" MaxLength="20" ></asp:TextBox>
                                            </EditItemTemplate>
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_pass" runat="server" CssClass="tiny" Text='<%# bind("USU_PASS") %>' Width="56px"></asp:Label>
                                            </ItemTemplate>
                                            <HeaderStyle CssClass="tiny" />
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Nombre">
                                            <EditItemTemplate>
                                                <asp:TextBox ID="txt_nombre" runat="server" Text='<%# bind("USU_NOMBRE") %>' MaxLength="30" Width="120px" ></asp:TextBox>
                                            </EditItemTemplate>
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_nombre" runat="server" CssClass="tiny" Text='<%# bind("USU_NOMBRE") %>' Width="112px"></asp:Label>
                                            </ItemTemplate>
                                            <HeaderStyle CssClass="tiny" />
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Apellido Paterno">
                                            <EditItemTemplate>
                                                <asp:TextBox ID="txt_ap_paterno" runat="server" Text='<%# bind("USU_APE_PAT") %>'
                                                    Width="120px" MaxLength="30"></asp:TextBox>
                                            </EditItemTemplate>
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_ap_paterno" runat="server" CssClass="tiny" Text='<%# bind("USU_APE_PAT") %>' Width="128px"></asp:Label>
                                            </ItemTemplate>
                                            <HeaderStyle CssClass="tiny" />
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Email">
                                            <EditItemTemplate>
                                                <asp:TextBox ID="txt_email" runat="server" Text='<%# bind("USU_EMAIL") %>'
                                                    Width="120px" MaxLength="30"></asp:TextBox>
                                            </EditItemTemplate>
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_email" runat="server" CssClass="tiny" Text='<%# bind("USU_EMAIL") %>' Width="140px"></asp:Label>
                                            </ItemTemplate>
                                            <HeaderStyle CssClass="tiny" />
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Perfil">
                                            <EditItemTemplate>
                                                <asp:DropDownList ID="ddl_tipo" runat="server" CssClass="tiny" Width="128px">
                                                </asp:DropDownList>
                                                <asp:Label ID="lbl_tipo_edit" runat="server" CssClass="tiny" Text='<%# bind("PK_TIPO_USUARIO") %>'
                                                    Visible="False"></asp:Label>
                                            </EditItemTemplate>
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_tipo" runat="server" CssClass="tiny" Text='<%# bind("TIPUSU_GLOSA") %>'
                                                    Width="144px"></asp:Label>
                                            </ItemTemplate>
                                            <HeaderStyle CssClass="tiny" />
                                        </asp:TemplateField>
                                        <asp:TemplateField HeaderText="Estado">
                                            <EditItemTemplate>
                                                <asp:DropDownList ID="drop_estado_usuario" runat="server" CssClass="tiny">
                                                </asp:DropDownList>
                                                <asp:Label ID="lbl_estado_usuario_edit" runat="server" CssClass="tiny" Text='<%# bind("PK_ESTADO_USUARIO") %>'
                                                    Visible="False"></asp:Label>
                                            </EditItemTemplate>
                                            <ItemTemplate>
                                                <asp:Label ID="lbl_estado_usuario" runat="server" CssClass="tiny" Text='<%# bind("ESTUSU_GLOSA_ESTADO") %>'></asp:Label>
                                            </ItemTemplate>
                                            <HeaderStyle CssClass="tiny" />
                                        </asp:TemplateField>
                                        <asp:CommandField ButtonType="Image" CancelImageUrl="~/Recursos/Images/Cancel.gif"
                                            EditImageUrl="~/Recursos/Images/page_edit.gif" HeaderText="Editar" ShowEditButton="True"
                                            UpdateImageUrl="~/Recursos/Images/Update.gif" >
                                            <HeaderStyle CssClass="tiny" />
                                        </asp:CommandField>
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
                        </tr>
                        <tr>
                            <td colspan="6" style="width: 731px">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="6" style="height: 20px; width: 731px;">
                                <asp:Button ID="Btn_Agregar_usuario" runat="server" CssClass="Boton" Text="Agregar Nuevo Usuario" /></td>
                        </tr>
                        <tr>
                            <td colspan="6" style="width: 731px">
                                </td>
                        </tr>
                    </tbody>
                </table>
                <asp:Panel ID="pnl_Nuevo_usuario" runat="server" CssClass="tiny" GroupingText="Agregar Nuevo Usuario"
                    Visible="False">
                    <table style="width: 784px">
                        <tbody>
                            <tr>
                                <td style="width: 167px; text-align: left" class="tiny">
                                    Ingrese Usuario:</td>
                                <td style="width: 199px; text-align: left">
                                    <asp:TextBox ID="txt_usuario" runat="server" MaxLength="20" Width="160px"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="rfv_usuario" runat="server" ControlToValidate="txt_usuario"
                                        ErrorMessage="Ingrese Usuario" ValidationGroup="validacion" Display="Dynamic" Width="1px">*</asp:RequiredFieldValidator></td>
                                <td>
                                </td>
                                <td style="text-align: left">
                                </td>
                                <td colspan="2" style="text-align: left">
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 167px; text-align: left" class="tiny">
                                    Ingrese Contraseña:</td>
                                <td style="width: 199px; text-align: left">
                                    <asp:TextBox ID="txt_pass" runat="server" MaxLength="20" Width="160px"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="rfv_pass" runat="server" ControlToValidate="txt_pass"
                                        ErrorMessage="Ingrese Password" ValidationGroup="validacion" Display="Dynamic">*</asp:RequiredFieldValidator></td>
                                <td>
                                </td>
                                <td style="text-align: left">
                                </td>
                                <td style="text-align: left">
                                    &nbsp;</td>
                                <td style="width: 3px;">
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 167px; height: 4px; text-align: left" class="tiny">
                                    Ingrese Nombre:</td>
                                <td style="width: 199px; height: 4px; text-align: left">
                                    <asp:TextBox ID="txt_nombre" runat="server" Width="220px" MaxLength="30"></asp:TextBox>
                                </td>
                                <td style="height: 4px; text-align: left;">
                                    <asp:RequiredFieldValidator ID="rfv_nombre" runat="server" ControlToValidate="txt_nombre"
                                        ErrorMessage="Ingrese Nombre" ValidationGroup="validacion" Display="Dynamic">*</asp:RequiredFieldValidator></td>
                                <td style="height: 4px; text-align: left">
                                </td>
                                <td style="height: 4px; text-align: left">
                                    &nbsp;</td>
                                <td style="width: 3px; height: 4px">
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 167px; height: 10px; text-align: left" class="tiny">
                                    Ingrese Apellido Paterno:</td>
                                <td style="width: 199px; height: 10px; text-align: left">
                                    <asp:TextBox ID="txt_ap_paterno" runat="server" Width="220px" MaxLength="30"></asp:TextBox>
                                </td>
                                <td style="height: 10px; text-align: left;">
                                    <asp:RequiredFieldValidator ID="rfv_ap_paterno" runat="server" ControlToValidate="txt_ap_paterno"
                                        ErrorMessage="Ingrese apellido paterno" ValidationGroup="validacion" Display="Dynamic">*</asp:RequiredFieldValidator></td>
                                <td style="height: 10px; text-align: left">
                                </td>
                                <td style="height: 10px; text-align: left">
                                </td>
                                <td style="width: 3px; height: 10px">
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: left" valign="top" class="tiny">
                                    Ingrese Email:</td>
                                <td style="width: 199px; text-align: left">
                                    <asp:TextBox ID="txt_email" runat="server" Width="220px" MaxLength="30"></asp:TextBox>&nbsp;</td>
                                <td style="text-align: left">
                                    <asp:RequiredFieldValidator ID="rfv_ap_materno" runat="server" ControlToValidate="txt_email"
                                        ErrorMessage="ingrese Email" ValidationGroup="validacion" Display="Dynamic">*</asp:RequiredFieldValidator></td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td style="width: 3px">
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 167px; text-align: left" class="tiny">
                                    Tipo de Usuario:</td>
                                <td style="width: 199px; text-align: justify;">
                                    <asp:DropDownList ID="drop_tipo_usuario_agregar" runat="server" CssClass="tiny">
                                    </asp:DropDownList></td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td style="width: 3px">
                                </td>
                            </tr>
                            <tr>
                                <td class="tiny" style="width: 167px; text-align: left">
                                    Estado:</td>
                                <td style="width: 199px; text-align: justify">
                                    <asp:DropDownList ID="drop_estado_usuario_agregar" runat="server" CssClass="tiny">
                                    </asp:DropDownList></td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td style="width: 3px">
                                </td>
                            </tr>
                            <tr>
                                <td class="tiny" style="width: 167px; text-align: left">
                                </td>
                                <td style="width: 199px; text-align: justify">
                                    <asp:Button ID="btn_guardar" runat="server" CssClass="Boton" OnClick="btn_guardar_Click"
                                        Text="Guardar" ValidationGroup="validacion" />
                                    <asp:Button ID="btn_cancelar" runat="server" CssClass="Boton" OnClick="btn_cancelar_Click"
                                        Text="Cancelar" /></td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td style="width: 3px">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="width: 784px">
                        <tbody>
                            <tr>
                                <td colspan="4" style="text-align: justify">
                                    <asp:ValidationSummary ID="vs_nuevo_usuario" runat="server" Font-Size="X-Small" ValidationGroup="validacion"
                                        Width="272px" HeaderText="Debe llenar los campos obligatorios:" ShowMessageBox="True" ShowSummary="False" />
                                </td>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </asp:Panel>
            </asp:Panel>
        </ContentTemplate>
    </asp:UpdatePanel>
    &nbsp;
</asp:Content>

