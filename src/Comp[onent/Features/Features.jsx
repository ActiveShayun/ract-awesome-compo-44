import { AiOutlineCheck } from "react-icons/ai";
const Features = ({feature}) => {
    return (
        <div>
            <p className="flex items-center gap-4">
                <span className="text-green-500">
                    <AiOutlineCheck></AiOutlineCheck>
                </span>{feature}</p>
        </div>
    );
};

export default Features;