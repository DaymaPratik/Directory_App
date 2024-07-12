
function SearchArrayCard({item}) {
  return (
    <div className="text-[25px] w-fit py-2 px-4 my-4 bg-[#b1b8da73] mx-auto shadow-[0px_0px_10px_0px_black]"
          >
            <p className="text-[25px] font-bold text-center py-2 my-2 bg-blue-400 text-white w-[100%]">User Details</p>
            <p className="">
              <span className="font-semibold">Name: </span>
              {item.userName}
            </p>
            <p className="">
              <span className="font-semibold">Age: </span>
              {item.DOB}
            </p>
            <p className="">
              <span className="font-semibold">Adhaar Number: </span>
              {item.adhaarNumber}
            </p>
            <p className="">
              <span className="font-semibold">Mobile Number: </span>
              {item.MobileNumber}
            </p>
            <p className=" ">
              <span className="font-semibold">Age: </span>
              {item.age}
            </p>
          </div>
  )
}

export default SearchArrayCard