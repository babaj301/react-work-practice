const RememberSection = () => {
  return (
    <div className="flex justify-between mt-6 mb-8">
      <div className="gap-2 h-5 flex">
        <input
          type="checkbox"
          name="remember"
          id="remember"
          className="appearance-none h-5 w-5 rounded-md checked:bg-[#CC400C] border border-[#D0D5DD]"
        />

        <p className="font-medium text-sm text-[#101928]">
          Remember me for 30 days
        </p>
      </div>

      <a className="text-sm flex items-center justify-center font-semibold text-[#CC400C]">
        Forgot Password?
      </a>
    </div>
  );
};

export default RememberSection;
