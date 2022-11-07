import React from 'react'
import Circle from './Circle'

export default function Themes(props) {

    
    const changeThemeBlack = () => {
        removeBorder();
        props.setTheme({
            textColor: "white",
            buttonColor: "blue",
            buttonTextColor:"white",
            navBarColor: "#2d3236",
            bgColor: "#495057",
            id: "1"
        })
        addBorder("1");

    }
    const changeThemeWhite = () => {
        removeBorder();
        props.setTheme({
            textColor: "black",
            buttonColor: "blue",
            buttonTextColor:"white",
            navBarColor: "#ced4da",
            bgColor: "white",
            id: "2"
        })
        addBorder("2");
        
    }
    const changeThemeOrange = () => {
        removeBorder();
        props.setTheme({
            textColor: "black",
            buttonColor: "blue",
            buttonTextColor:"white",
            navBarColor: "#ed3e1c",
            bgColor: "#e96146",
            id: "3"
        })
        addBorder("3");
        
    }
    const changeThemeBlue = () => {
        removeBorder();
        props.setTheme({
            textColor: "white",
            buttonColor: "black",
            buttonTextColor:"white",
            navBarColor: "#0535a3",
            bgColor: "#0f51e7",
            id: "4"
        })
        addBorder("4");
        
    }
    const changeThemeGreen = () => {
        removeBorder();
        props.setTheme({
            textColor: "black",
            buttonColor: "blue",
            buttonTextColor:"white",
            navBarColor: "#33a16e",
            bgColor: "#56f9ad",
            id: "5"
        })
        
        addBorder("5");
    }
    const changeThemeViolet = () => {
        removeBorder();
        props.setTheme({
            textColor: "white",
            buttonColor: "blue",
            buttonTextColor:"white",
            navBarColor: "#760333",
            bgColor: "#e51069",
            id: "6"
        })
        
        addBorder("6");
    }

    const removeBorder=()=>{
        document.getElementById(props.theme.id).style.border ="none";
    }

    const addBorder=(id)=>{
        document.getElementById(id).style.border ="solid 1.5px black";
    }


    return (
        <div>
            <Circle id="1" color="#393E41" onPress={changeThemeBlack}  />
            <Circle id="2" color="#ffffff" onPress={changeThemeWhite} />
            <Circle id="3" color="#E94F37" onPress={changeThemeOrange} />
            <Circle id="4" color="#1C89BF" onPress={changeThemeBlue} />
            <Circle id="5" color="#85FFC7" onPress={changeThemeGreen} />
            <Circle id="6" color="#A40E4C" onPress={changeThemeViolet} />
        </div>
    )
}
