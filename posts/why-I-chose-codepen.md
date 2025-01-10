---
title: 'Why I chose Codepen Pro over Copilot'
date: '2023-09-18'
updated: '2023-09-18'
categories:
  - 'webdev'
  - 'AI'
coverImage: https://media.istockphoto.com/id/1296110471/photo/woman-hiking-and-going-camping-in-nature.jpg?s=612x612&w=0&k=20&c=MzjTBdwL0GMadIW6THkJ_o5_Roj83xvBweFPKNDoRPM=
coverWidth: 16
coverHeight: 9
excerpt: With limited funds to spend on tools to assist me in writing code I am presenting my case for choosing CodePen Pro over Github Copilot.

author: 'Jon Ellwood'
postSlug: 'why-choose-codepen-over-copilot'
featured: true
draft: false
---

$10 a month. I'd say the cost of a cup of coffee per day .... but more like 1/10th of the cost of Venti Caffe Mocha per day. (_And yes, I had to look that up_)

## The Thought Process

**Note:** Please see full disclaimer at end of this post regarding content. The TLDR: Everything here is my opinion, I try to be as accurate as possible but I am a human, I make mistakes - please do not use this information as a sole source in making business decisions, or any decisions really. Thanks.

It is nearly impossible to listen to a web dev podcast right now and not hear about "AI". In the podcasts I listen to those talks inevitable lead to talking about [Github's Copilot](https://github.com/features/copilot) product. Github graciously offers a free trial, as of the time of this writing they offer a 30-day free trial, and after hearing both good and bad feedback about the product (_mostly good_) I decided to give it a go. At the end of the trial, I decided to go a different route.

## My environment

**Some context regarding my experiences**

I work as a full-time developer for a government agency. I have been developing professionally for a little less than a year now, and as a hobby and on the side for about 4 years now. At work I primarily work in PHP, MySQL and SQL as well as dabble in AWS Lambda written using Python. Outside of work I am a big believer in the fundamentals of web development and using HTML, CSS, and JavaScript to accomplish my goals.

_I have also recently become a **HUGE** fan of AstroJS. Not 100% relevant here maybe - but anytime I can talk good about AstroJS I am going to._

Due to nature of the department where I work I am often working on several projects at once and, at times, have to swap out my JavaScript brain for my Python brain and then put on my PHP shorts for a swim. Therefore, the thought of having "my little coding buddy" that lived in my VSCode was appealing to me.

## My experience with Copilot

In a nutshell, Copilot is awesome! I could write a comment like:

```
//Function to evaluate user input that uses Regex
to ensure it matches the correct format

```

and then wait a few seconds and am presented with this:

```
    function  isValidSSN(ssn) {
        var pattern = /^\d{3}-\d{2}-\d{4}$/;
        return pattern.test(email);
    }
```

That's pretty cool. Especially given how much I dislike writing Regex because admittedly I just don't know them well enough to enjoy it. (_By the way I didn't use the code above and have no clue if it is correct - just saying_). Now I could just as easily gotten this from [Stack Overflow,](https://stackoverflow.com/) [GeeksforGeeks](https://www.geeksforgeeks.org/), or a handful of other sites, but this is happening in my little VS Code world and I don't need to open a browser window to do it. I don't need to sift through several posts and read a bunch of comments about "better" ways to do it .. which for me can be real time killer. Once I start clicking on links to "learn more" ... well let's just say I can lose half a day that way.

I also really enjoy the feeling that the code suggestion is created for me specifically. All mine to use until I decide to share it with the world.

Then I started to notice that when I stopped to think, or scratch my leg, or take a sip if coffee - that depending on where my cursor was Copilot would take that pause as an indication that it was time to suggest code. So, where I may have typed

```
    async function getOrdersByDepartment(dep, status) {

    }
```

and then stopped to scratch my nose Copilot might suggest 15-20 lines of code, based on previous functions in the code base I think, that were totally wrong and not relevant to what I was doing. And that's okay, I am not perfect so I cannot expect it to be perfect - unless I hit `tab` or `enter` in error and inserted the code I did not want it's no harm done. And if I hit the wrong key, well that is on me. I did, however, find it to be a little disorienting and _very_ distracting. I found myself disabling Copilot when I needed to _really_ think through how to approach something. Which is kind of the opposite of what I wanted from my Little Coding Buddy.

I will say if I was doing something repetitive, such as looping over an array and returning each value how and where I needed it, Copilot was great at suggesting exactly what I needed. It was essentially "autocomplete" for stuff I knew - but was just a pain to type out. What I was expecting was something more akin this scenario:

I am looping over an array and returning line after line of

```
html += '<td>' + data[i].id + '</td>';

```

and my little coding buddy would pop up (like [Clippy](https://en.wikipedia.org/wiki/Office_Assistant) maybe from Office) and say "Hey Jon! You're doing great work! And have you lost weight?.... looking good - but also if you just did a `.map` function over that array you could produce more performant code in 35 less lines of code. Something like that.

I then started to notice that when Copliot was active I started to feel pressured to not stop typing to avoid the code suggestions from popping up. I was literally racing my coding environment and would even feel my pulse increase a bit... kind of a weird side effect I guess - but there it is.

Overall, I will say when the code suggestions were relevant to what I was doing, they were spot on and I can absolutely say that I was able to code faster overall. I further suspect that if our codebase used React or Vue or any kind of framework versus bespoke functions I would probably have seen a lot more value at that start.

**_So how did CodePen come into this?_**

Like most of devAmerica I listen to the [Shop Talk Show](https://shoptalkshow.com/) regularly and I am a fan of both [Dave Rupert](https://daverupert.com/) and [Chris Coyier](https://chriscoyier.net/). I have also used [CodePen](https://codepen.io/jonellwood) on a free account for several years.

I will acknowledge that CodePen and Copilot are two different products, and it might seem odd to be comparing the two - but the commonality for me is that my budget only allows for one of them to get my money each month.

## What factors I weighed

While out for a run one day my mind wandered as it is prone to do during the two hours I am out and about. I starting thinking about Copilot and what I liked and what I didn't like. Copilot, for me, was good at auto completing lines of code for me - but did not alter the way I wrote code and does not improve what I was writing. Due to the nature of the product, I suppose it was good at giving me code that I or someone else wrote, or a variation thereof that matched more or less what I was doing. And that is okay, let's be honest, I am not creating anything that hasn't already been done in some way. I'm not changing the coding landscape here - I am turning letters, numbers, and symbols into text and pictures in a browser. (_And having a damn good time doing it_) But overall, the value Copilot brought was just me typing less - but producing essentially the same product as before.

When I am stuck on something, or I have an idea in my head that is not fully matured, or I have a concept, but I am not 100% sure where it needs to go - I head straight to CodePen and look for ideas. And yes, I have lost half a day browsing through pens and seeing all the amazing ways other people have solved a similar issue ... _and probably 20 other cools things as well_ ... I always find the creativity inspiring. And that, at the end of the day, was the deciding factor for me.

<mark>While Copilot could give me code, it never sparked any ideas. It could suggest ways to accomplish what I <b><i>thought</i></b> I wanted - but on many an occasion, CodePen has taken a spark of an idea and ignited it into a full-fledged feature.</mark>

💬 CodePen is where I go to get inspired.

<cite>- Me</cite>

Oh, one more thing, and this like all of this post is just my opinion, but if I am going to give money to a company and thereby publicly support them.. CodePen is what, 10-15 people? Maybe more, maybe less - I really don't know and Microsoft has 7,500 + employees? 10,000? I am just saying I think my $10 would go further supporting a smaller developer owned business than a big 'ol Microsoft. Not that either company is going to succeed or fail from my $10 a month mind you - but I feel better about supporting a small business.
