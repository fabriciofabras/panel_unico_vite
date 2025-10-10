import { URL_SERVER } from "../../properties";

export const altaProducto = (formData) => {

    const altaProducto = async() => {

      console.log("formData",formData)

        fetch(`https:${URL_SERVER}/altaProducto`, {
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

   return altaProducto();
}


