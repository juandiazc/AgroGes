Imports Microsoft.VisualBasic

Public Class PA_AgregaRolAlLevantamiento_Negocio
    Public Function PA_AgregaRolAlLevantamiento(ByVal agrega As PA_AgregaRolAlLevantamiento) As Integer
        Try
            Dim Consulta_DAO As New PA_AgregaRolAlLevantamiento_DAO
            Return Consulta_DAO.agrega_rol(agrega)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
End Class
