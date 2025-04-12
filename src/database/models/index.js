
import { Roles } from './roles.model.js'
import { Establishments } from './establishments.model.js'
import { Students } from './students.model.js';
import { Scans } from './scans.model.js';

import './roles.model.js'
import './establishments.model.js'
import './scans.model.js'
import './students.model.js'

Roles.hasMany(Establishments, {foreignKey: 'role_id'});
Establishments.belongsTo(Roles, {foreignKey: 'role_id'})

Students.hasMany(Scans, {foreignKey: 'student_id'});
Scans.belongsTo(Students, {foreignKey: 'student_id'})

Establishments.hasMany(Scans, {foreignKey: 'establishment_id'});
Scans.belongsTo(Establishments, {foreignKey: 'establishment_id'})