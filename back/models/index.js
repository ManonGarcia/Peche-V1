const { Checklist } = require('./checklist');
const { Material } = require('./material');


Material.belongsToMany(Checklist, { as: 'checklists', through: 'checklists_materials', timestamps: false });
Checklist.belongsToMany(Material, { as: 'materials', through: 'checklists_materials', timestamps: false });

module.exports = {
    Material,
    Checklist
}