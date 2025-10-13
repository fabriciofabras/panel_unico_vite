import { Route, Routes } from "react-router-dom"
import { NavBar } from "../components/panelUnico/NavBar";
import { About } from "../components/panelUnico/About";
import { Repositorio } from "../components/panelUnico/Repositorio";
import { HeatMap } from "../components/panelUnico/HeatMap";
import { Monitoreo } from "../components/panelUnico/Monitoreo";
import { Inventarios } from "../components/panelUnico/Inventarios";
import { Cmdb } from "../components/panelUnico/Cmdb";
import { Mesa } from "../components/panelUnico/Mesa";
import { useEffect, useState } from "react";

export const PanelUnicoRoutes = () => {

    const [userInfo, setUserInfo] = useState(null);

    // Función para extraer el access_token de la URL
    const getAccessTokenFromUrl = () => {
        const params = new URLSearchParams(globalThis.location.hash.substring(1));
        return params.get('access_token');
    };

    // Función para obtener la información del usuario con el access_token
    const getUserInfo = async (accessToken) => {
        try {
            const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`);
            const data = await response.json();
            setUserInfo(data); // Guardar la info del usuario en el estado
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    // useEffect se ejecuta cuando el componente se monta (equivalente a window.onload)
    useEffect(() => {
        const accessToken = getAccessTokenFromUrl();
        if (accessToken) {
            console.log('Access Token:', accessToken);
            getUserInfo(accessToken); // Obtener la información del usuario
        }
    }, []); // El array vacío significa que se ejecuta una vez cuando el componente se monta

    return (
        <>
            <NavBar userInfo={userInfo} />

            {userInfo === null ? (
                <div className="container">
                    <Routes>
                        <Route path="/inicio" element={<About />} />
                        <Route path="/repositorio" element={<Repositorio />} />
                        <Route path="/heatmap" element={<HeatMap />} />
                        <Route path="/monitoreo" element={<Monitoreo />} />
                        <Route path="/stockdepartes" element={<Inventarios />} />
                        <Route path="/cmdb" element={<Cmdb />} />
                        <Route path="/mesa" element={<Mesa />} />
                    </Routes>
                </div>
            ) : (
                <div></div>
            )}


        </>
    )
}