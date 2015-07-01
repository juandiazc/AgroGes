Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad TBL_Encuesta en la capa de Negocios
''' </summary>
''' <remarks>
'''  Contiene metodos asociados a la capa de Negocios
''' </remarks>
''' <history>
'''  Fecha de Creacion: 14-09-2010
''' </history>
public class TBL_Encuesta_Negocio

#REGION "METODOS DE LOGICA DE NEGOCIOS"

   ''' <summary>
   ''' Permite Modificar un objeto del tipoTBL_Encuesta_class en la aplicación
   ''' </summary>
   Public Sub Insertar(byval TBL as TBL_Encuesta)
       Try
           Dim TBL_DAO as new TBL_Encuesta_DAO
           TBL_DAO.insertar(TBL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Modificar un objeto del tipoTBL_Encuesta en la aplicación
   ''' </summary>
   Public Sub Modificar(byval TBL as TBL_Encuesta)
       Try
           Dim TBL_DAO as new TBL_Encuesta_DAO
           TBL_DAO.Modificar(TBL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub
    Public Sub Grabar(ByVal TBL As TBL_Encuesta)
        Try
            Dim TBL_DAO As New TBL_Encuesta_DAO
            TBL_DAO.Grabar(TBL)
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub

    Public Function GeneraID()
        Try
            Dim TBL_DAO As New TBL_Encuesta_DAO
            Return TBL_DAO.GeneraID()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    
   ''' <summary>
   ''' Permite Eliminar un objeto del tipoTBL_Encuesta en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval TBL as TBL_Encuesta)
       Try
           Dim TBL_DAO as new TBL_Encuesta_DAO
           TBL_DAO.Eliminar(TBL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite Listar un objeto del tipoTBL_Encuesta en la base de datos
   ''' </summary>
   Public function Listar(byval TBL as TBL_Encuesta) as dataset
       Try
           Dim TBL_DAO as new TBL_Encuesta_DAO
            Return TBL_DAO.Listar(TBL)
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End function

#END REGION

end class

