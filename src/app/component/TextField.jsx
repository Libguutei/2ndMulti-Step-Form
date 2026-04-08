export const TextField = (props) => {
  const {
    label,
    placeholder,
    value,
    onChange,
    error,
    type = "text",
    required = false,
    onFocus,
    onBlur,
  } = props;
  return (
    <div className="space-y-2 w-full text-left">
      <label className="font-semibold text-sm text-[#121316]">
        {label} {required && <span className="text-[#E14942]">*</span>}
      </label>
      <input
        className={`w-full h-12 rounded-lg border p-3 outline-none transition-all ${
          error ? "border-[#E14942]" : "border-[#CBD5E1] focus:border-[#121316]"
        }`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <p className="text-xs text-[#E14942]">{error}</p>}
    </div>
  );
};
export default TextField;
