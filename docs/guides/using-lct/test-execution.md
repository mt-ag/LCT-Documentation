---
sidebar_position: 50
---

# Test Execution

## Executing Worksheets

To execute a worksheet manually:

1. Open the worksheet from the _Worksheets_ page.
2. Click on _Run Worksheet_. A dialog opens.
3. Optionally, you can modify the following settings:
    - _Run definition_
        - _Name_: The name of this test run. By default, it has the form _"(Worksheet) - (Date)"_.
        - _Start URL_: This URL will be set as the base URL. It represents the starting point of the application.
        - _Conversion_: The version of the worksheet to execute. Choose _Latest possible_ to create a new version if the worksheet has changed since the last version or to execute the newest one otherwise. Choose the version number if you want to execute a specific version.
        - _Engine_: The browser engine to use.
        - _Execute immediately_: If _Yes_, the worksheet will be run as soon as a test runner is available. If _No_, you can plan the execution for a specific date and time.
        - _Worksheet Variable Set_: You can choose a Variable Set for execution. Keep this setting empty to let LCT choose one randomly.
            - This setting will only be displayed if at least one Variable Set is defined in this worksheet.
            - Read more about [Variables and Variable Sets](../advanced-concepts/variables.mdx).
    - _Execution Settings_
        - Read more about available [execution settings](../advanced-concepts/execution-settings.md).
4. Click on _Run_ to start the test.
    - If you choose not to execute the worksheet immediately, this button changes its text to _Schedule_.

A Queue entry will be created for this execution.
You will be redirected to the Queue page with this entry being selected.

:::note

A Worksheet is able to run if:

1. It is not empty (does have at least one standard case)
2. It does not only consist of deleted standard cases
3. It does not only consist of disabled standard cases
4. Its cases are not all empty (not having any steps)

:::

## Executing Test Suites

Test Suites executions can be triggered manually or by the scheduler at regular intervals.

Read more about [Test Suites](./test-suites.md).

## Inspect the Queue

### _Queue_ grid

The grid contains various columns to facilitate customization.

_General_:

-   Actions
    -   _Execution Details_: Opens a dialog where information about each test case of this run is listed
    -   _Go to Worksheet_: Redirects to the edit page of this worksheet
    -   _Version Details_: Displays the generated Playwright code of the current test version
    -   _Test Files_: Lists all files that were created for or by the test runner
    -   _Rerun test_: Schedules this worksheet for a manual execution
-   Queue ID
    -   The unique number that identifies the Queue entry in the current instance
-   Execution Name
    -   For worksheet executions, the name that was chosen in the _Schedule Test_ dialog. By default, it has the form _"(Worksheet) - (Date)_".
    -   For Test Suite executions, the name has the form _"(Test Suite) - (Worksheet) - (Engine)"_.
-   Worksheet Name
    -   The name of the worksheet being executed
-   Version
    -   The conversion number of the worksheet

_Execution_:

-   Engine
    -   The browser engine used for this test
-   Execution Point
    -   The timestamp when the test was scheduled
-   Status (Icon)
    -   An icon representing the state of this entry
-   Status
    -   _scheduled_: The worksheet is scheduled for execution
    -   _running_: The worksheet is being executed now
    -   _completed_: The execution has finished and results are available
    -   _error_: There was an (technical) error while executing the worksheet
-   Successful/Total Cases
-   Successful Cases
-   Failed Cases
-   Total Cases
-   Test Successful
    -   _Yes_ if all test cases were successful
    -   _No_ if at least one test case has failed
-   Execution Time
    -   The total execution time, in the format `min:sec`
-   Execution Time (Seconds)
    -   The total execution time, in seconds
-   Output Log
    -   Opens the _Output log_ where all test case results and screenshots are displayed. Also, the raw log can be reviewed.
-   Test Suite Name
    -   If this worksheet is executed as a part of a Test Suite run, its name is listed here.

_Audit Values_:

-   Created By
    -   The user which triggered this test. It can be a regular LCT or an API user. If the current entry is added by the Test Suite scheduler, `LCT_TEST_SUITE` is used.
-   Created On
    -   The timestamp when the Queue entry was created. It does not need to match the actual execution time.

We recommend reading the [Use Interactive Grids](https://docs.oracle.com/en/database/oracle/apex/24.2/aeeug/using-interactive-grids-ch.html) section of the Oracle APEX documentation to learn more about Interactive Grid usage and customization.

### Live log

:::note

The live log feature is disabled by default.
To enable, go to _Administration > Settings_ and set _Enable Livelog_ to _Yes_.

Each user can choose to enable or disable the live log individually.
To change this setting, click on your username in the navigation bar and choose _Preferences_.
Now, you can change the _Livelog Enabled_ setting.
Save the changes and reload the page to apply.

:::

The live log shows the output of the test runner in real time.
This will be indicated by a yellow dot in the top right corner.
In this way, you can follow the progress of your worksheet execution.

If the worksheet has finished its execution, no yellow dot is visible, and the raw output log will be displayed.

To choose which log should be displayed, simply select a cell of the corresponding entry in the grid.

### Common _Test Files_ {#common-test-files}

This is a list of files that are generated by the test runner:

| File name                      | Description                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `lct.spec.js`                  | Playwright code generated by the converter                                                                               |
| `lctReporter.js`               | Source code for our [custom Playwright reporter](https://playwright.dev/docs/test-reporters#custom-reporters)            |
| `output.log`                   | The raw output log created by our custom reporter                                                                        |
| `playwright.config.js`         | Contains settings for the test runner, mostly execution settings                                                         |
| `pwUtils.js`                   | Contains functions for interaction with APEX components                                                                  |
| `results.xml`                  | JUnit xml report generated by the [JUnit Playwright reporter](https://playwright.dev/docs/test-reporters#junit-reporter) |
| `screenshots/...`              | Screenshots of _screenshot_ steps                                                                                        |
| `traces/.../test-failed-1.png` | Screenshots automatically created by Playwright if a test fails                                                          |
| `var_utils.js`                 | Contains functions for handling variables                                                                                |
