import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mr-15 ">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="font-bold text-7xl ">Optimiza tu flujo de trabajo y potencia tu negocio con <span className="text-green">AutoBot</span>.</h1>
          <p className="font-bold text-3xl">Al automatizar tareas  y procesos repetitivos, AutoBot te ayuda a ahorrar tiempo, impulsando tu rentabilidad y productividad.</p>
        </div>
        <Image src='/landingPage.jpg' width={544} height={531} quality={100} alt='dashboard image'/>
      </div>
    </main>
  );
}
