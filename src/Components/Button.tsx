interface val {
  value: number;
}
const Button: React.FC<val> = ({ value }) => {
  return (
    <div className="bg-[#292929] text-white h-[3rem] w-[3rem] rounded-full flex justify-center items-center">
      <h6 className="font-semibold text-2xl">{value}</h6>
    </div>
  );
};

export default Button;
