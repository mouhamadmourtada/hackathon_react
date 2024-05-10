export default function Card(){
  return (
    <>
      <div 
        className="flex flex-col w-72 justify-items-center items-center rounded-2xl p-1 shadow-xl bg-white"
      >
        <img 
          src="https://picsum.photos/id/13/200/300" 
          alt="random lorem image" 
          className="h-52 w-full rounded-t-md"
        />
        <h2 className="text-center w-full my-2 text-xl font-bold tracking-wide ">Card title</h2>
        <p className="w-full font-light px-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quisquam veritatis temporibus!</p>
        <a href="#" className="bg-sky-500 hover:bg-sky-700 px-4 py-2 my-4 text-white font-medium rounded-3xl w-44 text-center mt-4 active:ring">Action Button</a>
      </div>
    </>
  )
}