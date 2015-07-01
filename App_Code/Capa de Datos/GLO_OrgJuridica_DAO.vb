Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad GLO_OrgJuridica
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_OrgJuridica_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo GLO_OrgJuridica en la base de datos
   ''' </summary>
   Public Sub Insertar(byval GLO as GLO_OrgJuridica)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_OrgJuridica_INSERTAR")
           sp.AgregarParametro("Cod_OrgJuridica",GLO.propiedad_Cod_OrgJuridica)
           sp.AgregarParametro("Glosa_OrgJuridica",GLO.propiedad_Glosa_OrgJuridica)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo GLO_OrgJuridica en la base de datos
   ''' </summary>
   Public Sub Modificar(byval GLO as GLO_OrgJuridica)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_OrgJuridica_MODIFICAR")
           sp.AgregarParametro("Cod_OrgJuridica",GLO.propiedad_Cod_OrgJuridica)
           sp.AgregarParametro("Glosa_OrgJuridica",GLO.propiedad_Glosa_OrgJuridica)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite eliminar un objeto del tipo GLO_OrgJuridica en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GLO as GLO_OrgJuridica)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_OrgJuridica_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo GLO_OrgJuridica existenes en la base de datos
   ''' </summary>
    Public Function Listar() As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GLO_OrgJuridica_LISTAR")
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#END REGION

end class

