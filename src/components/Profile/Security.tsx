import { changePassword } from "@/services/CognitoService";
import React, { useState } from "react";

const Security = () => {
  const [passwordDetails, setPasswordDetails] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [viewPassword, setViewPassword] = useState(false);
  const [viewNewPassword, setNewViewPassword] = useState(false);

  const passwordEye = {
    fontSize: "10px",
    cursor: "pointer",
    paddingLeft: "5px",
  };
  const handlePasswordUpdate = async () => {
    try {
      await changePassword(
        passwordDetails.oldPassword,
        passwordDetails.newPassword
      );
      setPasswordDetails({
        oldPassword: "",
        newPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const togglePassword = () => {
    if (viewPassword) {
      setViewPassword(false);
      return;
    }
    setViewPassword(true);
  };

  const toggleNewPassword = () => {
    if (viewNewPassword) {
      setNewViewPassword(false);
      return;
    }
    setNewViewPassword(true);
  };

  return (
    <div>
      <h2 className="text-[20px] tracking-[0.6px] font-[500]">Security</h2>
      <h3 className="mt-[24.5px] font-light">Password</h3>
      <div className="w-[277px] mt-[12px]">
        <div className="">
          <div>
            <label
              htmlFor="input-field-one"
              className="block mb-2 text-[12px] font-small text-[#797979] cursor-pointer"
            >
              Old Password
            </label>
          </div>
          <input
            id="input-field-one"
            type={viewPassword ? "text" : "password"}
            placeholder="********"
            className="w-full h-[33px] p-2 border-2 border-transparent rounded text-[15px] text-white bg-[#313131]"
            value={passwordDetails.oldPassword}
            onChange={(e) =>
              setPasswordDetails((prevState) => ({
                ...prevState,
                oldPassword: e.target.value,
              }))
            }
          />
          <span style={passwordEye} onClick={togglePassword}>
            {viewPassword ? "Hide" : "Show"}
          </span>
        </div>
        <div className="mb-[30px] mt-[15px]">
          <div>
            <label
              htmlFor="input-field-two"
              className="block mb-2 text-[12px] font-small text-[#797979] cursor-pointer"
            >
              New Password
            </label>
          </div>
          <input
            id="input-field-two"
            type={viewNewPassword ? "text" : "password"}
            className="w-full h-[33px] p-2 border-2 border-transparent text-[15px] text-white rounded text-[#797979] bg-[#313131]"
            value={passwordDetails.newPassword}
            placeholder="********"
            onChange={(e) =>
              setPasswordDetails((prevState) => ({
                ...prevState,
                newPassword: e.target.value,
              }))
            }
          />
          <span style={passwordEye} onClick={toggleNewPassword}>
            {viewNewPassword ? "Hide" : "Show"}
          </span>
        </div>
        <button
          className="w-[162px] h-[33px] bg-[#DD00FF] text-white text-[15px] rounded hover:bg-hover cursor-pointer"
          onClick={handlePasswordUpdate}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Security;
