# dataton2022-API

REST API con Express.JS

Puedes utilizarla en [api.datomicos.team/v1](https://api.datomicos.team/v1)

## Rutas de la API

 - Ruta para obtener las redes de jefes con al menos un empleado sancionado
	 - `GET -> https://api.datomicos.team/v1/network_jefes`
 -  Ruta para obtener la red de un jefe con al menos un empleado sancionado
	 - `GET -> https://api.datomicos.team/v1/network_jefes/{id}` 
	> Para pruebas puede usar el id: `6389b9b3e12ab76b243a3568`
-  Ruta para obtener la red de una instituciones con al menos un empleado sancionado
	- `GET -> https://api.datomicos.team/v1/network_instituciones` 
 -  Ruta para obtener la red de una institución con al menos un empleado sancionado
	 - `GET -> https://api.datomicos.team/v1/network_instituciones/{id}` 
	> Para pruebas puede usar el id: `6389b909e12ab76b243a354c`
 -  Ruta para obtener la declaración patrimonial de un funcionario
	 - `GET -> https://api.datomicos.team/v1/network_instituciones/{id}` 
	> Para pruebas puede usar el id: `63899e66ab09906e956be615`
-  Ruta para obtener la red de compañeros de trabajo relacionados con un servidor
	 - `GET -> https://api.datomicos.team/v1/network_boss_servidor/{id}` 
	> Para pruebas puede usar el id: `638a431b721eccb6e8510472`
-  Ruta para obtener las anomalías de los servidores públicos que cumplen al menos una.
	 - `GET -> https://api.datomicos.team/v1/anomalias/{id}` 
	> Para pruebas puede usar el id: `6389b8657c4e5f535546396e`

