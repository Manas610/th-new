import Image from "next/image";

function HeroSection({name}) {
  return (
    <div>
        <div className="mt-48 mb-56">
            <div className="glassmorphism animated-gradient flex justify-center items-center relative h-80 text-center">
                <div
                className="absolute hidden sm:block"
                style={{
                    left: "5%",
                    top: "10%",
                    transform: "translateY(-50%)",
                }}
                >
                    <Image
                        className="heroSectionPic"
                        src="/images/big_ben.jpeg"
                        alt="Big Ben"
                        layout="fixed"
                        width={140}
                        height={200}
                    />
                </div>
                <span className="lg:text-7xl md:text-5xl 2xl text-white">{name} PORTFOLIO</span>
                <div
                className="absolute"
                style={{
                    right: "5%",
                    top: "90%",
                    transform: "translateY(-50%)",
                }}
                >
                    <Image
                        className="heroSectionPic"
                        src="/images/big_ben.jpeg"
                        alt="Big Ben"
                        layout="fixed"
                        width={140}
                        height={200}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
