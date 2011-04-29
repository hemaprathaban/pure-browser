/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

/* General Update Directory Cleanup Tests - Bug 601701 */

function run_test() {
  removeUpdateDirsAndFiles();
  var defaults = getPrefBranch().QueryInterface(AUS_Ci.nsIPrefService).
                 getDefaultBranch(null);
  defaults.setCharPref("app.update.channel", "bogus_channel");

  writeUpdatesToXMLFile(getLocalUpdatesXMLString(""), false);
  var patches = getLocalPatchString(null, null, null, null, null, null,
                                    STATE_PENDING);
  var updates = getLocalUpdateString(patches);
  writeUpdatesToXMLFile(getLocalUpdatesXMLString(updates), true);
  writeVersionFile("99.9");

  startAUS();
  startUpdateManager();

  // Check that there is no activeUpdate first so the updates directory is
  // cleaned before the remaining tests.
  do_check_eq(gUpdateManager.activeUpdate, null);
  do_check_eq(gUpdateManager.updateCount, 0);

  var dir = getCurrentProcessDir();
  dir.append("updates");
  dir.append("0");
  do_check_false(dir.exists());

  cleanUp();
}
