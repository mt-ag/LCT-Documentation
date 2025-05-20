---
slug: /
sidebar_position: 1
---

# Introduction

## What is LCT?

> "Low Code Testing for Low Code Applications"

LCT is a __frontend testing solution__ for __Oracle APEX Applications__. As Oracle APEX itself allows for the creation of powerful web-applications without much effort, LCT aims to do the same for the creation, execution and evaluation of frontend tests. This is achieved for example by using the __Metadata__ of the application under test in order to facilitate the interaction with page elements or the fact that LCT itself is an APEX application, making working with it especially easy for APEX developers.

## Core Features

* Easy test creation, __no coding required__
* Tailored to Oracle APEX Applications, easy testing of Oracle APEX Standard Components:
  * Popup LOVs
  * Interactive Report/Grid
  * Modal Dialogs (`iframe`s)
  * and much more
* __State-of-the-Art Frontend Testing__ through the use of __Playwright__ as test execution engine
  * Built in measures to reduce __Flakiness__
  * Multi-Browser Testing
    * Chromium (used by Chrome, Edge, etc.)
    * Firefox
    * WebKit (used by Safari)
  * Extensive debugging capabilities
* Repetitive scheduling of test runs through [Test Suites](guides/using-lct/test-suites.md)
* Email notifications of test results
