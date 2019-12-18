# Let's make some jazzy transitions

We have starter code for a personal website and we want to make some minor changes. This 21st century experience shows off our love of both hogs *and* [haiku](https://en.wikipedia.org/wiki/Haiku)!

Naturally, this website is to impress our friends and family, and we really want it to shine.

The application, as it is, has no transitions between the different screens and we want to add some flashiness to our site, (but we also want them to be subtle - there can be no tackiness where hogs are concerned). The transitions should add to the user experience, but not distract from the main focus: educating others on the things we love about hogs.


---

## What we have

Open `index.html` in Chrome to take a look! Not much is working at the moment though :(. That's where you come in!

## What we would like in the end

<div align="center">
  <img src="sample-solution.gif" style="width: 50%">
</div>


---
## Deliverables

> This code challenge should be worked on **without pairing, seeking review from other developers, sharing results with others who are taking the challenge, etc.**!

> We have designed the challenge to be completable within two hours, but please take as much or as little time as you like. If you go beyond two hours and would like to end, please feel free to send us what you have completed and provide an explanation of what you would have done, had you more time.

- [ ] Complete all **Feature Deliverables** listed below
- [ ] Provide a clean, organized, and readable git history. It will be reviewed!
- [ ] When completing this feature, imagine other developers will build upon the work you did. Your implementation should be easy to understand, extend, and alter.
- [ ] While you do not need to complete the **Feature Deliverables** in the order provided below, the order may help keep your architecture and code clean. They also make for good commit boundaries (i.e. one commit per deliverable), but that is entirely up to you
- [ ] Please remove any and all personal identifying information from the code/readme. Our engineers will be reviewing the code blindly (don't worry about any personally identifying information in git though!)


--
## Feature Deliverables
(all deliverables requested have been implemented in the sample-solution.gif)!
when an element that transitions the user to another page is clicked:
  - [x] all elements on the screen should fade out (this has been provided!)
  - [x] all elements on the screen should transition upwards while they fade out (this has been provided!)
  - [ ] all elements on the screen should fade out at (relatively) different times within a small window (it's no problem if, rarely, some elements happen to fade out at exactly the same time)
  - [ ] the clicked element should **always** be the last thing on screen to fade out (but only by a little)
  - [ ] all elements on the new view should fade in (currently, only for the `GitHub` link has this been partially provided with elements that instantly appear)
  - [ ] all elements on the new view should transition downwards as they fade in
  - [ ] all elements on the new view should fade in at (relatively) different times within a small window (its no problem if, rarely, some elements happen to fade out at exactly the same time)

(Keep in mind: nothing should start fading in until the old page elements have faded out completely and are no longer clickable)

In order to get you started - we have provided all of the css animations you should require in the `style.css` file.
All images required (including some slightly terrifying images of hogs and anonymous people) have been provided and are available in the `/assets` directory.


---
## FAQ
**Q**: Should I fork the repo  
**A**: Please _do not fork the repo_. This prevents others from seeing your fork and potential solution. You can of course clone it!

**Q**: What if I would like to store it on my GitHub  
**A**: No problem! If you would like to store the repo on your GitHub, make a new **private** repo and push this code into it.

**Q**: How do I submit the code challenge?  
**A**: **Please do not make a PR to the repo as it will be visible by others.** Please do one of the following:
 - Zip the repository and send it to webdev.ospin@gmail.com
 - Zip and host the repository somewhere in a cloud provider (e.g. Google Drive) and send a link to webdev.ospin@gmail.com
 - If you are able to privately host it on a GitHub account. Please invite GitHub user `ospin-webapp` as a collaborator and let us know when you are finished!

**Q:** May I use dependencies not currently listed?  
**A:** For this code challenge please do not use any additional dependencies

**Q:** What if I have additional questions about the feature/user experience?  
**A:** First and foremost, if it is not blocking to your completion of the code challenge, feel free to list any assumptions you need to make in the discussion section of the README below. Otherwise, reach out directly if you have any questions that feel are blocking to the completion of this code challenge.


---
## Discussion

> Please use this space to share your thoughts! How did you go about solving this? Why did you go with the solution you did? Do you have alternative solutions in mind?

> If the deliverables were unclear, please list any and all assumptions made when implementing this feature.

> Please let us know if you have thoughts on how we can improve this code challenge.

> If you have further questions/comments, this is the place!

```
      __,---.__
   ,-'         `-.__
 &/   Truffle  `._\ _\
 /    Shuffle    ''._
 |   ,             (")
 |__,'`-..--|__|--''
```
