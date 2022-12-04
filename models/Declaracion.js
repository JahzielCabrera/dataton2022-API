const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DeclaracionSchema = new Schema({
  metadata: {
    actualizacion: Date,
    institucion: String,
    tipo: String,
    declaracionCompleta: Boolean,
    actualizacionConflictoInteres: Boolean
  },
  declaracion: {
    situacionPatrimonial: {
      datosGenerales: {
        nombre: String,
        primerApellido: String,
        segundoApellido: String,
        correoElectronico: {
          institucional: String
        }
      },
      datosCurricularesDeclarante: {
        escolaridad: [
          {
            tipoOperacion: String,
            nivel: {
              clave: String,
              valor: String
            },
            institucionEducativa: {
              nombre: String,
              ubicacion: String
            },
            carreraAreaConocimiento: String,
            estatus: String,
            documentoObtenido: String,
            fechaObtencion: String
          }
        ]
      },
      datosEmpleoCargoComision: {
        tipoOperacion: String,
        nivelOrdenGobierno: String,
        ambitoPublico: String,
        nombreEntePublico: String,
        areaAdscripcion: String,
        empleoCargoComision: String,
        contratadoPorHonorarios: Boolean,
        nivelEmpleoCargoComision: String,
        funcionPrincipal: String,
        fechaTomaPosesion: String,
        telefonoOficina: {
          telefono: String
        },
        domicilioMexico: {
          calle: String,
          numeroExterior: String,
          numeroInterior: String,
          coloniaLocalidad: String,
          municipioAlcaldia: {
            clave: String,
            valor: String
          },
          entidadFederativa: {
            clave: String,
            valor: String
          },
          codigoPostal: String
        },
        cuentaConOtroCargoPublico: Boolean,
        otroEmpleoCargoComision: [
          {
            ambitoPublico: String,
            contratadoPorHonorarios: Boolean
          }
        ]
      },
      experienciaLaboral: {
        ninguno: Boolean,
        experiencia: [
          {
            tipoOperacion: String,
            ambitoSector: {
              clave: String,
              valor: String
            },
            nivelOrdenGobierno: String,
            ambitoPublico: String,
            nombreEntePublico: String,
            areaAdscripcion: String,
            empleoCargoComision: String,
            funcionPrincipal: String,
            fechaIngreso: String,
            ubicacion: String
          }
        ]
      },
      ingresos: {
        remuneracionAnualCargoPublico: {
          valor: Number,
          moneda: String
        },
        otrosIngresosAnualesTotal: {
          valor: Number,
          moneda: String
        },
        actividadIndustrialComercialEmpresarial: {
          remuneracionTotal: {
            valor: Number,
            moneda: String
          },
          actividades: [
            {
              remuneracion: {
                valor: Number,
                moneda: String
              }
            }
          ]
        },
        actividadFinanciera: {
          remuneracionTotal: {
            valor: Number,
            moneda: String
          },
          actividades: [
            {
              remuneracion: {
                valor: Number,
                moneda: String
              }
            }
          ]
        },
        serviciosProfesionales: {
          remuneracionTotal: {
            valor: Number,
            moneda: String
          },
          servicios: [
            {
              remuneracion: {
                valor: Number,
                moneda: String
              }
            }
          ]
        },
        enajenacionBienes: {
          remuneracionTotal: {
            valor: Number,
            moneda: String
          },
          bienes: [
            {
              remuneracion: {
                valor: Number,
                moneda: String
              }
            }
          ]
        },
        otrosIngresos: {
          remuneracionTotal: {
            valor: String,
            moneda: String
          },
          ingresos: [
            {
              remuneracion: {
                moneda: String
              }
            }
          ]
        },
        ingresoAnualNetoDeclarante: {
          valor: Number,
          moneda: String
        },
        totalIngresosAnualesNetos: {
          String: Number,
          moneda: String
        }
      },
      bienesInmuebles: {
        ninguno: Boolean
      },
      vehiculos: {
        ninguno: Boolean
      },
      bienesMuebles: {
        ninguno: Boolean
      },
      inversiones: {
        ninguno: Boolean
      },
      adeudos: {
        ninguno: Boolean
      },
      prestamoOComodato: {
        ninguno: Boolean
      }
    },
    interes: {
      participacion: {
        ninguno: Boolean
      },
      participacionTomaDecisiones: {
        ninguno: Boolean
      },
      apoyos: {
        ninguno: Boolean
      },
      representacion: {
        ninguno: Boolean
      },
      clientesPrincipales: {
        ninguno: Boolean
      },
      beneficiosPrivados: {
        ninguno: Boolean
      },
      fideicomisos: {
        ninguno: Boolean
      }
    }
  },
  state: String
})

module.exports = mongoose.model("s1_declaraciones", DeclaracionSchema)


