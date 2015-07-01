Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad GLO_EstadoEmpresa
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 11-08-2010
''' </history>
public class GLO_EstadoEmpresa_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo GLO_EstadoEmpresa en la base de datos
   ''' </summary>
   Public Sub Insertar(byval GLO as GLO_EstadoEmpresa)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_EstadoEmpresa_INSERTAR")
           sp.AgregarParametro("Cod_EstEmpresa",GLO.propiedad_Cod_EstEmpresa)
           sp.AgregarParametro("Glosa_EstEmpresa",GLO.propiedad_Glosa_EstEmpresa)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo GLO_EstadoEmpresa en la base de datos
   ''' </summary>
   Public Sub Modificar(byval GLO as GLO_EstadoEmpresa)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_EstadoEmpresa_MODIFICAR")
           sp.AgregarParametro("Cod_EstEmpresa",GLO.propiedad_Cod_EstEmpresa)
           sp.AgregarParametro("Glosa_EstEmpresa",GLO.propiedad_Glosa_EstEmpresa)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite eliminar un objeto del tipo GLO_EstadoEmpresa en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GLO as GLO_EstadoEmpresa)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_EstadoEmpresa_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo GLO_EstadoEmpresa existenes en la base de datos
   ''' </summary>
   Public Function Listar() As DataSet
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_EstadoEmpresa_LISTAR")
           return sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Function

#END REGION

end class

