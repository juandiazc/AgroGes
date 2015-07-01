Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad CierreMesGes en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-05-2012
''' </history>
public class CierreMesGesBLL

#REGION "METODOS DE LOGICA DE NEGOCIOS"

   ''' <summary>
   ''' Permite Modificar un objeto del tipo CierreMesGes en la aplicación
   ''' </summary>
   Public Sub Insertar(byval cierreMesGesBOL as CierreMesGesBOL)
       Try
           Dim cierreMesGesDAL as new CierreMesGesDAL
           cierreMesGesDAL.insertar(cierreMesGesBOL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Modificar un objeto del tipo CierreMesGes en la aplicación
   ''' </summary>
   Public Sub Modificar(byval cierreMesGesBOL as CierreMesGesBOL)
       Try
           Dim cierreMesGesDAL as new CierreMesGesDAL
           cierreMesGesDAL.Modificar(cierreMesGesBOL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Eliminar un objeto del tipoCierreMesGes en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval cierreMesGesBOL as CierreMesGesBOL)
       Try
           Dim cierreMesGesDAL as new CierreMesGesDAL
           cierreMesGesDAL.Eliminar(cierreMesGesBOL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Listar un objeto del tipoCierreMesGes en la base de datos
   ''' </summary>
   Public function Listar(byval cierreMesGesBOL as CierreMesGesBOL) as dataset
       Try
           Dim cierreMesGesDAL as new CierreMesGesDAL
            Return cierreMesGesDAL.Listar(cierreMesGesBOL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End function

#END REGION

end class

