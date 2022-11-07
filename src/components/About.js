import React from 'react'

export default function About(props) {

    const myStyle={
        color:props.theme.textColor,
        backgroundColor : props.theme.bgColor,
    }

    return (
        <div className='container' style={myStyle}>
            <h1 className='container my-3'>{`About ${props.title}`}</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                        <strong>Analyze and change your text form.</strong> 
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body" style={myStyle}>
                            {/* Item 1 desc*/}
                            <p> The TextUtils helps in changing the text in any form </p>
                            <p>Different forms to choose from</p>
                            <ul>
                                <li>Change to Upper Case</li>
                                <li>Change to Upper Case</li>
                                <li>Remove extra spaces</li>
                            </ul>
                            <p> You also can copy the text with just one click</p>
                            <p> You can clear the typing window with just one click</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body" style={myStyle}>
                            This site is fully free to use for anyone who want to change the text forms.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body" style={myStyle}>
                            {/* Item 3 desc*/}
                            <p>Compatible in all browser and any device(windows, android , iOS) you are viewing in.</p>
                            <p>Fully responsive for all screen sizes and all types of screen.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
