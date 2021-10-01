const Consumer = require('./Consumer');
const Items = require('./Items');
const Producer = require('./Producer');


Consumer.hasOne(Producer, {
    foreignkey: 'consumer_id',
    onDelete: 'CASCADE'
});

Producer.belongsTo(Consumer, {
    foreignkey: 'consumer_id',
});

Consumer.hasMany(Items, {
    foreignkey: 'consumer_id',
    onDelete: 'CASCADE'
});

Items.belongsTo(Consumer, {
    foreignKey: 'consumer_id',
});

module.exports = { Consumer, Items, Producer };
