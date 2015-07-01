Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad TBL_Directorio_Establecimiento
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class TBL_Directorio_Establecimiento_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo TBL_Directorio_Establecimiento en la base de datos
   ''' </summary>
   Public Sub Insertar(byval TBL as TBL_Directorio_Establecimiento)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Establecimiento_INSERTAR")
           sp.AgregarParametro("Año",TBL.propiedad_Año)
           sp.AgregarParametro("Mes",TBL.propiedad_Mes)
           sp.AgregarParametro("Rol",TBL.propiedad_Rol)
           sp.AgregarParametro("DvRol",TBL.propiedad_DvRol)
           sp.AgregarParametro("NombreEstablecimiento",TBL.propiedad_NombreEstablecimiento)
           sp.AgregarParametro("DireccionEstablecimiento",TBL.propiedad_DireccionEstablecimiento)
           sp.AgregarParametro("Region",TBL.propiedad_Region)
           sp.AgregarParametro("Provincia",TBL.propiedad_Provincia)
           sp.AgregarParametro("Comuna",TBL.propiedad_Comuna)
           sp.AgregarParametro("Ciudad",TBL.propiedad_Ciudad)
           sp.AgregarParametro("Fono",TBL.propiedad_Fono)
           sp.AgregarParametro("Fono_Celular",TBL.propiedad_Fono_Celular)
           sp.AgregarParametro("Fax",TBL.propiedad_Fax)
           sp.AgregarParametro("DireccionWeb",TBL.propiedad_DireccionWeb)
           sp.AgregarParametro("Email",TBL.propiedad_Email)
           sp.AgregarParametro("CodActivEconomica",TBL.propiedad_CodActivEconomica)
            sp.AgregarParametro("EstadoEstablecimiento", TBL.propiedad_EstadoEstablecimiento)
            sp.AgregarParametro("TipoFaltanteJustificada", TBL.propiedad_TipoFaltanteJustificada)
           sp.AgregarParametro("Seleccion_Muestra",TBL.propiedad_Seleccion_Muestra)
           sp.AgregarParametro("TramiteInterno",TBL.propiedad_TramiteInterno)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo TBL_Directorio_Establecimiento en la base de datos
   ''' </summary>
   Public Sub Modificar(byval TBL as TBL_Directorio_Establecimiento)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Establecimiento_MODIFICAR")
           sp.AgregarParametro("Año",TBL.propiedad_Año)
           sp.AgregarParametro("Mes",TBL.propiedad_Mes)
           sp.AgregarParametro("Rol",TBL.propiedad_Rol)
           sp.AgregarParametro("DvRol",TBL.propiedad_DvRol)
           sp.AgregarParametro("NombreEstablecimiento",TBL.propiedad_NombreEstablecimiento)
           sp.AgregarParametro("DireccionEstablecimiento",TBL.propiedad_DireccionEstablecimiento)
           sp.AgregarParametro("Region",TBL.propiedad_Region)
           sp.AgregarParametro("Provincia",TBL.propiedad_Provincia)
           sp.AgregarParametro("Comuna",TBL.propiedad_Comuna)
           sp.AgregarParametro("Ciudad",TBL.propiedad_Ciudad)
           sp.AgregarParametro("Fono",TBL.propiedad_Fono)
           sp.AgregarParametro("Fono_Celular",TBL.propiedad_Fono_Celular)
           sp.AgregarParametro("Fax",TBL.propiedad_Fax)
           sp.AgregarParametro("DireccionWeb",TBL.propiedad_DireccionWeb)
           sp.AgregarParametro("Email",TBL.propiedad_Email)
           sp.AgregarParametro("CodActivEconomica",TBL.propiedad_CodActivEconomica)
            sp.AgregarParametro("EstadoEstablecimiento", TBL.propiedad_EstadoEstablecimiento)
            sp.AgregarParametro("TipoFaltanteJustificada", TBL.propiedad_TipoFaltanteJustificada)
           sp.AgregarParametro("Seleccion_Muestra",TBL.propiedad_Seleccion_Muestra)
           sp.AgregarParametro("TramiteInterno",TBL.propiedad_TramiteInterno)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub
    Public Sub Grabar(ByVal TBL As TBL_Directorio_Establecimiento)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Establecimiento_GRABAR")
            sp.AgregarParametro("Año", TBL.propiedad_Año)
            sp.AgregarParametro("Mes", TBL.propiedad_Mes)
            sp.AgregarParametro("Rol", TBL.propiedad_Rol)
            sp.AgregarParametro("DvRol", TBL.propiedad_DvRol)
            sp.AgregarParametro("Rut_Empresa", TBL.propiedad_Rut_Empresa)
            sp.AgregarParametro("NombreEstablecimiento", TBL.propiedad_NombreEstablecimiento)
            sp.AgregarParametro("DireccionEstablecimiento", TBL.propiedad_DireccionEstablecimiento)
            sp.AgregarParametro("Region", TBL.propiedad_Region)
            sp.AgregarParametro("Provincia", TBL.propiedad_Provincia)
            sp.AgregarParametro("Comuna", TBL.propiedad_Comuna)
            sp.AgregarParametro("Ciudad", TBL.propiedad_Ciudad)
            sp.AgregarParametro("Fono", TBL.propiedad_Fono)
            sp.AgregarParametro("Fono_Celular", TBL.propiedad_Fono_Celular)
            sp.AgregarParametro("Fax", TBL.propiedad_Fax)
            sp.AgregarParametro("DireccionWeb", TBL.propiedad_DireccionWeb)
            sp.AgregarParametro("Email", TBL.propiedad_Email)
            sp.AgregarParametro("CodActivEconomica", TBL.propiedad_CodActivEconomica)
            sp.AgregarParametro("EstadoEstablecimiento", TBL.propiedad_EstadoEstablecimiento)
            sp.AgregarParametro("TipoFaltanteJustificada", TBL.propiedad_TipoFaltanteJustificada)
            sp.AgregarParametro("Seleccion_Muestra", TBL.propiedad_Seleccion_Muestra)
            sp.AgregarParametro("TramiteInterno", TBL.propiedad_TramiteInterno)
            sp.AgregarParametro("CIIU_R3", TBL.propiedad_CIIU_R3)

            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub
   ''' <summary>
   ''' Permite eliminar un objeto del tipo TBL_Directorio_Establecimiento en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval TBL as TBL_Directorio_Establecimiento)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Establecimiento_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo TBL_Directorio_Establecimiento existenes en la base de datos
   ''' </summary>
    Public Function Listar(ByVal TBL As TBL_Directorio_Establecimiento, Optional ByVal modo As Integer = 0) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Establecimiento_LISTAR")
            sp.AgregarParametro("Año", TBL.propiedad_Año)
            sp.AgregarParametro("Mes", TBL.propiedad_Mes)
            sp.AgregarParametro("Rol", TBL.propiedad_Rol)
            sp.AgregarParametro("modo", modo)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#END REGION

end class

