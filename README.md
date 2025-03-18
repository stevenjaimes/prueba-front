# Sistema de Gestión de Productos

Este proyecto es una aplicación web desarrollada con **Next.js** (frontend) que permite a los usuarios gestionar productos. Los usuarios pueden agregar, visualizar, ordenar y eliminar productos. La aplicación también incluye validación de formularios, funcionalidades de accesibilidad y un diseño responsivo.

## Características Principales

### 1. **Formulario de Productos**
   - **Validación de campos**: Todos los campos son obligatorios y se validan antes de enviar el formulario.
     - **Código**: Debe ser un número positivo.
     - **Nombre**: Debe tener al menos 3 caracteres.
     - **Descripción**: Debe tener al menos 10 caracteres.
     - **Cantidad**: Debe ser un número positivo o cero.
   - **Mensajes de error**: Si un campo no cumple con las validaciones, se muestra un mensaje de error debajo del campo.
   - **Confirmación de éxito**: Cuando un producto se agrega correctamente, se muestra un mensaje de éxito.

### 2. **Lista de Productos**
   - **Ordenamiento**: Puedes ordenar la lista de productos por `Código`, `Nombre`, `Cantidad` o `Fecha y Hora`. El ordenamiento se puede realizar de dos maneras:
     - **Encabezados de la tabla**: Haz clic en los encabezados de la tabla para ordenar en orden ascendente o descendente.
     - **Botón de filtro**: Usa el botón "Filtrar" para seleccionar el criterio de ordenamiento.
   - **Eliminación de productos**: Cada producto tiene un botón de eliminar que muestra una confirmación antes de proceder.

### 3. **Accesibilidad**
   - **Atributos ARIA**: Se han añadido atributos ARIA para mejorar la accesibilidad, como `aria-label`, `aria-describedby` y `aria-invalid`.
   - **Navegación por teclado**: La aplicación es completamente navegable con el teclado.
   - **Lectores de pantalla**: Los lectores de pantalla pueden anunciar correctamente el contenido de la aplicación gracias a los roles y atributos ARIA.

### 4. **Diseño Responsivo**
   - La aplicación está diseñada para funcionar correctamente en dispositivos móviles, tablets y escritorios.

---

## Tecnologías Utilizadas

### Frontend
- **Next.js**: Framework de React para aplicaciones web modernas.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para diseñar interfaces de manera rápida y eficiente.
- **TypeScript**: Lenguaje que añade tipos estáticos a JavaScript para mejorar la calidad del código.

### Otras Herramientas
- **Lucide React**: Biblioteca de íconos para una interfaz más atractiva.
- **ESLint y Prettier**: Para mantener un código limpio y bien formateado.

---

## Cómo Usar la Aplicación

1. **Agregar un Producto**:
   - Completa el formulario con los datos del producto.
   - Haz clic en "Agregar Producto" para guardarlo.

2. **Ordenar la Lista de Productos**:
   - Haz clic en los encabezados de la tabla (`Código`, `Nombre`, `Cantidad`, `Fecha y Hora`) para ordenar la lista.
   - Usa el botón "Filtrar" para seleccionar el criterio de ordenamiento.

3. **Eliminar un Producto**:
   - Haz clic en el ícono de basura (🗑️) junto al producto que deseas eliminar.
   - Confirma la eliminación en el cuadro de diálogo.

---

## Instalación y Ejecución

Sigue estos pasos para ejecutar la aplicación en tu entorno local:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/stevenjaimes/prueba-front.git
   ```
2. **Navega al directorio del proyecto**:
   ```bash
   cd prueba-front   
   ```
3. **Instala las dependencias**:
   ```bash
   npm install
   ```
4. **Ejecuta la aplicación**:
   ```bash
   npm run dev
   ```
---

## Autor
- **Nombre**: Henry Steven Jaimes
- **LinkedIn**: [linkedin.com/in/henry-steven-jaimes](https://linkedin.com/in/henry-steven-jaimes)
- **GitHub**: [github.com/stevenjaimes](https://github.com/stevenjaimes)
