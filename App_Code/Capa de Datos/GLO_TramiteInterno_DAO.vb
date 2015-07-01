Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad GLO_TramiteInterno
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class GLO_TramiteInterno_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo GLO_TramiteInterno en la base de datos
   ''' </summary>
   Public Sub Insertar(byval GLO as GLO_TramiteInterno)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_TramiteInterno_INSERTAR")
           sp.AgregarParametro("TipoTramiteInterno",GLO.propiedad_TipoTramiteInterno)
           sp.AgregarParametro("GlosaTramiteInterno",GLO.propiedad_GlosaTramiteInterno)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo GLO_TramiteInterno en la base de datos
   ''' </summary>
   Public Sub Modificar(byval GLO as GLO_TramiteInterno)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_TramiteInterno_MODIFICAR")
           sp.AgregarParametro("TipoTramiteInterno",GLO.propiedad_TipoTramiteInterno)
           sp.AgregarParametro("GlosaTramiteInterno",GLO.propiedad_GlosaTramiteInterno)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite eliminar un objeto del tipo GLO_TramiteInterno en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GLO as GLO_TramiteInterno)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_TramiteInterno_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo GLO_TramiteInterno existenes en la base de datos
   ''' </summary>
   Public Function Listar() As DataSet
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GLO_TramiteInterno_LISTAR")
           return sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Function

#END REGION

end class

