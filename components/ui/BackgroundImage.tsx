import Image from "next/image";

interface BackgroundImageProps {
  children: React.ReactNode;
  imageSrc: string;
}

const BackgroundImage = ({ imageSrc, children }: BackgroundImageProps) => {
  return (
    <section className="relative w-full h-fit">
      <Image
        src={imageSrc}
        alt="banner background"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      {children}
    </section>
  );
};

export default BackgroundImage;
