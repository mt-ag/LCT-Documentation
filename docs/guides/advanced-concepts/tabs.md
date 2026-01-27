# Tabs

Tests are executed in a browser that allows multiple tabs.

## Open new browser tabs

When executing a Worksheet, each test case starts in a single browser with a single tab.
To open new tabs, use the _click_ or _clickInteractiveTableCell_ step with _Opens new tab_ set to _Yes_ to perform a click action that causes a new tab to be opened.
For example, this can be a link with the `target="_blank"` attribute or a button that triggered it via JavaScript.
The step will wait for the tab to be opened.
If no tab opens within the _Action timeout_, the test will fail.

:::info

We implemented a custom tab handling in LCT.
Tabs that were opened without using the _Opens new tab_ option will open in the background but will **not** be registered.
Therefore, it can not be made active by the _switchTab_ step, neither the action timeout will be checked.

:::

## Navigate between browser tabs

To switch tabs, use the _switchTab_ step:

-   Choose _First_ to switch to the initial browser tab. This is the tab where the test execution started.
-   Choose _Latest_ to switch to the most recent opened tab. Usually this option is used after a _click_ step that opened it.
-   Choose _By Index_ to choose a specific tab. See the next section about tab indexing.

If no tab exists at the specified index, an error occurs and the current test case aborts.

Attempting to perform any action on a closed tab will cause an error and aborts the current test case.
This test will be marked as failed.

:::note

When using the _switchTab_ step, the context will be reset to the page level.
If you want to perform an action on a dialog page or another _iframe_, add a _switchContext_ step after switching tabs.

:::

## About tab indexing

Tabs are indexed by non-negative integers that start at 0 for the initial browser tab and increase by 1 for each new tab registered by LCT.
In this way, each tab is identified by a unique number that does not change when any tab closes.

Tab indexing will be reset for each test case.
