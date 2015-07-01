Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad ErrorLog
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13-10-2011
''' </history>
public class ErrorLogDAL

#REGION "METODOS DE ACCESO A DATOS"
   
   ''' <summary>
   ''' Permite insertar un objeto del tipo ErrorLog en la base de datos
   ''' </summary>
   Public Sub Insertar(byval errorLogBOL as ErrorLogBOL)
       Try
           Dim sp As New StoredProcedure_class("Pa_Cls_ErrorLog_Insertar")
            sp.AgregarParametro("PkSistema", errorLogBOL.PkSistema)
           sp.AgregarParametro("PkUsuario",errorLogBOL.PkUsuario)
           sp.AgregarParametro("Tipo",errorLogBOL.Tipo)
           sp.AgregarParametro("Pagina",errorLogBOL.Pagina)
           sp.AgregarParametro("Mensaje",errorLogBOL.Mensaje)
           sp.AgregarParametro("Metodo",errorLogBOL.Metodo)
           sp.AgregarParametro("FechaLogError",errorLogBOL.FechaLogError)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite modificar un objeto del tipo ErrorLog en la base de datos
   ''' </summary>
   Public Sub Modificar(byval errorLogBOL as ErrorLogBOL)
       Try
           Dim sp As New StoredProcedure_class("Pa_Cls_ErrorLog_Modificar")
            sp.AgregarParametro("PkSistema", errorLogBOL.PkSistema)
           sp.AgregarParametro("PkUsuario",errorLogBOL.PkUsuario)
           sp.AgregarParametro("Tipo",errorLogBOL.Tipo)
           sp.AgregarParametro("Pagina",errorLogBOL.Pagina)
           sp.AgregarParametro("Mensaje",errorLogBOL.Mensaje)
           sp.AgregarParametro("Metodo",errorLogBOL.Metodo)
           sp.AgregarParametro("FechaLogError",errorLogBOL.FechaLogError)
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite eliminar un objeto del tipo ErrorLog en la base de datos
   ''' </summary>
   Public Sub Eliminar(byval errorLogBOL as ErrorLogBOL)
       Try
           Dim sp As New StoredProcedure_class("Pa_Cls_ErrorLog_Eliminar")
           sp.AgregarParametro("","")
           sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

   ''' <summary>
   ''' Permite listar todos los objeto del tipo ErrorLog existenes en la base de datos
   ''' </summary>
    Public Function Listar(ByVal errorLogBOL As ErrorLogBOL) As DataSet
        Try
            Dim sp As New StoredProcedure_class("Pa_Cls_ErrorLog_Listar")
            sp.AgregarParametro("PkSistema", errorLogBOL.PkSistema)
            sp.AgregarParametro("FechaLogError", errorLogBOL.FechaLogError)
            Return sp.EjecutarProcedimiento()
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

#END REGION

end class

