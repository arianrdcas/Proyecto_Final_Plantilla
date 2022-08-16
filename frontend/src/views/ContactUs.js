import React from "react";
import { Link } from "react-router-dom";


const ContacUs = () =>{
    return (
        <>
            {/*contact start*/}
            <section className="contact">
                <div className="container">
                <div className="contact-details">
                    <div className="section-header contact-head  text-center">
                    <h2>contact us</h2>
                    <p>
                        Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                    </p>
                    </div>
                    {/*/.section-header*/}
                    <div className="contact-content">
                    <div className="row">
                        <div className="col-sm-offset-1 col-sm-5">
                        <div className="single-contact-box">
                            <div className="contact-right">
                            <div className="contact-adress">
                                <div className="contact-office-address">
                                <h3>contact info</h3>
                                <p>125, Park street avenue, Brocklyn, Newyork.</p>
                                <div className="contact-online-address">
                                    <div className="single-online-address">
                                    <i className="fa fa-phone" />
                                    +11253678958
                                    </div>
                                    {/*/.single-online-address*/}
                                    <div className="single-online-address">
                                    <i className="fa fa-envelope-o" />
                                    <span>info@mail.com</span>
                                    </div>
                                    {/*/.single-online-address*/}
                                </div>
                                {/*/.contact-online-address*/}
                                </div>
                                {/*/.contact-office-address*/}
                                <div className="contact-office-address">
                                <h3>social partner</h3>
                                <div className="contact-icon">
                                    <ul>
                                    <li>
                                        <Link to="#">
                                        <i
                                            className="fa fa-facebook"
                                            aria-hidden="true"
                                        />
                                        </Link>
                                    </li>
                                    {/*/li*/}
                                    <li>
                                        <Link to="#">
                                        <i
                                            className="fa fa-google-plus"
                                            aria-hidden="true"
                                        />
                                        </Link>
                                    </li>
                                    {/*/li*/}
                                    <li>
                                        <Link to="#">
                                        <i
                                            className="fa fa-linkedin"
                                            aria-hidden="true"
                                        />
                                        </Link>
                                    </li>
                                    {/*/li*/}
                                    <li>
                                        <Link to="#">
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                        </Link>
                                    </li>
                                    {/*/li*/}
                                    </ul>
                                    {/*/ul*/}
                                </div>
                                {/*/.contact-icon*/}
                                </div>
                                {/*/.contact-office-address*/}
                            </div>
                            {/*/.contact-address*/}
                            </div>
                            {/*/.contact-right*/}
                        </div>
                        {/*/.single-contact-box*/}
                        </div>
                        {/*/.col*/}
                        <div className="col-sm-5">
                        <div className="single-contact-box">
                            <div className="contact-form">
                            <h3>Leave us a Massage Here</h3>
                            <form>
                                <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstname"
                                        placeholder="First Name"
                                        name="firstname"
                                    />
                                    </div>
                                    {/*/.form-group*/}
                                </div>
                                {/*/.col*/}
                                <div className="col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        placeholder="Last Name"
                                        name="laststname"
                                    />
                                    </div>
                                    {/*/.form-group*/}
                                </div>
                                {/*/.col*/}
                                </div>
                                {/*/.row*/}
                                <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        name="email"
                                    />
                                    </div>
                                    {/*/.form-group*/}
                                </div>
                                {/*/.col*/}
                                <div className="col-sm-6 col-xs-12">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Phone"
                                        name="phone"
                                    />
                                    </div>
                                    {/*/.form-group*/}
                                </div>
                                {/*/.col*/}
                                </div>
                                {/*/.row*/}
                                <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        rows={7}
                                        id="comment"
                                        placeholder="Message"
                                        defaultValue={""}
                                    />
                                    </div>
                                    {/*/.form-group*/}
                                </div>
                                {/*/.col*/}
                                </div>
                                {/*/.row*/}
                                <div className="row">
                                <div className="col-sm-12">
                                    <div className="single-contact-btn pull-right">
                                    <button className="contact-btn" type="button">
                                        send message
                                    </button>
                                    </div>
                                    {/*/.single-single-contact-btn*/}
                                </div>
                                {/*/.col*/}
                                </div>
                                {/*/.row*/}
                            </form>
                            {/*/form*/}
                            </div>
                            {/*/.contact-form*/}
                        </div>
                        {/*/.single-contact-box*/}
                        </div>
                        {/*/.col*/}
                    </div>
                    {/*/.row*/}
                    </div>
                    {/*/.contact-content*/}
                </div>
                {/*/.contact-details*/}
                </div>
                {/*/.container*/}
            </section>
            {/*/.contact*/}
            </>
    )
}
export default ContacUs; 