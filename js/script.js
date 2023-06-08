import SoftScroll from "../js/modules/scroll.js";
import initAnimedScroll from "./modules/animed_scroll.js";

const softScroll = new SoftScroll('.js-menu a[href^="#"]');
softScroll.init();
initAnimedScroll();
