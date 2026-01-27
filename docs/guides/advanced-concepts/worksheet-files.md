# Worksheet Files

In many use cases, files are uploaded within applications.
The _Worksheet Files_ feature reflects file actions within tests.

## Upload Worksheet Files

To add new files for usage in test cases:

1. From the test case page, click on the _Worksheet Files_ button. The _Worksheet Files_ page will open.
2. On the toolbar of the table, click the _+ Add File_ button.
3. Choose a file using the file browser.
4. The file name will be inserted into the text box below. Disallowed characters are removed automatically. Optionally you may choose a new file name.
    - This is the filename which is used to save the file in LCT. Use this name to refer to your files in test cases.
    - Allowed characters: upper and lowercase letters (`A-Z`, `a-z`), numbers (`0-9`), space (` `), minus (`-`), underscore (`_`) and dot (`.`)
5. Click on _Create_. Now the file will be uploaded and can be used in test cases. You can navigate back by using the _Back_ button of your browser or by clicking on the Worksheet name on the breadcrumb.

There can not exist multiple files of the same name within a Worksheet.
All Worksheet Files of a worksheet will be made available to all test cases.

## Use Worksheet Files in Test Cases

To select one or multiple files, add an _setInputFiles_ step:

1. On the test case page, click on _+ Add Step_.
2. Choose the _setInputFiles_ step from the list.
3. Enter a name for your new step.
4. Select your element using the dropdowns or enter a custom selector.
5. Depending on the element, select one or more files from the _File_ dropdown.
    - If you leave this field empty, then the file picker will be cleared during test execution, removing any files previously selected.
6. Confirm your input by clicking on _Create_. Now the step will be created.

:::note

We automatically determine whether a _File Browse_ Page Item is set to accept multiple files based on APEX metadata.
In the edit dialog of the _setInputFiles_ step the input selector also allows one or multiple files.
If a custom selector is used, we cannot retrieve this property and allow multiple files.
Please note that adding multiple files will not work during test execution if the element is not a `multiple` file selector.

:::

## Edit Worksheet Files

To edit previously added files:

1. From the test case page, click on the _Worksheet Files_ button. The _Worksheet Files_ page will open.
2. Click on the _Edit_ symbol of the corresponding file.
3. If you want to replace the content of the file, use the file browser to select a new file. If you do not choose a file, the existing content will not be changed.
4. If you want to rename the file, enter a new file name.
5. Click on _Apply changes_ to save your changes.

:::note

Choosing a new file name updates all references in _setInputFiles_ steps of the current Worksheet.

:::

## Delete Worksheet Files

To delete a Worksheet File, open the edit dialog and click the _Delete_ button. After confirming, the file will be removed.

:::danger

Deleting Worksheet Files is irreversible!

If a Worksheet File is deleted, all references in _setInputFiles_ steps will be cleared. The steps themselves will not be deleted.

:::

## Download Worksheet Files

To download files, click on the _Download_ button in the row of the file you want to retrieve.
