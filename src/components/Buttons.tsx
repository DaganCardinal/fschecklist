interface ButtonProps {
  label: string;
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
      className="my-6 border-2 text-center justify-center p-2 rounded-lg dark:border-green-400 border-green-500 bg-green-500 font-body font-semibold text-gray-100 tracking-wide  dark:hover:bg-green-400 hover:bg-green-600 flex flex-row hover:text-gray-100 transition-all duration-300 ease-in-out"
    >
      {label}
    </button>
  );
};
