Imports Microsoft.VisualBasic

Public Class PA_AbreMes_Negocio
    Public Function PA_AbreMes(ByVal MesCreado As PA_AbreMes) As Integer
        Try
            Dim Consulta_DAO As New PA_AbreMes_DAO
            Return Consulta_DAO.AbreMes(MesCreado)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
End Class
