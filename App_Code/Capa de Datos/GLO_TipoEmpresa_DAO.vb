Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad GLO_TipoEmpresa
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13-12-2010
''' </history>
public class GLO_TipoEmpresa_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo GLO_TipoEmpresa en la base de datos
   ''' </summary>
   Public Sub Insertar(byval GLO as GLO_TipoEmpresa)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_TipoEmpresa_INSERTAR")
           sp.AgregarParametro("CodigoTipoEmpresa",GLO.propiedad_CodigoTipoEmpresa)
           sp.AgregarParametro("Glo_TipoEmpresa",GLO.propiedad_Glo_TipoEmpresa)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo GLO_TipoEmpresa en la base de datos
   ''' </summary>
   Public Sub Modificar(byval GLO as GLO_TipoEmpresa)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_TipoEmpresa_MODIFICAR")
           sp.AgregarParametro("CodigoTipoEmpresa",GLO.propiedad_CodigoTipoEmpresa)
           sp.AgregarParametro("Glo_TipoEmpresa",GLO.propiedad_Glo_TipoEmpresa)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite eliminar un objeto del tipo GLO_TipoEmpresa en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GLO as GLO_TipoEmpresa)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_TipoEmpresa_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo GLO_TipoEmpresa existenes en la base de datos
   ''' </summary>
   Public Function Listar() As DataSet
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_TipoEmpresa_LISTAR")
           return sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Function

#END REGION

end class

