import Lottie from "react-lottie";
import background from "./animations/balloon-background.json";
// import presents from "./animations/presents.json";
import Images from "./components/Images";
import { FaArrowDown } from "react-icons/fa";

export default function App() {
  return (
    <>
      <div className="fixed h-full min-w-[100vw] overflow-hidden pointer-events-none z-0">
        <Lottie
          height="100vh"
          width="100vw"
          isClickToPauseDisabled={true}
          options={{
            loop: true,
            autoplay: true,
            animationData: background,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>

      <div className="relative container flex flex-col items-center text-center px-6 py-10 md:py-12 font-nerko">
        <div className="prose flex-1">
          <h1 className="leading-[1] text-7xl sm:text-8xl mb-[0.35em]">
            Happy
            <br /> Birthday, <br />
            <span className="text-[1.5em] font-extrabold motion-safe:animate-flash ">
              Al Pal!
            </span>
          </h1>
          <p className="leading-[1.2] text-2xl">
            There are too many good moments with you to count, so here's some
            greatest hits
          </p>
          <div className="flex justify-center">
            <FaArrowDown className="text-4xl" />
          </div>
        </div>
        <div className="flex-1 mt-12 w-[100%] max-w-[600px]">
          <Images />
        </div>
      </div>
    </>
  );
}
