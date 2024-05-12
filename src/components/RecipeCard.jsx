import MdIcon from "../components/MdIcon";
import Button from "./button";

export default function RecipeCard({
  title,
  description,
  image,
  cookTime,
  customStyle,
}) {
  return (
    <div
      className={`w-full border bg-white shadow-lg gap-1  min-h-[200px] p-2 flex flex-col rounded-2xl hover:-translate-y-2 hover:shadow-md transition-all cursor-pointer ${customStyle}`}
    >
      {/* Product Image */}
      <div className="">
        <img
          src={image}
          alt={title}
          className="h-44 w-full rounded-3xl object-cover"
        />
      </div>

      <div className=" flex flex-col">
        <p className=" font-bold">{title}</p>
        <p className="text-jay_primary text-xs ">{description}</p>
        <div className="flex flex-row justify-center align-items-center my-4">
          <MdIcon
            className="w-4 h-full mx-2"
            aria-hidden="true"
            icon={"Clock"}
          />
          <span className="font-bold">{cookTime}</span>
        </div>
      </div>

      <Button type="primary" text={"Voir plus"} customStyle={"text-xs "} />
    </div>
  );
}
