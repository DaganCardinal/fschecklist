import { forwardRef } from "react";

interface InputProps {
  type: string;
  id: string;
  name: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  textSize?: string;
}

// Open top/underline input
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, id, value, onChange, onBlur, onKeyPress, name }, ref) => {
    return (
      <>
        <div className="relative my-2">
          <input
            type={type}
            id={id}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 dark:border-gray-300 border-gray-900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer dark:text-gray-100"
            placeholder=" "
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
            ref={ref}
          />
          <label
            htmlFor={id}
            className="absolute text-sm dark:text-gray-200 text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {name}
          </label>
        </div>
      </>
    );
  }
);

// Outlined input
export const FullInput: React.FC<InputProps> = ({
  type,
  id,
  name,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <div className="relative">
        <input
          type={type}
          id={id}
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <label
          htmlFor={id}
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          {name}
        </label>
      </div>
    </>
  );
};

// Header input
export const HeaderInput = ({
  type,
  id,
  value,
  onChange,
  name,
  onBlur,
  textSize,
  onKeyPress,
}: InputProps) => {
  return (
    <>
      <div className="relative">
        <input
          type={type}
          id={id}
          className={`block py-2.5 px-0 w-full  dark:placeholder:text-gray-100 ${textSize} placeholder:${textSize} placeholder:font-heading text-center text-gray-900 bg-transparent border-0 border-b-2  border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer dark:text-gray-100`}
          placeholder={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
        />
      </div>
    </>
  );
};
