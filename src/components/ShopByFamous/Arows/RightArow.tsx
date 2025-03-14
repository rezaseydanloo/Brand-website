type RightArowProps = {
    Rightarrow: () => void,
    Index : number ,
    pathArrayeSize : number
  };
  
  export default function RightArow({ Rightarrow , Index , pathArrayeSize}: RightArowProps) {

    
    return (
      <img
        src="icons/Arows/to-the-right-svgrepo-com.svg"
        alt=""
        className={`w-[60px] h-[60px] p-2 ${Index==pathArrayeSize-1 ? "bg-black" : "hover:bg-zinc-700 bg-zinc-900" } duration-500 rounded-full`}
        onClick={Rightarrow} 
      />
    );
  }
  