import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface) {
    const currentDate = new Date();
    await queryInterface.bulkInsert('establishments', [
      {
        id: uuidv4(),
        fullname: 'Fit4taal',
        phone_number: 658853470,
        email: process.env.ADMIN_EMAIL,
        password: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
        role_id: 1,
        createdAt: currentDate,
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('establishments', null, {});
  }
};
