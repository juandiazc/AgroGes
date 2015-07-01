Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad TBL_Enc_BeneficioAves
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 14-09-2010
''' </history>
public class TBL_Enc_BeneficioAves_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo TBL_Enc_BeneficioAves en la base de datos
   ''' </summary>
   Public Sub Insertar(byval TBL as TBL_Enc_BeneficioAves)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Enc_BeneficioAves_INSERTAR")
           sp.AgregarParametro("Año",TBL.propiedad_Año)
           sp.AgregarParametro("Mes",TBL.propiedad_Mes)
           sp.AgregarParametro("Rol",TBL.propiedad_Rol)
           sp.AgregarParametro("Especies",TBL.propiedad_Especies)
           sp.AgregarParametro("num_aves_faenadas",TBL.propiedad_num_aves_faenadas)
           sp.AgregarParametro("total_peso_vivo",TBL.propiedad_total_peso_vivo)
           sp.AgregarParametro("peso_total_faenadas",TBL.propiedad_peso_total_faenadas)
           sp.AgregarParametro("naf_criadas_region",TBL.propiedad_naf_criadas_region)
            sp.AgregarParametro("naf_criadas_otra_region", TBL.propiedad_naf_criadas_otra_region)
            sp.AgregarParametro("naf_criadas_otra_region", TBL.propiedad_naf_criadas_otra_region)
            sp.AgregarParametro("FechaHora", TBL.propiedad_fechahora)
            sp.AgregarParametro("Perfil", TBL.propiedad_perfil)

           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo TBL_Enc_BeneficioAves en la base de datos
   ''' </summary>
   Public Sub Modificar(byval TBL as TBL_Enc_BeneficioAves)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Enc_BeneficioAves_MODIFICAR")
           sp.AgregarParametro("Año",TBL.propiedad_Año)
           sp.AgregarParametro("Mes",TBL.propiedad_Mes)
           sp.AgregarParametro("Rol",TBL.propiedad_Rol)
           sp.AgregarParametro("Especies",TBL.propiedad_Especies)
           sp.AgregarParametro("num_aves_faenadas",TBL.propiedad_num_aves_faenadas)
           sp.AgregarParametro("total_peso_vivo",TBL.propiedad_total_peso_vivo)
           sp.AgregarParametro("peso_total_faenadas",TBL.propiedad_peso_total_faenadas)
           sp.AgregarParametro("naf_criadas_region",TBL.propiedad_naf_criadas_region)
           sp.AgregarParametro("naf_criadas_otra_region",TBL.propiedad_naf_criadas_otra_region)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub
    Public Sub Grabar(ByVal TBL As TBL_Enc_BeneficioAves)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_TBL_Enc_BeneficioAves_GRABAR")
            sp.AgregarParametro("Año", TBL.propiedad_Año)
            sp.AgregarParametro("Mes", TBL.propiedad_Mes)
            sp.AgregarParametro("Rol", TBL.propiedad_Rol)
            sp.AgregarParametro("Especies", TBL.propiedad_Especies)
            sp.AgregarParametro("num_aves_faenadas", TBL.propiedad_num_aves_faenadas)
            sp.AgregarParametro("total_peso_vivo", TBL.propiedad_total_peso_vivo)
            sp.AgregarParametro("peso_total_faenadas", TBL.propiedad_peso_total_faenadas)
            sp.AgregarParametro("naf_criadas_region", TBL.propiedad_naf_criadas_region)
            sp.AgregarParametro("naf_criadas_otra_region", TBL.propiedad_naf_criadas_otra_region)
            sp.AgregarParametro("FechaHora", TBL.propiedad_fechahora)
            sp.AgregarParametro("Perfil", TBL.propiedad_perfil)

            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub
   ''' <summary>
   ''' Permite eliminar un objeto del tipo TBL_Enc_BeneficioAves en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval TBL as TBL_Enc_BeneficioAves)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Enc_BeneficioAves_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo TBL_Enc_BeneficioAves existenes en la base de datos
   ''' </summary>
    Public Function Listar(ByVal TBL As TBL_Enc_BeneficioAves) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_TBL_Enc_BeneficioAves_LISTAR")
            sp.AgregarParametro("Año", TBL.propiedad_Año)
            sp.AgregarParametro("Mes", TBL.propiedad_Mes)
            sp.AgregarParametro("Rol", TBL.propiedad_Rol)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#END REGION

end class

