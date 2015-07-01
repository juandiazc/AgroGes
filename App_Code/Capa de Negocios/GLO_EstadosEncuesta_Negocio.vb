Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad GLO_EstadosEncuesta en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 14-03-2011
''' </history>
public class GLO_EstadosEncuesta_Negocio

#REGION "METODOS DE LOGICA DE NEGOCIOS"

   ''' <summary>
   ''' Permite Modificar un objeto del tipoGLO_EstadosEncuesta_class en la aplicación
   ''' </summary>
   Public Sub Insertar(byval GLO as GLO_EstadosEncuesta)
       Try
           Dim GLO_DAO as new GLO_EstadosEncuesta_DAO
           GLO_DAO.insertar(GLO)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Modificar un objeto del tipoGLO_EstadosEncuesta en la aplicación
   ''' </summary>
   Public Sub Modificar(byval GLO as GLO_EstadosEncuesta)
       Try
           Dim GLO_DAO as new GLO_EstadosEncuesta_DAO
           GLO_DAO.Modificar(GLO)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Eliminar un objeto del tipoGLO_EstadosEncuesta en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GLO as GLO_EstadosEncuesta)
       Try
           Dim GLO_DAO as new GLO_EstadosEncuesta_DAO
           GLO_DAO.Eliminar(GLO)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

  
    Public Function Listar() As DataSet
        Try
            Dim GLO_DAO As New GLO_EstadosEncuesta_DAO
            Return GLO_DAO.Listar()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
#END REGION

end class

