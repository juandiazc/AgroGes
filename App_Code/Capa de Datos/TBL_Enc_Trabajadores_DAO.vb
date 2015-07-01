Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad TBL_Enc_Trabajadores
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 14-09-2010
''' </history>
public class TBL_Enc_Trabajadores_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo TBL_Enc_Trabajadores en la base de datos
   ''' </summary>
   Public Sub Insertar(byval TBL as TBL_Enc_Trabajadores)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Enc_Trabajadores_INSERTAR")
           sp.AgregarParametro("Año",TBL.propiedad_Año)
           sp.AgregarParametro("Mes",TBL.propiedad_Mes)
           sp.AgregarParametro("Rol",TBL.propiedad_Rol)
           sp.AgregarParametro("Tipo_trabajador",TBL.propiedad_Tipo_trabajador)
           sp.AgregarParametro("total",TBL.propiedad_total)
           sp.AgregarParametro("hombres",TBL.propiedad_hombres)
           sp.AgregarParametro("mujeres",TBL.propiedad_mujeres)
           sp.AgregarParametro("jornal",TBL.propiedad_jornal)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo TBL_Enc_Trabajadores en la base de datos
   ''' </summary>
   Public Sub Modificar(byval TBL as TBL_Enc_Trabajadores)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Enc_Trabajadores_MODIFICAR")
           sp.AgregarParametro("Año",TBL.propiedad_Año)
           sp.AgregarParametro("Mes",TBL.propiedad_Mes)
           sp.AgregarParametro("Rol",TBL.propiedad_Rol)
           sp.AgregarParametro("Tipo_trabajador",TBL.propiedad_Tipo_trabajador)
           sp.AgregarParametro("total",TBL.propiedad_total)
           sp.AgregarParametro("hombres",TBL.propiedad_hombres)
           sp.AgregarParametro("mujeres",TBL.propiedad_mujeres)
           sp.AgregarParametro("jornal",TBL.propiedad_jornal)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub
    Public Sub Grabar(ByVal TBL As TBL_Enc_Trabajadores)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_TBL_Enc_Trabajadores_GRABAR")
            sp.AgregarParametro("Año", TBL.propiedad_Año)
            sp.AgregarParametro("Mes", TBL.propiedad_Mes)
            sp.AgregarParametro("Rol", TBL.propiedad_Rol)
            sp.AgregarParametro("Tipo_trabajador", TBL.propiedad_Tipo_trabajador)
            sp.AgregarParametro("total", TBL.propiedad_total)
            sp.AgregarParametro("hombres", TBL.propiedad_hombres)
            sp.AgregarParametro("mujeres", TBL.propiedad_mujeres)
            sp.AgregarParametro("jornal", TBL.propiedad_jornal)
            sp.AgregarParametro("FechaHora", TBL.propiedad_fechahora)
            sp.AgregarParametro("Perfil", TBL.propiedad_perfil)
            sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub
   ''' <summary>
   ''' Permite eliminar un objeto del tipo TBL_Enc_Trabajadores en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval TBL as TBL_Enc_Trabajadores)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_TBL_Enc_Trabajadores_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo TBL_Enc_Trabajadores existenes en la base de datos
   ''' </summary>
    Public Function Listar(ByVal TBL As TBL_Enc_Trabajadores) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_TBL_Enc_Trabajadores_LISTAR")
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

