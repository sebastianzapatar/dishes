interface DishProps {
    id:string;
    name:string;
}
export const Dish = ({id,name}:DishProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Dish: {name}</h2>
        <p className="text-gray-700">ID: {id}</p>

    </div>
  )
}
