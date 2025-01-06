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
exports.CreateCourseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var Department;
(function (Department) {
    Department["CMP_SC"] = "CMP_SC";
    Department["MATH"] = "MATH";
    Department["INFOTC"] = "INFOTC";
    Department["STAT"] = "STAT";
})(Department || (Department = {}));
var Grade;
(function (Grade) {
    Grade["A"] = "A";
    Grade["AMinus"] = "A-";
    Grade["BPlus"] = "B+";
    Grade["B"] = "B";
    Grade["BMinus"] = "B-";
    Grade["CPlus"] = "C+";
    Grade["C"] = "C";
    Grade["CMinus"] = "C-";
    Grade["DPlus"] = "D+";
    Grade["D"] = "D";
    Grade["DMinus"] = "D-";
})(Grade || (Grade = {}));
class CreateCourseDto {
}
exports.CreateCourseDto = CreateCourseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'department',
        enum: Department,
        required: true,
        default: 'CMP_SC'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'number', type: Number, required: true }),
    __metadata("design:type", Number)
], CreateCourseDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'name', type: String, required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'grade', enum: Grade, required: true, default: 'A' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "grade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ name: 'link', type: String }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCourseDto.prototype, "link", void 0);
