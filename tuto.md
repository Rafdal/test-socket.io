# COMANDOS BASICOS 

* git init                     \t -   genera el .git
* git add \<file\>             \t -   Pasa los docs a staging area 
* git add .                    \t -   Pasa todos los archivos
* git commit                   \t -   Pasa los docs de staging area a repository usando el editor nano
* git commit -m "comentario"   \t -   Lo mismo que el commit regular, pero sin nano
* git status                   \t -   Ver en que status (wd, sa, r) están los docs
* git push                     \t -   Subir los docs a un server (Github)
* git pull                     \t -   Traer los docs de un server, traer los cambios de tus compañeros
* git clone                    \t -   Hacerte una copia de lo que está en el server a tu PC
* git checkout -- \<file\>     \t -   Revertir los cambios de los archivos
* git diff \<file\>            \t -   Ver las diferencias hechas en los archivos
* git branch                   \t -   Ver las ramas que hay ("master" es la rama default)
* git branch "nombre"          \t -   Crear una nueva rama
* git checkout "nombre"        \t -   Ir a una rama en especifico 

*  git config -- global user.email "email"         \t -   Para configurar email del usuario
*  git config -- global user.name "nombre"         \t -   Para configurar nombre del usuario
