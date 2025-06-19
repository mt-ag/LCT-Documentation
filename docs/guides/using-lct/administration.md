---
sidebar_position: 100
---

# Administration

## Tag Management

On this page, you can freely add, edit and delete Worksheet Tags.
Optionally, you can provide descriptions to your tags.
Both the name and the description will be visible in the _Edit Worksheet_ dialog.

:::danger

Deleting Tags is irreversible.
If a tag is deleted, it will be removed from all Worksheets.

:::

## Settings

Settings are divided into four categories:

-   Email notification
-   Execution
-   LCT Application
-   Security

In the edit dialogs, the default value will always be visible in case you need to reset a setting.

## Backend and Logger Logs

For debugging purposes, LCT performs detailed logging.

-   _Backend Logs_ include logging messages from the Node backend server.
-   _Logger Logs_ include logging messages from the database.
    -   Note: LCT uses the [OraOpenSource Logger](https://github.com/OraOpenSource/Logger) framework and uses its `logger_logs` table to render the page.

## Deleted Worksheets and Test Suites

LCT implements a soft-deletion mechanism for all Worksheets and Test Suites.
When deleting a Worksheet or Test Suite, it will be moved to the _Deleted Worksheets_ or _Deleted Test Suites_ page respectively and will not be available for editing.
To restore one element, navigate to the corresponding page and use the _Restore_ entry from the Actions menu.

:::note

Before restoring, make sure that there is no active Worksheet or Test Suite with the same name.

:::
