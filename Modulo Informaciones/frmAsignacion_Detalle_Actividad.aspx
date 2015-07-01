<%@ Page Language="VB" MasterPageFile="~/MasterSitio.master" AutoEventWireup="false" CodeFile="frmAsignacion_Detalle_Actividad.aspx.vb" Inherits="Modulo_Asignacion_Detalle_Actividad" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<head>
<link href="../Recursos/jquery-ui/css/jquery-ui.css" rel="stylesheet" type="text/css" />
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
        <td rowspan="16" style="width: 139px; text-align: left">
        </td>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
        </td>
        <td style="width: 337px; height: 16px; text-align: left" colspan="5">
            <asp:Label ID="lbl_asignacion_actividades" runat="server" Font-Bold="True" Font-Italic="False"
                Font-Overline="False" Font-Strikeout="False" Font-Underline="False" Style="text-align: center"
                Text="Módulo 3: Asignación de Detalle de Actividades por Productos" Width="886px"></asp:Label></td>
             <td style="width: 24px; height: 16px; text-align: left">
             </td>
        <td rowspan="16">
        </td>
    </tr>
    <tr>
    <td style="WIDTH: 102px; TEXT-ALIGN: left; height: 16px;" class="tiny">
    </td><td style="WIDTH: 337px; TEXT-ALIGN: left; height: 16px;" colspan="5"><asp:Label id="Lbl_autor" runat="server" CssClass="tiny" ForeColor="ActiveCaption" Width="144px"></asp:Label></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Sistema</td>
        <td style="width: 337px; height: 16px; text-align: left" colspan="5">
            <asp:DropDownList ID="drop_sistema" runat="server" Width="430px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Producto</td>
        <td style="width: 337px; height: 16px; text-align: left" colspan="5"><asp:DropDownList ID="drop_producto" runat="server" Visible="False" Width="430px" AutoPostBack="True">
        </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Año</td>
        <td style="width: 337px; height: 16px; text-align: left" colspan="5">
            <asp:DropDownList ID="drop_año" runat="server" Visible="False" Width="430px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Hito</td>
        <td style="width: 337px; height: 16px; text-align: left" colspan="5">
            <asp:DropDownList ID="drop_hito" runat="server" Visible="False" Width="430px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Actividad</td>
        <td style="width: 337px; height: 16px; text-align: left" colspan="5">
            <asp:DropDownList ID="drop_actividad" runat="server" Visible="False" Width="430px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Detalle Actividad</td>
        <td style="width: 337px; height: 16px; text-align: left" colspan="5">
            <asp:DropDownList ID="drop_detalle_actividad" runat="server" Visible="False" Width="430px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Fecha Inicio</td>
        <td style="width: 337px; height: 16px; text-align: left" colspan="5">
            <asp:TextBox ID="txt_fechai" runat="server" CssClass="tiny2" Width="420px"></asp:TextBox></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Fecha Termino</td>
        <td style="width: 337px; height: 16px; text-align: left" colspan="5">
            <asp:TextBox ID="txt_fechaf" runat="server" CssClass="tiny2" Width="420px"></asp:TextBox></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Usuario Asignado a Actividad</td>
        <td style="width: 337px; height: 16px; text-align: left" colspan="5">
            <asp:DropDownList ID="drop_usuario" runat="server" Visible="False" Width="430px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Comentarios</td>
        <td style="width: 337px; height: 16px; text-align: left" colspan="5">
            <asp:TextBox ID="txt_comentario" runat="server" CssClass="tiny2" TextMode="MultiLine"
                Width="420px"></asp:TextBox></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
        </td>
        <td style="width: 337px; height: 16px; text-align: left" colspan="5" rowspan="">
            <asp:Button ID="btn_asignar_actividad" runat="server" CssClass="Boton" Text="Asignar Actividad"
                Width="200px" />
            &nbsp;
            <asp:Button ID="Button5" runat="server" CssClass="Boton" Text="Cerrar Actividad"
                    Width="200px" /></td>
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
            <asp:ButtonField AccessibleHeaderText="Eliminar" ButtonType="Image" CommandName="Eliminar"
                    HeaderText="Eliminar" ImageUrl="~/Recursos/Images/delete.PNG" Text="Bot&#243;n" >
                    <HeaderStyle CssClass="tiny"  />
                    <ControlStyle Font-Size="X-Large" />
            </asp:ButtonField> 
            <asp:TemplateField HeaderText="Sistema">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Sistema" runat="server" CssClass="tiny" Text='<%# Eval("Sistema") %>' Width="40px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:TemplateField>  
               <asp:TemplateField HeaderText="ID Producto" Visible="False">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Producto" runat="server" CssClass="tiny" Text='<%# Eval("Producto") %>' Width="40px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:TemplateField> 
                <asp:TemplateField HeaderText="Producto">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Producto_Detalle" runat="server" CssClass="tiny" Text='<%# Eval("Detalle_Producto") %>' Width="50px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:TemplateField> 
                <asp:TemplateField HeaderText="A&#241;o">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Año" runat="server" CssClass="tiny" Text='<%# Eval("Año") %>' Width="40px" Height="15" Font-Size="Small" ></asp:Label>
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
                <asp:TemplateField HeaderText="ID Actividad" Visible="False" >
                  <ItemTemplate>
                        <asp:Label ID="lbl_ID_Actividades" runat="server" CssClass="tiny" Text='<%# Eval("ID") %>' style="text-align: Left;" Width="40px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:TemplateField>   
                <asp:TemplateField HeaderText="Actividad">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Actividades" runat="server" CssClass="tiny" Text='<%# Eval("Actividad") %>' style="text-align: Left;" Width="300px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:TemplateField>   
                <asp:TemplateField HeaderText="Detalle Actividad">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Detalle_Actividad" runat="server" CssClass="tiny" Text='<%# Eval("Detalle_Actividad") %>' style="text-align: Left;" Width="350px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:TemplateField>         
                  <asp:TemplateField HeaderText="Fecha Inicio">
                  <ItemTemplate>
                        <asp:Label ID="lbl_fechai" runat="server" CssClass="tiny" Text='<%# Eval("Fechainicio") %>' Width="80px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:TemplateField>  
                <asp:TemplateField HeaderText="Fecha Termino">
                  <ItemTemplate>
                        <asp:Label ID="lbl_fechat" runat="server" CssClass="tiny" Text='<%# Eval("Fechatermino") %>' Width="80px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:TemplateField>  
                                <asp:TemplateField HeaderText="Comentario">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Comentario" runat="server" CssClass="tiny" Text='<%# Eval("Comentarios") %>' style="text-align: Left;" Width="250px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
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
            </td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
</tbody></table>
    &nbsp; &nbsp;&nbsp;<br />
    <br /> </asp:Panel> 

</asp:Content>