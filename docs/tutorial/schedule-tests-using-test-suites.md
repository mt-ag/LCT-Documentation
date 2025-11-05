---
sidebar_position: 30
---

# Schedule tests using Test Suites

Now we have an application that is covered by tests.

Usually, applications evolve over time.
We want to check if these still work in the future.
Therefore we want to execute the tests on a regular basis.
_Test Suites_ provide exactly this functionality.

## Create the Test Suite

First, we need to navigate to the _Test Suite_ page.
It can be opened via the navigation menu on the left.

Then, we can add a new Test Suite:

1. On the table, click on _+ Add Test Suite_. A dialog opens.
2. Enter _Sample Test Suite_ as the name.
3. Click on _Create and go to test suite_.

The Test Suite will now be created and you will be redirected to the edit screen.
On the top, information about the Test Suite itself can be reviewed and edited.
On the bottom, the _Worksheet_ tab is active and shows an empty table.

## Add Worksheets to your Test Suite

Now, let's add our Worksheet to the newly created Test Suite:

1. On the table, click on _+ Add Worksheet_ to create a new entry.
2. Enter 10 into the column _Execution Order_.
3. Select the _Sample Interactive Grids_ worksheet from the list in the _Worksheet_ column.
4. Select _Firefox_ from the list in the _Engine_ column.
5. Click on _Save_ to apply your changes.

It is even possible to add the same Test Suite multiple times.
This enables testing with different browsers.

Add another row using the steps above but now enter the execution order 20 and choose _Chromium_ from the engine list.
When a Test Suite is being executed, Worksheets will be run one after another.
The order is defined by the _execution order_ where entries with lower value will be executed first.

## Run the test manually

To test our configuration, we can start a manual execution of our Test Suite.

Click on the _Run Test Suite_ button on the right to start the Test Suite execution.
The first worksheet will be enqueued and you will be redirected to the _Queue_ page.

Now you can see your Worksheet added in the context of this Test Suite execution.
Note the name of our Test Suite prepended to the Worksheet name in the _Execution Name_ column.

## Inspect Test Suite results

After a moment, both Worksheet runs are finished, which you can confirm by inspecting the table on the Queue page.
It lists our Worksheet with both configurations in the context of this Test Suite.

When the last Worksheet has been executed, a Test Suite execution will be marked as finished and its results are available.
Open the Test Suite again and select the _Runs_ tab.
This table shows our Test Suite run with a positive outcome.
Also, we can confirm the number of succeeded and failed Worksheets in the columns _Success_ and _Failed_.
The particular Worksheets entries, their execution times and Test Files can be reviewed in the _Test Suite Run Details_ dialog which can be opened via the icon in the column _Details_.

## Set a scheduling interval

Now we want the Test Suite to be executed on a regular basis.
For example, we can configure a daily run at 05:00 AM.

In the heading information of the Test Suite, click on _Edit_.
The _Edit Test Suite_ dialog will open.

Set the following settings and confirm with _Save_:

-   Active: _Yes_
-   Scheduling Settings
    -   Frequency: _Daily_
    -   Execution Time: _Exact Time_
    -   By Hour: _05_
    -   By Minute: _00_

That is all we need to do.
You can confirm that the Test Suite is scheduled by opening the Queue page.
There is an entry starting with the name of the Test Suite whose status is scheduled, depicted with a clock icon.
If you want to stop regular execution later, simply set the _Active_ setting to _No_.

Now you know the basics of LCT and are ready to test your own APEX applications.
Happy testing!
