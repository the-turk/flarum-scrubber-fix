import { extend, override } from 'flarum/extend';
import app from 'flarum/app';
import DiscussionPage from 'flarum/components/DiscussionPage';

app.initializers.add('the-turk-scrubber-fix', () => {
  extend(DiscussionPage.prototype, 'config', function (element, isInitialized, context) {
    if (isInitialized) return;

    var initialScrubberBottom = '';
    const footerHeight = $(".scrubberFix").outerHeight(true);
    const bottomApp = parseInt($(".App--discussion").css("padding-bottom"));
    const $scrollParent = $(window);

  	const scrollHandler = () => {
      const $leftNavi = this.$(".DiscussionPage-nav > ul");
      var scrollBottom = $(document).height() - $scrollParent.height() - $scrollParent.scrollTop();
      if (!initialScrubberBottom) initialScrubberBottom = parseInt($leftNavi.css("bottom"));

      if (scrollBottom + initialScrubberBottom <= footerHeight + bottomApp) {
        $leftNavi.css("position", "absolute");
        $leftNavi.css("bottom", bottomApp);
      } else {
        $leftNavi.css("position", "fixed");
        $leftNavi.css("bottom", initialScrubberBottom);
      }
  	};

    $scrollParent.on('scroll', scrollHandler);

    context.onunload = () => {
       $scrollParent.off('scroll', scrollHandler);
    };
  });
});
