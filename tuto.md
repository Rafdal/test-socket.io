# COMANDOS BASICOS 

* git init                      -   genera el .git
* git add <file>                -   Pasa los docs a staging area 
* git add .                     -   Pasa todos los archivos
* git commit                    -   Pasa los docs de staging area a repository usando el editor nano
* git commit -m "comentario"    -   Lo mismo que el commit regular, pero sin nano
* git status                    -   Ver en que status (wd, sa, r) están los docs
* git push                      -   Subir los docs a un {server} (Github)
* git pull                      -   Traer los docs de un {server}, traer los cambios de tus compañeros
* git clone                     -   Hacerte una copia de lo que está en el {server} a tu PC
* git checkout -- <file>        -   Revertir los cambios de los archivos
* git diff <file>               -   Ver las diferencias hechas en los archivos
* git branch                    -   Ver las ramas que hay ("master" es la rama default)
* git branch "nombre"           -   Crear una nueva rama
* git checkout "nombre"         -   Ir a una rama en especifico 

*  git config -- global user.email "email"          -   Para configurar email del usuario
*  git config -- global user.name "nombre"          -   Para configurar nombre del usuario
