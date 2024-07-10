function HeaderButtons({setAddUserDispaly}) {
    
  const handleUserTable = () => {
    setAddUserDispaly((prevVal)=>!prevVal);
  };
  const handleUserDRetrive = () => {
    setAddUserDispaly((prevVal)=>!prevVal);
  };
  return (
    <div className="btn-box flex justify-center gap-[50px] items-center py-[15px]">
        <button
          className="block px-[12px] py-2 font-semibold text-[25px] border-2 border-blue-500
         hover:bg-blue-500 rounded-lg transition duration-200 ease-in hover:text-white"
          onClick={handleUserTable}
        >
          Add New User
        </button>
        <button
          className="block px-[12px] py-2 font-semibold text-[25px] border-2 border-blue-500
         hover:bg-blue-500 rounded-lg transition duration-200 ease-in hover:text-white"
          onClick={handleUserDRetrive}
        >
          Get Selected User
        </button>
      </div>
  )
}

export default HeaderButtons