var express = require('express');
var Parse = require('parse/node').Parse;
var bodyParser = require('body-parser');
var router = express.Router();
var displayStart = 0;
var echo = 0;
module.exports = router;
Parse.initialize(process.env.ParseApplicationID, process.env.ParseJavascriptID);

var urlencodedParser = bodyParser.urlencoded({
		extended : false
	})

	router.get('/', function (req, res) {
		var searchText = req.query.sSearch;
		displayStart = req.query.iDisplayStart;
		echo = req.query.sEcho;
		
		var Lesson = Parse.Object.extend("Lesson");
		var countQuery = new Parse.Query(Lesson);
        
        if (searchText != null && searchText != "") {
            countQuery.matches('title', searchText,'i');
        }

		countQuery.count({
			success : function (count) {
				var tableDataQuery = new Parse.Query(Lesson);
                
                if (searchText != null && searchText != "") {
                    tableDataQuery.matches('title', searchText,'i');
                }

				tableDataQuery.ascending("index");
				tableDataQuery.limit(10);

				if (parseInt(displayStart) != 0)
					tableDataQuery.skip(parseInt(displayStart));

				tableDataQuery.find({
					success : function (lessons) {
						var data = [];

						for (var i = 0; i < lessons.length; i++) {
							var lesson = lessons[i];
							var lessonTitle = "";
							var lessonImageURL = "";
                            
							if (lesson.get("title") !== null && lesson.get("title") !== undefined)
								lessonTitle = lesson.get("title");
							
							if (lesson.get("imageURL") !== null && lesson.get("imageURL") !== undefined)
								lessonImageURL = lesson.get("imageURL");
                            
							data[i] = {
								title : lessonTitle,
								imageURL : lessonImageURL,
								DT_RowId : lesson.id
							};
						}

						res.json({
							aaData : data,
							iTotalRecords : count,
							iTotalDisplayRecords : count,
							sEcho : echo
						});
					}
				});
			},
			error : function (error) {
				// The request failed
			}
		});
	});
    
router.get('/dropdown', urlencodedParser, function (req, res) {
	echo = req.query.sEcho;

	var Lesson = Parse.Object.extend("Lesson");
	var tableDataQuery = new Parse.Query(Lesson);
    tableDataQuery.limit(999999999999999);

    tableDataQuery.ascending("title");

    tableDataQuery.find({
        success : function (lessons) {
            var data = [];
            for (var
                i = 0; i < lessons.length; i++) {
                var lesson = lessons[i];
                var title = '';
                
                if (lesson.get("title") !== null && lesson.get("title") !== undefined)
                    title = lesson.get("title");
                
                data[i] = {
                    title : title,
                    DT_RowId : lesson.id
                };
            }
            
            data =  data.sort(function (a, b) {
                            return a["title"].toLowerCase().localeCompare(b["title"].toLowerCase());
                        });

            res.json({
                aaData : data,
                sEcho : echo
            });
        }
    });
});

router.post('/edit', urlencodedParser, function (req, res) {
	var Lesson = Parse.Object.extend("Lesson");
	var lesson = new Lesson();
    
	lesson.id = req.body.lessonId;
	lesson.set("title", req.body.title);
    lesson.set("imageURL", req.body.imageURL);

	lesson.save(null, {
		success : function (results) {
			res.json("Lesson Saved!");
		},
		error : function (results, error) {
			res.json("Lesson Save Error!");
		}
	});
});

router.post('/add', urlencodedParser, function (req, res) {
    echo = req.query.sEcho;
	var Lesson = Parse.Object.extend("Lesson");
	var lesson = new Lesson();
	var query = new Parse.Query(lesson);

	lesson.set("title", req.body.title);
	lesson.set("imageURL", req.body.imageURL);

	lesson.save(null, {
		success : function (lesson) {
            
			res.json({
                Outcome : "Success",
                LessonId : lesson.id,
                sEcho : echo
            });
		},
		error : function (lesson, error) {
			res.json({
                Outcome : "Failure",
                LessonId : null,
                sEcho : echo
            });
		}
	});
});

router.post('/delete', urlencodedParser, function (req, res) {
	var Lesson = Parse.Object.extend("Lesson");
	var query = new Parse.Query(Lesson);

	var lessonID = req.body.id;

	query.get(lessonID, {
		success : function (myObj) {
			// The object was retrieved successfully.
			myObj.destroy({});
			res.end();
		},
		error : function (object, error) {
			res.json("Deletion Error: " + error);
		}
	});
});

module.exports = router;
