export default function MenuIcon({isMenu,setisMenu}: {
  isMenu: boolean;
  setisMenu: React.Dispatch<React.SetStateAction<boolean>>;
})

{
  const onClickHandler = () => {
    setisMenu(!isMenu);
  };

  return (
    <img
      src="icons\Hamburger-Menu\menu-svgrepo-com.svg"
      alt="Menu icon"
      className="inline 
                   w-7 sm:w-7 md:w-8 lg:w-8 xl:w-9
                   h-7 sm:h-7 md:h-8 lg:h-8 xl:h-9
                   caret-transparent  hover:scale-75 duration-500"
      onClick={onClickHandler}
    />
  );
}
