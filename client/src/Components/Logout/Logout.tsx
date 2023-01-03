import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { IconContext } from "react-icons";

const Logout = () => {
  return (
    <>
        <IconContext.Provider value={{ size: "100px",  className: "global-class-name" }}>
            <FiLogOut />
        </IconContext.Provider>
    </>
  )
}
export default Logout;