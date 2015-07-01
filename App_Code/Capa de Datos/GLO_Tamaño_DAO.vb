Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad GLO_Tamaño
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_Tamaño_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo GLO_Tamaño en la base de datos
   ''' </summary>
   Public Sub Insertar(byval GLO as GLO_Tamaño)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_Tamaño_INSERTAR")
           sp.AgregarParametro("CodTamaño",GLO.propiedad_CodTamaño)
           sp.AgregarParametro("GLO_Tamaño",GLO.propiedad_GLO_Tamaño)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo GLO_Tamaño en la base de datos
   ''' </summary>
   Public Sub Modificar(byval GLO as GLO_Tamaño)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_Tamaño_MODIFICAR")
           sp.AgregarParametro("CodTamaño",GLO.propiedad_CodTamaño)
           sp.AgregarParametro("GLO_Tamaño",GLO.propiedad_GLO_Tamaño)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite eliminar un objeto del tipo GLO_Tamaño en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GLO as GLO_Tamaño)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_Tamaño_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo GLO_Tamaño existenes en la base de datos
   ''' </summary>
   Public Function Listar() As DataSet
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_Tamaño_LISTAR")
           return sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Function

#END REGION

end class

