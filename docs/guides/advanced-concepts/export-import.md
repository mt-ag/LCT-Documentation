# Export and Import Worksheets

From time to time, you might want to export Worksheets.
This could be for various reasons:

-   Adding exports to a version control system
-   Saving a local backup before making significant changes to a Worksheet
-   Reinstalling LCT on another machine

The _Import/Export_ page can be opened using the corresponding entry of the navigation menu.

## Export worksheets

To export worksheets, select them on the table on the left side.
Then click on _Export Selected_.
A dialog with a preview of the file will be displayed.
Now you can either copy the contents to the clipboard or download the export as a JSON file using the buttons on the bottom.

:::info

The exported file contains:

-   Worksheet information
    -   Base data (except Tags)
    -   Worksheet Execution Settings
-   Test cases
-   Test steps
-   Worksheet Variables

The enabling state of test cases and steps will be preserved.

---

The exported file does **not** contain:

-   Deleted test cases
-   Worksheet Files
-   Worksheet Tags assigned to the Worksheet

:::

## Import worksheets

To import worksheets, use the file picker on the right side to choose a previously exported file.
Alternatively, paste the JSON into the textbox below.
Then click on _Import_.
Each Worksheet included in the file will be imported.
If there are existing Worksheets that have the same name of a worksheet in the JSON file, a number will be appended to the name of the imported one.

:::note

The maximum size of the uploaded file can be changed in _Administration > Settings_ by changing the value of _Max File Size of Import File_.

:::
