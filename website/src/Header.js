import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Welcome to my website!</h1>
            <nav>
                <ul>
                    {/* chnaged all the a tags to buttons as it was throwing an error of the a tag being empty */}
                    <li><button>Home</button></li>
                    <li><button>About</button></li>
                    <li><button>Services</button></li>
                    <li><button>Contact</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
