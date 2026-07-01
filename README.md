# Optimocredit 3D Demo — Exploded View Cinematico

Demo tecnico de un efecto de "objeto que se desarma" (exploded view) controlado
por scroll, usando el stack recomendado para web 3D moderna:

- **Next.js 16** (App Router)
- **Three.js** — motor de renderizado 3D sobre WebGL
- **React Three Fiber** — forma declarativa de usar Three.js en React
- **@react-three/drei** — helpers (OrbitControls, Environment, ContactShadows)
- **GSAP + ScrollTrigger** — sincroniza la animacion con el scroll del usuario

## Como correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000 y haz scroll.

## Estructura

```
app/
  layout.tsx      layout raiz, fondo oscuro
  page.tsx        contenido con scroll (secciones de texto)
  globals.css     estilos globales con Tailwind v4
components/
  Scene.tsx       Canvas, luces, camara, logica de GSAP/ScrollTrigger
  SceneClient.tsx wrapper "use client" para cargar Scene sin SSR
  Part.tsx        definicion de cada "pieza" del objeto + su geometria
lib/
  gsap.ts         registro de GSAP + ScrollTrigger (solo cliente)
```

## Como reemplazar las piezas genericas por tu modelo real

1. Modela en Blender, exporta como .glb con Draco compression
2. Coloca el archivo en public/models/tu-modelo.glb
3. Carga el modelo en components/Scene.tsx usando useGLTF de @react-three/drei

## Despliegue

```bash
npx vercel
```
