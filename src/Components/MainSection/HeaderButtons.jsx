function HeaderButtons({setAddUserDispaly}) {
    
  const handleUserTable = () => {
    setAddUserDispaly((prevVal)=>!prevVal);
  };
  const handleUserDRetrive = () => {
    setAddUserDispaly((prevVal)=>!prevVal);
  };
  return (
    <div className="btn-box flex justify-center gap-[20px] min-[950px]:gap-[35px] min-[1100px]:gap-[50px] items-center py-[15px]">
        <button
          className="block px-[7px] min-[1100px]:px-[12px] py-2 font-semibold  text-[15px] min-[950px]:text-[20x] min-[1100px]:text-[25px] border-2 border-blue-500
         hover:bg-blue-500 rounded-lg transition duration-200 ease-in hover:text-white"
          onClick={handleUserTable}
        >
          Add New User
        </button>
        <button
          className="block px-[7px] min-[1100px]:px-[12px] py-2 font-semibold  text-[15px] min-[950px]:text-[20x] min-[1100px]:text-[25px] border-2 border-blue-500
         hover:bg-blue-500 rounded-lg transition duration-200 ease-in hover:text-white"
          onClick={handleUserDRetrive}
        >
          Get Selected User
        </button>
      </div>
  )
}

export default HeaderButtons