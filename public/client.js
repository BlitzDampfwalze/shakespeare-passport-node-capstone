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
        const newUserObject = {
            name: name,
            username: username,
            password: password
        };
        console.log(newUserObject);
        $.ajax({
                type: 'POST',
                url: '/users/create',
                dataType: 'json',
                data: JSON.stringify(newUserObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                console.log(result);
//                newUserToggle = true;
//                alert('Thanks for signing up! You may now sign in with your username and password.');
//                showSignInPage();
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };


    $('section').hide();
    $('.navbar').show();
    $('#user-dashboard').show();
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
    $('section').hide();
    $('.navbar').show();
    $('#user-dashboard').show();
    $('section').hide();
});

$('#change-form-signup').click(function (event) {
    event.preventDefault();
    location.reload();
});

$('#add-entry-button').click(function (event) {
    event.preventDefault();

    $('#add-entry-container').show();
});

$(".entry-form").submit(function (event) {
    event.preventDefault();
    $('#add-entry-container').hide();
    alert("Entry has been added");
});
//click on x closes add entry popup
$('.close-popup').click(function (event) {
    event.preventDefault();
    $('#add-entry-container').hide();
});

$('#logout').click(function (event) {
    event.preventDefault();
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
