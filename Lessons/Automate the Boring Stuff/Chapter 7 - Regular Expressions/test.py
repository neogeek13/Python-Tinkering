import re

beginsWithHello = re.compile(r'^Hello world')

text = beginsWithHello.findall('Hello world!')
#<_sre.SRE_Match object; span=(0, 5), match='Hello'>
print(text)



g_strip_regex = re.compile(r'[^(^\s)(\s$)]')
namesRegex = re.compile(r'Agent \w+')
namesRegex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.')
#'CENSORED gave the secret documents to CENSORED.'