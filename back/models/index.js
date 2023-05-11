const { Checklist } = require('./checklist');
const { Material } = require('./material');
const { Fish } = require('./fish');
const { Rule } = require('./rule');
const { Spot } = require('./spot');


Material.belongsToMany(Checklist, { as: 'checklists', through: 'checklists_materials', timestamps: false, onDelete: 'CASCADE', hooks: true });
Checklist.belongsToMany(Material, { as: 'materials', through: 'checklists_materials', timestamps: false, onDelete: 'CASCADE', hooks: true });


Spot.belongsToMany(Fish, { as: 'fishes', through: 'spots_fishes', timestamps: false });
Fish.belongsToMany(Spot, { as: 'spots', through: 'spots_fishes', timestamps: false });

Spot.belongsToMany(Rule, { as: 'rules', through: 'spots_rules', timestamps: false });
Rule.belongsToMany(Spot, { as: 'spots', through: 'spots_rules', timestamps: false });



module.exports = { Material, Checklist, Spot, Fish, Rule }