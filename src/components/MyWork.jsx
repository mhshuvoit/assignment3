import React from 'react'
import Portfolio1 from '../assets/images/portfolio-01.jpg'
import Portfolio2 from '../assets/images/portfolio-02.jpg'
import Portfolio3 from '../assets/images/portfolio-03.jpg'
import Portfolio4 from '../assets/images/portfolio-04.jpg'
import Portfolio5 from '../assets/images/portfolio-05.jpg'
import Portfolio6 from '../assets/images/portfolio-06.jpg'

function MyWork() {
    return (
        <section class="section my-work" id="section3">
            <div class="container">
                <div class="section-heading">
                    <h2>My Work</h2>
                    <div class="line-dec"></div>
                    <span
                    >Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit
                        amet. Duis ac elit vulputate, lobortis arcu quis, vehicula
              mauris.</span
                    >
                </div>
                <div class="row">
                    <div class="isotope-wrapper">
                        <form class="isotope-toolbar">
                            <label
                            ><input
                                    type="radio"
                                    data-type="*"
                                    checked=""
                                    name="isotope-filter"
                                />
                                <span>all</span></label
                            >
                            <label
                            ><input
                                    type="radio"
                                    data-type="people"
                                    name="isotope-filter"
                                />
                                <span>people</span></label
                            >
                            <label
                            ><input
                                    type="radio"
                                    data-type="nature"
                                    name="isotope-filter"
                                />
                                <span>nature</span></label
                            >
                            <label
                            ><input
                                    type="radio"
                                    data-type="animals"
                                    name="isotope-filter"
                                />
                                <span>animals</span></label
                            >
                        </form>
                        <div class="isotope-box">
                            <div class="isotope-item" data-type="nature">
                                <figure class="snip1321">
                                    <img
                                        src={Portfolio1}
                                        alt="sq-sample26"
                                    />
                                    <figcaption>
                                        <a
                                            href={Portfolio1}
                                            data-lightbox="image-1"
                                            data-title="Caption"
                                        ><i class="fa fa-search"></i
                                        ></a>
                                        <h4>First Title</h4>
                                        <span>free to use our template</span>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="isotope-item" data-type="people">
                                <figure class="snip1321">
                                    <img
                                        src={Portfolio2}
                                        alt="sq-sample26"
                                    />
                                    <figcaption>
                                        <a
                                            href={Portfolio2}
                                            data-lightbox="image-1"
                                            data-title="Caption"
                                        ><i class="fa fa-search"></i
                                        ></a>
                                        <h4>Second Title</h4>
                                        <span>please tell your friends</span>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="isotope-item" data-type="animals">
                                <figure class="snip1321">
                                    <img
                                       src={Portfolio3}
                                        alt="sq-sample26"
                                    />
                                    <figcaption>
                                        <a
                                            href={Portfolio3}
                                            data-lightbox="image-1"
                                            data-title="Caption"
                                        ><i class="fa fa-search"></i
                                        ></a>
                                        <h4>Item Third</h4>
                                        <span>customize anything</span>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="isotope-item" data-type="people">
                                <figure class="snip1321">
                                    <img
                                        src={Portfolio4}
                                        alt="sq-sample26"
                                    />
                                    <figcaption>
                                        <a
                                            href="assets/images/portfolio-04.jpg"
                                            data-lightbox="image-1"
                                            data-title="Caption"
                                        ><i class="fa fa-search"></i
                                        ></a>
                                        <h4>Item Fourth</h4>
                                        <span>Re-distribution not allowed</span>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="isotope-item" data-type="nature">
                                <figure class="snip1321">
                                    <img
                                        src={Portfolio4}
                                        alt="sq-sample26"
                                    />
                                    <figcaption>
                                        <a
                                            href="assets/images/portfolio-05.jpg"
                                            data-lightbox="image-1"
                                            data-title="Caption"
                                        ><i class="fa fa-search"></i
                                        ></a>
                                        <h4>Fifth Awesome</h4>
                                        <span>Ut sollicitudin risus</span>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="isotope-item" data-type="animals">
                                <figure class="snip1321">
                                    <img
                                       src={Portfolio6}
                                        alt="sq-sample26"
                                    />
                                    <figcaption>
                                        <a
                                            href="assets/images/portfolio-06.jpg"
                                            data-lightbox="image-1"
                                            data-title="Caption"
                                        ><i class="fa fa-search"></i
                                        ></a>
                                        <h4>Awesome Sixth</h4>
                                        <span>Donec eget massa ante</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyWork
