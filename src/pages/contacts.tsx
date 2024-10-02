import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className="flex justify-center items-center h-[88vh]">
      <div className="space-y-5 text-center border-primary border-4 px-40 py-16 rounded-xl">
        <h2 className="text-3xl">Contact Us</h2>
        <h2 className="text-2xl">We'd love to hear from you!</h2>
        <p>If you have any questions, feel free to reach out.</p>
        <p className="text-lg">
          Contact us at:{" "}
          <a href="mailto:support@example.com" className="text-primary">
          pazargadiparham@gmail.com
          </a>
        </p>
        <p className="text-lg">or</p>
        <p className="text-lg">
          Call us at:{" "}
          <a href="tel:+989124687022" className="text-primary">
            +98 912 468 7022
          </a>
        </p>
        <button className="btn btn-primary btn-outline">
          <Link to={"/"}>Back to Home</Link>
        </button>
      </div>
    </div>
  );
}

export default Contacts;
