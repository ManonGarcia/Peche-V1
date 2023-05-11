const { Checklist } = require('./checklist');
const { Material } = require('./material');
const { Fish } = require('./fish');
const { Rule } = require('./rule');
const { Spot } = require('./spot');


Material.belongsToMany(Checklist, { as: 'checklists', through: 'checklists_materials', timestamps: false, onDelete: 'CASCADE', hooks: true });
Checklist.belongsToMany(Material, { as: 'materials', through: 'checklists_materials', timestamps: false, onDelete: 'CASCADE', hooks: true });


Spot.belongsToMany(Fish, { as: 'fishes', through: 'spots_fishes', timestamps: false, onDelete: 'CASCADE', hooks: true });
Fish.belongsToMany(Spot, { as: 'spots', through: 'spots_fishes', timestamps: false, onDelete: 'CASCADE', hooks: true });

Spot.belongsToMany(Rule, { as: 'rules', through: 'spots_rules', timestamps: false, onDelete: 'CASCADE', hooks: true });
Rule.belongsToMany(Spot, { as: 'spots', through: 'spots_rules', timestamps: false, onDelete: 'CASCADE', hooks: true });



module.exports = { Material, Checklist, Spot, Fish, Rule }