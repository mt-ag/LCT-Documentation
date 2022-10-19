# Navigation

Navigate to a specific page in your application.

## Usage

Select your desired Application and Page from the dropdowns. After that make sure to press the refresh button to generate the URL path:

![Docs Version Dropdown](./img/navigation-refresh-path.png)

:::tip

We recommend to assert that a navigation was succesfull by adding an assertion. For example add a **seeElement** step after the navigation step and check that a page specific h1 or region header is visible.

:::

## Keep current user session

As you may know the default APEX behaviour is to log out the user when changing the URL without keeping the session parameter.

If you **don't** want this to happen just set `Append Session ID` to `Yes`. This will automatically append the session parameter to the URL.
