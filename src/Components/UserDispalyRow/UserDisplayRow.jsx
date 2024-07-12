
function UserDisplayRow({idx,item,deleteUserFunction}) {
  return (
    
    <tr className="text-white text-[15px]" style={{ backgroundColor: idx % 2 === 0 ? 'rgba(15, 109 ,255 ,44%)' : 'rgba(250 ,177 ,234 ,50%)',}}>
                      <td className="py-2">{item.userName}</td>
                      <td className="py-2">{item.DOB}</td>
                      <td className="py-2">{item.adhaarNumber}</td>
                      <td className="py-2">{item.MobileNumber}</td>
                      <td className="py-2">{item.age}</td>
                      <td className="py-2 px-1">
                         <button className="py-1 px-[3px] min-[950px]:px-[7px] min-[1100px]:px-[12px] font-semibold text-[12px] 
                         min-[950px]:text-[17px] min-[1100px]:text-[20px] border-2 border-white
                                hover:bg-white rounded-lg transition duration-200 ease-in hover:text-blue-500 " 
                                onClick={() => {deleteUserFunction(item.adhaarNumber); }}>
                                    Delete
                        </button>
                       
                      </td>
      </tr>
      
      
  )
}

export default UserDisplayRow