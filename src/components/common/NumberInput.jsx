const NumberInput = ({ placeholder, min, className }) => {
  return (
    <input
      type="number"
      className={`
        text-center
        form-control
        block
        w-10
        py-1.5
        text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        m-0
        bg-gray-200
        focus:text-gray-700 focus:border-blue-600 focus:outline-none ${className}`}
      placeholder={placeholder}
      min={min}
    />
  );
};

export default NumberInput;
