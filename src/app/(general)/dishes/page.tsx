import { Dish } from "@/app/components/Dish";
import { apiURL } from "@/app/global/url";
import axios from "axios";

const getDishes = async () => {
    const response = await axios.get(`${apiURL}dishes`);
    if (!response.data) {
        throw new Error('Failed to fetch dishes');
    }
    return response.data;
};

const Dishespage = async () => {
    const dishes = await getDishes();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {dishes.map((dish: { id: string; name: string }) => (
                <Dish key={dish.id} id={dish.id} name={dish.name} />
            ))}
        </div>
    );
};

export default Dishespage;
