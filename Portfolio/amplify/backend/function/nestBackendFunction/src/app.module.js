"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_module_1 = require("./course/course.module");
const course_entity_1 = require("./course/entitites/course.entity");
const project_entity_1 = require("./project/entities/project.entity");
const project_module_1 = require("./project/project.module");
const skill_module_1 = require("./skill/skill.module");
const skill_entity_1 = require("./skill/entities/skill.entity");
const project_x_skill_module_1 = require("./project-x-skill/project-x-skill.module");
const project_x_skill_entity_1 = require("./project-x-skill/entitites/project-x-skill.entity");
const project_reference_module_1 = require("./project-reference/project-reference.module");
const project_reference_entity_1 = require("./project-reference/entities/project-reference.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "database-1.cve6yki22z20.us-east-2.rds.amazonaws.com",
                port: 3306,
                username: "admin",
                password: "Miles5421!",
                database: "portfolio",
                entities: [project_entity_1.Project, course_entity_1.Course, skill_entity_1.Skill, project_x_skill_entity_1.ProjectXSkill, project_reference_entity_1.ProjectReference],
                synchronize: true,
            }),
            project_module_1.ProjectModule,
            course_module_1.CourseModule,
            skill_module_1.SkillModule,
            project_x_skill_module_1.ProjectXSkillModule,
            project_reference_module_1.ProjectReferenceModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
