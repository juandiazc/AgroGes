Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad MENU
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class MENU_DAO

#Region "METODOS DE ACCESO A DATOS"

    ''' <summary>
    ''' Permite Listar un objeto del tipo MENU, según el perfil de usuario en la base de datos
    ''' </summary>
    ''' 
    Public Function ListarPorPerfil(ByVal tipoUsuario As Integer) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_MENU_LISTAR_POR_PERFIL")
            sp.AgregarParametro("PK_TIPO_USUARIO", tipoUsuario)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

    ''' <summary>
    ''' Permite llenar un objeto del tipo DataTable con el menu, según perfil
    ''' </summary>
    ''' 
    Public Function LlenarMenu(ByVal tipoUsuario As Integer) As DataTable
        Try
            Dim dtMenuItems As New DataTable
            dtMenuItems = ListarPorPerfil(tipoUsuario).Tables(0)
            Return dtMenuItems
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
#End Region

End Class

