# Faterator
Faterator uses JavaScript to generate you a Fate Accelerated character.

| Faterator Readme |
|---|
| [Getting Started](#getting-started) |
| [Built With](#built-with) |
| [Contributing Code](#contributing-code)  |
| [Contributing Content](#contributing-new-content)  |
| [Versioning](#versioning) |
| [Authors](#authors)  |
| [License](#license) |

## Getting Started
If you want a local copy of Faterator, just fork the repository, and set this up in a folder somewhere on your computer, then open the index.html file in any browser.

## Built With
* JavaScript
* CSS
* [Short Guid Generator](http://www.shortguid.com/#/guid/uid-64)
* HTML
* [Visual Studio Code](https://code.visualstudio.com/)
* Google Chrome

## Contributing Code
Have a look at the [issues with Faterator](https://github.com/evangipson/faterator/issues), and create a pull request containing your code so it can be reviewed be merged into the source!

I will run all new javascript through [JSHint](http://jshint.com/) before merging into master.

## Contributing New Content
When contributing either types of aspects, different stunts, or syllables for names - you just need to edit the [data javascript file](https://github.com/evangipson/faterator/blob/master/js/data.js). Don't worry if you haven't seen javascript before! The format of the data is easy to grasp. For instance, let's say we want to add the potential aspect. First we search (ctrl+F/cmd+F) for:
```javascript
fateratorModule.DATA.aspects =
```
What is this? The "fateratorModule" is the module which houses all of our data and functions for the Faterator! "DATA" is the data object containing all the aspects, treasures, names within the fateratorModule; "aspects" is the data representation for parts of the aspect generator.

You'll notice "beliefs" is the first section under the "fateratorModule.DATA.aspects = " line. Let's break that down:
```javascript
// Player beliefs
"beliefs" : [
    {
        "value" : "The only good " + fateratorModule.createFantasyName() + " is a dead one",
        "guid": "CwgGBAkLCAo"
    },
```
The "value" is the meat of the belief-based aspect. The "guid" is a *global unique identifier*, and it's used to build the URL that saves your Faterator characters. We're also using a *function* here - fateratorModule.createFantasyName(). More on that below in the [Functions Available section](#functions-available-for-content-creation).

If you'd like to find your own guid with your content, you can use this [short guid generator](http://www.shortguid.com/#/guid/uid-64); make sure to search data.js with your new guid before submitting the new content!

If you'd like to just submit a text list to me using the [Faterator's issue system](https://github.com/evangipson/faterator/issues), that's fine too!

### Functions Available for Content Creation
- fateratorModule.createFantasyName()
  - This function will yield you one name.
- fateratorModule.createFullName()
  - This function will yield you two names with a space in the middle.
- fateratorModule.createTreasureName()
  - This function will generate you a treasure name, usually in the form ADJECTIVE NOUN. You can contribute to both by augmenting the fateratorModule.DATA.treasures.adjective and fateratorModule.DATA.treasures.noun objects.

## Versioning
Faterator is maintained using a 3-digit versioning system, represented by:
```
[Major Version].[Minor Version].[Update]
```
For instance, the first stable build of Faterator is [1.0.0](https://github.com/evangipson/faterator/releases/tag/1.0.0).

## Authors
* **Evan Gipson** - *[Evan's Website](https://evangipson.com/)*

## License
This project is licensed under the MIT License.
```
Copyright (c) 2016 EVAN GIPSON

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
