import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import { altaProducto } from '../../helpers/controlInventarios/altaProducto';
import { getProducto } from '../../helpers/controlInventarios/getProducto';
import { editProducto } from '../../helpers/controlInventarios/editProducto';
import PropTypes from 'prop-types';


function ModalAlta({ isEditMode, idProducto, handleClose, show, accion }) {

  console.log("isEditMode", isEditMode)
  console.log("idProducto", idProducto)
  useEffect(() => {
    if (isEditMode && idProducto !== null) {

      // Llamado al servicio para obtener los datos del producto por ID
      // Llamado al servicio para obtener los datos del producto por ID
      getProducto(idProducto)
        .then((res) => {
          console.log("res", res);

          const campos = [
            "id",
            "_id",
            "tipo",
            "noParte",
            "descripcion",
            "componente",
            "sede",
            "ubicacion",
            "minStock",
            "cantidad",
            "reorden",
            "maxStock",
            "proveedor",
            "sendor",
            "pnVendor",
            "snVendor",
            "snEmc",
            "capacidad",
          ];

          const datos = campos.reduce((acc, campo) => {
            if (campo === "id") {
              acc.id = res.id ?? res._id ?? ""; // Usa id o _id
            } else if (campo !== "_id") {
              acc[campo] = res[campo] ?? "";
            }
            return acc;
          }, {});

          setFormData(datos);
        })
        .catch((e) => {
          console.error("Error al obtener producto:", e.message);
        });

    } else {
      // Limpiar el formulario si es un alta
      setFormData({
        tipo: '',
        noParte: '',
        descripcion: '',
        componente: '',
        sede: '',
        ubicacion: '',
        minStock: 0,
        cantidad: 0,
        reorden: 0,
        maxStock: 0,
        proveedor: '',
        sendor: '',
        pnVendor: '',
        snVendor: '',
        snEmc: '',
        capacidad: ''
      });
    }
  }, [isEditMode, idProducto]);




  const [formData, setFormData] = useState({
    tipo: '',
    noParte: '',
    descripcion: '',
    componente: '',
    sede: '',
    ubicacion: '',
    minStock: 0,
    cantidad: 0,
    reorden: 0,
    maxStock: 0,
    proveedor: '',
    sendor: '',
    pnVendor: '',
    snVendor: '',
    snEmc: ''
  });

  const altaProductos = () => {

    if (isEditMode) {

      editProducto(formData);
    } else {
      altaProducto(formData);

    }

    console.log(formData)
    handleClose()
  }

  const handleChange = (e) => {

    console.log(e.target)
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{accion} producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Form.Group as={Col} className="mb-3" >
                <Form.Label>Tipo</Form.Label>
                <Form.Control
                  value={formData.tipo}
                  readOnly={isEditMode}
                  name="tipo"
                  type="text"
                  autoFocus
                  onChange={handleChange}
                />

              </Form.Group>
              <Form.Group as={Col} >
                <Form.Label>Número de parte</Form.Label>
                <Form.Control
                  value={formData.noParte}

                  readOnly={isEditMode}
                  name="noParte"
                  type="text"
                  autoFocus
                  onChange={handleChange}
                />

              </Form.Group>
              <Form.Group as={Col} controlId="AltaForm.Descripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  value={formData.descripcion}

                  readOnly={isEditMode}
                  type="text"
                  name="descripcion"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row>


              <Form.Group as={Col} className="mb-3" controlId="AltaForm.Componente">

                <Form.Label>Componente</Form.Label>
                <Form.Control
                  value={formData.componente}

                  readOnly={isEditMode}
                  type="text"
                  name="componente"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="AltaForm.Sede" >
                <Form.Label>Sede</Form.Label>
                <Form.Control
                  value={formData.sede}

                  readOnly={isEditMode}
                  type="text"
                  name="sede"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="AltaForm.Ubicacion" >
                <Form.Label>Ubicación</Form.Label>
                <Form.Control
                  value={formData.ubicacion}

                  readOnly={isEditMode}
                  type="text"
                  name="ubicacion"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="AltaForm.MinStock">
                <Form.Label>Stock mínimo</Form.Label>
                <Form.Control
                  value={formData.minStock}

                  type="number"
                  name="minStock"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="AltaForm.Cantidad">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  value={formData.cantidad}

                  type="number"
                  name="cantidad"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="AltaForm.MaxStock">
                <Form.Label>Stock máximo</Form.Label>

                <Form.Control
                  value={formData.maxStock}

                  type="number"
                  name="maxStock"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="AltaForm.Reorden">
                <Form.Label>Reorden</Form.Label>
                <Form.Control
                  value={formData.reorden}

                  type="number"
                  name="reorden"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="AltaForm.Proveedor">
                <Form.Label>Proveedor</Form.Label>
                <Form.Control
                  value={formData.proveedor}

                  readOnly={isEditMode}
                  type="text"
                  name="proveedor"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="AltaForm.Sendor">
                <Form.Label>Sendor</Form.Label>
                <Form.Control
                  value={formData.sendor}

                  readOnly={isEditMode}
                  type="text"
                  name="sendor"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="AltaForm.PNVendor">
                <Form.Label>PN Vendor</Form.Label>
                <Form.Control
                  value={formData.pnVendor}

                  readOnly={isEditMode}
                  type="text"
                  name="pnVendor"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="AltaForm.SNVendor">
                <Form.Label>SN Vendor</Form.Label>
                <Form.Control
                  value={formData.snVendor}
                  onChange={handleChange}

                  readOnly={isEditMode}
                  type="text"
                  name="snVendor"
                  autoFocus
                />
              </Form.Group>
              <Form.Group as={Col} controlId="AltaForm.SNEMC">
                <Form.Label>SN EMC</Form.Label>
                <Form.Control
                  value={formData.snEmc}

                  readOnly={isEditMode}
                  type="text"
                  name="snEmc"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="AltaForm.Capacidad">
                <Form.Label>Capacidad</Form.Label>
                <Form.Control
                  value={formData.capacidad}
                  readOnly={isEditMode}
                  type="text"
                  name="capacidad"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Descartar
          </Button>
          <Button onClick={altaProductos} variant="primary" >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal >
    </>
  );
}

// Validación de props
ModalAlta.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  idProducto: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  accion: PropTypes.string
};

export default ModalAlta;