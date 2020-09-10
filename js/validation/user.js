$('#click_register').click(function () {
    $(this).attr('disabled', 'disabled');
    let formElement = $('#form_register');
    let action = formElement.attr('action');

    var formData = {
        username: formElement.find("input[name='username']").val(),
        password: formElement.find("input[name='password']").val(),
        email: formElement.find("input[name='email']").val(),
        captcha: formElement.find("input[name='captcha']").val()
    }

    //required
    if (isExistUsername(formData.username) && isExistEmail(formData.email) && isExistPassword(formData.password) && isExistCaptcha(formData.captcha)) {
        formElement.submit();
    } else {
        isExistUsername(formData.username);
        isExistEmail(formData.email);
        isExistPassword(formData.password);
        isExistCaptcha(formData.captcha)
        $(this).removeAttr('disabled');
    }
    return false;

});

function isExistCaptcha(str) {
    var errorMessageElement = $("#inputCaptcha");
    if (!isExist(str)) {
        errorMessageElement.parent().children('div.invalid-feedback').text(messages["validate.required"]);
        errorMessageElement.parent().children('div.invalid-feedback').addClass('active');
        errorMessageElement.addClass('is-invalid');
        return false;
    }
    errorMessage(errorMessageElement);
    return true;
}

//validate username
function isExistUsername(str, id = 'inputUsername') {
    var errorMessageElement = $("#" + id);
    var flag = false;
    if (!isExist(str)) {
        errorMessageElement.parent().children('div.invalid-feedback').text(messages["validate.required"]);
        flag = true;
    } else if (!isUsernameStringLengthMinMax(str)) {
        errorMessageElement.parent().children('div.invalid-feedback').text(messages["validate.username"]);
        flag = true;
    }
    if (flag) {
        errorMessageElement.parent().children('div.invalid-feedback').addClass('active');
        errorMessageElement.addClass('is-invalid');
        return false;
    }
    errorMessage(errorMessageElement);
    return true;
}

//validate email
function isExistEmail(str, id = 'inputEmail') {
    var errorMessageElement = $("#" + id);
    var flag = false;
    if (!isExist(str)) {
        errorMessageElement.parent().children('div.invalid-feedback').text(messages["validate.required"]);
        flag = true;
    } else if (!isCurrentEmail(str)) {
        errorMessageElement.parent().children('div.invalid-feedback').text(messages["validate.email"]);
        flag = true;
    }
    if (flag) {
        errorMessageElement.parent().children('div.invalid-feedback').addClass('active');
        errorMessageElement.addClass('is-invalid');
        return false;
    }
    errorMessage(errorMessageElement);
    return true;
}

//validate password
function isExistPassword(str, id = 'inputPassword') {
    var errorMessageElement = $("#" + id);
    var flag = false;
    if (!isExist(str)) {
        errorMessageElement.parent().children('div.invalid-feedback').text(messages["validate.required"]);
        flag = true;
    } else if (!isStringLengthMinMax(str)) {
        errorMessageElement.parent().children('div.invalid-feedback').text(messages["validate.password"]);
        flag = true;
    }
    if (flag) {
        errorMessageElement.parent().children('div.invalid-feedback').addClass('active');
        errorMessageElement.addClass('is-invalid');
        return false;
    }
    errorMessage(errorMessageElement);
    return true;
}