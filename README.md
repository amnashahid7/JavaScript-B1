Lec#1{
    1. Introducation{
        JavaScript can "display" data in different ways:
        1.Writing into an HTML element, using innerHTML.
        2.Writing into the HTML output using document.write().
        3.Writing into an alert box, using window.alert().
        4.Writing into the browser console, using console.log().
    }
   2.JavaScript Variables{
    When to Use var, let, or const?
    1. Always declare variables
    2. Always use const if the value should not be changed
    3. Always use const if the type should not be changed (Arrays and Objects)
    4. Only use let if you can't use const
    5. Only use var if you MUST support old browsers.
   }
   3.JavaScript Identifiers{
    All JavaScript variables must be identified with unique names.

    These unique names are called identifiers.

    Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

    The general rules for constructing names for variables (unique identifiers) are:

    Names can contain letters, digits, underscores, and dollar signs.
    Names must begin with a letter.
    Names can also begin with $ and _ (but we will not use it in this tutorial).
    Names are case sensitive (y and Y are different variables).
    Reserved words (like JavaScript keywords) cannot be used as names.
   }
   4.JavaScript Variables{
    var
    const
    let=>
    {let x = 2;} // x can NOT be used here(block scope only), let can not be redeclared.
    With let you can not do this:
    let x = "John Doe";
    let x = 0;
    {var x = 2;} // x can  be used here(global scope)

    var x = 10;
    // Here x is 10

{var x = 2;// Here x is 2}
    // Here x is 2
   }
   5.JavaScript Data Types{

   }

}