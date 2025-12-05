import Zalando from "./assets/zalando.png";
import eu_health from "./assets/eu_health.png";
import Santander from "./assets/santander.png";

export const WEBSITES = {
  ZALANDO: "zalando",
  EU_HEALTH: "eu_health",
  SANTANDER: "santander",
};

// ----------------------------------------------------------------------
// NEW DYNAMIC CONTENT CONSTANT
// Content is defined with <strong> tags for emphasis as used in the UI.
// ----------------------------------------------------------------------
export const DYNAMIC_CONTENT = {
  [WEBSITES.ZALANDO]: {
    Essential: {
      on: ["<strong>Required to process your purchases</strong> and maintain your shopping cart.", "Enables basic site features like <strong>login and navigation</strong>."],
      off: ["WARNING: <strong>Your shopping cart will not function.</strong>", "You will be unable to <strong>log in or complete orders.</strong>"],
    },
    Analytics: {
      on: ["We use this data to <strong>understand popular products and improve app performance.</strong>", "Helps us <strong>optimize loading speeds and layout.</strong>"],
      off: ["We won't be able to offer you the best, fastest shopping experience.", "Internal <strong>product performance metrics will be reduced.</strong>"],
    },
    Tracking: {
      on: ["Allows <strong>personalized recommendations across your devices</strong> (mobile, desktop).", "<strong>Synchronizes your wish list and browsing history.</strong>"],
      off: ["Recommendations may be generic and based on general trends only.", "<strong>Wish lists and history will not sync between devices.</strong>"],
    },
    Marketing: {
      on: ["Enables <strong>personalized product ads and exclusive offers</strong> tailored to your style.", "Supports <strong>free returns and other customer benefits.</strong>"],
      off: ["Ads will be <strong>non-personalized and generic.</strong>", "You may <strong>miss out on limited-time promotional offers.</strong>"],
    },
  },
  [WEBSITES.EU_HEALTH]: {
    Essential: {
      on: ["Required for <strong>secure login to patient portals</strong> and managing appointments.", "Ensures compliance with <strong>basic data privacy regulations.</strong>"],
      off: ["WARNING: <strong>Access to personal health records will be denied.</strong>", "<strong>Appointment scheduling features will be inaccessible.</strong>"],
    },
    Analytics: {
      on: ["Used for internal development to <strong>improve article readability and site navigation.</strong>", "Helps public health officials <strong>track content engagement.</strong>"],
      off: ["The site content and search will not be optimized for user experience.", "We lose data on <strong>common information needs for public policy.</strong>"],
    },
    Tracking: {
      on: ["Allows you to <strong>continue reading long articles seamlessly across devices.</strong>", "<strong>Remembers language preferences across devices.</strong>"],
      off: ["<strong>Content state will not be saved</strong> when you switch devices.", "<strong>Language settings may revert on new devices.</strong>"],
    },
    Marketing: {
      on: ["Enables <strong>informational bulletins and health-related awareness campaigns.</strong>", "Supports <strong>distribution of public health announcements.</strong>"],
      off: ["You will not receive <strong>targeted information on relevant health topics.</strong>", "Public service announcement delivery <strong>may be delayed.</strong>"],
    },
  },
  [WEBSITES.SANTANDER]: {
    Essential: {
      on: ["Critical for <strong>secure online banking sessions and transaction validation.</strong>", "Required for <strong>fraud prevention and regulatory compliance.</strong>"],
      off: ["WARNING: <strong>Online account access will be blocked for security reasons.</strong>", "<strong>Transactions cannot be securely authenticated.</strong>"],
    },
    Analytics: {
      on: ["Used to <strong>optimize the banking dashboard layout and feature accessibility.</strong>", "Helps us <strong>debug platform errors and ensure uptime.</strong>"],
      off: ["You may experience slower loading times and non-optimized interfaces.", "Internal <strong>error logging and performance monitoring will be limited.</strong>"],
    },
    Tracking: {
      on: ["Allows <strong>easy sign-in across your banking app and web portal.</strong>", "Provides <strong>personalized security alerts based on device history.</strong>"],
      off: ["You may need to <strong>re-authenticate frequently on different devices.</strong>", "Security features relying on <strong>cross-device history will be disabled.</strong>"],
    },
    Marketing: {
      on: ["Enables <strong>targeted offers on mortgages, loans, and investment products.</strong>", "Supports <strong>financial education resources.</strong>"],
      off: ["You will only see <strong>general advertisements for bank products.</strong>", "We won't be able to inform you of <strong>tailored opportunities.</strong>"],
    },
  },
};
// ----------------------------------------------------------------------


export const DESIGN_APPROACH = {
  INFORMATIVE: "informative" 
}

