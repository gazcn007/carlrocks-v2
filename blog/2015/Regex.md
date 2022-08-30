---
title: Regex
date: 2015-11-19 23:02:09
tags: [Fun Stuff]
---


# Character Class / Characet Set

- Denoted by `[]`
- [ae] -> matches an 'a' and an 'e', _not multiple_:
	- i.e. gr[ae]y will match `grey` and `gray`
- [a-z] -> hyphen specifies a range of characters:
	- i.e. [0-9] matches a single digit
	- i.e.2 [a-f] matches a char in a-f
- [a-z0-9A-F] -> groups of hyphen specifies a group of ranges
- q[^x] -> caret _after openning bracket_ **negates** the character class:
	- i.e. q[^X] matches `qu` in `question`
	- i.e. must write it at the front of a class/set

<!--truncate-->

## Shorthand Character Classes
- `\d` matches a single digit == [0-9]
- `\w` mathces a "work character" (alphanumeric characters plus underscore)
- `\s` matches a whitespace character (includes tabs and line breaks)

_the shorthand character class is software depended_

## Non-Printable Characters

- `\t` == tab
- `\r` == carriage return
- `\n` == new line
- `\a` == bell
- `\e` == escape
- `\f` == form feed
- `\v` == vertical tab
- `\r\n` == windows new line
- Unicode:
	- `\uFFFF` or `\x{FFFF}` 

## Dot
- `.` matches any char, except line break (depends on software and mode - single line mode includes line breaks)

# Anchors
- `^` matches at the start of the string / line break:
	- `^g` for `gary` will match `g` 
- `$` matches at the end of the string / line break:
	- `y$` for `gary` will match `y`
- `\b` matches at a position that is called a "word boundary". This match is zero-length:
	- `\b5\b` will match `5` in `5 555 55`

# Alternation
- `|` matches `cat` and `dog` in `About cats and dogs`
- `(|)` can group multiple:
	- in `cat food or dog food`, `(cat|dog) food` will match both `cat food` and `dog food`

# Repetition
- `?` means the preceding token in the regular expression optional:
	- for `carl and carol`, `caro?l` will match both `carl` and `carol`  
- `*` means the preceding token in the regular expression appears 0 or more
 	- for `carl, carol and carool`, `caro*l` will match both `carl`, `carol`  and `carool`
- `+` means the preceding token in the regular expression appears 1 or more
 	- for `carl, carol and carool`, `caro+l` will match both `carol`  and `carool`
	- ***_usecase_***:
	- Matching HTML tags without any attributes:
	- <[A-Za-z0-9]+> is a bad implementation, becase <1> will be matched
	- <[A-Za-z][A-Za-z0-9]*> is a good implemenation
- `{}` specifies a specific amount of repetition:
	- `\b[1-9][0-9]{3}\b` matches a number between 1000 and 9999
	- `\b[1-9][0-9]{2,4}\b` matches a number between 100 and 99999

## Greedy/Lazy Quantifiers ✨
- repetition operators or quantifiers are greedy, they will expand as much as possible in general:
	- `<.+>` matches `<html> apsdpdapdapjaid </html>` in `blablabla <html> apsdpdapdapjaid <html> balabla`
- but if they need to satisfy the remainder of the regex, they will expand to a certain depth:
	- `<.+?>` matches `<html>` and `</html>` in `blablabla <html> apsdpdapdapjaid <html> balabla`
- another solution, use negation:
	- `<[^<>]+>` will do the same job 

# Backreferences:
- `\1` refers to first capturing group:
	- `([abc])=\1` can match `a=a`,`b=b`,`c=c`
- `\2` `\3` are all referring to the indexed capturing group

## Name groups:
- use `(?<groupname>)` and `\k<groupname>` to call and refer previously declared groups

# Lookaround:
- `q(?=u)` is positive lookahead:
	- it matches the `q` in `question`, but not in `Iraq`.
- `q(?!u)` is negative look ahead:
	- it matches the `q` in `Iraq` but not in `questions`
- `(?<=a)b` is positive look backwards:
	- it matches the `b` in `abc`
- `(?<!a)b` is negative look backwards:
	- it doesn't match the `b` in `abc`, but matches the `b` in `cbc`
	- Best example: how to include whole directory except `./node_modules/`
		- `^(?!.*node_modules).*.js`
			- `^` means starting of the line
			- `(?!` -> negative look ahead (from the start of the line
			- `.*node_mudoles` -> match all files that has node_modules in thier directory string
			- `.*.js` all js files

# Mac Specific
- Mac Terminal uses BRE [link](https://en.wikibooks.org/wiki/Regular_Expressions/POSIX_Basic_Regular_Expressions)
	- must add `\` in front of brackets
	- ! doesn't support lookaround [link](https://stackoverflow.com/questions/9197814/regex-lookahead-for-not-followed-by-in-grep)
