---
slug: /troubleshooting
sidebar_position: 99
---

# Troubleshooting

## Interacting with elements

> I added a step to interact with an element (_click_, _fillField_, _selectPopupLovValue_, etc.) but the step fails.

Try one of the following solutions:

-   **Timeouts:**
    Check if this is caused by a Worksheet or Case Execution Timeout.
    If yes, increase the corresponding timeout and re-run the test.
-   **Visibility:**
    There is a probability that the element is not visible, for example because it is covered by another element.
    To check if the element is actually visible, add a _screenshot_ step just before the failing step, execute the test and inspect the result.
-   **Loading state:**
    Another possible reason is that the page or additional resources (scripts, images etc.) are not fully loaded.
    If you opened the page using the _navigation_ step, set their _Wait Until_ option to _load_.
    Otherwise, add a _waitForLoadState_ step after the step that triggered the last navigation and set _Wait Until_ to _load_.
-   If none of these solutions work, add a _waitForMilliseconds_ step.
    Please only use it as a last resort because over-using this step slows down test execution.

Additionally, we recommend to use [Assertions](./guides/testing-strategies/testing-quality/add-assertions.md), especially after page navigations.
This can help to ensure that all needed page elements are available before continuing to the next step.

## Variables

> My variable `{{XXX}}` does not get replaced in execution.

You most likely have a typo or forgot to add that variable.
Double-check if the variable name on the _Variables_ page matches the reference in the step.
[More info about Variables](guides/advanced-concepts/variables.mdx#what-happens-if-you-mistype-a-variable-name)
