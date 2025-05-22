# Add Assertions

We recommend adding a lot of assertions to your tests.
Assertions can be used to verify that you are on the right page, that the page contains the right elements, and that the elements contain the right values.

## Fail Fast

Assertions have the benefit of being able to fail fast.
If an assertion fails, the test will stop and the error will be reported.
This is much better than the test continuing and failing later on or when for example the test tries to interact with an element that is not there.

We recommend adding an assertion **after every navigation or redirect** to ensure that you are on the expected page.

## Less Flakiness

Assertions can also help with flakiness.
They slow down the test and give the page time to load.
This can help with flakiness caused by the page not being fully loaded when the test tries to interact with it.

## Available Assertions

| Step type                     | Description                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------ |
| _checkForErrors_              | Checks for various types of errors on the current page.                                    |
| _containsText_                | Checks if a given element's text contains the given text.                                  |
| _hasAttribute_                | Checks if a given element has a given attribute with a given value (optional).             |
| _hasClass_                    | Checks if a given element has one ore more classes.                                        |
| _hasText_                     | Checks if a given element has the given text.                                              |
| _hasValue_                    | Checks if a given element has a value-attribute with the given value.                      |
| _interactiveTableCellHasText_ | Check whether an Interactive Grid/Report cell has a given text or not.                     |
| _isDisabled_                  | Checks if a given element has the "disabled" attribute or is disabled via "aria-disabled". |
| _seeElement_                  | Check if a given element is visible.                                                       |
| _seeInCurrentUrl_             | Check if a given value is present in the current URL.                                      |

:::note

Most assertion steps are listed in the _Assertion_ category.
A few steps are listed in others, for example _interactiveTableCellHasText_ which can be found in the _Interactive Table_ category.

:::
