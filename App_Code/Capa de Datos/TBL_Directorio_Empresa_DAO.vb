Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad TBL_Directorio_Empresa
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class TBL_Directorio_Empresa_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo TBL_Directorio_Empresa en la base de datos
   ''' </summary>
   Public Sub Insertar(byval TBL as TBL_Directorio_Empresa)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Empresa_INSERTAR")
           sp.AgregarParametro("Año",TBL.propiedad_Año)
           sp.AgregarParametro("Mes",TBL.propiedad_Mes)
           sp.AgregarParametro("Rut",TBL.propiedad_Rut)
           sp.AgregarParametro("DvRut",TBL.propiedad_DvRut)
           sp.AgregarParametro("RazonSocial",TBL.propiedad_RazonSocial)
           sp.AgregarParametro("NombreFantasia",TBL.propiedad_NombreFantasia)
           sp.AgregarParametro("RepresentanteLegal",TBL.propiedad_RepresentanteLegal)
           sp.AgregarParametro("Rut_RLegal",TBL.propiedad_Rut_RLegal)
           sp.AgregarParametro("DvRut_RLegal",TBL.propiedad_DvRut_RLegal)
           sp.AgregarParametro("Direccion",TBL.propiedad_Direccion)
           sp.AgregarParametro("Ciudad",TBL.propiedad_Ciudad)
           sp.AgregarParametro("Region",TBL.propiedad_Region)
           sp.AgregarParametro("Provincia",TBL.propiedad_Provincia)
           sp.AgregarParametro("Comuna",TBL.propiedad_Comuna)
           sp.AgregarParametro("Fono",TBL.propiedad_Fono)
           sp.AgregarParametro("FonoCelular",TBL.propiedad_FonoCelular)
           sp.AgregarParametro("Fax",TBL.propiedad_Fax)
           sp.AgregarParametro("Email",TBL.propiedad_Email)
           sp.AgregarParametro("DireccionWeb",TBL.propiedad_DireccionWeb)
           sp.AgregarParametro("OrganizacionJuridica",TBL.propiedad_OrganizacionJuridica)
           sp.AgregarParametro("FormaPropiedad",TBL.propiedad_FormaPropiedad)
           sp.AgregarParametro("TipoActivEconomica",TBL.propiedad_TipoActivEconomica)
           sp.AgregarParametro("CodActivEconomica",TBL.propiedad_CodActivEconomica)
            sp.AgregarParametro("EstadoEmpresa", TBL.propiedad_EstadoEmpresa)

           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo TBL_Directorio_Empresa en la base de datos
   ''' </summary>
   Public Sub Modificar(byval TBL as TBL_Directorio_Empresa)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Empresa_MODIFICAR")
            sp.AgregarParametro("Año", TBL.propiedad_Año)
           sp.AgregarParametro("Mes",TBL.propiedad_Mes)
           sp.AgregarParametro("Rut",TBL.propiedad_Rut)
           sp.AgregarParametro("DvRut",TBL.propiedad_DvRut)
           sp.AgregarParametro("RazonSocial",TBL.propiedad_RazonSocial)
           sp.AgregarParametro("NombreFantasia",TBL.propiedad_NombreFantasia)
           sp.AgregarParametro("RepresentanteLegal",TBL.propiedad_RepresentanteLegal)
           sp.AgregarParametro("Rut_RLegal",TBL.propiedad_Rut_RLegal)
           sp.AgregarParametro("DvRut_RLegal",TBL.propiedad_DvRut_RLegal)
           sp.AgregarParametro("Direccion",TBL.propiedad_Direccion)
           sp.AgregarParametro("Ciudad",TBL.propiedad_Ciudad)
           sp.AgregarParametro("Region",TBL.propiedad_Region)
           sp.AgregarParametro("Provincia",TBL.propiedad_Provincia)
           sp.AgregarParametro("Comuna",TBL.propiedad_Comuna)
           sp.AgregarParametro("Fono",TBL.propiedad_Fono)
           sp.AgregarParametro("FonoCelular",TBL.propiedad_FonoCelular)
           sp.AgregarParametro("Fax",TBL.propiedad_Fax)
           sp.AgregarParametro("Email",TBL.propiedad_Email)
           sp.AgregarParametro("DireccionWeb",TBL.propiedad_DireccionWeb)
           sp.AgregarParametro("OrganizacionJuridica",TBL.propiedad_OrganizacionJuridica)
           sp.AgregarParametro("FormaPropiedad",TBL.propiedad_FormaPropiedad)
           sp.AgregarParametro("TipoActivEconomica",TBL.propiedad_TipoActivEconomica)
           sp.AgregarParametro("CodActivEconomica",TBL.propiedad_CodActivEconomica)
           sp.AgregarParametro("EstadoEmpresa",TBL.propiedad_EstadoEmpresa)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub
    Public Sub Grabar(ByVal TBL As TBL_Directorio_Empresa)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Empresa_GRABAR")
            sp.AgregarParametro("Año", TBL.propiedad_Año)
            sp.AgregarParametro("Mes", TBL.propiedad_Mes)
            sp.AgregarParametro("Rut", TBL.propiedad_Rut)
            sp.AgregarParametro("DvRut", TBL.propiedad_DvRut)
            sp.AgregarParametro("RazonSocial", TBL.propiedad_RazonSocial)
            sp.AgregarParametro("NombreFantasia", TBL.propiedad_NombreFantasia)
            sp.AgregarParametro("RepresentanteLegal", TBL.propiedad_RepresentanteLegal)
            sp.AgregarParametro("Rut_RLegal", TBL.propiedad_Rut_RLegal)
            sp.AgregarParametro("DvRut_RLegal", TBL.propiedad_DvRut_RLegal)
            sp.AgregarParametro("Direccion", TBL.propiedad_Direccion)
            sp.AgregarParametro("Ciudad", TBL.propiedad_Ciudad)
            sp.AgregarParametro("Region", TBL.propiedad_Region)
            sp.AgregarParametro("Provincia", TBL.propiedad_Provincia)
            sp.AgregarParametro("Comuna", TBL.propiedad_Comuna)
            sp.AgregarParametro("Fono", TBL.propiedad_Fono)
            sp.AgregarParametro("FonoCelular", TBL.propiedad_FonoCelular)
            sp.AgregarParametro("Fax", TBL.propiedad_Fax)
            sp.AgregarParametro("Email", TBL.propiedad_Email)
            sp.AgregarParametro("DireccionWeb", TBL.propiedad_DireccionWeb)
            sp.AgregarParametro("OrganizacionJuridica", TBL.propiedad_OrganizacionJuridica)
            sp.AgregarParametro("FormaPropiedad", TBL.propiedad_FormaPropiedad)
            sp.AgregarParametro("TipoActivEconomica", TBL.propiedad_TipoActivEconomica)
            sp.AgregarParametro("CodActivEconomica", TBL.propiedad_CodActivEconomica)
            sp.AgregarParametro("EstadoEmpresa", TBL.propiedad_EstadoEmpresa)
            sp.AgregarParametro("CIIU_R3", TBL.propiedad_CIIU_R3)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub
   ''' <summary>
   ''' Permite eliminar un objeto del tipo TBL_Directorio_Empresa en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval TBL as TBL_Directorio_Empresa)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Empresa_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo TBL_Directorio_Empresa existenes en la base de datos
   ''' </summary>
    Public Function Listar(ByVal TBL As TBL_Directorio_Empresa) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Empresa_LISTAR")
            sp.AgregarParametro("Año", TBL.propiedad_Año)
            sp.AgregarParametro("Mes", TBL.propiedad_Mes)
            sp.AgregarParametro("Rut", TBL.propiedad_Rut)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#END REGION

end class

