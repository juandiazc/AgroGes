Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad GLO_ActivEconomica
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 16-08-2010
''' </history>
public class GLO_ActivEconomica_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo GLO_ActivEconomica en la base de datos
   ''' </summary>
   Public Sub Insertar(byval GLO as GLO_ActivEconomica)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_ActivEconomica_INSERTAR")
           sp.AgregarParametro("TipoActividadEconomica",GLO.propiedad_TipoActividadEconomica)
           sp.AgregarParametro("CodActividad",GLO.propiedad_CodActividad)
           sp.AgregarParametro("GlosaActividad",GLO.propiedad_GlosaActividad)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo GLO_ActivEconomica en la base de datos
   ''' </summary>
   Public Sub Modificar(byval GLO as GLO_ActivEconomica)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_ActivEconomica_MODIFICAR")
           sp.AgregarParametro("TipoActividadEconomica",GLO.propiedad_TipoActividadEconomica)
           sp.AgregarParametro("CodActividad",GLO.propiedad_CodActividad)
           sp.AgregarParametro("GlosaActividad",GLO.propiedad_GlosaActividad)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite eliminar un objeto del tipo GLO_ActivEconomica en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GLO as GLO_ActivEconomica)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_ActivEconomica_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo GLO_ActivEconomica existenes en la base de datos
   ''' </summary>
    Public Function Listar(ByVal GLO As GLO_ActivEconomica) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GLO_ActivEconomica_LISTAR")
            sp.AgregarParametro("TipoActividadEconomica", GLO.propiedad_TipoActividadEconomica)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function Listar_Est(ByVal GLO As GLO_ActivEconomica) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GLO_ActivEconomica_Est_LISTAR")
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
#END REGION

end class

