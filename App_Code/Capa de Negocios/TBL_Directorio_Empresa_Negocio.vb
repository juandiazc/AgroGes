Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad TBL_Directorio_Empresa en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class TBL_Directorio_Empresa_Negocio

#REGION "METODOS DE LOGICA DE NEGOCIOS"

   ''' <summary>
   ''' Permite Modificar un objeto del tipoTBL_Directorio_Empresa_class en la aplicación
   ''' </summary>
   Public Sub Insertar(byval TBL as TBL_Directorio_Empresa)
       Try
           Dim TBL_DAO as new TBL_Directorio_Empresa_DAO
           TBL_DAO.insertar(TBL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Modificar un objeto del tipoTBL_Directorio_Empresa en la aplicación
   ''' </summary>
   Public Sub Modificar(byval TBL as TBL_Directorio_Empresa)
       Try
           Dim TBL_DAO as new TBL_Directorio_Empresa_DAO
           TBL_DAO.Modificar(TBL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub
    Public Sub Grabar(ByVal TBL As TBL_Directorio_Empresa)
        Try
            Dim TBL_DAO As New TBL_Directorio_Empresa_DAO
            TBL_DAO.Grabar(TBL)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub
   ''' <summary>
   ''' Permite Eliminar un objeto del tipoTBL_Directorio_Empresa en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval TBL as TBL_Directorio_Empresa)
       Try
           Dim TBL_DAO as new TBL_Directorio_Empresa_DAO
           TBL_DAO.Eliminar(TBL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Listar un objeto del tipoTBL_Directorio_Empresa en la base de datos
   ''' </summary>
   Public function Listar(byval TBL as TBL_Directorio_Empresa) as dataset
       Try
           Dim TBL_DAO as new TBL_Directorio_Empresa_DAO
            Return TBL_DAO.Listar(TBL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End function

#END REGION

end class

