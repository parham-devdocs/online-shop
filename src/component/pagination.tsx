const Pagination = ({
  nextPage,
  prevPage,
  pageNumber,
}: {
  nextPage: () => void;
  prevPage: () => void;
  pageNumber: number;
}) => {
  return (
    <div className=" w-full flex justify-end gap-3 items-center">
      <button
        className=" btn  btn-primary btn-outline text-lg"
        onClick={prevPage}
      >
        prev
      </button>
      <button
        className=" btn btn-primary btn-outline text-lg"
        onClick={nextPage}
      >
        next
      </button>
      <div className=" badge badge-primary"> {pageNumber}</div>
    </div>
  );
};

export default Pagination;
