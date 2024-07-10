import { useEffect, useState } from "react";
import UserAddingRow from "../UserAddingRow/UserAddingRow";
import UserRetriveSection from "../UserRetriveSection/UserRetriveSection";
import TableHead from "../TableHead/TableHead";
import UserDisplayRow from "../UserDispalyRow/UserDisplayRow";
import HeaderButtons from "./HeaderButtons";

function MainSection() {
  const [userArr, setUserArr] = useState(
    JSON.parse(localStorage.getItem("User_Array"))
  );
  const [canAddUser, setCanAddUser] = useState(false);
  const [addUserDispaly, setAddUserDispaly] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchedArr, setSearchedArr] = useState(null);
  const [isSearchArr, setIsSearchArr] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    DOB: "",
    adhaarNumber: "",
    MobileNumber: "",
    age: "",
  });

  // useEFFECT TO STORE THE DATA TO LOCALSTROGE AS SOON AS USER ARRAR CHANGES
  useEffect(() => {
    localStorage.setItem("User_Array", JSON.stringify(userArr));
  }, [userArr]);

  // CONTINOUSLY HANDLE CHANGES AND UPDATE USER OBJECT THAT NEED TO BE INSERTED IN USERS ARRAY
  const handleChangeFunction = (e) => {
    const { value, name } = e.target;
    let newUser = { ...user, [name]: value };
    if (name === "DOB") {
      const age = calculateAge(value);
      newUser.age = age;
    }
    setUser(newUser);
  };
  
  
    //CALCULATES AGES FOR THE USER AS USER ENTER ITS DATE OF BIRTH AND RETURNS IT .
    const calculateAge = (dob) => {
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      return age;
    };
  //ALLOWS USER TO ADD THE USERDETAILS BY OPENING THE INPUT ROW
  const addUserFunction = () => {
    setCanAddUser(true);
  };
  //IT SAVES THE USER DETAILS THAT IS ENTERED BY USER IN AN INPUT FORM,PUSHES USER OBJ TO USER ARR
  const saveUserFunction = (e) => {
    e.preventDefault();
    setUserArr([...userArr, user]);
    setUser({});
    setCanAddUser(false);
   
  };
  //DELETE THE USER BASE ON ENTERED ADHAAR NUMBER
  const deleteUserFunction = (adhaarNo) => {
    const filterArr = userArr.filter((item) => {
      return item.adhaarNumber != adhaarNo;
    });
    setUserArr(filterArr);
  };






  
  //HANDLE AND GET THE USE USER WITH ENTERED ADHAAR NUMBER IN AN INPUT FEILD
  const handleSearchFunction = (searchIp) => {
    const filterArr = userArr.filter((item) => {
      return item.adhaarNumber == searchIp;
    });
    if (filterArr.length===0) {
      setIsSearchArr(false);
      return;
    }
    setIsSearchArr(true);
    console.log(filterArr);
    setSearchedArr(filterArr);
    return;
  };
  return (
    <>
      {/* Button Box New Component */}
       <HeaderButtons setAddUserDispaly={setAddUserDispaly}/>


      {/* USer Table Box */}
      {
      addUserDispaly 
      ?
       (
        <div className="relative h-[75vh] table-box border-2 mx-auto border-green-400 p-4 w-[95%]">
          <h1 className="text-[30px] font-semibold w-fit px-4 text-center p-1 border-2 border-purple-400 mb-5">
            All Users Table
          </h1>
        <div className="main-table-box overflow-y-auto h-[50vh]">
          <table className=" w-[100%]">
            <TableHead/>
            <tbody className="text-center text-[20px] w-[100%] ">


              {/*Row use To display the added user list */}
              {userArr &&
                userArr.map((item, idx) => {
                  return (
                   <UserDisplayRow key={idx} idx={idx} item={item} deleteUserFunction={deleteUserFunction}/>
                  );
                })}




              {/*Row use TO Dispaly an input fields when clicked on Add new USer btn */}
              {
              canAddUser
               &&
                (
               <UserAddingRow user={user} handleChangeFunction={handleChangeFunction} saveUserFunction={saveUserFunction}/>
              )
              }
            </tbody>

            <button
              className="block absolute bottom-4 right-4 px-[12px] py-2 font-semibold text-[25px] border-2 border-blue-500
                   hover:bg-blue-500 rounded-lg transition duration-200 ease-in hover:text-white"
              onClick={addUserFunction} >
              Add New User
            </button>
          </table>
          </div>
        </div>
      )
       :
        (
       <UserRetriveSection handleSearchFunction={handleSearchFunction} searchedArr={searchedArr} 
        isSearchArr={isSearchArr} searchInput={searchInput} setSearchInput={setSearchInput}/>
      )
      }
    </>
  );
}

export default MainSection;
