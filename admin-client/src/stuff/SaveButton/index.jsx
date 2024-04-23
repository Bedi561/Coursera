const SaveButton = ({ onClick, requestData, CopyRequestData }) => {
  return (
    <>
      <div className="relative">
        <button
          disabled={requestData !== CopyRequestData ? false : true}
          // disabled={true}
          onClick={onClick}
          className="py-4 px-10 hover:bg-green-400 text-white rounded-lg disabled:bg-gray-500  bg-green-600"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default SaveButton;
