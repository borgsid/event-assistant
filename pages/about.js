import React from "react";
import lionPicture from '../assets/img.jpg';
import Image from 'next/image';

const About = () => {
    return (
        <div class="container">
            <div className="from-grid">
                <div style={{ backgroundColor: "#f1f1f1", padding: "20px" }}>
                    <h2 style={{ color: "#333", fontSize: "24px", marginBottom: "20px" }}>
                        About Our Website
                    </h2>
                    <p style={{ lineHeight: "1.5", fontSize: "16px", marginBottom: "10px" }}>
                        AI generated: <br/>
                        Welcome to our website! We're passionate about creating a great user
                        experience and providing valuable information for our visitors. Our
                        site is designed to be easy to use and navigate, with a focus on
                        providing clear and concise information.
                    </p>
                    <p style={{ lineHeight: "1.5", fontSize: "16px", marginBottom: "10px" }}>
                        Our goal is to be a trusted resource for our visitors. We strive to
                        provide accurate and up-to-date information, and we're constantly
                        improving our site to make it even better.
                    </p>
                    <p style={{ lineHeight: "1.5", fontSize: "16px", marginBottom: "10px" }}>
                        Whether you're looking for information on a specific topic, or just
                        browsing our site for fun, we hope you find what you're looking for. If
                        you have any questions or feedback, please don't hesitate to get in
                        touch with us.
                    </p>
                </div>
            </div>
                <div class="image">
                    <Image src={lionPicture} alt="Image" />
                </div>
        </div>
    );
}

export default About;