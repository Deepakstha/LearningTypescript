"use client";
import { CustomeButtonProps } from "@/types";
import Image from "next/image";
const CustomButton = ({
  title,
  containerStyles,
  handelClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomeButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        className={`custom-btn ${containerStyles}`}
        type={btnType || "button"}
        onClick={() => {
          handelClick;
        }}
      >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image
              src={rightIcon}
              alt="right icon"
              fill
              className="object-contain"
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default CustomButton;
