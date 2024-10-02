type ProductPage = {
  img: string;
  title: string;
  description: string;
  price: number;
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
        <img src={img} alt={`${title} image`} width={250} height={250} className=" rounded-md" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className=" text-blue-700">{price}$</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to card</button>
        </div>
      </div>
    </div>
  );
}
