<%@ Page Language="VB" MasterPageFile="~/MasterSitio.master" AutoEventWireup="false" CodeFile="frmMenuGantt.aspx.vb" Inherits="Modulo_Informaciones_frmGANTT1" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<head>
</head>
  <!--Hoja de estilos del calendario <link href="../Recursos/jquery-ui/css/jquery-ui.css" rel="stylesheet" type="text/css" /> --> 

   
 <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
<script type="text/javascript" src="../Recursos/jquery-ui/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="../Recursos/jquery-ui/js/jquery-ui.js"></script>


 <script type="text/javascript"> 

     $.datepicker.regional['es'] = {
     closeText: 'Cerrar',
     prevText: '<Ant',
     nextText: 'Sig>',
     currentText: 'Hoy',
     monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
     monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
     dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
     dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
     dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
     weekHeader: 'Sm',
     dateFormat: 'dd/mm/yy',
     firstDay: 1,
     isRTL: false,
     showMonthAfterYear: false,
     yearSuffix: ''
     };
     $.datepicker.setDefaults($.datepicker.regional['es']);
    $(document).ready(function () {
    var prm = Sys.WebForms.PageRequestManager.getInstance();    
       prm.add_initializeRequest(InitializeRequest);
       prm.add_endRequest(EndRequest);
      
    $(".tiny2").datepicker();

    });

    function InitializeRequest(sender, args) {
       // make unbind to avoid memory leaks.
         $(".tiny2").unbind();
    }

    function EndRequest(sender, args) {
       // after update occur on UpdatePanel re-init the DatePicker
       $(".tiny2").datepicker();
    }
</script>
     
<asp:Panel id="Pnl_Noticia" runat="server" CssClass="tiny" GroupingText="" HorizontalAlign="Center"><table style="WIDTH: 872px"><tbody>

         <tr>
        <td rowspan="9" style="width: 139px; text-align: left">
        </td>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
        </td>
        <td style="width: 337px; height: 16px; text-align: left">
            <asp:Label ID="lbl_asignacion_actividades" runat="server" Font-Bold="True" Font-Italic="False"
                Font-Overline="False" Font-Strikeout="False" Font-Underline="False" Style="text-align: center"
                Text="Módulo 2: Asignación de Actividades por Productos" Width="886px"></asp:Label></td>
             <td style="width: 24px; height: 16px; text-align: left">
             </td>
        <td rowspan="9">
        </td>
    </tr>
    <tr>
    <td style="WIDTH: 102px; TEXT-ALIGN: left; height: 16px;" class="tiny">
    </td><td style="WIDTH: 337px; TEXT-ALIGN: left; height: 16px;"><asp:Label id="Lbl_autor" runat="server" CssClass="tiny" ForeColor="ActiveCaption" Width="144px"></asp:Label></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Sistema</td>
        <td style="width: 337px; height: 16px; text-align: left">
            <asp:DropDownList ID="drop_sistema" runat="server" Width="430px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Producto</td>
        <td style="width: 337px; height: 16px; text-align: left"><asp:DropDownList ID="drop_producto" runat="server" Visible="False" Width="430px" AutoPostBack="True">
        </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Año</td>
        <td style="width: 337px; height: 16px; text-align: left">
            <asp:DropDownList ID="drop_año" runat="server" Visible="False" Width="430px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Hito</td>
        <td style="width: 337px; height: 16px; text-align: left">
            <asp:DropDownList ID="drop_hito" runat="server" Visible="False" Width="430px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td colspan="2" style="height: 16px; text-align: center">

    <asp:Panel ID="pnl_mantener_noticias" runat="server" CssClass="tiny" GroupingText="">
        <asp:Label ID="lbl_mensaje_noticias" runat="server" CssClass="tiny" Width="32px"></asp:Label><br />
        <asp:GridView ID="Grid_GANTT" runat="server" AllowPaging="True" AlternatingRowStyle-CssClass="altrowstyle" CssClass="grid" PageSize="50"
            Width="132px" Height="32px" AutoGenerateColumns="False">
            <Columns>
            <asp:TemplateField HeaderText="ID">
                  <ItemTemplate>
                        <asp:Label ID="lbl_ID" runat="server" CssClass="tiny" Text='<%# Eval("ID") %>' Width="50px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:TemplateField>  
                            <asp:TemplateField HeaderText="Hito">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Hito" runat="server" CssClass="tiny" Text='<%# Eval("Hito") %>' Width="40px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:TemplateField>  
                <asp:TemplateField HeaderText="Actividad">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Actividades" runat="server" CssClass="tiny" Text='<%# Eval("Actividad") %>' Width="300px" Height="15" Font-Size="Small" style="text-align: Left;" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Left" Width="5%" />
                </asp:TemplateField>   
                <asp:TemplateField HeaderText="Detalle Actividad">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Detalle_Actividad" runat="server" CssClass="tiny" Text='<%# Eval("Detalle_Actividad") %>' Width="350px" Height="15" Font-Size="Small"  style="text-align: Left;" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Left" Width="5%" />
                </asp:TemplateField>                                              
            <asp:TemplateField>
                <ItemTemplate>
                    <asp:CheckBox ID="chkRow" runat="server" />
                </ItemTemplate>
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
        </td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
        </td>
        <td style="width: 337px; height: 16px; text-align: center">
            <asp:Button ID="btn_asignar" runat="server" CssClass="Boton" Text="Asignar" Width="67px" /></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
</tbody></table>
    &nbsp; &nbsp;&nbsp;<br />
    <br /> </asp:Panel> 

</asp:Content>