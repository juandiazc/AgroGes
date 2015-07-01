Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad RPC
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-08-2010
''' </history>
public class RPC_DAO

#REGION "METODOS DE ACCESO A DATOS"
    Dim sql As String
   ''' <summary>
   ''' Permite insertar un objeto del tipo RPC en la base de datos
   ''' </summary>
   Public Sub Insertar(byval RPC as RPC)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_RPC_INSERTAR")
           sp.AgregarParametro("region",RPC.propiedad_region)
           sp.AgregarParametro("provincia",RPC.propiedad_provincia)
           sp.AgregarParametro("comuna",RPC.propiedad_comuna)
           sp.AgregarParametro("nom_rpc",RPC.propiedad_nom_rpc)
           sp.AgregarParametro("region2",RPC.propiedad_region2)
           sp.AgregarParametro("provincia2",RPC.propiedad_provincia2)
           sp.AgregarParametro("comuna2",RPC.propiedad_comuna2)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo RPC en la base de datos
   ''' </summary>
   Public Sub Modificar(byval RPC as RPC)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_RPC_MODIFICAR")
           sp.AgregarParametro("region",RPC.propiedad_region)
           sp.AgregarParametro("provincia",RPC.propiedad_provincia)
           sp.AgregarParametro("comuna",RPC.propiedad_comuna)
           sp.AgregarParametro("nom_rpc",RPC.propiedad_nom_rpc)
           sp.AgregarParametro("region2",RPC.propiedad_region2)
           sp.AgregarParametro("provincia2",RPC.propiedad_provincia2)
           sp.AgregarParametro("comuna2",RPC.propiedad_comuna2)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite eliminar un objeto del tipo RPC en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval RPC as RPC)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_RPC_ELIMINAR")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo RPC existenes en la base de datos
   ''' </summary>
   Public Function Listar() As DataSet
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_RPC_LISTAR")
           return sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Function
    Public Function ListarRegion() As DataTable 'DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_RPC_LISTAR_REGION")
            Return sp.EjecutarProcedimiento_dt()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarProvincia(ByVal region As Integer) As DataTable 'DataSet
        Try

    
            Dim sp As New StoredProcedure_class("PA_CLS_RPC_LISTAR_PROVINCIA")
            sp.AgregarParametro("region", region)

            Return sp.EjecutarProcedimiento_dt()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function
    Public Function ListarComuna(ByVal provincia As Integer, Optional ByVal modo As Integer = 0) As DataTable 'DataSet
        Try
            'Dim ejecuta_sql As New ejecuta_consulta
            'If modo = 0 Then
            '    sql = "SELECT   0 AS comuna,'---Seleccione una Comuna------' AS nom_rpc"
            '    sql = sql + " UNION"
            '    sql = sql + " SELECT     comuna, nom_rpc"
            '    sql = sql + " FROM dbo.RPC"
            '    sql = sql + " WHERE  (region <> 0) AND (comuna % 1000 <> 0) AND (comuna % 100 <> 0) AND (provincia =" & provincia & ")"
            '    sql = sql + " ORDER BY comuna"
            'Else
            '    sql = "SELECT   0 AS comuna,'---Seleccione una Comuna------' AS nom_rpc"
            '    sql = sql + " UNION"
            '    sql = sql + " SELECT     comuna, nom_rpc"
            '    sql = sql + " FROM dbo.RPC"
            '    sql = sql + " WHERE  (region <> 0) AND (comuna % 1000 <> 0) AND (comuna % 100 <> 0)"
            '    sql = sql + " ORDER BY comuna"
            'End If
            'ListarComuna = ejecuta_sql.trae_tabla_adapter(sql)

            Dim sp As New StoredProcedure_class("PA_CLS_RPC_LISTAR_COMUNA")
            sp.AgregarParametro("provincia", provincia)
            sp.AgregarParametro("modo", modo)
            Return sp.EjecutarProcedimiento_dt()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function



#END REGION

end class

