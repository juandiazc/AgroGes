Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad CierreMesGes
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 10-05-2012
''' </history>
public class CierreMesGesDAL

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo CierreMesGes en la base de datos
   ''' </summary>
   Public Sub Insertar(byval cierreMesGesBOL as CierreMesGesBOL)
       Try
           Dim sp As New StoredProcedure_class("Pa_Cls_CierreMesGes_Insertar")
           sp.AgregarParametro("Año",cierreMesGesBOL.Año)
           sp.AgregarParametro("Mes",cierreMesGesBOL.Mes)
           sp.AgregarParametro("Fecha_Apertura",cierreMesGesBOL.Fecha_Apertura)
           sp.AgregarParametro("Usuario_Apertura",cierreMesGesBOL.Usuario_Apertura)
           sp.AgregarParametro("Fecha_Cierre",cierreMesGesBOL.Fecha_Cierre)
           sp.AgregarParametro("Usuario_Cierre",cierreMesGesBOL.Usuario_Cierre)
           sp.AgregarParametro("Mes_Cerrado",cierreMesGesBOL.Mes_Cerrado)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo CierreMesGes en la base de datos
   ''' </summary>
   Public Sub Modificar(byval cierreMesGesBOL as CierreMesGesBOL)
       Try
           Dim sp As New StoredProcedure_class("Pa_Cls_CierreMesGes_Modificar")
           sp.AgregarParametro("Año",cierreMesGesBOL.Año)
           sp.AgregarParametro("Mes",cierreMesGesBOL.Mes)
           sp.AgregarParametro("Fecha_Apertura",cierreMesGesBOL.Fecha_Apertura)
           sp.AgregarParametro("Usuario_Apertura",cierreMesGesBOL.Usuario_Apertura)
           sp.AgregarParametro("Fecha_Cierre",cierreMesGesBOL.Fecha_Cierre)
           sp.AgregarParametro("Usuario_Cierre",cierreMesGesBOL.Usuario_Cierre)
           sp.AgregarParametro("Mes_Cerrado",cierreMesGesBOL.Mes_Cerrado)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite eliminar un objeto del tipo CierreMesGes en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval cierreMesGesBOL as CierreMesGesBOL)
       Try
           Dim sp As New StoredProcedure_class("Pa_Cls_CierreMesGes_Eliminar")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo CierreMesGes existenes en la base de datos
   ''' </summary>
    Public Function Listar(ByVal cierreMesGesBOL As CierreMesGesBOL) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_GES_CierreMes_LISTAR")
            sp.AgregarParametro("Año", CierreMesGesBOL.Año)
            sp.AgregarParametro("Mes", CierreMesGesBOL.Mes)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#END REGION

end class

