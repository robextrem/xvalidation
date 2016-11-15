# jquery-validati
This plugin makes *easier* to implement front-end validation using Materializecss, Bootstrap or even without a framework.

### Implementation

1.  Download jquery-validati
2.  Add a reference to the jQuery library.
    ```
    <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
    ```
    
3.  Below the reference to jQuery, add a reference to the validati script.
    ```
    <script type="text/javascript" src="js/jquery.validati.js"></script>
    ```
    
4.  On the page, add a form. Then add a validation-class for every input and (optionally) a data-content message.
    ```
      <form id="form" novalidate>
                    <input type="text" class="text-validation" data-content="Name field is empty" >
                    <input type="email" class="email-validation" data-content="Email format is invalid">
                    <input type="password" class="password-validation"  data-content="Password must have at leas one digit">
                    <button type="submit">Validate</button>
      </form>
    ```
    
5.  Initialize Validati on the form .
    ```
    $("#form").Validati();
    ```
6.  On submit, check the entire form before handling the request.
    
    ```
    $("#form").submit(function(){
        if($(this).data().Validati.methods.validate()){
            // your code
        }
        return false;
    });
    ```
    
### Plugin Options

| Option | Default | Format | Description|
| ------ | ------- | ------- | ---------- |
| theme| bootstrap  | bootstrap/materialize/none | The front-end framework. Materializecss and Bootstrap 3 are currently supported. |
| defaultText| Invalid Format | string | The default notice text when any input field is not valid.  |
| errorClass| error | string | Class name for highlighting errors. |
| parentContainer| false | true/false | If set, the div parent will be highlighted insted of the current field. |
| customValidations | [] | array[{"class":"val1", "validation":function}] | Set a custom validation and attatch it to a class-validation name. |

### Validator Classes
##### text-validation
The content is purely text.
##### select-validation
If the elemet is a non-empty select.
##### empty-validation
The content is empty.
##### alphanumeric-validation
The content has letters and digits.
##### numericonly-validation
The content has only digits.
##### numericorempty-validation
The content is empty or has digits.
##### date-validation
The content is a valid date [YYYY-mm-dd].
##### phone-validation
The content is a phone number.
##### email-validation
The content is a valid email.
##### address-validation
The content is a Address.
##### zip-validation
The content is a valid Zip Code.
##### password-validation
The content has at least 8 characters, 1 Digit, 1 Uppercase character and 1 special character.
##### url-validation
The content is a valid URL.
##### domain-validation
The content is a valid internet domain.
##### rfc-validation
The content is a valid Mexican Tax ID.
##### samepassword-validation, samepassword2-validation
Field 1 and Field 2 are the same.

License
----

MIT

