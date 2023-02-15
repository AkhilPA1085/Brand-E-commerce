const FormInput = ({ id, type, className, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      id={id}
      type={type}
      className={`appearance-none border rounded w-full md:w-3/4 py-2 mb-3 px-3 text-[#707070] leading-tight focus:outline-none ${className}`}
      required
    />
  );
};

export default FormInput;
