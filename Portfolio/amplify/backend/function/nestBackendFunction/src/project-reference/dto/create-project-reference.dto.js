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
exports.CreateProjectReferenceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateProjectReferenceDto {
}
exports.CreateProjectReferenceDto = CreateProjectReferenceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'project_id', type: Number, required: true }),
    __metadata("design:type", Number)
], CreateProjectReferenceDto.prototype, "project_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'text', type: String, required: true }),
    __metadata("design:type", String)
], CreateProjectReferenceDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'link', type: String, required: true }),
    __metadata("design:type", String)
], CreateProjectReferenceDto.prototype, "link", void 0);
