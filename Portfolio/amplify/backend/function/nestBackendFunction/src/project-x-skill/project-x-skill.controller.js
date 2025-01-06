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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectXSkillController = void 0;
const common_1 = require("@nestjs/common");
const create_project_x_skill_dto_1 = require("./dtos/create-project-x-skill.dto");
const project_x_skill_service_1 = require("./project-x-skill.service");
let ProjectXSkillController = class ProjectXSkillController {
    constructor(projectXSkillService) {
        this.projectXSkillService = projectXSkillService;
    }
    async create(projectXSkill) {
        return await this.projectXSkillService.create(projectXSkill);
    }
};
exports.ProjectXSkillController = ProjectXSkillController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_x_skill_dto_1.CreateProjectXSkillDto]),
    __metadata("design:returntype", Promise)
], ProjectXSkillController.prototype, "create", null);
exports.ProjectXSkillController = ProjectXSkillController = __decorate([
    (0, common_1.Controller)('project-x-skill'),
    __metadata("design:paramtypes", [project_x_skill_service_1.ProjectXSkillService])
], ProjectXSkillController);
