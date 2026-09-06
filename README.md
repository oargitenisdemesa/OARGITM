# Oargi T.M. — web estática

Web estática bilingüe (ES/EU) para Oargi T.M. No usa panel de administración, base de datos ni conexión automática con Opptimiza.

## Cómo añadir noticias

Edita `contenido.json`. Cada noticia necesita `title`, `text`, y `url`. Guarda y sube el archivo a GitHub.

## Cómo añadir imágenes

1. Sube las fotos a `assets/galeria/`.
2. Añade cada foto al array `gallery` de `contenido.json`.
3. Sube los cambios a GitHub.

Ejemplo:

```json
{
  "image": "assets/galeria/foto-01.jpg",
  "alt": {"es": "Partido de Oargi", "eu": "Oargiren partida"},
  "caption": {"es": "Partido de liga", "eu": "Ligako partida"}
}
```

## Calendario

El PDF `calendario.pdf` se descarga desde la sección Calendario.

## Opptimiza

El enlace del equipo OARGI es externo y apunta a https://www.opptimiza.com/open123/.
