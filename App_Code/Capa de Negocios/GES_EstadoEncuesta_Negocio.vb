Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad GES_EstadoEncuesta en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 11-01-2011
''' </history>
public class GES_EstadoEncuesta_Negocio

#REGION "METODOS DE LOGICA DE NEGOCIOS"

   ''' <summary>
   ''' Permite Modificar un objeto del tipoGES_EstadoEncuesta_class en la aplicación
   ''' </summary>
   Public Sub Insertar(byval GES as GES_EstadoEncuesta)
       Try
           Dim GES_DAO as new GES_EstadoEncuesta_DAO
           GES_DAO.insertar(GES)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Modificar un objeto del tipoGES_EstadoEncuesta en la aplicación
   ''' </summary>
   Public Sub Modificar(byval GES as GES_EstadoEncuesta)
       Try
           Dim GES_DAO as new GES_EstadoEncuesta_DAO
           GES_DAO.Modificar(GES)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Eliminar un objeto del tipoGES_EstadoEncuesta en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GES as GES_EstadoEncuesta)
       Try
           Dim GES_DAO as new GES_EstadoEncuesta_DAO
           GES_DAO.Eliminar(GES)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Listar un objeto del tipoGES_EstadoEncuesta en la base de datos
   ''' </summary>
   Public function Listar(byval GES as GES_EstadoEncuesta) as dataset
       Try
            Dim GES_DAO As New GES_EstadoEncuesta_DAO
            Return GES_DAO.Listar(GES)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End function

#END REGION

end class

