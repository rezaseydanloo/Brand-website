type LeftArowProps = {
    Leftarrow: () => void,
    Index : number
  };
  
  export default function LeftArow({ Leftarrow ,Index }: LeftArowProps) {
    return (
      <img
        src="src\icons\Arows\left-svgrepo-com.svg"
        alt=""
        className={`w-[60px] h-[60px] p-2 ${Index===2 ? "bg-black" : "hover:bg-zinc-700 bg-zinc-900" } duration-500 rounded-full`}
        
        onClick={Leftarrow} 
      />
    );
  }