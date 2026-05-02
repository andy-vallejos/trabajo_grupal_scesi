<p align="center">
  <img src="javalimos.jpeg" alt="JavaLimos Logo" width="200"/>
</p>

<h1 align="center">📘 JavaLimos</h1>

<p align="center">
  Plataforma de reseñas académicas anónimas
</p>

---

## 👥 Integrantes

- Nicole Rico Mendoza  
- Andy Vallejos Bascope  
- Fausto Jafeth Vilches Mendieta  
- Brittany Brenely Jimenez Argote *(se retiró de la postulación)*  

---

## 📖 Descripción

JavaLimos es una aplicación web que permite a estudiantes compartir sus experiencias académicas de forma completamente anónima.

El objetivo es crear una comunidad donde la retroalimentación sea útil, honesta y accesible para todos.

---

## Tecnologías utilizadas 
- ** HTML5** -estructura de la página
- **CSS3** - diseños y estilos
- **JavaScript(vainilla)** -lógica del frontend
- **Fetch API** -comunicación con el backend 
- **API REST** -almacenamiento y gestor de reseña 
## Estructura del proyecto 
``` 📁 proyecto/
│
├── index.html     # Estructura principal de la web
├── style.css      # Estilos de la aplicación
└── api.js         # Lógica de conexión con la API
```
## Funcionalidades 
### Crear reseñas 
- Formulario para ingresar:
-  Nombre del profesor
 - Materia
 - Comentario
- Envío de datos mediante POST a la API
### Ver reseñas
- Obtencion de datos mediante GET
- Renderizado dinámico en el DOM
- Actualizacion automatica al recargar la página
### Anonimato
- No se almacenan datos personales del usuario
- Enfoque privacidad y seguridad
## API utilizada 
la aplicación consume una API  externa desplegada en: 
``` https://reviews-api-4yt6.onrender.com/api/reviews/ ```
| Método | Endpoint        | Descripción               |
| ------ | --------------- | ------------------------- |
| GET    | `/api/reviews/` | Obtener todas las reseñas |
| POST   | `/api/reviews/` | Crear una nueva reseña    |

## Instalación y uso 
1. clonar el repositorio 
```git clone https://github.com/tu-usuario/tu-repositorio.git```
2. Entrar al proyecto
``` cd tu-repositorio```
3. Abrir el archivo
``` index.html ```
## Diseño
- Interfaz limpia y moderna 
- Layout responsive básico
- Uso de tarjetas para reseñas
- Paleta de colores enfocada en tonos azules
