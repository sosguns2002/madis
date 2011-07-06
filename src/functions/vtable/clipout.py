"""
.. function:: clipout([h:0], query:None)

Writes to clipboard the output of *query*. The clipboard contents will be tab delimited.

:header option:

    if an 'h' or h:1 option is found then it also exports the schema of the query.

:Returned table schema:
    - *return_value* int
        Boolean value 1 indicating success. On failure an exception is thrown.

Examples:

    >>> sql("clipout select 5,6")
    return_value
    ------------
    1
"""

import setpath
from vtout import SourceNtoOne
import os
import functions

registered=True

def Clipout(diter, *args, **kargs):
    import lib.pyperclip as clip
    a=[]

    print args, kargs

    exportheader=False

    for i in args:
        if i.startswith('h'):
            exportheader=True

    for i in kargs:
        if i.startswith('h'):
            exportheader=True


    for row,header in diter:
        if exportheader==True:
            a.append(u'\t'.join([unicode(unicode(i[0]).replace('\t','    ')).encode('utf-8', 'replace') for i in header]))
            exportheader=False
        a.append(u'\t'.join([unicode(unicode(i).replace('\t','    ')).encode('utf-8', 'replace') for i in row]))

    if os.name == 'nt':
        clip.setcb(functions.mstr('\n'.join(a)))
    else:
        clip.setcb('\n'.join(a))

def Source():
    return SourceNtoOne(Clipout)

if not ('.' in __name__):
    """
    This is needed to be able to test the function, put it at the end of every
    new function you create
    """
    import sys
    import setpath
    from functions import *
    testfunction()
    if __name__ == "__main__":
        reload(sys)
        sys.setdefaultencoding('utf-8')
        import doctest
        doctest.testmod()