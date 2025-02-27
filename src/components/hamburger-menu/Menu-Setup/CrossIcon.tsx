
export default function CrossIcon({isMenu , setisMenu} : {isMenu : boolean ,setisMenu : React.Dispatch<React.SetStateAction<boolean>>}){
    
    const onClickHandler =() =>{
        setisMenu(!isMenu)
    }

    return(
        <img src="src\icons\Hamburger-Menu\cross-svgrepo-com.svg" 
        alt="Menu icon"
        className="inline
                   w-8 sm:w-10 md:w-12 
                   h-8 sm:h-10 md:h-12 
                   caret-transparent hover:scale-75 duration-500 rounded-lg"
                   onClick={onClickHandler}/>
        
        
    )
}