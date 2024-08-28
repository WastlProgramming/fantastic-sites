Usefull Websites 🌐
===========================

Overview ℹ️
--------

This project is a React-based template designed to display a collection of suggested websites. The list of websites is managed through a `config.json` file located in the `public` folder of the project. This template includes features such as searching and filtering the list of websites based on categories.

The project is ideal for developers looking to create a curated collection of websites, whether for personal use or as part of a larger project.

Features
--------

- **Dynamic Website List**: The list of websites is fully configurable through the `config.json` file.
- **Search Functionality**: Users can search for websites by name or description.
- **Category Filtering**: Users can filter the list of websites based on predefined categories.
- **Responsive Design**: The layout is responsive and works well on both desktop and mobile devices.

Configuring the Website List
----------------------------

The website list is managed through the `config.json` file in the `public` folder. This file includes the title, description, and an array of websites with their respective details.

Sample `config.json`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. code-block:: json
{
    "title": "Fantastic Sites",
    "description": "A collection of fantastic sites to visit",
    "sites": [
        {
            "name": "Codetogo",
            "description": "Codetogo you can find code snippets for your projects. You can also share your code snippets with others. It's a great place to find inspiration for your next project. Its is for Javascript & React",
            "status": true,
            "category": "Snippets",
            "url": "https://codetogo.io/"
        },
        {
            "name": "CSS Generator",
            "description": "Css Generator is a collection of tools for web developers. You can find tools for generating CSS, SVG, and more.",
            "status": true,
            "category": "Styling",
            "url": "https://cssgenerator.org/"
        },
        {
            "name": "GitHub",
            "description": "GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside millions of other developers.",
            "status": true,
            "category": "Development",
            "url": "https://www.github.com"
        },
        {
            "name": "MagicUi",
            "description": "MagicUi is a collection of UI components for React, Angular, and Vue.",
            "status": true,
            "category": "UI Components",
            "url": "https://magicui.design/"
        },
        {
            "name": "Mui",
            "description": "Mui is a popular React UI framework. It is a great place to find components for your next project.",
            "status": true,
            "category": "UI Components",
            "url": "https://mui.com"
        },
        {
            "name": "Stack Overflow",
            "description": "Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers.",
            "status": true,
            "category": "Development",
            "url": "https://stackoverflow.com"
        },
        {
            "name": "shapedivider.app",
            "description": "Shapedividier.app is a great place to find SVG shapes for your next project. You can customize the shapes to fit your needs.",
            "status": true,
            "category": "Styling",
            "url": "https://www.shapedivider.app/"
        }
    ]
}


Fields 
-----------------
- title: The title of the website collection.
- description: A brief description of the collection.
- sites: An array of site objects, each containing:
- - name: The name of the website.
- - description: A brief description of what the website offers.
- - status: A boolean indicating whether the site should be displayed.
- - category: The category to which the site belongs.
- - url: The URL of the website.

License
--------------------
This project is licensed under the MIT License.

.. code-block:: md

  This documentation provides a comprehensive guide on how to use and configure the website collection template. You can adjust the content according to your specific requirements.
