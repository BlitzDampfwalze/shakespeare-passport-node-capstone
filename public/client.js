//jquery related functionality
//definitions: function , objects/data, variables, etc.
//let editButtonsHTML = `
//<div class="edit-entry-buttons">
//<span class="update-select">Edit</span>
//<p> | </p>
//<span class="delete-select">Delete</span>
//</div>`;
//let editEntryForm = `
//<div class="js-edit-entry" style="display: none;">
//    <form action="" class="edit-entry-form">
//        <fieldset>
//            <label class="question" for="entry-type">Entry Type:</label>
//            <select name="entryType" class='entry-type' value='read' required>
//                <option value="read">Read</option>
//                <option value="seen" selected>Seen</option>
//                <option value="performed">Performed</option>
//            </select>
//            <br>
//            <label for="inputDate">Date</label>
//            <input type="date" class="inputDate" value="2009-06-25">
//            <button type="button" class="date-text">Need Date Range?</button>
//            <div class="play-info">
//                <label for="inputPlay">Play</label>
//                <input type="text" class="inputPlay" placeholder="Titus Andronicus" value="Cymbeline">
//                <label for="inputAuthor">Author</label>
//                <input type="text" class="inputAuthor" placeholder="The Bard" value="Shakes">
//                <label for="inputRole">Role</label>
//                <input type="text" class="inputRole" placeholder="Titus" value="Imogen">
//            </div>
//            <div class="place-info">
//                <label for="inputCo">Company</label>
//                <input type="text" class="inputCo" placeholder="Flagstaff Shakespeare Company" value="Free Players">
//                <label for="inputLocation">Location</label>
//                <input type="text" class="inputLocation" placeholder="Museum of Northern Arizona" value="West Park Presbyterian Church">
//            </div>
//            <br>
//            <label for="inputNotes">Notes</label>
//            <textarea name="Text1" class="inputNotes" cols="40" rows="5" value="A three story adventure of a crumbling building."></textarea>
//        </fieldset>
//    <button type="submit" class="submit-button">Update Entry</button>
//    </form>
//</div>`;
//let deleteEntry = `
//<div class="js-delete-entry" style="display: none;">
//    <h4>Are you sure you want to delete this entry?</h4>
//    <button class="delete-button">Delete</button>
//    <span class="cancel-button">Cancel</span>
//</div>`
let entryArray = 0;

function noEntries() {
    console.log(entryArray);
    if (entryArray === 0) {
        $('#no-entry').show();
    } else {
        $('#no-entry').hide();
    }
}

function htmlUserDashboard(results) {

}

