import React from 'react'
import Circle from './Circle'

export default function Themes(props) {

    const changeThemeBlack = () => {
        props.setTheme({
            textColor: "white",
            buttonColor: "blue",
            buttonTextColor:"white",
            navBarColor: "#2d3236",
            bgColor: "#495057",
            id: 1
        })
        

    }
    const changeThemeWhite = () => {
        props.setTheme({
            textColor: "black",
            buttonColor: "blue",
            buttonTextColor:"white",
            navBarColor: "#ced4da",
            bgColor: "white",
            id: 2
        })
    }
    const changeThemeOrange = () => {
        props.setTheme({
            textColor: "black",
            buttonColor: "blue",
            buttonTextColor:"white",
            navBarColor: "#ed3e1c",
            bgColor: "#e96146",
            id: 3
        })
    }
    const changeThemeBlue = () => {
        props.setTheme({
            textColor: "white",
            buttonColor: "black",
            buttonTextColor:"white",
            navBarColor: "#0535a3",
            bgColor: "#0f51e7",
            id: 4
        })
    }
    const changeThemeViolet = () => {
        props.setTheme({
            textColor: "white",
            buttonColor: "blue",
            buttonTextColor:"white",
            navBarColor: "#760333",
            bgColor: "#e51069",
            id: 5
        })
    }
    const changeThemeGreen = () => {
        props.setTheme({
            textColor: "black",
            buttonColor: "blue",
            buttonTextColor:"white",
            navBarColor: "#33a16e",
            bgColor: "#56f9ad",
            id: 6
        })

    }



    return (
        <div>
            <Circle color="#393E41" onPress={changeThemeBlack} />
            <Circle color="#ffffff" onPress={changeThemeWhite} />
            <Circle color="#E94F37" onPress={changeThemeOrange} />
            <Circle color="#1C89BF" onPress={changeThemeBlue} />
            <Circle color="#85FFC7" onPress={changeThemeGreen} />
            <Circle color="#A40E4C" onPress={changeThemeViolet} />
        </div>
    )
}
