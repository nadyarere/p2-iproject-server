"use strict";

const { hashPassword } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "nadya@gmail.com",
          password: hashPassword("12345"),
          role: "Customer",
        },
        {
          email: "admin@gmail.com",
          password: hashPassword("12345"),
          role: "Admin",
        },
        {
          email: "nadya1@gmail.com",
          password: hashPassword("12345"),
          role: "Customer",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  },
};
