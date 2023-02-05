import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 items-center justify-center p-5 absolute z-30 flex w-[450px] h-[380px] max-h-[338px] font-size-sm flex-col overflow-x-hidden`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px] cursor-pointer duration-300 ease-in-out hover:scale-105">
      <div className={`${overlayStyles}`}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default Class;
