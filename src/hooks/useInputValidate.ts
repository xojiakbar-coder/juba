// import { useState } from "react";

// const useInputValidate = (initalValue, type) => {
//   const [value, setValue] = useState(initalValue);

//   const [wrongValue, setWrongValue] = useState({
//     userNameWrong: "",
//     phoneNumberWrong: "",
//   });

//   const onChange = (e) => {
//     setValue(e.target.value);
//   };

//   const validateInput = () => {
//     let res = false;
//     if (type === "username" && value.search(/\d/) == null) {
//       res = true;
//     } else if (type === "phoneNumber") {
//       res = true;
//     }
//   };
// };
