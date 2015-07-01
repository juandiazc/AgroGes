<%@ Page Language="VB" MasterPageFile="~/MasterSitio.master" AutoEventWireup="false" CodeFile="frmNoticias.aspx.vb" Inherits="Modulo_Informaciones_frmGANTT" %>

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
        <td rowspan="10" style="width: 139px; text-align: left">
        </td>
        <td class="tiny" style="width: 780px; height: 16px; text-align: left" colspan="">
        </td>
        <td style="width: 113px; text-align: justify" colspan="3" rowspan="">
            <asp:Label ID="lbl_nombre_creacion_actividades" runat="server" Text="Módulo 1: Creación de plan de Actividades&#9;" Width="886px" Font-Bold="True" Font-Italic="False" Font-Overline="False" Font-Strikeout="False" Font-Underline="False" style="text-align: center;"></asp:Label></td>
             <td style="width: 24px; height: 16px; text-align: left">
             </td>
        <td rowspan="10">
        </td>
    </tr>
    <tr>
        <td class="tiny" colspan="" style="width: 780px; height: 16px; text-align: left">
        </td>
        <td colspan="3" rowspan="" style="width: 113px; text-align: justify">
        </td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
    <td style="WIDTH: 780px; TEXT-ALIGN: left; height: 16px;" class="tiny" colspan="">
    Autor</td><td style="WIDTH: 113px; TEXT-ALIGN: justify;" colspan="3" rowspan=""><asp:Label id="Lbl_autor" runat="server" CssClass="tiny" ForeColor="ActiveCaption" Width="144px"></asp:Label></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr><td style="WIDTH: 780px; TEXT-ALIGN: left" class="tiny" colspan="">
        Sistema</td><td style="WIDTH: 113px; text-align: justify;" colspan="3" rowspan="">
        <asp:DropDownList ID="drop_sis" runat="server" Width="412px" AutoPostBack="True">
        </asp:DropDownList></td>
        <td style="width: 24px; text-align: justify">
            <asp:Button ID="btn_sis_edit" runat="server" CssClass="Boton" Width="29px" Visible="False" /></td>
    </tr>
    <tr>
        <td class="tiny" style="width: 780px; text-align: left" colspan="">
            ID</td>
        <td style="width: 113px; text-align: justify" colspan="3" rowspan="">
            <asp:TextBox ID="txt_ID" runat="server" Width="402px"></asp:TextBox></td>
        <td style="width: 24px; text-align: justify">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 780px; text-align: left" colspan="">
            Hito</td>
        <td style="width: 113px; text-align: justify" colspan="3" rowspan="">
            <asp:DropDownList ID="drop_hitos" runat="server" Width="410px" Enabled="False">
            </asp:DropDownList></td>
        <td style="width: 24px; text-align: justify">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 780px; text-align: left; height: 16px;" colspan="">
            Actividad</td>
        <td style="width: 113px; text-align: justify;" colspan="3" rowspan="">
            <asp:TextBox ID="txt_actividad" runat="server" Width="402px"></asp:TextBox></td>
        <td style="width: 24px; height: 16px; text-align: justify">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 780px; height: 16px; text-align: left" colspan="">
            Detalle Actividad</td>
        <td style="width: 113px; text-align: justify" colspan="3" rowspan="">
            <asp:TextBox ID="txt_detalle_actividad" runat="server" Width="402px"></asp:TextBox></td>
        <td style="width: 24px; height: 16px; text-align: justify">
        </td>
    </tr>
    <tr>
    
        <td class="tiny" style="width: 780px; text-align: left" colspan="">
        </td>
        <td style="width: 113px; text-align: justify" colspan="3" rowspan="">
                                            <asp:Label ID="lbl_Resultado" runat="server" CssClass="tiny"></asp:Label></td>
        <td style="width: 24px; text-align: justify">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 780px; text-align: left" colspan="">
        </td>
        <td style="width: 113px; text-align: justify" colspan="3" rowspan="">
            <asp:Button id="btn_Publicar" runat="server" Text="Crear Actividad" CssClass="Boton" OnClick="btn_Publicar_Click" Width="124px"></asp:Button>
            &nbsp; &nbsp; &nbsp;
            <asp:Button ID="btn_mantener_noticia" runat="server" CssClass="Boton" Text="Mostrar Actividades" CausesValidation="False" Width="124px" /></td>
        <td style="width: 24px; text-align: justify">
        </td>
    </tr>
    <tr>
        <td rowspan="1" style="width: 139px; text-align: left">
        </td>
        <td colspan="" style="text-align: justify; width: 780px;" rowspan="">
            &nbsp;</td>
        <td style="width: 113px; text-align: justify" colspan="3">
        <asp:GridView ID="Grid_GANTT" runat="server" AllowPaging="True" AlternatingRowStyle-CssClass="altrowstyle" CssClass="grid" PageSize="50"
            Width="132px" Height="32px" AutoGenerateColumns="False"  OnRowUpdating ="Grid_GANTT_RowUpdating">
            <Columns>
                <asp:CommandField ButtonType="Image" CancelImageUrl="~/Recursos/Images/Cancel.gif"
                    EditImageUrl="~/Recursos/Images/edit.PNG" HeaderText="Editar" ShowEditButton="True"
                    UpdateImageUrl="~/Recursos/Images/Update.gif" InsertImageUrl="~/Recursos/Images/edit.png">
                    <HeaderStyle CssClass="tiny" />
                </asp:CommandField>
                <asp:ButtonField AccessibleHeaderText="Eliminar" ButtonType="Image" CommandName="Eliminar"
                    HeaderText="Eliminar" ImageUrl="~/Recursos/Images/delete.PNG" Text="Bot&#243;n" >
                    <HeaderStyle CssClass="tiny"  />
                    <ControlStyle Font-Size="X-Large" />
                </asp:ButtonField>              
                <asp:TemplateField HeaderText="ID">
                  <ItemTemplate>
                        <asp:Label ID="lbl_ID" runat="server" CssClass="tiny" Text='<%# Eval("ID") %>' Width="50px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                    <EditItemTemplate>
                        <asp:TextBox ID="lbl_ID_edit" runat="server" CssClass="tiny" Text='<%# Eval("ID") %>'
                      Width="50px" Height="15" Font-Size="Small" ></asp:TextBox>
                    </EditItemTemplate>
                </asp:TemplateField>               
                 <asp:TemplateField HeaderText="Hito">
                    <ItemTemplate>
                        <asp:Label ID="lbl_Hito_Actividad" runat="server" CssClass="tiny" Text='<%# Eval("Hito_Actividad") %>' Width="30px" Height="15" Font-Size="Small"></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                       <ItemStyle HorizontalAlign="Center" Width="5%" />
                    <EditItemTemplate>
                    <asp:DropDownList ID="lbl_Hito_Actividad_edit" runat="server" Width="100px" Height="15" Font-Size="XX-Small">
                    </asp:DropDownList>                       
                    </EditItemTemplate>
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Actividad">
                    <ItemTemplate>
                <asp:Label ID="lbl_Actividad" runat="server" CssClass="tiny" Text='<%# Eval("Actividad") %>' Width="300px" Height="15" Font-Size="Small" style="text-align: Left;"></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" HorizontalAlign="Left" />
                       <ItemStyle HorizontalAlign="Left" Width="5%" />
                    <EditItemTemplate>
                        <asp:TextBox ID="lbl_Actividad_edit" runat="server"  Text='<%# Eval("Actividad") %>'
                             Width="100px" Height="15"  Font-Size="Small" ></asp:TextBox>
                    </EditItemTemplate>
                    <FooterStyle HorizontalAlign="Left" />
                </asp:TemplateField>
                 <asp:TemplateField HeaderText="Detalle Actividad">
                    <ItemTemplate>
                <asp:Label ID="lbl_Detalle_Actividad" runat="server" CssClass="tiny" Text='<%# Eval("Detalle_Actividad") %>' Width="350px" Height="15" Font-Size="Small"  style="text-align: Left;"></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                       <ItemStyle HorizontalAlign="Left" Width="5%" />
                    <EditItemTemplate>
                        <asp:TextBox ID="lbl_Detalle_Actividad_edit" runat="server"  Text='<%# Eval("Detalle_Actividad") %>'
                             Width="150px" Height="15"  Font-Size="Small" ></asp:TextBox>
                    </EditItemTemplate>
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
        <td rowspan="1">
        </td>
    </tr>
</tbody></table>

    <asp:Panel ID="pnl_mantener_noticias" runat="server" CssClass="tiny" GroupingText="">
        <asp:Label ID="lbl_mensaje_noticias" runat="server" CssClass="tiny" Width="32px"></asp:Label><br />
        &nbsp;</asp:Panel>
    
    &nbsp;&nbsp;<br />
    <br /> </asp:Panel> 

</asp:Content>