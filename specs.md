## Planning

- Brainstorm the problem that you want your application to solve. It's okay to take inspiration for the features you want to build from other sites or projects you've seen (it's not okay to use their code though).
    The problem: when you live with someone else, there are inevitably times when something gets put away - maybe where it shouldn't go - and then gets forgotten until someone tries to find it.  "WhereInTheHouse" is an application where multiple users in a househould can record the description or the actual identity of something they find as well as where it gets put so everyone in the house can find it when they are looking for it.
- Plan what features your app will have. You can write **User Stories** to help make it clear what you are planning to build.
    - a User can create an account
    - the first user also creates the household
    - additional users can be added to the household
    - there is a view to browse the items that have been recorded
    - there is a view to record an item that is being put away
    - there is a view to search for an item that has been put away
- Model your domain. You need to know what the nouns in your project are - the objects in the 'world' of your application. It can be helpful to draw the relationships between your models.
    - User has a username and password
    - Items has a name, description, current_location and proper_location
    - Household is a collection of users and items 
    - household_users will join users to households
- Plan how your features will work.

## Services setup
**Create rails api app:**
    rails new where-in-the-house-api --api --database=postgresql
    create backend dir and move all app files into
    create frontend dir and setup index.html and js files
**Setup Repo and initial commit**
    create repo at github.com
    git remote add origin git@github.com:roadpilot/where-in-the-house.git
    git branch -M main
    git push -u origin main
**Setup PostgreSQL**
    sudo apt-get install postgresql
    sudo service postgresql start
    sudo -u postgres createuser --superuser term
    rake db:setup

## Domain Modeling

As you turn your user stories into more clear technical specifications for features, you can start by modeling the data that your application will store and show. Identify the nouns in your stories, their properties, and their relationships.

A description of the domain for the above stories might be:

- A travel location has a name, a description, a location and an image URL
- A review has a comment and a rating
- A review belongs to one travel location (a travel location has many reviews)
- A travel location has an average rating that is calculated by its aggregate review ratings

Later on, you will be ready to create the database schema and application models corresponding to this domain.

## MVP ASAP

(Minimum Viable Product, As Soon As Possible)

Building things is hard. It's very hard to predict what will be difficult in a project. Sometimes things that appear on the surface to be easy will end up taking hours of debugging.

With that in mind, it's important to build a Minimum Viable Product (MVP) as quickly as possible. Instead of getting stuck on advanced features, start with a basic working version of the application, then steadily add features piece by piece.

## Build vertically, not horizontally

It's easy to end up having to do lots of rework and fixing depending on how you order the things you build in your application, particularly if you build 'horizontally'.

You can visualize all the parts you of an app you need to build as a grid, with the features along the x axis (columns) and the different layers of the stack along the y axis.

|                    | View Location | Browse Locations | Edit Location | Add Review | Edit Review |
| ------------------ | ------------- | ---------------- | ------------- | ---------- | ----------- |
| Styling            |               |                  |               |            |             |
| View Logic         |               |                  |               |            |             |
| Data Fetching      |               |                  |               |            |             |
| Controller actions |               |                  |               |            |             |
| Seed Data          |               |                  |               |            |             |
| Models             |               |                  |               |            |             |
| Migrations         |               |                  |               |            |             |

A strong temptation is build your project row-by-row. It _feels_ easy to start by writing all the migrations for all your models, then all the models, etc.

**Do not do this!**

If you try to build all your migrations, then all your models, then all your controllers, then all your fetch calls, then all your view logic, you will have a bad time. Inevitably, your view logic will end up requiring changes to the underlying layers, and you will write code that doesn't get used.

Instead, build **vertically**, column-by-column. Write code for all the vertical layers involved in one feature before moving on to the next feature. That way, you'll minimize rewriting, and end up with working features without waste.

The project process should look like:

- Planning: Write down your ideas (use diagrams!)
- Start by creating the frontend and backend directories
- Build the **R** from CRUD for just one model, _vertically!_ That means one migration, one model, one controller action, one `fetch` call, and one DOM update. Add seed data and confirm that your code works by testing it visually.
- Then, build the next CRUD action (maybe Create or Update), again building **vertically**.
- Continue building features one by one, (_vertically!_)
- Add feature by feature, not model by model or layer by layer.
- Test each feature, add styles, and create seed data as you go (not all at once at the end)


## Rails App with JavaScript Frontend Spec

Project Specs:
Must have a Rails Backend and new requirements implemented through JavaScript.

Makes use of ES6 features as much as possible(e.g Arrow functions, Let & Const, Constructor Functions)

Must translate the JSON responses into Javascript Model Objects using either ES6 class or constructor syntax. 

Must render at least one index page (index resource - 'list of things') via JavaScript and an Active Model Serialization JSON Backend.

Must render at least one show page (show resource - 'one specific thing') via JavaScript and an Active Model Serialization JSON Backend.

Your Rails application must reveal at least one `has-many` relationship through JSON that is then rendered to the page.

Must use your Rails application to render a form for creating a resource that is submitted dynamically through JavaScript.

At least one of the JS Model Objects must have a method on the prototype.

Project Repo Specs:
Read Me file contains:
    Application Description
    Installation guide (e.g. fork and clone repo, migrate db, bundle install, etc)
    Contributors guide (e.g. file an issue, file an issue with a pull request, etc)
    Licensing statement at the bottom (e.g. This project has been licensed under the MIT open source license.)

Repo General
    You have a large number of small Git commits
    Your commit messages are meaningful
    You made the changes in a commit that relate to the commit message
    You don't include changes in a commit that aren't related to the commit message
