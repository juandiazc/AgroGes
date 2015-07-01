Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad GLO_ActivEconomica en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 16-08-2010
''' </history>
public class GLO_ActivEconomica_Negocio

#REGION "METODOS DE LOGICA DE NEGOCIOS"

   ''' <summary>
   ''' Permite Modificar un objeto del tipoGLO_ActivEconomica_class en la aplicación
   ''' </summary>
   Public Sub Insertar(byval GLO as GLO_ActivEconomica)
       Try
           Dim GLO_DAO as new GLO_ActivEconomica_DAO
           GLO_DAO.insertar(GLO)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Modificar un objeto del tipoGLO_ActivEconomica en la aplicación
   ''' </summary>
   Public Sub Modificar(byval GLO as GLO_ActivEconomica)
       Try
           Dim GLO_DAO as new GLO_ActivEconomica_DAO
           GLO_DAO.Modificar(GLO)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Eliminar un objeto del tipoGLO_ActivEconomica en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GLO as GLO_ActivEconomica)
       Try
           Dim GLO_DAO as new GLO_ActivEconomica_DAO
           GLO_DAO.Eliminar(GLO)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Listar un objeto del tipoGLO_ActivEconomica en la base de datos
   ''' </summary>
   Public function Listar(byval GLO as GLO_ActivEconomica) as dataset
       Try
           Dim GLO_DAO as new GLO_ActivEconomica_DAO
            Return GLO_DAO.Listar(GLO)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End function
    Public Function Listar_Est(ByVal GLO As GLO_ActivEconomica) As DataSet
        Try
            Dim GLO_DAO As New GLO_ActivEconomica_DAO
            Return GLO_DAO.Listar_Est(GLO)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
#END REGION

end class

