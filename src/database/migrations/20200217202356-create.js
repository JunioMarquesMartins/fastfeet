module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rua: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
