import { ChangeEvent } from "react";

export default function Checkbox({ label,value,checked ,onChange }: { label: string,checked:boolean,value:string,onChange:(e:ChangeEvent<HTMLInputElement>)=>void }) {
  return (
    <div className=" flex items-center w-fit gap-1">
      <label htmlFor="adidas">{label}</label>
      <input type="checkbox" id={label} className="checkbox " value={value} onChange={onChange} checked={checked} />
    </div>
  );
}
