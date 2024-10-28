import Features from "../Features/Features";
import Featurea from "../Features/Features";


const PriceOption = ({option}) => {
    const {features, name, price} = option
    return (
        <div className="bg-sky-700  rounded-lg p-3
         space-y-2 flex flex-col text-yellow-300">
            <h2>
                <span className="text-4xl">{price}</span>
                <span>/mon</span>
            </h2>
            <h3 className="text-4xl">{name}</h3>
          <div className="flex-grow">
          {
                features.map(feature => <Features feature={feature}></Features> )
            }
          </div>
            <button className="text-lg font-semibold py-1 px-3 
            bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg">Buy now</button>
        </div>
       
    );
};
export default PriceOption;