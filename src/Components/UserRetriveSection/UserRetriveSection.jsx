import SearchArrayCard from "./SearchArrayCard";
import BounceLoader from "react-spinners/BounceLoader";
function UserRetriveSection({handleSearchFunction,searchInput,setSearchInput,isSearchArr,searchedArr,loading,setLoading}) {
  return (
    <section className=" relative  h-[82vh] bg-center bg-cover
    bg-[url('https://plus.unsplash.com/premium_photo-1670315264879-59cc6b15db5f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
        <div className="demo box absolute w-[100%] p-2 min-[700px]:p-4 h-[100%] bg-[rgba(0,0,0,45%)]">
    <h1 className="text-[30px] w-fit px-4 font-semibold text-center p-1 border-2 border-purple-400 mb-5
          hover:bg-purple-400 rounded-lg transition duration-200 ease-in text-white">
      Retrive User
    </h1>
    <div className="ip-box  flex justify-center items-center gap-[25px]  text-center py-5">
      <input
        type="number"
        placeholder="Enter User Adhaar Number"
        className="w-[40%] p-2 rounded-xl text-[25px] "
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <button
        className="block py-2 px-[12px] font-semibold text-[25px] border-2 border-blue-500
   hover:bg-blue-500 rounded-lg transition duration-200 ease-in text-white"
        onClick={() => {
          handleSearchFunction(searchInput);
        }}
      >
        Search
      </button>
    </div>

       {loading 
       ?
       <div className="flex justify-center items-center h-[50%]">
       <BounceLoader  size={70} color="red"/>
    </div>
       :
       <div>
        {
             isSearchArr ? (
              searchedArr?.map((item, idx) => {
                return (
                 <SearchArrayCard item={item} key={idx}/>
                );
              })
            ) : (
              <h1 className="text-center text-[27px] font-semibold mx-auto  shadow-[0px_0px_10px_0px_black] w-fit px-10 bg-[#b1b8da73] py-3 my-[40px] items-center">
                No User Found Enter Valid Adhaar Number....
              </h1>
            )
        }
       </div>
      }
        
    </div>
  </section>
  )
}

export default UserRetriveSection