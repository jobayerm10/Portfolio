import Image from "../../assets/authInte.png";
import Image1 from "../../assets/movie.png";
import Image2 from "../../assets/music.png";

const Projects = () => {
  return (
    <div
      id="work"
      className="flex flex-col items-center justify-center min-h-screen px-8"
    >
      <h1 className="text-4xl text-center text-accent font-semibold ">
        Some Things I've Built
      </h1>
      <div className="border w-100 bg-accent mt-5"></div>
      <div className="flex items-center justify-between max-w-6xl w-full gap-2 mt-10">
        <div className="">
          <img className="rounded" src={Image} alt="" />
        </div>
        <div className="w-1/2 flex flex-col  justify-center ">
          <div className="card bg-base-500 w-100 shadow-2xl rounded">
            <div className="card-body  ">
              <h2 className="card-title text-2xl font-semibold mb-2">
                Auth Integration
              </h2>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                quam doloribus, fugiat omnis accusantium aliquid eum quos fugit
                dolore nemo animi laboriosam voluptates praesentium suscipit
                magnam tenetur deleniti voluptatum. Sapiente.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between max-w-6xl w-full gap-2 mt-10">
        <div className="w-1/2 flex flex-col  justify-center ">
          <div className="card bg-base-500 w-100 shadow-2xl rounded">
            <div className="card-body  ">
              <h2 className="card-title text-2xl font-semibold mb-2">
                Movie Search App
              </h2>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                quam doloribus, fugiat omnis accusantium aliquid eum quos fugit
                dolore nemo animi laboriosam voluptates praesentium suscipit
                magnam tenetur deleniti voluptatum. Sapiente.
              </p>
            </div>
          </div>
        </div>
        <div className="mr-12">
          <img className="rounded" src={Image1} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-between max-w-6xl w-full gap-2 mt-10">
        <div className="">
          <img className="rounded" src={Image2} alt="" />
        </div>
        <div className="w-1/2 flex flex-col  justify-center ">
          <div className="card bg-base-500 w-100 shadow-2xl rounded">
            <div className="card-body  ">
              <h2 className="card-title text-2xl font-semibold mb-2">
                Spotify-Like Music Player
              </h2>
              <p className="font-medium">
                A full-page music player built with React, Tailwind CSS, and
                Lucide React Icons. The UI is inspired by Spotify and includes a
                sidebar, recommended songs section, and a fixed player bar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
