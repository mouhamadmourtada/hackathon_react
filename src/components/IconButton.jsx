import MdIcon from '../components/MdIcon';

export default function IconButton({icon, onClick}) {
  return <>
    <div className="">
      <button className=" text-white font-bold py-2 px-4 rounded-full" onClick={onClick}>
        <MdIcon className="w-4 h-4 mx-2" aria-hidden="true" icon={icon} />
      </button>
    </div>
  </>;
}