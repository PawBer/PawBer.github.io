---
layout: index.njk
eleventyNavigation:
  key: Blog
  order: 2
pagination:
  data: collections.post
  size: 10
  reverse: true
  alias: posts
---
{% for post in posts %}
  <article>
    <h1>
      <a href="{{ post.url | url }}">{{ post.data.title }}</a>
    </h1>
    <time datetime="{{ post.date }}">{{ post.date | dateReadable }}</time>
  </article>
{% endfor %}