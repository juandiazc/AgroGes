Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad TBL_Directorio_Informante
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class TBL_Directorio_Informante_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo TBL_Directorio_Informante en la base de datos
   ''' </summary>
   Public Sub Insertar(byval TBL as TBL_Directorio_Informante)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Informante_INSERTAR")
           sp.AgregarParametro("Año",TBL.propiedad_Año)
           sp.AgregarParametro("Mes",TBL.propiedad_Mes)
           sp.AgregarParametro("Rol",TBL.propiedad_Rol)
           sp.AgregarParametro("NomInformante",TBL.propiedad_NomInformante)
           sp.AgregarParametro("CargoInformante",TBL.propiedad_CargoInformante)
           sp.AgregarParametro("FonoInformante",TBL.propiedad_FonoInformante)
           sp.AgregarParametro("FaxInformante",TBL.propiedad_FaxInformante)
           sp.AgregarParametro("EmailInformante",TBL.propiedad_EmailInformante)
           sp.AgregarParametro("Observacion",TBL.propiedad_Observacion)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo TBL_Directorio_Informante en la base de datos
   ''' </summary>
   Public Sub Modificar(byval TBL as TBL_Directorio_Informante)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Informante_MODIFICAR")
           sp.AgregarParametro("Año",TBL.propiedad_Año)
           sp.AgregarParametro("Mes",TBL.propiedad_Mes)
           sp.AgregarParametro("Rol",TBL.propiedad_Rol)
           sp.AgregarParametro("NomInformante",TBL.propiedad_NomInformante)
           sp.AgregarParametro("CargoInformante",TBL.propiedad_CargoInformante)
           sp.AgregarParametro("FonoInformante",TBL.propiedad_FonoInformante)
           sp.AgregarParametro("FaxInformante",TBL.propiedad_FaxInformante)
           sp.AgregarParametro("EmailInformante",TBL.propiedad_EmailInformante)
           sp.AgregarParametro("Observacion",TBL.propiedad_Observacion)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub
    Public Sub Grabar(ByVal TBL As TBL_Directorio_Informante)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Informante_GRABAR")
            sp.AgregarParametro("Año", TBL.propiedad_Año)
            sp.AgregarParametro("Mes", TBL.propiedad_Mes)
            sp.AgregarParametro("Rol", TBL.propiedad_Rol)
            sp.AgregarParametro("NomInformante", TBL.propiedad_NomInformante)
            sp.AgregarParametro("CargoInformante", TBL.propiedad_CargoInformante)
            sp.AgregarParametro("FonoInformante", TBL.propiedad_FonoInformante)
            sp.AgregarParametro("FaxInformante", TBL.propiedad_FaxInformante)
            sp.AgregarParametro("EmailInformante", TBL.propiedad_EmailInformante)
            sp.AgregarParametro("Observacion", TBL.propiedad_Observacion)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub
   ''' <summary>
   ''' Permite eliminar un objeto del tipo TBL_Directorio_Informante en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval TBL as TBL_Directorio_Informante)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Informante_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo TBL_Directorio_Informante existenes en la base de datos
   ''' </summary>
    Public Function Listar(ByVal TBL As TBL_Directorio_Informante) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_TBL_Directorio_Informante_LISTAR")
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

