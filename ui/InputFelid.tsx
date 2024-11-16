const InputFelid = ({
  label,
  name,
  type,
  placeholder,
  required,
  max
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  max? : string 
}) => {
  return (
    <div>
      <label htmlFor={name} className=" mb-2 text-sm font-bold text-primary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50  w-full p-2.5 focus:outline-none focus:ring-1"
        placeholder={placeholder}
        required={required}
        max={max}
      />
    </div>
  );
};

export default InputFelid;
