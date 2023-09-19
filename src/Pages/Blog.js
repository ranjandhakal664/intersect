import React from 'react';
import './pagescss/blog.css'
import Navbar from '../Components/navbar/NavBar';
import Footer from '../Components/footer/Footer';


const blogData = [
    {
        imgSrc: 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        title: 'Artificial Intelligence',
        description: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human cognition. Through techniques like machine learning and neural networks, AI systems can analyze data, solve complex problems, and even mimic human decision-making. It has diverse applications across industries, from self-driving cars to healthcare diagnostics.',
        websiteLink: '/'
    },
    {
        imgSrc: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
        title: 'Machine Learning',
        description: 'Machine learning is a branch of artificial intelligence that empowers computers to learn and make predictions from data. By using algorithms and statistical models, machines can recognize patterns, improve performance, and enhance decision-making without being explicitly programmed.',
        websiteLink: '/'
    },
    {
        imgSrc: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',
        title: 'Evolution In Technology',
        description: 'Evolution in technology has been a continuous process marked by transformative advancements. From the invention of the wheel to the rise of the internet and artificial intelligence, technology has revolutionized how we live, work, and communicate. It has accelerated globalization, improved efficiency, and unlocked new possibilities, shaping every aspect of modern society.',
        websiteLink: '/'
    },
    {
        imgSrc: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
        title: 'Use of AI in Cars',
        description: 'Artificial Intelligence (AI) is revolutionizing the automotive industry by enabling advanced features and capabilities in cars. AI-driven technologies like autonomous driving, adaptive cruise control, and predictive maintenance enhance safety, convenience, and efficiency. Machine learning algorithms analyze data from sensors and cameras to make real-time decisions, navigate traffic, detect objects, and even learn driver preferences, leading to safer and more intelligent driving experiences.',
        websiteLink: '/'
    },
    {
        imgSrc: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        title: 'Digital Marketing',
        description: 'Digital marketing encompasses the use of various online channels and strategies to promote products, services, or brands to a targeted audience. It includes activities such as social media marketing, search engine optimization (SEO), content creation, email marketing, and pay-per-click advertising. Digital marketing allows businesses to reach a wide audience, track campaign performance, optimize strategies, and engage with customers in a more personalized and interactive manner, ultimately driving brand awareness, customer engagement, and sales growth.',
        websiteLink: '/'
    },
    {
        imgSrc: 'https://images.unsplash.com/photo-1534162967756-a412cc66c624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=335&q=80',
        title: 'Use of Computer in Rocket',
        description: "Computers power every aspect of modern rocketry, from navigation and control to communication and safety. They enable precise trajectory, manage propulsion, analyze data, and ensure astronauts' well-being. Advanced AI enhances autonomous operations, optimizing efficiency and reliability for successful space missions.",
        websiteLink: '/'
    },
    // Add more blog data objects here...
];

const Blog = () => {
    return (
        <main className="wrapper">
             <div><Navbar/></div>
            <section className="hero">
                <h1>Are you Ready?</h1>
                <article>
                    <p>Explore much more with Intersect Info developers lets get connected </p>
                    <a href="#content">Browse Blogs</a>
                </article>
            </section>
            <section className="content" id="content">
                <ul>
                    {blogData.map((blog, index) => (
                        <li key={index}>
                            <figure>
                                <img src={blog.imgSrc} alt={`Blog Post ${index}`} />
                                <figcaption><h3>{blog.title}</h3></figcaption>
                            </figure>
                            <p>{blog.description}</p>
                            <a href={blog.websiteLink}>Visit Website</a>
                        </li>
                    ))}
                </ul>
            </section>
            <div><Footer/></div>
        </main>
    );
};

export default Blog;
