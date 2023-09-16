import './navmobile.css';
import { data } from '../../data/data.js';

const NavMobile = ({ onClick, }) => {

    return (
        <div
            className="navigation-mobile-wrapper">
            <nav className="navigation-mobile">
                {data.navigation.map((item, index) => (
                    <button className="nav-item-mobile"
                        key={index}
                        style={{
                            color: item.color,
                            background: item.background,
                        }}
                        data-slug={item.slug}
                        onClick={onClick}
                    >
                        <p className="nav-text text-header-small">{item.title}</p>
                        <span className="nav-mobile-span text-body">
                            {item.number}
                        </span>
                    </button>
                ))}
            </nav>
        </div>
    );
}


export default NavMobile;