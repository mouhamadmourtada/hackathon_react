export default function Button({type,text,icon,customStyle}) {
    return (
      <button className={`w-full py-2 px-6 hover:bg-white hover:border transition-all ${type == "primary" ? "bg-jay_primary text-jay_secondary  hover:border-jay_primary hover:text-jay_primary ":"bg-jay_accent text-jay_primary hover:border-white hover:text-jay_primary"}  rounded-full flex gap-2 justify-center items-end whitespace-nowrap ${customStyle}`}>
        <div>
          
          {icon}
        </div>
        <span >{text}</span>
      </button>
    );
  }
  