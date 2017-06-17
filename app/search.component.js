System.register(['angular2/core', './courses.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_service_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(coursesService) {
                    var _this = this;
                    this.coursesService = coursesService;
                    this.courses = [];
                    coursesService.getCourses().subscribe(function (courses) { _this.courses = courses; });
                }
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'search',
                        template: "\n        <input list=\"courses\" value=\"Select Course\" onfocus=\"this.value = this.value=='Select Course'?'':this.value;\" onblur=\"this.value = this.value==''?'Select Course':this.value;\" >\n            <datalist id=\"courses\">\n                <option *ngFor=\"let course of courses\" value=\"{{course}}\">\n            </datalist>\n              \n    "
                    }), 
                    __metadata('design:paramtypes', [courses_service_1.CoursesService])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map