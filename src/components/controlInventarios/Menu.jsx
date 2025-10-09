import { OverlayTrigger, Stack, Tooltip } from "react-bootstrap"
import { Basket2, PeopleFill } from "react-bootstrap-icons"
import { useContext } from "react"
import { UserProfileContext } from "../../UserProfileContext"
import PropTypes from "prop-types";

export const Menu = ({ onOpcionSeleccionada }) => {

    const { profile } = useContext(UserProfileContext);


    console.log('user', profile)

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {props}
        </Tooltip>
    );

    const handleClick = (opcion) => {
        console.log("handleclick", opcion)
        onOpcionSeleccionada(opcion);
    };

    return (
        <Stack>
            <div>
            </div>
            {profile.perfil === "sat" ? (<div></div>) : (<div className="p-2">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 0, hide: 400 }}
                    overlay={renderTooltip("Usuarios")}
                >
                    <PeopleFill onClick={() => handleClick(2)} className="icon-link icon-link-hover" href="#" size={50} />
                </OverlayTrigger>
            </div>)}

            <div className="p-2">
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 0, hide: 400 }}
                    overlay={renderTooltip("Productos")}
                >
                    <Basket2 onClick={() => handleClick(1)} className="icon-link icon-link-hover" size={50} />

                </OverlayTrigger>
            </div>
        </Stack>
    )
}

// Validación de props
Menu.propTypes = {
    onOpcionSeleccionada: PropTypes.func.isRequired, // o sin .isRequired si es opcional
};