---
slug: 'website-refresh'
title: 'Website Refresh'
subtitle: 'Giving my old website, a new look'
category: 'Thoughts'
date: '2024-05-15'
cover_image: '/blog_images/website-refresh/plant_lifecycle.webp'
cover_image_prompt: 'A high-definition depiction of a natural lifecycle in a forest setting, suitable for a blog cover image, with a wide aspect ratio. The image illustrates the journey from seed to mature tree, featuring a progression from left to right: a small seed sprouting in rich, dark soil, a young sapling with tender leaves, a tree in full bloom with colorful flowers, and finally, an ancient tree with a thick trunk and sprawling branches, covered in moss and surrounded by fallen leaves. The lush, green forest and soft sunlight filtering through the leaves create a tranquil and detailed atmosphere.'
---

It's been more than 11 years since I last wrote a [blogpost](https://digital-madness.in/blog/2013/fast-io-in-c/). During my college days, I loved taking complex concepts and presenting them in an easy-to-digest format. I used to teach computer subjects to my friends just the night before their exam. Despite finding it easy to explain concepts on the fly, I've always struggled with putting my thoughts to written words.

As my career has progressed, I've felt the need to rekindle this passion and work on distilling and writing the things I read, learn, build and think about. My goal is not to teach you something specific, but to embark on a journey of learning and self-discovery. If you find something valuable here, that would be a wonderful bonus. As [Richard Feynman](https://en.wikipedia.org/wiki/Richard_Feynman) said,

> What I cannot create, I do not understand.

# Breaking the hiatus

Before I started writing again, I wanted a frictionless way to create beautiful blogs and publish them on my own domain, which I've owned for over 15 years but haven't updated or maintained in a long time. The [previous website](https://digital-madness.in/old_website/) was built with _HTML_, _CSS_, and _PHP_, and the blog was managed via _WordPress_. It worked fine for its time. However, as web technologies advanced and the variety of devices used to access the web expanded, it couldn't keep up and started to look outdated on different screen sizes. Writing blogs on wordpress was a hassle and its plugin management can get confusing, especially if multiple plugins are interacting with each other in complex ways

This led me to search for better programming languages, frameworks, templates, and designs. In a world where instant access to anything is just a click away, building something from scratch remains a challenge. Drawing inspiration from various designs I encountered online, I decided to rethink my technical stack.

My goal were simple and limited to:

-   Ensure the website could be hosted on a simple [Apache-base](https://httpd.apache.org/) server and managed via [cPanel's](https://en.wikipedia.org/wiki/CPanel) file-manager reducing the complexity of routing.
-   Writing new blog posts as easy as writing in [markdown](https://en.wikipedia.org/wiki/Markdown), keeping them clean, intutive and easy to read and write.
-   The webpage / application should be responsive and give a "journal" feel.

# The new technical stack

The code and content for this website are available on my [GitHub](https://github.com/chirag1992m/profile) for you to explore and perhaps use to revamp your own website. You can read further to learn how I ended up choosing the frameworks I used.

### Web Frameworks

Reading up about the modern web development, a few front-end frameworks stand out from the rest by a big margin as you can see from this usage graph from [statista](https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/). All of these frameworks/libraries/SDKs are not mutually exclusive and can be used with one another depending upon what you're building.

![image](/blog_images/website-refresh/web_frameworks_usage.png)

Let's look at the top-10 frameworks and what they do in a simple terms:

1. **Node.js**: A JavaScript runtime environment that allows you to run JavaScript code on any machine, making it essential for building applications with JavaScript frameworks.
2. **React**: A JavaScript library for building user interfaces using reusable components. Developed and maintained by facebook, it uses a declarative approach to create interactive UIs.
3. **jQuery**: A fast, small, and feature-rich JavaScript library. It simplifies HTML DOM traversal, event handling, animation, Ajax interactions, making it easier to write cross-browser compatible code.
4. **Express**: A minimal and flexible `node.js` web application framework that provides a robust set of features for web, desktop and mobile applications. It's widely used for RESTful APIs and server-side applications.
5. **Angular**: A framework for building single-page client applications using HTML and TypeScript. Developed and maintained by Google, it makes dynamic web apps with a strong emphasis on performance and scalability.
6. **Next.js**: A `React` framework that enables server-side rendering and static-website generation for `React`-based web applications. It provides a good developer experience with features like automatic code splitting, file-based routing, page layouts and hot-reloading.
7. **ASP.NET Core**: A cross-platform, high-performance framework for building modern, cloud-based, and internet-connected applications. Developed by Microsoft, it allows developers to build web apps and services, IoT apps, and mobile backends.
8. **Vue.js**: A progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, with a core library focused on the view layer only, making it easy to integrate with other projects or libraries.
9. **Wordpress**: An open-source content management system (CMS) written in PHP. It is known for its flexibility and ease of use, allowing users to create and manage websites and blogs without needing extensive programming knowledge.
10. **ASP.NET**: A framework for building web applications and services with .NET and C#. Developed by Microsoft, it provides a robust and scalable environment for creating dynamic web pages, APIs, and other online applications.

### Choosing the `right` framework

The two most used and important framework `Node.js` and `React` are probably the best choice for making the website. They provide a complete solution to build a profile and blogging website with their [intensive ecosystem](https://github.com/enaqx/awesome-react). React also supports markdown rendering with the [React-Markdown](https://github.com/remarkjs/react-markdown) library. Using `react` significantly changes how you interact with your [HTML DOM](https://www.w3schools.com/whatis/whatis_htmldom.asp), making `jQuery` slightly unnecessary. Although, a few places you would, jQuery can make that easier.

Given the requirements for hosting the application on an Apache based server, its beneficial to create a static website. Dynamic websites tend to add extra load on the server and increase server costs. Additionally, maintaining a static website eliminates the need for a database and any complex interactions, making it easier to manage as the blog grows. `Next.js` natively supports exporting the website as a static website and can easily be [hosted on Apache cPanel](https://dev.to/crishanks/deploy-host-your-react-app-with-cpanel-in-under-5-minutes-4mf6). If one needs special features like user-login, comments, likes for your website, it'll be easier to write your blog on specialized platform like [Medium](https://medium.com/) or [Substack](https://substack.com/), which offer advance editing capabilities and also help you monetize your content.

Other frameworks aren't required because they often add unnecessary complexity or overlap in functionality. `jQuery`, for instance, simplifies DOM manipulation and event handling, but modern JavaScript and CSS have largely obviated the need for it. `Angular` is powerful but can be overkill for simpler applications, introducing a steeper learning curve and additional overhead. `Express`, while excellent for server-side applications, is unnecessary if a static site architecture is chosen. `ASP.NET` and `ASP.NET Core` are robust frameworks but are tied to the `.NET` ecosystem, which may not align with a JavaScript-focused stack. `WordPress` is a versatile content-management-system (CMS) but can be heavy and less flexible for custom development needs. `Vue.js`, though flexible and easy to integrate, would introduce an additional layer of complexity without significant benefits over the chosen stack. Therefore, sticking to a streamlined set of technologies (`Node.js`, `React`, and `Next.js`) avoids redundancy and maintains a clean, efficient development process.

## Wrapping Up

It took me a few months to get here due to immense static friction, or procrastination as people call it. However, I hope to continue writing with more dilligence and discipline. _I look forward to sharing more insights and experiences with you. Stay tuned for more updates!_
