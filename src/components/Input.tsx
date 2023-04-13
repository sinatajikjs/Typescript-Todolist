import { FC, ChangeEvent } from "react";

type Props = {
  label?: string;
  name?: string;
  className?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  type?: string;
  value?: string | number;
  placeholder?: string;
};

const Input: FC<Props> = ({
  label,
  name,
  className,
  onChange,
  type,
  value,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={name} className="text-xl">
        {label}
      </label>
      <input
        onChange={onChange}
        className={`border-2 p-3 rounded-lg text-xl w-full mt-1 ${className}`}
        value={value}
        type={type || "text"}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
