var express = require('express');
var Parse = require('parse/node').Parse;
var bodyParser = require('body-parser');
var router = express.Router();
var displayStart = 0;
var echo = 0;
module.exports = router;

var urlencodedParser = bodyParser.urlencoded({
		extended : false
	})

	router.get('/', urlencodedParser, function (req, res) {
        //req.query["fecFin"]
		Parse.initialize("***REMOVED***", "***REMOVED***");
        var MediaGroup = Parse.Object.extend("MediaGroup");
        var mediaGroup = new MediaGroup();
        mediaGroup.id = req.body.id;
		var searchText = req.query.sSearch;
        displayStart = req.query.iDisplayStart;
        echo = req.query.sEcho;
		if (searchText != null && searchText != "") {}

		var MediaGroup = Parse.Object.extend("MediaGroup");
		var countQuery = new Parse.Query(MediaGroup);
        mediaGroup.id = req.body.id;

		countQuery.count({
			success : function (count){                
                var tableDataQuery = new Parse.Query(MediaGroup);
				
                tableDataQuery.descending("name");
				tableDataQuery.limit(10);
                
                if(parseInt(displayStart) != 0)
                    tableDataQuery.skip(parseInt(displayStart));
                    
				tableDataQuery.find({
					success : function (mediaGroups) {
						var data = [];
                        
						for (var i = 0; i < mediaGroups.length; i++) {
							var mediaGroup = mediaGroups[i];

							data[i] = {
								title : mediaGroup.get("title"),
								detail : mediaGroup.get("detail"),
								imageURL : mediaGroup.get("imageURL"),
								DT_RowId : mediaGroup.id
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

router.post('/update', urlencodedParser, function (req, res) {
	Parse.initialize("***REMOVED***", "***REMOVED***");

	var MediaGroup = Parse.Object.extend("MediaGroup");
	var mediaGroup = new MediaGroup();
    mediaGroup.id = req.body.id;   
    
    if(req.body.columnName == 'duration')
    	mediaGroup.set(req.body.columnName, parseInt(req.body.value));
    else
        mediaGroup.set(req.body.columnName, req.body.value);
        
	mediaGroup.save(null, {
		success : function (mediaGroup) {
			res.json("Successful Save!");
		},
		error : function (mediaGroup, error) {
			res.json("Save Error!");
		}
	});
});

router.post('/add', urlencodedParser, function (req, res) {
	Parse.initialize("***REMOVED***", "***REMOVED***");

	var MediaGroup = Parse.Object.extend("MediaGroup");
	var mediaGroup = new MediaGroup();

	mediaGroup.set("title", req.body.title);
	mediaGroup.set("detail", req.body.detail);
	mediaGroup.set("imageURL", req.body.imageURL);

	mediaGroup.save(null, {
		success : function (mediaGroup) {
			res.json("Successful Save!");
		},
		error : function (mediaGroup, error) {
			res.json("Save Error!");
		}
	});
});

router.post('/delete', urlencodedParser, function (req, res) {
	Parse.initialize("***REMOVED***", "***REMOVED***");

	var MediaGroup = Parse.Object.extend("MediaGroup");
	var query = new Parse.Query(MediaGroup);

	var mediaGroupID = req.body.id;

	query.get(mediaGroupID, {
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
