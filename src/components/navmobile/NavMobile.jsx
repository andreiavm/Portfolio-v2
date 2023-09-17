import './navmobile.css';
import { data } from '../../data/data.js';

const NavMobile = () => {

    const scrollToComponent = (id) => {
        // console.log(id)
        const element = document.getElementById(id);
        // console.log(element);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <nav className="navigation-mobile">
            {data.navigation.map((item, index) => (
                <button className="nav-item-mobile"
                    key={index}
                    style={{
                        color: item.color,
                        background: item.background,
                    }}
                    data-slug={item.slug}
                    onClick={() => {
                        scrollToComponent(item.slug);
                    }}
                >
                    <p className="nav-text-mobile text-body-bold">{item.title}</p>
                    <span className="nav-span-mobile text-note">
                        {item.number}
                    </span>
                </button>
            ))
            }
        </nav >
    );
}


export default NavMobile;