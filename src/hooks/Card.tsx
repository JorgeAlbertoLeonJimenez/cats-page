import { Props } from "../../types";

function Card({ url, imgHeigth, imgWidth }: Props) {
  return (
    <div className=" p-2 transform transition-transform duration-300 hover:scale-110  md:h-[200px] h-[150px] rounded-xl flex md:w-48  flex-col justify-center items-center">
      <img
        src={url}
        alt={`image_${url}`}
        className={`h-${imgHeigth} w-${imgWidth}  h-32 bg-cover rounded-md`}
      />
      <p className="flex justify-center items-center font-semibold">40 Followers</p>
    </div>
  );
}

export default Card;
