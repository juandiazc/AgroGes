<%@ Page Language="VB" MasterPageFile="~/MasterSitio.master" AutoEventWireup="false" CodeFile="frmDescargaBases.aspx.vb" Inherits="Modulo_Descarga_frmDescargaBases" title="Untitled Page" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
<asp:Panel id="Panel1" runat="server" Height="398px" Width="905px" GroupingText="Descarga de Bases de Datos" CssClass="tiny" HorizontalAlign="Center"><H3 style="TEXT-ALIGN: center">&nbsp;</H3><P>&nbsp;</P><P><TABLE style="WIDTH: 359px; HEIGHT: 92px"><TBODY><TR><TD style="VERTICAL-ALIGN: middle; WIDTH: 109px; TEXT-ALIGN: left">Base a Descargar</TD><TD style="WIDTH: 196px; TEXT-ALIGN: left"><asp:DropDownList id="drop_tabulado" runat="server" Width="206px" CssClass="tiny" OnSelectedIndexChanged="drop_tabulado_SelectedIndexChanged" AutoPostBack="True"><asp:ListItem Value="0">Selecione Base</asp:ListItem>
<asp:ListItem Value="1">BD Full</asp:ListItem>
</asp:DropDownList></TD></TR><TR><TD style="VERTICAL-ALIGN: middle; WIDTH: 109px; TEXT-ALIGN: center"><asp:Button id="btn_genera" tabIndex=99 onclick="btn_genera_Click" runat="server" Width="97px" CssClass="Boton" Text="Genera Base" ValidationGroup="validacion"></asp:Button></TD><TD style="VERTICAL-ALIGN: middle; WIDTH: 196px; TEXT-ALIGN: left">&nbsp; <asp:HyperLink id="lnk_muestra" runat="server" Height="19px" Width="97px" CssClass="Boton">Muestra Base</asp:HyperLink></TD></TR></TBODY></TABLE></P><P>&nbsp;</P></asp:Panel> 
</ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>

