# Ingles Reposapp!

> **Important:** To make the application work properly, add and turn on this extension on Google Chrome. **https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf**

Hello! Here I will explain how the application is built **https://reposapp.vercel.app/**.
It is important to note that the application works with the localstorage.
Let's start:

## Sign Up

For registration, validations are implemented such as creating a username with a minimum of 4 characters and passwords with a minimum of 4 characters.

When registering the username will be stored in the localStorage and the password in the sessionStorage.

> **Note:** The password is stored in the sessionStorage simulating a database.

When you click on "sign up" a GitHub code is generated that will be used in login to obtain the Github access token,

## Login

The login also implements validations to verify that no empty fields are entered, performs the check with the localStorage and if the data match the request is made to obtain the GitHub access token, followed by a new request to obtain the user information in GitHub such as username, photo and so on.

## Repositories

Once logged in, you will be able to view your public repositories, switch tabs to view favorites, add or remove projects from favorites and search by project name.

## Profile

Here you will find your user information and some additional data

# Important considerations

The project uses oauth to access github.

If you run the project from the localhost as soon as the application registers it redirects you to https://reposapp.vercel.app/ (This was defined in the creation of the oauth application with GitHub) where you must register again since you would not have the registration in the localStorage, if you have any problem with the execution of the project you can write me to **tanitagissellqg@gmail.com**

# Español Reposapp!

> **Important:** Para que la aplicacion pueda correr exisosamente es muy importante que añanda y active esta extension en google chrome **https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf**

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
