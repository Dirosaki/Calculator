import App from "./App";

const perfectCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const AppStyle = {
    divDeDentro: {
        ...perfectCenter,
        height: 500,
        width: 500,
        border: `2px solid black`,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    divDeFora: {
        ...perfectCenter,
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
        backgroundColor: 'lightskyblue'
    },
    titulo: {
        fontSize: '30pt',
        margin: 0
    },
    timer: {
        fontSize: '50pt',
        fontWeight: 'bolder'
    },
    meio: {
        alignItems: 'center',
        justifyContent: 'center',
    
    }
    
    
}

export default AppStyle;