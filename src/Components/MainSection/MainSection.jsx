// import { useEffect, useState } from "react";
// import UserAddingRow from "../UserAddingRow/UserAddingRow";
// import UserRetriveSection from "../UserRetriveSection/UserRetriveSection";
// import TableHead from "../TableHead/TableHead";
// import UserDisplayRow from "../UserDispalyRow/UserDisplayRow";
// import HeaderButtons from "./HeaderButtons";

// function MainSection() {
//   const [userArr, setUserArr] = useState(
//     JSON.parse(localStorage.getItem("User_Array"))
//   );
//   const [canAddUser, setCanAddUser] = useState(false);
//   const [addUserDispaly, setAddUserDispaly] = useState(true);
//   const [searchInput, setSearchInput] = useState("");
//   const [searchedArr, setSearchedArr] = useState([]);
//   const [isSearchArr, setIsSearchArr] = useState(false);
//   const [isNotValid,setIsNotValid]=useState(false);
//   const [user, setUser] = useState({
//     userName: "",
//     DOB: "",
//     adhaarNumber: "",
//     MobileNumber: "",
//     age: "",
//   });

//   // useEFFECT TO STORE THE DATA TO LOCALSTROGE AS SOON AS USER ARRAR CHANGES
//   useEffect(() => {
//     localStorage.setItem("User_Array", JSON.stringify(userArr));
//   }, [userArr]);

//   // CONTINOUSLY HANDLE CHANGES AND UPDATE USER OBJECT THAT NEED TO BE INSERTED IN USERS ARRAY
//   const handleChangeFunction = (e) => {
//     const { value, name } = e.target;
//     let newUser = { ...user, [name]: value };
//     console.log(newUser);
//     if (name === "DOB") {
//       const age = calculateAge(value);
//       newUser.age = age;
//     }
//  setUser(newUser)
//  console.log(user);
//   };
  
  
//     //CALCULATES AGES FOR THE USER AS USER ENTER ITS DATE OF BIRTH AND RETURNS IT .
//     const calculateAge = (dob) => {
//       const birthDate = new Date(dob);
//       const today = new Date();
//       let age = today.getFullYear() - birthDate.getFullYear();
//       return age;
//     };
//   //ALLOWS USER TO ADD THE USERDETAILS BY OPENING THE INPUT ROW
//   const addUserFunction = () => {
//     setCanAddUser(true);
//   };
//   //IT SAVES THE USER DETAILS THAT IS ENTERED BY USER IN AN INPUT FORM,PUSHES USER OBJ TO USER ARR
//   const saveUserFunction = (e) => {
//     e.preventDefault();
//     console.log(e);
//     const adNo=user.adhaarNumber;
//     const mbNo=user.MobileNumber;
//     // console.log(adNo.length);
//     if(adNo?.length != 12 || isNaN(adNo)){
//       alert("Adhaar Number  must be 12 digits");
//       setIsNotValid(true);
//       return;
//     }else if(mbNo?.length != 10 || isNaN(mbNo)){
//       alert("Mobile Number  must be 10 digits");
//       setIsNotValid(true);
//       return;
//     }
//     setIsNotValid(false);
//     setUserArr([...userArr, user]);
//     setUser({});
//     setCanAddUser(false);
   
//   };
//   //DELETE THE USER BASE ON ENTERED ADHAAR NUMBER
//   const deleteUserFunction = (adhaarNo) => {
//     const filterArr = userArr?.filter((item) => {
//       return item.adhaarNumber != adhaarNo;
//     });
//     setUserArr(filterArr);
//   };






  
//   //HANDLE AND GET THE USE USER WITH ENTERED ADHAAR NUMBER IN AN INPUT FEILD
//   const handleSearchFunction = (searchIp) => {
//     const filterArr = userArr.filter((item) => {
//       return item.adhaarNumber == searchIp;
//     });
//     if (filterArr.length===0) {
//       setIsSearchArr(false);
//       return;
//     }
//     setIsSearchArr(true);
//     // console.log(filterArr);
//     setSearchedArr(filterArr);
//     return;
//   };
//   return (
//     <>
//       {/* Button Box New Component */}
//        <HeaderButtons setAddUserDispaly={setAddUserDispaly}/>


//       {/* USer Table Box */}
//       {
//       addUserDispaly 
//       ?
//        (
//         <div className="relative h-[75vh] table-box border-2 mx-auto border-green-400 p-2 min-[700px]:p-4 w-[100%] min-[700px]:w-[95%]">
//           <h1 className="text-[20px] min-[950px]:text-[25px] min-[1100]:text-[30px] font-semibold w-fit px-4 text-center p-1 border-2 border-purple-400 mb-5
//           hover:bg-purple-400 rounded-lg transition duration-200 ease-in hover:text-white">
//             All Users Table
//           </h1>
//         <div className="main-table-box overflow-auto h-[50vh]">
//           <table className=" w-[100%] ">
//             <TableHead/>
//             <tbody className="text-center text-[12px] min-[950px]:text-[17px] min-[1100px]:text-[25px] w-[100%] ">


//               {/*Row use To display the added user list */}
//               {userArr?.length > 0 &&
//                 userArr?.map((item, idx) => {
//                   return (
//                    <UserDisplayRow key={idx} idx={idx}  item={item} deleteUserFunction={deleteUserFunction}/>
//                   );
//                 })}




