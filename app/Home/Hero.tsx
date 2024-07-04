import Image from "next/image"
import hero from "../../public/assets/hero.jpg"
const Hero = () => {
    return (
        <div className="container hero bg-base-200 min-h-screen">
            <div className="flex items-center justify-between flex-col lg:flex-row-reverse">
                <figure className="lg:w-[45%]">
                    <Image
                        alt="Hero Section SVG"
                        src={hero}
                        width={1200}
                        height={1200}
                    />
                </figure>
                <div className="lg:w-[55%]">
                    <h1 className="title text-yellowLight leading-[52px]">Integrity in Tech <br/>Innovations</h1>
                    <p className="py-6">
                        At ByteBasha, we pride ourselves on being leaders in the digital landscape, providing cutting-edge software services, comprehensive e-commerce solutions, and top-tier tech skill training. Our name, ByteBasha, combines the digital essence of "Byte" with "Basha," a title of respect, reflecting our commitment to excellence and authority in the tech industry
                    </p>
                    <button className="btn-yellow">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero