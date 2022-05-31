import StrikeItem from './StrikeItem';

const ListStrikes = ({ materials, deleteMaterial }) => (
  <div className="bg-white p-8 shadow-sm">
    {console.log(materials)}
    <div className="grid grid-cols-7 gap-x-8 border-b-2 border-sky-600 mb-4 pb-2">
      <div className="font-semibold text-lg">Image</div>
      <div className="font-semibold text-lg">Nom du matériel</div>
      <div className="font-semibold text-lg col-span-3">Description</div>
      <div className="font-semibold text-lg">Type</div>
      <div className="font-semibold text-lg">Actions</div>
    </div>

    {materials &&
      materials.map((element) => (
        <StrikeItem key={element.id} material={element} deleteMaterial={deleteMaterial} />
      ))}
  </div>
);

export default ListStrikes;
