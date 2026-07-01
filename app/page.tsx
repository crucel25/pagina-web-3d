import SceneClient from "@/components/SceneClient";

export default function Home() {
  return (
    <main>
      <SceneClient />
      <div id="scene-wrapper" className="relative z-10">
        <section className="flex h-screen flex-col items-start justify-center px-8 md:px-20">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Optimocredit Pro
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold text-white md:text-6xl">
            Así se ve tu crédito, pieza por pieza
          </h1>
          <p className="mt-4 max-w-xl text-white/60">
            Desliza hacia abajo para ver el objeto desarmarse.
          </p>
        </section>

        <section className="flex h-screen items-center justify-end px-8 md:px-20">
          <div className="max-w-md text-right">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Cada componente cuenta
            </h2>
            <p className="mt-3 text-white/60">
              Historial, utilización, antigüedad, mezcla de crédito y
              consultas — cada pieza se mueve por separado, como tu score.
            </p>
          </div>
        </section>

        <section className="flex h-screen items-center justify-start px-8 md:px-20">
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Lo volvemos a armar
            </h2>
            <p className="mt-3 text-white/60">
              Sigue el scroll hasta el final para ver cómo las piezas
              regresan a su posición original.
            </p>
          </div>
        </section>

        <section className="flex h-screen flex-col items-center justify-center px-8 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Empieza tu reparación hoy
          </h2>
          <p className="mt-4 max-w-lg text-white/60">
            Este es un demo técnico del efecto. Reemplaza estas piezas
            genéricas por tu modelo .glb real cuando estés listo.
          </p>
        </section>
      </div>
    </main>
  );
}
