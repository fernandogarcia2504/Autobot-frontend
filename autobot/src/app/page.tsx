import Navbar from "@/components/navbar";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex min-h-full flex-col m-15 items-center ">
      <div className="grid grid-cols-first-block pt-12 w-1242">
        <div className="flex flex-col items-center justify-center gap-3 w-687">
          <h1 className="font-bold text-7xl  ">Optimiza tu flujo de trabajo y potencia tu negocio con <span className="text-green">AutoBot</span>.</h1>
          <p className="font-bold text-3xl">Al automatizar tareas  y procesos repetitivos, AutoBot te ayuda a ahorrar tiempo, impulsando tu rentabilidad y productividad.</p>
        </div>
        <Image  className=' w-555 pl-2 pt-6' src='/landingPage.jpg' width={544} height={531} quality={100} alt='dashboard image'/>
      </div>
    </main>
    </>
  );
}