function addEntryRenderHTML(resultsObject) {
    console.log(resultsObject);
    let htmlString = ``;

    //loop throu all the results
    $.each(resultsObject, function (key, results) {

        htmlString += `<div class="entries-container" id="${results._id}">`;
        let displayDate = results.inputDate.substring(0, 10);
        //edit buttons start
        htmlString += `<div class="entry-div ${results.entryType}">`;
        htmlString += `<div class="edit-entry-buttons">`;
        htmlString += `<span class="update-select">Edit</span>`;
        htmlString += `<p> | </p>`;
        htmlString += `<span class="delete-select">Delete</span>`;
        htmlString += `</div>`;
        //edit buttons finish

        htmlString += `<span class="entry-info type">${results.entryType}</span>`; //Value of Entry Type
        htmlString += `<span class="entry-info date">`;
        htmlString += `<p>Date:</p>`;
        htmlString += `<p>${displayDate}</p>`;
        htmlString += `</span>`;
        htmlString += `<span class="entry-info play">`;
        htmlString += `<p>Play:</p>`;
        htmlString += `<p>${results.inputPlay}</p>`;
        htmlString += `<span class="author">${results.inputAuthor}</span>`;
        htmlString += `</span>`;
        if (results.inputRole) {
            htmlString += `<span class="entry-info role">`;
            htmlString += `<p>Role:</p>`;
            htmlString += `<p>${results.inputRole}</p>`;
            htmlString += `</span>`;
        }
        if (results.inputCo) {
            htmlString += `<span class="entry-info theater-co">`;
            htmlString += `<p>Company:</p>`;
            htmlString += `<p>${results.inputCo}</p>`;
            htmlString += `</span>`;
        }
        if (results.inputLocation) {
            htmlString += `<span class="entry-info role">`;
            htmlString += `<p>Location:</p>`;
            htmlString += `<p>${results.inputLocation}</p>`;
            htmlString += `</span>`;
        }
        htmlString += `<span class="entry-info notes">`
        htmlString += `<p>Notes:</p>`
        htmlString += `<p>${results.inputNotes}</p>`;
        htmlString += `</span>`;
        htmlString += `</div>`;


        //Edit Entry  Entry form start
        htmlString += `<div class="js-edit-entry" style="display: none;">`;
        htmlString += `<form action="" class="edit-entry-form">`;
        htmlString += `<fieldset>`;
        htmlString += `<label class="question" for="entry-type">Entry Type:</label>`;

        //dynamically preselect the options based on the previous values
        htmlString += `<select name="entryType" class='entry-type' required>`;
        if (results.entryType == "read") {
            htmlString += `<option value="read" selected>Read</option>`;
            htmlString += `<option value="seen" >Seen</option>`;
            htmlString += `<option value="performed" >Performed</option>`;
        } else if (results.entryType == "seen") {
            htmlString += `<option value="read" >Read</option>`;
            htmlString += `<option value="seen" selected>Seen</option>`;
            htmlString += `<option value="performed" >Performed</option>`;
        } else if (results.entryType == "performed") {
            htmlString += `<option value="read" >Read</option>`;
            htmlString += `<option value="seen" >Seen</option>`;
            htmlString += `<option value="performed" selected>Performed</option>`;
        }
        htmlString += `</select>`;


        htmlString += `<br>`;
        htmlString += `<label for="inputDate">Date</label>`;
        htmlString += `<input type="date" class="inputDate" value="${results.inputDate}">`;
        htmlString += `<button type="button" class="date-text">Need Date Range?</button>`;
        htmlString += `<div class="play-info">`;
        htmlString += `<label for="inputPlay">Play</label>`;
        htmlString += `<input type="text" class="inputPlay" placeholder="Play" value="${results.inputPlay}">`;
        htmlString += `<label for="inputAuthor">Author</label>`;
        htmlString += `<input type="text" class="inputAuthor" placeholder="Author" value="${results.inputAuthor}">`;
        htmlString += `<label for="inputRole">Role</label>`;
        htmlString += `<input type="text" class="inputRole" placeholder="Role" value="${results.inputRole}">`;
        htmlString += `</div>`;
        htmlString += `<div class="place-info">`;
        htmlString += `<label for="inputCo">Company</label>`;
        htmlString += `<input type="text" class="inputCo" placeholder="Company" value="${results.inputCo}">`;
        htmlString += `<label for="inputLocation">Location</label>`;
        htmlString += `<input type="text" class="inputLocation" placeholder="Location" value="${results.inputLocation}">`;
        htmlString += `</div>`;
        htmlString += `<br>`;
        htmlString += `<label for="inputNotes">Notes</label>`;
        htmlString += `<textarea name="Text1" class="inputNotes" cols="40" rows="5">${results.inputNotes}</textarea>`;
        htmlString += `</fieldset>`;
        htmlString += `<button type="submit" class="submit-button">Update Entry</button>`;
        htmlString += `</form>`;
        htmlString += `</div>`;
        //Edit Entry  Entry form finish

        //delete entry form start
        htmlString += `<div class="js-delete-entry" style="display: none;">`;
        htmlString += `<h4>Are you sure you want to delete this entry?</h4>`;
        htmlString += `<button class="delete-button">Delete</button>`;
        htmlString += `<span class="cancel-button">Cancel</span>`;
        htmlString += `</div>`;
        //delete entry form finish


        htmlString += `</div>`;
    });
    //empty the user-list container before populating it dynamically
    $('#user-list').html("");
    $('#user-list').html(htmlString);
}

function updateEditFormValues(results) {
    let id = results._id;
    let jsEntryText = $(`#${results._id}`).find('.entry-div .type').text();
    $(`#${results._id}`).find('.js-edit-entry .entry-type').val(jsEntryText);
    //    console.log($(`#${results._id}`).find('.js-edit-entry .entry-type').val());
    console.log(jsEntryText);

}

///////////////////////////////////////////////////////////////////
//Invocations (calling)& function Triggers
$(function () {
    //first function invoke
    $('section').hide();
    $('.navbar').hide();

    $('.js-edit-entry').hide();
    $('.js-delete-entry').hide();

    $('#homepage-header').show();
    $('#signup-home-page').show();
    $('.place-container').show();
});

$(".sign-up-form").submit(function (event) {
    event.preventDefault();

    //take the input from the user
    const name = $("#signUpName").val();
    const username = $("#signUpUsername").val();
    const password = $("#signUpPassword").val();

    //validate the input
    if (name == "") {
        alert('Please add a name');
    } else if (username == "") {
        alert('Please add an user name');
    } else if (password == "") {
        alert('Please add a password');
    }
    //if the input is valid
    else {
        //create the payload object (what data we send to the api call)
        const newUserObject = {
            name: name,
            username: username,
            password: password
        };
        //console.log(newUserObject);

        //make the api call using the payload above
        $.ajax({
                type: 'POST',
                url: '/users/create',
                dataType: 'json',
                data: JSON.stringify(newUserObject),
                contentType: 'application/json'
            })
            //if call is succefull
            .done(function (result) {
                console.log(result);
                $('#loggedInName').text(result.name);
                $('#loggedInUserName').val(result.username);
                $('section').hide();
                $('.navbar').show();
                $('#user-dashboard').show();
                //            htmlUserDashboard(result);
                noEntries();
            })
            //if the call is failing
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };
});

$('#change-form-login').click(function (event) {
    event.preventDefault();
    $('section').hide();
    $('.navbar').hide();
    $('#homepage-header').show();
    $('#login-page').show();
});

