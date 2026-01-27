---
sidebar_position: 60
---

# Test Suites

Test Suites are collections of Worksheets that can be scheduled for repeating execution with different settings.

## Create a Test Suite

To create a new Test Suite:

1. Open the _Test Suites_ page via the navigation list.
2. Click on _+ Add Test Suite_.
3. Enter the name of the new Test Suite. Optionally, you can provide a description.
4. Click on _Create_. The Test Suite will be created and added to the table.
    - Alternatively, you can click on _Create and go to test suite_ to open the edit page directly.

## Add Worksheets to Test Suites

Any number of worksheets can be added to Test Suites.

To add a worksheet to a Test Suite:

1. Open the Test Suite where you want to add a worksheet.
2. In the _Worksheets_ grid, click on _+ Add Worksheet_.
3. Define the following properties:
    - _Execution Order_: Worksheets will be executed in ascending order
    - _Worksheet_: The worksheet to execute
    - _Engine_: The browser engine to use
    - _Description_: An optional description
4. Save your changes by clicking _Save_.
5. If you want to specify execution settings, click on the _Edit_ button in the row. In the dialog, you can edit the different values. To apply the changes, click on _Save_.
    - Read more about [execution settings](../advanced-concepts/execution-settings.md)

You can repeat steps 2 and 3 to add multiple worksheet entries at once.

## Schedule Test Suites

Each Test Suite can be scheduled individually.
As a prerequisite, Test Suites need at least one worksheet added.

To activate a Test Suite and define a scheduling interval:

1. Open the Test Suite
2. Click on _Edit_. A dialog opens.
3. Set _Active_ to _Yes_.
4. Use the _Scheduling Settings_ editor below to set a scheduling interval. You can verify your input by inspecting the _Your Scheduling_ label.
    - Note: All fields except _Interval_ are mandatory.
5. Click on _Save_ to apply your changes.

Active Test Suites will add themselves to the queue automatically.
Now they will be executed regularly according to their defined interval.

To disable your Test Suite, set _Active_ to _No_.
If the Test Suite is executed currently, it will finish its execution, but it will not be rescheduled.

## Execute Test Suites manually

Although Test Suites are designed to be executed on regular intervals, you might want to execute them manually.
You can trigger them via the Actions menu on the Test Suites overview by selecting _Run Test Suite_.
Alternatively, open the Test Suite and click on the _Run Test Suite_ button on the right side.

If the Test Suite is active, the current scheduling will be cancelled and re-added when the manual run is finished.

## Inspect results of Test Suite executions

### _Runs_ tab

All executions of this Test Suite are listed in the _Runs_ grid.
It has the following columns:

-   Details
    -   Opens a dialog which lists all worksheets and test cases and indicates if they succeeded. Also, Test Files can be displayed or downloaded.
-   Outcome
    -   Indicates whether all worksheets finished successfully
-   Success
    -   Number of worksheets that finished successfully
-   Failure
    -   Number of worksheets that resulted in a failure
-   Run Start
    -   The timestamp when the first worksheet started execution
-   Run End
    -   The timestamp when the last worksheet finished execution

### _Insights_ tab

The _Insights_ tab provides multiple diagrams for inspecting trends within recent Test Suite runs:

-   _Worksheets_
    -   The number of successful/failed executions within recent Test Suite runs, grouped by Worksheet and engine
-   _Cases_
    -   The number of successful/failed executions within recent Test Suite runs, grouped by Worksheet, engine and test case
-   _Outcome Trend Worksheets (%)_
    -   The percentage of successful/failed Worksheets within recent Test Suite runs over time
-   _Outcome Trend Cases (%)_
    -   The percentage of successful/failed test cases within recent Test Suite runs over time

Use the _Runs_ dropdown at the top to control how many of the most recent Test Suite runs will be considered.

## Receive emails with Test Suite results

:::info

Email notifications are disabled by default.
To enable this feature, go to _Administration > Settings_ and set _Enable/Disable Email notification_ to _Yes_.

:::

Email notifications are managed per Test Suite.
To add an email address for notifications within a Test Suite:

1. Open the _Email Settings_ tab.
2. Click on _+ Add Email Setting_.
3. In the first column, enter the email addresses of the users that shall receive notifications.
4. In the second column, select one of the following options:
    - Choose _Yes_ to receive an email only if a Test Suite run finishes with at least one error.
    - Choose _No_ to receive an email each time a Test Suite run finishes.
5. Apply your changes with _Save_.

You can repeat steps 2 to 4 to add multiple email addresses at once.
