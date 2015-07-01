Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad GLO_TipoEmpresa en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13-12-2010
''' </history>
public class GLO_TipoEmpresa_Negocio

#REGION "METODOS DE LOGICA DE NEGOCIOS"

   ''' <summary>
   ''' Permite Modificar un objeto del tipoGLO_TipoEmpresa_class en la aplicación
   ''' </summary>
   Public Sub Insertar(byval GLO as GLO_TipoEmpresa)
       Try
           Dim GLO_DAO as new GLO_TipoEmpresa_DAO
           GLO_DAO.insertar(GLO)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Modificar un objeto del tipoGLO_TipoEmpresa en la aplicación
   ''' </summary>
   Public Sub Modificar(byval GLO as GLO_TipoEmpresa)
       Try
           Dim GLO_DAO as new GLO_TipoEmpresa_DAO
           GLO_DAO.Modificar(GLO)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Eliminar un objeto del tipoGLO_TipoEmpresa en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GLO as GLO_TipoEmpresa)
       Try
           Dim GLO_DAO as new GLO_TipoEmpresa_DAO
           GLO_DAO.Eliminar(GLO)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Listar un objeto del tipoGLO_TipoEmpresa en la base de datos
   ''' </summary>
   Public function Listar(byval GLO as GLO_TipoEmpresa) as dataset
       Try
           Dim GLO_DAO as new GLO_TipoEmpresa_DAO
           Return GLO_DAO.Listar()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End function

#END REGION

end class

