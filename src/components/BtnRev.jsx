import React from "react";
import { useNavigate } from "react-router-dom";
const BtnRev = ({ id }) => {
  const navigate = useNavigate();
  const handleClickBtn = () => {
    navigate(`/products/${id}`);
  };
  return (
    <button
      onClick={handleClickBtn}
      className="btn bg-orange-400 rounded-none px-5 text-white border-none"
    >
      See Product
    </button>
  );
};

export default BtnRev;
