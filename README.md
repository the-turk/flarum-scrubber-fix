For: https://discuss.flarum.org/d/21808-scrubber-not-hiding-and-going-above-the-footer

Prevent scrubber from going above the footer.

**Before:**

![Before](https://i.ibb.co/QHp8YYb/scrubber-before.png)

**After:**

![After](https://i.ibb.co/sC7mvBk/scrubber-after.png)

**Usage:** Just enable the extension and add `scrubberFix` class into footer container.

**Assumptions:**
- `.App--discussion` has no `margin-bottom` value (`padding-bottom` can be used)
- `.DiscussionPage-nav > ul` has no custom `bottom` value
