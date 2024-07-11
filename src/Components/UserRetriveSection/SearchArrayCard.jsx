
function SearchArrayCard({item}) {
  return (
    <div
            className="border-2 border-black w-fit p-4 my-4 mx-auto"
          >
            <p className="text-[25px] font-bold text-center py-2 bg-blue-400 text-white w-[100%]">User Details</p>
            <p className="text-[25px]">
              <span className="font-semibold">Name: </span>
              {item.userName}
            </p>
            <p className="text-[25px]">
              <span className="font-semibold">Age: </span>
              {item.DOB}
            </p>
            <p className="text-[25px]">
              <span className="font-semibold">Adhaar Number: </span>
              {item.adhaarNumber}
            </p>
            <p className="text-[25px]">
              <span className="font-semibold">Mobile Number: </span>
              {item.MobileNumber}
            </p>
            <p className="text-[25px]">
              <span className="font-semibold">Age: </span>
              {item.age}
            </p>
          </div>
  )
}

export default SearchArrayCard