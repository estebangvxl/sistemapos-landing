# SystemPOS Landing Page

Página de aterrizaje moderna y profesional para **SystemPOS**, un sistema de punto de venta (POS) diseñado para transformar negocios en Colombia.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante y responsiva construida con Next.js 16 y Tailwind CSS
- **Secciones Completas**: Hero, Servicios, Capturas de pantalla, Contacto y más
- **Formulario de Contacto Funcional**: Integración con Resend para envío de correos electrónicos
- **Optimizado para SEO**: Metaetiquetas y estructura optimizada para motores de búsqueda
- **Rendimiento Superior**: Construido con las mejores prácticas de Next.js

## 🛠️ Tecnologías Utilizadas

- **Next.js 16.2.4** - Framework React de producción
- **React 19.2.4** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Framework de CSS
- **Lucide React** - Iconos modernos
- **Resend** - Servicio de envío de correos

## 📋 Requisitos Previos

- Node.js 18+
- npm, yarn, pnpm o bun
- Cuenta de Resend (para el formulario de contacto)

## 🚀 Configuración y Ejecución

### 1. Clonar el Repositorio

```bash
git clone <repository-url>
cd sistemapos-landing
```

### 2. Instalar Dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
RESEND_API_KEY=tu_api_key_de_resend
```

**Importante**: Obtén tu API key en [Resend](https://resend.com) para que el formulario de contacto funcione correctamente.

### 4. Ejecutar en Modo Desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### 5. Construir para Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
sistemapos-landing/
├── app/
│   ├── components/          # Componentes React
│   │   ├── Contact.tsx     # Formulario de contacto
│   │   ├── Hero.tsx        # Sección principal
│   │   ├── Services.tsx    # Servicios ofrecidos
│   │   └── ...
│   ├── api/
│   │   └── contact/        # API route para formulario
│   ├── page.tsx           # Página principal
│   └── layout.tsx          # Layout global
├── public/                 # Assets estáticos
├── package.json
└── README.md
```

## 📧 Configuración del Formulario de Contacto

El formulario de contacto utiliza Resend para enviar correos electrónicos. Para configurarlo:

1. Crea una cuenta en [Resend](https://resend.com)
2. Obtén tu API key
3. Añádela a tu archivo `.env.local`
4. Verifica tu dominio de envío en Resend (opcional pero recomendado)

Por defecto, los correos se envían a `atencionsystempos@gmail.com`. Puedes cambiar esto en `app/api/contact/route.ts`.

## 🎨 Personalización

- **Colores y Estilos**: Modifica las variables CSS en `app/globals.css`
- **Contenido**: Edita los componentes en `app/components/`
- **Meta Información**: Actualiza `app/layout.tsx` para SEO

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Configura las variables de entorno en el dashboard de Vercel
3. Despliega automáticamente

### Otros Proveedores

```bash
npm run build
# Sube la carpeta .next a tu proveedor de hosting
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de SystemPOS. Todos los derechos reservados.

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto:

- **Email**: atencionsystempos@gmail.com
- **WhatsApp**: +57 300 2390 552
- **Web**: [SystemPOS Colombia](https://sistemapos-landing.vercel.app/)
