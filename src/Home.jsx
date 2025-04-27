import download from './assets/download.jpg';
const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className='text'>
                    <h1>Discover<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" fill="currentColor" className="search">
                        <path d="M 21 4 C 11.082241 4 3 12.082241 3 22 C 3 31.917759 11.082241 40 21 40 C 24.62177 40 27.99231 38.91393 30.820312 37.0625 L 43.378906 49.621094 L 47.621094 45.378906 L 35.224609 32.982422 C 37.581469 29.938384 39 26.13473 39 22 C 39 12.082241 30.917759 4 21 4 z M 21 8 C 28.756241 8 35 14.243759 35 22 C 35 29.756241 28.756241 36 21 36 C 13.243759 36 7 29.756241 7 22 C 7 14.243759 13.243759 8 21 8 z"></path>
                    </svg><span>Most Suitable</span></h1>

                    <h1>Property</h1>
                    <p>Find a variety of properties that suit you very easily <span>Forget all difficulties in finding  residence for you</span></p>
                    <div className="main">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="loc"><path d="M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 12c0 2.209-3.581 4-8 4s-8-1.791-8-4c0-1.602 1.888-2.98 4.608-3.619l1.154 1.824c-.401.068-.806.135-1.178.242-3.312.949-3.453 2.109-.021 3.102 2.088.603 4.777.605 6.874-.001 3.619-1.047 3.164-2.275-.268-3.167-.296-.077-.621-.118-.936-.171l1.156-1.828c2.723.638 4.611 2.016 4.611 3.618z" /></svg>
                        </div>
                        <input type="text" placeholder="Search for Location" />
                        <button>Search</button>
                    </div>
                    <div className="last1">
                        <div className="last11">
                            <h5>8997<span>+</span></h5><span><p>Premium Product</p></span>

                        </div>
                        <div className="last11">
                            <h5>1999<span>+</span></h5><span>  <p>Happy Customer</p></span>
                        </div>
                        <div className="last11">
                            <h5>32<span>+</span></h5><span> <p>Awards Winning</p></span>

                        </div>

                    </div>

                </div>
                <div className='imge'>
                    <img src={download} />
                </div>
            </div>

        </div>
    )
}

export default Home
