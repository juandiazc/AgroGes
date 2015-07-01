Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad RPC en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class RPC_Negocio

#REGION "METODOS DE LOGICA DE NEGOCIOS"

   ''' <summary>
   ''' Permite Modificar un objeto del tipoRPC_class en la aplicación
   ''' </summary>
   Public Sub Insertar(byval RPC as RPC)
       Try
           Dim RPC_DAO as new RPC_DAO
           RPC_DAO.insertar(RPC)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Modificar un objeto del tipoRPC en la aplicación
   ''' </summary>
   Public Sub Modificar(byval RPC as RPC)
       Try
           Dim RPC_DAO as new RPC_DAO
           RPC_DAO.Modificar(RPC)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Eliminar un objeto del tipoRPC en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval RPC as RPC)
       Try
           Dim RPC_DAO as new RPC_DAO
           RPC_DAO.Eliminar(RPC)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Listar un objeto del tipoRPC en la base de datos
   ''' </summary>
    Public Function ListarRegion(ByVal RPC As RPC) As DataTable ' DataSet
        Try
            Dim RPC_DAO As New RPC_DAO
            Return RPC_DAO.ListarRegion()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarProvincia(ByVal RPC As RPC, ByVal region As Integer) As DataTable ' DataSet
        Try
            Dim RPC_DAO As New RPC_DAO
            Return RPC_DAO.ListarProvincia(region)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarComuna(ByVal RPC As RPC, ByVal provincia As Integer, Optional ByVal modo As Integer = 0) As DataTable ' DataSet
        Try
            Dim RPC_DAO As New RPC_DAO
            Return RPC_DAO.ListarComuna(provincia, modo)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
#END REGION

end class

