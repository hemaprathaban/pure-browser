#!/usr/bin/env python

import sys
from time import strptime, gmtime
from ftplib import FTP
from operator import itemgetter

year = gmtime().tm_year

def get_info(line):
    mode, links, owner, group, size, month, day, time, file = line.split()
    date = '%s %s %s' % (month, day, time)
    if ':' in time:
        return file, strptime('%s %d' % (date, year), '%b %d %H:%M %Y')
    else:
        return file, strptime(date, '%b %d %Y')

def main():
    url = sys.argv[1]
    if not url.startswith('ftp://'):
        print >>sys.stderr, 'Expecting an ftp:// url as argument'
    (scheme, _, host, path) = url.split('/', 3)
    ftp = FTP(host)
    ftp.login()
    # Get the most recent .txt file in that ftp directory.
    ftp.cwd(path)
    lines = []
    ftp.retrlines('LIST', lines.append)
    files = [get_info(l) for l in lines]
    files = sorted([(t, f) for f, t in files if f.endswith('.txt')])
    lines = []
    ftp.retrlines('RETR %s' % files[-1][1], lines.append)
    print ' '.join(lines)

if __name__ == '__main__':
    main()
