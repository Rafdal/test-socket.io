# COMANDOS BASICOS 

* <code>git init</code>                      |   genera el .git
* <code>git add \<file\></code>                |   Pasa los docs a staging area 
* <code>git add .</code>                     |   Pasa todos los archivos
* <code>git commit</code>                    |   Pasa los docs de staging area a repository usando el editor nano
* <code>git commit -m "comentario"</code>    |   Lo mismo que el commit regular, pero sin nano
* <code>git status</code>                    |   Ver en que status (wd, sa, r) están los docs
* <code>git push</code>                      |   Subir los docs a un {server} (Github)
* <code>git pull</code>                      |   Traer los docs de un {server}, traer los cambios de tus compañeros
* <code>git clone</code>                     |   Hacerte una copia de lo que está en el {server} a tu PC
* <code>git checkout -- \<file\></code>        |   Revertir los cambios de los archivos
* <code>git diff \<file\></code>               |   Ver las diferencias hechas en los archivos
* <code>git branch</code>                    |   Ver las ramas que hay ("master" es la rama default)
* <code>git branch "nombre"</code>           |   Crear una nueva rama
* <code>git checkout "nombre"</code>         |   Ir a una rama en especifico 

*  <code>git config -- global user.email "email"</code>          |   Para configurar email del usuario
*  <code>git config -- global user.name "nombre"</code>          |   Para configurar nombre del usuario
