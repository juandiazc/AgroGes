Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad GES_AsignacionCarga
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 03-02-2011
''' </history>
public class GES_AsignacionCarga_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo GES_AsignacionCarga en la base de datos
   ''' </summary>
   Public Sub Insertar(byval GES as GES_AsignacionCarga)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GES_AsignacionCarga_INSERTAR")
           sp.AgregarParametro("Año",GES.propiedad_Año)
           sp.AgregarParametro("Mes",GES.propiedad_Mes)
           sp.AgregarParametro("Rol",GES.propiedad_Rol)
           sp.AgregarParametro("Analista",GES.propiedad_Analista)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub
    Public Function BuscarRol(ByVal GES As GES_AsignacionCarga) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_BuscaRolAsignado")
            sp.AgregarParametro("Año", GES.propiedad_Año)
            sp.AgregarParametro("Mes", GES.propiedad_Mes)
            sp.AgregarParametro("Rol", GES.propiedad_Rol)
            sp.AgregarParametro("Analista", GES.propiedad_Analista)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
   ''' <summary>
   ''' Permite modificar un objeto del tipo GES_AsignacionCarga en la base de datos
   ''' </summary>
   Public Sub Modificar(byval GES as GES_AsignacionCarga)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GES_AsignacionCarga_MODIFICAR")
           sp.AgregarParametro("Año",GES.propiedad_Año)
           sp.AgregarParametro("Mes",GES.propiedad_Mes)
           sp.AgregarParametro("Rol",GES.propiedad_Rol)
           sp.AgregarParametro("Analista",GES.propiedad_Analista)
            sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite eliminar un objeto del tipo GES_AsignacionCarga en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GES as GES_AsignacionCarga)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GES_AsignacionCarga_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo GES_AsignacionCarga existenes en la base de datos
   ''' </summary>
   Public Function Listar() As DataSet
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GES_AsignacionCarga_LISTAR")
           return sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Function

#END REGION

end class

