/*
Grid -> Controller
Grid.GridData.rows -> Model
Grid.ViewType = Desktop/Mobile - (to be added)

*/
var Grid = 
{
	
	'GridData':{
		'cols':new Array(),
		'rows':new Array()			
	},
	'IsCheckBoxRequired':false,
	'GridContainerID':'',
	'PrepareCols':function(){
		Grid.GridData.cols = new Array();
		$(Grid.GridData.rows[0]).each(function(i,e){
			
			Grid.GridData.cols.push(e.col);
		});
	},
	'SearchBarHtml':function()
	{
		var SearchBarHTML = '';
		SearchBarHTML += "<div class='SearchBar'>";
		SearchBarHTML += '<label class="Label">Search:&nbsp;&nbsp;</label>';
		SearchBarHTML += '<input type="text" id="SearchTextBox" style="width:30%;" placeholder="Enter text to search..." class="TextBox"></input>&nbsp;&nbsp;&nbsp;';
		SearchBarHTML += '<input type="button" id="SearchButton" value="Search" class="Button"></input>&nbsp;';
		SearchBarHTML += '<input type="button" id="ClearButton" value="Clear" class="Button"></input>';
		SearchBarHTML += '<input type="button" id="RefreshButton" value="Refresh" class="Button" style="float:right;"></input>'
		SearchBarHTML += "</div>";
		SearchBarHTML += '<br />';
		return SearchBarHTML;
	},
	'BindGrid':function(id){

		if(Grid.GridContainerID == '')
		{
			Grid.GridContainerID = id;
		}

		Grid.PrepareCols();
		var html = '';

		html+= Grid.SearchBarHtml();

		html += '<table width="100%" border="1" cellspacing="0" cellpadding="0" class="GridTable">';
		//plot the columns
		html+='<tr class="HeaderRow">';
		if(Grid.IsCheckBoxRequired == true)
		{
			html += '<th class="ColumnHeader cell CheckBoxColumn">';
			html += '<input type="checkbox" class="CheckBox" id="All"></input>';
			html +='</th>'
		}
		$(Grid.GridData.cols).each(function(i,e){
			html += '<th class="ColumnHeader Cell" colIndex="'+i+'">';
			html+= e;
			html += '</th>';
		});
		html += '</tr>';

		//plot the rows

		$(Grid.GridData.rows).each(function(i,e){
			if(i%2 == 0)
			{
				html += '<tr class="Row EvenRow" rowIndex="'+i+'">';
			}	
			else
			{
				html += '<tr class="Row OddRow" rowIndex="'+i+'">';
			}

			if( Grid.IsCheckBoxRequired) {
				html += '<td class="RowCell Cell">';
				html += '<input type="checkbox" class="CheckBox" id="ChkRow_'+i+'"></input>';
				html += '</td>';
			}

			$(e).each(function(index,element){
				html += '<td class="RowCell Cell" cellIndex="'+index+'">';
				html += element.value;
				html += '</td>';
			});
			html += '</tr>';
		});
		// table rendered

		
		//html+= '<tr class="BottomRow"><td class="BottomCell" colspan="'+Grid.GridData.cols.Length+'">&nbsp;</td></tr>';

		html += '</table>';
		// add for pagination
		html += "<div class=\"pagination\">";
		html += "<a href=\"#\">&laquo;</a>";
		
		var pageCount = $(Grid.GridData.rows).length/10;
		for(i = 0;i<pageCount;i++) {
			html += "<a href=\"#\">" + (i+1) + "</a>";
		}
		html += "<a href=\"#\">&raquo;</a>";
		html += "</div>";
		$('#'+id).html(html);
		try
		{
			Grid.AttachHandlers();
		}
		catch(err)
		{
			console.log('error in attaching handlers');
			console.log(err.message);
		}

		

	},
	'initSearch': function() {
		$('#SearchButton').attr('class','ButtonSearchOn');

			try
			{
				Grid.Search($('#SearchTextBox').val());
			}
			catch(err)
			{
				console.log('error searching the test on grid');
				console.log(err.message);
			}

			return false;
	},
	'AttachHandlers':function(){
		$("#SearchTextBox").on('keypress',function(e) {
			// pressed Enter key
			if(e.which == 13) {
				Grid.initSearch();
			}
		});
		
		$('#SearchButton').click(function(e){
			Grid.initSearch();
		});

		$('#ClearButton').click(function(e){
			$('#SearchButton').attr('class','Button');
			if($('#SearchTextBox').val() != '')
			{
				try
				{
					Grid.BindGrid(Grid.GridContainerID);
				}
				catch(err)
				{
					console.log('error binding grid on clear.');
					console.log(err.message);
				}
				$('#SearchTextBox').val('');
			}
			return false;
		});

		$('#RefreshButton').click(function(e){
			$('#SearchButton').attr('class','Button');
			try
			{
				Grid.BindGrid(Grid.GridContainerID);
			}
			catch(err)
			{
				console.log('error binding grid on refresh');
				console.log(err.message);
			}
			return false;
		});

		// $('#SearchTextBox').keyDown(function()
		// {
		// 	alert('key up');
		// });

		$('#All').change(function(e)
		{
			if($('#All')[0].checked == true)
			{
				$('input:checkbox[id^="ChkRow_"]').each(function(i,e){
					try
					{
						$(e)[0].checked = true;
					}
					catch(err)
					{
						console.log(err.message);
					}
				});
			}
			else
			{
				$('input:checkbox[id^="ChkRow_"]').each(function(i,e){
					try
					{
						$(e)[0].checked = false;
					}
					catch(err)
					{
						console.log(err.message);

					}
				});
			}

		});

		$('input.CheckBox[id^="ChkRow_"]').click(function(e){
			if(this.checked == false)
			{
				if($('#All')[0].checked == true)
				{
					$('#All')[0].checked = false;
				}
			}
		});
	},
	'Search':function(p_SearchText)
	{
		$("tr.Row").each(function(iRow, eRow){
			if($(eRow).html().indexOf(p_SearchText) != -1) {
				$(eRow).show();
			} else {
				$(eRow).hide();
			}
		});
	},
	'GetSelectedRows':function()
	{
		var RowIndexesSelected = new Array();
		var RowsSelected = new Array();
		if($('#All')[0].checked == true)	
		{
			//all rows are selected
			RowsSelected = Grid.GridData.rows;
		}
		else
		{
			$('input:checkbox[id^="ChkRow_"]').each(function(i,e){
				if($(e)[0].checked == true){
					RowIndexesSelected.push($(e).parent().parent().attr('rowIndex'));
				}
			});	

			$(RowIndexesSelected).each(function(i,e){
				RowsSelected.push(Grid.GridData.rows[e]);
			});
		}

		return RowsSelected;
	}

	
}
