Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad TIPO_USUARIO
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
public class TIPO_USUARIO_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
    ''' <summary>
    ''' Permite listar todos los objeto del tipo TIPO_USUARIO existenes en la base de datos
    ''' </summary>
   Public Function Listar() As DataSet
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TIPO_USUARIO_LISTAR")
           return sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Function

#END REGION

end class

