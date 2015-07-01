Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad MENU en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
public class MENU_Negocio

#REGION "METODOS DE LOGICA DE NEGOCIOS"

    ''' <summary>
    ''' Permite Listar un objeto del tipo MENU, según el perfil de usuario en la base de datos
    ''' </summary>
    ''' 
    Public Function ListarPorPerfil(ByVal USU As USUARIO) As DataSet
        Try
            Dim MEN_DAO As New MENU_DAO
            Return MEN_DAO.ListarPorPerfil(USU.propiedad_PK_TIPO_USUARIO)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

    ''' <summary>
    ''' Permite Listar un objeto del tipo MENU en la base de datos
    ''' </summary>
    ''' 
    Public Function LlenarMenu(ByVal tipoUsuario As Integer) As DataTable
        Try
            Dim MEN_DAO As New MENU_DAO
            Return MEN_DAO.LlenarMenu(tipoUsuario)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#End Region

End Class

