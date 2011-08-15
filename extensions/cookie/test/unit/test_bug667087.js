/* Any copyright is dedicated to the Public Domain.
   http://creativecommons.org/publicdomain/zero/1.0/ */

const Cc = Components.classes;
const Ci = Components.interfaces;

function run_test() {
  var cs = Cc["@mozilla.org/cookieService;1"].getService(Ci.nsICookieService);
  var cm = Cc["@mozilla.org/cookiemanager;1"].getService(Ci.nsICookieManager2);
  var ios = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);
  var expiry = (Date.now() + 1000) * 1000;

  // Test our handling of host names with a single character consisting only
  // of a single character
  cm.add("a", "/", "foo", "bar", false, false, true, expiry);
  do_check_eq(cm.countCookiesFromHost("a"), 1);
  do_check_eq(cs.getCookieString(ios.newURI("http://a", null, null), null), "foo=bar");
}
