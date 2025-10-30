import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-start text-left">
        <h4 className="text-xl">Hi, my name is</h4>
        <p className="text-5xl mt-3 font-bold text-accent">
          JOBAYER <span>MAHMUD</span>
        </p>

        <p className="mt-4 text-5xl text-accent font-semibold">
          I{" "}
          <span className="text-[#4e7250]">
            <Typewriter
              words={["create", "develop", "maintain"]}
              loop={0}
              cursor={false}
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={1500}
            />
          </span>{" "}
          websites
        </p>

        <p className="text-xl mt-2">
          I am a Front-End developer, Educator and a Tech enthusiast. I am
          always
          <br />
          looking for new opportunities to learn and grow
        </p>
      </div>
    </div>
  );
};

export default Header;
