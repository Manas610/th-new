import Image from "next/image";
import { Playfair_Display } from "next/font/google"

const playfair_display = Playfair_Display({ subsets: ['latin'] })

function HeroSection({name}) {
  return (
    <div>
        <div className="mt-48 mb-56">
            <div className="flex justify-center items-center relative h-80 text-center">

            <div className="container rounded-lg md:rounded-none">
            <div className="blob-c">
            <div className="shape-blob"></div>
            <div className="shape-blob one"></div>
            <div className="shape-blob two"></div>
            <div className="shape-blob three"></div>
            <div className="shape-blob four"></div>
            <div className="shape-blob five"></div>
            <div className="shape-blob six"></div>
            </div>
            <h1 className={`${playfair_display} text-white text-6xl tracking-wide font-extrabold z-10 drop-shadow-md`}>{name} PORTFOLIO</h1>
            </div>

                <div
                className="absolute hidden sm:block"
                style={{
                    left: "5%",
                    top: "0%",
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
                {/* <span className="lg:text-7xl md:text-5xl 2xl text-white">{name} PORTFOLIO</span> */}
                <div
                className="absolute"
                style={{
                    right: "5%",
                    top: "100%",
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
