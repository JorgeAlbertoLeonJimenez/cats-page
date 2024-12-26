import xboxImg from "../assets/control_xbox.png";
import Card from "../hooks/Card";
import { ImagesCats } from "../../types";
import { useGetCharacters, useGetImageCat } from "../../mocks/Caracters";
import Loader from "../hooks/Loader";

function HomePage() {
  const { listCharacters } = useGetCharacters();
  const { dataCat, loading } = useGetImageCat();

  return (
    <div className="bg-slate-900 flex flex-col h-auto text-white">
     
      <main className="md:flex w-full h-auto md:min-h-[100vh] gap-3 justify-around items-center">
        <div className="flex p-4 md:p-0 items-center md:items-start md:text-start text-center md:w-[30%] h-auto gap-5 flex-col text-white">
          <h1 className="text-orange-500 font-semibold">3D Game Development</h1>
          <h2 className="text-white font-bold text-3xl md:text-5xl">
            Work that we produce for our clients
          </h2>
          <p className="text-sm font-thin">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <a
            href="/details"
            className="bg-orange-500 px-3 h-[40px] py-1 rounded-full text-center w-fit"
            aria-label="Get more details about 3D Game Development"
          >
            Get more details
          </a>
        </div>
        <div className="flex h-auto md:max-w-[30%] justify-center items-center flex-col">
          <figure className="flex justify-center">
            <img
              src={xboxImg}
              alt="Control Xbox"
              className="rounded-lg w-auto animate-bounce" 
            />
          </figure>
        </div>
      </main>
      <main className="px-2  md:px-20 flex flex-col justify-center h-auto items-center md:h-[18rem] mt-10">
        <h3 className="font-bold text-2xl">Currently Trending Games</h3>
        <div className="md:flex gap-2 md:gap-5 md:w-full justify-center w-auto mt-10 md:mt-0 items-center">
          {listCharacters.length > 0 ? (
            listCharacters.slice(0, 4).map((cat: ImagesCats) => (
              <Card
                imgHeigth={cat.heigth}
                imgWidth={cat.width}
                key={cat.id}
                url={cat.url}
              />
            ))
          ) : (
            <>
              {Array.from({ length: 5 }, (_, index) => (
                <Loader key={index} />
              ))}
            </>
          )}
        </div>
      </main>
      <main className="px-2 md:px-20 gap-5   flex flex-col   h-auto mt-10">
        <div className="flex flex-col justify-start text-center md:text-start  gap-5 text-sm items-start md:w-[50%]  text-white h-auto ">
          <h5 className=" text-2xl md:text-4xl font-bold">Lorem lupsum</h5>
          <p className="text-sm md:text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, vel eaque in soluta, enim necessitatibus dicta omnis
            accusamus fugiat, eos earum nisi! Nam numquam iste earum temporibus
            aliquid, et ipsam.*3
          </p>
        </div>
        <div className="rounded-md flex justify-center items-center w-full h-[300px] md:h-[400px] overflow-hidden">
          {loading ? (
            <Loader />
          ) : (
            <img
              src={dataCat[0]?.url}
              className={`w-${dataCat[0]?.width} h-${dataCat[0]?.heigth} `}
              alt={`image_${dataCat}`}
            />
          )}
        </div>
      </main>
      <main className="px-2 md:px-20 gap-5 text-center md:text-start  flex flex-col  h-auto mt-10">
        <h5 className="text-xl md:text-3xl font-bold">Lorem ipsum Lorem</h5>
        <p className="text-sm md:text-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
        {listCharacters.length > 0 ? (
          <div className="flex flex-col md:grid grid-cols-6 grid-rows-4 gap-4  justify-center items-center  h-auto w-full ">
            <div className=" transform transition-transform duration-300 hover:scale-110 col-span-2 row-span-2 rounded-md flex justify-center h-[200px]  md:h-[300px] items-center overflow-hidden ">
              <img
                src={listCharacters[0]?.url}
                className="rounded-md"
                alt={`image_${listCharacters[0]?.id}`}
              />
            </div>
            <div className="transform transition-transform duration-300 hover:scale-110 col-span-2 row-span-2 rounded-md col-start-3 h-[300px] overflow-hidden">
              <img
                src={listCharacters[1]?.url}
                alt={`image_${listCharacters[1]?.id}`}
                className="rounded-md"
              />
            </div>
            <div className=" transform transition-transform duration-300 hover:scale-110 col-span-2 row-span-2 rounded-md col-start-5  h-[300px] overflow-hidden">
              <img
                className="rounded-md"
                src={listCharacters[2]?.url}
                alt={`image_${listCharacters[2]?.id}`}
              />
            </div>
            <div className=" transform transition-transform duration-300 hover:scale-110 row-span-2 row-start-3 rounded-md h-[300px] overflow-hidden">
              {" "}
              <img
                className="rounded-md"
                src={listCharacters[6]?.url}
                alt={`image_${listCharacters[6]?.id}`}
              />
            </div>
            <div className=" transform transition-transform duration-300 hover:scale-110 col-span-3 row-span-2 rounded-md row-start-3 h-[300px] overflow-hidden">
              <img
                className="rounded-md"
                src={listCharacters[3]?.url}
                alt={`image_${listCharacters[3]?.id}`}
              />
            </div>
            <div className="transform transition-transform duration-300 hover:scale-110 col-span-2 row-span-2 col-start-5 row-start-3 rounded-md h-[300px] overflow-hidden">
              <img
                className=""
                src={listCharacters[4]?.url}
                alt={`image_${listCharacters[4]?.id}`}
              />
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-center items-center ">
            <Loader />
          </div>
        )}
      </main>
      <main className="px-2 md:px-20 gap-5 text-center md:text-start  flex flex-col  h-auto mt-10">
        <h5 className="text-xl md:text-3xl font-bold">Lorem ipsum Lorem</h5>
        <p className="text-sm md:text-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
        <div className="md:flex justify-between items-center p-4   rounded-md bg-slate-600">
          <div className="flex flex-col h-auto gap-2 md:w-[40%]">
            <h3 className="text-xl md:text-2xl font-bold">Stay in the loop</h3>

            <p className="text-sm">
              Subscribe to receive the latest news and updates about TDA. We
              promise not to spam you!{" "}
            </p>
          </div>
          <div className="relative flex justify-center items-center md:w-[50%] mt-5 md:mt-0">
            <input
              type="text"
              placeholder="Ingrese su correo"
              className="bg-slate-900 rounded-md h-14 px-4 "
            />
            <button className="absolute right-2 bg-orange-400 w-fit h-fit text-white px-5  rounded-md py-2">
              Register
            </button>
          </div>
        </div>
      </main>
      <footer className="flex justify-center border-b border-gray-600 pb-10  items-center w-full gap-5 my-20">
        <div className=" w-[30%] flex flex-col gap-3">
          <h4 className="font-semibold text-xl ">LOGO</h4>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <p>&copy; Todos los derechos reservados.</p>
        </div>
        <div className="w-[30%] flex flex-col gap-3">
          <h6>About us</h6>
          <ul>
            <li>
              <a href="">pagina</a>
            </li>
            <li>
              <a href="">pagina</a>
            </li>
            <li>
              <a href="">pagina</a>
            </li>
          </ul>
        </div>
        <div className=" w-[30%] flex flex-col gap-3">
          <h4>Contact</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
