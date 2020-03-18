# ejercicio-node-atix

Es una API REST que permite generar una prueba cryptografica y luego guarda el resultado en un archivo CSV, como también validar la correcta relación entre los datos guardados en el archivo.

**¿Qué es se guarda en el archivo?**

* Un hash de la fila anterior
* El mensaje recibido del usuario
* Un Nonce

## Se requiere tener instalado en su máquina:

* Node 
* Git

## Setup

Clonar el repositorio e instalar las dependencias.
En la terminal dentro del path donde se quiere clonar el repositorio ejecutar los siguientes comandos:

```bash
git clone https://github.com/jplorek/ejercicio-node-atix.git
cd ejercicio-node-atix
```

Una vez que el proyecto fue clonado en su máquina y usted se encuentra en la carpeta correcta, ejecutar:

```bash
npm install
```

## Ejecutar el Proyecto

Para ejecutar el proyecto en su terminal ejecute el siguiente comando:

```
npm run
```

## Como llamar a los servicios

Se explica como llamar a los servicios utilizando Postman

**Dentro de postman abrir una nueva pestaña, elegir el tipo de request e ingresar la URL**

### Primer Servicio:

**Servicio que ejecuta la prueba criptográfica y escribe sobre el archivo CSV**

* Method: POST
* URL: http://localhost:5000/api/messages

**Con los datos anteriores configure el tipo de request e ingrese la URL**

**Para configurar el cuerpo del request hacer Click en la solapa body y elegir la siguiente configuración:**

```
Tipo: Raw / JSON
```

En el editor de texto que se encuentra debajo copiar y pegar el siguiente JSON:
```
{
	"message": "Message From Postman"
}

```

**Luego presionar el botón send, Recibirá la siguiente respuesta:**


```
{
	"message": "Row inserted"
}
```


### Segundo servicio

**Servicio que valida la relación con la fila anterior**

* Method: GET
* URL: http://localhost:5000/api/messages

**Con los datos anteriores configure el tipo de request e ingrese la URL**

**Luego presionar el botón send. Recibirá la siguiente respuesta:**


```
{
	"message": "Valid Block”
}
```


Si estas usando visual studio code puedes instalar la extencion “Rest Client” que te permite enviar requests desde un archivo “.rest”.
Si ya la tienes instalada abra el archivo route.rest que se encuentra en la raíz y podrá llamar a los servicios desde ese archivo. 

## Test de integración
**Para correr el test de integración ejecute el siguiente comando:**
```bash
npm run test
```
