# 🎄 Quiz Navideño - ¿Qué Personaje Navideño Eres?

Una página web interactiva de quiz navideño lista para GitHub Pages.

## 🎁 Características

- Diseño premium con tema navideño
- Animaciones de nieve y efectos glassmorphism
- 8 preguntas interactivas
- Resultados personalizados con 4 personajes diferentes
- Panel de administración secreto para ver respuestas
- Totalmente responsive
- Sin dependencias externas

## 🚀 Cómo subirlo a GitHub Pages

### Opción 1: Subir directamente a GitHub

1. Crea un nuevo repositorio en GitHub (por ejemplo: `christmas-quiz`)
2. Copia todos los archivos de esta carpeta a tu repositorio:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

3. Ve a Settings > Pages en tu repositorio
4. En "Source", selecciona la rama `main` y la carpeta `/ (root)`
5. Haz clic en "Save"
6. Tu página estará disponible en: `https://tu-usuario.github.io/christmas-quiz/`

### Opción 2: Usar GitHub Desktop

1. Abre GitHub Desktop
2. File > New Repository
3. Nombra el repositorio `christmas-quiz`
4. Copia los archivos a la carpeta del repositorio
5. Haz commit de los cambios
6. Publica el repositorio en GitHub
7. Sigue los pasos 3-6 de la Opción 1

### Opción 3: Usar la línea de comandos

```bash
# Navega a la carpeta del proyecto
cd ruta/a/christmas-quiz

# Inicializa git
git init

# Agrega todos los archivos
git add .

# Haz commit
git commit -m "Initial commit: Christmas quiz"

# Conecta con GitHub (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/christmas-quiz.git

# Sube los archivos
git branch -M main
git push -u origin main
```

Luego sigue los pasos 3-6 de la Opción 1.

## 🔑 Panel de Administración Secreto

Para ver las respuestas que ha dado alguien:

1. Presiona **Ctrl + Shift + A** en cualquier momento
2. Se abrirá el panel secreto mostrando:
   - Fecha y hora de cada intento
   - Preferencia principal de regalo
   - Desglose completo de todas las respuestas
   - Qué NO le gustaría recibir

## 📊 Categorías de Regalo

El quiz identifica preferencias en estas categorías:

- **Peluches**: Cosas suaves, adorables, y reconfortantes
- **Mangas/Libros**: Historias, libros, material de lectura
- **Comida**: Dulces, snacks, bebidas, delicias
- **Accesorios**: Joyería, ropa, accesorios personales

## 💡 Cómo Funciona

Las preguntas están diseñadas para parecer un quiz de personalidad ("¿Qué personaje navideño eres?") pero en realidad revelan preferencias de regalo:

1. Cada pregunta tiene 4 opciones que mapean a diferentes tipos de regalo
2. Las respuestas se guardan automáticamente en el navegador (localStorage)
3. Al final se muestra un "personaje navideño" basado en las preferencias
4. Tú puedes ver las respuestas reales en el panel de administración

## 🎨 Personalización

Si quieres modificar algo:

- **Colores**: Edita las variables CSS en `styles.css` (líneas 2-18)
- **Preguntas**: Modifica el array `questions` en `script.js`
- **Personajes**: Edita el objeto `characters` en `script.js`

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (versiones modernas)
- ✅ Dispositivos móviles (iPhone, Android)
- ✅ Tablets
- ✅ Desktop

## 🎉 ¡Listo!

Una vez que subas los archivos a GitHub Pages, comparte el link y espera a que complete el quiz. Luego usa **Ctrl + Shift + A** para descubrir qué le gustaría recibir de regalo. 🎁

---

Hecho con ❤️ para Navidad 2025
