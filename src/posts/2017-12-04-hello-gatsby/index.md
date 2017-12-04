---
path: "/blog/first-gatsby-post"
date: "2017-12-04"
title: "My First Post Using Gatsby"
tags: [foo,hello-world]
---

This is a test post. It is my first post using the [React](https://reactjs.org) based static-site generator [Gatsby](https://www.gatsbyjs.org).

```javascript
// does code formatting work?
// syntax highlighting?
import { addIndex, map } from 'redux'

const data = [
  'one',
  'two',
  'three'
]

const mapWithIndex = addIndex(map)
const presenter = (item, idx) => `${idx}: ${item}`

console.log(mapWithIndex(presenter, data))
```

Do images work well? Here is a picture of a fish:

![Fish](./pietro-jeng-266042.jpg "A Fish")
