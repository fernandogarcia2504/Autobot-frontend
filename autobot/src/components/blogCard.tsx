import Image from "next/image"

interface BlogProps{
    title: string,
    image:string,
    description: string,
}

const BlogCard = (props: BlogProps) => {
    return (
        <div className="w-64 bg-white  float-left overflow-hidden  mt-0 mr-5 mb-8 ml-0 relative shadow-2xl rounded-[7px] p-0">
            <div className="border max-w-xs min-h-96 max-h-96 rounded-lg shadow-2xl ">
                <Image className="rounded-t-lg" src={props.image} alt={props.title} width={320} height={180} /> 
                <div className="pl-1">
                <p className="font-bold py-1">Nuevo</p>
                <p className="font-bold text-xl text-green py-2">{props.title}</p>
                <p className="font-semibold py-2">{props.description}</p>
                <button className="text-green py-2 pb-4">VER MAS {'->'}</button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;