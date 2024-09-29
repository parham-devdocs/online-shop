export default function Checkbox({label}:{label:string}) {
    return (
      <>
            <label htmlFor="adidas">{label}</label>
        <input
          type="checkbox"
          id={label}
          className="checkbox checkbox-primary"
        
        />
      </>
    );
}