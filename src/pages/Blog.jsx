import React from 'react';

const Blog = () => {
    return (
        <div className='flex my-24 flex-col gap-7 justify-center items-center'>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1)   What is an access token and refresh token? How do they work and where should we store them on the client-side? explain with 50 word and using simple word
                </div>
                <div className="collapse-content">
                    <p>Access token: A security key that verifies a user's identity and permissions to access a protected resource. Refresh token: A long-lasting key used to obtain a new access token without re-authenticating. Store them securely on the client-side using methods like secure cookies, local storage, or encrypted storage mechanisms.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2)   Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL databases are relational databases that use structured tables with predefined schemas to store data. They are suitable for applications with complex relationships and require strong data consistency. NoSQL databases, on the other hand, are non-relational databases that provide flexibility and scalability. They can handle unstructured, semi-structured, or structured data and are commonly used for scalability and flexibility in data models.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3)   What is express js? What is Nest JS ?
                </div>
                <div className="collapse-content">
                    <p className='mb-12'>
                        Express.js is a lightweight and popular web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a set of features and utilities. With Express.js, developers can handle HTTP requests and responses, define routes, and implement middleware functions for request processing, authentication, error handling, and mor</p>
                        <p>NestJS is a progressive Node.js framework for building efficient and scalable server-side applications. It combines the benefits of TypeScript (a statically-typed superset of JavaScript) with decorators, dependency injection, and a modular architecture. NestJS follows the MVC (Model-View-Controller) design pattern and draws inspiration from Angular, making it familiar for Angular developers transitioning to server-side development. It provides features like dependency injection, routing, middleware support, and a powerful command-line interface (CLI) to boost productivity in application development.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4) What is MongoDB aggregate and how does it work ?
                </div>
                <div className="collapse-content">
                    <p>MongoDB's aggregate is a feature for complex data analysis. It uses a pipeline of stages to process and transform data within the database. Each stage performs operations like filtering, grouping, and sorting. It enables efficient data processing and extraction of meaningful insights from MongoDB collections.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;