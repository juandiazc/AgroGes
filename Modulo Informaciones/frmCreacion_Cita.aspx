<%@ Page Language="VB" MasterPageFile="~/MasterSitio.master" AutoEventWireup="false" CodeFile="frmCreacion_Cita.aspx.vb" Inherits="Modulo_Informaciones_frmGANTT1" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<head>
<link href="../Recursos/jquery-ui/timepicker/jquery.ui.timepicker.css" rel="stylesheet" type="text/css"  />
</head>
  <!--Hoja de estilos del calendario
  <link href="../Recursos/jquery-ui/css/jquery-ui.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" type="text/css" href="../Recursos/jquery-ui/timepicker/jquery.ui.timepicker.css" />
  -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
<script type="text/javascript" src="../Recursos/jquery-ui/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="../Recursos/jquery-ui/js/jquery-ui.js"></script>
<script type="text/javascript" src="../Recursos/jquery-ui/timepicker/jquery.ui.timepicker.js"></script>

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
 <script type="text/javascript"> 
    $(document).ready(function () {
    var prm = Sys.WebForms.PageRequestManager.getInstance();    
       prm.add_initializeRequest(InitializeRequest);
       prm.add_endRequest(EndRequest);
    $('.tiny3').timepicker({
        hourText: 'Horas',
    minuteText: 'Minutos'
    }
    );
    });
    function InitializeRequest(sender, args) {
       // make unbind to avoid memory leaks.
         $(".tiny3").unbind();
    }
    function EndRequest(sender, args) {
       // after update occur on UpdatePanel re-init the DatePicker   
       $(".tiny3").timepicker();
    }
</script>
     
