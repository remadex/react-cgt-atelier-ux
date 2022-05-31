const StrikeItem = ({ material, deleteMaterial }) => (
  <div className="grid grid-cols-7 items-center mb-4 gap-x-8">
    <div>
      <img
        src={material.image}
        alt={material.name}
        className="h-16 w-16 object-contain"
      />
    </div>
    <div className="font-semibold">{material.name}</div>
    <div className="col-span-3">{material.description}</div>
    <div>{material.type}</div>
    <div>
      <button type="button" onClick={() => deleteMaterial(material.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  </div>
);

export default StrikeItem;
