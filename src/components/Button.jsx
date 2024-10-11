import React from 'react'

const Button = ({ text }) => {
  return (
    <button className="inline-block px-[20px] py-[12px] rounded bg-yuzu-jam">
      {/* enter button text here to render */}
      <p className="text-sm font-bold text-white uppercase">{text}</p>
    </button>
  );
}

export default Button