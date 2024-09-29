type ProductPage = {
  img: string;
  title: string;
  description: string;
  price: string;
};

export default function ProductCard({
  img,
  title,
  description,
  price,
}: ProductPage) {
  return (
    <div className="card bg-base-100 w-80 shadow-xl h-[500px]">
      <figure>
        <img src={img} alt={`${title} image`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className=" text-blue-700">{price}$</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to card</button>
        </div>
      </div>
    </div>
  );
}