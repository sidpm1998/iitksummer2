System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FileService;
    return {
        setters:[],
        execute: function() {
            FileService = (function () {
                function FileService() {
                }
                FileService.prototype.getFiles = function () {
                    return [
                        {
                            fileUrl: "file:///C:/Users/pooja/Desktop/esc/Mid-Sem%20Sem1.pdf",
                            imageUrl: "http://lorempixel.com/100/100/people?1",
                            author: "Siddhanta",
                            email: "sidpm@iitk.ac.in",
                            body: "PHY 103, Assignment, 2016-2017 Semester II",
                            totalLikes: 0,
                            iLike: false
                        },
                        {
                            fileUrl: "file:///C:/Users/pooja/Desktop/esc/Mid-sem%20Sem2.pdf",
                            imageUrl: "http://lorempixel.com/100/100/people?2",
                            author: "Pratyush",
                            email: "dpraty@iitk.ac.in",
                            body: "MTH 101, Lecture Notes, 2016-2017 Semester I",
                            totalLikes: 5,
                            iLike: true
                        },
                        {
                            fileUrl: "file:///C:/Users/pooja/Desktop/esc/Lab%20Exam%201.pdf",
                            imageUrl: "http://lorempixel.com/100/100/people?3",
                            author: "Jha2",
                            email: "karan@iitk.ac.in",
                            body: "MTH 102, Lecture Video, 2016-2017 Semester II",
                            totalLikes: 1,
                            iLike: true
                        }];
                };
                return FileService;
            }());
            exports_1("FileService", FileService);
        }
    }
});
//# sourceMappingURL=file.service.js.map