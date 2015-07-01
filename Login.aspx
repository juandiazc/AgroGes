<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Login.aspx.vb" Inherits="Login" Title="Instituto Nacional de Estadisticas" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    
    <link href="Recursos/Css/EstilosGenericos.css" rel="Stylesheet" type="text/css" media="all" />
    <style type="text/css">
        .style1
        {
            height: 71px;
            width: 83px;
        }
        .style2
        {
            height: 126px;
            width: 102px;
        }
        .style3
        {
            height: 71px;
        }
        .style4
        {
            width: 260px;
            height: 71px;
        }
    </style>
<script language="javascript" type="text/javascript">
<!--

function TABLE1_onclick() {

}

// -->
</script>
</head>
<body class="fondo_doc" id="Body" runat =server style="text-align: center">
    <form id="form1" runat="server">
    <div align=center >
        <table border="0" cellpadding="0" cellspacing="0" 
            style="height: 419px; color: #3366ff;" id="TABLE1" language="javascript" onclick="return TABLE1_onclick()">
            <tr valign="top">
                <td align="center" class="tiny" style="color: #3366ff; height: 419px; ">
                    <asp:ScriptManager ID="ScriptManager1" runat="server">
                    </asp:ScriptManager>
                    <table border="0" cellpadding="0" cellspacing="0" style="width: 75px; height: 58%">
                        <tr>
                            <td align="center" colspan="3" style="height: 1px; width: 1103px;" valign="top" class="tiny">
                                <table style="width: 1128px; height: 112px">
                                    <tr>
                                        <td colspan="1" class="style2">
                                            <asp:Image ID="Image2" runat="server" ImageUrl="~/Recursos/Images/logo.jpg" /></td>
                                        <td colspan="3" style="height: 112px; width: 1128px;">
                                            &nbsp;<asp:Image ID="Image1" runat="server" 
                                                ImageUrl="~/Recursos/Images/top.jpg" Width="820px" Height="65px" 
                                                style="margin-right: 18px" /><br />
                                        </td>
                                        <td style="width: 159px; height: 126px; text-align: right">
                                            <asp:Panel ID="pnl_herramientas" runat="server" CssClass="tiny" GroupingText="Cuadro de Herramientas">
                                                <table>
                                                    <tr>
                                                        <td colspan="3" style="width: 43px">
                                                            &nbsp;&nbsp;
                                                            <table>
                                                                <tr>
                                                                    <td style="width: 100px">
                                                                        <asp:ImageButton ID="ImageButton4" runat="server" Height="26px" ImageUrl="~/Recursos/Images/Herramientas_Home.JPG"
                                                                            ToolTip="Ir al Inicio" Width="30px" /></td>
                                                                    <td style="width: 100px">
                                                                        <asp:ImageButton ID="ImageButton5" runat="server" Height="25px" ImageUrl="~/Recursos/Images/Herramientas_Contacto.JPG"
                                                                            ToolTip="Formulario de Contacto" Width="27px" /></td>
                                                                    <td style="width: 7px" colspan="2">
                                                                        </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </asp:Panel>
                                        </td>
                                    </tr>
                                </table>
                                <br />
                                &nbsp;<asp:Panel ID="pnl_autenticacion" runat="server" CssClass="tiny" GroupingText="Autenticación de usuario"
                                    Height="441px" HorizontalAlign="Center" Width="1125px">
                                    <br />
                                    <table style="width: 1112px">
                                        <tr>
                                            <td style="width: 100px">
                                            </td>
                                            <td style="width: 100px">
                                            </td>
                                            <td style="width: 100px">
                                            </td>
                                            <td style="width: 100px">
                                                <table style="width: 643px; height: 326px">
                                                    <tr>
                                                        <td class="tiny" colspan="3" align="center">
                                                            </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="style3">
                                                        </td>
                                                        <td class="style1">
                                                            </td>
                                                        <td class="style4">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="style12">
                                                            <asp:Image ID="Image3" runat="server" ImageUrl="~/Recursos/Images/login.jpg" />
                                                            <br />
                                                            <br />
                                                            <br />
                                                            <br />
                                                        </td>
                                                        <td class="style10">
                                                            <asp:Panel ID="pnl_acceso" runat="server" CssClass="tiny" GroupingText="Acceso al Sistema">
                                                                <br />
                                                                <table class="tiny" style="width: 288px; height: 80px;" align="center">
                                                                    <tr>
                                                                        <td class="tiny" style="width: 136px; text-align: center" align="left">
                                                                            <span style="color: #3333ff">Ingrese Usuario</span></td>
                                                                        <td class="style6" style="text-align: left">
                                                                            <asp:TextBox ID="txt_idusuario" runat="server" CssClass="caja_texto" Width="130px" TabIndex="1"></asp:TextBox>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="tiny" style="width: 136px; text-align: center" align="left">
                                                                            <span style="color: #0033ff">Ingrese Contraseña</span></td>
                                                                        <td style="text-align: left">
                                                                            <asp:TextBox ID="txt_UsuPassword" runat="server" CssClass="caja_texto" TextMode="Password"
                                                                                Width="130px" TabIndex="2"></asp:TextBox>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="left" class="tiny" style="color: #0033ff">
                                                                            </td>
                                                                        <td style="text-align: left">
                                                                            <asp:DropDownList ID="drop_año" runat="server" CssClass="tiny" TabIndex="3" Visible="False">
                                                                            </asp:DropDownList></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="left" class="tiny" style="color: #0033ff">
                                                                            </td>
                                                                        <td style="text-align: left">
                                                                            <asp:DropDownList ID="drop_mes" runat="server" CssClass="tiny" TabIndex="4" Visible="False">
                                                                                <asp:ListItem Value="1">Enero</asp:ListItem>
                                                                                <asp:ListItem Value="2">Febrero</asp:ListItem>
                                                                                <asp:ListItem Value="3">Marzo</asp:ListItem>
                                                                                <asp:ListItem Value="4">Abril</asp:ListItem>
                                                                                <asp:ListItem Value="5">Mayo</asp:ListItem>
                                                                                <asp:ListItem Value="6">Junio</asp:ListItem>
                                                                                <asp:ListItem Value="7">Julio</asp:ListItem>
                                                                                <asp:ListItem Value="8">Agosto</asp:ListItem>
                                                                                <asp:ListItem Value="9">Septiembre</asp:ListItem>
                                                                                <asp:ListItem Value="10">Octubre</asp:ListItem>
                                                                                <asp:ListItem Value="11">Noviembre</asp:ListItem>
                                                                                <asp:ListItem Value="12">Diciembre</asp:ListItem>
                                                                            </asp:DropDownList></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="style8" style="width: 136px" align="left">
                                                                            &nbsp;</td>
                                                                        <td style="text-align: justify">
                                                                            <asp:Button ID="btnIngresar" runat="server" CausesValidation="False" CssClass="Boton"
                                                                                OnClick="btnIngresar_Click" Text="Ingresar" TabIndex="5" />
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </asp:Panel>
                                                            <asp:Label ID="lbl_mensaje_login" runat="server" CssClass="tiny" 
                                                                ForeColor="Red"></asp:Label>
                                                            <br />
                                                            <br />
                                                            <asp:Image ID="Optimización" runat="server" 
                                                                ImageUrl="~/Recursos/Images/Internet_Explorer.jpeg" />
                                                        </td>
                                                        <td class="style9">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="style14" colspan="3">
                                                            &nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="3" style="height: 18px">
                                                            &nbsp;</td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td style="width: 100px">
                                            </td>
                                            <td style="width: 100px">
                                            </td>
                                            <td style="width: 100px">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 100px; height: 35px">
                                            </td>
                                            <td style="width: 100px; height: 35px">
                                            </td>
                                            <td style="width: 100px; height: 35px">
                                            </td>
                                            <td style="width: 100px; height: 35px">
                                            </td>
                                            <td style="width: 100px; height: 35px">
                                            </td>
                                            <td style="width: 100px; height: 35px">
                                            </td>
                                            <td style="width: 100px; height: 35px">
                                            </td>
                                        </tr>
                                    </table>
                                    <h3 style="text-align: center">
                                        &nbsp;</h3>
                                </asp:Panel>
                                <span style="color: #0066ff"></span>
                            </td>
                        </tr>
                        <tr style="color: #3366ff">
                            <td align="center" colspan="3" style="width: 1115px; height: 160px" valign="top">
                                <asp:Panel ID="pnl_contacto" runat="server" CssClass="tiny" Style="border-right: black 2px solid;
                                    padding-right: 70px; border-top: black 2px solid; display: none; padding-left: 70px;
                                    padding-bottom: 20px; border-left: black 2px solid; width: 350px; padding-top: 20px;
                                    border-bottom: black 2px solid; background-color: white" Width="416px">
                                    <span style="color: #ff0000">
                                        <table style="width: 450px">
                                            <tr>
                                                <td class="tiny" colspan="2" style="text-align: left">
                                                    <span style="color: #000000"><strong>Formulario de Contacto</strong></span></td>
                                            </tr>
                                            <tr>
                                                <td class="tiny" colspan="2">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tiny" style="width: 310px; height: 15px; text-align: justify">
                                                    Nombre:</td>
                                                <td style="width: 255px; height: 15px; text-align: justify">
                                                    <asp:TextBox ID="txt_nombre" runat="server"></asp:TextBox></td>
                                            </tr>
                                            <tr>
                                                <td class="tiny" style="width: 310px; text-align: justify">
                                                    Email:</td>
                                                <td style="width: 255px; text-align: justify">
                                                    <asp:TextBox ID="txt_email" runat="server"></asp:TextBox></td>
                                            </tr>
                                            <tr>
                                                <td class="tiny" style="width: 310px; text-align: justify">
                                                    Duda o Consulta:</td>
                                                <td style="width: 255px; text-align: justify">
                                                    <asp:TextBox ID="txt_duda_consulta" runat="server" Height="40px" TextMode="MultiLine" Width="168px"></asp:TextBox></td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">
                                                    <asp:Label ID="lbl_resultado" runat="server" CssClass="tiny" ForeColor="#006633"></asp:Label></td>
                                            </tr>
                                            <tr>
                                                <td style="width: 310px">
                                                </td>
                                                <td style="width: 255px">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 310px; text-align: right;">
                                                    <asp:Button ID="btn_enviar" runat="server" CssClass="Boton" Text="Enviar Consulta" /></td>
                                                <td style="width: 255px; text-align: justify;">
                                        <asp:Button ID="btn_Salir" runat="server" CssClass="Boton" Text="Salir" Width="80px" CausesValidation="False" /></td>
                                            </tr>
                                        </table>
                                    </span>
                                </asp:Panel>
                                <cc1:ModalPopupExtender ID="ModalPopupExtender1" runat="server" BackgroundCssClass="modalBackground"
                                    PopupControlID="pnl_contacto" TargetControlID="ImageButton5">
                                </cc1:ModalPopupExtender>
                                </td>
                        </tr>
                    </table>
                    &nbsp;&nbsp;<br />
                    <span style="color: #3333ff">Instituto Nacional de Estadísticas • ine@ine.cl • Paseo
                        Bulnes 418, Santiago de Chile
                        <br />
                        Sitio Implementado por la Sección de Proyectos Especiales</span></td>
            </tr>
        </table>
            
           
      </div>
    </form>
</body>
</html>
