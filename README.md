# Portfolio de Paula Carluccio

Sitio estático en HTML, CSS y JavaScript. `index.html` contiene el portfolio principal y `experiencia/` contiene las páginas de cada puesto.

## Estructura

```text
index.html
experiencia/             Páginas de experiencia
assets/css/              Estilos generales y de experiencia
assets/js/               Interacciones y traducciones
assets/images/           Retrato, banner, icono y certificados
assets/documents/        CV descargable
CNAME                    Dominio personalizado
```

Las rutas de los recursos son relativas a cada página para que el sitio funcione como sitio estático, incluso dentro de un subdirectorio.

## Desarrollo

Abrí `index.html` en el navegador o serví la carpeta con un servidor estático local. No hay proceso de compilación ni dependencias de ejecución.

Para mantener el formato actual de los archivos de código:

```sh
npx prettier --write "index.html" "experiencia/*.html" "assets/css/*.css" "assets/js/*.js"
```
