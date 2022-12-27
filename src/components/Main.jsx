import "../Styles/main.css";
import logo from '../images/logo.png';

function Main() {
    return (
        <body>
            <div class="header-container">
                <div class="navbar">
                    <a href="/" class="nav-logo">
                        <img class="logo" src={logo} alt="" width="190" height="55" />
                    </a>
                    <ul class="nav col-12 col-md-auto mb-2 justify-content-left mb-md-0">
                        <li><a href="#home" class="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="#quiz" class="nav-link px-2 link-dark">Quiz</a></li>
                        <li><a href="#about" class="nav-link px-2 link-dark">About</a></li>
                        <li><a href="#contact" class="nav-link px-2 link-dark">Contact</a></li>
                    </ul>

                    <div class="button-cont">
                        <button type="button" class="btn btn-outline-primary me-2">Login</button>
                        <button type="button" class="btn btn-primary">Sign-up</button>
                    </div>
                </div>
            </div>
            <div className="sections">
                <hr className="line"  id="home"></hr>
                <div className="section home" id="home">

                </div>
                <hr className="line"  id="quiz"></hr>
                <div className="section quiz">

                </div>
                <hr className="line"  id="about"></hr>
                <div className="section about">

                </div>
                <hr className="line"  id="contact"></hr>
                <div className="section contact">

                </div>
            </div>
        </body>
    )
};

export default Main;