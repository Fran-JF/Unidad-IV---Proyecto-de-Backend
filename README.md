# Unidad-IV---Proyecto-de-Backend
Objetivos: - Aplicar todos los conocimientos aprendidos en un solo proyecto. - Diseñar un caso de uso.

PROCESO DE CLONACIÓN O DESCARGA DE GITHUB / IMPORTACIÓN DE LA BASE DE DATOS / EJECUCIÓN EL PROGRAMA

1- Clonación y Descarga en GitHub
• Para descargar el proyecto, basta con ir a nuestro repositorio de GitHub, y seleccionar la opción de “download”, inmediatamente el proyecto comenzara su descarga, y para finalizar arrastramos la carpeta descargada al VSC.
• Como una alternativa a la descarga podemos clonar nuestro proyecto, basta con copiar el link del repositorio de GitHub, abrir una consola de (Git Bash) en el escritorio y utilizar el comando “git clone”, podremos observar cómo el proyecto de descarga de GitHub y crea una carpeta, la misma la arrastraremos al VSC.

2- Importación de la base de datos
• Primeramente, ejecutamos el XAMPP, el mismo es un paquete de software libre, que consiste principalmente en el sistema de gestión de bases de datos MySQL.
• Ejecutamos el Apache y el MySQL estando dentro del XAMPP
• Entramos en el localhost de phpMySdmin para gestionar nuestra base de datos.
• Una vez dentro creamos una nueva base de datos con el nombre “sistema smao”, es importante que el nombre se ingrese de manera idéntica, para que nuestro sistema pueda conectarse con ella.
• Al tener la base de datos creada, nos vamos al apartado de “importar” y seleccionamos el archivo de la base de datos dentro nuestro equipo, hacemos clic en el botón importar, con esto ya tendríamos la base de datos lista dentro de nuestro phpMyAdmin.

3- Ejecución el programa
• Volvemos a donde teníamos nuestro Visual Studio Code.
• Si deseamos ver nuestra base de datos, podemos instalar las extensiones (MySQL, MySQL Syntax).
• Con control + ñ abrimos la terminal en el VSC. Otra opción es presionar la Tecla Windows + R, escribir cmd, y dar click en aceptar para abrir la terminal en Windows.
•  Colocar el siguiente comando en la terminal: cd "ruta de la carpeta del sistema”
 Ejemplo: cd C:\Users\maiko\OneDrive\Escritorio\Unidad-IV---Proyecto-de-Backend
• Una vez dentro de la carpeta podemos ejecutar el comando “npx nodemon” o “npm start” para iniciar el sistema.
• Completada esta serie de pasos, podremos comenzar a utilizar el sistema con nuestras consultas en postman, ARC, REST CLIENT o cualquier otro programa.


ANEXAMOS LAS CONSULTAS QUE SE PUEDEN REALIZAR A LA BASE DE DATOS PARA FACILITAR LA EXPERIENCIA DEL USUARIO 
SE RECOMIENDA UTILIZAR POSTMAN PARA REALIZAR LOS METODOS:

***** Para Ingresar un proveedor - POST *****

{
    "nombre":" ",
    "rif":" ",
    "ubicacion":" "
}

***** Para Ingresar un técnico - POST *****

{
    "nombre":" ",
    "usuario":" ",
    "profesion":" "
}

***** Para Ingresar un equipo - POST *****

{
    "nombre_e":" ",
    "descripcion_e":" ",
    "serial_e":" ",
    "fecha_inicial_e":" ",
    "fecha_puesta_marcha_mante_e":" ",
    "id_provedor":" "
}

***** Para ingresar un trabajo - POST *****

{
    "id_t":" ",
    "fecha_planificada":" ",
    "fecha_inicial":" ",
    "fecha_final":" ",
    "estatus":" ",
    "id_equipo":" ",
    "id_tecnico":" "
}

***** Para Ingresar un periférico - POST *****

{
    "nombre":"",
    "modelo":"",
    "marca":"",
    "equipo_al_que_pertenece":"",
    "precio":""
}

***** Para actualizar un registro de proveedor - PUT *****

{
    "id":" ",
    "nombre":" ",
    "rif":" ",
    "ubicacion":" "
}

***** Para actualizar un registro de técnicos - PUT *****

{
    "id":"",
    "nombre":"",
    "usuario":"",
    "profesion":""
}

***** Para actualizar un registro de periféricos - PUT *****

{
    "id":"",
    "nombre":"",
    "modelo":"",
    "marca":"",
    "equipo_al_que_pertenece":"",
    "precio":""
}

***** Para actualizar un registro de equipo - PUT *****

{
    "id_e":" ",
    "nombre_e":" ",
    "descripcion_e":" ",
    "serial_e":" ",
    "fecha_inicial_e":" ",
    "fecha_puesta_marcha_mante_e":" "
}

***** Para actualizar un registro de trabajo - PUT *****

{
    "id_t":" ",
    "fecha_planificada":" ",
    "fecha_inicial":" ",
    "fecha_final":" ",
    "estatus":" "
}

***** Para borrar un registro de equipos - DELETE *****

{
    "id_e":" "
}

***** Para borrar un registro de trabajos - DELETE *****

{
    "id_t":" "
}

***** Para borrar un registro de proveedores - DELETE *****

{
    "id":" "
}

***** Para borrar un registro de periféricos - DELETE *****

{
    "id":" "
}

***** Para borrar un registro de técnicos - DELETE *****

{
    "id":" "
}

***** Para listar todos los proveedores - GET *****

http://localhost:3000/provedores

***** Para listar todos los equipos - GET *****

http://localhost:3000/equipos

***** Para listar todos los trabajos - GET *****

http://localhost:3000/trabajos

***** Para listar todos los técnicos - GET *****

http://localhost:3000/tecnicos

***** Para listar todos los periféricos - GET *****

http://localhost:3000/perifericos

***** Para buscar un solo registro según su ID de proveedor - GET *****

http://localhost:3000/provedores/(aqui va el id)

***** Para buscar un solo registro según su ID de equipo - GET *****

http://localhost:3000/equipos/(aqui va el id)

***** Para buscar un solo registro según su ID de trabajo - GET *****

http://localhost:3000/trabajos/(aqui va el id)
