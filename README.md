# materialize-validation
This plugin makes *easier* to implement front-end validation using Materializecss, Bootstrap or even without a framework.

### Implementation

1.  Download materialize
2.  Add a reference to the jQuery library.
    ```
    <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
    ```
    
3.  Below the reference to jQuery, add a reference to the materialvalidation script.
    ```
    <script type="text/javascript" src="js/materialize.js"></script>
    ```
    
4.  On the page, add a form. Then add a validation-class for every input and (optionally) a data-content message.
    ```
      <form id="form" novalidate>
           <input type="text" data-validation="text" data-content="Name field is empty" >
           <input type="email" data-validation="email" data-content="Email format is invalid">
           <input type="password" data-validation="password"  data-content="Password must have at leas one digit">
           <button type="submit">Validate</button>
      </form>
    ```
    
5.  Initialize materialize on the form .
    ```
    $("#form").materialvalidation();
    ```
6.  On submit, check the entire form before handling the request.
    
    ```
    $("#form").submit(function(){
        if($(this).data().materialvalidation.methods.validate()){
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
| customvalidationons | [] | array[{"class":"val1", "validation":function}] | Set a custom validation and attatch it to a class name. |

### Validator Classes
##### text
The content is purely text.
##### select
If the elemet is a non-empty select.
##### empty
The content is empty.
##### alphanumeric
The content has letters and digits.
##### numericonly
The content has only digits.
##### numericorempty
The content is empty or has digits.
##### date
The content is a valid date [YYYY-mm-dd].
##### phone
The content is a phone number.
##### email
The content is a valid email.
##### address
The content is an Address.
##### zip
The content is a valid Zip Code.
##### password
The content has at least 8 characters, 1 Digit, 1 Uppercase character and 1 special character.
##### url
The content is a valid URL.
##### domain
The content is a valid internet domain.
##### rfc
The content is a valid Mexican Tax ID.
##### samepassword, samepassword2
Field 1 and Field 2 are the same.

License
----

MIT

