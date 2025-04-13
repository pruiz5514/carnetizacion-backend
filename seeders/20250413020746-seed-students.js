import { v4 as uuidv4 } from 'uuid';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface) {
    await queryInterface.bulkInsert('students', [
      {
        id: uuidv4(),
        fullname: 'Sofía González',
        email: 'sofia.gonzalez@example.com',
        qr_code: '20000001',
        active: true,
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: 'Mateo Rodríguez',
        email: 'mateo.rodriguez@example.com',
        qr_code: '20000002',
        active: true,
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: 'Valentina Pérez',
        email: 'valentina.perez@example.com',
        qr_code: '20000003',
        active: true,
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: 'Santiago Martínez',
        email: 'santiago.martinez@example.com',
        qr_code: '20000004',
        active: true,
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: 'Isabella López',
        email: 'isabella.lopez@example.com',
        qr_code: '20000005',
        active: true,
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: 'Emiliano Hernández',
        email: 'emiliano.hernandez@example.com',
        qr_code: '20000006',
        active: true,
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: 'Camila Ramírez',
        email: 'camila.ramirez@example.com',
        qr_code: '20000007',
        active: true,
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: 'Sebastián Torres',
        email: 'sebastian.torres@example.com',
        qr_code: '20000008',
        active: true,
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: 'Luciana Flores',
        email: 'luciana.flores@example.com',
        qr_code: '20000009',
        active: true,
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        fullname: 'Diego Morales',
        email: 'diego.morales@example.com',
        qr_code: '20000010',
        active: true,
        createdAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('students', null, {});
  }
};
