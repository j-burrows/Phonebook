$(function () {
    function addError(inputField, errorMessage) {
        inputField.addClass('invalid');
        inputField.next('.ValidationError').html(errorMessage);
    }

    function removeError(inputField) {
        inputField.removeClass('invalid');
        inputField.next('.ValidationError').html('');
    }

    $('.AddressCreate').submit(function (event) {
        var isValid = true;
        var ApartmentNumberInput = $(this).children('input[name=Apartment_Number]');
        var StreetNumberInput = $(this).children('input[name=Street_Number]');
        var StreetNameInput = $(this).children('input[name=Street_Name]');
        var CityInput = $(this).children('input[name=City]');
        var PostalCodeInput = $(this).children('input[name=Postal_Code]');

        if (!$.isNumeric(ApartmentNumberInput.val())) {
            addError(ApartmentNumberInput, "Apartment Number must be a numeric value.");
            isValid = false;
        }
        else if (ApartmentNumberInput.val() < 0) {
            addError(ApartmentNumberInput, "Apartment Number must be a postive value.");
            isValid = false;
        }
        else if (ApartmentNumberInput.val() % 1 != 0) {
            addError(ApartmentNumberInput, "Apartment Number must be whole number.");
            isValid = false;
        }
        else {
            removeError(ApartmentNumberInput);
        }
        if (!$.isNumeric(StreetNumberInput.val())) {
            addError(StreetNumberInput, "Street Number must be a numeric value.");
            isValid = false;
        }
        else if (StreetNumberInput.val() < 0) {
            addError(StreetNumberInput, "Street Number must be a postive value.");
            isValid = false;
        }
        else if (StreetNumberInput.val() % 1 != 0) {
            addError(StreetNumberInput, "Street Number must be whole number.");
            isValid = false;
        }
        else {
            removeError(StreetNumberInput);
        }
        if (StreetNameInput.val() == '') {
            addError(StreetNameInput, "Street Name cannot be empty");
            isValid = false;
        }
        else if (StreetNameInput.val().length > 16) {
            addError(StreetNameInput, "Street Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(StreetNameInput);
        }
        if (CityInput.val().length > 16) {
            addError(CityInput, "City cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(CityInput);
        }
        if (PostalCodeInput.val().length != 0
            && (PostalCodeInput.val().length != 6 && PostalCodeInput.val().length != 7)) {
            addError(PostalCodeInput, "Postal Code must be a legal length.");
            isValid = false;
        }
        else {
            removeError(PostalCodeInput);
        }

        event.preventDefault();
        return false;
    });

    $('.AddressCreate > input[name=Apartment_Number], .AddressUpdate > input[name=Apartment_Number]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if (!$.isNumeric($(this).val())) {
                addError($(this), "Apartment Number must be a numeric value.");
            }
            else if ($(this).val() < 0) {
                addError($(this), "Apartment Number must be a postive value.");
            }
            else if ($(this).val() % 1 != 0) {
                addError($(this), "Apartment Number must be whole number.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.AddressCreate > input[name=Street_Number], .AddressUpdate > input[name=Street_Number]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if (!$.isNumeric($(this).val())) {
                addError($(this), "Street Number must be a numeric value.");
            }
            else if ($(this).val() < 0) {
                addError($(this), "Street Number must be a postive value.");
            }
            else if ($(this).val() % 1 != 0) {
                addError($(this), "Street Number must be whole number.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.AddressCreate > input[name=Street_Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val() == '') {
                addError($(this), "Street Name cannot be empty");
            }
            else if ($(this).val().length > 16) {
                addError($(this), "Street Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.AddressCreate > input[name=City], .AddressUpdate > input[name=City]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 16) {
                addError($(this), "City cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.AddressCreate > input[name=Postal_Code], .AddressUpdate > input[name=Postal_Code]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length != 0
                && ($(this).val().length != 6 && $(this).val().length != 7)) {
                addError($(this), "Postal Code must be a legal length.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.AddressUpdate').submit(function (event) {
        var isValid = true;
        var ApartmentNumberInput = $(this).children('input[name=Apartment_Number]');
        var StreetNumberInput = $(this).children('input[name=Street_Number]');
        var StreetNameInput = $(this).children('input[name=Street_Name]');
        var CityInput = $(this).children('input[name=City]');
        var PostalCodeInput = $(this).children('input[name=Postal_Code]');

        if (!$.isNumeric(ApartmentNumberInput.val())) {
            addError(ApartmentNumberInput, "Apartment Number must be a numeric value.");
            isValid = false;
        }
        else if (ApartmentNumberInput.val() < 0) {
            addError(ApartmentNumberInput, "Apartment Number must be a postive value.");
            isValid = false;
        }
        else if (ApartmentNumberInput.val() % 1 != 0) {
            addError(ApartmentNumberInput, "Apartment Number must be whole number.");
            isValid = false;
        }
        else {
            removeError(ApartmentNumberInput);
        }
        if (!$.isNumeric(StreetNumberInput.val())) {
            addError(StreetNumberInput, "Street Number must be a numeric value.");
            isValid = false;
        }
        else if (StreetNumberInput.val() < 0) {
            addError(StreetNumberInput, "Street Number must be a postive value.");
            isValid = false;
        }
        else if (StreetNumberInput.val() % 1 != 0) {
            addError(StreetNumberInput, "Street Number must be whole number.");
            isValid = false;
        }
        else {
            removeError(StreetNumberInput);
        }
        if (StreetNameInput.val() == '') {
            addError(StreetNameInput, "Street Name cannot be empty");
            isValid = false;
        }
        else if (StreetNameInput.val().length > 16) {
            addError(StreetNameInput, "Street Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(StreetNameInput);
        }
        if (CityInput.val().length > 16) {
            addError(CityInput, "City cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(CityInput);
        }
        if (PostalCodeInput.val().length != 0
            && (PostalCodeInput.val().length != 6 && PostalCodeInput.val().length != 7)) {
            addError(PostalCodeInput, "Postal Code must be a legal length.");
            isValid = false;
        }
        else {
            removeError(PostalCodeInput);
        }

        event.preventDefault();
        return false;
    });

    $('.AddressUpdate > input[name=Street_Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 16) {
                addError($(this), "Street Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.ContactCreate').submit(function (event) {
        var isValid = true;
        var FirstNameInput = $(this).children('input[name=First_Name]');
        var LastNameInput = $(this).children('input[name=Last_Name]');
        var MiddleInitialInput = $(this).children('input[name=Middle_Initial]');
        var RelationInput = $(this).children('input[name=Relation]');
        if (FirstNameInput.val() == '') {
            addError(FirstNameInput, "First Name cannot be empty.");
            isValid = false;
        }
        else if (FirstNameInput.val().length > 16) {
            addError(FirstNameInput, "First Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(FirstNameInput);
        }
        if (LastNameInput.val().length > 16) {
            addError(LastNameInput, "Last Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(LastNameInput);
        }
        if (MiddleInitialInput.val().length > 1) {
            addError(MiddleInitialInput, "Middle initial must be a single character.");
            isValid = false;
        }
        else {
            removeError(MiddleInitialInput);
        }
        if (RelationInput.val().length > 16) {
            addError(RelationInput, "Relation cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(RelationInput);
        }

        event.preventDefault();
        return false;
    });

    $('.ContactCreate > input[name=First_Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val() == '') {
                addError($(this), "First Name cannot be empty.");
            }
            else if ($(this).val().length > 16) {
                addError($(this), "First Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.ContactCreate > input[name=Last_Name], .ContactUpdate > input[name=Last_Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 16) {
                addError($(this), "Last Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.ContactCreate > input[name=Middle_Initial], .ContactUpdate > input[name=Middle_Initial]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 1) {
                addError($(this), "Middle initial must be a single character.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.ContactCreate > input[name=Relation], .ContactUpdate > input[name=Relation]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 16) {
                addError($(this), "Relation cannot exceed 16 characters.");
                isValid = false;
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.ContactUpdate').submit(function (event) {
        var isValid = true;
        var FirstNameInput = $(this).children('input[name=First_Name]');
        var LastNameInput = $(this).children('input[name=Last_Name]');
        var MiddleInitialInput = $(this).children('input[name=Middle_Initial]');
        var RelationInput = $(this).children('input[name=Relation]');

        if (FirstNameInput.val().length > 16) {
            addError(FirstNameInput, "First Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(FirstNameInput);
        }
        if (LastNameInput.val().length > 16) {
            addError(LastNameInput, "Last Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(LastNameInput);
        }
        if (MiddleInitialInput.val().length > 1) {
            addError(MiddleInitialInput, "Middle initial must be a single character.");
            isValid = false;
        }
        else {
            removeError(MiddleInitialInput);
        }
        if (RelationInput.val().length > 16) {
            addError(RelationInput, "Relation cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(RelationInput);
        }

        event.preventDefault();
        return false;
    });

    $('.ContactUpdate > input[name=First_Name]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 16) {
                addError($(this), "First Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.EmailCreate').submit(function (event) {
        var isValid = true;
        var UrlInput = $(this).children('input[name=Url]');

        if (UrlInput.val() == '') {
            addError(UrlInput, "Url cannot be empty.");
            isValid = false;
        }
        else if (UrlInput.val().length > 32) {
            addError(UrlInput, "Url cannot exceed 32 characters.");
            isValid = false;
        }
        else {
            removeError(UrlInput);
        }

        event.preventDefault();
        return false;
    });

    $('.EmailCreate > input[name=Url]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val() == '') {
                addError($(this), "Url cannot be empty.");
            }
            else if ($(this).val().length > 32) {
                addError($(this), "Url cannot exceed 32 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.EmailUpdate').submit(function (event) {
        var isValid = true;
        var UrlInput = $(this).children('input[name=Url]');

        if (UrlInput.val().length > 32) {
            addError(UrlInput, "Url cannot exceed 32 characters.");
        }
        else {
            removeError(UrlInput);
        }

        event.preventDefault();
        return false;
    });

    $('.EmailUpdate > input[name=Url]').on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 32) {
                addError($(this), "Url cannot exceed 32 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.PhoneAddressCreate, .PhoneAddressUpdate').submit(function (event) {
        var isValid = true;
        var AreaCodeInput = $(this).children('input[name=Area_Code]');
        var RemoteAddressInput = $(this).children('input[name=Remote_Address]');
        var LocalAddressInput = $(this).children('input[name=Local_Address]');

        if (!$.isNumeric(AreaCodeInput.val()) && AreaCodeInput.val() != '') {
            addError(AreaCodeInput, "Area Code must be a numeric value.");
            isValid = false;
        }
        else if (AreaCodeInput.val() != 0 &&
            (AreaCodeInput.val() < 100 || AreaCodeInput.val() > 999)) {
            addError(AreaCodeInput, "Area code must be a 3 digit number.");
            isValid = false;
        }
        else {
            removeError(AreaCodeInput);
        }
        if (!$.isNumeric(RemoteAddressInput.val())) {
            addError(RemoteAddressInput, "Remote Address must be a numeric value.");
            isValid = false;
        }
        else if (RemoteAddressInput.val() < 100 || RemoteAddressInput.val() > 999) {
            addError(RemoteAddressInput, "Remote Address must be a 3 digit number.");
            isValid = false;
        }
        else {
            removeError(RemoteAddressInput);
        }
        if (!$.isNumeric(LocalAddressInput.val())) {
            addError(LocalAddressInput, "Local Address must be a numeric value.");
            isValid = false;
        }
        else if (LocalAddressInput.val() < 1000 || LocalAddressInput.val() > 9999) {
            addError(LocalAddressInput, "Local Address must be a 4 digit number.");
            isValid = false;
        }
        else {
            removeError(LocalAddressInput);
        }

        event.preventDefault();
        return false;
    });

    $('.PhoneAddressCreate > input[name=Area_Code], .PhoneAddressUpdate > input[name=Area_Code]')
        .on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if (!$.isNumeric($(this).val()) && $(this).val() != '') {
                addError($(this), "Area Code must be a numeric value.");
            }
            else if ($(this).val() != 0 &&
                ($(this).val() < 100 || $(this).val() > 999)) {
                addError($(this), "Area code must be a 3 digit number.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.PhoneAddressCreate > input[name=Remote_Address], .PhoneAddressUpdate > input[name=Remote_Address]')
        .on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if (!$.isNumeric($(this).val())) {
                addError($(this), "Remote Address must be a numeric value.");
            }
            else if ($(this).val() < 100 || $(this).val() > 999) {
                addError($(this), "Remote Address must be a 3 digit number.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.PhoneAddressCreate > input[name=Local_Address], .PhoneAddressUpdate > input[name=Local_Address]')
        .on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if (!$.isNumeric($(this).val())) {
                addError($(this), "Local Address must be a numeric value.");
            }
            else if ($(this).val() < 1000 || $(this).val() > 9999) {
                addError($(this), "Local Address must be a 4 digit number.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.PlaceCreate, .CountryCreate, .StateCreate').submit(function (event) {
        var isValid = true;
        var LongNameInput = $(this).children('input[name=Long_Name]');
        var ShortNameInput = $(this).children('input[name=Short_Name]');

        if (LongNameInput.val().length == 0) {
            addError(LongNameInput, "Long Name cannot be empty.");
            isValid = false;
        }
        else if (LongNameInput.val().length > 16) {
            addError(LongNameInput, "Long Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(LongNameInput);
        }
        if (ShortNameInput.val().length == 0) {
            addError(ShortNameInput, "Short Name cannot be empty.");
            isValid = false;
        }
        else if (ShortNameInput.val().length > 2) {
            addError(ShortNameInput, "Short Name cannot exceed 2 characters.");
            isValid = false;
        }
        else {
            removeError(ShortNameInput);
        }

        event.preventDefault();
        return false;
    });

    $('.PlaceCreate > input[name=Long_Name], .StateCreate > input[name=Long_Name], .CountryCreate input[name=Long_Name]')
        .on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length == 0) {
                addError($(this), "Long Name cannot be empty.");
            }
            else if ($(this).val().length > 16) {
                addError($(this), "Long Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.PlaceCreate > input[name=Short_Name], .StateCreate > input[name=Short_Name], .CountryCreate input[name=Short_Name]')
        .on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length == 0) {
                addError($(this), "Short Name cannot be empty.");
            }
            else if ($(this).val().length > 2) {
                addError($(this), "Short Name cannot exceed 2 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.PlaceUpdate, .CountryUpdate, .StateUpdate').submit(function (event) {
        var isValid = true;
        var LongNameInput = $(this).children('input[name=Long_Name]');
        var ShortNameInput = $(this).children('input[name=Short_Name]');

        if (LongNameInput.val().length > 16) {
            addError(LongNameInput, "Long Name cannot exceed 16 characters.");
            isValid = false;
        }
        else {
            removeError(LongNameInput);
        }
        if (ShortNameInput.val().length > 2) {
            addError(ShortNameInput, "Short Name cannot exceed 2 characters.");
            isValid = false;
        }
        else {
            removeError(ShortNameInput);
        }

        event.preventDefault();
        return false;
    });

    $('.PlaceUpdate > input[name=Long_Name], .StateUpdate > input[name=Long_Name], .CountryUpdate input[name=Long_Name]')
        .on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 16) {
                addError($(this), "Long Name cannot exceed 16 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });

    $('.PlaceUpdate > input[name=Short_Name], .StateUpdate > input[name=Short_Name], .CountryUpdate input[name=Short_Name]')
        .on('input', function () {
        //If an invalid field is changed, its validility is reexamined.
        if ($(this).hasClass('invalid')) {
            if ($(this).val().length > 2) {
                addError($(this), "Short Name cannot exceed 2 characters.");
            }
            else {
                removeError($(this));
            }
        }
    });
});