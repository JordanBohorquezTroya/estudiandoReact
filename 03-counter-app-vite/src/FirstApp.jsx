import PropTypes from 'prop-types'

/*function saludar(){
    return "Hello World????"
}
const mensaje = {
    hello: "Hello World",
    numero : 1
}*/


export const FirstApp = ({title, subtitle, name}) => {
   
    return (
        <>
            <h1> {title}</h1>
            <p> {subtitle} </p>
            <p> {name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title : "No hay titulo",
    subtitle : "No hay subtitulo",
    name : "No hay nombre"
    
}