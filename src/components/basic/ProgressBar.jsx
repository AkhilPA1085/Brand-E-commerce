
const ProgressBar = () => {
  return (
    <div className="progress-bar flex justify-center">
      <div className="w-4/5 bg-gray-200 rounded-full h-2 dark:bg-gray-700 flex items-baseline">
        <div className="bg-gray-400 h-2 rounded-full w-1/3"></div>
        <div className="flex justify-center items-center flex-col text-center">
          <span className="bg-black text-white rounded-full h-6 w-6 flex justify-center">1</span>
          <span className="text-center">lorem</span>
        </div>
        

        <div className="bg-gray-200 h-2 rounded-full w-1/3"></div>
        <div className="bg-black text-white rounded-full h-6 w-6 flex justify-center">
          2
        </div>

        <div className="bg-gray-200 h-2 rounded-full w-1/3"></div>
        <div className="bg-black text-white rounded-full h-6 w-6 flex justify-center">
          3
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
