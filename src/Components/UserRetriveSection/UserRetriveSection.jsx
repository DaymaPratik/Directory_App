import SearchArrayCard from "./SearchArrayCard";

function UserRetriveSection({handleSearchFunction,searchInput,setSearchInput,isSearchArr,searchedArr}) {
  return (
    <section className="border-2 border-black h-[70vh] p-4">
    <h1 className="text-[30px] w-fit px-4 font-semibold text-center p-1 border-2 border-purple-400 mb-5">
      Retrive User
    </h1>
    <div className="ip-box  flex justify-center items-center gap-[25px]  text-center py-5">
      <input
        type="number"
        placeholder="Enter User Adhaar Number"
        className="w-[40%] p-2 border-2 text-[25px] border-black"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <button
        className="block py-2 px-[12px] font-semibold text-[25px] border-2 border-blue-500
   hover:bg-blue-500 rounded-lg transition duration-200 ease-in hover:text-white"
        onClick={() => {
          handleSearchFunction(searchInput);
        }}
      >
        Search
      </button>
    </div>

    {isSearchArr ? (
      searchedArr?.map((item, idx) => {
        return (
         <SearchArrayCard item={item} key={idx}/>
        );
      })
    ) : (
      <h1 className="text-center text-[27px] font-semibold my-[40px] items-center">
        No User Found Enter Valid Adhaar Number....
      </h1>
    )}
  </section>
  )
}

export default UserRetriveSection