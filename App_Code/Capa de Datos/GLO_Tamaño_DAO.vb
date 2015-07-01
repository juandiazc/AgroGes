Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad GLO_Tama�o
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_Tama�o_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo GLO_Tama�o en la base de datos
   ''' </summary>
   Public Sub Insertar(byval GLO as GLO_Tama�o)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_Tama�o_INSERTAR")
           sp.AgregarParametro("CodTama�o",GLO.propiedad_CodTama�o)
           sp.AgregarParametro("GLO_Tama�o",GLO.propiedad_GLO_Tama�o)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo GLO_Tama�o en la base de datos
   ''' </summary>
   Public Sub Modificar(byval GLO as GLO_Tama�o)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_Tama�o_MODIFICAR")
           sp.AgregarParametro("CodTama�o",GLO.propiedad_CodTama�o)
           sp.AgregarParametro("GLO_Tama�o",GLO.propiedad_GLO_Tama�o)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite eliminar un objeto del tipo GLO_Tama�o en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GLO as GLO_Tama�o)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_Tama�o_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo GLO_Tama�o existenes en la base de datos
   ''' </summary>
   Public Function Listar() As DataSet
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_Tama�o_LISTAR")
           return sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Function

#END REGION

end class

