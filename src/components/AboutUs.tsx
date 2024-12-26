import { useState } from "react";
import { useGetImageCat } from "../../mocks/Caracters";
import Loader from "../hooks/Loader";
import random from '../assets/random.svg'
function AboutUs() {
  const [changeImage, setChangeImage] = useState(false);
  const { dataCat, loading } = useGetImageCat(changeImage);
  return (
    <div className="bg-slate-900">
      <main className="md:flex w-full h-auto md:min-h-[100vh] gap-3 justify-around items-center">
        <div className="flex p-4 md:p-0 items-center md:items-start md:text-start text-center md:w-[30%] h-auto gap-5 flex-col text-white">
          <h1 className="text-orange-500 font-semibold">3D Game Development</h1>
          <h2 className="text-white font-bold text-3xl md:text-5xl">
            Lorem Ipsum is simply dummy text of the printing and.
          </h2>
          <p className="text-sm font-thin">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <a
            href="/details"
            className="bg-orange-500 px-3 h-[40px] py-1 rounded-full text-center w-fit"
            aria-label="Get more details about 3D Game Development"
          >
            Get in -
          </a>
        </div>
        <div className="flex h-auto md:max-w-[30%] justify-center items-center flex-col">
          <figure className="flex justify-center relative min-h-[300px] bg-cover">
            {loading ? (
             <div className="flex justify-center  h-[300px] items-center">
                 <Loader />
             </div>
            ) : (
              <img
                src={dataCat[0]?.url}
                alt={`image_${dataCat[0]?.url}`}
                className="rounded-lg w-auto"
              />
            )}
            <button
              className="bg-orange-500 transform transition-transform duration-300 hover:scale-110 h-auto rounded-full absolute top-[50%] right-[-20px] w-fit px-3 py-2"
              onClick={() => setChangeImage(!changeImage)}
            >
              <img src={random} className="w-[20px]" alt="random" />
            </button>
          </figure>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
