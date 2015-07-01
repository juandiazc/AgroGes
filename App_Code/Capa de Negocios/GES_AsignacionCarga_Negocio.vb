Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad GES_AsignacionCarga en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 03-02-2011
''' </history>
public class GES_AsignacionCarga_Negocio

#REGION "METODOS DE LOGICA DE NEGOCIOS"

   ''' <summary>
   ''' Permite Modificar un objeto del tipoGES_AsignacionCarga_class en la aplicación
   ''' </summary>
   Public Sub Insertar(byval GES as GES_AsignacionCarga)
       Try
           Dim GES_DAO as new GES_AsignacionCarga_DAO
           GES_DAO.insertar(GES)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Modificar un objeto del tipoGES_AsignacionCarga en la aplicación
   ''' </summary>
   Public Sub Modificar(byval GES as GES_AsignacionCarga)
       Try
           Dim GES_DAO as new GES_AsignacionCarga_DAO
           GES_DAO.Modificar(GES)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Eliminar un objeto del tipoGES_AsignacionCarga en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GES as GES_AsignacionCarga)
       Try
           Dim GES_DAO as new GES_AsignacionCarga_DAO
           GES_DAO.Eliminar(GES)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Listar un objeto del tipoGES_AsignacionCarga en la base de datos
   ''' </summary>
   Public function Listar(byval GES as GES_AsignacionCarga) as dataset
       Try
           Dim GES_DAO as new GES_AsignacionCarga_DAO
           Return GES_DAO.Listar()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End function
    Public Function AsignacionCarga(ByVal GES As GES_AsignacionCarga) As DataSet
        Try
            Dim GES_DAO As New GES_AsignacionCarga_DAO
            Return GES_DAO.BuscarRol(GES)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
#END REGION

end class

