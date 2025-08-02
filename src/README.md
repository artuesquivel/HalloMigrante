# Hallo Alemania - Estructura del Proyecto

## Descripción
Plataforma de migración a Alemania para personas de Latinoamérica. Los usuarios pueden comprar módulos y lecciones con videos y ejercicios para vivir en Alemania.

## Estructura de Carpetas

### `/src/components/`
- **`layout/`** - Componentes de layout (Header, Footer, Layout)
- **`ui/`** - Componentes reutilizables de UI (pendiente)

### `/src/pages/`
- **`Home.tsx`** - Página principal
- **`ModulesList.tsx`** - Lista de módulos para usuarios
- **`admin/`** - Páginas de administración
  - `ModulesAdmin.tsx` - CRUD de módulos
  - `ModuleCreate.tsx` - Crear módulo
  - `ModuleEdit.tsx` - Editar módulo
  - `LessonsAdmin.tsx` - CRUD de lecciones
  - `LessonCreate.tsx` - Crear lección
  - `LessonEdit.tsx` - Editar lección

### `/src/routes/`
- **`index.tsx`** - Configuración de rutas

### `/src/hooks/`
- **`useModules.ts`** - Hook para gestión de módulos
- **`useLessons.ts`** - Hook para gestión de lecciones

### `/src/services/`
- **`api.ts`** - Servicios de API (placeholder)

### `/src/types/`
- **`index.ts`** - Interfaces TypeScript

### `/src/styles/`
- **`main.scss`** - Estilos SCSS personalizados

## Rutas

### Rutas Públicas
- `/` - Página principal
- `/modules` - Lista de módulos

### Rutas de Administración
- `/admin/modules` - Administrar módulos
- `/admin/modules/create` - Crear módulo
- `/admin/modules/edit/:id` - Editar módulo
- `/admin/lessons` - Administrar lecciones
- `/admin/lessons/create` - Crear lección
- `/admin/lessons/edit/:id` - Editar lección

## Tecnologías Utilizadas
- React 19
- TypeScript
- Vite
- React Router DOM
- Bootstrap 5
- Bootstrap Icons
- SCSS

## Próximos Pasos
1. Implementar formularios de CRUD
2. Conectar con API backend
3. Implementar autenticación
4. Agregar funcionalidad de compra
5. Implementar reproductor de videos 