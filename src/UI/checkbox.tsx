export default function Checkbox({ label }: { label: string }) {
  return (
    <div className=" flex items-center w-fit gap-1">
      <label htmlFor="adidas">{label}</label>
      <input type="checkbox" id={label} className="checkbox " />
    </div>
  );
}
