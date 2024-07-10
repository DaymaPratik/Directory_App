function UserAddingRow({user ,handleChangeFunction,saveUserFunction}) {
  return (
    <tr className="">
                  <td className="py-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border-2 border-sky-500 px-2 py-2"
                      value={user.userName}
                      name="userName"
                      onChange={handleChangeFunction}
                    />
                  </td>

                  <td className="py-2">
                    <input
                      type="date"
                      className="border-2 border-sky-500 px-2 py-2"
                      value={user.DOB}
                      name="DOB"
                      onChange={handleChangeFunction}
                    />
                  </td>

                  <td className="py-2">
                    <input
                      type="number"
                      placeholder="Adhaar Number"
                      className="border-2 border-sky-500 px-2 py-2"
                      value={user.adhaarNumber}
                      name="adhaarNumber"
                      onChange={handleChangeFunction}
                    />
                  </td>

                  <td className="py-2">
                    <input
                      type="number"
                      placeholder="Moblie NUmber"
                      className="border-2 border-sky-500 px-2 py-2"
                      value={user.MobileNumber}
                      name="MobileNumber"
                      onChange={handleChangeFunction}
                    />
                  </td>

                  <td className="py-2">
                    <input
                      type="number"
                      placeholder="Age"
                      className="border-2 border-sky-500 px-2 py-2"
                      value={user.age}
                      name="age"
                      onChange={handleChangeFunction}
                    />
                  </td>

                  <td className="py-2">
                    {" "}
                    <button
                      className="block px-[12px] font-semibold text-[25px] border-2 border-blue-500
         hover:bg-blue-500 rounded-lg transition duration-200 ease-in hover:text-white"
                      onClick={saveUserFunction}
                    >
                      Save
                    </button>
                  </td>
                </tr>
  )
}

export default UserAddingRow