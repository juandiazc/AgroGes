<%@ Control Language="VB" AutoEventWireup="false" CodeFile="MensajeProceso.ascx.vb" Inherits="MensajeProceso" %>
<div id="divProcesando" style="width: 100px; height: 100px; position: absolute;">
            <table border="0">
                <tr>
                    <td style="width: 26px; height: 36px">
                        <asp:Image ID="img_Procesando" runat="server" ImageUrl="~/Recursos/Images/ajax-loader.gif" /></td>
                    <td style="height: 36px; text-align: center;">
                        <strong><span style="font-size: 10pt; font-family: Arial">Procesando...</span></strong></td>
                </tr>
            </table>
</div>
