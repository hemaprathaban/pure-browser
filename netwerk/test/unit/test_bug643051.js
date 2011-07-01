const Cc = Components.classes;
const Ci = Components.interfaces;

function run_test() {
  let cs = Cc["@mozilla.org/cookieService;1"].getService(Ci.nsICookieService);
  let ios = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);

  let uri = ios.newURI("http://example.org/", null, null);

  let set = "foo=bar\nbaz=foo";
  let expected = "foo=bar; baz=foo";
  cs.setCookieStringFromHttp(uri, null, null, set, null, null);

  let actual = cs.getCookieStringFromHttp(uri, null, null);
  do_check_eq(actual, expected);

  uri = ios.newURI("http://example.com/", null, null);
  cs.setCookieString(uri, null, set, null);

  expected = "foo=bar";
  actual = cs.getCookieString(uri, null, null);
  do_check_eq(actual, expected);
}

