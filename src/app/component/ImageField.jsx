export const ImageField = (props) => {
  const { label, value, onChange, error, required = false, onCancel } = props;
  return (
    <div className="space-y-2">
      <label className="font-semibold text-sm">
        {label} {required && <span className="text-[#E14942]">*</span>}
      </label>
      <div className="h-45 bg-[#ccc] rounded-sm flex justify-center items-center flex-col gap-2 relative overflow-hidden">
        <input
          onChange={onChange}
          type="file"
          className="absolute w-full h-full opacity-0 cursor-pointer"
          accept="image/*"
        />
        {!value ? (
          <>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
                fill="white"
              />
              <path
                d="M17.5 10.5V17.5H10.5V10.5H17.5ZM17.5 9.5H10.5C9.95 9.5 9.5 9.95 9.5 10.5V17.5C9.5 18.05 9.95 18.5 10.5 18.5H17.5C18.05 18.5 18.5 18.05 18.5 17.5V10.5C18.5 9.95 18.05 9.5 17.5 9.5ZM15.07 13.93L13.57 15.865L12.5 14.57L11 16.5H17L15.07 13.93Z"
                fill="#202124"
              />
            </svg>
            <span className="text-sm text-[#09090B] font-medium">
              Add image
            </span>
          </>
        ) : (
          <>
            <img
              src={value}
              className="absolute w-full h-full object-cover"
              alt=""
            />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={onCancel}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#202124" />
                <path
                  d="M15.5 9.205L14.795 8.5L12 11.295L9.205 8.5L8.5 9.205L11.295 12L8.5 14.795L9.205 15.5L12 12.705L14.795 15.5L15.5 14.795L12.705 12L15.5 9.205Z"
                  fill="white"
                />
              </svg>
            </div>
          </>
        )}
      </div>
      {error && <p className="text-sm text-[#E14942]">{error}</p>}
    </div>
  );
};
export default ImageField;
