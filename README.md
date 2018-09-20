# hashy-content

A straightforward JQuery plugin that allows you to load content easily through hashes.

### How does it work?

By associating a hash with a respective URL, each time the hash changes, the content is loaded inside a given id.

```
$("#upper-content").addHash("apple", "content/apple.html");
$("#upper-content").addHash("orange", "content/orange.html");
$("#upper-content").addHash("banana", "content/banana.html");
$("#lower-content").addHash("keyboard", "content/keyboard.html");
$("#lower-content").addHash("guitar", "content/guitar.html");
$("#lower-content").addHash("bass", "content/bass.html");
$().watch();
```

Clone this repository to see the demo.

### Installing

Just download hashy-content.js and use it together with JQuery.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details.

