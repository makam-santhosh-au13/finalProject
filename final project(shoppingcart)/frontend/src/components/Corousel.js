import React from "react";
import { Carousel } from "react-bootstrap";

function Coursel() {
    return (
        <Carousel className="corousel">
            
            <Carousel.Item className="item">
                <img
                    className="d-block w-100 corousel-img"
                    src="https://th.bing.com/th/id/R261746e114a8d847f777e4d96b4fab09?rik=uspJE%2fb15xFW9Q&riu=http%3a%2f%2fimages.esellerpro.com%2f2604%2fI%2f770%2f271%2fmzz96348_navy_xl.jpg&ehk=7zjRybTtdNykhO4gmKhc%2fL3dNRItGWdbyY3Etf3F6Hc%3d&risl=&pid=ImgRaw"
                    alt="Third slide"
                />

                <Carousel.Caption className="caption">
                    <h1>
                        Discover your <span>Passion</span>
                    </h1>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="d-block w-100 corousel-img"
                    src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9694181/2019/7/22/0e3b4cb8-6812-43c0-b1c8-a14aac1522cb1563794971193-MANGO-Women-Dresses-6031563794969613-3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className="caption">
                    <h1>
                        Show your <span>Style</span>
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="d-block w-100 corousel-img"
                    src="https://th.bing.com/th/id/OIP.6JDS32GZW8IJnJaboojglwHaHa?pid=ImgDet&rs=1"
                    alt="Third slide"
                />

                <Carousel.Caption className="caption">
                    <h1>
                        Live your <span>Dream</span>
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="d-block w-100 corousel-img"
                    src="https://th.bing.com/th/id/OIP.9RFFRaTczHpd-vBfGEX5zwHaDt?pid=ImgDet&rs=1"
                    alt="First slide"
                />
                <Carousel.Caption className="caption">
                    <p><span>Memories</span> last forever.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Coursel;
