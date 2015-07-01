Imports System.Data

''' <summary>
'''  Clase encargada del acceso a base de datos de la entidad USUARIO
''' </summary>
''' <remarks>
'''  Contiene los Metodos de acceso a datos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 13/05/2010
''' </history>
public class USUARIO_DAO

#REGION "METODOS DE ACCESO A DATOS"
   
    ''' <summary>
   ''' Permite insertar un objeto del tipo USUARIO en la base de datos
   ''' </summary>
   Public Sub Insertar(byval USU as USUARIO)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_USUARIO_INSERTAR")
            sp.AgregarParametro("PK_USUARIO", USU.propiedad_PK_USUARIO)
            sp.AgregarParametro("PK_TIPO_USUARIO", USU.propiedad_PK_TIPO_USUARIO)
            sp.AgregarParametro("USU_PASS", USU.propiedad_USU_PASS)
            sp.AgregarParametro("USU_NOMBRE", USU.propiedad_USU_NOMBRE)
            sp.AgregarParametro("USU_APE_PAT", USU.propiedad_USU_APE_PAT)
            sp.AgregarParametro("USU_EMAIL", USU.propiedad_USU_EMAIL)
            sp.AgregarParametro("PK_ESTADO_USUARIO", USU.propiedad_PK_ESTADO_USUARIO)
            sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
   End Sub

    ''' <summary>
   ''' Permite modificar un objeto del tipo USUARIO en la base de datos
   ''' </summary>
   Public Sub Modificar(byval USU as USUARIO)
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_USUARIO_MODIFICAR")
            sp.AgregarParametro("PK_USUARIO", USU.propiedad_PK_USUARIO)
            sp.AgregarParametro("PK_TIPO_USUARIO", USU.propiedad_PK_TIPO_USUARIO)
            sp.AgregarParametro("USU_PASS", USU.propiedad_USU_PASS)
            sp.AgregarParametro("USU_NOMBRE", USU.propiedad_USU_NOMBRE)
            sp.AgregarParametro("USU_APE_PAT", USU.propiedad_USU_APE_PAT)
            sp.AgregarParametro("USU_EMAIL", USU.propiedad_USU_EMAIL)
            sp.AgregarParametro("PK_ESTADO_USUARIO", USU.propiedad_PK_ESTADO_USUARIO)
            sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
    End Sub
    Public Function BuscarUsuario(ByVal USU As USUARIO) As DataSet
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_USUARIO_BUSCA_USUARIO")
            sp.AgregarParametro("PK_USUARIO", USU.propiedad_PK_USUARIO)
            Return sp.EjecutarProcedimiento
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Function

    ''' <summary>
    ''' Permite listar todos los objeto del tipo USUARIO existenes en la base de datos
    ''' </summary>
   Public Function Listar() As DataSet
       Try
           Dim sp As New StoredProcedure_class("PA_CLS_USUARIO_LISTAR")
           return sp.EjecutarProcedimiento()
       Catch ex As Exception
           Throw New Exception(ex.Message)
       End Try
    End Function

    ''' <summary>
    ''' Permite listar los objeto validos del tipo USUARIO existenes en la base de datos
    ''' </summary>
    Public Function UsuarioValido(ByVal USU As USUARIO) As Boolean
        Dim ds As New DataSet
        Dim dt As New DataTable
        ds = Listar()
        Try
            If ds Is Nothing Then
                MsgBox("No existen usuarios registrados", MsgBoxStyle.Information, "Informacion de Usuario")
            Else
                dt = ds.Tables(0)
                For i As Integer = 0 To dt.Rows.Count - 1
                    If USU.propiedad_PK_USUARIO.Equals(dt.Rows(i)(0).ToString()) And USU.propiedad_USU_PASS.Equals(dt.Rows(i)(2).ToString()) Then
                        Return True
                    End If
                Next
            End If
        Catch ex As Exception
            MsgBox("Error ocurrido al validar usuario", MsgBoxStyle.Information, "Informacion de Usuario")
            Return False
        End Try
        Return False
    End Function

    ''' <summary>
    ''' Permite listar los datos del objeto del tipo USUARIO existenes en la base de datos según el usuario
    ''' </summary>
    Public Sub ObtenerDatosUsuario(ByVal USU As USUARIO)
        Try
            Dim sp As New StoredProcedure_class("PA_CLS_USUARIO_BUSCA_USUARIO")
            sp.AgregarParametro("PK_USUARIO", USU.propiedad_PK_USUARIO)
            Dim dt As DataTable
            dt = sp.EjecutarProcedimiento().Tables(0)
            For Each dtItem As Data.DataRow In dt.Rows
                USU.propiedad_PK_USUARIO = dtItem("PK_USUARIO").ToString
                USU.propiedad_PK_ESTADO_USUARIO = dtItem("PK_ESTADO_USUARIO").ToString
                USU.propiedad_PK_TIPO_USUARIO = dtItem("PK_TIPO_USUARIO").ToString
                USU.propiedad_USU_NOMBRE = dtItem("USU_NOMBRE").ToString
                USU.propiedad_USU_APE_PAT = dtItem("USU_APE_PAT").ToString
                USU.propiedad_USU_APE_MAT = dtItem("USU_APE_MAT").ToString
            Next
        Catch ex As Exception
            Throw New Exception(ex.Message)
        End Try
    End Sub
#END REGION

end class

