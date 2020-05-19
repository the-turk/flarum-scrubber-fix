<?php

/**
 * Scrubber Fix for Flarum.
 *
 * LICENSE: For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 *
 * @package    the-turk/flarum-scrubber-fix
 * @author     Hasan Özbey <hasanoozbey@gmail.com>
 * @copyright  2020
 * @version    Release: 0.1.0
 * @link       https://discuss.flarum.org/d/21808-scrubber-not-hiding-and-going-above-the-footer
 */

namespace TheTurk\ScrubberFix;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
];
