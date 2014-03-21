with open('data.txt') as f:
    print "["
    for l in f.readlines():
        if l != '\n':
            term, defn = l.split('- ')
            print '{"term": "%s", "definition": "%s"},' % (term,defn[:-1].replace("\"", "'"))
    print "]"        
