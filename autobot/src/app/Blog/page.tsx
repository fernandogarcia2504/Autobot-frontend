import Navbar from "@/components/navbar";
import BlogCard from "@/components/blogCard";

import Image from "next/image";


const Blog = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center pt-14 gap-20 ">
                <div className="flex flex-row gap-32">
                    <Image className="rounded-full shadow-xl" src='/blogss.jpg' alt="blog style image" width={300} height={300} />
                    <h1 className="font-bold text-left text-4xl max-w-2xl pt-10">Descubre por qué deberias adoptar la <span className="text-green">AUTOMATIZACION</span> de manera inmediata para tu negocio con nuestros blogs semanales.</h1>
                </div>

             
                <div className="">
                    <BlogCard image="/automation.jpg" title="¿Qué es automatización?" description="Introduccion a la automatizacion y como te puede ayudar a aumentar ventas."/>
                    <BlogCard image="/whatsapps.jpg" title="WhatsApp para tu negocio." description="Por que deberias incluir Whatsapp como canal de venta y promocion."/>
                    <BlogCard image="/google.jpg" title="Reseñas de Google." description="Calificaciones de Google te dan mas exposicion."/>
                    <BlogCard image="/chatbot.jpg" title="¿Qué es un chatbot?" description="Aprende como te ayuda a generar mas clientes."/>
            
                </div>

            </div>

            
        </div>
    )
}

export default Blog;