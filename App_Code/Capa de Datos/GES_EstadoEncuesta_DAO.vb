Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad GES_EstadoEncuesta
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 11-01-2011
''' </history>
public class GES_EstadoEncuesta_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo GES_EstadoEncuesta en la base de datos
   ''' </summary>
   Public Sub Insertar(byval GES as GES_EstadoEncuesta)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GES_EstadoEncuesta_INSERTAR")
           sp.AgregarParametro("Año",GES.propiedad_Año)
           sp.AgregarParametro("Mes",GES.propiedad_Mes)
           sp.AgregarParametro("Rol",GES.propiedad_Rol)
           sp.AgregarParametro("EstadoActual",GES.propiedad_EstadoActual)
           sp.AgregarParametro("PerfilIngreso",GES.propiedad_PerfilIngreso)
           sp.AgregarParametro("FechaIngreso",GES.propiedad_FechaIngreso)
           sp.AgregarParametro("PerfilUltimaModificacion",GES.propiedad_PerfilUltimaModificacion)
           sp.AgregarParametro("FechaUltimaModificacion",GES.propiedad_FechaUltimaModificacion)
           sp.AgregarParametro("NumeroValidaciones",GES.propiedad_NumeroValidaciones)
           sp.AgregarParametro("CertificadoRecepcion",GES.propiedad_CertificadoRecepcion)
           sp.AgregarParametro("FechaCertificadoRecepcion",GES.propiedad_FechaCertificadoRecepcion)
           sp.AgregarParametro("Cod_MedioRecepcion",GES.propiedad_Cod_MedioRecepcion)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo GES_EstadoEncuesta en la base de datos
   ''' </summary>
   Public Sub Modificar(byval GES as GES_EstadoEncuesta)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GES_EstadoEncuesta_MODIFICAR")
           sp.AgregarParametro("Año",GES.propiedad_Año)
           sp.AgregarParametro("Mes",GES.propiedad_Mes)
           sp.AgregarParametro("Rol",GES.propiedad_Rol)
            sp.AgregarParametro("EstadoActual", GES.propiedad_EstadoActual)
            sp.AgregarParametro("EstadoAnterior", GES.propiedad_EstadoAnterior)
            sp.AgregarParametro("PerfilIngreso", GES.propiedad_PerfilIngreso)
            sp.AgregarParametro("FechaUltimaModificacion", GES.propiedad_FechaUltimaModificacion)
           
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite eliminar un objeto del tipo GES_EstadoEncuesta en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval GES as GES_EstadoEncuesta)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_GES_EstadoEncuesta_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo GES_EstadoEncuesta existenes en la base de datos
   ''' </summary>
    Public Function Listar(ByVal GES As GES_EstadoEncuesta) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GES_EstadoEncuesta_LISTAR")
            sp.AgregarParametro("Año", GES.propiedad_Año)
            sp.AgregarParametro("Mes", GES.propiedad_Mes)
            sp.AgregarParametro("Rol", GES.propiedad_Rol)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#END REGION

end class

