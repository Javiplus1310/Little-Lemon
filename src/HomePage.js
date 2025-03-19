import Header from './Header';
import {Link} from 'react-router-dom';

function Homepage() {
    return(
        <>
            <Header />
            <main>
                <section>
                    <article>
                        <h1>This week specials!</h1>
                        <a className="action-button" href="#" target="_blank" rel="noreferrer">Online Menu</a>
                    </article>

                    <section>
                        <article>
                            {/* <img></img> */}
                            <section>
                                <h1>Greek Salad</h1>
                                <h3>$12.99</h3>
                                <p>Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.</p>
                                <Link className="special-button"to="/order">Order for Delivery</Link>
                            </section>
                        </article>

                        <article>
                            {/* <img></img> */}
                            <section>
                                <h1>Bruschetta</h1>
                                <h3>$16.99</h3>
                                <p>Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.</p>
                                <Link className="special-button"to="/order">Order for Delivery</Link>
                            </section>
                        </article>

                        <article>
                            {/* <img></img> */}
                            <section>
                                <h1>Lemon Dessert</h1>
                                <h3>$8.50</h3>
                                <p>Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.</p>
                                <Link className="special-button"to="/order">Order for Delivery</Link>
                            </section>
                        </article>
                    </section>

                    {/* <section>

                    </section> */}
                </section>

                <section>
                    <article>
                        <h1>Testimonials</h1>
                    </article>

                    <section>
                        <article className="testimonial-card">
                            <h1>Rating</h1>
                            <h3>Juan Perez</h3>
                            <p>Excellent!!!</p>
                        </article>

                        <article className="testimonial-card">
                            <h1>Rating</h1>
                            <h3>Juan Perez</h3>
                            <p>Excellent!!!</p>
                        </article>

                        <article className="testimonial-card">
                            <h1>Rating</h1>
                            <h3>Juan Perez</h3>
                            <p>Excellent!!!</p>
                        </article>

                        <article className="testimonial-card">
                            <h1>Rating</h1>
                            <h3>Juan Perez</h3>
                            <p>Excellent!!!</p>
                        </article>
                    </section>
                </section>

                <article>
                    <section>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                        Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                        and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
                        continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                    </section>

                    {/* <section>
                        <img></img>
                    </section> */}
                </article>
            </main>
        </>
    );
}

export default Homepage;