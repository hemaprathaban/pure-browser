var EXPORTED_SYMBOLS = ["CrashTestUtils"];

let CrashTestUtils = {
  // These will be defined using ctypes APIs below.
  crash: null,
  lockDir: null,
  dumpHasStream: null,

  // Constants for crash()
  // Keep these in sync with nsTestCrasher.cpp!
  CRASH_INVALID_POINTER_DEREF: 0,
  CRASH_PURE_VIRTUAL_CALL:     1,
  CRASH_RUNTIMEABORT:          2,

  // Constants for dumpHasStream()
  // From google_breakpad/common/minidump_format.h
  MD_THREAD_LIST_STREAM:       3,
  MD_MEMORY_INFO_LIST_STREAM:  16
};

// Grab APIs from the testcrasher shared library
Components.utils.import("resource://gre/modules/ctypes.jsm");
let dir = __LOCATION__.parent;
let file = dir.clone();
file.append(ctypes.libraryName("testcrasher"));
let lib = ctypes.open(file.path);
CrashTestUtils.crash = lib.declare("Crash",
                                   ctypes.default_abi,
                                   ctypes.void_t,
                                   ctypes.int16_t);

CrashTestUtils.lockDir = lib.declare("LockDir",
                                     ctypes.default_abi,
                                     ctypes.voidptr_t,   // nsILocalFile*
                                     ctypes.voidptr_t);  // nsISupports*


CrashTestUtils.dumpHasStream = lib.declare("DumpHasStream",
                                           ctypes.default_abi,
                                           ctypes.bool,
                                           ctypes.char.ptr,
                                           ctypes.uint32_t);
