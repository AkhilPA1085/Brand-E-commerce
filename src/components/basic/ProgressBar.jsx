const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="md:mx-28">

    
    <div className="flex">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`relative h-2 w-1/2 text-center ${
            index < currentStep
              ? "bg-gray-400"
              : index === currentStep
              ? "bg-gray-200"
              : "bg-gray-200"
          }`}
        >
          <div className="relative text-end">
            <p 
            className={`text-sm font-medium absolute right-0 -top-3 ${
              index < currentStep
                ? "bg-black"
                : index === currentStep
                ? "bg-gray-200"
                : "bg-gray-200"
            } text-white h-8 w-8 rounded-full flex justify-center items-center`}>
              {index+1}
            </p>
            <br />
            <p className="text-sm font-semibold capitalize">{step}</p>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-2 rounded-full"
            style={{ width: `${(index + 1) * (100 / steps.length)}%` }}
          ></div>
        </div>
      ))}
    </div>

    </div>
  );
};

export default ProgressBar;
