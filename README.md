# Quiz Navideño - ¿Qué Personaje Navideño Eres?

Una página web interactiva de quiz navideño lista para GitHub Pages.

##Características

- Diseño premium con tema navideño
- Animaciones de nieve y efectos glassmorphism
- 8 preguntas interactivas
- Resultados personalizados con 4 personajes diferentes
- Panel de administración secreto para ver respuestas
- Totalmente responsive
- Sin dependencias externas

## Panel de Administración Secreto

Para ver las respuestas que ha dado alguien:

1. Presiona **Ctrl + Shift + A** en cualquier momento
2. Se abrirá el panel secreto mostrando:
   - Fecha y hora de cada intento
   - Preferencia principal de regalo
   - Desglose completo de todas las respuestas
   - Qué NO le gustaría recibir

## Categorías de Regalo

El quiz identifica preferencias en estas categorías:

- **Peluches**: Cosas suaves, adorables, y reconfortantes
- **Mangas/Libros**: Historias, libros, material de lectura
- **Comida**: Dulces, snacks, bebidas, delicias
- **Accesorios**: Joyería, ropa, accesorios personales

## Cómo Funciona

Las preguntas están diseñadas para parecer un quiz de personalidad ("¿Qué personaje navideño eres?") pero en realidad revelan preferencias de regalo:

1. Cada pregunta tiene 4 opciones que mapean a diferentes tipos de regalo
2. Las respuestas se guardan automáticamente en el navegador (localStorage)
3. Al final se muestra un "personaje navideño" basado en las preferencias
4. Tú puedes ver las respuestas reales en el panel de administración

## Personalización

Si quieres modificar algo:

- **Colores**: Edita las variables CSS en `styles.css` (líneas 2-18)
- **Preguntas**: Modifica el array `questions` en `script.js`
- **Personajes**: Edita el objeto `characters` en `script.js`

## Compatibilidad

- Chrome, Firefox, Safari, Edge (versiones modernas)
- Dispositivos móviles (iPhone, Android)
- Tablets
- Desktop


Una vez que subas los archivos a GitHub Pages, comparte el link y espera a que complete el quiz. Luego usa **Ctrl + Shift + A** para descubrir qué le gustaría recibir de regalo. 🎁

---

Hecho con ❤️ para Navidad 2025
