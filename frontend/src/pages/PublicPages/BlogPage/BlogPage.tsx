import HomeNav from "../../../layouts/HomeNav/HomeNav";
import BlogCard from "../../../components/BlogCard/BlogCard";

import blogImage from '../../../assets/img/blogss.jpg'
import automationImage from '../../../assets/img/automation.jpg';
import whatsappsImage from '../../../assets/img/whatsapps.jpg';
import googleImage from '../../../assets/img/google.jpg';
import chatbotImage from '../../../assets/img/chatbot.jpg';


const Blog = () => {
    return (
        <div>
            <HomeNav />
            <div className="flex flex-col items-center pt-14 gap-20 ">
                <div className="flex flex-row gap-32">
                    <img className="rounded-full shadow-xl" src={blogImage} alt="blog style image" width={300} height={300} />
                    <h1 className="font-bold text-left text-4xl max-w-2xl pt-10">Descubre por qué deberias adoptar la <span className="text-green">AUTOMATIZACION</span> de manera inmediata para tu negocio con nuestros blogs semanales.</h1>
                </div>

             
                <div className="">
                    <BlogCard image={automationImage} title="¿Qué es automatización?" description="Introducción a la automatización y cómo te puede ayudar a aumentar ventas."/>
                    <BlogCard image={whatsappsImage} title="WhatsApp para tu negocio." description="Por qué deberías incluir Whatsapp como canal de venta y promoción."/>
                    <BlogCard image={googleImage} title="Reseñas de Google." description="Calificaciones de Google te dan más exposición."/>
                    <BlogCard image={chatbotImage} title="¿Qué es un chatbot?" description="Aprende cómo te ayuda a generar más clientes."/>
                </div>

            </div>

            
        </div>
    )
}

export default Blog;