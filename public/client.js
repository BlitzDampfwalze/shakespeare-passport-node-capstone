//jquery related functionality
//definitions: function , objects/data, variables, etc.
let editEntryForm = `
<div class="js-edit-entry" style="display: none;">
    <form action="" class="edit-entry-form">
        <fieldset>
            <label class="question" for="entry-type">Entry Type:</label>
            <select name="entryType" class='entry-type' value='read' required>
                <option value="read">Read</option>
                <option value="seen" selected>Seen</option>
                <option value="performed">Performed</option>
            </select>
            <br>
            <label for="inputDate">Date</label>
            <input type="date" class="inputDate" value="2009-06-25">
            <button type="button" class="date-text">Need Date Range?</button>
            <div class="play-info">
                <label for="inputPlay">Play</label>
                <input type="text" class="inputPlay" placeholder="Titus Andronicus" value="Cymbeline">
                <label for="inputAuthor">Author</label>
                <input type="text" class="inputAuthor" placeholder="The Bard" value="Shakes">
                <label for="inputRole">Role</label>
                <input type="text" class="inputRole" placeholder="Titus" value="Imogen">
            </div>
            <div class="place-info">
                <label for="inputCo">Company</label>
                <input type="text" class="inputCo" placeholder="Flagstaff Shakespeare Company" value="Free Players">
                <label for="inputLocation">Location</label>
                <input type="text" class="inputLocation" placeholder="Museum of Northern Arizona" value="West Park Presbyterian Church">
            </div>
            <br>
            <label for="inputNotes">Notes</label>
            <textarea name="Text1" class="inputNotes" cols="40" rows="5" value="A three story adventure of a crumbling building."></textarea>
        </fieldset>
    <button type="submit" class="submit-button">Update Entry</button>
    </form>
</div>`;
let deleteEntry = `
<div class="js-delete-entry" style="display: none;">
    <h4>Are you sure you want to delete this entry?</h4>
    <button class="delete-button">Delete</button>
    <span class="cancel-button">Cancel</span>
</div>`
let entryArray = 0;

function noEntries() {
    console.log(entryArray);
    if (entryArray === 0) {
        $('#no-entry').show();
    } else {
        $('#no-entry').hide();
    }
}

function renderHTMLEntry(results) {

    let htmlString = `<div class="entries-container">
        <div class="entry-div performed">`
    htmlString += `
        <div class="edit-entry-buttons">
        <span class="update-select">Edit</span>
        <p> | </p>
        <span class="delete-select">Delete</span>
        </div>`;

    htmlString += `<span class="entry-info type">${results.entryType}</span>`; //Value of Entry Type
    htmlString += `<span class="entry-info date">`;
    htmlString += `<p>Date:</p>`;
    htmlString += `<p>${results.inputDate}</p>`;
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
    //Edit Entry & Delete Entry form
    htmlString += editEntryForm;
    htmlString += deleteEntry;
    htmlString += `</div>`;

    return htmlString;
}

//function editEntryHTML(results) {
//    $('').val()
//
//}

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
                $('#user-list').append(renderHTMLEntry(result));
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
$('.update-select').click(function (event) {
    event.preventDefault();
    //    $('.js-edit-entry').show();
    $(event.currentTarget).closest('.entry-div').siblings('.js-edit-entry').show();
});
$(".edit-entry-form").submit(function (event) {
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
