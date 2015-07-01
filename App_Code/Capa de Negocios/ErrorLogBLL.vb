Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad ErrorLog en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13-10-2011
''' </history>
public class ErrorLogBLL

#REGION "METODOS DE LOGICA DE NEGOCIOS"

   ''' <summary>
   ''' Permite Modificar un objeto del tipo ErrorLog en la aplicación
   ''' </summary>
   Public Sub Insertar(byval errorLogBOL as ErrorLogBOL)
       Try
           Dim errorLogDAL as new ErrorLogDAL
           errorLogDAL.insertar(errorLogBOL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Modificar un objeto del tipo ErrorLog en la aplicación
   ''' </summary>
   Public Sub Modificar(byval errorLogBOL as ErrorLogBOL)
       Try
           Dim errorLogDAL as new ErrorLogDAL
           errorLogDAL.Modificar(errorLogBOL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Eliminar un objeto del tipoErrorLog en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval errorLogBOL as ErrorLogBOL)
       Try
           Dim errorLogDAL as new ErrorLogDAL
           errorLogDAL.Eliminar(errorLogBOL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Listar un objeto del tipoErrorLog en la base de datos
   ''' </summary>
   Public function Listar(byval errorLogBOL as ErrorLogBOL) as dataset
       Try
           Dim errorLogDAL as new ErrorLogDAL
            Return errorLogDAL.Listar(errorLogBOL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End function

#END REGION

end class

