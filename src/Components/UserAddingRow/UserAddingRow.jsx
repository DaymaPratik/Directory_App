function UserAddingRow({user ,handleChangeFunction,saveUserFunction,isNotValid}) {
  return (
   <>
    <tr className="text-[10px] text-center min-[1100px]:text-[15px] min-[1256px]:text-[20px] h-[50px] bg-blue-400">
                  <td className="py-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border-2 border-sky-500 w-[90%] px-1 py-2 min-[1100px]:px-2 min-[1100px]:py-2"
                      value={user.userName}
                      name="userName"
                      onChange={handleChangeFunction}
                      required
                    />
                  </td>

                  <td className="py-2">
                    <input
                      type="date"
                      className="border-2 border-sky-500 px-1 w-[90%] py-2 min-[1100px]:px-2 min-[1100px]:py-2"
                      value={user.DOB}
                      name="DOB"
                      onChange={(e)=>handleChangeFunction(e)}
                      required
                    />
                  </td>

                  <td className="py-2">
                    <input
                      type="number"
                      placeholder="Adhaar Number"
                      className="border-2 border-sky-500 w-[90%] px-1 py-2 min-[1100px]:px-2 min-[1100px]:py-2"
                      value={user.adhaarNumber}
                      name="adhaarNumber"
                      onChange={handleChangeFunction}
                      required
                    />
                     {isNotValid.adhaar && <p>Adhaar must 12 have Digits</p> }

                  </td>

                  <td className="py-2">
                    <input
                      type="number"
                      placeholder="Moblie NUmber"
                      className="border-2 border-sky-500  w-[90%] px-1 py-2 min-[1100px]:px-2 min-[1100px]:py-2"
                      value={user.MobileNumber}
                      name="MobileNumber"
                      onChange={handleChangeFunction}
                      required
                    />
                    {isNotValid.mobile && <p>Mobile must 10 have Digits</p> }

                  </td>

                  <td className="py-2">
                    <input
                      type="text"
                      placeholder="Age"
                      className="border-2 border-sky-500 w-[50%] px-1 py-2 min-[1100px]:px-2 min-[1100px]:py-2"
                      value={user.age}
                      name="age"
                      onChange={handleChangeFunction}
                      readOnly
                    />
                  </td>

                  <td className="py-2">
                    {" "}
                    <button
                      className="block px-3 min-[950px]:px-[7px] py-1 min-[1100px]:py-2 min-[1100px]:px-[12px] font-semibold text-[12px] min-[1100px]:text-[20px] 
                      min-[1256px]:text-[25px]  hover:bg-blue-900 bg-white rounded-lg transition duration-200 ease-in hover:text-white"
                      onClick={saveUserFunction}
                    >
                      Save
                    </button>
                  </td>
                </tr>
                
   </>
  )
}

export default UserAddingRow






// function UserAddingRow({ user, handleChangeFunction, saveUserFunction, isNotValid }) {
//   return (
//     <>
//       <tr className="text-[10px] text-center min-[1100px]:text-[15px] min-[1256px]:text-[20px] h-[50px] bg-blue-400">
//         <td className="py-2">
//           <input
//             type="text"
//             placeholder="Name"
//             className="border-2 border-sky-500 w-[90%] px-1 py-1 min-[1100px]:px-2 min-[1100px]:py-2"
//             value={user.userName}
//             name="userName"
//             onChange={handleChangeFunction}
//             required
//           />
//         </td>

//         <td className="py-2">
//           <input
//             type="date"
//             className="border-2 border-sky-500 px-1 w-[90%] py-1 min-[1100px]:px-2 min-[1100px]:py-2"
//             value={user.DOB}
//             name="DOB"
//             onChange={handleChangeFunction}
//             required
//           />
//         </td>

//         <td className="py-2">
//           <input
//             type="number"
//             placeholder="Adhaar Number"
//             className="border-2 border-sky-500 w-[90%] px-1 py-1 min-[1100px]:px-2 min-[1100px]:py-2"
//             value={user.adhaarNumber}
//             name="adhaarNumber"
//             onChange={handleChangeFunction}
//             required
//           />
//           {isNotValid && <p>Adhaar must have 12 digits</p>}
//         </td>

//         <td className="py-2">
//           <input
//             type="number"
//             placeholder="Mobile Number"
//             className="border-2 border-sky-500 w-[90%] px-1 py-1 min-[1100px]:px-2 min-[1100px]:py-2"
//             value={user.MobileNumber}
//             name="MobileNumber"
//             onChange={handleChangeFunction}
//             required
//           />
//           {isNotValid && <p>Mobile must have 10 digits</p>}
//         </td>

//         <td className="py-2">
//           <input
//             type="text"
//             placeholder="Age"
//             className="border-2 border-sky-500 w-[50%] px-1 py-1 min-[1100px]:px-2 min-[1100px]:py-2"
//             value={user.age}
//             name="age"
//             onChange={handleChangeFunction}
//             readOnly
//           />
//         </td>

//         <td className="py-2">
//           <button
//             className="block px-3 min-[950px]:px-[7px] py-1 min-[1100px]:py-2 min-[1100px]:px-[12px] font-semibold text-[12px] min-[1100px]:text-[20px] min-[1256px]:text-[25px] hover:bg-blue-900 bg-white rounded-lg transition duration-200 ease-in hover:text-white"
//             onClick={saveUserFunction}
//           >
//             Save
//           </button>
//         </td>
//       </tr>
//     </>
//   );
// }

// export default UserAddingRow;
