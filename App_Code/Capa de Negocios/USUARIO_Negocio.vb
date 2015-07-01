Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad USUARIO en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
Public Class USUARIO_Negocio

#Region "METODOS DE LOGICA DE NEGOCIOS"

    ''' <summary>
    ''' Permite Insertar un objeto del tipo USUARIO en la aplicación
    ''' </summary>
    Public Sub Insertar(ByVal USU As USUARIO)
        Try
            Dim USU_DAO As New USUARIO_DAO
            USU_DAO.Insertar(USU)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite Modificar un objeto del tipo USUARIO en la aplicación
    ''' </summary>
    Public Sub Modificar(ByVal USU As USUARIO)
        Try
            Dim USU_DAO As New USUARIO_DAO
            USU_DAO.Modificar(USU)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    ''' <summary>
    ''' Permite Listar un objeto del tipo USUARIO en la base de datos
    ''' </summary>
    Public Function Listar(ByVal USU As USUARIO) As DataSet
        Try
            Dim USU_DAO As New USUARIO_DAO
            Return USU_DAO.Listar()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

    ''' <summary>
    ''' Permite listar los objeto validos del tipo USUARIO existenes en la base de datos
    ''' </summary>
    Public Function UsuarioValido(ByVal USU As USUARIO) As Boolean
        Try
            Dim USU_DAO As New USUARIO_DAO
            Dim Ds As New Data.DataSet
            Return USU_DAO.UsuarioValido(USU)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

    ''' <summary>
    ''' Permite listar los datos del objeto del tipo USUARIO existenes en la base de datos según el usuario
    ''' </summary>
    Public Sub ObtenerDatosUsuario(ByVal USU As USUARIO)
        Try
            Dim USU_DAO As New USUARIO_DAO
            Dim Ds As New Data.DataSet
            USU_DAO.ObtenerDatosUsuario(USU)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub
    Public Function BuscarUsuario(ByVal USU As USUARIO) As DataSet
        Try
            Dim USU_DAO As New USUARIO_DAO
            Return USU_DAO.BuscarUsuario(USU)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
#End Region

End Class

