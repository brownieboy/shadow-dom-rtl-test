# Shadow DOM RTL Test
> A small demo of issues with Material UI's floating label when used by an element in the Shadow DOM.

The specific issue that I was having was this one https://github.com/material-components/material-components-web-components/issues/858 in the material-components-web-components libary.  Going through that issue, I realised that I didn't really understand how CSS and HTML attributes interact with other (or don't) when the Shadow DOM is involved.  So I set up this repo as a stripped-back set of examples of how it works.


## Installation

There are no libraries and no build process here.  Once you've cloned the repo, just open the index.html in your browser.   You may want to use a local server for that, such as `serve`.

```sh
npm install -g server
serve -s -p 8082
```

Now point your browser at [localhost:8082](localhost:8082).


## Usage and Findings

The two radio buttons at the top of the page will swap between LTR and RTL by setting the `dir` prop at the page's <body> tag label.  You can see how the various examples either work or don't work in their reponse to that `dir` prop.

What I found was that he browser will handle most RTL issues just fine if left to its own devices.  Trying to force the RTL issue using CSS will often not work with the Shadow DOM.   This is for two reasons:

1. HTML inside the Shadow DOM cannot see CSS classes set outside of that Shadow DOM.
1. CSS inside the Shadow DOM cannot see attributes set outside of that Shadow DOM (e.g the `dir` prop).

You can see how in the Web Component (Shadow DOM) example, my Floating label stays left, even in RTL mode.  This is despite my adding `[dir="rtl"]` selector code inside of its Shadow DOM.  The CSS there doesn't work because it can't see the `dir` prop that was set outside of its Shadow DOM (i.e. in the page's `<body>` tag).

The issue with Material's floating label is that it is using CSS absolute positioning to set the left and right positions of that label's <span>.  Absolute positoning is rarely a good idea, IMHO, and is particularly unfriendly to RTL issues.  Whereas a browser will work out that left-aligned text should be right-aligned when it sees a dir=”rtl” attribute somewhere in the DOM, it will not make the same assumption about an absolutely positioned element, i.e. it will not treat left: 16px as if it were right: 16px  just because RTL is set via that dir attribute.

The annoying thing with the Material Floating Label issue is that the absolute left and right positioning wasn’t actually needed there in the first place!   Turning that stuff off allowed the browser to take care of the RTL, and that even works inside the Shadow DOM (see the last example in the repo).