<asp:Panel id="Pnl_Noticia" runat="server" CssClass="tiny" GroupingText="" HorizontalAlign="Center"><table style="WIDTH: 872px"><tbody>

         <tr>
        <td rowspan="10" style="width: 139px; text-align: left">
        </td>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
        </td>
        <td style="width: 337px; height: 16px; text-align: left">
            <asp:Label ID="lbl_asignacion_actividades" runat="server" Font-Bold="True" Font-Italic="False"
                Font-Overline="False" Font-Strikeout="False" Font-Underline="False" Style="text-align: center"
                Text="Módulo 5: Creación de Operación" Width="886px"></asp:Label></td>
             <td style="width: 24px; height: 16px; text-align: left">
             </td>
        <td rowspan="10">
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
            Operación</td>
        <td style="width: 337px; height: 16px; text-align: left">
            <asp:DropDownList ID="drop_operacion" runat="server" Width="430px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
            Sistema</td>
        <td style="width: 337px; height: 16px; text-align: left">
            <asp:DropDownList ID="drop_sistema" runat="server" Width="430px" AutoPostBack="True" Visible="False">
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
        <td class="tiny" style="width: 102px; height: 16px; text-align: left">
        </td>
        <td style="width: 337px; height: 16px; text-align: left">
            <asp:Button ID="btn_asignar" runat="server" CssClass="Boton" Text="Agregar operación de elementos seleccionados" Width="255px"  />
            <asp:Button ID="btn_editar" runat="server" CssClass="Boton" Text="Editar operación de elementos seleccionados" Width="255px" Visible="False"  />
            <asp:Button ID="btn_eliminar" runat="server" CssClass="Boton" Text="Eliminar operación de elementos seleccionados" Width="255px" Visible="False"  /></td>
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
              <asp:TemplateField HeaderText ="Agregar" ItemStyle-HorizontalAlign="Center" ItemStyle-Width="85px" Visible="True">
                 <ItemTemplate>
                    <asp:ImageButton ID="Agregar" runat="server" CommandName="Agregar" CommandArgument="<%# CType(Container,GridViewRow).RowIndex %>" ImageUrl="~/Recursos/Images/Button-Add-icon.PNG" />
                               <asp:Panel ID="pnl_contacto_1" runat="server" CssClass="tiny" Style="border-right: black 2px solid;
                                        padding-right: 70px; border-top: black 2px solid; display: none; padding-left: 70px;
                                        padding-bottom: 20px; border-left: black 2px solid; width: 350px; padding-top: 20px;
                                        border-bottom: black 2px solid; background-color: white" Width="416px">
                                        <span style="color: #ff0000">
                                            <table style="width: 300px">                                               
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        <asp:Label ID="lbl_operacion1" runat="server" Text='Nombre de <%# bind("Nombre_cita") %>' Width="140px"></asp:Label></td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_nombre_cita1"  runat="server" ></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Lugar</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_lugar1"  runat="server" ></asp:TextBox></td>
                                                </tr>    
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Fecha Realización</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_fecha_r1" CssClass="tiny2" runat="server" ></asp:TextBox></td>
                                                </tr>     
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Hora de Inicio</td>
                                                    <td style="width: 100px; text-align: justify">
                                                        <asp:TextBox ID="txt_horai1" CssClass="tiny3" runat="server" ></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Hora de Termino</td>
                                                    <td style="width: 100px; text-align: justify">
                                                        <asp:TextBox ID="txt_horat1" CssClass="tiny3" runat="server" ></asp:TextBox></td>
                                                </tr>                                                
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Comentarios</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="text_coment1"  runat="server" TextMode="MultiLine" ></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td style="width: 130px; text-align: right">
                                                        <asp:Button ID="btn_agregar" runat="server" CssClass="Boton" Text="Agregar Cita" Width="50px" CommandName="AgregarD" CommandArgument="<%# CType(Container,GridViewRow).RowIndex %>"  /></td>                                                    
                                                    <td style="width: 130px; text-align: right">
                                                        <asp:Button ID="btn_salir" runat="server" CssClass="Boton" Text="Salir" Width="50px" CommandName="Salir" CommandArgument="<%# CType(Container,GridViewRow).RowIndex %>"  /></td>                                                        
                                                </tr>
                                            </table>
                                        </span>
                                    </asp:Panel>
                                <cc1:modalpopupextender id="ModalPopupExtender2" runat="server" backgroundcssclass="modalBackground"
                                        popupcontrolid="pnl_contacto_1" targetcontrolid="Agregar"></cc1:modalpopupextender>
                                      
                 </ItemTemplate>             
            </asp:TemplateField>                         
              <asp:TemplateField HeaderText ="Editar" ItemStyle-HorizontalAlign="Center" ItemStyle-Width="85px" Visible="True">
                 <ItemTemplate>
                    <asp:ImageButton ID="Editar" runat="server" CommandName="Editar" CommandArgument="<%# CType(Container,GridViewRow).RowIndex %>" ImageUrl="~/Recursos/Images/page_edit.gif" />
                               <asp:Panel ID="pnl_contacto" runat="server" CssClass="tiny" Style="border-right: black 2px solid;
                                        padding-right: 70px; border-top: black 2px solid; display: none; padding-left: 70px;
                                        padding-bottom: 20px; border-left: black 2px solid; width: 350px; padding-top: 20px;
                                        border-bottom: black 2px solid; background-color: white" Width="416px">
                                        <span style="color: #ff0000">
                                            <table style="width: 300px">                                               
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        <asp:Label ID="lbl_operacion2" runat="server" Text="" Width="140px"></asp:Label></td>
                                                    <td style="width: 130px; text-align: justify">
                                                        
                                                        <asp:TextBox ID="txt_nombre_cita" runat="server" Text='<%# bind("Nombre_cita") %>'></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Lugar</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_lugar" runat="server" Text='<%# Eval("Lugar") %>'></asp:TextBox></td>
                                                </tr>    
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Fecha Realización</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_fecha_r" CssClass="tiny2" runat="server" Text='<%# Eval("Fecha_Realizacion") %>'></asp:TextBox></td>
                                                </tr>     
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Hora de Inicio</td>
                                                    <td style="width: 100px; text-align: justify">
                                                        <asp:TextBox ID="txt_horai" CssClass="tiny3" runat="server" Text='<%# Eval("Hora_Inicio") %>'></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Hora de Termino</td>
                                                    <td style="width: 100px; text-align: justify">
                                                        <asp:TextBox ID="txt_horat" CssClass="tiny3" runat="server" Text='<%# Eval("Hora_Termino") %>'></asp:TextBox></td>
                                                </tr>                                                
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Comentarios</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="text_coment" runat="server" TextMode="MultiLine" Text='<%# Eval("Comentarios") %>'></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td style="width: 130px; text-align: right">
                                                        <asp:Button ID="btn_editar" runat="server" CssClass="Boton" Text="Modificar Cita" Width="100px" CommandName="Modificar" CommandArgument="<%# CType(Container,GridViewRow).RowIndex %>"  /></td>                                                    
                                                    <td style="width: 130px; text-align: right">
                                                        <asp:Button ID="btn_salir1" runat="server" CssClass="Boton" Text="Salir" Width="50px" CommandName="Salir" CommandArgument="<%# CType(Container,GridViewRow).RowIndex %>"  /></td>
                                                </tr>
                                            </table>
                                        </span>
                                    </asp:Panel>
                                <cc1:modalpopupextender id="ModalPopupExtender1" runat="server" backgroundcssclass="modalBackground"
                                        popupcontrolid="pnl_contacto" targetcontrolid="Editar"></cc1:modalpopupextender>
                                      
                 </ItemTemplate>             
            </asp:TemplateField> 
            <asp:ButtonField AccessibleHeaderText="Eliminar" ButtonType="Image" CommandName="Eliminar"
                    HeaderText="Eliminar" ImageUrl="~/Recursos/Images/delete.PNG" Text="Bot&#243;n" >
                    <HeaderStyle CssClass="tiny"  />
                    <ControlStyle Font-Size="X-Large" />
            </asp:ButtonField>             
            <asp:TemplateField HeaderText="Sistema">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Sistema" runat="server" CssClass="tiny" Text='<%# Eval("Sistema") %>' Width="50px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:TemplateField>  
            <asp:TemplateField HeaderText="Producto">
                  <ItemTemplate>
                        <asp:Label ID="lbl_producto" runat="server" CssClass="tiny" Text='<%# Eval("Producto") %>' Width="50px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                </asp:TemplateField>
            <asp:TemplateField HeaderText="Año">
                  <ItemTemplate>
                        <asp:Label ID="lbl_año" runat="server" CssClass="tiny" Text='<%# Eval("Año") %>' Width="50px" Height="15" Font-Size="Small" ></asp:Label>
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
                 <asp:TemplateField HeaderText="Actividad1" Visible="false">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Actividades1" runat="server" CssClass="tiny" Text='<%# Eval("ID_Ac1") %>' Width="300px" Height="15" Font-Size="Small" style="text-align: Left;" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Left" Width="5%" />
                </asp:TemplateField>   
                <asp:TemplateField HeaderText="Actividad">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Actividades" runat="server" CssClass="tiny" Text='<%# Eval("ID_Ac") %>' Width="300px" Height="15" Font-Size="Small" style="text-align: Left;" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Left" Width="5%" />
                </asp:TemplateField>   
                <asp:TemplateField HeaderText="Detalle Actividad">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Detalle_Actividad" runat="server" CssClass="tiny" Text='<%# Eval("ID_Ac_Detalle") %>' Width="350px" Height="15" Font-Size="Small"  style="text-align: Left;" ></asp:Label>
                  </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Left" Width="5%" />
                </asp:TemplateField>
                <asp:TemplateField HeaderText="ID Operacion">
                  <ItemTemplate>
                        <asp:Label ID="lbl_ID_Operacion" runat="server" CssClass="tiny" Text='<%# Eval("ID_op") %>' Width="50px" Height="15" Font-Size="Small"  style="text-align: Left;" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Left" Width="5%" />
                </asp:TemplateField>                   
                <asp:TemplateField HeaderText="Operacion">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Operacion" runat="server" CssClass="tiny" Text='<%# Eval("Operacion1") %>' Width="180px" Height="15" Font-Size="Small"  style="text-align: Left;" ></asp:Label>
                  </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Left" Width="5%" />
                </asp:TemplateField>   
                <asp:TemplateField HeaderText="Nombre operación">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Nombre_operacion" runat="server" CssClass="tiny" Text='<%# Eval("Nombre_cita") %>' Width="180px" Height="15" Font-Size="Small"  style="text-align: Left;" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Left" Width="5%" />
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Fecha de operacion">
                  <ItemTemplate>
                        <asp:Label ID="lbl_fechao" runat="server" CssClass="tiny" Text='<%# Eval("Fecha_Realizacion") %>' Width="180px" Height="15" Font-Size="Small"  style="text-align: Left;" ></asp:Label>
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
        
                               <asp:Panel ID="pnl_contacto_2" runat="server" CssClass="tiny" Style="border-right: black 2px solid;
                                        padding-right: 70px; border-top: black 2px solid; display: none; padding-left: 70px;
                                        padding-bottom: 20px; border-left: black 2px solid; width: 350px; padding-top: 20px;
                                        border-bottom: black 2px solid; background-color: white" Width="416px">
                                        <span style="color: #ff0000">
                                            <table style="width: 300px">                                               
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        <asp:Label ID="lbl_operacion" runat="server" Text="" Width="140px"></asp:Label></td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_nombre_cita2"  runat="server" Text=''></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Lugar</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_lugar2"  runat="server" Text=''></asp:TextBox></td>
                                                </tr>    
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Fecha Realización</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_fecha_r2" CssClass="tiny2" runat="server" Text=''></asp:TextBox></td>
                                                </tr>     
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Hora de Inicio</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_horai2" CssClass="tiny2" runat="server" Text=''></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Hora de Termino</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_horat2" CssClass="tiny2" runat="server" Text=''></asp:TextBox></td>
                                                </tr>                                                
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Comentarios</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="text_coment2" runat="server" Text='' Height="52px" TextMode="MultiLine"></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td style="width: 130px; text-align: right">
                                                        <asp:Button ID="btn_agregar2" runat="server" CssClass="Boton" Text="Agregar Cita" Width="50px"   /></td>                                                    
                                                    <td style="width: 130px; text-align: right">
                                                        <asp:Button ID="btn_salir2" runat="server" CssClass="Boton" Text="Salir" Width="50px"   /></td>                                                        
                                                </tr>
                                            </table>
                                        </span>
                                    </asp:Panel>
                                <cc1:modalpopupextender id="ModalPopupExtender3" Enabled="True" runat="server" backgroundcssclass="modalBackground"
                                        popupcontrolid="pnl_contacto_2" targetcontrolid="btn_asignar"></cc1:modalpopupextender>        
 
                                             <asp:Panel ID="pnl_contacto_3" runat="server" CssClass="tiny" Style="border-right: black 2px solid;
                                        padding-right: 70px; border-top: black 2px solid; display: none; padding-left: 70px;
                                        padding-bottom: 20px; border-left: black 2px solid; width: 350px; padding-top: 20px;
                                        border-bottom: black 2px solid; background-color: white" Width="416px">
                                        <span style="color: #ff0000">
                                            <table style="width: 300px">                                               
                                                <tr>
                                                    <td style="width: 130px; text-align: right">
                                                        <asp:Button ID="btn_eliminar_1" runat="server" CssClass="Boton" Text="Eliminar" Width="50px"   /></td>                                                    
                                                    <td style="width: 130px; text-align: right">
                                                        <asp:Button ID="btn_salir_3" runat="server" CssClass="Boton" Text="Salir" Width="50px"   /></td>                                                        
                                                </tr>
                                            </table>
                                        </span>
                                    </asp:Panel>
                                <cc1:modalpopupextender id="ModalPopupExtender4" Enabled="True" runat="server" backgroundcssclass="modalBackground"
                                        popupcontrolid="pnl_contacto_3" targetcontrolid="btn_eliminar"></cc1:modalpopupextender>           
              <asp:Panel ID="pnl_contacto_4" runat="server" CssClass="tiny" Style="border-right: black 2px solid;
                                        padding-right: 70px; border-top: black 2px solid; display: none; padding-left: 70px;
                                        padding-bottom: 20px; border-left: black 2px solid; width: 350px; padding-top: 20px;
                                        border-bottom: black 2px solid; background-color: white" Width="416px">
                                        <span style="color: #ff0000">
                                            <table style="width: 300px">                                               
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        <asp:Label ID="lbl_operacion_3" runat="server" Text="" Width="140px"></asp:Label></td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="lbl_nombre_3"  runat="server" Text=''></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Lugar</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_lugar4"  runat="server" Text=''></asp:TextBox></td>
                                                </tr>    
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Fecha Realización</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_fecha4" CssClass="tiny2" runat="server" Text=''></asp:TextBox></td>
                                                </tr>     
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Hora de Inicio</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_hora_4" CssClass="tiny2" runat="server" Text=''></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Hora de Termino</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_horaf_4" CssClass="tiny2" runat="server" Text=''></asp:TextBox></td>
                                                </tr>                                                
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Comentarios</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_comen_4" runat="server" Text='' Height="52px" TextMode="MultiLine"></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td style="width: 130px; text-align: right">
                                                        <asp:Button ID="btn_editar_1" runat="server" CssClass="Boton" Text="Editar" Width="50px"   /></td>                                                    
                                                    <td style="width: 130px; text-align: right">
                                                        <asp:Button ID="btn_salir_4" runat="server" CssClass="Boton" Text="Salir" Width="50px"   /></td>                                                        
                                                </tr>
                                            </table>
                                        </span>
                                    </asp:Panel>
                                <cc1:modalpopupextender id="ModalPopupExtender5" Enabled="True" runat="server" backgroundcssclass="modalBackground"
                                        popupcontrolid="pnl_contacto_4" targetcontrolid="btn_editar"></cc1:modalpopupextender>           
    
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