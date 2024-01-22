# Database migrations

Since I am using MVC for the backend I wanted something like artisan for PHP to help keep the database in order. 
So I ended up using sequelize, it was pretty straightforward, although the syntax for writing migrations is a bit different.  

### Migration
```javascript
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Currency', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      code: { type: Sequelize.STRING },
      name: { type: Sequelize.STRING },
      symbol: { type: Sequelize.STRING(10) },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });

    await queryInterface.addIndex('Currency', ['deletedAt']);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Currency');
  }
};
```

I do like that the model and migration design are kind of similar makes it feel like its simpler to trace.  

### Model
```Javascript
'use strict';

module.exports = (sequelize, DataTypes) => {
    const Currency = sequelize.define('Currency', {
        code: DataTypes.STRING,
        name: DataTypes.STRING,
        symbol: DataTypes.STRING(10),
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'Currency',
        tableName: 'Currency',
        timestamps: true, // Enable timestamps
        paranoid: true, // Enable soft deletes
    });
    return Currency;
};
```
