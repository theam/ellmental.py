
Welcome and thank you for your interest in contributing to our project! This endeavor thrives on collaboration and the unique inputs from our diverse community. Whether you're fixing bugs, suggesting enhancements, improving our documentation, or sharing ideas, your contribution is valuable to us.

Every idea, big or small, holds the potential to make a significant impact, and we're excited to see your inspirational contributions. You don't have to be an expert in coding to contribute and make a difference. Read on to find how you can participate and help us continue to expand the boundaries of our project. Welcome aboard!

## Table of Contents

- [Contributing Guide](#contributing-guide)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [Setting Up a Development Environment](#setting-up-a-development-environment)
    - [Prerequisites](#prerequisites)
    - [Getting the Source Code](#getting-the-source-code)
    - [Building the Project](#building-the-project)
    - [Importing the Project to Your IDE](#importing-the-project-to-your-ide)
    - [Running Tests](#running-tests)
  - [Reporting bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Improving documentation](#improving-documentation)
    - [Documentation principles and practices](#documentation-principles-and-practices)
      - [Principles](#principles)
      - [Practices](#practices)
  - [Create your very first GitHub issue](#create-your-very-first-github-issue)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Get in touch!](#get-in-touch)

## Code of Conduct

Everyone participating in this project is expected to abide by the [eLLMental Code of Conduct](CODE_OF_CONDUCT.md), which is based on the Contributor Covenant Code of Conduct.

If you encounter any behavior that violates our code of conduct, please send an email to `info@theagilemonkeys.com` or a direct message to any of the administrators in our official Discord server. All reports will be examined and investigated promptly and in a manner that respects the privacy and safety of the affected individual(s).

## Setting Up a Development Environment

Here's how you can prep you development environment for contributing to this [poetry](https://python-poetry.org/) project written in Python.

### Prerequisites

1. Ensure you have Python on version 3.11 (at least) installed on your local machine. This is needed to run the Python compiler. You can download it in [Python's official site](https://www.python.org/downloads/).

2. Install poetry command line tool. Refer to Poetry's [official guide](https://python-poetry.org/docs/) for installation instructions on your Operating System.

### Getting the Source Code

1. Fork the repository from the main GitHub page ([theam/ellmental.py](https://github.com/theam/ellmental.py)).

2. Clone your forked repository to your local machine.

   ```
   git clone https://github.com/<Your Username>/eLLMental.py.git
   ```

3. Navigate into the cloned repository:

   ```
   cd ellmental.py/apps
   ```

4. Based on the app abstraction you're contributing to, you can check the README.md file in the corresponding folder for
   more information on how to run the app. For example, you can modify `apps/semantic_search` project to create a new
   implementation for the `EmbeddingStore` abstraction.

### Working with the Project

1. To start running a project using poetry, run the following commands in your terminal:

   ```
     # To install dependencies from the project's pyproject.toml file
     poetry install
   ```

   ```
     # To start the project
     poetry run start
   ```

> Remember to fill .env files if needed. You can find an example of the .env file in the root of the app project. For example,  
> `apps/semantic_search/.env.example` file.

### Importing the Project to Your IDE

If you are using PyCharm, importing a Python project is as easy as File -> Open, and then open the project's folder.

### Running Tests

To ensure that your setup is working correctly, try running the existing tests in the project repository:

```
poetry run test
```

Tests may take a while to run, but if you see the first few of them passing, your setup is probably correct, so you can cancel the process or wait for all tests to pass.

That’s it! You are now all set up and ready to contribute. Remember, if you have any trouble or need further clarification with setting up the environment, don’t hesitate to reach out. We are more than happy to assist you.

## Reporting bugs

Before creating a bug report, please search for similar issues to make sure that they're not already reported. If you
don't find any, go ahead and create an issue including as many details as possible.

> If you find a Closed issue that seems related to the issues that you're experiencing, make sure to reference it in the
> body of your new one by writing its number like this => #42 (Github will auto-link it for you).

Bugs are tracked as GitHub issues. Explain the problem and include additional details to help maintainers reproduce the
problem:

- Use a clear and descriptive title for the issue to identify the problem.
- Describe the exact steps which reproduce the problem in as many details as possible.
- Provide specific examples to demonstrate the steps. Include links to files or GitHub projects, or copy/pasteable
  snippets, which you use in those examples. If you're providing snippets in the issue, use Markdown code blocks.
- Describe the behavior you observed after following the steps and point out what exactly is the problem with that
  behavior.
- Explain which behavior you expected to see instead and why.
- If the problem is related to performance or memory, include a CPU profile capture with your report.

> Remember to label the issue with a "bug" tag

## Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Make sure you provide the following information:

- Use a clear and descriptive title for the issue to identify the suggestion.
- Provide a step-by-step description of the suggested enhancement in as many details as possible.
- Provide specific examples to demonstrate the steps. Include copy/pasteable snippets which you use in those examples,
  as Markdown code blocks.
- Describe the current behavior and explain which behavior you expected to see instead and why.
- Explain why this enhancement would be useful to most eLLMental users and isn't something that can or should be
  implemented as a community package.
- List some other libraries or frameworks where this enhancement exists.

> Remember to label the issue with an "enhancement" tag

## Improving documentation

[eLLMental documentation](https://python.ellmental.com) is treated as a live document that continues improving on a daily basis. **If you find something that is missing or can be improved, please contribute**, it will be of great help for other developers.
To contribute you can use the button "Edit in GitHub" at the top of each chapter.

## Principles

The ultimate goal of a technical document is to **translate the knowledge from the technology creators into the reader's mind** so that they learn. The challenging
part here is the one in which they learn. It is challenging because, under the same amount of information, a person can suffer an information overload because
we (humans) don't have the same information-processing capacity. That idea is going to work as our compass, it should drive our efforts so people with less
capacity is still able to follow and understand our documentation.

To achieve our goal we propose **writing documentation following these principles:**

|                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| :heavy_check_mark: **Clean and Clear** | Less is more. Apple is, among many others, a good example of creating clean and clear content, where visual elements are carefully chosen to look beautiful (e.g. [Apple's swift UI](https://developer.apple.com/tutorials/swiftui)) and making the reader getting the point as soon as possible. <br></br> <br></br> The intention of every section, paragraph, and sentence must be clear, we should avoid writing details of two different things even when they are related.It is better to link pages and keep the focus and the intention clear, Wikipedia is the best example on this. |
| :ok_hand: **Simple**                   | Technical writings deal with different backgrounds and expertise from the readers. We should not assume the reader knows everything we are talking about but we should not explain everything in the same paragraph or section. Every section has a goal to stick to the goal and link to internal or external resources to go deeper. <br></br> <br></br> Diagrams are great tools, you know a picture is worth more than a thousand words unless that picture contains too much information. Keep it simple intentionally omitting details.                                                 |
| :100: **Coherent**                     | The documentation tells a story. Every section should integrate naturally without making the reader switch between different contexts. Text, diagrams, and code examples should support each other without introducing abrupt changes breaking the reader’s flow. Also, the font, colors, diagrams, code samples, animations, and all the visual elements we include, should support the story we are telling.                                                                                                                                                                                | 
| :dart: **Explicit**                    | Go straight to the point without assuming the readers should know about something. Again, link internal or external resources to clarify. <br></br> <br></br> The index of the whole content must be visible all the time so the reader knows exactly where they are and what is left.                                                                                                                                                                                                                                                                                                        |
| :heart_eyes: **Attractive**            | Our text must be nice to read, our diagrams delectable to see, and our site… a feast for the eyes!!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :link: **Inclusive**                   | Everybody should understand our writings, especially the topics at the top. We have arranged the documentation structure in a way that anybody can dig deeper by just going down so, sections 1 to 4 must be suitable for all ages. <br></br> <br></br> Use gender-neutral language to avoid the use of he, him, his to refer to undetermined gender. It is better to use their or they as a gender-neutralapproach than s/he or similars.                                                                                                                                                    |
| :writing_hand: **Cohesive**            | Writing short and concise sentences is good, but remember to use proper connectors (“Therefore”, “Besides”, “However”, “thus”, etc) that provide a sense of continuation to the whole paragraph. If not, when people read the paragraphs, their internal voice sounds like a robot with unnatural stops.                                                                                                                                                                                                                                                                                      |



## Practices

There are many writing styles depending on the type of document. It is common within technical and scientific writing to use Inductive and/or Deductive styles
for paragraphs. They have different outcomes and one style may suit better in one case or another, that is why it is important to know them, and decide which
one to use in every moment. Let’s see the difference with 2 recursive examples.

**Deductive paragraphs ease the reading for advanced users but still allows you to elaborate on ideas and concepts for newcomers**. In deductive paragraphs,
the conclusions or definitions appear at the beginning, and then, details, facts, or supporting phrases complete the paragraph’s idea. By placing the
conclusion in the first sentence, the reader immediately identifies the main point so they can decide to skip the whole paragraph or keep reading.
If you take a look at the structure of this paragraph, it is deductive.

On the other hand, if you want to drive the readers' attention and play with it as if they were in a roller coaster, you can do so by using a different approach.
In that approach, you first introduce the facts and ideas and then you wrap them with a conclusion. This style is more narrative and forces the reader to
continue because the main idea is diluted in the whole paragraph. Once all the ideas are placed together, you can finally conclude the paragraph. **This style is
called Inductive.**

The first paragraph is deductive and the last one is inductive. In general, it is better to use the deductive style, but if we stick to one, our writing will start looking weird and maybe boring.
So decide one or another being conscious about your intention.

## Create your very first GitHub issue

[Click here](https://github.com/theam/ellmental.py/issues/new) to start making contributions to eLLMental.

## Your First Code Contribution

Unsure where to begin contributing to eLLMental? You can start by looking through issued tagged as `good-first-issue` and `help-wanted`:

- Beginner issues - issues which should only require a few lines of code, and a test or two.
- Help wanted issues - issues which should be a bit more involved than beginner issues.

Both issue lists are sorted by the total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

Once you've chosen an issue to work on, please assign it to yourself. This helps communicate your intention to contribute and reduces the chance of duplicate work.

## Get in touch!

If you feel lost, don't hesitate to reach out the core team. You can connect with us via email writing to [info@theagilemonkeys.com](mailto:info@theagilemonkeys.com), or joining our official Discord server. We will be more than happy to hear about you!