//               {/*Row use TO Dispaly an input fields when clicked on Add new USer btn */}
//               {
//               canAddUser
//                &&
//                 (
//                <UserAddingRow user={user} isNotValid={isNotValid} handleChangeFunction={handleChangeFunction} saveUserFunction={saveUserFunction}/>
//               )
//               }
//             </tbody>

//             <button
//               className="block absolute bottom-4 right-4 px-[12px] py-2 font-semibold text-[18px] min-[950px]:text-[22px] min-[1100]:text-[25px] border-2 border-blue-500
//                    hover:bg-blue-500 rounded-lg transition duration-200 ease-in hover:text-white"
//               onClick={addUserFunction} >
//               Add New User
//             </button>
//           </table>
//           </div>
//         </div>
//       )
//        :
//         (
//        <UserRetriveSection handleSearchFunction={handleSearchFunction} searchedArr={searchedArr} 
//         isSearchArr={isSearchArr} searchInput={searchInput} setSearchInput={setSearchInput}/>
//       )
//       }
//     </>
//   );
// }

// export default MainSection;
































import { useEffect, useState } from "react";
import UserAddingRow from "../UserAddingRow/UserAddingRow";
import UserRetriveSection from "../UserRetriveSection/UserRetriveSection";
import TableHead from "../TableHead/TableHead";
import UserDisplayRow from "../UserDispalyRow/UserDisplayRow";
import HeaderButtons from "./HeaderButtons";

function MainSection() {
  const [userArr, setUserArr] = useState([]);
  const [canAddUser, setCanAddUser] = useState(false);
  const [addUserDispaly, setAddUserDispaly] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchedArr, setSearchedArr] = useState([]);
  const [isSearchArr, setIsSearchArr] = useState(false);
  const [isNotValid, setIsNotValid] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    DOB: "",
    adhaarNumber: "",
    MobileNumber: "",
    age: "",
  });

  useEffect(() => {
    localStorage.setItem("User_Array", JSON.stringify(userArr));
  }, [userArr]);

  const handleChangeFunction = (e) => {
    const { value, name } = e.target;
    let newUser = { ...user, [name]: value };
    if (name === "DOB") {
      const age = calculateAge(value);
      newUser.age = age;
    }
    setUser(newUser);
    // console.log("hello");
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };

  const addUserFunction = () => {
    setCanAddUser(true);
  };

  const saveUserFunction = () => {
    // e.preventDefault();
    const adNo = user.adhaarNumber;
    const mbNo = user.MobileNumber;
    console.log(adNo,mbNo);
    if (adNo?.length !== 12 || isNaN(adNo)) {
      alert("Adhaar Number must be 12 digits");
      setIsNotValid(true);
      return;
    }  if (mbNo?.length !== 10 || isNaN(mbNo)) {
      alert("Mobile Number must be 10 digits");
      setIsNotValid(true);
      return;
    }

    setIsNotValid(false);
    setUserArr([...userArr, user]);
    setUser({
      userName: "",
      DOB: "",
      adhaarNumber: "",
      MobileNumber: "",
      age: "",
    });
    setCanAddUser(false);
  };

  const deleteUserFunction = (adhaarNo) => {
    const filterArr = userArr?.filter((item) => item.adhaarNumber !== adhaarNo);
    setUserArr(filterArr);
  };

  const handleSearchFunction = (searchIp) => {
    const filterArr = userArr.filter((item) => item.adhaarNumber === searchIp);
    if (filterArr.length === 0) {
      setIsSearchArr(false);
      return;
    }
    setIsSearchArr(true);
    setSearchedArr(filterArr);
  };

  return (
    <>
      <HeaderButtons setAddUserDispaly={setAddUserDispaly} />
      {addUserDispaly ? (
        <div className="relative h-[75vh] table-box border-2 mx-auto border-green-400 p-2 min-[700px]:p-4 w-[100%] min-[700px]:w-[95%]">
          <h1 className="text-[20px] min-[950px]:text-[25px] min-[1100]:text-[30px] font-semibold w-fit px-4 text-center p-1 border-2 border-purple-400 mb-5 hover:bg-purple-400 rounded-lg transition duration-200 ease-in hover:text-white">
            All Users Table
          </h1>
          <div className="main-table-box overflow-auto h-[50vh]">
            <table className="w-[100%]">
              <TableHead />
              <tbody className="text-center text-[12px] min-[950px]:text-[17px] min-[1100px]:text-[25px] w-[100%]">
                {userArr?.length > 0 &&
                  userArr?.map((item, idx) => (
                    <UserDisplayRow key={idx} idx={idx} item={item} deleteUserFunction={deleteUserFunction} />
                  ))}
                {canAddUser && (
                  <UserAddingRow
                    user={user}
                    isNotValid={isNotValid}
                    handleChangeFunction={handleChangeFunction}
                    saveUserFunction={saveUserFunction}
                  />
                )}
              </tbody>
            </table>
            <button
              className="block absolute bottom-4 right-4 px-[12px] py-2 font-semibold text-[18px] min-[950px]:text-[22px] min-[1100]:text-[25px] border-2 border-blue-500 hover:bg-blue-500 rounded-lg transition duration-200 ease-in hover:text-white"
              onClick={addUserFunction}
            >
              Add New User
            </button>
          </div>
        </div>
      ) : (
        <UserRetriveSection
          handleSearchFunction={handleSearchFunction}
          searchedArr={searchedArr}
          isSearchArr={isSearchArr}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      )}
    </>
  );
}

export default MainSection;
