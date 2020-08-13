# Resilience App Landing Page

Welcome to the contributing documentation for the Resilience App Landing Page.
If you are reading this, there is a high chance you are interested in contributing to this project! If that is correct, you are in the right place.

## :deciduous_tree: Forks and Branching model

We work off of Main / Fork repository model. Before you get started, you should [fork](https://github.com/factn/resilience-landing-page/fork) the project from the main repository and then **clone** the project to your machine.

While working with the Main / Fork repository model, you may find the following article extremely helpful for keeping your fork up to date and submitting pull requests, [GitHub-Forking](https://gist.github.com/Chaser324/ce0505fbed06b947d962).

Once you have cloned your fork, you are ready to get set up.

While working locally, you will want to create a branch to track your work. Our branch naming should try to follow the following pattern:

```
<type>/<issue-number>[-short-description]
docs/123-update-readme
feat/242-add-route
bug/63-fix-broken-link
```

Pull requests can be sent against our default branch, currently `master`.

You will want to have a short description in the **Pull Request title** and as much detail to help a reviewer understand waht is being requested in the **Pull Request Description**.

Including a reference to the issue number being worked on is an incredible help and will also trigger some automated tasks after your pull request is reviewed and merged.

Here is an example of a pull request:

```
Title:
Fix navigation bar

Description:
Fixes #63
This pull request fixes a broken link on the navigation bar.
The old link was pointing to /blogs and it is corrected to point to /stories
```

Netlify will generate a preview link that the reviewer can use to visually see the changes on a live preview instance!

## :rocket: Picking an issue to work on

We use [Zenhub](https://zenhub.com)! If you want to keep track of what we are working on, install the extension or check out our [board](https://app.zenhub.com/workspaces/resilience-landing-page-5ec02cd17e863d549ee7e760/board?repos=254070780). Most of our **Backlog** issues are ready to be worked on.

Comment on the issue! If you find an issue that you want to try to help out with, just comment on the issue! "I would like to work on this!" and someone will have the issue assigned to you and moved to in progress. Because we are an open source--volunteer-led--organization, we only ask for volunteers to commit the time that they can to helping us out. If you find yourself unable to finish the issue for any reason, it would be greatly appreciated if you just let us know and we can move the ticket back to the backlog.

## :star: Commit message standards

With so many people helping us out, we have so much experience being brought in to this project. To try and keep things organized, we have looked at [commitizen](http://commitizen.github.io/cz-cli/) to help set some standards for our commit messages.

The commit messages are very simple! Commitizen has already provided a set of industry standard lingo to help us write meaningful commit messages.

Sample commit messages will look something like this:

```
feat(about.js): Update content on about page
bug(home): Fix bug where image on home page did not render
docs(README): Fix typo in readme
```

Do not worry! There's an app for that!

You can download [cz-cli](http://commitizen.github.io/cz-cli/) globally and use `git cz` to start the commit prompt on any commitizen friendly project!

We have also made it easy by adding in a commit script that you can run with NPM!

```
npm run commit
```

Or for global installations

```
git cz
```

## :heart_decoration: Code of Conduct

We make a serious effort to ensure that this project remains safe and inclusive of all.

Read more [here](https://github.com/factn/resilience-app/blob/master/CODE_OF_CONDUCT.md)
