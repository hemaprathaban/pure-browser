/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Interval: Time between checks for a new version (in seconds)
pref("app.update.interval", 43200); // 12 hours
// The time interval between the downloading of mar file chunks in the
// background (in seconds)
pref("app.update.download.backgroundInterval", 60);
// Give the user x seconds to react before showing the big UI. default=48 hours
pref("app.update.promptWaitTime", 172800);
// URL user can browse to manually if for some reason all update installation
// attempts fail.
pref("app.update.url.manual", "https://www.mozilla.org/firefox/");
// A default value for the "More information about this update" link
// supplied in the "An update is available" page of the update wizard. 
pref("app.update.url.details", "https://www.mozilla.org/%LOCALE%/firefox/notes");

// The number of days a binary is permitted to be old
// without checking for an update.  This assumes that
// app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 63);

// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=immediately
pref("app.update.badgeWaitTime", 0);

// code usage depends on contracts, please contact the Firefox module owner if you have questions
pref("browser.search.param.yahoo-fr", "moz35");
pref("browser.search.param.yahoo-fr-ja", "mozff");

// Number of usages of the web console or scratchpad.
// If this is less than 5, then pasting code into the web console or scratchpad is disabled
pref("devtools.selfxss.count", 0);
lockPref("startup.homepage_override_url","https://duckduckgo.com");
lockPref("startup.homepage_welcome_url","https://duckduckgo.com");
pref("browser.search.defaultenginename",      "DuckDuckGo");
pref("browser.search.order.1",                "data:text/plain,browser.search.order.1=DuckDuckGo");
pref("browser.search.order.2",                "data:text/plain,browser.search.order.2=DuckDuckGo");
pref("browser.search.order.3",                "data:text/plain,browser.search.order.3=DuckDuckGo");
// Market-specific search defaults (US market only)
pref("browser.search.geoSpecificDefaults", true);
pref("browser.search.defaultenginename.US",      "data:text/plain,browser.search.defaultenginename.US=DuckDuckGo");
pref("browser.search.order.US.1",                "data:text/plain,browser.search.order.US.1=DuckDuckGo");
pref("browser.search.order.US.2",                "data:text/plain,browser.search.order.US.2=DuckDuckGo");
pref("browser.search.order.US.3",                "data:text/plain,browser.search.order.US.3=DuckDuckGo");

pref("datareporting.healthreport.service.firstRun", false);
pref("datareporting.healthreport.service.enabled", false);

pref("browser.search.suggest.enabled", false);
pref("browser.urlbar.suggest.searches", false);
pref("browser.urlbar.userMadeSearchSuggestionsChoice", false);

pref("browser.urlbar.suggest.bookmark", false);
pref("browser.urlbar.suggest.history", false);
pref("browser.urlbar.suggest.history.onlyTyped", false);
pref("browser.urlbar.suggest.openpage", false);
pref("xpinstall.signatures.required",false);

pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.healthreport.infoURL", "https://puri.sm");

