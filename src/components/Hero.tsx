import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/i-2.webp"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col justify-center items-center h-full text-white text-center px-6">
        <h1 className="text-5xl font-bold">Atteins tes objectifs fitness</h1>
        <p className="text-lg mt-4">
          Un programme adapté à toi, guidé par un coach spécialisé
        </p>
        <Button text="En savoir plus" className="mt-6" />
      </div>
    </section>
  );
};

export default Hero;
