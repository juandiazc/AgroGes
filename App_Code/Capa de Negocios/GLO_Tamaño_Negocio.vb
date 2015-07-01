Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad GLO_Tama�o en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_Tama�o_Negocio

#REGION "METODOS DE LOGICA DE NEGOCIOS"

   ''' <summary>
   ''' Permite Modificar un objeto del tipoGLO_Tama�o_class en la aplicaci�n
   ''' </summary>
   Public Sub Insertar(byval GLO as GLO_Tama�o)
       Try
           Dim GLO_DAO as new GLO_Tama�o_DAO
           GLO_DAO.insertar(GLO)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Modificar un objeto del tipoGLO_Tama�o en la aplicaci�n
   ''' </summary>
   Public Sub Modificar(byval GLO as GLO_Tama�o)
       Try
           Dim GLO_DAO as new GLO_Tama�o_DAO
           GLO_DAO.Modificar(GLO)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Eliminar un objeto del tipoGLO_Tama�o en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GLO as GLO_Tama�o)
       Try
           Dim GLO_DAO as new GLO_Tama�o_DAO
           GLO_DAO.Eliminar(GLO)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Listar un objeto del tipoGLO_Tama�o en la base de datos
   ''' </summary>
   Public function Listar(byval GLO as GLO_Tama�o) as dataset
       Try
           Dim GLO_DAO as new GLO_Tama�o_DAO
           Return GLO_DAO.Listar()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End function

#END REGION

end class

