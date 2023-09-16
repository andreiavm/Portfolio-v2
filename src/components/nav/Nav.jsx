import './nav.css';
import { data } from '../../data/data.js';

const Nav = () => {

    const scrollToComponent = (id) => {
        // console.log(id)
        const element = document.getElementById(id);
        // console.log(element);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <nav className="navigation">
            {data.navigation.map((item, index) => (
                <button className="nav-item"
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
                    <p className="nav-text text-header-small">{item.title}</p>
                    <span className="nav-span text-body">
                        {item.number}
                    </span>
                </button>
            ))
            }
        </nav >
    );
}


export default Nav;