# GitHub Actions Masterclass

Welcome to the **GitHub Actions Masterclass** repository! This project is designed to help you learn the basics of GitHub Actions through hands-on exercises. Whether you're just starting or looking to deepen your understanding of automating workflows in GitHub, this repository provides practical examples and clear instructions.

## What's Inside

### Exercises

<details id=1 open>
<summary><h2>Exercise 1: Create Your First Workflow</h2></summary>

In this exercise, you will create a basic workflow that runs a simple shell command.

1. Create a new file in the `.github/workflows` directory named `first-workflow.yml`.
2. Define a workflow named "First Workflow".
3. Configure it to run on every push.
4. Add a job that prints "Hello, World!" to the console.

<details id=1.1>
    <summary>
    <strong>Here's an example to get you started:</strong>
    </summary>

```yaml
name: First Workflow
on: [push]
jobs:
  hola-mundo:
    runs-on: ubuntu-latest
    steps:
      - name: Print Hello
        run: echo "Hello, World!"
```

</details>
</details>

<details id=2>
<summary><h2>Exercise 2: Set Up a Node.js Application</h2></summary>

In this exercise, you will create a workflow to set up a Node.js environment.

1. Create a new file in the `.github/workflows` directory named `node-setup.yml`.
2. Define a workflow named "Node.js Setup".
3. Configure it to run on every push.
4. Add steps to check out the repository, set up Node.js, install dependencies, and run tests.

<details id=2.1>
    <summary>
    <strong>Here's an example to get you started:</strong>
    </summary>

```yaml
name: Node.js Setup
on: [push]
jobs:
  node-setup:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```

</details>
</details>

### Workflow Files
- `.github/workflows/first-workflow.yml`: Contains the "Hello, World!" workflow example.
- `.github/workflows/node-setup.yml`: A more advanced example for automating tasks in a Node.js environment.

## How to Use This Repository
1. Clone this repository to your local machine.
2. Navigate to the `.github/workflows` directory to explore and edit the example workflows.
3. Follow the instructions in each exercise to create and execute workflows in your own GitHub repository.

## Prerequisites
- A basic understanding of Git and GitHub (commits, branches, pull requests).
- Node.js installed locally for testing the second exercise (if desired).

## Resources
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Understanding YAML Syntax](https://yaml.org/)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)

Start automating your workflows and enhancing your development process with GitHub Actions! 🚀