# Execution Settings

In [Worksheets](./worksheets.md) and [Test Suites](./test-suites.md) different execution settings can be defined to control test runs.

## List of execution settings

| Setting name            | Syntax/Unit        | Description                                                                         |
| ----------------------- | ------------------ | ----------------------------------------------------------------------------------- |
| Browser Window Size     | _{width}x{height}_ | The window size of the browser the test will be executed in (e.&nbsp;g. 1920x1080). |
| Case Retries            | -                  | To mitigate test case flakiness, failing test cases can be retried.                 |
| Case Execution Timeout  | ms                 | Timeout after which a test case is marked as failed.                                |
| Action Timeout          | ms                 | How long to wait after a click, double click or key press.                          |
| Maximum Navigation Time | ms                 | The maximum navigation time.                                                        |
| Assertion Timeout       | ms                 | Timeout after which an assertion will be marked as failed.                          |
| Worksheet Timeout       | min                | Timeout after which the execution of this worksheet will be stopped.                |

## Precedence of execution settings

If a setting is defined on an upper level, it takes priority.

1. _Run Test_ settings or Test Suite
2. Worksheet settings
3. Global settings (defined in [_Administration > Settings_](./administration.md#settings))

Additionally, timeouts can be overridden for individual steps using the _Timeout_ setting.
When set, they will take priority over _Assertion Timeout_ for assertion steps, and _Action Timeout_ for all other steps where timeouts can be defined.
