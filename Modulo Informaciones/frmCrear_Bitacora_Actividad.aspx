<%@ Page Language="VB" MasterPageFile="~/MasterSitio.master" AutoEventWireup="false" CodeFile="frmCrear_Bitacora_Actividad.aspx.vb" Inherits="Modulo_Crear_Bitacora_Actividad" %>

<%@ Register Assembly="System.Web.Extensions" Namespace="System.Web.UI" TagPrefix="asp" %>

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
<script type="text/javascript" src="../Recursos/jquery-ui/css/jquery-ui.css"></script>


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
        <td rowspan="19" style="width: 139px; text-align: left">
        </td>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
        </td>
        <td style="width: 310px; height: 16px; text-align: left">
            <asp:Label ID="lbl_asignacion_actividades" runat="server" Font-Bold="True" Font-Italic="False"
                Font-Overline="False" Font-Strikeout="False" Font-Underline="False" Style="text-align: center"
                Text="Módulo 4: Creación de Bitacora a Actividad" Width="250px"></asp:Label></td>
             <td style="width: 24px; height: 16px; text-align: left" colspan="3">
             </td>
        <td rowspan="19">
        </td>
    </tr>
    <tr>
    <td style="WIDTH: 110px; TEXT-ALIGN: left; height: 16px;" class="tiny" colspan="">
    </td>
        <td style="WIDTH: 310px; TEXT-ALIGN: left; height: 16px;"><asp:Label id="Lbl_autor" runat="server" CssClass="tiny" ForeColor="ActiveCaption" Width="50px"></asp:Label></td>
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
            Sistema</td>
        <td style="width: 310px; height: 16px; text-align: left">
            <asp:DropDownList ID="drop_sistema" runat="server" Width="250px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
            Producto</td>
        <td style="width: 310px; height: 16px; text-align: left"><asp:DropDownList ID="drop_producto" runat="server" Visible="False" Width="250px" AutoPostBack="True">
        </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
            Año</td>
        <td style="width: 310px; height: 16px; text-align: left">
            <asp:DropDownList ID="drop_año" runat="server" Visible="False" Width="250px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
            Hito</td>
        <td style="width: 310px; height: 16px; text-align: left">
            <asp:DropDownList ID="drop_hito" runat="server" Visible="False" Width="250px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
            Actividad</td>
        <td style="width: 310px; height: 16px; text-align: left">
            <asp:DropDownList ID="drop_actividad" runat="server" Visible="False" Width="250px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
            Detalle Actividad</td>
        <td style="width: 310px; height: 16px; text-align: left">
            <asp:DropDownList ID="drop_detalle_actividad" runat="server" Visible="False" Width="250px" AutoPostBack="True">
            </asp:DropDownList></td>
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left">
            Detalle de Bitacora</td>
        <td style="width: 310px; height: 16px; text-align: left">
            <asp:TextBox ID="txt_vitacora" runat="server" Width="250px"></asp:TextBox></td>            
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
            Fecha Solicitud</td>
        <td style="width: 310px; height: 16px; text-align: left">
            <asp:TextBox ID="txt_fechas" runat="server" CssClass="tiny2" Width="250px"></asp:TextBox></td>
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
            Fecha Inicio</td>
        <td style="width: 310px; height: 16px; text-align: left">
            <asp:TextBox ID="txt_fechai" runat="server" CssClass="tiny2" Width="250px"></asp:TextBox></td>
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
            Fecha Termino Esperada</td>
        <td style="width: 310px; height: 16px; text-align: left">
            <asp:TextBox ID="txt_fechaf" runat="server" CssClass="tiny2" Width="250px"></asp:TextBox></td>
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
            Usuario(s) de Apoyo</td>
        <td style="width: 310px; height: 16px; text-align: left"><asp:DropDownList ID="drop_usuario" runat="server" Width="80px" AutoPostBack="True">
        </asp:DropDownList>
            <asp:TextBox ID="txt_usuario" runat="server" Width="160px"></asp:TextBox></td>
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
            Comentarios</td>
        <td style="width: 310px; height: 16px; text-align: left">
            <asp:TextBox ID="txt_comentario" runat="server" TextMode="MultiLine"
                Width="250px"></asp:TextBox></td>
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
        </td>
        <td style="width: 310px; height: 16px; text-align: left">
        <asp:FileUpload ID="FileUpload1" runat="server" Height="16px" Width="250px" />
        </td>
        <td style="width: 24px; height: 16px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 110px; height: 16px; text-align: left" colspan="">
        </td>
        <td style="width: 155px; height: 16px; text-align: left" colspan="" rowspan="">
            <asp:Button ID="btn_crear_vitacora" runat="server" CssClass="Boton" Text="Crear Bitacora"
                Width="100px" />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>
        <td colspan="1" rowspan="1" style="width: 155px; height: 16px; text-align: left">
        </td>
        <td style="width: 24px; height: 14px; text-align: left" colspan="3">
        </td>
    </tr>
    <tr>
        <td colspan="10" style="height: 210px; text-align: center">

    <asp:Panel ID="pnl_mantener_noticias" runat="server" CssClass="tiny" GroupingText="">
        <asp:Label ID="lbl_mensaje_noticias" runat="server" CssClass="tiny" Width="32px"></asp:Label><br />
        <asp:GridView ID="Grid_GANTT" runat="server" AllowPaging="True" AlternatingRowStyle-CssClass="altrowstyle" CssClass="grid" PageSize="50"
            Width="132px" Height="32px" AutoGenerateColumns="False" EnableModelValidation="True">
            <Columns>
             
            <asp:TemplateField HeaderText ="Editar" ItemStyle-HorizontalAlign="Center" ItemStyle-Width="85px" Visible="False">
                 <ItemTemplate>
                    <asp:ImageButton ID="Editar1" runat="server" CommandName="Editar1" CommandArgument="<%# CType(Container,GridViewRow).RowIndex %>" ImageUrl="~/Recursos/Images/page_edit.gif" />
                               <asp:Panel ID="pnl_contacto" runat="server" CssClass="tiny" Style="border-right: black 2px solid;
                                        padding-right: 70px; border-top: black 2px solid; display: none; padding-left: 70px;
                                        padding-bottom: 20px; border-left: black 2px solid; width: 350px; padding-top: 20px;
                                        border-bottom: black 2px solid; background-color: white" Width="416px">
                                        <span style="color: #ff0000">
                                            <table style="width: 300px">                                               
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Fecha Inicio</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_fechaii_edit" CssClass="tiny2" runat="server" Text='<%# bind("Fechainicio") %>'></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td style="width: 130px; text-align: right">
                                                        <asp:Button ID="btn_enviar" runat="server" CssClass="Boton" Text="Enviar" Width="50px" CommandName="Enviar_Fechas" CommandArgument="<%# CType(Container,GridViewRow).RowIndex %>"  /></td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:Button ID="btn_Salir" runat="server" CausesValidation="False" CssClass="Boton"
                                                            Text="Salir" Width="50px" CommandName="Salir" CommandArgument="<%# CType(Container,GridViewRow).RowIndex %>" /></td>
                                                </tr>
                                            </table>
                                        </span>
                                    </asp:Panel>
                                <cc1:modalpopupextender id="ModalPopupExtender1" runat="server" backgroundcssclass="modalBackground"
                                        popupcontrolid="pnl_contacto" targetcontrolid="Editar1"></cc1:modalpopupextender>
                                      
                 </ItemTemplate>             
            </asp:TemplateField>    
             <asp:TemplateField HeaderText ="Editar" ItemStyle-HorizontalAlign="Center" ItemStyle-Width="85px" Visible="False">
                 <ItemTemplate>
                    <asp:ImageButton ID="Editar1_1" runat="server" CommandName="Editar1" CommandArgument="<%# CType(Container,GridViewRow).RowIndex %>" ImageUrl="~/Recursos/Images/page_edit.gif" />
                               <asp:Panel ID="pnl_contacto_1" runat="server" CssClass="tiny" Style="border-right: black 2px solid;
                                        padding-right: 70px; border-top: black 2px solid; display: none; padding-left: 70px;
                                        padding-bottom: 20px; border-left: black 2px solid; width: 350px; padding-top: 20px;
                                        border-bottom: black 2px solid; background-color: white" Width="416px">
                                        <span style="color: #ff0000">
                                            <table style="width: 300px">                                               
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Fecha Inicio</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="txt_fechaii_edit_1" CssClass="tiny2" runat="server" Text='<%# bind("Fechainicio") %>'></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td class="tiny" style="width: 130px; text-align: justify">
                                                        Fecha Termino</td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:TextBox ID="text_fechatt_edit" CssClass="tiny2" runat="server" Text='<%# bind("Fechatermino") %>'></asp:TextBox></td>
                                                </tr>
                                                <tr>
                                                    <td style="width: 130px; text-align: right">
                                                        <asp:Button ID="btn_enviar_1" runat="server" CssClass="Boton" Text="Enviar" Width="50px" CommandName="Enviar_Fechas_1" CommandArgument="<%# CType(Container,GridViewRow).RowIndex %>"  /></td>
                                                    <td style="width: 130px; text-align: justify">
                                                        <asp:Button ID="btn_Salir_1" runat="server" CausesValidation="False" CssClass="Boton"
                                                            Text="Salir" Width="50px" CommandName="Salir" CommandArgument="<%# CType(Container,GridViewRow).RowIndex %>" /></td>
                                                </tr>
                                            </table>
                                        </span>
                                    </asp:Panel>
                                <cc1:modalpopupextender id="ModalPopupExtender2" runat="server" backgroundcssclass="modalBackground"
                                        popupcontrolid="pnl_contacto_1" targetcontrolid="Editar1_1"></cc1:modalpopupextender>
                                      
                 </ItemTemplate>             
            </asp:TemplateField>                
            <asp:ButtonField AccessibleHeaderText="Eliminar" ButtonType="Image" CommandName="Eliminar"
                    HeaderText="Eliminar" ImageUrl="~/Recursos/Images/delete.PNG" Text="Bot&#243;n" >
                    <HeaderStyle CssClass="tiny"  />
                    <ControlStyle Font-Size="X-Large" />
            </asp:ButtonField> 
            <asp:ButtonField AccessibleHeaderText="Cerrar_actividad" ButtonType="Image" CommandName="CActividad"
                    HeaderText="Cerrar Actividad" ImageUrl="~/Recursos/Images/delete.PNG" Text="Bot&#243;n" >
                    <HeaderStyle CssClass="tiny"  />
                    <ControlStyle Font-Size="X-Large" />
            </asp:ButtonField>             
            <asp:TemplateField HeaderText="Sistema">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Sistema" runat="server" CssClass="tiny" Text='<%# Eval("Sistema") %>' Width="40px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                    <EditItemTemplate>
                   <asp:TextBox ID="lbl_Sistema_edit" runat="server" CssClass="tiny" Text='<%# Eval("Sistema") %>' Width="40px" Height="15" Font-Size="Small"  ></asp:TextBox>
                    </EditItemTemplate>                    
                </asp:TemplateField>  
               <asp:TemplateField HeaderText="Producto">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Producto" runat="server" CssClass="tiny" Text='<%# Eval("Producto") %>' Width="40px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                    <EditItemTemplate>
                   <asp:TextBox ID="lbl_Producto_edit" runat="server" CssClass="tiny" Text='<%# Eval("Producto") %>' Width="40px" Height="15" Font-Size="Small"  ></asp:TextBox>
                    </EditItemTemplate>                       
                </asp:TemplateField> 
                <asp:TemplateField HeaderText="A&#241;o">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Año" runat="server" CssClass="tiny" Text='<%# Eval("Año") %>' Width="40px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                    <EditItemTemplate>
                   <asp:TextBox ID="lbl_Año_edit" runat="server" CssClass="tiny" Text='<%# Eval("Año") %>' Width="40px" Height="15" Font-Size="Small"  ></asp:TextBox>
                    </EditItemTemplate>                       
                </asp:TemplateField> 
               <asp:TemplateField HeaderText="Hito">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Hito" runat="server" CssClass="tiny" Text='<%# Eval("Hito") %>' Width="40px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                    <EditItemTemplate>
                   <asp:TextBox ID="lbl_Hito_edit" runat="server" CssClass="tiny" Text='<%# Eval("Hito") %>' Width="40px" Height="15" Font-Size="Small"  ></asp:TextBox>
                    </EditItemTemplate>                       
                </asp:TemplateField> 
                <asp:TemplateField HeaderText="ID Actividad" Visible="False">
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
                    <EditItemTemplate>
                   <asp:TextBox ID="lbl_Detalle_Actividad_edit" runat="server" CssClass="tiny" Text='<%# Eval("Detalle_Actividad") %>' Width="350px" Height="15" Font-Size="Small"  ></asp:TextBox>
                    </EditItemTemplate>                       
                </asp:TemplateField>      
                <asp:TemplateField HeaderText="Detalle Bitacora">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Detalle_Bitacora" runat="server" CssClass="tiny" Text='<%# Eval("ID_Vitacora") %>' style="text-align: Left;" Width="150px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />                   
                </asp:TemplateField>    
                 <asp:TemplateField HeaderText="Archivo Bitacora">
                  <ItemTemplate>
                         <asp:HyperLink ID="HyperLink1" runat="server" CssClass="tiny" ForeColor="#009933"
                            NavigateUrl='<%#Eval("Url")%>' Width="100px">Ver Archivo</asp:HyperLink>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                    <EditItemTemplate>
                       <asp:HyperLink ID="HyperLink1_edit" runat="server" CssClass="tiny" ForeColor="#009933"
                            NavigateUrl='<%#Eval("Url")%>' Width="100px">Ver Archivo</asp:HyperLink>
                    </EditItemTemplate>                       
                </asp:TemplateField>  
                <asp:TemplateField HeaderText="Fecha Solcitud">
                  <ItemTemplate>
                        <asp:Label ID="lbl_fechas" runat="server" CssClass="tiny" Text='<%# Eval("FechaSolicitud") %>' Width="100px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                    <EditItemTemplate>
                    <asp:TextBox ID="lbl_fechas_edit" runat="server" CssClass="tiny2" Text='<%# Eval("FechaSolicitud") %>' Width="100px" Height="15" Font-Size="Small"  ></asp:TextBox>
                    </EditItemTemplate>                      
                </asp:TemplateField>   
                  <asp:TemplateField HeaderText="Fecha Inicio">
                  <ItemTemplate>
                        <asp:Label ID="lbl_fechai" runat="server" CssClass="tiny" Text='<%# bind("Fechainicio") %>' Width="100px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                    <EditItemTemplate>
                    <asp:TextBox ID="lbl_fechai_edit" runat="server" CssClass="tiny2" Text='<%# bind("Fechainicio") %>' Width="100px" Height="15" Font-Size="Small" ></asp:TextBox>
                    </EditItemTemplate>                               
                </asp:TemplateField>  
                <asp:TemplateField HeaderText="Fecha Termino">
                  <ItemTemplate>
                     <asp:Label ID="lbl_fechat" runat="server" CssClass="tiny" Text='<%# bind("Fechatermino") %>' Width="100px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                    <EditItemTemplate>
                    <asp:TextBox ID="lbl_fechat_edit" runat="server" CssClass="tiny2" Text='<%# bind("Fechatermino") %>' Width="100px" Height="15" Font-Size="Small" ></asp:TextBox>
                    </EditItemTemplate>                        
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Usuario de Apoyo">
                  <ItemTemplate>
                        <asp:Label ID="lbl_usuario" runat="server" CssClass="tiny" Text='<%# Eval("Usuario") %>' Width="150px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />                    
                    <EditItemTemplate>
                    <asp:TextBox ID="lbl_usuario_edit" runat="server" CssClass="tiny" Text='<%# Eval("Usuario") %>' Width="100px" Height="15" Font-Size="Small"  ></asp:TextBox>
                    </EditItemTemplate>                        
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Comentario">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Comentario" runat="server" CssClass="tiny" Text='<%# Eval("Comentarios") %>' Width="250px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                    <EditItemTemplate>
                    <asp:TextBox ID="lbl_Comentario_edit" runat="server" CssClass="tiny" Text='<%# Eval("Comentarios") %>' Width="250px" Height="15" Font-Size="Small"  ></asp:TextBox>
                    </EditItemTemplate>                      
                </asp:TemplateField>
                <asp:TemplateField HeaderText="Estado">
                  <ItemTemplate>
                        <asp:Label ID="lbl_Estado" runat="server" CssClass="tiny" Text='<%# Eval("Estatus") %>' Width="80px" Height="15" Font-Size="Small" ></asp:Label>
                    </ItemTemplate>
                    <HeaderStyle CssClass="tiny" />
                    <ItemStyle HorizontalAlign="Center" Width="5%" />
                    <EditItemTemplate>
                    <asp:TextBox ID="lbl_Estado_edit" runat="server" CssClass="tiny" Text='<%# Eval("Estatus") %>' Width="80px" Height="15" Font-Size="Small"  ></asp:TextBox>
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
    </asp:Panel>
        </td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
    <tr>
        <td class="tiny" style="width: 23px; height: 16px; text-align: left">
        </td>
        <td style="width: 200px; height: 16px; text-align: left">
        </td>
        <td style="width: 200px; height: 16px; text-align: left">
            </td>
        <td style="width: 24px; height: 16px; text-align: left">
        </td>
    </tr>
</tbody></table>
    <br />

    
    <br /> </asp:Panel> 

</asp:Content>