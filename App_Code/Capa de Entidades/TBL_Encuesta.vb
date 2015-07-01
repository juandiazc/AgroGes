Imports System.Data

''' <summary>
'''  Clase encargada del manejo de la entidad del modelo de datos TBL_Encuesta
''' </summary>
''' <remarks>
'''  Contiene atributos, propiedades, constructores y metodos
''' </remarks>
''' <history>
'''  Fecha de Creacion: 14-09-2010
''' </history>
public class TBL_Encuesta

#Region "ATRIBUTOS DE LA CLASE"


    Private PerfilIngreso As String
    Private FechaIngreso As DateTime
    Private id As String
    Private nombre_informante As String
    Private sexo As String
    Private rut As String
    Private dv_rut As String
    Private nombre_explotacion As String
    Private cargo As String
    Private profesion As String
    Private direccion As String
    Private comuna As String
    Private region As String
    Private email As String
    Private email_i As String
    Private fono As String
    Private fono_i As String
    Private fono2 As String
    Private fono2_i As String
    Private trigo_blanco_12_1_p As String
    Private trigo_blanco_12_1_s As String
    Private trigo_blanco_12_1_i As String
    Private trigo_candeal_12_2_p As String
    Private trigo_candeal_12_2_s As String
    Private trigo_candeal_12_2_i As String
    Private avena_12_3_p As String
    Private avena_12_3_s As String
    Private avena_12_3_i As String
    Private cebada_12_4_p As String
    Private cebada_12_4_s As String
    Private cebada_12_4_i As String
    Private maiz_consumo_12_5_p As String
    Private maiz_consumo_12_5_s As String
    Private maiz_consumo_12_5_i As String
    Private maiz_semilla_12_6_p As String
    Private maiz_semilla_12_6_s As String
    Private maiz_semilla_12_6_i As String
    Private arroz_12_7_p As String
    Private arroz_12_7_s As String
    Private arroz_12_7_i As String
    Private sup_reg_13_1_1 As String
    Private sup_reg_13_1_2 As String
    Private sup_reg_13_1_3 As String
    Private sup_reg_13_1_4 As String
    Private sup_reg_13_1_5 As String
    Private sup_reg_13_2_1 As String
    Private sup_reg_13_2_2 As String
    Private sup_reg_13_2_3 As String
    Private sup_reg_13_2_4 As String
    Private sup_reg_13_2_5 As String
    Private trigo_blanco_14 As String
    Private trigo_blanco_14_1 As String
    Private trigo_blanco_14_2 As String
    Private trigo_blanco_14_3 As String
    Private trigo_blanco_14_4 As String
    Private trigo_blanco_14_5 As String
    Private trigo_blanco_15 As String
    Private trigo_blanco_15_1 As String
    Private trigo_blanco_15_2 As String
    Private trigo_blanco_15_3 As String
    Private trigo_blanco_16 As String
    Private trigo_blanco_16_1 As String
    Private trigo_blanco_16_2 As String
    Private trigo_blanco_16_3 As String
    Private trigo_blanco_16_4 As String
    Private trigo_blanco_16_5 As String
    Private trigo_blanco_16_6 As String
    Private trigo_blanco_16_7 As String
    Private trigo_blanco_16_8 As String
    Private trigo_blanco_16_9 As String
    Private trigo_blanco_17 As String
    Private trigo_blanco_17_1 As String
    Private trigo_blanco_17_2 As String
    Private trigo_blanco_17_3 As String
    Private trigo_blanco_17_4 As String
    Private trigo_blanco_17_5 As String
    Private trigo_blanco_18 As String
    Private trigo_blanco_18_1 As String
    Private trigo_blanco_18_2 As String
    Private trigo_blanco_18_3 As String
    Private trigo_blanco_18_4 As String
    Private trigo_blanco_18_5 As String
    Private trigo_candeal_14 As String
    Private trigo_candeal_14_1 As String
    Private trigo_candeal_14_2 As String
    Private trigo_candeal_14_3 As String
    Private trigo_candeal_14_4 As String
    Private trigo_candeal_14_5 As String
    Private trigo_candeal_15 As String
    Private trigo_candeal_15_1 As String
    Private trigo_candeal_15_2 As String
    Private trigo_candeal_15_3 As String
    Private trigo_candeal_16 As String
    Private trigo_candeal_16_1 As String
    Private trigo_candeal_16_2 As String
    Private trigo_candeal_16_3 As String
    Private trigo_candeal_16_4 As String
    Private trigo_candeal_16_5 As String
    Private trigo_candeal_16_6 As String
    Private trigo_candeal_16_7 As String
    Private trigo_candeal_16_8 As String
    Private trigo_candeal_16_9 As String
    Private trigo_candeal_17 As String
    Private trigo_candeal_17_1 As String
    Private trigo_candeal_17_2 As String
    Private trigo_candeal_17_3 As String
    Private trigo_candeal_17_4 As String
    Private trigo_candeal_17_5 As String
    Private trigo_candeal_18 As String
    Private trigo_candeal_18_1 As String
    Private trigo_candeal_18_2 As String
    Private trigo_candeal_18_3 As String
    Private trigo_candeal_18_4 As String
    Private trigo_candeal_18_5 As String
    Private avena_14 As String
    Private avena_14_1 As String
    Private avena_14_2 As String
    Private avena_14_3 As String
    Private avena_14_4 As String
    Private avena_14_5 As String
    Private avena_15 As String
    Private avena_15_1 As String
    Private avena_15_2 As String
    Private avena_15_3 As String
    Private avena_16 As String
    Private avena_16_1 As String
    Private avena_16_2 As String
    Private avena_16_3 As String
    Private avena_16_4 As String
    Private avena_16_5 As String
    Private avena_16_6 As String
    Private avena_16_7 As String
    Private avena_16_8 As String
    Private avena_16_9 As String
    Private avena_17 As String
    Private avena_17_1 As String
    Private avena_17_2 As String
    Private avena_17_3 As String
    Private avena_17_4 As String
    Private avena_17_5 As String
    Private avena_18 As String
    Private avena_18_1 As String
    Private avena_18_2 As String
    Private avena_18_3 As String
    Private avena_18_4 As String
    Private avena_18_5 As String
    Private cebada_14 As String
    Private cebada_14_1 As String
    Private cebada_14_2 As String
    Private cebada_14_3 As String
    Private cebada_14_4 As String
    Private cebada_14_5 As String
    Private cebada_15 As String
    Private cebada_15_1 As String
    Private cebada_15_2 As String
    Private cebada_15_3 As String
    Private cebada_16 As String
    Private cebada_16_1 As String
    Private cebada_16_2 As String
    Private cebada_16_3 As String
    Private cebada_16_4 As String
    Private cebada_16_5 As String
    Private cebada_16_6 As String
    Private cebada_16_7 As String
    Private cebada_16_8 As String
    Private cebada_16_9 As String
    Private cebada_17 As String
    Private cebada_17_1 As String
    Private cebada_17_2 As String
    Private cebada_17_3 As String
    Private cebada_17_4 As String
    Private cebada_17_5 As String
    Private cebada_18 As String
    Private cebada_18_1 As String
    Private cebada_18_2 As String
    Private cebada_18_3 As String
    Private cebada_18_4 As String
    Private cebada_18_5 As String
    Private maiz_consumo_14 As String
    Private maiz_consumo_14_1 As String
    Private maiz_consumo_14_2 As String
    Private maiz_consumo_14_3 As String
    Private maiz_consumo_14_4 As String
    Private maiz_consumo_14_5 As String
    Private maiz_consumo_15 As String
    Private maiz_consumo_15_1 As String
    Private maiz_consumo_15_2 As String
    Private maiz_consumo_15_3 As String
    Private maiz_consumo_16 As String
    Private maiz_consumo_16_1 As String
    Private maiz_consumo_16_2 As String
    Private maiz_consumo_16_3 As String
    Private maiz_consumo_16_4 As String
    Private maiz_consumo_16_5 As String
    Private maiz_consumo_16_6 As String
    Private maiz_consumo_16_7 As String
    Private maiz_consumo_16_8 As String
    Private maiz_consumo_16_9 As String
    Private maiz_consumo_17 As String
    Private maiz_consumo_17_1 As String
    Private maiz_consumo_17_2 As String
    Private maiz_consumo_17_3 As String
    Private maiz_consumo_17_4 As String
    Private maiz_consumo_17_5 As String
    Private maiz_consumo_18 As String
    Private maiz_consumo_18_1 As String
    Private maiz_consumo_18_2 As String
    Private maiz_consumo_18_3 As String
    Private maiz_consumo_18_4 As String
    Private maiz_consumo_18_5 As String
    Private maiz_semilla_14 As String
    Private maiz_semilla_14_1 As String
    Private maiz_semilla_14_2 As String
    Private maiz_semilla_14_3 As String
    Private maiz_semilla_14_4 As String
    Private maiz_semilla_14_5 As String
    Private maiz_semilla_15 As String
    Private maiz_semilla_15_1 As String
    Private maiz_semilla_15_2 As String
    Private maiz_semilla_15_3 As String
    Private maiz_semilla_16 As String
    Private maiz_semilla_16_1 As String
    Private maiz_semilla_16_2 As String
    Private maiz_semilla_16_3 As String
    Private maiz_semilla_16_4 As String
    Private maiz_semilla_16_5 As String
    Private maiz_semilla_16_6 As String
    Private maiz_semilla_16_7 As String
    Private maiz_semilla_16_8 As String
    Private maiz_semilla_16_9 As String
    Private maiz_semilla_17 As String
    Private maiz_semilla_17_1 As String
    Private maiz_semilla_17_2 As String
    Private maiz_semilla_17_3 As String
    Private maiz_semilla_17_4 As String
    Private maiz_semilla_17_5 As String
    Private maiz_semilla_18 As String
    Private maiz_semilla_18_1 As String
    Private maiz_semilla_18_2 As String
    Private maiz_semilla_18_3 As String
    Private maiz_semilla_18_4 As String
    Private maiz_semilla_18_5 As String
    Private arroz_14 As String
    Private arroz_14_1 As String
    Private arroz_14_2 As String
    Private arroz_14_3 As String
    Private arroz_14_4 As String
    Private arroz_14_5 As String
    Private arroz_15 As String
    Private arroz_15_1 As String
    Private arroz_15_2 As String
    Private arroz_15_3 As String
    Private arroz_16 As String
    Private arroz_16_1 As String
    Private arroz_16_2 As String
    Private arroz_16_3 As String
    Private arroz_16_4 As String
    Private arroz_16_5 As String
    Private arroz_16_6 As String
    Private arroz_16_7 As String
    Private arroz_16_8 As String
    Private arroz_16_9 As String
    Private arroz_17 As String
    Private arroz_17_1 As String
    Private arroz_17_2 As String
    Private arroz_17_3 As String
    Private arroz_17_4 As String
    Private arroz_17_5 As String
    Private arroz_18 As String
    Private arroz_18_1 As String
    Private arroz_18_2 As String
    Private arroz_18_3 As String
    Private arroz_18_4 As String
    Private arroz_18_5 As String
    Private poroto_19_1_p As String
    Private poroto_19_1_s As String
    Private poroto_19_1_i As String
    Private papa_19_2_p As String
    Private papa_19_2_s As String
    Private papa_19_2_i As String
    Private poroto_20 As String
    Private poroto_20_1 As String
    Private poroto_20_2 As String
    Private poroto_20_3 As String
    Private poroto_20_4 As String
    Private poroto_20_5 As String
    Private poroto_21 As String
    Private poroto_21_1 As String
    Private poroto_21_2 As String
    Private poroto_21_3 As String
    Private poroto_22 As String
    Private poroto_22_1 As String
    Private poroto_22_2 As String
    Private poroto_22_3 As String
    Private poroto_22_4 As String
    Private poroto_22_5 As String
    Private poroto_22_6 As String
    Private poroto_22_7 As String
    Private poroto_22_8 As String
    Private poroto_22_9 As String
    Private poroto_23 As String
    Private poroto_23_1 As String
    Private poroto_23_2 As String
    Private poroto_23_3 As String
    Private poroto_23_4 As String
    Private poroto_24 As String
    Private poroto_24_1 As String
    Private poroto_24_2 As String
    Private poroto_24_3 As String
    Private poroto_24_4 As String
    Private poroto_24_5 As String
    Private papa_20 As String
    Private papa_20_1 As String
    Private papa_20_2 As String
    Private papa_20_3 As String
    Private papa_20_4 As String
    Private papa_20_5 As String
    Private papa_21 As String
    Private papa_21_1 As String
    Private papa_21_2 As String
    Private papa_21_3 As String
    Private papa_22 As String
    Private papa_22_1 As String
    Private papa_22_2 As String
    Private papa_22_3 As String
    Private papa_22_4 As String
    Private papa_22_5 As String
    Private papa_22_6 As String
    Private papa_22_7 As String
    Private papa_22_8 As String
    Private papa_22_9 As String
    Private papa_23 As String
    Private papa_23_1 As String
    Private papa_23_2 As String
    Private papa_23_3 As String
    Private papa_23_4 As String
    Private papa_24 As String
    Private papa_24_1 As String
    Private papa_24_2 As String
    Private papa_24_3 As String
    Private papa_24_4 As String
    Private papa_24_5 As String
    Private raps_25_1 As String
    Private raps_27 As String
    Private raps_27_1 As String
    Private raps_27_2 As String
    Private raps_27_3 As String
    Private raps_27_4 As String
    Private raps_27_5 As String
    Private raps_28 As String
    Private raps_28_1 As String
    Private raps_28_2 As String
    Private raps_28_3 As String
    Private raps_29 As String
    Private raps_29_1 As String
    Private raps_29_2 As String
    Private raps_29_3 As String
    Private raps_29_4 As String
    Private raps_29_5 As String
    Private raps_29_6 As String
    Private raps_29_7 As String
    Private raps_29_8 As String
    Private raps_29_9 As String
    Private raps_30 As String
    Private raps_30_1 As String
    Private raps_30_2 As String
    Private raps_30_3 As String
    Private raps_30_4 As String
    Private raps_31 As String
    Private raps_31_1 As String
    Private raps_31_2 As String
    Private raps_31_3 As String
    Private remolacha_25_2 As String
    Private remolacha_27 As String
    Private remolacha_27_1 As String
    Private remolacha_27_2 As String
    Private remolacha_27_3 As String
    Private remolacha_27_4 As String
    Private remolacha_27_5 As String
    Private remolacha_28 As String
    Private remolacha_28_1 As String
    Private remolacha_28_2 As String
    Private remolacha_28_3 As String
    Private remolacha_29 As String
    Private remolacha_29_1 As String
    Private remolacha_29_2 As String
    Private remolacha_29_3 As String
    Private remolacha_29_4 As String
    Private remolacha_29_5 As String
    Private remolacha_29_6 As String
    Private remolacha_29_7 As String
    Private remolacha_29_8 As String
    Private remolacha_29_9 As String
    Private remolacha_30 As String
    Private remolacha_30_1 As String
    Private remolacha_30_2 As String
    Private remolacha_30_3 As String
    Private remolacha_30_4 As String
    Private remolacha_31 As String
    Private remolacha_31_1 As String
    Private remolacha_31_2 As String
    Private remolacha_31_3 As String
    Private maravilla_25_3 As String
    Private maravilla_27 As String
    Private maravilla_27_1 As String
    Private maravilla_27_2 As String
    Private maravilla_27_3 As String
    Private maravilla_27_4 As String
    Private maravilla_27_5 As String
    Private maravilla_28 As String
    Private maravilla_28_1 As String
    Private maravilla_28_2 As String
    Private maravilla_28_3 As String
    Private maravilla_29 As String
    Private maravilla_29_1 As String
    Private maravilla_29_2 As String
    Private maravilla_29_3 As String
    Private maravilla_29_4 As String
    Private maravilla_29_5 As String
    Private maravilla_29_6 As String
    Private maravilla_29_7 As String
    Private maravilla_29_8 As String
    Private maravilla_29_9 As String
    Private maravilla_30 As String
    Private maravilla_30_1 As String
    Private maravilla_30_2 As String
    Private maravilla_30_3 As String
    Private maravilla_30_4 As String
    Private maravilla_31 As String
    Private maravilla_31_1 As String
    Private maravilla_31_2 As String
    Private maravilla_31_3 As String
    Private achicoria_25_4 As String
    Private achicoria_27 As String
    Private achicoria_27_1 As String
    Private achicoria_27_2 As String
    Private achicoria_27_3 As String
    Private achicoria_27_4 As String
    Private achicoria_27_5 As String
    Private achicoria_28 As String
    Private achicoria_28_1 As String
    Private achicoria_28_2 As String
    Private achicoria_28_3 As String
    Private achicoria_29 As String
    Private achicoria_29_1 As String
    Private achicoria_29_2 As String
    Private achicoria_29_3 As String
    Private achicoria_29_4 As String
    Private achicoria_29_5 As String
    Private achicoria_29_6 As String
    Private achicoria_29_7 As String
    Private achicoria_29_8 As String
    Private achicoria_29_9 As String
    Private achicoria_30 As String
    Private achicoria_30_1 As String
    Private achicoria_30_2 As String
    Private achicoria_30_3 As String
    Private achicoria_30_4 As String
    Private achicoria_31 As String
    Private achicoria_31_1 As String
    Private achicoria_31_2 As String
    Private achicoria_31_3 As String
    Private tomate_25_5 As String
    Private tomate_27 As String
    Private tomate_27_1 As String
    Private tomate_27_2 As String
    Private tomate_27_3 As String
    Private tomate_27_4 As String
    Private tomate_27_5 As String
    Private tomate_28 As String
    Private tomate_28_1 As String
    Private tomate_28_2 As String
    Private tomate_28_3 As String
    Private tomate_29 As String
    Private tomate_29_1 As String
    Private tomate_29_2 As String
    Private tomate_29_3 As String
    Private tomate_29_4 As String
    Private tomate_29_5 As String
    Private tomate_29_6 As String
    Private tomate_29_7 As String
    Private tomate_29_8 As String
    Private tomate_29_9 As String
    Private tomate_30 As String
    Private tomate_30_1 As String
    Private tomate_30_2 As String
    Private tomate_30_3 As String
    Private tomate_30_4 As String
    Private tomate_31 As String
    Private tomate_31_1 As String
    Private tomate_31_2 As String
    Private tomate_31_3 As String
    Private lupino_25_6 As String
    Private lupino_27 As String
    Private lupino_27_1 As String
    Private lupino_27_2 As String
    Private lupino_27_3 As String
    Private lupino_27_4 As String
    Private lupino_27_5 As String
    Private lupino_28 As String
    Private lupino_28_1 As String
    Private lupino_28_2 As String
    Private lupino_28_3 As String
    Private lupino_29 As String
    Private lupino_29_1 As String
    Private lupino_29_2 As String
    Private lupino_29_3 As String
    Private lupino_29_4 As String
    Private lupino_29_5 As String
    Private lupino_29_6 As String
    Private lupino_29_7 As String
    Private lupino_29_8 As String
    Private lupino_29_9 As String
    Private lupino_30 As String
    Private lupino_30_1 As String
    Private lupino_30_2 As String
    Private lupino_30_3 As String
    Private lupino_30_4 As String
    Private lupino_31 As String
    Private lupino_31_1 As String
    Private lupino_31_2 As String
    Private lupino_31_3 As String
    Private tabaco_25_7 As String
    Private tabaco_27 As String
    Private tabaco_27_1 As String
    Private tabaco_27_2 As String
    Private tabaco_27_3 As String
    Private tabaco_27_4 As String
    Private tabaco_27_5 As String
    Private tabaco_28 As String
    Private tabaco_28_1 As String
    Private tabaco_28_2 As String
    Private tabaco_28_3 As String
    Private tabaco_29 As String
    Private tabaco_29_1 As String
    Private tabaco_29_2 As String
    Private tabaco_29_3 As String
    Private tabaco_29_4 As String
    Private tabaco_29_5 As String
    Private tabaco_29_6 As String
    Private tabaco_29_7 As String
    Private tabaco_29_8 As String
    Private tabaco_29_9 As String
    Private tabaco_30 As String
    Private tabaco_30_1 As String
    Private tabaco_30_2 As String
    Private tabaco_30_3 As String
    Private tabaco_30_4 As String
    Private tabaco_31 As String
    Private tabaco_31_1 As String
    Private tabaco_31_2 As String
    Private tabaco_31_3 As String
    Private sup_reg_26_1_1 As String
    Private sup_reg_26_1_2 As String
    Private sup_reg_26_1_3 As String
    Private sup_reg_26_1_4 As String
    Private sup_reg_26_1_5 As String
    Private sup_reg_26_1_6 As String
    Private sup_nac_26_2_1 As String
    Private sup_nac_26_2_2 As String
    Private sup_nac_26_2_3 As String
    Private sup_nac_26_2_4 As String
    Private sup_nac_26_2_5 As String
    Private sup_nac_26_2_6 As String
    Private nom_entre_inf As String
    Private Fecha As String
    Private tipoentrevista As String
    Private observaciones As String


#End Region

#Region "PROPIEDADES DE LA CLASE"

    Public Property propiedad_PerfilIngreso() As String
        Get
            Return PerfilIngreso
        End Get
        Set(ByVal value As String)
            PerfilIngreso = value
        End Set
    End Property
    Public Property propiedad_FechaIngreso() As DateTime
        Get
            Return FechaIngreso
        End Get
        Set(ByVal value As DateTime)
            FechaIngreso = value
        End Set
    End Property
    Public Property propiedad_id() As String
        Get
            Return id
        End Get
        Set(ByVal value As String)
            id = value
        End Set
    End Property
    Public Property propiedad_nombre_informante() As String
        Get
            Return nombre_informante
        End Get
        Set(ByVal value As String)
            nombre_informante = value
        End Set
    End Property
    Public Property propiedad_sexo() As String
        Get
            Return sexo
        End Get
        Set(ByVal value As String)
            sexo = value
        End Set
    End Property
    Public Property propiedad_rut() As String
        Get
            Return rut
        End Get
        Set(ByVal value As String)
            rut = value
        End Set
    End Property
    Public Property propiedad_dv_rut() As String
        Get
            Return dv_rut
        End Get
        Set(ByVal value As String)
            dv_rut = value
        End Set
    End Property
    Public Property propiedad_nombre_explotacion() As String
        Get
            Return nombre_explotacion
        End Get
        Set(ByVal value As String)
            nombre_explotacion = value
        End Set
    End Property
    Public Property propiedad_cargo() As String
        Get
            Return cargo
        End Get
        Set(ByVal value As String)
            cargo = value
        End Set
    End Property
    Public Property propiedad_profesion() As String
        Get
            Return profesion
        End Get
        Set(ByVal value As String)
            profesion = value
        End Set
    End Property
    Public Property propiedad_direccion() As String
        Get
            Return direccion
        End Get
        Set(ByVal value As String)
            direccion = value
        End Set
    End Property
    Public Property propiedad_comuna() As String
        Get
            Return comuna
        End Get
        Set(ByVal value As String)
            comuna = value
        End Set
    End Property
    Public Property propiedad_region() As String
        Get
            Return region
        End Get
        Set(ByVal value As String)
            region = value
        End Set
    End Property
    Public Property propiedad_email() As String
        Get
            Return email
        End Get
        Set(ByVal value As String)
            email = value
        End Set
    End Property
    Public Property propiedad_email_i() As String
        Get
            Return email_i
        End Get
        Set(ByVal value As String)
            email_i = value
        End Set
    End Property
    Public Property propiedad_fono() As String
        Get
            Return fono
        End Get
        Set(ByVal value As String)
            fono = value
        End Set
    End Property
    Public Property propiedad_fono_i() As String
        Get
            Return fono_i
        End Get
        Set(ByVal value As String)
            fono_i = value
        End Set
    End Property
    Public Property propiedad_fono2() As String
        Get
            Return fono2
        End Get
        Set(ByVal value As String)
            fono2 = value
        End Set
    End Property
    Public Property propiedad_fono2_i() As String
        Get
            Return fono2_i
        End Get
        Set(ByVal value As String)
            fono2_i = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_12_1_p() As String
        Get
            Return trigo_blanco_12_1_p
        End Get
        Set(ByVal value As String)
            trigo_blanco_12_1_p = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_12_1_s() As String
        Get
            Return trigo_blanco_12_1_s
        End Get
        Set(ByVal value As String)
            trigo_blanco_12_1_s = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_12_1_i() As String
        Get
            Return trigo_blanco_12_1_i
        End Get
        Set(ByVal value As String)
            trigo_blanco_12_1_i = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_12_2_p() As String
        Get
            Return trigo_candeal_12_2_p
        End Get
        Set(ByVal value As String)
            trigo_candeal_12_2_p = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_12_2_s() As String
        Get
            Return trigo_candeal_12_2_s
        End Get
        Set(ByVal value As String)
            trigo_candeal_12_2_s = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_12_2_i() As String
        Get
            Return trigo_candeal_12_2_i
        End Get
        Set(ByVal value As String)
            trigo_candeal_12_2_i = value
        End Set
    End Property
    Public Property propiedad_avena_12_3_p() As String
        Get
            Return avena_12_3_p
        End Get
        Set(ByVal value As String)
            avena_12_3_p = value
        End Set
    End Property
    Public Property propiedad_avena_12_3_s() As String
        Get
            Return avena_12_3_s
        End Get
        Set(ByVal value As String)
            avena_12_3_s = value
        End Set
    End Property
    Public Property propiedad_avena_12_3_i() As String
        Get
            Return avena_12_3_i
        End Get
        Set(ByVal value As String)
            avena_12_3_i = value
        End Set
    End Property
    Public Property propiedad_cebada_12_4_p() As String
        Get
            Return cebada_12_4_p
        End Get
        Set(ByVal value As String)
            cebada_12_4_p = value
        End Set
    End Property
    Public Property propiedad_cebada_12_4_s() As String
        Get
            Return cebada_12_4_s
        End Get
        Set(ByVal value As String)
            cebada_12_4_s = value
        End Set
    End Property
    Public Property propiedad_cebada_12_4_i() As String
        Get
            Return cebada_12_4_i
        End Get
        Set(ByVal value As String)
            cebada_12_4_i = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_12_5_p() As String
        Get
            Return maiz_consumo_12_5_p
        End Get
        Set(ByVal value As String)
            maiz_consumo_12_5_p = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_12_5_s() As String
        Get
            Return maiz_consumo_12_5_s
        End Get
        Set(ByVal value As String)
            maiz_consumo_12_5_s = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_12_5_i() As String
        Get
            Return maiz_consumo_12_5_i
        End Get
        Set(ByVal value As String)
            maiz_consumo_12_5_i = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_12_6_p() As String
        Get
            Return maiz_semilla_12_6_p
        End Get
        Set(ByVal value As String)
            maiz_semilla_12_6_p = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_12_6_s() As String
        Get
            Return maiz_semilla_12_6_s
        End Get
        Set(ByVal value As String)
            maiz_semilla_12_6_s = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_12_6_i() As String
        Get
            Return maiz_semilla_12_6_i
        End Get
        Set(ByVal value As String)
            maiz_semilla_12_6_i = value
        End Set
    End Property
    Public Property propiedad_arroz_12_7_p() As String
        Get
            Return arroz_12_7_p
        End Get
        Set(ByVal value As String)
            arroz_12_7_p = value
        End Set
    End Property
    Public Property propiedad_arroz_12_7_s() As String
        Get
            Return arroz_12_7_s
        End Get
        Set(ByVal value As String)
            arroz_12_7_s = value
        End Set
    End Property
    Public Property propiedad_arroz_12_7_i() As String
        Get
            Return arroz_12_7_i
        End Get
        Set(ByVal value As String)
            arroz_12_7_i = value
        End Set
    End Property
    Public Property propiedad_sup_reg_13_1_1() As String
        Get
            Return sup_reg_13_1_1
        End Get
        Set(ByVal value As String)
            sup_reg_13_1_1 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_13_1_2() As String
        Get
            Return sup_reg_13_1_2
        End Get
        Set(ByVal value As String)
            sup_reg_13_1_2 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_13_1_3() As String
        Get
            Return sup_reg_13_1_3
        End Get
        Set(ByVal value As String)
            sup_reg_13_1_3 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_13_1_4() As String
        Get
            Return sup_reg_13_1_4
        End Get
        Set(ByVal value As String)
            sup_reg_13_1_4 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_13_1_5() As String
        Get
            Return sup_reg_13_1_5
        End Get
        Set(ByVal value As String)
            sup_reg_13_1_5 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_13_2_1() As String
        Get
            Return sup_reg_13_2_1
        End Get
        Set(ByVal value As String)
            sup_reg_13_2_1 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_13_2_2() As String
        Get
            Return sup_reg_13_2_2
        End Get
        Set(ByVal value As String)
            sup_reg_13_2_2 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_13_2_3() As String
        Get
            Return sup_reg_13_2_3
        End Get
        Set(ByVal value As String)
            sup_reg_13_2_3 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_13_2_4() As String
        Get
            Return sup_reg_13_2_4
        End Get
        Set(ByVal value As String)
            sup_reg_13_2_4 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_13_2_5() As String
        Get
            Return sup_reg_13_2_5
        End Get
        Set(ByVal value As String)
            sup_reg_13_2_5 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_14() As String
        Get
            Return trigo_blanco_14
        End Get
        Set(ByVal value As String)
            trigo_blanco_14 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_14_1() As String
        Get
            Return trigo_blanco_14_1
        End Get
        Set(ByVal value As String)
            trigo_blanco_14_1 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_14_2() As String
        Get
            Return trigo_blanco_14_2
        End Get
        Set(ByVal value As String)
            trigo_blanco_14_2 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_14_3() As String
        Get
            Return trigo_blanco_14_3
        End Get
        Set(ByVal value As String)
            trigo_blanco_14_3 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_14_4() As String
        Get
            Return trigo_blanco_14_4
        End Get
        Set(ByVal value As String)
            trigo_blanco_14_4 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_14_5() As String
        Get
            Return trigo_blanco_14_5
        End Get
        Set(ByVal value As String)
            trigo_blanco_14_5 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_15() As String
        Get
            Return trigo_blanco_15
        End Get
        Set(ByVal value As String)
            trigo_blanco_15 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_15_1() As String
        Get
            Return trigo_blanco_15_1
        End Get
        Set(ByVal value As String)
            trigo_blanco_15_1 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_15_2() As String
        Get
            Return trigo_blanco_15_2
        End Get
        Set(ByVal value As String)
            trigo_blanco_15_2 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_15_3() As String
        Get
            Return trigo_blanco_15_3
        End Get
        Set(ByVal value As String)
            trigo_blanco_15_3 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_16() As String
        Get
            Return trigo_blanco_16
        End Get
        Set(ByVal value As String)
            trigo_blanco_16 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_16_1() As String
        Get
            Return trigo_blanco_16_1
        End Get
        Set(ByVal value As String)
            trigo_blanco_16_1 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_16_2() As String
        Get
            Return trigo_blanco_16_2
        End Get
        Set(ByVal value As String)
            trigo_blanco_16_2 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_16_3() As String
        Get
            Return trigo_blanco_16_3
        End Get
        Set(ByVal value As String)
            trigo_blanco_16_3 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_16_4() As String
        Get
            Return trigo_blanco_16_4
        End Get
        Set(ByVal value As String)
            trigo_blanco_16_4 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_16_5() As String
        Get
            Return trigo_blanco_16_5
        End Get
        Set(ByVal value As String)
            trigo_blanco_16_5 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_16_6() As String
        Get
            Return trigo_blanco_16_6
        End Get
        Set(ByVal value As String)
            trigo_blanco_16_6 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_16_7() As String
        Get
            Return trigo_blanco_16_7
        End Get
        Set(ByVal value As String)
            trigo_blanco_16_7 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_16_8() As String
        Get
            Return trigo_blanco_16_8
        End Get
        Set(ByVal value As String)
            trigo_blanco_16_8 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_16_9() As String
        Get
            Return trigo_blanco_16_9
        End Get
        Set(ByVal value As String)
            trigo_blanco_16_9 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_17() As String
        Get
            Return trigo_blanco_17
        End Get
        Set(ByVal value As String)
            trigo_blanco_17 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_17_1() As String
        Get
            Return trigo_blanco_17_1
        End Get
        Set(ByVal value As String)
            trigo_blanco_17_1 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_17_2() As String
        Get
            Return trigo_blanco_17_2
        End Get
        Set(ByVal value As String)
            trigo_blanco_17_2 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_17_3() As String
        Get
            Return trigo_blanco_17_3
        End Get
        Set(ByVal value As String)
            trigo_blanco_17_3 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_17_4() As String
        Get
            Return trigo_blanco_17_4
        End Get
        Set(ByVal value As String)
            trigo_blanco_17_4 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_17_5() As String
        Get
            Return trigo_blanco_17_5
        End Get
        Set(ByVal value As String)
            trigo_blanco_17_5 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_18() As String
        Get
            Return trigo_blanco_18
        End Get
        Set(ByVal value As String)
            trigo_blanco_18 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_18_1() As String
        Get
            Return trigo_blanco_18_1
        End Get
        Set(ByVal value As String)
            trigo_blanco_18_1 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_18_2() As String
        Get
            Return trigo_blanco_18_2
        End Get
        Set(ByVal value As String)
            trigo_blanco_18_2 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_18_3() As String
        Get
            Return trigo_blanco_18_3
        End Get
        Set(ByVal value As String)
            trigo_blanco_18_3 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_18_4() As String
        Get
            Return trigo_blanco_18_4
        End Get
        Set(ByVal value As String)
            trigo_blanco_18_4 = value
        End Set
    End Property
    Public Property propiedad_trigo_blanco_18_5() As String
        Get
            Return trigo_blanco_18_5
        End Get
        Set(ByVal value As String)
            trigo_blanco_18_5 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_14() As String
        Get
            Return trigo_candeal_14
        End Get
        Set(ByVal value As String)
            trigo_candeal_14 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_14_1() As String
        Get
            Return trigo_candeal_14_1
        End Get
        Set(ByVal value As String)
            trigo_candeal_14_1 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_14_2() As String
        Get
            Return trigo_candeal_14_2
        End Get
        Set(ByVal value As String)
            trigo_candeal_14_2 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_14_3() As String
        Get
            Return trigo_candeal_14_3
        End Get
        Set(ByVal value As String)
            trigo_candeal_14_3 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_14_4() As String
        Get
            Return trigo_candeal_14_4
        End Get
        Set(ByVal value As String)
            trigo_candeal_14_4 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_14_5() As String
        Get
            Return trigo_candeal_14_5
        End Get
        Set(ByVal value As String)
            trigo_candeal_14_5 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_15() As String
        Get
            Return trigo_candeal_15
        End Get
        Set(ByVal value As String)
            trigo_candeal_15 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_15_1() As String
        Get
            Return trigo_candeal_15_1
        End Get
        Set(ByVal value As String)
            trigo_candeal_15_1 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_15_2() As String
        Get
            Return trigo_candeal_15_2
        End Get
        Set(ByVal value As String)
            trigo_candeal_15_2 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_15_3() As String
        Get
            Return trigo_candeal_15_3
        End Get
        Set(ByVal value As String)
            trigo_candeal_15_3 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_16() As String
        Get
            Return trigo_candeal_16
        End Get
        Set(ByVal value As String)
            trigo_candeal_16 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_16_1() As String
        Get
            Return trigo_candeal_16_1
        End Get
        Set(ByVal value As String)
            trigo_candeal_16_1 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_16_2() As String
        Get
            Return trigo_candeal_16_2
        End Get
        Set(ByVal value As String)
            trigo_candeal_16_2 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_16_3() As String
        Get
            Return trigo_candeal_16_3
        End Get
        Set(ByVal value As String)
            trigo_candeal_16_3 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_16_4() As String
        Get
            Return trigo_candeal_16_4
        End Get
        Set(ByVal value As String)
            trigo_candeal_16_4 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_16_5() As String
        Get
            Return trigo_candeal_16_5
        End Get
        Set(ByVal value As String)
            trigo_candeal_16_5 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_16_6() As String
        Get
            Return trigo_candeal_16_6
        End Get
        Set(ByVal value As String)
            trigo_candeal_16_6 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_16_7() As String
        Get
            Return trigo_candeal_16_7
        End Get
        Set(ByVal value As String)
            trigo_candeal_16_7 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_16_8() As String
        Get
            Return trigo_candeal_16_8
        End Get
        Set(ByVal value As String)
            trigo_candeal_16_8 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_16_9() As String
        Get
            Return trigo_candeal_16_9
        End Get
        Set(ByVal value As String)
            trigo_candeal_16_9 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_17() As String
        Get
            Return trigo_candeal_17
        End Get
        Set(ByVal value As String)
            trigo_candeal_17 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_17_1() As String
        Get
            Return trigo_candeal_17_1
        End Get
        Set(ByVal value As String)
            trigo_candeal_17_1 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_17_2() As String
        Get
            Return trigo_candeal_17_2
        End Get
        Set(ByVal value As String)
            trigo_candeal_17_2 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_17_3() As String
        Get
            Return trigo_candeal_17_3
        End Get
        Set(ByVal value As String)
            trigo_candeal_17_3 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_17_4() As String
        Get
            Return trigo_candeal_17_4
        End Get
        Set(ByVal value As String)
            trigo_candeal_17_4 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_17_5() As String
        Get
            Return trigo_candeal_17_5
        End Get
        Set(ByVal value As String)
            trigo_candeal_17_5 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_18() As String
        Get
            Return trigo_candeal_18
        End Get
        Set(ByVal value As String)
            trigo_candeal_18 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_18_1() As String
        Get
            Return trigo_candeal_18_1
        End Get
        Set(ByVal value As String)
            trigo_candeal_18_1 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_18_2() As String
        Get
            Return trigo_candeal_18_2
        End Get
        Set(ByVal value As String)
            trigo_candeal_18_2 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_18_3() As String
        Get
            Return trigo_candeal_18_3
        End Get
        Set(ByVal value As String)
            trigo_candeal_18_3 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_18_4() As String
        Get
            Return trigo_candeal_18_4
        End Get
        Set(ByVal value As String)
            trigo_candeal_18_4 = value
        End Set
    End Property
    Public Property propiedad_trigo_candeal_18_5() As String
        Get
            Return trigo_candeal_18_5
        End Get
        Set(ByVal value As String)
            trigo_candeal_18_5 = value
        End Set
    End Property
    Public Property propiedad_avena_14() As String
        Get
            Return avena_14
        End Get
        Set(ByVal value As String)
            avena_14 = value
        End Set
    End Property
    Public Property propiedad_avena_14_1() As String
        Get
            Return avena_14_1
        End Get
        Set(ByVal value As String)
            avena_14_1 = value
        End Set
    End Property
    Public Property propiedad_avena_14_2() As String
        Get
            Return avena_14_2
        End Get
        Set(ByVal value As String)
            avena_14_2 = value
        End Set
    End Property
    Public Property propiedad_avena_14_3() As String
        Get
            Return avena_14_3
        End Get
        Set(ByVal value As String)
            avena_14_3 = value
        End Set
    End Property
    Public Property propiedad_avena_14_4() As String
        Get
            Return avena_14_4
        End Get
        Set(ByVal value As String)
            avena_14_4 = value
        End Set
    End Property
    Public Property propiedad_avena_14_5() As String
        Get
            Return avena_14_5
        End Get
        Set(ByVal value As String)
            avena_14_5 = value
        End Set
    End Property
    Public Property propiedad_avena_15() As String
        Get
            Return avena_15
        End Get
        Set(ByVal value As String)
            avena_15 = value
        End Set
    End Property
    Public Property propiedad_avena_15_1() As String
        Get
            Return avena_15_1
        End Get
        Set(ByVal value As String)
            avena_15_1 = value
        End Set
    End Property
    Public Property propiedad_avena_15_2() As String
        Get
            Return avena_15_2
        End Get
        Set(ByVal value As String)
            avena_15_2 = value
        End Set
    End Property
    Public Property propiedad_avena_15_3() As String
        Get
            Return avena_15_3
        End Get
        Set(ByVal value As String)
            avena_15_3 = value
        End Set
    End Property
    Public Property propiedad_avena_16() As String
        Get
            Return avena_16
        End Get
        Set(ByVal value As String)
            avena_16 = value
        End Set
    End Property
    Public Property propiedad_avena_16_1() As String
        Get
            Return avena_16_1
        End Get
        Set(ByVal value As String)
            avena_16_1 = value
        End Set
    End Property
    Public Property propiedad_avena_16_2() As String
        Get
            Return avena_16_2
        End Get
        Set(ByVal value As String)
            avena_16_2 = value
        End Set
    End Property
    Public Property propiedad_avena_16_3() As String
        Get
            Return avena_16_3
        End Get
        Set(ByVal value As String)
            avena_16_3 = value
        End Set
    End Property
    Public Property propiedad_avena_16_4() As String
        Get
            Return avena_16_4
        End Get
        Set(ByVal value As String)
            avena_16_4 = value
        End Set
    End Property
    Public Property propiedad_avena_16_5() As String
        Get
            Return avena_16_5
        End Get
        Set(ByVal value As String)
            avena_16_5 = value
        End Set
    End Property
    Public Property propiedad_avena_16_6() As String
        Get
            Return avena_16_6
        End Get
        Set(ByVal value As String)
            avena_16_6 = value
        End Set
    End Property
    Public Property propiedad_avena_16_7() As String
        Get
            Return avena_16_7
        End Get
        Set(ByVal value As String)
            avena_16_7 = value
        End Set
    End Property
    Public Property propiedad_avena_16_8() As String
        Get
            Return avena_16_8
        End Get
        Set(ByVal value As String)
            avena_16_8 = value
        End Set
    End Property
    Public Property propiedad_avena_16_9() As String
        Get
            Return avena_16_9
        End Get
        Set(ByVal value As String)
            avena_16_9 = value
        End Set
    End Property
    Public Property propiedad_avena_17() As String
        Get
            Return avena_17
        End Get
        Set(ByVal value As String)
            avena_17 = value
        End Set
    End Property
    Public Property propiedad_avena_17_1() As String
        Get
            Return avena_17_1
        End Get
        Set(ByVal value As String)
            avena_17_1 = value
        End Set
    End Property
    Public Property propiedad_avena_17_2() As String
        Get
            Return avena_17_2
        End Get
        Set(ByVal value As String)
            avena_17_2 = value
        End Set
    End Property
    Public Property propiedad_avena_17_3() As String
        Get
            Return avena_17_3
        End Get
        Set(ByVal value As String)
            avena_17_3 = value
        End Set
    End Property
    Public Property propiedad_avena_17_4() As String
        Get
            Return avena_17_4
        End Get
        Set(ByVal value As String)
            avena_17_4 = value
        End Set
    End Property
    Public Property propiedad_avena_17_5() As String
        Get
            Return avena_17_5
        End Get
        Set(ByVal value As String)
            avena_17_5 = value
        End Set
    End Property
    Public Property propiedad_avena_18() As String
        Get
            Return avena_18
        End Get
        Set(ByVal value As String)
            avena_18 = value
        End Set
    End Property
    Public Property propiedad_avena_18_1() As String
        Get
            Return avena_18_1
        End Get
        Set(ByVal value As String)
            avena_18_1 = value
        End Set
    End Property
    Public Property propiedad_avena_18_2() As String
        Get
            Return avena_18_2
        End Get
        Set(ByVal value As String)
            avena_18_2 = value
        End Set
    End Property
    Public Property propiedad_avena_18_3() As String
        Get
            Return avena_18_3
        End Get
        Set(ByVal value As String)
            avena_18_3 = value
        End Set
    End Property
    Public Property propiedad_avena_18_4() As String
        Get
            Return avena_18_4
        End Get
        Set(ByVal value As String)
            avena_18_4 = value
        End Set
    End Property
    Public Property propiedad_avena_18_5() As String
        Get
            Return avena_18_5
        End Get
        Set(ByVal value As String)
            avena_18_5 = value
        End Set
    End Property
    Public Property propiedad_cebada_14() As String
        Get
            Return cebada_14
        End Get
        Set(ByVal value As String)
            cebada_14 = value
        End Set
    End Property
    Public Property propiedad_cebada_14_1() As String
        Get
            Return cebada_14_1
        End Get
        Set(ByVal value As String)
            cebada_14_1 = value
        End Set
    End Property
    Public Property propiedad_cebada_14_2() As String
        Get
            Return cebada_14_2
        End Get
        Set(ByVal value As String)
            cebada_14_2 = value
        End Set
    End Property
    Public Property propiedad_cebada_14_3() As String
        Get
            Return cebada_14_3
        End Get
        Set(ByVal value As String)
            cebada_14_3 = value
        End Set
    End Property
    Public Property propiedad_cebada_14_4() As String
        Get
            Return cebada_14_4
        End Get
        Set(ByVal value As String)
            cebada_14_4 = value
        End Set
    End Property
    Public Property propiedad_cebada_14_5() As String
        Get
            Return cebada_14_5
        End Get
        Set(ByVal value As String)
            cebada_14_5 = value
        End Set
    End Property
    Public Property propiedad_cebada_15() As String
        Get
            Return cebada_15
        End Get
        Set(ByVal value As String)
            cebada_15 = value
        End Set
    End Property
    Public Property propiedad_cebada_15_1() As String
        Get
            Return cebada_15_1
        End Get
        Set(ByVal value As String)
            cebada_15_1 = value
        End Set
    End Property
    Public Property propiedad_cebada_15_2() As String
        Get
            Return cebada_15_2
        End Get
        Set(ByVal value As String)
            cebada_15_2 = value
        End Set
    End Property
    Public Property propiedad_cebada_15_3() As String
        Get
            Return cebada_15_3
        End Get
        Set(ByVal value As String)
            cebada_15_3 = value
        End Set
    End Property
    Public Property propiedad_cebada_16() As String
        Get
            Return cebada_16
        End Get
        Set(ByVal value As String)
            cebada_16 = value
        End Set
    End Property
    Public Property propiedad_cebada_16_1() As String
        Get
            Return cebada_16_1
        End Get
        Set(ByVal value As String)
            cebada_16_1 = value
        End Set
    End Property
    Public Property propiedad_cebada_16_2() As String
        Get
            Return cebada_16_2
        End Get
        Set(ByVal value As String)
            cebada_16_2 = value
        End Set
    End Property
    Public Property propiedad_cebada_16_3() As String
        Get
            Return cebada_16_3
        End Get
        Set(ByVal value As String)
            cebada_16_3 = value
        End Set
    End Property
    Public Property propiedad_cebada_16_4() As String
        Get
            Return cebada_16_4
        End Get
        Set(ByVal value As String)
            cebada_16_4 = value
        End Set
    End Property
    Public Property propiedad_cebada_16_5() As String
        Get
            Return cebada_16_5
        End Get
        Set(ByVal value As String)
            cebada_16_5 = value
        End Set
    End Property
    Public Property propiedad_cebada_16_6() As String
        Get
            Return cebada_16_6
        End Get
        Set(ByVal value As String)
            cebada_16_6 = value
        End Set
    End Property
    Public Property propiedad_cebada_16_7() As String
        Get
            Return cebada_16_7
        End Get
        Set(ByVal value As String)
            cebada_16_7 = value
        End Set
    End Property
    Public Property propiedad_cebada_16_8() As String
        Get
            Return cebada_16_8
        End Get
        Set(ByVal value As String)
            cebada_16_8 = value
        End Set
    End Property
    Public Property propiedad_cebada_16_9() As String
        Get
            Return cebada_16_9
        End Get
        Set(ByVal value As String)
            cebada_16_9 = value
        End Set
    End Property
    Public Property propiedad_cebada_17() As String
        Get
            Return cebada_17
        End Get
        Set(ByVal value As String)
            cebada_17 = value
        End Set
    End Property
    Public Property propiedad_cebada_17_1() As String
        Get
            Return cebada_17_1
        End Get
        Set(ByVal value As String)
            cebada_17_1 = value
        End Set
    End Property
    Public Property propiedad_cebada_17_2() As String
        Get
            Return cebada_17_2
        End Get
        Set(ByVal value As String)
            cebada_17_2 = value
        End Set
    End Property
    Public Property propiedad_cebada_17_3() As String
        Get
            Return cebada_17_3
        End Get
        Set(ByVal value As String)
            cebada_17_3 = value
        End Set
    End Property
    Public Property propiedad_cebada_17_4() As String
        Get
            Return cebada_17_4
        End Get
        Set(ByVal value As String)
            cebada_17_4 = value
        End Set
    End Property
    Public Property propiedad_cebada_17_5() As String
        Get
            Return cebada_17_5
        End Get
        Set(ByVal value As String)
            cebada_17_5 = value
        End Set
    End Property
    Public Property propiedad_cebada_18() As String
        Get
            Return cebada_18
        End Get
        Set(ByVal value As String)
            cebada_18 = value
        End Set
    End Property
    Public Property propiedad_cebada_18_1() As String
        Get
            Return cebada_18_1
        End Get
        Set(ByVal value As String)
            cebada_18_1 = value
        End Set
    End Property
    Public Property propiedad_cebada_18_2() As String
        Get
            Return cebada_18_2
        End Get
        Set(ByVal value As String)
            cebada_18_2 = value
        End Set
    End Property
    Public Property propiedad_cebada_18_3() As String
        Get
            Return cebada_18_3
        End Get
        Set(ByVal value As String)
            cebada_18_3 = value
        End Set
    End Property
    Public Property propiedad_cebada_18_4() As String
        Get
            Return cebada_18_4
        End Get
        Set(ByVal value As String)
            cebada_18_4 = value
        End Set
    End Property
    Public Property propiedad_cebada_18_5() As String
        Get
            Return cebada_18_5
        End Get
        Set(ByVal value As String)
            cebada_18_5 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_14() As String
        Get
            Return maiz_consumo_14
        End Get
        Set(ByVal value As String)
            maiz_consumo_14 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_14_1() As String
        Get
            Return maiz_consumo_14_1
        End Get
        Set(ByVal value As String)
            maiz_consumo_14_1 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_14_2() As String
        Get
            Return maiz_consumo_14_2
        End Get
        Set(ByVal value As String)
            maiz_consumo_14_2 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_14_3() As String
        Get
            Return maiz_consumo_14_3
        End Get
        Set(ByVal value As String)
            maiz_consumo_14_3 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_14_4() As String
        Get
            Return maiz_consumo_14_4
        End Get
        Set(ByVal value As String)
            maiz_consumo_14_4 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_14_5() As String
        Get
            Return maiz_consumo_14_5
        End Get
        Set(ByVal value As String)
            maiz_consumo_14_5 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_15() As String
        Get
            Return maiz_consumo_15
        End Get
        Set(ByVal value As String)
            maiz_consumo_15 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_15_1() As String
        Get
            Return maiz_consumo_15_1
        End Get
        Set(ByVal value As String)
            maiz_consumo_15_1 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_15_2() As String
        Get
            Return maiz_consumo_15_2
        End Get
        Set(ByVal value As String)
            maiz_consumo_15_2 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_15_3() As String
        Get
            Return maiz_consumo_15_3
        End Get
        Set(ByVal value As String)
            maiz_consumo_15_3 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_16() As String
        Get
            Return maiz_consumo_16
        End Get
        Set(ByVal value As String)
            maiz_consumo_16 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_16_1() As String
        Get
            Return maiz_consumo_16_1
        End Get
        Set(ByVal value As String)
            maiz_consumo_16_1 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_16_2() As String
        Get
            Return maiz_consumo_16_2
        End Get
        Set(ByVal value As String)
            maiz_consumo_16_2 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_16_3() As String
        Get
            Return maiz_consumo_16_3
        End Get
        Set(ByVal value As String)
            maiz_consumo_16_3 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_16_4() As String
        Get
            Return maiz_consumo_16_4
        End Get
        Set(ByVal value As String)
            maiz_consumo_16_4 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_16_5() As String
        Get
            Return maiz_consumo_16_5
        End Get
        Set(ByVal value As String)
            maiz_consumo_16_5 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_16_6() As String
        Get
            Return maiz_consumo_16_6
        End Get
        Set(ByVal value As String)
            maiz_consumo_16_6 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_16_7() As String
        Get
            Return maiz_consumo_16_7
        End Get
        Set(ByVal value As String)
            maiz_consumo_16_7 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_16_8() As String
        Get
            Return maiz_consumo_16_8
        End Get
        Set(ByVal value As String)
            maiz_consumo_16_8 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_16_9() As String
        Get
            Return maiz_consumo_16_9
        End Get
        Set(ByVal value As String)
            maiz_consumo_16_9 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_17() As String
        Get
            Return maiz_consumo_17
        End Get
        Set(ByVal value As String)
            maiz_consumo_17 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_17_1() As String
        Get
            Return maiz_consumo_17_1
        End Get
        Set(ByVal value As String)
            maiz_consumo_17_1 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_17_2() As String
        Get
            Return maiz_consumo_17_2
        End Get
        Set(ByVal value As String)
            maiz_consumo_17_2 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_17_3() As String
        Get
            Return maiz_consumo_17_3
        End Get
        Set(ByVal value As String)
            maiz_consumo_17_3 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_17_4() As String
        Get
            Return maiz_consumo_17_4
        End Get
        Set(ByVal value As String)
            maiz_consumo_17_4 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_17_5() As String
        Get
            Return maiz_consumo_17_5
        End Get
        Set(ByVal value As String)
            maiz_consumo_17_5 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_18() As String
        Get
            Return maiz_consumo_18
        End Get
        Set(ByVal value As String)
            maiz_consumo_18 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_18_1() As String
        Get
            Return maiz_consumo_18_1
        End Get
        Set(ByVal value As String)
            maiz_consumo_18_1 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_18_2() As String
        Get
            Return maiz_consumo_18_2
        End Get
        Set(ByVal value As String)
            maiz_consumo_18_2 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_18_3() As String
        Get
            Return maiz_consumo_18_3
        End Get
        Set(ByVal value As String)
            maiz_consumo_18_3 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_18_4() As String
        Get
            Return maiz_consumo_18_4
        End Get
        Set(ByVal value As String)
            maiz_consumo_18_4 = value
        End Set
    End Property
    Public Property propiedad_maiz_consumo_18_5() As String
        Get
            Return maiz_consumo_18_5
        End Get
        Set(ByVal value As String)
            maiz_consumo_18_5 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_14() As String
        Get
            Return maiz_semilla_14
        End Get
        Set(ByVal value As String)
            maiz_semilla_14 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_14_1() As String
        Get
            Return maiz_semilla_14_1
        End Get
        Set(ByVal value As String)
            maiz_semilla_14_1 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_14_2() As String
        Get
            Return maiz_semilla_14_2
        End Get
        Set(ByVal value As String)
            maiz_semilla_14_2 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_14_3() As String
        Get
            Return maiz_semilla_14_3
        End Get
        Set(ByVal value As String)
            maiz_semilla_14_3 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_14_4() As String
        Get
            Return maiz_semilla_14_4
        End Get
        Set(ByVal value As String)
            maiz_semilla_14_4 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_14_5() As String
        Get
            Return maiz_semilla_14_5
        End Get
        Set(ByVal value As String)
            maiz_semilla_14_5 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_15() As String
        Get
            Return maiz_semilla_15
        End Get
        Set(ByVal value As String)
            maiz_semilla_15 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_15_1() As String
        Get
            Return maiz_semilla_15_1
        End Get
        Set(ByVal value As String)
            maiz_semilla_15_1 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_15_2() As String
        Get
            Return maiz_semilla_15_2
        End Get
        Set(ByVal value As String)
            maiz_semilla_15_2 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_15_3() As String
        Get
            Return maiz_semilla_15_3
        End Get
        Set(ByVal value As String)
            maiz_semilla_15_3 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_16() As String
        Get
            Return maiz_semilla_16
        End Get
        Set(ByVal value As String)
            maiz_semilla_16 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_16_1() As String
        Get
            Return maiz_semilla_16_1
        End Get
        Set(ByVal value As String)
            maiz_semilla_16_1 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_16_2() As String
        Get
            Return maiz_semilla_16_2
        End Get
        Set(ByVal value As String)
            maiz_semilla_16_2 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_16_3() As String
        Get
            Return maiz_semilla_16_3
        End Get
        Set(ByVal value As String)
            maiz_semilla_16_3 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_16_4() As String
        Get
            Return maiz_semilla_16_4
        End Get
        Set(ByVal value As String)
            maiz_semilla_16_4 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_16_5() As String
        Get
            Return maiz_semilla_16_5
        End Get
        Set(ByVal value As String)
            maiz_semilla_16_5 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_16_6() As String
        Get
            Return maiz_semilla_16_6
        End Get
        Set(ByVal value As String)
            maiz_semilla_16_6 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_16_7() As String
        Get
            Return maiz_semilla_16_7
        End Get
        Set(ByVal value As String)
            maiz_semilla_16_7 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_16_8() As String
        Get
            Return maiz_semilla_16_8
        End Get
        Set(ByVal value As String)
            maiz_semilla_16_8 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_16_9() As String
        Get
            Return maiz_semilla_16_9
        End Get
        Set(ByVal value As String)
            maiz_semilla_16_9 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_17() As String
        Get
            Return maiz_semilla_17
        End Get
        Set(ByVal value As String)
            maiz_semilla_17 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_17_1() As String
        Get
            Return maiz_semilla_17_1
        End Get
        Set(ByVal value As String)
            maiz_semilla_17_1 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_17_2() As String
        Get
            Return maiz_semilla_17_2
        End Get
        Set(ByVal value As String)
            maiz_semilla_17_2 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_17_3() As String
        Get
            Return maiz_semilla_17_3
        End Get
        Set(ByVal value As String)
            maiz_semilla_17_3 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_17_4() As String
        Get
            Return maiz_semilla_17_4
        End Get
        Set(ByVal value As String)
            maiz_semilla_17_4 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_17_5() As String
        Get
            Return maiz_semilla_17_5
        End Get
        Set(ByVal value As String)
            maiz_semilla_17_5 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_18() As String
        Get
            Return maiz_semilla_18
        End Get
        Set(ByVal value As String)
            maiz_semilla_18 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_18_1() As String
        Get
            Return maiz_semilla_18_1
        End Get
        Set(ByVal value As String)
            maiz_semilla_18_1 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_18_2() As String
        Get
            Return maiz_semilla_18_2
        End Get
        Set(ByVal value As String)
            maiz_semilla_18_2 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_18_3() As String
        Get
            Return maiz_semilla_18_3
        End Get
        Set(ByVal value As String)
            maiz_semilla_18_3 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_18_4() As String
        Get
            Return maiz_semilla_18_4
        End Get
        Set(ByVal value As String)
            maiz_semilla_18_4 = value
        End Set
    End Property
    Public Property propiedad_maiz_semilla_18_5() As String
        Get
            Return maiz_semilla_18_5
        End Get
        Set(ByVal value As String)
            maiz_semilla_18_5 = value
        End Set
    End Property
    Public Property propiedad_arroz_14() As String
        Get
            Return arroz_14
        End Get
        Set(ByVal value As String)
            arroz_14 = value
        End Set
    End Property
    Public Property propiedad_arroz_14_1() As String
        Get
            Return arroz_14_1
        End Get
        Set(ByVal value As String)
            arroz_14_1 = value
        End Set
    End Property
    Public Property propiedad_arroz_14_2() As String
        Get
            Return arroz_14_2
        End Get
        Set(ByVal value As String)
            arroz_14_2 = value
        End Set
    End Property
    Public Property propiedad_arroz_14_3() As String
        Get
            Return arroz_14_3
        End Get
        Set(ByVal value As String)
            arroz_14_3 = value
        End Set
    End Property
    Public Property propiedad_arroz_14_4() As String
        Get
            Return arroz_14_4
        End Get
        Set(ByVal value As String)
            arroz_14_4 = value
        End Set
    End Property
    Public Property propiedad_arroz_14_5() As String
        Get
            Return arroz_14_5
        End Get
        Set(ByVal value As String)
            arroz_14_5 = value
        End Set
    End Property
    Public Property propiedad_arroz_15() As String
        Get
            Return arroz_15
        End Get
        Set(ByVal value As String)
            arroz_15 = value
        End Set
    End Property
    Public Property propiedad_arroz_15_1() As String
        Get
            Return arroz_15_1
        End Get
        Set(ByVal value As String)
            arroz_15_1 = value
        End Set
    End Property
    Public Property propiedad_arroz_15_2() As String
        Get
            Return arroz_15_2
        End Get
        Set(ByVal value As String)
            arroz_15_2 = value
        End Set
    End Property
    Public Property propiedad_arroz_15_3() As String
        Get
            Return arroz_15_3
        End Get
        Set(ByVal value As String)
            arroz_15_3 = value
        End Set
    End Property
    Public Property propiedad_arroz_16() As String
        Get
            Return arroz_16
        End Get
        Set(ByVal value As String)
            arroz_16 = value
        End Set
    End Property
    Public Property propiedad_arroz_16_1() As String
        Get
            Return arroz_16_1
        End Get
        Set(ByVal value As String)
            arroz_16_1 = value
        End Set
    End Property
    Public Property propiedad_arroz_16_2() As String
        Get
            Return arroz_16_2
        End Get
        Set(ByVal value As String)
            arroz_16_2 = value
        End Set
    End Property
    Public Property propiedad_arroz_16_3() As String
        Get
            Return arroz_16_3
        End Get
        Set(ByVal value As String)
            arroz_16_3 = value
        End Set
    End Property
    Public Property propiedad_arroz_16_4() As String
        Get
            Return arroz_16_4
        End Get
        Set(ByVal value As String)
            arroz_16_4 = value
        End Set
    End Property
    Public Property propiedad_arroz_16_5() As String
        Get
            Return arroz_16_5
        End Get
        Set(ByVal value As String)
            arroz_16_5 = value
        End Set
    End Property
    Public Property propiedad_arroz_16_6() As String
        Get
            Return arroz_16_6
        End Get
        Set(ByVal value As String)
            arroz_16_6 = value
        End Set
    End Property
    Public Property propiedad_arroz_16_7() As String
        Get
            Return arroz_16_7
        End Get
        Set(ByVal value As String)
            arroz_16_7 = value
        End Set
    End Property
    Public Property propiedad_arroz_16_8() As String
        Get
            Return arroz_16_8
        End Get
        Set(ByVal value As String)
            arroz_16_8 = value
        End Set
    End Property
    Public Property propiedad_arroz_16_9() As String
        Get
            Return arroz_16_9
        End Get
        Set(ByVal value As String)
            arroz_16_9 = value
        End Set
    End Property
    Public Property propiedad_arroz_17() As String
        Get
            Return arroz_17
        End Get
        Set(ByVal value As String)
            arroz_17 = value
        End Set
    End Property
    Public Property propiedad_arroz_17_1() As String
        Get
            Return arroz_17_1
        End Get
        Set(ByVal value As String)
            arroz_17_1 = value
        End Set
    End Property
    Public Property propiedad_arroz_17_2() As String
        Get
            Return arroz_17_2
        End Get
        Set(ByVal value As String)
            arroz_17_2 = value
        End Set
    End Property
    Public Property propiedad_arroz_17_3() As String
        Get
            Return arroz_17_3
        End Get
        Set(ByVal value As String)
            arroz_17_3 = value
        End Set
    End Property
    Public Property propiedad_arroz_17_4() As String
        Get
            Return arroz_17_4
        End Get
        Set(ByVal value As String)
            arroz_17_4 = value
        End Set
    End Property
    Public Property propiedad_arroz_17_5() As String
        Get
            Return arroz_17_5
        End Get
        Set(ByVal value As String)
            arroz_17_5 = value
        End Set
    End Property
    Public Property propiedad_arroz_18() As String
        Get
            Return arroz_18
        End Get
        Set(ByVal value As String)
            arroz_18 = value
        End Set
    End Property
    Public Property propiedad_arroz_18_1() As String
        Get
            Return arroz_18_1
        End Get
        Set(ByVal value As String)
            arroz_18_1 = value
        End Set
    End Property
    Public Property propiedad_arroz_18_2() As String
        Get
            Return arroz_18_2
        End Get
        Set(ByVal value As String)
            arroz_18_2 = value
        End Set
    End Property
    Public Property propiedad_arroz_18_3() As String
        Get
            Return arroz_18_3
        End Get
        Set(ByVal value As String)
            arroz_18_3 = value
        End Set
    End Property
    Public Property propiedad_arroz_18_4() As String
        Get
            Return arroz_18_4
        End Get
        Set(ByVal value As String)
            arroz_18_4 = value
        End Set
    End Property
    Public Property propiedad_arroz_18_5() As String
        Get
            Return arroz_18_5
        End Get
        Set(ByVal value As String)
            arroz_18_5 = value
        End Set
    End Property
    Public Property propiedad_poroto_19_1_p() As String
        Get
            Return poroto_19_1_p
        End Get
        Set(ByVal value As String)
            poroto_19_1_p = value
        End Set
    End Property
    Public Property propiedad_poroto_19_1_s() As String
        Get
            Return poroto_19_1_s
        End Get
        Set(ByVal value As String)
            poroto_19_1_s = value
        End Set
    End Property
    Public Property propiedad_poroto_19_1_i() As String
        Get
            Return poroto_19_1_i
        End Get
        Set(ByVal value As String)
            poroto_19_1_i = value
        End Set
    End Property
    Public Property propiedad_papa_19_2_p() As String
        Get
            Return papa_19_2_p
        End Get
        Set(ByVal value As String)
            papa_19_2_p = value
        End Set
    End Property
    Public Property propiedad_papa_19_2_s() As String
        Get
            Return papa_19_2_s
        End Get
        Set(ByVal value As String)
            papa_19_2_s = value
        End Set
    End Property
    Public Property propiedad_papa_19_2_i() As String
        Get
            Return papa_19_2_i
        End Get
        Set(ByVal value As String)
            papa_19_2_i = value
        End Set
    End Property
    Public Property propiedad_poroto_20() As String
        Get
            Return poroto_20
        End Get
        Set(ByVal value As String)
            poroto_20 = value
        End Set
    End Property
    Public Property propiedad_poroto_20_1() As String
        Get
            Return poroto_20_1
        End Get
        Set(ByVal value As String)
            poroto_20_1 = value
        End Set
    End Property
    Public Property propiedad_poroto_20_2() As String
        Get
            Return poroto_20_2
        End Get
        Set(ByVal value As String)
            poroto_20_2 = value
        End Set
    End Property
    Public Property propiedad_poroto_20_3() As String
        Get
            Return poroto_20_3
        End Get
        Set(ByVal value As String)
            poroto_20_3 = value
        End Set
    End Property
    Public Property propiedad_poroto_20_4() As String
        Get
            Return poroto_20_4
        End Get
        Set(ByVal value As String)
            poroto_20_4 = value
        End Set
    End Property
    Public Property propiedad_poroto_20_5() As String
        Get
            Return poroto_20_5
        End Get
        Set(ByVal value As String)
            poroto_20_5 = value
        End Set
    End Property
    Public Property propiedad_poroto_21() As String
        Get
            Return poroto_21
        End Get
        Set(ByVal value As String)
            poroto_21 = value
        End Set
    End Property
    Public Property propiedad_poroto_21_1() As String
        Get
            Return poroto_21_1
        End Get
        Set(ByVal value As String)
            poroto_21_1 = value
        End Set
    End Property
    Public Property propiedad_poroto_21_2() As String
        Get
            Return poroto_21_2
        End Get
        Set(ByVal value As String)
            poroto_21_2 = value
        End Set
    End Property
    Public Property propiedad_poroto_21_3() As String
        Get
            Return poroto_21_3
        End Get
        Set(ByVal value As String)
            poroto_21_3 = value
        End Set
    End Property
    Public Property propiedad_poroto_22() As String
        Get
            Return poroto_22
        End Get
        Set(ByVal value As String)
            poroto_22 = value
        End Set
    End Property
    Public Property propiedad_poroto_22_1() As String
        Get
            Return poroto_22_1
        End Get
        Set(ByVal value As String)
            poroto_22_1 = value
        End Set
    End Property
    Public Property propiedad_poroto_22_2() As String
        Get
            Return poroto_22_2
        End Get
        Set(ByVal value As String)
            poroto_22_2 = value
        End Set
    End Property
    Public Property propiedad_poroto_22_3() As String
        Get
            Return poroto_22_3
        End Get
        Set(ByVal value As String)
            poroto_22_3 = value
        End Set
    End Property
    Public Property propiedad_poroto_22_4() As String
        Get
            Return poroto_22_4
        End Get
        Set(ByVal value As String)
            poroto_22_4 = value
        End Set
    End Property
    Public Property propiedad_poroto_22_5() As String
        Get
            Return poroto_22_5
        End Get
        Set(ByVal value As String)
            poroto_22_5 = value
        End Set
    End Property
    Public Property propiedad_poroto_22_6() As String
        Get
            Return poroto_22_6
        End Get
        Set(ByVal value As String)
            poroto_22_6 = value
        End Set
    End Property
    Public Property propiedad_poroto_22_7() As String
        Get
            Return poroto_22_7
        End Get
        Set(ByVal value As String)
            poroto_22_7 = value
        End Set
    End Property
    Public Property propiedad_poroto_22_8() As String
        Get
            Return poroto_22_8
        End Get
        Set(ByVal value As String)
            poroto_22_8 = value
        End Set
    End Property
    Public Property propiedad_poroto_22_9() As String
        Get
            Return poroto_22_9
        End Get
        Set(ByVal value As String)
            poroto_22_9 = value
        End Set
    End Property
    Public Property propiedad_poroto_23() As String
        Get
            Return poroto_23
        End Get
        Set(ByVal value As String)
            poroto_23 = value
        End Set
    End Property
    Public Property propiedad_poroto_23_1() As String
        Get
            Return poroto_23_1
        End Get
        Set(ByVal value As String)
            poroto_23_1 = value
        End Set
    End Property
    Public Property propiedad_poroto_23_2() As String
        Get
            Return poroto_23_2
        End Get
        Set(ByVal value As String)
            poroto_23_2 = value
        End Set
    End Property
    Public Property propiedad_poroto_23_3() As String
        Get
            Return poroto_23_3
        End Get
        Set(ByVal value As String)
            poroto_23_3 = value
        End Set
    End Property
    Public Property propiedad_poroto_23_4() As String
        Get
            Return poroto_23_4
        End Get
        Set(ByVal value As String)
            poroto_23_4 = value
        End Set
    End Property
    Public Property propiedad_poroto_24() As String
        Get
            Return poroto_24
        End Get
        Set(ByVal value As String)
            poroto_24 = value
        End Set
    End Property
    Public Property propiedad_poroto_24_1() As String
        Get
            Return poroto_24_1
        End Get
        Set(ByVal value As String)
            poroto_24_1 = value
        End Set
    End Property
    Public Property propiedad_poroto_24_2() As String
        Get
            Return poroto_24_2
        End Get
        Set(ByVal value As String)
            poroto_24_2 = value
        End Set
    End Property
    Public Property propiedad_poroto_24_3() As String
        Get
            Return poroto_24_3
        End Get
        Set(ByVal value As String)
            poroto_24_3 = value
        End Set
    End Property
    Public Property propiedad_poroto_24_4() As String
        Get
            Return poroto_24_4
        End Get
        Set(ByVal value As String)
            poroto_24_4 = value
        End Set
    End Property
    Public Property propiedad_poroto_24_5() As String
        Get
            Return poroto_24_5
        End Get
        Set(ByVal value As String)
            poroto_24_5 = value
        End Set
    End Property
    Public Property propiedad_papa_20() As String
        Get
            Return papa_20
        End Get
        Set(ByVal value As String)
            papa_20 = value
        End Set
    End Property
    Public Property propiedad_papa_20_1() As String
        Get
            Return papa_20_1
        End Get
        Set(ByVal value As String)
            papa_20_1 = value
        End Set
    End Property
    Public Property propiedad_papa_20_2() As String
        Get
            Return papa_20_2
        End Get
        Set(ByVal value As String)
            papa_20_2 = value
        End Set
    End Property
    Public Property propiedad_papa_20_3() As String
        Get
            Return papa_20_3
        End Get
        Set(ByVal value As String)
            papa_20_3 = value
        End Set
    End Property
    Public Property propiedad_papa_20_4() As String
        Get
            Return papa_20_4
        End Get
        Set(ByVal value As String)
            papa_20_4 = value
        End Set
    End Property
    Public Property propiedad_papa_20_5() As String
        Get
            Return papa_20_5
        End Get
        Set(ByVal value As String)
            papa_20_5 = value
        End Set
    End Property
    Public Property propiedad_papa_21() As String
        Get
            Return papa_21
        End Get
        Set(ByVal value As String)
            papa_21 = value
        End Set
    End Property
    Public Property propiedad_papa_21_1() As String
        Get
            Return papa_21_1
        End Get
        Set(ByVal value As String)
            papa_21_1 = value
        End Set
    End Property
    Public Property propiedad_papa_21_2() As String
        Get
            Return papa_21_2
        End Get
        Set(ByVal value As String)
            papa_21_2 = value
        End Set
    End Property
    Public Property propiedad_papa_21_3() As String
        Get
            Return papa_21_3
        End Get
        Set(ByVal value As String)
            papa_21_3 = value
        End Set
    End Property
    Public Property propiedad_papa_22() As String
        Get
            Return papa_22
        End Get
        Set(ByVal value As String)
            papa_22 = value
        End Set
    End Property
    Public Property propiedad_papa_22_1() As String
        Get
            Return papa_22_1
        End Get
        Set(ByVal value As String)
            papa_22_1 = value
        End Set
    End Property
    Public Property propiedad_papa_22_2() As String
        Get
            Return papa_22_2
        End Get
        Set(ByVal value As String)
            papa_22_2 = value
        End Set
    End Property
    Public Property propiedad_papa_22_3() As String
        Get
            Return papa_22_3
        End Get
        Set(ByVal value As String)
            papa_22_3 = value
        End Set
    End Property
    Public Property propiedad_papa_22_4() As String
        Get
            Return papa_22_4
        End Get
        Set(ByVal value As String)
            papa_22_4 = value
        End Set
    End Property
    Public Property propiedad_papa_22_5() As String
        Get
            Return papa_22_5
        End Get
        Set(ByVal value As String)
            papa_22_5 = value
        End Set
    End Property
    Public Property propiedad_papa_22_6() As String
        Get
            Return papa_22_6
        End Get
        Set(ByVal value As String)
            papa_22_6 = value
        End Set
    End Property
    Public Property propiedad_papa_22_7() As String
        Get
            Return papa_22_7
        End Get
        Set(ByVal value As String)
            papa_22_7 = value
        End Set
    End Property
    Public Property propiedad_papa_22_8() As String
        Get
            Return papa_22_8
        End Get
        Set(ByVal value As String)
            papa_22_8 = value
        End Set
    End Property
    Public Property propiedad_papa_22_9() As String
        Get
            Return papa_22_9
        End Get
        Set(ByVal value As String)
            papa_22_9 = value
        End Set
    End Property
    Public Property propiedad_papa_23() As String
        Get
            Return papa_23
        End Get
        Set(ByVal value As String)
            papa_23 = value
        End Set
    End Property
    Public Property propiedad_papa_23_1() As String
        Get
            Return papa_23_1
        End Get
        Set(ByVal value As String)
            papa_23_1 = value
        End Set
    End Property
    Public Property propiedad_papa_23_2() As String
        Get
            Return papa_23_2
        End Get
        Set(ByVal value As String)
            papa_23_2 = value
        End Set
    End Property
    Public Property propiedad_papa_23_3() As String
        Get
            Return papa_23_3
        End Get
        Set(ByVal value As String)
            papa_23_3 = value
        End Set
    End Property
    Public Property propiedad_papa_23_4() As String
        Get
            Return papa_23_4
        End Get
        Set(ByVal value As String)
            papa_23_4 = value
        End Set
    End Property
    Public Property propiedad_papa_24() As String
        Get
            Return papa_24
        End Get
        Set(ByVal value As String)
            papa_24 = value
        End Set
    End Property
    Public Property propiedad_papa_24_1() As String
        Get
            Return papa_24_1
        End Get
        Set(ByVal value As String)
            papa_24_1 = value
        End Set
    End Property
    Public Property propiedad_papa_24_2() As String
        Get
            Return papa_24_2
        End Get
        Set(ByVal value As String)
            papa_24_2 = value
        End Set
    End Property
    Public Property propiedad_papa_24_3() As String
        Get
            Return papa_24_3
        End Get
        Set(ByVal value As String)
            papa_24_3 = value
        End Set
    End Property
    Public Property propiedad_papa_24_4() As String
        Get
            Return papa_24_4
        End Get
        Set(ByVal value As String)
            papa_24_4 = value
        End Set
    End Property
    Public Property propiedad_papa_24_5() As String
        Get
            Return papa_24_5
        End Get
        Set(ByVal value As String)
            papa_24_5 = value
        End Set
    End Property
    Public Property propiedad_raps_25_1() As String
        Get
            Return raps_25_1
        End Get
        Set(ByVal value As String)
            raps_25_1 = value
        End Set
    End Property
    Public Property propiedad_raps_27() As String
        Get
            Return raps_27
        End Get
        Set(ByVal value As String)
            raps_27 = value
        End Set
    End Property
    Public Property propiedad_raps_27_1() As String
        Get
            Return raps_27_1
        End Get
        Set(ByVal value As String)
            raps_27_1 = value
        End Set
    End Property
    Public Property propiedad_raps_27_2() As String
        Get
            Return raps_27_2
        End Get
        Set(ByVal value As String)
            raps_27_2 = value
        End Set
    End Property
    Public Property propiedad_raps_27_3() As String
        Get
            Return raps_27_3
        End Get
        Set(ByVal value As String)
            raps_27_3 = value
        End Set
    End Property
    Public Property propiedad_raps_27_4() As String
        Get
            Return raps_27_4
        End Get
        Set(ByVal value As String)
            raps_27_4 = value
        End Set
    End Property
    Public Property propiedad_raps_27_5() As String
        Get
            Return raps_27_5
        End Get
        Set(ByVal value As String)
            raps_27_5 = value
        End Set
    End Property
    Public Property propiedad_raps_28() As String
        Get
            Return raps_28
        End Get
        Set(ByVal value As String)
            raps_28 = value
        End Set
    End Property
    Public Property propiedad_raps_28_1() As String
        Get
            Return raps_28_1
        End Get
        Set(ByVal value As String)
            raps_28_1 = value
        End Set
    End Property
    Public Property propiedad_raps_28_2() As String
        Get
            Return raps_28_2
        End Get
        Set(ByVal value As String)
            raps_28_2 = value
        End Set
    End Property
    Public Property propiedad_raps_28_3() As String
        Get
            Return raps_28_3
        End Get
        Set(ByVal value As String)
            raps_28_3 = value
        End Set
    End Property
    Public Property propiedad_raps_29() As String
        Get
            Return raps_29
        End Get
        Set(ByVal value As String)
            raps_29 = value
        End Set
    End Property
    Public Property propiedad_raps_29_1() As String
        Get
            Return raps_29_1
        End Get
        Set(ByVal value As String)
            raps_29_1 = value
        End Set
    End Property
    Public Property propiedad_raps_29_2() As String
        Get
            Return raps_29_2
        End Get
        Set(ByVal value As String)
            raps_29_2 = value
        End Set
    End Property
    Public Property propiedad_raps_29_3() As String
        Get
            Return raps_29_3
        End Get
        Set(ByVal value As String)
            raps_29_3 = value
        End Set
    End Property
    Public Property propiedad_raps_29_4() As String
        Get
            Return raps_29_4
        End Get
        Set(ByVal value As String)
            raps_29_4 = value
        End Set
    End Property
    Public Property propiedad_raps_29_5() As String
        Get
            Return raps_29_5
        End Get
        Set(ByVal value As String)
            raps_29_5 = value
        End Set
    End Property
    Public Property propiedad_raps_29_6() As String
        Get
            Return raps_29_6
        End Get
        Set(ByVal value As String)
            raps_29_6 = value
        End Set
    End Property
    Public Property propiedad_raps_29_7() As String
        Get
            Return raps_29_7
        End Get
        Set(ByVal value As String)
            raps_29_7 = value
        End Set
    End Property
    Public Property propiedad_raps_29_8() As String
        Get
            Return raps_29_8
        End Get
        Set(ByVal value As String)
            raps_29_8 = value
        End Set
    End Property
    Public Property propiedad_raps_29_9() As String
        Get
            Return raps_29_9
        End Get
        Set(ByVal value As String)
            raps_29_9 = value
        End Set
    End Property
    Public Property propiedad_raps_30() As String
        Get
            Return raps_30
        End Get
        Set(ByVal value As String)
            raps_30 = value
        End Set
    End Property
    Public Property propiedad_raps_30_1() As String
        Get
            Return raps_30_1
        End Get
        Set(ByVal value As String)
            raps_30_1 = value
        End Set
    End Property
    Public Property propiedad_raps_30_2() As String
        Get
            Return raps_30_2
        End Get
        Set(ByVal value As String)
            raps_30_2 = value
        End Set
    End Property
    Public Property propiedad_raps_30_3() As String
        Get
            Return raps_30_3
        End Get
        Set(ByVal value As String)
            raps_30_3 = value
        End Set
    End Property
    Public Property propiedad_raps_30_4() As String
        Get
            Return raps_30_4
        End Get
        Set(ByVal value As String)
            raps_30_4 = value
        End Set
    End Property
    Public Property propiedad_raps_31() As String
        Get
            Return raps_31
        End Get
        Set(ByVal value As String)
            raps_31 = value
        End Set
    End Property
    Public Property propiedad_raps_31_1() As String
        Get
            Return raps_31_1
        End Get
        Set(ByVal value As String)
            raps_31_1 = value
        End Set
    End Property
    Public Property propiedad_raps_31_2() As String
        Get
            Return raps_31_2
        End Get
        Set(ByVal value As String)
            raps_31_2 = value
        End Set
    End Property
    Public Property propiedad_raps_31_3() As String
        Get
            Return raps_31_3
        End Get
        Set(ByVal value As String)
            raps_31_3 = value
        End Set
    End Property
    Public Property propiedad_remolacha_25_2() As String
        Get
            Return remolacha_25_2
        End Get
        Set(ByVal value As String)
            remolacha_25_2 = value
        End Set
    End Property
    Public Property propiedad_remolacha_27() As String
        Get
            Return remolacha_27
        End Get
        Set(ByVal value As String)
            remolacha_27 = value
        End Set
    End Property
    Public Property propiedad_remolacha_27_1() As String
        Get
            Return remolacha_27_1
        End Get
        Set(ByVal value As String)
            remolacha_27_1 = value
        End Set
    End Property
    Public Property propiedad_remolacha_27_2() As String
        Get
            Return remolacha_27_2
        End Get
        Set(ByVal value As String)
            remolacha_27_2 = value
        End Set
    End Property
    Public Property propiedad_remolacha_27_3() As String
        Get
            Return remolacha_27_3
        End Get
        Set(ByVal value As String)
            remolacha_27_3 = value
        End Set
    End Property
    Public Property propiedad_remolacha_27_4() As String
        Get
            Return remolacha_27_4
        End Get
        Set(ByVal value As String)
            remolacha_27_4 = value
        End Set
    End Property
    Public Property propiedad_remolacha_27_5() As String
        Get
            Return remolacha_27_5
        End Get
        Set(ByVal value As String)
            remolacha_27_5 = value
        End Set
    End Property
    Public Property propiedad_remolacha_28() As String
        Get
            Return remolacha_28
        End Get
        Set(ByVal value As String)
            remolacha_28 = value
        End Set
    End Property
    Public Property propiedad_remolacha_28_1() As String
        Get
            Return remolacha_28_1
        End Get
        Set(ByVal value As String)
            remolacha_28_1 = value
        End Set
    End Property
    Public Property propiedad_remolacha_28_2() As String
        Get
            Return remolacha_28_2
        End Get
        Set(ByVal value As String)
            remolacha_28_2 = value
        End Set
    End Property
    Public Property propiedad_remolacha_28_3() As String
        Get
            Return remolacha_28_3
        End Get
        Set(ByVal value As String)
            remolacha_28_3 = value
        End Set
    End Property
    Public Property propiedad_remolacha_29() As String
        Get
            Return remolacha_29
        End Get
        Set(ByVal value As String)
            remolacha_29 = value
        End Set
    End Property
    Public Property propiedad_remolacha_29_1() As String
        Get
            Return remolacha_29_1
        End Get
        Set(ByVal value As String)
            remolacha_29_1 = value
        End Set
    End Property
    Public Property propiedad_remolacha_29_2() As String
        Get
            Return remolacha_29_2
        End Get
        Set(ByVal value As String)
            remolacha_29_2 = value
        End Set
    End Property
    Public Property propiedad_remolacha_29_3() As String
        Get
            Return remolacha_29_3
        End Get
        Set(ByVal value As String)
            remolacha_29_3 = value
        End Set
    End Property
    Public Property propiedad_remolacha_29_4() As String
        Get
            Return remolacha_29_4
        End Get
        Set(ByVal value As String)
            remolacha_29_4 = value
        End Set
    End Property
    Public Property propiedad_remolacha_29_5() As String
        Get
            Return remolacha_29_5
        End Get
        Set(ByVal value As String)
            remolacha_29_5 = value
        End Set
    End Property
    Public Property propiedad_remolacha_29_6() As String
        Get
            Return remolacha_29_6
        End Get
        Set(ByVal value As String)
            remolacha_29_6 = value
        End Set
    End Property
    Public Property propiedad_remolacha_29_7() As String
        Get
            Return remolacha_29_7
        End Get
        Set(ByVal value As String)
            remolacha_29_7 = value
        End Set
    End Property
    Public Property propiedad_remolacha_29_8() As String
        Get
            Return remolacha_29_8
        End Get
        Set(ByVal value As String)
            remolacha_29_8 = value
        End Set
    End Property
    Public Property propiedad_remolacha_29_9() As String
        Get
            Return remolacha_29_9
        End Get
        Set(ByVal value As String)
            remolacha_29_9 = value
        End Set
    End Property
    Public Property propiedad_remolacha_30() As String
        Get
            Return remolacha_30
        End Get
        Set(ByVal value As String)
            remolacha_30 = value
        End Set
    End Property
    Public Property propiedad_remolacha_30_1() As String
        Get
            Return remolacha_30_1
        End Get
        Set(ByVal value As String)
            remolacha_30_1 = value
        End Set
    End Property
    Public Property propiedad_remolacha_30_2() As String
        Get
            Return remolacha_30_2
        End Get
        Set(ByVal value As String)
            remolacha_30_2 = value
        End Set
    End Property
    Public Property propiedad_remolacha_30_3() As String
        Get
            Return remolacha_30_3
        End Get
        Set(ByVal value As String)
            remolacha_30_3 = value
        End Set
    End Property
    Public Property propiedad_remolacha_30_4() As String
        Get
            Return remolacha_30_4
        End Get
        Set(ByVal value As String)
            remolacha_30_4 = value
        End Set
    End Property
    Public Property propiedad_remolacha_31() As String
        Get
            Return remolacha_31
        End Get
        Set(ByVal value As String)
            remolacha_31 = value
        End Set
    End Property
    Public Property propiedad_remolacha_31_1() As String
        Get
            Return remolacha_31_1
        End Get
        Set(ByVal value As String)
            remolacha_31_1 = value
        End Set
    End Property
    Public Property propiedad_remolacha_31_2() As String
        Get
            Return remolacha_31_2
        End Get
        Set(ByVal value As String)
            remolacha_31_2 = value
        End Set
    End Property
    Public Property propiedad_remolacha_31_3() As String
        Get
            Return remolacha_31_3
        End Get
        Set(ByVal value As String)
            remolacha_31_3 = value
        End Set
    End Property
    Public Property propiedad_maravilla_25_3() As String
        Get
            Return maravilla_25_3
        End Get
        Set(ByVal value As String)
            maravilla_25_3 = value
        End Set
    End Property
    Public Property propiedad_maravilla_27() As String
        Get
            Return maravilla_27
        End Get
        Set(ByVal value As String)
            maravilla_27 = value
        End Set
    End Property
    Public Property propiedad_maravilla_27_1() As String
        Get
            Return maravilla_27_1
        End Get
        Set(ByVal value As String)
            maravilla_27_1 = value
        End Set
    End Property
    Public Property propiedad_maravilla_27_2() As String
        Get
            Return maravilla_27_2
        End Get
        Set(ByVal value As String)
            maravilla_27_2 = value
        End Set
    End Property
    Public Property propiedad_maravilla_27_3() As String
        Get
            Return maravilla_27_3
        End Get
        Set(ByVal value As String)
            maravilla_27_3 = value
        End Set
    End Property
    Public Property propiedad_maravilla_27_4() As String
        Get
            Return maravilla_27_4
        End Get
        Set(ByVal value As String)
            maravilla_27_4 = value
        End Set
    End Property
    Public Property propiedad_maravilla_27_5() As String
        Get
            Return maravilla_27_5
        End Get
        Set(ByVal value As String)
            maravilla_27_5 = value
        End Set
    End Property
    Public Property propiedad_maravilla_28() As String
        Get
            Return maravilla_28
        End Get
        Set(ByVal value As String)
            maravilla_28 = value
        End Set
    End Property
    Public Property propiedad_maravilla_28_1() As String
        Get
            Return maravilla_28_1
        End Get
        Set(ByVal value As String)
            maravilla_28_1 = value
        End Set
    End Property
    Public Property propiedad_maravilla_28_2() As String
        Get
            Return maravilla_28_2
        End Get
        Set(ByVal value As String)
            maravilla_28_2 = value
        End Set
    End Property
    Public Property propiedad_maravilla_28_3() As String
        Get
            Return maravilla_28_3
        End Get
        Set(ByVal value As String)
            maravilla_28_3 = value
        End Set
    End Property
    Public Property propiedad_maravilla_29() As String
        Get
            Return maravilla_29
        End Get
        Set(ByVal value As String)
            maravilla_29 = value
        End Set
    End Property
    Public Property propiedad_maravilla_29_1() As String
        Get
            Return maravilla_29_1
        End Get
        Set(ByVal value As String)
            maravilla_29_1 = value
        End Set
    End Property
    Public Property propiedad_maravilla_29_2() As String
        Get
            Return maravilla_29_2
        End Get
        Set(ByVal value As String)
            maravilla_29_2 = value
        End Set
    End Property
    Public Property propiedad_maravilla_29_3() As String
        Get
            Return maravilla_29_3
        End Get
        Set(ByVal value As String)
            maravilla_29_3 = value
        End Set
    End Property
    Public Property propiedad_maravilla_29_4() As String
        Get
            Return maravilla_29_4
        End Get
        Set(ByVal value As String)
            maravilla_29_4 = value
        End Set
    End Property
    Public Property propiedad_maravilla_29_5() As String
        Get
            Return maravilla_29_5
        End Get
        Set(ByVal value As String)
            maravilla_29_5 = value
        End Set
    End Property
    Public Property propiedad_maravilla_29_6() As String
        Get
            Return maravilla_29_6
        End Get
        Set(ByVal value As String)
            maravilla_29_6 = value
        End Set
    End Property
    Public Property propiedad_maravilla_29_7() As String
        Get
            Return maravilla_29_7
        End Get
        Set(ByVal value As String)
            maravilla_29_7 = value
        End Set
    End Property
    Public Property propiedad_maravilla_29_8() As String
        Get
            Return maravilla_29_8
        End Get
        Set(ByVal value As String)
            maravilla_29_8 = value
        End Set
    End Property
    Public Property propiedad_maravilla_29_9() As String
        Get
            Return maravilla_29_9
        End Get
        Set(ByVal value As String)
            maravilla_29_9 = value
        End Set
    End Property
    Public Property propiedad_maravilla_30() As String
        Get
            Return maravilla_30
        End Get
        Set(ByVal value As String)
            maravilla_30 = value
        End Set
    End Property
    Public Property propiedad_maravilla_30_1() As String
        Get
            Return maravilla_30_1
        End Get
        Set(ByVal value As String)
            maravilla_30_1 = value
        End Set
    End Property
    Public Property propiedad_maravilla_30_2() As String
        Get
            Return maravilla_30_2
        End Get
        Set(ByVal value As String)
            maravilla_30_2 = value
        End Set
    End Property
    Public Property propiedad_maravilla_30_3() As String
        Get
            Return maravilla_30_3
        End Get
        Set(ByVal value As String)
            maravilla_30_3 = value
        End Set
    End Property
    Public Property propiedad_maravilla_30_4() As String
        Get
            Return maravilla_30_4
        End Get
        Set(ByVal value As String)
            maravilla_30_4 = value
        End Set
    End Property
    Public Property propiedad_maravilla_31() As String
        Get
            Return maravilla_31
        End Get
        Set(ByVal value As String)
            maravilla_31 = value
        End Set
    End Property
    Public Property propiedad_maravilla_31_1() As String
        Get
            Return maravilla_31_1
        End Get
        Set(ByVal value As String)
            maravilla_31_1 = value
        End Set
    End Property
    Public Property propiedad_maravilla_31_2() As String
        Get
            Return maravilla_31_2
        End Get
        Set(ByVal value As String)
            maravilla_31_2 = value
        End Set
    End Property
    Public Property propiedad_maravilla_31_3() As String
        Get
            Return maravilla_31_3
        End Get
        Set(ByVal value As String)
            maravilla_31_3 = value
        End Set
    End Property
    Public Property propiedad_achicoria_25_4() As String
        Get
            Return achicoria_25_4
        End Get
        Set(ByVal value As String)
            achicoria_25_4 = value
        End Set
    End Property
    Public Property propiedad_achicoria_27() As String
        Get
            Return achicoria_27
        End Get
        Set(ByVal value As String)
            achicoria_27 = value
        End Set
    End Property
    Public Property propiedad_achicoria_27_1() As String
        Get
            Return achicoria_27_1
        End Get
        Set(ByVal value As String)
            achicoria_27_1 = value
        End Set
    End Property
    Public Property propiedad_achicoria_27_2() As String
        Get
            Return achicoria_27_2
        End Get
        Set(ByVal value As String)
            achicoria_27_2 = value
        End Set
    End Property
    Public Property propiedad_achicoria_27_3() As String
        Get
            Return achicoria_27_3
        End Get
        Set(ByVal value As String)
            achicoria_27_3 = value
        End Set
    End Property
    Public Property propiedad_achicoria_27_4() As String
        Get
            Return achicoria_27_4
        End Get
        Set(ByVal value As String)
            achicoria_27_4 = value
        End Set
    End Property
    Public Property propiedad_achicoria_27_5() As String
        Get
            Return achicoria_27_5
        End Get
        Set(ByVal value As String)
            achicoria_27_5 = value
        End Set
    End Property
    Public Property propiedad_achicoria_28() As String
        Get
            Return achicoria_28
        End Get
        Set(ByVal value As String)
            achicoria_28 = value
        End Set
    End Property
    Public Property propiedad_achicoria_28_1() As String
        Get
            Return achicoria_28_1
        End Get
        Set(ByVal value As String)
            achicoria_28_1 = value
        End Set
    End Property
    Public Property propiedad_achicoria_28_2() As String
        Get
            Return achicoria_28_2
        End Get
        Set(ByVal value As String)
            achicoria_28_2 = value
        End Set
    End Property
    Public Property propiedad_achicoria_28_3() As String
        Get
            Return achicoria_28_3
        End Get
        Set(ByVal value As String)
            achicoria_28_3 = value
        End Set
    End Property
    Public Property propiedad_achicoria_29() As String
        Get
            Return achicoria_29
        End Get
        Set(ByVal value As String)
            achicoria_29 = value
        End Set
    End Property
    Public Property propiedad_achicoria_29_1() As String
        Get
            Return achicoria_29_1
        End Get
        Set(ByVal value As String)
            achicoria_29_1 = value
        End Set
    End Property
    Public Property propiedad_achicoria_29_2() As String
        Get
            Return achicoria_29_2
        End Get
        Set(ByVal value As String)
            achicoria_29_2 = value
        End Set
    End Property
    Public Property propiedad_achicoria_29_3() As String
        Get
            Return achicoria_29_3
        End Get
        Set(ByVal value As String)
            achicoria_29_3 = value
        End Set
    End Property
    Public Property propiedad_achicoria_29_4() As String
        Get
            Return achicoria_29_4
        End Get
        Set(ByVal value As String)
            achicoria_29_4 = value
        End Set
    End Property
    Public Property propiedad_achicoria_29_5() As String
        Get
            Return achicoria_29_5
        End Get
        Set(ByVal value As String)
            achicoria_29_5 = value
        End Set
    End Property
    Public Property propiedad_achicoria_29_6() As String
        Get
            Return achicoria_29_6
        End Get
        Set(ByVal value As String)
            achicoria_29_6 = value
        End Set
    End Property
    Public Property propiedad_achicoria_29_7() As String
        Get
            Return achicoria_29_7
        End Get
        Set(ByVal value As String)
            achicoria_29_7 = value
        End Set
    End Property
    Public Property propiedad_achicoria_29_8() As String
        Get
            Return achicoria_29_8
        End Get
        Set(ByVal value As String)
            achicoria_29_8 = value
        End Set
    End Property
    Public Property propiedad_achicoria_29_9() As String
        Get
            Return achicoria_29_9
        End Get
        Set(ByVal value As String)
            achicoria_29_9 = value
        End Set
    End Property
    Public Property propiedad_achicoria_30() As String
        Get
            Return achicoria_30
        End Get
        Set(ByVal value As String)
            achicoria_30 = value
        End Set
    End Property
    Public Property propiedad_achicoria_30_1() As String
        Get
            Return achicoria_30_1
        End Get
        Set(ByVal value As String)
            achicoria_30_1 = value
        End Set
    End Property
    Public Property propiedad_achicoria_30_2() As String
        Get
            Return achicoria_30_2
        End Get
        Set(ByVal value As String)
            achicoria_30_2 = value
        End Set
    End Property
    Public Property propiedad_achicoria_30_3() As String
        Get
            Return achicoria_30_3
        End Get
        Set(ByVal value As String)
            achicoria_30_3 = value
        End Set
    End Property
    Public Property propiedad_achicoria_30_4() As String
        Get
            Return achicoria_30_4
        End Get
        Set(ByVal value As String)
            achicoria_30_4 = value
        End Set
    End Property
    Public Property propiedad_achicoria_31() As String
        Get
            Return achicoria_31
        End Get
        Set(ByVal value As String)
            achicoria_31 = value
        End Set
    End Property
    Public Property propiedad_achicoria_31_1() As String
        Get
            Return achicoria_31_1
        End Get
        Set(ByVal value As String)
            achicoria_31_1 = value
        End Set
    End Property
    Public Property propiedad_achicoria_31_2() As String
        Get
            Return achicoria_31_2
        End Get
        Set(ByVal value As String)
            achicoria_31_2 = value
        End Set
    End Property
    Public Property propiedad_achicoria_31_3() As String
        Get
            Return achicoria_31_3
        End Get
        Set(ByVal value As String)
            achicoria_31_3 = value
        End Set
    End Property
    Public Property propiedad_tomate_25_5() As String
        Get
            Return tomate_25_5
        End Get
        Set(ByVal value As String)
            tomate_25_5 = value
        End Set
    End Property
    Public Property propiedad_tomate_27() As String
        Get
            Return tomate_27
        End Get
        Set(ByVal value As String)
            tomate_27 = value
        End Set
    End Property
    Public Property propiedad_tomate_27_1() As String
        Get
            Return tomate_27_1
        End Get
        Set(ByVal value As String)
            tomate_27_1 = value
        End Set
    End Property
    Public Property propiedad_tomate_27_2() As String
        Get
            Return tomate_27_2
        End Get
        Set(ByVal value As String)
            tomate_27_2 = value
        End Set
    End Property
    Public Property propiedad_tomate_27_3() As String
        Get
            Return tomate_27_3
        End Get
        Set(ByVal value As String)
            tomate_27_3 = value
        End Set
    End Property
    Public Property propiedad_tomate_27_4() As String
        Get
            Return tomate_27_4
        End Get
        Set(ByVal value As String)
            tomate_27_4 = value
        End Set
    End Property
    Public Property propiedad_tomate_27_5() As String
        Get
            Return tomate_27_5
        End Get
        Set(ByVal value As String)
            tomate_27_5 = value
        End Set
    End Property
    Public Property propiedad_tomate_28() As String
        Get
            Return tomate_28
        End Get
        Set(ByVal value As String)
            tomate_28 = value
        End Set
    End Property
    Public Property propiedad_tomate_28_1() As String
        Get
            Return tomate_28_1
        End Get
        Set(ByVal value As String)
            tomate_28_1 = value
        End Set
    End Property
    Public Property propiedad_tomate_28_2() As String
        Get
            Return tomate_28_2
        End Get
        Set(ByVal value As String)
            tomate_28_2 = value
        End Set
    End Property
    Public Property propiedad_tomate_28_3() As String
        Get
            Return tomate_28_3
        End Get
        Set(ByVal value As String)
            tomate_28_3 = value
        End Set
    End Property
    Public Property propiedad_tomate_29() As String
        Get
            Return tomate_29
        End Get
        Set(ByVal value As String)
            tomate_29 = value
        End Set
    End Property
    Public Property propiedad_tomate_29_1() As String
        Get
            Return tomate_29_1
        End Get
        Set(ByVal value As String)
            tomate_29_1 = value
        End Set
    End Property
    Public Property propiedad_tomate_29_2() As String
        Get
            Return tomate_29_2
        End Get
        Set(ByVal value As String)
            tomate_29_2 = value
        End Set
    End Property
    Public Property propiedad_tomate_29_3() As String
        Get
            Return tomate_29_3
        End Get
        Set(ByVal value As String)
            tomate_29_3 = value
        End Set
    End Property
    Public Property propiedad_tomate_29_4() As String
        Get
            Return tomate_29_4
        End Get
        Set(ByVal value As String)
            tomate_29_4 = value
        End Set
    End Property
    Public Property propiedad_tomate_29_5() As String
        Get
            Return tomate_29_5
        End Get
        Set(ByVal value As String)
            tomate_29_5 = value
        End Set
    End Property
    Public Property propiedad_tomate_29_6() As String
        Get
            Return tomate_29_6
        End Get
        Set(ByVal value As String)
            tomate_29_6 = value
        End Set
    End Property
    Public Property propiedad_tomate_29_7() As String
        Get
            Return tomate_29_7
        End Get
        Set(ByVal value As String)
            tomate_29_7 = value
        End Set
    End Property
    Public Property propiedad_tomate_29_8() As String
        Get
            Return tomate_29_8
        End Get
        Set(ByVal value As String)
            tomate_29_8 = value
        End Set
    End Property
    Public Property propiedad_tomate_29_9() As String
        Get
            Return tomate_29_9
        End Get
        Set(ByVal value As String)
            tomate_29_9 = value
        End Set
    End Property
    Public Property propiedad_tomate_30() As String
        Get
            Return tomate_30
        End Get
        Set(ByVal value As String)
            tomate_30 = value
        End Set
    End Property
    Public Property propiedad_tomate_30_1() As String
        Get
            Return tomate_30_1
        End Get
        Set(ByVal value As String)
            tomate_30_1 = value
        End Set
    End Property
    Public Property propiedad_tomate_30_2() As String
        Get
            Return tomate_30_2
        End Get
        Set(ByVal value As String)
            tomate_30_2 = value
        End Set
    End Property
    Public Property propiedad_tomate_30_3() As String
        Get
            Return tomate_30_3
        End Get
        Set(ByVal value As String)
            tomate_30_3 = value
        End Set
    End Property
    Public Property propiedad_tomate_30_4() As String
        Get
            Return tomate_30_4
        End Get
        Set(ByVal value As String)
            tomate_30_4 = value
        End Set
    End Property
    Public Property propiedad_tomate_31() As String
        Get
            Return tomate_31
        End Get
        Set(ByVal value As String)
            tomate_31 = value
        End Set
    End Property
    Public Property propiedad_tomate_31_1() As String
        Get
            Return tomate_31_1
        End Get
        Set(ByVal value As String)
            tomate_31_1 = value
        End Set
    End Property
    Public Property propiedad_tomate_31_2() As String
        Get
            Return tomate_31_2
        End Get
        Set(ByVal value As String)
            tomate_31_2 = value
        End Set
    End Property
    Public Property propiedad_tomate_31_3() As String
        Get
            Return tomate_31_3
        End Get
        Set(ByVal value As String)
            tomate_31_3 = value
        End Set
    End Property
    Public Property propiedad_lupino_25_6() As String
        Get
            Return lupino_25_6
        End Get
        Set(ByVal value As String)
            lupino_25_6 = value
        End Set
    End Property
    Public Property propiedad_lupino_27() As String
        Get
            Return lupino_27
        End Get
        Set(ByVal value As String)
            lupino_27 = value
        End Set
    End Property
    Public Property propiedad_lupino_27_1() As String
        Get
            Return lupino_27_1
        End Get
        Set(ByVal value As String)
            lupino_27_1 = value
        End Set
    End Property
    Public Property propiedad_lupino_27_2() As String
        Get
            Return lupino_27_2
        End Get
        Set(ByVal value As String)
            lupino_27_2 = value
        End Set
    End Property
    Public Property propiedad_lupino_27_3() As String
        Get
            Return lupino_27_3
        End Get
        Set(ByVal value As String)
            lupino_27_3 = value
        End Set
    End Property
    Public Property propiedad_lupino_27_4() As String
        Get
            Return lupino_27_4
        End Get
        Set(ByVal value As String)
            lupino_27_4 = value
        End Set
    End Property
    Public Property propiedad_lupino_27_5() As String
        Get
            Return lupino_27_5
        End Get
        Set(ByVal value As String)
            lupino_27_5 = value
        End Set
    End Property
    Public Property propiedad_lupino_28() As String
        Get
            Return lupino_28
        End Get
        Set(ByVal value As String)
            lupino_28 = value
        End Set
    End Property
    Public Property propiedad_lupino_28_1() As String
        Get
            Return lupino_28_1
        End Get
        Set(ByVal value As String)
            lupino_28_1 = value
        End Set
    End Property
    Public Property propiedad_lupino_28_2() As String
        Get
            Return lupino_28_2
        End Get
        Set(ByVal value As String)
            lupino_28_2 = value
        End Set
    End Property
    Public Property propiedad_lupino_28_3() As String
        Get
            Return lupino_28_3
        End Get
        Set(ByVal value As String)
            lupino_28_3 = value
        End Set
    End Property
    Public Property propiedad_lupino_29() As String
        Get
            Return lupino_29
        End Get
        Set(ByVal value As String)
            lupino_29 = value
        End Set
    End Property
    Public Property propiedad_lupino_29_1() As String
        Get
            Return lupino_29_1
        End Get
        Set(ByVal value As String)
            lupino_29_1 = value
        End Set
    End Property
    Public Property propiedad_lupino_29_2() As String
        Get
            Return lupino_29_2
        End Get
        Set(ByVal value As String)
            lupino_29_2 = value
        End Set
    End Property
    Public Property propiedad_lupino_29_3() As String
        Get
            Return lupino_29_3
        End Get
        Set(ByVal value As String)
            lupino_29_3 = value
        End Set
    End Property
    Public Property propiedad_lupino_29_4() As String
        Get
            Return lupino_29_4
        End Get
        Set(ByVal value As String)
            lupino_29_4 = value
        End Set
    End Property
    Public Property propiedad_lupino_29_5() As String
        Get
            Return lupino_29_5
        End Get
        Set(ByVal value As String)
            lupino_29_5 = value
        End Set
    End Property
    Public Property propiedad_lupino_29_6() As String
        Get
            Return lupino_29_6
        End Get
        Set(ByVal value As String)
            lupino_29_6 = value
        End Set
    End Property
    Public Property propiedad_lupino_29_7() As String
        Get
            Return lupino_29_7
        End Get
        Set(ByVal value As String)
            lupino_29_7 = value
        End Set
    End Property
    Public Property propiedad_lupino_29_8() As String
        Get
            Return lupino_29_8
        End Get
        Set(ByVal value As String)
            lupino_29_8 = value
        End Set
    End Property
    Public Property propiedad_lupino_29_9() As String
        Get
            Return lupino_29_9
        End Get
        Set(ByVal value As String)
            lupino_29_9 = value
        End Set
    End Property
    Public Property propiedad_lupino_30() As String
        Get
            Return lupino_30
        End Get
        Set(ByVal value As String)
            lupino_30 = value
        End Set
    End Property
    Public Property propiedad_lupino_30_1() As String
        Get
            Return lupino_30_1
        End Get
        Set(ByVal value As String)
            lupino_30_1 = value
        End Set
    End Property
    Public Property propiedad_lupino_30_2() As String
        Get
            Return lupino_30_2
        End Get
        Set(ByVal value As String)
            lupino_30_2 = value
        End Set
    End Property
    Public Property propiedad_lupino_30_3() As String
        Get
            Return lupino_30_3
        End Get
        Set(ByVal value As String)
            lupino_30_3 = value
        End Set
    End Property
    Public Property propiedad_lupino_30_4() As String
        Get
            Return lupino_30_4
        End Get
        Set(ByVal value As String)
            lupino_30_4 = value
        End Set
    End Property
    Public Property propiedad_lupino_31() As String
        Get
            Return lupino_31
        End Get
        Set(ByVal value As String)
            lupino_31 = value
        End Set
    End Property
    Public Property propiedad_lupino_31_1() As String
        Get
            Return lupino_31_1
        End Get
        Set(ByVal value As String)
            lupino_31_1 = value
        End Set
    End Property
    Public Property propiedad_lupino_31_2() As String
        Get
            Return lupino_31_2
        End Get
        Set(ByVal value As String)
            lupino_31_2 = value
        End Set
    End Property
    Public Property propiedad_lupino_31_3() As String
        Get
            Return lupino_31_3
        End Get
        Set(ByVal value As String)
            lupino_31_3 = value
        End Set
    End Property
    Public Property propiedad_tabaco_25_7() As String
        Get
            Return tabaco_25_7
        End Get
        Set(ByVal value As String)
            tabaco_25_7 = value
        End Set
    End Property
    Public Property propiedad_tabaco_27() As String
        Get
            Return tabaco_27
        End Get
        Set(ByVal value As String)
            tabaco_27 = value
        End Set
    End Property
    Public Property propiedad_tabaco_27_1() As String
        Get
            Return tabaco_27_1
        End Get
        Set(ByVal value As String)
            tabaco_27_1 = value
        End Set
    End Property
    Public Property propiedad_tabaco_27_2() As String
        Get
            Return tabaco_27_2
        End Get
        Set(ByVal value As String)
            tabaco_27_2 = value
        End Set
    End Property
    Public Property propiedad_tabaco_27_3() As String
        Get
            Return tabaco_27_3
        End Get
        Set(ByVal value As String)
            tabaco_27_3 = value
        End Set
    End Property
    Public Property propiedad_tabaco_27_4() As String
        Get
            Return tabaco_27_4
        End Get
        Set(ByVal value As String)
            tabaco_27_4 = value
        End Set
    End Property
    Public Property propiedad_tabaco_27_5() As String
        Get
            Return tabaco_27_5
        End Get
        Set(ByVal value As String)
            tabaco_27_5 = value
        End Set
    End Property
    Public Property propiedad_tabaco_28() As String
        Get
            Return tabaco_28
        End Get
        Set(ByVal value As String)
            tabaco_28 = value
        End Set
    End Property
    Public Property propiedad_tabaco_28_1() As String
        Get
            Return tabaco_28_1
        End Get
        Set(ByVal value As String)
            tabaco_28_1 = value
        End Set
    End Property
    Public Property propiedad_tabaco_28_2() As String
        Get
            Return tabaco_28_2
        End Get
        Set(ByVal value As String)
            tabaco_28_2 = value
        End Set
    End Property
    Public Property propiedad_tabaco_28_3() As String
        Get
            Return tabaco_28_3
        End Get
        Set(ByVal value As String)
            tabaco_28_3 = value
        End Set
    End Property
    Public Property propiedad_tabaco_29() As String
        Get
            Return tabaco_29
        End Get
        Set(ByVal value As String)
            tabaco_29 = value
        End Set
    End Property
    Public Property propiedad_tabaco_29_1() As String
        Get
            Return tabaco_29_1
        End Get
        Set(ByVal value As String)
            tabaco_29_1 = value
        End Set
    End Property
    Public Property propiedad_tabaco_29_2() As String
        Get
            Return tabaco_29_2
        End Get
        Set(ByVal value As String)
            tabaco_29_2 = value
        End Set
    End Property
    Public Property propiedad_tabaco_29_3() As String
        Get
            Return tabaco_29_3
        End Get
        Set(ByVal value As String)
            tabaco_29_3 = value
        End Set
    End Property
    Public Property propiedad_tabaco_29_4() As String
        Get
            Return tabaco_29_4
        End Get
        Set(ByVal value As String)
            tabaco_29_4 = value
        End Set
    End Property
    Public Property propiedad_tabaco_29_5() As String
        Get
            Return tabaco_29_5
        End Get
        Set(ByVal value As String)
            tabaco_29_5 = value
        End Set
    End Property
    Public Property propiedad_tabaco_29_6() As String
        Get
            Return tabaco_29_6
        End Get
        Set(ByVal value As String)
            tabaco_29_6 = value
        End Set
    End Property
    Public Property propiedad_tabaco_29_7() As String
        Get
            Return tabaco_29_7
        End Get
        Set(ByVal value As String)
            tabaco_29_7 = value
        End Set
    End Property
    Public Property propiedad_tabaco_29_8() As String
        Get
            Return tabaco_29_8
        End Get
        Set(ByVal value As String)
            tabaco_29_8 = value
        End Set
    End Property
    Public Property propiedad_tabaco_29_9() As String
        Get
            Return tabaco_29_9
        End Get
        Set(ByVal value As String)
            tabaco_29_9 = value
        End Set
    End Property
    Public Property propiedad_tabaco_30() As String
        Get
            Return tabaco_30
        End Get
        Set(ByVal value As String)
            tabaco_30 = value
        End Set
    End Property
    Public Property propiedad_tabaco_30_1() As String
        Get
            Return tabaco_30_1
        End Get
        Set(ByVal value As String)
            tabaco_30_1 = value
        End Set
    End Property
    Public Property propiedad_tabaco_30_2() As String
        Get
            Return tabaco_30_2
        End Get
        Set(ByVal value As String)
            tabaco_30_2 = value
        End Set
    End Property
    Public Property propiedad_tabaco_30_3() As String
        Get
            Return tabaco_30_3
        End Get
        Set(ByVal value As String)
            tabaco_30_3 = value
        End Set
    End Property
    Public Property propiedad_tabaco_30_4() As String
        Get
            Return tabaco_30_4
        End Get
        Set(ByVal value As String)
            tabaco_30_4 = value
        End Set
    End Property
    Public Property propiedad_tabaco_31() As String
        Get
            Return tabaco_31
        End Get
        Set(ByVal value As String)
            tabaco_31 = value
        End Set
    End Property
    Public Property propiedad_tabaco_31_1() As String
        Get
            Return tabaco_31_1
        End Get
        Set(ByVal value As String)
            tabaco_31_1 = value
        End Set
    End Property
    Public Property propiedad_tabaco_31_2() As String
        Get
            Return tabaco_31_2
        End Get
        Set(ByVal value As String)
            tabaco_31_2 = value
        End Set
    End Property
    Public Property propiedad_tabaco_31_3() As String
        Get
            Return tabaco_31_3
        End Get
        Set(ByVal value As String)
            tabaco_31_3 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_26_1_1() As String
        Get
            Return sup_reg_26_1_1
        End Get
        Set(ByVal value As String)
            sup_reg_26_1_1 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_26_1_2() As String
        Get
            Return sup_reg_26_1_2
        End Get
        Set(ByVal value As String)
            sup_reg_26_1_2 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_26_1_3() As String
        Get
            Return sup_reg_26_1_3
        End Get
        Set(ByVal value As String)
            sup_reg_26_1_3 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_26_1_4() As String
        Get
            Return sup_reg_26_1_4
        End Get
        Set(ByVal value As String)
            sup_reg_26_1_4 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_26_1_5() As String
        Get
            Return sup_reg_26_1_5
        End Get
        Set(ByVal value As String)
            sup_reg_26_1_5 = value
        End Set
    End Property
    Public Property propiedad_sup_reg_26_1_6() As String
        Get
            Return sup_reg_26_1_6
        End Get
        Set(ByVal value As String)
            sup_reg_26_1_6 = value
        End Set
    End Property
    Public Property propiedad_sup_nac_26_2_1() As String
        Get
            Return sup_nac_26_2_1
        End Get
        Set(ByVal value As String)
            sup_nac_26_2_1 = value
        End Set
    End Property
    Public Property propiedad_sup_nac_26_2_2() As String
        Get
            Return sup_nac_26_2_2
        End Get
        Set(ByVal value As String)
            sup_nac_26_2_2 = value
        End Set
    End Property
    Public Property propiedad_sup_nac_26_2_3() As String
        Get
            Return sup_nac_26_2_3
        End Get
        Set(ByVal value As String)
            sup_nac_26_2_3 = value
        End Set
    End Property
    Public Property propiedad_sup_nac_26_2_4() As String
        Get
            Return sup_nac_26_2_4
        End Get
        Set(ByVal value As String)
            sup_nac_26_2_4 = value
        End Set
    End Property
    Public Property propiedad_sup_nac_26_2_5() As String
        Get
            Return sup_nac_26_2_5
        End Get
        Set(ByVal value As String)
            sup_nac_26_2_5 = value
        End Set
    End Property
    Public Property propiedad_sup_nac_26_2_6() As String
        Get
            Return sup_nac_26_2_6
        End Get
        Set(ByVal value As String)
            sup_nac_26_2_6 = value
        End Set
    End Property
    Public Property propiedad_nom_entre_inf() As String
        Get
            Return nom_entre_inf
        End Get
        Set(ByVal value As String)
            nom_entre_inf = value
        End Set
    End Property
    Public Property propiedad_Fecha() As String
        Get
            Return Fecha
        End Get
        Set(ByVal value As String)
            Fecha = value
        End Set
    End Property
    Public Property propiedad_tipoentrevista() As String
        Get
            Return tipoentrevista
        End Get
        Set(ByVal value As String)
            tipoentrevista = value
        End Set
    End Property
    Public Property propiedad_observaciones() As String
        Get
            Return observaciones
        End Get
        Set(ByVal value As String)
            observaciones = value
        End Set
    End Property
#End Region

#REGION "CONSTRUCTORES DE LA CLASE"

   ''' <summary>
   ''' Crea una instancia vacia del objeto
   ''' </summary>
   Public Sub New()

   End Sub

#END REGION

end class
