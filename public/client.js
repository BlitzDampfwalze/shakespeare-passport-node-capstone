//jquery related functionality
//definitions: function , objects/data, variables, etc.

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
});

$(".sign-up-form").submit(function (event) {
    event.preventDefault();
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

    $('#entry-container').show();
    $('.delete-entry').hide();
});

$(".entry-form").submit(function (event) {
    event.preventDefault();
    $('#entry-container').hide();
    alert("Entry has been added");
});

$('.close-popup').click(function (event) {
    event.preventDefault();

    $('#entry-container').hide();
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

    //    $(this).closest('.entry-div').hide();
    $('.js-edit-entry').show();

});
$("#edit-entry-form").submit(function (event) {
    event.preventDefault();
    $('.js-edit-entry').hide();

    alert("Entry has been updated");
});
//Delete Entry
$('.delete-select').click(function (event) {
    event.preventDefault();

    $('.js-delete-entry').show();
});

$('.delete-button').click(function (event) {
    event.preventDefault();

    $('.js-delete-entry').hide();
    alert("Entry has been deleted");
});
$('#cancel-button').click(function (event) {
    event.preventDefault();

    $('.js-delete-entry').hide();
});
