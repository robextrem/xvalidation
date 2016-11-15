(function ($) {
    $.fn.Validati = function (options)
    {
        return this.each(function ()
        {
            var element = $(this);
            // Return early if this element already has a plugin instance
            if (element.data('Validati'))
                return;
            // pass options to plugin constructor
            var myplugin = new Validati(this, options);
            // Store plugin object in this element's data
            element.data('Validati', myplugin);
            element.data().Validati.methods.init();
        });
    };
    var Validati = function (target, options) {
        var componentObj = {
            customValidations: [],
            defaultText: "Invalid Format",
            fields:"select,textarea,input[type=text],input[type=email],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=datetime-local],input[type=date],input[type=url]",
            parentContainer: false,
            html5Validation: false,
            errorClass: "error",
            theme: "bootstrap", //materialize | bootstrap | none
            methods: {
                init: function () {
                    if (options != undefined) {
                        if (options.customValidations != undefined) {
                            componentObj.customValidations = options.customValidations;
                        }
                        if (options.theme != undefined) {
                            componentObj.theme = options.theme;
                        }
                        switch (options.theme) {
                            case "bootstrap":
                            {
                                componentObj.errorClass = "has-error";
                                componentObj.parentContainer = true;
                                break;
                            }
                            case "materialize":
                            {
                                componentObj.errorClass = "invalid";
                                break;
                            }
                            default:
                            {
                                componentObj.errorClass = "error";
                                break;
                            }

                        }

                        if (options.errorClass != undefined) {
                            componentObj.errorClass = options.errorClass;
                        }
                        if (options.parentContainer != undefined) {
                            componentObj.parentContainer = options.parentContainer;
                        }
                    }

                    $(target).find(componentObj.fields).each(function (i, e) {
                        $(e).data().order = i;

                        if ($(e).data().content === undefined) {
                            $(e).data("content", componentObj.defaultText);
                            $(e).attr("data-content", componentObj.defaultText);
                        }

                        if (componentObj.theme == "bootstrap") {

                            $(e).popover({
                                trigger: "manual",
                                title: "Error",
                                container: target,
                                placement: "bottom"
                            });

                            $(e).on("focus", function () {
                                $(e).popover("hide");
                                $(e).parent().removeClass(componentObj.errorClass);
                            });
                            $(e).on('hidden.bs.popover', function () {

                            });
                            $(e).on('shown.bs.popover', function () {
                                $(target).find(componentObj.fields).each(function (j, f) {
                                    if (i != j) {
                                        $(f).popover("hide");
                                        $(f).removeClass(componentObj.errorClass);
                                    }
                                });
                            });
                        }
                    });
                },
                validate: function () {

                    var valid = true;
                    $(target).find(componentObj.fields).each(function (i, e) {

                        if ($(e).prop("disabled"))
                            return true;

                        $(e).on("blur", function () {
                            $(this).removeClass(componentObj.errorClass);
                        });

                        if ($(e).hasClass("select-validation")) {
                            if ($(e).val().length > 0)
                                valid = true;
                            else
                                valid = false;
                        }

                        if ($(e).hasClass("empty-validation")) {
                            if ($(e).val() === "")
                                valid = true;
                        }
                        if ($(e).hasClass("text-validation")) {
                            if (!componentObj.methods.isText($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("alphanumeric-validation")) {
                            if (!componentObj.methods.isAlphaNumeric($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("zip-validation")) {
                            if (!componentObj.methods.isCP($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("email-validation")) {
                            if (!componentObj.methods.isEmail($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("phone-validation")) {
                            if (!componentObj.methods.isPhone($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("phone-validation")) {
                            if (!componentObj.methods.isPhone($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("clabe-validation")) {
                            if (!componentObj.methods.isClabe($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("numericonly-validation")) {
                            if (!componentObj.methods.isNumeric($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("numericorempty-validation")) {
                            if ($(e).val() != "") {
                                if (!componentObj.methods.isNumeric($(e).val())) {
                                    valid = false;
                                }
                            }
                        }
                        if ($(e).hasClass("cvv-validation")) {
                            if (!componentObj.methods.isCVV($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("serie-validation")) {
                            if (!componentObj.methods.isSerie($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("cvvuser-validation")) {
                            if (!componentObj.methods.isCVVuser($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("address-validation")) {
                            if (!componentObj.methods.isAddress($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("expirymonth-validation")) {
                            if (!componentObj.methods.cc_expiryMonth($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("expiryyear-validation")) {
                            if (!componentObj.methods.cc_expiryYear($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("password-validation")) {
                            if (!componentObj.methods.isPassword($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("url-validation")) {
                            if (!componentObj.methods.isURL($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("date-validation")) {
                            if (!componentObj.methods.isDate($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("rfc-validation")) {
                            if (!componentObj.methods.isRFC($(e).val())) {
                                valid = false;
                            }
                        }
                        if ($(e).hasClass("samepassword-validation")) {
                            if ($(e).val() === "") {
                                valid = false;
                            }
                            if ($(e).val() !== $(".samepassword2-validation").val()) {
                                valid = false;
                            }

                        }

                        if (componentObj.customValidations !== undefined) {
                            for (var key in componentObj.customValidations) {
                                if ($(e).hasClass(componentObj.customValidations[key].class)) {
                                    if (!componentObj.customValidations[key].validation(e)) {
                                        valid = false;
                                    }
                                }
                            }
                        }

                        if (!valid) {
                            if (componentObj.parentContainer) {
                                $(e).parent().addClass(componentObj.errorClass);
                            } else {
                                $(e).addClass(componentObj.errorClass);
                            }

                            switch (componentObj.theme) {
                                case "materialize":
                                {
                                    Materialize.toast($(e).data().content, 3000, 'rounded');
                                    break;
                                }
                                case "bootstrap":
                                {
                                    $(e).popover("show");
                                    break;
                                }
                                default:
                                {
                                    alert($(e).data().content);
                                    break;
                                }
                            }

                            $("html, body").animate({scrollTop: $(e).offset().top - 105}, 500, function () {
                                //$(e).focus();
                            });
                            return valid;
                        }

                    });

                    return valid;
                },
                isEmail: function (email) {
                    var patternMail = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
                    if (!patternMail.test(email)) {
                        return false;
                    }
                    return true;
                },
                isDomain: function (domain) {
                    var patternDomain = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/);
                    return domain.match(patternDomain);
                },
                isText: function (name) {
                    if (name === "")
                        return false;
                    var patternName = new RegExp(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/);
                    if (!patternName.test(name)) {
                        return false;
                    }
                    return true;
                },
                isAlphaNumeric: function (name) {
                    if (name === "")
                        return false;
                    var patternName = new RegExp(/^[a-z0-9]+$/i);
                    if (!patternName.test(name)) {
                        return false;
                    }
                    return true;
                },
                isPhone: function (phone) {
                    var patternPhone = new RegExp(/^[0-9]+$/);
                    if (!patternPhone.test(phone) || phone.length < 10) {
                        return false;
                    }
                    return true;
                },
                isCP: function (cp) {
                    var patternCP = new RegExp(/^[0-9]+$/);
                    if ((!patternCP.test(cp)) || cp.length != 5) {
                        return false;
                    }
                    return true;
                },
                isDate: function (date) {
                    var patternDate = new RegExp(/[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/);
                    if ((!patternDate.test(date))) {
                        return false;
                    }
                    return true;
                },
                isRFC: function (rfcStr) {

                    var strCorrecta;
                    if (rfcStr.length == 12)
                    {
                        strCorrecta = ' ' + rfcStr;
                    } else
                    {
                        strCorrecta = rfcStr;
                    }
                    var valid = '^(([A-Z]|[a-z]|\s){1})(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
                    var validRfc = new RegExp(valid);
                    var matchArray = strCorrecta.match(validRfc);
                    if (matchArray == null) {
                        return false;
                    } else
                    {
                        return true;
                    }

                    return true;
                },
                isClabe: function (clabe) {
                    var patternPhone = new RegExp(/^[0-9]+$/);
                    if (!patternPhone.test(clabe) || clabe.length != 18) {
                        return false;
                    }
                    return true;
                },
                isNumeric: function (n) {
                    return !isNaN(parseFloat(n)) && isFinite(n);
                },
                isPassword: function (password) {
                    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
                    return re.test(password);
                    if (password.length < 8) {
                        return false;
                    }
                    return true;
                },
                isAddress: function (addr) {
                    var patternAddress = new RegExp(/^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ\-().,# ]+$/);
                    if (!patternAddress.test(addr)) {
                        return false;
                    }
                    return true;
                },
                isCVV: function (cvv) {
                    var patternCVV = new RegExp(/^[0-9]+$/);
                    if (!patternCVV.test(cvv) || cvv.length < 3 || cvv.length > 4) {
                        return false;
                    }
                    return true;
                },
                isSerie: function (serie) {
                    if (serie.length == 17) {
                        if (componentObj.methods.isNumeric(serie.substr(-4))) {
                            return true;
                        }
                    }
                    return false;
                },
                isCVVuser: function (cvv) {
                    var patternCVV = new RegExp(/^[A-Z0-9-]+$/);
                    if (!patternCVV.test(cvv) || cvv.length < 3 || cvv.length > 4) {
                        return false;
                    }
                    return true;
                },
                cc_expiryMonth: function (d) {
                    if ((d > 12) || (d <= 0)) {
                        return false;
                    }
                    return true;
                },
                cc_expiryYear: function (d) {
                    if (d !== "") {
                        if (d < new Date().getFullYear() - 2000) {
                            return false;
                        }
                    } else
                        return false;

                    return true;
                },
                isURL: function (url) {
                    var regex = /^(ht|f)tps?:\/\/\w+([\.\-\w]+)?\.([a-z]{2,4}|travel)(:\d{2,5})?(\/.*)?$/i;
                    return regex.test(url);
                }

            }
        };
        return componentObj;
    };
})(jQuery);

