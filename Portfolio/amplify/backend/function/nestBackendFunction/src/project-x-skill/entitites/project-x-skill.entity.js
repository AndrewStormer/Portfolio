"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectXSkill = void 0;
const project_entity_1 = require("../../project/entities/project.entity");
const skill_entity_1 = require("../../skill/entities/skill.entity");
const typeorm_1 = require("typeorm");
let ProjectXSkill = class ProjectXSkill {
};
exports.ProjectXSkill = ProjectXSkill;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProjectXSkill.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_entity_1.Project),
    __metadata("design:type", Number)
], ProjectXSkill.prototype, "project_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => skill_entity_1.Skill, {
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: "skill_id" }),
    __metadata("design:type", Number)
], ProjectXSkill.prototype, "skill_id", void 0);
exports.ProjectXSkill = ProjectXSkill = __decorate([
    (0, typeorm_1.Entity)()
], ProjectXSkill);