export const EVENT_TYPES = {
  // --- Page-level ---
  PAGE_VIEW: "page_view",
  PAGE_RELOADED: "page_reloaded",
  PAGE_LOADED: "page_loaded",
  NEXT_PAGE: "next_page",
  PAGE_TOO_SMALL: "page_too_small",
  VALIDATION_FAILED: "validation_failed",

  // --- CMP lifecycle ---
  CMP_SHOWN: "cmp_shown",
  CMP_CLOSED: "cmp_closed",

  // --- Consent choices ---
  CMP_ACCEPT: "cmp_accept",
  CMP_REJECT: "cmp_reject",
  CMP_SAVE_PREFERENCES: "cmp_save_preferences",
  CHOICE_AUTOMATION_OVERRIDDEN: "choice_automation_overridden",

  // --- Interactions ---
  CLICK: "click",
  BUTTON_CLICK: "button_click",
  TOGGLE_ON: "toggle_on",
  TOGGLE_OFF: "toggle_off",
  PANEL_OPEN: "panel_open",
  PANEL_CLOSE: "panel_close",
  LINK_CLICK: "link_click",
  SCROLL: "scroll",

  // --- Feedback ---
  FEEDBACK_SHOWN: "feedback_shown",
  NOTIFICATION_SHOWN: "notification_shown",
  NOTIFICATION_CLICK: "notification_click",

  // --- History system ---
  HISTORY_ITEM_UPDATE: "history_item_update",
  HISTORY_PANEL_OPEN: "history_panel_open",
  HISTORY_PANEL_CLOSE: "history_panel_close",

  // --- Session-level ---
  SESSION_STARTED: "session_started",
  SESSION_ENDED: "session_ended",
};

export const EVENT_TARGETS = {
  // --- CMP structural targets ---
  CMP_FIRST_LAYER: "cmp_first_layer",
  CMP_SECOND_LAYER: "cmp_second_layer",

  // --- Buttons ---
  BTN_ACCEPT_ALL: "btn_accept_all",
  BTN_REJECT_ALL: "btn_reject_all",
  BTN_MORE_OPTIONS: "btn_more_options",
  BTN_SAVE_CUSTOM: "btn_save_custom",
  BTN_CLOSE_CMP: "btn_close_cmp",
  BTN_BACK: "btn_back",

  // --- Toggles ---
  TOGGLE_NECESSARY: "toggle_necessary",
  TOGGLE_TRACKING: "toggle_tracking",
  TOGGLE_ANALYTICS: "toggle_analytics",
  TOGGLE_MARKETING: "toggle_marketing",

  // --- Links ---
  LINK_PRIVACY_POLICY: "link_privacy_policy",
  LINK_FEEDBACK_VENDORS: "link_feedback_vendors",
  LINK_FEEDBACK_CATEGORIES: "link_feedback_categories",

  // --- Notifications ---
  NOTIFICATION_AUTO_HANDLED: "notification_auto_handled",
  BTN_OPEN_CMP_FROM_NOTIFICATION: "btn_open_cmp_from_notification",

  // --- Global default dialog ---
  CHECKBOX_USE_AS_DEFAULT: "checkbox_use_as_default",
  DIALOG_CONFIRM_GLOBAL_DEFAULT: "dialog_confirm_global_default",
  BTN_CONFIRM_GLOBAL_DEFAULT: "btn_confirm_global_default",
  BTN_CANCEL_GLOBAL_DEFAULT: "btn_cancel_global_default",

  // --- Feedback summary ---
  BAR_FEEDBACK_SUMMARY: "bar_feedback_summary",
  TEXT_FEEDBACK_SUMMARY: "text_feedback_summary",

  // --- Consent history ---
  ICON_CONSENT_HISTORY: "icon_consent_history",
  PANEL_CONSENT_HISTORY: "panel_consent_history",
  HISTORY_LIST_SITES: "history_list_sites",
  HISTORY_ITEM_SITE: "history_item_site",
  HISTORY_ITEM_CATEGORY_TOGGLE: "history_item_category_toggle",
  BTN_HISTORY_SAVE_CHANGES: "btn_history_save_changes",
  BTN_HISTORY_DISCARD_CHANGES: "btn_history_discard_changes",

  // --- Your additional targets ---
  OUTSIDE_CMP: "outside_cmp",
  NEXT_BUTTON: "next_button",

  // --- Page/system targets ---
  WINDOW: "window",
  DOCUMENT: "document",
};

export const META = {
  SESSION_ID: "session_id",
  ORDER: "order",
  STEP: "timestamp",
  SHOW_CMP: "show_cmp",
  SESSION_STARTED: "sessionStarted",
  SESSION_ENDED: "sessionEnded",
}

export const PAGES = [
  { id: 0, image: Zalando, name: WEBSITES.ZALANDO },
  { id: 1, image: eu_health, name: WEBSITES.EU_HEALTH },
  { id: 2, image: Santander, name: WEBSITES.SANTANDER }, 
];