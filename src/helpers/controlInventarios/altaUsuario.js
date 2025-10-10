import { URL_SERVER } from "../../properties";

export const altaUsuario = (formData) => {

    const altaUsuario = async() => {

        fetch(`https://${URL_SERVER}/altaUsuario`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
          console.log("response",response)
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.text();
        })
        .then(data => {
          console.log('Respuesta del servidor:', data);
          alert(data);
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Hubo un error al crear el registro');
        });
      
    }

   return altaUsuario();
}


