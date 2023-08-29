interface ButtonProps {
  label?: string;
  onClick: () => void;
  borderType?: string;
}

export const EditorButton = ({ label, onClick, borderType }: ButtonProps) => {
  return (
    <button
      className={`${borderType} flex flex-row border-2  dark:border-gray-200 border-gray-600 rounded-md p-2 my-4 w-full text-center justify-center hover:bg-gray-400  dark:hover:bg-gray-600 hover:text-gray-100 dark:hover:text-gray-100 transition-all duration-300 ease-in-out`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export const SaveButton = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="my-6 border-2 text-center justify-center p-2 rounded-lg dark:border-green-400 border-green-500 font-body font-semibold text-gray-100 tracking-wide  dark:hover:bg-green-500 hover:bg-green-600 flex flex-row hover:text-gray-100 transition-all duration-300 ease-in-out"
    >
      {label}
    </button>
  );
};

export const DeleteButton = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="my-6 text-center justify-center p-2 rounded-lg border-2 border-red-600 border-opacity-25  bg-transparent text-gray-100 tracking-wide dark:hover:bg-red-500 hover:bg-red-400 flex flex-row transition-all duration-300 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-x-lg w-4 h-4"
        viewBox="0 0 16 16"
      >
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
      </svg>
    </button>
  );
};
