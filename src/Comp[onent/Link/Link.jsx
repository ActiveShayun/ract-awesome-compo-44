
const Link = ({route}) => {
    return (
        <div>
            <li className="m-4"><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;