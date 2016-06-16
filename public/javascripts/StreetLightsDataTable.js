

$(document).ready(function () {

	var oUserTable = $('#user').dataTable({
			"fnRowCallback" : function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
				$(nRow).on('click', function () {
					var objectId = $(nRow).attr("id");
					var userName = $('td:eq(0)', nRow).text();
					var email = $('td:eq(1)', nRow).text();
                    var password = $('td:eq(2)', nRow).text();
                    
                    //todo: add logic for btnEditLogin
					$('#userEditId').val(objectId);
				});
			},
			"bJQueryUI" : true,
			"bScrollCollapse" : true,
			"bProcessing" : true,
			"bServerSide" : true,
			"rowId" : "objectid",
			"sAjaxSource" : "/user",
			"bPaginate" : true,
			"bSort" : true,
			"aoColumnDefs" : [{
					"mDataProp" : null,
					"sDefaultContent" : "&nbsp",
					"aTargets" : ['_all']
				}
			],
			"aoColumns" : [{
					"mDataProp" : "userName"
				}, {
					"mDataProp" : "email"
				}
			],
			"iDisplayLength" : 10,
			"iDisplayStart" : 0,
			"sPaginationType" : "full_numbers",
			"bFilter" : false,
			"deferLoading" : 10
		}).makeEditable({
			fnOnDeleted : function (value, settings) {
				oUserTable.fnDraw();
			},
			fnOnEdited : function (value, settings) {
				oUserTable.fnDraw();
			},
			sAddURL : "/user/add",
			sAddHttpMethod : "POST",
			sEditHttpMethod : "GET",
			sDeleteHttpMethod : "POST",
			sEditURL : "/user/edit",
			sDeleteURL : "/user/delete",
			sAddNewRowFormId : "formAddUser",
			sAddNewRowButtonId : "btnAddUser",
			sAddNewRowOkButtonId : "btnAddUserOk",
			sAddNewRowCancelButtonId : "btnAddUserCancel",
			sEditRowFormId : "formEditUser",
			sEditRowButtonId : "btnEditUser",
			sEditRowOkButtonId : "btnEditUserOk",
			sEditRowCancelButtonId : "btnEditUserCancel",
			sDeleteRowButtonId : "btnDeleteUser",
			oAddNewRowButtonOptions : {
				label : "Add",
				icons : {
					primary : 'ui-icon-plus'
				}
			},
			oEditRowButtonOptions : {
				label : "Edit",
				icons : {
					primary : 'ui-icon-pencil'
				}
			},
			oDeleteRowButtonOptions : {
				label : "Remove",
				icons : {
					primary : 'ui-icon-trash'
				}
			},
			oAddNewRowFormOptions : {
				title : 'Add a user',
				show : "blind",
				hide : "explode",
				modal : true
			},
			oEditRowFormOptions : {
				title : 'Edit a user',
				show : "blind",
				hide : "explode",
				modal : true
			},
			sAddDeleteEditToolbarSelector : ".dataTables_length"
		});

	var oMediaItemTable = $('#mediaitem').dataTable({
			"fnRowCallback" : function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
				$(nRow).on('click', function () {
					var objectId = $(nRow).attr("id");
					var name = $('td:eq(0)', nRow).text();
					var duration = $('td:eq(1)', nRow).text();
					var contentURL = $('td:eq(2)', nRow).text();
                    var producer = $('td:eq(3)', nRow).text();
					var artist = $('td:eq(4)', nRow).text();

					$('#mediaItemEditId').val(objectId);
					$('#nameEdit').val(name);
					$('#durationEdit').val(duration);
					$('#contentURLEdit').val(contentURL);
                    $('#mediaitemproducer').val(producer);
					$('#mediaitemartist').val(artist);

					$('#durationEdit').mask("00:00:00", {
						placeholder : "__:__:__"
					});

                    $("#formEditMediaItem select[name=producerEdit] option").filter(function () {
						return $(this).text() == producer;
					}).prop('selected', true);
                    
					$("#formEditMediaItem select[name=artistEdit] option").filter(function () {
						return $(this).text() == artist;
					}).prop('selected', true);
				});
			},
			"bJQueryUI" : true,
			"bScrollCollapse" : true,
			"bProcessing" : true,
			"bServerSide" : true,
			"rowId" : "objectid",
			"sAjaxSource" : "/mediaitem",
			"bPaginate" : true,
			"bSort" : true,
			"aoColumnDefs" : [{
					"mDataProp" : null,
					"sDefaultContent" : "&nbsp",
					"aTargets" : ['_all']
				}
			],
			"aoColumns" : [{
					"mDataProp" : "name"
				}, {
					"mDataProp" : "duration"
				}, {
					"mDataProp" : "contentURL"
				}, {
					"mDataProp" : "producer"
				}, {
					"mDataProp" : "artist"
				}
			],
			"iDisplayLength" : 10,
			"iDisplayStart" : 0,
			"sPaginationType" : "full_numbers",
			"bFilter" : false,
			"deferLoading" : 10
		}).makeEditable({
			fnOnDeleted : function (value, settings) {
				oMediaItemTable.fnDraw();
				oMediaGroupTable.fnDraw();
				oMediaGroupItemTable.fnDraw();
			},
			fnOnEdited : function (value, settings) {
				oMediaItemTable.fnDraw();
				oMediaGroupTable.fnDraw();
				oMediaGroupItemTable.fnDraw();
			},
			sAddURL : "/mediaitem/add",
			sAddHttpMethod : "POST",
			sEditHttpMethod : "GET",
			sDeleteHttpMethod : "POST",
			sEditURL : "/mediaitem/edit",
			sDeleteURL : "/mediaitem/delete",
			sAddNewRowFormId : "formAddMediaItem",
			sAddNewRowButtonId : "btnAddMediaItem",
			sAddNewRowOkButtonId : "btnAddMediaItemOk",
			sAddNewRowCancelButtonId : "btnAddMediaItemCancel",
			sEditRowFormId : "formEditMediaItem",
			sEditRowButtonId : "btnEditMediaItem",
			sEditRowOkButtonId : "btnEditMediaItemOk",
			sEditRowCancelButtonId : "btnEditMediaItemCancel",
			sDeleteRowButtonId : "btnDeleteMediaItem",
			oAddNewRowButtonOptions : {
				label : "Add",
				icons : {
					primary : 'ui-icon-plus'
				}
			},
			oEditRowButtonOptions : {
				label : "Edit",
				icons : {
					primary : 'ui-icon-pencil'
				}
			},
			oDeleteRowButtonOptions : {
				label : "Remove",
				icons : {
					primary : 'ui-icon-trash'
				}
			},
			oAddNewRowFormOptions : {
				title : 'Add a new media item',
				show : "blind",
				hide : "explode",
				modal : true
			},
			oEditRowFormOptions : {
				title : 'Edit a media item',
				show : "blind",
				hide : "explode",
				modal : true
			},
			sAddDeleteEditToolbarSelector : ".dataTables_length"
		});

	var oMediaGroupTable = $('#mediagroup')
		.dataTable({
			"fnRowCallback" : function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
				$(nRow).on('click', function () {
					var objectId = $(nRow).attr("id");
					var title = $('td:eq(0)', nRow).text();
					var detail = $('td:eq(1)', nRow).text();
					var imageURL = $('td:eq(2)', nRow).text();
                    var producer = $('td:eq(3)', nRow).text();
					var artist = $('td:eq(4)', nRow).text();

					$('#formEditMediaGroup input[name=mediaGroupId]').val(objectId);
					$('#formAddMediaGroup input[name=mediaGroupId]').val(objectId);
					$('#mediaGroupTitleEdit').val(title);
					$('#mediaGroupDetailEdit').val(detail);
					$('#mediaGroupImageURLEdit').val(imageURL);
                    
                    $("#formEditMediaGroup select[name=mediaGroupProducerEdit] option").filter(function () {
						return $(this).text() == producer;
					}).prop('selected', true);

					$("#formEditMediaGroup select[name=mediaGroupArtistEdit] option").filter(function () {
						return $(this).text() == artist;
					}).prop('selected', true);

					oMediaGroupItemTable.fnDraw();
				});
			},
			"bJQueryUI" : true,
			"bProcessing" : true,
			"bServerSide" : true,
			"rowId" : "objectid",
			"sAjaxSource" : "/mediagroup",
			"bPaginate" : true,
			"bSort" : true,
			"aoColumnDefs" : [{
					"mDataProp" : null,
					"sDefaultContent" : "&nbsp",
					"aTargets" : ['_all']
				}
			],
			"aoColumns" : [{
					"mDataProp" : "title"
				}, {
					"mDataProp" : "detail"
				}, {
					"mDataProp" : "imageURL"
				}, {
					"mDataProp" : "producer"
				}, {
					"mDataProp" : "artist"
				}
			],
			"sPaginationType" : "full_numbers",
			"iDisplayLength" : 10,
			"iDisplayStart" : 0,
			"bFilter" : false,
			"deferLoading" : 10
		}).makeEditable({
			fnOnDeleted : function (value, settings) {
				oMediaItemTable.fnDraw();
				oMediaGroupTable.fnDraw();
				oMediaGroupItemTable.fnDraw();
			},
			fnOnEdited : function (value, settings) {
				oMediaItemTable.fnDraw();
				oMediaGroupTable.fnDraw();
				oMediaGroupItemTable.fnDraw();
			},
			sDeleteHttpMethod : "POST",
			sDeleteURL : "/mediagroup/delete",
			sAddNewRowButtonId : "btnAddMediaGroup",
			sEditRowButtonId : "btnEditMediaGroup",
			sDeleteRowButtonId : "btnDeleteMediaGroup",
			oAddNewRowButtonOptions : {
				label : "Add",
				icons : {
					primary : 'ui-icon-plus'
				}
			},
			oEditRowButtonOptions : {
				label : "Edit",
				icons : {
					primary : 'ui-icon-pencil'
				}
			},
			oDeleteRowButtonOptions : {
				label : "Remove",
				icons : {
					primary : 'ui-icon-trash'
				}
			},
			sAddDeleteEditToolbarSelector : ".dataTables_length"
		});

	var oCreditTable = $('#credit').dataTable({
			"fnRowCallback" : function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
				$(nRow).on('click', function () {
					var objectId = $(nRow).attr("id");
					var name = $('td:eq(0)', nRow).text();

					$('#creditEditId').val(objectId);
					$('#creditNameEdit').val(name);
				});
			},
			"bJQueryUI" : true,
			"bProcessing" : true,
			"bServerSide" : true,
			"rowId" : "objectid",
			"sAjaxSource" : "/credit",
			"bPaginate" : true,
			"bSort" : true,
			"aoColumns" : [{
					"mDataProp" : "name"
				}
			],
			"aoColumnDefs" : [{
					"mDataProp" : null,
					"sDefaultContent" : "&nbsp",
					"aTargets" : ['_all']
				}
			],
			"sPaginationType" : "full_numbers",
			"iDisplayLength" : 10,
			"iDisplayStart" : 0,
			"bFilter" : false,
			"fnDrawCallback" : function (oSettings) {
				IntializeCreditDropDownBoxes();
			}
		}).makeEditable({
			fnOnDeleted : function (value, settings) {
				oMediaItemTable.fnDraw();
				oMediaGroupTable.fnDraw();
				oMediaGroupItemTable.fnDraw();
			},
			fnOnEdited : function (value, settings) {
				oMediaItemTable.fnDraw();
				oMediaGroupTable.fnDraw();
				oMediaGroupItemTable.fnDraw();
			},
			sEditURL : "/credit/edit",
			sAddURL : "/credit/add",
			sEditHttpMethod : "GET",
			sAddHttpMethod : "POST",
			sDeleteHttpMethod : "POST",
			sDeleteURL : "/credit/delete",
			sAddNewRowFormId : "formAddCredit",
			sAddNewRowButtonId : "btnAddCredit",
			sAddNewRowOkButtonId : "btnAddCreditOk",
			sEditRowFormId : "formEditCredit",
			sEditRowButtonId : "btnEditCredit",
			sEditOkButtonId : "btnEditCreditOk",
			sEditRowCancelButtonId : "btnEditCreditCancel",
			sDeleteRowButtonId : "btnDeleteCredit",
			oAddNewRowButtonOptions : {
				label : "Add",
				icons : {
					primary : 'ui-icon-plus'
				}
			},
			oEditRowButtonOptions : {
				label : "Edit",
				icons : {
					primary : 'ui-icon-pencil'
				}
			},
			oDeleteRowButtonOptions : {
				label : "Remove",
				icons : {
					primary : 'ui-icon-trash'
				}
			},
			oAddNewRowFormOptions : {
				title : 'Add a new credit',
				show : "blind",
				hide : "explode",
				modal : true
			},
			oEditRowFormOptions : {
				title : 'Edit a credit',
				show : "blind",
				hide : "explode",
				modal : true
			},
			sAddDeleteEditToolbarSelector : ".dataTables_length"
		});

	var oMediaGroupItemTable = $('#mediagroupitem').dataTable({
			"fnRowCallback" : function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
				$(nRow).on('click', function () {
					$("#formAddMediaGroupItem input[name=mediaGroupItemId]").val($(nRow).attr("id"));
				});
			},
			"bJQueryUI" : true,
			"bProcessing" : true,
			"bServerSide" : true,
			"rowId" : "objectid",
			"sAjaxSource" : "/mediagroupitem",
			"bPaginate" : true,
			"bSort" : true,
			"aoColumnDefs" : [{
					"mDataProp" : null,
					"sDefaultContent" : "&nbsp",
					"aTargets" : ['_all']
				}
			],
			"aoColumns" : [{
					"mDataProp" : "name"
				}, {
					"mDataProp" : "duration"
				}, {
					"mDataProp" : "contentURL"
				}, {
					"mDataProp" : "producer"
				}, {
					"mDataProp" : "artist"
				}

			],
			"fnServerParams" : function (aoData) {
				aoData.push({
					"name" : "mediaGroupId",
					"value" : $('#mediaGroupId').val()
				});
			},
			"sPaginationType" : "full_numbers",
			"iDisplayLength" : 10,
			"iDisplayStart" : 0,
			"bFilter" : false,
            "oLanguage": {
			           "sEmptyTable": "No media items(tracks) added to media group(album)",
                       "sZeroRecords": "No media items(tracks) added to media group(album)"
			        }
		}).makeEditable({
			fnOnDeleted : function (value, settings) {
				oMediaItemTable.fnDraw();
				oMediaGroupItemTable.fnDraw();
			},
			fnOnEdited : function (value, settings) {
				oMediaItemTable.fnDraw();
				oMediaGroupTable.fnDraw();
				oMediaGroupItemTable.fnDraw();
			},
			fnOnAdded : function (value, settings) {
				oMediaGroupItemTable.fnDraw();
			},
			sAddNewRowFormId : "formAddMediaGroupItem",
			sAddNewRowButtonId : "btnAddMediaGroupItem",
			sAddNewRowOkButtonId : "btnAddMediaGroupItemOk",
			sDeleteRowButtonId : "btnDeleteMediaGroupItem",
			oAddNewRowButtonOptions : {
				label : "Add",
				icons : {
					primary : 'ui-icon-plus'
				}
			},
			oDeleteRowButtonOptions : {
				label : "Remove",
				icons : {
					primary : 'ui-icon-trash'
				}
			},
			oAddNewRowFormOptions : {
				title : 'Add a new media group item',
				hide : "explode",
				modal : true
			},
			sAddDeleteEditToolbarSelector : ".dataTables_length"
		});

	oMediaGroupItemTable.fnDraw();
	oCreditTable.fnDraw();
	oMediaGroupTable.fnDraw();
	oMediaItemTable.fnDraw();

	$("#btnEditMediaGroup").on("click", function (e) {
		/* 		var links = $("#main-nav li ul li a");
		links.parent().siblings().find('a').removeClass('current');
		$('#main-nav li ul li a').eq(2).addClass("current")
		$("#mediagroupitemdiv").siblings().hide(); */

		$("#mediagroupdiv").hide();
		$("#mediaGroupButtons").show();
		$("#mediagroupeditadddiv").show();
		$("#formAddMediaGroup").hide();
		$("#formEditMediaGroup").show();
		$("#mediaGroupItemTableDiv").show();
		$("#mediagroupitem").show();
		$("#btnAddMediaGroupItem").show();
		$("#btnDeleteMediaGroupItem").show();
        $("#mediaGroupItemContentHeader").show();
	});

	$("#btnAddMediaGroup").on("click", function (e) {
		/* var oMediaItemTable = $('#mediaitem').dataTable();
		var endingText = "";

		$.each(oMediaItemTable.fnGetNodes(), function (index, value) {
		var objectId = $(value).attr("id");
		var name = $('td:eq(0)', value).text();
		var duration = $('td:eq(1)', value).text();
		var contentURL = $('td:eq(2)', value).text();
		var artist = $('td:eq(3)', value).text();
		var beginningText = "<option value='" + objectId + "'";

		if (index == 0) {
		endingText = " selected>" + name + "</option>";

		$('#mediaGroupItemId').val(objectId);
		$('#mediaGroupItemDurationAdd').val(duration);
		$('#mediaGroupItemContentURLAdd').val(contentURL);
		$('#mediaGroupItemArtistAdd').val(artist);
		} else
		endingText = ">" + name + "</option>";

		var wholeString = beginningText.concat(endingText);

		$('#mediaGroupItemNameAdd').append(wholeString);
		}); */

		//IntializeMediaGroupItemDropDownBoxes();
        $("#formAddMediaGroup input[name=mediaGroupId]").val("");
        $("#formAddMediaGroup input[name=mediaGroupTitleAdd]").val("");
        $("#formAddMediaGroup input[name=mediaGroupDetailAdd]").val("");
        $("#formAddMediaGroup input[name=mediaGroupImageURLAdd]").val("");
        $("#formAddMediaGroup select[name=mediaGroupProducerAdd]").selectedIndex = 0;
        $("#formAddMediaGroup select[name=mediaGroupArtistAdd]").selectedIndex = 0;
        
		$("#mediagroupdiv").hide();
		$("#mediagroupeditadddiv").show();
		$("#formEditMediaGroup").hide();
        $("#mediaGroupItemContentHeader").hide();

		$("#mediaGroupButtons").show();
		$("#formAddMediaGroup").show();
	});

	function IntializeCreditDropDownBoxes() {
		$.ajax({
			url : "/credit"
		}).done(function (data) {
			var creditData = data.aaData;

            $('#formEditMediaItem select[name=producerEdit').empty();
			$('#formAddMediaItem select[name=mediaitemproducer').empty();
			$('#formEditMediaGroup select[name=mediaGroupProducerEdit]').empty();
			$('#formAddMediaGroup select[name=mediaGroupProducerAdd]').empty();
            
			$('#formEditMediaItem select[name=artistEdit').empty();
			$('#formAddMediaItem select[name=mediaitemartist').empty();
			$('#formEditMediaGroup select[name=mediaGroupArtistEdit]').empty();
			$('#formAddMediaGroup select[name=mediaGroupArtistAdd]').empty();

			for (var i = 0; i < creditData.length; i++) {
				var credit = creditData[i].name;
				var creditId = creditData[i].DT_RowId;
				var optionText = "<option value='" + creditId + "'>" + credit + "</option>";
                
                $('#formEditMediaItem select[name=producerEdit').append(optionText);
				$('#formAddMediaItem select[name=mediaitemproducer').append(optionText);
				$('#formEditMediaGroup select[name=mediaGroupProducerEdit]').append(optionText);
				$('#formAddMediaGroup select[name=mediaGroupProducerAdd]').append(optionText);

				$('#formEditMediaItem select[name=artistEdit').append(optionText);
				$('#formAddMediaItem select[name=mediaitemartist').append(optionText);
				$('#formEditMediaGroup select[name=mediaGroupArtistEdit]').append(optionText);
				$('#formAddMediaGroup select[name=mediaGroupArtistAdd]').append(optionText);
			}
		});
	}

	$("#btnAddMediaGroupItem").on("click", function (e) {
		IntializeMediaGroupItemDropDownBoxes();
	});

	function IntializeMediaGroupItemDropDownBoxes() {
		$.ajax({
			url : "/mediaitem"
		}).done(function (data) {
			var mediaItemData = data.aaData;
			$('#mediaGroupItemNameAdd').empty();

			for (var i = 0; i < mediaItemData.length; i++) {
				var mediaItemName = mediaItemData[i].name;
				var mediaItemId = mediaItemData[i].DT_RowId;
				var optionText = "<option value='" + mediaItemId + "'>" + mediaItemName + "</option>"; ;

				$('#mediaGroupItemNameAdd').append(optionText);
			}
		});
	}

	function filterCombobox(selectObject, filterValue, autoSelect) {
		//data-filter="2"
		//<option data-filter="2" value="FFF">Option 6</option>
		//<option data-filter-emptyvalue disabled>No Options</option>
		var fullData = selectObject.data("filterdata-values");
		var emptyValue = selectObject.data("filterdata-emptyvalue");

		// Initialize if first time.
		if (!fullData) {
			fullData = selectObject.find("option[data-filter]").detach();
			selectObject.data("filterdata-values", fullData);
			emptyValue = selectObject.find("option[data-filter-emptyvalue]").detach();
			selectObject.data("filterdata-emptyvalue", emptyValue);
			selectObject.addClass("filtered");
		} else {
			// Remove elements from DOM
			selectObject.find("option[data-filter]").remove();
			selectObject.find("option[data-filter-emptyvalue]").remove();
		}

		// Get filtered elements.
		var toEnable = fullData.filter("option[data-filter][data-filter='" + filterValue + "']");

		// Attach elements to DOM
		selectObject.append(toEnable);

		// If toEnable is empty, show empty option.
		if (toEnable.length == 0) {
			selectObject.append(emptyValue);
		}

		// Select First Occurrence
		if (autoSelect) {
			var obj = selectObject.find("option[selected]");
			selectObject.val(obj.length == 0 ? toEnable.val() : obj.val());
		}
	}

	$("#saveMediaGroup").on("click", function (e) {
		var data = [];		

		if ($("#formEditMediaGroup input[name=mediaGroupId]").val() == "" || $("#formEditMediaGroup input[name=mediaGroupId]").val() == null)
        {
            data = {
                title : $('#mediaGroupTitleAdd').val(),
                detail : $('#mediaGroupDetailAdd').val(),
                imageURL : $('#mediaGroupImageURLAdd').val(),
                producer : $('#mediaGroupProducerAdd').val(),
                artist : $('#mediaGroupArtistAdd').val()
            };
            
			mediaGroupAddAjaxCall(data);
        }
		else
        {
            data = {
                title : $('#mediaGroupTitleEdit').val(),
                detail : $('#mediaGroupDetailEdit').val(),
                imageURL : $('#mediaGroupImageURLEdit').val(),
                producer : $('#mediaGroupProducerEdit').val(),
                artist : $('#mediaGroupArtistEdit').val()
            };
            
			mediaGroupUpdateAjaxCall(data);
        }
	});

	$("#viewMediaGroup").on("click", function (e) {
		$("#mediaGroupButtons").hide();
        $("#mediaGroupItemContentHeader").hide();
	});

	$("#viewCredit").on("click", function (e) {
		$("#mediaGroupButtons").hide();
        $("#mediaGroupItemContentHeader").hide();
	});

	$("#viewMediaItem").on("click", function (e) {
		$("#mediaGroupButtons").hide();
	});

	function mediaGroupAddAjaxCall(opts) {
		$.ajax({
			type : "POST",
			data : {
				"title" : opts.title,
				"detail" : opts.detail,
				"imageURL" : opts.imageURL,
                "producer" : opts.producer,
				"artist" : opts.artist
			},
			url : "/mediagroup/add",
			success : function (res) {
				oMediaGroupTable.fnDraw();
                
                oMediaGroupItemTable.fnDraw();

				$("#mediaGroupItemTableDiv").show();
                $("#mediaGroupItemContentHeader").show();
				$("#formEditMediaGroup").show();

				$('#mediaGroupTitleEdit').val(opts.title);
				$('#mediaGroupDetailEdit').val(opts.detail);
				$('#mediaGroupImageURLEdit').val(opts.imageURL);

				//$('#mediaGroupArtistAdd').val(opts.artist);
				$("#formAddMediaGroupItem input[name=mediaGroupId]").val("");
				$("#formEditMediaGroup input[name=mediaGroupId]").val(res);

				$("#formAddMediaGroup").hide();

				//bDestroy for mediagroupitem table?
				alert("Successfully Saved Media Group");
			}
		});
	};

	function mediaGroupUpdateAjaxCall(opts) {
		$.ajax({
			type : "POST",
			data : {
				"mediaGroupId" : $("#formEditMediaGroup input[name=mediaGroupId]").val(),
				"title" : opts.title,
				"detail" : opts.detail,
				"imageURL" : opts.imageURL,
                "producer" : opts.producer,
				"artist" : opts.artist
			},
			url : "/mediagroup/update",
			success : function (res) {
				oMediaGroupTable.fnDraw();

				//bDestroy for mediagroupitem table?
				alert("Successfully Saved Media Group");
			}
		});
	};

	function ConfirmDelete() {
		return confirm("Are you sure that you want to delete this record?");
	}

	$("#btnDeleteMediaGroupItem").on("click", function (e) {
		if (ConfirmDelete) {
			$.ajax({
				type : "POST",
				data : {
					"mediaGroupId" : $('#formEditMediaGroup input[name=mediaGroupId]').val(),
					"mediaGroupItemId" : $("#formAddMediaGroupItem input[name=mediaGroupItemId]").val()
				},
				url : "/mediagroupitem/delete",
				success : function () {
					oMediaGroupItemTable.fnDraw();
				}
			});
		}
	});

	$("#btnDeleteMediaGroupItem").on("click", function (e) {
		if (ConfirmDelete) {
			$.ajax({
				type : "POST",
				data : {
					"mediaGroupId" : $('#formEditMediaGroup input[name=mediaGroupId]').val(),
					"mediaGroupItemId" : $("#formAddMediaGroupItem input[name=mediaGroupItemId]").val()
				},
				url : "/mediagroupitem/delete",
				success : function () {
					oMediaGroupItemTable.fnDraw();
				}
			});
		}
	});

	$("#btnAddMediaGroupItemOk").on("click", function (e) {
		$.ajax({
			type : "POST",
			data : {
				"mediaGroupId" : $('#formEditMediaGroup input[name=mediaGroupId]').val(),
				"mediaGroupItemId" : $("#formAddMediaGroupItem input[name=mediaGroupItemId]").val()
			},
			url : "/mediagroupitem/add",
			success : function () {
				$("#formAddMediaGroupItem").dialog('close');

				oMediaGroupItemTable.fnDraw();
			}
		});
	});

	$("#btnAddMediaItem").on("click", function (e) {
		$('#duration').mask("00:00:00", {
			placeholder : "__:__:__"
		});
	});
    
    $("#btnEditUser").on("click", function (e) {        
		$.ajax({
			type : "GET",
			data : {
				"userId" : $('#userEditId').val()
			},
			url : "/user",
			success : function (res) {
				var objectId = res.userId;
				var userName = res.userName;
				var email = res.email;
                
                $('#userEditId').val(objectId);
                $('#userNameEdit').val(userName);
                $('#emailEdit').val(email);
			}
		});
	});

	$("#cancelMediaGroup").on("click", function (e) {        
        $("#formAddMediaGroupItem input[name=mediaGroupId]").val("");
		$("#formEditMediaGroup input[name=mediaGroupId]").val("");
		$("#mediagroupeditadddiv").hide();
		$("#formEditMediaGroup").hide();
		$("#formAddMediaGroup").hide();
		$("#mediagroupitem").hide();
		$("#btnAddMediaGroupItem").hide();
		$("#btnDeleteMediaGroupItem").hide();
		$("#mediagroupdiv").show();
		$("#mediaGroupButtons").hide();
        $("#mediaGroupItemContentHeader").hide();
	});

	$("#mediaGroupItemNameAdd").on("change", function () {
		var selected = $(this).val();
		mediaGroupItemNameAddAjaxCall(selected);
	});

	function mediaGroupItemNameAddAjaxCall(opts) {
		$.ajax({
			type : "GET",
			data : {
				"mediaItemId" : opts
			},
			url : "/mediagroupitem",
			success : function (res) {
				var objectId = res.mediaGroupItemId;
				var duration = res.mediaGroupItemDurationAdd;
				var contentURL = res.mediaGroupItemContentURLAdd;
                var producer = res.mediaGroupItemProducerAdd;
				var artist = res.mediaGroupItemArtistAdd;

				$('#mediaGroupItemId').val(objectId);
				$('#mediaGroupItemDurationAdd').val(duration);
				$('#mediaGroupItemContentURLAdd').val(contentURL);
                $('#mediaGroupItemProducerAdd').val(producer);
				$('#mediaGroupItemArtistAdd').val(artist);
			}
		});
	};

});
