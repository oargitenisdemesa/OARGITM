# Oargi Tenis de Mesa — web

Web bilingüe (ES/EU) para Oargi Tenis de Mesa, Tolosa.

## Incluido
- Portada con identidad visual de tenis de mesa.
- Escudo oficial del club.
- Secciones de club, equipos, entrenamientos, partidos, resultados, noticias, calendario, palmarés, galería y contacto.
- Selector ES/EU con traducción completa de los textos gestionados por la interfaz.
- Enlace a Opptimiza.
- Zona de administración visual preparada.

## Siguiente fase técnica
### Opptimiza
La web no debe asumir que puede leer Opptimiza automáticamente hasta confirmar una API, feed o mecanismo de integración autorizado.

### Google Calendar
Hay que crear/seleccionar un calendario público del club y colocar su código de inserción en la sección de calendario.

### Panel privado
Para que el usuario/contraseña sea realmente privado y permita guardar cambios hace falta backend + autenticación + base de datos. Una página estática de GitHub Pages no debe guardar credenciales reales.

## Publicación
La carpeta puede publicarse como sitio estático. Para el panel privado completo habrá que añadir un servicio backend (por ejemplo, un proveedor con autenticación y base de datos) y configurar las variables/credenciales fuera del código público.
