//jquery related functionality
//definitions: function , objects/data, variables, etc.
let editEntryForm = `
<div class="js-edit-entry">
    <form action="" id="edit-entry-form">
        <fieldset>
            <label class="question" for="entry-type">Entry Type:</label>
            <select name="entryType" id='entry-type' required>
                <option value="0">Read</option>
                <option value="1" selected>Seen</option>
                <option value="2">Performed</option>
            </select>
        </fieldset>
        <button type="submit" class="submit-button">Update Entry</button>
    </form>
</div>`;
let deleteEntryForm = `
<div class="js-delete-entry">
    <h4> Are you sure you want to delete this entry ? </h4>
    <button class="delete-button">Delete</button>
    <span id="cancel-button">Cancel</span>
</div>`;


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
$('.delete-select').click(function (event) {
    event.preventDefault();
    //    $('.js-delete-entry').show();
    $(event.currentTarget).closest('.entry-div').siblings('.js-delete-entry').show();
    //    $(event.currentTarget).parents('.entry-div').append(deleteEntryForm);
});

$('.delete-button').click(function (event) {
    event.preventDefault();
    $('.js-delete-entry').hide();
    //    $('.js-delete-entry').remove();
    alert("Entry has been deleted");
});
$('#cancel-button').click(function (event) {
    event.preventDefault();

    $('.js-delete-entry').hide();
});
