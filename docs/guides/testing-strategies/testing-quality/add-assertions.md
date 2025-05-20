# Add Assertions

We recommend adding a lot of assertions to your tests. Assertions can be used to verify that you are on the right page, that the page contains the right elements, and that the elements contain the right values.

## Fail Fast

Assertions have the benifit of being able to fail fast. If an assertion fails, the test will stop and the error will be reported. This is much better than the test continuing and failing later on when when for example the test tries to interact with an element that is not there.

We recommend adding an assertion **after every navigation or redirect** to ensure that you are on the expected page.

## Less Flakiness

Assertions can also help with flakiness. They slow down the test and give the page time to load. This can help with flakiness caused by the page not being fully loaded when the test tries to interact with it.

## Available Assertions
