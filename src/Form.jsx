const Form = () => {
    return (
        <div className="fommain">
            <div className="fom">
                <input type="input" placeholder='Enter your Name' />
                <input type="email" placeholder='Enter your Email' />
                <textarea placeholder="write a message"></textarea>
                <div className="butmain">
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Form