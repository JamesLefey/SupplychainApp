const Producer = require('./Producer');
const Consumer = require('./Consumer');

Producer.hasMany(Consumer, {
    // foreignkey: 'author',
    onDelete: 'CASCADE'
});

Consumer.belongsTo(Producer, {
    // foreignKey: "author",
});



module.exports = { Producer, Consumer }