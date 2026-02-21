# Zendo Game Cards

## Goal

Create a simple website (smartphone friendly) that can be used to generate Zendo game cards. 

## Requirements

- The website should support english and spanish, using spanish as the default language. It should be very easy to alternate between the two languages. There is no plan to support more languages in the future, so keep it as simple as possible.
- The website is going to be hosted in GitHub as GitHub pages
- The entrypoint to the website is the page where we can generate new Zendo cards. The user will be able to choose a difficulty level, click on a button and a new card will be generated randomly. All generated cards by the user and he will be able to navigate between them in case he wants to see previous cards. The cards will be rendered beautifully, ideally with graphical depictions of the rules. There are three levels of difficulty: easy, medium, difficult. Tipycally when playing zendo the user can make some selections on each card, however on this website the selections will be done randomly, so it will only show the final rule.
- There will also be a page with the rules

## Motivation

Zendo is no longer available for sell. Neither there is an spanish version. This website could be useful for Zendo owners which cards are damaged or that want to play with spanish people.

## Local run

```bash
python3 -m http.server 8000
```