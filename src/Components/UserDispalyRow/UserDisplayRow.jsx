
function UserDisplayRow({idx,item,deleteUserFunction}) {
  return (
    <tr className="" style={{ backgroundColor: idx % 2 === 0 ? 'rgba(196, 219, 255,0.32)' : 'rgba(250, 177, 234,0.32)',}}>
                      <td className="py-2">{item.userName}</td>
                      <td className="py-2">{item.DOB}</td>
                      <td className="py-2">{item.adhaarNumber}</td>
                      <td className="py-2">{item.MobileNumber}</td>
                      <td className="py-2">{item.age}</td>
                      <td className="py-2">
                         <button className="py-1 px-[10px] font-semibold text-[20px] border-2 border-blue-500
                                hover:bg-blue-500 rounded-lg transition duration-200 ease-in hover:text-white " 
                                onClick={() => {deleteUserFunction(item.adhaarNumber); }}>
                                    Delete
                        </button>
                       
                      </td>
                    </tr>
  )
}

export default UserDisplayRow