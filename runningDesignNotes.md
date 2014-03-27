##Running design notes

Perishable uses .group as .container

    .group {
      width: 90%;
      max-width: 1400px;
      margin: 0 auto;
      position: relative;
    }

This is more akin to how I'm used to styling page layout, as opposed to the method I've been reading recently where fundamental page layout blocks are sized in em or rem. (see @mdo's [code-guide](http://mdo.github.io/code-guide), [wtfhtmlcss](http://wtfhtmlcss.com), and [table-grid](http://mdo.github.io/table-grid))

I think I'll use this (implement a .container) as a way to stay comfortable while treading into new territory with newly-learned (responsive) design approaches.

- - -

I won't put padding on `<body>` like @mdo often does, so that I can have something go full screen width if needed. What I will do then, is create some sort of container class with a particular width % or with margins in rem that gets applied to nearly all divisions. 

My hunch at this early part is that I will instantiate some `.row` class (like `.grid`, but called what makes sense to me (because in my thinking, "grid" represents the entire layout system, whereas "row" sets up the horizontal setting, and "col" represents the particular placement within that horizontal setting)) that will go inside each `.container`, and the inside the `.row` will go some `.col`.