$(".login-form").submit(function (event) {
    event.preventDefault();

    //take the input from the user
    const username = $("#loginUsername").val();
    const password = $("#loginPassword").val();

    //validate the input
    if (username == "") {
        alert('Please input user name');
    } else if (password == "") {
        alert('Please input password');
    }
    //if the input is valid
    else {
        //create the payload object (what data we send to the api call)
        const loginUserObject = {
            username: username,
            password: password
        };
        //console.log(loginUserObject);

        //make the api call using the payload above
        $.ajax({
                type: 'POST',
                url: '/users/login',
                dataType: 'json',
                data: JSON.stringify(loginUserObject),
                contentType: 'application/json'
            })
            //if call is succefull
            .done(function (result) {
                console.log(result);
                $('section').hide();
                $('.navbar').show();
                $('#user-dashboard').show();
                $('#loggedInName').text(result.name);
                $('#loggedInUserName').val(result.username);
                //            htmlUserDashboard();
                noEntries();

            })
            //if the call is failing
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };


});

$('#change-form-signup').click(function (event) {
    event.preventDefault();
    $('section').hide();
    location.reload();
});

$('#add-entry-button').click(function (event) {
    event.preventDefault();

    $('#add-entry-container').show();
});

$(".entry-form").submit(function (event) {
    event.preventDefault();

    //take the input from the user
    const entryType = $(".addEntryType").val();
    const inputDate = $(".addInputDate").val();
    const inputPlay = $(".addInputPlay").val();
    const inputAuthor = $(".addInputAuthor").val();
    const inputRole = $(".addInputRole").val();
    const inputCo = $(".addInputCo").val();
    const inputLocation = $(".addInputLocation").val();
    const inputNotes = $(".addInputNotes").val();
    const loggedInUserName = $("#loggedInUserName").val();

    //validate the input
    if (entryType == "") {
        alert('Please input entry type');
    } else if (inputDate == "") {
        alert('Please input addInputDate');
    } else if (inputPlay == "") {
        alert('Please input addInputPlay');
    } else if (inputAuthor == "") {
        alert('Please input addInputAuthor');
    } else if (inputNotes == "") {
        alert('Please input addInputNotes');
    }
    //if the input is valid
    else {
        entryArray++;
        //create the payload object (what data we send to the api call)
        const entryObject = {
            entryType: entryType,
            inputDate: inputDate,
            inputPlay: inputPlay,
            inputAuthor: inputAuthor,
            inputRole: inputRole,
            inputCo: inputCo,
            inputLocation: inputLocation,
            inputNotes: inputNotes,
            loggedInUserName: loggedInUserName,
        };
        console.log(entryObject);

        //make the api call using the payload above
        $.ajax({
                type: 'POST',
                url: '/entry/create',
                dataType: 'json',
                data: JSON.stringify(entryObject),
                contentType: 'application/json'
            })
            //if call is succefull
            .done(function (result) {
                console.log(result);
                $('section').hide();
                $('.navbar').show();
                $('#user-dashboard').show();
                $('#loggedInName').text(result.name);
                $('#loggedInUserName').val(result.username);
                $('#add-entry-container').hide();
                noEntries();
                //Add Entry to page
                addEntryRenderHTML(result);

                updateEditFormValues(result);
            })
            //if the call is failing
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };
});
//click on x closes add entry popup
$('.close-popup').click(function (event) {
    event.preventDefault();
    $('#add-entry-container').hide();
});

$('#logout').click(function (event) {
    event.preventDefault();
    $('section').hide();
    location.reload();
});

// Date |   Read |   Seen |   Performed
$('#date-sort').click(function (event) {
    event.preventDefault();
    alert('Sorted by Date');
});
$('#read-sort').click(function (event) {
    event.preventDefault();
    alert('Sorted by Read');
});
$('#seen-sort').click(function (event) {
    event.preventDefault();
    alert('Sorted by Seen');
});
$('#performed-sort').click(function (event) {
    event.preventDefault();
    alert('Sorted by Performed');
});

//Update Entry
$('#user-list').on('click', '.update-select', function (event) {
    event.preventDefault();
    //    $('.js-edit-entry').show();
    $(event.currentTarget).closest('.entry-div').siblings('.js-edit-entry').show();
});
$('#user-list').on('click', '.edit-entry-form', function (event) {
    event.preventDefault();
    $('.js-edit-entry').hide();

    alert("Entry has been updated");
});
//Delete Entry
$('#user-list').on('click', '.delete-select', function (event) {
    event.preventDefault();
    //    $('.js-delete-entry').show();
    $(event.currentTarget).closest('.entry-div').siblings('.js-delete-entry').show();
    //    $(event.currentTarget).parents('.entry-div').append(deleteEntryForm);
});

$('#user-list').on('click', '.delete-button', function (event) {
    event.preventDefault();
    $('.js-delete-entry').hide();
    //    $('.js-delete-entry').remove();
    alert("Entry has been deleted");
});

$('#user-list').on('click', '.cancel-button', function (event) {
    event.preventDefault();

    $('.js-delete-entry').hide();
});
