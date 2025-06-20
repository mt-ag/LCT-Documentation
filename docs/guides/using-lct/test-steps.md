---
sidebar_position: 40
---

# Test Steps

Steps are the individual actions that the test runner will perform on the tested web applications.

Test cases require at least one (enabled) step to be included in a test run.
There is no limit of steps that can be added to an test case.

## Types of steps

There are many different types of steps that can be added to test cases.

We provide the following categories:

| Category             | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| Assertion            | Check different conditions on the page                       |
| Context Change       | Switch between frames and tabs                               |
| Documentation        | Document the current state of the page                       |
| External             | Make requests to external endpoints                          |
| Files                | Handle files within applications                             |
| Interactive Table    | Interact with _Interactive Grids_ and _Interactive Reports_  |
| Keyboard Interaction | Interact with the page using the keyboard                    |
| Mouse Interaction    | Interact with the page using the mouse                       |
| Variables            | Store and use variables                                      |
| Visibility           | Check visibility of differerent elements                     |
| Waiting              | Wait for the page itself or elements to be ready for testing |

## Add new steps to test cases

To add a new step to an existing test case:

1. Open the Worksheet
2. Choose the test case from the list on the left
3. Click on the _+ Add Step_ button on the grid toolbar
4. Choose a step to add to the case
5. Fill the parameters for the step and confirm with _Create_

The step will be created and added to the step table.
If the execution sequence was not set in the dialog, a value will be chosen automatically which puts the step at the end.

## Add steps via wizard and template {#step-via-wizard}

Similar to adding test cases via our pre-defined templates, you can add steps directly to an existing case:
Open the case within the worksheet where the steps should be added.
Then, click on _Add Steps via Template_ on the toolbar of the steps grid.
Now choose the template you want to use for generating steps and fill the required values.
After confirming, the steps are added to the test case.

:::note

Steps created by the wizard will be added below all existing steps, if any.

:::

## Manage order of step execution

The order of performing steps within test cases are controlled by the _Execution sequence_ option.
Steps with a lower value will be executed first.

Steps can be rearranged using the _Move Up_ and _Move Down_ buttons the top of the table.
When clicking on these buttons, all selected steps move one entry towards the top or bottom respectively.

We recommend to use multiples of 10 for execution sequences to make adding steps between existing steps easier.
You can use the _Resequence Steps_ button of the table toolbar to reassign execution sequences of all steps according to this convention, beginning with the value 10.
Alternatively, execution sequences can be edited directly in the grid or in the _Edit_ dialog of each step.
When changing values in the grid, changes must be saved using the _Save_ button in order to be applied.

:::note

LCT does not enforce unique execution sequences to make editing test cases easiser.
But steps with identical sequences can be executed in any order which causes test runs to be non-deterministic.
Therefore we recommend to ensure unique execution sequences for steps when designing tests.

:::

## Exclude steps from execution

While building and debugging worksheets, it can be useful to exclude specific steps from execution.
This can be accomplished by disabling them by using the _Enable/Disable_ option in the Actions menu or by setting the value in the _Enabled_ column to _No_.
Changes to the state of steps must be saved using the _Save_ button of the steps table.

## Note about timeouts in complex steps

LCT provides steps to handle APEX-specific components.
Interacting with some of them require multiple actions.
For example, the _selectPopupLovValue_ step clicks on the Popup LOV to focus it, types the search string and finally clicks on the result.
The timeout setting of these steps (or the _Action timeout_ if not explicitly set) applies to _all individual actions_ rather than to the whole step.
