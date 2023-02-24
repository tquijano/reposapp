# Reposapp!

Hola! A continuación te explicare como esta construida la aplicación **https://reposapp.vercel.app/**
Es importante tener en cuenta que la aplicación funciona con el localstorage
Empecemos:

## Registro

Para el registro se implementan validaciones como crear un usuario con mínimo 4 caracteres y contraseñas de mínimo 4 caracteres y un que contengan un numero.

Al registrarse el username se guardara en el localStorage y la password en el sessionStorage

> **Nota:** Se guarda la contraseña en el sessionStorage simulando una base de datos

Cuando se clickea en "sign up" se genera un código de GitHub que se utilizara en login para obtener el token de acceso de Github,

## Login

El login tambien implementa validaciones para verificar que no se ingresen campos vacíos, realiza la comprobación con el localStorage y si los datos coinciden se realiza la petición para obtener el token de acceso de GitHub, seguido a esto se crea una nueva petición para obtener la información del usuario en GitHub como el nombre de usuario, foto y demás

## Repositorios

Una vez iniciada sesión usted podrá ver sus repositorios públicos, cambiar de pestaña para ver favoritos, agregar o quitar proyectos de favoritos y buscar por el nombre de los proyectos

## Perfil

Aquí encontrara información de su usuario y algunos datos adicionales

# Consideraciones importantes

El proyecto utiliza oauth para acceder a github

Si ejecuta el proyecto desde el localhost en cuanto se registre la aplicación lo redirige a https://reposapp.vercel.app/ (Esto se definió en la creación de la aplicación de oauth con GitHub) donde debe volver a registrarse ya que no tendría el registro en el localStorage, si tiene algún problema con la ejecución del proyecto me puede escribir a **tanitagissellqg@gmail.com**
